import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import path from "path";
import "reflect-metadata";
import "./database";
import { Messages } from "./enums";
import { routerGateway, routerPeripheral } from "./routes";
import { api } from "./routes/api";

const HTTP_PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerGateway);
app.use(routerPeripheral);
app.use(/^\/(api|rest)/, api);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(500).json({ status: "error", message: Messages.SERVER_ERROR });
});

app.use(express.static(path.join(__dirname, "..", "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.listen(HTTP_PORT, () => console.log(`${Messages.SERVER_RUNNING} ${HTTP_PORT}`));