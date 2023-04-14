import React, { useEffect, useState } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import { carrierData } from "../constant";
import { useSelector } from "react-redux";
import { InputType } from "../../../../constants/inputs";
import { DriverField } from "../constant";
import {
  validate,
  VALIDATION_TYPE,
  VALIDATION_RULES,
  getValidation,
} from "../../../../utils/validation";
import { InputSelectV2, TextInputV2 } from "../../../common/doubleinput";

const { REQUIRED } = VALIDATION_TYPE;

export const InputDriverSelecetAdress = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    hasFeedback = false,
    form,
    disabled = false,
  } = props;

  const getName = (name: any, type: any) => {
    return typeof name === "string" ? [name, type] : [...name, type];
  };

  const [selectOptions, setSelectOptions] = useState([]);

  const { currentCarrier } = useSelector((state: any) => state.driver);
  const [currentTerminal, setCurrentTerminal] = useState(
    currentCarrier?.terminals?.[0]
  );

  useEffect(() => {
    setCurrentTerminal(
      currentCarrier?.terminals?.find(
        (t: any) => t.id === form.getFieldValue("terminal")
      )
    );
  }, [currentCarrier, form]);

  const isRequired = rules.find((rule: any) => rule.required);

  const state = React.useMemo(() => {
    return carrierData.states.find(
      (st: any) => st.key === currentCarrier?.terminals?.[0]?.address?.state
    );
  }, [currentCarrier]);

  const contry = React.useMemo(() => {
    return carrierData.countries.find(
      (st: any) => st.key === currentCarrier?.terminals?.[0]?.address?.country
    );
  }, [currentCarrier]);

  const tz = React.useMemo(() => {
    return carrierData.tz.find(
      (st: any) => st.key === currentCarrier?.terminals?.[0]?.tz
    );
  }, [currentCarrier]);

  const homeTz = React.useMemo(() => {
    return carrierData.tz.find((st: any) => st.key === currentTerminal?.tz);
  }, [currentTerminal]);

  const homeState = React.useMemo(() => {
    return carrierData.states.find(
      (st: any) => st.key === currentTerminal?.address?.state
    );
  }, [currentTerminal]);

  const homeContry = React.useMemo(() => {
    return carrierData?.countries?.find(
      (st: any) => st.key === currentTerminal?.address?.country
    );
  }, [currentTerminal]);

  useEffect(() => {
    setSelectOptions(
      currentCarrier?.terminals?.map((terminal: any) => {
        return {
          key: terminal.id,
          value: terminal.name,
        };
      })
    );
  }, [currentCarrier]);

  useEffect(() => {}, []);

  const selectProp = {
    type: InputType.SELECT_V2,
    name: DriverField.TERMINAL,
    // pathName: ["settings"],
    // label: "Cargo type",
    rules: [getValidation(REQUIRED, "Cargo type")],
    placeholder: "Home Terminal",
    hasFeedback: true,
    // title: "Cargo type",
    span: 24,
    width: "100%",
  };
  return (
    <>
      <Row style={{ marginBottom: 20 }}>
        <Col span={6} className="input-item-wrapper">
          <div className="input-item-wrapper">
            <div>
              {"Authority Terminal"}
              {isRequired && " *"}
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Row className="ubuntu">
            {currentCarrier?.terminals?.[0]?.address?.number_street && (
              <div style={{ marginRight: 5 }}>
                {currentCarrier?.terminals?.[0]?.address?.number_street},
              </div>
            )}
            {state?.value && (
              <div style={{ marginRight: 5 }}>{state?.value}</div>
            )}
            {state?.code && (
              <div style={{ marginRight: 5 }}>({state?.code}),</div>
            )}
            {currentCarrier?.terminals?.[0]?.address?.area && (
              <div style={{ marginRight: 5 }}>
                {currentCarrier?.terminals?.[0]?.address?.area}
              </div>
            )}
            {currentCarrier?.terminals?.[0]?.address?.address_index && (
              <div style={{ marginRight: 5 }}>
                {currentCarrier?.terminals?.[0]?.address?.address_index},
              </div>
            )}
            {contry?.value && (
              <div style={{ marginRight: 5 }}>{contry?.value}</div>
            )}
          </Row>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col span={6} className="input-item-wrapper">
          <div className="input-item-wrapper">
            <div>
              {"Time Zone (AT)*"}
              {isRequired && " *"}
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Row className="ubuntu">
            <div style={{ marginRight: 5 }}>{tz?.value}</div>
          </Row>
        </Col>
      </Row>
      <Row style={{ margin: "20px 0px" }}>
        <Col span={24} style={{ borderTop: "1px dashed #D9D9D9" }}></Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col span={6} className="input-item-wrapper">
          <div className="input-item-wrapper">
            <div>
              {"Home Terminal name"}
              {isRequired && " *"}
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Row className="ubuntu">
            <InputSelectV2
              {...selectProp}
              options={selectOptions}
              onChange={(val: any) => {
                setCurrentTerminal(
                  currentCarrier?.terminals?.find((t: any) => t.id === val)
                );
              }}
            />
          </Row>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col span={6} className="input-item-wrapper">
          <div className="input-item-wrapper">
            <div>
              {"Adress (HT)"}
              {isRequired && " *"}
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Row className="ubuntu">
            {currentTerminal?.address?.number_street && (
              <div style={{ marginRight: 5 }}>
                {currentTerminal?.address?.number_street},
              </div>
            )}
            {homeState?.value && (
              <div style={{ marginRight: 5 }}>{homeState?.value}</div>
            )}
            {homeState?.code && (
              <div style={{ marginRight: 5 }}>({homeState?.code}),</div>
            )}
            {currentTerminal?.terminals?.[0]?.address?.area && (
              <div style={{ marginRight: 5 }}>
                {currentTerminal?.terminals?.[0]?.address?.area}
              </div>
            )}
            {currentTerminal?.address?.address_index && (
              <div style={{ marginRight: 5 }}>
                {currentTerminal?.address?.address_index},
              </div>
            )}
            {homeContry?.value && (
              <div style={{ marginRight: 5 }}>{homeContry?.value}</div>
            )}
          </Row>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col span={6} className="input-item-wrapper">
          <div className="input-item-wrapper">
            <div>
              {"Time Zone (HT)*"}
              {isRequired && " *"}
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Row className="ubuntu">
            <div style={{ marginRight: 5 }}>{homeTz?.value}</div>
          </Row>
        </Col>
      </Row>
    </>
  );
};
