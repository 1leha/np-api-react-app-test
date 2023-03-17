"use strict";(self.webpackChunknp_api_react_app_test=self.webpackChunknp_api_react_app_test||[]).push([[292],{3292:function(t,r,e){e.r(r),e.d(r,{default:function(){return s}});var n,i=e(890),o=e(4721),a=(e(2791),e(9434)),l=e(4460),u=e(168),c=e(7691).ZP.div(n||(n=(0,u.Z)(["\n  flex: 0 0 60%;\n"]))),p=e(184),s=function(){var t=(0,a.v9)(l._w);return(0,p.jsxs)(c,{children:[(0,p.jsx)(i.Z,{sx:{mt:0,mb:2},variant:"h6",component:"div",children:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,p.jsx)(o.Z,{sx:{mb:2}}),"3"!==t.StatusCode?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("p",{children:["\u0421\u0442\u0430\u0442\u0443\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ",t.Status]}),(0,p.jsx)("p",{children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e:"}),(0,p.jsx)("p",{children:t.WarehouseSender}),(0,p.jsx)("p",{children:"\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043e:"}),(0,p.jsx)("p",{children:t.WarehouseRecipient})]}):(0,p.jsx)(p.Fragment,{children:t.Status})]})}},4460:function(t,r,e){e.d(r,{Le:function(){return l},On:function(){return u},P8:function(){return a},US:function(){return o},_w:function(){return c}});var n=e(6916),i=function(t){return t.ttn.items},o=function(t){return t.ttnFilter},a=(0,n.P1)([i,o],(function(t,r){return t.filter((function(t){return t.Number.includes(r)}))})),l=(0,n.P1)([i],(function(t){return 0===t.length})),u=(0,n.P1)([a],(function(t){return 0===t.length})),c=(0,n.P1)([i],(function(t){return t[0]}))},4721:function(t,r,e){var n=e(3366),i=e(7462),o=e(2791),a=e(8182),l=e(4419),u=e(2065),c=e(7630),p=e(3736),s=e(133),f=e(184),h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],v=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState;return[r.root,e.absolute&&r.absolute,r[e.variant],e.light&&r.light,"vertical"===e.orientation&&r.vertical,e.flexItem&&r.flexItem,e.children&&r.withChildren,e.children&&"vertical"===e.orientation&&r.withChildrenVertical,"right"===e.textAlign&&"vertical"!==e.orientation&&r.textAlignRight,"left"===e.textAlign&&"vertical"!==e.orientation&&r.textAlignLeft]}})((function(t){var r=t.theme,e=t.ownerState;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(r.vars||r).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:r.vars?"rgba(".concat(r.vars.palette.dividerChannel," / 0.08)"):(0,u.Fq)(r.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:r.spacing(2),marginRight:r.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:r.spacing(1),marginBottom:r.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var r=t.theme,e=t.ownerState;return(0,i.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((r.vars||r).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(t){var r=t.theme,e=t.ownerState;return(0,i.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((r.vars||r).palette.divider),transform:"translateX(0%)"}})}),(function(t){var r=t.ownerState;return(0,i.Z)({},"right"===r.textAlign&&"vertical"!==r.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===r.textAlign&&"vertical"!==r.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),d=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,r){var e=t.ownerState;return[r.wrapper,"vertical"===e.orientation&&r.wrapperVertical]}})((function(t){var r=t.theme,e=t.ownerState;return(0,i.Z)({display:"inline-block",paddingLeft:"calc(".concat(r.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(r.spacing(1)," * 1.2)")},"vertical"===e.orientation&&{paddingTop:"calc(".concat(r.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(r.spacing(1)," * 1.2)")})})),g=o.forwardRef((function(t,r){var e=(0,p.Z)({props:t,name:"MuiDivider"}),o=e.absolute,u=void 0!==o&&o,c=e.children,g=e.className,m=e.component,y=void 0===m?c?"div":"hr":m,x=e.flexItem,b=void 0!==x&&x,w=e.light,Z=void 0!==w&&w,S=e.orientation,A=void 0===S?"horizontal":S,j=e.role,C=void 0===j?"hr"!==y?"separator":void 0:j,P=e.textAlign,R=void 0===P?"center":P,W=e.variant,B=void 0===W?"fullWidth":W,k=(0,n.Z)(e,h),M=(0,i.Z)({},e,{absolute:u,component:y,flexItem:b,light:Z,orientation:A,role:C,textAlign:R,variant:B}),_=function(t){var r=t.absolute,e=t.children,n=t.classes,i=t.flexItem,o=t.light,a=t.orientation,u=t.textAlign,c={root:["root",r&&"absolute",t.variant,o&&"light","vertical"===a&&"vertical",i&&"flexItem",e&&"withChildren",e&&"vertical"===a&&"withChildrenVertical","right"===u&&"vertical"!==a&&"textAlignRight","left"===u&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(c,s.V,n)}(M);return(0,f.jsx)(v,(0,i.Z)({as:y,className:(0,a.Z)(_.root,g),role:C,ref:r,ownerState:M},k,{children:c?(0,f.jsx)(d,{className:_.wrapper,ownerState:M,children:c}):null}))}));r.Z=g},133:function(t,r,e){e.d(r,{V:function(){return o}});var n=e(5878),i=e(1217);function o(t){return(0,i.Z)("MuiDivider",t)}var a=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);r.Z=a},890:function(t,r,e){e.d(r,{Z:function(){return b}});var n=e(3366),i=e(7462),o=e(2791),a=e(8182),l=e(8519),u=e(4419),c=e(7630),p=e(3736),s=e(4036),f=e(5878),h=e(1217);function v(t){return(0,h.Z)("MuiTypography",t)}(0,f.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var d=e(184),g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,r){var e=t.ownerState;return[r.root,e.variant&&r[e.variant],"inherit"!==e.align&&r["align".concat((0,s.Z)(e.align))],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})((function(t){var r=t.theme,e=t.ownerState;return(0,i.Z)({margin:0},e.variant&&r.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=o.forwardRef((function(t,r){var e=(0,p.Z)({props:t,name:"MuiTypography"}),o=function(t){return x[t]||t}(e.color),c=(0,l.Z)((0,i.Z)({},e,{color:o})),f=c.align,h=void 0===f?"inherit":f,b=c.className,w=c.component,Z=c.gutterBottom,S=void 0!==Z&&Z,A=c.noWrap,j=void 0!==A&&A,C=c.paragraph,P=void 0!==C&&C,R=c.variant,W=void 0===R?"body1":R,B=c.variantMapping,k=void 0===B?y:B,M=(0,n.Z)(c,g),_=(0,i.Z)({},c,{align:h,color:o,className:b,component:w,gutterBottom:S,noWrap:j,paragraph:P,variant:W,variantMapping:k}),N=w||(P?"p":k[W]||y[W])||"span",I=function(t){var r=t.align,e=t.gutterBottom,n=t.noWrap,i=t.paragraph,o=t.variant,a=t.classes,l={root:["root",o,"inherit"!==t.align&&"align".concat((0,s.Z)(r)),e&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,u.Z)(l,v,a)}(_);return(0,d.jsx)(m,(0,i.Z)({as:N,ref:r,ownerState:_,className:(0,a.Z)(I.root,b)},M))}))},4036:function(t,r,e){var n=e(7312);r.Z=n.Z},8519:function(t,r,e){e.d(r,{Z:function(){return c}});var n=e(3433),i=e(7462),o=e(3366),a=e(2466),l=e(7416),u=["sx"];function c(t){var r,e=t.sx,c=function(t){var r,e,n={systemProps:{},otherProps:{}},i=null!=(r=null==t||null==(e=t.theme)?void 0:e.unstable_sxConfig)?r:l.Z;return Object.keys(t).forEach((function(r){i[r]?n.systemProps[r]=t[r]:n.otherProps[r]=t[r]})),n}((0,o.Z)(t,u)),p=c.systemProps,s=c.otherProps;return r=Array.isArray(e)?[p].concat((0,n.Z)(e)):"function"===typeof e?function(){var t=e.apply(void 0,arguments);return(0,a.P)(t)?(0,i.Z)({},p,t):p}:(0,i.Z)({},p,e),(0,i.Z)({},s,{sx:r})}},6916:function(t,r,e){e.d(r,{P1:function(){return u}});var n="NOT_FOUND";var i=function(t,r){return t===r};function o(t,r){var e="object"===typeof r?r:{equalityCheck:r},o=e.equalityCheck,a=void 0===o?i:o,l=e.maxSize,u=void 0===l?1:l,c=e.resultEqualityCheck,p=function(t){return function(r,e){if(null===r||null===e||r.length!==e.length)return!1;for(var n=r.length,i=0;i<n;i++)if(!t(r[i],e[i]))return!1;return!0}}(a),s=1===u?function(t){var r;return{get:function(e){return r&&t(r.key,e)?r.value:n},put:function(t,e){r={key:t,value:e}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}}(p):function(t,r){var e=[];function i(t){var i=e.findIndex((function(e){return r(t,e.key)}));if(i>-1){var o=e[i];return i>0&&(e.splice(i,1),e.unshift(o)),o.value}return n}return{get:i,put:function(r,o){i(r)===n&&(e.unshift({key:r,value:o}),e.length>t&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(u,p);function f(){var r=s.get(arguments);if(r===n){if(r=t.apply(null,arguments),c){var e=s.getEntries(),i=e.find((function(t){return c(t.value,r)}));i&&(r=i.value)}s.put(arguments,r)}return r}return f.clearCache=function(){return s.clear()},f}function a(t){var r=Array.isArray(t[0])?t[0]:t;if(!r.every((function(t){return"function"===typeof t}))){var e=r.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return r}function l(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];var i=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o,l=0,u={memoizeOptions:void 0},c=n.pop();if("object"===typeof c&&(u=c,c=n.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var p=u,s=p.memoizeOptions,f=void 0===s?e:s,h=Array.isArray(f)?f:[f],v=a(n),d=t.apply(void 0,[function(){return l++,c.apply(null,arguments)}].concat(h)),g=t((function(){for(var t=[],r=v.length,e=0;e<r;e++)t.push(v[e].apply(null,arguments));return o=d.apply(null,t)}));return Object.assign(g,{resultFunc:c,memoizedResultFunc:d,dependencies:v,lastResult:function(){return o},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),g};return i}var u=l(o)}}]);
//# sourceMappingURL=292.072dcb90.chunk.js.map