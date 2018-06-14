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


class CursorViewImage extends React.Component {
  constructor(props) {
    super(props);

    //create a reference that we will add to the HTML-Element from which we need the DOM position
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
    //event-listeners to update the location of the image in the DOM if the width or height of the browser changes
    window.addEventListener("resize", this.updateScreenSize);
    window.addEventListener("resize", this.updateImageLocation);
    this.updateImageLocation();
  }

  updateScreenSize = () => {
    this.setState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
    });
  }

  //update the state of the component and set the new values for their current position in the DOM
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

  //check if cursor is on the left side of the image
  isLeft = (data, cursorLocation) => {
    if (data.cursorPosition.x >= 0 && data.cursorPosition.x <= data.imagePosition.x) {
      cursorLocation.isLeft = true;
    }
    return cursorLocation;
  }

  //check if cursor is on top of the image
  isUpper = (data, cursorLocation) => {
    if(data.cursorPosition.y >= 0 && data.cursorPosition.y <= data.imagePosition.y) {
      cursorLocation.isUpper = true;
    }
    return cursorLocation;
  }

  //check if cursor is on the right side of the image
  isRight = (data, cursorLocation) => {
    if (data.cursorPosition.x >= (data.imagePosition.x + data.imageWidth) && data.cursorPosition.x <= data.screenDefinitions.width) {
      cursorLocation.isRight = true;
    }
    return cursorLocation;
  }

  //check if cursor is below the image
  isBelow = (data, cursorLocation) => {
    if (data.cursorPosition.y >= (data.imagePosition.y + data.imageHeight) && data.cursorPosition.y <= data.screenDefinitions.height) {
      cursorLocation.isBelow = true;
    }
    return cursorLocation;
  }

  calculateImagePosition = (data, cursorLocation) => {
    //update the cursorLocation: set the property to 'true', if the cursor is below the image etc...
    cursorLocation = this.isUpper(data, cursorLocation);
    cursorLocation = this.isRight(data, cursorLocation);
    cursorLocation = this.isLeft(data, cursorLocation);
    cursorLocation = this.isBelow(data, cursorLocation);

    //console.log('cursorLocation', cursorLocation);
  }


  getImageSource = () => {
    //initialize used coordinates to calculate which image will be rendered
    const calculationData = {
      imagePosition: {
        x: this.state.imageCoordinates.leftPosition,
        y: this.state.imageCoordinates.topPosition
      },
      imageWidth: this.state.imageCoordinates.width,
      imageHeight: this.state.imageCoordinates.height,
      cursorPosition: {
        x: this.props.position.x,
        y: this.props.position.y
      },
      screenDefinitions: {
        width: this.state.screenWidth,
        height: this.state.screenHeight
      }
    };

    //preparing an empty object for the response of the calculation
    const cursorLocation = {};

    //calculate the current position of the cursor (left of the image, below the image, etc...)
    this.calculateImagePosition(calculationData, cursorLocation);

    //RENDER IMAGE POSITION 8
    if (cursorLocation.isLeft && cursorLocation.isUpper) {
      return image_pos8;
    }
    //RENDER IMAGE POSITION 1
    else if (cursorLocation.isUpper && !cursorLocation.isLeft && !cursorLocation.isRight) {
      return image_pos1;
    }
    //RENDER IMAGE POSITION 2
    else if (cursorLocation.isUpper && cursorLocation.isRight) {
      return image_pos2;
    }
    //RENDER IMAGE POSITION 3
    else if (cursorLocation.isRight && !cursorLocation.isUpper && !cursorLocation.isBelow) {
      return image_pos3;
    }
    //RENDER IMAGE POSITION 4
    else if (cursorLocation.isRight && cursorLocation.isBelow) {
      return image_pos4;
    }
    //RENDER IMAGE POSITION 5
    else if (cursorLocation.isBelow && !cursorLocation.isLeft && !cursorLocation.isRight) {
      return image_pos5;
    }
    //RENDER IMAGE POSITION 6
    else if (cursorLocation.isLeft && cursorLocation.isBelow) {
      return image_pos6;
    }
    //RENDER IMAGE POSITION 7
    else if (cursorLocation.isLeft && !cursorLocation.isBelow && !cursorLocation.isUpper) {
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

export default CursorViewImage;