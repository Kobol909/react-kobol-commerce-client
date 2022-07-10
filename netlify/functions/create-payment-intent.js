require('dotenv').config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

const handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const roundedAmount = Math.round(amount * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      roundedAmount,
      currency: 'eur',
      payment_method_types: ['card']
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error })
    };
  }
};

module.exports = { handler };
