import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme, Table, Row, Col, Dropdown } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ENV } from "../../../../utils/constants";
import { deleteDriverDocumentReq } from "../../../../actions";

const { Panel } = Collapse;

export const DriverDocumentsList: React.FC = (props: any) => {
  const { DocsType = 1, title = "Saved Documents" } = props;
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const documents = useSelector((state: any) => state.driver.documents) || [];
  const loading = useSelector((state: any) => state.driver.documentsLoading);

  const driver = useSelector((state: any) => state.driver.driver);

  const panelStyle = {
    marginBottom: 24,
    background: "rgba(239, 246, 255, 0.4)",
    borderRadius: token.borderRadiusLG,
    border: "none",
    // width: "100%",
    fontFamily: "Ubuntu",
    color: "rgba(20, 16, 41, 0.4) !important",
  };

  const onDelete = (documentId: any) => {
    dispatch(
      deleteDriverDocumentReq({
        driverId: driver.id,
        documentId,
      })
    );
  };

  const columns: ColumnsType<any> = [
    // Table.SELECTION_COLUMN,
    {
      title: "Image",
      key: "type",
      dataIndex: "type",
      //   sortOrder: getOrderFromTableParams("first_name", tableParams),

      render: (name, record, index) => {
        const [_, fileName] = record.file.split(
          "/storage/app/public/driver/docs/"
        );
        const EXTENTSIONS = ["jpg", "png", "svg", "jpeg", "bmp"];
        const extension = fileName.split(".");
        const lastElement = extension[extension.length - 1];
        const isImage = EXTENTSIONS.includes(lastElement);
        return (
          <div
            className="orange ubuntu"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              {isImage ? (
                <img
                  style={{ width: 40, height: 40, borderRadius: "50%" }}
                  src={`${ENV}${record.file}`}
                />
              ) : (
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#F7F9FD",
                  }}
                />
              )}
            </div>
          </div>
        );
      },
      width: "10%",
      ellipsis: true,
    },
    {
      title: "Document Type",
      key: "type",
      dataIndex: "type",
      //   sortOrder: getOrderFromTableParams("first_name", tableParams),

      render: (name, record, index) => {
        return (
          <div
            className="orange ubuntu"
            style={{ display: "flex", alignItems: "center" }}
          ></div>
        );
      },
      width: "10%",
      ellipsis: true,
    },
    {
      title: "File",
      key: "file",
      dataIndex: "file",
      //   sortOrder: getOrderFromTableParams("first_name", tableParams),

      render: (name, record, index) => {
        const [_, fileName] = record.file.split(
          "/storage/app/public/driver/docs/"
        );

        return (
          <div>
            <a target="_blank" href={`${ENV}${record.file}`}>
              {fileName}
            </a>
          </div>
        );
      },
      width: "60%",
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "5%",
      ellipsis: true,
      render: (value, record, index) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{ cursor: "pointer", marginRight: 10 }}
              className="icon-fi-rr-trash dark-red-accent"
              onClick={() => onDelete(record.id)}
            ></span>
            <a
              href={`${ENV}${record.file}`}
              style={{ display: "flex", alignItems: "center" }}
              download
              target={"_blank"}
            >
              <span className="icon-fi-rr-download dark-green-accent"></span>
            </a>
          </div>
        );
      },
    },
  ];

  return (
    <Row style={{ width: "100%" }}>
      <Col span={24}>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{ background: token.colorBgContainer }}
        >
          <Panel header={`View ${title}`} key="1" style={panelStyle}>
            <Row>
              <Col span={24}>
                <Table
                  loading={loading}
                  style={{ width: "100%" }}
                  columns={columns}
                  rowKey={(record) => record.id}
                  dataSource={documents?.filter(
                    (doc: any) => doc?.type === DocsType
                  )}
                  // rowSelection={{ ...rowSelection, columnWidth: 10 }}
                  className="table-custom"
                  //   tableLayout="fixed"
                  pagination={false}
                  //   sticky
                  //   scroll={{ y: window.innerHeight - 235 }}
                />
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
};
