export const getRandomRGBColorArray = (
    labels: Array<string>,
    opacity: number = 0.5
): { colorArray: Array<string>; colorArrayWithOpacity: Array<string> } => {
    const colorBaseArray = labels.map(
        () =>
            `${Math.trunc(Math.random() * 255)}, ${Math.trunc(
                Math.random() * 255
            )}, ${Math.trunc(Math.random() * 255)}`
    );

    return {
        colorArray: colorBaseArray.map((color) => `rgb(${color})`),
        colorArrayWithOpacity: colorBaseArray.map(
            (color) => `rgba(${color}, ${opacity})`
        ),
    };
};

export const normalizeXAxisInputData = (
    xAxisInputData: string
): Array<string> => xAxisInputData.split(',').map((value) => value.trim());

export const normalizeYAxisInputData = (
    yAxisInputData: string
): Array<number> => yAxisInputData.split(',').map((value) => Number(value));

export const isInputArraysLengthValid = (
    labels: Array<string>,
    data: Array<number>
): boolean => {
    if (labels.length !== data.length) {
        alert(
            'Please make sure, that length of labels array are equal to length of data array'
        );
        return false;
    }
    return true;
};
