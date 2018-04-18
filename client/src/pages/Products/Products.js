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
import {Carousel, Image, Table, Panel, Alert} from "react-bootstrap";
import ModalFormDlg from "../../components/ModalFormDlg/ModalFormDlg";


class Products extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      products: [],
      index: 0,
      showFormDlg: false,
      productOrderedName:"",
      productOrderedCost:"",
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

  handleModalOpen = () => {
    this.setState({showFormDlg: true});
  }

  handleModalClose = () => {
    this.setState({showFormDlg: false});
  }

  getproductnameandcost (element) {
    const clickedBtnId = element.currentTarget.id.split("_")[2];    
    let product = {};
    product.name = document.getElementById("td_productname_"+clickedBtnId).innerText;
    product.cost = document.getElementById("td_productcost_"+clickedBtnId).innerText;
    return product;
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const product = this.getproductnameandcost(event);

    console.log(product, "Order Now clicked!!");
    this.setState({showFormDlg:true, productOrderedName:product.name, productOrderedCost: product.cost});
  };


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
  {this.state.products.map((product, index) => (
    <tr>
      <td id={"td_productname_"+index}>{product.name}</td>
      <td id={"td_productcost_"+index}>{"₹ "+product.cost}</td>
      <td>
        <FormBtn
          id={"td_submitbtn_"+index}
          onClick={this.handleFormSubmit}
              >Order Now
        </FormBtn>
      </td>
    </tr>
  ))}
  </tbody>
</Table>
{
  this.state.showFormDlg &&
  <ModalFormDlg show={this.state.showFormDlg}  onClose={this.handleModalClose} onOpen={this.handleModalOpen} productName={this.state.productOrderedName} productCost={this.state.productOrderedCost}/>
}
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
        <Panel bsStyle="success">
    <Panel.Heading>
      <Panel.Title componentClass="h3" >Product Quality Standards</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
    <Alert bsStyle="warning">
  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
  good.
</Alert>
<Alert bsStyle="warning">
  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
  good.
</Alert>
<Alert bsStyle="warning">
  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
  good.
</Alert>
<Alert bsStyle="warning">
  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
  good.
</Alert>
<Alert bsStyle="warning">
  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
  good.
</Alert>
    </Panel.Body>
    </Panel>
        </Col>
      </Row>
    );
  }
}

// render(<ControlledCarousel />);

export default Products;