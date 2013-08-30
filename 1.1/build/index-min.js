/*! rtip - v1.1 - 2013-08-30 7:13:45 PM
* Copyright (c) 2013 yuanhuang; Licensed  */
KISSY.add("gallery/rtip/1.1/anim",function(a,b){function c(b,c,h){function i(){t||(m=+new Date,x=!0)}function j(){var a=+new Date;w=w+a-m,x=!1}h||(h={}),h=a.merge(d,h);var k,l,m,n=+new Date,o=(n+h.duration,n),p=h.duration,q=e[h.easing],r=h.frame||a.noop,s={},t=!1,u=h.duration,v=0,w=0,x=!1;for(var y in b)c[y]||0==c[y]?s[y]=null:delete b[y];k=function(){var d,e;if(e=v/p,d=q(e),a.isArray(b))for(var g=0,i=b.length;i>g;g++)s[g]=b[g]+(c[g]-b[g])*d;else for(var j in b)s[j]=b[j]+(c[j]-b[j])*d;u>v?(r.call(z,s,e),l=f(k)):(r.call(z,c,1),t=!0,h.endframe&&h.endframe.call(z,c,1),z.fire("complete")),o=+new Date,v=o-n-w};var z={run:k,stop:function(){g(l)},resume:function(){x&&(j(),k())},pause:function(){x||(i(),g(l))},isRunning:function(){return!t}};return a.mix(z,a.EventTarget),0!=h.autoRun&&z.run(),z}var d,e=b.Easing,f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return setTimeout(a,16)},g=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||clearTimeout;return d={duration:1e3,easing:"easeNone"},c.AnimateObject=function(b,d){var e=[],f=0,g={},h={},i=b.length;a.each(b,function(a,b){var c,d=a.from,i=a.to;for(var j in d)c=f++,e[c]=[a,j,b],g[c]=d[j],h[c]=i[j]});var j=c(g,h,{easing:d.easing,duration:d.duration,autoRun:d.autoRun,frame:function(a){for(var b in a){var c=e,d=c[b][0],f=c[b][1],g=c[b][2],h=d.from;h[f]=a[b],d.frame&&d.frame(f,a[b],a,g,i)}},endframe:function(a){for(var b in a){var c=e,f=c[b][0],g=c[b][1],h=c[b][2];f.endframe&&f.endframe(g,a[b],h,a)}d.endframe&&d.endframe()}});return j},c},{requires:["anim"]}),KISSY.add("gallery/rtip/1.1/index",function(a,b,c,d){function e(b){b=a.merge(w,b),o||(o=new c(v));var d=o.render(b);return a.Node(d)}function f(b,c,d,e,f){p||(p=a.Node("<div/>").css({visibility:"hidden",position:"fixed",left:"-9999em",top:0}).appendTo(t)),p.append(b);var g={width:q.outerWidth(p),height:q.outerHeight(p)};return g.width>e?p.css("width",e):g.width<c?p.css("width",c):p.css("width","auto"),g.height<d?p.css("height",d):g.height>f&&p.css("height",f),g={width:q.outerWidth(p),height:q.outerHeight(p)},p.html(""),g}function g(a,b,c,d){var e,f=b.bbox,g=c.bbox,h=d.bbox;switch(a){case"top":e=f.top-h.height;break;case"right":e=g.width-f.left-f.width-h.width;break;case"bottom":e=g.height-f.top-f.height-h.height;break;case"left":e=f.left-g.left-h.width}return e>.01}function h(a,b,c,d){d||(d=[]);for(var e=0;e<d.length;e++)if(g(d[e],a,b,c))return d[e];var f;return f=i(a,b)}function i(b,c){var d=c.bbox,e=a.map(["top","right","bottom","left"],function(a){var c;switch(a){case"top":c={value:b.cy-d.top};break;case"right":c={value:d.width-b.cx};break;case"bottom":c={value:d.height-b.cy};break;case"left":c={value:b.cx-d.left}}return c.dir=a,c});return e.sort(function(a,b){return a.value>b.value?-1:a.value===b.value?0:1})[0].dir}function j(a,b,c,d,e,f){var g,h,i,j,k={},l=b.bbox,m=c.bbox,n=d.bbox,o=e.bbox;switch(a){case"top":case"bottom":k.x=b.cx,"top"==a?(k.y=b.cy-l.height/2,j=l.top+n.height-k.y):(k.y=b.cy+l.height/2+m.height,j=l.top+l.height-k.y),g=o.width>n.width?k.x-n.width/2:e.cx>k.cx?o.left+o.width-n.width:o.left,g<o.left?g=o.left:g+n.width>o.left+o.width&&(g=o.left+o.width-n.width),i=k.x-m.width/2,g>i?i=g:k.x+m.width/2>g+n.width&&(i=g+n.width-m.width/2),k.tx=g,k.ax=i-g,h="top"==a?k.y-n.height-m.height:k.y,k.ty=h,k.ay=j,k.tx=g-f[0],k.ty=h-f[1];break;case"right":case"left":k.x="right"==a?b.cx+l.width/2:b.cx-l.width/2,k.y=b.cy,"right"==a?(g=k.x+m.width,i=k.x):(g=k.x-n.width-m.width,i=k.x-m.width),h=o.height>n.height?k.y-n.height/2:e.cy>k.cy?o.height+o.top-n.height:o.top,h+n.height>o.top+o.height?h=o.top+o.height-n.height:h<o.top&&(h=o.top),k.tx=g+f[0],k.ty=h+f[1],j=k.y-m.height,h>j&&(j=h),k.ax=i-g,k.ay=j-h}return k}function k(a){for(var b,c=0;c<a.length;c++){b=a[c];var d=b.bbox;b.cx=d.left+d.width/2,b.cy=d.top+d.height/2}}function l(a){var b=new d.Defer,c=b.promise;return a.on("complete",function(){b.resolve()}),a.run(),c}function m(a,b){if(!b)return a;switch(b){case"top":a.ax-=4,a.ay-=4;break;case"bottom":a.ax-=4,a.ay+=2;break;case"right":a.ty+=1,a.ax+=1;break;case"left":a.ax-=4,a.ty+=1}return a}function n(b){b=a.merge(u,b),this.set(b)}var o,p,q=a.DOM,r=a.Event,s=window,t=(a.one(s),a.one(s.document.body)),u={tipArrowCls:"mui-chart-arrow-",tipContentCls:"mui-chart-tip-content",boundryDetect:!0,arrowsize:[6,6],maxwidth:!1,share:!1,autoAdjust:!1,autoRender:!1,autoAlignRate:300,offset:[0,0]},v='<div class="mui-poptip mui-poptip-{{theme}}">                    <div class="mui-poptip-shadow">                        <div class="mui-poptip-container">                            <div class="mui-poptip-content" data-role="content">                                {{content}}                            </div>                        </div>                            <div class="mui-poptip-arrow {{#if dir}}mui-poptip-arrow-{{dir}}{{/if}}">                                <em></em>                                <span></span>                            </div>                    </div>                </div>',w={theme:"white"};a.extend(n,a.Base,{moveto:function(a,b){this.autoAlign({xy:!0,x:a,y:b})},autoAlign:function(b){var c=this,d=a.buffer(function(a){c._autoAlign(a)},this.get("autoAlignRate"));this._autoAlign(b),this.autoAlign=d},_autoAlign:function(c){c||(c={});var d="title"==this.get("__mode__");if((1!=this._hide||d)&&!this.isRunning()){this._isRunning=!0;var e=this,f=(this.get("target"),this.get("constrain"),this.get("tip"));if(this.get("arrow"),c.xy)this._setupXY(c.x,c.y);else if(!this._setupTarget())return;this._setupConstrain(),this._setupTip(),this._setupArrow(),k([this.get("target"),this.get("constrain")]);var g=this.get("target"),i=this.get("constrain"),n=this.get("tip"),o=this.get("arrow"),p=this.get("offset"),q=h(g,i,n,this.get("dirs")),r=j(q,g,this.get("arrow"),n,i,p);if(r=m(r,q),d||!this._previnfo||!a.equals(r,this._previnfo)){this._previnfo=r;var s={top:"b",right:"l",bottom:"t",left:"r"},u=this.get$tip({content:this.get("content"),dir:q,theme:this.get("theme")}),v=this.get$arrow(u),w=v.attr("class");if(w=w.replace(/mui-poptip-arrow-\w/g,""),w=a.trim(w),w+=" mui-poptip-arrow-"+s[q],v.attr("class",w),u.appendTo(t),f&&!d){u.css({position:"absolute"}),v.css({zIndex:1,display:"none"});var x=new b({width:f.bbox.width,height:f.bbox.height,tx:f.bbox.left,ty:f.bbox.top},{width:n.bbox.width,height:n.bbox.height,tx:r.tx,ty:r.ty},{duration:600,easing:"swing",autoRun:!1,frame:function(a){var b={};for(var c in a)"tx"==c?b.left=a[c]+"px":"ty"==c?b.top=a[c]+"px":"width"==c?b.width=a[c]+"px":"height"==c&&(b.height=a[c]+"px");u.css(b)}});l(x).then(function(){v.show();var a,c;a="left"==q?r.ax-o.bbox.width:"right"==q?r.ax+o.bbox.width:r.ax,c="top"==q?r.ay-o.bbox.height:"bottom"==q?r.ay+o.bbox.height:r.ay,l(new b({ax:a,ay:c},{ax:r.ax,ay:r.ay},{duration:300,easing:"swing",autoRun:!1,frame:function(a){var b={};for(var c in a)"ax"==c?b.left=a[c]+"px":"ay"==c&&(b.top=a[c]+"px");v.css(b)}})).then(function(){e._isRunning=!1,v.css({"z-index":21})})})}else{var y={position:"absolute",left:r.tx+"px",top:r.ty+"px"};y=a.merge(y,{width:n.bbox.width+"px",height:n.bbox.height+"px"}),u.css(y),v.css({left:r.ax+"px",top:r.ay+"px",zIndex:21}),u.hide(),u.fadeIn(.5,function(){e._isRunning=!1})}n.bbox.left=r.tx,n.bbox.top=r.ty,this.set("$tip",u),this.set("$arrow",v),o.bbox.left=r.ax,o.bbox.top=r.ay}}},_setupXY:function(a,b){var c={bbox:{width:0,height:0,left:a,top:b}};this.set("target",c)},_setupTarget:function(){var b,c,d=this.get("align");if(!d||!(b=a.one(d)))return!1;var e=q.width(b),f=q.height(b),g=q.offset(b);return c={bbox:{width:e,height:f,left:g.left,top:g.top}},this.set("el",b),this.set("target",c),c},_setupConstrain:function(){var b,c=this.get("limit"),d={};if(c&&(b=a.one(c))){var e;e=q.offset(b),d={bbox:{width:q.width(b),height:q.height(b),left:e.left,top:e.top}}}else d={bbox:{left:0,top:0,width:q.width(s),height:q.height(s)}};return this.set("constrain",d),d},_setupTip:function(){var a,b,c,d,e=this.get("content"),f=this.get("minwidth"),g=this.get("maxwidth"),h=this.get("minheight"),i=this.get("maxheight");return a=this.getsizeof({content:e},f,h,g,i),c=f&&f>a.width?f:g&&g<a.width?g:a.width,d=h&&h>a.height?h:i&&i<a.height?i:a.height,b={bbox:{width:c,height:d}},this.set("tip",b),b},_setupArrow:function(){var a,b=this.get("arrowsize");return a={bbox:{width:b[0],height:b[1]}},this.set("arrow",a),a},getsizeof:function(a,b,c,d,e){return this.prevcontent&&this.prevcontent==a.content?this.tipsize:(this.tipsize=f(this.get$tip(a),b,c,d,e),this.prevcontent=a.content,this.tipsize)},get$tip:function(a){var b=this.get("$tip");return b&&b.remove(),b=e(a),this.set("$tip",b),b},get$arrow:function(a){return a||(a=this.gettip(this.getdata())),a.one(".mui-poptip-arrow")},isRunning:function(){return this._isRunning},show:function(){var a=this.get("$tip");a&&a.show(),this._hide=!1},hide:function(){var a=this.get("$tip");a&&a.hide(),this._hide=!0}});var x={maxwidth:300,__mode__:"title"};return n.listen=function(b,c){c||(c={});var d=a.all(b),e="binded";if(d){var f=new n(a.merge(x,c.alignConfig));d=a.filter(d,function(a){return q.data(a,e)!=e}),a.each(d,function(b){q.data(b,e,e),r.on(b,"mouseenter",function(b){b.preventDefault();var d=c.attrname||"data-title",e=b.currentTarget,g=q.attr(e,d);a.trim(g)&&(f.set("content",g),f.set("align",e),f.autoAlign())}),r.on(b,"mouseleave",function(){f.hide()})})}},n},{requires:["./anim","./index.css","xtemplate","promise"]});