const express = require('express'),
      app = express()

// app.use(helmet());

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("dashboard.ejs");
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("connected...");
});

// app.listen(3000);