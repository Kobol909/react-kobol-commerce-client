import { loadStripe } from '@stripe/stripe-js';
import defaultConfig from '../constants/constants';

export const stripePromise = loadStripe(defaultConfig.stripe.publishableKey);
