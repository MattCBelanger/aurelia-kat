import { WebAPI } from '../web-api';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
// Redux
import { reduxStore } from '../store/configure-store';
import { testKats, setKat } from '../store/actions';


@inject(WebAPI, reduxStore, Router)
export class KetDetails {
  constructor(api, reduxStore, router) {
    this.api = api;
    this.contacts = [];
    this.router = router;
    this.store = reduxStore;
  }
  // Life cycle methods
  attached() {
    this.katsOnline = this.store.getState().katsOnline;
    this.names = this.store.getState().kats;

    this.store.subscribe(
      state => {
        this.katsOnline = this.store.getState().katsOnline;
        this.names = this.store.getState().kats;
      }
    );
  }
  // End life cycle methods

  toggleTest() {
    this.store.dispatch(testKats);
  }
  goToKat(name) {
    this.store.dispatch(setKat(name))
    this.router.navigateToRoute('kat', {name: name});
  }

}
