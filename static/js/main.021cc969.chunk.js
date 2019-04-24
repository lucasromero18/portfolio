(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(20),l=a.n(o),r=(a(71),a(8)),s=a(9),c=a(11),m=a(10),d=a(12),h=(a(72),a(14)),g=a(61),f=a.n(g),p=(a(73),a(94),a(47));console.log(p);var y={styles:{fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"3em",fontWeight:"bold",textAlign:"center",paddingTop:"2em"}},u={styles:{display:"flex"}},v={styles:{fontSize:"1.7em",marginTop:"2em",display:"block",color:"#add8e6"}},E={styles:{fontSize:"1.1em",fontFamily:"Montserrat, sans-serif",marginLeft:"2em",marginRight:"2em"}},b={styles:{width:"20em",height:"25em",marginLeft:"2em",borderRadius:"90%",marginTop:"0 auto"}},w={styles:{display:"flex",marginTop:"2em",paddingBottom:"2em"}},k={styles:{flex:"1",textAlign:"center",marginTop:"2em"}},x=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return i.a.createElement("div",{id:"aboutme",style:{backgroundColor:"#F0F8FF",marginTop:"-5px"}},i.a.createElement("h1",{style:y.styles},"Who's ",i.a.createElement("h1",{style:{color:"#add8e6",fontSize:"1em",fontWeight:"bold",display:"inline",borderBottom:"2px solid #808080"}},"this")," guy?"),i.a.createElement("div",{style:u.styles},i.a.createElement("img",{style:b.styles,src:f.a}),i.a.createElement("p",{style:E.styles},i.a.createElement("h1",{style:v.styles},"Get to know me"),'My name is Lucas Romero, and I develop with a purpose. I am a full-stack web developer, with an extra sprinkle of passion for front-end web development, and UI / UX design. Passion, and continuously feeding my curiosity are both the main reasons I love to write code. I am attached to throwing all of my creativity and drive into the applications I create, and I push towards targeting every individual in terms of application use. The "how", is what keeps me going. I believe that technology lies within a never ending passage that consists of learning, and having the opportunity to expand my horizon on different technologies and frame works effectively is what I continue to execute everyday. On my free time, I find myself in the gym, or outdoors exploring! Becoming the best Lucas I can become, is the mission I am currently on. I view enhancing both of my physical and programming abilities to the fullest as a priority, but most importantly making sure I have as much fun as I can throughout the process!')),i.a.createElement("div",{style:w.styles},i.a.createElement("div",{style:k.styles},i.a.createElement("h1",null,i.a.createElement("i",{style:{fontSize:"2.4em",color:"#add8e6",paddingLeft:".5em"},class:"fas fa-globe-americas"})),i.a.createElement("h2",{style:Object(h.a)({fontFamily:"Montserrat, sans-serif",paddingLeft:"1em",color:"#2a2a2a",fontSize:"2.4em"},"color","#add8e6")},"Communication"),i.a.createElement("p",{style:{fontFamily:"Montserrat, sans-serif",paddingLeft:"3em"}},"Along with executing everything I do efficiently, having the ability to communicate is what I do best. I love working in teams, and passing information along as effectively as possible!")),i.a.createElement("div",{style:k.styles},i.a.createElement("h1",null,i.a.createElement("i",{style:{fontSize:"2.4em",color:"#add8e6",marginLeft:".3em"},class:"fas fa-eye"})),i.a.createElement("h2",{style:(e={fontFamily:"Montserrat, sans-serif",color:"#2a2a2a",fontSize:"2.4em"},Object(h.a)(e,"color","#add8e6"),Object(h.a)(e,"marginLeft",".5em"),e)},"Detail"),i.a.createElement("p",{style:{fontFamily:"Montserrat, sans-serif",paddingLeft:"2em"}},"In relation to my love for front-end web development and UI / UX design, detail is priority. Creating interfaces that are more than appealing to the users eye, is my goal.")),i.a.createElement("div",{style:k.styles},i.a.createElement("h1",null,i.a.createElement("i",{style:{fontSize:"2.4em",color:"#add8e6",marginLeft:".2em"},class:"fas fa-clock"})),i.a.createElement("h2",{style:Object(h.a)({fontFamily:"Montserrat, sans-serif",marginLeft:"0.4em",color:"#2a2a2a",fontSize:"2.4em"},"color","#add8e6")},"Efficiency"),i.a.createElement("p",{style:{fontFamily:"Montserrat, sans-serif",paddingLeft:"1.5em"}},"Getting the job done is great, but was the process as efficient as possible? Working efficiently provides more room for opportunity. I Work smarter, not harder.")),i.a.createElement("div",{style:k.styles},i.a.createElement("h1",null,i.a.createElement("i",{style:{fontSize:"2.4em",color:"#add8e6",paddingRight:".5em"},class:"fas fa-brain"})),i.a.createElement("h2",{style:Object(h.a)({fontFamily:"Montserrat, sans-serif",paddingRight:"1em",color:"#2a2a2a",fontSize:"2.4em"},"color","#add8e6")},"Determined"),i.a.createElement("p",{style:{fontFamily:"Montserrat, sans-serif",paddingRight:"2em"}},"I am always eager to learn new approaches to real world problems, and continue to put all of my effort into striving into the individual I can be."))))}}]),t}(n.Component),C=a(47),j=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.skill.replace(" ","");return i.a.createElement("div",{style:{width:this.props.widthHeight+"em",height:this.props.widthHeight+"em",display:"inline-block"}},i.a.createElement("h3",{style:{textAlign:"center",height:"20%",color:this.props.percentageColor,fontFamily:"Montserrat, sans-serif",fontSize:this.props.size+"em"}},this.props.skill),i.a.createElement("div",{id:e}))}},{key:"componentDidMount",value:function(){var e=this.props.skill.replace(" ",""),t=new C.Circle("#".concat(e),{color:this.props.color,strokeWidth:4,trailWidth:1,easing:"easeInOut",duration:1400,text:{autoStyleContainer:!0},from:{color:this.props.color,width:1},to:{color:this.props.color,width:4},step:function(e,t){t.path.setAttribute("stroke",e.color),t.path.setAttribute("stroke-width",e.width),console.log(t.value());var a=Math.round(100*t.value());0===a?t.setText(""):t.setText(a+"%")},svgStyle:{width:"80%",marginLeft:"10%"}});t.text.style.fontFamily="Montserrat, sans-serif",t.text.style.fontSize="2rem",t.text.style.color="#D3D3D3",t.animate(this.props.val)}}]),t}(n.Component),z={styles:{paddingTop:"6em"}},S={styles:{fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"3em",fontWeight:"bold",marginLeft:"7em",display:"inline"}},I={styles:{color:"#add8e6",fontFamily:"Montserrat, sans-serif",marginLeft:"3.5em"}},F={styles:{color:"#808080",fontFamily:"Montserrat, sans-serif",marginLeft:"8em"}},O=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"tsSkills",style:{backgroundColor:"#F8F8FF"}},i.a.createElement("div",{style:z.styles},i.a.createElement("h1",{style:S.styles},"I utilize ",i.a.createElement("h1",{style:{color:"#add8e6",fontSize:"1em",fontWeight:"bold",display:"inline",borderBottom:"2px solid #808080"}},"two")," types of skills..")),i.a.createElement("div",{style:{marginTop:"4em"}},i.a.createElement("div",{style:{display:"inline-block"}},i.a.createElement("h1",{style:I.styles},"Technical Skills"),i.a.createElement("div",{style:{marginTop:"2em",paddingBottom:"2em",marginLeft:"3em"}},i.a.createElement(j,{percentageColor:"#add8e6",skill:"HTML",color:"#add8e6",val:1,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#add8e6",skill:"CSS",color:"#add8e6",val:1,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#add8e6",skill:"Version Control",color:"#add8e6",val:.9,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#add8e6",skill:"Javascript",color:"#add8e6",val:.85,widthHeight:7.5,size:.8})),i.a.createElement("div",{style:{marginTop:"1em",paddingBottom:"2em",marginLeft:"3em"}},i.a.createElement(j,{percentageColor:"#add8e6",skill:"MVC",color:"#add8e6",val:.8,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#add8e6",skill:"React",color:"#add8e6",val:.75,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#add8e6",skill:"SQL",color:"#add8e6",val:.75,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#add8e6",skill:"Vue",color:"#add8e6",val:.7,widthHeight:7.5,size:.8})),i.a.createElement("div",{style:{marginTop:"1em",paddingBottom:"5em",marginLeft:"3em"}},i.a.createElement(j,{percentageColor:"#add8e6",skill:"Node",color:"#add8e6",val:.65,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#add8e6",skill:"State Management",color:"#add8e6",val:.6,widthHeight:7.5,size:.8}))),i.a.createElement("div",{style:{display:"inline-block",position:"absolute"}},i.a.createElement("h1",{style:F.styles},"Soft Skills"),i.a.createElement("div",{style:{marginTop:"2em",paddingBottom:"2em",paddingLeft:"12em",marginRight:"2em"}},i.a.createElement(j,{percentageColor:"#808080",skill:"Public Speaking",color:"#808080",val:1,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#808080",skill:"Team Work",color:"#808080",val:1,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#808080",skill:"Communication",color:"#808080",val:1,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#808080",skill:"Flexibility",color:"#808080",val:1,widthHeight:7.5,size:.8})),i.a.createElement("div",{style:{marginTop:"1em",paddingBottom:"2em",paddingLeft:"12em",marginRight:"2em"}},i.a.createElement(j,{percentageColor:"#808080",skill:"Presentation",color:"#808080",val:1,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#808080",skill:"Creativity",color:"#808080",val:.9,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#808080",skill:"Leadership",color:"#808080",val:.9,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#808080",skill:"Personal Productivity",color:"#808080",val:.9,widthHeight:7.5,size:.8})),i.a.createElement("div",{style:{marginTop:"1em",paddingBottom:"3em",paddingLeft:"12em",marginRight:"2em"}},i.a.createElement(j,{percentageColor:"#808080",skill:"Adaptability",color:"#808080",val:.85,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#808080",skill:"Conflict Resolution",color:"#808080",val:.85,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#808080",skill:"Problem Solving",color:"#808080",val:.8,widthHeight:7.5,size:.8}),i.a.createElement(j,{percentageColor:"#808080",skill:"Research",color:"#808080",val:.8,widthHeight:7.5,size:.8})))))}}]),t}(n.Component),L=a(134),M=a(135),T=a(136),A=a(137),G=a(138),H=a(139),R={styles:{fontFamily:"Montserrat, sans-serif",paddingTop:"2em",textAlign:"center",fontSize:"3.5em",fontWeight:"bold",color:"#808080",marginBottom:".5em"}},B=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"applications",style:{backgroundColor:"#F5F5F5"}},i.a.createElement("div",null,i.a.createElement("h1",{style:R.styles},"Applications",i.a.createElement("i",{style:{marginLeft:".5em",color:"#add8e6"},class:"fas fa-laptop"}))),i.a.createElement("div",null,i.a.createElement(L.a,null,i.a.createElement(M.a,{style:{paddingLeft:"2.5em"},sm:"6"},i.a.createElement(T.a,{body:!0,style:{marginTop:"3em",backgroundColor:"#808080"}},i.a.createElement(A.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"Romero Fitness"),i.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"A fitness application (built with HTML, CSS, Bootstrap, and javascript) that contains direction with various training styles, accessibility to a body fat analyzer / chart to determine where the users health may lie."),i.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(4 day timeline)"),i.a.createElement("a",{href:"https://github.com/lucasromero18/q1-project-romero-fitness"},i.a.createElement(H.a,{style:{color:"#add8e6",marginLeft:"14.5em"}},"Github")))),i.a.createElement(M.a,{style:{paddingRight:"2.5em"},sm:"6"},i.a.createElement(T.a,{body:!0,style:{marginTop:"3em",backgroundColor:"#808080"}},i.a.createElement(A.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"techConnect"),i.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"A tech-industry dating application (built with Node.js, Knex, Express, PostgreSQL, EJS, and Materialize) that brings users together based off of tech related interests, such as languages and frameworks. Swipe away with techConnect!"),i.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(4 day timeline / Team Project)"),i.a.createElement("a",{href:"https://github.com/lucasromero18/techConnect"},i.a.createElement(H.a,{style:{color:"#add8e6",marginLeft:"15em"}},"Github"))))),i.a.createElement("div",null,i.a.createElement(L.a,null,i.a.createElement(M.a,{style:{paddingLeft:"2.5em"},sm:"6"},i.a.createElement(T.a,{body:!0,style:{marginTop:"2em",backgroundColor:"#808080"}},i.a.createElement(A.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"F.I.T."),i.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},'A Fitness Inventory application (built with React, Materialize, Node.js, Knex, Express, PostgreSQL) that allows one to construct their "dream" at home gym with various items, and checkout items in their cart.'),i.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(4 day timeline)"),i.a.createElement("a",{href:"https://github.com/lucasromero18/q3project-frontend"},i.a.createElement(H.a,{style:{color:"#add8e6",marginLeft:"14.5em"}},"Github")))),i.a.createElement(M.a,{style:{paddingRight:"2.5em"},sm:"6"},i.a.createElement(T.a,{body:!0,style:{marginTop:"2em",backgroundColor:"#808080"}},i.a.createElement(A.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"Real Gaming Reviews"),i.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"A video game review application (built with React, MDBootstrap, Node.js, Knex, Express, PostgreSQL) that allows users to view the latest video games, and leave reviews to inform others about that game."),i.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(4 day timeline / Team Project)"),i.a.createElement("a",{href:"https://github.com/mpecicUSA/realGamingReviewsq4"},i.a.createElement(H.a,{style:{color:"#add8e6",marginLeft:"15em"}},"Github"))))),i.a.createElement(L.a,null,i.a.createElement(M.a,{sm:"6"},i.a.createElement(T.a,{body:!0,style:{marginTop:"3em",marginLeft:"17em",marginBottom:"4em",width:"55vw",backgroundColor:"#808080"}},i.a.createElement(A.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"Yikers!"),i.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"A Social Media application (built with Vue.js, VueX, Vuetify, Node.js, Express, Knex, PostgreSQL) that allows users to view situations others have been in, create situations, rate others solutions, and comment on situations to give advice."),i.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(2 week timeline)"),i.a.createElement("a",{href:"https://github.com/lucasromero18/yikers_frontend"},i.a.createElement(H.a,{style:{color:"#add8e6",marginLeft:"18.5em"}},"GitHub"))))))))}}]),t}(n.Component),W=a(5),_=a(29),P=a.n(_),K=a(65),V=a(140),D=a(141),N=a(142),U=a(143),q=[{src:"https://www.logolynx.com/images/logolynx/46/463d4095702ef4e7ae91f3124d384f9a.jpeg"},{src:"http://dtphx.org/wp-content/uploads/2017/12/IMG_0441.jpg"},{src:"http://www.tldc19.com/wp-content/uploads/2018/11/front-desk.png"},{src:"https://i1.wp.com/modeeffect.com/wp-content/uploads/2018/10/IMG_8787.jpg?resize=3682%2C2070&ssl=1"},{src:"https://eventective-media.azureedge.net/1912313_md.jpg"}],Q=[{src:"https://www.klassencorp.com/wp-content/uploads/2016/08/college-of-the-canyons-klassen-project.jpg"},{src:"https://i.pinimg.com/originals/f7/88/f7/f788f7498e0e17fe5e6c892468e2a305.jpg"},{src:"https://www.canyons.edu/Offices/PIO/publishingimages/resources/aliso_hall_6x4_300.jpg"},{src:"https://static1.squarespace.com/static/54ca7600e4b094de1a773024/54efac06e4b0844ebbc29d0f/54efaef7e4b0ad929f9960cb/1424994084247/COC+1.jpg?format=1000w"}],X={styles:{fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"3em",fontWeight:"bold",textAlign:"center",paddingTop:"2.5em"}},J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).galvanizeLocation={center:{lat:33.43983,lng:-112.06702},zoom:13},a.cocLocation={center:{lat:34.40402,lng:-118.56989},zoom:13},a.googleMaps=function(e){console.log([e]),a.setState(Object(h.a)({},e,!a.state[e]))},a.state={galvActiveIndex:0,cocActiveIndex:0,galv:!1,coc:!1,googleMaps:!0},a.nextGalv=a.nextGalv.bind(Object(W.a)(Object(W.a)(a))),a.previousGalv=a.previousGalv.bind(Object(W.a)(Object(W.a)(a))),a.goToIndexGalv=a.goToIndexGalv.bind(Object(W.a)(Object(W.a)(a))),a.onExitingGalv=a.onExitingGalv.bind(Object(W.a)(Object(W.a)(a))),a.onExitedGalv=a.onExitedGalv.bind(Object(W.a)(Object(W.a)(a))),a.nextCoc=a.nextCoc.bind(Object(W.a)(Object(W.a)(a))),a.previousCoc=a.previousCoc.bind(Object(W.a)(Object(W.a)(a))),a.goToIndexCoc=a.goToIndexCoc.bind(Object(W.a)(Object(W.a)(a))),a.onExitingCoc=a.onExitingCoc.bind(Object(W.a)(Object(W.a)(a))),a.onExitedCoc=a.onExitedCoc.bind(Object(W.a)(Object(W.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onExitingGalv",value:function(){this.animatingGalv=!0}},{key:"onExitedGalv",value:function(){this.animatingGalv=!1}},{key:"nextGalv",value:function(){if(!this.animatingGalv){var e=this.state.galvActiveIndex===q.length-1?0:this.state.galvActiveIndex+1;this.setState({galvActiveIndex:e})}}},{key:"previousGalv",value:function(){if(!this.animatingGalv){var e=0===this.state.galvActiveIndex?q.length-1:this.state.galvActiveIndex-1;this.setState({galvActiveIndex:e})}}},{key:"goToIndexGalv",value:function(e){this.animatingGalv||this.setState({galvActiveIndex:e})}},{key:"onExitingCoc",value:function(){this.animatingCollege=!0}},{key:"onExitedCoc",value:function(){this.animatingCollege=!1}},{key:"nextCoc",value:function(){if(!this.animatingCollege){var e=this.state.cocActiveIndex===Q.length-1?0:this.state.cocActiveIndex+1;this.setState({cocActiveIndex:e})}}},{key:"previousCoc",value:function(){if(!this.animatingCollege){var e=0===this.state.cocActiveIndex?Q.length-1:this.state.cocActiveIndex-1;this.setState({cocActiveIndex:e})}}},{key:"goToIndexCoc",value:function(e){this.animatingCollege||this.setState({cocActiveIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.galvActiveIndex,a=q.map(function(t){return i.a.createElement(K.a,{onExiting:e.onExitingGalv,onExited:e.onExitedGalv,key:t.src},i.a.createElement("img",{style:{width:"30em",height:"20em"},src:t.src,alt:t.altText}),i.a.createElement(V.a,{captionText:t.caption,captionHeader:t.caption}))}),n=this.state.cocActiveIndex,o=Q.map(function(t){return i.a.createElement(K.a,{onExiting:e.onExitingCoc,onExited:e.onExitedCoc,key:t.src},i.a.createElement("img",{style:{width:"30em",height:"20em"},src:t.src,alt:t.altText}),i.a.createElement(V.a,{captionText:t.caption,captionHeader:t.caption}))});return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"educated",style:{backgroundColor:"#FFFAFA"}},i.a.createElement("h1",{style:X.styles},"Education ",i.a.createElement("h1",{style:{color:"#add8e6",fontSize:"1em",fontWeight:"bold",display:"inline"}},"History"),i.a.createElement("i",{style:{marginLeft:".5em"},class:"fas fa-book"})),i.a.createElement("div",null,i.a.createElement("h1",{style:{marginTop:"1em",marginLeft:"1.1em",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2.5"}},"Galvanize Inc."),i.a.createElement("h1",{style:{marginLeft:"2em",fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"1.5em"}},"Phoenix, AZ ",i.a.createElement("button",{style:{display:"inline",color:"red",background:"transparent",border:"none"}}," ",i.a.createElement("i",{onClick:function(){return e.googleMaps("galv")},class:"fas fa-map-pin"}))),i.a.createElement("h1",{style:{marginLeft:"2em",fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"1.5em"}},"September 2018 ",i.a.createElement("i",{style:{fontSize:".7em",color:"#add8e6"},className:"fas fa-arrow-circle-right"})," ",i.a.createElement("p",{style:{color:"#add8e6",fontFamily:"Montserrat, sans-serif",display:"inline"}},"March 2019")),this.state.galv?i.a.createElement("div",{style:{height:"50vh",width:"50%",marginLeft:"2%"}},i.a.createElement(P.a,{bootstrapURLKeys:{key:"AIzaSyCf-we8wkTCTggl9WoiKauYqdwhTXke9RA"},defaultCenter:this.galvanizeLocation.center,defaultZoom:this.galvanizeLocation.zoom})):null,i.a.createElement("div",{style:{float:"right",height:"20em",width:"30em",paddingRight:"1em"}},i.a.createElement(D.a,{activeIndex:t,next:this.nextGalv,previous:this.previousGalv},i.a.createElement(N.a,{items:q,activeIndex:t,onClickHandler:this.goToIndexGalv}),a,i.a.createElement(U.a,{direction:"prev",onClickHandler:this.previousGalv}),i.a.createElement(U.a,{direction:"next",onClickHandler:this.nextGalv}))),i.a.createElement("div",null,i.a.createElement("p",{style:{width:"50%",marginLeft:"2.5em",fontFamily:"Montserrat, sans-serif",fontSize:"1.2em"}},"Galvanize holds a Web Development Immersive Program that highlights full-stack web development. Learning HTML, CSS, javascript, git, Node.js, Knex, Express, MVC, PostgreSQL, React, Vue, and State Management within the duration of 6 months, felt like an overload at the time. I sit here and reflect every now and then, on how effective, life changing, and amazing the Galvanize Immersive Program actually was. With deadlines as short as four days to create an application, assessments, sleepless nights, and mock interviews, I have been given the opportunity to take my programming abilities to a whole new level, and I owe every bit of programming knowledge to Galvanize.")),i.a.createElement("div",null,i.a.createElement("h1",{style:{marginLeft:"1em",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2.8em",marginTop:"3em"}},"College Of The Canyons"),i.a.createElement("h1",{style:{marginLeft:"2em",fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"1.5em"}},"Valencia, CA ",i.a.createElement("button",{style:{display:"inline",background:"transparent",border:"none"}},i.a.createElement("i",{style:{color:"red"},onClick:function(){return e.googleMaps("coc")},class:"fas fa-map-pin"}))),i.a.createElement("h1",{style:{marginLeft:"2em",fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"1.5em"}},"August 2016 ",i.a.createElement("i",{style:{fontSize:".7em",color:"#add8e6"},className:"fas fa-arrow-circle-right"})," ",i.a.createElement("p",{style:{color:"#add8e6",fontFamily:"Montserrat, sans-serif",display:"inline"}},"February 2018")),this.state.coc?i.a.createElement("div",{style:{height:"50vh",width:"50%",marginLeft:"2%"}},i.a.createElement(P.a,{bootstrapURLKeys:{key:"AIzaSyCf-we8wkTCTggl9WoiKauYqdwhTXke9RA"},defaultCenter:this.cocLocation.center,defaultZoom:this.cocLocation.zoom})):null,i.a.createElement("div",{style:{float:"right",height:"20",width:"30em",paddingBottom:"3em",paddingRight:"1em"}},i.a.createElement(D.a,{activeIndex:n,next:this.nextCoc,previous:this.previousCoc},i.a.createElement(N.a,{items:Q,activeIndex:n,onClickHandler:this.goToIndexCoc}),o,i.a.createElement(U.a,{direction:"prev",onClickHandler:this.previousCoc}),i.a.createElement(U.a,{direction:"next",onClickHandler:this.nextCoc}))),i.a.createElement("div",null,i.a.createElement("p",{style:{width:"50%",marginLeft:"2.5em",fontFamily:"Montserrat, sans-serif",paddingBottom:"3em",fontSize:"1.2em"}},"Shortly after high school, I attended College of the Canyons in Valencia, CA. There, I majored in Fire Tech for my first 7 months, then came to realization that Fire Fighting wasn't the path that I ultimately wanted to take in life. Following that period of time, I felt it was necessary to switch my major to Kinesiology. I spent time taking Anatomy and other classes that were relevant to complete my major classes while working on prerequisite classes. Then, I had felt that Kinesiology was to specific. I feared changing my mind further down the line in terms of my career path, so I changed my major for the last time. I decided to major in Business / Entrepreneurship. During the time I was taking classes working towards my major, life took it's toll and I ended up having to drop school and focus on work only. A month later, my life changed completely and I ended up moving to Arizona."))))))}}]),t}(n.Component),Y=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"contactInfo",style:{backgroundColor:"#2a2a2a",marginTop:"-15px"}},i.a.createElement("div",null,i.a.createElement("h1",{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",fontSize:"3em",fontWeight:"bold",paddingTop:"3%",color:"#add8e6"}},"Let's get in touch ",i.a.createElement("i",{style:{fontSize:".8em"},class:"fas fa-arrow-down"}))),i.a.createElement("div",{style:{paddingBottom:"2em"}},i.a.createElement(L.a,{style:{justifyContent:"center",paddingTop:"2em"}},i.a.createElement(M.a,{sm:"1"},i.a.createElement("div",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/lucasjulianromero/"},i.a.createElement("i",{style:{color:"#add8e6",fontSize:"4em"},class:"fab fa-linkedin"})))),i.a.createElement(M.a,{sm:"1"},i.a.createElement("div",null,i.a.createElement("a",{href:"mailto:lucasjulromero@gmail.com"},i.a.createElement("i",{style:{color:"#add8e6",fontSize:"4em"},class:"far fa-envelope"}))))))))}}]),t}(n.Component),Z=a(64),$=a.n(Z),ee=(a(131),{styles:{position:"absolute",color:"white",fontFamily:"Montserrat, sans-serif",marginTop:"4.5em",marginLeft:"7.5em",fontSize:"3em"}}),te={styles:{position:"absolute",color:"white",fontFamily:"Montserrat, sans-serif",marginTop:"5.8em",marginLeft:"5.5em",fontSize:"3em"}},ae={styles:{position:"absolute",color:"white",marginTop:"28%",marginLeft:"40%",fontFamily:"Montserrat, sans-serif",height:"10%",width:"20%"}},ne={styles:{marginLeft:"5%",marginTop:"3%"}},ie=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"home"},i.a.createElement("h1",{style:ee.styles},"Hello, I'm ",i.a.createElement("h1",{style:{fontFamily:"Montserrat, sans-serif",display:"inline",fontSize:"1em",color:"#cd5c5c"}},"Lucas Romero.")),i.a.createElement("h1",{style:te.styles},"I'm a Full Stack Web Developer."),i.a.createElement("a",{href:"#aboutme"},i.a.createElement(H.a,{style:ae.styles,outline:!0},"View my work ",i.a.createElement("i",{style:ne.styles,className:"fas fa-arrow-circle-down"}))),i.a.createElement($.a,{params:{particles:{number:{value:231,density:{enable:!0,value_area:1441.5568814319463}},color:{value:"#add8e6"},shape:{type:"circle",stroke:{width:0,color:"#add8e6"},polygon:{nb_sides:9},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.11212109077804028,random:!1,anim:{enable:!1,speed:.5678085025267481,opacity_min:.1,sync:!1}},size:{value:4.004324670644295,random:!0,anim:{enable:!1,speed:12.167325054144603,size_min:59.21431526350373,sync:!1}},line_linked:{enable:!0,distance:256.2767789212349,color:"#00ffff",opacity:.32034597365154366,width:1.4415568814319464},move:{enable:!0,speed:1.6017298682577181,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:1441.5568814319463,rotateY:1441.5568814319463}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:340.68510151604886,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},style:{width:"100%",height:"100vh",backgroundColor:"#2a2a2a",borderBottom:"2px solid #add8e6"}}),i.a.createElement(x,null),i.a.createElement(O,null),i.a.createElement(B,null),i.a.createElement(J,null),i.a.createElement(Y,null))}}]),t}(n.Component),oe=a(144),le=a(145),re=a(146),se=a(147),ce={styles:{backgroundColor:"#2a2a2a",borderBottom:"1px solid #add8e6",display:"flex",justifyContent:"center",position:"fixed",zIndex:"1000",width:"100%",top:"0"}},me={styles:{fontFamily:"Montserrat, sans-serif",color:"white"}},de=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe.a,{style:ce.styles,expand:"md"},i.a.createElement(le.a,{navbar:!0,className:"mx-auto"},i.a.createElement(re.a,null,i.a.createElement("a",{href:"#home"},i.a.createElement(se.a,{style:me.styles},"Home"))),i.a.createElement(re.a,null,i.a.createElement("a",{href:"#aboutme"},i.a.createElement(se.a,{style:me.styles},"About"))),i.a.createElement(re.a,null,i.a.createElement("a",{href:"#tsSkills"},i.a.createElement(se.a,{style:me.styles},"Skills"))),i.a.createElement(re.a,null,i.a.createElement("a",{href:"#applications"},i.a.createElement(se.a,{style:me.styles},"Applications"))),i.a.createElement(re.a,null,i.a.createElement("a",{href:"#educated"},i.a.createElement(se.a,{style:me.styles},"Education"))),i.a.createElement(re.a,null,i.a.createElement("a",{href:"#contactInfo"},i.a.createElement(se.a,{style:me.styles},"Contact"))))))}}]),t}(n.Component),he=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return window.screen&&window.screen.width<750?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",backgroundColor:"#f8f8ff",minHeight:"100vh"}},i.a.createElement("h1",{style:{paddingTop:"2.5em",color:"#808080"}},"Hello!"),i.a.createElement("p",{style:{marginTop:"1em",color:"#808080",paddingLeft:"3em",paddingRight:"3em"}},"Thank you for taking the time to visit my portfolio website. Unfortunately, it does not support mobile devices (just yet)."),i.a.createElement("i",{style:{fontSize:"2em",color:"#add8e6"},class:"fas fa-arrow-down"}),i.a.createElement("p",{style:{marginTop:"1em",color:"#808080",paddingLeft:"3em",paddingRight:"3em"}},"Please feel free to view my portfolio website on a laptop or desktop."),i.a.createElement("i",{style:{fontSize:"2em",color:"#add8e6"},class:"fas fa-arrow-down"}),i.a.createElement("p",{style:{marginTop:"1em",color:"#808080",paddingLeft:"3em",paddingRight:"3em"}},"If not feasible, please feel free to contact me below!"),i.a.createElement("a",{style:{marginRight:"5px"},href:"https://www.linkedin.com/in/lucasjulianromero/"},i.a.createElement("i",{style:{color:"#add8e6",fontSize:"3em"},class:"fab fa-linkedin"})),i.a.createElement("a",{style:{marginLeft:"5px"},href:"mailto:lucasjulromero@gmail.com"},i.a.createElement("i",{style:{color:"#add8e6",fontSize:"3em"},class:"far fa-envelope"})))):i.a.createElement(i.a.Fragment,null,i.a.createElement(de,null),i.a.createElement(ie,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(132);l.a.render(i.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){e.exports=a.p+"static/media/lucas_port_immy.ba39474e.jpg"},66:function(e,t,a){e.exports=a(133)},71:function(e,t,a){},72:function(e,t,a){},77:function(e,t){},79:function(e,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.021cc969.chunk.js.map