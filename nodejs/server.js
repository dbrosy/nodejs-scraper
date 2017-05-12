var noodle = require('noodlejs');

app.get('/:text', function(req, res) {
  noodle.query({ url: 'http://google.com/search?q='+req.params.text,

  selector: 'h3.r a',            // If no `selector` is specified than the entire document is returned. This is a 
                                // rule applied to all types of docments. The `extract` rule will be ignored if included.
  extract:  ["href", "text"]    // "text" if you want to display only the text
                            // "href" if you want to display only the links
                            // In case multiple extracts give it as an array ie ["href", "text"]
})
.then(function (results) {
  res.send(results);             // return the result
});
});
