(this.webpackJsonpfirst_project=this.webpackJsonpfirst_project||[]).push([[0],[,function(t,e,a){t.exports={container:"contactForm_container__23C-U",form:"contactForm_form__3qQP6",label:"contactForm_label__1O_H9",inputs:"contactForm_inputs__7u3iK",button:"contactForm_button__2dC66"}},,,,,function(t,e,a){t.exports={contactsCards:"contactListItem_contactsCards__3IdWJ",contactsCardsItems:"contactListItem_contactsCardsItems__3jNyN",button:"contactListItem_button__3R3ni"}},,,,,,,function(t,e,a){t.exports={Container:"notification_Container__1BqyT",Message:"notification_Message__20wZ2"}},,,,,,function(t,e,a){t.exports=a(30)},,,,,function(t,e,a){},,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(4),r=a.n(o),s=a(17),i=a(7),l=a(8),m=a(11),u=a(10),f=a(32),h=a(33),d=a(6),b=a.n(d);function p(t){var e=t.text,a=t.number,n=t.onRemove;return c.a.createElement("li",{className:b.a.contactsCards},c.a.createElement("p",{className:b.a.contactsCardsItems},e,":"),c.a.createElement("p",{className:b.a.contactsCardsItems},a),c.a.createElement("button",{className:b.a.button,type:"button",onClick:n},"x"))}var C=a(34),v=(a(24),function(t){t.showContactListItem;var e=t.contacts,a=t.onRemoveContact;return c.a.createElement(C.a,{component:"ul",className:"ContactList"},e.map((function(t){var e=t.id,n=t.text,o=t.number;return c.a.createElement(f.a,{key:e,timeout:250,classNames:"TaskListSlide"},c.a.createElement(p,{key:e,text:n,number:o,onRemove:function(){return a(e)}}))})))}),E=a(16),N=a(1),_=a.n(N),g=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(E.a)({},n,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return c.a.createElement("div",{className:_.a.container},c.a.createElement("form",{className:_.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:_.a.label},"Name",c.a.createElement("input",{className:_.a.inputs,type:"text",value:e,onChange:this.handleChange,name:"name",placeholder:"name",required:!0})),c.a.createElement("label",{className:_.a.label},"Tel.number",c.a.createElement("input",{className:_.a.inputs,type:"number",value:a,onChange:this.handleChange,name:"number",placeholder:"number",required:!0})),c.a.createElement("button",{className:_.a.button,type:"submit"},"Add contact")))}}]),a}(n.Component);a(27);function w(t){var e=t.value,a=t.changeFilter;return c.a.createElement("div",{className:"Container"},c.a.createElement("input",{className:"FilterInput",type:"text",value:e,onChange:function(t){return a(t.target.value)}}))}var y=a(13),x=a.n(y),I=function(t){var e=t.name;return c.a.createElement("div",{className:x.a.Container},c.a.createElement("p",{className:x.a.Message},"".concat(e," is already in contacts")))};a(28);function O(){return c.a.createElement(f.a,{in:!0,appear:!0,timeout:500,classNames:"TitleSlide",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement("h1",{className:"Title"},"Phonebook")))}function S(t,e){return e.find((function(e){return e.text===t.text}))}a(29);var L=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",sameName:null,showNotification:!1,showContactList:!1,showContactListItem:!1},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,a=e.contacts,n=e.filter;return a.filter((function(t){return t.text.toLowerCase().includes(n.toLowerCase())}))},t.handleAddContact=function(e,a){var n={id:Object(h.a)(),text:e,number:a},c=S(n,t.state.contacts);c?t.setState((function(){return{sameName:c.text,showNotification:!0}})):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n]),showContactListItem:!0}}))},t.handlerRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t),showContactList:!0})}},{key:"componentDidUpdate",value:function(t,e){var a,n=this;e.contacts!==this.state.conacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),e.showNotification!==this.state.showNotification?a=setTimeout((function(){return n.setState((function(){return{showNotification:!1}}))}),3e3):clearTimeout(a)}},{key:"render",value:function(){var t=this.state,e=t.contacts,a=t.filter,n=t.sameName,o=t.showNotification,r=t.showContactList,s=t.showContactListItem,i=this.getVisibleContacts();return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null),c.a.createElement(g,{onAddContact:this.handleAddContact}),c.a.createElement(f.a,{in:o,timeout:1e3,classNames:"Fade",unmountOnExit:!0},c.a.createElement(I,{name:n})),c.a.createElement("h2",{className:"Contacts"},"Contacts"),c.a.createElement(f.a,{in:e.length>1,timeout:1e3,classNames:"Fade",unmountOnExit:!0},c.a.createElement(w,{value:a,changeFilter:this.changeFilter})),c.a.createElement(f.a,{in:r,timeout:500,classNames:"SlideIn",unmountOnExit:!0},c.a.createElement(v,{showContactListItem:s,contacts:i,onRemoveContact:this.handlerRemoveContact})))}}]),a}(n.Component);r.a.render(c.a.createElement(L,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.3a8594c7.chunk.js.map