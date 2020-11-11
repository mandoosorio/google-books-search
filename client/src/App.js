import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import DataButton from "./components/DataButton";
// import Thumbnail from "./components/Thumbnail";
// import API from "./utils/API";
import axios from "axios";
// import { BookList, BookListItem } from "./components/BookList";
import BookList from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";
import Books from "./pages/MyBooks";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyBXh-q5PwWPI2nNsQEaJr4Zloljeza2VGc"); // Add API Key Here !!

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const book = event.target.value;
    setBook(book);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`)
      .then(data => {
        console.log("this is the data", data.data.items);
        setResult(data.data.items);
      })

    // API.getBooks(bookSearch)
    //   .then(res => setBooks(res.data))
    //   .catch(err => console.log(err));
  };

  const saveToMongo = (event) => {
    var title = event.target.parentElement.querySelector("h3").innerHTML;
    var authors = event.target.parentElement.querySelector("h4").innerHTML;
    var description = event.target.parentElement.querySelector("p").innerHTML;
    var image = event.target.parentElement.parentElement.querySelector("img").src;
    var link = event.target.parentElement.querySelector("a").href;
    // console.log("being clicked", event.target.parentElement.querySelector("h3").innerHTML);
    // console.log("being clicked", event.target.parentElement.querySelector("h4").innerHTML);
    // console.log("being clicked", event.target.parentElement.querySelector("p").innerHTML);
    // console.log("being clicked", event.target.parentElement.parentElement.querySelector("img").src);
    console.log("TITLE", title);
    console.log("AUTHORS", authors);
    console.log("DESCRIPTION", description);
    console.log("IMAGE", image);
    console.log("LINK", link);
  }

  return (
    <>
    <Router>
    <div id="firstdiv">
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <div id="form">
            <form onSubmit={handleFormSubmit}>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="BookSearch"
                      // value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      // onClick={handleFormSubmit}
                      type="submit"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">

              <BookList>
                {result.map(book => {
                  return (
                    <li key={book.volumeInfo.title} className="list-group-item">
                      <Container>
                        <Row>
                          <Col size="xs-4 sm-2">
                            <img
                              src={book.volumeInfo.imageLinks.thumbnail}
                              alt={book.volumeInfo.title}
                            />
                            {/* <img
                              className="thumbnail"
                              role="img"
                              aria-label="Book Image"
                              style={{
                                backgroundImage: `url("${book.volumeInfo.imageLinks.thumbnail}")`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                width: "100%",
                                paddingTop: "100%"
                              }}
                            /> */}
                            {/* <Thumbnail src={book.volumeInfo.imageLinks.thumbnail || "https://placehold.it/300x300"} alt={book.volumeInfo.title} /> */}
                          </Col>
                          <Col size="xs-8 sm-9">
                            <h3>{book.volumeInfo.title}</h3>
                            <h4>Author(s): {book.volumeInfo.authors}</h4>
                            <p>Description: {book.volumeInfo.description}</p>
                            <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink}>
                              Go to book!
                            </a>
                            <DataButton onClick={saveToMongo}>Save</DataButton>
                          </Col>
                        </Row>
                      </Container>
                    </li>

                    // <BookListItem
                    //   key={book.title}
                    //   title={book.title}
                    //   authur={book.author}
                    //   synopsis={book.synopsis}
                    //   date={book.date}
                    //   thumbnail={book.thumbnail}
                    // />
                  );
                })}
              </BookList>
            
          </Col>
        </Row>
      </Container>

      <Route exact path="/mybooks" component={Books}/>
    </div>
    </Router>
    </>
  );
}

export default App;