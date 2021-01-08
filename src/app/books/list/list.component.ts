import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute  } from '@angular/router';

import { Store } from '@ngrx/store';
import { LocalStorageService} from 'ngx-webstorage';
import { loadBooks, deleteBook } from '../../store/actions/books.actions';
import { booksSelector } from '../../store/selectors/books.selectors';
import { Book } from '../../models/book';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  isLoggedIn = false;
  books: Book[] = [];
  constructor(
    private localSt: LocalStorageService,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // dispatch action to get list of 
    this.isLoggedIn = this.localSt.retrieve("token") ? true : false;
    this.localSt.observe('token')
			.subscribe((token) => {
        debugger;
        if (token) {
          return this.isLoggedIn = true;
        }
        this.isLoggedIn = false;
      });

    this.store.dispatch(loadBooks());
    this.store.select(booksSelector).subscribe((books: Book[]) => {
      debugger;
      this.books = books;
    })
  }

  showDeleteConfirmBox = (id: number) => {
    Swal.fire({
      title: 'Are you sure you want to delete this Book?',
      text: 'You will not be able to recover this Book!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        // Swal.fire(
        //   'Deleted!',
        //   'Book has been deleted.',
        //   'success'
        // )
        this.store.dispatch(deleteBook({id}))
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Book is safe :)',
          'error'
        )
      }
    })
  }

  showEditForm = (id: number) => {
    debugger;
    this.router.navigate(['../edit', id], { relativeTo: this.route });
  }

}
