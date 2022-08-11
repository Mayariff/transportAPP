import {LatLngTuple} from "leaflet";
import {addressType} from "../../Data/Data";

export type routingType = {
    loading_point: LatLngTuple
    unloading_point: LatLngTuple
}

export type markerType ={
    point:addressType
}