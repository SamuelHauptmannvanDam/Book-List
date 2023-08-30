import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  latestBooks: Book[] = [];
  searchTerm: string = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['search'] || '';
      this.search();
    });
  }

  search() {
    if (this.searchTerm) {
      this.latestBooks = this.bookService
        .getBooks()
        .filter((book) =>
          book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    } else {
      this.latestBooks = this.bookService
        .getBooks()
        .slice(
          this.bookService.getBooks().length - 3,
          this.bookService.getBooks().length
        );
    }
    this.router.navigate([], { queryParams: { search: this.searchTerm } });
  }
}
