import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

// styles
import styles from './ChartInput.module.css';

// validation
import ValidationSchema from './validationSchema';

type ChartInputProps = {
    onSubmit: () => void;
};

export default function ChartInput({ onSubmit }: ChartInputProps) {
    const [valueX, setValueX] = useState('');
    const [valueY, setValueY] = useState('');

    const onChangeX = (e, handleChange) => {
        handleChange(e);
        setValueX(e.target.value);
    };

    const onChangeY = (e, handleChange) => {
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
                onSubmit={(e) => {
                    console.log('submit', e);
                }}
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
                                    onBlur={(e) => {
                                        handleBlur(e);
                                        if (!errors.y && !errors.x) {
                                            onSubmit({ x: valueX, y: valueY });
                                        }
                                    }}
                                    onChange={(e) => onChangeX(e, handleChange)}
                                    value={valueX}
                                />
                                {errors.x && touched.x && (
                                    <div className={styles.validationHint}>
                                        {errors.x}
                                    </div>
                                )}
                            </label>
                        </div>
                        <div className={styles.defaultInputField}>
                            <label htmlFor="y">
                                <p>Y axis data</p>
                                <Field
                                    name="y"
                                    onBlur={(e) => {
                                        handleBlur(e);
                                        if (!errors.y && !errors.x) {
                                            onSubmit({ x: valueX, y: valueY });
                                        }
                                    }}
                                    onChange={(e) => onChangeY(e, handleChange)}
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
