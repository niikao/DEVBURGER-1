import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe (
    'pk_test_51QDP7pKkvG0LBhBqyLJCDyQTsi6lboflJ2YLytq4ExOffSQ13rC0PVsZyMuqU1WO7mxd3A5gPOr7LynVKr0vCHPH00U9uZgvMQ'
);

export default stripePromise