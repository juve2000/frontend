import React from "react";
import { Tabs } from "antd";
import NewLogChart from "./NewLogChart2";
// import NewLogChart from "./NewLogChart";
import { Graph } from "../../../common/graph/Graph";

const onChange = (key: string) => {
  console.log(key);
};
const truckTasks = [
  {
    id: "truck1",
    name: "Truck 1",
    start: 0,
    end: 6,
    status: "Moving",
  },
  {
    id: "truck2",
    name: "Truck 2",
    start: 6,
    end: 12,
    status: "Idle",
  },
  // Add more tasks as needed
];

const items: any = [
  {
    key: "1",
    label: "Logs",
    children: <Graph />,
  },
  {
    key: "2",
    label: "Name",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Events",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Reports",
    children: "Content of Tab Pane 3",
  },
];

export const LogTabs: React.FC = () => {
  return (
    <div className="ubuntu">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};
