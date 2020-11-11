import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  }
};

// AIzaSyBXh-q5PwWPI2nNsQEaJr4Zloljeza2VGc

// https://www.googleapis.com/books/v1/volumes?q=intitle:harry+potter+and+the+chamber+of+secrets&key=AIzaSyBXh-q5PwWPI2nNsQEaJr4Zloljeza2VGc

// items.volumeInfo.previewLink
// items.volumeInfo.title
// items.volumeInfo.authors[0]
// items.volumeInfo.description
// items.volumeInfo.imageLinks.thumbnail
