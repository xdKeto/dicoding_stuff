const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Power-By", "Node.js");

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end("<h1>HALO INI ADALAH HOMEPAGE</h1>");
    } else {
      response.statusCode = 400;
      response.end(`<h1> HALAMAN TIDAK BISA DIAKSES DENGAN ${method} REQUEST </h1>`);
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end("<h1>HALO INI HALAMAN ABOUT</h1>");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(`<h1>HALO INI ${name} </h1>`);
      });
    } else {
      response.statusCode = 400;
      response.end(`<h1> HALAMAN TIDAK BISA DIAKSES DENGAN ${method} REQUEST </h1>`);
    }
  } else {
    response.statusCode = 404;
    response.end("<h1> HALAMAN TIDAK DITEMUKAN </h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan di http://${host}:${port}`);
});
