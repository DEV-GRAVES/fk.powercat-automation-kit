//    MIT License

//    Permission is hereby granted, free of charge, to any person obtaining a copy
//    of this software and associated documentation files (the "Software"), to deal
//    in the Software without restriction, including without limitation the rights
//    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//    copies of the Software, and to permit persons to whom the Software is
//    furnished to do so, subject to the following conditions:

//    The above copyright notice and this permission notice shall be included in all
//    copies or substantial portions of the Software.

//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//    SOFTWARE

using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using AutoCoE.Extensibility.Plugins.DataModel;
using AutoCoE.Extensibility.Plugins.PluginHelper;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;

namespace AutoCoE.Extensibility.Plugins
{

    /// <summary>
    /// DesktopFlowDefinitionUpdate Plugin.
    /// </summary>    
    public class DesktopFlowDefinitionUpdate : PluginBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DesktopFlowDefinitionUpdate"/> class.
        /// </summary>
        /// <param name="unsecure">Contains public (unsecured) configuration information.</param>
        /// <param name="secure">Contains non-public (secured) configuration information. 
        /// When using Microsoft Dynamics 365 for Outlook with Offline Access, 
        /// the secure string is not passed to a plug-in that executes while the client is offline.</param>
        public DesktopFlowDefinitionUpdate(string unsecure, string secure)
            : base(typeof(DesktopFlowDefinitionUpdate))
        {
        }


        /// <summary>
        /// Main entry point for he business logic that the plug-in is to execute.
        /// </summary>
        /// <param name="localContext">The <see cref="LocalPluginContext"/> which contains the
        /// <see cref="IPluginExecutionContext"/>,
        /// <see cref="IOrganizationService"/>
        /// and <see cref="ITracingService"/>
        /// </param>
        /// <remarks>
        /// For improved performance, Microsoft Dynamics 365 caches plug-in instances.
        /// The plug-in's Execute method should be written to be stateless as the constructor
        /// is not called for every invocation of the plug-in. Also, multiple system threads
        /// could execute the plug-in at the same time. All per invocation state information
        /// is stored in the context. This means that you should not use global variables in plug-ins.
        /// </remarks>
        protected override void ExecuteCdsPlugin(ILocalPluginContext localContext)
        {
            if (localContext == null)
            {
                throw new InvalidPluginExecutionException(nameof(localContext));
            }
            // Obtain the tracing service
            ITracingService tracingService = localContext.TracingService;

            try
            {
                // Obtain the execution context from the service provider.  
                IPluginExecutionContext context = (IPluginExecutionContext)localContext.PluginExecutionContext;

                // Obtain the organization service reference for web service calls.  
                IOrganizationService currentUserService = localContext.CurrentUserService;

                // PreOperation stage
                if (context.MessageName.ToLower().Equals("autocoe_desktopflowdefinitionanalysis") && context.Stage.Equals(30))
                {
                    try
                    {
                        if (!context.InputParameters.Contains("DesktopFlowDefinitionId"))
                            throw new InvalidPluginExecutionException($"We couldn't find a valid Desktop Flow Definition Id in the context.InputParameters Collection.");

                        if (!context.InputParameters.Contains("StoreExtractedScript"))
                            throw new InvalidPluginExecutionException($"We couldn't find a valid StoreExtractedScript parameter value in the context.InputParameters Collection.");

                        autocoe_DesktopFlowDefinition desktopFlowDefEntity = currentUserService.Retrieve(autocoe_DesktopFlowDefinition.EntityLogicalName,Guid.Parse(context.InputParameters["DesktopFlowDefinitionId"].ToString()), new ColumnSet(true)).ToEntity<autocoe_DesktopFlowDefinition>();
                        bool storeExtractedScript = (bool)context.InputParameters["StoreExtractedScript"];

                        if (desktopFlowDefEntity == null) 
                            throw new InvalidPluginExecutionException($"We couldn't find a valid Desktop Flow Definition for Desktop Flow Definition Id: {context.InputParameters["DesktopFlowDefinitionId"]}.");

                        tracingService.Trace($"Automation CoE - DesktopFlowDefinitionScriptExtraction - Desktop Flow Id: {desktopFlowDefEntity.Id} ");
                        
                        string desktopFlowScript = string.Empty;

                        if (desktopFlowDefEntity.autocoe_DesktopFlow != null)
                        {
                            string desktopFlowZip = PluginUtility.GetDesktopFlowScriptById(desktopFlowDefEntity.autocoe_DesktopFlow.Id, currentUserService);

                            if (!string.IsNullOrWhiteSpace(desktopFlowZip))
                            {
                                // Unpack and extract Desktop flow script
                                string desktopFlowScriptWithVars = PluginUtility.ExtractDesktopFlowScript(desktopFlowZip, true);

                                // Get cleaned-up script without input and output variables
                                desktopFlowScript = PluginUtility.RemoveVariablesFromDesktopFlowScript(desktopFlowScriptWithVars);

                                // Create log entry with a preview of the extraction
                                if (desktopFlowScript.Length >= 100) // kotesh added condition to fix, when script found below 100 chars
                                    tracingService.Trace($"Automation CoE - DesktopFlowDefinitionScriptExtraction - Extracted PAD Script from Clientdata Package (Preview): {desktopFlowScript.Substring(0, 100)}");

                                // Check and add the script property to the entity if it doesn't already exist
                                if (!desktopFlowDefEntity.Attributes.Contains("autocoe_desktopflow"))
                                    desktopFlowDefEntity.Attributes.Add("autocoe_script", "");

                                // Shall we store the desktop flow script together with the DLP Profile?
                                // If you don't want to have the option at all just remove this section and the Custom API Request Paramter "StoreExtractedScript"
                                if (storeExtractedScript) {

                                    // The Desktop flow script might include special character that need to be removed before storing in Dataverse
                                    //      Exception details you might see otherwise:
                                    //      ErrorCode: 0x80040278
                                    //      Message: Invalid character in field 'autocoe_script': '', hexadecimal value 0x0B, is an invalid character.
                                    string cleanedUpDesktopFlowScript = PluginUtility.CleanInvalidChars(desktopFlowScript);
                                    desktopFlowScript = cleanedUpDesktopFlowScript;

                                    // Chek if the script text has exceeded the maximum Dataverse field length and trim it if needed
                                    if (!String.IsNullOrWhiteSpace(desktopFlowScript) && desktopFlowScript.Length <= 1048576 /*Max field length in Dataverse*/)
                                        desktopFlowDefEntity.Attributes["autocoe_script"] = desktopFlowScript;
                                    else if ((!String.IsNullOrWhiteSpace(desktopFlowScript) && desktopFlowScript.Length > 1048576))
                                        desktopFlowDefEntity.Attributes["autocoe_script"] = desktopFlowScript.Substring(0, 1048572) + "...";
                                    else
                                        desktopFlowDefEntity.Attributes["autocoe_script"] = desktopFlowScript;

                                    currentUserService.Update(desktopFlowDefEntity);
                                }
                                else {
                                    // Since we're already processing this record, let's check and clear the desktop flow field in case there was a script value specified
                                    if (!string.IsNullOrWhiteSpace(desktopFlowDefEntity.autocoe_Script))
                                    { 
                                        desktopFlowDefEntity.Attributes["autocoe_script"] = "";
                                        currentUserService.Update(desktopFlowDefEntity);
                                    }
                                }
                                GenerateDesktopFlowDLPProfile(currentUserService, desktopFlowScript, desktopFlowDefEntity.Id);

                                tracingService.Trace($"Automation CoE - DesktopFlowDefinitionScriptExtraction - Updated Desktop Flow Definition for : {desktopFlowDefEntity.Id}-{desktopFlowDefEntity.autocoe_DesktopFlow.Name}");
                            }
                            else
                            {
                                tracingService.Trace($"Automation CoE - DesktopFlowDefinitionScriptExtraction - We couldn't find a valid Desktop Flow Definition for Desktop Flow Id: {desktopFlowDefEntity.Id}.");
                                throw new InvalidPluginExecutionException($"We couldn't find a valid Desktop Flow Definition for Desktop Flow Id: {desktopFlowDefEntity.Id}.");
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        tracingService.Trace($"Automation CoE - DesktopFlowDefinitionScriptExtraction Exception: {ex.ToString()}");
                        throw new InvalidPluginExecutionException("An error occurred in DesktopFlowDefinitionScriptExtraction.", ex);
                    }
                }
                else
                {
                    tracingService.Trace("Automation CoE - DesktopFlowDefinitionScriptExtraction plug-in is not associated with the expected message or is not registered for the main operation.");
                }
            }
            catch (Exception ex)
            {
                tracingService?.Trace($"An error occurred executing Plugin AutoCoE.Extensibility.Plugins.DataModel.DesktopFlowDefinitionScriptExtraction : {ex.ToString()}");
                throw new InvalidPluginExecutionException("An error occurred executing Plugin AutoCoE.Extensibility.Plugins.DataModel.DesktopFlowDefinitionScriptExtraction .", ex);
            }
        }

        private void GenerateDesktopFlowDLPProfile(IOrganizationService currentUserService, string desktopFlowScript, Guid desktopFlowDefId) {
            QueryExpression query = new QueryExpression(autocoe_DesktopFlowAction.EntityLogicalName);
            query.ColumnSet.AllColumns = true;

            EntityCollection desktopFlowActionList = currentUserService.RetrieveMultiple(query);

            autocoe_DesktopFlowDefinition desktopFlowDefinition = currentUserService.Retrieve(autocoe_DesktopFlowDefinition.EntityLogicalName, desktopFlowDefId, new ColumnSet(true)).ToEntity<autocoe_DesktopFlowDefinition>();          

            List<string> availableActions = new List<string>();

            foreach (autocoe_DesktopFlowAction action in desktopFlowActionList.Entities) {
                int regExMatchCount = PluginUtility.FindStringOccurrencesWithRegEx(desktopFlowScript, @"(" + action.autocoe_SelectorId + @"\b)", true);

                // Only if we find an occurance
                if (regExMatchCount > 0)
                {
                    QueryExpression dfdQuery = new QueryExpression(autocoe_DesktopFlowDLPImpactProfile.EntityLogicalName);
                    dfdQuery.ColumnSet.AllColumns = true;
                    dfdQuery.Criteria.AddCondition("autocoe_desktopflowdefinition", ConditionOperator.Equal, desktopFlowDefinition.Id);

                    var dlpProfs = currentUserService.RetrieveMultiple(dfdQuery).Entities.Select(a => a.ToEntity<autocoe_DesktopFlowDLPImpactProfile>()).ToList();

                    if (dlpProfs.Where(
                        d => d.autocoe_DesktopFlowId == desktopFlowDefinition.autocoe_DesktopFlow.Id.ToString() &&
                        d.autocoe_SelectorId == action.autocoe_SelectorId &&
                        d.autocoe_ModuleName == action.autocoe_ModuleName &&
                        d.autocoe_ModuleSource == action.autocoe_ModuleSource &&
                        d.autocoe_OccurrenceCount == regExMatchCount).FirstOrDefault() != null)
                        continue; // Nothing change, so no need to upsert anything

                    // used later for an outer join select
                    availableActions.Add(action.autocoe_SelectorId);

                    KeyAttributeCollection keyColl = new KeyAttributeCollection();
                    keyColl.Add("autocoe_desktopflowid", desktopFlowDefinition.autocoe_DesktopFlow.Id.ToString());
                    keyColl.Add("autocoe_selectorid", action.autocoe_SelectorId);

                    //use alternate key for DLP Profile record
                    autocoe_DesktopFlowDLPImpactProfile dlpProfile = new Entity(autocoe_DesktopFlowDLPImpactProfile.EntityLogicalName, keyColl).ToEntity<autocoe_DesktopFlowDLPImpactProfile>();

                    dlpProfile.autocoe_ActionName = action.autocoe_ActionName;
                    dlpProfile.autocoe_ModuleSource = action.autocoe_ModuleSource;
                    dlpProfile.autocoe_ModuleName = action.autocoe_ModuleName;
                    dlpProfile.autocoe_SelectorId = action.autocoe_SelectorId;
                    dlpProfile.autocoe_ActionRecordId = action.Id.ToString();
                    dlpProfile.autocoe_DesktopFlowName = desktopFlowDefinition.autocoe_DesktopFlow.Name;
                    dlpProfile.autocoe_EnvironmentId = desktopFlowDefinition.autocoe_EnvironmentId;
                    dlpProfile.autocoe_OccurrenceCount = regExMatchCount;
                    dlpProfile.autocoe_DesktopFlowDefinition = desktopFlowDefinition.ToEntityReference();

                    UpsertRequest request = new UpsertRequest() { Target = dlpProfile };

                    try
                    {
                        // Execute UpsertRequest and obtain UpsertResponse. 
                        UpsertResponse response = (UpsertResponse)currentUserService.Execute(request);
                    }

                    // Catch any service fault exceptions that Dataverse throws.
                    catch (FaultException<OrganizationServiceFault> ex)
                    {
                        throw new InvalidPluginExecutionException("Error occured during DLP Impact profile generation: ", ex);
                    }
                }
            }

            // check if we have an old profile record to be cleaned-up
            QueryExpression orphanQuery = new QueryExpression(autocoe_DesktopFlowDLPImpactProfile.EntityLogicalName);
            orphanQuery.ColumnSet.AddColumns("autocoe_desktopflowdlpimpactprofileid");
            if (availableActions.Count() > 0)//kotesh modified on 8/19/2022
                orphanQuery.Criteria.AddCondition("autocoe_selectorid", ConditionOperator.NotIn, availableActions.ToArray());
            
            orphanQuery.Criteria.AddCondition("autocoe_desktopflowid", ConditionOperator.Equal, desktopFlowDefinition.autocoe_DesktopFlow.Id.ToString());

            EntityCollection orphanedImpactLogs = currentUserService.RetrieveMultiple(orphanQuery);

            foreach (Entity item in orphanedImpactLogs.Entities)
            {
                try
                {
                    // Delete orphaned action logs. 
                    currentUserService.Delete(item.LogicalName, item.Id);
                }

                // Catch any service fault exceptions that Dataverse throws.
                catch (FaultException<OrganizationServiceFault> ex)
                {
                    throw new InvalidPluginExecutionException("Error occured during deletion of orphaned DLP Impact profile acion logs: ", ex);
                }
            }
        }
    }
}