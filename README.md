# echo Blogging System

- Use webpack and ES6(babel) to build Riotjs app
- Use Stackable.space as API to provide data

This is tiny blogging system written ES6 with Riotjs, and use webpack to build the bundled target js to run in the browser environment.

Online demo: here

## Development

To start server
```
npm run dev
```

App is available at using webpack `http://localhost:5555/webpack-dev-server/`

### To build

```
npm run dist
```

To preview build

```
npm run viewdist
```

#### To write ES6 in tag script

The change is simple, just set the `type` to `es6` in the `script` element:

```html
<my-tag>
  <!-- Tag html here -->

  <script type="es6">
  <!-- Tag script here -->
  </script>
</my-tag>
```

Riot's default mini-ES6 method syntax cannot work when we are using babel, so we need to change:

```js
// This would not work with babel
buttonHandler(e) {
  // code
}

// Change to this
this.buttonHandler = e => {
  // code
}
```

##### Setup webpack to compile riot tags

`riotjs-loader` is needed, install it as devDependencies, then configure in `webpack.config.js`.

You don't have to import 'riot' everywhere, instead, use `webpack.ProvidePlugin` to make it available everywhere.
