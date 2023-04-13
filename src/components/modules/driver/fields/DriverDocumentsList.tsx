import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const { Panel } = Collapse;

export const DriverDocumentsList: React.FC = () => {
  const { token } = theme.useToken();

  //   const documents = useSelector((state: any) => state.driver.documents) ;
  const documents = [
    { type: "CDL", link: "test1.pdf" },
    { type: "CDL", link: "test2.pdf" },
  ];

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{ background: token.colorBgContainer }}
    >
      <Panel header="View Saved Documents CDL" key="1" style={panelStyle}>
        {documents.map((doc: any, i: number) => {
          return (
            <div>
              <a key={i} href={doc.link}>
                {doc.link}
              </a>
            </div>
          );
        })}
      </Panel>
    </Collapse>
  );
};
