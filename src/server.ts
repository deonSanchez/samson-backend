import express, { Express } from "express";
import http from "http";
import helmet from "helmet";
import cors from "cors";

import routes from "./routes/posts";

const router: Express = express();
const httpServer = http.createServer(router);

/** RULES OF OUR API */
router.use(helmet()); // Takes care of HTTP headers
router.use(cors()); // Takes care of CORS requests
router.use(express.json()); //Takes care of JSON data

/** Routes */
router.use("/api", routes);

/** Error handling */
router.use((req, res) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

/** Server */
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () =>
  console.log(`The server is running on http://localhost:${PORT}`)
);
