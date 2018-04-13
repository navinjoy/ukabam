import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Thumbnail from "../../components/Thumbnail/Thumbnail";

class About extends Component {
  state = {
    productimages: [],
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    // this.loadBooks();
    // this.loadImages();
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
          <Col size="md-12">
            <Jumbotron>
              
              <p>Usha Kiran Agencies started 25 years ago and expanded year over year to different towns and cities in Odisha and thereby gained the trust of the customers. 
              </p>
              <p>Customer satisfaction and providing great service to them is the motto.</p>
            </Jumbotron>
          </Col>
      
        </Row>
        <Row>
          <Col size="md-4">
          <p>Hello hello</p>
          </Col>
          <Col size="md-8">
          <p>Hello hello</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
