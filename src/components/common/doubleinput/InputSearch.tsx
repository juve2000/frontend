import React, { useState, useMemo } from "react";
import { Form, Input, Col, Popover, Button } from "antd";
import { debounce } from "lodash";

export const InputSearch = (props: any) => {
  const {
    rules = [],
    name = "",
    icon,
    placeholder = "",
    label = "",
    disabled,
    width = "100%",
    hasFilters,
    onClear,
    onChange,
    styles = {},
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [confirmedFilters, setCorfimedFilters] = useState(false);

  const changeHandler = (event: any) => {
    onChange(event.target.value);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 1000),
    []
  );

  return (
    <div
      style={{ marginRight: 50 }}
      onFocus={() => {
        console.log("on focus", {
          c: !confirmedFilters,
          hasFilters,
        });
        if (!confirmedFilters && hasFilters) {
          setIsOpen(true);
        }
      }}
    >
      <Popover
        content={
          <div style={{ width: 400 }}>
            <div className="ubuntu" style={{ marginBottom: 50, width: 350 }}>
              Do you have filters in the table settings, do you want to continue
              searching with or without filters?
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                type="primary"
                onClick={() => {
                  setIsOpen(false);
                  setCorfimedFilters(true);
                  onClear();
                  console.log("clear filters");
                }}
                style={{ width: 150 }}
                className="white"
              >
                Clear filters
              </Button>
              <Button
                className="orange"
                type="primary"
                onClick={() => {
                  setCorfimedFilters(true);
                  setIsOpen(false);
                  console.log("continue search");
                }}
                style={{ width: 150, marginLeft: 15 }}
              >
                Continue
              </Button>
            </div>
          </div>
        }
        title="Notification about configured filters"
        trigger="click"
        open={isOpen}
        style={{ width: 400 }}
        onOpenChange={() => {
          setIsOpen(false);
          setCorfimedFilters(true);
        }}
      ></Popover>

      <Input.Search
        className="custom-search"
        title="Search"
        placeholder={"Search"}
        style={{ width: "200px", ...styles }}
        disabled={disabled}
        onChange={debouncedChangeHandler}
      />
    </div>
  );
};
