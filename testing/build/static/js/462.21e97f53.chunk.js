"use strict";(self.webpackChunkinflyu=self.webpackChunkinflyu||[]).push([[462],{4462:function(l,s,e){e.r(s),e.d(s,{default:function(){return m}});var c=e(885),o=e(2791),a=e(9666),n=e(9476),i=e(7205),t=e(8522),r=e(7689),d=e(184);var m=function(){var l=(0,o.useState)(""),s=(0,c.Z)(l,2),e=s[0],m=s[1],u=(0,o.useState)(""),g=(0,c.Z)(u,2),h=g[0],x=g[1],p=(0,o.useState)(""),A=(0,c.Z)(p,2),f=A[0],v=A[1],N=(0,o.useState)(""),y=(0,c.Z)(N,2),j=y[0],b=y[1],I=(0,o.useState)(""),w=(0,c.Z)(I,2),C=w[0],S=w[1],Z=(0,r.s0)();return(0,d.jsxs)("div",{className:"signup_container row",children:[(0,d.jsxs)("div",{className:"left_pane col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6",children:[(0,d.jsx)("div",{className:"row justify-content-center",children:(0,d.jsx)("div",{className:"col-lg-3 col-md-5 col-sm-7 col-xs-7 col-7",style:{display:"flex",justifyContent:"center"},children:(0,d.jsx)("img",{src:a,className:"social_logo"})})}),(0,d.jsxs)("div",{className:"signup_form row",children:[(0,d.jsx)("div",{className:"signup_header col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:"Sign up"}),(0,d.jsx)("div",{className:"signup_title col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:"Let's Get Started with your free trial"})]}),(0,d.jsxs)("div",{className:"input_boxes row no-gutters",children:[(0,d.jsx)(n.II,{className:"registeration_fields col-lg-6 col-md-10 col-sm-6 col-xs-6",placeholder:"Name",value:e,onChange:function(l){m(l.target.value)}}),(0,d.jsx)(n.II,{className:"registeration_fields col-lg-6 col-md-10 col-sm-6 col-xs-6",placeholder:"Email",value:h,onChange:function(l){x(l.target.value)}}),(0,d.jsx)(n.II,{className:"registeration_fields col-lg-6 col-md-10 col-sm-6 col-xs-6",placeholder:"Mobile (optional)",value:j,onChange:function(l){b(l.target.value)}}),(0,d.jsx)(n.II,{className:"registeration_fields col-lg-6 col-md-10 col-sm-6 col-xs-6",placeholder:"Company (optional)",value:C,onChange:function(l){S(l.target.value)}}),(0,d.jsx)(n.II,{className:"registeration_fields col-lg-6 col-md-10 col-sm-6 col-xs-6",placeholder:"Password",value:f,onChange:function(l){v(l.target.value)}}),(0,d.jsx)(i.Z,{onClick:function(){fetch("http://13.234.125.76:4000/signup",{method:"POST",body:JSON.stringify({name:e,email:h,password:f,company:C,mobile:j}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(l){return l.json()})).then((function(l){var s=l.errors;s?console.log(s):Z("/")}))},className:"signup_btn",children:"Sign up"})]}),(0,d.jsxs)("div",{className:"login_link col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:["Already have an Account? ",(0,d.jsx)("span",{onClick:function(){Z("/")},style:{cursor:"pointer"},children:"Log in"})]}),(0,d.jsxs)("div",{className:"social_login_btn col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:[(0,d.jsx)("img",{src:t,height:"0.875rem"}),(0,d.jsx)("span",{style:{marginLeft:"0.75rem"},children:"Log in with Google"})]}),(0,d.jsx)("div",{className:"signup_footer col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12",children:"\xa9\ufe0e 2022 Inflyu. All rights reserved  |  Privacy policy"})]}),(0,d.jsx)("div",{className:"right_pane col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6",children:(0,d.jsxs)("div",{className:"right_pane_text",children:["Get a brand ambassador",(0,d.jsx)("span",{style:{display:"block"},children:"to endorse your product."}),(0,d.jsx)("span",{style:{display:"block"},children:"Drive sales through"}),(0,d.jsx)("span",{style:{display:"block"},children:"content creators."})]})})]})}},8522:function(l){l.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANYSURBVHgBrZVbbExbGMf/39p7t02rNT3VhnPSc+ocdQSJKUWCNFNCkJKoqCCRRkLEJTwQIkgfXB5IxAvxIIS4ZQTpA0JbVdemqkhcWoKIpIqaNjM6087e67M6NTWje1qX/h9m9vqv9f2+/a3bJvSiVy6nI0WPLzSlLCDCKGX9BeZEBjWTwGNifgFJx9Ov1VyPxaBY4AEibh1IrlcwB/oQAw91xqq0iprbfSZoys8ZA6G7VUc2flaMHRkVNdsiLRENz50shFb5S/AuLWiclZMeaXRX0OhyZum6Uc2MDLtINbAFxPWq34+uaXMi+u3r24IyP+tGbWOkrYfjhaaXxoA/hOQtSPbeSC+t94bNd9Ny/1XUdYJprQpvsIN3V+BZPWxZ8FnqYRv4UV0t9B9lta2IofdTx+cp+HM7eHeCjqtGQ8f9Qdn+60PA7VpXxcxXDuYVzCopKZH4DVGwXM8DU2gfW554+E79B26NazUtzTmk8u5r/KYELIwPN7TUdiQXNyB+bPP5/oB3Slcp8qMyJpowZrw5gT32AdN2+a6pzeDCD4lPdp6DpB5ZBdrQH2IaLGx9UAD9wVcTIhSs6fsOwfJv9IPUFpW6uhEfgGhh2PRKAwfbRswE7l+wC5JMx0nKW9/7rFEWMZZEZ6B64nJjgsmo7mw/NwdiizcXb2VSi/VZDK9b5v6AH9TUnb4j6q84yhSiqOuglRkPLgYyx+z/PBpeNr5m58tDSStwF7mtvuCu3Z4ssvRHRJQc6ctgcGjo2PoLJ/KxtuEFHdAi6xvWwsh0FI0q/+B+0hELPmmH5x8DcRXqgzQ40meii5XbUg6EKhh3aIVBA5vL1GOeDeOVJGwO0NMLT4q+JZpwbmmaDPrWaP6R6xObljvITIsKMi0aW7U9qa77unaenZ+tmVxNoFS7N1VbzqcG3/vaTFdb5H9lhm5jYQ5CQtNK6IHs8OC9FVsHbAzNQyRk3MkFUyCs0lhJehVrSPg0D4ZnzuVAs6fwzr5Mfyh55Jjaxe6blkUTGfwaPyuyEEhzn05IqVoYhveoICzX+WKHr927Qd05y9XiZfQJZ7xUP5vuLTp3tkfe3uJyTs39U7AxHRovIqYMtQ4jFcxQdX8k8Fv1XAepnWlx+KpezL7Ubsf4ArgGRn1yTXpfAAAAAElFTkSuQmCC"},9666:function(l,s,e){l.exports=e.p+"static/media/inflyu1.d09cbc8d2ecdc3873ea1.png"}}]);
//# sourceMappingURL=462.21e97f53.chunk.js.map