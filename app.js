const express = require("express");
const app = express()
const path = require("path")
const port = process.env.PORT || 8000 ;
// const html = require("html")

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/templete/home.html"))
})
app.get('/feature', (req, res) => {
    res.sendFile(path.join(__dirname, "/templete/features.html"))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "/templete/contact.html"))
})
app.get('/development', (req, res) => {
    res.sendFile(path.join(__dirname, "/templete/development.html"))
})
app.get('/design', (req, res) => {
    res.sendFile(path.join(__dirname, "/templete/feature.html"))
})


app.listen(port, () => {
    console.log(`Our app is running at port ${port} `);
});

// res.sendFile(path.join(__dirname + '/index.html'));