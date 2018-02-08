import { WebAPI } from './web-api';
import { inject } from 'aurelia-framework';
// Redux
import { reduxStore } from './store/configure-store';
import { testKats, recieveKats } from './store/actions';

@inject(WebAPI, reduxStore)
export class App {
  constructor(api, store) {
    this.api = api;
    this.store = store;
    this.getKats();
  }

  async getKats() {
    const names = await this.api.getNames();
    this.store.dispatch(recieveKats(names));
  }

  configureRouter(config, router) {
    config.title = 'Kats';
    config.map([
      { route: '',              moduleId: 'kat-list/kat-list',    name:'kats', title: 'Kats'},
      { route: 'kat/:name',  moduleId: 'kat-details/kat-details', name:'kat', title:'Kat Details' }
    ]);

    this.router = router;
  }
}