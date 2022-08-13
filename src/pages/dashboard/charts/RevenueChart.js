import {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import '../base-dashboard.scss'

import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
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

const scores = [10000,13000,27000,15000,25000,32000,12000,5000,7000,18000,1000,7000];
const scores2 = [9000,15000,22000,17000,14000,15000,11000,5000,7000,9000,4000,5000];
const labels = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dic']


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
            ticks: {
                callback: (value, index, values) => {
                    return `$ ${value/1000}k`;
                }
            },
            grid:{
                display: false
            }
        },
    },


    plugins:{
        legend:{
            display:false
        },
        tooltip:{

            padding: {
                top:5,
                left: 10,
                right: 10,
            },

            titleColor:(context) =>{
                return 'black'
            },
            callbacks:{
                title: (context) => {
                    //console.log(context[0])
                    return `$ ${context[0].formattedValue}`
                },
                label: (context)=>{
                    return null;
                },
            },

            //backgroundColor:"#DFF0FA",
            backgroundColor: (tooltipItem) =>{
                //Esta feo esto pero el tutorial oficial de ChartJs lo hace asi
                return tooltipItem.tooltip.labelColors[0].borderColor
            },
            displayColors: false,

        }
    },
    tension:0.5,


    pointRadius:12,
    pointBorderWidth:0.1,
    pointBackgroundColor: "rgba(0,0,0,0)",
    pointHoverRadius:6,
    pointHoverBorderWidth:0,

}

export const RevenueChart = () => {
    const [chartData, setChartData] = useState({
        datasets: []
    });


    useEffect(() => {

        setChartData({
            datasets: [
                {
                    label: 'Chart Revenue 2020',
                    data: scores,
                    borderColor: "#2C9CDB",
                    pointBorderColor: "#DFF0FA",
                    pointHoverBackgroundColor: "#2C9CDB"
                },
                {
                    label: 'Chart Revenue 2021',
                    data:scores2,
                    borderColor: "#FF5B5A",
                    pointBorderColor: "#FFE6E7",
                    pointHoverBackgroundColor: "#FF5B5A",
                }
            ],
            labels: labels
        })
    },[]);


    return(
        <Line data={chartData} options={options} className="chart-position"></Line>
    );
}

export default RevenueChart