import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const Map = withGoogleMap((props) => {
    
    return (
        <GoogleMap className="map" defaultZoom={11} center={{
            lat: props.lat,
            lng: props.lng
        }} onClick={(event) => {
            if(props.selected !== null) {
                let data = {
                    lng: event.latLng.lng(),
                    lat: event.latLng.lat(),
                    label: props.selected.label
                };
                props.handleAdd(data);
                props.handleSet(null);
            }
        }}>
        {
            props.markers.map((item, index) => {
                return (
                    <Marker onRightClick={() => {props.handleDelete(item)}} 
                        key={item.label + index} {...item}/>
                )
            })
        }
        </GoogleMap>
    )
});

export default Map;