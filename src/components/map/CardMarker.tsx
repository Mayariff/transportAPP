import {Marker, Popup} from "react-leaflet";
import React from "react";
import {markerType} from "./types";


const CardMarker = React.memo(({point}: markerType) => {
    return (
        <Marker position={point.coords}>
            <Popup>
                <b>  {point.is_loadingPoint ? 'Точка погрузки' : 'Точка разгрузки'}Точка разгрузки: </b> {point.title}
                <br/>
                <b>Адрес: </b> {point.location}
            </Popup>
        </Marker>
    )
})

export default CardMarker;