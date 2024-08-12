import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotlCartAmmount} = useContext(StoreContext);
  return (
    <div>
      <form action="" className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivary informatioon</p>
          <div className="mult-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Street' />
          <div className="mult-fields">
            <input type="text" placeholder='Cist' />
            <input type="text" placeholder='State' />
          </div>
          <div className="mult-fields">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>

            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotlCartAmmount()}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <p>Delivary Free</p>
              <p>{getTotlCartAmmount()==0?0:2}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotlCartAmmount()==0?0:getTotlCartAmmount()+2}</b>
            </div>

          </div>
          <button onClick={()=>navigate('/order')}>PROEED TO PAYMENT</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder