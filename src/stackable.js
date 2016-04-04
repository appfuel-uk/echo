require('es6-promise').polyfill();
import 'isomorphic-fetch';

class Stackable {
  constructor(token) {
    this._token = token;
    this._apiVersion = 'v1';
    this._apiUrl = 'https://api.stackable.space';
  }

  getContainerItems(containerId, callback) {
    this._get(`containers/${containerId}/items`, function(err, res) {
      callback(err, res);
    });
  }

  _get(path, callback) {
    let endPoint = `${this._apiUrl}/${this._apiVersion}/${path}?token=${this._token}`;

    fetch(endPoint)
      .then(function(response) {
        if (response.status >= 400) {
          var err = {
            'message': 'There was an error with this request.'
          };
          return callback(err, false);
        }
        return response.json();
      })
      .then(function(response) {
        callback(false, response);
      });
  }
}
export default Stackable;
