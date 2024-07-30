// src/mirageServer.js
///import { createServer, Model } from 'miragejs';
import { createServer,Model } from 'miragejs';

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      book: Model,
    },

    seeds(server) {
  

    },

    routes() {
      this.namespace = "api";

      this.get("/books", (schema) => {
        return schema.books.all();
      });

      this.post("/books", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.books.create(attrs);
      });

      this.put("/books/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let book = schema.books.find(id);
        return book.update(newAttrs);
      });

      this.del("/books/:id", (schema, request) => {
        let id = request.params.id;
        return schema.books.find(id).destroy();
      });
    },
  });

  return server;
}
