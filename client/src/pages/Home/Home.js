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

class Home extends Component {
  state = {
    productimages: [],
    books: [],
    news:[],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
    this.loadImages();
    this.loadNews();
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

  loadNews = () => {
    API.getAgriNews()
      .then(res => 
        this.setState({ news: res.data.articles})
      );
  }

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
              <h2>Products we sell !!</h2>
              <p>authorized dealer for all the below products and we also provide service.</p>
            </Jumbotron>
            <Col size="md-6">
              {this.state.productimages.map( (image, index) => ((index%2)?(true):(<Thumbnail src={image.imgurl} imgcaption={image.imgcaption}/>))
              )}
            </Col>
            <Col size="md-6">
              {this.state.productimages.map( (image, index) => ((index%2)?( <Thumbnail src={image.imgurl} imgcaption={image.imgcaption}/>):(false))
              )}
            </Col>

            
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h2>Latest news on farming, Agriculture </h2>
            </Jumbotron>
            {this.state.news.length ? (
              <List>
                {this.state.news.map(newsitem => (
                  <ListItem key={newsitem.url}>
                  <a href={newsitem.url} target="_blank">
                    <img src={newsitem.urlToImage} alt={newsitem.title} style={{height:"100%",width:"150px" }} />
                  
                      <strong style={{height:"100%", "margin-left":"2%"}}>
                        {newsitem.title}
                      </strong>

                      
                      </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
