import { loadStripe } from '@stripe/stripe-js';
import defaultConfig from '../constants/constants';

const stripePublishableKey = defaultConfig.stripe.publishableKey;

console.log('stripePublishableKey', stripePublishableKey);

export const stripePromise = loadStripe(stripePublishableKey);
