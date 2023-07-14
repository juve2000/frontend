import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { Form, Select, Col } from "antd";
import { getCarriersListReq } from "../../../actions";
import { getCompaniesListRootReq } from "../../../actions";
import { usePermissions } from "../../../hooks/usePermissions";
import { AllPermissionsType } from "../../modules/role/constant";

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
        };
      })
    );
  }, [companiesList]);

  const getName = (name: any, pathName: any) => {
    return pathName ? [...pathName, name] : name;
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
          onChange={onChange}
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
    </Col>
  );
};
