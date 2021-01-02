import React from 'react'
import {connect} from 'react-redux'
import {Cart} from '../Icons'
import './ShoppingCart.scss'

const ShoppingCart = ({items}) => {
  console.log('items in shopping', items);
  return (
    <div className="shopping-cart">
       <Cart/>
       <span className="item-count">

       {items && items.length ? items.length : 0}
       </span>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.itemsReducer.items
})

export default connect(mapStateToProps, null)(ShoppingCart)
