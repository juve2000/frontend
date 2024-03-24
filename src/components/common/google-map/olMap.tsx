import React, { useState, useEffect, useRef } from "react";
import { Popover } from "antd";
import { Feature, Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import Icon from "ol/style/Icon";

const AnyReactComponent = ({ text, ...props }: any) => {
  const { date, latitude, longitude, speed, time } = props;
  console.log("props", props);
  const content = () => {
    return (
      <div>
        <div>Speed: {speed} m/h</div>
        <div>
          Date: {date.day} - {date.month} - {date.year}
        </div>
      </div>
    );
  };
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Popover placement="top" title={text} content={content}>
        <div
          style={{
            width: 15,
            height: 15,
            borderRadius: "50%",
            backgroundColor: "red",
            position: "absolute",
          }}
        />
      </Popover>
    </div>
  );
};

export function OpenLayerMap() {
  const [map, setMap] = useState<any>();
  const mapElement = useRef();
  const mapRef = useRef<any>();
  mapRef.current = map;

  const osmLayer = new TileLayer({
    preload: Infinity,
    source: new OSM(),
  });

  const iconFeature = new Feature({
    geometry: new Point([162.335167, 47.608013]),
    name: "Null Island",
    population: 400,
    rainfall: 500,
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
      center: [162.335167, 47.608013],
      zoom: 5,
    }),
  });

  useEffect(() => {
    setMap(initialMap);
  }, []);

  return (
    <div
      style={{ height: 400, width: "100%", overflow: "hidden" }}
      ref={mapElement as any}
      className="map-container"
    />
  );
}
