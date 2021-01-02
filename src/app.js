import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './redux/store';
// import * as serviceWorker from './serviceWorker';

import SheetMusic from './SheetMusic/sheetMusic'
import Home from './Home/home'
import About from './About/about'
import Sheet from './Sheet/sheet'
import Blog from './Blog/blog'
import Contact from './Contact/contact'
import Cart from './cart/cart'
import Shoppingcart from './Shoppingcart/Shoppingcart'

import './app.scss'
import { ProgressPlugin } from 'webpack';
import { connect } from "react-redux"
import {
  // Menu,
  Youtube,
  Github,
  Instagram,
  Gmail,
} from './Icons'

const App = (props) => {
  console.log('aoy jaaa', props);
  return (
    <Router>
      <div className="app">
        {/* <div className="header">
          Shinyrainbow piano
          <div className='icons-header' >
            <a target='_blank' href='https://github.com/shinyrainbow?tab=repositories'><Github className='icon' fill='#ffffff' /></a>
            <a target='_blank' href='mailto:kornkanok.lieng@gmail.com'><Gmail className='icon' fill='#ffffff' /></a>
            <a target='_blank' href='https://www.youtube.com/channel/UClIaSr8ht7HEwAU_4MoZxlQ'><Youtube className='icon' fill='#ffffff' /></a>
            <a target='_blank' href='https://www.instagram.com/aoyy_k/'><Instagram className='icon' fill='#ffffff' /></a>
          </div>

        </div> */}
        <ul className="nav">
          <li>
            <Link to="/">Shinyrainbow</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sheet">Sheet music</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart"><Shoppingcart /></Link>
          </li>
        </ul>


        <Switch>
          <Route exact path="/">
            <Home name='Shinyrainbow'/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact 
            path='/sheet/:sheetId'
            component={SheetMusic} 
          />
          <Route path="/sheet">
            <Sheet />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    items: state,
  }
}

export default connect(mapStateToProps, null)(App)

console.log('store', store)
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    {/* <Router > */}

      <App />
    {/* </Router> */}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)

