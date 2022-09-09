/*! For license information please see 225.47a91fff65dad5b8e61a.manager.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[225],{63225:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Figspec:()=>Figspec,default:()=>components_Figspec});var react=__webpack_require__(67294);const isCEPolyfill="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,removeNodes=(container,start,end=null)=>{for(;start!==end;){const n=start.nextSibling;container.removeChild(start),start=n}},marker=`{{lit-${String(Math.random()).slice(2)}}}`,nodeMarker=`\x3c!--${marker}--\x3e`,markerRegex=new RegExp(`${marker}|${nodeMarker}`);class Template{constructor(result,element){this.parts=[],this.element=element;const nodesToRemove=[],stack=[],walker=document.createTreeWalker(element.content,133,null,!1);let lastPartIndex=0,index=-1,partIndex=0;const{strings,values:{length}}=result;for(;partIndex<length;){const node=walker.nextNode();if(null!==node){if(index++,1===node.nodeType){if(node.hasAttributes()){const attributes=node.attributes,{length}=attributes;let count=0;for(let i=0;i<length;i++)endsWith(attributes[i].name,"$lit$")&&count++;for(;count-- >0;){const stringForPart=strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=name.toLowerCase()+"$lit$",attributeValue=node.getAttribute(attributeLookupName);node.removeAttribute(attributeLookupName);const statics=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings:statics}),partIndex+=statics.length-1}}"TEMPLATE"===node.tagName&&(stack.push(node),walker.currentNode=node.content)}else if(3===node.nodeType){const data=node.data;if(data.indexOf(marker)>=0){const parent=node.parentNode,strings=data.split(markerRegex),lastIndex=strings.length-1;for(let i=0;i<lastIndex;i++){let insert,s=strings[i];if(""===s)insert=createMarker();else{const match=lastAttributeNameRegex.exec(s);null!==match&&endsWith(match[2],"$lit$")&&(s=s.slice(0,match.index)+match[1]+match[2].slice(0,-"$lit$".length)+match[3]),insert=document.createTextNode(s)}parent.insertBefore(insert,node),this.parts.push({type:"node",index:++index})}""===strings[lastIndex]?(parent.insertBefore(createMarker(),node),nodesToRemove.push(node)):node.data=strings[lastIndex],partIndex+=lastIndex}}else if(8===node.nodeType)if(node.data===marker){const parent=node.parentNode;null!==node.previousSibling&&index!==lastPartIndex||(index++,parent.insertBefore(createMarker(),node)),lastPartIndex=index,this.parts.push({type:"node",index}),null===node.nextSibling?node.data="":(nodesToRemove.push(node),index--),partIndex++}else{let i=-1;for(;-1!==(i=node.data.indexOf(marker,i+1));)this.parts.push({type:"node",index:-1}),partIndex++}}else walker.currentNode=stack.pop()}for(const n of nodesToRemove)n.parentNode.removeChild(n)}}const endsWith=(str,suffix)=>{const index=str.length-suffix.length;return index>=0&&str.slice(index)===suffix},isTemplatePartActive=part=>-1!==part.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,133,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;for(;walker.nextNode();){nodeIndex++;const node=walker.currentNode;for(node.previousSibling===currentRemovingNode&&(currentRemovingNode=null),nodesToRemove.has(node)&&(nodesToRemoveInTemplate.push(node),null===currentRemovingNode&&(currentRemovingNode=node)),null!==currentRemovingNode&&removeCount++;void 0!==part&&part.index===nodeIndex;)part.index=null!==currentRemovingNode?-1:part.index-removeCount,partIndex=nextActiveIndexInTemplateParts(parts,partIndex),part=parts[partIndex]}nodesToRemoveInTemplate.forEach((n=>n.parentNode.removeChild(n)))}const countNodes=node=>{let count=11===node.nodeType?0:1;const walker=document.createTreeWalker(node,133,null,!1);for(;walker.nextNode();)count++;return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part))return i}return-1};const directives=new WeakMap,isDirective=o=>"function"==typeof o&&directives.has(o),noChange={},nothing={};class TemplateInstance{constructor(template,processor,options){this.__parts=[],this.template=template,this.processor=processor,this.options=options}update(values){let i=0;for(const part of this.__parts)void 0!==part&&part.setValue(values[i]),i++;for(const part of this.__parts)void 0!==part&&part.commit()}_clone(){const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),stack=[],parts=this.template.parts,walker=document.createTreeWalker(fragment,133,null,!1);let part,partIndex=0,nodeIndex=0,node=walker.nextNode();for(;partIndex<parts.length;)if(part=parts[partIndex],isTemplatePartActive(part)){for(;nodeIndex<part.index;)nodeIndex++,"TEMPLATE"===node.nodeName&&(stack.push(node),walker.currentNode=node.content),null===(node=walker.nextNode())&&(walker.currentNode=stack.pop(),node=walker.nextNode());if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node.previousSibling),this.__parts.push(part)}else this.__parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options));partIndex++}else this.__parts.push(void 0),partIndex++;return isCEPolyfill&&(document.adoptNode(fragment),customElements.upgrade(fragment)),fragment}}const policy=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),commentMarker=` ${marker} `;class TemplateResult{constructor(strings,values,type,processor){this.strings=strings,this.values=values,this.type=type,this.processor=processor}getHTML(){const l=this.strings.length-1;let html="",isCommentBinding=!1;for(let i=0;i<l;i++){const s=this.strings[i],commentOpen=s.lastIndexOf("\x3c!--");isCommentBinding=(commentOpen>-1||isCommentBinding)&&-1===s.indexOf("--\x3e",commentOpen+1);const attributeMatch=lastAttributeNameRegex.exec(s);html+=null===attributeMatch?s+(isCommentBinding?commentMarker:nodeMarker):s.substr(0,attributeMatch.index)+attributeMatch[1]+attributeMatch[2]+"$lit$"+attributeMatch[3]+marker}return html+=this.strings[l],html}getTemplateElement(){const template=document.createElement("template");let value=this.getHTML();return void 0!==policy&&(value=policy.createHTML(value)),template.innerHTML=value,template}}class SVGTemplateResult extends TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;return content.removeChild(svgElement),((container,start,end=null,before=null)=>{for(;start!==end;){const n=start.nextSibling;container.insertBefore(start,before),start=n}})(content,svgElement.firstChild),template}}const isPrimitive=value=>null===value||!("object"==typeof value||"function"==typeof value),isIterable=value=>Array.isArray(value)||!(!value||!value[Symbol.iterator]);class AttributeCommitter{constructor(element,name,strings){this.dirty=!0,this.element=element,this.name=name,this.strings=strings,this.parts=[];for(let i=0;i<strings.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1,parts=this.parts;if(1===l&&""===strings[0]&&""===strings[1]){const v=parts[0].value;if("symbol"==typeof v)return String(v);if("string"==typeof v||!isIterable(v))return v}let text="";for(let i=0;i<l;i++){text+=strings[i];const part=parts[i];if(void 0!==part){const v=part.value;if(isPrimitive(v)||!isIterable(v))text+="string"==typeof v?v:String(v);else for(const t of v)text+="string"==typeof t?t:String(t)}}return text+=strings[l],text}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class AttributePart{constructor(committer){this.value=void 0,this.committer=committer}setValue(value){value===noChange||isPrimitive(value)&&value===this.value||(this.value=value,isDirective(value)||(this.committer.dirty=!0))}commit(){for(;isDirective(this.value);){const directive=this.value;this.value=noChange,directive(this)}this.value!==noChange&&this.committer.commit()}}class NodePart{constructor(options){this.value=void 0,this.__pendingValue=void 0,this.options=options}appendInto(container){this.startNode=container.appendChild(createMarker()),this.endNode=container.appendChild(createMarker())}insertAfterNode(ref){this.startNode=ref,this.endNode=ref.nextSibling}appendIntoPart(part){part.__insert(this.startNode=createMarker()),part.__insert(this.endNode=createMarker())}insertAfterPart(ref){ref.__insert(this.startNode=createMarker()),this.endNode=ref.endNode,ref.endNode=this.startNode}setValue(value){this.__pendingValue=value}commit(){if(null===this.startNode.parentNode)return;for(;isDirective(this.__pendingValue);){const directive=this.__pendingValue;this.__pendingValue=noChange,directive(this)}const value=this.__pendingValue;value!==noChange&&(isPrimitive(value)?value!==this.value&&this.__commitText(value):value instanceof TemplateResult?this.__commitTemplateResult(value):value instanceof Node?this.__commitNode(value):isIterable(value)?this.__commitIterable(value):value===nothing?(this.value=nothing,this.clear()):this.__commitText(value))}__insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}__commitNode(value){this.value!==value&&(this.clear(),this.__insert(value),this.value=value)}__commitText(value){const node=this.startNode.nextSibling,valueAsString="string"==typeof(value=null==value?"":value)?value:String(value);node===this.endNode.previousSibling&&3===node.nodeType?node.data=valueAsString:this.__commitNode(document.createTextNode(valueAsString)),this.value=value}__commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value instanceof TemplateInstance&&this.value.template===template)this.value.update(value.values);else{const instance=new TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values),this.__commitNode(fragment),this.value=instance}}__commitIterable(value){Array.isArray(this.value)||(this.value=[],this.clear());const itemParts=this.value;let itemPart,partIndex=0;for(const item of value)itemPart=itemParts[partIndex],void 0===itemPart&&(itemPart=new NodePart(this.options),itemParts.push(itemPart),0===partIndex?itemPart.appendIntoPart(this):itemPart.insertAfterPart(itemParts[partIndex-1])),itemPart.setValue(item),itemPart.commit(),partIndex++;partIndex<itemParts.length&&(itemParts.length=partIndex,this.clear(itemPart&&itemPart.endNode))}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}class BooleanAttributePart{constructor(element,name,strings){if(this.value=void 0,this.__pendingValue=void 0,2!==strings.length||""!==strings[0]||""!==strings[1])throw new Error("Boolean attributes can only contain a single expression");this.element=element,this.name=name,this.strings=strings}setValue(value){this.__pendingValue=value}commit(){for(;isDirective(this.__pendingValue);){const directive=this.__pendingValue;this.__pendingValue=noChange,directive(this)}if(this.__pendingValue===noChange)return;const value=!!this.__pendingValue;this.value!==value&&(value?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=value),this.__pendingValue=noChange}}class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings),this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class PropertyPart extends AttributePart{}let eventOptionsSupported=!1;(()=>{try{const options={get capture(){return eventOptionsSupported=!0,!1}};window.addEventListener("test",options,options),window.removeEventListener("test",options,options)}catch(_e){}})();class EventPart{constructor(element,eventName,eventContext){this.value=void 0,this.__pendingValue=void 0,this.element=element,this.eventName=eventName,this.eventContext=eventContext,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(value){this.__pendingValue=value}commit(){for(;isDirective(this.__pendingValue);){const directive=this.__pendingValue;this.__pendingValue=noChange,directive(this)}if(this.__pendingValue===noChange)return;const newListener=this.__pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive),shouldAddListener=null!=newListener&&(null==oldListener||shouldRemoveListener);shouldRemoveListener&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),shouldAddListener&&(this.__options=getOptions(newListener),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=newListener,this.__pendingValue=noChange}handleEvent(event){"function"==typeof this.value?this.value.call(this.eventContext||this.element,event):this.value.handleEvent(event)}}const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);function templateFactory(result){let templateCache=templateCaches.get(result.type);void 0===templateCache&&(templateCache={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(result.type,templateCache));let template=templateCache.stringsArray.get(result.strings);if(void 0!==template)return template;const key=result.strings.join(marker);return template=templateCache.keyString.get(key),void 0===template&&(template=new Template(result,result.getTemplateElement()),templateCache.keyString.set(key,template)),templateCache.stringsArray.set(result.strings,template),template}const templateCaches=new Map,parts=new WeakMap;const defaultTemplateProcessor=new class DefaultTemplateProcessor{handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){return new PropertyCommitter(element,name.slice(1),strings).parts}if("@"===prefix)return[new EventPart(element,name.slice(1),options.eventContext)];if("?"===prefix)return[new BooleanAttributePart(element,name.slice(1),strings)];return new AttributeCommitter(element,name,strings).parts}handleTextExpression(options){return new NodePart(options)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const html=(strings,...values)=>new TemplateResult(strings,values,"html",defaultTemplateProcessor),svg=(strings,...values)=>new SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor),getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;void 0===window.ShadyCSS?compatibleShadyCSSVersion=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),compatibleShadyCSSVersion=!1);const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);void 0===templateCache&&(templateCache={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(cacheKey,templateCache));let template=templateCache.stringsArray.get(result.strings);if(void 0!==template)return template;const key=result.strings.join(marker);if(template=templateCache.keyString.get(key),void 0===template){const element=result.getTemplateElement();compatibleShadyCSSVersion&&window.ShadyCSS.prepareTemplateDom(element,scopeName),template=new Template(result,element),templateCache.keyString.set(key,template)}return templateCache.stringsArray.set(result.strings,template),template},TEMPLATE_TYPES=["html","svg"],shadyRenderSet=new Set,prepareTemplateStyles=(scopeName,renderedDOM,template)=>{shadyRenderSet.add(scopeName);const templateElement=template?template.element:document.createElement("template"),styles=renderedDOM.querySelectorAll("style"),{length}=styles;if(0===length)return void window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const condensedStyle=document.createElement("style");for(let i=0;i<length;i++){const style=styles[i];style.parentNode.removeChild(style),condensedStyle.textContent+=style.textContent}(scopeName=>{TEMPLATE_TYPES.forEach((type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));void 0!==templates&&templates.keyString.forEach((template=>{const{element:{content}}=template,styles=new Set;Array.from(content.querySelectorAll("style")).forEach((s=>{styles.add(s)})),removeNodesFromTemplate(template,styles)}))}))})(scopeName);const content=templateElement.content;template?function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;if(null==refNode)return void content.appendChild(node);const walker=document.createTreeWalker(content,133,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;for(;walker.nextNode();)for(walkerIndex++,walker.currentNode===refNode&&(insertCount=countNodes(node),refNode.parentNode.insertBefore(node,refNode));-1!==partIndex&&parts[partIndex].index===walkerIndex;){if(insertCount>0){for(;-1!==partIndex;)parts[partIndex].index+=insertCount,partIndex=nextActiveIndexInTemplateParts(parts,partIndex);return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}(template,condensedStyle,content.firstChild):content.insertBefore(condensedStyle,content.firstChild),window.ShadyCSS.prepareTemplateStyles(templateElement,scopeName);const style=content.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==style)renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild);else if(template){content.insertBefore(condensedStyle,content.firstChild);const removes=new Set;removes.add(condensedStyle),removeNodesFromTemplate(template,removes)}};window.JSCompiler_renameProperty=(prop,_obj)=>prop;const defaultConverter={toAttribute(value,type){switch(type){case Boolean:return value?"":null;case Object:case Array:return null==value?value:JSON.stringify(value)}return value},fromAttribute(value,type){switch(type){case Boolean:return null!==value;case Number:return null===value?null:Number(value);case Object:case Array:return JSON.parse(value)}return value}},notEqual=(value,old)=>old!==value&&(old==old||value==value),defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual};class UpdatingElement extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const attributes=[];return this._classProperties.forEach(((v,p)=>{const attr=this._attributeNameForProperty(p,v);void 0!==attr&&(this._attributeToPropertyMap.set(attr,p),attributes.push(attr))})),attributes}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const superProperties=Object.getPrototypeOf(this)._classProperties;void 0!==superProperties&&superProperties.forEach(((v,k)=>this._classProperties.set(k,v)))}}static createProperty(name,options=defaultPropertyDeclaration){if(this._ensureClassProperties(),this._classProperties.set(name,options),options.noAccessor||this.prototype.hasOwnProperty(name))return;const key="symbol"==typeof name?Symbol():`__${name}`,descriptor=this.getPropertyDescriptor(name,key,options);void 0!==descriptor&&Object.defineProperty(this.prototype,name,descriptor)}static getPropertyDescriptor(name,key,options){return{get(){return this[key]},set(value){const oldValue=this[name];this[key]=value,this.requestUpdateInternal(name,oldValue,options)},configurable:!0,enumerable:!0}}static getPropertyOptions(name){return this._classProperties&&this._classProperties.get(name)||defaultPropertyDeclaration}static finalize(){const superCtor=Object.getPrototypeOf(this);if(superCtor.hasOwnProperty("finalized")||superCtor.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[]];for(const p of propKeys)this.createProperty(p,props[p])}}static _attributeNameForProperty(name,options){const attribute=options.attribute;return!1===attribute?void 0:"string"==typeof attribute?attribute:"string"==typeof name?name.toLowerCase():void 0}static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}static _propertyValueFromAttribute(value,options){const type=options.type,converter=options.converter||defaultConverter,fromAttribute="function"==typeof converter?converter:converter.fromAttribute;return fromAttribute?fromAttribute(value,type):value}static _propertyValueToAttribute(value,options){if(void 0===options.reflect)return;const type=options.type,converter=options.converter;return(converter&&converter.toAttribute||defaultConverter.toAttribute)(value,type)}initialize(){this._updateState=0,this._updatePromise=new Promise((res=>this._enableUpdatingResolver=res)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((_v,p)=>{if(this.hasOwnProperty(p)){const value=this[p];delete this[p],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(p,value)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((v,p)=>this[p]=v)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(name,old,value){old!==value&&this._attributeToProperty(name,value)}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attr=ctor._attributeNameForProperty(name,options);if(void 0!==attr){const attrValue=ctor._propertyValueToAttribute(value,options);if(void 0===attrValue)return;this._updateState=8|this._updateState,null==attrValue?this.removeAttribute(attr):this.setAttribute(attr,attrValue),this._updateState=-9&this._updateState}}_attributeToProperty(name,value){if(8&this._updateState)return;const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);if(void 0!==propName){const options=ctor.getPropertyOptions(propName);this._updateState=16|this._updateState,this[propName]=ctor._propertyValueFromAttribute(value,options),this._updateState=-17&this._updateState}}requestUpdateInternal(name,oldValue,options){let shouldRequestUpdate=!0;if(void 0!==name){const ctor=this.constructor;options=options||ctor.getPropertyOptions(name),ctor._valueHasChanged(this[name],oldValue,options.hasChanged)?(this._changedProperties.has(name)||this._changedProperties.set(name,oldValue),!0!==options.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(name,options))):shouldRequestUpdate=!1}!this._hasRequestedUpdate&&shouldRequestUpdate&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(name,oldValue){return this.requestUpdateInternal(name,oldValue),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const result=this.performUpdate();return null!=result&&await result,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let shouldUpdate=!1;const changedProperties=this._changedProperties;try{shouldUpdate=this.shouldUpdate(changedProperties),shouldUpdate?this.update(changedProperties):this._markUpdated()}catch(e){throw shouldUpdate=!1,this._markUpdated(),e}shouldUpdate&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(changedProperties)),this.updated(changedProperties))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(_changedProperties){return!0}update(_changedProperties){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((v,k)=>this._propertyToAttribute(k,this[k],v))),this._reflectingProperties=void 0),this._markUpdated()}updated(_changedProperties){}firstUpdated(_changedProperties){}}UpdatingElement.finalized=!0;const standardProperty=(options,element)=>"method"===element.kind&&element.descriptor&&!("value"in element.descriptor)?Object.assign(Object.assign({},element),{finisher(clazz){clazz.createProperty(element.key,options)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof element.initializer&&(this[element.key]=element.initializer.call(this))},finisher(clazz){clazz.createProperty(element.key,options)}};function property(options){return(protoOrDescriptor,name)=>void 0!==name?((options,proto,name)=>{proto.constructor.createProperty(name,options)})(options,protoOrDescriptor,name):standardProperty(options,protoOrDescriptor)}const ElementProto=Element.prototype;ElementProto.msMatchesSelector||ElementProto.webkitMatchesSelector;const supportsAdoptingStyleSheets=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,constructionToken=Symbol();class CSSResult{constructor(cssText,safeToken){if(safeToken!==constructionToken)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=cssText}get styleSheet(){return void 0===this._styleSheet&&(supportsAdoptingStyleSheets?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const css=(strings,...values)=>{const cssText=values.reduce(((acc,v,idx)=>acc+(value=>{if(value instanceof CSSResult)return value.cssText;if("number"==typeof value)return value;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(v)+strings[idx+1]),strings[0]);return new CSSResult(cssText,constructionToken)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const renderNotImplemented={};class LitElement extends UpdatingElement{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const userStyles=this.getStyles();if(Array.isArray(userStyles)){const addStyles=(styles,set)=>styles.reduceRight(((set,s)=>Array.isArray(s)?addStyles(s,set):(set.add(s),set)),set),set=addStyles(userStyles,new Set),styles=[];set.forEach((v=>styles.unshift(v))),this._styles=styles}else this._styles=void 0===userStyles?[]:[userStyles];this._styles=this._styles.map((s=>{if(s instanceof CSSStyleSheet&&!supportsAdoptingStyleSheets){const cssText=Array.prototype.slice.call(s.cssRules).reduce(((css,rule)=>css+rule.cssText),"");return new CSSResult(String(cssText),constructionToken)}return s}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const styles=this.constructor._styles;0!==styles.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=styles.map((s=>s instanceof CSSStyleSheet?s:s.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s=>s.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(changedProperties){const templateResult=this.render();super.update(changedProperties),templateResult!==renderNotImplemented&&this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((s=>{const style=document.createElement("style");style.textContent=s.cssText,this.renderRoot.appendChild(style)})))}render(){return renderNotImplemented}}LitElement.finalized=!0,LitElement.render=(result,container,options)=>{if(!options||"object"!=typeof options||!options.scopeName)throw new Error("The `scopeName` option is required.");const scopeName=options.scopeName,hasRendered=parts.has(container),needsScoping=compatibleShadyCSSVersion&&11===container.nodeType&&!!container.host,firstScopeRender=needsScoping&&!shadyRenderSet.has(scopeName),renderContainer=firstScopeRender?document.createDocumentFragment():container;if(((result,container,options)=>{let part=parts.get(container);void 0===part&&(removeNodes(container,container.firstChild),parts.set(container,part=new NodePart(Object.assign({templateFactory},options))),part.appendInto(container)),part.setValue(result),part.commit()})(result,renderContainer,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options)),firstScopeRender){const part=parts.get(renderContainer);parts.delete(renderContainer);const template=part.value instanceof TemplateInstance?part.value.template:void 0;prepareTemplateStyles(scopeName,renderContainer,template),removeNodes(container,container.firstChild),container.appendChild(renderContainer),parts.set(container,part)}!hasRendered&&needsScoping&&window.ShadyCSS.styleElement(container.host)},LitElement.shadowRootOptions={mode:"open"};const ErrorMessage=({title,children})=>html`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${title}</span
      >
      <span class="error-description">${children}</span>
    </div>
  </div>
`,ErrorMessage_styles=css`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`,previousStylePropertyCache=new WeakMap,styleMap=(f=styleInfo=>part=>{if(!(part instanceof AttributePart)||part instanceof PropertyPart||"style"!==part.committer.name||part.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer}=part,{style}=committer.element;let previousStyleProperties=previousStylePropertyCache.get(part);void 0===previousStyleProperties&&(style.cssText=committer.strings.join(" "),previousStylePropertyCache.set(part,previousStyleProperties=new Set)),previousStyleProperties.forEach((name=>{name in styleInfo||(previousStyleProperties.delete(name),-1===name.indexOf("-")?style[name]=null:style.removeProperty(name))}));for(const name in styleInfo)previousStyleProperties.add(name),-1===name.indexOf("-")?style[name]=styleInfo[name]:style.setProperty(name,styleInfo[name])},(...args)=>{const d=f(...args);return directives.set(d,!0),d});var f;function absRect(rect){return{top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height,left:rect.x}}function round(n){return Math.round(100*n)/100}function extendStyles(left,right){return[...stylesToArray(left),...stylesToArray(right)]}function stylesToArray(styles){return styles?styles instanceof Array?styles:[styles]:[]}var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};const NodeSelectableMixin=superClass=>{class NodeSelectable extends superClass{constructor(...args){super(...args),this.selectedNode=null}updated(changedProperties){super.updated(changedProperties),changedProperties.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return __decorate([property({attribute:!1})],NodeSelectable.prototype,"selectedNode",void 0),NodeSelectable};function shouldSkipEvent(ev){return 0===ev.touches.length||ev.touches.length>2}const TouchGestureMixin=superClass=>class CTouchGesture extends superClass{constructor(...args){super(...args),this.previousTouches=null,this.addEventListener("touchstart",(ev=>{shouldSkipEvent(ev)||(ev.preventDefault(),this.previousTouches=ev.touches)})),this.addEventListener("touchend",(ev=>{shouldSkipEvent(ev)||(ev.preventDefault(),this.previousTouches=null)})),this.addEventListener("touchcancel",(ev=>{shouldSkipEvent(ev)||(ev.preventDefault(),this.previousTouches=null)})),this.addEventListener("touchmove",(ev=>{if(shouldSkipEvent(ev))return;const previousTouches=Array.from(this.previousTouches||[]),currentTouches=Array.from(ev.touches);this.previousTouches=ev.touches,currentTouches.length===previousTouches.length&&currentTouches.every((t=>previousTouches.some((pt=>pt.identifier===t.identifier))))&&(1!==currentTouches.length?this.onTouchPinch(function getDistance(a,b){return Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2))}({x:currentTouches[0].pageX,y:currentTouches[0].pageY},{x:previousTouches[0].pageX,y:previousTouches[0].pageY})):this.onTouchPan({x:currentTouches[0].pageX-previousTouches[0].pageX,y:currentTouches[0].pageY-previousTouches[0].pageY}))}))}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(delta){}onTouchPinch(delta){}};var PositionedMixin_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__classPrivateFieldGet=function(receiver,privateMap){if(!privateMap.has(receiver))throw new TypeError("attempted to get private field on non-instance");return privateMap.get(receiver)},__classPrivateFieldSet=function(receiver,privateMap,value){if(!privateMap.has(receiver))throw new TypeError("attempted to set private field on non-instance");return privateMap.set(receiver,value),value};const PositionedMixin=superClass=>{var _isDragModeOn,_movePanel,_keyDown,_keyUp,_listenToKeyboardEvents;class Positioned extends(TouchGestureMixin(superClass)){constructor(...args){super(...args),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,_isDragModeOn.set(this,!1),_movePanel.set(this,((shiftX,shiftY)=>{this.panX+=shiftX/this.scale/window.devicePixelRatio,this.panY+=shiftY/this.scale/window.devicePixelRatio})),_keyDown.set(this,(event=>{"Space"!==event.code||__classPrivateFieldGet(this,_isDragModeOn)||(__classPrivateFieldSet(this,_isDragModeOn,!0),document.body.style.cursor="grab")})),_keyUp.set(this,(event=>{"Space"===event.code&&__classPrivateFieldGet(this,_isDragModeOn)&&(__classPrivateFieldSet(this,_isDragModeOn,!1),document.body.style.cursor="auto")})),_listenToKeyboardEvents.set(this,(()=>{document.addEventListener("keyup",__classPrivateFieldGet(this,_keyUp)),document.addEventListener("keydown",__classPrivateFieldGet(this,_keyDown))})),this.addEventListener("wheel",(ev=>{if(this.isMovable)if(ev.preventDefault(),ev.ctrlKey){let{deltaY}=ev;1===ev.deltaMode&&(deltaY*=15);const prevScale=this.scale;this.scale*=1-deltaY/(.5*(1e3-this.zoomSpeed));const offsetX=ev.offsetX-this.offsetWidth/2,offsetY=ev.offsetY-this.offsetHeight/2;this.panX+=offsetX/this.scale-offsetX/prevScale,this.panY+=offsetY/this.scale-offsetY/prevScale}else{const speed=.002*this.panSpeed;this.panX-=ev.deltaX*speed/this.scale,this.panY-=ev.deltaY*speed/this.scale}}),{passive:!1});let gestureStartScale=1;this.addEventListener("gesturestart",(ev=>{ev.preventDefault(),gestureStartScale=this.scale})),this.addEventListener("gesturechange",(_ev=>{const ev=_ev;ev.preventDefault(),this.scale=gestureStartScale*ev.scale})),this.addEventListener("pointermove",(ev=>{4&ev.buttons&&(ev.preventDefault(),__classPrivateFieldGet(this,_movePanel).call(this,ev.movementX,ev.movementY))})),__classPrivateFieldGet(this,_listenToKeyboardEvents).call(this),this.onmousedown=()=>{__classPrivateFieldGet(this,_isDragModeOn)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX,movementY})=>{__classPrivateFieldGet(this,_movePanel).call(this,movementX,movementY)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",__classPrivateFieldGet(this,_keyUp)),document.removeEventListener("keydown",__classPrivateFieldGet(this,_keyDown)),super.disconnectedCallback()}updated(changedProperties){super.updated(changedProperties),changedProperties.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(changedProperties.has("panX")||changedProperties.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(delta){this.panX+=delta.x/this.scale,this.panY+=delta.y/this.scale}onTouchPinch(delta){this.scale*=1-delta/1e3}}return _isDragModeOn=new WeakMap,_movePanel=new WeakMap,_keyDown=new WeakMap,_keyUp=new WeakMap,_listenToKeyboardEvents=new WeakMap,PositionedMixin_decorate([property({attribute:!1})],Positioned.prototype,"panX",void 0),PositionedMixin_decorate([property({attribute:!1})],Positioned.prototype,"panY",void 0),PositionedMixin_decorate([property({attribute:!1})],Positioned.prototype,"scale",void 0),PositionedMixin_decorate([property({type:Number,attribute:"zoom-speed"})],Positioned.prototype,"zoomSpeed",void 0),PositionedMixin_decorate([property({type:Number,attribute:"pan-speed"})],Positioned.prototype,"panSpeed",void 0),Positioned},guidesCache=new Map,Guides=({node,distanceTo,reverseScale,fontSize})=>{const combinedId=node.id+"\n"+distanceTo.id;let guides=guidesCache.get(combinedId);return guides||(guides=function getDistanceGuides(selected,compared){const a=absRect(selected),b=absRect(compared),isYIntersecting=!(a.top>b.bottom||a.bottom<b.top),isXIntersecting=!(a.left>b.right||a.right<b.left);if(isXIntersecting&&isYIntersecting){const intersectCenter={x:(Math.max(a.left,b.left)+Math.min(a.right,b.right))/2,y:(Math.max(a.top,b.top)+Math.min(a.bottom,b.bottom))/2};return[{points:[{x:a.left,y:intersectCenter.y},{x:b.left,y:intersectCenter.y}]},{points:[{x:a.right,y:intersectCenter.y},{x:b.right,y:intersectCenter.y}]},{points:[{y:a.top,x:intersectCenter.x},{y:b.top,x:intersectCenter.x}]},{points:[{y:a.bottom,x:intersectCenter.x},{y:b.bottom,x:intersectCenter.x}]}]}const isALeft=a.left>b.right,isABelow=a.top>b.bottom,selectedCenter={x:selected.x+selected.width/2,y:selected.y+selected.height/2};return[isXIntersecting?null:{points:[{x:isALeft?a.left:a.right,y:selectedCenter.y},{x:isALeft?b.right:b.left,y:selectedCenter.y}],bisector:isYIntersecting?void 0:[{x:isALeft?b.right:b.left,y:selectedCenter.y},{x:isALeft?b.right:b.left,y:isABelow?b.bottom:b.top}]},isYIntersecting?null:{points:[{y:isABelow?a.top:a.bottom,x:selectedCenter.x},{y:isABelow?b.bottom:b.top,x:selectedCenter.x}],bisector:isXIntersecting?void 0:[{y:isABelow?b.bottom:b.top,x:selectedCenter.x},{y:isABelow?b.bottom:b.top,x:isALeft?b.right:b.left}]}].filter((x=>!!x))}(node.absoluteBoundingBox,distanceTo.absoluteBoundingBox),guidesCache.set(combinedId,guides)),[...guides.map((guide=>(({guide,reverseScale})=>{const xLength=Math.abs(guide.points[0].x-guide.points[1].x),yLength=Math.abs(guide.points[0].y-guide.points[1].y);return 0===xLength&&0===yLength?null:svg`
    <line
      class="distance-line"
      x1=${guide.points[0].x}
      y1=${guide.points[0].y}
      x2=${guide.points[1].x}
      y2=${guide.points[1].y}
    />

    ${guide.bisector&&svg`
        <line
          class="distance-line"
          x1=${guide.bisector[0].x}
          y1=${guide.bisector[0].y}
          x2=${guide.bisector[1].x}
          y2=${guide.bisector[1].y}
          style=${styleMap({strokeDasharray:""+4*reverseScale})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `})({guide,reverseScale}))),...guides.map((guide=>(({guide,reverseScale,fontSize})=>{const xLength=Math.abs(guide.points[0].x-guide.points[1].x),yLength=Math.abs(guide.points[0].y-guide.points[1].y);if(0===xLength&&0===yLength)return null;const text=round(Math.max(xLength,yLength)).toString(10),width=text.length*fontSize*.5,startMargin=.25*fontSize,vPadding=.25*fontSize,hPadding=.5*fontSize,x=xLength>yLength?(guide.points[0].x+guide.points[1].x)/2-width/2:guide.points[0].x,y=xLength>yLength?guide.points[0].y:(guide.points[0].y+guide.points[1].y)/2-fontSize/2,transform=[`scale(${reverseScale})`,xLength>yLength?`translate(0, ${startMargin+vPadding})`:`translate(${startMargin+hPadding}, 0)`].join(" "),cx=x+width/2,transformOrigin=xLength>yLength?`${cx} ${y}`:`${x} ${y+fontSize/2}`;return svg`
    <g class="distance-tooltip">
      <rect
        x=${x-hPadding}
        y=${y-vPadding}
        rx="2"
        width=${width+2*hPadding}
        height=${fontSize+2*vPadding}
        transform=${transform}
        transform-origin=${transformOrigin}
        stroke="none"
      />

      <text
        x=${cx}
        y=${y+fontSize-vPadding/2}
        text-anchor="middle"
        transform=${transform}
        transform-origin=${transformOrigin}
        stroke="none"
        fill="white"
        style="font-size: ${fontSize}px"
      >
        ${text}
      </text>
    </g>
  `})({guide,reverseScale,fontSize})))]},DistanceGuide_styles=css`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`;var copy_to_clipboard=__webpack_require__(20640);const CopyIcon=({onClick=()=>{}})=>svg`
  <svg @click=${onClick} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,extractColorStyle=color=>0===color.a?"transparent":color.a<1?`rgba(${rgbToIntArray(color).join(", ")}, ${color.a.toFixed(2)})`:rgbToHex(color);class Gradient{constructor(data){this.gradientHandles={start:data.gradientHandlePositions[0],end:data.gradientHandlePositions[1]},this.colors=data.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map(((color,index)=>color+" "+this.floatToPercent(this.colors[index].position)))}get cssColor(){const cssGradientArray=this.cssGradientArray;return cssGradientArray.unshift(this.angle+"deg"),`linear-gradient(${cssGradientArray.join(", ")})`}createColorObjects(colors){return colors.map((({color})=>extractColorStyle(color)))}floatToPercent(value){return(value*=100).toFixed(0)+"%"}calculateAngle(startHandle,endHandle){const radians=Math.atan(this.calculateGradient(startHandle,endHandle));return parseInt(this.radToDeg(radians).toFixed(1))}calculateGradient(startHandle,endHandle){return(endHandle.y-startHandle.y)/(endHandle.x-startHandle.x)*-1}radToDeg(radian){return 180*radian/Math.PI}}class NodeStyles{constructor(node){var _a,_b,_c;if(this.hasPadding=!1,this.height=`${Math.trunc(node.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(node.absoluteBoundingBox.width)}px`,(node.horizontalPadding||node.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${node.horizontalPadding}px`,this.verticalPadding=`${node.verticalPadding}px`),node.style&&(this.fontFamily=node.style.fontFamily,this.fontPostScriptName=null===(_a=node.style.fontPostScriptName)||void 0===_a?void 0:_a.replace("-"," "),this.fontWeight=node.style.fontWeight,this.fontSize=`${Math.ceil(node.style.fontSize)}px`,this.lineHeight=`${Math.trunc(node.style.lineHeightPx)}px`),node.rectangleCornerRadii&&(this.borderRadius=node.rectangleCornerRadii.filter((radius=>radius===node.cornerRadius)).length<4?`${node.rectangleCornerRadii.join("px ")}px`:`${node.cornerRadius}px`),node.backgroundColor||node.backgroundColor){const color=node.backgroundColor||(null===(_b=node.background)||void 0===_b?void 0:_b[0].color);this.background=extractColorStyle(color)}const fillColor=null===(_c=node.fills)||void 0===_c?void 0:_c[0];if(fillColor&&!1!==fillColor.visible&&("TEXT"===node.type?this.color=extractColorStyle(fillColor.color):fillColor.type.includes("GRADIENT")?this.backgroundImage=new Gradient(fillColor).cssColor:"SOLID"===fillColor.type&&(this.background=extractColorStyle(fillColor.color))),node.strokes&&node.strokes.length>0&&(this.borderColor=extractColorStyle(node.strokes[0].color),this.border=`${node.strokeWeight}px solid ${this.borderColor}`),node.effects&&node.effects.length>0){const{offset,radius,color}=node.effects[0];this.boxShadowColor=extractColorStyle(color),this.boxShadow=`${(null==offset?void 0:offset.x)||0}px ${(null==offset?void 0:offset.y)||0}px 0 ${radius} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(getStyleRule).join("\n")}}const rgbToIntArray=color=>[Math.trunc(255*color.r),Math.trunc(255*color.g),Math.trunc(255*color.b)],rgbToHex=color=>{const[r,g,b]=rgbToIntArray(color);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)},getStyleRule=({property,value})=>`${property}: ${value};`,View=({node,onClose})=>{if(!node)return null;const nodeStyles=new NodeStyles(node),stopPropagation=ev=>ev.stopPropagation();return html`
    <div
      class="inspector-view"
      @click=${stopPropagation}
      @wheel=${stopPropagation}
      @keydown=${stopPropagation}
      @keyup=${stopPropagation}
      @pointermove=${stopPropagation}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${node.name}</h4>
          ${(({onClick=()=>{}})=>svg`
  <svg @click=${onClick} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`)({onClick:onClose})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${nodeStyles.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${nodeStyles.height}
            </p>
          </div>
          ${nodeStyles.fontPostScriptName?html`<p class="inspector-property">
                <span>Font:</span>
                ${nodeStyles.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${nodeStyles.hasPadding?html`<div class="inspector-section">
            <h4>Layout</h4>
            ${nodeStyles.horizontalPadding&&html`<p class="inspector-property">
              ${svg`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`} ${nodeStyles.horizontalPadding}
            </p>`}
            ${nodeStyles.verticalPadding&&html`<p class="inspector-property">
              ${svg`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`} ${nodeStyles.verticalPadding}
            </p>`}
          </div>`:null}
      ${node.characters?html`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${CopyIcon({onClick:()=>copy_to_clipboard(node.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${node.characters}
            </p>
          </div>`:null}
      ${StylesSection(nodeStyles)}
    </div>
  `},StylesSection=nodeStyles=>{const styles=nodeStyles.getStyles();return html`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${CopyIcon({onClick:()=>copy_to_clipboard(nodeStyles.getStyleSheet())})}
    </div>
    <div class="code-section selectable-content">
      ${styles.map(CSSProperty)}
    </div>
  </div>`},CSSProperty=cssProperty=>{const{property,value,color}=cssProperty;let coloredSquare=null;switch(property){case"background":case"fill":case"border":case"box-shadow":case"color":coloredSquare=html`<span
        class="color-preview"
        style="background-color: ${color}"
      ></span>`;break;case"background-image":coloredSquare=html`<span
        class="color-preview"
        style="background-image: ${value}"
      ></span>`}return html`<div class="css-property" @click=${()=>copy_to_clipboard(getStyleRule(cssProperty))}>
    <span>${property}:</span>${coloredSquare}<span class="css-value">${value}</span>;</span>
  </div>`},InspectorView_styles=css`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`,Outline=({node,selected=!1,computedThickness,onClick})=>{const{x,y,width,height}=node.absoluteBoundingBox,radius="cornerRadius"in node&&node.cornerRadius?{topLeft:node.cornerRadius,topRight:node.cornerRadius,bottomRight:node.cornerRadius,bottomLeft:node.cornerRadius}:"rectangleCornerRadii"in node&&node.rectangleCornerRadii?{topLeft:node.rectangleCornerRadii[0],topRight:node.rectangleCornerRadii[1],bottomRight:node.rectangleCornerRadii[2],bottomLeft:node.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},shift=computedThickness/2,lineTo=(x,y)=>`L${x},${y}`,arcTo=(r,x,y)=>`A${r},${r} 0 0 1 ${x},${y}`,boxPath=[((x,y)=>`M${x},${y}`)(radius.topLeft+shift,shift),lineTo(width-radius.topRight,shift),arcTo(radius.topRight-shift,width-shift,radius.topRight),lineTo(width-shift,height-radius.bottomRight),arcTo(radius.bottomRight-shift,width-radius.bottomRight,height-shift),lineTo(radius.bottomLeft,height-shift),arcTo(radius.bottomLeft-shift,shift,height-radius.bottomLeft),lineTo(shift,radius.topLeft),arcTo(radius.topLeft-shift,radius.topLeft,shift),"Z"].join(" ");return svg`
    <path
      class="guide"
      d=${boxPath}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${x}, ${y})"
      ?data-selected=${selected}
      @click=${onClick}
    />
  `},Node_styles=css`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`,DAY=864e5,intervals=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:DAY,divisor:DAY,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],getTime=targetDate=>("object"==typeof targetDate?targetDate:new Date(targetDate)).getTime(),Footer_styles=css`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,Footer=metadata=>{if(!metadata||!metadata.link||void 0===metadata.link||"undefined"===metadata.link)return null;const{link,timestamp,fileName}=metadata;return html`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${link}"
  >
    <span class="figma-footer--icon"> ${svg`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`} </span>
    <span class="figma-footer--title"> ${fileName} </span>
    <span
      title="Last time edited: ${new Date(timestamp).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${((date,nowDate=Date.now(),rft=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{const diff=getTime(nowDate)-getTime(date),diffAbs=Math.abs(diff);for(const interval of intervals)if(diffAbs>=interval.gte){const x=Math.round(Math.abs(diff)/interval.divisor),isInFuture=diff<0,intervalUnit=interval.unit;return intervalUnit?rft.format(isInFuture?x:-x,intervalUnit):interval.text}})(timestamp)}
    </span>
  </a>`};var ViewerMixin_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},ViewerMixin_classPrivateFieldGet=function(receiver,privateMap){if(!privateMap.has(receiver))throw new TypeError("attempted to get private field on non-instance");return privateMap.get(receiver)},ViewerMixin_classPrivateFieldSet=function(receiver,privateMap,value){if(!privateMap.has(receiver))throw new TypeError("attempted to set private field on non-instance");return privateMap.set(receiver,value),value};const ViewerMixin=superClass=>{var _canvasSize,_effectMargins,_flattenedNodes,_handleNodeClick,_getNodeById;class Viewer extends(NodeSelectableMixin(PositionedMixin(superClass))){constructor(...args){super(...args),this.zoomMargin=50,this.link="",_canvasSize.set(this,void 0),_effectMargins.set(this,void 0),_flattenedNodes.set(this,void 0),_handleNodeClick.set(this,(node=>ev=>{ev.preventDefault(),ev.stopPropagation(),this.selectedNode=node})),_getNodeById.set(this,(id=>{var _a,_b;return null!==(_b=null===(_a=ViewerMixin_classPrivateFieldGet(this,_flattenedNodes))||void 0===_a?void 0:_a.find((n=>n.id===id)))&&void 0!==_b?_b:null}))}static get styles(){return extendStyles(super.styles,[css`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,Node_styles,ErrorMessage_styles,DistanceGuide_styles,InspectorView_styles,Footer_styles])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return ViewerMixin_classPrivateFieldGet(this,_canvasSize)&&ViewerMixin_classPrivateFieldGet(this,_flattenedNodes)?null:ErrorMessage({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."})}render(){if(this.error)return this.error instanceof Error?ErrorMessage({title:this.error.name||"Error",children:this.error.message}):"string"==typeof this.error?ErrorMessage({title:"Error",children:this.error}):this.error;const canvasSize=ViewerMixin_classPrivateFieldGet(this,_canvasSize),reverseScale=1/this.scale,guideThickness=`calc(var(--guide-thickness) * ${reverseScale})`,computedGuideThickness=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),computedGuideTooltipFontSize=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return html`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${canvasSize.width}px;
          height: ${canvasSize.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map((([nodeId,uri])=>{var _a;const node=ViewerMixin_classPrivateFieldGet(this,_getNodeById).call(this,nodeId);if(!node||!("absoluteBoundingBox"in node)||!(null===(_a=ViewerMixin_classPrivateFieldGet(this,_effectMargins))||void 0===_a?void 0:_a[node.id]))return null;const margin=ViewerMixin_classPrivateFieldGet(this,_effectMargins)[node.id];return html`
                <img class="rendered-image" src="${uri}"
                style=${styleMap({top:node.absoluteBoundingBox.y-canvasSize.y+"px",left:node.absoluteBoundingBox.x-canvasSize.x+"px",marginTop:-margin.top+"px",marginLeft:-margin.left+"px",width:node.absoluteBoundingBox.width+margin.left+margin.right+"px",height:node.absoluteBoundingBox.height+margin.top+margin.bottom+"px"})}"
                " />
              `}))}
            ${this.selectedNode&&(({nodeSize:{x,y,width,height},offsetX,offsetY,reverseScale})=>html`
    <div class="tooltip" style="${styleMap({top:`${offsetY+y+height}px`,left:`${offsetX+x+width/2}px`,transform:`translateX(-50%) scale(${reverseScale}) translateY(0.25em)`})}">
      ${round(width)} x ${round(height)}
    </div>
  `)({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-canvasSize.x,offsetY:-canvasSize.y,reverseScale})}
            ${svg`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${styleMap({left:-canvasSize.x+"px",top:-canvasSize.y+"px",strokeWidth:guideThickness})}
            >
              ${this.selectedNode&&Outline({node:this.selectedNode,selected:!0,computedThickness:computedGuideThickness*reverseScale})}

              ${ViewerMixin_classPrivateFieldGet(this,_flattenedNodes).map((node=>{var _a;return node.id===(null===(_a=this.selectedNode)||void 0===_a?void 0:_a.id)?null:svg`
                  <g>
                    ${Outline({node,computedThickness:computedGuideThickness*reverseScale,onClick:ViewerMixin_classPrivateFieldGet(this,_handleNodeClick).call(this,node)})}
                    ${this.selectedNode&&Guides({node,distanceTo:this.selectedNode,reverseScale,fontSize:computedGuideTooltipFontSize})}
                  </g>
                `}))}
            </svg>
          `}
          </div>
          ${View({node:this.selectedNode,onClose:this.deselectNode})}
          ${Footer(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(changedProperties){super.updated(changedProperties)}__updateTree(node){if("CANVAS"!==node.type&&"FRAME"!==node.type&&"COMPONENT"!==node.type&&"COMPONENT_SET"!==node.type)throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");ViewerMixin_classPrivateFieldSet(this,_canvasSize,"CANVAS"===node.type?function getCanvasSize(node){const left=[],right=[],top=[],bottom=[];for(const child of node.children){if("FRAME"!==child.type&&"COMPONENT"!==child.type)continue;const{x,y,width,height}=child.absoluteBoundingBox;left.push(x),right.push(x+width),top.push(y),bottom.push(y+height)}const minX=Math.min(...left),minY=Math.min(...top);return{x:minX,y:minY,width:Math.abs(Math.max(...right)-minX),height:Math.abs(Math.min(...bottom)-minY)}}(node):node.absoluteBoundingBox),ViewerMixin_classPrivateFieldSet(this,_flattenedNodes,flattenNode(node)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;const containers=Object.keys(this.__images).map(ViewerMixin_classPrivateFieldGet(this,_getNodeById)).filter((n=>!!n));ViewerMixin_classPrivateFieldSet(this,_effectMargins,containers.reduce(((margin,node)=>"absoluteBoundingBox"in node?Object.assign(Object.assign({},margin),{[node.id]:getEffectMargin(node,flattenNode(node))}):margin),{})),this.requestUpdate()}resetZoom(){if(ViewerMixin_classPrivateFieldGet(this,_canvasSize)){const{width,height}=ViewerMixin_classPrivateFieldGet(this,_canvasSize),{width:elementWidth,height:elementHeight}=this.getBoundingClientRect(),wDiff=elementWidth/(width+2*this.zoomMargin),hDiff=elementHeight/(height+2*this.zoomMargin);this.scale=Math.min(wDiff,hDiff,1)}}}return _canvasSize=new WeakMap,_effectMargins=new WeakMap,_flattenedNodes=new WeakMap,_handleNodeClick=new WeakMap,_getNodeById=new WeakMap,ViewerMixin_decorate([property({type:Number,attribute:"zoom-margin"})],Viewer.prototype,"zoomMargin",void 0),ViewerMixin_decorate([property({type:String,attribute:"link"})],Viewer.prototype,"link",void 0),Viewer};function getEffectMargin(container,nodes){const points=nodes.map((node=>{if(!("effects"in node))return{top:node.absoluteBoundingBox.y,right:node.absoluteBoundingBox.x+node.absoluteBoundingBox.width,bottom:node.absoluteBoundingBox.y+node.absoluteBoundingBox.height,left:node.absoluteBoundingBox.x};const blurRadiuses=node.effects.filter((effect=>effect.visible&&"LAYER_BLUR"===effect.type)).map((effect=>effect.radius)),shadowMargins=node.effects.filter((effect=>effect.visible&&"DROP_SHADOW"===effect.type&&!!effect.offset)).map((effect=>({left:effect.radius-effect.offset.x,top:effect.radius-effect.offset.y,right:effect.radius+effect.offset.x,bottom:effect.radius+effect.offset.y}))),margin_top=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.top))),margin_right=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.right))),margin_bottom=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.bottom))),margin_left=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.left)));return{top:node.absoluteBoundingBox.y-margin_top,right:node.absoluteBoundingBox.x+node.absoluteBoundingBox.width+margin_right,bottom:node.absoluteBoundingBox.y+node.absoluteBoundingBox.height+margin_bottom,left:node.absoluteBoundingBox.x-margin_left}})),bounds_top=Math.min(...points.map((p=>p.top))),bounds_right=Math.max(...points.map((p=>p.right))),bounds_bottom=Math.max(...points.map((p=>p.bottom))),bounds_left=Math.min(...points.map((p=>p.left)));return{top:container.absoluteBoundingBox.y-bounds_top,right:bounds_right-container.absoluteBoundingBox.x-container.absoluteBoundingBox.width,bottom:bounds_bottom-container.absoluteBoundingBox.y-container.absoluteBoundingBox.height,left:container.absoluteBoundingBox.x-bounds_left}}function flattenNode(node,depth=0){return"absoluteBoundingBox"in node?"children"in node&&0!==node.children.length?[Object.assign(Object.assign({},node),{depth}),...node.children.map((child=>flattenNode(child,depth+1))).flat()]:[Object.assign(Object.assign({},node),{depth})]:node.children.map((child=>flattenNode(child,depth+1))).flat()}var FigspecFrameViewer_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class FigspecFrameViewer extends(ViewerMixin(LitElement)){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;const documentNode=Object.values(this.nodes.nodes)[0];return documentNode&&"absoluteBoundingBox"in documentNode.document?documentNode.document:null}get __images(){return this.documentNode&&this.renderedImage?{[this.documentNode.id]:this.renderedImage}:{}}get error(){return this.nodes&&this.renderedImage?this.documentNode?super.error?super.error:void 0:ErrorMessage({title:"Parameter Error",children:html`
          <span> Document node is empty or does not have size. </span>
        `}):ErrorMessage({title:"Parameter error",children:html`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`})}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(changedProperties){if(super.updated(changedProperties),changedProperties.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}changedProperties.has("renderedImage")&&this.__updateEffectMargins()}}FigspecFrameViewer_decorate([property({type:Object})],FigspecFrameViewer.prototype,"nodes",void 0),FigspecFrameViewer_decorate([property({type:String,attribute:"rendered-image"})],FigspecFrameViewer.prototype,"renderedImage",void 0);var _selectFirstPage,_handlePageChange,FigspecFileViewer_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},FigspecFileViewer_classPrivateFieldGet=function(receiver,privateMap){if(!privateMap.has(receiver))throw new TypeError("attempted to get private field on non-instance");return privateMap.get(receiver)};class FigspecFileViewer extends(ViewerMixin(LitElement)){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,_selectFirstPage.set(this,(()=>{var _a;this.documentNode?this.selectedPage=null!==(_a=this.documentNode.document.children.filter((c=>"CANVAS"===c.type))[0])&&void 0!==_a?_a:null:this.selectedPage=null})),_handlePageChange.set(this,(ev=>{var _a,_b;const target=ev.currentTarget;this.selectedPage=null!==(_b=null===(_a=this.documentNode)||void 0===_a?void 0:_a.document.children.find((c=>c.id===target.value)))&&void 0!==_b?_b:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)}))}get isMovable(){return!(!this.renderedImages||!this.documentNode)}get __images(){return this.renderedImages||{}}get error(){return this.documentNode&&this.renderedImages?super.error?super.error:void 0:ErrorMessage({title:"Parameter error",children:html`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`})}static get styles(){return extendStyles(super.styles,[css`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var _a;return html`
      <div class="controls">
        <select @change=${FigspecFileViewer_classPrivateFieldGet(this,_handlePageChange)}>
          ${null===(_a=this.documentNode)||void 0===_a?void 0:_a.document.children.map((c=>html`<option value=${c.id}>${c.name}</option>`))}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(FigspecFileViewer_classPrivateFieldGet(this,_selectFirstPage).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(changedProperties){super.updated(changedProperties),changedProperties.has("documentNode")&&(FigspecFileViewer_classPrivateFieldGet(this,_selectFirstPage).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),changedProperties.has("renderedImages")&&this.__updateEffectMargins()}}_selectFirstPage=new WeakMap,_handlePageChange=new WeakMap,FigspecFileViewer_decorate([property({type:Object,attribute:"document-node"})],FigspecFileViewer.prototype,"documentNode",void 0),FigspecFileViewer_decorate([property({type:Object,attribute:"rendered-images"})],FigspecFileViewer.prototype,"renderedImages",void 0),customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",FigspecFileViewer),customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",FigspecFrameViewer);var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const bindEvent=(element,event,cb)=>{const listener=ev=>{cb(ev)};return element.addEventListener(event,listener),()=>element.removeEventListener(event,listener)},es2015_FigspecFrameViewer=(0,react.forwardRef)(((_a,ref)=>{var{nodes,renderedImage,className,panSpeed,zoomMargin,zoomSpeed,onNodeSelect,onPositionChange,onScaleChange}=_a,rest=__rest(_a,["nodes","renderedImage","className","panSpeed","zoomMargin","zoomSpeed","onNodeSelect","onPositionChange","onScaleChange"]);const[refNode,setNode]=(0,react.useState)(null);(0,react.useImperativeHandle)(ref,(()=>refNode),[refNode]);const refCb=(0,react.useCallback)((node=>{node&&(setNode(node),node.nodes=nodes,node.renderedImage=renderedImage)}),[]);return(0,react.useEffect)((()=>{refNode&&(refNode.nodes=nodes,refNode.renderedImage=renderedImage)}),[refNode,nodes,renderedImage]),(0,react.useEffect)((()=>{if(refNode&&onNodeSelect)return bindEvent(refNode,"nodeselect",onNodeSelect)}),[refNode,onNodeSelect]),(0,react.useEffect)((()=>{if(refNode&&onPositionChange)return bindEvent(refNode,"positionchange",onPositionChange)}),[refNode,onPositionChange]),(0,react.useEffect)((()=>{if(refNode&&onScaleChange)return bindEvent(refNode,"scalechange",onScaleChange)}),[refNode,onScaleChange]),(0,react.createElement)("figspec-frame-viewer",Object.assign({ref:refCb,class:className,"pan-speed":panSpeed,"zoom-margin":zoomMargin,"zoom-speed":zoomSpeed},rest))})),es2015_FigspecFileViewer=(0,react.forwardRef)(((_a,ref)=>{var{documentNode,renderedImages,className,panSpeed,zoomMargin,zoomSpeed,onNodeSelect,onPositionChange,onScaleChange}=_a,rest=__rest(_a,["documentNode","renderedImages","className","panSpeed","zoomMargin","zoomSpeed","onNodeSelect","onPositionChange","onScaleChange"]);const[refNode,setNode]=(0,react.useState)(null);(0,react.useImperativeHandle)(ref,(()=>refNode),[refNode]);const refCb=(0,react.useCallback)((node=>{node&&(setNode(node),node.documentNode=documentNode,node.renderedImages=renderedImages)}),[]);return(0,react.useEffect)((()=>{refNode&&(refNode.documentNode=documentNode,refNode.renderedImages=renderedImages)}),[refNode,documentNode,renderedImages]),(0,react.useEffect)((()=>{if(refNode&&onNodeSelect)return bindEvent(refNode,"nodeselect",onNodeSelect)}),[refNode,onNodeSelect]),(0,react.useEffect)((()=>{if(refNode&&onPositionChange)return bindEvent(refNode,"positionchange",onPositionChange)}),[refNode,onPositionChange]),(0,react.useEffect)((()=>{if(refNode&&onScaleChange)return bindEvent(refNode,"scalechange",onScaleChange)}),[refNode,onScaleChange]),(0,react.createElement)("figspec-file-viewer",Object.assign({ref:refCb,class:className,"pan-speed":panSpeed,"zoom-margin":zoomMargin,"zoom-speed":zoomSpeed},rest))}));var index_b45716e8=__webpack_require__(37907),esm=__webpack_require__(40167),Figma=__webpack_require__(38570),process=__webpack_require__(34155),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},__generator=function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}},fullscreen=(0,esm.css)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"])));function unwrapJson(res){return 200!==res.status?Promise.reject(res.statusText):res.json()}var Figspec=function(_a){var config=_a.config,_b=(0,react.useState)({state:"loading"}),state=_b[0],setState=_b[1],fetchDetails=function(signal){return __awaiter(void 0,void 0,void 0,(function(){var match,fileKey,url,nodeId,accessToken,headers,nodeUrl,imageUrl,documentNode,frames_1,images_1,_a,nodes,images,err_1;return __generator(this,(function(_b){switch(_b.label){case 0:setState({state:"loading"}),_b.label=1;case 1:if(_b.trys.push([1,6,,7]),!(match=config.url.match(Figma.sC)))throw new Error(config.url+" is not a valid Figma URL.");if(fileKey=match[3],url=new URL(config.url),nodeId=url.searchParams.get("node-id"),accessToken=function getAccessToken(cfg){var _a;if(cfg.accessToken)return cfg.accessToken;try{return null!==(_a=process.env.STORYBOOK_FIGMA_ACCESS_TOKEN)&&void 0!==_a?_a:null}catch(err){return null}}(config),!accessToken)throw new Error("Personal Access Token is required.");return headers={"X-FIGMA-TOKEN":accessToken},nodeUrl=new URL("https://api.figma.com/v1/files/"+fileKey),(imageUrl=new URL("https://api.figma.com/v1/images/"+fileKey)).searchParams.set("format","svg"),nodeId?[3,4]:[4,fetch(nodeUrl.href,{headers,signal}).then(unwrapJson)];case 2:return documentNode=_b.sent(),frames_1=listAllFrames(documentNode.document),imageUrl.searchParams.set("ids",frames_1.map((function(frame){return frame.id})).join(",")),[4,fetch(imageUrl.href,{headers,signal}).then(unwrapJson)];case 3:return images_1=_b.sent(),setState({state:"fetched",value:{type:"file",props:{documentNode,renderedImages:images_1.images,link:config.url}}}),[2];case 4:return nodeUrl.pathname+="/nodes",nodeUrl.searchParams.set("ids",nodeId),imageUrl.searchParams.set("ids",nodeId),[4,Promise.all([fetch(nodeUrl.href,{headers,signal}).then(unwrapJson),fetch(imageUrl.href,{headers,signal}).then(unwrapJson)])];case 5:return _a=_b.sent(),nodes=_a[0],images=_a[1],setState({state:"fetched",value:{type:"frame",props:{nodes,renderedImage:Object.values(images.images)[0],link:config.url}}}),[3,7];case 6:return(err_1=_b.sent())instanceof DOMException&&err_1.code===DOMException.ABORT_ERR?[2]:(console.error(err_1),setState({state:"failed",error:err_1 instanceof Error?err_1.message:String(err_1)}),[3,7]);case 7:return[2]}}))}))};switch((0,react.useEffect)((function(){var fulfilled=!1,fulfil=function(){fulfilled=!0},ac=new AbortController;return fetchDetails(ac.signal).then(fulfil,fulfil),function(){fulfilled||ac.abort()}}),[config.url]),state.state){case"loading":return(0,esm.jsx)(index_b45716e8.a7,null,(0,esm.jsx)(react.Fragment,null,"Loading Figma file..."));case"failed":return(0,esm.jsx)(index_b45716e8.a7,null,(0,esm.jsx)(react.Fragment,null,"Failed to load Figma file"),(0,esm.jsx)(react.Fragment,null,state.error));case"fetched":return"file"===state.value.type?(0,esm.jsx)(es2015_FigspecFileViewer,__assign({css:fullscreen},state.value.props)):(0,esm.jsx)(es2015_FigspecFrameViewer,__assign({css:fullscreen},state.value.props))}};const components_Figspec=Figspec;function listAllFrames(node){return"absoluteBoundingBox"in node?[node]:node.children&&0!==node.children.length?node.children.map(listAllFrames).flat():[]}var templateObject_1}}]);