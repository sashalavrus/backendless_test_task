import React, { ChangeEvent, useState } from 'react';

// helpers
import {
    isInputArraysLengthValid,
    normalizeXAxisInputData,
    normalizeYAxisInputData,
} from 'shared/utils/helpers';

// types
import { chartType, ChartTypes } from 'shared/types/chart';

// components
import ChartRadioSelect from 'feature/Chart/components/ChartRadioSelect/ChartRadioSelect';
import Container from 'shared/components/Container/Container';
import Chart from 'feature/Chart/components/Chart/Chart';
import ChartInput from 'feature/Chart/components/ChartInput/ChartInput';

const initialChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data: [2, 4, 5, 6, 4, 3, 2],
};

export default function Index() {
    const [chartData, setChartData] = useState(initialChartData);
    const [chartTypeValue, setChartTypeValue] = useState<chartType>(
        ChartTypes.BAR
    );

    const onSubmit = ({ x, y }: { x: string; y: string }) => {
        const labels = normalizeXAxisInputData(x);
        const data = normalizeYAxisInputData(y);

        if (isInputArraysLengthValid(labels, data)) {
            setChartData({ labels, data });
        }
    };

    const onChangeChartType = (e: ChangeEvent<HTMLInputElement>) => {
        setChartTypeValue(e.target.value as chartType);
    };

    return (
        <Container>
            <ChartInput onSubmit={onSubmit} />
            <Chart
                chartTypeValue={chartTypeValue}
                chartData={chartData.data}
                chartLabels={chartData.labels}
            />
            <ChartRadioSelect onChangeChartType={onChangeChartType} />
        </Container>
    );
}
