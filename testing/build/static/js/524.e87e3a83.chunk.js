"use strict";(self.webpackChunktesting=self.webpackChunktesting||[]).push([[524],{1679:function(e,s){s.Z=function(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e}},7167:function(e,s,l){l.d(s,{Z:function(){return x}});var i=l(885),t=l(2791),c=l(1087),r=l(8820),n=l(6856),a=l(184),d=localStorage.getItem("id"),o=[{title:"Home",path:"/home/".concat(d),icon:(0,a.jsx)(r.V9Z,{}),cName:"nav-text"},{title:"Compare",icon:(0,a.jsx)(n.QA0,{}),path:"/CompareInfluencers",cName:"nav-text"},{title:"Calculator",path:"/calculate",icon:(0,a.jsx)(r.zjO,{}),cName:"nav-text"}],A=l(9983),m=l(5051);var x=function(){var e=(0,t.useState)(!1),s=(0,i.Z)(e,2),l=s[0],r=s[1],n=(0,t.useState)(window.innerWidth),d=(0,i.Z)(n,2),x=d[0],v=d[1];function h(){v(window.innerWidth)}(0,t.useEffect)((function(){return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}),[]),(0,t.useEffect)((function(){g?r(!0):g||r(!1)}),[x]);var g=x<=700;return(0,a.jsx)(A.Pd.Provider,{value:{color:"#fff"},children:(0,a.jsx)("div",{className:l?"nav-menu":"nav-menu-active",children:(0,a.jsxs)("nav",{className:"navbar",children:[(0,a.jsx)("img",{src:m,className:g?"logo_hide":"logo"}),(0,a.jsx)("ul",{className:"nav-menu-items",children:o.map((function(e,s){return(0,a.jsx)("li",{className:e.cName,children:!0===l?(0,a.jsx)(c.rU,{to:e.path,children:e.icon}):(0,a.jsxs)(c.rU,{to:e.path,children:[e.icon,(0,a.jsx)("span",{children:e.title})]})})}))})]})})})}},831:function(e,s,l){l.d(s,{Z:function(){return d}});var i=l(885),t=l(2791),c=l(6856),r=l(7689),n=l(1087),a=l(184);var d=function(){var e,s=(0,t.useState)(!1),l=(0,i.Z)(s,2),d=l[0],o=l[1],A=(0,t.useState)(!1),m=(0,i.Z)(A,2),x=m[0],v=m[1],h=localStorage.getItem("id"),g=localStorage.getItem("name"),u=(0,r.s0)(),j=(0,r.TH)(),p=(0,r.UO)(),f=null===(e=[{page:"/home/".concat(h),text:"Home"},{page:"/CompareLists",text:"Compare Lists"},{page:"/CompareInfluencers",text:"Compare Influencers"},{page:"/influencerslist/",text:"Search Results"},{page:"/basketInfluencers",text:"Influencer Bundle"},{page:"/userLists",text:"List"},{page:"/profile",text:"Influencer Profile"},{page:"/updateprofile/".concat(h),text:"Profile Settings"},{page:"/calculate",text:"Calculate Cost"}].find((function(e){return j.pathname.includes(e.page)})))||void 0===e?void 0:e.text;return(0,t.useEffect)((function(){v("Compare Influencers"===f||"Compare Lists"===f)}),[p]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"topbar",children:[(0,a.jsxs)("div",{className:!0===x?"page_title_compared":"page_title",children:[f,"Compare Influencers"===f||"Compare Lists"===f?(0,a.jsxs)("div",{style:{display:"flex",paddingTop:"1rem"},children:[(0,a.jsx)("div",{style:{paddingLeft:"1.25rem"},children:(0,a.jsx)(n.rU,{to:"/CompareInfluencers",className:"tab_text",children:"Influencers"})}),(0,a.jsx)("div",{style:{paddingLeft:"3.5rem"},children:(0,a.jsx)(n.rU,{to:"/CompareLists",className:"tab_text",children:"List"})})]}):null]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("span",{className:"topbar_help_icon",children:(0,a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH3SURBVHgBhZXLK4RRGMbfcYtxiyH+AFLIAiU7JRYSBhs2Snby35CVjY3kEmEjyUJZuZRRomFhQ+NSrrnNeJ4571ffzJzv89av6Xu/c57znvd7zpmA+EcQlIByfX4AL+Dda0LAI18DukALCIFszX+DO3AJNvXXV5AVdYNhreQQnGplHFsBGkA7yANLYAv8iiVYxThYBRM62SvYhimwrHOCtkH9OmDAUnkByJfM3YW1gH4nmaO/tbrNPbAOEpqvBpOgSXNswTR40uc1MT3m3AiIZunEXvAF5l1iotvh1mfBDKjTnBMJLeBVTO+TFQa1wgPwLKmxCOLgWp/LQA8oFvPRGDGtvI1arLBEt3YmmRF1iTGKdIF42riI7qSYguVaaUy8g+PYp05wAt7S3tNWdEkox5UM+AiOgT4xnluQf1amOo0Z8hlXD47BnKU6RiX4oRYF2dx70OgjuK8kPN7z9NxSi4I86EegVVeyxa6Y3tmiVMxRvKCW48NtUCjG8bZejoAOS57z2d9cMZdFSlCMxyhsEQ145AbBipgPloxs14AbMTfIEKgC5+BT7MHWjIqx0oaYWyfhrOIOLtCrA3n38fTQ8I5HaV5+vGYxJqfQjrguXC/v1aowf3mKHL/SXnQEjxr7fpU+0c/MfMdri+fW+Qt4FGOzD/Gw0B+JP2n4pKSZYQAAAABJRU5ErkJggg=="})}),(0,a.jsx)("img",{src:"data:image/png;base64,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",className:"topbar_user_icon"}),(0,a.jsx)("span",{className:"topbar_username",children:g}),(0,a.jsx)("span",{style:{marginRight:"4rem",cursor:"pointer"},children:(0,a.jsx)(c.FIC,{onClick:function(){o(!d)}})})]})]}),!0===d?(0,a.jsxs)("div",{className:"dropdown",children:[(0,a.jsx)("div",{onClick:function(){u("/updateprofile/".concat(h))},className:"dropdown_title",children:"Profile Settings"}),(0,a.jsx)("div",{onClick:function(){u("/about")},className:"dropdown_title",children:"About"}),(0,a.jsx)("div",{onClick:function(){n.rU,localStorage.clear()},className:"dropdown_title",children:(0,a.jsx)(n.rU,{to:"/",children:"Logout"})})]}):null]})}},9524:function(e,s,l){l.r(s),l.d(s,{default:function(){return v}});var i=l(885),t=l(2791),c=l(7167),r=l(831),n=l(6056),a=l(7741),d=l(6517),o=l(7689),A=l(1679),m=l(7205),x=l(184);var v=function(){var e=(0,t.useState)(0),s=(0,i.Z)(e,2),l=s[0],v=s[1],h=(0,t.useState)(0),g=(0,i.Z)(h,2),u=g[0],j=g[1],p=(0,t.useState)(0),f=(0,i.Z)(p,2),N=f[0],b=f[1],w=(0,t.useState)(0),B=(0,i.Z)(w,2),C=B[0],R=B[1],S=(0,t.useState)(0),E=(0,i.Z)(S,2),U=E[0],L=E[1],Q=(0,t.useState)(0),I=(0,i.Z)(Q,2),Y=I[0],y=I[1],G=(0,o.UO)(),X=(0,o.s0)();return(0,x.jsxs)("div",{className:"calculate_2_container row no-gutters",children:[(0,x.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2",children:(0,x.jsx)(c.Z,{})}),(0,x.jsxs)("div",{className:"middle_pane_calculate col-lg-10 col-sm-10 col-md-10 col-xs-10 col-10",children:[(0,x.jsx)(r.Z,{}),(0,x.jsxs)("div",{className:"middle_pane_content row no-gutters",children:[(0,x.jsxs)("div",{className:"steps_pane col-lg-3 col-md-3 col-sm-0 col-xs-0 col-0",children:[(0,x.jsxs)("div",{className:"steps_pane_part_inactive",style:{borderLeft:"solid 0.313rem #357AFF"},children:[(0,x.jsx)("div",{className:"steps_pane_title",children:"Step 1"}),(0,x.jsx)("div",{className:"followers_title",children:"Followers"}),(0,x.jsx)("div",{className:"followers_count",children:(0,A.Z)(G.followerRange.substring(G.followerRange.indexOf("=")+1).replace("&"," - "))}),(0,x.jsx)("div",{className:"budget_influencers_title",children:"Budget / Influencers"}),(0,x.jsx)("div",{className:"budget_influencers_value",children:G.budget.includes("budget")?"\u20b9"+G.budget.substring(G.budget.indexOf("=")+1):G.budget.substring(G.budget.indexOf("=")+1)+" Influencers"})]}),(0,x.jsxs)("div",{className:"steps_pane_part",style:{borderLeft:"solid 0.313rem #D04B4B"},children:[(0,x.jsx)("div",{className:"steps_pane_title",children:"Step 2"}),(0,x.jsxs)("div",{className:"deliverables",children:[(0,x.jsxs)("div",{className:"deliverables_pane",children:[(0,x.jsx)("div",{className:"deliverables_value",children:l}),(0,x.jsx)("div",{className:"deliverables_title",children:"Reels"})]}),(0,x.jsxs)("div",{className:"deliverables_pane",children:[(0,x.jsx)("div",{className:"deliverables_value",children:u}),(0,x.jsx)("div",{className:"deliverables_title",children:"Static posts"})]}),(0,x.jsxs)("div",{className:"deliverables_pane",children:[(0,x.jsx)("div",{className:"deliverables_value",children:N}),(0,x.jsx)("div",{className:"deliverables_title",children:"Videos"})]})]}),(0,x.jsxs)("div",{className:"deliverables",children:[(0,x.jsxs)("div",{className:"deliverables_pane",children:[(0,x.jsx)("div",{className:"deliverables_value",children:C}),(0,x.jsx)("div",{className:"deliverables_title",children:"Stories"})]}),(0,x.jsxs)("div",{className:"deliverables_pane",children:[(0,x.jsx)("div",{className:"deliverables_value",children:U}),(0,x.jsx)("div",{className:"deliverables_title",children:"Swipeup Stories"})]}),(0,x.jsxs)("div",{className:"deliverables_pane",children:[(0,x.jsxs)("div",{className:"deliverables_value",children:[" ",Y]}),(0,x.jsx)("div",{className:"deliverables_title",children:"Igtv"})]})]})]}),(0,x.jsxs)("div",{className:"steps_pane_part_inactive",children:[(0,x.jsx)("div",{className:"steps_pane_title",children:"Step 3"}),(0,x.jsxs)("div",{className:"filter_pane",children:[(0,x.jsx)("img",{src:n}),(0,x.jsx)("div",{className:"filter_value",children:" -- "})]}),(0,x.jsxs)("div",{className:"filter_pane",children:[(0,x.jsx)("img",{src:a}),(0,x.jsx)("div",{className:"filter_value",children:" -- "})]}),(0,x.jsxs)("div",{className:"filter_pane",children:[(0,x.jsx)("img",{src:d}),(0,x.jsx)("div",{className:"filter_value",children:" -- "})]})]}),(0,x.jsxs)("div",{className:"steps_pane_part_inactive",children:[(0,x.jsx)("div",{className:"steps_pane_title",children:"Step 4"}),(0,x.jsx)("div",{className:"cost_title",children:"Estimated Cost"}),(0,x.jsx)("div",{className:"cost_value",children:" \u20b9 --"})]})]}),(0,x.jsxs)("div",{className:"content_pane col-lg-6 col-md-9 col-sm-12 col-xs-12 col-12",children:[(0,x.jsx)("div",{className:"step_count",children:"STEP 2"}),(0,x.jsx)("div",{className:"step_title",children:"Deliverables"}),(0,x.jsx)("div",{className:"step_desc",children:"Set the type and count of deliverables required from each influencer"}),(0,x.jsxs)("div",{className:"deliverables_box row no-gutters",children:[(0,x.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",children:"Reels"}),(0,x.jsxs)("div",{className:"deliverables_value col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12",children:[0===l?(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){v(l-1)},children:"-"}),(0,x.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:l}),(0,x.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){v(l+1)},children:"+"})]})]}),(0,x.jsxs)("div",{className:"deliverables_box row no-gutters",children:[(0,x.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",children:"Static Posts"}),(0,x.jsxs)("div",{className:"deliverables_value col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12",children:[0===u?(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){j(u-1)},children:"-"}),(0,x.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:u}),(0,x.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){j(u+1)},children:"+"})]})]}),(0,x.jsxs)("div",{className:"deliverables_box row no-gutters",children:[(0,x.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",children:"Videos"}),(0,x.jsxs)("div",{className:"deliverables_value col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12",children:[0===N?(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){return b(N-1)},children:"-"}),(0,x.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:N}),(0,x.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){return b(N+1)},children:"+"})]})]}),(0,x.jsxs)("div",{className:"deliverables_box row no-gutters",children:[(0,x.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",children:"Stories"}),(0,x.jsxs)("div",{className:"deliverables_value col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12",children:[0===C?(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){R(C-1)},children:"-"}),(0,x.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:C}),(0,x.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){R(C+1)},children:"+"})]})]}),(0,x.jsxs)("div",{className:"deliverables_box row no-gutters",children:[(0,x.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",children:"Swipeup Stories"}),(0,x.jsxs)("div",{className:"deliverables_value col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12",children:[0===U?(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){return L(U-1)},children:"-"}),(0,x.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:U}),(0,x.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){return L(U+1)},children:"+"})]})]}),(0,x.jsxs)("div",{className:"deliverables_box row no-gutters",children:[(0,x.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",children:"Igtv"}),(0,x.jsxs)("div",{className:"deliverables_value col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12",children:[0===Y?(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,x.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){y(Y-1)},children:"-"}),(0,x.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:Y}),(0,x.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){y(Y+1)},children:"+"})]})]}),(0,x.jsx)("div",{children:(0,x.jsx)(m.Z,{onClick:function(){X("/calculate/".concat(G.budget,"/").concat(G.followerRange,"/deliverables=reel=").concat(l,"&post=").concat(u,"&stories=").concat(C,"&swipeupStories=").concat(U,"&videos=").concat(N,"&igtv=").concat(Y))},className:"next_btn",children:"Next"})})]}),(0,x.jsx)("div",{className:"right_pane col-lg-3 col-md-0 col-sm-0 col-xs-0 col-0",children:(0,x.jsx)("div",{className:"image1"})})]})]})]})}},6056:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgB7ZS/agJBEMYnJgQTQpoUSSAQ0pkmJHX6pAqY9OkCgbxAXsEnEC1UBGttfAcLFSxEfQAbS0VUsPFb9jtZj1N31SsEP/jd7c7szrCzf0Tc9A7eXCacOIy9A3G2W6BrMyki9nrh+AjbVnJJ0AFT0pGQdEFCU5pYy6VEGyn0BEe+/jX4AjEQFTdNQBuUQC8owQ34B+eynUYg4SUxL1qcwZsgDwbipkvwDZ7AJ0gpo7kHj/xvElw4p8B2zDOaK4gaA9VZV3vxTFsDFMGQ/WX+PvtnQQk8qTfnB9watldwD5Ls/3Gc6X8AGX8wc5P9F6i7IqCN/1d9jg3DB/+qDBWQE12uMaiLLsuV6LeoCrKiS6L8NdEHRPlPGafsS+j+DCzRQpz9fyqCTtEuyjRX6Cs4aK1mVhc0YVdB+DsAAAAASUVORK5CYII="},7741:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZM9CsJAEIXHn8rCv8YDKKiN4FFSi7U3EI8gegGDlWDvLaxFhDS5gJaCVha+kYksi2uSAUElDz6SnXm7y87uEGWKUc4aj0HT4Q3BPKWP8lbSNYnVUvio6DCNrLGv9eXpw/r9DVx34FMyxfrsE4RvvKHC9wfSdjKrATzQlXEANuBoTrIvOWmH8uITUDJifdAGU3MTbSd7svgBrCQ2BD3JLSKjtg+isvDiZ2EtsY5p/NpODuTLZamAMhhYuYe0ncyvhS+Uaz4z4lfJPVWwJnJt6/Ra/Ey38n8BO1AFNXADe7AEJ8qURnc/hCgm3jIDewAAAABJRU5ErkJggg=="},6517:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgB7ZXLK0VRFMaXdx4DMRCK8og8ixQmhiYYSMmIUsTI1F9gIvkPTBmgGCgUGZAkyXNESt6vgfcjvtX65NBx7rkyY9Wvvbt73/Wtu/a39xX5jwAR4mNPOqgAuSCBn12AbbAA9n4qEAWaQLnHvleKDIKHYAQ0eRfIAI9gDiyBQ64ngzJQBSLADuh3Ewn7RqAZFIJz0AcWwRV4ITrfBCvclyrWvhU/Alp1IyvvdVSdJHYWun5DrilUKXZWOr8MJFAL0sC0WFs0tBUtrDwGNLCAPYpEgywQCladycJdBLI5LjkqrwE9Yu7RmALdYk465t5qinyKUBeBeI7HHLXHy47kwrl+VvBlb7wfgReO3xnALd478exH4IxjOsc1UCofl0w4L+WaRhrH86/J3KpMFOtlpFgb1C3q71auaVvUZeNirtGoBylgXuxcPAVOxFyj3j4Qs6m6Rd0RB27BqCN5iZgJtD0D4D6QwB14AvmgmMlP+Ut2yQ335oE25hlxiHoKaOyw2kxWuC8fTnkPLaBT7KmYAWNuibycsg5ixc5DRbRdR1wrAh1MPiv22EmwAhobYg9ftkNEL167mDX1tg95JfDzf6ChLtGb6rwjk2A40Bf9XqYtsTuTw3FCzEm/HvoQ1smfijeuOWxObyP/WgAAAABJRU5ErkJggg=="},5051:function(e,s,l){e.exports=l.p+"static/media/logo.a18991a8711fa01aed76.png"}}]);
//# sourceMappingURL=524.e87e3a83.chunk.js.map