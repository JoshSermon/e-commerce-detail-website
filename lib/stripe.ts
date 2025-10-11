import Stripe from 'stripe';å

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)