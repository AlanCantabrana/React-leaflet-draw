import './App.css'
import React from 'react'
import { MapContainer, ImageOverlay } from 'react-leaflet'
import L from 'leaflet'

function App() {
    const bounds = [
        [0, 0],
        [5400, 7200],
    ]
    const style = { height: '80vh', width: '75vw' }

    return (
        <div className="App">
            <MapContainer
                crs={L.CRS.Simple}
                minZoom={-4}
                bounds={bounds}
                style={style}
            >
                <ImageOverlay
                    url="http://localhost:3000/COA1.jpeg"
                    bounds={bounds}
                    zIndex={10}
                />
            </MapContainer>
        </div>
    )
}

export default App
