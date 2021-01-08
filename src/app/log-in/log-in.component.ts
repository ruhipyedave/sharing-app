import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { logIn } from '../store/actions/auth.actions';
// import { getLoggedInUser } from '../store/selectors/user.selectors';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInForm:FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',  Validators.required],
  });

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    // getLoggedInUser
    // this.store.select(getLoggedInUser).subscribe((user) => {
    //   if (user) {
    //     alert('SUCCESS!!');
    //   }
    //   alert('FAILED!!');
    // })
  }

  // convenience getter for easy access to form fields
  get f() { return this.logInForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.logInForm.invalid) {
        return;
    }

    this.store.dispatch(logIn(this.logInForm.value));
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.logInForm.value, null, 4));

  }

  onReset() {
    this.submitted = false;
    this.logInForm.reset();
  }

}
