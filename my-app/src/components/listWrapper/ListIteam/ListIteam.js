import React from 'react';
import './ListItem.css';


const ListItem = (props) => (
    <li className="ListItem__wrapper">
        <img src={props.image} className="ListItem__image" alt={props.name} />
        <div>
            <h2 className="ListItem__name">{props.name}</h2>
            <p className="ListItem__description">
                {props.description}
            </p>
            <a href={props.twitterLink} className="ListItem__button" >visit twiiter page</a>
        </div>
    </li >
)

export default ListItem;