//    THE SAMPLE SOLUTION IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//    SOFTWARE

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------



namespace AutoCoE.Extensibility.Plugins
{
    [System.Runtime.Serialization.DataContractAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("CrmSvcUtil", "9.1.0.82")]
    public enum flowmachineState
    {

        [System.Runtime.Serialization.EnumMemberAttribute()]
        Active = 0,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        Inactive = 1,
    }

    [System.Runtime.Serialization.DataContractAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("CrmSvcUtil", "9.1.0.82")]
    public enum flowmachine_statuscode
    {

        [System.Runtime.Serialization.EnumMemberAttribute()]
        Active = 1,

        [System.Runtime.Serialization.EnumMemberAttribute()]
        Inactive = 2,
    }

    /// <summary>
    /// 
    /// </summary>
    [System.Runtime.Serialization.DataContractAttribute()]
    [Microsoft.Xrm.Sdk.Client.EntityLogicalNameAttribute("flowmachine")]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("CrmSvcUtil", "9.1.0.82")]
    public partial class flowmachine : Microsoft.Xrm.Sdk.Entity, System.ComponentModel.INotifyPropertyChanging, System.ComponentModel.INotifyPropertyChanged
    {

        /// <summary>
        /// Default Constructor.
        /// </summary>
        public flowmachine() :
                base(EntityLogicalName)
        {
        }

        public const string EntityLogicalName = "flowmachine";

        public const string EntityLogicalCollectionName = "flowmachines";

        public const string EntitySetName = "flowmachines";

        public const int EntityTypeCode = 10045;

        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;

        public event System.ComponentModel.PropertyChangingEventHandler PropertyChanging;

        private void OnPropertyChanged(string propertyName)
        {
            if ((this.PropertyChanged != null))
            {
                this.PropertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }

        private void OnPropertyChanging(string propertyName)
        {
            if ((this.PropertyChanging != null))
            {
                this.PropertyChanging(this, new System.ComponentModel.PropertyChangingEventArgs(propertyName));
            }
        }

        /// <summary>
        /// Version installed on the machine
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("agentversion")]
        public string AgentVersion
        {
            get
            {
                return this.GetAttributeValue<string>("agentversion");
            }
            set
            {
                this.OnPropertyChanging("AgentVersion");
                this.SetAttributeValue("agentversion", value);
                this.OnPropertyChanged("AgentVersion");
            }
        }

        /// <summary>
        /// For Internal Use Only.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("connectivityconfiguration")]
        public string ConnectivityConfiguration
        {
            get
            {
                return this.GetAttributeValue<string>("connectivityconfiguration");
            }
            set
            {
                this.OnPropertyChanging("ConnectivityConfiguration");
                this.SetAttributeValue("connectivityconfiguration", value);
                this.OnPropertyChanged("ConnectivityConfiguration");
            }
        }

        /// <summary>
        /// Unique identifier of the user who created the record.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdby")]
        public Microsoft.Xrm.Sdk.EntityReference CreatedBy
        {
            get
            {
                return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("createdby");
            }
        }

        /// <summary>
        /// Date and time when the record was created.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdon")]
        public System.Nullable<System.DateTime> CreatedOn
        {
            get
            {
                return this.GetAttributeValue<System.Nullable<System.DateTime>>("createdon");
            }
        }

        /// <summary>
        /// Unique identifier of the delegate user who created the record.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdonbehalfby")]
        public Microsoft.Xrm.Sdk.EntityReference CreatedOnBehalfBy
        {
            get
            {
                return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("createdonbehalfby");
            }
        }

        /// <summary>
        /// Description of the Flow Machine.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("description")]
        public string Description
        {
            get
            {
                return this.GetAttributeValue<string>("description");
            }
            set
            {
                this.OnPropertyChanging("Description");
                this.SetAttributeValue("description", value);
                this.OnPropertyChanged("Description");
            }
        }

        /// <summary>
        /// Group of this Flow Machine.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("flowmachinegroupid")]
        public Microsoft.Xrm.Sdk.EntityReference FlowMachineGroupId
        {
            get
            {
                return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("flowmachinegroupid");
            }
            set
            {
                this.OnPropertyChanging("FlowMachineGroupId");
                this.SetAttributeValue("flowmachinegroupid", value);
                this.OnPropertyChanged("FlowMachineGroupId");
            }
        }

        /// <summary>
        /// Unique identifier for entity instances
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("flowmachineid")]
        public System.Nullable<System.Guid> flowmachineId
        {
            get
            {
                return this.GetAttributeValue<System.Nullable<System.Guid>>("flowmachineid");
            }
        }

        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("flowmachineid")]
        public override System.Guid Id
        {
            get
            {
                return base.Id;
            }
            set
            {
                base.Id = value;
            }
        }

        /// <summary>
        /// Sequence number of the import that created this record.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("importsequencenumber")]
        public System.Nullable<int> ImportSequenceNumber
        {
            get
            {
                return this.GetAttributeValue<System.Nullable<int>>("importsequencenumber");
            }
            set
            {
                this.OnPropertyChanging("ImportSequenceNumber");
                this.SetAttributeValue("importsequencenumber", value);
                this.OnPropertyChanged("ImportSequenceNumber");
            }
        }

        /// <summary>
        /// For Internal Use Only.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("machinemetadata")]
        public string MachineMetadata
        {
            get
            {
                return this.GetAttributeValue<string>("machinemetadata");
            }
            set
            {
                this.OnPropertyChanging("MachineMetadata");
                this.SetAttributeValue("machinemetadata", value);
                this.OnPropertyChanged("MachineMetadata");
            }
        }

        /// <summary>
        /// Unique identifier of the user who modified the record.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedby")]
        public Microsoft.Xrm.Sdk.EntityReference ModifiedBy
        {
            get
            {
                return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("modifiedby");
            }
        }

        /// <summary>
        /// Date and time when the record was modified.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedon")]
        public System.Nullable<System.DateTime> ModifiedOn
        {
            get
            {
                return this.GetAttributeValue<System.Nullable<System.DateTime>>("modifiedon");
            }
        }

        /// <summary>
        /// Unique identifier of the delegate user who modified the record.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedonbehalfby")]
        public Microsoft.Xrm.Sdk.EntityReference ModifiedOnBehalfBy
        {
            get
            {
                return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("modifiedonbehalfby");
            }
        }

        /// <summary>
        /// The Name of the Flow Machine.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("name")]
        public string name
        {
            get
            {
                return this.GetAttributeValue<string>("name");
            }
            set
            {
                this.OnPropertyChanging("name");
                this.SetAttributeValue("name", value);
                this.OnPropertyChanged("name");
            }
        }

        /// <summary>
        /// Date and time that the record was migrated.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("overriddencreatedon")]
        public System.Nullable<System.DateTime> OverriddenCreatedOn
        {
            get
            {
                return this.GetAttributeValue<System.Nullable<System.DateTime>>("overriddencreatedon");
            }
            set
            {
                this.OnPropertyChanging("OverriddenCreatedOn");
                this.SetAttributeValue("overriddencreatedon", value);
                this.OnPropertyChanged("OverriddenCreatedOn");
            }
        }

        /// <summary>
        /// Owner Id
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("ownerid")]
        public Microsoft.Xrm.Sdk.EntityReference OwnerId
        {
            get
            {
                return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("ownerid");
            }
            set
            {
                this.OnPropertyChanging("OwnerId");
                this.SetAttributeValue("ownerid", value);
                this.OnPropertyChanged("OwnerId");
            }
        }

        /// <summary>
        /// Unique identifier for the business unit that owns the record
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owningbusinessunit")]
        public Microsoft.Xrm.Sdk.EntityReference OwningBusinessUnit
        {
            get
            {
                return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("owningbusinessunit");
            }
        }

        /// <summary>
        /// Unique identifier for the team that owns the record.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owningteam")]
        public Microsoft.Xrm.Sdk.EntityReference OwningTeam
        {
            get
            {
                return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("owningteam");
            }
        }

        /// <summary>
        /// Unique identifier for the user that owns the record.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owninguser")]
        public Microsoft.Xrm.Sdk.EntityReference OwningUser
        {
            get
            {
                return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("owninguser");
            }
        }

        /// <summary>
        /// Maximum Number of session in parallel.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("sessioncapacity")]
        public System.Nullable<int> SessionCapacity
        {
            get
            {
                return this.GetAttributeValue<System.Nullable<int>>("sessioncapacity");
            }
            set
            {
                this.OnPropertyChanging("SessionCapacity");
                this.SetAttributeValue("sessioncapacity", value);
                this.OnPropertyChanged("SessionCapacity");
            }
        }

        /// <summary>
        /// Status of the Flow Machine
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("statecode")]
        public System.Nullable<AutoCoE.Extensibility.Plugins.flowmachineState> statecode
        {
            get
            {
                Microsoft.Xrm.Sdk.OptionSetValue optionSet = this.GetAttributeValue<Microsoft.Xrm.Sdk.OptionSetValue>("statecode");
                if ((optionSet != null))
                {
                    return ((AutoCoE.Extensibility.Plugins.flowmachineState)(System.Enum.ToObject(typeof(AutoCoE.Extensibility.Plugins.flowmachineState), optionSet.Value)));
                }
                else
                {
                    return null;
                }
            }
            set
            {
                this.OnPropertyChanging("statecode");
                if ((value == null))
                {
                    this.SetAttributeValue("statecode", null);
                }
                else
                {
                    this.SetAttributeValue("statecode", new Microsoft.Xrm.Sdk.OptionSetValue(((int)(value))));
                }
                this.OnPropertyChanged("statecode");
            }
        }

        /// <summary>
        /// Reason for the status of the Flow Machine
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("statuscode")]
        public System.Nullable<AutoCoE.Extensibility.Plugins.flowmachine_statuscode> statuscode
        {
            get
            {
                Microsoft.Xrm.Sdk.OptionSetValue optionSet = this.GetAttributeValue<Microsoft.Xrm.Sdk.OptionSetValue>("statuscode");
                if ((optionSet != null))
                {
                    return ((AutoCoE.Extensibility.Plugins.flowmachine_statuscode)(System.Enum.ToObject(typeof(AutoCoE.Extensibility.Plugins.flowmachine_statuscode), optionSet.Value)));
                }
                else
                {
                    return null;
                }
            }
            set
            {
                this.OnPropertyChanging("statuscode");
                if ((value == null))
                {
                    this.SetAttributeValue("statuscode", null);
                }
                else
                {
                    this.SetAttributeValue("statuscode", new Microsoft.Xrm.Sdk.OptionSetValue(((int)(value))));
                }
                this.OnPropertyChanged("statuscode");
            }
        }

        /// <summary>
        /// For internal use only.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("timezoneruleversionnumber")]
        public System.Nullable<int> TimeZoneRuleVersionNumber
        {
            get
            {
                return this.GetAttributeValue<System.Nullable<int>>("timezoneruleversionnumber");
            }
            set
            {
                this.OnPropertyChanging("TimeZoneRuleVersionNumber");
                this.SetAttributeValue("timezoneruleversionnumber", value);
                this.OnPropertyChanged("TimeZoneRuleVersionNumber");
            }
        }

        /// <summary>
        /// Time zone code that was in use when the record was created.
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("utcconversiontimezonecode")]
        public System.Nullable<int> UTCConversionTimeZoneCode
        {
            get
            {
                return this.GetAttributeValue<System.Nullable<int>>("utcconversiontimezonecode");
            }
            set
            {
                this.OnPropertyChanging("UTCConversionTimeZoneCode");
                this.SetAttributeValue("utcconversiontimezonecode", value);
                this.OnPropertyChanged("UTCConversionTimeZoneCode");
            }
        }

        /// <summary>
        /// Version Number
        /// </summary>
        [Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("versionnumber")]
        public System.Nullable<long> VersionNumber
        {
            get
            {
                return this.GetAttributeValue<System.Nullable<long>>("versionnumber");
            }
        }
    }
}