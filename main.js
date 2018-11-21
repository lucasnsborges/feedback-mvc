!function(e){var t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t){e.exports=hyperHTML},function(e,t,a){e.exports={container:"header-container",content:"header-content","logo-img":"header-logo-img","menu-items":"header-menu-items",active:"header-active"}},function(e,t,a){e.exports={content:"app-content",feed:"app-feed",idea:"app-idea","button-idea":"app-button-idea","make-suggestion":"app-make-suggestion"}},function(e,t,a){e.exports={container:"card-container",votes:"card-votes","votes-container":"card-votes-container","votes-count":"card-votes-count",content:"card-content",title:"card-title",status:"card-status",description:"card-description",more:"card-more","more-button":"card-more-button","more-visible":"card-more-visible"}},function(e,t,a){"use strict";a.r(t);var o=a(0);var r={get:()=>JSON.parse(localStorage.getItem("app-todos")||"[]"),set:function(e,t,a){let o;return function(...r){const n=this,i=a&&!o;clearTimeout(o),o=setTimeout(function(){o=null,a||e.apply(n,r)},t),i&&e.apply(n,r)}}(e=>localStorage.setItem("app-todos",JSON.stringify(e)),1e3)};var n=class{constructor(e){const{title:t,description:a}=e;this.title=t||"",this.description=a||"",this.status="new",this.votes=[],this.uid=uid||(new Date).toJSON().replace(/[^\w]/g,""),this.link=`/${this.uid}`}};var i=new class{get hash(){const e=(location.hash.match(/\w+/g)||[])[0];return"completed"!==e&&"active"!==e?"all":e}get newIdeas(){return this.filter("new")}get inProgress(){return this.filter("inprogress")}init(e){this.ideas=r.get().map(e=>new n(e)),this.update=(()=>{e(this.filtered),r.set(this.ideas)}),window.onhashchange=this.update}add(e,t){this.ideas.push(new n({title:e,description:t})),this.update()}},d=[{id:860,title:"Permitir que os usuários baixem imagens do projeto quando visualizarem o protótipo",text:"Adicione um botão de download ao protótipo que permite capturar a imagem em diferentes resoluções",order:null,voteCount:12,categoryId:null,createdAt:"2017-10-23T14:11:55.000Z",updatedAt:"2017-10-23T14:15:01.000Z",voted:0,IdeaStatus:{id:15,name:"Nova",description:null,icon:"💡",color:"#D91B35",order:0,changelog:!1,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15}},{id:449,title:"Animar cabeçalhos e rodapés fixos",text:"A capacidade de animar cabeçalhos e rodapés na rolagem, como minimizar",order:null,voteCount:57,categoryId:null,createdAt:"2017-08-06T20:57:54.000Z",updatedAt:"2018-09-23T18:20:56.000Z",voted:0,IdeaStatus:{id:15,name:"Nova",description:null,icon:"💡",color:"#D91B35",order:0,changelog:!1,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15}},{id:417,title:"Permitir que as camadas sejam roláveis",text:"Crie uma maneira de as camadas poderem rolar para dentro do container da camada",order:null,voteCount:89,categoryId:null,createdAt:"2017-07-31T13:08:36.000Z",updatedAt:"2018-01-25T13:48:25.000Z",voted:0,IdeaStatus:{id:525,name:"Implementado",description:null,icon:"🚀",color:"#71D100",order:3,changelog:!0,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15},IdeaStatusText:{id:145,text:"Hi everyone,\n\nWe're happy to say that scrolling layer support is now LIVE!\n\nA Nova option 'Allow layer to scroll' is available when you select layers!\n\nFeedback? Let us know!",notifyUsers:!0,createdAt:"2018-01-25T13:48:24.000Z",updatedAt:"2018-01-25T13:48:24.000Z",deletedAt:null,agentId:58,ideaId:417,statusId:525,integrationId:null}},{id:452,title:"Definir um cabeçalho / rodapé fixo em várias telas",text:"Isso permitiria que a mesma altura fixa de cabeçalho / rodapé fosse aplicada em várias telas de uma vez, portanto, você só precisa defini-lo uma vez",order:null,voteCount:168,categoryId:null,createdAt:"2017-08-06T21:34:06.000Z",updatedAt:"2018-10-20T15:53:38.000Z",voted:0,IdeaStatus:{id:15,name:"Nova",description:null,icon:"💡",color:"#D91B35",order:0,changelog:!1,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15}},{id:1933,title:"Microinterações e animações personalizadas",text:"Uma maneira de criar interações personalizadas com elementos para protótipos de maior fidelidade",order:null,voteCount:20,categoryId:null,createdAt:"2018-05-06T10:19:53.000Z",updatedAt:"2018-09-23T22:18:06.000Z",voted:0,IdeaStatus:{id:15,name:"Nova",description:null,icon:"💡",color:"#D91B35",order:0,changelog:!1,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15}},{id:393,title:"Hide or archive a screen (instead of deleting it)",text:null,order:null,voteCount:93,categoryId:null,createdAt:"2017-07-16T00:15:43.000Z",updatedAt:"2018-10-15T15:18:03.000Z",voted:0,IdeaStatus:{id:15,name:"Nova",description:null,icon:"💡",color:"#D91B35",order:0,changelog:!1,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15}},{id:390,title:"Private commenting on prototypes",text:"Hide comments from your team from external viewers such as clients and contractors",order:null,voteCount:33,categoryId:null,createdAt:"2017-07-16T00:09:06.000Z",updatedAt:"2018-09-24T14:22:11.000Z",voted:0,IdeaStatus:{id:15,name:"Nova",description:null,icon:"💡",color:"#D91B35",order:0,changelog:!1,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15}},{id:438,title:"Ability to copy or move images to another project",text:"Create a way to transfer images from one project to another",order:null,voteCount:35,categoryId:null,createdAt:"2017-08-06T18:28:25.000Z",updatedAt:"2018-10-15T15:18:03.000Z",voted:0,IdeaStatus:{id:15,name:"Nova",description:null,icon:"💡",color:"#D91B35",order:0,changelog:!1,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15}},{id:387,title:"Add a description for each screen",text:"Add a short description for the screen when viewed in the prototype play mode",order:null,voteCount:57,categoryId:null,createdAt:"2017-07-16T00:06:30.000Z",updatedAt:"2018-11-06T11:50:51.000Z",voted:0,IdeaStatus:{id:15,name:"Nova",description:null,icon:"💡",color:"#D91B35",order:0,changelog:!1,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15}},{id:648,title:"Drop Shadows in Design Mode",text:"Give elements the ability to have drop shadows.",order:null,voteCount:16,categoryId:null,createdAt:"2017-09-22T13:38:01.000Z",updatedAt:"2018-11-06T11:49:45.000Z",voted:0,IdeaStatus:{id:15,name:"Nova",description:null,icon:"💡",color:"#D91B35",order:0,changelog:!1,createdAt:"2018-01-27T17:15:29.000Z",updatedAt:"2018-01-27T17:15:29.000Z",deletedAt:null,organizationId:15}}];const s=Object(o.wire)(),l=Object(o.bind)(document.querySelector("#__wrapper__"));var c;c=(()=>a(5).default)(),i.init(()=>l`
        ${c(s,d)}
      `),i.update()},function(e,t,a){"use strict";a.r(t);var o=a(0),r=a(1),n=a.n(r);a(3);var i=e=>{const t=`color:${e.IdeaStatus.color}`;return Object(o.wire)(e)`
    <div class="card-container" onclick=${function(e){const t=e.target.nodeName;if("INPUT"!=t&&"BUTTON"!=t){const e=this.querySelector(".card-more"),t=Array.from(this.parentElement.querySelectorAll(".card-more-visible"));e.classList.contains("card-more-visible")||t.map(e=>e.classList.toggle("card-more-visible")),e.classList.toggle("card-more-visible")}}}>
      <div class="card-votes">
        <div class="card-votes-container">
          <span class="card-votes-count">${e.voteCount}</span>
        </div>
      </div>

      <div class="card-content">
        <h1 class="card-title">${e.title}</h1>
        <div class="card-status-wrapper">
          <span class="card-status" style="${t}">
            ${e.IdeaStatus.icon}
            ${e.IdeaStatus.name}
          </span>
        </div>

        <div class="card-description">
          <span>${e.text}</span>
        </div>
        ${function(){return Object(o.wire)()`
    <div class="card-more">
      <input placeholder="Escreva um cometário..." />
      <button class="card-more-button">Enviar</button>
    </div>
  `}}
      </div>
    </div>
  `},d=a(2),s=a.n(d);t.default=((e,t)=>e`
  <div class="${s.a.container}">
    ${(e=>e`
  <header class="${n.a.container}">
    <div class="header-content">
      <div class="logo">
        <a href="#">
          <img class="header-logo-img" src="./assets/logo.png" alt="Friday" />
        </a>
      </div>

      <ul class="header-menu-items">
        <li><a class="header-active" href="#">Feature requests</a></li>
        <li><a href="#">Changelog</a></li>
      </ul>
    </div>
  </header>
`)(Object(o.wire)())}
    <div class="app-content">
      <div class="app-feed">${t.map(i)}</div>
      <div class="app-make-suggestion">${Object(o.wire)()`
    <div class="app-idea">
      <p>Envie ideias de novos recursos para implmentações futuras</p>
      <button class="app-button-idea">Nova ideia</button>
    </div>
  `}</div>
    </div>
  </div>
`)}]);