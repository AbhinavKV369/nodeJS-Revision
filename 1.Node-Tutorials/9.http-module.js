const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("request event");
    return res.end("Welcome to home page");
  }

  if (req.url === "/about") {
    console.log("request event");
    return res.end("Here is our about page");
  }

  res.end(`<h1>Oops</h1>
    <p>We cannot get the page you are looking for</p>
    <a href="/">Back to home</a>`);
});

server.listen(5000, () => {
  console.log("Server started at 5000...");
});
