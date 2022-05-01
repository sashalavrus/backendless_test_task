import React, { useState, ChangeEvent, ChangeEventHandler } from 'react';
import { Formik, Form, Field } from 'formik';

// styles
import styles from './ChartInput.module.css';

// validation
import ValidationSchema from './validationSchema';

type ChartInputProps = {
    onSubmit: ({ x, y }: { x: string; y: string }) => void;
};

export default function ChartInput({ onSubmit }: ChartInputProps) {
    const [valueX, setValueX] = useState<string>(
        'January, February, March, April, May, June, July'
    );
    const [valueY, setValueY] = useState<string>('2, 4, 5, 6, 4, 3, 2');

    const onChangeX = (
        e: ChangeEvent<HTMLInputElement>,
        handleChange: ChangeEventHandler
    ) => {
        handleChange(e);
        setValueX(e.target.value);
    };

    const onChangeY = (
        e: ChangeEvent<HTMLInputElement>,
        handleChange: ChangeEventHandler
    ) => {
        handleChange(e);
        setValueY(e.target.value);
    };

    return (
        <div className={styles.formStyles}>
            <Formik
                initialValues={{
                    x: '',
                    y: '',
                }}
                validationSchema={ValidationSchema}
                onSubmit={() => {}}
            >
                {({ errors, touched, handleBlur, handleChange }) => (
                    <Form
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !errors.y && !errors.x) {
                                onSubmit({ x: valueX, y: valueY });
                            }
                        }}
                    >
                        <div className={styles.defaultInputField}>
                            <label htmlFor="x">
                                <p>X axis labels</p>
                                <Field
                                    name="x"
                                    onBlur={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => {
                                        handleBlur(e);
                                        if (!errors.y && !errors.x) {
                                            onSubmit({ x: valueX, y: valueY });
                                        }
                                    }}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => onChangeX(e, handleChange)}
                                    value={valueX}
                                />
                                {errors.x && touched.x && (
                                    <div className={styles.validationHint}>
                                        {errors.x}
                                    </div>
                                )}
                                {!touched.x && !errors.x && (
                                    <div className={styles.validationHint}>
                                        Please make sure, that length of labels
                                        array are equal to length of data array
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className={styles.defaultInputField}>
                            <label htmlFor="y">
                                <p>Y axis data</p>
                                <Field
                                    name="y"
                                    onBlur={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => {
                                        handleBlur(e);
                                        if (!errors.y && !errors.x) {
                                            onSubmit({ x: valueX, y: valueY });
                                        }
                                    }}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => onChangeY(e, handleChange)}
                                    value={valueY}
                                />
                                {errors.y && touched.y && (
                                    <div className={styles.validationHint}>
                                        {errors.y}
                                    </div>
                                )}
                            </label>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
