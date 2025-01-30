import express from "express";
import morgan from "morgan";
import Router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { NotFoundError } from "./errors/not-found-error";
import { dbInitialized } from "./config/database";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from auth service");
});



app.use('/api/users',Router.users)

dbInitialized();
app.listen(PORT, async () => {
  console.log(`Auth service is running on port ${PORT}`);
});

app.use('*', (req,res) => {
  throw new NotFoundError(`cannot find the route ${req.originalUrl} on this server`)
})

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  errorHandler(err, req, res, next);
});