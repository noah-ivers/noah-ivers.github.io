import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import fordLogo from '../assets/Ford.jpg';
import solarisLogo from '../assets/SolarisLogo.png';
import umichLogo from '../assets/Umich_Seal.png';

function JourneyMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const boundsRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://tiles.openfreemap.org/styles/liberty',
      center: [-77, 42.45],
      zoom: 5.4,
      pitch: 0,
      bearing: 0,
    });

    mapRef.current = map;

    const locations = [
      {
        id: 'solaris',
        name: 'Solaris Renewables',
        location: 'Boston, MA',
        coords: [-71.0589, 42.3601],
        logo: solarisLogo,
      },
      {
        id: 'umich',
        name: 'University of Michigan',
        location: 'Ann Arbor, MI',
        coords: [-83.7430, 42.2808],
        logo: umichLogo,
      },
      {
        id: 'ford',
        name: 'Ford Motor Company',
        location: 'Detroit, MI',
        coords: [-83.0458, 42.3314],
        logo: fordLogo,
      },
    ];

    const bounds = new maplibregl.LngLatBounds();

    locations.forEach((place) => {
      bounds.extend(place.coords);

      const el = document.createElement('div');
      el.className = 'journey-marker';

      const img = document.createElement('img');
      img.src = place.logo;
      img.alt = place.name;
      el.appendChild(img);

      const popup = new maplibregl.Popup({
        offset: 28,
        closeButton: false,
        closeOnClick: false,
        className: 'journey-popup',
      }).setHTML(
        `<strong>${place.name}</strong><br/><span>${place.location}</span>`
      );

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat(place.coords)
        .addTo(map);

      el.addEventListener('mouseenter', () => {
        popup.setLngLat(place.coords).addTo(map);
      });

      el.addEventListener('mouseleave', () => {
        popup.remove();
      });

      el.addEventListener('click', () => {
        popup.setLngLat(place.coords).addTo(map);
        map.flyTo({
          center: place.coords,
          zoom: 14.5,
          pitch: 60,
          bearing: 24,
          essential: true,
        });
      });
    });

    boundsRef.current = bounds;

    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isSmallScreen) {
      map.fitBounds(bounds, {
        padding: 40,
        duration: 0,
      });
    }

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  const handleReset = () => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    const bounds = boundsRef.current;
    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isSmallScreen && bounds) {
      map.fitBounds(bounds, {
        padding: 40,
        essential: true,
      });
    } else {
      map.flyTo({
        center: [-77, 42.45],
        zoom: 5.4,
        pitch: 0,
        bearing: 0,
        essential: true,
      });
    }
  };

  return (
    <section className="journeySection">
      <h2 className="journeyTitle">My Journey So Far</h2>
      <p className="journeySubtitle">
        A quick map of where I&apos;ve studied and worked so far.
      </p>
      <p className="journeySubtitle">
        (click logos to see cities!)
      </p>
      <div className="journeyMapWrapper">
        <button
          type="button"
          className="journeyResetButton"
          onClick={handleReset}
        >
          Reset view
        </button>
        <div ref={mapContainerRef} className="journeyMap" />
      </div>
    </section>
  );
}

export default JourneyMap;

