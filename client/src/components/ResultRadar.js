import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, LineElement, PointElement, Filler } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    Filler
)


export default function ResulRadar() {

    const data = {
        labels: ['Бодит үйл ажиллагааг эрхэмлэгч хэв шинж','Судлаач, шинжээч хэв шинж','Уран сайхны хэв шинж','Нийгмийн хэв шинж','Ажил хэрэгч хэв шинж','Стандартыг баримтлагч хэв шинж'],
        datasets: [{
            labels: 'random toonuud',
            data: [9,5,6,3,4],
            backgroundColor:'aqua',
            radialLinear: 10

        },
        {
            labels: 'random toonuud',
            data: [5,2,6,5,2],
            backgroundColor:'red',
        radialLinear: 10

        },
    ]
    }

    const options ={
        radialLinear: null
    }

    ChartJS.register(ArcElement, Tooltip, Legend);
    return(
        <div className="container">
        <Radar
        data={data}
        options={options}
        ></Radar>
    </div>
    )
}
