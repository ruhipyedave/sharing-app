import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logOut } from './store/actions/auth.actions';
import { LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sharing-app';
  themes = {
    "blue-theme": "Blue",
    "red-theme": "Red",
  };
  theme = 'blue-theme';
  isLoggedIn = false;

  constructor(
    private localSt: LocalStorageService,
    private store: Store,
  ) {
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
  }

  signOut() {
    this.store.dispatch(logOut());
  }
}
