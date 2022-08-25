const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KT9LvKsTrcjoY2K7LUgU21DbNCMt3gCzQPMyMdeEXvH8p05k5pQyKv3SUEkzGM0nZkNsuAyogLwfeDurdmkpPb900SEn3nqKf')

const app = express();

app.use(cors({origin: true}));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send ('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/challenge-58f17/us-central1/api