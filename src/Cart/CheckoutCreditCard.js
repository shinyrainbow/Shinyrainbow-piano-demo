import React, { Component } from "react";
import Script from "react-load-script";

import "./Checkout.scss";

import { publicKey } from "../confidential/keys";

let OmiseCard;

export class Checkout extends Component {
  handleScriptLoad = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey,
      frameLabel: "Sabai Shop",
      submitLabel: "PAY NOW",
      currency: "thb"
    });
  };

  creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: []
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  omiseCardHandler = () => {
    const { cart, createCreditCardCharge } = this.props;
    OmiseCard.open({
      frameDescription: `
      1.Invoice #3847 testtt \n
      2.laskl;dlkjaskldjfklsjlka;jkfl;jsl;fkjl;dj \n
      3.lka;js ljdljksl;fjalkj`,
      frameLabel: 'aaaaa',
      amount: cart.amount,
      onCreateTokenSuccess: token => {
        createCreditCardCharge(cart.email, cart.name, cart.amount, cart.detail, cart.description,  token);
      },
      onFormClosed: () => {}
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.creditCardConfigure();
    this.omiseCardHandler();
  };

  
  render() {
    const { cart } = this.props;

    return (
      <div className="own-form">
        <Script
          url="https://cdn.omise.co/omise.js"
          onLoad={this.handleScriptLoad}
        />

        <form>
          <button
            id="credit-card"
            className="btn"
            type="button"
            disabled={cart.amount === 0}
            onClick={this.handleClick}
          >
            Pay with Credit Card
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;