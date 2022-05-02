import React from 'react';
import { Line, Bar, Pie, Radar, Doughnut } from 'react-chartjs-2';

// config
import defaultOption from 'feature/Chart/constants/chartOptions';

// types
import { chartType, ChartTypes } from 'shared/types/chart';

// hooks
import useChartData from 'feature/Chart/hooks/useChartData';

// styles
import styles from './Chart.module.css';

type ChartProps = {
    chartTypeValue: chartType;
    chartData: Array<number>;
    chartLabels: Array<string>;
};

function Chart({ chartTypeValue, chartData, chartLabels }: ChartProps) {
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
                // @ts-ignore
                return <Line options={defaultOption} data={data} />;
            }
            case ChartTypes.BAR: {
                return <Bar options={defaultOption} data={data} />;
            }
            case ChartTypes.RADIAL: {
                return <Radar data={data} />;
            }
            default: {
                return <Bar options={defaultOption} data={data} />;
            }
        }
    };

    return <div className={styles.chartWrapper}>{renderChart()}</div>;
}

export default Chart;
