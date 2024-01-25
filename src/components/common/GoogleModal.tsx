import React from "react";
import GoogleMapReact from "google-map-react";
import { Button, Popover, ConfigProvider, Modal } from "antd";
import { defaultTo } from "lodash";
import "./checkbox.scss";

const AnyReactComponent = ({ text, ...props }: any) => {
  const { date, latitude, longitude, speed, time } = props;
  const content = () => {
    return (
      <div>
        <div>Speed: {speed} m/h</div>
        <div>
          Date: {date?.day} - {date?.month} - {date?.year}
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

// 38.5618869,-121.626237,11

export function ModalGoogleMapTracker(props: any) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { lat, lng, info } = props;

  const defaultProps = {
    center: {
      lat: defaultTo(lat, 37.74149),
      lng: defaultTo(lng, -121.58041),
    },
    zoom: 6,
  };

  return (
    <div className="google-modal">
      <span onClick={showModal}>Location</span>
      <Modal
        title="Location"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        className="google-modal"
        footer={null}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCgYHcwm3P78F60WtJcicP3KmN5kZzyFag",
            language: "EN",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={info}
        >
          <AnyReactComponent lat={lat} lng={lng} />
        </GoogleMapReact>
      </Modal>
    </div>
  );
}
