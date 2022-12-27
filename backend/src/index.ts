import "dotenv/config";

import fs from "fs";
import path from "path";
import express, { Express, NextFunction, Request, Response } from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import helmet from "helmet";
import morgan from "morgan";
import fileUpload from "express-fileupload";

import {
  IClientToServerEvents,
  IInterServerEvents,
  IServerToClientEvents,
  ISocketData,
} from "./interfaces/socket.interface";
import errorHandler from "./middlewares/errorHandler";
import messageRoute from "./routes/message";
import generatorRoute from "./routes/generator";

declare global {
  namespace Express {
    export interface Request {
      io?: Server<
        IClientToServerEvents,
        IServerToClientEvents,
        IInterServerEvents,
        ISocketData
      >;
    }
  }
  export interface Error {
    statusCode?: number;
    messages?: [string];
  }
}

// Port
const PORT = process.env.PORT || 5000;

// Socket.io init
const app: Express = express();
const server = http.createServer(app);
const options = {
  cors: {
    origin: "*",
    methods: "*",
  },
};
// Create io server
const io = new Server<
  IClientToServerEvents,
  IServerToClientEvents,
  IInterServerEvents,
  ISocketData
>(server, options);

// CORS
app.use(cors());

// Body Parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// File upload
app.use(fileUpload());

// Using socket.io to controllers
app.use(async function (req: Request, res: Response, next: NextFunction) {
  req.io = io;
  next();
});

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 600,
});

app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Use helmet
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.VERCEL === "true") {
  app.use(morgan("common"));
} else {
  // create a write stream (in serverend mode)
  let accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
    {
      flags: "a",
    }
  );

  // setup the logger
  app.use(morgan("combined", { stream: accessLogStream }));
}

// Use static files
app.use(express.static("public"));

// Routes
app.use(messageRoute);
app.use(generatorRoute);

// Docs
app.get("/api/docs", (req, res, next) => {
  try {
    res.redirect("https://documenter.getpostman.com/view/3884681/2s847Cxadd");
  } catch (error) {
    next(error);
  }
});

// Error Handler
app.use(errorHandler);

/* Socket.io */
io.on("connection", (socket) => {
  console.log(socket.id + " connected!");

  /* ... */
  socket.on("disconnect", (reason) => {
    console.log(socket.id + " disconnected because " + reason);
  });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
