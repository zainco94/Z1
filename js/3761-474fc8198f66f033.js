"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3761],{33761:function(e,t,i){let a,r;i.d(t,{cg:function(){return rv.cg}});let n={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},s={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},o={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},l=Object.entries(o),d=l.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),u=l.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(u).reduce((e,[t,i])=>{let a=d[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let c=Object.entries(d).reduce((e,[t,i])=>{let a=u[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),h={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},m={DISABLED:"disabled",SHOWING:"showing"},p={MOUSE:"mouse",TOUCH:"touch"},E={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},b={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},f={FULLSCREEN:"fullscreen"},g={2:"Network Error",3:"Decode Error",4:"Source Not Supported",5:"Encryption Error"},_={2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."},y=e=>{var t,i;return 1===e.code?null:{title:null!=(t=g[e.code])?t:`Error ${e.code}`,message:null!=(i=_[e.code])?i:e.message}},T="Playback rate",A={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},k={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function w(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function I(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function S(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function R(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function C(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function D(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}({...A,...k});let L=e=>new Promise(t=>setTimeout(t,e)),M=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],x=(e,t)=>{let i=1===e?M[t].singular:M[t].plural;return`${e} ${i}`},N=e=>{if(!C(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&x(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function O(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class P{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class U extends P{}class W extends U{constructor(){super(...arguments),this.role=null}}class B{observe(){}unobserve(){}disconnect(){}}let H={createElement:function(){return new V.HTMLElement},createElementNS:function(){return new V.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},V={ResizeObserver:B,document:H,Node:U,Element:W,HTMLElement:class extends W{constructor(){super(...arguments),this.innerHTML=""}get content(){return new V.DocumentFragment}},DocumentFragment:class extends P{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},F="undefined"==typeof window||void 0===window.customElements,q=Object.keys(V).every(e=>e in globalThis),K=F&&!q?V:globalThis,$=F&&!q?H:globalThis.document,Y=new WeakMap,G=e=>{let t=Y.get(e);return t||Y.set(e,t=new Set),t},j=new K.ResizeObserver(e=>{for(let t of e)for(let e of G(t.target))e(t)});function Q(e,t){G(e).add(t),j.observe(e)}function Z(e,t){let i=G(e);i.delete(t),i.size||j.unobserve(e)}function z(e){var t;return null!=(t=X(e))?t:ea(e,"media-controller")}function X(e){var t;let{MEDIA_CONTROLLER:i}=s,a=e.getAttribute(i);if(a)return null==(t=en(e))?void 0:t.getElementById(a)}let J=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},ee=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},et=(e,t)=>ee(e,t)[0],ei=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||ei(e,t.getRootNode().host)),ea=(e,t)=>e?e.closest(t)||ea(e.getRootNode().host,t):null;function er(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=er(i.shadowRoot))?t:i:null}function en(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function es(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function eo(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function el(e,t){return function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||ed(e,t)}function ed(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function eu(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function ec(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}eu(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function eh(e,t){return e.hasAttribute(t)}function em(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}eh(e,t)!=i&&e.toggleAttribute(t,i)}function ep(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function ev(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;ep(e,t,void 0)!==a&&e.setAttribute(t,a)}var eE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eb=(e,t,i)=>(eE(e,t,"read from private field"),i?i.call(e):t.get(e)),ef=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eg=(e,t,i,a)=>(eE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let e_=$.createElement("template");e_.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class ey extends K.HTMLElement{constructor(e={}){if(super(),ef(this,rC,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=e_.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=$.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=eb(this,rC))?void 0:a.unassociateElement)||r.call(a,this),eg(this,rC,null)),i&&this.isConnected&&(eg(this,rC,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=eb(this,rC))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),eg(this,rC,function(e){var t;let i=e.getAttribute(s.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):ea(e,"media-controller")}(this)),this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=eb(this,rC))?void 0:e.associateElement)||t.call(e,this)),null==(i=eb(this,rC))||i.addEventListener("pointerdown",this),null==(a=eb(this,rC))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=eb(this,rC))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=eb(this,rC))||i.removeEventListener("pointerdown",this),null==(a=eb(this,rC))||a.removeEventListener("click",this),eg(this,rC,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===p.TOUCH){this.handleTap(e);return}if(d===p.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return eh(this,d.MEDIA_PAUSED)}set mediaPaused(e){em(this,d.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new K.CustomEvent(t,{composed:!0,bubbles:!0}))}}rC=new WeakMap,K.customElements.get("media-gesture-receiver")||K.customElements.define("media-gesture-receiver",ey);var eT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eA=(e,t,i)=>(eT(e,t,"read from private field"),i?i.call(e):t.get(e)),ek=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ew=(e,t,i,a)=>(eT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),eI=(e,t,i)=>(eT(e,t,"access private method"),i);let eS={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},eR=$.createElement("template");eR.innerHTML=`
  <style>
    
    :host([${d.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${eS.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${eS.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${eS.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${eS.AUDIO}])[${eS.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${eS.AUDIO}])[${eS.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${eS.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${eS.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${eS.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${eS.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${eS.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
      opacity: 1;
      transition: var(--media-control-transition-in, opacity 0.25s);
    }

    
    :host([${eS.USER_INACTIVE}]:not([${d.MEDIA_PAUSED}]):not([${d.MEDIA_IS_AIRPLAYING}]):not([${d.MEDIA_IS_CASTING}]):not([${eS.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${eS.NO_AUTOHIDE}]):not([role=dialog])) {
      opacity: 0;
      transition: var(--media-control-transition-out, opacity 1s);
    }

    :host([${eS.USER_INACTIVE}]:not([${d.MEDIA_PAUSED}]):not([${d.MEDIA_IS_CASTING}]):not([${eS.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${eS.AUDIO}])[${d.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role=dialog]) {
      width: 100%;
      height: 100%;
      align-self: center;
    }

    ::slotted([role=menu]) {
      align-self: end;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
  <slot name="dialog" part="layer dialog-layer"></slot>
`;let eC=Object.values(d);function eD(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(eS.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=parseInt(a[e])),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(u.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(u.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class eL extends K.HTMLElement{constructor(){super(),ek(this,rO),ek(this,rB),ek(this,rV),ek(this,rq),ek(this,r$),ek(this,rG),ek(this,rD,0),ek(this,rL,null),ek(this,rM,null),ek(this,rx,void 0),this.breakpointsComputed=!1,ek(this,rN,new MutationObserver(eI(this,rO,rP).bind(this))),ek(this,rU,!1),ek(this,rW,e=>{eA(this,rU)||(setTimeout(()=>{eD(e.target,e.contentRect.width),ew(this,rU,!1)},0),ew(this,rU,!0))}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(eR.content.cloneNode(!0)));let e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){eA(this,rL)&&this.mediaUnsetCallback(eA(this,rL));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[eS.AUTOHIDE,eS.GESTURES_DISABLED].concat(eC).filter(e=>![d.MEDIA_RENDITION_LIST,d.MEDIA_AUDIO_TRACK_LIST,d.MEDIA_CHAPTERS_CUES,d.MEDIA_WIDTH,d.MEDIA_HEIGHT,d.MEDIA_ERROR,d.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==eS.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(ew(this,rL,e),e.localName.includes("-")&&await K.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;eA(this,rN).observe(this,{childList:!0,subtree:!0}),Q(this,eA(this,rW));let t=null!=this.getAttribute(eS.AUDIO)?A.AUDIO_PLAYER():A.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(eS.USER_INACTIVE,""),eD(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=K.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;eA(this,rN).disconnect(),Z(this,eA(this,rW)),this.media&&this.mediaUnsetCallback(this.media),null==(e=K.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){ew(this,rL,null)}handleEvent(e){switch(e.type){case"pointerdown":ew(this,rD,e.timeStamp);break;case"pointermove":eI(this,rB,rH).call(this,e);break;case"pointerup":eI(this,rV,rF).call(this,e);break;case"mouseleave":eI(this,rq,rK).call(this);break;case"mouseup":this.removeAttribute(eS.KEYBOARD_CONTROL);break;case"keyup":eI(this,rG,rj).call(this),this.setAttribute(eS.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);ew(this,rx,isNaN(t)?0:t)}get autohide(){return(void 0===eA(this,rx)?2:eA(this,rx)).toString()}}rD=new WeakMap,rL=new WeakMap,rM=new WeakMap,rx=new WeakMap,rN=new WeakMap,rO=new WeakSet,rP=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},rU=new WeakMap,rW=new WeakMap,rB=new WeakSet,rH=function(e){!("mouse"!==e.pointerType&&e.timeStamp-eA(this,rD)<250)&&(eI(this,r$,rY).call(this),clearTimeout(eA(this,rM)),[this,this.media].includes(e.target)&&eI(this,rG,rj).call(this))},rV=new WeakSet,rF=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(eS.USER_INACTIVE);[this,this.media].includes(e.target)&&t?eI(this,rq,rK).call(this):eI(this,rG,rj).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&eI(this,rG,rj).call(this)},rq=new WeakSet,rK=function(){if(0>eA(this,rx)||this.hasAttribute(eS.USER_INACTIVE))return;this.setAttribute(eS.USER_INACTIVE,"");let e=new K.CustomEvent(u.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},r$=new WeakSet,rY=function(){if(!this.hasAttribute(eS.USER_INACTIVE))return;this.removeAttribute(eS.USER_INACTIVE);let e=new K.CustomEvent(u.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},rG=new WeakSet,rj=function(){eI(this,r$,rY).call(this),clearTimeout(eA(this,rM));let e=parseInt(this.autohide);e<0||ew(this,rM,setTimeout(()=>{eI(this,rq,rK).call(this)},1e3*e))},K.customElements.get("media-container")||K.customElements.define("media-container",eL);var eM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ex=(e,t,i)=>(eM(e,t,"read from private field"),i?i.call(e):t.get(e)),eN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eO=(e,t,i,a)=>(eM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class eP{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){eN(this,rJ),eN(this,rQ,void 0),eN(this,rZ,void 0),eN(this,rz,void 0),eN(this,rX,new Set),eO(this,rQ,e),eO(this,rZ,t),eO(this,rz,new Set(i))}[Symbol.iterator](){return ex(this,rJ,r0).values()}get length(){return ex(this,rJ,r0).size}get value(){var e;return null!=(e=[...ex(this,rJ,r0)].join(" "))?e:""}set value(e){var t;e!==this.value&&(eO(this,rX,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...ex(this,rJ,r0)][e]}values(){return ex(this,rJ,r0).values()}forEach(e,t){ex(this,rJ,r0).forEach(e,t)}add(...e){var t,i;e.forEach(e=>ex(this,rX).add(e)),(""!==this.value||(null==(t=ex(this,rQ))?void 0:t.hasAttribute(`${ex(this,rZ)}`)))&&(null==(i=ex(this,rQ))||i.setAttribute(`${ex(this,rZ)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>ex(this,rX).delete(e)),null==(t=ex(this,rQ))||t.setAttribute(`${ex(this,rZ)}`,`${this.value}`)}contains(e){return ex(this,rJ,r0).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}rQ=new WeakMap,rZ=new WeakMap,rz=new WeakMap,rX=new WeakMap,rJ=new WeakSet,r0=function(){return ex(this,rX).size?ex(this,rX):ex(this,rz)};let eU=(e="")=>e.split(/\s+/),eW=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?h.CAPTIONS:h.SUBTITLES,language:i,label:r}},eB=(e="",t={})=>eU(e).map(e=>{let i=eW(e);return{...t,...i}}),eH=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?eW(e):e):"string"==typeof e?eB(e):[e]:[],eV=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,eF=(e=[])=>Array.prototype.map.call(e,eV).join(" "),eq=(e,t)=>i=>i[e]===t,eK=e=>{let t=Object.entries(e).map(([e,t])=>eq(e,t));return e=>t.every(t=>t(e))},e$=(e,t=[],i=[])=>{let a=eH(i).map(eK);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},eY=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:eK(t);return Array.from(e.textTracks).filter(i)},eG=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(d.MEDIA_SUBTITLES_SHOWING)},ej=e=>{var t;let{media:i,fullscreenElement:a}=e,r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){let e=null==(t=a[r])?void 0:t.call(a);if(e instanceof Promise)return e.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()},eQ="exitFullscreen"in $?"exitFullscreen":"webkitExitFullscreen"in $?"webkitExitFullscreen":"webkitCancelFullScreen"in $?"webkitCancelFullScreen":void 0,eZ=e=>{var t;let{documentElement:i}=e;if(eQ){let e=null==(t=null==i?void 0:i[eQ])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},ez="fullscreenElement"in $?"fullscreenElement":"webkitFullscreenElement"in $?"webkitFullscreenElement":void 0,eX=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[ez];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===f.FULLSCREEN?i:a},eJ=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=eX(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(ez in e))return ei(n,r);for(;null==e?void 0:e[ez];){if(e[ez]===r)return!0;e=null==(t=e[ez])?void 0:t.shadowRoot}}return!1},e0="fullscreenEnabled"in $?"fullscreenEnabled":"webkitFullscreenEnabled"in $?"webkitFullscreenEnabled":void 0,e1=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[e0])||i&&"webkitSupportsFullscreen"in i},e2=()=>{var e;return a||(a=null==(e=null==$?void 0:$.createElement)?void 0:e.call($,"video"))},e3=async(e=e2())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([e4(e,i.signal),e5(e,t)]);return i.abort(),a},e4=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),e5=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await L(10)}return e.volume!==t},e9=/.*Version\/.*Safari\/.*/.test(K.navigator.userAgent),e8=(e=e2())=>(!K.matchMedia("(display-mode: standalone)").matches||!e9)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),e7=(e=e2())=>e1({documentElement:$,media:e}),e6=e7(),te=e8(),tt=!!K.WebKitPlaybackTargetAvailabilityEvent,ti=!!K.chrome,ta=e=>eY(e.media,e=>[h.SUBTITLES,h.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),tr=e=>eY(e.media,e=>e.mode===m.SHOWING&&[h.SUBTITLES,h.CAPTIONS].includes(e.kind)),tn=(e,t)=>{let i=ta(e),a=tr(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)e$(m.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;e$(m.DISABLED,i,a),e$(m.SHOWING,i,[{language:n,label:s,kind:o}])}}},ts=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?to(e,t):Object.entries(e).every(([e,i])=>e in t&&ts(i,t[e])))),to=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>ts(e,t[i])))},tl=Object.values(b),td=e3().then(e=>r=e),tu=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof K.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=K.customElements.get(t);i&&e instanceof i||(await K.customElements.whenDefined(t),K.customElements.upgrade(e))}))},tc={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;i&&(i.muted=e)},mediaEvents:["volumechange"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?K.localStorage.removeItem("media-chrome-pref-volume"):K.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let i=K.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;tc.mediaVolume.set(+i,t),e(+i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&C(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[b.LIVE,b.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(tl.includes(r))return r===b.UNKNOWN?a:r;let n=t.duration;return n===1/0?b.LIVE:Number.isFinite(n)?b.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=tc.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===b.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(tc.mediaStreamType.get(e)!==b.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>ta(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>tr(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![h.CAPTIONS,h.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||tn(t,!0))};return null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),s(),()=>{var e,t;null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=eY(i,{kind:h.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&ei(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!$.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else $.pictureInPictureElement&&$.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>eJ(e),set(e,t){e?ej(t):eZ(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&K.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!e6||!e7(t))return E.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!te||!e8(t))return E.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return E.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&td.then(t=>e(t?void 0:E.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return ti&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?E.UNAVAILABLE:void 0:E.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>tt?(null==t?void 0:t.availability)==="not-available"?E.UNAVAILABLE:void 0:E.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:E.UNAVAILABLE:E.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?E.UNAVAILABLE:void 0:E.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},th={[n.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=eY(l,{kind:h.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[n.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[n.MEDIA_PLAY_REQUEST](e,t){var i;if(e.mediaStreamType.get(t)===b.LIVE){let a=!(e.mediaTargetLiveWindow.get(t)>0),r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];a&&r&&e.mediaCurrentTime.set(r,t)}e.mediaPaused.set(!1,t)},[n.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[n.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[n.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[n.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[n.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[n.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i;let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];Number.isNaN(Number(a))||e.mediaCurrentTime.set(a,t)},[n.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=ta(t),s=eH(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&K.localStorage.setItem("media-chrome-pref-subtitles-lang",o),e$(m.SHOWING,n,s)},[n.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=ta(t);e$(m.DISABLED,a,null!=i?i:[])},[n.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){tn(t,i)},[n.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[n.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[n.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[n.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[n.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[n.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[n.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[n.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[n.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},tm=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=tc,requestMap:r=th,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||ts(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,E,b,f,g,_,y,T,A,k,w,I;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await tu(...Object.values(e));let R=l.length>0&&0===t&&s,C=d.media!==o.media,D=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(E=o.media)?void 0:E.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(f=o.media)?void 0:f.remote),N=d.documentElement!==o.documentElement,O=!!d.media&&(C||R),P=!!(null==(g=d.media)?void 0:g.textTracks)&&(D||R),U=!!(null==(_=d.media)?void 0:_.videoRenditions)&&(L||R),W=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||R),B=!!(null==(T=d.media)?void 0:T.remote)&&(x||R),H=!!d.documentElement&&(N||R),V=O||P||U||W||B||H,F=0===l.length&&1===t&&s,q=!!o.media&&(C||F),K=!!(null==(A=o.media)?void 0:A.textTracks)&&(D||F),$=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||F),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||F),G=!!(null==(I=o.media)?void 0:I.remote)&&(x||F),j=!!o.documentElement&&(N||F),Q=q||K||$||Y||G||j;if(!(V||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),K&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),$&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&H&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let E=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{E&&V&&E(),Q&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}};var tp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tv=(e,t,i)=>(tp(e,t,"read from private field"),i?i.call(e):t.get(e)),tE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tb=(e,t,i,a)=>(tp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tf=(e,t,i)=>(tp(e,t,"access private method"),i);let tg=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],t_={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class ty extends eL{constructor(){super(),tE(this,r8),tE(this,r6),tE(this,nt),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,tE(this,r1,new eP(this,t_.HOTKEYS)),tE(this,r2,void 0),tE(this,r3,void 0),tE(this,r4,void 0),tE(this,r5,void 0),tE(this,r9,e=>{var t;null==(t=tv(this,r3))||t.dispatch(e)}),this.associateElement(this);let e={};tb(this,r4,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new K.CustomEvent(c[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(t_.NO_HOTKEYS,t_.HOTKEYS,t_.DEFAULT_STREAM_TYPE,t_.DEFAULT_SUBTITLES,t_.DEFAULT_DURATION)}get mediaStore(){return tv(this,r3)}set mediaStore(e){var t,i;if(tv(this,r3)&&(null==(t=tv(this,r5))||t.call(this),tb(this,r5,void 0)),tb(this,r3,e),!tv(this,r3)&&!this.hasAttribute(t_.NO_DEFAULT_STORE)){tf(this,r8,r7).call(this);return}tb(this,r5,null==(i=tv(this,r3))?void 0:i.subscribe(tv(this,r4)))}get fullscreenElement(){var e;return null!=(e=tv(this,r2))?e:this}set fullscreenElement(e){var t;this.hasAttribute(t_.FULLSCREEN_ELEMENT)&&this.removeAttribute(t_.FULLSCREEN_ELEMENT),tb(this,r2,e),null==(t=tv(this,r3))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,t,i){var a,r,n,s,o,l;if(super.attributeChangedCallback(e,t,i),e===t_.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(t_.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===t_.HOTKEYS)tv(this,r1).value=i;else if(e===t_.DEFAULT_SUBTITLES&&i!==t)null==(a=tv(this,r3))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(t_.DEFAULT_SUBTITLES)}});else if(e===t_.DEFAULT_STREAM_TYPE)null==(n=tv(this,r3))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(t_.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===t_.LIVE_EDGE_OFFSET)null==(s=tv(this,r3))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(t_.LIVE_EDGE_OFFSET)?+this.getAttribute(t_.LIVE_EDGE_OFFSET):void 0}});else if(e===t_.FULLSCREEN_ELEMENT){let e=i?null==(o=this.getRootNode())?void 0:o.getElementById(i):void 0;tb(this,r2,e),null==(l=tv(this,r3))||l.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,t;tv(this,r3)||this.hasAttribute(t_.NO_DEFAULT_STORE)||tf(this,r8,r7).call(this),null==(e=tv(this,r3))||e.dispatch({type:"documentelementchangerequest",detail:$}),super.connectedCallback(),tv(this,r3)&&!tv(this,r5)&&tb(this,r5,null==(t=tv(this,r3))?void 0:t.subscribe(tv(this,r4))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),tv(this,r3)&&(null==(t=tv(this,r3))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=tv(this,r3))||i.dispatch({type:n.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),tv(this,r5)&&(null==(a=tv(this,r5))||a.call(this),tb(this,r5,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=tv(this,r3))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=tv(this,r3))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){tM(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=tx(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(n).forEach(t=>{e.addEventListener(t,tv(this,r9))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(n).forEach(t=>{e.removeEventListener(t,tv(this,r9))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),tv(this,r3)&&Object.entries(tv(this,r3).getState()).forEach(([t,i])=>{tM([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",tf(this,nt,ni))}disableHotkeys(){this.removeEventListener("keydown",tf(this,nt,ni)),this.removeEventListener("keyup",tf(this,r6,ne))}get hotkeys(){return tv(this,r1)}keyboardShortcutHandler(e){var t,i,a,r,s;let o,l,d;let u=e.target;if(!((null!=(a=null!=(i=null==(t=u.getAttribute(t_.KEYS_USED))?void 0:t.split(" "))?i:null==u?void 0:u.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||tv(this,r1).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&tv(this,r1).contains("nospace")))switch(e.key){case" ":case"k":o=tv(this,r3).getState().mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new K.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o="off"===this.mediaStore.getState().mediaVolumeLevel?n.MEDIA_UNMUTE_REQUEST:n.MEDIA_MUTE_REQUEST,this.dispatchEvent(new K.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.mediaStore.getState().mediaIsFullscreen?n.MEDIA_EXIT_FULLSCREEN_REQUEST:n.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new K.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new K.CustomEvent(n.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(t_.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(t_.KEYBOARD_BACKWARD_SEEK_OFFSET):10;l=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),d=new K.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d);break}case"ArrowRight":{let e=this.hasAttribute(t_.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(t_.KEYBOARD_FORWARD_SEEK_OFFSET):10;l=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),d=new K.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d)}}}}r1=new WeakMap,r2=new WeakMap,r3=new WeakMap,r4=new WeakMap,r5=new WeakMap,r9=new WeakMap,r8=new WeakSet,r7=function(){var e;this.mediaStore=tm({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(t_.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(t_.DEFAULT_DURATION)?+this.getAttribute(t_.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(t_.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(t_.LIVE_EDGE_OFFSET)?+this.getAttribute(t_.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(t_.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(t_.NO_SUBTITLES_LANG_PREF)}})},r6=new WeakSet,ne=function(e){let{key:t}=e;if(!tg.includes(t)){this.removeEventListener("keyup",tf(this,r6,ne));return}this.keyboardShortcutHandler(e)},nt=new WeakSet,ni=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!tg.includes(a)){this.removeEventListener("keyup",tf(this,r6,ne));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(tv(this,r1).contains(`no${a.toLowerCase()}`)||" "===a&&tv(this,r1).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",tf(this,r6,ne),{once:!0})};let tT=Object.values(d),tA=Object.values(o),tk=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(K.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let o=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,s.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(e=>tT.includes(e)):[]},tw=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&K.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof K.customElements.get(e.nodeName.toLowerCase()))&&K.customElements.upgrade(e),tA.some(t=>t in e)},tI=e=>tw(e)||!!tk(e).length,tS=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},tR={[d.MEDIA_SUBTITLES_LIST]:eF,[d.MEDIA_SUBTITLES_SHOWING]:eF,[d.MEDIA_SEEKABLE]:tS,[d.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(tS).join(" "),[d.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[d.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(w).join(" ")},[d.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(S).join(" ")}},tC=async(e,t,i)=>{var a,r;if(e.isConnected||await L(0),"boolean"==typeof i||null==i)return em(e,t,i);if("number"==typeof i)return ec(e,t,i);if("string"==typeof i)return ev(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=tR[t])?void 0:a.call(tR,i))?r:i;return e.setAttribute(t,n)},tD=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},tL=(e,t)=>{if(tD(e))return;let i=(e,t)=>{var i,a;tI(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>tL(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!tI(e)){K.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},tM=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=tk(e),r=t.toLowerCase();a.includes(r)&&tC(e,r,i)})},tx=(e,t,i)=>{tL(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(n.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(n.UNREGISTER_MEDIA_STATE_RECEIVER,r);let o=[],l=e=>{let a=e.target;"media"!==a.name&&(o.forEach(e=>tL(e,i)),(o=[...a.assignedElements({flatten:!0})]).forEach(e=>tL(e,t)))};e.addEventListener("slotchange",l);let d=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:o,attributeName:l}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>tL(e,t)),Array.prototype.forEach.call(r,e=>tL(e,i))):"attributes"===n&&l===s.MEDIA_CHROME_ATTRIBUTES&&(tI(o)?t(o):i(o))})});return d.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{tL(e,i),e.removeEventListener("slotchange",l),d.disconnect(),e.removeEventListener(n.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(n.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};K.customElements.get("media-controller")||K.customElements.define("media-controller",ty);var tN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tO=(e,t,i)=>(tN(e,t,"read from private field"),i?i.call(e):t.get(e)),tP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tU=(e,t,i,a)=>(tN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tW=(e,t,i)=>(tN(e,t,"access private method"),i);let tB={TOOLTIP_PLACEMENT:"tooltipplacement"},tH=$.createElement("template");tH.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;class tV extends K.HTMLElement{constructor(e={}){var t;if(super(),tP(this,nl),tP(this,na,void 0),this.preventClick=!1,this.tooltipEl=null,this.tooltipContent="",tP(this,nr,e=>{this.preventClick||this.handleClick(e),setTimeout(tO(this,nn),0)}),tP(this,nn,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),tP(this,ns,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",tO(this,ns));return}this.preventClick||this.handleClick(e)}),tP(this,no,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",tO(this,ns));return}this.addEventListener("keyup",tO(this,ns),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let i=tH.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=$.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),e.tooltipContent&&(i.querySelector('slot[name="tooltip-content"]').innerHTML=null!=(t=e.tooltipContent)?t:"",this.tooltipContent=e.tooltipContent),this.nativeEl.appendChild(a.content.cloneNode(!0)),this.shadowRoot.appendChild(i)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",tB.TOOLTIP_PLACEMENT,s.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",tO(this,nr)),this.addEventListener("keydown",tO(this,no)),this.tabIndex=0}disable(){this.removeEventListener("click",tO(this,nr)),this.removeEventListener("keydown",tO(this,no)),this.removeEventListener("keyup",tO(this,ns)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=tO(this,na))?void 0:a.unassociateElement)||r.call(a,this),tU(this,na,null)),i&&this.isConnected&&(tU(this,na,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=tO(this,na))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===tB.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),tO(this,nn).call(this)}connectedCallback(){var e,t,i;let{style:a}=el(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(tU(this,na,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=tO(this,na))?void 0:t.associateElement)||i.call(t,this)),K.customElements.whenDefined("media-tooltip").then(()=>tW(this,nl,nd).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=tO(this,na))?void 0:e.unassociateElement)||t.call(e,this),tU(this,na,null),this.removeEventListener("mouseenter",tO(this,nn)),this.removeEventListener("focus",tO(this,nn)),this.removeEventListener("click",tO(this,nr))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ep(this,tB.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){ev(this,tB.TOOLTIP_PLACEMENT,e)}handleClick(e){}}na=new WeakMap,nr=new WeakMap,nn=new WeakMap,ns=new WeakMap,no=new WeakMap,nl=new WeakSet,nd=function(){this.addEventListener("mouseenter",tO(this,nn)),this.addEventListener("focus",tO(this,nn)),this.addEventListener("click",tO(this,nr));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},K.customElements.get("media-chrome-button")||K.customElements.define("media-chrome-button",tV);let tF=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,tq=$.createElement("template");tq.innerHTML=`
  <style>
    :host([${d.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${d.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${d.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${d.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${tF}</slot>
    <slot name="exit">${tF}</slot>
  </slot>
`;let tK=`
  <slot name="tooltip-enter">Start airplay</slot>
  <slot name="tooltip-exit">Stop airplay</slot>
`,t$=e=>{let t=e.mediaIsAirplaying?k.EXIT_AIRPLAY():k.ENTER_AIRPLAY();e.setAttribute("aria-label",t)};class tY extends tV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_AIRPLAYING,d.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:tq,tooltipContent:tK,...e})}connectedCallback(){super.connectedCallback(),t$(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_AIRPLAYING&&t$(this)}get mediaIsAirplaying(){return eh(this,d.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){em(this,d.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ep(this,d.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){ev(this,d.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new K.CustomEvent(n.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}K.customElements.get("media-airplay-button")||K.customElements.define("media-airplay-button",tY);let tG=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,tj=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,tQ=$.createElement("template");tQ.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${tG}</slot>
    <slot name="off">${tj}</slot>
  </slot>
`;let tZ=`
  <slot name="tooltip-enable">Enable captions</slot>
  <slot name="tooltip-disable">Disable captions</slot>
`,tz=e=>{e.setAttribute("aria-checked",eG(e).toString())};class tX extends tV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:tQ,tooltipContent:tZ,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",A.CLOSED_CAPTIONS()),tz(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_SHOWING&&tz(this)}get mediaSubtitlesList(){return tJ(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){t0(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return tJ(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){t0(this,d.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new K.CustomEvent(n.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}let tJ=(e,t)=>{let i=e.getAttribute(t);return i?eB(i):[]},t0=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eF(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};K.customElements.get("media-captions-button")||K.customElements.define("media-captions-button",tX);let t1=$.createElement("template");t1.innerHTML=`
  <style>
  :host([${d.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${d.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${d.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${d.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let t2=`
  <slot name="tooltip-enter">Start casting</slot>
  <slot name="tooltip-exit">Stop casting</slot>
`,t3=e=>{let t=e.mediaIsCasting?k.EXIT_CAST():k.ENTER_CAST();e.setAttribute("aria-label",t)};class t4 extends tV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_CASTING,d.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:t1,tooltipContent:t2,...e})}connectedCallback(){super.connectedCallback(),t3(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_CASTING&&t3(this)}get mediaIsCasting(){return eh(this,d.MEDIA_IS_CASTING)}set mediaIsCasting(e){em(this,d.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ep(this,d.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){ev(this,d.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?n.MEDIA_EXIT_CAST_REQUEST:n.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new K.CustomEvent(e,{composed:!0,bubbles:!0}))}}K.customElements.get("media-cast-button")||K.customElements.define("media-cast-button",t4);var t5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t9=(e,t,i)=>(t5(e,t,"read from private field"),i?i.call(e):t.get(e)),t8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t7=(e,t,i,a)=>(t5(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),t6=(e,t,i)=>(t5(e,t,"access private method"),i);let ie="open";class it extends K.HTMLElement{constructor(){super(),t8(this,nm),t8(this,nv),t8(this,nb),t8(this,ng),t8(this,ny),t8(this,nA),t8(this,nu,!1),t8(this,nc,null),t8(this,nh,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[ie,"anchor"]}get open(){return eh(this,ie)}set open(e){em(this,ie,e)}handleEvent(e){switch(e.type){case"invoke":t6(this,ng,n_).call(this,e);break;case"focusout":t6(this,ny,nT).call(this,e);break;case"keydown":t6(this,nA,nk).call(this,e)}}connectedCallback(){t6(this,nm,np).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){t6(this,nm,np).call(this),e===ie&&i!==t&&(this.open?t6(this,nv,nE).call(this):t6(this,nb,nf).call(this))}focus(){t7(this,nc,er());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}nu=new WeakMap,nc=new WeakMap,nh=new WeakMap,nm=new WeakSet,np=function(){if(!t9(this,nu)&&(t7(this,nu,!0),!this.shadowRoot)){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);this.shadowRoot.innerHTML=`
        ${this.constructor.getTemplateHTML(e)}
      `}},nv=new WeakSet,nE=function(){var e;null==(e=t9(this,nh))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},nb=new WeakSet,nf=function(){var e;null==(e=t9(this,nh))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},ng=new WeakSet,n_=function(e){t7(this,nh,e.relatedTarget),ei(this,e.relatedTarget)||(this.open=!this.open)},ny=new WeakSet,nT=function(e){var t;!ei(this,e.relatedTarget)&&(null==(t=t9(this,nc))||t.focus(),t9(this,nh)&&t9(this,nh)!==e.relatedTarget&&this.open&&(this.open=!1))},nA=new WeakSet,nk=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=t9(this,nc))||n.focus(),this.open=!1))},it.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        transition: display .15s, opacity .15s ease-in, transform .15s ease-in;
        transition-behavior: allow-discrete;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, opacity .2s ease-out, transform .15s ease-out;
        transition-behavior: allow-discrete;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},it.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},K.customElements.get("media-chrome-dialog")||K.customElements.define("media-chrome-dialog",it);var ii=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ia=(e,t,i)=>(ii(e,t,"read from private field"),i?i.call(e):t.get(e)),ir=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},is=(e,t,i,a)=>(ii(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),io=(e,t,i)=>(ii(e,t,"access private method"),i);let il=$.createElement("template");il.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb,
    ::slotted([slot=thumb]) {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      translate: -50%;
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    #thumb {
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      border: var(--media-range-thumb-border, none);
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <slot name="thumb">
        <div id="thumb" part="thumb"></div>
      </slot>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class id extends K.HTMLElement{constructor(){super(),ir(this,nN),ir(this,nP),ir(this,nW),ir(this,nH),ir(this,nF),ir(this,nK),ir(this,nY),ir(this,nj),ir(this,nw,void 0),ir(this,nI,void 0),ir(this,nS,void 0),ir(this,nR,void 0),ir(this,nC,{}),ir(this,nD,[]),ir(this,nL,()=>{if(this.range.matches(":focus-visible")){let{style:e}=el(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),ir(this,nM,()=>{let{style:e}=el(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),ir(this,nx,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(il.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),is(this,nS,this.shadowRoot.querySelector("#startpoint")),is(this,nR,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ia(this,nw))?void 0:a.unassociateElement)||r.call(a,this),is(this,nw,null)),i&&this.isConnected&&(is(this,nw,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ia(this,nw))?void 0:o.associateElement)||l.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),io(this,nP,nU).call(this)):(this.range.setAttribute(e,i),io(this,nW,nB).call(this)))}connectedCallback(){var e,t,i;let{style:a}=el(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ia(this,nC).pointer=el(this.shadowRoot,"#pointer"),ia(this,nC).progress=el(this.shadowRoot,"#progress"),ia(this,nC).thumb=el(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ia(this,nC).activeSegment=el(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(is(this,nw,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ia(this,nw))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ia(this,nL)),this.shadowRoot.addEventListener("focusout",ia(this,nM)),io(this,nP,nU).call(this),Q(this.container,ia(this,nx))}disconnectedCallback(){var e,t;io(this,nW,nB).call(this),null==(t=null==(e=ia(this,nw))?void 0:e.unassociateElement)||t.call(e,this),is(this,nw,null),this.shadowRoot.removeEventListener("focusin",ia(this,nL)),this.shadowRoot.removeEventListener("focusout",ia(this,nM)),Z(this.container,ia(this,nx))}updatePointerBar(e){var t;null==(t=ia(this,nC).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=ia(this,nC).progress)||e.style.setProperty("width",`${i}%`),null==(t=ia(this,nC).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];is(this,nD,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=$.createElementNS("http://www.w3.org/2000/svg","rect"),c=el(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return Math.max(0,Math.min(1,function(e,t,i,a){let r=eo(i,a),n=eo(i,{x:e,y:t}),s=eo(a,{x:e,y:t});return n>r||s>r?n>s?1:0:n/r}(e.clientX,e.clientY,ia(this,nS).getBoundingClientRect(),ia(this,nR).getBoundingClientRect())))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":io(this,nj,nQ).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":io(this,nF,nq).call(this,e);break;case"pointerdown":io(this,nH,nV).call(this,e);break;case"pointerup":io(this,nK,n$).call(this);break;case"pointerleave":io(this,nY,nG).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}nw=new WeakMap,nI=new WeakMap,nS=new WeakMap,nR=new WeakMap,nC=new WeakMap,nD=new WeakMap,nL=new WeakMap,nM=new WeakMap,nx=new WeakMap,nN=new WeakSet,nO=function(e){let t=ia(this,nC).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=ia(this,nD).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},nP=new WeakSet,nU=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},nW=new WeakSet,nB=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=K.window)||e.removeEventListener("pointerup",this),null==(t=K.window)||t.removeEventListener("pointermove",this)},nH=new WeakSet,nV=function(e){var t;is(this,nI,e.composedPath().includes(this.range)),null==(t=K.window)||t.addEventListener("pointerup",this)},nF=new WeakSet,nq=function(e){var t;"mouse"!==e.pointerType&&io(this,nH,nV).call(this,e),this.addEventListener("pointerleave",this),null==(t=K.window)||t.addEventListener("pointermove",this)},nK=new WeakSet,n$=function(){var e;null==(e=K.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},nY=new WeakSet,nG=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=K.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=ia(this,nC).activeSegment)||t.style.removeProperty("transform")},nj=new WeakSet,nQ=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),io(this,nN,nO).call(this,e),this.dragging&&("mouse"!==e.pointerType||!ia(this,nI))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},K.customElements.get("media-chrome-range")||K.customElements.define("media-chrome-range",id);var iu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ic=(e,t,i)=>(iu(e,t,"read from private field"),i?i.call(e):t.get(e)),ih=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},im=(e,t,i,a)=>(iu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ip=$.createElement("template");ip.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;class iv extends K.HTMLElement{constructor(){super(),ih(this,nZ,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ip.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ic(this,nZ))?void 0:a.unassociateElement)||r.call(a,this),im(this,nZ,null)),i&&this.isConnected&&(im(this,nZ,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ic(this,nZ))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(im(this,nZ,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ic(this,nZ))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ic(this,nZ))?void 0:e.unassociateElement)||t.call(e,this),im(this,nZ,null)}}nZ=new WeakMap,K.customElements.get("media-control-bar")||K.customElements.define("media-control-bar",iv);var iE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ib=(e,t,i)=>(iE(e,t,"read from private field"),i?i.call(e):t.get(e)),ig=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},i_=(e,t,i,a)=>(iE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iy=$.createElement("template");iy.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class iT extends K.HTMLElement{constructor(){super(),ig(this,nz,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iy.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ib(this,nz))?void 0:a.unassociateElement)||r.call(a,this),i_(this,nz,null)),i&&this.isConnected&&(i_(this,nz,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ib(this,nz))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let{style:a}=el(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(s.MEDIA_CONTROLLER);r&&(i_(this,nz,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ib(this,nz))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ib(this,nz))?void 0:e.unassociateElement)||t.call(e,this),i_(this,nz,null)}}nz=new WeakMap,K.customElements.get("media-text-display")||K.customElements.define("media-text-display",iT);var iA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ik=(e,t,i)=>(iA(e,t,"read from private field"),i?i.call(e):t.get(e)),iw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iI=(e,t,i,a)=>(iA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class iS extends iT{constructor(){super(),iw(this,nX,void 0),iI(this,nX,this.shadowRoot.querySelector("slot")),ik(this,nX).textContent=O(0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===d.MEDIA_DURATION&&(ik(this,nX).textContent=O(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return eu(this,d.MEDIA_DURATION)}set mediaDuration(e){ec(this,d.MEDIA_DURATION,e)}}nX=new WeakMap,K.customElements.get("media-duration-display")||K.customElements.define("media-duration-display",iS);var iR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iC=(e,t,i)=>(iR(e,t,"read from private field"),i?i.call(e):t.get(e)),iD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iL=(e,t,i,a)=>(iR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);function iM(e){var t;let{title:i,message:a}=null!=(t=y(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let ix=[d.MEDIA_ERROR_CODE,d.MEDIA_ERROR_MESSAGE];class iN extends it{constructor(){super(...arguments),iD(this,nJ,null)}static get observedAttributes(){return[...super.observedAttributes,...ix]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!ix.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==y(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){return iC(this,nJ)}set mediaError(e){iL(this,nJ,e)}get mediaErrorCode(){return eu(this,"mediaerrorcode")}set mediaErrorCode(e){ec(this,"mediaerrorcode",e)}get mediaErrorMessage(){return ep(this,"mediaerrormessage")}set mediaErrorMessage(e){ev(this,"mediaerrormessage",e)}}nJ=new WeakMap,iN.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${iM({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},iN.formatErrorMessage=iM,K.customElements.get("media-error-dialog")||K.customElements.define("media-error-dialog",iN);let iO=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,iP=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,iU=$.createElement("template");iU.innerHTML=`
  <style>
    :host([${d.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${d.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${d.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${d.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${iO}</slot>
    <slot name="exit">${iP}</slot>
  </slot>
`;let iW=`
  <slot name="tooltip-enter">Enter fullscreen mode</slot>
  <slot name="tooltip-exit">Exit fullscreen mode</slot>
`,iB=e=>{let t=e.mediaIsFullscreen?k.EXIT_FULLSCREEN():k.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};class iH extends tV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_FULLSCREEN,d.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:iU,tooltipContent:iW,...e})}connectedCallback(){super.connectedCallback(),iB(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_IS_FULLSCREEN&&iB(this)}get mediaFullscreenUnavailable(){return ep(this,d.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){ev(this,d.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return eh(this,d.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){em(this,d.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?n.MEDIA_EXIT_FULLSCREEN_REQUEST:n.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new K.CustomEvent(e,{composed:!0,bubbles:!0}))}}K.customElements.get("media-fullscreen-button")||K.customElements.define("media-fullscreen-button",iH);let{MEDIA_TIME_IS_LIVE:iV,MEDIA_PAUSED:iF}=d,{MEDIA_SEEK_TO_LIVE_REQUEST:iq,MEDIA_PLAY_REQUEST:iK}=n,i$=$.createElement("template");i$.innerHTML=`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${iV}]:not([${iF}])) slot[name=indicator] > *,
  :host([${iV}]:not([${iF}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${iV}]:not([${iF}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let iY=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?k.SEEK_LIVE():k.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class iG extends tV{static get observedAttributes(){return[...super.observedAttributes,iF,iV]}constructor(e={}){super({slotTemplate:i$,...e})}connectedCallback(){iY(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),iY(this)}get mediaPaused(){return eh(this,d.MEDIA_PAUSED)}set mediaPaused(e){em(this,d.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return eh(this,d.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){em(this,d.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new K.CustomEvent(iq,{composed:!0,bubbles:!0})),this.hasAttribute(iF)&&this.dispatchEvent(new K.CustomEvent(iK,{composed:!0,bubbles:!0})))}}K.customElements.get("media-live-button")||K.customElements.define("media-live-button",iG);var ij=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iQ=(e,t,i)=>(ij(e,t,"read from private field"),i?i.call(e):t.get(e)),iZ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iz=(e,t,i,a)=>(ij(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iX="loadingdelay",iJ=$.createElement("template"),i0=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;iJ.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${d.MEDIA_LOADING}]:not([${d.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${i0}</slot>
<div id="status" role="status" aria-live="polite">${A.MEDIA_LOADING()}</div>
`;class i1 extends K.HTMLElement{constructor(){if(super(),iZ(this,n0,void 0),iZ(this,n1,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=iJ.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PAUSED,d.MEDIA_LOADING,iX]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===iX&&t!==i?this.loadingDelay=Number(i):e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iQ(this,n0))?void 0:a.unassociateElement)||r.call(a,this),iz(this,n0,null)),i&&this.isConnected&&(iz(this,n0,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iQ(this,n0))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(iz(this,n0,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iQ(this,n0))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iQ(this,n0))?void 0:e.unassociateElement)||t.call(e,this),iz(this,n0,null)}get loadingDelay(){return iQ(this,n1)}set loadingDelay(e){iz(this,n1,e);let{style:t}=el(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return eh(this,d.MEDIA_PAUSED)}set mediaPaused(e){em(this,d.MEDIA_PAUSED,e)}get mediaLoading(){return eh(this,d.MEDIA_LOADING)}set mediaLoading(e){em(this,d.MEDIA_LOADING,e)}}n0=new WeakMap,n1=new WeakMap,K.customElements.get("media-loading-indicator")||K.customElements.define("media-loading-indicator",i1);let{MEDIA_VOLUME_LEVEL:i2}=d,i3=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,i4=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,i5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,i9=$.createElement("template");i9.innerHTML=`
  <style>
  
  :host(:not([${i2}])) slot[name=icon] slot:not([name=high]), 
  :host([${i2}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${i2}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${i2}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${i2}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${i2}=off])) slot[name=tooltip-unmute],
  :host([${i2}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${i3}</slot>
    <slot name="low">${i4}</slot>
    <slot name="medium">${i4}</slot>
    <slot name="high">${i5}</slot>
  </slot>
`;let i8=`
  <slot name="tooltip-mute">Mute</slot>
  <slot name="tooltip-unmute">Unmute</slot>
`,i7=e=>{let t="off"===e.mediaVolumeLevel?k.UNMUTE():k.MUTE();e.setAttribute("aria-label",t)};class i6 extends tV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:i9,tooltipContent:i8,...e})}connectedCallback(){i7(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===d.MEDIA_VOLUME_LEVEL&&i7(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return ep(this,d.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){ev(this,d.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?n.MEDIA_UNMUTE_REQUEST:n.MEDIA_MUTE_REQUEST;this.dispatchEvent(new K.CustomEvent(e,{composed:!0,bubbles:!0}))}}K.customElements.get("media-mute-button")||K.customElements.define("media-mute-button",i6);let ae=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,at=$.createElement("template");at.innerHTML=`
  <style>
  :host([${d.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${d.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${d.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${d.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${ae}</slot>
    <slot name="exit">${ae}</slot>
  </slot>
`;let ai=`
  <slot name="tooltip-enter">Enter picture in picture mode</slot>
  <slot name="tooltip-exit">Enter picture in picture mode</slot>
`,aa=e=>{let t=e.mediaIsPip?k.EXIT_PIP():k.ENTER_PIP();e.setAttribute("aria-label",t)};class ar extends tV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_IS_PIP,d.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:at,tooltipContent:ai,...e})}connectedCallback(){aa(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===d.MEDIA_IS_PIP&&aa(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return ep(this,d.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){ev(this,d.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return eh(this,d.MEDIA_IS_PIP)}set mediaIsPip(e){em(this,d.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?n.MEDIA_EXIT_PIP_REQUEST:n.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new K.CustomEvent(e,{composed:!0,bubbles:!0}))}}K.customElements.get("media-pip-button")||K.customElements.define("media-pip-button",ar);var an=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},as=(e,t,i)=>(an(e,t,"read from private field"),i?i.call(e):t.get(e)),ao=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let al="rates",ad=[1,1.2,1.5,1.7,2],au=$.createElement("template");au.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class ac extends tV{constructor(e={}){super({slotTemplate:au,tooltipContent:T,...e}),ao(this,n2,new eP(this,al,{defaultValue:ad})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,al]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===al&&(as(this,n2).value=i),e===d.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",A.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return as(this,n2)}set rates(e){e?Array.isArray(e)&&(as(this,n2).value=e.join(" ")):as(this,n2).value=""}get mediaPlaybackRate(){return eu(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ec(this,d.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new K.CustomEvent(n.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}n2=new WeakMap,K.customElements.get("media-playback-rate-button")||K.customElements.define("media-playback-rate-button",ac);let ah=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,am=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,ap=$.createElement("template");ap.innerHTML=`
  <style>
    :host([${d.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${d.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${d.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${d.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${ah}</slot>
    <slot name="pause">${am}</slot>
  </slot>
`;let av=`
  <slot name="tooltip-play">Play</slot>
  <slot name="tooltip-pause">Pause</slot>
`,aE=e=>{let t=e.mediaPaused?k.PLAY():k.PAUSE();e.setAttribute("aria-label",t)};class ab extends tV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PAUSED,d.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:ap,tooltipContent:av,...e})}connectedCallback(){aE(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===d.MEDIA_PAUSED&&aE(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return eh(this,d.MEDIA_PAUSED)}set mediaPaused(e){em(this,d.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?n.MEDIA_PLAY_REQUEST:n.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new K.CustomEvent(e,{composed:!0,bubbles:!0}))}}K.customElements.get("media-play-button")||K.customElements.define("media-play-button",ab);let af={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},ag=$.createElement("template");ag.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let a_=e=>{e.style.removeProperty("background-image")},ay=(e,t)=>{e.style["background-image"]=`url('${t}')`};class aT extends K.HTMLElement{static get observedAttributes(){return[af.PLACEHOLDER_SRC,af.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ag.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===af.SRC&&(null==i?this.image.removeAttribute(af.SRC):this.image.setAttribute(af.SRC,i)),e===af.PLACEHOLDER_SRC&&(null==i?a_(this.image):ay(this.image,i))}get placeholderSrc(){return ep(this,af.PLACEHOLDER_SRC)}set placeholderSrc(e){ev(this,af.SRC,e)}get src(){return ep(this,af.SRC)}set src(e){ev(this,af.SRC,e)}}K.customElements.get("media-poster-image")||K.customElements.define("media-poster-image",aT);var aA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ak=(e,t,i)=>(aA(e,t,"read from private field"),i?i.call(e):t.get(e)),aw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aI=(e,t,i,a)=>(aA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aS extends iT{constructor(){super(),aw(this,n3,void 0),aI(this,n3,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i&&(ak(this,n3).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return ep(this,d.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){ev(this,d.MEDIA_PREVIEW_CHAPTER,e)}}n3=new WeakMap,K.customElements.get("media-preview-chapter-display")||K.customElements.define("media-preview-chapter-display",aS);var aR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aC=(e,t,i)=>(aR(e,t,"read from private field"),i?i.call(e):t.get(e)),aD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aL=(e,t,i,a)=>(aR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aM=$.createElement("template");aM.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class ax extends K.HTMLElement{constructor(){super(),aD(this,n4,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(aM.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER,d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(aL(this,n4,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=aC(this,n4))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aC(this,n4))?void 0:e.unassociateElement)||t.call(e,this),aL(this,n4,null)}attributeChangedCallback(e,t,i){var a,r,n,o,l;[d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=aC(this,n4))?void 0:a.unassociateElement)||r.call(a,this),aL(this,n4,null)),i&&this.isConnected&&(aL(this,n4,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=aC(this,n4))?void 0:o.associateElement)||l.call(o,this)))}get mediaPreviewImage(){return ep(this,d.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ev(this,d.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(d.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(d.MEDIA_PREVIEW_COORDS);return}this.setAttribute(d.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:E}=el(this.shadowRoot,":host"),b=el(this.shadowRoot,"img").style,f=this.shadowRoot.querySelector("img"),g=m?"min":"max";E.setProperty(`${g}-width`,"initial","important"),E.setProperty(`${g}-height`,"initial","important"),E.width=`${r*p}px`,E.height=`${n*p}px`;let _=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};f.src!==s&&(f.onload=()=>{this.imgWidth=f.naturalWidth,this.imgHeight=f.naturalHeight,_()},f.src=s,_()),_(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}n4=new WeakMap,K.customElements.get("media-preview-thumbnail")||K.customElements.define("media-preview-thumbnail",ax);var aN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aO=(e,t,i)=>(aN(e,t,"read from private field"),i?i.call(e):t.get(e)),aP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aU=(e,t,i,a)=>(aN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class aW extends iT{constructor(){super(),aP(this,n5,void 0),aU(this,n5,this.shadowRoot.querySelector("slot")),aO(this,n5).textContent=O(0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PREVIEW_TIME&&null!=i&&(aO(this,n5).textContent=O(parseFloat(i)))}get mediaPreviewTime(){return eu(this,d.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ec(this,d.MEDIA_PREVIEW_TIME,e)}}n5=new WeakMap,K.customElements.get("media-preview-time-display")||K.customElements.define("media-preview-time-display",aW);let aB={SEEK_OFFSET:"seekoffset"},aH=$.createElement("template");aH.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;class aV extends tV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_CURRENT_TIME,aB.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:aH,tooltipContent:"Seek backward",...e})}connectedCallback(){this.seekOffset=eu(this,aB.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===aB.SEEK_OFFSET&&(this.seekOffset=eu(this,aB.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return eu(this,aB.SEEK_OFFSET,30)}set seekOffset(e){ec(this,aB.SEEK_OFFSET,e),this.setAttribute("aria-label",k.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),J(et(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return eu(this,d.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){ec(this,d.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new K.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}K.customElements.get("media-seek-backward-button")||K.customElements.define("media-seek-backward-button",aV);let aF={SEEK_OFFSET:"seekoffset"},aq=$.createElement("template");aq.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;class aK extends tV{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_CURRENT_TIME,aF.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:aq,tooltipContent:"Seek forward",...e})}connectedCallback(){this.seekOffset=eu(this,aF.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===aF.SEEK_OFFSET&&(this.seekOffset=eu(this,aF.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return eu(this,aF.SEEK_OFFSET,30)}set seekOffset(e){ec(this,aF.SEEK_OFFSET,e),this.setAttribute("aria-label",k.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),J(et(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return eu(this,d.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){ec(this,d.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new K.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}K.customElements.get("media-seek-forward-button")||K.customElements.define("media-seek-forward-button",aK);var a$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aY=(e,t,i)=>(a$(e,t,"read from private field"),i?i.call(e):t.get(e)),aG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aj=(e,t,i,a)=>(a$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aQ={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},aZ=[...Object.values(aQ),d.MEDIA_CURRENT_TIME,d.MEDIA_DURATION,d.MEDIA_SEEKABLE],az=["Enter"," "],aX="&nbsp;/&nbsp;",aJ=(e,{timesSep:t=aX}={})=>{var i,a;let r=e.hasAttribute(aQ.REMAINING),n=e.hasAttribute(aQ.SHOW_DURATION),s=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?O(0-(l-s)):O(s);return n?`${d}${t}${O(l)}`:d},a0=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.hasAttribute(aQ.REMAINING),s=e.hasAttribute(aQ.SHOW_DURATION),o=n?N(0-(r-i)):N(i);if(!s){e.setAttribute("aria-valuetext",o);return}let l=N(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)};class a1 extends iT{constructor(){super(),aG(this,n9,void 0),aj(this,n9,this.shadowRoot.querySelector("slot")),aY(this,n9).innerHTML=`${aJ(this)}`}static get observedAttributes(){return[...super.observedAttributes,...aZ,"disabled"]}connectedCallback(){let{style:e}=el(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",A.PLAYBACK_TIME());let t=e=>{let{key:i}=e;if(!az.includes(i)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!az.includes(r)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){aZ.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return eh(this,aQ.REMAINING)}set remaining(e){em(this,aQ.REMAINING,e)}get showDuration(){return eh(this,aQ.SHOW_DURATION)}set showDuration(e){em(this,aQ.SHOW_DURATION,e)}get noToggle(){return eh(this,aQ.NO_TOGGLE)}set noToggle(e){em(this,aQ.NO_TOGGLE,e)}get mediaDuration(){return eu(this,d.MEDIA_DURATION)}set mediaDuration(e){ec(this,d.MEDIA_DURATION,e)}get mediaCurrentTime(){return eu(this,d.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ec(this,d.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(d.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(d.MEDIA_SEEKABLE);return}this.setAttribute(d.MEDIA_SEEKABLE,e.join(":"))}update(){let e=aJ(this);a0(this),e!==aY(this,n9).innerHTML&&(aY(this,n9).innerHTML=e)}}n9=new WeakMap,K.customElements.get("media-time-display")||K.customElements.define("media-time-display",a1);var a2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a3=(e,t,i)=>(a2(e,t,"read from private field"),i?i.call(e):t.get(e)),a4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a5=(e,t,i,a)=>(a2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a9=(e,t,i,a)=>({set _(value){a5(e,t,value,i)},get _(){return a3(e,t,a)}});class a8{constructor(e,t,i){a4(this,n8,void 0),a4(this,n7,void 0),a4(this,n6,void 0),a4(this,se,void 0),a4(this,st,void 0),a4(this,si,void 0),a4(this,sa,void 0),a4(this,sr,void 0),a4(this,sn,0),a4(this,ss,(e=performance.now())=>{a5(this,sn,requestAnimationFrame(a3(this,ss))),a5(this,se,performance.now()-a3(this,n6));let t=1e3/this.fps;if(a3(this,se)>t){a5(this,n6,e-a3(this,se)%t);let i=1e3/((e-a3(this,n7))/++a9(this,st)._),a=(e-a3(this,si))/1e3/this.duration,r=a3(this,sa)+a*this.playbackRate;r-a3(this,n8).valueAsNumber>0?a5(this,sr,this.playbackRate/this.duration/i):(a5(this,sr,.995*a3(this,sr)),r=a3(this,n8).valueAsNumber+a3(this,sr)),this.callback(r)}}),a5(this,n8,e),this.callback=t,this.fps=i}start(){0===a3(this,sn)&&(a5(this,n6,performance.now()),a5(this,n7,a3(this,n6)),a5(this,st,0),a3(this,ss).call(this))}stop(){0!==a3(this,sn)&&(cancelAnimationFrame(a3(this,sn)),a5(this,sn,0))}update({start:e,duration:t,playbackRate:i}){let a=e-a3(this,n8).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),a5(this,sa,e),a5(this,si,performance.now()),this.duration=t,this.playbackRate=i}}n8=new WeakMap,n7=new WeakMap,n6=new WeakMap,se=new WeakMap,st=new WeakMap,si=new WeakMap,sa=new WeakMap,sr=new WeakMap,sn=new WeakMap,ss=new WeakMap;var a7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a6=(e,t,i)=>(a7(e,t,"read from private field"),i?i.call(e):t.get(e)),re=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rt=(e,t,i,a)=>(a7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ri=(e,t,i)=>(a7(e,t,"access private method"),i);let ra=e=>{let t=e.range,i=N(+rs(e)),a=N(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},rr=$.createElement("template");rr.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${d.MEDIA_PREVIEW_IMAGE}], [${d.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${d.MEDIA_PREVIEW_IMAGE}], [${d.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${d.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${d.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${d.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${d.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${d.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${d.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${d.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${d.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${d.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${d.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${d.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${d.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let rn=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},rs=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class ro extends id{constructor(){super(),re(this,sE),re(this,sf),re(this,sy),re(this,sA),re(this,sw),re(this,sS),re(this,sC),re(this,sL),re(this,so,void 0),re(this,sl,void 0),re(this,sd,void 0),re(this,su,void 0),re(this,sc,void 0),re(this,sh,void 0),re(this,sm,void 0),re(this,sp,void 0),re(this,sv,void 0),re(this,s_,e=>{this.dragging||(C(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.container.appendChild(rr.content.cloneNode(!0)),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),rt(this,sd,this.shadowRoot.querySelectorAll('[part~="box"]')),rt(this,sc,this.shadowRoot.querySelector('[part~="preview-box"]')),rt(this,sh,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);rt(this,sm,parseInt(e.getPropertyValue("--media-box-padding-left"))),rt(this,sp,parseInt(e.getPropertyValue("--media-box-padding-right"))),rt(this,sl,new a8(this.range,a6(this,s_),60))}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PAUSED,d.MEDIA_DURATION,d.MEDIA_SEEKABLE,d.MEDIA_CURRENT_TIME,d.MEDIA_PREVIEW_IMAGE,d.MEDIA_PREVIEW_TIME,d.MEDIA_PREVIEW_CHAPTER,d.MEDIA_BUFFERED,d.MEDIA_PLAYBACK_RATE,d.MEDIA_LOADING,d.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",A.SEEK()),ri(this,sE,sb).call(this),rt(this,so,this.getRootNode()),null==(e=a6(this,so))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),ri(this,sE,sb).call(this),null==(e=a6(this,so))||e.removeEventListener("transitionstart",this),rt(this,so,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===d.MEDIA_CURRENT_TIME||e===d.MEDIA_PAUSED||e===d.MEDIA_ENDED||e===d.MEDIA_LOADING||e===d.MEDIA_DURATION||e===d.MEDIA_SEEKABLE?(a6(this,sl).update({start:rn(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),ri(this,sE,sb).call(this),ra(this)):e===d.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===d.MEDIA_DURATION||e===d.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=a6(this,sv),this.updateBar()))}get mediaChaptersCues(){return a6(this,sv)}set mediaChaptersCues(e){var t;rt(this,sv,e),this.updateSegments(null==(t=a6(this,sv))?void 0:t.map(e=>({start:rn(this,e.startTime),end:rn(this,e.endTime)})))}get mediaPaused(){return eh(this,d.MEDIA_PAUSED)}set mediaPaused(e){em(this,d.MEDIA_PAUSED,e)}get mediaLoading(){return eh(this,d.MEDIA_LOADING)}set mediaLoading(e){em(this,d.MEDIA_LOADING,e)}get mediaDuration(){return eu(this,d.MEDIA_DURATION)}set mediaDuration(e){ec(this,d.MEDIA_DURATION,e)}get mediaCurrentTime(){return eu(this,d.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){ec(this,d.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return eu(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ec(this,d.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(d.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(d.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(d.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(d.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(d.MEDIA_SEEKABLE);return}this.setAttribute(d.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return ep(this,d.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){ev(this,d.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return eu(this,d.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){ec(this,d.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return eh(this,d.MEDIA_ENDED)}set mediaEnded(e){em(this,d.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=rn(this,r)}let{style:a}=el(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=el(this.shadowRoot,"#current-rail"),t=el(this.shadowRoot,'[part~="current-box"]'),i=ri(this,sy,sT).call(this,a6(this,sh)),a=ri(this,sA,sk).call(this,i,this.range.valueAsNumber),r=ri(this,sw,sI).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":ri(this,sL,sM).call(this);break;case"pointermove":ri(this,sS,sR).call(this,e);break;case"pointerup":case"pointerleave":ri(this,sC,sD).call(this,null);break;case"transitionstart":ei(e.target,this)&&setTimeout(()=>ri(this,sE,sb).call(this),0)}}}so=new WeakMap,sl=new WeakMap,sd=new WeakMap,su=new WeakMap,sc=new WeakMap,sh=new WeakMap,sm=new WeakMap,sp=new WeakMap,sv=new WeakMap,sE=new WeakSet,sb=function(){ri(this,sf,sg).call(this)?a6(this,sl).start():a6(this,sl).stop()},sf=new WeakSet,sg=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&es(this)},s_=new WeakMap,sy=new WeakSet,sT=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?ea(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},sA=new WeakSet,sk=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},sw=new WeakSet,sI=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+a6(this,sm)){let t=e.range.left-e.bounds.left-a6(this,sm);return`${n-i/2+t}px`}if(n>r-a6(this,sp)){let t=e.bounds.right-e.range.right-a6(this,sp);return`${n+i/2-t-e.range.width}px`}return 0},sS=new WeakSet,sR=function(e){let t=[...a6(this,sd)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){ri(this,sC,sD).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=el(this.shadowRoot,"#preview-rail"),r=el(this.shadowRoot,'[part~="preview-box"]'),n=ri(this,sy,sT).call(this,a6(this,sc)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=ri(this,sA,sk).call(this,n,s),l=ri(this,sw,sI).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(a6(this,su))-Math.round(s*i))&&s>.01&&s<.99||(rt(this,su,s*i),ri(this,sC,sD).call(this,a6(this,su)))},sC=new WeakSet,sD=function(e){this.dispatchEvent(new K.CustomEvent(n.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},sL=new WeakSet,sM=function(){a6(this,sl).stop();let e=rs(this);this.dispatchEvent(new K.CustomEvent(n.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},K.customElements.get("media-time-range")||K.customElements.define("media-time-range",ro);let rl="placement",rd="bounds",ru=$.createElement("template");ru.innerHTML=`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;class rc extends K.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!es(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t){this.style.removeProperty("--media-tooltip-offset-x");return}let i=getComputedStyle(this),a=null!=(e=ea(this,"#"+this.bounds))?e:z(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;if(h<0){this.style.setProperty("--media-tooltip-offset-x",`${h}px`);return}if(m>0){this.style.setProperty("--media-tooltip-offset-x",`${m}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ru.content.cloneNode(!0))),this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[rl,rd]}get placement(){return ep(this,rl)}set placement(e){ev(this,rl,e)}get bounds(){return ep(this,rd)}set bounds(e){ev(this,rd,e)}}K.customElements.get("media-tooltip")||K.customElements.define("media-tooltip",rc);let rh=e=>e.mediaMuted?0:e.mediaVolume,rm=e=>`${Math.round(100*e)}%`;class rp extends id{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_VOLUME,d.MEDIA_MUTED,d.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new K.CustomEvent(n.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",A.VOLUME())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===d.MEDIA_VOLUME||e===d.MEDIA_MUTED)&&(this.range.valueAsNumber=rh(this),this.range.setAttribute("aria-valuetext",rm(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return eu(this,d.MEDIA_VOLUME,1)}set mediaVolume(e){ec(this,d.MEDIA_VOLUME,e)}get mediaMuted(){return eh(this,d.MEDIA_MUTED)}set mediaMuted(e){em(this,d.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ep(this,d.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){ev(this,d.MEDIA_VOLUME_UNAVAILABLE,e)}}K.customElements.get("media-volume-range")||K.customElements.define("media-volume-range",rp);var rv=i(4086),rE=Object.defineProperty,rb=Object.getPrototypeOf,rf=Reflect.get,rg=e=>{throw TypeError(e)},r_=(e,t,i)=>t in e?rE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ry=(e,t,i)=>r_(e,"symbol"!=typeof t?t+"":t,i),rT=(e,t,i)=>t.has(e)||rg("Cannot "+i),rA=(e,t,i)=>(rT(e,t,"read from private field"),i?i.call(e):t.get(e)),rk=(e,t,i)=>t.has(e)?rg("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),rw=(e,t,i,a)=>(rT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rI=(e,t,i)=>(rT(e,t,"access private method"),i),rS=(e,t,i)=>rf(rb(e),i,t),rR=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends rR{}globalThis.DocumentFragment=e}var rC,rD,rL,rM,rx,rN,rO,rP,rU,rW,rB,rH,rV,rF,rq,rK,r$,rY,rG,rj,rQ,rZ,rz,rX,rJ,r0,r1,r2,r3,r4,r5,r9,r8,r7,r6,ne,nt,ni,na,nr,nn,ns,no,nl,nd,nu,nc,nh,nm,np,nv,nE,nb,nf,ng,n_,ny,nT,nA,nk,nw,nI,nS,nR,nC,nD,nL,nM,nx,nN,nO,nP,nU,nW,nB,nH,nV,nF,nq,nK,n$,nY,nG,nj,nQ,nZ,nz,nX,nJ,n0,n1,n2,n3,n4,n5,n9,n8,n7,n6,se,st,si,sa,sr,sn,ss,so,sl,sd,su,sc,sh,sm,sp,sv,sE,sb,sf,sg,s_,sy,sT,sA,sk,sw,sI,sS,sR,sC,sD,sL,sM,sx,sN=class extends rR{},sO=class{constructor(e,t={}){rk(this,sx),rw(this,sx,null==t?void 0:t.detail)}get detail(){return rA(this,sx)}initCustomEvent(){}};sx=new WeakMap;var sP={document:{createElement:function(e,t){return new sN}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(sN)},CustomEvent:sO,EventTarget:rR,HTMLElement:sN,HTMLVideoElement:class extends rR{}},sU="undefined"==typeof window||void 0===globalThis.customElements,sW=sU?sP:globalThis;sU&&sP.document;var sB=(()=>{try{return"0.24.3"}catch{}return"UNKNOWN"})(),sH=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],sV=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function sF(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${s$(e)}></audio>
    </slot>
    <slot></slot>
  `}function sq(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${s$(e)}></video>
    </slot>
    <slot></slot>
  `}function sK(e,{tag:t,is:i}){var a,r,n,s,o,l,d,u,c,h,m,p,E,b,f,g,_;let y=null==(r=null==(a=globalThis.document)?void 0:a.createElement)?void 0:r.call(a,t,{is:i}),T=y?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(y):[];return n=class extends e{constructor(){super(...arguments),rk(this,m),rk(this,d,!1),rk(this,u,null),rk(this,c,new Map),rk(this,h),ry(this,"get"),ry(this,"set"),ry(this,"call")}static get observedAttributes(){var e,t,i;return rI(e=n,o,l).call(e),[...null!=(i=null==(t=null==y?void 0:y.constructor)?void 0:t.observedAttributes)?i:[],...sV]}get nativeEl(){var e,i,a,r,n;return rI(this,m,p).call(this),null!=(n=null!=(r=null!=(i=null!=(e=rA(this,u))?e:this.querySelector(":scope > [slot=media]"))?i:this.querySelector(t))?r:null==(a=this.shadowRoot)?void 0:a.querySelector(t))?n:null}set nativeEl(e){rw(this,u,e)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){var e,t;return null!=(t=this.getAttribute("preload"))?t:null==(e=this.nativeEl)?void 0:e.preload}set preload(e){this.setAttribute("preload",`${e}`)}init(){var e;if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),T))rI(this,m,g).call(this,e);for(let t of(rw(this,h,new MutationObserver(rI(this,m,b).bind(this))),this.shadowRoot.addEventListener("slotchange",this),rI(this,m,E).call(this),this.constructor.Events))null==(e=this.shadowRoot)||e.addEventListener(t,this,!0)}handleEvent(e){if("slotchange"===e.type){rI(this,m,E).call(this);return}e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}attributeChangedCallback(e,t,i){rI(this,m,p).call(this),rI(this,m,_).call(this,e,t,i)}connectedCallback(){rI(this,m,p).call(this)}},s=new WeakMap,o=new WeakSet,l=function(){if(rA(this,s))return;rw(this,s,!0);let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),T))if(!(t in this.prototype)){if("function"==typeof y[t])this.prototype[t]=function(...e){return rI(this,m,p).call(this),(()=>{var i;if(this.call)return this.call(t,...e);let a=null==(i=this.nativeEl)?void 0:i[t];return null==a?void 0:a.apply(this.nativeEl,e)})()};else{let i={get(){var i,a,r;rI(this,m,p).call(this);let n=t.toLowerCase();if(e.has(n)){let e=this.getAttribute(n);return null!==e&&(""===e||e)}return null!=(r=null==(i=this.get)?void 0:i.call(this,t))?r:null==(a=this.nativeEl)?void 0:a[t]}};t!==t.toUpperCase()&&(i.set=function(i){rI(this,m,p).call(this);let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}},d=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,m=new WeakSet,p=function(){rA(this,d)||(rw(this,d,!0),this.init())},E=function(){var e;let t=new Map(rA(this,c)),i=null==(e=this.shadowRoot)?void 0:e.querySelector("slot:not([name])");(null==i?void 0:i.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(e=>{var i,a;t.delete(e);let r=rA(this,c).get(e);r||(r=e.cloneNode(),rA(this,c).set(e,r),null==(i=rA(this,h))||i.observe(e,{attributes:!0})),null==(a=this.nativeEl)||a.append(r),rI(this,m,f).call(this,r)}),t.forEach((e,t)=>{e.remove(),rA(this,c).delete(t)})},b=function(e){var t;for(let i of e)if("attributes"===i.type){let{target:e,attributeName:a}=i,r=rA(this,c).get(e);r&&a&&(r.setAttribute(a,null!=(t=e.getAttribute(a))?t:""),rI(this,m,f).call(this,r))}},f=function(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")},g=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},_=function(e,t,i){var a,r,s;["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?null==(a=this.nativeEl)||a.removeAttribute(e):(null==(r=this.nativeEl)?void 0:r.getAttribute(e))!==i&&(null==(s=this.nativeEl)||s.setAttribute(e,i)))},rk(n,o),ry(n,"getTemplateHTML",t.endsWith("audio")?sF:sq),ry(n,"shadowRootOptions",{mode:"open"}),ry(n,"Events",sH),rk(n,s,!1),n}function s$(e){let t="";for(let i in e){if(!sV.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}var sY,sG,sj=sK(null!=(sY=globalThis.HTMLElement)?sY:class{},{tag:"video"});sK(null!=(sG=globalThis.HTMLElement)?sG:class{},{tag:"audio"});var sQ=new WeakMap,sZ=class extends Error{},sz=class extends Error{};function sX(){var e,t;return null==(t=null==(e=globalThis.cast)?void 0:e.framework)?void 0:t.CastContext.getInstance()}function sJ(){var e;return null==(e=sX())?void 0:e.getCurrentSession()}function s0(){var e;return null==(e=sJ())?void 0:e.getSessionObj().media[0]}function s1(e){return sX().setOptions({...s2(),...e})}function s2(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}var s3,s4=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),s5=new WeakSet;s9=()=>{var e,t,i,a;if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable)){console.debug("chrome.cast.isAvailable",null==(a=null==(i=globalThis.chrome)?void 0:i.cast)?void 0:a.isAvailable);return}s3||(s3=cast.framework,sX().addEventListener(s3.CastContextEventType.CAST_STATE_CHANGED,e=>{s4.forEach(t=>{var i,a;return null==(a=(i=sQ.get(t)).onCastStateChanged)?void 0:a.call(i,e)})}),sX().addEventListener(s3.CastContextEventType.SESSION_STATE_CHANGED,e=>{s4.forEach(t=>{var i,a;return null==(a=(i=sQ.get(t)).onSessionStateChanged)?void 0:a.call(i,e)})}),s4.forEach(e=>{var t,i;return null==(i=(t=sQ.get(e)).init)?void 0:i.call(t)}))},null!=(s7=null==(s8=globalThis.chrome)?void 0:s8.cast)&&s7.isAvailable?null!=(s6=globalThis.cast)&&s6.framework?s9():customElements.whenDefined("google-cast-button").then(s9):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(s9)};var s9,s8,s7,s6,oe,ot,oi,oa,or,on,os,oo,ol,od,ou,oc,oh,om,op,ov,oE=0,ob=class extends EventTarget{constructor(e){super(),rk(this,ol),rk(this,oe),rk(this,ot),rk(this,oi),rk(this,oa),rk(this,or,"disconnected"),rk(this,on,!1),rk(this,os,new Set),rk(this,oo,new WeakMap),rw(this,oe,e),s4.add(this),sQ.set(this,{init:()=>rI(this,ol,om).call(this),onCastStateChanged:()=>rI(this,ol,oc).call(this),onSessionStateChanged:()=>rI(this,ol,oh).call(this),getCastPlayer:()=>rA(this,ol,od)}),rI(this,ol,om).call(this)}get state(){return rA(this,or)}async watchAvailability(e){if(rA(this,oe).disableRemotePlayback)throw new sZ("disableRemotePlayback attribute is present.");return rA(this,oo).set(e,++oE),rA(this,os).add(e),oE}async cancelWatchAvailability(e){if(rA(this,oe).disableRemotePlayback)throw new sZ("disableRemotePlayback attribute is present.");e?rA(this,os).delete(e):rA(this,os).clear()}async prompt(){var e,t,i,a;if(rA(this,oe).disableRemotePlayback)throw new sZ("disableRemotePlayback attribute is present.");if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable))throw new sz("The RemotePlayback API is disabled on this platform.");let r=s5.has(rA(this,oe));s5.add(rA(this,oe)),s1(rA(this,oe).castOptions),Object.entries(rA(this,oa)).forEach(([e,t])=>{rA(this,oi).controller.addEventListener(e,t)});try{await sX().requestSession()}catch(e){if("cancel"===e){r||s5.delete(rA(this,oe));return}throw Error(e)}null==(a=null==(i=sQ.get(rA(this,oe)))?void 0:i.loadOnPrompt)||a.call(i)}};oe=new WeakMap,ot=new WeakMap,oi=new WeakMap,oa=new WeakMap,or=new WeakMap,on=new WeakMap,os=new WeakMap,oo=new WeakMap,ol=new WeakSet,od=function(){if(s5.has(rA(this,oe)))return rA(this,oi)},ou=function(){s5.has(rA(this,oe))&&(Object.entries(rA(this,oa)).forEach(([e,t])=>{rA(this,oi).controller.removeEventListener(e,t)}),s5.delete(rA(this,oe)),rA(this,oe).muted=rA(this,oi).isMuted,rA(this,oe).currentTime=rA(this,oi).savedPlayerState.currentTime,!1===rA(this,oi).savedPlayerState.isPaused&&rA(this,oe).play())},oc=function(){let e=sX().getCastState();if(s5.has(rA(this,oe))&&"CONNECTING"===e&&(rw(this,or,"connecting"),this.dispatchEvent(new Event("connecting"))),!rA(this,on)&&null!=e&&e.includes("CONNECT"))for(let e of(rw(this,on,!0),rA(this,os)))e(!0);else if(rA(this,on)&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(rw(this,on,!1),rA(this,os)))e(!1)},oh=async function(){var e,t;let{SESSION_RESUMED:i}=s3.SessionState;if(sX().getSessionState()===i&&rA(this,oe).castSrc===(null==(e=s0())?void 0:e.media.contentId)){s5.add(rA(this,oe)),Object.entries(rA(this,oa)).forEach(([e,t])=>{rA(this,oi).controller.addEventListener(e,t)});try{await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{s0().getStatus(t,e,i)}))}catch(e){console.error(e)}rA(this,oa)[s3.RemotePlayerEventType.IS_PAUSED_CHANGED](),rA(this,oa)[s3.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},om=function(){!s3||rA(this,ot)||(rw(this,ot,!0),s1(rA(this,oe).castOptions),rA(this,oe).textTracks.addEventListener("change",()=>rI(this,ol,ov).call(this)),rI(this,ol,oc).call(this),rw(this,oi,new s3.RemotePlayer),new s3.RemotePlayerController(rA(this,oi)),rw(this,oa,{[s3.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(rw(this,or,"connected"),this.dispatchEvent(new Event("connect"))):(rI(this,ol,ou).call(this),rw(this,or,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[s3.RemotePlayerEventType.DURATION_CHANGED]:()=>{rA(this,oe).dispatchEvent(new Event("durationchange"))},[s3.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{rA(this,oe).dispatchEvent(new Event("volumechange"))},[s3.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{rA(this,oe).dispatchEvent(new Event("volumechange"))},[s3.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var e;null!=(e=rA(this,ol,od))&&e.isMediaLoaded&&rA(this,oe).dispatchEvent(new Event("timeupdate"))},[s3.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{rA(this,oe).dispatchEvent(new Event("resize"))},[s3.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{rA(this,oe).dispatchEvent(new Event(this.paused?"pause":"play"))},[s3.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var e,t;(null==(e=rA(this,ol,od))?void 0:e.playerState)!==chrome.cast.media.PlayerState.PAUSED&&rA(this,oe).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(t=rA(this,ol,od))?void 0:t.playerState]))},[s3.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var e;null!=(e=rA(this,ol,od))&&e.isMediaLoaded&&(await Promise.resolve(),rI(this,ol,op).call(this))}}))},op=function(){rI(this,ol,ov).call(this)},ov=async function(){var e,t,i,a,r;let n;if(!rA(this,ol,od))return;let s=(null!=(t=null==(e=rA(this,oi).mediaInfo)?void 0:e.tracks)?t:[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),o=[...rA(this,oe).textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),l=s.map(({language:e,name:t,trackId:i})=>{var a;let{mode:r}=null!=(a=o.find(i=>i.language===e&&i.label===t))?a:{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),d=l.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),u=l.find(({mode:e})=>"showing"===e),c=null!=(r=null==(a=null==(i=sJ())?void 0:i.getSessionObj().media[0])?void 0:a.activeTrackIds)?r:[],h=c;if(c.length&&(h=h.filter(e=>!d.includes(e))),null!=u&&u.trackId&&(h=[...h,u.trackId]),n=h=[...new Set(h)],!(c.length===n.length&&c.every(e=>n.includes(e))))try{let e=new chrome.cast.media.EditTracksInfoRequest(h);await new Promise((t,i)=>{s0().editTracksInfo(e,t,i)})}catch(e){console.error(e)}};var of=e=>{var t,i,a,r,n,s,o,l,d;return i=class extends e{constructor(){super(...arguments),rk(this,o),rk(this,a,{paused:!1}),rk(this,r,s2()),rk(this,n),rk(this,s)}get remote(){return rA(this,s)?rA(this,s):globalThis.chrome?(this.disableRemotePlayback||function(){var e;let t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(null!=(e=globalThis.chrome)&&e.cast||document.querySelector(`script[src="${t}"]`))return;let i=document.createElement("script");i.src=t,document.head.append(i)}(),sQ.set(this,{loadOnPrompt:()=>rI(this,o,d).call(this)}),rw(this,s,new ob(this))):super.remote}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){rA(this,r).receiverApplicationId=i;return}if(rA(this,o,l))switch(e){case"cast-stream-type":case"cast-src":this.load()}}async load(){var e,t;if(!rA(this,o,l))return super.load();let i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);i.customData=this.castCustomData;let r=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),n=[],s=0;r.length&&(i.tracks=r.map(e=>{let t=++s;0===n.length&&"showing"===e.track.mode&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType="text/vtt",i.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),"live"===this.castStreamType?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}];let d=new chrome.cast.media.LoadRequest(i);d.currentTime=null!=(e=super.currentTime)?e:0,d.autoplay=!rA(this,a).paused,d.activeTrackIds=n,await (null==(t=sJ())?void 0:t.loadMedia(d)),this.dispatchEvent(new Event("volumechange"))}play(){var e;if(rA(this,o,l)){rA(this,o,l).isPaused&&(null==(e=rA(this,o,l).controller)||e.playOrPause());return}return super.play()}pause(){var e;if(rA(this,o,l)){rA(this,o,l).isPaused||null==(e=rA(this,o,l).controller)||e.playOrPause();return}super.pause()}get castOptions(){return rA(this,r)}get castReceiver(){var e;return null!=(e=this.getAttribute("cast-receiver"))?e:void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){var e,t,i;return null!=(i=null!=(t=this.getAttribute("cast-src"))?t:null==(e=this.querySelector("source"))?void 0:e.src)?i:this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){var e;return null!=(e=this.getAttribute("cast-content-type"))?e:void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){var e,t;return null!=(t=null!=(e=this.getAttribute("cast-stream-type"))?e:this.streamType)?t:void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return rA(this,n)}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t)){console.error(`castCustomData must be nullish or an object but value was of type ${t}`);return}rw(this,n,e)}get readyState(){if(rA(this,o,l))switch(rA(this,o,l).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return rA(this,o,l)?rA(this,o,l).isPaused:super.paused}get muted(){var e;return rA(this,o,l)?null==(e=rA(this,o,l))?void 0:e.isMuted:super.muted}set muted(e){var t;if(rA(this,o,l)){(e&&!rA(this,o,l).isMuted||!e&&rA(this,o,l).isMuted)&&(null==(t=rA(this,o,l).controller)||t.muteOrUnmute());return}super.muted=e}get volume(){var e,t;return rA(this,o,l)?null!=(t=null==(e=rA(this,o,l))?void 0:e.volumeLevel)?t:1:super.volume}set volume(e){var t;if(rA(this,o,l)){rA(this,o,l).volumeLevel=+e,null==(t=rA(this,o,l).controller)||t.setVolumeLevel();return}super.volume=e}get duration(){var e,t,i;return rA(this,o,l)&&null!=(e=rA(this,o,l))&&e.isMediaLoaded?null!=(i=null==(t=rA(this,o,l))?void 0:t.duration)?i:NaN:super.duration}get currentTime(){var e,t,i;return rA(this,o,l)&&null!=(e=rA(this,o,l))&&e.isMediaLoaded?null!=(i=null==(t=rA(this,o,l))?void 0:t.currentTime)?i:0:super.currentTime}set currentTime(e){var t;if(rA(this,o,l)){rA(this,o,l).currentTime=e,null==(t=rA(this,o,l).controller)||t.seek();return}super.currentTime=e}},a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakMap,o=new WeakSet,l=function(){var e,t;return null==(t=null==(e=sQ.get(this.remote))?void 0:e.getCastPlayer)?void 0:t.call(e)},d=async function(){rA(this,a).paused=rS(i.prototype,this,"paused"),rS(i.prototype,this,"pause").call(this),this.muted=rS(i.prototype,this,"muted");try{await this.load()}catch(e){console.error(e)}},ry(i,"observedAttributes",[...null!=(t=e.observedAttributes)?t:[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),i},og=class extends Event{constructor(e,t){super(e),ry(this,"track"),this.track=t.track}},o_=new WeakMap;function oy(e){var t,i;let a;return null!=(t=o_.get(e))?t:(i={},(a=o_.get(e))||o_.set(e,a={}),Object.assign(a,i))}function oT(e,t){let i=e.videoTracks;oy(t).media=e,oy(t).renditionSet||(oy(t).renditionSet=new Set);let a=oy(i).trackSet;a.add(t);let r=a.size-1;r in oC.prototype||Object.defineProperty(oC.prototype,r,{get(){return[...oy(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new og("addtrack",{track:t}))})}function oA(e){var t;let i=null==(t=oy(e).media)?void 0:t.videoTracks;i&&(oy(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new og("removetrack",{track:e}))}))}var ok,ow,oI,oS,oR,oC=class extends EventTarget{constructor(){super(),rk(this,oS),rk(this,ok),rk(this,ow),rk(this,oI),oy(this).trackSet=new Set}[Symbol.iterator](){return rA(this,oS,oR).values()}get length(){return rA(this,oS,oR).size}getTrackById(e){var t;return null!=(t=[...rA(this,oS,oR)].find(t=>t.id===e))?t:null}get selectedIndex(){return[...rA(this,oS,oR)].findIndex(e=>e.selected)}get onaddtrack(){return rA(this,ok)}set onaddtrack(e){rA(this,ok)&&(this.removeEventListener("addtrack",rA(this,ok)),rw(this,ok,void 0)),"function"==typeof e&&(rw(this,ok,e),this.addEventListener("addtrack",e))}get onremovetrack(){return rA(this,ow)}set onremovetrack(e){rA(this,ow)&&(this.removeEventListener("removetrack",rA(this,ow)),rw(this,ow,void 0)),"function"==typeof e&&(rw(this,ow,e),this.addEventListener("removetrack",e))}get onchange(){return rA(this,oI)}set onchange(e){rA(this,oI)&&(this.removeEventListener("change",rA(this,oI)),rw(this,oI,void 0)),"function"==typeof e&&(rw(this,oI,e),this.addEventListener("change",e))}};ok=new WeakMap,ow=new WeakMap,oI=new WeakMap,oS=new WeakSet,oR=function(){return oy(this).trackSet};var oD=class extends Event{constructor(e,t){super(e),ry(this,"rendition"),this.rendition=t.rendition}};function oL(e){return[...oy(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...oy(e).renditionSet])}var oM,ox,oN,oO=class extends EventTarget{constructor(){super(...arguments),rk(this,oM),rk(this,ox),rk(this,oN)}[Symbol.iterator](){return oL(this).values()}get length(){return oL(this).length}getRenditionById(e){var t;return null!=(t=oL(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return oL(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of oL(this).entries())i.selected=t===e}get onaddrendition(){return rA(this,oM)}set onaddrendition(e){rA(this,oM)&&(this.removeEventListener("addrendition",rA(this,oM)),rw(this,oM,void 0)),"function"==typeof e&&(rw(this,oM,e),this.addEventListener("addrendition",e))}get onremoverendition(){return rA(this,ox)}set onremoverendition(e){rA(this,ox)&&(this.removeEventListener("removerendition",rA(this,ox)),rw(this,ox,void 0)),"function"==typeof e&&(rw(this,ox,e),this.addEventListener("removerendition",e))}get onchange(){return rA(this,oN)}set onchange(e){rA(this,oN)&&(this.removeEventListener("change",rA(this,oN)),rw(this,oN,void 0)),"function"==typeof e&&(rw(this,oN,e),this.addEventListener("change",e))}};oM=new WeakMap,ox=new WeakMap,oN=new WeakMap;var oP,oU=class{constructor(){ry(this,"src"),ry(this,"id"),ry(this,"width"),ry(this,"height"),ry(this,"bitrate"),ry(this,"frameRate"),ry(this,"codec"),rk(this,oP,!1)}get selected(){return rA(this,oP)}set selected(e){var t;let i;rA(this,oP)!==e&&(rw(this,oP,e),t=this,(i=oy(t).media.videoRenditions)&&!oy(i).changeRequested&&(oy(i).changeRequested=!0,queueMicrotask(()=>{delete oy(i).changeRequested,oy(t).track.selected&&i.dispatchEvent(new Event("change"))})))}};oP=new WeakMap;var oW,oB=class{constructor(){ry(this,"id"),ry(this,"kind"),ry(this,"label",""),ry(this,"language",""),ry(this,"sourceBuffer"),rk(this,oW,!1)}addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new oU;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=oy(s).media.videoRenditions,oy(u).media=oy(s).media,oy(u).track=s,(l=oy(s).renditionSet).add(u),(d=l.size-1)in oO.prototype||Object.defineProperty(oO.prototype,d,{get(){return oL(this)[d]}}),queueMicrotask(()=>{s.selected&&o.dispatchEvent(new oD("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=oy(e).media.videoRenditions,i=oy(e).track,oy(i).renditionSet.delete(e),queueMicrotask(()=>{oy(e).track.selected&&t.dispatchEvent(new oD("removerendition",{rendition:e}))})}get selected(){return rA(this,oW)}set selected(e){rA(this,oW)!==e&&(rw(this,oW,e),!0===e&&function(e){var t;let i=null!=(t=oy(e).media.videoTracks)?t:[],a=!1;for(let t of i)t!==e&&(t.selected=!1,a=!0);if(a){if(oy(i).changeRequested)return;oy(i).changeRequested=!0,queueMicrotask(()=>{delete oy(i).changeRequested,i.dispatchEvent(new Event("change"))})}}(this))}};function oH(e){return[...oy(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...oy(e).renditionSet])}oW=new WeakMap;var oV,oF,oq,oK=class extends EventTarget{constructor(){super(...arguments),rk(this,oV),rk(this,oF),rk(this,oq)}[Symbol.iterator](){return oH(this).values()}get length(){return oH(this).length}getRenditionById(e){var t;return null!=(t=oH(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return oH(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of oH(this).entries())i.selected=t===e}get onaddrendition(){return rA(this,oV)}set onaddrendition(e){rA(this,oV)&&(this.removeEventListener("addrendition",rA(this,oV)),rw(this,oV,void 0)),"function"==typeof e&&(rw(this,oV,e),this.addEventListener("addrendition",e))}get onremoverendition(){return rA(this,oF)}set onremoverendition(e){rA(this,oF)&&(this.removeEventListener("removerendition",rA(this,oF)),rw(this,oF,void 0)),"function"==typeof e&&(rw(this,oF,e),this.addEventListener("removerendition",e))}get onchange(){return rA(this,oq)}set onchange(e){rA(this,oq)&&(this.removeEventListener("change",rA(this,oq)),rw(this,oq,void 0)),"function"==typeof e&&(rw(this,oq,e),this.addEventListener("change",e))}};oV=new WeakMap,oF=new WeakMap,oq=new WeakMap;var o$,oY=class{constructor(){ry(this,"src"),ry(this,"id"),ry(this,"bitrate"),ry(this,"codec"),rk(this,o$,!1)}get selected(){return rA(this,o$)}set selected(e){var t;let i;rA(this,o$)!==e&&(rw(this,o$,e),t=this,(i=oy(t).media.audioRenditions)&&!oy(i).changeRequested&&(oy(i).changeRequested=!0,queueMicrotask(()=>{delete oy(i).changeRequested,oy(t).track.enabled&&i.dispatchEvent(new Event("change"))})))}};function oG(e,t){let i=e.audioTracks;oy(t).media=e,oy(t).renditionSet||(oy(t).renditionSet=new Set);let a=oy(i).trackSet;a.add(t);let r=a.size-1;r in o0.prototype||Object.defineProperty(o0.prototype,r,{get(){return[...oy(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new og("addtrack",{track:t}))})}function oj(e){var t;let i=null==(t=oy(e).media)?void 0:t.audioTracks;i&&(oy(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new og("removetrack",{track:e}))}))}o$=new WeakMap;var oQ,oZ,oz,oX,oJ,o0=class extends EventTarget{constructor(){super(),rk(this,oX),rk(this,oQ),rk(this,oZ),rk(this,oz),oy(this).trackSet=new Set}[Symbol.iterator](){return rA(this,oX,oJ).values()}get length(){return rA(this,oX,oJ).size}getTrackById(e){var t;return null!=(t=[...rA(this,oX,oJ)].find(t=>t.id===e))?t:null}get onaddtrack(){return rA(this,oQ)}set onaddtrack(e){rA(this,oQ)&&(this.removeEventListener("addtrack",rA(this,oQ)),rw(this,oQ,void 0)),"function"==typeof e&&(rw(this,oQ,e),this.addEventListener("addtrack",e))}get onremovetrack(){return rA(this,oZ)}set onremovetrack(e){rA(this,oZ)&&(this.removeEventListener("removetrack",rA(this,oZ)),rw(this,oZ,void 0)),"function"==typeof e&&(rw(this,oZ,e),this.addEventListener("removetrack",e))}get onchange(){return rA(this,oz)}set onchange(e){rA(this,oz)&&(this.removeEventListener("change",rA(this,oz)),rw(this,oz,void 0)),"function"==typeof e&&(rw(this,oz,e),this.addEventListener("change",e))}};oQ=new WeakMap,oZ=new WeakMap,oz=new WeakMap,oX=new WeakSet,oJ=function(){return oy(this).trackSet};var o1,o2=class{constructor(){ry(this,"id"),ry(this,"kind"),ry(this,"label",""),ry(this,"language",""),ry(this,"sourceBuffer"),rk(this,o1,!1)}addRendition(e,t,i){var a;let r,n,s,o=new oY;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=oy(a).media.audioRenditions,oy(o).media=oy(a).media,oy(o).track=a,(n=oy(a).renditionSet).add(o),(s=n.size-1)in oK.prototype||Object.defineProperty(oK.prototype,s,{get(){return oH(this)[s]}}),queueMicrotask(()=>{a.enabled&&r.dispatchEvent(new oD("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=oy(e).media.audioRenditions,i=oy(e).track,oy(i).renditionSet.delete(e),queueMicrotask(()=>{oy(e).track.enabled&&t.dispatchEvent(new oD("removerendition",{rendition:e}))})}get enabled(){return rA(this,o1)}set enabled(e){let t;rA(this,o1)!==e&&(rw(this,o1,e),(t=oy(this).media.audioTracks)&&!oy(t).changeRequested&&(oy(t).changeRequested=!0,queueMicrotask(()=>{delete oy(t).changeRequested,t.dispatchEvent(new Event("change"))})))}};o1=new WeakMap;var o3=o9(globalThis.HTMLMediaElement,"video"),o4=o9(globalThis.HTMLMediaElement,"audio");function o5(e){if(!(null!=e&&e.prototype))return e;let t=o9(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){var t;let i=oy(e).videoTracks;if(!i&&(i=new oC,oy(e).videoTracks=i,o3)){let a=o3.call(null!=(t=e.nativeEl)?t:e);for(let t of a)oT(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof oB)){for(let e of a)oA(e);return}oT(e,t.track)}),a.addEventListener("removetrack",e=>{oA(e.track)})}return i}(this)}});let i=o9(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){var t;let i=oy(e).audioTracks;if(!i&&(i=new o0,oy(e).audioTracks=i,o4)){let a=o4.call(null!=(t=e.nativeEl)?t:e);for(let t of a)oG(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof o2)){for(let e of a)oj(e);return}oG(e,t.track)}),a.addEventListener("removetrack",e=>{oj(e.track)})}return i}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new oB;return a.kind=e,a.label=t,a.language=i,oT(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=oA),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new o2;return a.kind=e,a.label=t,a.language=i,oG(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=oj),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=oy(e).videoRenditions;return t||(oy(t=new oO).media=e,oy(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=oy(e).audioRenditions;return t||(oy(t=new oK).media=e,oy(e).audioRenditions=t),t};return e}function o9(e,t){var i;if(null!=e&&e.prototype)return null==(i=Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`))?void 0:i.get}sH.push("castchange","entercast","leavecast");var o8,o7,o6,le,lt,li,la,lr,ln,ls,lo,ll={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},ld=Object.values(ll),lu="mux-video",lc=class extends sj{constructor(){super(),rk(this,ls),rk(this,o8),rk(this,o7),rk(this,o6),rk(this,le,{}),rk(this,lt,{}),rk(this,li),rk(this,la),rk(this,lr),rk(this,ln),rw(this,o6,(0,rv.oJ)())}static get NAME(){return lu}static get VERSION(){return sB}static get observedAttributes(){var e;return[...ld,...null!=(e=sj.observedAttributes)?e:[]]}get preferCmcd(){var e;return null!=(e=this.getAttribute(ll.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?rv.vx.includes(e)?this.setAttribute(ll.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${rv.vx.join()}`):this.removeAttribute(ll.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(ll.PLAYER_INIT_TIME)?+this.getAttribute(ll.PLAYER_INIT_TIME):rA(this,o6)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(ll.PLAYER_INIT_TIME):this.setAttribute(ll.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=rA(this,lr))?e:lu}set playerSoftwareName(e){rw(this,lr,e)}get playerSoftwareVersion(){var e;return null!=(e=rA(this,la))?e:sB}set playerSoftwareVersion(e){rw(this,la,e)}get _hls(){var e;return null==(e=rA(this,o8))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=(0,rv.by)(this.nativeEl))?e:null}get errorTranslator(){return rA(this,ln)}set errorTranslator(e){rw(this,ln,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(ll.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(ll.TYPE,e):this.removeAttribute(ll.TYPE))}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(ll.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(ll.DEBUG,""):this.removeAttribute(ll.DEBUG))}get disableTracking(){return this.hasAttribute(ll.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(ll.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(ll.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(ll.DISABLE_COOKIES,""):this.removeAttribute(ll.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(ll.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(ll.START_TIME):this.setAttribute(ll.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(ll.PLAYBACK_ID)?this.getAttribute(ll.PLAYBACK_ID):null!=(e=(0,rv.QE)(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(ll.PLAYBACK_ID,e):this.removeAttribute(ll.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(ll.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(ll.MAX_RESOLUTION,e):this.removeAttribute(ll.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(ll.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(ll.MIN_RESOLUTION,e):this.removeAttribute(ll.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(ll.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(ll.RENDITION_ORDER,e):this.removeAttribute(ll.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(ll.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(ll.PROGRAM_START_TIME):this.setAttribute(ll.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(ll.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(ll.PROGRAM_END_TIME):this.setAttribute(ll.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(ll.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(ll.ASSET_START_TIME):this.setAttribute(ll.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(ll.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(ll.ASSET_END_TIME):this.setAttribute(ll.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(ll.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(ll.CUSTOM_DOMAIN,e):this.removeAttribute(ll.CUSTOM_DOMAIN))}get drmToken(){var e;return null!=(e=this.getAttribute(ll.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(ll.DRM_TOKEN,e):this.removeAttribute(ll.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(ll.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(ll.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(ll.PLAYBACK_ID)){let[,e]=(0,rv.JI)(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(ll.PLAYBACK_TOKEN,e):this.removeAttribute(ll.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(ll.PLAYBACK_TOKEN),t=this.getAttribute(ll.DRM_TOKEN);return{...rA(this,lt),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){rw(this,lt,null!=e?e:{})}get ended(){return(0,rv.X3)(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(ll.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(ll.ENV_KEY,e):this.removeAttribute(ll.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(ll.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(ll.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(ll.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(ll.STREAM_TYPE))?e:(0,rv.wY)(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(ll.STREAM_TYPE,e):this.removeAttribute(ll.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(ll.TARGET_LIVE_WINDOW)?+this.getAttribute(ll.TARGET_LIVE_WINDOW):(0,rv.Zj)(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(ll.TARGET_LIVE_WINDOW):this.setAttribute(ll.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(ll.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(0,rv.LS)(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(ll.LIVE_EDGE_OFFSET))return+this.getAttribute(ll.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(ll.LIVE_EDGE_OFFSET):this.setAttribute(ll.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return(0,rv.RD)(this.nativeEl)}async addCuePoints(e){return(0,rv.UV)(this.nativeEl,e)}get activeCuePoint(){return(0,rv.yh)(this.nativeEl)}get cuePoints(){return(0,rv.mn)(this.nativeEl)}async addChapters(e){return(0,rv.Kh)(this.nativeEl,e)}get activeChapter(){return(0,rv.cu)(this.nativeEl)}get chapters(){return(0,rv.Uo)(this.nativeEl)}getStartDate(){return(0,rv.Nh)(this.nativeEl,this._hls)}get currentPdt(){return(0,rv.Ei)(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(ll.PREFER_PLAYBACK);if(e===rv.uI.MSE||e===rv.uI.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===rv.uI.MSE||e===rv.uI.NATIVE?this.setAttribute(ll.PREFER_PLAYBACK,e):this.removeAttribute(ll.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![ll.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...rA(this,le)}}set metadata(e){rw(this,le,null!=e?e:{}),this.mux&&this.mux.emit("hb",rA(this,le))}get _hlsConfig(){return rA(this,li)}set _hlsConfig(e){rw(this,li,e)}load(){rw(this,o8,(0,rv.j2)(this,this.nativeEl,rA(this,o8)))}unload(){(0,rv.cx)(this.nativeEl,rA(this,o8)),rw(this,o8,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(sj.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case ll.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case ll.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?rI(this,ls,lo).call(this):e&&!a?this.unload():e&&a&&(this.unload(),rI(this,ls,lo).call(this));break}case"autoplay":if(i===t)break;null==(a=rA(this,o8))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=rA(this,o8))||r.setPreload(i);break;case ll.PLAYBACK_ID:this.src=(0,rv.Lh)(this);break;case ll.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case ll.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case ll.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case ll.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!rA(this,o8)&&rI(this,ls,lo).call(this)}disconnectedCallback(){this.unload()}};o8=new WeakMap,o7=new WeakMap,o6=new WeakMap,le=new WeakMap,lt=new WeakMap,li=new WeakMap,la=new WeakMap,lr=new WeakMap,ln=new WeakMap,ls=new WeakSet,lo=async function(){rA(this,o7)||(await rw(this,o7,Promise.resolve()),rw(this,o7,null),this.load())};var lh,lm=class extends of(o5(lc)){constructor(){super(...arguments),rk(this,lh)}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=rA(this,lh))?e:this.muxCastCustomData}set castCustomData(e){rw(this,lh,e)}};lh=new WeakMap,sW.customElements.get("mux-video")||(sW.customElements.define("mux-video",lm),sW.MuxVideoElement=lm);var lp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lv=(e,t,i)=>(lp(e,t,"read from private field"),i?i.call(e):t.get(e)),lE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lb=(e,t,i,a)=>(lp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lf={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof lI&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof lI?a.element[a.attributeName]=t:a.value=t}}}};class lg extends K.DocumentFragment{constructor(e,t,i=lf){var a;super(),lE(this,uh,void 0),lE(this,um,void 0),this.append(e.content.cloneNode(!0)),lb(this,uh,l_(this)),lb(this,um,i),null==(a=i.createCallback)||a.call(i,this,lv(this,uh),t),i.processCallback(this,lv(this,uh),t)}update(e){lv(this,um).processCallback(this,lv(this,uh),e)}}uh=new WeakMap,um=new WeakMap;let l_=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new lw;for([i,a]of lT(r.value))if(i){let i=new lI(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of lT(n))if(i){let i=new lS(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new lR(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else l_(r,t);return t},ly={},lT=e=>{let t="",i=0,a=ly[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),ly[e]=a};class lA{get value(){return""}set value(e){}toString(){return this.value}}let lk=new WeakMap;class lw{constructor(){lE(this,up,[])}[Symbol.iterator](){return lv(this,up).values()}get length(){return lv(this,up).length}item(e){return lv(this,up)[e]}append(...e){for(let t of e)t instanceof lI&&lk.set(t,this),lv(this,up).push(t)}toString(){return lv(this,up).join("")}}up=new WeakMap;class lI extends lA{constructor(e,t,i){super(),lE(this,ug),lE(this,uv,""),lE(this,uE,void 0),lE(this,ub,void 0),lE(this,uf,void 0),lb(this,uE,e),lb(this,ub,t),lb(this,uf,i)}get attributeName(){return lv(this,ub)}get attributeNamespace(){return lv(this,uf)}get element(){return lv(this,uE)}get value(){return lv(this,uv)}set value(e){lv(this,uv)!==e&&(lb(this,uv,e),lv(this,ug,u_)&&1!==lv(this,ug,u_).length?lv(this,uE).setAttributeNS(lv(this,uf),lv(this,ub),lv(this,ug,u_).toString()):null==e?lv(this,uE).removeAttributeNS(lv(this,uf),lv(this,ub)):lv(this,uE).setAttributeNS(lv(this,uf),lv(this,ub),e))}get booleanValue(){return lv(this,uE).hasAttributeNS(lv(this,uf),lv(this,ub))}set booleanValue(e){if(lv(this,ug,u_)&&1!==lv(this,ug,u_).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}uv=new WeakMap,uE=new WeakMap,ub=new WeakMap,uf=new WeakMap,ug=new WeakSet,u_=function(){return lk.get(this)};class lS extends lA{constructor(e,t){super(),lE(this,uy,void 0),lE(this,uT,void 0),lb(this,uy,e),lb(this,uT,t?[...t]:[new Text])}get replacementNodes(){return lv(this,uT)}get parentNode(){return lv(this,uy)}get nextSibling(){return lv(this,uT)[lv(this,uT).length-1].nextSibling}get previousSibling(){return lv(this,uT)[0].previousSibling}get value(){return lv(this,uT).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),lb(this,uT,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(lv(this,uT)[0].parentNode,lv(this,uT),t,this.nextSibling))}}uy=new WeakMap,uT=new WeakMap;class lR extends lS{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let lC={string:e=>String(e)};class lD{constructor(e){this.template=e,this.state=void 0}}let lL=new WeakMap,lM=new WeakMap,lx={partial:(e,t)=>{t[e.expression]=new lD(e.template)},if:(e,t)=>{var i;if(lU(e.expression,t)){if(lL.get(e)!==e.template){lL.set(e,e.template);let i=new lg(e.template,t,lO);e.replace(i),lM.set(e,i)}else null==(i=lM.get(e))||i.update(t)}else e.replace(""),lL.delete(e),lM.delete(e)}},lN=Object.keys(lx),lO={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof lR){if(!n.directive){let e=lN.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=lx[n.directive])||a.call(lx,n,i);continue}let t=lU(e,i);if(t instanceof lD){lL.get(n)!==t.template?(lL.set(n,t.template),t=new lg(t.template,t.state,lO),n.value=t,lM.set(n,t)):null==(r=lM.get(n))||r.update(t.state);continue}t?(n instanceof lI&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof lI?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,lL.delete(n),lM.delete(n))):n instanceof lI?n.value=void 0:(n.value=void 0,lL.delete(n),lM.delete(n))}}},lP={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=lC[t])?void 0:i.call(lC,e)}};function lU(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r;let n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return lW(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return lW(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=lH(d,t))}return i}if(1===d.length)return lB(d[0])?lH(d[0].token,t):lW(e);if(2===d.length){let i=lP[null==(o=d[0])?void 0:o.token];return i&&lB(d[1])?i(lH(d[1].token,t)):lW(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=lP[i];return a&&lB(d[0])&&lB(d[2])?a(lH(d[0].token,t),"|"===i?d[2].token:lH(d[2].token,t)):lW(e)}}function lW(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function lB({type:e}){return["number","boolean","string","param"].includes(e)}function lH(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):D(e)?parseFloat(e):t[e]}var lV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lF=(e,t,i)=>(lV(e,t,"read from private field"),i?i.call(e):t.get(e)),lq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lK=(e,t,i,a)=>(lV(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l$=(e,t,i)=>(lV(e,t,"access private method"),i);let lY={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},lG=$.createElement("template");lG.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class lj extends K.HTMLElement{constructor(){super(),lq(this,uI),lq(this,uR),lq(this,uA,void 0),lq(this,uk,void 0),lq(this,uw,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(lY[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(u.BREAKPOINTS_COMPUTED,this.render),l$(this,uI,uS).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=lF(this,uA))?e:this.constructor.template}set template(e){lK(this,uw,null),lK(this,uA,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>lY[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=lY[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(D(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&l$(this,uR,uC).call(this)}connectedCallback(){l$(this,uR,uC).call(this)}createRenderer(){this.template&&this.template!==lF(this,uk)&&(lK(this,uk,this.template),this.renderer=new lg(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(lG.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function lQ(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function lZ(e){return e.split("-")[0]}uA=new WeakMap,uk=new WeakMap,uw=new WeakMap,uI=new WeakSet,uS=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},uR=new WeakSet,uC=function(){var e;let t=this.getAttribute("template");if(!t||t===lF(this,uw))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){lK(this,uw,t),lK(this,uA,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(lK(this,uw,t),lQ(t).then(e=>{let t=$.createElement("template");t.innerHTML=e,lK(this,uA,t),this.createRenderer()}).catch(console.error))},lj.observedAttributes=["template"],lj.processor=lO,K.customElements.get("media-theme")||K.customElements.define("media-theme",lj);class lz extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class lX extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var lJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l0=(e,t,i)=>(lJ(e,t,"read from private field"),i?i.call(e):t.get(e)),l1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l2=(e,t,i,a)=>(lJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l3=(e,t,i)=>(lJ(e,t,"access private method"),i);function l4({type:e,text:t,value:i,checked:a}){let r=$.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=$.createElement("span");return n.textContent=t,r.append(n),r}function l5(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let l9=$.createElement("template");l9.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let l8={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class l7 extends K.HTMLElement{constructor(){super(),l1(this,uU),l1(this,uH),l1(this,uF),l1(this,uK),l1(this,uY),l1(this,uZ),l1(this,uX),l1(this,u0),l1(this,u2),l1(this,u4),l1(this,u9),l1(this,u7),l1(this,ce),l1(this,ci),l1(this,cr),l1(this,cs),l1(this,cl),l1(this,uD,null),l1(this,uL,null),l1(this,uM,null),l1(this,ux,new Set),l1(this,uN,void 0),l1(this,uO,!1),l1(this,uP,null),l1(this,uB,()=>{let e=l0(this,ux),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));l2(this,ux,t)}),l1(this,uj,()=>{l3(this,uZ,uz).call(this),l3(this,uX,uJ).call(this,!1)}),l1(this,uQ,()=>{l3(this,uZ,uz).call(this)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),l2(this,uN,new MutationObserver(l0(this,uB))),l0(this,uN).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[l8.DISABLED,l8.HIDDEN,l8.STYLE,l8.ANCHOR,s.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":l3(this,uU,uW).call(this,e);break;case"invoke":l3(this,uF,uq).call(this,e);break;case"click":l3(this,u0,u1).call(this,e);break;case"toggle":l3(this,u4,u5).call(this,e);break;case"focusout":l3(this,u7,u6).call(this,e);break;case"keydown":l3(this,ce,ct).call(this,e)}}connectedCallback(){var e,t;l2(this,uP,ed(this.shadowRoot,":host")),l3(this,uH,uV).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),l2(this,uD,X(this)),null==(t=null==(e=l0(this,uD))?void 0:e.associateElement)||t.call(e,this),this.hidden||(Q(de(this),l0(this,uj)),Q(this,l0(this,uQ)))}disconnectedCallback(){var e,t;Z(de(this),l0(this,uj)),Z(this,l0(this,uQ)),this.disable(),null==(t=null==(e=l0(this,uD))?void 0:e.unassociateElement)||t.call(e,this),l2(this,uD,null)}attributeChangedCallback(e,t,i){var a,r,n,o;e===l8.HIDDEN&&i!==t?(l0(this,uO)||l2(this,uO,!0),this.hidden?l3(this,uY,uG).call(this):l3(this,uK,u$).call(this),this.dispatchEvent(new lX({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=l0(this,uD))?void 0:a.unassociateElement)||r.call(a,this),l2(this,uD,null)),i&&this.isConnected&&(l2(this,uD,X(this)),null==(o=null==(n=l0(this,uD))?void 0:n.associateElement)||o.call(n,this))):e===l8.DISABLED&&i!==t?null==i?this.enable():this.disable():e===l8.STYLE&&i!==t&&l3(this,uH,uV).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=en(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(l6)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&l3(this,cl,cd).call(this,t)}focus(){if(l2(this,uL,er()),this.items.length){l3(this,cs,co).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=l3(this,ci,ca).call(this,e);i&&(l3(this,cl,cd).call(this,i,"checkbox"===i.type),l0(this,uM)&&!this.hidden&&(null==(t=l0(this,uL))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=l3(this,ci,ca).call(this,e))?t:l3(this,cr,cn).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),l3(this,cs,co).call(this,r[s]),r[s].focus()}}function l6(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function de(e){var t;return null!=(t=e.getAttribute("bounds")?ea(e,`#${e.getAttribute("bounds")}`):z(e)||e.parentElement)?t:e}uD=new WeakMap,uL=new WeakMap,uM=new WeakMap,ux=new WeakMap,uN=new WeakMap,uO=new WeakMap,uP=new WeakMap,uU=new WeakSet,uW=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||l0(this,uB).call(this)},uB=new WeakMap,uH=new WeakSet,uV=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},uF=new WeakSet,uq=function(e){l2(this,uM,e.relatedTarget),ei(this,e.relatedTarget)||(this.hidden=!this.hidden)},uK=new WeakSet,u$=function(){var e;null==(e=l0(this,uM))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Q(de(this),l0(this,uj)),Q(this,l0(this,uQ))},uY=new WeakSet,uG=function(){var e;null==(e=l0(this,uM))||e.setAttribute("aria-expanded","false"),Z(de(this),l0(this,uj)),Z(this,l0(this,uQ))},uj=new WeakMap,uQ=new WeakMap,uZ=new WeakSet,uz=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(lZ(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=lZ(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=de(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=l0(this,uP);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},uX=new WeakSet,uJ=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=l0(this,uP);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),l3(this,uZ,uz).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),l3(this,uZ,uz).call(this);a.removeProperty("--media-menu-transition-in")},u0=new WeakSet,u1=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(l0(this,u2,u3))){null==(t=l0(this,uL))||t.focus(),this.hidden=!0;return}let i=l3(this,ci,ca).call(this,e);!i||i.hasAttribute("disabled")||(l3(this,cs,co).call(this,i),this.handleSelect(e))},u2=new WeakSet,u3=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},u4=new WeakSet,u5=function(e){if(e.target===this)return;l3(this,u9,u8).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new lz({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);l3(this,uX,uJ).call(this,!0)},u9=new WeakSet,u8=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},u7=new WeakSet,u6=function(e){var t;ei(this,e.relatedTarget)||(l0(this,uO)&&(null==(t=l0(this,uL))||t.focus()),!l0(this,uM)||l0(this,uM)===e.relatedTarget||this.hidden||(this.hidden=!0))},ce=new WeakSet,ct=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(l0(this,uO)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=l0(this,uL))||n.focus(),l0(this,uO)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},ci=new WeakSet,ca=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},cr=new WeakSet,cn=function(){return this.items.find(e=>0===e.tabIndex)},cs=new WeakSet,co=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},cl=new WeakSet,cd=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},l7.template=l9,K.customElements.get("media-chrome-menu")||K.customElements.define("media-chrome-menu",l7);var dt=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},di=(e,t,i)=>(dt(e,t,"read from private field"),i?i.call(e):t.get(e)),da=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dr=(e,t,i,a)=>(dt(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dn=(e,t,i)=>(dt(e,t,"access private method"),i);let ds=$.createElement("template");ds.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let dl={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class dd extends K.HTMLElement{constructor(){super(),da(this,ch),da(this,cp),da(this,cE),da(this,cg),da(this,cy),da(this,cA),da(this,cu,!1),da(this,cc,void 0),da(this,cf,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=$.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[dl.TYPE,dl.DISABLED,dl.CHECKED,dl.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),du(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":dn(this,ch,cm).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":dn(this,cy,cT).call(this,e);break;case"keyup":dn(this,cg,c_).call(this,e)}}attributeChangedCallback(e,t,i){e===dl.CHECKED&&du(this)&&!di(this,cu)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===dl.TYPE&&i!==t?this.role="menuitem"+i:e===dl.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(dl.DISABLED)||this.enable(),this.role="menuitem"+this.type,dr(this,cc,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),dn(this,cA,ck).call(this)}disconnectedCallback(){this.disable(),dn(this,cA,ck).call(this),dr(this,cc,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=en(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(dl.TYPE))?e:""}set type(e){this.setAttribute(dl.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(dl.VALUE))?e:this.text}set value(e){this.setAttribute(dl.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(du(this))return"true"===this.getAttribute("aria-checked")}set checked(e){du(this)&&(dr(this,cu,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!du(this)&&this.invokeTargetElement&&ei(this,e.target)&&this.invokeTargetElement.dispatchEvent(new lz({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function du(e){return"radio"===e.type||"checkbox"===e.type}cu=new WeakMap,cc=new WeakMap,ch=new WeakSet,cm=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?dn(this,cp,cv).call(this):dn(this,cE,cb).call(this))},cp=new WeakSet,cv=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",di(this,cf)),this.submenuElement.addEventListener("addmenuitem",di(this,cf)),this.submenuElement.addEventListener("removemenuitem",di(this,cf)),di(this,cf).call(this)},cE=new WeakSet,cb=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",di(this,cf)),this.submenuElement.removeEventListener("addmenuitem",di(this,cf)),this.submenuElement.removeEventListener("removemenuitem",di(this,cf)),di(this,cf).call(this)},cf=new WeakMap,cg=new WeakSet,c_=function(e){let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",dn(this,cg,c_));return}this.handleClick(e)},cy=new WeakSet,cT=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",dn(this,cg,c_));return}this.addEventListener("keyup",dn(this,cg,c_),{once:!0})},cA=new WeakSet,ck=function(){var e;let t=null==(e=di(this,cc))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},dd.template=ds,K.customElements.get("media-chrome-menu-item")||K.customElements.define("media-chrome-menu-item",dd);let dc=$.createElement("template");dc.innerHTML=l7.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class dh extends l7{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:z(this).querySelector("media-settings-menu-button")}}dh.template=dc,K.customElements.get("media-settings-menu")||K.customElements.define("media-settings-menu",dh);let dm=$.createElement("template");dm.innerHTML=dd.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(cw=dm.content)?void 0:cw.querySelector)&&(dm.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class dp extends dd{}dp.template=dm,K.customElements.get("media-settings-menu-item")||K.customElements.define("media-settings-menu-item",dp);class dv extends tV{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=en(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new lz({relatedTarget:this}))}}K.customElements.get("media-chrome-menu-button")||K.customElements.define("media-chrome-menu-button",dv);let dE=$.createElement("template");dE.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class db extends dv{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:dE,tooltipContent:"Settings"})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",A.SETTINGS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:z(this).querySelector("media-settings-menu")}}K.customElements.get("media-settings-menu-button")||K.customElements.define("media-settings-menu-button",db);var df=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dg=(e,t,i)=>(df(e,t,"read from private field"),i?i.call(e):t.get(e)),d_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dy=(e,t,i,a)=>(df(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dT=(e,t,i)=>(df(e,t,"access private method"),i);class dA extends l7{constructor(){super(...arguments),d_(this,cR),d_(this,cD),d_(this,cI,[]),d_(this,cS,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_LIST,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===d.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===d.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;dy(this,cI,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(R)),dT(this,cR,cC).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dT(this,cD,cL))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dT(this,cD,cL))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=z(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return dg(this,cI)}set mediaAudioTrackList(e){dy(this,cI,e),dT(this,cR,cC).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=ep(this,d.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){ev(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}}cI=new WeakMap,cS=new WeakMap,cR=new WeakSet,cC=function(){if(dg(this,cS)===JSON.stringify(this.mediaAudioTrackList))return;dy(this,cS,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=l4({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(e)}},cD=new WeakSet,cL=function(){if(null==this.value)return;let e=new K.CustomEvent(n.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},K.customElements.get("media-audio-track-menu")||K.customElements.define("media-audio-track-menu",dA);let dk=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,dw=$.createElement("template");dw.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${dk}</slot>
`;class dI extends dv{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_AUDIO_TRACK_ENABLED,d.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:dw,tooltipContent:"Audio"})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",A.AUDIO_TRACKS())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=z(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=ep(this,d.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){ev(this,d.MEDIA_AUDIO_TRACK_ENABLED,e)}}K.customElements.get("media-audio-track-menu-button")||K.customElements.define("media-audio-track-menu-button",dI);var dS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dR=(e,t,i)=>(dS(e,t,"read from private field"),i?i.call(e):t.get(e)),dC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dD=(e,t,i,a)=>(dS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dL=(e,t,i)=>(dS(e,t,"access private method"),i);let dM=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,dx=$.createElement("template");dx.innerHTML=l7.template.innerHTML+`
  <slot name="captions-indicator" hidden>${dM}</slot>`;class dN extends l7{constructor(){super(...arguments),dC(this,cx),dC(this,cO),dC(this,cM,void 0)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_LIST&&t!==i?dL(this,cx,cN).call(this):e===d.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dL(this,cO,cP))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dL(this,cO,cP))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:z(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return dO(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dP(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dO(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dP(this,d.MEDIA_SUBTITLES_SHOWING,e)}}cM=new WeakMap,cx=new WeakSet,cN=function(){var e;if(dR(this,cM)===JSON.stringify(this.mediaSubtitlesList))return;dD(this,cM,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let t=!this.value,i=l4({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:t});for(let t of(i.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(i),this.mediaSubtitlesList)){let i=l4({type:"radio",text:this.formatMenuItemText(t.label,t),value:eV(t),checked:this.value==eV(t)});i.prepend(l5(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(l5(this,"captions-indicator")),this.defaultSlot.append(i)}},cO=new WeakSet,cP=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(d.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new K.CustomEvent(n.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new K.CustomEvent(n.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dN.template=dx;let dO=(e,t)=>{let i=e.getAttribute(t);return i?eB(i):[]},dP=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eF(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};K.customElements.get("media-captions-menu")||K.customElements.define("media-captions-menu",dN);var dU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dB=(e,t,i,a)=>(dU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let dH=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dV=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,dF=$.createElement("template");dF.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${dH}</slot>
    <slot name="off">${dV}</slot>
  </slot>
`;let dq=e=>{e.setAttribute("aria-checked",eG(e).toString())};class dK extends dv{constructor(e={}){super({slotTemplate:dF,tooltipContent:"Captions",...e}),dW(this,cU,void 0),dB(this,cU,!1)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_SUBTITLES_LIST,d.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",A.CLOSED_CAPTIONS()),dq(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_SUBTITLES_SHOWING&&dq(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=z(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return d$(this,d.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dY(this,d.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return d$(this,d.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dY(this,d.MEDIA_SUBTITLES_SHOWING,e)}}cU=new WeakMap;let d$=(e,t)=>{let i=e.getAttribute(t);return i?eB(i):[]},dY=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eF(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};K.customElements.get("media-captions-menu-button")||K.customElements.define("media-captions-menu-button",dK);var dG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dj=(e,t,i)=>(dG(e,t,"read from private field"),i?i.call(e):t.get(e)),dQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dZ=(e,t,i)=>(dG(e,t,"access private method"),i);let dz={RATES:"rates"};class dX extends l7{constructor(){super(),dQ(this,cB),dQ(this,cV),dQ(this,cW,new eP(this,dz.RATES,{defaultValue:ad})),dZ(this,cB,cH).call(this)}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,dz.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===d.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===dz.RATES&&t!=i&&(dj(this,cW).value=i,dZ(this,cB,cH).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dZ(this,cV,cF))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dZ(this,cV,cF))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:z(this).querySelector("media-playback-rate-menu-button")}get rates(){return dj(this,cW)}set rates(e){e?Array.isArray(e)&&(dj(this,cW).value=e.join(" ")):dj(this,cW).value="",dZ(this,cB,cH).call(this)}get mediaPlaybackRate(){return eu(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ec(this,d.MEDIA_PLAYBACK_RATE,e)}}cW=new WeakMap,cB=new WeakSet,cH=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=l4({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(t)}},cV=new WeakSet,cF=function(){if(!this.value)return;let e=new K.CustomEvent(n.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},K.customElements.get("media-playback-rate-menu")||K.customElements.define("media-playback-rate-menu",dX);var dJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d0=(e,t,i)=>(dJ(e,t,"read from private field"),i?i.call(e):t.get(e)),d1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let d2="rates",d3=[1,1.2,1.5,1.7,2],d4=$.createElement("template");d4.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;class d5 extends dv{constructor(e={}){super({slotTemplate:d4,tooltipContent:T,...e}),d1(this,cq,new eP(this,d2,{defaultValue:d3})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_PLAYBACK_RATE,d2]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===d2&&(d0(this,cq).value=i),e===d.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",A.PLAYBACK_RATE({playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:z(this).querySelector("media-playback-rate-menu")}get rates(){return d0(this,cq)}set rates(e){e?Array.isArray(e)&&(d0(this,cq).value=e.join(" ")):d0(this,cq).value=""}get mediaPlaybackRate(){return eu(this,d.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ec(this,d.MEDIA_PLAYBACK_RATE,e)}}cq=new WeakMap,K.customElements.get("media-playback-rate-menu-button")||K.customElements.define("media-playback-rate-menu-button",d5);var d9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d8=(e,t,i)=>(d9(e,t,"read from private field"),i?i.call(e):t.get(e)),d7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d6=(e,t,i,a)=>(d9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ue=(e,t,i)=>(d9(e,t,"access private method"),i);class ut extends l7{constructor(){super(...arguments),d7(this,cY),d7(this,cj),d7(this,cK,[]),d7(this,c$,{})}static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_LIST,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE,d.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===d.MEDIA_RENDITION_SELECTED&&t!==i)?this.value=null!=i?i:"auto":e===d.MEDIA_RENDITION_LIST&&t!==i?(d6(this,cK,null==i?void 0:i.split(/\s+/).map(I)),ue(this,cY,cG).call(this)):e===d.MEDIA_HEIGHT&&t!==i&&ue(this,cY,cG).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ue(this,cj,cQ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ue(this,cj,cQ))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:z(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return d8(this,cK)}set mediaRenditionList(e){d6(this,cK,e),ue(this,cY,cG).call(this)}get mediaRenditionSelected(){return ep(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ev(this,d.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return eu(this,d.MEDIA_HEIGHT)}set mediaHeight(e){ec(this,d.MEDIA_HEIGHT,e)}}cK=new WeakMap,c$=new WeakMap,cY=new WeakSet,cG=function(){if(d8(this,c$).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&d8(this,c$).mediaHeight===this.mediaHeight)return;d8(this,c$).mediaRenditionList=JSON.stringify(this.mediaRenditionList),d8(this,c$).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=l4({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(e)}let i=l4({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:t}),a=this.mediaHeight>0?`Auto (${this.mediaHeight}p)`:"Auto";i.dataset.description=a,i.prepend(l5(this,"checked-indicator")),this.defaultSlot.append(i)},cj=new WeakSet,cQ=function(){if(null==this.value)return;let e=new K.CustomEvent(n.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},K.customElements.get("media-rendition-menu")||K.customElements.define("media-rendition-menu",ut);let ui=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,ua=$.createElement("template");ua.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${ui}</slot>
`;class ur extends dv{static get observedAttributes(){return[...super.observedAttributes,d.MEDIA_RENDITION_SELECTED,d.MEDIA_RENDITION_UNAVAILABLE,d.MEDIA_HEIGHT]}constructor(){super({slotTemplate:ua,tooltipContent:"Quality"})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",A.QUALITY())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:z(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ep(this,d.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){ev(this,d.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return eu(this,d.MEDIA_HEIGHT)}set mediaHeight(e){ec(this,d.MEDIA_HEIGHT,e)}}K.customElements.get("media-rendition-menu-button")||K.customElements.define("media-rendition-menu-button",ur);var un=e=>{throw TypeError(e)},us=(e,t,i)=>t.has(e)||un("Cannot "+i),uo=(e,t,i)=>(us(e,t,"read from private field"),i?i.call(e):t.get(e)),ul=(e,t,i)=>t.has(e)?un("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ud=(e,t,i,a)=>(us(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),uu=(e,t,i)=>(us(e,t,"access private method"),i),uc=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends uc{}globalThis.DocumentFragment=e}var uh,um,up,uv,uE,ub,uf,ug,u_,uy,uT,uA,uk,uw,uI,uS,uR,uC,uD,uL,uM,ux,uN,uO,uP,uU,uW,uB,uH,uV,uF,uq,uK,u$,uY,uG,uj,uQ,uZ,uz,uX,uJ,u0,u1,u2,u3,u4,u5,u9,u8,u7,u6,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cE,cb,cf,cg,c_,cy,cT,cA,ck,cw,cI,cS,cR,cC,cD,cL,cM,cx,cN,cO,cP,cU,cW,cB,cH,cV,cF,cq,cK,c$,cY,cG,cj,cQ,cZ,cz=class extends uc{},cX=class{constructor(e,t={}){ul(this,cZ),ud(this,cZ,null==t?void 0:t.detail)}get detail(){return uo(this,cZ)}initCustomEvent(){}};cZ=new WeakMap;var cJ={document:{createElement:function(e,t){return new cz}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(cz)},CustomEvent:cX,EventTarget:uc,HTMLElement:cz,HTMLVideoElement:class extends uc{}},c0="undefined"==typeof window||void 0===globalThis.customElements,c1=c0?cJ:globalThis,c2=c0?cJ.document:globalThis.document;function c3(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function c4(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function c5(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function c9(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var c8,c7,c6,he=(e,t)=>!!e&&!!t&&(!!e.contains(t)||he(e,t.getRootNode().host)),ht="mux.com",hi=(()=>{try{return"3.3.0"}catch{}return"UNKNOWN"})(),ha=(e,{token:t,customDomain:i=ht,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=(0,rv.aj)(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${c9({token:t,time:s,program_time:r})}`},hr=(e,{token:t,customDomain:i=ht,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=(0,rv.aj)(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${c9({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},hn=e=>{if(e){if([rv.lo.LIVE,rv.lo.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return rv.lo.LIVE}},hs={crossorigin:"crossOrigin",playsinline:"playsInline"},ho=class{constructor(e,t){ul(this,c8),ul(this,c7),ul(this,c6,[]),ud(this,c8,e),ud(this,c7,t)}[Symbol.iterator](){return uo(this,c6).values()}get length(){return uo(this,c6).length}get value(){var e;return null!=(e=uo(this,c6).join(" "))?e:""}set value(e){var t;e!==this.value&&(ud(this,c6,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return uo(this,c6)[e]}values(){return uo(this,c6).values()}keys(){return uo(this,c6).keys()}forEach(e){uo(this,c6).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||uo(this,c6).push(e)}),(""!==this.value||null!=(t=uo(this,c8))&&t.hasAttribute(`${uo(this,c7)}`))&&null!=(i=uo(this,c8))&&i.setAttribute(`${uo(this,c7)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{uo(this,c6).splice(uo(this,c6).indexOf(e),1)}),null==(t=uo(this,c8))||t.setAttribute(`${uo(this,c7)}`,`${this.value}`)}contains(e){return uo(this,c6).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};c8=new WeakMap,c7=new WeakMap,c6=new WeakMap;var hl=`[mux-player ${hi}]`;function hd(...e){console.warn(hl,...e)}function hu(...e){console.error(hl,...e)}function hc(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${(0,rv.ag)("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),hd(i)}var hh={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},hm={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},hp=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),hv=sH.filter(e=>"error"!==e),hE=Object.values(hh).filter(e=>![hh.PLAYSINLINE].includes(e)),hb=Object.values(hm);function hf(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var hg=class extends c1.HTMLElement{static get observedAttributes(){return[...hE,...hb]}constructor(){super()}init(){hv.forEach(e=>{var t;null==(t=this.media)||t.addEventListener(e,e=>{this.dispatchEvent(new Event(e.type))})})}attributeChangedCallback(e,t,i){var a,r;switch(e){case hm.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case hm.VOLUME:{let e=null!=(a=c5(i))?a:1;this.media&&(this.media.volume=e);return}case hm.PLAYBACKRATE:{let e=null!=(r=c5(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}requestCast(e){var t;return null==(t=this.media)?void 0:t.requestCast(e)}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:hp}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:hp}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=c5(this.getAttribute(hm.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(hm.PLAYBACKRATE,`${e}`):this.removeAttribute(hm.PLAYBACKRATE)}get crossOrigin(){return hf(this,hh.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(hh.CROSSORIGIN,`${e}`)}get autoplay(){return null!=hf(this,hh.AUTOPLAY)}set autoplay(e){e?this.setAttribute(hh.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(hh.AUTOPLAY)}get loop(){return null!=hf(this,hh.LOOP)}set loop(e){e?this.setAttribute(hh.LOOP,""):this.removeAttribute(hh.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=hf(this,hh.MUTED)}set defaultMuted(e){e?this.setAttribute(hh.MUTED,""):this.removeAttribute(hh.MUTED)}get playsInline(){return null!=hf(this,hh.PLAYSINLINE)}set playsInline(e){hu("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(hh.PRELOAD,e):this.removeAttribute(hh.PRELOAD)}},h_=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,hy=new WeakMap,hT=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=hy.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=hy.get(this.element);e&&e.delete(this.type)}}static for(t){hy.has(t.element)||hy.set(t.element,new Map);let i=t.attributeName.slice(2),a=hy.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},hA=new Map,hk=new WeakMap,hw=new WeakMap,hI=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(hA.has(this.stringsKey))return hA.get(this.stringsKey);{let e=c2.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),hA.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(hk.get(e)!==i){hk.set(e,i);let t=new lg(i,this.values,this.processor);hw.set(e,t),e instanceof lS?e.replace(...t.children):e.appendChild(t);return}let a=hw.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},hS={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof lI&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof lI){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof lI&&r.attributeName.startsWith("on")&&(hT.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof lS&&(r.replace(""),1)||n instanceof hI&&r instanceof lS&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof lS&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof lI){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function hR(e,...t){return new hI(e,t,hS)}var hC=e=>{let{tokens:t}=e;return t.drm?":host { --_cast-button-drm-display: none; }":""},hD=e=>hR`
  <style>
    ${hC(e)}
    ${h_}
  </style>
  ${hx(e)}
`,hL=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===hn(e.streamType)&&(t+=" noarrowleft noarrowright"),t},hM=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),hx=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,p,E,b,f,g,_,y,T,A,k,w,I,S,R,C,D,L,M,x,N,O,P;let U;return hR`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${hL(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(rv.lo.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(P={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor},U="",Object.entries(P).forEach(([e,t])=>{null!=t&&(U+=`${c3(e)}: ${t}; `)}),r=U?U.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    proudlydisplaymuxbadge="${null!=(h=e.proudlyDisplayMuxBadge)&&h}"
    exportparts="${hM}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(m=e.targetLiveWindow)&&m}"
      stream-type="${null!=(p=hn(e.streamType))&&p}"
      crossorigin="${null!=(E=e.crossOrigin)?E:""}"
      playsinline
      autoplay="${null!=(b=e.autoplay)&&b}"
      muted="${null!=(f=e.muted)&&f}"
      loop="${null!=(g=e.loop)&&g}"
      preload="${null!=(_=e.preload)&&_}"
      debug="${null!=(y=e.debug)&&y}"
      prefer-cmcd="${null!=(T=e.preferCmcd)&&T}"
      disable-tracking="${null!=(A=e.disableTracking)&&A}"
      disable-cookies="${null!=(k=e.disableCookies)&&k}"
      prefer-playback="${null!=(w=e.preferPlayback)&&w}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(I=e.beaconCollectionDomain)&&I}"
      player-init-time="${null!=(S=e.playerInitTime)&&S}"
      player-software-name="${null!=(R=e.playerSoftwareName)&&R}"
      player-software-version="${null!=(C=e.playerSoftwareVersion)&&C}"
      env-key="${null!=(D=e.envKey)&&D}"
      custom-domain="${null!=(L=e.customDomain)&&L}"
      src="${e.src?e.src:!!e.playbackId&&(0,rv.Lh)(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&(0,rv.Lh)(e)}"
      cast-receiver="${null!=(M=e.castReceiver)&&M}"
      drm-token="${null!=(N=null==(x=e.tokens)?void 0:x.drm)&&N}"
      exportparts="video"
    >
      ${e.storyboard?hR`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:hR``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!e.poster&&e.poster}"
        placeholdersrc="${null!=(O=e.placeholder)&&O}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},hN=e=>e.charAt(0).toUpperCase()+e.slice(1),hO=(e,t=!1)=>{var i,a;if(e.muxCode){let r=hN(null!=(i=e.errorCategory)?i:"video"),n=(0,rv.It)(null!=(a=e.errorCategory)?a:rv.Wg.VIDEO);if(e.muxCode===rv.So.NETWORK_OFFLINE)return(0,rv.ag)("Your device appears to be offline",t);if(e.muxCode===rv.So.NETWORK_TOKEN_EXPIRED)return(0,rv.ag)("{category} URL has expired",t).format({category:r});if([rv.So.NETWORK_TOKEN_SUB_MISMATCH,rv.So.NETWORK_TOKEN_AUD_MISMATCH,rv.So.NETWORK_TOKEN_AUD_MISSING,rv.So.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return(0,rv.ag)("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===rv.So.NETWORK_TOKEN_MISSING)return(0,rv.ag)("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===rv.So.NETWORK_NOT_FOUND)return(0,rv.ag)("{category} does not exist",t).format({category:r});if(e.muxCode===rv.So.NETWORK_NOT_READY)return(0,rv.ag)("{category} is not currently available",t).format({category:r})}if(e.code){if(e.code===rv.cg.MEDIA_ERR_NETWORK)return(0,rv.ag)("Network Error",t);if(e.code===rv.cg.MEDIA_ERR_DECODE)return(0,rv.ag)("Media Error",t);if(e.code===rv.cg.MEDIA_ERR_SRC_NOT_SUPPORTED)return(0,rv.ag)("Source Not Supported",t)}return(0,rv.ag)("Error",t)},hP=(e,t=!1)=>{var i,a;if(e.muxCode){let r=hN(null!=(i=e.errorCategory)?i:"video"),n=(0,rv.It)(null!=(a=e.errorCategory)?a:rv.Wg.VIDEO);return e.muxCode===rv.So.NETWORK_OFFLINE?(0,rv.ag)("Check your internet connection and try reloading this video.",t):e.muxCode===rv.So.NETWORK_TOKEN_EXPIRED?(0,rv.ag)("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===rv.So.NETWORK_TOKEN_SUB_MISMATCH?(0,rv.ag)("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===rv.So.NETWORK_TOKEN_MALFORMED?(0,rv.ag)("{category} URL is formatted incorrectly",t).format({category:r}):[rv.So.NETWORK_TOKEN_AUD_MISMATCH,rv.So.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?(0,rv.ag)("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[rv.So.NETWORK_TOKEN_MISSING,rv.So.NETWORK_INVALID_URL].includes(e.muxCode)?(0,rv.ag)("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===rv.So.NETWORK_NOT_FOUND?"":e.muxCode===rv.So.NETWORK_NOT_READY?(0,rv.ag)("The live stream or video file are not yet ready.",t):e.message}return e.code&&(e.code===rv.cg.MEDIA_ERR_NETWORK||e.code===rv.cg.MEDIA_ERR_DECODE||(e.code,rv.cg.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},hU=(e,t=!1)=>({title:hO(e,t),message:hP(e,t)}),hW=e=>{if(e.muxCode){if(e.muxCode===rv.So.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===rv.So.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([rv.So.NETWORK_TOKEN_AUD_MISMATCH,rv.So.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===rv.So.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===rv.So.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===rv.So.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===rv.So.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===rv.cg.MEDIA_ERR_NETWORK)return"";if(e.code===rv.cg.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===rv.cg.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},hB=(e,t)=>{let i=hW(e);return{message:e.message,context:e.context,file:i}},hH=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-error-dialog slot="dialog" noautohide></media-error-dialog>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,hV=c2.createElement("template");"innerHTML"in hV&&(hV.innerHTML=hH);var hF,hq,hK=class extends lj{};hK.template=null==(hq=null==(hF=hV.content)?void 0:hF.children)?void 0:hq[0],c1.customElements.get("media-theme-gerwig")||c1.customElements.define("media-theme-gerwig",hK);var h$={SRC:"src",POSTER:"poster"},hY={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge"},hG=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref","proudlydisplaymuxbadge"],hj=iN.formatErrorMessage;function hQ(e){let t=e.hasAttribute(hY.TITLE)?{video_title:e.getAttribute(hY.TITLE)}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}iN.formatErrorMessage=e=>{var t,i;if(e instanceof rv.cg){let a=hU(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${(0,rv.ag)("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return hj(e)};var hZ,hz,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h7,h6,me,mt=Object.values(ll),mi=Object.values(h$),ma=Object.values(hY),mr="mux-player",mn={isDialogOpen:!1},ms={redundant_streams:!0},mo=class extends hg{constructor(){super(),ul(this,h2),ul(this,hZ),ul(this,hz,!1),ul(this,hX,{}),ul(this,hJ,!0),ul(this,h0,new ho(this,"hotkeys")),ul(this,h1,{...mn,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&uu(this,h2,h5).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(he(this,c2.activeElement)||e.preventDefault())}}),ud(this,hZ,(0,rv.oJ)()),this.attachShadow({mode:"open"}),uu(this,h2,h4).call(this),this.isConnected&&uu(this,h2,h3).call(this)}static get NAME(){return mr}static get VERSION(){return hi}static get observedAttributes(){var e;return[...null!=(e=hg.observedAttributes)?e:[],...mi,...mt,...ma]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video");t&&(t.metadata=hQ(this))}attributeChangedCallback(e,t,i){var a;switch(uu(this,h2,h3).call(this),super.attributeChangedCallback(e,t,i),e){case hY.HOTKEYS:uo(this,h0).value=i;break;case hY.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&hd((0,rv.ag)("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time."));break;case hY.THUMBNAIL_TOKEN:if(i){let e=(0,rv.aj)(i);if(e){let{aud:t}=e,i=rv.PK.THUMBNAIL;t!==i&&hd((0,rv.ag)("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case hY.STORYBOARD_TOKEN:if(i){let e=(0,rv.aj)(i);if(e){let{aud:t}=e,i=rv.PK.STORYBOARD;t!==i&&hd((0,rv.ag)("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case hY.DRM_TOKEN:if(i){let e=(0,rv.aj)(i);if(e){let{aud:t}=e,i=rv.PK.DRM;t!==i&&hd((0,rv.ag)("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case ll.PLAYBACK_ID:null!=i&&i.includes("?token")&&hu((0,rv.ag)("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case ll.STREAM_TYPE:i&&![rv.lo.LIVE,rv.lo.ON_DEMAND,rv.lo.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:hc({file:"invalid-stream-type.md",message:(0,rv.ag)("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===rv.lo.LIVE?null==this.getAttribute(hY.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[ll.PLAYBACK_ID,h$.SRC,hY.PLAYBACK_TOKEN].includes(e)&&t!==i&&ud(this,h1,{...uo(this,h1),...mn}),uu(this,h2,h9).call(this,{[null!=(a=hs[e])?a:c4(e)]:i})}get preferCmcd(){var e;return null!=(e=this.getAttribute(ll.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?rv.vx.includes(e)?this.setAttribute(ll.PREFER_CMCD,e):hd(`Invalid value for preferCmcd. Must be one of ${rv.vx.join()}`):this.removeAttribute(ll.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(d.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(d.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(hY.THEME))?e:"gerwig"}set theme(e){this.setAttribute(hY.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(hG.includes(i))continue;let a=e.getAttribute(i);t[c4(i)]=""===a||a}return t}set themeProps(e){var t,i;uu(this,h2,h3).call(this);let a={...this.themeProps,...e};for(let r in a){if(hG.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(c3(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(c3(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(ll.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(ll.PLAYBACK_ID,e):this.removeAttribute(ll.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=ml(this,h$.SRC))?e:void 0:null!=(t=this.getAttribute(h$.SRC))?t:void 0}set src(e){e?this.setAttribute(h$.SRC,e):this.removeAttribute(h$.SRC)}get poster(){var e;let t=this.getAttribute(h$.POSTER);if(null!=t)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){hd("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return ha(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||""===e?this.setAttribute(h$.POSTER,e):this.removeAttribute(h$.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(hY.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(hY.STORYBOARD_SRC,e):this.removeAttribute(hY.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[rv.lo.LIVE,rv.lo.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:hr(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(hY.AUDIO)}set audio(e){if(!e){this.removeAttribute(hY.AUDIO);return}this.setAttribute(hY.AUDIO,"")}get hotkeys(){return uo(this,h0)}get nohotkeys(){return this.hasAttribute(hY.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(hY.NOHOTKEYS);return}this.setAttribute(hY.NOHOTKEYS,"")}get thumbnailTime(){return c5(this.getAttribute(hY.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(hY.THUMBNAIL_TIME,`${e}`)}get title(){var e;return null!=(e=this.getAttribute(hY.TITLE))?e:""}set title(e){e!==this.title&&(e?this.setAttribute(hY.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return null!=(e=ml(this,hY.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(hY.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(hY.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=c1.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(hY.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(hY.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=c1.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(hY.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(hY.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=c1.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(hY.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(hY.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(hY.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(hY.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(hY.PLAYBACK_RATES))return this.getAttribute(hY.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(hY.PLAYBACK_RATES);return}this.setAttribute(hY.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=c5(this.getAttribute(hY.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(hY.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=c5(this.getAttribute(hY.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(hY.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(hY.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(hY.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(hY.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return c5(this.getAttribute(hY.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(hY.DEFAULT_DURATION):this.setAttribute(hY.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(ll.PLAYER_INIT_TIME)?c5(this.getAttribute(ll.PLAYER_INIT_TIME)):uo(this,hZ)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(ll.PLAYER_INIT_TIME):this.setAttribute(ll.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(ll.PLAYER_SOFTWARE_NAME))?e:mr}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(ll.PLAYER_SOFTWARE_VERSION))?e:hi}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(ll.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(ll.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(ll.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(ll.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(ll.MAX_RESOLUTION,e):this.removeAttribute(ll.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(ll.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(ll.MIN_RESOLUTION,e):this.removeAttribute(ll.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(ll.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(ll.RENDITION_ORDER,e):this.removeAttribute(ll.RENDITION_ORDER))}get programStartTime(){return c5(this.getAttribute(ll.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(ll.PROGRAM_START_TIME):this.setAttribute(ll.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return c5(this.getAttribute(ll.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(ll.PROGRAM_END_TIME):this.setAttribute(ll.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return c5(this.getAttribute(ll.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(ll.ASSET_START_TIME):this.setAttribute(ll.ASSET_START_TIME,`${e}`)}get assetEndTime(){return c5(this.getAttribute(ll.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(ll.ASSET_END_TIME):this.setAttribute(ll.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(hY.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(hY.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):ms}set extraSourceParams(e){null==e?this.removeAttribute(hY.EXTRA_SOURCE_PARAMS):this.setAttribute(hY.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(ll.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(ll.CUSTOM_DOMAIN,e):this.removeAttribute(ll.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=ml(this,ll.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(ll.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(hY.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(hY.NO_VOLUME_PREF,""):this.removeAttribute(hY.NO_VOLUME_PREF)}get debug(){return null!=ml(this,ll.DEBUG)}set debug(e){e?this.setAttribute(ll.DEBUG,""):this.removeAttribute(ll.DEBUG)}get disableTracking(){return null!=ml(this,ll.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(ll.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=ml(this,ll.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(ll.DISABLE_COOKIES,""):this.removeAttribute(ll.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(ll.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:rv.lo.UNKNOWN}set streamType(e){this.setAttribute(ll.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(hY.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(hY.DEFAULT_STREAM_TYPE))?i:rv.lo.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(hY.DEFAULT_STREAM_TYPE,e):this.removeAttribute(hY.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(hY.TARGET_LIVE_WINDOW)?+this.getAttribute(hY.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(hY.TARGET_LIVE_WINDOW):this.setAttribute(hY.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return c5(ml(this,ll.START_TIME))}set startTime(e){this.setAttribute(ll.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(ll.PREFER_PLAYBACK);if(e===rv.uI.MSE||e===rv.uI.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===rv.uI.MSE||e===rv.uI.NATIVE?this.setAttribute(ll.PREFER_PLAYBACK,e):this.removeAttribute(ll.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(uu(this,h2,h3).call(this),!this.media){hu("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...hQ(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(uu(this,h2,h3).call(this),!this.media){hu("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(uu(this,h2,h3).call(this),!this.media){hu("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;if(uu(this,h2,h3).call(this),!this.media){hu("underlying media element missing when trying to addChapters. chapters will not be added.");return}return null==(t=this.media)?void 0:t.addChapters(e)}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(hY.PLAYBACK_TOKEN),t=this.getAttribute(hY.DRM_TOKEN),i=this.getAttribute(hY.THUMBNAIL_TOKEN),a=this.getAttribute(hY.STORYBOARD_TOKEN);return{...uo(this,hX),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){ud(this,hX,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(hY.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(hY.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(hY.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(hY.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(hY.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(hY.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(hY.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(hY.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return(0,rv.kX)(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i)return(0,rv.P7)(i,e)}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(hY.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(hY.CAST_RECEIVER,e):this.removeAttribute(hY.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media){hu("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(hY.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(hY.NO_TOOLTIPS);return}this.setAttribute(hY.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(hY.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(hY.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(hY.PROUDLY_DISPLAY_MUX_BADGE)}};function ml(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}hZ=new WeakMap,hz=new WeakMap,hX=new WeakMap,hJ=new WeakMap,h0=new WeakMap,h1=new WeakMap,h2=new WeakSet,h3=function(){var e,t,i,a;if(!uo(this,hz)){ud(this,hz,!0),uu(this,h2,h9).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof c1.HTMLElement))throw""}catch{hu("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof lm))throw""}catch{hu("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof ty))throw""}catch{hu("<media-controller> failed to upgrade!")}this.init(),uu(this,h2,h8).call(this),uu(this,h2,h7).call(this),uu(this,h2,h6).call(this),ud(this,hJ,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eS.USER_INACTIVE))||t),uu(this,h2,me).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>uu(this,h2,h9).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>uu(this,h2,h9).call(this))}},h4=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},h5=function(e){Object.assign(uo(this,h1),e),uu(this,h2,h9).call(this)},h9=function(e={}){var t,i,a;let r;(function(e,t){e.renderInto(t)})(hD((t={...uo(this,h1),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(hY.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=c1.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(hY.NOHOTKEYS),hotKeys:this.getAttribute(hY.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(ll.TARGET_LIVE_WINDOW),streamType:hn(this.getAttribute(ll.STREAM_TYPE)),primaryColor:this.getAttribute(hY.PRIMARY_COLOR),secondaryColor:this.getAttribute(hY.SECONDARY_COLOR),accentColor:this.getAttribute(hY.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(r=null==(a=this.mediaController)?void 0:a.querySelector("media-time-display"))&&"none"===getComputedStyle(r).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(hY.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(ll.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(hY.TITLE),novolumepref:this.hasAttribute(hY.NO_VOLUME_PREF),castReceiver:this.castReceiver,proudlyDisplayMuxBadge:this.hasAttribute(hY.PROUDLY_DISPLAY_MUX_BADGE),...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},h8=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(hG.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},h7=function(){var e;this.addEventListener("error",e=>{let{detail:t}=e;if(t instanceof rv.cg||(t=new rv.cg(t.message,t.code,t.fatal)),!(null!=t&&t.fatal)){hd(t),t.data&&hd(`${t.name} data:`,t.data);return}let i=hB(t,!1);i.message&&hc(i),hu(t),t.data&&hu(`${t.name} data:`,t.data),uu(this,h2,h5).call(this,{isDialogOpen:!0})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof rv.cg))return e;let r=hB(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}}),null==(e=this.media)||e.addEventListener("error",e=>{var t,i;let{detail:a}=e;if(!a){let{message:e,code:r}=null!=(i=null==(t=this.media)?void 0:t.error)?i:{};a=new rv.cg(e,r)}null!=a&&a.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:a}))})},h6=function(){var e,t,i,a;let r=()=>uu(this,h2,h9).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},me=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===rv.lo.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===rv.lo.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eS.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,uo(this,hJ))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(eS.USER_INACTIVE))||t;uo(this,hJ)!==a&&(ud(this,hJ,a),n(i,uo(this,hJ)))})},c1.customElements.get("mux-player")||(c1.customElements.define("mux-player",mo),c1.MuxPlayerElement=mo)},4086:function(e,t,i){i.d(t,{vx:function(){return tF},Ig:function(){return t$},cg:function(){return tO},Mw:function(){return tY},Wg:function(){return tL},So:function(){return tM},PK:function(){return iI},uI:function(){return tH},D7:function(){return tG},lo:function(){return tB},Kh:function(){return i_},UV:function(){return ic},kX:function(){return ir},It:function(){return tx},oJ:function(){return iX},cu:function(){return iT},yh:function(){return ip},Uo:function(){return iy},mn:function(){return im},Ei:function(){return iw},X3:function(){return ar},by:function(){return i4},LS:function(){return i7},RD:function(){return i8},Nh:function(){return ik},wY:function(){return i5},Zj:function(){return i9},ag:function(){return t9},j2:function(){return an},aj:function(){return t1},P7:function(){return is},cx:function(){return as},Lh:function(){return i0},QE:function(){return i2},JI:function(){return tZ}});var a=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=function(e,t){return function(){return e&&(t=e(e=0)),t}},u=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},c=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var o,d=s(t),u=0,c=d.length;u<c;u++)o=d[u],l.call(e,o)||o===i||r(e,o,{get:(function(e){return t[e]}).bind(null,o),enumerable:!(a=n(t,o))||a.enumerable});return e},h=function(e,t,i){return i=null!=e?a(o(e)):{},c(!t&&e&&e.__esModule?i:r(i,"default",{value:e,enumerable:!0}),e)},m=u(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function p(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):p(e,t)}var E=d(function(){E()});function b(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var f=d(function(){}),g=u(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),_=u(function(e,t){function i(e,t){if(!p(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}E(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),y=u(function(e,t){function i(e,t){if(!p(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}E(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),T=u(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),A=u(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),k=u(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),w=u(function(e,t){f(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=b(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),I=u(function(e,t){E();var i=g(),a=T(),r=A(),n=k(),s=w(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!p(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),S=u(function(e,t){E();var i=I();function a(e){if(!p(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),R=u(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),C=u(function(e,t){E();var i=g(),a=_(),r=y(),n=I(),s=S(),o=R(),l=T(),d=A(),u=k();function c(){if(!p(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),D=u(function(e,t){var i=C();t.exports=new i}),L=u(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=D();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function x(e,t){if(e){if("string"==typeof e)return M(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return M(e,t)}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||x(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=h(m()),P=h(m()),U=h(m()),W={now:function(){var e=U.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},B=function(){if("function"==typeof(null===(e=P.default.crypto)||void 0===e?void 0:e.getRandomValues)){i=new Uint8Array(32),P.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=W.now(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},H=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},V=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=H()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},F=function(e){e&&void 0!==e.nodeName?e=V(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function q(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},$=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,q(o)),d=(i=console.info).bind.apply(i,q(o)),u=(a=console.debug).bind.apply(a,q(o)),c=(r=console.warn).bind.apply(r,q(o)),h=(n=console.error).bind.apply(n,q(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>K.TRACE))return l.apply(void 0,q(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>K.DEBUG))return u.apply(void 0,q(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>K.INFO))return d.apply(void 0,q(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>K.WARN))return c.apply(void 0,q(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>K.ERROR))return h.apply(void 0,q(t))},get level(){return m},set level(v){v!==this.level&&(m=null!=v?v:s)}}}("[mux]"),Y=h(m());function G(){return"1"===(Y.default.doNotTrack||Y.default.navigator&&Y.default.navigator.doNotTrack)}function j(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e,t){if(!p(e,t))throw TypeError("Cannot call a class as a function")}function Z(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function z(e,t,i){return t&&Z(e.prototype,t),i&&Z(e,i),e}function X(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t,i){return(ee="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function et(e,t){return(et=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}E(),f();var ei=function(e){return ea(e)[0]},ea=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},er=h(m()),en={exists:function(){var e=er.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=er.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=er.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function es(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function eo(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){X(e,t,i[t])})}return e}function el(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var ed=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],eu=["x-cdn","content-type"].concat(ed);function ec(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(eu.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function eh(e){if(e){var t=ed.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var em=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},ep=function(e){if(!e)return{};var t=en.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ev=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ec(e.getAllResponseHeaders())},eE=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!en.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=ep(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,E=c.responseEnd;o("requestcompleted",el(eo({},em(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:E,request_type:"manifest",request_hostname:ei(r),request_response_headers:ev(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=ep(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:ei(i.url),request_response_headers:ev(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=ep(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:ei(i.url),request_response_headers:ev(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=ep(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ev(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?ei(r.responseURL):void 0,request_id:h?eh(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ev(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:ei(c),request_id:h?eh(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:ei(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var E=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,E),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,E),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eb=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ef=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=ei(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=ec(u[u.length-1]._responseHeaders||""));var c=i?eh(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},eg=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},e_=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},ey=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eT=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=ey(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:ei(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=ef(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,E=c.requestResponseHeaders,b=c.requestMediaDuration,f=c.requestHostname,g=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:E,request_hostname:f,request_id:c.requestId,request_url:g,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=ef(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,E=u.requestResponseHeaders,b=u.requestMediaDuration,f=u.requestHostname,g=u.requestUrl,_=u.requestId,y=eg(d,i),T=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:E,request_hostname:f,request_id:_,request_url:g,request_media_start_time:l,request_media_duration:b,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:e_(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=el(eo({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:ei(t.url)})};i.on("fragmentLoadingAbandoned",p);var E=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:ei(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",E),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",E),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eA=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ek=0,ew=function(){function e(){Q(this,e),X(this,"_listeners",void 0)}return z(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++ek,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++ek;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),eI=h(m()),eS=function(){function e(t){var i=this;Q(this,e),X(this,"_playbackHeartbeatInterval",void 0),X(this,"_playheadShouldBeProgressing",void 0),X(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eI.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return z(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eI.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eI.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eR=function e(t){var i=this;Q(this,e),X(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},eC=function(){function e(t){Q(this,e),X(this,"_watchTimeTrackerLastCheckedTime",void 0),X(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return z(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),es(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eD=function(){function e(t){var i=this;Q(this,e),X(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),X(this,"_lastTime",void 0),X(this,"_isAdPlaying",void 0),X(this,"_callbackUpdatePlaybackTime",void 0),X(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=W.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=W.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return z(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=W.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&es(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eL=function(){function e(t){Q(this,e),X(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return z(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eM=function e(t){if(Q(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;es(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(es(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},ex=function(){function e(t){var i=this;Q(this,e),X(this,"_lastCheckedTime",void 0),X(this,"_lastPlayheadTime",void 0),X(this,"_lastPlayheadTimeUpdatedTime",void 0),X(this,"_rebuffering",void 0),X(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:W.now()})}))}return z(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eN=function(){function e(t){var i=this;Q(this,e),X(this,"NAVIGATION_START",void 0),X(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||W.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||W.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return z(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eO=function e(t){var i=this;Q(this,e),X(this,"_lastPlayerHeight",void 0),X(this,"_lastPlayerWidth",void 0),X(this,"_lastPlayheadPosition",void 0),X(this,"_lastSourceHeight",void 0),X(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),es(t.data,"view_total_content_playback_time",e),es(t.data,"view_total_upscaling",r*e),es(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eP=function e(t){var i=this;Q(this,e),X(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=W.now(),r=(t.data.viewer_time||e)-(a||e);es(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,es(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eU=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eW=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eB=function(){function e(t){var i=this;Q(this,e),X(this,"_adHasPlayed",void 0),X(this,"_adRequests",void 0),X(this,"_adResponses",void 0),X(this,"_currentAdRequestNumber",void 0),X(this,"_currentAdResponseNumber",void 0),X(this,"_prerollPlayTime",void 0),X(this,"_wouldBeNewAdPlay",void 0),X(this,"isAdBreak",void 0),X(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eW.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eU(i._adRequests,a),es(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||es(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eU(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&es(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,es(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||es(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||es(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return z(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=N(ea(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=N(ea(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eH=h(m()),eV=function e(t){Q(this,e);var i,a,r=function(){t.disableRebufferTracking||(es(t.data,"view_waiting_rebuffer_count",1),i=W.now(),a=eH.default.setInterval(function(){if(i){var e=W.now();es(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(es(t.data,"view_waiting_rebuffer_duration",W.now()-i),i=!1,eH.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},eF=function e(t){var i=this;Q(this,e),X(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=W.now(),t.on("before*",r)},r=function(e){var a=W.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eq=h(m()),eK=(e7=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=e7({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",a,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",e7(t,{expires:-1}))},i.withConverter=e,i}(function(){})),e$="muxData",eY=function(){var e;try{e=(eK.get(e$)||"").split("&").reduce(function(e,t){var i=N(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eG=function(e){try{eK.set(e$,Object.entries(e).map(function(e){var t=N(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},ej=function(){var e=eY();return e.mux_viewer_id=e.mux_viewer_id||B(),e.msn=e.msn||Math.random(),eG(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eQ=function(){var e=eY(),t=W.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=B(),e.sst=t),e.sex=t+15e5,eG(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},eZ=h(m()),ez=function(){var e;switch(eX()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},eX=function(){var e=eZ.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};ez.getConnectionFromAPI=eX;var eJ=e1({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e0=e1({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e1(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e2(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=eJ[s];o||($.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e0[e]?o+=e0[e]:Number(e)&&Math.floor(Number(e))===Number(e)?o+=e:($.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e3=h(m()),e4=h(L()),e5={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e9=["hb","requestcompleted","requestfailed","requestcanceled"],e8=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e5,t)};e8.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e8.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},e8.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e3.default.clearTimeout(this._sendTimeout)},e8.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e2({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);tt(this._beaconUrl,i,!0,function(){})},e8.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=W.now();tt(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,$.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=W.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},e8.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e8.prototype._startBeaconSending=function(){var e=this;e3.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e3.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e8.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(W.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||($.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e9.indexOf(e.e)}),s()),o()||($.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var e7,e6,te="function"==typeof e4.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},tt=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(e3.default.fetch){e3.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:te(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(e3.default.XMLHttpRequest){var r=new e3.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},ti=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],ta=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],tr=["ad_id","ad_creative_id","ad_universal_id"],tn=["viewstart","error","ended","viewend"],ts=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,E,b,f,g,_,y,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Q(this,e),X(this,"mux",void 0),X(this,"envKey",void 0),X(this,"options",void 0),X(this,"eventQueue",void 0),X(this,"sampleRate",void 0),X(this,"disableCookies",void 0),X(this,"respectDoNotTrack",void 0),X(this,"previousBeaconData",void 0),X(this,"lastEventTime",void 0),X(this,"rateLimited",void 0),X(this,"pageLevelData",void 0),X(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e8((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(_=this.options.sampleRate)&&void 0!==_?_:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(T=this.options.respectDoNotTrack)&&void 0!==T&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(E=this.options.platform)||void 0===E||null===(p=E.os)||void 0===p?void 0:p.architecture,viewer_os_version:null===(f=this.options.platform)||void 0===f||null===(b=f.os)||void 0===b?void 0:b.version,viewer_connection_type:ez(),page_url:null===eq.default||void 0===eq.default||null===(g=eq.default.location)||void 0===g?void 0:g.href},this.viewerData=this.disableCookies?{}:ej()}return z(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&G())return $.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return $.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eQ(),a=el(eo({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=e2(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return $.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||$.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if($.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):tn.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=e2(a),this.eventQueue.queueEvent(a.event,s),$.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=eo({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=N(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||ti.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||tr.includes(t)&&ta.includes(e))}}]),e}(),to=function e(t){Q(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tl=function e(t){var i=this;Q(this,e),X(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=W.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,X({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},td=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],tu=new Set(["requestcompleted","requestfailed","requestcanceled"]),tc=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&et(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=J(a);return e=t?Reflect.construct(i,arguments,J(this).constructor):i.apply(this,arguments),e&&("object"===b(e)||"function"==typeof e)?e:j(this)});function a(e,t,r){Q(this,a),X(j(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),X(j(n),"NAVIGATION_START",void 0),X(j(n),"_destroyed",void 0),X(j(n),"_heartBeatTimeout",void 0),X(j(n),"adTracker",void 0),X(j(n),"dashjs",void 0),X(j(n),"data",void 0),X(j(n),"disablePlayheadRebufferTracking",void 0),X(j(n),"disableRebufferTracking",void 0),X(j(n),"errorTracker",void 0),X(j(n),"errorTranslator",void 0),X(j(n),"emitTranslator",void 0),X(j(n),"getAdData",void 0),X(j(n),"getPlayheadTime",void 0),X(j(n),"getStateData",void 0),X(j(n),"stateDataTranslator",void 0),X(j(n),"hlsjs",void 0),X(j(n),"id",void 0),X(j(n),"longResumeTracker",void 0),X(j(n),"minimumRebufferDuration",void 0),X(j(n),"mux",void 0),X(j(n),"playbackEventDispatcher",void 0),X(j(n),"playbackHeartbeat",void 0),X(j(n),"playbackHeartbeatTime",void 0),X(j(n),"playheadTime",void 0),X(j(n),"seekingTracker",void 0),X(j(n),"sustainedRebufferThreshold",void 0),X(j(n),"watchTimeTracker",void 0),X(j(n),"currentFragmentPDT",void 0),X(j(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=en.domContentLoadedEventEnd(),n.NAVIGATION_START=en.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),$.level=r.debug?K.DEBUG:K.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new ts(e,r.data.env_key,r),n.data={player_instance_id:B(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(j(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),td.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tl(j(n)),n.errorTracker=new eR(j(n)),new eF(j(n)),n.seekingTracker=new eP(j(n)),n.playheadTime=new eL(j(n)),n.playbackHeartbeat=new eS(j(n)),new eO(j(n)),n.watchTimeTracker=new eC(j(n)),new eD(j(n)),n.adTracker=new eB(j(n)),new ex(j(n)),new eM(j(n)),new eN(j(n)),new eV(j(n)),new to(j(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return z(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=ee(J(a.prototype),"emit",this)).call.apply(i,[this].concat(q(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=N(ea(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tu.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e=this.getStateData();if("function"==typeof this.stateDataTranslator)try{e=this.stateDataTranslator(e)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}Object.assign(this.data,e),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=B(),i=function(){t===e.data.view_id&&es(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,eE(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eb(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,eT(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(eA(this.dashjs),this.dashjs=void 0)}}]),a}(ew),th=h(L()),tm=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tp={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tv=h(m());tv.default&&tv.default.WeakMap&&(e6=new WeakMap);var tE={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tb=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tb.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tb.prototype.processLine=function(e){var t=e.indexOf(":"),i=tk(e,t),a=i[0],r=2===i.length?t_(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case tE.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case tE.PART_INF:tf(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case tE.SERVER_CONTROL:tf(this.manifest,i),this.setHoldBack();break;case tE.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case tE.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case tE.VERSION:tf(this.manifest,i);break;case tE.SESSION_DATA:var s=em(tw(i[1]));Object.assign(this.manifest.sessionData,s)}},tb.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tf=function(e,t){var i,a=tg(t[0].replace("#EXT-X-",""));tA(t[1])?(i={},i=Object.assign(tT(t[1]),i)):i=t_(t[1]),e[a]=i},tg=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},t_=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},ty=function(e){var t={},i=e.split("=");return i.length>1&&(t[tg(i[0])]=t_(i[1])),t},tT=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(ty(t[a]),i);return i},tA=function(e){return e.indexOf("=")>-1},tk=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tw=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tI={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){$.info("safeCall error",e)}return r},safeIncrement:es,getComputedStyle:function(e,t){var i;return e&&t&&tv.default&&"function"==typeof tv.default.getComputedStyle?(e6&&e6.has(e)&&(i=e6.get(e)),i||(i=tv.default.getComputedStyle(e,null),e6&&e6.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ec,cdnHeadersToRequestId:eh,extractHostnameAndDomain:ea,extractHostname:ei,manifestParser:tb,generateShortID:H,generateUUID:B,now:W.now,findMediaElement:F},tS={},tR=function(e){var t=arguments;"string"==typeof e?tR.hasOwnProperty(e)?O.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tR[e].apply(null,t)},0):$.warn("`"+e+"` is an unknown task"):"function"==typeof e?O.default.setTimeout(function(){e(tR)},0):$.warn("`"+e+"` is invalid.")},tC={loaded:W.now(),NAME:"mux-embed",VERSION:"5.6.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=N(F(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null===(e=this.getPlayheadTime)||void 0===e?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:th.default&&!!(th.default.fullscreenElement||th.default.webkitFullscreenElement||th.default.mozFullScreenElement||th.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(t=r.getVideoPlaybackQuality)||void 0===t?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(s.player_program_time=u+i,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);s.player_live_edge_program_time=c}}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=N(F(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tm.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tp[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tR,e,t)},destroyMonitor:function(e){var t=N(F(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():$.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=V(e);tS[i]?tS[i].addHLSJS(t):$.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=V(e);tS[i]?tS[i].addDashJS(t):$.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=V(e);tS[t]?tS[t].removeHLSJS():$.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=V(e);tS[t]?tS[t].removeDashJS():$.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){G()&&t&&t.respectDoNotTrack&&$.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=V(e);tS[i]=new tc(tR,i,t)},emit:function(e,t,i){var a=V(e);tS[a]?(tS[a].emit(t,i),"destroy"===t&&delete tS[a]):$.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=V(e);tS[i]?tS[i].emit("hb",t):$.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=V(e);tS[i]?tS[i].emitTranslator=t:$.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=V(e);tS[i]?tS[i].stateDataTranslator=t:$.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=V(e);tS[i]?tS[i].getPlayheadTime=t:$.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:G,log:$,utils:tI,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tR,tC),void 0!==O.default&&"function"==typeof O.default.addEventListener&&O.default.addEventListener("pagehide",function(e){e.persisted||(tR.WINDOW_UNLOADING=!0)},!1);var tD=i(57273).ZP,tL={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},tM={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},tx=e=>e===tL.VIDEO?"playback":e,tN=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tN.MEDIA_ERR_ABORTED=1,tN.MEDIA_ERR_NETWORK=2,tN.MEDIA_ERR_DECODE=3,tN.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tN.MEDIA_ERR_ENCRYPTED=5,tN.MEDIA_ERR_CUSTOM=100,tN.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tO=tN,tP=e=>null==e,tU=(e,t)=>!tP(t)&&e in t,tW={ANY:"any",MUTED:"muted"},tB={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tH={MSE:"mse",NATIVE:"native"},tV={HEADER:"header",QUERY:"query",NONE:"none"},tF=Object.values(tV),tq={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tK={HLS:tq.M3U8},t$=(Object.keys(tK),[...Object.values(tq)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),tY={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},tG={DESCENDING:"desc"},tj={code:"en"},tQ=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tZ=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},tz=e=>{let t=e.type;if(t){let e=t.toUpperCase();return tU(e,tK)?tK[e]:t}let{src:i}=e;return i?t0(i):""},tX=e=>"VOD"===e?tB.ON_DEMAND:tB.LIVE,tJ=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,t0=e=>{let t="";try{t=new URL(e).pathname}catch{console.error("invalid url")}let i=t.lastIndexOf(".");if(i<0)return"";let a=t.slice(i+1).toUpperCase();return tU(a,tq)?tq[a]:""},t1=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}},t2=({exp:e},t=Date.now())=>!e||1e3*e<t,t3=({sub:e},t)=>e!==t,t4=({aud:e},t)=>!e,t5=({aud:e},t)=>e!==t;function t9(e,t=!0){var i;return new t8(t&&null!=(i=null==tj?void 0:tj[e])?i:e,t?tj.code:"en")}var t8=class{constructor(e,t=(e=>null!=(e=tj)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},t7=Object.values(tW),t6=e=>"boolean"==typeof e||"string"==typeof e&&t7.includes(e),ie=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=t6(a)?a:!!a,o=()=>{r||tQ(t,"playing",()=>{r=!0},{once:!0})};if(o(),tQ(t,"loadstart",()=>{r=!1,o(),it(t,s)},{once:!0}),tQ(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tB.UNKNOWN?e.streamType===tB.LIVE:!Number.isFinite(t.duration)),it(t,s)},{once:!0}),i&&i.once(tD.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tB.UNKNOWN?e.streamType===tB.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tQ(t,"play",()=>{"metadata"===t.preload?i.once(tD.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||it(t,s=t6(e)?e:!!e)}},it=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tW.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tW.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},ii=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tQ(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d},ia=e=>"time"in e?e.time:e.startTime;function ir(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function is(e,t){let i=Array.prototype.find.call(e.querySelectorAll("track"),e=>e.track===t);null==i||i.remove()}function io(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function il(e,t,i,a){let r=io(e,i,a);return r||((r=ir(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>ia(t)-ia(e)).forEach(t=>{var i,n;let s=t.value,o=ia(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var id="cuepoints",iu=Object.freeze({label:id});async function ic(e,t,i=iu){return il(e,t,i.label,"metadata")}var ih=e=>({time:e.startTime,value:JSON.parse(e.text)});function im(e,t={label:id}){let i=io(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>ih(e)):[]}function ip(e,t={label:id}){var i,a;let r=io(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return ih(r.activeCues[0]);let{currentTime:n}=e;return ih(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iv(e,t=iu){return new Promise(i=>{tQ(e,"loadstart",async()=>{let a=await ic(e,[],t);tQ(e,"cuechange",()=>{let t=ip(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iE="chapters",ib=Object.freeze({label:iE}),ig=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function i_(e,t,i=ib){return il(e,t,i.label,"chapters")}function iy(e,t={label:iE}){var i;let a=io(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>ig(e)):[]}function iT(e,t={label:iE}){var i,a;let r=io(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return ig(r.activeCues[0]);let{currentTime:n}=e;return ig(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function iA(e,t=ib){return new Promise(i=>{tQ(e,"loadstart",async()=>{let a=await i_(e,[],t);tQ(e,"cuechange",()=>{let t=iT(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}function ik(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}function iw(e,t){return t&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}var iI={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},iS=e=>e===tL.VIDEO?iI.VIDEO:e===tL.DRM?iI.DRM:void 0,iR=(e,t)=>{var i,a;let r=tx(e),n=`${r}Token`;return null!=(i=t.tokens)&&i[r]?null==(a=t.tokens)?void 0:a[r]:tU(n,t)?t[n]:void 0},iC=(e,t,i,a=!1,r=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var n,s;if(r){let i=t9("Your device appears to be offline",a),r=tO.MEDIA_ERR_NETWORK,n=new tO(i,r,!0,void 0);return n.errorCategory=t,n.muxCode=tM.NETWORK_OFFLINE,n.data=e,n}let o="status"in e?e.status:e.code,l=Date.now(),d=tO.MEDIA_ERR_NETWORK;if(200===o)return;let u=tx(t),c=iR(t,i),h=iS(t),[m]=tZ(null!=(n=i.playbackId)?n:"");if(!o||!m)return;let p=t1(c);if(c&&!p){let i=new tO(t9("The {tokenNamePrefix}-token provided is invalid or malformed.",a).format({tokenNamePrefix:u}),d,!0,t9("Compact JWT string: {token}",a).format({token:c}));return i.errorCategory=t,i.muxCode=tM.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(o>=500){let e=new tO("",d,!0);return e.errorCategory=t,e.muxCode=tM.NETWORK_UNKNOWN_ERROR,e}if(403===o){if(p){if(t2(p,l)){let i={timeStyle:"medium",dateStyle:"medium"},r=new tO(t9("The video’s secured {tokenNamePrefix}-token has expired.",a).format({tokenNamePrefix:u}),d,!0,t9("Expired at: {expiredDate}. Current time: {currentDate}.",a).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(s=p.exp)?s:0),currentDate:new Intl.DateTimeFormat("en",i).format(l)}));return r.errorCategory=t,r.muxCode=tM.NETWORK_TOKEN_EXPIRED,r.data=e,r}if(t3(p,m)){let i=new tO(t9("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",a).format({tokenNamePrefix:u}),d,!0,t9("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",a).format({tokenNamePrefix:u,playbackId:m,tokenPlaybackId:p.sub}));return i.errorCategory=t,i.muxCode=tM.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if(t4(p,h)){let i=new tO(t9("The {tokenNamePrefix}-token is formatted with incorrect information.",a).format({tokenNamePrefix:u}),d,!0,t9("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",a).format({tokenNamePrefix:u,expectedAud:h}));return i.errorCategory=t,i.muxCode=tM.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if(t5(p,h)){let i=new tO(t9("The {tokenNamePrefix}-token is formatted with incorrect information.",a).format({tokenNamePrefix:u}),d,!0,t9("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",a).format({tokenNamePrefix:u,expectedAud:h,aud:p.aud}));return i.errorCategory=t,i.muxCode=tM.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new tO(t9("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",a).format({tokenNamePrefix:u,category:t}),d,!0,t9("Specified playback ID: {playbackId}",a).format({playbackId:m}));return i.errorCategory=t,i.muxCode=tM.NETWORK_TOKEN_MISSING,i.data=e,i}}if(412===o){let i=new tO(t9("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",a),d,!0,t9("Specified playback ID: {playbackId}",a).format({playbackId:m}));return i.errorCategory=t,i.muxCode=tM.NETWORK_NOT_READY,i.data=e,i}if(404===o){let i=new tO(t9("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",a),d,!0,t9("Specified playback ID: {playbackId}",a).format({playbackId:m}));return i.errorCategory=t,i.muxCode=tM.NETWORK_NOT_FOUND,i.data=e,i}if(400===o){let i=new tO(t9("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),d,!0,t9("Specified playback ID: {playbackId}",a).format({playbackId:m}));return i.errorCategory=t,i.muxCode=tM.NETWORK_INVALID_URL,i.data=e,i}let E=new tO("",d,!0);return E.errorCategory=t,E.muxCode=tM.NETWORK_UNKNOWN_ERROR,E.data=e,E},iD=tD.DefaultConfig.capLevelController,iL=class e extends iD{constructor(e){super(e)}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevel(t){let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iD.getMaxLevelByMediaSize(a,16/9*n,n)}};iL.minMaxResolution=720;var iM,ix,iN,iO,iP,iU,iW={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},iB=e=>e.includes("fps")?iW.FAIRPLAY:e.includes("playready")?iW.PLAYREADY:e.includes("widevine")?iW.WIDEVINE:void 0,iH=async e=>fetch(e).then(e=>200!==e.status?Promise.reject(e):e.text()).then(e=>fetch(e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>200!==e.status?Promise.reject(e):e.text()).then(e=>e.split(`
`))),iV=e=>{var t,i,a;let r=null==(i=(null!=(t=e.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),n=tX(r),s=tJ(r),o;if(n===tB.LIVE){let t=e.find(e=>e.startsWith("#EXT-X-PART-INF"));if(t)o=2*+t.split(":")[1].split("=")[1];else{let t=e.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),i=null==(a=null==t?void 0:t.split(":"))?void 0:a[1];o=3*+(null!=i?i:6)}}return{streamType:n,targetLiveWindow:s,liveEdgeStartOffset:o}},iF=async(e,t)=>t===tq.MP4?{streamType:tB.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0}:t===tq.M3U8?iV(await iH(e)):(console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),iq=async(e,t,i=tz({src:e}))=>{var a,r,n;let{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}=await iF(e,i);(null!=(a=iQ.get(t))?a:{}).liveEdgeStartOffset=l,(null!=(r=iQ.get(t))?r:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(n=iQ.get(t))?n:{}).streamType=s,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iK=e=>{var t;let i=e.type,a=tX(i),r=tJ(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tB.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},i$=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=iK(e);if(c===tB.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=iQ.get(t))?o:{}).seekable=e}(null!=(l=iQ.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=iQ.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=iQ.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iY=null!=(ix=null==(iM=null==globalThis?void 0:globalThis.navigator)?void 0:iM.userAgent)?ix:"",iG=null!=(iP=null==(iO=null==(iN=null==globalThis?void 0:globalThis.navigator)?void 0:iN.userAgentData)?void 0:iO.platform)?iP:"",ij=iY.toLowerCase().includes("android")||["x11","android"].some(e=>iG.toLowerCase().includes(e)),iQ=new WeakMap,iZ="mux.com",iz=null==(iU=tD.isSupported)?void 0:iU.call(tD),iX=()=>tR.utils.now(),iJ=tR.utils.generateUUID,i0=({playbackId:e,customDomain:t=iZ,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=tZ(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},i1=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},i2=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(".m3u8");return t||void 0},i3=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:aE(e)&&null!=(a=null!=(i=i1(e.playbackId))?i:i2(e.src))?a:e.src},i4=e=>{var t;return null==(t=iQ.get(e))?void 0:t.error},i5=e=>{var t,i;return null!=(i=null==(t=iQ.get(e))?void 0:t.streamType)?i:tB.UNKNOWN},i9=e=>{var t,i;return null!=(i=null==(t=iQ.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},i8=e=>{var t,i;return null!=(i=null==(t=iQ.get(e))?void 0:t.seekable)?i:e.seekable},i7=e=>{var t;let i=null==(t=iQ.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=i8(e);return a.length?a.end(a.length-1)-i:Number.NaN},i6=.034,ae=(e,t,i=i6)=>Math.abs(e-t)<=i,at=(e,t,i=i6)=>e>t||ae(e,t,i),ai=(e,t=i6)=>e.paused&&at(e.currentTime,e.duration,t),aa=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},ar=(e,t)=>e.ended||e.loop?e.ended:!!(t&&aa(e,t))||ai(e),an=(e,t,i)=>{as(t,i);let{metadata:a={}}=e,{view_session_id:r=iJ()}=a,n=i3(e);a.view_session_id=r,a.video_id=n,e.metadata=a,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},iQ.set(t,{});let s=al(e,t),o=ii(e,t,s);ab(e,t,s),af(e,t,s),iv(t),iA(t);let l=ie(e,t,s);return{engine:s,setAutoplay:l,setPreload:o}},as=(e,t)=>{let i=null==t?void 0:t.engine;i&&(i.detachMedia(),i.destroy()),null!=e&&e.mux&&!e.mux.deleted&&(e.mux.destroy(),delete e.mux),e&&(e.removeAttribute("src"),e.load(),e.removeEventListener("error",a_),e.removeEventListener("error",aT),e.removeEventListener("durationchange",ag),iQ.delete(e),e.dispatchEvent(new Event("teardown")))};function ao(e,t){var i;let a=tz(e);if(a!==tq.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tH.MSE,o=n===tH.NATIVE;return r&&(o||!(iz&&(s||ij)))}var al=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=tz(e)===tq.M3U8,d=ao(e,t);if(l&&!d&&iz){let t=ad(a),l=au(e);return new tD({debug:i,startPosition:r,cmcd:s!==tV.NONE?{useHeaders:s===tV.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tV.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},capLevelController:iL,backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...t,...l,...o})}},ad=e=>e===tB.LIVE?{backBufferLength:8}:{},au=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=i1(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:ap(e,"fairplay"),serverCertificateUrl:av(e,"fairplay")},"com.widevine.alpha":{licenseUrl:ap(e,"widevine")},"com.microsoft.playready":{licenseUrl:ap(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=iB(e);return null==a||a(i),t}))}:{}},ac=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},ah=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},am=(e,t)=>{tQ(t,"encrypted",async i=>{try{let a=i.initDataType;if("skd"!==a){console.error(`Received unexpected initialization data type "${a}"`);return}if(!t.mediaKeys){let i=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(t=>{var i;return null==(i=e.drmTypeCb)||i.call(e,iW.FAIRPLAY),t}).catch(()=>{let e=t9("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),i=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=tL.DRM,i.muxCode=tM.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,ay(t,i)});if(!i)return;let r=await i.createMediaKeys();try{let t=await ac(av(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iC(t,tL.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)});await r.setServerCertificate(t).catch(()=>{let e=t9("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tL.DRM,t.muxCode=tM.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(e){ay(t,e);return}await t.setMediaKeys(r)}let r=i.initData;if(null==r){console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);return}let n=t.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(e=>{let i;if("internal-error"===e){let e=t9("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");(i=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tL.DRM,i.muxCode=tM.ENCRYPTED_CDM_ERROR}else if("output-restricted"===e||"output-downscaled"===e){let e=t9("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");(i=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tL.DRM,i.muxCode=tM.ENCRYPTED_OUTPUT_RESTRICTED}i&&ay(t,i)})});let s=await Promise.all([n.generateRequest(a,r).catch(()=>{let e=t9("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),i=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=tL.DRM,i.muxCode=tM.ENCRYPTED_GENERATE_REQUEST_FAILED,ay(t,i)}),new Promise(e=>{n.addEventListener("message",t=>{e(t.message)},{once:!0})})]).then(([,e])=>e);n.generateRequest(a,r);let o=await ah(s,ap(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iC(t,tL.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)});await n.update(o).catch(()=>{let e=t9("Failed to update DRM license. This may be an issue with the player or your protected content."),t=new tO(e,tO.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tL.DRM,t.muxCode=tM.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(t)})}catch(e){ay(t,e);return}})},ap=({playbackId:e,tokens:{drm:t}={},customDomain:i=iZ},a)=>{let r=i1(e);return`https://license.${i.toLocaleLowerCase().endsWith(iZ)?i:iZ}/license/${a}/${r}?token=${t}`},av=({playbackId:e,tokens:{drm:t}={},customDomain:i=iZ},a)=>{let r=i1(e);return`https://license.${i.toLocaleLowerCase().endsWith(iZ)?i:iZ}/appcert/${a}/${r}?token=${t}`},aE=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iZ)||!!i&&a.includes(i.toLocaleLowerCase())},ab=(e,t,i)=>{var a;let{envKey:r,disableTracking:n}=e,s=aE(e);if(!n&&(r||s)){let{playerInitTime:n,playerSoftwareName:s,playerSoftwareVersion:o,beaconCollectionDomain:l,debug:d,disableCookies:u}=e,c={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};tR.monitor(t,{debug:d,beaconCollectionDomain:l,hlsjs:i,Hls:i?tD:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:u,data:{...r?{env_key:r}:{},player_software_name:s,player_software:s,player_software_version:o,player_init_time:n,...c}})}},af=(e,t,i)=>{var a,r;let n=ao(e,t),{src:s}=e,o=()=>{t.ended||!ar(t,i)||(aa(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},l,d,u=()=>{let e=i8(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(d!==a||l!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),l=i,d=a};if(tQ(t,"durationchange",u),t&&n){let i=tz(e);if("string"==typeof s){let n=()=>{if(i5(t)!==tB.LIVE||Number.isFinite(t.duration))return;let e=setInterval(u,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tQ(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},o=async()=>iq(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=iC(i,tL.VIDEO,e);if(a){ay(t,a);return}}});if("none"===t.preload){let e=()=>{o(),t.removeEventListener("loadedmetadata",i)},i=()=>{o(),t.removeEventListener("play",e)};tQ(t,"play",e,{once:!0}),tQ(t,"loadedmetadata",i,{once:!0})}else o();null!=(a=e.tokens)&&a.drm?am(e,t):tQ(t,"encrypted",()=>{let e=new tO(t9("Attempting to play DRM-protected content without providing a DRM token."),tO.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tL.DRM,e.muxCode=tM.ENCRYPTED_MISSING_TOKEN,ay(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=iQ.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",ag,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",a_),t.addEventListener("error",aT),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tQ(t,"pause",o),tQ(t,"seeked",o),tQ(t,"play",()=>{t.ended||at(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(tD.Events.LEVEL_LOADED,(e,a)=>{i$(a.details,t,i),u(),i5(t)!==tB.LIVE||Number.isFinite(t.duration)||(i.on(tD.Events.LEVEL_UPDATED,u),tQ(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tD.Events.LEVELS_UPDATED,u)}))}),i.on(tD.Events.ERROR,(i,a)=>{ay(t,aA(a,e))}),t.addEventListener("error",aT),tQ(t,"waiting",o),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tD.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tD.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tD.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let r=i=>{let a=e.currentTime,r=!1,n=(e,t)=>{r||(r=!Number.isFinite(t.endOffset))};t.on(tD.Events.BUFFER_FLUSHING,n),t.nextLevel=i,t.off(tD.Events.BUFFER_FLUSHING,n),r||t.trigger(tD.Events.BUFFER_FLUSHING,{startOffset:a+10,endOffset:1/0,type:"video"})};null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&r(i)});let n=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{n(),s()};t.once(tD.Events.DESTROYING,o)}(e,i),function(e,t){t.on(tD.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a,r;let n=null!=(a=i.subtitleTrack)?a:i.closedCaptions,s=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==n?void 0:n.lang)&&t===i.label&&a.toLowerCase()===i.kind),o=(null!=(r=i._id)?r:i.default)?"default":`${i.kind}${s}`;ir(e,i.kind,i.label,null==n?void 0:n.lang,o,i.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let i=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!i)return;let a=t.subtitleTracks[t.subtitleTrack],r=a?a.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(null==i?void 0:i.id)!==r){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:a,default:r})=>"default"===i.id&&r||e==i.language&&t===i.label&&a.toLowerCase()===i.kind);t.subtitleTrack=e}(null==i?void 0:i.id)===r&&i.cues&&Array.from(i.cues).forEach(e=>{i.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tD.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tD.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&("thumbnails"===t.label||"chapters"===t.kind)){if(!(null!=(i=t.cues)&&i.length)){let i="track";t.kind&&(i+=`[kind="${t.kind}"]`),t.label&&(i+=`[label="${t.label}"]`);let r=e.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tD.Events.MANIFEST_LOADED,a),t.once(tD.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function ag(e){var t;let i=e.target,a=null==(t=iQ.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function a_(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tO(i,a);if(t.src&&a===tO.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var e;let i=null!=(e=i4(t))?e:t.error;(null==i?void 0:i.code)===tO.MEDIA_ERR_SRC_NOT_SUPPORTED&&ay(t,r)},500);return}if(t.src&&(a!==tO.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}ay(t,r)}function ay(e,t){var i;t.fatal&&((null!=(i=iQ.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function aT(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tO))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=iQ.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var aA=(e,t)=>{var i,a,r;console.error("getErrorFromHlsErrorData()",e);let n={[tD.ErrorTypes.NETWORK_ERROR]:tO.MEDIA_ERR_NETWORK,[tD.ErrorTypes.MEDIA_ERROR]:tO.MEDIA_ERR_DECODE,[tD.ErrorTypes.KEY_SYSTEM_ERROR]:tO.MEDIA_ERR_ENCRYPTED},s,o=[tD.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tD.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tO.MEDIA_ERR_NETWORK:n[e.type];if(o===tO.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=e.type===tD.ErrorTypes.KEY_SYSTEM_ERROR?tL.DRM:e.type===tD.ErrorTypes.NETWORK_ERROR?tL.VIDEO:void 0)?i:tL.VIDEO;s=null!=(a=iC(e.response,r,t))?a:new tO("",o)}else o===tO.MEDIA_ERR_ENCRYPTED?e.details===tD.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tO(t9("Attempting to play DRM-protected content without providing a DRM token."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tL.DRM,s.muxCode=tM.ENCRYPTED_MISSING_TOKEN):e.details===tD.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tO(t9("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tL.DRM,s.muxCode=tM.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===tD.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tO(t9("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tO.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tL.DRM,s.muxCode=tM.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===tD.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tO(t9("Failed to update DRM license. This may be an issue with the player or your protected content."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tL.DRM,s.muxCode=tM.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===tD.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tO(t9("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tL.DRM,s.muxCode=tM.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===tD.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tO(t9("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tL.DRM,s.muxCode=tM.ENCRYPTED_CDM_ERROR):e.details===tD.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tO(t9("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tO.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tL.DRM,s.muxCode=tM.ENCRYPTED_OUTPUT_RESTRICTED):((s=new tO(e.error.message,tO.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tL.DRM,s.muxCode=tM.ENCRYPTED_ERROR):s=new tO("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s}}}]);