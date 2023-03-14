import React, { useState } from "react";
import { Form, Input, Col, Button, Row } from "antd";
import { CommonInput } from "../inputs";
import { InputTitleDynamic } from "./InputTitleDynamic";

export const InputAddDynamic = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    disabled = false,
    width = "100%",
    title = "",
    isSecondField = false,
    span = 24,
    form,
    fields,
    itemName = "Terminal",
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);

  //   const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    console.log("currentIndex", currentIndex);
  }, [currentIndex]);

  return (
    <>
      <Form.List name={name}>
        {(formFields, { add, remove }) => {
          return (
            <>
              {formFields.map((field: any, i: any) => {
                if (field.name === currentIndex) {
                  return (
                    <>
                      <InputTitleDynamic
                        label={label}
                        items={formFields}
                        onClick={(value: any) => {
                          setCurrentIndex(value);
                        }}
                        key={i}
                        itemName={itemName}
                        currentIndex={currentIndex}
                        onValidate={(callback: any) => {
                          form
                            .validateFields()
                            .then((res: any) => {
                              callback();
                            })
                            .catch((err: any) => {
                              console.log("err", err);
                            });
                        }}
                        onAdd={(index: any) => {
                          // form.setFieldValue(
                          //   name,
                          //   form.getFieldValue(name).push(field)
                          // );
                          form
                            .validateFields()
                            .then((res: any) => {
                              console.log("res", res);
                              setCurrentIndex((currentValue) => {
                                return currentValue + 1;
                              });
                              add();
                            })
                            .catch((err: any) => {
                              console.log("err", err);
                            });
                        }}
                        onRemove={(fieldId: any) => {
                          remove(i);
                        }}
                      />
                      <Row>
                        <Col
                          span={24}
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            cursor: "pointer",
                            marginBottom: 16,
                            paddingRight: 16,
                          }}
                          className={"orange"}
                        >
                          <div
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                            }}
                            onClick={() => {
                              if (currentIndex !== 0) {
                                remove(currentIndex);
                                setCurrentIndex((currentValue) => {
                                  return currentValue - 1;
                                });
                              }
                            }}
                          >
                            <span
                              className="icon-fi-rr-cross-small"
                              style={{ marginRight: 4 }}
                            ></span>{" "}
                            Remove {itemName}
                          </div>
                        </Col>
                      </Row>
                      {fields.map((f: any, y: any) => {
                        if (f.type === "ADDRESS") {
                          const namePath = f?.name
                            ? [field.name, f.name]
                            : [field.name];
                          return (
                            <CommonInput
                              {...f}
                              key={y}
                              name={namePath}
                              form={form}
                              disabled={disabled}
                            />
                          );
                        }
                        return (
                          <CommonInput
                            {...f}
                            key={y}
                            name={[field.name, f.name]}
                            fields={f.fields.map((subField: any) => {
                              return {
                                ...subField,
                                name: [field.name, subField.name],
                              };
                            })}
                          />
                        );
                      })}
                    </>
                  );
                }
              })}
            </>
          );
        }}
      </Form.List>
    </>
  );
};
