import { WebAPI } from '../web-api';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
// Redux
import { reduxStore } from '../store/configure-store';
import { detailsQuote, setKat } from '../store/actions';
// Logger
import { LogManager } from "aurelia-framework";
const logger = LogManager.getLogger('insight');
// Utils
import { findNextKat } from './kat-details-helper';

@inject(WebAPI,reduxStore, Router )
export class KatDetails {
  constructor(api, store, router) {
    this.api = api;
    this.store = reduxStore;
    this.kat = {};
    this.quote = '';
    this.imageSrc = '';
    this.router = router;
    this.loaded = false;
    this.store.subscribe(this.update.bind(this));
  }
  //Life cycle method
  async activate(params) {
    logger.info('ACTIVATED');
    if (params && params.name) {
      const thing = await this.api.getQuote();
      this.store.dispatch(detailsQuote(thing[0]));
      this.store.dispatch(setKat(params.name));
    }
  }

  async update(something) {
    logger.info('UPDATED', this.kat);
    const state = this.store.getState();
    if (this.kat !== {} &&
      state.kat !== {} &&
      this.kat !== state.kat) {
      // Update state
      this.quote = state.quote;
      this.kats = state.kats;
      this.kat = state.kat;
      const thing = await this.api.getQuote();
      this.store.dispatch(detailsQuote(thing[0]));
      this.imageSrc = 'http://thecatapi.com/api/images/get?' + new Date().getTime();
    }
  }

  navigateBack() {
    this.router.navigateToRoute('kats');
  }

  prevKat() {
    this.router.navigateBack()
  }

  imageLoaded() {
    this.loaded = true;
  }

  nextCat() {
    const nextkat = findNextKat(this.kats, this.kat);
    this.loaded = false;
    this.imageSrc = '';
    this.router.navigateToRoute('kat', {name: nextkat.name});
  }

  testQuote() {
    console.log('cliucked!');
  }
}
