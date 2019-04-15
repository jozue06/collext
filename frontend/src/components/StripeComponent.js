import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './StripeCard.js';

class Stripe extends Component {
  render() {
    return (
      <StripeProvider apiKey='pk_test_5drgWqoaOCpuvaJRtDArfX3a'>
        <div className='example'>
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Stripe;