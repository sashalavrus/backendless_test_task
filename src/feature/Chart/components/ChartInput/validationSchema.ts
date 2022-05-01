import * as Yup from 'yup';

export default Yup.object().shape({
    x: Yup.string()
        .matches(
            /^[a-zA-Z]+(?:[ \t]*,[ \t]*[a-zA-Z]+)+$/,
            'X axis mast contain list of words without digits'
        )
        .required('No labels provided'),
    y: Yup.string()
        .matches(
            /^\d+(?:[ \t]*,[ \t]*\d+)+$/,
            'Y axis mast contain list of numbers'
        )
        .required('No data provided'),
});
