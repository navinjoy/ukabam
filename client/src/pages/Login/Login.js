import React from "react";
import { Col, Row} from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
// import {Carousel, Table, Panel, Alert} from "react-bootstrap";
// import ModalFormDlg from "../../components/ModalFormDlg/ModalFormDlg";
// import Modaldlg from "../../components/Modaldlg/Modaldlg";
import {Panel} from "react-bootstrap";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      userLogged: false
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Row>
        <Col size="md-4">
          <Panel bsStyle="success">
            <Panel.Heading>
              <Panel.Title componentClass="h3" >Login to the App</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <nav>
                <ul>
                  <li><a href="/auth/logout">Logout</a></li>
                  <li><a href="/auth/login">Login</a></li>
                  <li><a href="/">Home</a></li>
                  <li><a href="/auth/google">Sign In with Google</a></li>
                </ul>
              </nav>
              <hr></hr>
              {/* <a class="google-btn" href="/auth/google">Sign In with Google</a> */}
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    );
  }
}

export default Login;