import React from "react";
import { Col, Row} from "../../components/Grid";
import { FormBtn } from "../../components/Form";
import productsdata from "./productsdata";
import {Carousel, Table, Panel, Alert} from "react-bootstrap";
import ModalFormDlg from "../../components/ModalFormDlg/ModalFormDlg";
import Modaldlg from "../../components/Modaldlg/Modaldlg";

class Products extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      products: [],
      index: 0,
      showFormDlg: false,
      showOrderConfirmDlg: false,
      productOrderedName:"",
      productOrderedCost:"",
      direction: null
    };
  }

  componentDidMount() {
    this.loadImages();
  }

  loadImages = () => {
    this.setState({ products: productsdata.products}, function () {
      console.log(this.state.productimages);
    });

  }

  handleSelect(selectedIndex, e) {
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

  handleOrderConfirmClose = () => {
    this.setState({showOrderConfirmDlg: false})
  }

  handleOrderConfirmShow = () => {
    this.setState({showOrderConfirmDlg: true})
  }

  handleOrderPlaced = () => {
    this.setState({showOrderConfirmDlg: true})
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
  <ModalFormDlg 
    show={this.state.showFormDlg}  
    onOrderPlaced={this.handleOrderPlaced} 
    onFormDlgClose={this.handleModalClose} 
    onFormDlgOpen={this.handleModalOpen} 
    productName={this.state.productOrderedName} 
    productCost={this.state.productOrderedCost}
  />
}
{
  this.state.showOrderConfirmDlg &&
  <Modaldlg 
    show={this.state.showOrderConfirmDlg}  
    onClose={this.handleOrderConfirmClose} 
    onOpen={this.handleOrderConfirmShow}
    headerTitle={"Order Placed Successfully"}
    bodyTitle={"Congratulations, your order has been successfully placed."}
    bodyMessage={"Our sales representative will reach out to you, Have a nice day !!"}
  />                
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
              <img src={product.imgurl} alt={product.imgcaption} style={{width:"100%","max-height":"500px","object-fit":"contain"}}/>
              
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
      <Panel.Title componentClass="h3" >Product Quality and Customer Service Standards</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
    <Alert bsStyle="warning">
  <strong>The goal as a company</strong> is to have customer service that is not just the best, but legendary
</Alert>
<Alert bsStyle="warning">
  <strong>A customer service</strong> apology is stronger with a personal touch.
</Alert>
<Alert bsStyle="warning">
  <strong>A customer</strong> is the most important visitor on our premises. He is not dependent on us – we are dependent on him. 
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

export default Products;