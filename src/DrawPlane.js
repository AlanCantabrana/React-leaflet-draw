import './App.css'
import React, { useRef } from 'react'

import L from 'leaflet'
import { MapContainer, ImageOverlay, FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'

const DrawPlane = () => {
    const bounds = [
        [0, 0],
        [5400, 7200],
    ]
    const style = { height: '80vh', width: '75vw' }
    const mapRef = useRef()

    const _created = (e) => console.log(e)
    const _edited = (e) => console.log(e)
    const _deleted = (e) => console.log(e)

    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <div className="col">
                        <MapContainer
                            crs={L.CRS.Simple}
                            minZoom={-3}
                            bounds={bounds}
                            style={style}
                            ref={mapRef}
                        >
                            <FeatureGroup>
                                <EditControl
                                    position="topright"
                                    onCreated={_created}
                                    onEdited={_edited}
                                    onDeleted={_deleted}
                                    draw={{
                                        rectangle: false,
                                        circle: false,
                                        circlemarker: false,
                                        marker: false,
                                        polyline: false,
                                    }}
                                />
                            </FeatureGroup>
                            <ImageOverlay
                                url="http://localhost:3000/COA1.jpeg"
                                bounds={bounds}
                                zIndex={10}
                            />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DrawPlane
