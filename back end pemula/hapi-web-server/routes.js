const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, response) => {
      return "Home Page!";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, response) => {
      return "Halaman tidak bisa diakses dengan method tersebut!";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, response) => {
      return "About Page!";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, response) => {
      return "Halaman tidak bisa diakses dengan method tersebut!";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, response) => {
      return "Halaman tidak ditemukan!";
    },
  },
];

module.exports = routes;
