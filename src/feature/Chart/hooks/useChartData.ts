import { useMemo } from 'react';

// helpers
import { getRandomRGBColorArray } from 'shared/utils/helpers';

// types
import { chartType, ChartTypes } from 'shared/types/chart';

import ChartInit from './chartInit';

type useChartDataProps = {
    chartLabels: Array<string>;
    chartData: Array<number>;
    chartTypeValue: chartType;
};

export default function useChartData({
    chartLabels,
    chartData,
    chartTypeValue,
}: useChartDataProps) {
    const { colorArray, colorArrayWithOpacity } = useMemo(
        () => getRandomRGBColorArray(chartLabels),
        [chartLabels.length]
    );

    useMemo(() => ChartInit({ chartTypeValue }), [chartTypeValue]);

    switch (chartTypeValue) {
        case ChartTypes.PIE: {
            return {
                labels: chartLabels,
                datasets: [
                    {
                        data: chartData,
                        backgroundColor: colorArrayWithOpacity,
                        borderColor: colorArrayWithOpacity,
                        borderWidth: 1,
                    },
                ],
            };
        }
        case ChartTypes.DONAT: {
            return {
                labels: chartLabels,
                datasets: [
                    {
                        data: chartData,
                        backgroundColor: colorArrayWithOpacity,
                        borderColor: colorArrayWithOpacity,
                        borderWidth: 1,
                    },
                ],
            };
        }
        case ChartTypes.LINE: {
            return {
                labels: chartLabels,
                datasets: [
                    {
                        data: chartData,
                        backgroundColor: 'rgba(48, 213, 200, 0.5)',
                        borderColor: 'rgb(48, 213, 200)',
                        borderWidth: 6,
                    },
                ],
            };
        }
        case ChartTypes.BAR: {
            return {
                labels: chartLabels,
                datasets: [
                    {
                        data: chartData,
                        backgroundColor: colorArray,
                    },
                ],
            };
        }
        case ChartTypes.RADIAL: {
            return {
                labels: chartLabels,
                datasets: [
                    {
                        label: 'Data representation',
                        data: chartData,
                        backgroundColor: colorArrayWithOpacity[0],
                        borderColor: colorArrayWithOpacity[0],
                        borderWidth: 1,
                    },
                ],
            };
        }
        default: {
            return {
                labels: chartLabels,
                datasets: [
                    {
                        data: chartData,
                        backgroundColor: colorArray,
                    },
                ],
            };
        }
    }
}
