"use strict";(self.webpackChunktesting=self.webpackChunktesting||[]).push([[602],{1679:function(e,s){s.Z=function(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e}},7167:function(e,s,i){i.d(s,{Z:function(){return m}});var l=i(885),a=i(2791),t=i(1087),n=i(8820),r=i(6856),d=i(184),c=localStorage.getItem("id"),o=[{title:"Home",path:"/home/".concat(c),icon:(0,d.jsx)(n.V9Z,{}),cName:"nav-text"},{title:"Compare",icon:(0,d.jsx)(r.QA0,{}),path:"/CompareInfluencers",cName:"nav-text"},{title:"Calculator",path:"/calculate",icon:(0,d.jsx)(n.zjO,{}),cName:"nav-text"}],g=i(9983),u=i(5051);var m=function(){var e=(0,a.useState)(!1),s=(0,l.Z)(e,2),i=s[0];return s[1],(0,d.jsx)(g.Pd.Provider,{value:{color:"#fff"},children:(0,d.jsx)("div",{className:i?"nav-menu":"nav-menu-active",children:(0,d.jsxs)("nav",{className:"navbar",children:[(0,d.jsx)("img",{src:u,className:"logo"}),(0,d.jsx)("ul",{className:"nav-menu-items",children:o.map((function(e,s){return(0,d.jsx)("li",{className:e.cName,children:!0===i?(0,d.jsx)(t.rU,{to:e.path,children:e.icon}):(0,d.jsxs)(t.rU,{to:e.path,children:[e.icon,(0,d.jsx)("span",{children:e.title})]})})}))})]})})})}},831:function(e,s,i){i.d(s,{Z:function(){return c}});var l=i(885),a=i(2791),t=i(6856),n=i(7689),r=i(1087),d=i(184);var c=function(){var e,s=(0,a.useState)(!1),i=(0,l.Z)(s,2),c=i[0],o=i[1],g=(0,a.useState)(!1),u=(0,l.Z)(g,2),m=u[0],p=u[1],A=localStorage.getItem("id"),v=localStorage.getItem("name"),h=(0,n.s0)(),f=(0,n.TH)(),b=(0,n.UO)(),x=null===(e=[{page:"/home/".concat(A),text:"Home"},{page:"/CompareLists",text:"Compare Lists"},{page:"/CompareInfluencers",text:"Compare Influencers"},{page:"/influencerslist/",text:"Search Results"},{page:"/basketInfluencers",text:"Influencer Bundle"},{page:"/userLists",text:"List"},{page:"/profile",text:"Influencer Profile"},{page:"/updateprofile/".concat(A),text:"Profile Settings"},{page:"/calculate",text:"Calculate Cost"}].find((function(e){return f.pathname.includes(e.page)})))||void 0===e?void 0:e.text;return(0,a.useEffect)((function(){p("Compare Influencers"===x||"Compare Lists"===x)}),[b]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"topbar",children:[(0,d.jsxs)("div",{className:!0===m?"page_title_compared":"page_title",children:[x,"Compare Influencers"===x||"Compare Lists"===x?(0,d.jsxs)("div",{style:{display:"flex",paddingTop:"1rem"},children:[(0,d.jsx)("div",{style:{paddingLeft:"1.25rem"},children:(0,d.jsx)(r.rU,{to:"/CompareInfluencers",className:"tab_text",children:"Influencers"})}),(0,d.jsx)("div",{style:{paddingLeft:"3.5rem"},children:(0,d.jsx)(r.rU,{to:"/CompareLists",className:"tab_text",children:"List"})})]}):null]}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,d.jsx)("span",{className:"topbar_help_icon",children:(0,d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH3SURBVHgBhZXLK4RRGMbfcYtxiyH+AFLIAiU7JRYSBhs2Snby35CVjY3kEmEjyUJZuZRRomFhQ+NSrrnNeJ4571ffzJzv89av6Xu/c57znvd7zpmA+EcQlIByfX4AL+Dda0LAI18DukALCIFszX+DO3AJNvXXV5AVdYNhreQQnGplHFsBGkA7yANLYAv8iiVYxThYBRM62SvYhimwrHOCtkH9OmDAUnkByJfM3YW1gH4nmaO/tbrNPbAOEpqvBpOgSXNswTR40uc1MT3m3AiIZunEXvAF5l1iotvh1mfBDKjTnBMJLeBVTO+TFQa1wgPwLKmxCOLgWp/LQA8oFvPRGDGtvI1arLBEt3YmmRF1iTGKdIF42riI7qSYguVaaUy8g+PYp05wAt7S3tNWdEkox5UM+AiOgT4xnluQf1amOo0Z8hlXD47BnKU6RiX4oRYF2dx70OgjuK8kPN7z9NxSi4I86EegVVeyxa6Y3tmiVMxRvKCW48NtUCjG8bZejoAOS57z2d9cMZdFSlCMxyhsEQ145AbBipgPloxs14AbMTfIEKgC5+BT7MHWjIqx0oaYWyfhrOIOLtCrA3n38fTQ8I5HaV5+vGYxJqfQjrguXC/v1aowf3mKHL/SXnQEjxr7fpU+0c/MfMdri+fW+Qt4FGOzD/Gw0B+JP2n4pKSZYQAAAABJRU5ErkJggg=="})}),(0,d.jsx)("img",{src:"data:image/png;base64,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",className:"topbar_user_icon"}),(0,d.jsx)("span",{className:"topbar_username",children:v}),(0,d.jsx)("span",{style:{marginRight:"4rem",cursor:"pointer"},children:(0,d.jsx)(t.FIC,{onClick:function(){o(!c)}})})]})]}),!0===c?(0,d.jsxs)("div",{className:"dropdown",children:[(0,d.jsx)("div",{onClick:function(){h("/updateprofile/".concat(A))},className:"dropdown_title",children:"Profile Settings"}),(0,d.jsx)("div",{onClick:function(){h("/about")},className:"dropdown_title",children:"About"}),(0,d.jsx)("div",{onClick:function(){r.rU,localStorage.clear()},className:"dropdown_title",children:(0,d.jsx)(r.rU,{to:"/",children:"Logout"})})]}):null]})}},2602:function(e,s,i){i.r(s),i.d(s,{default:function(){return A}});var l=i(885),a=i(2791),t=i(7689),n=i(7167),r=i(831),d=i(1679),c=i(6056),o=i(7741),g=i(6517),u=i(7975),m=i(7205),p=i(184);var A=function(){var e=(0,a.useState)(""),s=(0,l.Z)(e,2),i=s[0],A=s[1],v=(0,a.useState)(""),h=(0,l.Z)(v,2),f=h[0],b=h[1],x=(0,a.useState)(""),j=(0,l.Z)(x,2),N=j[0],y=j[1],O=(0,a.useState)(""),S=(0,l.Z)(O,2),C=S[0],B=S[1],w=(0,a.useState)(""),E=(0,l.Z)(w,2),U=E[0],L=E[1],I=(0,a.useState)(null),R=(0,l.Z)(I,2),_=R[0],Q=R[1],Y=(0,a.useState)(""),V=(0,l.Z)(Y,2),X=V[0],F=V[1],D=(0,a.useState)(0),M=(0,l.Z)(D,2),J=M[0],P=M[1],Z=(0,a.useState)(0),G=(0,l.Z)(Z,2),k=G[0],H=G[1],K=(0,a.useState)(0),T=(0,l.Z)(K,2),q=T[0],W=T[1],z=(0,a.useState)(!1),$=(0,l.Z)(z,2),ee=$[0],se=$[1],ie=(0,a.useState)(0),le=(0,l.Z)(ie,2),ae=le[0],te=le[1],ne=(0,a.useState)(0),re=(0,l.Z)(ne,2),de=re[0],ce=re[1],oe=(0,a.useState)(0),ge=(0,l.Z)(oe,2),ue=ge[0],me=ge[1],pe=(0,a.useState)(0),Ae=(0,l.Z)(pe,2),ve=(Ae[0],Ae[1],(0,a.useState)(0)),he=(0,l.Z)(ve,2),fe=he[0],be=he[1],xe=(0,a.useState)(0),je=(0,l.Z)(xe,2),Ne=je[0],ye=je[1],Oe=(0,a.useState)(0),Se=(0,l.Z)(Oe,2),Ce=Se[0],Be=Se[1],we=(0,a.useState)(0),Ee=(0,l.Z)(we,2),Ue=Ee[0],Le=Ee[1],Ie=(0,t.UO)();return(0,a.useEffect)((function(){var e=Ie.followerRange.substring(Ie.followerRange.indexOf("=")+1).split("&")[1];e>1e3&&e<1e4?F("Nano"):e>1e4&&e<5e4?F("Micro"):e>5e4&&e<1e5?F("Mid-Tier"):e>1e5&&e<1e6?F("Macro"):e>1e6&&F("Mega"),X&&function(){if(Ie.budget.includes("budget")){var e=Ie.budget.substring(Ie.budget.indexOf("=")+1),s="http://localhost:4000/calculateBudget?followersRange=".concat(X,"&budget=").concat(e);fetch(s).then((function(e){e.json().then((function(e){Q(e),se(!0)}))}))}else if(Ie.budget.includes("creators")){var i=Ie.budget.substring(Ie.budget.indexOf("=")+1),l="http://localhost:4000/calculateBudget?followersRange=".concat(X,"&creatorsCount=").concat(i);fetch(l).then((function(e){e.json().then((function(e){Q(e),se(!0)}))}))}}()}),[X]),(0,a.useEffect)((function(){!function(){var e,s,i;!0===ee&&(e=Ie.deliverables.substring(Ie.deliverables.indexOf("l=")+2)[0]*_.reelBudget+Ie.deliverables.substring(Ie.deliverables.indexOf("t=")+2)[0]*_.postBudget+Ie.deliverables.substring(Ie.deliverables.indexOf("os=")+3)[0]*_.videoBudget+Ie.deliverables.substring(Ie.deliverables.indexOf("stories=")+8)[0]*_.storyBudget+Ie.deliverables.substring(Ie.deliverables.indexOf("swipeupStories=")+15)[0]*_.swipeUpBudget+Ie.deliverables.substring(Ie.deliverables.indexOf("v=")+2)[0]*_.igtvBudget,P(e),s=Ie.deliverables.substring(Ie.deliverables.indexOf("l=")+2)[0]*_.LikesCommentOfReel+Ie.deliverables.substring(Ie.deliverables.indexOf("t=")+2)[0]*_.LikesCommentOfPost+Ie.deliverables.substring(Ie.deliverables.indexOf("os=")+3)[0]*_.LikesCommentOfVideo+Ie.deliverables.substring(Ie.deliverables.indexOf("stories=")+8)[0]*_.LikesCommentOfStory+Ie.deliverables.substring(Ie.deliverables.indexOf("swipeupStories=")+15)[0]*_.LikesCommentOfSwipeup+Ie.deliverables.substring(Ie.deliverables.indexOf("v=")+2)[0]*_.LikesCommentOfIgtv,H(s),i=Ie.deliverables.substring(Ie.deliverables.indexOf("l=")+2)[0]*_.reachOfReel+Ie.deliverables.substring(Ie.deliverables.indexOf("t=")+2)[0]*_.reachOfPost+Ie.deliverables.substring(Ie.deliverables.indexOf("os=")+3)[0]*_.reachOfVideo+Ie.deliverables.substring(Ie.deliverables.indexOf("stories=")+8)[0]*_.reachOfStory+Ie.deliverables.substring(Ie.deliverables.indexOf("swipeupStories=")+15)[0]*_.reachOfSwipeup+Ie.deliverables.substring(Ie.deliverables.indexOf("v=")+2)[0]*_.reachOfIgtv,W(i))}(),Ie.budget.substring(Ie.budget.indexOf("=")+1)<1e4?Le(Math.floor(Ie.budget.substring(Ie.budget.indexOf("=")+1)/2e3)):Ie.budget.substring(Ie.budget.indexOf("=")+1)>1e4&&Ie.budget.substring(Ie.budget.indexOf("=")+1)<5e4?Le(Math.floor(Ie.budget.substring(Ie.budget.indexOf("=")+1)/7e3)):Ie.budget.substring(Ie.budget.indexOf("=")+1)>5e4&&Ie.budget.substring(Ie.budget.indexOf("=")+1)<1e5?Le(Math.floor(Ie.budget.substring(Ie.budget.indexOf("=")+1)/24500)):Ie.budget.substring(Ie.budget.indexOf("=")+1)>1e5&&Ie.budget.substring(Ie.budget.indexOf("=")+1)<1e6?Le(Math.floor(Ie.budget.substring(Ie.budget.indexOf("=")+1)/85750)):Ie.budget.substring(Ie.budget.indexOf("=")+1)>1e6&&Le(Math.floor(Ie.budget.substring(Ie.budget.indexOf("=")+1)/300125))}),[ee]),(0,a.useEffect)((function(){Ie.budget.includes("budget")&&Ie.deliverables&&Ie.demography?te(15):Ie.budget.includes("creators")&&Ie.deliverables&&Ie.demography&&te(10),function(){for(var e=0,s=Ie.deliverables.split("&"),i=0;i<s.length;i++)"0"!==s[i].substring(s[i].length-1)&&e++;6===e?ce(1):5===e?ce(2):4===e?ce(4):3===e?ce(6):2===e?ce(8):1===e?ce(10):0===e&&ce(0)}(),function(){var e=0;"none"===Ie.demography.substring(Ie.demography.indexOf("age")).split("=")[1].split("&")[0]?(me(0),"undefined"===Ie.demography.substring(Ie.demography.indexOf("gender")).split("=")[1].split("&")[0]?be(0):be(10)):"none"!==Ie.demography.substring(Ie.demography.indexOf("age")).split("=")[1].split("&")[0]&&(Ie.demography.substring(Ie.demography.indexOf("=")+1).split("&").forEach((function(s){s.includes("-")&&e++})),1===e?me(5):2===e?me(4):3===e?me(3):4===e?me(2):5===e&&me(1),"undefined"===Ie.demography.substring(Ie.demography.indexOf("gender")).split("=")[1].split("&")[0]?be(0):be(10))}(),Ie.demography.includes("category")&&("none"===Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&")[0]?ye(0):"none"!==Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&")[0]&&(Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1===1?ye(10):Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1===2?ye(9):Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1===3?ye(8):Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1===4?ye(7):Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1===5?ye(6):Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1===6?ye(5):Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1===7?ye(4):Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1===8?ye(3):Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1===9?ye(2):Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1>=10&&ye(1))),Be(ae+de+ue+fe+Ne)}),[de,ae+de+ue+fe+Ne]),(0,p.jsxs)("div",{className:"calculate_4_container row no-gutters",children:[(0,p.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-2 col-xs-2  col-3",children:(0,p.jsx)(n.Z,{})}),(0,p.jsxs)("div",{className:"middle_pane_calculate col-lg-10 col-sm-10 col-md-10 col-xs-10 col-9",children:[(0,p.jsx)(r.Z,{}),(0,p.jsxs)("div",{className:"middle_pane_content row no-gutters",children:[(0,p.jsxs)("div",{className:"steps_pane col-lg-3 col-md-3 col-sm-0 col-xs-0 col-0",children:[(0,p.jsxs)("div",{className:"steps_pane_part_inactive",style:{borderLeft:"solid 0.313rem #357AFF"},children:[(0,p.jsx)("div",{className:"steps_pane_title",children:"Step 1"}),(0,p.jsx)("div",{className:"followers_title",children:"Followers"}),(0,p.jsx)("div",{className:"followers_count",children:(0,d.Z)(Ie.followerRange.substring(Ie.followerRange.indexOf("=")+1).replace("&"," - "))}),(0,p.jsx)("div",{className:"budget_influencers_title",children:"Budget / Influencers"}),(0,p.jsx)("div",{className:"budget_influencers_value",children:Ie.budget.includes("budget")?"\u20b9"+Ie.budget.substring(Ie.budget.indexOf("=")+1):Ie.budget.substring(Ie.budget.indexOf("=")+1)+" Influencers"})]}),(0,p.jsxs)("div",{className:"steps_pane_part_inactive",style:{borderLeft:"solid 0.313rem #D04B4B"},children:[(0,p.jsx)("div",{className:"steps_pane_title",children:"Step 2"}),(0,p.jsxs)("div",{className:"deliverables",children:[(0,p.jsxs)("div",{className:"deliverables_pane",children:[(0,p.jsx)("div",{className:"deliverables_value",children:Ie.deliverables.substring(Ie.deliverables.indexOf("l=")+2)[0]}),(0,p.jsx)("div",{className:"deliverables_title",children:"Reels"})]}),(0,p.jsxs)("div",{className:"deliverables_pane",children:[(0,p.jsx)("div",{className:"deliverables_value",children:Ie.deliverables.substring(Ie.deliverables.indexOf("t=")+2)[0]}),(0,p.jsx)("div",{className:"deliverables_title",children:"Static posts"})]}),(0,p.jsxs)("div",{className:"deliverables_pane",children:[(0,p.jsx)("div",{className:"deliverables_value",children:Ie.deliverables.substring(Ie.deliverables.indexOf("os=")+3)[0]}),(0,p.jsx)("div",{className:"deliverables_title",children:"Videos"})]})]}),(0,p.jsxs)("div",{className:"deliverables",children:[(0,p.jsxs)("div",{className:"deliverables_pane",children:[(0,p.jsx)("div",{className:"deliverables_value",children:Ie.deliverables.substring(Ie.deliverables.indexOf("stories=")+8)[0]}),(0,p.jsx)("div",{className:"deliverables_title",children:"Stories"})]}),(0,p.jsxs)("div",{className:"deliverables_pane",children:[(0,p.jsx)("div",{className:"deliverables_value",children:Ie.deliverables.substring(Ie.deliverables.indexOf("swipeupStories=")+15)[0]}),(0,p.jsx)("div",{className:"deliverables_title",children:"Swipeup Stories"})]}),(0,p.jsxs)("div",{className:"deliverables_pane",children:[(0,p.jsx)("div",{className:"deliverables_value",children:Ie.deliverables.substring(Ie.deliverables.indexOf("v=")+2)[0]}),(0,p.jsx)("div",{className:"deliverables_title",children:"Igtv"})]})]})]}),(0,p.jsxs)("div",{className:"steps_pane_part_inactive",style:{borderLeft:"solid 0.313rem #32A737",paddingLeft:"2rem",paddingRight:"1rem",paddingTop:"1rem",paddingBottom:"0.25rem"},children:[(0,p.jsx)("div",{className:"steps_pane_title",children:"Step 3"}),(0,p.jsxs)("div",{className:"filter_pane",children:[(0,p.jsx)("img",{src:c}),(0,p.jsx)("div",{className:"filter_value",style:{fontSize:"0.75rem"},children:Ie.demography.includes("age")?"none"===Ie.demography.substring(Ie.demography.indexOf("age")).split("=")[1].split("&")[0]?"--":"undefined"===Ie.demography.substring(Ie.demography.indexOf("gender")).split("=")[1].split("&")[0]?Ie.demography.substring(Ie.demography.indexOf("age")).split("=")[1].split("&").length-1+"age group":Ie.demography.substring(Ie.demography.indexOf("age")).split("=")[1].split("&").length-1+"age group ,"+Ie.demography.substring(Ie.demography.indexOf("gender")).split("=")[1].split("&")[0]:null})]}),(0,p.jsxs)("div",{className:"filter_pane",children:[(0,p.jsx)("img",{src:o}),(0,p.jsx)("div",{className:"filter_value",children:Ie.demography.includes("category")?"none"===Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&")[0]?"--":Ie.demography.substring(Ie.demography.indexOf("category")).split("=")[1].split("&").length-1+" categories":null})]}),(0,p.jsxs)("div",{className:"filter_pane",children:[(0,p.jsx)("img",{src:g}),(0,p.jsx)("div",{className:"filter_value",children:" -- "})]})]}),(0,p.jsxs)("div",{className:"steps_pane_part",style:{borderLeft:"solid 0.313rem #7662DC"},children:[(0,p.jsx)("div",{className:"steps_pane_title",children:"Step 4"}),(0,p.jsx)("div",{className:"cost_title",children:"Estimated Cost"}),(0,p.jsx)("div",{className:"cost_value",children:Ie.budget.includes("budget")?"\u20b9"+Ie.budget.substring(Ie.budget.indexOf("=")+1):"\u20b9"+J})]})]}),(0,p.jsxs)("div",{className:"content_pane col-lg-6 col-md-9 col-sm-12 col-xs-12 col-12",children:[(0,p.jsx)("div",{className:"step_count",children:"STEP 4"}),(0,p.jsx)("div",{className:"step_title",children:"Estimate"}),(0,p.jsx)("div",{className:"content_title",children:"The estimated cost for influencer marketing as per selected parameters is"}),(0,p.jsxs)("div",{className:"estimated_field_pane",children:[(0,p.jsxs)("div",{className:"field_pane",style:{marginLeft:0},children:[(0,p.jsx)("div",{className:"field_label",children:"Est Cost"}),(0,p.jsx)("div",{className:"field_value",children:Ie.budget.includes("budget")?"\u20b9"+Ie.budget.substring(Ie.budget.indexOf("=")+1):"\u20b9"+(0,d.Z)(J)})]}),(0,p.jsxs)("div",{className:"field_pane",children:[(0,p.jsx)("div",{className:"field_label",children:"No of Creators"}),(0,p.jsx)("div",{className:"field_value",children:Ie.budget.includes("budget")?Ue:Ie.budget.substring(Ie.budget.indexOf("=")+1)})]})]}),(0,p.jsxs)("div",{className:"estimated_field_pane_2",children:[(0,p.jsxs)("div",{className:"field_pane_2",style:{marginLeft:0},children:[(0,p.jsx)("div",{className:"field_label",children:"Est Likes & Comment"}),(0,p.jsx)("div",{className:"field_value",children:(0,d.Z)(k)})]}),(0,p.jsxs)("div",{className:"field_pane_2",children:[(0,p.jsx)("div",{className:"field_label",children:"Est Views"}),(0,p.jsx)("div",{className:"field_value",children:(0,d.Z)(q)})]})]}),(0,p.jsx)("div",{className:"result_pane_2_title",children:"For a tailor-made solution as per your needs, call (+91) 98765 43210, or submit your details for a call later."}),(0,p.jsxs)("div",{className:"enquiry_form",children:[(0,p.jsxs)("div",{className:"name_pane",children:[(0,p.jsx)(u.II,{className:"enquiry_field",placeholder:"First Name",value:i,onChange:function(e){return A(e.target.value)}}),(0,p.jsx)(u.II,{className:"enquiry_field",style:{marginLeft:"0.25rem"},placeholder:"Last Name",value:f,onChange:function(e){b(e.target.value)}})]}),(0,p.jsx)("div",{className:"email_pane",children:(0,p.jsx)(u.II,{className:"enquiry_field_2",placeholder:"Email",value:N,onChange:function(e){y(e.target.value)}})}),(0,p.jsx)("div",{className:"mobile_pane",children:(0,p.jsx)(u.II,{className:"enquiry_field_2",placeholder:"Phone no",value:C,onChange:function(e){B(e.target.value)}})}),(0,p.jsx)("div",{className:"message_pane",children:(0,p.jsx)(u.II,{className:"enquiry_field_3",placeholder:"Message",value:U,onChange:function(e){L(e.target.value)}})})]}),(0,p.jsx)("div",{className:"bottom_title",children:"You can change the parameters to update your estimate"}),(0,p.jsx)("div",{children:(0,p.jsx)(m.Z,{onClick:function(){fetch("http://localhost:4000/submitQuery",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({firstName:i,lastName:f,email:N,phone:C,message:U,estimatedBudget:J,estimatedLikesComment:k,estimatedReach:q})}).then((function(e){e&&(console.log("done"),y(""),L(""),B(""),A(""),b(""))}))},children:"Submit"})})]}),(0,p.jsxs)("div",{className:"right_pane col-lg-3 col-md-0 col-sm-0 col-xs-0 col-0",children:[(0,p.jsx)("div",{className:"image_1"}),(0,p.jsx)("div",{className:"image_2"}),(0,p.jsx)("div",{children:Ce})]})]})]})]})}},6056:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgB7ZS/agJBEMYnJgQTQpoUSSAQ0pkmJHX6pAqY9OkCgbxAXsEnEC1UBGttfAcLFSxEfQAbS0VUsPFb9jtZj1N31SsEP/jd7c7szrCzf0Tc9A7eXCacOIy9A3G2W6BrMyki9nrh+AjbVnJJ0AFT0pGQdEFCU5pYy6VEGyn0BEe+/jX4AjEQFTdNQBuUQC8owQ34B+eynUYg4SUxL1qcwZsgDwbipkvwDZ7AJ0gpo7kHj/xvElw4p8B2zDOaK4gaA9VZV3vxTFsDFMGQ/WX+PvtnQQk8qTfnB9watldwD5Ls/3Gc6X8AGX8wc5P9F6i7IqCN/1d9jg3DB/+qDBWQE12uMaiLLsuV6LeoCrKiS6L8NdEHRPlPGafsS+j+DCzRQpz9fyqCTtEuyjRX6Cs4aK1mVhc0YVdB+DsAAAAASUVORK5CYII="},7741:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADsSURBVHgB7ZM9CsJAEIXHn8rCv8YDKKiN4FFSi7U3EI8gegGDlWDvLaxFhDS5gJaCVha+kYksi2uSAUElDz6SnXm7y87uEGWKUc4aj0HT4Q3BPKWP8lbSNYnVUvio6DCNrLGv9eXpw/r9DVx34FMyxfrsE4RvvKHC9wfSdjKrATzQlXEANuBoTrIvOWmH8uITUDJifdAGU3MTbSd7svgBrCQ2BD3JLSKjtg+isvDiZ2EtsY5p/NpODuTLZamAMhhYuYe0ncyvhS+Uaz4z4lfJPVWwJnJt6/Ra/Ey38n8BO1AFNXADe7AEJ8qURnc/hCgm3jIDewAAAABJRU5ErkJggg=="},6517:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHlSURBVHgB7ZXLK0VRFMaXdx4DMRCK8og8ixQmhiYYSMmIUsTI1F9gIvkPTBmgGCgUGZAkyXNESt6vgfcjvtX65NBx7rkyY9Wvvbt73/Wtu/a39xX5jwAR4mNPOqgAuSCBn12AbbAA9n4qEAWaQLnHvleKDIKHYAQ0eRfIAI9gDiyBQ64ngzJQBSLADuh3Ewn7RqAZFIJz0AcWwRV4ITrfBCvclyrWvhU/Alp1IyvvdVSdJHYWun5DrilUKXZWOr8MJFAL0sC0WFs0tBUtrDwGNLCAPYpEgywQCladycJdBLI5LjkqrwE9Yu7RmALdYk465t5qinyKUBeBeI7HHLXHy47kwrl+VvBlb7wfgReO3xnALd478exH4IxjOsc1UCofl0w4L+WaRhrH86/J3KpMFOtlpFgb1C3q71auaVvUZeNirtGoBylgXuxcPAVOxFyj3j4Qs6m6Rd0RB27BqCN5iZgJtD0D4D6QwB14AvmgmMlP+Ut2yQ335oE25hlxiHoKaOyw2kxWuC8fTnkPLaBT7KmYAWNuibycsg5ixc5DRbRdR1wrAh1MPiv22EmwAhobYg9ftkNEL167mDX1tg95JfDzf6ChLtGb6rwjk2A40Bf9XqYtsTuTw3FCzEm/HvoQ1smfijeuOWxObyP/WgAAAABJRU5ErkJggg=="},5051:function(e,s,i){e.exports=i.p+"static/media/logo.a18991a8711fa01aed76.png"}}]);
//# sourceMappingURL=602.40d1600f.chunk.js.map