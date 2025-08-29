import React from "react";
import { emojipedia } from "../emojipedia.js";

export default function Entry(props) {
    return (
        <div className="term">
            <dt>
                <div className="term">
                    <dt>
                        <span className="emoji" role="img" aria-label={props.name}>
                        {props.emoji}
                        </span>
                        <span>{props.name}</span>
                    </dt>
                    <dd>
                        {props.meaning}
                    </dd>
                </div>
            </dt>
        </div>
    )
}