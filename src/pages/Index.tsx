import React, { useState } from 'react';
import Container from '../shared/components/Container/Container';
import Chart from '../feature/Chart/components/Chart/Chart';
import ChartInput from '../feature/Chart/components/ChartInput/ChartInput';
import {
    isInputArraysLengthValid,
    normalizeXAxisInputData,
    normalizeYAxisInputData,
} from '../shared/utils/helpers';
import ChartRadioSelect from '../feature/Chart/components/ChartRadioSelect/ChartRadioSelect';
import { ChartTypes } from '../shared/types/chart';

const initialChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data: [2, 4, 5, 6, 4, 3, 2],
};

export default function Index() {
    const [chartData, setChartData] = useState(initialChartData);
    const [chartType, setChartType] = useState<ChartTypes>(ChartTypes.BAR);

    const onSubmit = (e) => {
        const labels = normalizeXAxisInputData(e.x);
        const data = normalizeYAxisInputData(e.y);

        if (isInputArraysLengthValid(labels, data)) {
            setChartData({ labels: labels, data: data });
        }
    };

    const onChangeChartType = (e) => {
        setChartType(e.target.value);
    };

    return (
        <Container>
            <ChartInput onSubmit={onSubmit} />
            <Chart
                chartTypeValue={chartType}
                chartData={chartData.data}
                chartLabels={chartData.labels}
            />
            <ChartRadioSelect onChangeChartType={onChangeChartType} />
        </Container>
    );
}
