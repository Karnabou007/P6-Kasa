import React from 'react'
import locationDatas from "../datas/logements"
import { Link } from "react-router-dom";
import "../styles/_ApartementCard.scss";

function ApartementCard() {
    return (
        <div className="location-list">
            {locationDatas.map((location) => (
          <div key={location.id} className="location-list__card">
            <Link to={`/locations/${location.id}`}>
              <div className="image-container">
                <img src={location.cover} alt={location.title}/>
                <div className="image-overlay"></div>
              </div>
              <h2>{location.title}</h2>
            </Link>
          </div>
        ))}
        </div>
    )
}

export default ApartementCard;