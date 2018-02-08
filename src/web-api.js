import { HttpClient, json } from 'aurelia-fetch-client';

let httpClientKat = new HttpClient();
httpClientKat.configure(config => {
  config
    .withBaseUrl('https://ron-swanson-quotes.herokuapp.com/v2/')
    .withInterceptor({
      request(request) {
       // console.log(`Requesting ${request.method} ${request.url}`);
        return request;
      },
      response(response) {
       // console.log(`Received ${response.status} ${response.url}`);
        return response;
      }
    });
});

let httpClientNames = new HttpClient();
httpClientNames.configure(config => {
  config
    .withBaseUrl('http://localhost:3000')
    .useStandardConfiguration()
    .withInterceptor({
      request(request) {
        console.log(`Requesting ${request.method} ${request.url}`);
        return request;
      },
      response(response) {
        console.log(`Received ${response.status} ${response.url}`);
        return response;
      }
    });
});


export class WebAPI {
  httpClientKat = httpClientKat;
  httpClientNames = httpClientNames;
  isRequesting = false;

  getNames() {
    // size	small,
    return this.httpClientNames
      .fetch('/katNames', {
        method: 'get'
      })
      .then(response => response.json())
      .catch(error => {
        console.log('Error getting list!',error);
      });
  }

  getQuote() {
    return this.httpClientKat
      .fetch('quotes', {
        method: 'get'
      })
      .then(response => response.json())
      .catch(error => {
        console.log('Error getting list!',error);
      });
  }
}
