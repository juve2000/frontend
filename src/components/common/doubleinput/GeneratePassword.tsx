import React, { useState } from "react";
import { Row, Col, Checkbox, InputNumber, Button, message } from "antd";
import generator from "generate-password-browser";
import { CopyToClipboard } from "./CopyToClipboard";

export function GeneratePassword(props: any) {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isNumbers, setIsNumbers] = useState(true);
  const [isSymbols, setIsSymbols] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Generated new password !",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Something went wrong!",
    });
  };

  const generatePassword = () => {
    const pwd = generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
      symbols: isSymbols,
    });
    setPassword(pwd);
    success();
  };

  React.useEffect(() => {
    if (props?.onGenerate && password) {
      props.onGenerate(password);
    }
  }, [password]);

  return (
    <div>
      <Row
        className="ubuntu"
        style={{ background: "#F7F9FD", padding: 10, borderRadius: 10 }}
      >
        {contextHolder}
        <Col span={24} style={{ marginBottom: 10 }}>
          <div>
            <h4>Generate new password</h4>
          </div>
          {password && (
            <div style={{ display: "flex", position: "relative" }}>
              <div className="ubuntu" style={{ fontWeight: "bold" }}>
                {password}
              </div>
              <div style={{ position: "relative" }}>
                <CopyToClipboard style={{ top: 5, right: -25 }} />
              </div>
            </div>
          )}

          {/* <div className="ubuntu">Password length:</div>
          <InputNumber
            title="Password length"
            min={1}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e as number);
            }}
          />
        </Col>
        <Col span={24} style={{ marginBottom: 10 }}>
          <Checkbox
            className="ubuntu"
            checked={isLowerCase}
            onChange={(e) => {
              setIsLowerCase(e.target.checked);
            }}
          >
            Lower Case
          </Checkbox>
        </Col>
        <Col span={24} style={{ marginBottom: 10 }}>
          <Checkbox
            className="ubuntu"
            checked={isUpperCase}
            onChange={(e) => {
              setIsUpperCase(e.target.checked);
            }}
          >
            Upper Case
          </Checkbox>
        </Col>
        <Col span={24} style={{ marginBottom: 10 }}>
          <Checkbox
            className="ubuntu"
            checked={isNumbers}
            onChange={(e) => {
              setIsNumbers(e.target.checked);
            }}
          >
            Numbers
          </Checkbox>
        </Col>
        <Col span={24} style={{ marginBottom: 10 }}>
          <Checkbox
            className="ubuntu"
            checked={isSymbols}
            onChange={(e) => {
              setIsSymbols(e.target.checked);
            }}
          >
            Symbols
          </Checkbox>
        </Col>
        <Col span={24} style={{ marginBottom: 10 }}>
          <Checkbox
            className="ubuntu"
            checked={isSymbols && isLowerCase && isUpperCase && isNumbers}
            onChange={(e) => {
              setIsSymbols(e.target.checked);
              setIsUpperCase(e.target.checked);
              setIsLowerCase(e.target.checked);
              setIsNumbers(e.target.checked);
            }}
          >
            Select all
          </Checkbox> */}
        </Col>
        <Col span={24}>
          <Button
            // disabled={!isLowerCase && !isUpperCase && !isNumbers && !isSymbols}
            className="ubuntu orange"
            style={{ width: 100, margin: "10px 0px", cursor: "pointer" }}
            onClick={() => {
              generatePassword();
            }}
          >
            Generate
          </Button>
        </Col>
      </Row>
    </div>
  );
}
