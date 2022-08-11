import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import L from "leaflet";
import {useMap} from "react-leaflet";
import {useEffect} from "react";
import {routingType} from "./types";


const Routing = ({loading_point, unloading_point}: routingType) => {

    const map = useMap();
    // @ts-ignore
    useEffect(() => {
        const routingControl = L.Routing.control({
            waypoints: [L.latLng(...loading_point), L.latLng(...unloading_point)],
            addWaypoints: false,
            routeWhileDragging: false,
            show: false,
            useZoomParameter: true,
        }).addTo(map);
        routingControl.addTo(map);
        return () => map.removeControl(routingControl);
    }, [map, loading_point, unloading_point])

    return null
}

export default Routing
