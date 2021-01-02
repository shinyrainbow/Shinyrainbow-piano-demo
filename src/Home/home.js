import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import './home.scss'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Home = ({ name }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    // async function fecthData() {
    //   const res = await fetch()
    // }
    console.log('update');
  }, [count])
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
    }
  ]
  return (
    <>
      <div className="home">
        <div class="separator">วิธีการสั่งซื้อ (HOW TO ORDER)</div>
        <div className="how-to-buy">
          <ul>
            สำหรับคนไทย (For Thai)
            <li>1.เลือกเพลง</li>
            <li>2.ชำระเงินทางช่องทางใดก็ได้ หรือ ติดต่อ facebook page: Shinyrainbow</li>
            <li>3.หากชำระผ่านเว็บไซต์นี้ จะมีเมลล์ส่งกลับให้ในรูบแบบ pdf </li>
          </ul>
          <ul>
            For Foreigner
            <li>1.choose song and click add to cart</li>
            <li>2.pay with paypal stripe or credit card</li>
            <li>3.after checkout is done, I will send the sheet music by e-mail manually</li>
          </ul>
        </div>

        <div class="separator">โน๊ตเพลงอัพเดตล่าสุด (LAST UPDATE)</div>
        <div className="last-update">

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

                      {/* <div className="song-detail">
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
                  </div> */}

                    </Link>
                  </div>
                )
              })
            }

          </div>
          {/* <div className='content'>


          <Link to={`sheet/${index}`}>
            <div className='content-grid'>
              <div className="item">
                <img src="" />
                <div className="detail">View Sheet</div>
              </div>
            </div>
            </Link>

            <div className='content-grid'>
              <div className="item">
                <img src="" />
                <div className="detail">View Sheet</div>
              </div>
            </div>

            <div className='content-grid'>
              <div className="item">
                <img src="" />
                <div className="detail">View Sheet</div>
              </div>
            </div>

            <div className='content-grid'>
              <div className="item">
                <img src="" />
                <div className="detail">View Sheet</div>
              </div>
            </div>
          </div> */}


          <div className="under-content">
            <button className="view-all-sheet">ดูโน๊ตเพลงทั้งหมด (View All Sheet Music)</button>
          </div>
        </div>

        <div class="separator">อ่านบทความ (MY BLOGS)</div>
        <div className="my-blogs">
          <div className='clip'>
            {/* <div className='cover'> */}
            <iframe frameborder="0" scrolling="no" marginHeight="0" marginWidth="0"
              width="350px" height="200px" type="text/html"
              src="https://www.youtube.com/embed/zuzovwrHHyc?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/en">youtubeembedcode.com/en/</a></small></div><div><small><a href="http://add-link-exchange.com">Add Link Exchange</a></small></div><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode.com/nl/</a></small></div><div><small><a href="http://add-link-exchange.com">add-link-exchange.com</a></small></div></iframe>
          </div>

          <div className='clip'>
            <iframe frameborder="0" scrolling="no" marginHeight="0" marginWidth="0"
              width="350px" height="200px" type="text/html"
              src="https://www.youtube.com/embed/8ERqP6wZR_U?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
          </div>

          {/* </div> */}
          {/* <div className="clip">a</div>
        <div className="clip">a</div>
        <div className="clip">a</div> */}
        </div>

        {/* <div className="last-blog">
        <div className="blog">a</div>
        <div className="blog">a</div>
        <div className="blog">a</div>
      </div> */}

      </div>

      <div className="footer">
        <div className="footer-line">Shinyrainbow</div>
        <div className="footer-content">
          <div className="content">
            <ul>
              <li>Sheet music</li>
              <li>About</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="content">
            <ul>
              <li>Payment info</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="content">
            musicappreci@gmail.com
            Bangkok, Thailand
            Tel. 0909791689
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

