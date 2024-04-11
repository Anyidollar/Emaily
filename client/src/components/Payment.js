import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                amount={500} // Amount in cents
                token={token => console.log(token)} // Function to handle token after payment
                stripeKey={process.env.REACT_APP_STRIPE_KEY} // Your publishable Stripe API key
                currency="USD" // Currency of the payment amount
            />
        );
    }
}

export default Payments;
