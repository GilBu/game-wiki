import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
const Card = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { slug, name, platforms, stores, released, background_image, metacritic, tags, esrb_rating, parent_platforms, genres} = x
      
      return (
        <div
          key={slug}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            key={slug}
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={background_image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                {/* <div className="fs-6 fw-normal">{platforms}</div> */}
                <div className="fs-5">{metacritic}</div>
              </div>
            </div>

          </div>
        </div>
      )
    })
  }
  else {
    display = "No Games Found";
  }

  return <>{display}</>
}

export default Card;