import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import './Map.css';
import L from "leaflet";
import {addressType} from "../../Data/Data";
import Routing from "./Routing";
import CardMarker from "./CardMarker";
import {card} from "./settingCardConstants";
import {selectDataTable, selectPointsInfo} from "../../Redux/selectors";
import {useAppSelector} from "../../utils/redux-utils";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";


const Map = () => {
    const infoAboutPoints = useAppSelector(selectPointsInfo)
    const dataTable = useAppSelector(selectDataTable)

    //ищем выбранный в таблице маршрут
    const selectedApplication = dataTable.find(s => s.selected)

    //ищем точки начала и конца маршрута
    const loading_point: addressType = selectedApplication && infoAboutPoints[selectedApplication.loading_point] || {} as addressType
    const unloading_point: addressType = selectedApplication && infoAboutPoints[selectedApplication.unloading_point] || {} as addressType
    const points = [loading_point, unloading_point]

    return (
        <MapContainer center={card.center} zoom={card.zoom}>
            <TileLayer
                attribution={card.attribution}
                url={card.url}
            />
            {selectedApplication &&
                <>
                    {points.map(p => <CardMarker key={p.id} point={p}/>)}
                    <Routing
                        loading_point={loading_point.coords}
                        unloading_point={unloading_point.coords}
                    />
                </>
            }
        </MapContainer>

    );
};

export default Map;
