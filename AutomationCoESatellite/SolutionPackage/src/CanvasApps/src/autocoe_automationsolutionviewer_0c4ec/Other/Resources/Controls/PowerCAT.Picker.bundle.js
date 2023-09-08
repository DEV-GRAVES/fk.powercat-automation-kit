/*! For license information please see bundle.js.LICENSE.txt */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Picker:()=>pe});const o=React;var r=e.n(o);const n=FluentUIReactv8290;var i={root:"ms-BasePicker",text:"ms-BasePicker-text",itemsWrapper:"ms-BasePicker-itemsWrapper",input:"ms-BasePicker-input"};class s extends n.BasePicker{constructor(e){super(e),(0,n.initializeComponentRef)(this)}updateSuggestions(e){this.suggestionStore.updateSuggestions(e,this.props.acceptFreeText?-1:0),this.forceUpdate()}}var a=(0,n.styled)(s,(function(e){var{className:t,theme:o,isFocused:r,inputClassName:s,disabled:a}=e;if(!o)throw new Error("theme is undefined or null in base BasePicker getStyles function.");var{semanticColors:c,effects:l,fonts:u}=o,{inputBorder:d,inputBorderHovered:h,inputFocusBorderAlt:g}=c,m=(0,n.getGlobalClassNames)(i,o),v="rgba(218, 218, 218, 0.29)";return{root:[m.root,t],text:[m.text,{display:"flex",position:"relative",flexWrap:"wrap",alignItems:"center",boxSizing:"border-box",minWidth:180,minHeight:30,border:"1px solid ".concat(d),borderRadius:l.roundedCorner2},!r&&!a&&{selectors:{":hover":{borderColor:h}}},r&&!a&&(0,n.getInputFocusStyle)(g,l.roundedCorner2),a&&{borderColor:v,selectors:{":after":{content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,background:v},[n.HighContrastSelector]:{borderColor:"GrayText",selectors:{":after":{background:"none"}}}}}],itemsWrapper:[m.itemsWrapper,{display:"flex",flexWrap:"wrap",maxWidth:"100%"}],input:[m.input,u.medium,{height:30,border:"none",flexGrow:1,outline:"none",padding:"0 6px 0",alignSelf:"flex-end",borderRadius:l.roundedCorner2,backgroundColor:"transparent",color:c.inputText,selectors:{"::-ms-clear":{display:"none"}}},s],screenReaderText:n.hiddenContentStyle}}),void 0,{scope:"TagPicker"}),c=void 0;try{c=window}catch(e){}var l=function(){return l=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)};Object.create,Object.create;var u,d="undefined"!=typeof navigator&&/rv:11.0/.test(navigator.userAgent),h={};try{h=window||{}}catch(e){}var g=function(){function e(e,t){var o,r,n,i,s,a;this._rules=[],this._preservedRules=[],this._counter=0,this._keyToClassName={},this._onInsertRuleCallbacks=[],this._onResetCallbacks=[],this._classNameToArgs={},this._config=l({injectionMode:"undefined"==typeof document?0:1,defaultPrefix:"css",namespace:void 0,cspSettings:void 0},e),this._classNameToArgs=null!==(o=null==t?void 0:t.classNameToArgs)&&void 0!==o?o:this._classNameToArgs,this._counter=null!==(r=null==t?void 0:t.counter)&&void 0!==r?r:this._counter,this._keyToClassName=null!==(i=null!==(n=this._config.classNameCache)&&void 0!==n?n:null==t?void 0:t.keyToClassName)&&void 0!==i?i:this._keyToClassName,this._preservedRules=null!==(s=null==t?void 0:t.preservedRules)&&void 0!==s?s:this._preservedRules,this._rules=null!==(a=null==t?void 0:t.rules)&&void 0!==a?a:this._rules}return e.getInstance=function(){if(!(u=h.__stylesheet__)||u._lastStyleElement&&u._lastStyleElement.ownerDocument!==document){var t=(null==h?void 0:h.FabricConfig)||{},o=new e(t.mergeStyles,t.serializedStylesheet);u=o,h.__stylesheet__=o}return u},e.prototype.serialize=function(){return JSON.stringify({classNameToArgs:this._classNameToArgs,counter:this._counter,keyToClassName:this._keyToClassName,preservedRules:this._preservedRules,rules:this._rules})},e.prototype.setConfig=function(e){this._config=l(l({},this._config),e)},e.prototype.onReset=function(e){var t=this;return this._onResetCallbacks.push(e),function(){t._onResetCallbacks=t._onResetCallbacks.filter((function(t){return t!==e}))}},e.prototype.onInsertRule=function(e){var t=this;return this._onInsertRuleCallbacks.push(e),function(){t._onInsertRuleCallbacks=t._onInsertRuleCallbacks.filter((function(t){return t!==e}))}},e.prototype.getClassName=function(e){var t=this._config.namespace;return(t?t+"-":"")+(e||this._config.defaultPrefix)+"-"+this._counter++},e.prototype.cacheClassName=function(e,t,o,r){this._keyToClassName[t]=e,this._classNameToArgs[e]={args:o,rules:r}},e.prototype.classNameFromKey=function(e){return this._keyToClassName[e]},e.prototype.getClassNameCache=function(){return this._keyToClassName},e.prototype.argsFromClassName=function(e){var t=this._classNameToArgs[e];return t&&t.args},e.prototype.insertedRulesFromClassName=function(e){var t=this._classNameToArgs[e];return t&&t.rules},e.prototype.insertRule=function(e,t){var o=this._config.injectionMode,r=0!==o?this._getStyleElement():void 0;if(t&&this._preservedRules.push(e),r)switch(o){case 1:var n=r.sheet;try{n.insertRule(e,n.cssRules.length)}catch(e){}break;case 2:r.appendChild(document.createTextNode(e))}else this._rules.push(e);this._config.onInsertRule&&this._config.onInsertRule(e),this._onInsertRuleCallbacks.forEach((function(e){return e()}))},e.prototype.getRules=function(e){return(e?this._preservedRules.join(""):"")+this._rules.join("")},e.prototype.reset=function(){this._rules=[],this._counter=0,this._classNameToArgs={},this._keyToClassName={},this._onResetCallbacks.forEach((function(e){return e()}))},e.prototype.resetKeys=function(){this._keyToClassName={}},e.prototype._getStyleElement=function(){var e=this;return this._styleElement||"undefined"==typeof document||(this._styleElement=this._createStyleElement(),d||window.requestAnimationFrame((function(){e._styleElement=void 0}))),this._styleElement},e.prototype._createStyleElement=function(){var e=document.head,t=document.createElement("style"),o=null;t.setAttribute("data-merge-styles","true");var r=this._config.cspSettings;if(r&&r.nonce&&t.setAttribute("nonce",r.nonce),this._lastStyleElement)o=this._lastStyleElement.nextElementSibling;else{var n=this._findPlaceholderStyleTag();o=n?n.nextElementSibling:e.childNodes[0]}return e.insertBefore(t,e.contains(o)?o:null),this._lastStyleElement=t,t},e.prototype._findPlaceholderStyleTag=function(){var e=document.head;return e?e.querySelector("style[data-merge-styles]"):null},e}(),m=function(e){if(void 0!==c){return c}}()||{};void 0===m.__currentId__&&(m.__currentId__=0);var v=!1;function p(e){void 0===e&&(e=0),m.__currentId__=e}var f,b={msButton:"ms-Button",msButtonHasMenu:"ms-Button--hasMenu",msButtonIcon:"ms-Button-icon",msButtonMenuIcon:"ms-Button-menuIcon",msButtonLabel:"ms-Button-label",msButtonDescription:"ms-Button-description",msButtonScreenReaderText:"ms-Button-screenReaderText",msButtonFlexContainer:"ms-Button-flexContainer",msButtonTextContainer:"ms-Button-textContainer"},y=((0,n.memoizeFunction)(((e,t,o,r,i,s,a,c,l,u,d)=>{var h=(0,n.getGlobalClassNames)(b,e||{}),g=u&&!d;return(0,n.mergeStyleSets)({root:[h.msButton,t.root,r,l&&["is-checked",t.rootChecked],g&&["is-expanded",t.rootExpanded,{selectors:{[":hover .".concat(h.msButtonIcon)]:t.iconExpandedHovered,[":hover .".concat(h.msButtonMenuIcon)]:t.menuIconExpandedHovered||t.rootExpandedHovered,":hover":t.rootExpandedHovered}}],c&&[b.msButtonHasMenu,t.rootHasMenu],a&&["is-disabled",t.rootDisabled],!a&&!g&&!l&&{selectors:{":hover":t.rootHovered,[":hover .".concat(h.msButtonLabel)]:t.labelHovered,[":hover .".concat(h.msButtonIcon)]:t.iconHovered,[":hover .".concat(h.msButtonDescription)]:t.descriptionHovered,[":hover .".concat(h.msButtonMenuIcon)]:t.menuIconHovered,":focus":t.rootFocused,":active":t.rootPressed,[":active .".concat(h.msButtonIcon)]:t.iconPressed,[":active .".concat(h.msButtonDescription)]:t.descriptionPressed,[":active .".concat(h.msButtonMenuIcon)]:t.menuIconPressed}},a&&l&&[t.rootCheckedDisabled],!a&&l&&{selectors:{":hover":t.rootCheckedHovered,":active":t.rootCheckedPressed}},o],flexContainer:[h.msButtonFlexContainer,t.flexContainer],textContainer:[h.msButtonTextContainer,t.textContainer],icon:[h.msButtonIcon,i,t.icon,g&&t.iconExpanded,l&&t.iconChecked,a&&t.iconDisabled],label:[h.msButtonLabel,t.label,l&&t.labelChecked,a&&t.labelDisabled],menuIcon:[h.msButtonMenuIcon,s,t.menuIcon,l&&t.menuIconChecked,a&&!d&&t.menuIconDisabled,!a&&!g&&!l&&{selectors:{":hover":t.menuIconHovered,":active":t.menuIconPressed}},g&&["is-expanded",t.menuIconExpanded]],description:[h.msButtonDescription,t.description,l&&t.descriptionChecked,a&&t.descriptionDisabled],screenReaderText:[h.msButtonScreenReaderText,t.screenReaderText]})})),{root:"ms-TagItem",text:"ms-TagItem-text",close:"ms-TagItem-close",isSelected:"is-selected"}),x=(0,n.classNamesFunction)(),T=(0,n.styled)((e=>{var t,r,i,{theme:s,styles:a,selected:c,disabled:l,enableTagFocusInDisabledPicker:u,children:d,className:h,index:f,onRemoveItem:b,removeButtonAriaLabel:y,title:T=("string"==typeof e.children?e.children:e.item.name),tabIndex:S}=e,C=x(a,{theme:s,className:h,selected:c,disabled:l}),_=((i=o.useRef(r)).current||(i.current=function(e){if(!v){var t=g.getInstance();t&&t.onReset&&t.onReset(p),v=!0}return(void 0===e?"id__":e)+m.__currentId__++}(t)),i.current),w=u?{"aria-disabled":l,tabindex:S}:{disabled:l,tabIndex:l?void 0:S};return o.createElement("div",{className:C.root,role:"listitem",key:f},o.createElement("span",{className:C.text,title:T,id:"".concat(_,"-text")},d),o.createElement(n.IconButton,Object.assign({id:_,onClick:b},w,{iconProps:{iconName:"Cancel",styles:{root:{fontSize:"12px"}}},className:C.close,ariaLabel:y,"aria-labelledby":"".concat(_," ").concat(_,"-text"),"data-selection-index":f})))}),(function(e){var{className:t,theme:o,selected:r,disabled:i}=e,{palette:s,effects:a,fonts:c,semanticColors:l}=o,u=(0,n.getGlobalClassNames)(y,o);return{root:[u.root,c.medium,(0,n.getFocusStyle)(o),{boxSizing:"content-box",flexShrink:"1",margin:2,height:26,lineHeight:26,cursor:"default",userSelect:"none",display:"flex",flexWrap:"nowrap",maxWidth:300,minWidth:0,borderRadius:a.roundedCorner2,color:l.inputText,background:s.neutralLighter,selectors:{":hover":[!i&&!r&&{color:s.neutralDark,background:s.neutralLight,selectors:{".ms-TagItem-close":{color:s.neutralPrimary}}},i&&{background:s.neutralLighter}],":focus-within":[!i&&{background:s.themePrimary,color:s.white}],[n.HighContrastSelector]:{border:"1px solid ".concat(r?"WindowFrame":"WindowText")}}},i&&{selectors:{[n.HighContrastSelector]:{borderColor:"GrayText"}}},r&&!i&&[u.isSelected],t],text:[u.text,{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",minWidth:30,margin:"0 8px"},i&&{selectors:{[n.HighContrastSelector]:{color:"GrayText"}}}],close:[u.close,{color:s.neutralSecondary,width:30,height:"100%",flex:"0 0 auto",borderRadius:(0,n.getRTL)(o)?"".concat(a.roundedCorner2," 0 0 ").concat(a.roundedCorner2):"0 ".concat(a.roundedCorner2," ").concat(a.roundedCorner2," 0"),selectors:{":hover":{background:s.neutralQuaternaryAlt,color:s.neutralPrimary},":focus":{color:s.white,background:s.themePrimary},":focus:hover":{color:s.white,background:s.themeDark},":active":{color:s.white,backgroundColor:s.themeDark}}},i&&{selectors:{[".".concat(b.msButtonIcon)]:{color:s.neutralSecondary}}}]}}),void 0,{scope:"TagItem"}),S=[],C="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(f||(f={}));var _,w=function(e){return Object.freeze(e)},R=function(e,t){this.inlineSize=e,this.blockSize=t,w(this)},k=function(){function e(e,t,o,r){return this.x=e,this.y=t,this.width=o,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,w(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),E=function(e){return e instanceof SVGElement&&"getBBox"in e},B=function(e){if(E(e)){var t=e.getBBox(),o=t.width,r=t.height;return!o&&!r}var n=e,i=n.offsetWidth,s=n.offsetHeight;return!(i||s||e.getClientRects().length)},I=function(e){var t,o;if(e instanceof Element)return!0;var r=null===(o=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===o?void 0:o.defaultView;return!!(r&&e instanceof r.Element)},N="undefined"!=typeof window?window:{},O=new WeakMap,z=/auto|scroll/,P=/^tb|vertical/,F=/msie|trident/i.test(N.navigator&&N.navigator.userAgent),M=function(e){return parseFloat(e||"0")},A=function(e,t,o){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=!1),new R((o?t:e)||0,(o?e:t)||0)},D=w({devicePixelContentBoxSize:A(),borderBoxSize:A(),contentBoxSize:A(),contentRect:new k(0,0,0,0)}),H=function(e,t){if(void 0===t&&(t=!1),O.has(e)&&!t)return O.get(e);if(B(e))return O.set(e,D),D;var o=getComputedStyle(e),r=E(e)&&e.ownerSVGElement&&e.getBBox(),n=!F&&"border-box"===o.boxSizing,i=P.test(o.writingMode||""),s=!r&&z.test(o.overflowY||""),a=!r&&z.test(o.overflowX||""),c=r?0:M(o.paddingTop),l=r?0:M(o.paddingRight),u=r?0:M(o.paddingBottom),d=r?0:M(o.paddingLeft),h=r?0:M(o.borderTopWidth),g=r?0:M(o.borderRightWidth),m=r?0:M(o.borderBottomWidth),v=d+l,p=c+u,f=(r?0:M(o.borderLeftWidth))+g,b=h+m,y=a?e.offsetHeight-b-e.clientHeight:0,x=s?e.offsetWidth-f-e.clientWidth:0,T=n?v+f:0,S=n?p+b:0,C=r?r.width:M(o.width)-T-x,_=r?r.height:M(o.height)-S-y,R=C+v+x+f,I=_+p+y+b,N=w({devicePixelContentBoxSize:A(Math.round(C*devicePixelRatio),Math.round(_*devicePixelRatio),i),borderBoxSize:A(R,I,i),contentBoxSize:A(C,_,i),contentRect:new k(d,c,C,_)});return O.set(e,N),N},L=function(e,t,o){var r=H(e,o),n=r.borderBoxSize,i=r.contentBoxSize,s=r.devicePixelContentBoxSize;switch(t){case f.DEVICE_PIXEL_CONTENT_BOX:return s;case f.BORDER_BOX:return n;default:return i}},W=function(e){var t=H(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=w([t.borderBoxSize]),this.contentBoxSize=w([t.contentBoxSize]),this.devicePixelContentBoxSize=w([t.devicePixelContentBoxSize])},V=function(e){if(B(e))return 1/0;for(var t=0,o=e.parentNode;o;)t+=1,o=o.parentNode;return t},j=function(){var e=1/0,t=[];S.forEach((function(o){if(0!==o.activeTargets.length){var r=[];o.activeTargets.forEach((function(t){var o=new W(t.target),n=V(t.target);r.push(o),t.lastReportedSize=L(t.target,t.observedBox),n<e&&(e=n)})),t.push((function(){o.callback.call(o.observer,r,o.observer)})),o.activeTargets.splice(0,o.activeTargets.length)}}));for(var o=0,r=t;o<r.length;o++)(0,r[o])();return e},G=function(e){S.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(o){o.isActive()&&(V(o.target)>e?t.activeTargets.push(o):t.skippedTargets.push(o))}))}))},X=[],K=0,q={attributes:!0,characterData:!0,childList:!0,subtree:!0},J=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Z=function(e){return void 0===e&&(e=0),Date.now()+e},U=!1,Q=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!U){U=!0;var o,r=Z(e);o=function(){var o=!1;try{o=function(){var e,t=0;for(G(t);S.some((function(e){return e.activeTargets.length>0}));)t=j(),G(t);return S.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:C}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=C),window.dispatchEvent(e)),t>0}()}finally{if(U=!1,e=r-Z(),!K)return;o?t.run(1e3):e>0?t.run(e):t.start()}},function(e){if(!_){var t=0,o=document.createTextNode("");new MutationObserver((function(){return X.splice(0).forEach((function(e){return e()}))})).observe(o,{characterData:!0}),_=function(){o.textContent=""+(t?t--:t++)}}X.push(e),_()}((function(){requestAnimationFrame(o)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,q)};document.body?t():N.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),J.forEach((function(t){return N.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),J.forEach((function(t){return N.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),Y=function(e){!K&&e>0&&Q.start(),!(K+=e)&&Q.stop()},$=function(){function e(e,t){this.target=e,this.observedBox=t||f.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=L(this.target,this.observedBox,!0);return e=this.target,E(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),ee=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},te=new WeakMap,oe=function(e,t){for(var o=0;o<e.length;o+=1)if(e[o].target===t)return o;return-1},re=function(){function e(){}return e.connect=function(e,t){var o=new ee(e,t);te.set(e,o)},e.observe=function(e,t,o){var r=te.get(e),n=0===r.observationTargets.length;oe(r.observationTargets,t)<0&&(n&&S.push(r),r.observationTargets.push(new $(t,o&&o.box)),Y(1),Q.schedule())},e.unobserve=function(e,t){var o=te.get(e),r=oe(o.observationTargets,t),n=1===o.observationTargets.length;r>=0&&(n&&S.splice(S.indexOf(o),1),o.observationTargets.splice(r,1),Y(-1))},e.disconnect=function(e){var t=this,o=te.get(e);o.observationTargets.slice().forEach((function(o){return t.unobserve(e,o.target)})),o.activeTargets.splice(0,o.activeTargets.length)},e}(),ne=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");re.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!I(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");re.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!I(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");re.unobserve(this,e)},e.prototype.disconnect=function(){re.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();const ie=r()["undefined"!=typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];var se,ae="undefined"!=typeof window&&"ResizeObserver"in window?window.ResizeObserver:ne;function ce(){}var le=()=>se||(se=function(){var e,t,o,r,n=new Map,i=new ae((e=(e,t)=>{for(var o=function(o){var r=n.get(e[o].target);null==r||r.forEach((r=>r(e[o],t)))},r=0;r<e.length;r++)o(r)},t=[],o=null,r=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];t=n,o||(o=requestAnimationFrame((function(){o=null,e.apply(void 0,t)})))},r.cancel=function(){o&&(cancelAnimationFrame(o),o=null)},r));return{observer:i,subscribe(e,t){var o;i.observe(e);var r=null!==(o=n.get(e))&&void 0!==o?o:[];r.push(t),n.set(e,r)},unsubscribe(e,t){var o,r=null!==(o=n.get(e))&&void 0!==o?o:[];if(1===r.length)return i.unobserve(e),void n.delete(e);var s=r.indexOf(t);-1!==s&&r.splice(s,1),n.set(e,r)}}}());const ue=function(e,t){var r,n,i=le(),s=(r=t,n=o.useRef(r),o.useEffect((()=>{n.current=r})),n);return ie((()=>{var t=!1,o=e&&"current"in e?e.current:e;if(!o)return ce;function r(e,o){t||s.current(e,o)}return i.subscribe(o,r),()=>{t=!0,i.unsubscribe(o,r)}}),[e,i,s]),i.observer};var de=e=>e.name;function he(e){return e&&e.trim().length>0?n.ValidationState.valid:n.ValidationState.invalid}function ge(e){return{key:"",name:e}}function me(e){return e||null}var ve=o.memo((e=>{var{width:t,tags:r,onRemove:i,onAdd:s,filterSuggestions:c,minumumFilterLength:l,keepTypingMessage:u,noSuggestionsMessage:d,maxTags:h,tagMaxWidth:g,tabIndex:m,disabled:v,componentRef:p,onResize:f,error:b,borderRadius:y,itemHeight:x,fontSize:S,allowFreeText:C,themeJSON:_,hintText:w,accessibilityLabel:R,resources:k}=e,[E,B]=o.useState(""),I=o.useCallback((e=>{if(null!=e&&r){var t=r.filter((function(t){return-1===e.indexOf(t)}));t&&t.length>0&&i(t[0]);var o=e.filter((function(e){return-1===r.indexOf(e)}));o&&o.length>0&&s(o[0])}}),[s,i,r]),N=o.useCallback((e=>(B(e),c(e))),[B,c]),O=o.useMemo((()=>({width:t})),[t]),z=o.useMemo((()=>({root:{maxWidth:g||"100%",lineHeight:null!=x?x:void 0,height:null!=x?x:void 0,fontSize:null!=S?S:void 0,borderRadius:null!=y?y:void 0},close:{borderRadius:null!=y?y:void 0}})),[y,S,x,g]),P=o.useMemo((()=>({root:{fontSize:null!=S?S:void 0},input:{fontSize:null!=S?S:void 0}})),[S]),F=o.useCallback((e=>{var t,{isError:r,iconName:i,iconColor:s,textColor:a,backgroundColor:c,borderColor:l,hoverBorderColor:u,hoverBackgroundColor:d}=e.item,h=(null!==(t=e.className)&&void 0!==t?t:"")+(!0===r?" is-error":""),g={color:a,backgroundColor:c,borderColor:l,borderWidth:l?1:void 0,borderStyle:l?"solid":void 0},v=Object.assign(Object.assign({},g),{background:null!=d?d:void 0,borderColor:null!=u?u:void 0}),p=(0,n.mergeStyleSets)(z,{root:Object.assign(Object.assign({},g),{borderRadius:null!=y?y:void 0,fontSize:null!=S?S:void 0,":hover":v,":focus-within":v}),close:{color:a,":hover":v,":focus-within":v,":focus::after":{outline:u?"none !important":void 0}}});return o.createElement(T,Object.assign({},e,{className:h,styles:p,tabIndex:m}),i&&o.createElement(n.FontIcon,{role:"img",iconName:i,style:{color:s}}),e.item.name)}),[y,z,S,m]),M=o.useCallback((e=>{var{textColor:t,backgroundColor:r,borderColor:i}=e,s=r?3:void 0,a={height:null!=x?x:void 0,fontSize:null!=S?S:void 0,borderRadius:null!=y?y:void 0,color:t,backgroundColor:r,borderColor:i,borderWidth:i?1:void 0,borderStyle:i?"solid":void 0,marginTop:s,marginBottom:s,marginLeft:s};return o.createElement(n.TagItemSuggestion,{styles:{suggestionTextOverflow:a}},o.createElement("div",{style:{textAlign:"left",lineHeight:1}},e.name,o.createElement("br",null),o.createElement("span",{style:{fontSize:"80%"}},e.subName)))}),[y,S,x]),A=o.useMemo((()=>({noResultsFoundText:E&&l&&E.length<l?u:d})),[E,u,d,l]),D=o.useRef(null),H=o.useMemo((()=>{try{return _?(0,n.createTheme)(JSON.parse(_)):void 0}catch(e){console.error("Cannot parse theme",e)}}),[_]),L=o.useMemo((()=>[!0===b?"error-condition":"",!0===v?"is-disabled":""].join(" ")),[b,v]);ue(D,(e=>{f&&f(e.contentRect.width,e.contentRect.height)}));var W={inputProps:{tabIndex:m,placeholder:w},componentRef:p,onResolveSuggestions:N,getTextFromItem:de,pickerSuggestionsProps:A,selectedItems:r,onChange:I,onValidateInput:he,createGenericItem:ge,onItemSelected:me,resolveDelay:200,pickerCalloutProps:{doNotLayer:!1},onRenderSuggestionsItem:M,onRenderItem:F,itemLimit:h,disabled:v,className:L,acceptFreeText:C,styles:P,removeButtonAriaLabel:k.getString("Aria_TagRemove"),selectionAriaLabel:R};return o.createElement(n.ThemeProvider,{theme:H,applyTo:"none",ref:D,className:"PowerCATTagPicker",style:O},o.createElement(a,Object.assign({},W)))}));ve.displayName="TagPickerComponent";class pe{constructor(){this.sortedTagIds=[],this.isFullScreen=!1,this.addTag=e=>{e&&(this.tagEvent="Add",this.tagKey=e.key.toString(),this.tagDisplayName=e.name.toString(),this.notifyOutputChanged())},this.removeTag=e=>{e&&(this.tagEvent="Remove",this.tagKey=e.key.toString(),this.tagDisplayName=e.name.toString(),this.notifyOutputChanged())},this.componentRefCallback=e=>{e&&(this.ref=e)},this.filterSuggestions=e=>{this.searchText=e;var t=""===e;return e.length>=this.context.parameters.MinimumSearchTermLength.raw?this.previousSearchText!==this.searchText?(this.previousSearchText=this.searchText,new Promise((e=>{this.suggestionsFilterPending=e,this.tagEvent="Search",this.notifyOutputChanged()}))):this.suggestions:(t||(this.suggestionsFilterPending&&(this.suggestionsFilterPending([]),this.suggestionsFilterPending=void 0),this.notifyOutputChanged()),[])},this.onResize=(e,t)=>{this.height=t,this.tagEvent="",this.notifyOutputChanged()}}init(e,t){this.notifyOutputChanged=t,this.context=e,this.context.mode.trackContainerResize(!0),this.resources=this.context.resources,this.context.parameters.Suggestions.paging.setPageSize(500),this.context.parameters.Tags.paging.setPageSize(500)}updateView(e){var t,r,n,i,s=this.context.parameters.InputEvent.raw;e.updatedProperties.indexOf("InputEvent")>-1&&(null==s?void 0:s.startsWith("SetFocus"))&&(null===(t=this.ref)||void 0===t||t.focusInput());var a=e.parameters.Tags,c=e.parameters.Suggestions,l=void 0===this.tags&&this.context.parameters.Tags.sortedRecordIds.length>0,u=e.updatedProperties.indexOf("dataset")>-1||e.updatedProperties.indexOf("Suggestions_dataset")>-1||e.updatedProperties.indexOf("Suggestions_records")>-1,d=e.updatedProperties.indexOf("SearchTerm")>-1;(l||u)&&(this.tags=this.getTags(a),this.tagEvent=""),(u||d)&&!c.loading&&this.suggestionsFilterPending&&(this.suggestions=this.getSuggestions(c),this.suggestionsFilterPending(this.suggestions),this.suggestionsFilterPending=void 0);var h=parseInt(e.mode.allocatedWidth),g=parseInt(e.mode.allocatedHeight);return o.createElement(ve,{width:h,height:g,tabIndex:e.accessibility.assignedTabIndex,tags:this.tags,onAdd:this.addTag,onRemove:this.removeTag,filterSuggestions:this.filterSuggestions,minumumFilterLength:this.context.parameters.MinimumSearchTermLength.raw,keepTypingMessage:this.context.parameters.SearchTermToShortMessage.raw,noSuggestionsMessage:this.context.parameters.NoSuggestionFoundMessage.raw,maxTags:this.undefinedIfZero(this.context.parameters.MaxTags),tagMaxWidth:this.context.parameters.TagMaxWidth.raw,disabled:this.context.mode.isControlDisabled,componentRef:this.componentRefCallback,onResize:this.onResize,error:!0===this.context.parameters.Error.raw,fontSize:this.undefinedIfZero(e.parameters.FontSize),borderRadius:this.undefinedIfZero(e.parameters.BorderRadius),itemHeight:this.undefinedIfZero(e.parameters.ItemHeight),allowFreeText:!0===e.parameters.AllowFreeText.raw,themeJSON:null!==(r=e.parameters.Theme.raw)&&void 0!==r?r:void 0,hintText:null!==(n=e.parameters.HintText.raw)&&void 0!==n?n:void 0,accessibilityLabel:null!==(i=e.parameters.AccessibilityLabel.raw)&&void 0!==i?i:"Select",resources:this.resources})}getOutputs(){return{AutoHeight:this.height||parseInt(this.context.mode.allocatedHeight),SearchTerm:this.searchText?this.searchText:"",TagEvent:this.tagEvent,TagKey:this.tagKey,TagDisplayName:this.tagDisplayName}}destroy(){}undefinedIfZero(e){return e.raw&&e.raw>0?e.raw:void 0}getTags(e){var t={};return e.sortedRecordIds.map((o=>{var r,n=e.records[o],i=n.getRecordId(),s=null!==(r=n.getValue("TagsKey"))&&void 0!==r?r:i;return void 0!==t[s]?(t[s]++,s+="_".concat(t[s])):t[s]=1,{key:s,name:n.getValue("TagsDisplayName"),isError:n.getValue("TagsError"),iconName:n.getValue("TagsIconName"),iconColor:n.getValue("TagsIconColor"),textColor:n.getValue("TagsTextColor"),backgroundColor:n.getValue("TagsBackgroundColor"),hoverBackgroundColor:n.getValue("TagsHoverBackgroundColor"),borderColor:n.getValue("TagsBorderColor"),hoverBorderColor:n.getValue("TagsHoverBorderColor"),data:n}}))}getSuggestions(e){var t={};return e.sortedRecordIds.map((o=>{var r,n=e.records[o],i=n.getRecordId(),s=null!==(r=n.getValue("SuggestionsKey"))&&void 0!==r?r:i;return void 0!==t[s]?(t[s]++,s+="_".concat(t[s])):t[s]=1,{key:s,name:n.getValue("SuggestionsDisplayName"),subName:n.getValue("SuggestionsSubDisplayName"),iconName:n.getValue("SuggestionsIconName"),iconColor:n.getValue("SuggestionsIconColor"),textColor:n.getValue("SuggestionsTextColor"),backgroundColor:n.getValue("SuggestionsBackgroundColor"),borderColor:n.getValue("SuggestionsBorderColor"),hoverBorderColor:n.getValue("SuggestionsHoverBorderColor"),data:n}}))}}pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=t})();
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.Picker', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Picker);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.Picker = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Picker;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}