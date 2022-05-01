import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
    Tooltip,
} from 'chart.js';
import { ChartTypes, IChartTypes } from 'shared/types/chart';

export default function ChartInit({ chartTypeValue }: IChartTypes) {
    switch (chartTypeValue) {
        case ChartTypes.PIE: {
            ChartJS.register(ArcElement, Tooltip, Legend);
            return;
        }
        case ChartTypes.DONAT: {
            ChartJS.register(ArcElement, Tooltip, Legend);
            return;
        }
        case ChartTypes.LINE: {
            ChartJS.register(
                CategoryScale,
                LinearScale,
                PointElement,
                LineElement,
                Tooltip,
                Legend
            );
            return;
        }
        case ChartTypes.BAR: {
            ChartJS.register(
                CategoryScale,
                LinearScale,
                BarElement,
                Tooltip,
                Legend
            );
            return;
        }
        case ChartTypes.RADIAL: {
            ChartJS.register(
                RadialLinearScale,
                PointElement,
                LineElement,
                Filler,
                Tooltip,
                Legend
            );
            console.log('sdfsdfsd');
            return;
        }
        default: {
            console.log('32423');
            ChartJS.register(ArcElement, Tooltip, Legend);
            console.log('qqqqqqqqqq');
        }
    }
}
