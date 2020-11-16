import React from "react";
import BookList from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
//import { proxy } from "../../package.json";

function MyBooks() {
    let books = [];
    fetch(`/books`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // save db data on global variable
      books = data;
    });
    return(
    //   books.forEach(book => {
    //     // create and populate a table row
    //     return(
    //     <>
    //     <h3>{book.volumeInfo.title}</h3>
    //     <h4>Author(s): {book.volumeInfo.authors}</h4>
    //     <p>Description: {book.volumeInfo.description}</p>
    //     <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink}>
    //       Go to book!
    //     </a>
    //     </>
    //     )
    //   })

    <BookList>
    {books.map(book => {
      return (
        <li key={book.volumeInfo.title} className="list-group-item">
          <Container>
            <Row>
              <Col size="xs-4 sm-2">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </Col>
              <Col size="xs-8 sm-9">
                <h3>{book.volumeInfo.title}</h3>
                <h4>Author(s): {book.volumeInfo.authors}</h4>
                <p>Description: {book.volumeInfo.description}</p>
                <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink}>
                  Go to book!
                </a>
              </Col>
            </Row>
          </Container>
        </li>
      );
    })}
  </BookList>
  );
}

export default MyBooks;