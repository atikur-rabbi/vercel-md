const PORT = process.env.PORT || 3000;
const express = require("express");
const fs = require("fs");
const marked = require("fs");
const app = express();

app.get("/", function(req, res) {
    //when we get an http get request to the root/homepage
    res.send("Hello express");
  });


  app.get('/doc', function(req, res) {
    var path = __dirname + '/markdown/readme.md';
    fs.readFile(path, 'utf8', function(err, data) {
      if(err) {
        console.log(err);
      }
      res.send(marked(data.toString()));
    });
});

  app.get('/test', function(req, res) {
    var path = __dirname + '/markdown/test.md';
    fs.readFile(path, 'utf8', function(err, data) {
      if(err) {
        console.log(err);
      }
      res.send(marked(data.toString()));
    });
  });

  app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`);
  });
  