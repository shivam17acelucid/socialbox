"use strict";(self.webpackChunktesting=self.webpackChunktesting||[]).push([[724],{3504:function(e,l,s){s.r(l),s.d(l,{default:function(){return N}});var t=s(885),i=s(2791),c=s(7167),n=s(7689),o=s(1680),r=s(9773),d=s(4390),a=s(9963),m=s(9827),h=s(807),x=s(6650),u=s(7205),v=s(1679),g=s(6856),j=s(7975),A=s(831),f=s(1862),b=s(4555),p=s(1888),w=s(8618),C=s(6831),_=(s(9462),s(184));var N=function(){var e=(0,i.useState)([]),l=(0,t.Z)(e,2),s=l[0],N=l[1],y=(0,i.useState)([]),Z=(0,t.Z)(y,2),R=(Z[0],Z[1]),S=(0,i.useState)(!1),B=(0,t.Z)(S,2),I=B[0],k=B[1],T=(0,i.useState)(!1),F=(0,t.Z)(T,2),E=F[0],G=F[1],V=(0,i.useState)(!1),L=(0,t.Z)(V,2),U=L[0],O=L[1],D=(0,i.useState)(0),H=(0,t.Z)(D,2),Y=H[0],Q=H[1],X=(0,i.useState)(0),q=(0,t.Z)(X,2),z=q[0],K=q[1],P=(0,i.useState)(0),W=(0,t.Z)(P,2),J=W[0],M=W[1],$=(0,i.useState)(0),ee=(0,t.Z)($,2),le=ee[0],se=ee[1],te=(0,i.useState)(0),ie=(0,t.Z)(te,2),ce=ie[0],ne=ie[1],oe=(0,i.useState)(0),re=(0,t.Z)(oe,2),de=re[0],ae=re[1],me=(0,i.useState)(""),he=(0,t.Z)(me,2),xe=he[0],ue=he[1],ve=(0,i.useState)(""),ge=(0,t.Z)(ve,2),je=ge[0],Ae=ge[1],fe=(0,i.useState)(!0),be=(0,t.Z)(fe,2),pe=be[0],we=be[1],Ce=(0,i.useState)(!1),_e=(0,t.Z)(Ce,2),Ne=_e[0],ye=_e[1],Ze=(0,i.useState)(!1),Re=(0,t.Z)(Ze,2),Se=Re[0],Be=Re[1],Ie=(0,i.useState)([]),ke=(0,t.Z)(Ie,2),Te=ke[0],Fe=ke[1],Ee=(0,i.useState)(!1),Ge=(0,t.Z)(Ee,2),Ve=(Ge[0],Ge[1]),Le=(0,i.useState)(!1),Ue=(0,t.Z)(Le,2),Oe=Ue[0],De=Ue[1],He=(0,n.UO)().listname,Ye=localStorage.getItem("id"),Qe=(0,n.s0)(),Xe=function(e){Qe("/profile/".concat(e.username))},qe=function(){O((function(e){return!e}))},ze=function(){var e="http://13.234.29.72:4000/showInfluencersList/".concat(Ye,"?list=").concat(He);fetch(e).then((function(e){return e.json()})).then((function(e){N(e)}))},Ke=function(){fetch("http://13.234.29.72:4000/showCategorizedBasket").then((function(e){return e.json()})).then((function(e){Fe(e)}))};return(0,i.useEffect)((function(){ze(),Ke()}),[]),(0,i.useEffect)((function(){ze(),Ke()}),[He]),(0,i.useEffect)((function(){ze()}),[I,Oe]),(0,i.useEffect)((function(){He=je,ze()}),[E]),(0,_.jsxs)("div",{className:"users_list_container row no-gutters",children:[(0,_.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-2 col-xs-2  col-3",children:(0,_.jsx)(c.Z,{})}),(0,_.jsxs)("div",{className:"users_list_pane col-lg-10 col-sm-10 col-md-10 col-xs-10 col-9",children:[(0,_.jsx)(A.Z,{}),(0,_.jsxs)("div",{className:"row no-gutters",children:[s.map((function(e){return(0,_.jsxs)("div",{className:"col-lg-9 col-md-8 col-sm-8 col-xs-8 col-8",children:[(0,_.jsxs)("div",{className:"user_list_header row",children:[(0,_.jsxs)("div",{className:"list_count col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:[(0,_.jsxs)("div",{className:"row no-gutters",children:[(0,_.jsx)("div",{className:"list_name col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",children:e.item.listName}),(0,_.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",children:(0,_.jsx)(u.Z,{onClick:qe,children:"Edit"})})]}),(0,_.jsx)("div",{className:"list_desc pl-1 pr-1",children:e.item.description})]}),(0,_.jsxs)("div",{className:"deliverables_count col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:[(0,_.jsxs)("div",{className:"row",children:[(0,_.jsxs)("div",{className:"deliverables_fields_value col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4",children:[e.item.deliverables[0].reel,(0,_.jsx)("span",{children:"Reels"})]}),(0,_.jsxs)("div",{className:"deliverables_fields_value col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4",children:[e.item.deliverables[1].post,(0,_.jsx)("span",{children:"Posts"})]}),(0,_.jsxs)("div",{className:"deliverables_fields_value col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4",children:[e.item.deliverables[2].story,(0,_.jsx)("span",{children:"Stories"})]}),(0,_.jsxs)("div",{className:"deliverables_fields_value col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4",children:[e.item.deliverables[3].igtv,(0,_.jsx)("span",{children:"Igtv"})]}),(0,_.jsxs)("div",{className:"deliverables_fields_value col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4",children:[e.item.deliverables[4].swipeup,(0,_.jsx)("span",{children:"Swipeup Stories"})]}),(0,_.jsxs)("div",{className:"deliverables_fields_value col-lg-2 col-md-4 col-sm-4 col-xs-4 col-4",children:[e.item.deliverables[5].video,(0,_.jsx)("span",{children:"Videos"})]})]}),!0===U?(0,_.jsx)("div",{className:"overlay",children:(0,_.jsxs)("div",{className:"addList_section",children:[(0,_.jsx)(j.__,{children:" Edit List"}),(0,_.jsx)(j.II,{type:"text",placeholder:"List Name",defaultValue:e.item.listName,onChange:function(e){Ae(e.target.value)},className:"input_listname"}),(0,_.jsx)(j.II,{type:"text",placeholder:"Description",value:xe,onChange:function(e){ue(e.target.value)},className:"input_description"}),(0,_.jsx)(j.__,{style:{marginTop:"0.75rem"},children:"Deliverables"}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:"deliverables_pane_align",children:[(0,_.jsxs)("div",{className:"deliverables_box",children:[(0,_.jsx)("div",{style:{width:"2.25rem"},children:"Reels"}),(0,_.jsxs)("div",{className:"deliverables_value",children:[0===Y?(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){Q(Y-1)},children:"-"}),(0,_.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:Y}),(0,_.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){Q(Y+1)},children:"+"})]})]}),(0,_.jsxs)("div",{className:"deliverables_box",children:[(0,_.jsx)("div",{style:{width:"2.25rem"},children:"Static Posts"}),(0,_.jsxs)("div",{className:"deliverables_value",children:[0===z?(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){K(z-1)},children:"-"}),(0,_.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:z}),(0,_.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){K(z+1)},children:"+"})]})]})]}),(0,_.jsxs)("div",{className:"deliverables_pane_align",children:[(0,_.jsxs)("div",{className:"deliverables_box",children:[(0,_.jsx)("div",{style:{width:"2.25rem"},children:"Videos"}),(0,_.jsxs)("div",{className:"deliverables_value",children:[0===de?(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){return ae(de-1)},children:"-"}),(0,_.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:de}),(0,_.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){return ae(de+1)},children:"+"})]})]}),(0,_.jsxs)("div",{className:"deliverables_box",children:[(0,_.jsx)("div",{style:{width:"2.25rem"},children:"Stories"}),(0,_.jsxs)("div",{className:"deliverables_value",children:[0===J?(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){M(J-1)},children:"-"}),(0,_.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:J}),(0,_.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){M(J+1)},children:"+"})]})]})]}),(0,_.jsxs)("div",{className:"deliverables_pane_align",children:[(0,_.jsxs)("div",{className:"deliverables_box",children:[(0,_.jsx)("div",{style:{width:"2.25rem"},children:"Swipeup Story"}),(0,_.jsxs)("div",{className:"deliverables_value",children:[0===ce?(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){return ne(ce-1)},children:"-"}),(0,_.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:ce}),(0,_.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){return ne(ce+1)},children:"+"})]})]}),(0,_.jsxs)("div",{className:"deliverables_box",children:[(0,_.jsx)("div",{style:{width:"2.25rem"},children:"Igtv"}),(0,_.jsxs)("div",{className:"deliverables_value",children:[0===le?(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},children:"-"}):(0,_.jsx)("div",{style:{borderRight:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){se(le-1)},children:"-"}),(0,_.jsx)("div",{style:{width:"5rem",textAlign:"center"},children:le}),(0,_.jsx)("div",{style:{borderLeft:"0.063rem solid RGB(0, 0, 0, 0.5)",width:"2.625rem",textAlign:"center"},onClick:function(){se(le+1)},children:"+"})]})]})]})]}),(0,_.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[(0,_.jsx)(u.Z,{onClick:function(){!function(e,l,s,t,i,c,n){var o=i,r="http://13.234.29.72:4000/editDeliverables/".concat(Ye,"?listName=").concat(He);fetch(r,{method:"POST",body:JSON.stringify({reel:e,post:l,story:s,igtv:t,swipeup:c,video:n,description:xe,newListName:o}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(i){G(!0),qe(),Qe("/userLists/".concat(o)),ue(""),Q(e),K(l),M(s),se(t)}))}(Y,z,J,le,je,ce,de)},className:"update_btn",children:"Update"}),(0,_.jsx)(u.Z,{onClick:qe,children:"Cancel"})]})]})}):null]})]}),(0,_.jsx)("div",{className:"table_content",children:(0,_.jsx)(a.Z,{component:x.Z,children:(0,_.jsxs)(o.Z,{className:"table_container",children:[(0,_.jsx)(m.Z,{children:(0,_.jsxs)(h.Z,{children:[(0,_.jsx)(d.Z,{children:"Name"}),(0,_.jsx)(d.Z,{align:"center",children:"Category"}),(0,_.jsx)(d.Z,{align:"center",children:"Followers"}),(0,_.jsx)(d.Z,{align:"center",children:"Engagement"}),(0,_.jsx)(d.Z,{align:"center",children:"Avg Likes"}),(0,_.jsx)(d.Z,{align:"center",children:"Avg Comments"}),(0,_.jsx)(d.Z,{align:"center",children:"Avg Reach"}),(0,_.jsx)(d.Z,{align:"center",children:"Cost"}),(0,_.jsx)(d.Z,{align:"center"})]})}),(0,_.jsx)(r.Z,{children:e.item.influencersData.map((function(l,s){return(0,_.jsxs)(h.Z,{children:[(0,_.jsx)(d.Z,{component:"th",scope:"row",onClick:function(){return Xe(l)},children:(0,_.jsx)("div",{children:l.full_name})},l.username),(0,_.jsx)(d.Z,{align:"center",children:null!==l.category_enum?l.category_enum.length>10?l.category_enum.substring(0,15)+"...":l.category_enum:null}),(0,_.jsx)(d.Z,{align:"center",children:(0,v.Z)(l.edge_followed_by.count)}),(0,_.jsx)(d.Z,{align:"center",children:(0,v.Z)(l.edge_owner_to_timeline_media.edges[0].er)}),(0,_.jsx)(d.Z,{align:"center",children:(0,v.Z)(l.edge_owner_to_timeline_media.edges[0].avg_likes)}),(0,_.jsx)(d.Z,{align:"center",children:(0,v.Z)(l.edge_owner_to_timeline_media.edges[0].avg_comment)}),(0,_.jsx)(d.Z,{align:"center",children:(0,v.Z)(l.edge_felix_video_timeline.edges[0].averageReelView)}),(0,_.jsx)(d.Z,{align:"center",children:(0,v.Z)((l.costFactorReel.minTotalCost||l.costFactorReel.minTotalCost?l.costFactorReel.minTotalCost*e.item.deliverables[0].reel:l.costFactorReel.influencerExactminTotalCost*e.item.deliverables[0].reel)+(l.costFactorPosts.minTotalCost||l.costFactorPosts.minTotalCost?l.costFactorPosts.minTotalCost*e.item.deliverables[1].post:l.costFactorPosts.influencerExactminTotalCost*e.item.deliverables[1].post)+(l.costFactorStories.minTotalCost||l.costFactorStories.minTotalCost?l.costFactorStories.minTotalCost*e.item.deliverables[2].story:l.costFactorStories.influencerExactminTotalCost*e.item.deliverables[2].story)+(l.costFactorIgtv.minTotalCost||l.costFactorIgtv.minTotalCost?l.costFactorIgtv.minTotalCost*e.item.deliverables[3].igtv:l.costFactorIgtv.influencerExactminTotalCost*e.item.deliverables[3].igtv)+(l.costFactorSwipeUp.minTotalCost||l.costFactorSwipeUp.minTotalCost?l.costFactorSwipeUp.minTotalCost*e.item.deliverables[4].swipeup:l.costFactorSwipeup.influencerExactminTotalCost*e.item.deliverables[4].swipeup)+(l.costFactorVideo.minTotalCost||l.costFactorVideo.minTotalCost?l.costFactorVideo.minTotalCost*e.item.deliverables[5].video:l.costFactorVideo.influencerExactminTotalCost*e.item.deliverables[5].video))}),(0,_.jsx)(d.Z,{children:(0,_.jsx)(g.ZkW,{onClick:function(){!function(e){var l="http://13.234.29.72:4000/deleteInfluencersFromList/".concat(Ye);fetch(l,{method:"PUT",body:JSON.stringify({listname:He,username:e.username}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){R(e),k((function(e){return!e}))}))}(l)}})})]},s)}))})]})})})]})})),(0,_.jsxs)("div",{className:"right_pane col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4",children:[(0,_.jsxs)("div",{className:"icons_pane",children:[!0===pe?(0,_.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzSURBVHgB7VZdDoIwDF4Nic9eAbgFcBQ8gvrGHTyGXmXeAjiCPvs0vybMLEDWCf4kxC8ZrN3aj61tCikBaZqujTFHjJKINqzD/Ib5CaOq6/rus48kAnaO1w7OnrqOaI81Fg8++5WSCcpumjdNQzygK7q1rWQvEthrgeOL1bVtq901rz0/4jjW2JypNwKn0/iQwp7AqA+B+ookSWaRcYxcWYzBXPycILcpGSgP4C00m5qIS5A8huXH4E+wAAJvHSC/MxQShcovEwDa7WQB8gCDK+J+qyYCtleRgJu5mgjYnvu6aGRTxc2c+21IS2S4fxnq23gALV5zWcRHVuAAAAAASUVORK5CYII=",onClick:function(){we(!1)}}):(0,_.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgB7ZVLDoIwEECn4GdrIDEsIcSde+MlOIaH8hZyCBO9gIlAIDExuGLdRdGpgYQgactH3fCS0plp2um0U4aAHN113Q32K2zzwkaxBVEUnbBnwskgARffYrfGNqmYubw0DGOWZdlNNH8CcvjOIc/zQxzHDy7btm3puu4VY0fRZA3kvI+lXJyTJElaHRNB+MdxHE/TNAsGBCNOcVO+SgS9IHUDXuoOeoCZta/qX4/gvw54ajLGfFW9CeE7KFMT70VJbx3BEIwORgf9Eb4D/t9vo7d2UBQVZb2JpiOi0B2q4iCAjhBCrnXbR9HHIn43TXOK4gLUajaH4uKXMAzPKD/hl7wAIVVaT2qaU9cAAAAASUVORK5CYII=",onClick:function(){we(!0),Be(!1),ye(!1)}}),!1===Ne?(0,_.jsx)("img",{src:b,onClick:function(){ye(!0),Be(!1),we(!1)}}):(0,_.jsx)("img",{src:p,onClick:function(){ye(!1)}}),!1===Se?(0,_.jsx)("img",{src:f,onClick:function(){Be(!0),ye(!1),we(!1)}}):(0,_.jsx)("img",{src:w,onClick:function(){Be(!1)}})]}),!0===pe?(0,_.jsxs)("div",{className:"row justify-content-center",style:{paddingBottom:"2rem"},children:[(0,_.jsx)("div",{className:"delete_header col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:"Recently Deleted"}),(0,_.jsx)("div",{className:"delete_content col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:"Deleted influencers will be retained for 30 days in the bin. After 30 days they will be permanently deleted."}),(0,_.jsx)("div",{className:"col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8",children:(0,_.jsx)("div",{className:"row  justify-content-center",children:s.map((function(e){return e.item.deletedInfluencers.map((function(e){return(0,_.jsxs)("div",{className:"deleted_box col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:[(0,_.jsx)("div",{className:"row",children:(0,_.jsx)("div",{className:"box_name col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 pl-0 pr-0",children:e.full_name})}),(0,_.jsxs)("div",{className:"row",children:[(0,_.jsx)("div",{className:"view_box col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",onClick:function(){return Xe(e)},children:"View"}),(0,_.jsx)("div",{className:"view_box col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12",onClick:function(){return function(e){var l="http://13.234.29.72:4000/addInfluencersToList/".concat(Ye,"?list=").concat(He,"&username=").concat(e.username);fetch(l,{method:"POST"}).then((function(e){e.json()})).then((function(e){De(!Oe)}))}(e)},style:{marginLeft:"0.1rem"},children:"Restore"})]})]})}))}))})})]}):!0===Ne?(0,_.jsx)(C.Z,{}):!0===Se?(0,_.jsxs)("div",{style:{padding:"1rem"},children:[(0,_.jsx)("div",{className:"sidebar_header",children:"Top Bundles"}),Te.map((function(e){return(0,_.jsxs)("div",{className:"bundle_box row no-gutters",children:[(0,_.jsx)("div",{className:"col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12",style:{overflow:"hidden"},children:(0,_.jsx)("img",{src:"http://13.234.29.72:4000/uploads/".concat(e.image),className:"influencers_image"})}),(0,_.jsxs)("div",{className:"bundle_desc col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12",children:[(0,_.jsxs)("div",{className:"bundle_title col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 pl-0 pr-0",children:["Top ",e.basketInfluencersCount," ",e.categoryName," Influencers"]}),(0,_.jsx)("div",{className:"bundle_btn col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 pl-0 pr-0",onClick:function(){!function(e){Ve((function(e){return!e})),Qe("/basketInfluencers/".concat(e.categoryName))}(e)},children:"View"})]})]})}))]}):null]})]})]})]})}}}]);
//# sourceMappingURL=724.6ee4c77f.chunk.js.map