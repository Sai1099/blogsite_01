const stripe = require('stripe')('sk_test_51NHmMFSBEm4wd96MBN6yqTmg95HreVhS3j8XXEXABo460d3uWaNDPwISqSxNQa0FpD2JrIAettzXhygEFBw07L0x00Cj6m967u');

// Create a payment link
stripe.paymentLinks.create({
  amount: 5000, // Amount in cents (e.g., $50.00)
  currency: 'usd', // Currency code
  refresh_url: 'https://buy.stripe.com/test_3csdTt2WyfGC2JyfYY', // Redirect URL after payment
}).then((paymentLink) => {
  console.log(paymentLink);
}).catch((error) => {
  console.error(error);
});
