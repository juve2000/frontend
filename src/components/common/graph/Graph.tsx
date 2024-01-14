import React, { useRef, useEffect, useState } from "react";
import { eLog } from "../graph";
export const Graph = (props: any) => {
  const canvas = document.getElementById("graph") as HTMLCanvasElement;
  const ctx = canvas && canvas.getContext("2d");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [data, setData] = useState([{ status: 3, d: "2022-01-01 12:15" }]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d") as any;
    const log = new eLog(ctx, {
      data,
      options: {
        startStatus: 1,
      },
    });
  }, [data]);

  return (
    <div>
      <button
        onClick={() => {
          setData([
            { status: 3, d: "2022-01-01 12:16:12" },
            { status: 2, d: "2022-01-01 10:15" },
            { status: 2, d: "2022-01-01 16:15" },
          ]);
        }}
      >
        click
      </button>
      <canvas id="graph" ref={canvasRef} width="1500" height="900" />
    </div>
  );
};
