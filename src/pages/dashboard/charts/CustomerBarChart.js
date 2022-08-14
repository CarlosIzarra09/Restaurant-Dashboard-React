import {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import './_canvas-chart.module.scss'

import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    BarElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const scores = [60,80,40,70,60,30,60];
const scores2 = [50,90,50,70,35,45,75];
const labels = ['Mon','Thu','Wed','Tue','Fri','Sat','Sun']


const options = {
    responsive:true,
    maintainAspectRatio: false,
    barThickness:'flex',
    maxBarThickness:15,


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
                    if(context[0].datasetIndex === 0) return `${context[0].formattedValue} women`;
                    else
                        return `${context[0].formattedValue} men`;
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

}

export const CustomerBarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: []
    });


    useEffect(() => {

        setChartData({
            datasets: [
                {
                    label: 'Chart women 2020',
                    data: scores,
                    borderColor: "#F7C705",
                    backgroundColor: "#F7C705"

                },
                {
                    label: 'Chart men 2020',
                    data:scores2,
                    borderColor: "#FF5B5A",
                    backgroundColor: "#FF5B5A"
                }
            ],
            labels: labels
        })
    },[]);


    return(
        <Bar data={chartData} options={options} className="chart-position"/>
    );
}

export default CustomerBarChart