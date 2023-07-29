import React, { useEffect, useMemo, useState } from "react";

// import "./styles.css";
import "esri-leaflet-geocoder";
// import * as L from "leaflet";
import * as L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { esri, Icon } = L;

const Map = ({ address }) => {
  const [position, setPosition] = useState([0, 0]);
  const [geocodeService, setGeocodeService] = useState(null);

  useEffect(() => {
    // const geocodeService = L.esri?.Geocoding.geocodeService({
    //   token:
    //     "AAPK9da88b6ecd2f41f1b082da478a710ae3hswDcbGqFLvmY4fNSF3cipoI5pv-cSLaeqlNZJv2Ct13V3wwW1LOnT-tQ14sJ95K",
    // });

    const apiKey =
      "AAPK9da88b6ecd2f41f1b082da478a710ae3hswDcbGqFLvmY4fNSF3cipoI5pv-cSLaeqlNZJv2Ct13V3wwW1LOnT-tQ14sJ95K";

    // setGeocodeService(geocodeService);

    // if (!address) return;

    // const provider = new OpenStreetMapProvider();

    // (async () => {
    //   const results = await provider.search({ query: address });

    //   if (results.length) {
    //     console.log("result,", results);
    //     setPosition([results[0].y, results[0].x]);
    //   }
    // })();

    let mapInitialized = false;

    try {
      if (!mapInitialized) {
        const map = L.map("map");

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.esri["Geocoding"]
          .geocode({
            apikey: apiKey,
          })
          .text(address)
          .run(function (error, response) {
            if (error) {
              return;
            }

            map.fitBounds(response.results[0].bounds);
          });

        mapInitialized = true;
      }
    } catch (error) {
      console.log("error:::", error);
    }
  }, [address]);

  console.log("position 1", position);

  // useEffect(() => {
  //   if (!geocodeService || !address) return;

  //   console.log("address 2", address);

  //   // Geocode the address and set the position state
  //   geocodeService
  //     .geocode()
  //     .text(address)
  //     .run(function (error, response) {
  //       if (response && response.results.length > 0) {
  //         const { lat, lng } = response.results[0].latlng;
  //         setPosition([lat, lng]);
  //       }
  //     });
  // }, [address, geocodeService]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30], //size of the icon
  });

  const renderMap = useMemo(() => {
    if (position[0] !== 0 && position[1] !== 0)
      return (
        <MapContainer center={position} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>Đây là vị trí hiện tại</Popup>
          </Marker>
        </MapContainer>
      );

    return <h1>Loading...</h1>;
  }, [position, customIcon]);

  return <div id="map"></div>;
};

export default Map;
