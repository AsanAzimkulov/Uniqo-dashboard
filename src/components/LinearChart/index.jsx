import React, { useState, useRef, useEffect } from 'react';
import VerticalChartItem from '../../components/VerticalChartColumn';
import { MainLayout } from '../../layouts/MainLayout';
import styles from './index.module.scss';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartCustomTooltip from '../../components/ChartCustomTooltip';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
  Filler,
  {
    id: 'uniqueid5', //typescript crashes without id
    afterDraw: (chart) => {
      if (chart.tooltip?._active?.length) {
        let x = chart.tooltip._active[0].element.x;
        let y = chart.tooltip._active[0].element.y;
        let yAxis = chart.scales.y;
        let ctx = chart.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, yAxis.bottom);
        ctx.lineWidth = 1.98;
        ctx.strokeStyle = 'rgb(48, 62, 245)';
        ctx.stroke();
        ctx.restore();
        // change color
      }
    },
  },
);

const LinearChart = ({ labels, data, width, height }) => {
  const toolTipIdRef = useRef('id' + Math.random().toString(16).slice(2));

  const [gradientBG, setGradientBG] = useState(null);

  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    console.log(chart.$context.chart);

    if (chart) {
      const ctx = chart.ctx;
      const gradientBG = ctx.createLinearGradient(0, 0, 0, 400);

      gradientBG.addColorStop(0.186, 'rgba(48, 62, 245, 0.5)');
      gradientBG.addColorStop(0.726, 'rgba(198, 201, 250, 0)');

      setGradientBG(gradientBG);
    }
  }, []);

  useEffect(() => {
    // Hiding tooltip
    // Tooltip Element
    const tooltipEl = document.querySelector('#' + toolTipIdRef.current);
    tooltipEl.style.opacity = 0;
  }, [toolTipIdRef.current]);

  return (
    <>
      <Line
        ref={chartRef}
        data={{
          labels,
          datasets: [
            {
              tension: 0.45,
              label: 'Dataset 1',
              data,
              borderColor: '#303EF5',
              backgroundColor: gradientBG || 'transparent',
              borderWidth: 1.91,
              fill: true,
              pointRadius: 6,
              pointBackgroundColor: '#3341F6',
              pointBorderWidth: 5,
              pointBorderColor: 'rgba(234, 236, 254, 0.5)',
              pointHoverBorderWidth: 5.5,
              pointHoverRadius: 6.5,
              pointHoverBorderColor: 'rgba(234, 236, 254, 0.5)',
            },
          ],
        }}
        height={height || 400}
        width={width || 600}
        options={{
          defaults: {
            global: {
              defaultFontFamily: 'THICCCBOI',
            },
          },
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                hover: {
                  font: {
                    color: 'black',
                  },
                },
                color: '#A09AA7',
                font: {
                  size: 11,
                  weight: 600,
                  family: 'THICCCBOI',
                  color: '#A09AA7',
                },
              },
            },
            y: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                beginAtZero: true,
                // align: 'center',
                crossAlign: 'center',
                autoSkipPadding: 20,
                labelOffset: 17,

                font: {
                  size: 11,
                  weight: 600,
                  family: 'THICCCBOI',
                  color: '#A09AA7',
                },

                // Include a dollar sign in the ticks
                callback: function (value, index, ticks) {
                  if (index === 0) return 0;

                  return (Math.floor(value / 1000) * 1000).toLocaleString('en-US', {
                    style: 'currency',
                    maximumFractionDigits: 0,
                    currency: 'USD',
                  });
                },
                count: 5,
                stepSize: 1000,
                color: '#A09AA7',
                padding: 30,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            datalabels: {
              display: false,
            },
            tooltip: {
              enabled: false,
              external: function (context) {
                // Tooltip Element
                let tooltipEl = document.querySelector('#' + toolTipIdRef.current);

                // Hide if no tooltip
                const tooltipModel = context.tooltip;
                if (tooltipModel.opacity === 0) {
                  tooltipEl.style.opacity = 0;
                  return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                  tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                  tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                  return bodyItem.lines;
                }

                // // Set Text
                if (tooltipModel.body) {
                  const bodyLines = tooltipModel.body.map(getBody);
                  tooltipEl.querySelector('#' + toolTipIdRef.current + 'text').textContent =
                    '$' + bodyLines[0][0].split(':')[1].slice(1);
                }

                const position = context.chart.canvas.getBoundingClientRect();
                const bodyFont = tooltipModel.options.bodyFont;

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left =
                  position.left + window.pageXOffset + tooltipModel.caretX - 96 + 'px'; // 88 - tooltip's width + 8
                tooltipEl.style.top =
                  position.top + window.pageYOffset + tooltipModel.caretY - 45 + 'px'; // 37 - tooltip's height + 8
                tooltipEl.style.font = bodyFont.string;
                tooltipEl.style.padding =
                  tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
                tooltipEl.style.pointerEvents = 'none';
              },
            },
          },
          interaction: {
            mode: 'index',
            intersect: false,
          },
        }}
      />
      <ChartCustomTooltip
        value={'fkdjfk'}
        id={toolTipIdRef.current}
        textId={toolTipIdRef.current + 'text'}
        variant={2}
        absolute
      />
    </>
  );
};

export { LinearChart };
