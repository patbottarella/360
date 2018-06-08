import React, { Component } from 'react';
import image_pos1 from '../../images/image_pos1.jpg';
import image_pos2 from '../../images/image_pos2.jpg';
import image_pos3 from '../../images/image_pos3.jpg';
import image_pos4 from '../../images/image_pos4.jpg';
import image_pos5 from '../../images/image_pos5.jpg';
import image_pos6 from '../../images/image_pos6.jpg';
import image_pos7 from '../../images/image_pos7.jpg';
import image_pos8 from '../../images/image_pos8.jpg';
import default_image from '../../images/default_image.jpg';
import ReactDOM from 'react-dom';
import './styles.css';


class TestImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      imageCoordinates: {
        width: 0,
        height: 0,
        topPosition: 0,
        leftPosition: 0,
        middlePoint: 0
      }
    };
  }

  componentDidMount() {
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("resize", this.updateImageLocation);
    this.updateImageLocation();

  }

  updateDimensions = () => {
    this.setState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
    });
  }

  updateImageLocation = () => {
    this.setState({
      imageCoordinates: {
        width: Number(ReactDOM.findDOMNode(this.refs.image).getBoundingClientRect().width).toFixed(0),
        height: Number(ReactDOM.findDOMNode(this.refs.image).getBoundingClientRect().height).toFixed(0),
        topPosition: Math.round(ReactDOM.findDOMNode(this.refs.image).getBoundingClientRect().top),
        leftPosition: Math.round(ReactDOM.findDOMNode(this.refs.image).getBoundingClientRect().left),
        middlePoint: this.calculateMiddlePoint()
      }
    });
  }

  calculateMiddlePoint = () => {
    const middlePoint = {
      x: Math.round(ReactDOM.findDOMNode(this.refs.image).getBoundingClientRect().left) + (Number(ReactDOM.findDOMNode(this.refs.image).getBoundingClientRect().width).toFixed(0) / 2),
      y: Math.round(ReactDOM.findDOMNode(this.refs.image).getBoundingClientRect().top) + (Number(ReactDOM.findDOMNode(this.refs.image).getBoundingClientRect().height).toFixed(0) / 2)
    }
    return middlePoint;
  }

  render() {
    return (
      <div className="ImageWrapper">
        {console.log('Element-Position', this)}
        <img className="Image" ref="image" src={default_image} />
        <div className="InfoBox">
          <p>{`x: ${this.props.position.x} `}</p>
          <p>{`y: ${this.props.position.y}`}</p>
          <p>{`window width: ${this.state.screenWidth}`}</p>
          <p>{`window height: ${this.state.screenHeight}`}</p>
          <p>{`imageWidth: ${this.state.imageCoordinates.width}`}</p>
          <p>{`imageHeight: ${this.state.imageCoordinates.height}`}</p>
          <p>{`imageposition-top: ${this.state.imageCoordinates.topPosition}`}</p>
          <p>{`imageposition-left: ${this.state.imageCoordinates.leftPosition}`}</p>
          <p>{`image middlePointX: ${this.state.imageCoordinates.middlePoint.x}`}</p>
          <p>{`image middlePointY: ${this.state.imageCoordinates.middlePoint.y}`}</p>
        </div>
      </div>
    );
  }
}

export default TestImage;