import React, {useState} from 'react'
import SheetMusic from '../SheetMusic/sheetMusic'
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout'
import { connect } from "react-redux"
import * as action from '../redux/action'
import Checkout from './CheckoutCreditCard'
import CheckoutInternetBanking from './CheckoutInternetBanking'
import Seperator from '../Seperator/Seperator'
import './cart.scss'

const Cart = (props) => {
  const {items, removeSong} = props 
  console.log(items, 5555)
  const [product, setProduct] = useState({
    name: 'แปลไม่ออก',
    price: 50,
  })

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch('http://localhost/8080/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    .then(res => console.log('res:', res))
    .catch(err => console.log(err, 555))
  }

  const cart = {
    email: 'aoy@gmail.com',
    description: 'hahhahah',
    amount: 2000,
    name: 'aoy',
    detail: `
    1.rreradfasf\n
    2.แปลไม่ออก \n
    3.าหสกฟสฟ่หสาด่ฟาสหก่ดสฟาหดก \n
    `
  }
  const [charge, setCharge] = useState({})
  // state = {
  //   charge: undefined
  // };

  const createCreditCardCharge = async (email, name, amount, detail, description, token) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/checkout-creditCard",
        data: { email, name, amount, detail, description, token },
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.data) {
        console.log('res.kkkkk', res);
        setCharge(res.data)
        // this.setState({ charge: res.data});
        // props.clearCart()
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createInternetBankingCharge = async (email, name, amount, token) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/checkout-internetBanking",
        data: { email, name, amount, token },
        headers: {
          "Content-Type": "application/json"
        }
      });

      const { authorizeUri } = res.data;
      if (authorizeUri) {
        window.location.href = authorizeUri;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const items = ['Skyline - Billkin', 'Longer than ever - 100x100', 'วอแว - วแร์ วนรัตน์']
  return (
    <div className="my-cart">
      <Seperator text="My Cart" />
      <div>
        <ul>
          {
            items.map((item, index) => {
              console.log(item, 4444)
              return (
                <div key={index} className="item">
                {/* <img /> */}
                <div className="image">a</div>
                <div className="name">
                    {item.name}
                </div>
                <div className="price">
                    {item.price}
                </div>
                  {/* {item.isSelected ? 'yes': 'no'}{item.name}
                <button onClick={() => {removeSong(index)}}>-</button> */}
              
                {/* <button onClick={() => {removeSong(index)}}>+</button> */}
                </div>
              )
            })
          }
        </ul>
        <div>
          Total: $20,000
        </div>
      </div>

      <div>
        Checkout
        
        <Checkout 
          cart={cart}
          createCreditCardCharge={createCreditCardCharge}

        />
        <CheckoutInternetBanking
          cart={cart}
          createInternetBankingCharge={createInternetBankingCharge}

        />
        {/* <StripeCheckout
        stripeKey="pk_test_51I1tROH4Fx9PpKbYXS0DnfTBP4wzMvzyezDiMWiE1QOqC94roOGmwf6DGySriAfjrUK6j8x0MuDLHj6vOJ1DcXuG00a6zhdusl"
        token={makePayment}
        description="you are making a payment for ..... l;jl;lkjljkd;lsdfjklsdjkfo ;isdjfnsdufhasnfjkalsfkasldfkajsdfhjka shdfklahsdjfklhaskdlfhkasdhfkasjhdfkajshdfkasdhfkashdfkahsdfkhjkl"
        name='Shinyrainbow piano jlkjsdlfjakl;sjflk;sdjf;lasjdflasjdflajsdfl;asdjflasjdfl;asdflknasdkjnsajkncksjndcjkasnckasnckas'
        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
        amount={product.price * 100}
        // email="info@vidhub.co"
        alipay={true}
        ComponentClass="div"
        >
          <button>buy</button>

        </StripeCheckout> */}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeSong: (item) => dispatch(action.removeItem(item))
    // handleAddItem: (item) => dispatch(action.addItem(item))
    // increaseCounter: () => dispatch(increaseCounter()),

    // decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

