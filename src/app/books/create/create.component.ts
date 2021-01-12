import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormsModule, FormArray, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ALL_TAGS } from '../../constants';
import { bookSelector } from '../../store/selectors/books.selectors';
import { createBook, getBook, editBook } from '../../store/actions/books.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  allTags = ALL_TAGS;
  mode = "Add";
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  bookForm:FormGroup = this.fb.group({
    id: [],
    title: ['', [Validators.required, Validators.email]],
    description: ['',  Validators.required],
    tags: new FormArray([])
  });

  ngOnInit(): void {

    this.allTags.forEach(() => this.tags.push(new FormControl()));
    this.route.params.subscribe(param => {
      // get book by id
      debugger;
      const id = Number(param.id);
      if(!isNaN(id)) {
        this.store.dispatch(getBook({id}))
      }
    });

    // this.bookForm.patchValue({});

    this.store.select(bookSelector).subscribe((book: Book) => {
      debugger;
      if (book) {
        this.mode = "Edit";
        this.bookForm.patchValue(book);
      } 
    })
  }

  get id() { return this.bookForm.get('id'); }

  get title() { return this.bookForm.get('title'); }

  get description() { return this.bookForm.get('description'); }

  get tags() { return this.bookForm.get('tags') as FormArray; }


  onSubmit = () => {
    debugger;
    // edit
    const id = this.bookForm.value.id;
    if(id) {
      this.store.dispatch(editBook({id: id, body: this.bookForm.value}));
      this.onCancel();
      return;
    }
    console.warn(this.bookForm.value);
    this.store.dispatch(createBook(this.bookForm.value));
    this.onCancel();
  }

  onCancel = () => {
    debugger;
    if (this.mode == "Add") {
      this.router.navigate(['../list'], { relativeTo: this.route})
      return;
    }
    this.router.navigate(['../../list'], { relativeTo: this.route})
  }
}
