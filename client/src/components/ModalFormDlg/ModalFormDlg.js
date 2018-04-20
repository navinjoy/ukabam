import React from "react";
import {Modal, Button, Forms, FormGroup, ControlLabel, FormControl, HelpBlock, ButtonToolbar} from 'react-bootstrap';
import { Input, TextArea, FormBtn } from "../../components/Form";
import {DropdownButton, MenuItem, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import API from "../../utils/API";


class ModalFormDlg extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        customername: "",
        email: "",
        phone: "",
        address: "",
        paymenttype: [],
        productName: "",
        productCost:"",
        showDlg: false
      };
  
      this.handleModalFormShow = this.handleModalFormShow.bind(this);
      this.handleModalFormClose = this.handleModalFormClose.bind(this);
    }
  
    handleModalFormClose() {
      this.props.onFormDlgClose();
    }
  
    handleModalFormShow() {
        this.props.onFormDlgOpen();
    }



    handleProductOrderSubmitted = (res) => {
   
      console.log("*****", res);
      this.setState({
        customername: "",
        email: "",
        phone: "",
        address: "",
        paymenttype: [],
        productName: "",
        productCost:"",
        quantity: 0
      })
      this.handleModalFormClose();
      this.props.onOrderPlaced();
    }

    handleSubmit = event => {
      event.preventDefault();
      if (this.state.customername && this.state.email && this.state.phone && this.state.paymenttype) {
        API.submitProductOrder({
          productName: this.state.productName,
          productCost: this.state.productCost,
          quantity: 1,
          customerName: this.state.customername,
          email: this.state.email,
          phone: this.state.phone,
          address: this.state.address,
          paymentType: "Cash"
        })
        .then(res => this.handleProductOrderSubmitted(res))
        .catch(err => console.log(err));
      }
    }
    
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    componentDidMount() {
      this.state.productName = this.props.productName;
      this.state.productCost = this.props.productCost;
      this.handleModalFormShow();
    }

    handleChange(e) {
      this.setState({ paymenttype: e });
    }

    render() {

      return (
        <div>  
          <Modal show={this.props.show} onHide={this.handleModalFormClose} >
            <Modal.Header>
              <Modal.Title>PRODUCT ORDER FORM</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Please enter your details for placing Order</p>
            <div class="col-sm-7" style={{background:"#c6e2ec"}}>
            <h5>Item Name: {this.props.productName}</h5>
            </div>
            <div class="col-sm-5" style={{background:"#c6e2ec"}}>
            <h5>Item Cost: {this.props.productCost}</h5>
            </div>
            
            <form>
            <div class="col-sm-12">
            <hr></hr>
              <Input
                value={this.state.customername}
                onChange={this.handleInputChange}
                name="customername"
                placeholder="Full Name (required)"
                
              />
              </div>
              <div class="col-sm-6">
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              </div>
              <div class="col-sm-6">
              <Input
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="Phone (required)"
              />
              </div>
              <div class="col-sm-12">
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Delivery Address"
              />
              </div>
            
              <ButtonToolbar>
              <div class="col-sm-4">

                <h5 id="pymtType">Choose Payment Type: </h5>
                </div>
                <div class="col-sm-8">

                <ToggleButtonGroup type="radio" name="paymenttype" bsSize="small" onChange={this.handleChange}>
                  <ToggleButton value="Cash" style={{background:"#336699a3"}}>Cash</ToggleButton>
                  <ToggleButton value="Cheque" style={{background:"#336699a3"}}>Cheque</ToggleButton>
                  <ToggleButton value="Card" style={{background:"#336699a3"}}>Card</ToggleButton>
                </ToggleButtonGroup>
                </div>
              </ButtonToolbar>
              </form>  
            </Modal.Body>
            <Modal.Footer style={{"display": "flex", "justify-content": "center"}}>
              <Button bsStyle="default" onClick={this.handleModalFormClose}>Cancel</Button>
            
              <Button bsStyle="success" onClick={this.handleSubmit}>Submit</Button>
            </Modal.Footer>
          </Modal>

        </div>
      );
    }
  }
  
//   render(<Example />);
export default ModalFormDlg;