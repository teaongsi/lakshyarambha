import React from "react";
import Avatar from "./Avatar.jsx";
import Details from "./Details.jsx";

export default function Card(props) {
    return(
        <div className="card">
            <div className="top">
                <p className="id">{props.id}</p>
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img}/>
            </div>
            <div className="bottom">
                <Details detailInfo={props.phone} />
                <Details detailInfo={props.email} />
            </div>
    </div>
    );
}