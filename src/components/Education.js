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
    src: 'https://www.canyons.edu/Offices/PIO/PublishingImages/Logos/coc_logo_1200px.jpg',
  },
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
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "7%"
  }
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Education extends Component {

  constructor(props) {
    super(props);
    this.state = { galvActiveIndex: 0, cocActiveIndex: 0, galv: false, coc: false };
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
      [campus]: [!campus]
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
            <img style={{width: "500px", height: "300px"}} src={item.src} alt={item.altText} />
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
            <img style={{width: "500px", height: "300px"}} src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
      
      return (
        <div style={{backgroundColor: "#FFFAFA"}}>
          <h1 style={education.styles}>Education <h1 style={{color: "#add8e6", fontSize: "40px", fontWeight: "bold", display: "inline"}}>History</h1></h1>
          <div>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2.5"}}>Galvanize</h1>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>Phoenix, AZ <button style={{display: "inline", color: "red"}}> <i onClick={() => this.googleMaps('galv')} class="fas fa-map-pin"></i></button></h1>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>September 2018 <i style={{fontSize: ".7em", color: "#add8e6"}} className="fas fa-arrow-circle-right"></i> <p style={{color: "#add8e6", fontFamily: 'Montserrat, sans-serif', display: "inline"}}>March 2019</p></h1>
             {this.state.galv ? <div style={{ height: '50vh', width: '50%', marginLeft: "2%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCf-we8wkTCTggl9WoiKauYqdwhTXke9RA'}}
                defaultCenter={this.galvanizeLocation.center}
                defaultZoom={this.galvanizeLocation.zoom}
              >
            </GoogleMapReact>
         </div> : null} 
          <div style={{float: "right", height: "250px", width: "500px"}}>
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
          <p style={{width: "50%", marginLeft: "2%", fontFamily: 'Montserrat, sans-serif'}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a 
              complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human 
              happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to 
              pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or 
              desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure 
              im some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some 
              advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, 
              or one who avoids a pain that produces no resultant pleasure?</p>
          </div>
          <div>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2.5", marginTop: "5%"}}>College Of The Canyons</h1>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>Valencia, CA <button style={{display: "inline"}}><i style={{color: "red"}} onClick={() =>this.googleMaps('coc')} class="fas fa-map-pin"></i></button></h1>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>August 2016 <i style={{fontSize: ".7em", color: "#add8e6"}} className="fas fa-arrow-circle-right"></i> <p style={{color: "#add8e6", fontFamily: 'Montserrat, sans-serif', display: "inline"}}>February 2018</p></h1>
             {this.state.coc ? <div style={{ height: '50vh', width: '50%', marginLeft: "2%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCf-we8wkTCTggl9WoiKauYqdwhTXke9RA'}}
                defaultCenter={this.cocLocation.center}
                defaultZoom={this.cocLocation.zoom}
              >
            </GoogleMapReact>
         </div> : null} 
          <div style={{float: "right", height: "250px", width: "500px", paddingBottom: "5%"}}>
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
          <p style={{width: "50%", marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', paddingBottom: "5%"}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a 
              complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human 
              happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to 
              pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or 
              desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure 
              im some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some 
              advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, 
              or one who avoids a pain that produces no resultant pleasure?</p>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

  
  export default Education;