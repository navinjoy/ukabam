import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Profilepic from "../../components/Profilepic/Profilepic";
import teaminfo from "./teaminfo.json";

class About extends Component {
  state = {
    productimages: [],
    teaminfo: teaminfo,
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
          <Row>
        {this.state.teaminfo.map(teammember => (
          <Col size="md-2 sm-4">
          <Profilepic src={teammember.imgurl} name={teammember.name} role={teammember.designation.toUpperCase()} description={teammember.description}/>
          </Col>
        )
      )}
      </Row>
      </Row>
      
      </Container>
    );
  }
}

export default About;
