"use strict";(self.webpackChunktesting=self.webpackChunktesting||[]).push([[696],{3696:function(e,t,n){n.r(t);var s=n(885),o=n(2791),a=(n(44),n(7205)),A=n(7689),i=n(2594),r=n(184);t.default=function(){var e=(0,o.useState)(""),t=(0,s.Z)(e,2),n=t[0],c=t[1],l=(0,o.useState)(!1),p=(0,s.Z)(l,2),u=p[0],w=p[1],g=(0,A.UO)(),d=(0,A.s0)();return(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Enter New Password"}),(0,r.jsx)("input",{type:!0===u?"text":"password",placeholder:"Password",value:n,onChange:function(e){c(e.target.value)},className:"registeration_fields"}),(0,r.jsx)("img",{src:i,alt:"",height:"16px",width:"28px",className:"show_image",onClick:function(){w(!u)}}),(0,r.jsx)(a.Z,{onClick:function(){var e="http://13.234.125.76:4000/resetPassword/".concat(g.id,"/").concat(g.token);fetch(e,{method:"POST",body:JSON.stringify({password:n}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){var t=e.errors;if(t)console.log(t);else{localStorage.setItem("id",e._id),localStorage.setItem("name",e.name);var n=localStorage.getItem("id");d("/home/".concat(n)),console.log(localStorage.getItem("id"))}}))},children:"Submit"})]})}},44:function(){},2594:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAYAAABIB77kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIqSURBVHgBlVXLcepAEFwJuIJeBE8UnypODzIQETxnYIjAEAEoAkMExhFgZ6AMkK98Cp04b1Gc+LobLy4s767xVFGSdnune2ZnBkf8wpbLpX84HOrH49Hjt+M4yel0ktVqNb7Vh2PbnEwmXj6fb8HxfziuY8kzQCUwMYQ873a7qFarJb8iJBHsAQ46GhJGlZwPOw736mly/Ebb7XaoI/5GOJ/P7+DoSUP0AgHDSqUSXS+qNPdx5l4jLCyXyyMjIQ4/qqjSFpZKpb6w2Gw267uu29NsDXC2+4WQKSwUCmMoCmxkcBpkMpneBYeoIkQXXqJGdgZYe9D4iNfrdbPRaMgz4WKxGONxpwEmICsqZ0z1WIMRyEqTpMiQh/el0BfXCL7aLhy1DGS06PICskcDRiCVvHNRLBYlon82wFoIrOPCUc/kCGrf+JxOp6xEX5jNX61Wf5WwxILrucLcW5+Wy+XkT5jNZvNH/GyShKFpF2p9PpGqRHz0l8mSq2nzzwRim7i4yIEp7+wtVrACty2OulefgQH2wp5khAKl3uFo0oA42s53DDAbvwnn0RVRxDXu8RtFQayvERShsM6CvzS+pY+6zISwmCLra8iGEPQ5THSjraUq109tcT6G6fnIYQD1FJluLbZI+xK9kZCm5mNHzcd0FcdYl0q9rxEmOXOz2eyAfZn2bf17UsQBXu9BEligjIZCXhHtSEd0E6FGQH2/33sqMk4YiYKLVdvcZO/V3iGQnPYVgwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=696.e3814937.chunk.js.map