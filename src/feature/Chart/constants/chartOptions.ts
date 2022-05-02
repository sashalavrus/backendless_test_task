export const defaultOption = {
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

export const lineOption = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
        },
    },
};
