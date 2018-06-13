import React, { Component } from 'react';
import image_pos1 from '../../images/pat_pos1.jpg';
import image_pos2 from '../../images/pat_pos2.jpg';
import image_pos3 from '../../images/pat_pos3.jpg';
import image_pos4 from '../../images/pat_pos4.jpg';
import image_pos5 from '../../images/pat_pos5.jpg';
import image_pos6 from '../../images/pat_pos6.jpg';
import image_pos7 from '../../images/pat_pos7.jpg';
import image_pos8 from '../../images/pat_pos8.jpg';
import default_image from '../../images/pat_default.jpg';
import ReactDOM from 'react-dom';
import './styles.css';


class Image extends React.Component {
  constructor(props) {
    super(props);

    this.Ref = React.createRef();

    this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      imageCoordinates: {
        width: 0,
        height: 0,
        topPosition: 0,
        leftPosition: 0,
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
        width: parseInt(Number(ReactDOM.findDOMNode(this.Ref.current).getBoundingClientRect().width).toFixed(0)),
        height: parseInt(Number(ReactDOM.findDOMNode(this.Ref.current).getBoundingClientRect().height).toFixed(0)),
        topPosition: Math.round(ReactDOM.findDOMNode(this.Ref.current).getBoundingClientRect().top),
        leftPosition: Math.round(ReactDOM.findDOMNode(this.Ref.current).getBoundingClientRect().left),
      }
    });
  }

  getImageSource = () => {
    const imagePosition = {
      x: this.state.imageCoordinates.leftPosition,
      y: this.state.imageCoordinates.topPosition
    };
    const imageWidth = this.state.imageCoordinates.width;
    const imageHeight = this.state.imageCoordinates.height;
    const cursorPosition = {
      x: this.props.position.x,
      y: this.props.position.y
    };
    const screenDefinitions = {
      width: this.state.screenWidth,
      height: this.state.screenHeight
    };

    //RENDER IMAGE POSITION 8
    if (cursorPosition.x >= 0 && cursorPosition.x <= imagePosition.x && cursorPosition.y >= 0 && cursorPosition.y <= imagePosition.y) {
      return image_pos8;
    }
    //RENDER IMAGE POSITION 1
    else if (cursorPosition.x >= imagePosition.x && cursorPosition.x <= (imagePosition.x + imageWidth) && cursorPosition.y >= 0 && cursorPosition.y <= imagePosition.y) {
      return image_pos1;
    }
    //RENDER IMAGE POSITION 2
    else if (cursorPosition.x >= (imagePosition.x + imageWidth) && cursorPosition.x <= screenDefinitions.width && cursorPosition.y >= 0 && cursorPosition.y <= imagePosition.y) {
      return image_pos2;
    }
    //RENDER IMAGE POSITION 3
    else if (cursorPosition.x >= (imagePosition.x + imageWidth) && cursorPosition.x <= screenDefinitions.width && cursorPosition.y >= imagePosition.y && cursorPosition.y <= (imagePosition.y + imageHeight)) {
      return image_pos3;
    }
    //RENDER IMAGE POSITION 4
    else if (cursorPosition.x >= (imagePosition.x + imageWidth) && cursorPosition.x <= screenDefinitions.width && cursorPosition.y >= (imagePosition.y + imageHeight) && cursorPosition.y <= screenDefinitions.height) {
      return image_pos4;
    }
    //RENDER IMAGE POSITION 5
    else if (cursorPosition.x >= imagePosition.x && cursorPosition.x <= (imagePosition.x + imageWidth) && cursorPosition.y >= (imagePosition.y + imageHeight) && cursorPosition.y <= screenDefinitions.height) {
      return image_pos5;
    }
    //RENDER IMAGE POSITION 6
    else if (cursorPosition.x >= 0 && cursorPosition.x <= imagePosition.x && cursorPosition.y >= (imagePosition.y + imageHeight) && cursorPosition.y <= screenDefinitions.height) {
      return image_pos6;
    }
    //RENDER IMAGE POSITION 7
    else if (cursorPosition.x >= 0 && cursorPosition.x <= imagePosition.x && cursorPosition.y >= imagePosition.y && cursorPosition.y <= (imagePosition.y + imageHeight)) {
      return image_pos7;
    }
    //RENDER DEFAULT IMAGE
    else {
      return default_image;
    }
  }

  renderImage = () => {
    return (
      <img className="Image" ref={this.Ref} alt="teamMember" src={this.getImageSource()} />
    );
  }

  render() {
    return (
      <div className="ImageWrapper">
        {this.renderImage()}
        <div className="NameBox">{this.props.name}</div>
      </div>
    );
  }
}

export default Image;