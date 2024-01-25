import React, { useState } from "react";
import { TimePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";

const parseTimeString = (timeString: string): Dayjs => {
  // Parse the time string into hours, minutes, and seconds
  const hours = parseInt(timeString.substring(0, 2), 10);
  const minutes = parseInt(timeString.substring(2, 4), 10);
  const seconds = parseInt(timeString.substring(4, 6), 10);

  return dayjs()
    .set("hour", hours)
    .set("minute", minutes)
    .set("second", seconds);
};

const YourComponent: React.FC = () => {
  const timeString = "050505";
  const initialTime = parseTimeString(timeString);

  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(initialTime);

  const handleTimeChange = (value: Dayjs | null) => {
    setSelectedTime(value);
  };

  return (
    <TimePicker
      value={selectedTime}
      onChange={handleTimeChange}
      format="HH:mm:ss"
    />
  );
};

export default YourComponent;
