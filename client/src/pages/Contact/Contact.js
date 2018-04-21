import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Modaldlg from "../../components/Modaldlg/Modaldlg";
import {Table, Panel, Alert} from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailorphone: "",
      comments: "",
      showDlg: false
    };
  }

  handleCommentSubmitted = (res) => {
    console.log("*****",res);
    this.setState({
      name: "",
      emailorphone: "",
      comments: "",
      showDlg: true});
  }

  handleModalOpen = () => {
    this.setState({
      showDlg: true});
  }

  handleModalClose = () => {
    this.setState({
      showDlg: false});
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.comments && this.state.emailorphone) {
      API.saveComment({
        name: this.state.name,
        emailorphone: this.state.emailorphone,
        comments: this.state.comments
      })
      .then(res => this.handleCommentSubmitted(res))
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Contact Us</h2>
              
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.emailorphone}
                onChange={this.handleInputChange}
                name="emailorphone"
                placeholder="Email or Phone (required)"
              />
              <TextArea
                value={this.state.comments}
                onChange={this.handleInputChange}
                name="comments"
                placeholder="Comments (required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.comments && this.state.emailorphone)}
                onClick={this.handleFormSubmit}
              >
                Submit Comment
              </FormBtn>
              {
                this.state.showDlg &&
                <Modaldlg 
                  show={this.state.showDlg}  
                  onClose={this.handleModalClose} 
                  onOpen={this.handleModalOpen}
                  headerTitle={"Comment Posted Successfully"}
                  bodyTitle={"Your Comment has been posted successfully. Thank you!"}
                  bodyMessage={"We will get back to you soon. Have a nice day !!"}
                  />                
              }
              </form>            
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h2>Other Info</h2>
            </Jumbotron>
            <Col size="md-6 sm-12">
            <Panel bsStyle="success">
              <Panel.Heading >
                <Panel.Title componentClass="h3" >OFFICE LOCATION </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Alert bsStyle="warning">
                  {/* <strong>LOCATION</strong> */}
                  <h3>Usha Kiran Agencies</h3>
                  <p>Aska Road Berhampur</p>
                  <p>Odisha India 760002</p>
                  <p>Phone : 0680 6451625</p>
                  <hr></hr>
                  <p>Mobile : +91 90400 81090</p>
                  <p>email : ukabam7@gmail.com</p>
                  <hr></hr>
                  <p>Website: <a href='http://ukabam.herokuapp.com'>www.ushakiranagencies.com</a></p>
                </Alert>
              </Panel.Body>
            </Panel>
            </Col>
            <Col size="md-6 sm-12">
            <Panel bsStyle="success">
              <Panel.Heading>
                <Panel.Title componentClass="h3" >BUSINESS HOURS </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Alert bsStyle="warning">
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Monday</td>
                      <td>10 A.M. - 8 P.M.</td>
                    </tr>
                    <tr>
                      <td>Monday</td>
                      <td>10 A.M. - 8 P.M.</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>10 A.M. - 8 P.M.</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>10 A.M. - 8 P.M.</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>10 A.M. - 8 P.M.</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>10 A.M. - 8 P.M.</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>10 A.M. - 8 P.M.</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>10 A.M. - 2 P.M.</td>
                    </tr>
                  </tbody>
                </Table> 
                </Alert>
              </Panel.Body>
            </Panel>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
