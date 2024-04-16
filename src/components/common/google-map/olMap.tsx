import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import { fromLonLat } from "ol/proj";

export function OpenLayerMap() {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapElement.current) return;

    const defaultCoords = fromLonLat([-87.623177, 41.881832]);
    const defaultName = "Chicago";

    const osmLayer = new TileLayer({
      preload: Infinity,
      source: new OSM(),
    });

    const iconFeature = new Feature({
      geometry: new Point(defaultCoords),
      name: defaultName,
    });

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const initialMap = new Map({
      target: mapElement.current,
      layers: [osmLayer, vectorLayer],
      view: new View({
        center: defaultCoords,
        zoom: 10,
      }),
    });

    return () => initialMap.setTarget(undefined);
  }, []);

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        overflow: "hidden",
        borderRadius: "10px",
      }}
      ref={mapElement}
      className="map-container"
    />
  );
}
