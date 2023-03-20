import React from 'react'
import classes from './newsletter.module.css'
import { FiSend } from 'react-icons/fi'

const Newsletter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Want to get the latest offers?</h5>
          <h2>Select your property.</h2>
          <p>Send your details.we will connect you & get your best offer</p>
        </div>
        {/* <div className={classes.inputContainer}>
          <input type="email" placeholder='Type email...' />
          <FiSend className={classes.sendIcon} />
        </div> */}
      </div>
    </div>
  )
}

export default Newsletter