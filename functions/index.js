const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MRfsPSG6cWEzTYmAklb6d2BuZYplz3OeS14bmUmvkS7Rx7U2RIOGpMPtjKaiHCHerdnszs7ZsEJNkGCgN0cG1Po00v9leXAHJ");

// API

// - APP config
const app = express();

// - Middlewares
// app.use(cors({ origin: true}));
app.use(cors());
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
