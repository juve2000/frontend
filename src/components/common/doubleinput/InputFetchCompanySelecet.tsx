import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { Form, Select, Col } from "antd";
import { getCarriersListReq } from "../../../actions";
import { getCompaniesListRootReq } from "../../../actions";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../../modules/role/constant";
import { companyStatys } from "../../modules/company/constant";

export const InputFetchCompanySelectV2 = (props: any) => {
  const {
    rules = [],
    name = "",
    icon = "",
    placeholder = "",
    label = "",
    disabled = false,
    hasFeedback = true,
    // options = [],
    title,
    span,
    width,
    styles = {},
    pathName = "",
    form,
    onChange,
    items,
    isReadonlyCarrier = false,
  } = props;

  const { Option } = Select;
  const isRequired = rules.find((rule: any) => rule.required);
  const dispatch = useDispatch();
  const { companiesList } = useSelector((state: any) => state.company);
  const [options, setOptions] = useState([]);
  const { checkPermission } = usePermissions();
  const isSuperAdmin = checkPermission(AllPermissionsType.SUPER_ADMIN);
  const [statusOptions, setStatusOptions] = useState("");

  React.useEffect(() => {
    if (companiesList.length < 1 && isSuperAdmin) {
      dispatch(getCompaniesListRootReq({}));
    }
  }, []);

  React.useEffect(() => {
    setOptions(
      companiesList.map((company: any) => {
        return {
          key: company.name,
          value: company.id,
          status: companyStatys.find((status) => status.key === company.status),
        };
      })
    );
  }, [companiesList]);

  React.useEffect(() => {
    console.log("name pathName", { name, pathName });
  }, [name, pathName]);

  const getName = (name: any, pathName: any) => {
    return pathName ? [...pathName, name] : name;
  };

  const getCompanyStatusValue = (id: string) => {
    const companyFound = companiesList.find((item: any) => {
      return item.id === id;
    });
    return companyStatys.find((st) => st.key === companyFound?.status)?.value;
  };

  return (
    <Col
      span={span}
      className="input-container-v2"
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {title ? (
        title === "invisible" ? (
          <div className="input-item-title" style={{ opacity: 0 }}>
            {title}
          </div>
        ) : (
          <div className="input-item-title">{title}</div>
        )
      ) : null}
      <Form.Item
        rules={rules}
        name={getName(name, pathName)}
        style={{ width: "100%" }}
      >
        <Select
          disabled={disabled || isReadonlyCarrier}
          style={{ width, ...styles }}
          placeholder={placeholder}
          onChange={(id) => {
            form.setFieldValue("status", getCompanyStatusValue(id));
          }}
          // showSearch
        >
          {options.map((item: any, i: number) => {
            return (
              <Option key={i} value={item.value}>
                {item.key}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        rules={rules}
        name={getName(["status"], pathName)}
        style={{ width: "100%" }}
      >
        <Select
          disabled={true}
          style={{ width, ...styles }}
          placeholder={placeholder}
          onChange={onChange}
          value={getCompanyStatusValue}
          // showSearch
        >
          {[].map((item: any, i: number) => {
            return (
              <Option key={i} value={item.value}>
                {item.key}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </Col>
  );
};
