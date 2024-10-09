import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import Leaflet to use its features
import positionIconUrl from './pos.png'; // Transparent PNG icon
import styles from "../component.module.css";

// Custom hook to zoom and center on the position
const ZoomToPosition = ({ position, zoom }) => {
    const map = useMap(); // Get map instance

    useEffect(() => {
        // Set view to the current position with the updated zoom level
        map.setView(position, zoom);
    }, [position, zoom, map]); // Trigger every time position or zoom changes

    return null;
};
const data = {
    gps: {
      latitude: 37.7749, // Example latitude
      longitude: -122.4194, // Example longitude
    },
    gpsData: {
      "2023-09-01T00:00:00Z": { latitude: 37.7749, longitude: -122.4194 },
      "2023-09-01T01:00:00Z": { latitude: 37.7750, longitude: -122.4195 },
      "2023-09-01T02:00:00Z": { latitude: 37.7751, longitude: -122.4196 },
      // Add more timestamps and coordinates as needed
    },
  };
const Map = () => {
    const position = [data.gps.latitude, data.gps.longitude]; // Use GPS data
    
    const [zoom, setZoom] = useState(13); // Initial zoom level

    // Define a custom icon for the marker
    const getPositionIcon = (zoomLevel) => {
        const size = Math.max(25, zoomLevel * 2); // Adjust the size based on zoom level
        return new L.Icon({
            iconUrl: positionIconUrl, // Use the updated transparent icon
            iconSize: [size, size * 1.6], // Proportional size (25x41 at zoom 13)
            iconAnchor: [size / 2, size * 1.6], // Adjust anchor based on size
            popupAnchor: [0, -size * 1.2], // Adjust popup anchor relative to size
            shadowUrl: null,
            shadowSize: null,
        });
    };

    // Event listener to handle map zoom changes
    const MapEventListener = () => {
        const map = useMapEvents({
            zoomend: () => {
                setZoom(map.getZoom()); // Update zoom level in state
            }
        });
        return null;
    };

    return (
        <div className={styles.GpsPosition} style={{ height: "418px%", width: "100%" }} >
            <h2 className={styles.title}>Rocket's Position on Map</h2>
        
            <MapContainer center={position} zoom={zoom} style={{ height: "95%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MapEventListener /> {/* Track zoom events */}
                <ZoomToPosition position={position} zoom={zoom} /> {/* Zoom to position whenever zoom changes */}
                <Marker position={position} icon={getPositionIcon(zoom)}> {/* Dynamically set icon size */}
                    <Popup>Rocket is here</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
