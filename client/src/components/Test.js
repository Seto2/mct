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


export default function Test() {

    const data = {
        labels: ['Бодит үйл ажиллагааг эрхэмлэгч хэв шинж','Судлаач, шинжээч хэв шинж','Уран сайхны хэв шинж','Нийгмийн хэв шинж','Ажил хэрэгч хэв шинж','Стандартыг баримтлагч хэв шинж'],
        datasets: [{
            labels: 'random toonuud',
            data: [9,5,6,3,4],
            backgroundColor:'aqua',
            radialLinear: 0

        },
        {
            labels: 'random toonuud',
            data: [1,2,3,4,5,5.5],
            backgroundColor:'red',
        radialLinear: 10

        },
    ]
    }

    const options ={
        width: 3,
        length: 5
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
