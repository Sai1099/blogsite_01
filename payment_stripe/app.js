const express = require('express');
const stripe = require('stripe')('sk_test_51NHmMFSBEm4wd96MBN6yqTmg95HreVhS3j8XXEXABo460d3uWaNDPwISqSxNQa0FpD2JrIAettzXhygEFBw07L0x00Cj6m967u');



const app = express();
app.use(express.static('public'));
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { paymentMethod, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr', // Currency: Indian Rupees (INR)
      payment_method_types: [paymentMethod],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
