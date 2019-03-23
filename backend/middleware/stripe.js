"use strict"

import stripe from ("stripe")(process.env.STRIPE_SECRET_API);

(async () => {
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',
  });
  console.log('charge' , charge)
})();