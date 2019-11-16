import React from 'react';
import {ShotChart} from "./ShotChart"

export function DataViewContainer(props) {
    return(
        <div className={"data-view"}>
            <ShotChart playerId={201939}/>
        </div>
    )
}