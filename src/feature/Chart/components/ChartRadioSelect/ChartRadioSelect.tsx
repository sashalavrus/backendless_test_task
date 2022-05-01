import React from 'react';

// types
import { ChartTypes } from 'shared/types/chart';

// styles
import styles from './ChartRadioSelect.module.css';

type ChartRadioSelectProps = {
    onChangeChartType: () => {};
};

export default function ChartRadioSelect({ onChangeChartType }) {
    return (
        <div className={styles.chartRadioSelectWrapper}>
            <label htmlFor="line">
                <input
                    name="choice"
                    type="radio"
                    value={ChartTypes.LINE}
                    onChange={onChangeChartType}
                    className={styles.radioInput}
                />
                Line
            </label>
            <label htmlFor="bar">
                <input
                    name="choice"
                    type="radio"
                    value={ChartTypes.BAR}
                    onChange={onChangeChartType}
                    className={styles.radioInput}
                />
                Bar
            </label>{' '}
            <label htmlFor="pie">
                <input
                    name="choice"
                    type="radio"
                    value={ChartTypes.PIE}
                    onChange={onChangeChartType}
                    className={styles.radioInput}
                />
                Pie
            </label>{' '}
            <label htmlFor="donat">
                <input
                    name="choice"
                    type="radio"
                    value={ChartTypes.DONAT}
                    onChange={onChangeChartType}
                    className={styles.radioInput}
                />
                Donat
            </label>{' '}
            <label htmlFor="radial">
                <input
                    name="choice"
                    type="radio"
                    value={ChartTypes.RADIAL}
                    onChange={onChangeChartType}
                    className={styles.radioInput}
                />
                Radial
            </label>
        </div>
    );
}
