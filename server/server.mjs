import express from "express";
import { config } from "./config.mjs";
import { router } from "../router/router.mjs";

const app = express();

//middleware
app.use(express.json());
app.use(express().disable("X-powered-by"));

app.use(router.methodGet());
app.use(router.methodPost());

//init the server
app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});

// create the page
// the server
