const express = require('express'),
      app = express()

// app.use(helmet());

const PORT = process.env.PORT || 5000


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("dashboard");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

// app.listen(3000);