import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
          An interactive real estate website with an easy-to-use user interface will help customers in browsing property easily. They will get access to all the properties available under categories like for sale.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone:987654321</span>
          
          <span>GitHub: pavithra kamalakkannan</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          
          
          <span>Current Location: India</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer