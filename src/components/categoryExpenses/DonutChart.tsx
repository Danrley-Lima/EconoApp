import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";
import { ChartTypeRegistry } from "chart.js";

interface DonutChartProps {
  data: number[];
}

function DonutChart(props: DonutChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance =
    useRef<Chart<keyof ChartTypeRegistry, number[], string>>();

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    Chart.overrides.doughnut.cutout = 50;

    const myChartRef = chartRef.current!.getContext("2d");

    chartInstance.current = new Chart<
      keyof ChartTypeRegistry,
      number[],
      string
    >(myChartRef!, {
      type: "doughnut",
      data: {
        // labels: ["Moradia", "Alimentação", "Lazer"],
        datasets: [
          {
            // offset: ,
            // weight: 20000,
            spacing: 8,
            borderWidth: 1,
            borderColor: "gray",
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            data: props.data,
          },
        ],
      },
      // options: {
      //   plugins: {
      //     legend: {
      //       position: "right", // Posiciona as labels do lado direito
      //     },
      //   },
      // },
      options: {},
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [props.data]);

  return (
    <>
      <div className="w-full">
        <canvas ref={chartRef}></canvas>
      </div>
    </>
  );
}

export default DonutChart;
