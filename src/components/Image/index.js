import React, { Component } from 'react';
import './styles.css';
import image_pos1 from '../../images/pat_pos1.jpg';
import image_pos2 from '../../images/pat_pos2.jpg';
import image_pos3 from '../../images/pat_pos3.jpg';
import image_pos4 from '../../images/pat_pos4.jpg';
import image_pos5 from '../../images/pat_pos5.jpg';
import image_pos6 from '../../images/pat_pos6.jpg';
import image_pos7 from '../../images/pat_pos7.jpg';
import image_pos8 from '../../images/pat_pos8.jpg';
import default_image from '../../images/pat_default.jpg';


class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      imageWidth: 250,
      imageHeight: 180
    };
  }

  componentDidMount() {
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  renderImage = () => {
    const x = this.props.position.x;
    const y = this.props.position.y;
    const windowWidth = this.state.width;
    const windowHeight = this.state.height;
    const imageWidth = this.state.imageWidth;
    const imageHeight = this.state.imageHeight;

    //RENDER IMAGE POSITION 8
    if (x > 0 && x < (windowWidth / 2) - (imageWidth / 2) && y >= 0 && y <= (windowHeight / 2) - (imageHeight / 2)) {
      return < img className="Image" src={image_pos8} />
    }
    //RENDER IMAGE POSITION 1
    else if (x >= (windowWidth / 2) - (imageWidth / 2) && x <= (windowWidth / 2) + (imageWidth / 2) && y >= 0 && y <= (windowHeight / 2) - (imageHeight / 2)) {
      return < img className="Image" src={image_pos1} />
    }
    //RENDER IMAGE POSITION 2
    else if (x >= (windowWidth / 2) + (imageWidth / 2) && x <= windowWidth && y >= 0 && y <= (windowHeight / 2) - (imageHeight / 2)) {
      return < img className="Image" src={image_pos2} />
    }
    //RENDER IMAGE POSITION 3
    else if (x >= (windowWidth / 2) + (imageWidth / 2) && x <= windowWidth && y >= (windowHeight / 2) - (imageHeight / 2) && y <= (windowHeight / 2) + (imageHeight / 2)) {
      return <img className="Image" src={image_pos3} />
    }
    //RENDER IMAGE POSITION 4
    else if (x >= (windowWidth / 2) + (imageWidth / 2) && x <= windowWidth && y >= (windowHeight / 2) + (imageHeight / 2) && y <= windowHeight) {
      return <img className="Image" src={image_pos4} />
    }
    //RENDER IMAGE POSITION 5
    else if (x >= (windowWidth / 2) - (imageWidth / 2) && x <= (windowWidth / 2) + (imageWidth / 2) && y >= (windowHeight / 2) + (imageHeight / 2) && y <= windowHeight) {
      return <img className="Image" src={image_pos5} />
    }
    //RENDER IMAGE POSITION 6
    else if (x > 0 && x < (windowWidth / 2) - (imageWidth / 2) && y >= (windowHeight / 2) + (imageHeight / 2) && y <= windowHeight) {
      return <img className="Image" src={image_pos6} />
    }
    //RENDER IMAGE POSITION 7
    else if (x > 0 && x < (windowWidth / 2) - (imageWidth / 2) && y >= (windowHeight / 2) - (imageHeight / 2) && y <= (windowHeight / 2) + (imageHeight / 2)) {
      return <img className="Image" src={image_pos7} />
    }
    //RENDER DEFAULT IMAGE
    else {
      return <img className="Image" src={default_image} />
    }
  }

  render() {
    return(
      <div className="ImageWrapper">
        {this.renderImage()}
      </div>
    );
  }
}

export default Image;