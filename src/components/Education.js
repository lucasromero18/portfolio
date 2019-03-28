import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



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

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Education extends Component {
  
  //  galvanizeLocation = {
  //   center: {
  //     lat: 33.439830,
  //     lng: -112.067020
  //   },
  //   zoom: 13
  // };

  // cocLocation = {
  //   center: {
  //     lat: 34.404020,
  //     lng: -118.569890
  //   },
  //   zoom: 13
  // };

    render() {
      
      return (
        <div style={{backgroundColor: "#FFFAFA"}}>
          <h1 style={education.styles}>Education <h1 style={{color: "#add8e6", fontSize: "40px", fontWeight: "bold", display: "inline"}}>History</h1></h1>
          <div>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#add8e6", fontSize: "2.5"}}>Galvanize</h1>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>Phoenix, AZ <div style={{display: "inline", color: "red"}}> <i class="fas fa-map-pin"></i></div></h1>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>September 2018 <i style={{fontSize: ".7em", color: "#add8e6"}} className="fas fa-arrow-circle-right"></i> <p style={{color: "#add8e6", fontFamily: 'Montserrat, sans-serif', display: "inline"}}>March 2019</p></h1>
             {/* <div style={{ height: '50vh', width: '50%', marginLeft: "2%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCf-we8wkTCTggl9WoiKauYqdwhTXke9RA'}}
                defaultCenter={this.galvanizeLocation.center}
                defaultZoom={this.galvanizeLocation.zoom}
              >
            </GoogleMapReact>
         </div>  */}
          <div>
            <h1 style={{float: "right", fontSize: "1.4em"}}>Vertical Image Scrollbar</h1>
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
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>Valencia, CA <div style={{display: "inline", color: "red"}}><i class="fas fa-map-pin"></i></div></h1>
            <h1 style={{marginLeft: "2%", fontFamily: 'Montserrat, sans-serif', color: "#808080", fontSize: "1.5em"}}>August 2016 <i style={{fontSize: ".7em", color: "#add8e6"}} className="fas fa-arrow-circle-right"></i> <p style={{color: "#add8e6", fontFamily: 'Montserrat, sans-serif', display: "inline"}}>February 2018</p></h1>
            {/* <div style={{ height: '50vh', width: '50%', marginLeft: "2%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCf-we8wkTCTggl9WoiKauYqdwhTXke9RA'}}
                defaultCenter={this.cocLocation.center}
                defaultZoom={this.cocLocation.zoom}
              >
            </GoogleMapReact>
         </div>  */}
          </div>
          <div>
            <h1 style={{float: "right", fontSize: "1.4em"}}>Vertical Image Scrollbar</h1>
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
        </div>
      </div>
      );
    }
  }

  
  export default Education;