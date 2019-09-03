import React, { Component } from "react";
import Book from "../book";

class BookPage extends Component {
  state = { term: "", books: [], error: "" };

  onChange = event => {
    this.setState({ term: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=${this.state.term}:&maxResults=20&key:AIzaSyBzAhdlRZ9hd3aOVRKTUzZW9KX06ncoimM";
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({ books: data.items }, console.log(this.state.books))
      )
      .catch(error => this.setState({ error: error }));
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Search!</button>
        </form>
        {this.state.books.map((book, index) => {
          return <Book key={index} bookData={book} />;
        })}
      </section>
    );
  }
}

export default BookPage;
