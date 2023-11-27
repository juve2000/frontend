import React from "react";
import GoogleMapReact from "google-map-react";
import { Button, Popover, ConfigProvider } from "antd";

const AnyReactComponent = ({ text, ...props }: any) => {
  const { date, latitude, longitude, speed, time } = props;
  console.log("props", props);
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Popover placement="top" title={text}>
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

// 38.5618869,-121.626237,11

export function GoogleMapTracker(props: any) {
  const defaultProps = {
    center: {
      lat: 38.5618869,
      lng: -121.626237,
    },
    zoom: 6,
  };
  const { lat, lng, info } = props;

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCgYHcwm3P78F60WtJcicP3KmN5kZzyFag",
          language: "EN",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {info?.map((item: any) => {
          console.log("item", item);
          return (
            <AnyReactComponent
              {...item}
              lat={38.5628269 || item.latitude}
              lng={-121.626237 || item.longitude}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
