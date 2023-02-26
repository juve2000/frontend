import React, { useState } from "react";
import { Form, Input, Col, Button } from "antd";
import { CommonInput } from "../inputs";
import { InputTitleDynamic } from "./InputTitleDynamic";

export const InputAddDynamic = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    disabled,
    width = "100%",
    title = "",
    isSecondField = false,
    span = 24,
    form,
    fields,
  } = props;
  const isRequired = rules.find((rule: any) => rule.required);

  //   const [fields, setFields] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Form.List name={name}>
        {(formFields, { add, remove }) => {
          return (
            <>
              {formFields.map((field: any, i: any) => {
                if (field.key === currentIndex) {
                  return (
                    <>
                      <InputTitleDynamic
                        label="test dynamic"
                        items={formFields}
                        onClick={(value: any) => {
                          setCurrentIndex(value);
                        }}
                        key={i}
                        itemName="Terminal"
                        currentIndex={currentIndex}
                        onAdd={() => {
                          add();
                        }}
                        onRemove={(fieldId: any) => {
                          remove(fieldId);
                        }}
                      />
                      ;
                      {fields.map((f: any, y: any) => {
                        console.log("f", f);
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
              <Button
                onClick={() => {
                  add();
                }}
              >
                {" "}
                add{" "}
              </Button>
            </>
          );
        }}
      </Form.List>
    </>
  );
};
