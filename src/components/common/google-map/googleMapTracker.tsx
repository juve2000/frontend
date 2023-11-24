import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export function GoogleMapTracker(props: any) {
  const defaultProps = {
    center: {
      lat: 26.513266263248372,
      lng: -80.9255265001059,
    },
    zoom: 6,
  };
  const { lat, lng } = props;

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCgYHcwm3P78F60WtJcicP3KmN5kZzyFag",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={26.513266263248372}
          lng={-80.9255265001059}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
