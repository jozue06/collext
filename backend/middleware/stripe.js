let express = require('express');
let	router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_API);
import User from '../auth/model.js';

const stripeChargeCallback = res => (stripeErr, stripeRes) => {
	
	if (stripeErr) {
		res.status(500).send({ error: stripeErr });
	} else {
		
		res.status(200).send({ success: stripeRes });
	}
};

router.get("/", (req, res) => {
	res.send({
		message: "Hello Stripe checkout server!",
		timestamp: new Date().toISOString()
	});
});

router.post("/", (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: "usd"
	};
	// let amount = res.amount;
	stripe.charges.create(body).then(data => {
		User.findByIdAndUpdate
		console.log("data " , data)
	});
});

export default router;