import React from 'react';

import { Line, Bar, Pie, Radar, Doughnut } from 'react-chartjs-2';
import { chartType, ChartTypes } from 'shared/types/chart';
import useChartInit from '../../hooks/chartInit';
import useChartData from '../../hooks/useChartData';

// styles
import styles from './Chart.module.css';

export const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },

    scales: {
        x: {
            scales: true,
            grid: {
                display: false,
            },
        },
        y: {
            scales: true,
            display: false,
        },
    },
};

type ChartProps = {
    chartTypeValue: chartType;
    chartData: Array<number>;
    chartLabels: Array<string>;
};

function Chart({ chartTypeValue, chartData, chartLabels }: ChartProps) {
    useChartInit({ chartTypeValue });

    const data = useChartData({ chartLabels, chartData, chartTypeValue });

    const renderChart = (): React.ReactElement => {
        switch (chartTypeValue) {
            case ChartTypes.PIE: {
                return <Pie data={data} />;
            }
            case ChartTypes.DONAT: {
                return <Doughnut data={data} />;
            }
            case ChartTypes.LINE: {
                return <Line options={options} data={data} />;
            }
            case ChartTypes.BAR: {
                return <Bar options={options} data={data} />;
            }
            case ChartTypes.RADIAL: {
                return <Radar data={data} />;
            }
            default: {
                return <Bar options={options} data={data} />;
            }
        }
    };

    return <div className={styles.chartWrapper}>{renderChart()}</div>;
}

export default Chart;
