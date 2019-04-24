import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const galvItems = [
  {
    src: 'https://www.logolynx.com/images/logolynx/46/463d4095702ef4e7ae91f3124d384f9a.jpeg',
  },
  {
    src: 'http://dtphx.org/wp-content/uploads/2017/12/IMG_0441.jpg' 
  },
  {
    src: 'http://www.tldc19.com/wp-content/uploads/2018/11/front-desk.png'
  },
  {
    src: 'https://i1.wp.com/modeeffect.com/wp-content/uploads/2018/10/IMG_8787.jpg?resize=3682%2C2070&ssl=1'
  },
  {
    src: 'https://eventective-media.azureedge.net/1912313_md.jpg'
  }
];

const cocItems = [
  {
    src: 'https://www.klassencorp.com/wp-content/uploads/2016/08/college-of-the-canyons-klassen-project.jpg'
  },
  {
    src: 'https://i.pinimg.com/originals/f7/88/f7/f788f7498e0e17fe5e6c892468e2a305.jpg'
  },
  {
    src: 'https://www.canyons.edu/Offices/PIO/publishingimages/resources/aliso_hall_6x4_300.jpg'
  },
  {
    src: 'https://static1.squarespace.com/static/54ca7600e4b094de1a773024/54efac06e4b0844ebbc29d0f/54efaef7e4b0ad929f9960cb/1424994084247/COC+1.jpg?format=1000w'
  },
];



const education = {
  styles: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#808080',
    fontSize: "3em",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "2.5em"
  }
}

 const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Education extends Component {

  constructor(props) {
    super(props);
    this.state = { galvActiveIndex: 0, cocActiveIndex: 0, galv: false, coc: false, googleMaps: true };
    this.nextGalv = this.nextGalv.bind(this);
    this.previousGalv = this.previousGalv.bind(this);
    this.goToIndexGalv = this.goToIndexGalv.bind(this);
    this.onExitingGalv = this.onExitingGalv.bind(this);
    this.onExitedGalv = this.onExitedGalv.bind(this);
    this.nextCoc = this.nextCoc.bind(this);
    this.previousCoc = this.previousCoc.bind(this);
    this.goToIndexCoc = this.goToIndexCoc.bind(this);
    this.onExitingCoc = this.onExitingCoc.bind(this);
    this.onExitedCoc = this.onExitedCoc.bind(this);
  }

  onExitingGalv() {
    this.animatingGalv = true;
  }

  onExitedGalv() {
    this.animatingGalv = false;
  }

  nextGalv() {
    if (this.animatingGalv) return;
    const nextIndex = this.state.galvActiveIndex === galvItems.length - 1 ? 0 : this.state.galvActiveIndex + 1;
    this.setState({ galvActiveIndex: nextIndex });
  }

  previousGalv() {
    if (this.animatingGalv) return;
    const nextIndex = this.state.galvActiveIndex === 0 ? galvItems.length - 1 : this.state.galvActiveIndex - 1;
    this.setState({ galvActiveIndex: nextIndex });
  }

  goToIndexGalv(newIndex) {
    if (this.animatingGalv) return;
    this.setState({ galvActiveIndex: newIndex });
  }

  onExitingCoc() {
    this.animatingCollege = true;
  }

  onExitedCoc() {
    this.animatingCollege = false;
  }

  nextCoc() {
    if (this.animatingCollege) return;  
    const nextIndex = this.state.cocActiveIndex === cocItems.length - 1 ? 0 : this.state.cocActiveIndex + 1;
    this.setState({ cocActiveIndex: nextIndex });
  }

  previousCoc() {
    if (this.animatingCollege) return;
    const nextIndex = this.state.cocActiveIndex === 0 ? cocItems.length - 1 : this.state.cocActiveIndex - 1;
    this.setState({ cocActiveIndex: nextIndex });
  }

  goToIndexCoc(newIndex) {
    if (this.animatingCollege) return;
    this.setState({ cocActiveIndex: newIndex });
  }
  

   galvanizeLocation = {
    center: {
      lat: 33.439830,
      lng: -112.067020
    },
    zoom: 13
  };

  cocLocation = {
    center: {
      lat: 34.404020,
      lng: -118.569890
    },
    zoom: 13
  };

  googleMaps = (campus) => {
   console.log([campus])
   this.setState({
      [campus]: !this.state[campus]
    })
  }

    render() {

      const { galvActiveIndex } = this.state;

      const galvSlides = galvItems.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExitingGalv}
            onExited={this.onExitedGalv}
            key={item.src}
          >
            <img style={{width: "30em", height: "20em"}} src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const { cocActiveIndex } = this.state;

      const cocSlides = cocItems.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExitingCoc}
            onExited={this.onExitedCoc}
            key={item.src}
          >
            <img style={{width: "30em", height: "20em"}} src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
      
      return (
        <div style={{backgroundColor: "#FFFAFA"}}>
          <h1 style={education.styles}>Education <h1 style={{color: "#add8e6", fontSize: "1em", fontWeight: "bold", display: "inline"}}>History</h1><i style={{marginLeft: ".5em"}} class="fas fa-book"></i></h1>
          <div>
            <h1 style={{marginTop: "2em", marginLeft: "1.1em", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2.5"}}>Galvanize</h1>
            <h1 style={{marginLeft: "2em", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>Phoenix, AZ <button style={{display: "inline", color: "red", background:'transparent', border: 'none'}}> <i onClick={() => this.googleMaps('galv')} class="fas fa-map-pin"></i></button></h1>
            <h1 style={{marginLeft: "2em", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>September 2018 <i style={{fontSize: ".7em", color: "#add8e6"}} className="fas fa-arrow-circle-right"></i> <p style={{color: "#add8e6", fontFamily: 'Montserrat, sans-serif', display: "inline"}}>March 2019</p></h1>
               {this.state.galv ? <div style={{ height: '50vh', width: '50%', marginLeft: "2%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCf-we8wkTCTggl9WoiKauYqdwhTXke9RA'}}
                defaultCenter={this.galvanizeLocation.center}
                defaultZoom={this.galvanizeLocation.zoom}
              >
            </GoogleMapReact>
         </div> : null}  
          <div style={{float: "right", height: "20em", width: "30em", paddingRight: "1em"}}>
          <Carousel
              activeIndex={galvActiveIndex}
              next={this.nextGalv}
              previous={this.previousGalv}
            >
              <CarouselIndicators items={galvItems} activeIndex={galvActiveIndex} onClickHandler={this.goToIndexGalv} />
              {galvSlides}
              <CarouselControl direction="prev" onClickHandler={this.previousGalv} />
              <CarouselControl direction="next" onClickHandler={this.nextGalv} />
          </Carousel>
          </div> 
          <div>
          <p style={{width: "50%", marginLeft: "2.5em", fontFamily: 'Montserrat, sans-serif', fontSize: "1.2em"}}>Galvanize holds a Web Development Immersive Program
           that highlights full-stack web development. Learning HTML, CSS, javascript, git, Node.js, Knex, Express, MVC, PostgreSQL, React, Vue,
           and State Management within the duration of 6 months, felt like an overload at the time. I sit here and reflect every now and then,
           on how effective, life changing, and amazing the Galvanize Immersive Program actually was. With deadlines as short as four days to 
           create an application, assessments, sleepless nights, and mock interviews, I have been given the opportunity to take my programming 
           abilities to a whole new level, and I owe every bit of programming knowledge to Galvanize.</p>
          </div>
          <div>
            <h1 style={{marginLeft: "1em", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2.8em", marginTop: "3em"}}>College Of The Canyons</h1>
            <h1 style={{marginLeft: "2em", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>Valencia, CA <button style={{display: "inline", background: 'transparent', border: 'none' }}><i style={{color: "red"}} onClick={() =>this.googleMaps('coc')} class="fas fa-map-pin"></i></button></h1>
            <h1 style={{marginLeft: "2em", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>August 2016 <i style={{fontSize: ".7em", color: "#add8e6"}} className="fas fa-arrow-circle-right"></i> <p style={{color: "#add8e6", fontFamily: 'Montserrat, sans-serif', display: "inline"}}>February 2018</p></h1>
               {this.state.coc ? <div style={{ height: '50vh', width: '50%', marginLeft: "2%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCf-we8wkTCTggl9WoiKauYqdwhTXke9RA'}}
                defaultCenter={this.cocLocation.center}
                defaultZoom={this.cocLocation.zoom}
              >
            </GoogleMapReact>
         </div> : null}  
          <div style={{float: "right", height: "20", width: "30em", paddingBottom: "3em", paddingRight: "1em"}}>
          <Carousel
              activeIndex={cocActiveIndex}
              next={this.nextCoc}
              previous={this.previousCoc}
            >
              <CarouselIndicators items={cocItems} activeIndex={cocActiveIndex} onClickHandler={this.goToIndexCoc} />
              {cocSlides}
              <CarouselControl direction="prev" onClickHandler={this.previousCoc} />
              <CarouselControl direction="next" onClickHandler={this.nextCoc} />
          </Carousel>
          </div> 
          <div>
          <p style={{width: "50%", marginLeft: "2.5em", fontFamily: 'Montserrat, sans-serif', paddingBottom: "3em", fontSize: "1.2em"}}>Shortly after high school, I attended College of the Canyons
          in Valencia, CA. There, I majored in Fire Tech for my first 7 months, then came to realization that Fire Fighting wasn't the path that I ultimately wanted to take in life. 
          Following that period of time, I felt it was necessary to switch my major to Kinesiology. I spent time taking Anatomy and other classes that were relevant to 
          complete my major classes while working on pre-requisite classes. Then, I had felt that Kinesiology was to specific. I feared changing my mind further down the line, so
          I changed my major for the last time. I decided to major in Business / Entrepreneurship. During the time I was taking classes under that major, life took it's toll and I ended up having 
          to drop school and focus on work only. A month later, my life changed completely and I ended up moving my life over to Arizona.</p>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

  
  export default Education;