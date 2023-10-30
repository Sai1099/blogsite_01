import stripe

# Set your Stripe API keys
stripe.api_key = "YOUR_STRIPE_API_KEY"

# Create a PaymentIntent
payment_intent = stripe.PaymentIntent.create(
    amount=1,
    currency="usd",
)

# Redirect the customer to the Stripe checkout page
redirect_url = stripe.checkout.Session.create(
    payment_intent_id=payment_intent.id,
    payment_method_types=["card", "upi", "netbanking"],
)

# Redirect the customer to the Stripe checkout page
return redirect(redirect_url.url)
