export default {
    plugins: {
        legend: {
            display: false,
        },
    },
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },

    scales: {
        x: {
            scales: true,
            grid: {
                display: false,
            },
        },
        y: {
            scales: true,
            display: false,
        },
    },
};
