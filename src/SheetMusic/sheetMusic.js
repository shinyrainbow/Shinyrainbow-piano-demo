import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from '../Home/home'
import './sheetMusic.scss'

const SheetMusic = (props) => {
console.log('hahah', props.match)
  let { sheetId } = useParams();
console.log('aoy ', sheetId);
  return (
    <div className="sheet-music-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> > {sheetId} jaaa
      </div>

      <div className="content">
        <div className="sheet-image">
          <img src="" width="350px" height="550" />
        </div>
        <div className="sheet-detail">
          <div className="song-name">Song name</div>
          <div className="song-writer">Writer Wridmldg</div>
          <div className="song-price">$2.99</div>
          <div className="quantity">
            Total Number of Pages
          </div>
          <div className="quantity-box">
            1
          </div>
          <div className="add-to-cart">Add to cart</div>
          <div className="description">Product info</div>
          <div className="info">
          I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.
          </div>
        </div>
      </div>
      {/* <Switch> */}
      <Route exact path="/">
        <Home name='Shinyrainbow' />
      </Route>
      {/* </Switch> */}
    </div>
  );
}

export default SheetMusic