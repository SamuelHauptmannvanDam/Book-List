import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', description: 'Dystopian' },
    {
      id: 2,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      description: 'Dystopian',
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'Novel',
    },
    {
      id: 4,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'Novel',
    },
    {
      id: 5,
      title: 'Moby Dick',
      author: 'Herman Melville',
      description: 'Adventure',
    },
    {
      id: 6,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      description: 'Historical',
    },
    {
      id: 7,
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      description: 'Psychological',
    },
    {
      id: 8,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'Romance',
    },
    {
      id: 9,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      description: 'Novel',
    },
    {
      id: 10,
      title: 'Ulysses',
      author: 'James Joyce',
      description: 'Modernist',
    },
  ];

  getBooks() {
    return this.books;
  }
}
