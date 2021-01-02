import React from 'react'
import SheetMusic from '../SheetMusic/sheetMusic'
import * as action from '../redux/action'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { connect } from "react-redux"
import Seperator from '../Seperator/Seperator'
import './sheet.scss'

const Sheet = (props) => {
  const songs = [
    {
      id: '0',
      name: 'เศษผม', artist: 'jay thitiwat', price: '$2.99'
    },
    {
      id: '1',
      name: 'No Matter What I do', artist: 'Ally', price: '$2.99'
    },
    {
      id: '2',
      name: 'แปลไม่ออก', artist: 'Billkin', price: '$2.99'
    },
    {
      id: '3',
      name: 'กีดกัน', artist: 'Billkin', price: '$2.99'
    },
    {
      id: '4',
      name: 'คิดแต่ไม่ถึง', artist: 'Tilly Birds', price: '$2.99'
    },
    {
      id: '5',
      name: 'ยังคงสวยงาม', artist: 'Tilly Birds', price: '$2.99'
    },
    {
      id: '6',
      name: 'ให้นานกว่าที่เคย', artist: '100x100', price: '$2.99'
    },
    {
      id: '7',
      name: 'ฉันเป็นของเธอทุกวัน', artist: 'Ford Arun', price: '$2.99'
    },
    {
      id: '8',
      name: 'วอแว (WarWhaere)', artist: 'War Wanarat', price: '$2.99'
    },
  ]
  // const [count, setCount] = React.useState(0);
  // React.useEffect(() => {
  //   // async function fecthData() {
  //   //   const res = await fetch()
  //   // }
  //   console.log('update');
  // }, [count])
  let { path, url } = useRouteMatch();
  // const [selectedItems, handleAddItem] = React.useState([]);
  return (
    <div className="all-song">
    <Seperator text="ALL SHEET MUSIC" />
      <div className="content">
        {
          songs.map((item, index) => {
            return (
              <div key={index} className="song content-grid">
                <Link to={`sheet/${index}`}>
                  <div className="item">
                    <img src="" />
                    <div className="detail">View Sheet</div>
                  </div>

                  </Link>
                  <div className="song-detail">
                    <div className="song-name">{item.name} - {item.artist}</div>
                    <div className="price">{item.price}
                      <button
                        className="buy"
                        onClick={() => props.handleAddItem({
                          ...item, isSelected: true
                        })}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>

              </div>
            )
          })
        }
      </div>

      {/* <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul> */}

     
    </div>
  );
}


// export default Sheet

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddItem: (item) => dispatch(action.addItem(item))
    // increaseCounter: () => dispatch(increaseCounter()),

    // decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sheet)
