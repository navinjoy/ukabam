import React from "react";
import {Modal, Button} from 'react-bootstrap';

class Modaldlg extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }
  
    handleClose() {
      this.props.onClose();
    }
  
    handleShow() {
        this.props.onOpen();
    }
    
    componentDidMount() {
        this.handleShow();
    }

    render() {

      return (
        <div>  
          <Modal show={this.props.show} onHide={this.handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.headerTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{this.props.bodyTitle}</h4>
              <p>
                {this.props.bodyMessage}
              </p>
            </Modal.Body>
            <Modal.Footer style={{"display": "flex", "justify-content": "center"}}>
              <Button bsStyle="success" onClick={this.handleClose}>OK</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
//   render(<Example />);
export default Modaldlg;