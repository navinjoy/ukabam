import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import productsdata from "./productsdata";
import Modaldlg from "../../components/Modaldlg/Modaldlg";

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

  componentDidMount() {
    // this.loadBooks();
    // this.loadImages();
  }

  loadImages = () => {
    this.setState({ productimages: productsdata.productimages}, function () {
      console.log(this.state.productimages);
    });

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

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

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
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
