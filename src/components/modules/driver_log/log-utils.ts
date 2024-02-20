import { defaultTo } from "lodash";
import dayjs, { Dayjs } from "dayjs";
import { eventData } from "./fields/log-contant";
import { annotations } from "./fields/log-contant";
export const parseTimeString = (timeString: any): Dayjs | string => {
  // Parse the time string into hours, minutes, and seconds

  if (!timeString) {
    return "";
  }
  const hours = parseInt(timeString.substring(0, 2), 10);
  const minutes = parseInt(timeString.substring(2, 4), 10);
  const seconds = parseInt(timeString.substring(4, 6), 10);

  return dayjs()
    .set("hour", hours)
    .set("minute", minutes)
    .set("second", seconds);
};

export const parseTimeStringFormat = (
  timeString: any,
  formatParam?: string
): Dayjs | string => {
  // Parse the time string into hours, minutes, and seconds

  const format = defaultTo(formatParam, "HH:MM:SS");
  if (!timeString) {
    return "";
  }
  const hours = parseInt(timeString.substring(0, 2), 10);
  const minutes = parseInt(timeString.substring(2, 4), 10);
  const seconds = parseInt(timeString.substring(4, 6), 10);

  return dayjs().hour(hours).minute(minutes).second(seconds).format(format);
};

export const parseDateStringFormat = (
  dateString: any,
  formatParamDate?: string
): Dayjs | string => {
  // Parse the time string into hours, minutes, and seconds

  const formatDate = defaultTo(formatParamDate, "DD:MM:YY");

  const days = parseInt(dateString.substring(0, 2), 10);
  const months = parseInt(dateString.substring(2, 4), 10);
  const years = parseInt(dateString.substring(4, 6), 10);

  return `${dayjs().day(days).month(months).year(years).format(formatDate)}`;
};

export const parseDateTimeStringFormat = (
  timeString: any,
  dateString: any,
  formatParamTime?: string,
  formatParamDate?: string
): Dayjs | string => {
  // Parse the time string into hours, minutes, and seconds

  const format = defaultTo(formatParamTime, "HH:MM:SS");
  const formatDate = defaultTo(formatParamDate, "DD/MM/YY");

  if (!timeString || !dateString) {
    return "";
  }
  const hours = parseInt(timeString.substring(0, 2), 10);
  const minutes = parseInt(timeString.substring(2, 4), 10);
  const seconds = parseInt(timeString.substring(4, 6), 10);

  const days = parseInt(dateString.substring(0, 2), 10);
  const months = parseInt(dateString.substring(2, 4), 10);
  const years = parseInt(dateString.substring(4, 6), 10);

  return `${dayjs()
    .day(days)
    .month(months)
    .year(years)
    .format(formatDate)} ${dayjs()
    .hour(hours)
    .minute(minutes)
    .second(seconds)
    .format(format)}`;
};

export const parseDateGeneralStringFormat = (
  timeStamp: any,
  formatParamTime?: string,
  formatParamDate?: string
): Dayjs | string => {
  // Parse the time string into hours, minutes, and seconds

  const formattedDate = dayjs(timeStamp * 1000).format("MM/DD/YYYY hh:mm:ss A");
  return formattedDate;
};

export const parseDateWitoutTimeStringFormat = (
  timeStamp: any,
  formatParamTime?: string,
  formatParamDate?: string
): Dayjs | string => {
  // Parse the time string into hours, minutes, and seconds

  const formattedDate = dayjs(timeStamp * 1000).format("MM/DD/YYYY");
  return formattedDate;
};

export const getEventLabel = (eventType: any, eventCode: any) => {
  return eventData.find(
    (eventItem) => eventItem.code === eventCode && eventItem.type === eventType
  )?.label;
};

// {
//   type: 1,
//   code: 3,
//   label: "D",
//   origin: [
//     { key: "Auto", value: 1 },
//     { key: "Driver", value: 2 },
//     { key: "User", value: 3 },
//   ],
// },

export const getOriginLabel = (
  eventType: any,
  eventCode: any,
  originCode: string
) => {
  const item = eventData.find(
    (eventItem) =>
      eventItem?.code === eventCode && eventItem?.type === eventType
  );
  console.log("item", item);
  const originLabel = item?.origin.find(
    (originItem) => originItem?.value === +originCode
  );
  return originLabel?.key || "";
};

export const getAnnotations = (eventType: any, annotationValue: any) => {
  const annotation = annotations.find(
    (ann) => eventType === "14" || eventType === 14
  );
  if (annotation) {
    // return [annotation];
    return [];
  }
  // return [
  //   {
  //     type: 1,
  //     // value: annotationValue,
  //     text: false,
  //     // file: false,
  //   },
  // ];
  return [];
};
