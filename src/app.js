import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
  origin: ["https://futsal-frontend-mq4hu9kt7-amritkandel49s-projects.vercel.app/", "http://localhost:5173/", "http://localhost:8000/"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
};

// app.options("*", cors(corsOptions));

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' https:; script-src 'self'; style-src 'self' https:;"
  );
  next();
});





app.use(cookieParser());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

import ownerRouter from "./routes/owner.route.js";
import trufRouter from "./routes/turf.route.js";
import userRouter from "./routes/user.route.js";
import bookingRouter from "./routes/booking.route.js";

app.use("/api/v1/owners", ownerRouter);
app.use("/api/v1/turfs", trufRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/bookings", bookingRouter);

export default app;
