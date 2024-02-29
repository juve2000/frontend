import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";

import {
  MouseWheelZoomModifier,
  NumericAxis,
  SciChartSurface,
  SplineMountainRenderableSeries,
  XyDataSeries,
  ZoomExtentsModifier,
  ZoomPanModifier,
  SciChartJSLightTheme,
  ENumericFormat,
  NumberRange,
  EAxisAlignment,
  FastLineRenderableSeries,
  AxisMarkerAnnotation,
  ECoordinateMode,
} from "scichart";
// import { SciChartJSLightTheme } from "scichart/Charting/Themes/SciChartJSLightTheme";

import { SciChartReact } from "scichart-react";

function calcTotal(xValues: number[], yValues: number[]) {
  const res: Record<string, number> = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
  };
  for (let i = 0; i < xValues.length - 1; i++) {
    const time = xValues[i + 1] - xValues[i];
    const val = yValues[i];
    res[val] += time;
  }
  return res;
}

function formatMinutes(hoursInput: number) {
  const secondsTotal = Math.floor(hoursInput * 60 * 60);
  let seconds = (secondsTotal % 60).toString(10);
  seconds = seconds.length === 1 ? "0" + seconds : seconds;
  const minutesTotal = Math.floor(secondsTotal / 60);
  let minutes = (minutesTotal % 60).toString(10);
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  const hours = Math.floor(minutesTotal / 60);
  return `${hours}:${minutes}:${seconds}`;
}
// Call loadWasmFromCDN once before SciChart.js is initialised to load Wasm files from our CDN
// Alternative methods for serving and resolving wasm are available on our website
SciChartSurface.loadWasmFromCDN();

const aroundHours = (timestamp: any) => {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = Math.round((date.getMinutes() / 60) * 10) / 10; // Rounded minutes

  const result = hours + minutes;
  return result;
};

export function ChartSciReact(props: any): any {
  const logs = useSelector((state: any) => state.driverLog.logList);
  const [dataX, setDataX] = useState<any>([]);
  const [dataY, setDataY] = useState<any>([]);

  useEffect(() => {
    if (logs?.length) {
      const logsToUpdateX = logs?.map((l: any) =>
        aroundHours(l?.timestamp * 1000)
      );
      // .sort((a: any, b: any) => a[0] - b[0]);
      const logsToUpdateY = logs?.map((l: any) => l?.event_code);
      //   setDataX([...logsToUpdateX]);
      setDataX([0, ...logsToUpdateX]);

      setDataY([1, ...logsToUpdateY]);

      // setData([[1708559695000, 3]]);
    }
  }, [logs]);
  const [updateKey, setUpdateKey] = useState(0);

  React.useEffect(() => {
    setUpdateKey((prevKey) => prevKey + 1);
  }, [dataX, dataY]);

  const forceRerender = () => {
    // Update the state to trigger a re-render
    setUpdateKey((prevKey) => prevKey + 1);
  };
  return (
    <SciChartReact
      style={{ width: "100%", height: 550 }}
      key={updateKey}
      initChart={async function (rootElement) {
        const { sciChartSurface, wasmContext } = await SciChartSurface.create(
          rootElement,
          {
            theme: new SciChartJSLightTheme(),
          }
        );

        const xAxis = new NumericAxis(wasmContext, {
          axisAlignment: EAxisAlignment.Top,
          visibleRange: new NumberRange(0, 24),
          autoTicks: false,
        });
        xAxis.majorDelta = 1;
        xAxis.minorDelta = 0.5;
        xAxis.labelProvider.precision = 0;
        xAxis.labelProvider.numericFormat = ENumericFormat.Decimal;
        xAxis.drawMajorBands = false;
        console.log("dataX, dataY", {
          dataX,
          dataY,
        });
        const xValues = dataX;
        const yValues = dataY;
        const total = calcTotal(xValues, yValues);

        const yAxis = new NumericAxis(wasmContext, {
          axisAlignment: EAxisAlignment.Left,
          visibleRange: new NumberRange(0.5, 4.5),
          autoTicks: false,
          flippedCoordinates: true,
        });

        yAxis.majorDelta = 1;
        yAxis.minorDelta = 1;
        yAxis.drawMajorBands = false;
        yAxis.labelProvider.formatLabel = (value) => {
          switch (value) {
            case 1:
              return `Off Duty`;
            case 2:
              return `Sleepper`;
            case 3:
              return `Driving`;
            case 4:
              return `On Duty`;
            default:
              return "";
          }
        };

        const yAxis2 = new NumericAxis(wasmContext, {
          id: "yAxis2",
          axisAlignment: EAxisAlignment.Right,
          visibleRange: new NumberRange(0.5, 4.5),
          autoTicks: false,
          flippedCoordinates: true,
        });
        yAxis2.drawMajorGridLines = false;
        yAxis2.drawMinorGridLines = false;
        yAxis2.drawMajorTickLines = false;
        yAxis2.drawMinorGridLines = false;
        yAxis2.majorDelta = 1;
        yAxis2.minorDelta = 1;
        yAxis2.labelProvider.formatLabel = (value) => {
          switch (value) {
            case 1:
              return formatMinutes(total[1]);
            case 2:
              return formatMinutes(total[2]);
            case 3:
              return formatMinutes(total[3]);
            case 4:
              return formatMinutes(total[4]);
            default:
              return "";
          }
        };

        sciChartSurface.xAxes.add(xAxis);
        sciChartSurface.yAxes.add(yAxis);
        sciChartSurface.yAxes.add(yAxis2);

        const dataSeries = new XyDataSeries(wasmContext, {
          xValues,
          yValues,
        });
        const lineSeries = new FastLineRenderableSeries(wasmContext, {
          isDigitalLine: true,
          stroke: "blue",
          strokeThickness: 5,
          dataSeries,
        });
        const axisMarkerAnnotation = new AxisMarkerAnnotation({
          yAxisId: "yAxis2",
          yCoordinateMode: ECoordinateMode.DataValue,
          color: "#555555FF",
          backgroundColor: "#F9F9F9FF",
          formattedValue: "Total Hours",
          y1: 0.5,
        });
        sciChartSurface.annotations.add(axisMarkerAnnotation);

        sciChartSurface.renderableSeries.add(lineSeries);

        return { sciChartSurface };
      }}
    />
  );
}
