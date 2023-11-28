import React from "react";
import GoogleMapReact from "google-map-react";
import { Button, Popover, ConfigProvider } from "antd";

const AnyReactComponent = ({ text, ...props }: any) => {
  const { date, latitude, longitude, speed, time } = props;
  console.log("props", props);
  const content = () => {
    return (
      <div>
        <div>{}</div>
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

// 38.5618869,-121.626237,11

export function GoogleMapTracker(props: any) {
  const defaultProps = {
    center: {
      lat: 37.74149,
      lng: -121.58041,
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
        options={info}
      >
        {info?.map((item: any) => {
          console.log("item", item);
          return (
            <AnyReactComponent
              {...item}
              lat={item.latitude}
              lng={-item.longitude}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
