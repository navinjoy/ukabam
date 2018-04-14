import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import productsdata from "./productsdata";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import {Carousel, Image} from "react-bootstrap";

class Products extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      products: [],
      index: 0,
      direction: null
    };
  }

  componentDidMount() {
    this.loadImages();
  }

  loadImages = () => {
    // this.state.productimages = productsdata.productimages;
    this.setState({ products: productsdata.productimages}, function () {
      console.log(this.state.productimages);
    });

  }

  handleSelect(selectedIndex, e) {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Row>
        <Col size="md-6">
          <Carousel>
            {this.state.products.map(product => (
            <Carousel.Item>
              {/* <Image src={product.imgurl} responsive /> */}
              <img height={"200"} src={product.imgurl} />
              <Carousel.Caption>
                <h3>{product.imgcaption}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            ))
          }
          </Carousel>
        </Col>
        <Col size="md-6">
        </Col>
      </Row>
    );
  }
}

// render(<ControlledCarousel />);

export default Products;