export enum ChartTypes {
    PIE = 'PIE',
    BAR = 'BAR',
    LINE = 'LINE',
    DONAT = 'DONAT',
    RADIAL = 'RADIAL',
}

export type chartType = keyof typeof ChartTypes;

export type IChartTypes = {
    chartTypeValue: chartType;
};
