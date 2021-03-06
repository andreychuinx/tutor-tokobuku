import React from 'react';
import '../../App.css';
import Book from '../../components/Book/Book';

const BookPage = () => {
  const books = [
    {
      id: 4,
      title: 'ini judul',
      isbn: 'null',
      authorName: 'ini Author',
      synopsis: 'ini sinopsis',
      publicationDate: '14-05-2020 07:00:00',
      price: 80000.0,
      bookStatus: 'FOR_SELL',
    },
    {
      id: 5,
      title: 'ini judul',
      isbn: 'null',
      authorName: 'ini Author',
      synopsis: 'ini sinopsis',
      publicationDate: '14-05-2020 07:00:00',
      price: 84000.0,
      bookStatus: 'OUT_OF_STOCK',
    },
    {
      id: 6,
      title: 'ini judul',
      isbn: 'null',
      authorName: 'ini Author',
      synopsis: 'ini sinopsis',
      publicationDate: '14-05-2020 07:00:00',
      price: 150000.0,
      bookStatus: 'FOR_SELL',
    },
    {
      id: 7,
      title: 'ini judul',
      isbn: '2ffaf',
      authorName: 'ini Author',
      synopsis: 'ini sinopsis',
      publicationDate: '14-05-2020 07:00:00',
      price: 200000.0,
      bookStatus: 'OUT_OF_STOCK',
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <div className="container m-3">
          <h2>Redux-Books</h2>
        </div>
        <div className="container">
          <div className="row">
            {books && books.map((val, key) => <Book key={key} book={val} /> )}
          </div>
        </div>
      </header>
    </div>
  )
}

export default BookPage;