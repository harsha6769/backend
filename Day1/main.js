const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.get('/', (req, res) => {
    console.log("hey its a get request");
    res.send('helloworld2334');

})

app.put('/', (req, res) => {
    console.log("hey its a put request");
    res.send('helloworld32');
})
app.post('/', (req, res) => {
    console.log("hey its a post request");
    res.send('helloworld09876');
})
app.delete('/', (req, res) => {
    console.log("Hey its a delete request");
    res.send('helloworld10203');
})
app.listen(port, () => {
    console.log('server is running  on port 3000');
})

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/data", (req, res) => {
  res.json({ name: "Harsha", course: "AIDS" });
});

app.get("/html", (req, res) => {
  res.send("<h2>This is HTML response</h2>");
});

app.get("/file", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => console.log("Running on 3000"));
