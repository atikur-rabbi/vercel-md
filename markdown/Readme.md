## Synchronous Solution

```javascript
app.get('/test', function(req, res) {
  var path = __dirname + '/markdown/test.md';
  var file = fs.readFileSync(path, 'utf8');
  res.send(marked(file.toString()));
});
```



## Asynchronous Solution

```javascript
app.get('/test', function(req, res) {
  var path = __dirname + '/markdown/test.md';
  fs.readFile(path, 'utf8', function(err, data) {
    if(err) {
      console.log(err);
    }
    res.send(marked(data.toString()));
  });
}); 
```



## Promisified Solution

```javascript
var Promise = require('bluebird'); // Require 'bluebird' in your package.json file, and run npm install.
var fs = require('fs');
var path = require('path');
Promise.promisifyAll(fs);

app.get('/test', function (req, res) {
  fs.readFileAsync(path.join(__dirname, '/markdown/test.md')).then(function(val) {
    res.send(marked(val.toString()));
  });
});
```