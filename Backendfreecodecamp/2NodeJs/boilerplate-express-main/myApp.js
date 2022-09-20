let express = require('express');
let app = express();

  app.get('/',function(req,res)
  {
    res.send('Hello World!');
  });

  app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
// listen inicia um servidor, e colocamos ele para escutar a porta 3000. Ele responde com "Hello World!"
































 module.exports = app;
