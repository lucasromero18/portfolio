import React, {Component} from 'react';
let ProgressBar = require('progressbar.js');

class TroyBar extends Component {
    render() {
        let idName = this.props.skill.replace(' ', '');
        return (
            <div style={{width:this.props.widthHeight + 'px', height:this.props.widthHeight + 'px', display: 'inline-block'}}>
                <h3 style={{textAlign: 'center', height: '20%', color: this.props.percentageColor, fontFamily: 'Montserrat, sans-serif'}}>{this.props.skill}</h3>
                <div id={idName}>
                </div>
            </div>
        );
    }
    componentDidMount(){
        let idName = this.props.skill.replace(' ', '');        
        var bar = new ProgressBar.Circle(`#${idName}`, {
            color: this.props.color,
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: true
            },
            from: { color: this.props.color, width: 1 },
            to: { color: this.props.color, width: 4 },
            // Set default step function for all animate calls
            step: function(state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);
              console.log(circle.value())
              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value + '%');
              }
          
            },
            svgStyle: {
                width: '80%',
                marginLeft: '10%'
            }
          });
          
          
          bar.text.style.fontFamily = 'Montserrat, sans-serif'
          bar.text.style.fontSize = '2rem';
          bar.text.style.color = '#D3D3D3';
          bar.animate(this.props.val);
    }
  }
  
  export default TroyBar;