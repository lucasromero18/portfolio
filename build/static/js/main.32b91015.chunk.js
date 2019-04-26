(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(23),l=a.n(i),r=(a(66),a(8)),s=a(9),c=a(11),m=a(10),d=a(12),h=(a(28),a(14)),f=a(56),g=a.n(f),p=(a(67),a(42));console.log(p);var y={styles:{fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"3em",fontWeight:"bold",textAlign:"center",paddingTop:"2em",animationName:"moveInLeft",animationDuration:"2s",animationTimingFunction:"ease-out"}},u={styles:{display:"flex"}},v={styles:{fontSize:"1.7em",marginTop:"2em",display:"block",color:"#add8e6"}},E={styles:{fontSize:"1.1em",fontFamily:"Montserrat, sans-serif",marginLeft:"2em",marginRight:"2em"}},F={styles:{width:"20em",height:"25em",marginLeft:"2em",borderRadius:"90%",marginTop:"0 auto"}},b={styles:{display:"flex",marginTop:"2em",paddingBottom:"2em"}},w={styles:{flex:"1",textAlign:"center",marginTop:"2em"}},x=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return o.a.createElement("div",{id:"aboutme",style:{backgroundColor:"#F0F8FF",marginTop:"-5px"}},o.a.createElement("h1",{style:y.styles},"Who's ",o.a.createElement("h1",{style:{color:"#add8e6",fontSize:"1em",fontWeight:"bold",display:"inline",borderBottom:"2px solid #808080"}},"this")," guy?"),o.a.createElement("div",{style:u.styles},o.a.createElement("img",{style:F.styles,src:g.a}),o.a.createElement("p",{style:E.styles},o.a.createElement("h1",{style:v.styles},"Get to know me"),'My name is Lucas Romero, and I develop with a purpose. I am a full-stack web developer, with an extra sprinkle of passion for front-end web development, and UI / UX design. Passion, and continuously feeding my curiosity are both the main reasons I love to write code. I am attached to throwing all of my creativity and drive into the applications I create, and I push towards targeting every individual in terms of application use. The "how", is what keeps me going. I believe that technology lies within a never ending passage that consists of learning, and having the opportunity to expand my horizon on different technologies and frame works effectively is what I continue to execute everyday. In my free time, I find myself in the gym, or outdoors exploring! Becoming the best Lucas I can become, is the mission I am currently on. Strengthening both my physical and programming abilities to the fullest is important, but making sure I have as much fun as I can throughout the process, is priority!')),o.a.createElement("div",{style:b.styles},o.a.createElement("div",{style:w.styles},o.a.createElement("h1",null,o.a.createElement("i",{style:{fontSize:"2.4em",color:"#add8e6",paddingLeft:".5em"},class:"fas fa-globe-americas"})),o.a.createElement("h2",{style:Object(h.a)({fontFamily:"Montserrat, sans-serif",paddingLeft:"1em",color:"#2a2a2a",fontSize:"2.4em"},"color","#add8e6")},"Communication"),o.a.createElement("p",{style:{fontFamily:"Montserrat, sans-serif",paddingLeft:"3em"}},"Along with executing everything I do efficiently, having the ability to communicate is what I do best. I love working in teams, and passing information along as effectively as possible!")),o.a.createElement("div",{style:w.styles},o.a.createElement("h1",null,o.a.createElement("i",{style:{fontSize:"2.4em",color:"#add8e6",marginLeft:".3em"},class:"fas fa-eye"})),o.a.createElement("h2",{style:(e={fontFamily:"Montserrat, sans-serif",color:"#2a2a2a",fontSize:"2.4em"},Object(h.a)(e,"color","#add8e6"),Object(h.a)(e,"marginLeft",".5em"),e)},"Detail"),o.a.createElement("p",{style:{fontFamily:"Montserrat, sans-serif",paddingLeft:"2em"}},"In relation to my love for front-end web development and UI / UX design, detail is priority. Creating interfaces that are more than appealing to the users eye, is my goal.")),o.a.createElement("div",{style:w.styles},o.a.createElement("h1",null,o.a.createElement("i",{style:{fontSize:"2.4em",color:"#add8e6",marginLeft:".2em"},class:"fas fa-clock"})),o.a.createElement("h2",{style:Object(h.a)({fontFamily:"Montserrat, sans-serif",marginLeft:"0.4em",color:"#2a2a2a",fontSize:"2.4em"},"color","#add8e6")},"Efficiency"),o.a.createElement("p",{style:{fontFamily:"Montserrat, sans-serif",paddingLeft:"1.5em"}},"Getting the job done is great, but was the process as efficient as possible? Working efficiently provides more room for opportunity. I Work smarter, not harder.")),o.a.createElement("div",{style:w.styles},o.a.createElement("h1",null,o.a.createElement("i",{style:{fontSize:"2.4em",color:"#add8e6",paddingRight:".5em"},class:"fas fa-brain"})),o.a.createElement("h2",{style:Object(h.a)({fontFamily:"Montserrat, sans-serif",paddingRight:"1em",color:"#2a2a2a",fontSize:"2.4em"},"color","#add8e6")},"Determined"),o.a.createElement("p",{style:{fontFamily:"Montserrat, sans-serif",paddingRight:"2em"}},"I am always eager to learn new approaches to real world problems, and continue to put all of my effort into growing into the best individual I can be."))))}}]),t}(n.Component),k=a(42),C=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.skill.replace(" ","");return o.a.createElement("div",{style:{width:this.props.widthHeight+"em",height:this.props.widthHeight+"em",display:"inline-block"}},o.a.createElement("h3",{style:{textAlign:"center",height:"20%",color:this.props.percentageColor,fontFamily:"Montserrat, sans-serif",fontSize:this.props.size+"em"}},this.props.skill),o.a.createElement("div",{id:e}))}},{key:"componentDidMount",value:function(){var e=this.props.skill.replace(" ",""),t=new k.Circle("#".concat(e),{color:this.props.color,strokeWidth:4,trailWidth:1,easing:"easeInOut",duration:1400,text:{autoStyleContainer:!0},from:{color:this.props.color,width:1},to:{color:this.props.color,width:4},step:function(e,t){t.path.setAttribute("stroke",e.color),t.path.setAttribute("stroke-width",e.width),console.log(t.value());var a=Math.round(100*t.value());0===a?t.setText(""):t.setText(a+"%")},svgStyle:{width:"80%",marginLeft:"10%"}});t.text.style.fontFamily="Montserrat, sans-serif",t.text.style.fontSize="1.5rem",t.text.style.color="white",t.animate(this.props.val)}}]),t}(n.Component),j={styles:{paddingTop:"6em",width:"100vw",textAlign:"center"}},z={styles:{fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"3em",fontWeight:"bold",display:"inline"}},I={styles:{color:"#add8e6",fontFamily:"Montserrat, sans-serif"}},S={styles:{color:"#FFFFFF",fontFamily:"Montserrat, sans-serif"}},O=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"tsSkills",style:{backgroundColor:"#2a2a2a"}},o.a.createElement("div",{style:j.styles},o.a.createElement("h1",{style:z.styles},"I utilize ",o.a.createElement("h1",{style:{color:"#add8e6",fontSize:"1em",fontWeight:"bold",display:"inline",borderBottom:"2px solid #808080"}},"two")," types of skills..")),o.a.createElement("div",{style:{marginTop:"4em"}},o.a.createElement("div",{style:{display:"inline-block",width:"50%",textAlign:"center"}},o.a.createElement("h1",{style:I.styles},"Technical Skills"),o.a.createElement("div",{style:{marginTop:"2em",paddingBottom:"2em"}},o.a.createElement(C,{percentageColor:"#add8e6",skill:"HTML",color:"#add8e6",val:1,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#add8e6",skill:"CSS",color:"#add8e6",val:1,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#add8e6",skill:"Version Control",color:"#add8e6",val:.9,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#add8e6",skill:"Javascript",color:"#add8e6",val:.85,widthHeight:7.5,size:.8})),o.a.createElement("div",{style:{marginTop:"1em",paddingBottom:"2em"}},o.a.createElement(C,{percentageColor:"#add8e6",skill:"MVC",color:"#add8e6",val:.8,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#add8e6",skill:"React",color:"#add8e6",val:.75,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#add8e6",skill:"SQL",color:"#add8e6",val:.75,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#add8e6",skill:"Vue",color:"#add8e6",val:.7,widthHeight:7.5,size:.8})),o.a.createElement("div",{style:{marginTop:"1em",paddingBottom:"5em"}},o.a.createElement(C,{percentageColor:"#add8e6",skill:"Node",color:"#add8e6",val:.65,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#add8e6",skill:"State Management",color:"#add8e6",val:.6,widthHeight:7.5,size:.8}))),o.a.createElement("div",{style:{display:"inline-block",width:"50%",textAlign:"center"}},o.a.createElement("h1",{style:S.styles},"Soft Skills"),o.a.createElement("div",{style:{marginTop:"2em",paddingBottom:"2em"}},o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Public Speaking",color:"#FFFFFF",val:1,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Team Work",color:"#FFFFFF",val:1,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Communication",color:"#FFFFFF",val:1,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Flexibility",color:"#FFFFFF",val:1,widthHeight:7.5,size:.8})),o.a.createElement("div",{style:{marginTop:"1em",paddingBottom:"2em"}},o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Presentation",color:"#FFFFFF",val:1,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Creativity",color:"#FFFFFF",val:.9,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Leadership",color:"#FFFFFF",val:.9,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Personal Productivity",color:"#FFFFFF",val:.9,widthHeight:7.5,size:.8})),o.a.createElement("div",{style:{marginTop:"1em",paddingBottom:"3em"}},o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Adaptability",color:"#FFFFFF",val:.85,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Conflict Resolution",color:"#FFFFFF",val:.85,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Problem Solving",color:"#FFFFFF",val:.8,widthHeight:7.5,size:.8}),o.a.createElement(C,{percentageColor:"#FFFFFF",skill:"Research",color:"#FFFFFF",val:.8,widthHeight:7.5,size:.8})))))}}]),t}(n.Component),A=a(123),M=a(124),T=a(125),L=a(126),G=a(127),H=a(128),R={styles:{fontFamily:"Montserrat, sans-serif",paddingTop:"2em",textAlign:"center",fontSize:"3.5em",fontWeight:"bold",color:"#808080",marginBottom:".5em"}},B=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"applications",style:{backgroundColor:"#F5F5F5"}},o.a.createElement("div",null,o.a.createElement("h1",{style:R.styles},"Applications",o.a.createElement("i",{style:{marginLeft:".5em",color:"#add8e6"},class:"fas fa-laptop"}))),o.a.createElement("div",null,o.a.createElement(A.a,null,o.a.createElement(M.a,{style:{paddingLeft:"2.5em"},sm:"6"},o.a.createElement(T.a,{body:!0,style:{marginTop:"3em",backgroundColor:"#808080",textAlign:"center"}},o.a.createElement(L.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"Romero Fitness"),o.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"A fitness application (built with HTML, CSS, Bootstrap, and javascript) that contains direction with various training styles, accessibility to a body fat analyzer / chart to determine where the users health may lie."),o.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(4 day timeline)"),o.a.createElement("a",{href:"https://github.com/lucasromero18/q1-project-romero-fitness"},o.a.createElement(H.a,{style:{color:"#add8e6"}},"Github")))),o.a.createElement(M.a,{style:{paddingRight:"2.5em"},sm:"6"},o.a.createElement(T.a,{body:!0,style:{marginTop:"3em",backgroundColor:"#808080",textAlign:"center"}},o.a.createElement(L.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"techConnect"),o.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"A tech-industry dating application (built with Node.js, Knex, Express, PostgreSQL, EJS, and Materialize) that brings users together based off of tech related interests, such as languages and frameworks. Swipe away with techConnect!"),o.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(4 day timeline / Team Project)"),o.a.createElement("a",{href:"https://github.com/lucasromero18/techConnect"},o.a.createElement(H.a,{style:{color:"#add8e6"}},"Github"))))),o.a.createElement("div",null,o.a.createElement(A.a,null,o.a.createElement(M.a,{style:{paddingLeft:"2.5em"},sm:"6"},o.a.createElement(T.a,{body:!0,style:{marginTop:"2em",backgroundColor:"#808080",textAlign:"center"}},o.a.createElement(L.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"F.I.T."),o.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},'A Fitness Inventory application (built with React, Materialize, Node.js, Knex, Express, PostgreSQL) that allows one to construct their "dream" at home gym with various items, and checkout items in their cart.'),o.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(4 day timeline)"),o.a.createElement("a",{href:"https://github.com/lucasromero18/q3project-frontend"},o.a.createElement(H.a,{style:{color:"#add8e6"}},"Github")))),o.a.createElement(M.a,{style:{paddingRight:"2.5em"},sm:"6"},o.a.createElement(T.a,{body:!0,style:{marginTop:"2em",backgroundColor:"#808080",textAlign:"center"}},o.a.createElement(L.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"Real Gaming Reviews"),o.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"A video game review application (built with React, MDBootstrap, Node.js, Knex, Express, PostgreSQL) that allows users to view the latest video games, and leave reviews to inform others about that game."),o.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(4 day timeline / Team Project)"),o.a.createElement("a",{href:"https://github.com/mpecicUSA/realGamingReviewsq4"},o.a.createElement(H.a,{style:{color:"#add8e6"}},"Github"))))),o.a.createElement(A.a,null,o.a.createElement(M.a,{sm:"6",className:"offset-sm-3"},o.a.createElement(T.a,{body:!0,style:{marginTop:"3em",marginBottom:"4em",backgroundColor:"#808080",textAlign:"center"}},o.a.createElement(L.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2em"}},"Yikers!"),o.a.createElement(G.a,{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"A Social Media application (built with Vue.js, VueX, Vuetify, Node.js, Express, Knex, PostgreSQL) that allows users to view situations others have been in, create situations, rate others solutions, and comment on situations to give advice."),o.a.createElement("h1",{style:{fontSize:".9em",textAlign:"center",fontFamily:"Montserrat, sans-serif",color:"#add8e6"}},"(2 week timeline)"),o.a.createElement("a",{href:"https://github.com/lucasromero18/yikers_frontend"},o.a.createElement(H.a,{style:{color:"#add8e6"}},"GitHub"))))))))}}]),t}(n.Component),_=a(5),W=(a(93),a(60)),P=a(129),N=a(130),V=a(131),D=a(132),K=[{src:"https://www.logolynx.com/images/logolynx/46/463d4095702ef4e7ae91f3124d384f9a.jpeg"},{src:"http://dtphx.org/wp-content/uploads/2017/12/IMG_0441.jpg"},{src:"http://www.tldc19.com/wp-content/uploads/2018/11/front-desk.png"},{src:"https://i1.wp.com/modeeffect.com/wp-content/uploads/2018/10/IMG_8787.jpg?resize=3682%2C2070&ssl=1"},{src:"https://eventective-media.azureedge.net/1912313_md.jpg"}],Q=[{src:"https://www.klassencorp.com/wp-content/uploads/2016/08/college-of-the-canyons-klassen-project.jpg"},{src:"https://i.pinimg.com/originals/f7/88/f7/f788f7498e0e17fe5e6c892468e2a305.jpg"},{src:"https://www.canyons.edu/Offices/PIO/publishingimages/resources/aliso_hall_6x4_300.jpg"},{src:"https://static1.squarespace.com/static/54ca7600e4b094de1a773024/54efac06e4b0844ebbc29d0f/54efaef7e4b0ad929f9960cb/1424994084247/COC+1.jpg?format=1000w"}],U={styles:{fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"3em",fontWeight:"bold",textAlign:"center",paddingTop:"2.5em"}},q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).googleMaps=function(e){console.log([e]),a.setState(Object(h.a)({},e,!a.state[e]))},a.state={galvActiveIndex:0,cocActiveIndex:0,galv:!1,coc:!1,googleMaps:!0},a.nextGalv=a.nextGalv.bind(Object(_.a)(Object(_.a)(a))),a.previousGalv=a.previousGalv.bind(Object(_.a)(Object(_.a)(a))),a.goToIndexGalv=a.goToIndexGalv.bind(Object(_.a)(Object(_.a)(a))),a.onExitingGalv=a.onExitingGalv.bind(Object(_.a)(Object(_.a)(a))),a.onExitedGalv=a.onExitedGalv.bind(Object(_.a)(Object(_.a)(a))),a.nextCoc=a.nextCoc.bind(Object(_.a)(Object(_.a)(a))),a.previousCoc=a.previousCoc.bind(Object(_.a)(Object(_.a)(a))),a.goToIndexCoc=a.goToIndexCoc.bind(Object(_.a)(Object(_.a)(a))),a.onExitingCoc=a.onExitingCoc.bind(Object(_.a)(Object(_.a)(a))),a.onExitedCoc=a.onExitedCoc.bind(Object(_.a)(Object(_.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onExitingGalv",value:function(){this.animatingGalv=!0}},{key:"onExitedGalv",value:function(){this.animatingGalv=!1}},{key:"nextGalv",value:function(){if(!this.animatingGalv){var e=this.state.galvActiveIndex===K.length-1?0:this.state.galvActiveIndex+1;this.setState({galvActiveIndex:e})}}},{key:"previousGalv",value:function(){if(!this.animatingGalv){var e=0===this.state.galvActiveIndex?K.length-1:this.state.galvActiveIndex-1;this.setState({galvActiveIndex:e})}}},{key:"goToIndexGalv",value:function(e){this.animatingGalv||this.setState({galvActiveIndex:e})}},{key:"onExitingCoc",value:function(){this.animatingCollege=!0}},{key:"onExitedCoc",value:function(){this.animatingCollege=!1}},{key:"nextCoc",value:function(){if(!this.animatingCollege){var e=this.state.cocActiveIndex===Q.length-1?0:this.state.cocActiveIndex+1;this.setState({cocActiveIndex:e})}}},{key:"previousCoc",value:function(){if(!this.animatingCollege){var e=0===this.state.cocActiveIndex?Q.length-1:this.state.cocActiveIndex-1;this.setState({cocActiveIndex:e})}}},{key:"goToIndexCoc",value:function(e){this.animatingCollege||this.setState({cocActiveIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.galvActiveIndex,a=K.map(function(t){return o.a.createElement(W.a,{onExiting:e.onExitingGalv,onExited:e.onExitedGalv,key:t.src},o.a.createElement("img",{style:{width:"30em",height:"20em"},src:t.src,alt:t.altText}),o.a.createElement(P.a,{captionText:t.caption,captionHeader:t.caption}))}),n=this.state.cocActiveIndex,i=Q.map(function(t){return o.a.createElement(W.a,{onExiting:e.onExitingCoc,onExited:e.onExitedCoc,key:t.src},o.a.createElement("img",{style:{width:"30em",height:"20em"},src:t.src,alt:t.altText}),o.a.createElement(P.a,{captionText:t.caption,captionHeader:t.caption}))});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"educated",style:{backgroundColor:"#FFFAFA"}},o.a.createElement("h1",{style:U.styles},"Education ",o.a.createElement("h1",{style:{color:"#add8e6",fontSize:"1em",fontWeight:"bold",display:"inline"}},"History"),o.a.createElement("i",{style:{marginLeft:".5em"},class:"fas fa-book"})),o.a.createElement("div",null,o.a.createElement("h1",{style:{marginTop:"1em",marginLeft:"1.1em",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2.5"}},"Galvanize Inc."),o.a.createElement("h1",{style:{marginLeft:"2em",fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"1.5em"}},"Phoenix, AZ ",o.a.createElement("button",{style:{display:"inline",color:"red",background:"transparent",border:"none"}}," ",o.a.createElement("i",{onClick:function(){return e.googleMaps("galv")},class:"fas fa-map-pin"}))),o.a.createElement("h1",{style:{marginLeft:"2em",fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"1.5em"}},"September 2018 ",o.a.createElement("i",{style:{fontSize:".7em",color:"#add8e6"},className:"fas fa-arrow-circle-right"})," ",o.a.createElement("p",{style:{color:"#add8e6",fontFamily:"Montserrat, sans-serif",display:"inline"}},"March 2019")),o.a.createElement("div",{style:{float:"right",height:"20em",width:"30em",paddingRight:"1em"}},o.a.createElement(N.a,{activeIndex:t,next:this.nextGalv,previous:this.previousGalv},o.a.createElement(V.a,{items:K,activeIndex:t,onClickHandler:this.goToIndexGalv}),a,o.a.createElement(D.a,{direction:"prev",onClickHandler:this.previousGalv}),o.a.createElement(D.a,{direction:"next",onClickHandler:this.nextGalv}))),o.a.createElement("div",null,o.a.createElement("p",{style:{width:"50%",marginLeft:"2.5em",fontFamily:"Montserrat, sans-serif",fontSize:"1.2em"}},"Galvanize holds a Web Development Immersive Program that highlights full-stack web development. Learning HTML, CSS, javascript, git, Node.js, Knex, Express, MVC, PostgreSQL, React, and State Management within the duration of 6 months, felt like an overload at the time. I sit here and reflect every now and then, on how effective, life changing, and amazing the Galvanize Immersive Program actually was. With deadlines as short as four days to create an application, assessments, sleepless nights, and mock interviews, I have been given the opportunity to take my programming abilities to a whole new level, and I owe every bit of programming knowledge to Galvanize.")),o.a.createElement("div",null,o.a.createElement("h1",{style:{marginLeft:"1em",fontFamily:"Montserrat, sans-serif",color:"#add8e6",fontSize:"2.8em",marginTop:"3em"}},"College Of The Canyons"),o.a.createElement("h1",{style:{marginLeft:"2em",fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"1.5em"}},"Valencia, CA ",o.a.createElement("button",{style:{display:"inline",background:"transparent",border:"none"}},o.a.createElement("i",{style:{color:"red"},onClick:function(){return e.googleMaps("coc")},class:"fas fa-map-pin"}))),o.a.createElement("h1",{style:{marginLeft:"2em",fontFamily:"Montserrat, sans-serif",color:"#808080",fontSize:"1.5em"}},"August 2016 ",o.a.createElement("i",{style:{fontSize:".7em",color:"#add8e6"},className:"fas fa-arrow-circle-right"})," ",o.a.createElement("p",{style:{color:"#add8e6",fontFamily:"Montserrat, sans-serif",display:"inline"}},"February 2018")),o.a.createElement("div",{style:{float:"right",height:"20",width:"30em",paddingBottom:"3em",paddingRight:"1em"}},o.a.createElement(N.a,{activeIndex:n,next:this.nextCoc,previous:this.previousCoc},o.a.createElement(V.a,{items:Q,activeIndex:n,onClickHandler:this.goToIndexCoc}),i,o.a.createElement(D.a,{direction:"prev",onClickHandler:this.previousCoc}),o.a.createElement(D.a,{direction:"next",onClickHandler:this.nextCoc}))),o.a.createElement("div",null,o.a.createElement("p",{style:{width:"50%",marginLeft:"2.5em",fontFamily:"Montserrat, sans-serif",paddingBottom:"3em",fontSize:"1.2em"}},"Shortly after high school, I attended College of the Canyons in Valencia, CA. There, I majored in Fire Tech for my first 7 months, then came to realization that Fire Fighting wasn't the path that I ultimately wanted to take in life. Following that period of time, I felt it was necessary to switch my major to Kinesiology. I spent time taking Anatomy and other classes that were relevant to complete my major classes while working on prerequisite classes. Then, I had felt that Kinesiology was to specific. I feared changing my mind further down the line in terms of my career path, so I changed my major for the last time. I decided to major in Business / Entrepreneurship. During the time I was taking classes working towards my major, life took it's toll and I ended up having to drop school and focus on work only. A month later, my life changed completely and I ended up moving to Arizona."))))))}}]),t}(n.Component),J=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"contactInfo",style:{backgroundColor:"#2a2a2a",marginTop:"-15px"}},o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",fontSize:"3em",fontWeight:"bold",paddingTop:"3%",color:"#add8e6"}},"Let's get in touch ",o.a.createElement("i",{style:{fontSize:".8em"},class:"fas fa-arrow-down"}))),o.a.createElement("div",{style:{paddingBottom:"2em"}},o.a.createElement(A.a,{style:{justifyContent:"center",paddingTop:"2em"}},o.a.createElement(M.a,{sm:"1"},o.a.createElement("div",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/lucasjulianromero/"},o.a.createElement("i",{style:{color:"#add8e6",fontSize:"4em"},class:"fab fa-linkedin"})))),o.a.createElement(M.a,{sm:"1"},o.a.createElement("div",null,o.a.createElement("a",{href:"mailto:lucasjulromero@gmail.com"},o.a.createElement("i",{style:{color:"#add8e6",fontSize:"4em"},class:"far fa-envelope"}))))))))}}]),t}(n.Component),X=a(59),Y=a.n(X),Z=(a(120),{styles:{position:"absolute",color:"white",fontFamily:"Montserrat, sans-serif",top:"42%",left:"50%",transform:"translate(-50%, -50%)",animation:"moveInLeft 2s ease-out"}}),$={styles:{position:"absolute",color:"white",fontFamily:"Montserrat, sans-serif",top:"50%",left:"50%",transform:"translate(-50%, -50%)",animation:"moveInRight 2s ease-out"}},ee={styles:{position:"absolute",color:"white",top:"60%",left:"50%",transform:"translate(-50%, -50%)",fontFamily:"Montserrat, sans-serif",height:"10%",width:"20%"}},te={styles:{marginLeft:"5%",marginTop:"3%"}},ae=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"home"},o.a.createElement("h1",{style:Z.styles},"Hello, I'm ",o.a.createElement("h1",{style:{fontFamily:"Montserrat, sans-serif",display:"inline",fontSize:"1em",color:"#cd5c5c"}},"Lucas Romero.")),o.a.createElement("h1",{style:$.styles},"I'm a Full Stack Web Developer."),o.a.createElement("a",{href:"#aboutme"},o.a.createElement(H.a,{style:ee.styles,outline:!0},"View my work ",o.a.createElement("i",{style:te.styles,className:"fas fa-arrow-circle-down"}))),o.a.createElement(Y.a,{params:{particles:{number:{value:231,density:{enable:!0,value_area:1441.5568814319463}},color:{value:"#add8e6"},shape:{type:"circle",stroke:{width:0,color:"#add8e6"},polygon:{nb_sides:9},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.11212109077804028,random:!1,anim:{enable:!1,speed:.5678085025267481,opacity_min:.1,sync:!1}},size:{value:4.004324670644295,random:!0,anim:{enable:!1,speed:12.167325054144603,size_min:59.21431526350373,sync:!1}},line_linked:{enable:!0,distance:256.2767789212349,color:"#00ffff",opacity:.32034597365154366,width:1.4415568814319464},move:{enable:!0,speed:1.6017298682577181,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:1441.5568814319463,rotateY:1441.5568814319463}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:340.68510151604886,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},style:{width:"100%",height:"100vh",backgroundColor:"#2a2a2a",borderBottom:"2px solid #add8e6"}}),o.a.createElement(x,null),o.a.createElement(O,null),o.a.createElement(B,null),o.a.createElement(q,null),o.a.createElement(J,null))}}]),t}(n.Component),ne=a(133),oe=a(134),ie=a(135),le=a(136),re={styles:{backgroundColor:"#2a2a2a",borderBottom:"1px solid #add8e6",display:"flex",justifyContent:"center",position:"fixed",zIndex:"1000",width:"100%",top:"0"}},se={styles:{fontFamily:"Montserrat, sans-serif",color:"white"}},ce=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne.a,{style:re.styles,expand:"md"},o.a.createElement(oe.a,{navbar:!0,className:"mx-auto"},o.a.createElement(ie.a,null,o.a.createElement("a",{href:"#home"},o.a.createElement(le.a,{style:se.styles},"Home"))),o.a.createElement(ie.a,null,o.a.createElement("a",{href:"#aboutme"},o.a.createElement(le.a,{style:se.styles},"About"))),o.a.createElement(ie.a,null,o.a.createElement("a",{href:"#tsSkills"},o.a.createElement(le.a,{style:se.styles},"Skills"))),o.a.createElement(ie.a,null,o.a.createElement("a",{href:"#applications"},o.a.createElement(le.a,{style:se.styles},"Applications"))),o.a.createElement(ie.a,null,o.a.createElement("a",{href:"#educated"},o.a.createElement(le.a,{style:se.styles},"Education"))),o.a.createElement(ie.a,null,o.a.createElement("a",{href:"#contactInfo"},o.a.createElement(le.a,{style:se.styles},"Contact"))))))}}]),t}(n.Component),me=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return window.screen&&window.screen.width<750?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{textAlign:"center",fontFamily:"Montserrat, sans-serif",backgroundColor:"#f8f8ff",minHeight:"100vh"}},o.a.createElement("h1",{style:{color:"#808080",paddingTop:"1em"}},"Hello!"),o.a.createElement("p",{style:{marginTop:"1em",color:"#808080",paddingLeft:"3em",paddingRight:"3em"}},"Thank you for taking the time to visit my portfolio website. Unfortunately, it does not support mobile devices (just yet)."),o.a.createElement("i",{style:{fontSize:"2em",color:"#add8e6"},class:"fas fa-arrow-down"}),o.a.createElement("p",{style:{marginTop:"1em",color:"#808080",paddingLeft:"3em",paddingRight:"3em"}},"Please feel free to view my portfolio website on a laptop or desktop."),o.a.createElement("i",{style:{fontSize:"2em",color:"#add8e6"},class:"fas fa-arrow-down"}),o.a.createElement("p",{style:{marginTop:"1em",color:"#808080",paddingLeft:"3em",paddingRight:"3em"}},"If not feasible, please feel free to contact me below!"),o.a.createElement("a",{style:{marginRight:"5px"},href:"https://www.linkedin.com/in/lucasjulianromero/"},o.a.createElement("i",{style:{color:"#add8e6",fontSize:"3em"},class:"fab fa-linkedin"})),o.a.createElement("a",{style:{marginLeft:"5px"},href:"mailto:lucasjulromero@gmail.com"},o.a.createElement("i",{style:{color:"#add8e6",fontSize:"3em"},class:"far fa-envelope"})))):o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,null),o.a.createElement(ae,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(121);l.a.render(o.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/lucas_port_immy.ba39474e.jpg"},61:function(e,t,a){e.exports=a(122)},66:function(e,t,a){},71:function(e,t){},73:function(e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.32b91015.chunk.js.map