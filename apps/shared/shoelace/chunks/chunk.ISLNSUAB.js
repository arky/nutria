var g=new Set,C=new MutationObserver(h),n=new Map,m=document.documentElement.dir||"ltr",u=document.documentElement.lang||navigator.language,s;C.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function d(...r){r.map(e=>{let t=e.$code.toLowerCase();n.has(t)?n.set(t,Object.assign(Object.assign({},n.get(t)),e)):n.set(t,e),s||(s=e)}),h()}function h(){m=document.documentElement.dir||"ltr",u=document.documentElement.lang||navigator.language,[...g.keys()].map(r=>{typeof r.requestUpdate=="function"&&r.requestUpdate()})}var a=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){g.add(this.host)}hostDisconnected(){g.delete(this.host)}dir(){return`${this.host.dir||m}`.toLowerCase()}lang(){return`${this.host.lang||u}`.toLowerCase()}term(e,...t){let l=this.lang().toLowerCase().slice(0,2),w=this.lang().length>2?this.lang().toLowerCase():"",i=n.get(w),c=n.get(l),o;if(i&&i[e])o=i[e];else if(c&&c[e])o=c[e];else if(s&&s[e])o=s[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof o=="function"?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,l){return new Intl.RelativeTimeFormat(this.lang(),l).format(e,t)}};var f=class extends a{};var p={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};d(p);var b=p;export{d as a,b,f as c};