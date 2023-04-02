import React from 'react'
import classes from './featuredProperties.module.css'
import { FaBed, FaSquareFull } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI'


const FeaturedProperties = () => {
    const [featuredProperties, setFeaturedProperties] = useState([])

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const data = await request("/property/find/featured", "GET")
                setFeaturedProperties(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchFeatured()
    }, [])


    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.titles}>
                    <h5>Properties</h5>
                    <h2>Our Featured Properties Photos</h2>
                </div>
                <div className={classes.properties}>
                <Link to={`/properties?type=beach&continent=0&priceRange=1`} className={classes.property}>
                  <img src='https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHw%3D&w=1000&q=80' />
                  
                  <h5>Beach House</h5>
                </Link>
                <Link to={`/properties?type=mountain&continent=1&priceRange=1`} className={classes.property}>
                  <img src='https://cdn.houseplansservices.com/content/8anheh4thlpbg2j5k9h3q5j5cb/w991x660.jpg?v=9' />
                  
                  <h5>Mountain House</h5>
                </Link>
                <Link to={`/properties?type=village&continent=2&priceRange=1`} className={classes.property}>
                  <img src='https://pix10.agoda.net/hotelImages/872600/-1/57feb481a28df933469330d16c8b161f.jpg?ca=8&ce=1&s=1024x768' />
                  
                  <h5>Village House</h5>
                </Link>
            </div>
                <div className={classes.featuredProperties}>
                    {featuredProperties?.map((property) => (
                        <div className={classes.featuredProperty} key={property._id}>
                            <Link to={`/propertyDetail/${property._id}`} className={classes.imgContainer}>
                                <img src={`https://realestatebackend-dhki.onrender.com/images/${property?.img}`} alt="" />
                            </Link>
                            <div className={classes.details}>
                                <div className={classes.priceAndOwner}>
                                    <span className={classes.price}>$ {property?.price}</span>
                                    <img src={`https://realestatebackend-dhki.onrender.com/images/${property?.currentOwner?.profileImg}`} className={classes.owner} />
                                </div>
                                <div className={classes.moreDetails}>
                                    <span>{property?.beds} <FaBed className={classes.icon} /></span>
                                    <span>{property?.sqmeters} square meters <FaSquareFull className={classes.icon} /></span>
                                </div>
                                <div className={classes.desc}>
                                    {property?.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties