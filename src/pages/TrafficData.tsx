import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function TrafficData() {
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // Initialize the map after location is fetched
          initMap(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setError('Unable to fetch your location. Please enable location services.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  const initMap = (latitude, longitude) => {
    const map = L.map('map').setView([latitude, longitude], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker for the user's location
    L.marker([latitude, longitude]).addTo(map).bindPopup('You are here').openPopup();

    // Optional: Add traffic information (if available from OpenTraffic or similar APIs)
    // Placeholder: Display a traffic overlay if desired
  };

  return (
    <div className="min-h-screen bg-orange-500 flex flex-col">
      {/* Back Button */}
      <div className="p-4 z-10 absolute top-0 left-0">
        <button
          onClick={() => navigate('/dashboard')}
          className="text-white flex items-center bg-black bg-opacity-50 px-4 py-2 rounded-md"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back
        </button>
      </div>

      {/* Map Section */}
      <div className="flex-grow relative">
        {error ? (
          <p className="absolute top-0 left-0 right-0 text-center text-red-500 p-4 bg-white z-20">
            {error}
          </p>
        ) : (
          <div
            id="map"
            className="w-full h-full"
            style={{
              minHeight: 'calc(100vh - 4rem)', // Dynamic full screen map
              height: '100%',
            }}
          ></div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center p-4 text-white bg-black bg-opacity-70 absolute bottom-0 w-full">
        Data provided by OpenStreetMap and Leaflet.js
      </footer>
    </div>
  );
}
