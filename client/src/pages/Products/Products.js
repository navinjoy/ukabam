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
import {Carousel, Image, Table, Panel} from "react-bootstrap";

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
    this.setState({ products: productsdata.products}, function () {
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
        <Col size="md-4">
        <Panel bsStyle="success">
    <Panel.Heading>
      <Panel.Title componentClass="h3" >Order your Product now</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
        <Table responsive>
  <thead>
    <tr>
      <th>Product</th>
      <th>Cost</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {this.state.products.map(product => (
    <tr>
      <td>{product.name}</td>
      <td>{"₹ "+product.cost}</td>
      <td><a href={product.buyroute} class="btn btn-success" role="button">Order Now</a></td>
    </tr>
  ))}
  </tbody>
</Table>
</Panel.Body>
  </Panel>
        </Col>

        <Col size="md-4">
        <Panel bsStyle="success">
    <Panel.Heading>
      <Panel.Title componentClass="h3" >Products</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
          <Carousel style={{height:"500px", alignContent:"center"}}>
            {this.state.products.map(product => (
            <Carousel.Item>
              {/* <Image src={product.imgurl} responsive /> */}
              <img src={product.imgurl} style={{width:"100%","max-height":"500px","object-fit":"contain"}}/>
              
            </Carousel.Item>
            ))
          }
          </Carousel>
        </Panel.Body>
  </Panel>
        </Col>
        <Col size="md-4">
        </Col>
      </Row>
    );
  }
}

// render(<ControlledCarousel />);

export default Products;