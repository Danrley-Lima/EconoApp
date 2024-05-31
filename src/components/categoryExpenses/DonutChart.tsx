import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";
import { ChartTypeRegistry } from "chart.js";
import { useFinancesStore } from "../../context/FinancesStore";
import { colors } from "./consts";

function DonutChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const { categories } = useFinancesStore();

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
            spacing: 20,
            borderWidth: 1,
            borderColor: "gray",
            backgroundColor: colors,
            data: categories.map(({quant}) => quant),
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
  }, [categories]);

  return (
    <>
      <div className="w-full">
        <canvas ref={chartRef}></canvas>
      </div>
    </>
  );
}

export default DonutChart;
