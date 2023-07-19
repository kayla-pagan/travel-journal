import React from 'react'

export default function Card(props){
    
    return (
        <div className="card flex align-center">
            <div className="card--image" style={{backgroundImage: `url(${props.item.imageUrl})`}}></div>
            <div>
                <div className="card--location flex align-center">
                    <img src="../images/location-icon.png" />
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}
