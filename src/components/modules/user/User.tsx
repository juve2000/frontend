import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Row, Col, Form, Button, Input } from "antd";
import { CommonInput } from "../../common/inputs";
import { userForm } from "./user-form";
import { Graph } from "../../common/graph/Graph";
import { getUserReq } from "../../../actions/user";

export const UserPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  console.log("location", params);
  const user = useSelector((state: any) => state.user.user);
  const handleSubmit = (values: any) => {
    console.log("form", form);
    console.log("values", values);
  };

  React.useEffect(() => {
    dispatch(getUserReq({ id: params.userid }));
  }, []);
  return (
    <>
      <Row style={{ paddingLeft: 23, paddingRight: 25 }}>
        <Col span={24}>
          <Form
            form={form}
            name="test"
            onError={(err) => {
              console.log("err", err);
            }}
            onFinish={handleSubmit}
            initialValues={{
              name: "stas",
              lastName: "litvinov",
              dot: "",
              id: "",
              phone: "",
              adress: {},
            }}
          >
            {userForm.map((field: any, i: number) => {
              return <CommonInput key={i} {...field} />;
            })}
            <Form.Item style={{ width: "100%" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="orange"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
