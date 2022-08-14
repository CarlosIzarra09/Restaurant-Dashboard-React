import {useRef,useEffect,useState} from "react";
import {Line} from "react-chartjs-2";
import './_canvas-chart.module.scss'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const reports = [
    {total:900, date:{day:1,month:'Apr',year:2020}},
    {total:800, date:{day:2,month:'Apr',year:2020}},
    {total:950, date:{day:3,month:'Apr',year:2020}},
    {total:750, date:{day:4,month:'Apr',year:2020}},
    {total:725, date:{day:5,month:'Apr',year:2020}},
    {total:420, date:{day:6,month:'Apr',year:2020}},
    {total:500, date:{day:7,month:'Apr',year:2020}},
    {total:525, date:{day:8,month:'Apr',year:2020}},
    {total:800, date:{day:9,month:'Apr',year:2020}},
    {total:725, date:{day:10,month:'Apr',year:2020}},
    {total:350, date:{day:11,month:'Apr',year:2020}},
    {total:450, date:{day:12,month:'Apr',year:2020}},
    {total:420, date:{day:13,month:'Apr',year:2020}},
    {total:800, date:{day:14,month:'Apr',year:2020}},
    {total:600, date:{day:15,month:'Apr',year:2020}},
]

const options = {
    responsive:true,
    maintainAspectRatio: false,

    layout:{
        padding:{
            left:25,
            right:25
        },


    },
    scales: {
        y:{
            min:0,
            grid:{
                display: false
            }
        },
        x:{
            grid:{
                display:false
            }
        }

    },
    parsing:{
        xAxisKey: 'date.day',
        yAxisKey: 'total'
    },

    plugins:{
        legend:{
            display:false
        },
        tooltip:{
            titleColor:"black",
            callbacks:{
                title: (context) => {
                    //console.log(context[0])
                    return `${context[0].formattedValue} Orders`
                },
                label: ({ raw: {date} })=>{

                    return `${date.month} ${date.day}th, ${date.year}`
                },

                labelTextColor: (context) => {
                    return "#9b9898"
                },
            },
            backgroundColor:"#ffffff",
            borderWidth:1,
            borderColor: "#ccc",
            displayColors: false,


        }
    },
    tension:0.3,
    borderColor: "#2C9CDB",

    pointRadius:6,
    pointBorderColor: "#f6f5f5",
    pointBackgroundColor: "#2C9CDB",
    pointBorderWidth: 0,
    pointHoverRadius:6,
    pointHoverBorderWidth:2,

    fill:true,




}

export const OrderChart = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: []
    });


    useEffect(() => {

        const chart = chartRef.current;
        const createGradientColor = (color) => {
            const ctx = chart.ctx;
            const gradient = ctx.createLinearGradient(0,0,0,400);
            gradient.addColorStop(0,"rgba(44,156,219,0.34)");
            gradient.addColorStop(0.30, "rgba(255,255,255,0.6)");
            gradient.addColorStop(1, "rgba(255,255,255,0.6)");
            return gradient
        }

        setChartData({
            datasets: [
                {
                    label: 'Chart Revenue',
                    data: reports,
                    backgroundColor: createGradientColor("#2C9CDB")
                }
            ],
            labels: reports.map(item => item.date.day)
        })
    },[]);


    return(
        <Line data={chartData} options={options} className="chart-position" ref={chartRef}></Line>
    );
}

export default OrderChart