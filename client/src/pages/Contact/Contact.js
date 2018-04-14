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

class Contact extends Component {
  state = {
    productimages: [],
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
    this.loadImages();
  }

  loadImages = () => {
    // this.state.productimages = productsdata.productimages;
    this.setState({ productimages: productsdata.productimages}, function () {
      console.log(this.state.productimages);
    });

  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
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
            <Col size="md-6">
            
            </Col>

            
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
