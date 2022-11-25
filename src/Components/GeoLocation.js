import React, { useEffect, useState } from 'react'

const GeoLocation = () => {

    const[location, setLocation] = useState({
        loaded: false,
        coordinates: {lat: "", lng: ""}
        });

    const onSucces = location => {
        setLocation({
            loaded: true,
            coordinates:{
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
    }

    const onError = error => {{
        setLocation({
            loaded:true,
            error,
        })
    }}

    useEffect(() => {
        if(!("geolocation" in navigator)){
            onError({
                code: 0,
                message: "geolocation not supported",
            })
            setLocation(state => ({
                ...state,
                loaded: true,
                error: {
                    code: 0,
                    message: "geolocation not supported",
                },
            }))
        }

        navigator.geolocation.getCurrentPosition(onSucces, onError)
    }, [])



  return location
}

export default GeoLocation
