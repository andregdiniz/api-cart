import { request, Router } from "express";

const cartsRoutes = Router();

const carts = [];

cartsRoutes.post("/carts", (request, response) => {
  return response.status(201).send();
});
