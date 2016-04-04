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

    $.ajax({
        url: endPoint,
        type: 'GET',
        context: document.body,
        success: function(response) {
          callback(false, response);
        },
        error: function(err) {
          callback(err, false);
        }
      });
  }
}
export default Stackable;
