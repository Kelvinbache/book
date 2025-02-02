import express from "express";
import { config } from "./config.mjs";
import { router } from "../router/router.mjs";
import cors from "cors"

const app = express();


//middleware
app.use(express.json());
app.disable("x-powered-by");
app.use(cors())

// The http 
app.use(router.methodGet());
app.use(router.methodPost());

//init the server
app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});

// create the page
// the server
