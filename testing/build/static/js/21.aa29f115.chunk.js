"use strict";(self.webpackChunktesting=self.webpackChunktesting||[]).push([[21],{1679:function(e,l){l.Z=function(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e}},7167:function(e,l,a){a.d(l,{Z:function(){return f}});var t=a(885),s=a(2791),n=a(1087),c=a(8820),o=a(6856),i=a(184),r=localStorage.getItem("id"),u=[{title:"Home",path:"/home/".concat(r),icon:(0,i.jsx)(c.V9Z,{}),cName:"nav-text"},{title:"Compare",icon:(0,i.jsx)(o.QA0,{}),path:"/CompareInfluencers",cName:"nav-text"},{title:"Calculator",path:"/calculate",icon:(0,i.jsx)(c.zjO,{}),cName:"nav-text"}],d=a(9983),m=a(5051);var f=function(){var e=(0,s.useState)(!1),l=(0,t.Z)(e,2),a=l[0];return l[1],(0,i.jsx)(d.Pd.Provider,{value:{color:"#fff"},children:(0,i.jsx)("div",{className:a?"nav-menu":"nav-menu-active",children:(0,i.jsxs)("nav",{className:"navbar",children:[(0,i.jsx)("img",{src:m,className:"logo"}),(0,i.jsx)("ul",{className:"nav-menu-items",children:u.map((function(e,l){return(0,i.jsx)("li",{className:e.cName,children:!0===a?(0,i.jsx)(n.rU,{to:e.path,children:e.icon}):(0,i.jsxs)(n.rU,{to:e.path,children:[e.icon,(0,i.jsx)("span",{children:e.title})]})})}))})]})})})}},831:function(e,l,a){a.d(l,{Z:function(){return r}});var t=a(885),s=a(2791),n=a(6856),c=a(7689),o=a(1087),i=a(184);var r=function(){var e,l=(0,s.useState)(!1),a=(0,t.Z)(l,2),r=a[0],u=a[1],d=(0,s.useState)(!1),m=(0,t.Z)(d,2),f=m[0],h=m[1],x=localStorage.getItem("id"),g=localStorage.getItem("name"),v=(0,c.s0)(),A=(0,c.TH)(),p=(0,c.UO)(),j=null===(e=[{page:"/home/".concat(x),text:"Home"},{page:"/CompareLists",text:"Compare Lists"},{page:"/CompareInfluencers",text:"Compare Influencers"},{page:"/influencerslist/",text:"Search Results"},{page:"/basketInfluencers",text:"Influencer Bundle"},{page:"/userLists",text:"List"},{page:"/profile",text:"Influencer Profile"},{page:"/updateprofile/".concat(x),text:"Profile Settings"},{page:"/calculate",text:"Calculate Cost"}].find((function(e){return A.pathname.includes(e.page)})))||void 0===e?void 0:e.text;return(0,s.useEffect)((function(){h("Compare Influencers"===j||"Compare Lists"===j)}),[p]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"topbar",children:[(0,i.jsxs)("div",{className:!0===f?"page_title_compared":"page_title",children:[j,"Compare Influencers"===j||"Compare Lists"===j?(0,i.jsxs)("div",{style:{display:"flex",paddingTop:"1rem"},children:[(0,i.jsx)("div",{style:{paddingLeft:"1.25rem"},children:(0,i.jsx)(o.rU,{to:"/CompareInfluencers",className:"tab_text",children:"Influencers"})}),(0,i.jsx)("div",{style:{paddingLeft:"3.5rem"},children:(0,i.jsx)(o.rU,{to:"/CompareLists",className:"tab_text",children:"List"})})]}):null]}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)("span",{className:"topbar_help_icon",children:(0,i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH3SURBVHgBhZXLK4RRGMbfcYtxiyH+AFLIAiU7JRYSBhs2Snby35CVjY3kEmEjyUJZuZRRomFhQ+NSrrnNeJ4571ffzJzv89av6Xu/c57znvd7zpmA+EcQlIByfX4AL+Dda0LAI18DukALCIFszX+DO3AJNvXXV5AVdYNhreQQnGplHFsBGkA7yANLYAv8iiVYxThYBRM62SvYhimwrHOCtkH9OmDAUnkByJfM3YW1gH4nmaO/tbrNPbAOEpqvBpOgSXNswTR40uc1MT3m3AiIZunEXvAF5l1iotvh1mfBDKjTnBMJLeBVTO+TFQa1wgPwLKmxCOLgWp/LQA8oFvPRGDGtvI1arLBEt3YmmRF1iTGKdIF42riI7qSYguVaaUy8g+PYp05wAt7S3tNWdEkox5UM+AiOgT4xnluQf1amOo0Z8hlXD47BnKU6RiX4oRYF2dx70OgjuK8kPN7z9NxSi4I86EegVVeyxa6Y3tmiVMxRvKCW48NtUCjG8bZejoAOS57z2d9cMZdFSlCMxyhsEQ145AbBipgPloxs14AbMTfIEKgC5+BT7MHWjIqx0oaYWyfhrOIOLtCrA3n38fTQ8I5HaV5+vGYxJqfQjrguXC/v1aowf3mKHL/SXnQEjxr7fpU+0c/MfMdri+fW+Qt4FGOzD/Gw0B+JP2n4pKSZYQAAAABJRU5ErkJggg=="})}),(0,i.jsx)("img",{src:"data:image/png;base64,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",className:"topbar_user_icon"}),(0,i.jsx)("span",{className:"topbar_username",children:g}),(0,i.jsx)("span",{style:{marginRight:"4rem",cursor:"pointer"},children:(0,i.jsx)(n.FIC,{onClick:function(){u(!r)}})})]})]}),!0===r?(0,i.jsxs)("div",{className:"dropdown",children:[(0,i.jsx)("div",{onClick:function(){v("/updateprofile/".concat(x))},className:"dropdown_title",children:"Profile Settings"}),(0,i.jsx)("div",{onClick:function(){v("/about")},className:"dropdown_title",children:"About"}),(0,i.jsx)("div",{onClick:function(){o.rU,localStorage.clear()},className:"dropdown_title",children:(0,i.jsx)(o.rU,{to:"/",children:"Logout"})})]}):null]})}},2021:function(e,l,a){a.r(l),a.d(l,{default:function(){return B}});var t=a(2982),s=a(885),n=a(2791),c=a(7689),o=a(1679),i=a(7167),r=a(1680),u=a(9773),d=a(4390),m=a(9963),f=a(9827),h=a(807),x=a(6650),g=a(7205),v=a(2461),A=a(113),p=a(7975),j=a(8820),b=a(6856),C=(a(2426),a(3811)),N=a(2715),Z=a(1133),w=a(5397),F=a(111),S=a(831),R=a(537),_=a(2269),k=a(2119),V=a(8473),M=a(9976),y=a(184),E=[{value:"Nano(1K-10K Followers)",label:"Nano(1K-10K Followers)"},{value:"Micro(10K-50K Followers)",label:"Micro(10K-50K Followers)"},{value:"Mid-Tier(50K-100K Followers)",label:"Mid-Tier(50K-100K Followers)"},{value:"Macro(100K-1M Followers)",label:"Macro(100K-1M Followers)"},{value:"Mega(1M + Followers)",label:"Mega(1M + Followers)"}],T=[{value:"Nano(1K-10K Followers)",label:"Nano(1K-10K Followers)"},{value:"Micro(10K-50K Followers)",label:"Micro(10K-50K Followers)"},{value:"Mid-Tier(50K-100K Followers)",label:"Mid-Tier(50K-100K Followers)"},{value:"Macro(100K-1M Followers)",label:"Macro(100K-1M Followers)"},{value:"Mega(1M + Followers)",label:"Mega(1M + Followers)"}],B=function(){var e=(0,n.useState)([]),l=(0,s.Z)(e,2),a=l[0],B=l[1],I=(0,n.useState)(0),K=(0,s.Z)(I,2),U=K[0],L=K[1],P=(0,n.useState)(7),Q=(0,s.Z)(P,2),Y=Q[0],H=(Q[1],(0,n.useState)(!1)),D=(0,s.Z)(H,2),z=D[0],J=D[1],X=(0,n.useState)([]),O=(0,s.Z)(X,2),G=O[0],W=O[1],q=(0,n.useState)(""),$=(0,s.Z)(q,2),ee=$[0],le=$[1],ae=(0,n.useState)([]),te=(0,s.Z)(ae,2),se=(te[0],te[1],(0,n.useState)([])),ne=(0,s.Z)(se,2),ce=(ne[0],ne[1],(0,n.useState)([])),oe=(0,s.Z)(ce,2),ie=(oe[0],oe[1],(0,n.useState)(!1)),re=(0,s.Z)(ie,2),ue=re[0],de=re[1],me=(0,n.useState)(!1),fe=(0,s.Z)(me,2),he=fe[0],xe=fe[1],ge=(0,n.useState)(!1),ve=(0,s.Z)(ge,2),Ae=ve[0],pe=ve[1],je=(0,n.useState)(!1),be=(0,s.Z)(je,2),Ce=(be[0],be[1]),Ne=(0,n.useState)(!1),Ze=(0,s.Z)(Ne,2),we=Ze[0],Fe=Ze[1],Se=(0,n.useState)(!1),Re=(0,s.Z)(Se,2),_e=(Re[0],Re[1]),ke=(0,n.useState)(!1),Ve=(0,s.Z)(ke,2),Me=Ve[0],ye=Ve[1],Ee=(0,n.useState)([]),Te=(0,s.Z)(Ee,2),Be=Te[0],Ie=Te[1],Ke=(0,n.useState)(!1),Ue=(0,s.Z)(Ke,2),Le=Ue[0],Pe=Ue[1],Qe=(0,n.useState)([]),Ye=(0,s.Z)(Qe,2),He=(Ye[0],Ye[1],(0,n.useState)(!1)),De=(0,s.Z)(He,2),ze=(De[0],De[1],(0,n.useState)([])),Je=(0,s.Z)(ze,2),Xe=(Je[0],Je[1],(0,n.useState)("")),Oe=(0,s.Z)(Xe,2),Ge=Oe[0],We=Oe[1],qe=(0,n.useState)(!1),$e=(0,s.Z)(qe,2),el=$e[0],ll=$e[1],al=(0,n.useState)([]),tl=(0,s.Z)(al,2),sl=tl[0],nl=tl[1],cl=(0,n.useState)([]),ol=(0,s.Z)(cl,2),il=(ol[0],ol[1]),rl=(0,n.useState)(!1),ul=(0,s.Z)(rl,2),dl=(ul[0],ul[1],(0,n.useState)([])),ml=(0,s.Z)(dl,2),fl=(ml[0],ml[1]),hl=(0,n.useState)(""),xl=(0,s.Z)(hl,2),gl=xl[0],vl=xl[1],Al=(0,n.useState)([]),pl=(0,s.Z)(Al,2),jl=pl[0],bl=pl[1],Cl=(0,n.useState)(0),Nl=(0,s.Z)(Cl,2),Zl=Nl[0],wl=(Nl[1],(0,n.useState)(!1)),Fl=(0,s.Z)(wl,2),Sl=Fl[0],Rl=Fl[1],_l=(0,n.useState)(""),kl=(0,s.Z)(_l,2),Vl=kl[0],Ml=kl[1],yl=(0,n.useState)(1e3),El=(0,s.Z)(yl,2),Tl=El[0],Bl=El[1],Il=(0,n.useState)(1e4),Kl=(0,s.Z)(Il,2),Ul=Kl[0],Ll=Kl[1],Pl=(0,n.useState)([0,20]),Ql=(0,s.Z)(Pl,2),Yl=Ql[0],Hl=Ql[1],Dl=(0,n.useState)(!1),zl=(0,s.Z)(Dl,2),Jl=zl[0],Xl=zl[1],Ol=(0,n.useState)(!1),Gl=(0,s.Z)(Ol,2),Wl=(Gl[0],Gl[1]),ql=(0,n.useState)(!1),$l=(0,s.Z)(ql,2),ea=$l[0],la=$l[1],aa=(0,n.useState)(""),ta=(0,s.Z)(aa,2),sa=ta[0],na=ta[1],ca=(0,n.useState)(!1),oa=(0,s.Z)(ca,2),ia=oa[0],ra=oa[1],ua=(0,n.useState)(!1),da=(0,s.Z)(ua,2),ma=da[0],fa=da[1],ha=(0,n.useState)([]),xa=(0,s.Z)(ha,2),ga=xa[0],va=xa[1],Aa=(0,n.useState)(!1),pa=(0,s.Z)(Aa,2),ja=pa[0],ba=pa[1],Ca=(0,n.useState)(""),Na=(0,s.Z)(Ca,2),Za=Na[0],wa=Na[1],Fa=(0,n.useState)(!1),Sa=(0,s.Z)(Fa,2),Ra=Sa[0],_a=Sa[1],ka=(0,n.useState)(!1),Va=(0,s.Z)(ka,2),Ma=Va[0],ya=Va[1],Ea=(0,n.useState)(!1),Ta=(0,s.Z)(Ea,2),Ba=Ta[0],Ia=Ta[1],Ka=(0,n.useState)(!1),Ua=(0,s.Z)(Ka,2),La=Ua[0],Pa=Ua[1],Qa=(0,n.useState)(!1),Ya=(0,s.Z)(Qa,2),Ha=Ya[0],Da=Ya[1],za=(0,n.useState)(!1),Ja=(0,s.Z)(za,2),Xa=Ja[0],Oa=Ja[1],Ga=(0,n.useState)(!1),Wa=(0,s.Z)(Ga,2),qa=Wa[0],$a=Wa[1],et=(0,n.useState)(!1),lt=(0,s.Z)(et,2),at=lt[0],tt=lt[1],st=(0,n.useState)(!1),nt=(0,s.Z)(st,2),ct=nt[0],ot=nt[1],it=(0,n.useState)(!1),rt=(0,s.Z)(it,2),ut=rt[0],dt=rt[1],mt=(0,n.useState)(!1),ft=(0,s.Z)(mt,2),ht=ft[0],xt=ft[1],gt=(0,n.useState)(null),vt=(0,s.Z)(gt,2),At=vt[0],pt=vt[1],jt=(0,n.useState)(null),bt=(0,s.Z)(jt,2),Ct=bt[0],Nt=bt[1],Zt=(0,n.useState)([]),wt=(0,s.Z)(Zt,2),Ft=wt[0],St=wt[1],Rt=(0,n.useState)(0),_t=(0,s.Z)(Rt,2),kt=_t[0],Vt=_t[1],Mt=(0,n.useState)(0),yt=(0,s.Z)(Mt,2),Et=(yt[0],yt[1]),Tt=(0,n.useState)(0),Bt=(0,s.Z)(Tt,2),It=Bt[0],Kt=Bt[1],Ut=(0,c.UO)(),Lt=Ut.inputField,Pt=Ut.eRange,Qt=Ut.followerRange,Yt=(0,c.s0)(),Ht=localStorage.getItem("id"),Dt=[],zt=function(){de((function(e){return!e}))},Jt=function(){return xe((function(e){return!e}))},Xt=function(){return pe((function(e){return!e}))},Ot=function(e){var l=Math.floor(e/25),a=(ht?es:ut?$t:ct?qt:at?ls:qa?Wt:as)[l],t=e%25;return 0===t?a.scaledValue:t*(((ht?es:ut?$t:ct?qt:at?ls:qa?Wt:as)[l+1].scaledValue-a.scaledValue)/25)+a.scaledValue},Gt=function(e){var l=Math.floor(e/25),a=(Xa?es:Ha?$t:La?qt:Ba?ls:Ma?Wt:as)[l],t=e%25;return 0===t?a.scaledValue:t*(((Xa?es:Ha?$t:La?qt:Ba?ls:Ma?Wt:as)[l+1].scaledValue-a.scaledValue)/25)+a.scaledValue},Wt=[{value:0,scaledValue:1e3,label:"1k"},{value:25,scaledValue:2500,label:"2.5k"},{value:50,scaledValue:5e3,label:"5k"},{value:75,scaledValue:7500,label:"7.5k"},{value:100,scaledValue:1e4,label:"10k"}],qt=[{value:0,scaledValue:5e4,label:"50k"},{value:25,scaledValue:6e4,label:"60k"},{value:50,scaledValue:75e3,label:"75k"},{value:75,scaledValue:9e4,label:"90k"},{value:100,scaledValue:1e5,label:"100k"}],$t=[{value:0,scaledValue:1e5,label:"100k"},{value:25,scaledValue:25e4,label:"250k"},{value:50,scaledValue:5e5,label:"500k"},{value:75,scaledValue:75e4,label:"750k"},{value:100,scaledValue:1e6,label:"1M"}],es=[{value:0,scaledValue:1e6,label:"1M+"},{value:25,scaledValue:25e5,label:"2.5M+"},{value:50,scaledValue:5e6,label:"5M+"},{value:75,scaledValue:75e5,label:"7.5M+"},{value:100,scaledValue:1e7,label:"10M+"}],ls=[{value:0,scaledValue:1e4,label:"10k"},{value:25,scaledValue:2e4,label:"20k"},{value:50,scaledValue:3e4,label:"30k"},{value:75,scaledValue:4e4,label:"40k"},{value:100,scaledValue:5e4,label:"50k"}],as=[{value:0,scaledValue:1e3,label:"1k"},{value:25,scaledValue:5e3,label:"5k"},{value:50,scaledValue:1e4,label:"10k"},{value:75,scaledValue:25e3,label:"25k"},{value:100,scaledValue:5e4,label:"50k"},{value:125,scaledValue:1e5,label:"100k"},{value:150,scaledValue:25e4,label:"250k"},{value:175,scaledValue:5e5,label:"500k"},{value:200,scaledValue:1e6,label:"1M"}];function ts(e){return e>999&&e<1e6?(e/1e3).toFixed(0)+"K":e>=1e6?(e/1e6).toFixed(0)+"M":e<900?e:void 0}var ss=function(){var e="http://13.234.29.72:4000/getListData/".concat(Ht);fetch(e).then((function(e){e.json().then((function(e){Ie(e)}))}))},ns=function(){var e="http://13.234.29.72:4000/downloadcsv?inputField=".concat(Lt);fetch(e,{headers:{"Content-type":"text/csv; charset=UTF-8"}}).then((function(e){e.text().then((function(e){vl(e)}))}))},cs=function(e){wa(e.username),ba(!ja)},os=function(){var e,l;if(Pt&&!Qt){if(Pt.includes("eRange")){e=Pt.split("=")[1].split("&");var a="http://13.234.29.72:4000/getFilteredResults?inputField=".concat(Lt,"&limit=").concat(Y,"&skip=").concat(kt,"&minEr=").concat(e[0],"&maxEr=").concat(e[1]);fetch(a).then((function(e){e.json().then((function(e){B(e.result),Et(e.totalPages),Kt(e.totalDataLength)}))})).catch((function(e){console.log(e)}))}if(Pt.includes("followerRange")){l=Pt.split("=")[1].split("&");var t="http://13.234.29.72:4000/getFilteredResults?inputField=".concat(Lt,"&limit=").concat(Y,"&skip=").concat(kt,"&minFollowers=").concat(l[0],"&maxFollowers=").concat(l[1]);fetch(t).then((function(e){e.json().then((function(e){B(e.result),Et(e.totalPages),Kt(e.totalDataLength)}))})).catch((function(e){console.log(e)}))}}if(Pt&&Qt){e=Pt.split("=")[1].split("&"),l=Qt.split("=")[1].split("&");var s="http://13.234.29.72:4000/getFilteredResults/getFilteredResults?inputField=".concat(Lt,"&limit=").concat(Y,"&skip=").concat(kt,"&minFollowers=").concat(l[0],"&maxFollowers=").concat(l[1],"&minEr=").concat(e[0],"&maxEr=").concat(e[1]);fetch(s).then((function(e){e.json().then((function(e){B(e.result),Et(e.totalPages),Kt(e.totalDataLength)}))})).catch((function(e){console.log(e)}))}if(!Pt&&!Qt){var n="http://13.234.29.72:4000/getRelatedInfluencers?inputField=".concat(Lt,"&limit=").concat(Y,"&skip=").concat(kt);fetch(n).then((function(e){e.json().then((function(e){B(e.result),Et(e.totalPages),Kt(e.totalDataLength)}))})).catch((function(e){console.log(e)}))}};(0,n.useEffect)((function(){fetch("http://13.234.29.72:4000/getrelatedinfluencers?inputField").then((function(e){e.json().then((function(e){e.map((function(e){Dt.push(e.username),fl(Dt)}))}))})).catch((function(e){console.log(e)})),os(),ss(),ns()}),[ia,kt]),(0,n.useEffect)((function(){ss()}),[Me]),(0,n.useEffect)((function(){os()}),[Ra]),(0,n.useEffect)((function(){null!==At&&(At.label.includes("Mega(1M + Followers)")?(Oa(!0),Ia(!1),Pa(!1),Da(!1),ya(!1)):At.label.includes("Macro(100K-1M Followers)")?(Da(!0),Ia(!1),Pa(!1),Oa(!1),ya(!1)):At.label.includes("Mid-Tier(50K-100K Followers)")?(Pa(!0),Ia(!1),Da(!1),Oa(!1),ya(!1)):At.label.includes("Micro(10K-50K Followers)")?(Ia(!0),Pa(!1),Da(!1),Oa(!1),ya(!1)):At.label.includes("Nano(1K-10K Followers)")&&(ya(!0),Pa(!1),Da(!1),Oa(!1),Ia(!1)))}),[At]),(0,n.useEffect)((function(){null!==Ct&&(Ct.label.includes("Mega(1M + Followers)")?(xt(!0),tt(!1),ot(!1),dt(!1),$a(!1)):Ct.label.includes("Macro(100K-1M Followers)")?(dt(!0),tt(!1),ot(!1),xt(!1),$a(!1)):Ct.label.includes("Mid-Tier(50K-100K Followers)")?(ot(!0),tt(!1),dt(!1),xt(!1),$a(!1)):Ct.label.includes("Micro(10K-50K Followers)")?(tt(!0),ot(!1),dt(!1),xt(!1),$a(!1)):Ct.label.includes("Nano(1K-10K Followers)")&&($a(!0),ot(!1),dt(!1),xt(!1),tt(!1)))}),[Ct]),(0,n.useEffect)((function(){os()}),[Ae]),(0,n.useEffect)((function(){os()}),[ue]);var is=function(e){We(e.username),Pe(!Le)},rs=function(e){ll(!el),nl([{username:e.username}])},us=function(e){var l=e.target.value.toLowerCase();if(Ml(l),l.length>1){var a="http://13.234.29.72:4000/filterUsers?username=".concat(l);fetch(a).then((function(e){e.json().then((function(e){bl(e)}))})),Rl(!0)}else Rl(!1)},ds=function(e){il(e.target.innerText),bl([]),Ml(""),Rl(!1),sl.find((function(l){return l.username===e.target.innerText}))||nl([].concat((0,t.Z)(sl),[{username:e.target.innerText}])),console.log(sl)},ms=function(){return(0,y.jsx)("div",{className:"suggestions",children:jl.map((function(e,l){return(0,y.jsx)("div",{className:l===Zl?"active_inf":"non_active",onClick:ds,children:e.username},l)}))})};var fs=function(){var e="",l="";sl.map((function(a){e+="".concat("","&influencers=".concat(a.username)),l=e.substring(1)})),Yt("/CompareInfluencers/".concat(l))},hs=function(e){Yt("/profile/".concat(e.target.innerText)),va([]),na(""),fa(!1)},xs=function(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("div",{className:"suggestions_influencer row no-gutters",children:(0,y.jsxs)("div",{className:"col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10",children:[(0,y.jsx)("div",{style:{margin:"0.313rem",padding:0,fontFamily:"Noto Sans",fontStyle:"normal",fontWeight:700,fontSize:"1.125rem",lineHeight:"1rem",color:"rgba(0, 0, 0, 0.7)"},children:"Influencers"}),ga.map((function(e,l){return(0,y.jsx)("div",{className:l===fa?"active_influencer":"",onClick:hs,children:e.username},l)}))]})})})};return(0,y.jsxs)("div",{className:"search_container row no-gutters",children:[(0,y.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-2 col-xs-2  col-3",children:(0,y.jsx)(i.Z,{})}),(0,y.jsxs)("div",{className:"search_content_list_panel col-lg-10 col-sm-10 col-md-10 col-xs-10 col-9",children:[(0,y.jsx)(S.Z,{}),(0,y.jsxs)("div",{className:"middle_pane row no-gutters",children:[(0,y.jsxs)("div",{className:"input_box_influencer col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10",children:[(0,y.jsx)(p.II,{type:"text",placeholder:"Search for influencers, categories...",value:sa,onChange:function(e){var l=e.target.value.toLowerCase();if(na(l),l.length>1){var a="http://13.234.29.72:4000/filterUsers?username=".concat(l);fetch(a).then((function(e){e.json().then((function(e){va(e)}))})),fa(!0)}else fa(!1)}}),ma&&(0,y.jsx)(xs,{}),(0,y.jsx)(j.RB5,{onClick:function(){fl([]),ra(!ia),Yt("/influencerslist/".concat(sa)),na(""),va([]),fa(!1)}})]}),(0,y.jsxs)("div",{className:"filter_bar row no-gutters",children:[(0,y.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 button_filter",children:(0,y.jsxs)(g.Z,{variant:"outlined",onClick:zt,className:"filter_btn",children:["Followers ",!0===ue?(0,y.jsx)(b.IVI,{}):(0,y.jsx)(j.i0B,{})]})}),(0,y.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4 button_filter",children:(0,y.jsxs)(g.Z,{variant:"outlined",onClick:Jt,className:"filter_btn",children:["Category ",!0===he?(0,y.jsx)(b.IVI,{}):(0,y.jsx)(j.i0B,{})]})}),(0,y.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4 button_filter",children:(0,y.jsxs)(g.Z,{variant:"outlined",onClick:Xt,className:"filter_btn",children:["Engagement Rate ",!0===Ae?(0,y.jsx)(b.IVI,{}):(0,y.jsx)(j.i0B,{})]})}),(0,y.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4 button_filter",children:(0,y.jsx)(g.Z,{variant:"outlined",onClick:function(){J(!z);var e=[];a.forEach((function(l){!0===l.is_verified&&(e.push(l),W(e))}))},className:"filter_btn",children:!0===z?"Back":"Registered influencers"})}),(0,y.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4 button_filter",children:(0,y.jsxs)(g.Z,{variant:"outlined",onClick:function(){Fe(!1),_e(!1),Ce(!1),_a(!Ra),J(!1),Yt("/influencerslist/".concat(Lt))},className:"filter_btn",children:[(0,y.jsx)(j.oHP,{}),(0,y.jsx)("span",{children:"Clear all filters"})]})}),!0===Ae?(0,y.jsx)("section",{className:"modal_section",children:(0,y.jsxs)("div",{className:"modal_option",children:[(0,y.jsx)("div",{children:"Engagement %"}),(0,y.jsx)(V.ZP,{value:Yl,onChange:function(e,l){Hl(l),Wl(!0)},marks:[{value:0,scaledValue:0,label:"0"},{value:5,scaledValue:5,label:"5"},{value:10,scaledValue:10,label:"10"},{value:15,scaledValue:15,label:"15"},{value:20,scaledValue:20,label:"20"}],min:0,max:20,step:1,className:"slider"}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"followers_count_1",children:["Minimum ER: ",Yl[0]]}),(0,y.jsxs)("div",{className:"followers_count",children:["Maximum ER: ",Yl[1]]})]}),(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,y.jsx)(g.Z,{color:"primary",onClick:function(){var e;pe(!1),Lt?Lt&&(Pt&&!Qt&&(Pt.includes("eRange")?Yt("/influencerslist/".concat(Lt,"/eRange=").concat(Yl[0],"&").concat(Yl[1])):Pt.includes("followerRange")&&(e=Pt.split("=")[1].split("&"),Yt("/influencerslist/".concat(Lt,"/eRange=").concat(Yl[0],"&").concat(Yl[1],"/followerRange=").concat(e[0],"&").concat(e[1])))),Pt&&Qt?(e=Qt.split("=")[1].split("&"),Yt("/influencerslist/".concat(Lt,"/eRange=").concat(Yl[0],"&").concat(Yl[1],"/followerRange=").concat(e[0],"&").concat(e[1]))):Pt||Qt||Yt("/influencerslist/".concat(Lt,"/eRange=").concat(Yl[0],"&").concat(Yl[1]))):(Pt&&!Qt&&(Pt.includes("eRange")?Yt("/influencerslist//eRange=".concat(Yl[0],"&").concat(Yl[1])):Pt.includes("followerRange")&&(e=Pt.split("=")[1].split("&"),Yt("/influencerslist//eRange=".concat(Yl[0],"&").concat(Yl[1],"/followerRange=").concat(e[0],"&").concat(e[1])))),Pt&&Qt?(e=Qt.split("=")[1].split("&"),Yt("/influencerslist//eRange=".concat(Yl[0],"&").concat(Yl[1],"/followerRange=").concat(e[0],"&").concat(e[1]))):Pt||Qt||(console.log(Yl[0],Yl[1]),Yt("/influencerslist//eRange=".concat(Yl[0],"&").concat(Yl[1]))))},className:"filter_button",children:"Filter"}),(0,y.jsx)(g.Z,{color:"primary",onClick:Xt,style:{background:"#D7D7D7",borderRadius:"0.188rem",fontFamily:"Noto Sans",fontStyle:"normal",fontWeight:600,fontSize:"0.75rem",lineHeight:"1rem",textAlign:"center",color:"#595959",width:"7.75rem",height:"2.25rem",marginTop:"2rem"},children:"Clear"})]})]})}):!0===he?(0,y.jsx)("section",{className:"modal_section",children:(0,y.jsxs)("div",{className:"modal_option",children:[(0,y.jsx)("div",{children:"Add Category"}),(0,y.jsx)(p.II,{placeholder:"Category",className:"w-50",type:"text",value:ee,onChange:function(e){le(e.target.value)}}),(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,y.jsx)(g.Z,{color:"primary",onClick:function(){var e=[];xe(!1),a.forEach((function(l){null!==l.category_enum&&l.category_enum.includes(ee.toUpperCase())&&(e.push(l),St(e),Fe(!0))}))},className:"filter_button",children:"Filter"}),(0,y.jsx)(g.Z,{color:"primary",onClick:Jt,style:{background:"#D7D7D7",borderRadius:"0.188rem",fontFamily:"Noto Sans",fontStyle:"normal",fontWeight:600,fontSize:"0.75rem",lineHeight:"1rem",textAlign:"center",color:"#595959",width:"7.75rem",height:"2.25rem",marginTop:"2rem"},children:"Clear"})]})]})}):!0===ue?(0,y.jsx)("section",{className:"modal_section",children:(0,y.jsxs)("div",{className:"modal_option",children:[(0,y.jsx)("div",{className:"modal_title",children:"Followers Count"}),(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"label_slider",children:"Minimum"}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,y.jsx)(M.ZP,{defaultValue:At,onChange:pt,options:E,className:"select_option"})})]}),(0,y.jsx)(V.ZP,{value:Tl,onChange:function(e,l){Bl(l),Xl(!0)},marks:Xa?es:Ha?$t:La?qt:Ba?ls:Ma?Wt:as,min:0,max:100,step:1,scale:Gt,valueLabelFormat:ts,className:"slider"}),(0,y.jsxs)("div",{style:{paddingTop:"2.25rem"},children:[(0,y.jsx)("div",{className:"label_slider",children:"Maximum"}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,y.jsx)(M.ZP,{defaultValue:Ct,onChange:Nt,options:T,className:"select_option"})})]}),(0,y.jsx)(V.ZP,{value:Ul,onChange:function(e,l){Ll(l),la(!0)},marks:ht?es:ut?$t:ct?qt:at?ls:qa?Wt:as,min:0,max:100,step:1,scale:Ot,valueLabelFormat:ts,className:"slider"}),!0===Jl?(0,y.jsxs)("div",{className:"followers_count_1",children:["Minimum Followers Count: ",Gt(Tl)]}):(0,y.jsxs)("div",{className:"followers_count_1",children:["Minimum Followers Count: ",Tl]}),!0===ea?(0,y.jsxs)("div",{className:"followers_count",children:["Maximum Followers Count: ",Ot(Ul)]}):(0,y.jsxs)("div",{className:"followers_count",children:["Maximum Followers Count: ",Ul]}),(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,y.jsx)(g.Z,{color:"primary",onClick:function(){var e;de(!1),Lt?Lt&&(Pt&&!Qt&&(Pt.includes("eRange")?(e=Pt.split("=")[1].split("&"),Yt("/influencerslist/".concat(Lt,"/eRange=").concat(e[0],"&").concat(e[1],"/followerRange=").concat(Gt(Tl),"&").concat([Ot(Ul)]))):Pt.includes("followerRange")&&Yt("/influencerslist/".concat(Lt,"/followerRange=").concat(Gt(Tl),"&").concat([Ot(Ul)]))),Pt&&Qt?(e=Pt.split("=")[1].split("&"),Yt("/influencerslist/".concat(Lt,"/eRange=").concat(e[0],"&").concat(e[1],"/followerRange=").concat(Gt(Tl),"&").concat([Ot(Ul)]))):Pt||Qt||Yt("/influencerslist/".concat(Lt,"/followerRange=").concat(Gt(Tl),"&").concat([Ot(Ul)]))):(Pt&&!Qt&&(Pt.includes("eRange")?(e=Pt.split("=")[1].split("&"),Yt("/influencerslist//eRange=".concat(e[0],"&").concat(e[1],"/followerRange=").concat(Gt(Tl),"&").concat(Ot(Ul)))):Pt.includes("followerRange")&&Yt("/influencerslist//followerRange=".concat(Gt(Tl),"&").concat([Ot(Ul)]))),Pt&&Qt?(e=Pt.split("=")[1].split("&"),Yt("/influencerslist//eRange=".concat(e[0],"&").concat(e[1],"/followerRange=").concat(Gt(Tl),"&").concat(Ot(Ul)))):Pt||Qt||Yt("/influencerslist//followerRange=".concat(Gt(Tl),"&").concat(Ot(Ul))))},className:"filter_button",children:"Filter"}),(0,y.jsx)(g.Z,{color:"primary",onClick:zt,style:{background:"#D7D7D7",borderRadius:"0.188rem",fontFamily:"Noto Sans",fontStyle:"normal",fontWeight:600,fontSize:"0.75rem",lineHeight:"1rem",textAlign:"center",color:"#595959",width:"7.75rem",height:"2.25rem",marginTop:"2rem"},children:"Clear"})]})]})}):null,(0,y.jsx)("div",{className:"download_icon col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4",children:(0,y.jsx)("a",{href:"data:text/csv;charset=utf-8,".concat(gl),download:"filename.csv",onClick:ns,children:(0,y.jsx)(j.RFS,{size:30})})})]}),(0,y.jsx)("div",{className:"table_content",children:(0,y.jsx)(m.Z,{component:x.Z,className:"table_paper",children:(0,y.jsxs)(r.Z,{stickyHeader:!0,className:"table_container",children:[(0,y.jsx)(f.Z,{className:"table_head",children:(0,y.jsxs)(h.Z,{className:"table_row",children:[(0,y.jsx)(d.Z,{className:"table_head_value",children:"Instagram Profiles"}),(0,y.jsx)(d.Z,{className:"table_head_value",align:"center",children:"Followers"}),(0,y.jsx)(d.Z,{className:"table_head_value",align:"center",children:"Engagement"}),(0,y.jsx)(d.Z,{className:"table_head_value",align:"center",children:"Avg Like"}),(0,y.jsx)(d.Z,{className:"table_head_value",align:"center",children:"Avg Comment"}),(0,y.jsx)(d.Z,{className:"table_head_value",align:"center",children:"Avg Reach"}),(0,y.jsx)(d.Z,{className:"table_head_value",align:"center",children:"City"}),(0,y.jsx)(d.Z,{className:"table_head_value",align:"center",children:"Category"}),(0,y.jsx)(d.Z,{className:"table_head_value",align:"center",children:"Actions"})]})}),(0,y.jsx)(u.Z,{className:"table_body",children:(Y>0?!0===we?Ft.slice(U*Y,U*Y+Y):!0===z?G.slice(U*Y,U*Y+Y):a:a).map((function(e,l){return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(h.Z,{className:"table_row_body",children:[(0,y.jsx)(d.Z,{component:"th",scope:"row",onClick:function(){return function(e){Yt("/profile/".concat(e.username))}(e)},className:"table_body_value_1",children:(0,y.jsx)("div",{children:e.full_name})},e.username),(0,y.jsx)(d.Z,{className:"table_body_value",align:"center",children:(0,o.Z)(e.edge_followed_by.count)}),(0,y.jsx)(d.Z,{className:"table_body_value",align:"center",children:(0,o.Z)(e.edge_owner_to_timeline_media.edges[0].er)}),(0,y.jsx)(d.Z,{className:"table_body_value",align:"center",children:(0,o.Z)(e.edge_owner_to_timeline_media.edges[0].avg_likes)}),(0,y.jsx)(d.Z,{className:"table_body_value",align:"center",children:(0,o.Z)(e.edge_owner_to_timeline_media.edges[0].avg_comment)}),(0,y.jsx)(d.Z,{className:"table_body_value",align:"center",children:(0,o.Z)(e.edge_felix_video_timeline.edges[0].averageReelView)}),(0,y.jsx)(d.Z,{className:"table_body_value",align:"center",children:e.city_name}),(0,y.jsx)(d.Z,{className:"table_body_value",align:"center",children:null!==e.category_enum?e.category_enum.split("_"):null}),(0,y.jsx)(d.Z,{className:"table_body_value",children:(0,y.jsxs)("div",{className:"btn_display",children:[(0,y.jsx)("img",{id:e.id,src:_,onClick:function(l){cs(e)}}),!0===ja&&Za===e.username?(0,y.jsxs)("div",{className:"cost_modal",children:[(0,y.jsx)("div",{className:"modal_title",children:"Check Cost "}),(0,y.jsx)("div",{className:"modal_desc",children:"The estimated cost for the influencer is as follows,"}),(0,y.jsxs)("div",{className:"cost_box",children:[(0,y.jsx)("div",{children:"Reel"}),e.costFactorReel.minTotalCost||e.costFactorReel.minTotalCost?(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorReel.minTotalCost)," - Rs",(0,o.Z)(e.costFactorReel.maxTotalCost)]}):(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorReel.influencerExactminTotalCost)," - Rs",(0,o.Z)(e.costFactorReel.influencerExactmaxTotalCost)]})]}),(0,y.jsxs)("div",{className:"cost_box",children:[(0,y.jsx)("div",{children:"Post"}),e.costFactorPosts.minTotalCost||e.costFactorPosts.minTotalCost?(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorPosts.minTotalCost)," - Rs",(0,o.Z)(e.costFactorPosts.maxTotalCost)]}):(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorPosts.influencerExactminTotalCost)," - Rs",(0,o.Z)(e.costFactorPosts.influencerExactmaxTotalCost)]})]}),(0,y.jsxs)("div",{className:"cost_box",children:[(0,y.jsx)("div",{children:"Story"}),e.costFactorStories.minTotalCost||e.costFactorStories.minTotalCost?(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorStories.minTotalCost)," - Rs",(0,o.Z)(e.costFactorStories.maxTotalCost)]}):(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorStories.influencerExactminTotalCost)," - Rs",(0,o.Z)(e.costFactorStories.influencerExactmaxTotalCost)]})]}),(0,y.jsxs)("div",{className:"cost_box",children:[(0,y.jsx)("div",{children:"Igtv"}),e.costFactorIgtv.minTotalCost||e.costFactorIgtv.minTotalCost?(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorIgtv.minTotalCost)," - Rs",(0,o.Z)(e.costFactorIgtv.maxTotalCost)]}):(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorIgtv.influencerExactminTotalCost)," - Rs",(0,o.Z)(e.costFactorIgtv.influencerExactmaxTotalCost)]})]}),(0,y.jsxs)("div",{className:"cost_box",children:[(0,y.jsx)("div",{children:"Swipeup Stories"}),e.costFactorSwipeUp.minTotalCost||e.costFactorSwipeUp.minTotalCost?(0,y.jsxs)("div",{className:"cost_value",style:{paddingLeft:"1rem"},children:[": Rs",(0,o.Z)(e.costFactorSwipeUp.minTotalCost)," - Rs",(0,o.Z)(e.costFactorSwipeUp.maxTotalCost)]}):(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorSwipeUp.influencerExactminTotalCost)," - Rs",(0,o.Z)(e.costFactorSwipeUp.influencerExactmaxTotalCost)]})]}),(0,y.jsxs)("div",{className:"cost_box",children:[(0,y.jsx)("div",{children:"Videos"}),e.costFactorVideo.minTotalCost||e.costFactorVideo.minTotalCost?(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorVideo.minTotalCost)," - Rs",(0,o.Z)(e.costFactorVideo.maxTotalCost)]}):(0,y.jsxs)("div",{className:"cost_value",children:[": Rs",(0,o.Z)(e.costFactorVideo.influencerExactminTotalCost)," - Rs",(0,o.Z)(e.costFactorVideo.influencerExactmaxTotalCost)]})]}),(0,y.jsx)("div",{className:"modal_footer",children:"To check a more accurate estimate, please contact +91 98765 43210"}),(0,y.jsx)(g.Z,{className:"close_btn",onClick:cs,children:"Close"})]}):null,(0,y.jsx)("img",{id:e.id,onClick:function(){is(e)},src:R}),!0===Le?[e].map((function(l){return l.username==Ge?(0,y.jsx)("section",{className:"addList_section",id:e.id,children:(0,y.jsxs)("div",{className:"addList_option",children:[(0,y.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},onClick:is,children:(0,y.jsx)(j.oHP,{})}),(0,y.jsx)("div",{onClick:function(){return ye(!0)},className:"section_dropdown_header",children:"Add To List"}),(0,y.jsx)("div",{className:"section_list_title",children:"Select the list to which you want to add the influencer."}),(0,y.jsx)("div",{style:{overflowY:"scroll",height:"20vh",padding:"0.75rem"},children:Be.map((function(l){return(0,y.jsx)("div",{className:"list_options",onClick:function(){!function(e,l){var a="http://13.234.29.72:4000/addInfluencersToList/".concat(Ht,"?list=").concat(l.listName,"&username=").concat(e.username);fetch(a,{method:"POST"}).then((function(e){e.json()})).then((function(e){console.log(e)})),Pe(!1)}(e,l)},children:l.listName})}))})]})}):null})):null,(0,y.jsx)("img",{id:e.id,onClick:function(){return rs(e)},src:k}),!0===el?[e].map((function(e){return(0,y.jsxs)("div",{className:"compare_section",children:[(0,y.jsx)("div",{className:"close_btn",children:(0,y.jsx)(j.oHP,{onClick:function(){return rs()}})}),(0,y.jsx)("div",{className:"compare_headers",children:"Add to Compare"}),(0,y.jsx)("div",{className:"compare_title",children:"Select the influencer(s) from results to add to the selection you want to compare. You may compare upto four influencers."}),(0,y.jsx)("input",{type:"text",value:Vl,onChange:us,className:"compare_input"}),Sl&&(0,y.jsx)(ms,{}),(0,y.jsxs)("div",{className:"influencers_box",children:[(0,y.jsx)("div",{style:{overflowY:"scroll",height:"20vh"},children:sl.length>0?(0,y.jsx)(y.Fragment,{children:sl.map((function(e){return(0,y.jsxs)("div",{className:"added_influencer",children:[e.username,(0,y.jsx)("span",{children:(0,y.jsx)(j.oHP,{onClick:function(){!function(e){nl((function(l){return l.filter((function(l){return l.username!==e.username}))}))}(e)}})})]})}))}):null}),(0,y.jsx)("div",{onClick:function(){return nl([])},className:"clear_all",children:"Clear all"}),(0,y.jsxs)("div",{className:"btn_pane",children:[(0,y.jsx)(g.Z,{onClick:fs,className:"compare_btn",children:"Compare Now"}),(0,y.jsx)(g.Z,{className:"clear_btn",children:"Compare Later"})]})]})]})})):null]})},l)]},l)})}))}),(0,y.jsx)(v.Z,{children:(0,y.jsx)(h.Z,{className:"table_foot_row",children:(0,y.jsx)(A.Z,{rowsPerPageOptions:[7,14,{label:"All",value:-1}],colSpan:3,count:!0===z?G.length:!0===we?Ft.length:It,rowsPerPage:Y,page:U,SelectProps:{inputProps:{"aria-label":"Results per page"},native:!0},ActionsComponent:function(e){return(0,y.jsxs)("div",{style:{display:"flex"},children:[(0,y.jsx)(C.Z,{onClick:function(e){Vt(0),L(0)},disabled:0===U,"aria-label":"first page",children:(0,y.jsx)(N.Z,{})}),(0,y.jsx)(C.Z,{onClick:function(e){Vt((function(e){return e-7})),L(U-1)},disabled:0===U,"aria-label":"previous page",children:(0,y.jsx)(Z.Z,{})}),(0,y.jsx)(C.Z,{onClick:function(e){Vt((function(e){return e+7})),L(U+1)},"aria-label":"next page",disabled:U>=Math.ceil(e.count/Y)-1,children:(0,y.jsx)(w.Z,{})}),(0,y.jsx)(C.Z,{onClick:function(l){Vt(It-7),L(Math.max(0,Math.ceil(e.count/Y)-1))},disabled:U>=Math.ceil(e.count/Y)-1,"aria-label":"last page",children:(0,y.jsx)(F.Z,{})})]})},className:"table_footer_values"})})})]})})})]})]})]})}},2119:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgBvZZNaBNBFMf/b5PYHEpKlRiJevSgJ8FWIcW7RxXcZC8eRMxVRERIFgY3ntSTp/QiHko+LAjqyV7qoYJ414NHsfQDLZGapk0349vEsIqzuxM/+oeZzOa9eT/emzfZEHQlhIHOsQlt/+TmNkSxTdob7No9gG5CX21s7RyMj7BhP4/3kLgV6UnyDE9lJMaTowA8fUGl8CLSq1wz8KM2Bv6z4hDSgNt4gEEJwpTjtFOw64+5THOcyUtoAbafTvJ8HV59iT6H+K70h8R5/uzy8AGiNoVdOsXQ6u+AoaS8DafwDFEq15d+eRbzU3B35/lg81Bm8DcaBu+hgLvWm38LKDUPc/AFXn3ijrnBmfk2QjYcUKodxfrXFcwWu4GA9Y01ZCYWubYZuHiIuNHzjfIsTzPeSt2mZFxBJtXAtWoiEODBj7RMDrGKBFlwzNdw8kv9IeW7oZsaUDHvQNJaJKTIkBjlubOysBu2ysUHEJ1gp5nBaObgyjk2H4qECHMHq61L6MlHKvPPZ3CRa5fzLd5dlweYfBzZVJoflgMhg7P6GA6QsoKK5d8Duz7NXz7h1TkIKzh4hNRnUGqe5rmJWMyEo+5vXanb1HBPcmlMru9bpZ04q3J9AUEipMMBjjWLcG1xkLCyLXNnLWLswsaf3WSJV/zDdjXasbAX74OhCNNc117kDsIkZzACoLvZQXxfu/8O1f0LQHiu6cmA+5e/QVTT6IyP6W5C8kNL1/U7Y+KrEB5LUVAAAAAASUVORK5CYII="},2269:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMlSURBVHgBtVXPTxNBGH07u6QqVI0HIAYOejMRvYmAB7lYuFAPprTEmCD/gBwkyg/FFNRggsYDN/QiBXowKQcFE+PBQLAXRROPaiIaNdFoLKkGuuP3ze62u1KWGsNLJjOzM/PezDffvAW2GJrv6GByD9ZkDJpsod5hKlX2yGcqS5ByFoY+icHIt38T6E5uR9DsgynPQdPK4Y8MIG8ho1/FzUh2c4ELE/tpVykaOUg9SVPmqJ6Ari8A5rI1SdRgdbUJQnTQlJDN8wpShDEUebuxAJOX6U+ptZdGXlMIziIeewY/9E0dhcAdah2g8pFEjrlFCgIclnIzbe/8CXTRRrHNoBT0jAcRKE9Rq1mdJCPqnXAZ+Ukcc0nkvHNhk/dPzVO/0ZdcYgFD0SYSCZNImr7UISgvUn2Jh4WaxNnCF8rTc+gqeedujHT9hIlOxSFlt+LMn0ClImULp91wbDG/iHfmRm+iikI3Qq0zVOYQj7Z4xoejixiYekStEHJmlOoxS0AzW9V1aGLCs2BgmjJHNqA4QkQm8yEqIKHGABYfs0IE7ZCqVCr+JyTmbU5+mPlLtl+ok+c24u3eCz6frMa23A1afJrKLI23rhP48WUZuytZqcotUBzrQmRChVJihcLaixJgh0h5C9QLdUPKMu90+ZUEZmCYjfQAnxdl3FVZ4+Z0TrBEpVY9f+BNfrIhmpGTd4n4lLV97TbikTjVEhtBQ5OL0z4Bp6fqsbe4wO8hHolQix8Ok15B//R99KSC2FihwxZ6WBBgy7VcMaS8xbtAUr5fh9TaqPOdFp5EIPu4KHffJCWFPKG4hJguCCg/J8tlXTYu9pa/MdT+ADJ3hB7kCzrL6rrxy/d2QmjjsPxt1PlHeM2uwmTnrAOb3e+VsHr+pYBDFsjOUOs4ib+Eka3HYOevwgkY7H7s52y57IqBHWkMJBo2JeewBLJpRQ58gCHDDrn3BA76k/sox1P2Sfhi2VsS6oUa4r2as2bWWtmiLpRiLjVr50wee+em8/llkuWyKwIV8Ac77yj07DX3zv0FHLDlWq7o/PSr7ZFP4DznVORs8fnpbzn+AOSEFz/kDO1PAAAAAElFTkSuQmCC"},537:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABESURBVHgB7dK9EQAQFAPgsBUWecOonGEswlp+GndKp/IuX5pc6gCkntktlgo7k8Qdm4HHrY6GLGFVC1KPL6J3fBF9YAAzpRgKD6STggAAAABJRU5ErkJggg=="},5051:function(e,l,a){e.exports=a.p+"static/media/logo.a18991a8711fa01aed76.png"}}]);
//# sourceMappingURL=21.aa29f115.chunk.js.map