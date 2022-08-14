import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import './base-dashboard.scss'
import evaluate from "../../assets/images/evaluar.png"
import fail from "../../assets/images/fallar.png"
import values from "../../assets/images/empatia.png"
import delivery from "../../assets/images/firmar.png"
import OrderChart from "./charts/OrderChart";
import RevenueChart from "./charts/RevenueChart";
import CustomerBarChart from "./charts/CustomerBarChart";
//import OrderChart from "../../components/sidebar/charts/OrderChart";

const Dashboard = () =>{

    return (
        <div id="website">
            <Sidebar></Sidebar>

            <div id="panel">
                <header id="header-dashboard">
                    <div id="header-container">

                        {/*Inicio contenido dinámico*/}

                        <div className="content-welcome">
                            <h2>Dashboard</h2>
                            <h3>Hi, Samantha. Welcome back to Sedap Admin!</h3>
                        </div>

                        <div className="content-fix">

                            <div className="content-lapse">
                                <div className="box-icon">
                                    <i className="bx bx-calendar"></i>
                                </div>
                                <div className="content-lapse-text">
                                    <h2>Filter Periode</h2>
                                    <h3>17 April 2020 - 21 May 2020</h3>
                                </div>
                                <i className="bx bx-chevron-down"                                ></i>
                            </div>

                            <div className="content-user">
                                <h3>Hello, <span> Samantha</span></h3>
                                <div className="avatar-user">
                                    <img src="https://definicionde.es/wp-content/uploads/2019/04/definicion-de-persona-min.jpg" alt="Persona"/>
                                </div>
                            </div>
                        </div>




                        {/*Fin contenido dinámico*/}


                    </div>

                </header>
                <div id="content-dashboard">
                    <div id="summary-boxes">
                        <div className="box-content">
                            <div className="circle-icon">
                                <img src={evaluate} alt="icon-evaluate"/>
                            </div>
                            <div className="box-content-text">
                                <h1>75</h1>
                                <h2>Total Orders</h2>
                                <div className="text-percentage">
                                    <div className="circle-icon-little">
                                        <i className='bx bx-up-arrow-alt'></i>
                                    </div>
                                    <h3>4% (30 days)</h3>
                                </div>
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="circle-icon">
                                <img src={delivery} alt="icon-evaluate"/>
                            </div>
                            <div className="box-content-text">
                                <h1>357</h1>
                                <h2>Total Delivered</h2>
                                <div className="text-percentage">
                                    <div className="circle-icon-little">
                                        <i className='bx bx-up-arrow-alt'></i>
                                    </div>
                                    <h3>4% (30 days)</h3>
                                </div>
                            </div>

                        </div>
                        <div className="box-content">

                            <div className="circle-icon">
                                <img src={fail} alt="icon-evaluate"/>
                            </div>
                            <div className="box-content-text">
                                <h1>65</h1>
                                <h2>Total Canceled</h2>
                                <div className="text-percentage">
                                    <div className="circle-icon-little bad-result">
                                        <i className='bx bx-down-arrow-alt'></i>
                                    </div>
                                    <h3>25% (30 days)</h3>
                                </div>
                            </div>

                        </div>
                        <div className="box-content">
                            <div className="circle-icon">
                                <img src={values} alt="icon-evaluate"/>
                            </div>
                            <div className="box-content-text">
                                <h1>$128</h1>
                                <h2>Total Revenue</h2>
                                <div className="text-percentage">
                                    <div className="circle-icon-little bad-result">
                                        <i className='bx bx-down-arrow-alt'></i>
                                    </div>
                                    <h3>12% (30 days)</h3>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div id="canvas-order">
                        <div className="header-chart">
                            <span>
                                <h2>Chart Order</h2>
                                <h3>Lorem ipsum dolor sit amelt, consectetur adip</h3>
                            </span>
                            <button type="button"
                            >
                                <div className="button-content">
                                    <i className="bx bx-download"></i>
                                    <h2>Save Report</h2>
                                </div>
                            </button>
                        </div>
                        <div className="chart-container">
                            <OrderChart></OrderChart>
                        </div>
                    </div>
                    <div id="canvas-responsive">
                        <div className="canvas-revenue">
                            <div className="header-chart">
                                <h2>Total Revenue</h2>
                                <div className="legend">
                                    <div id="past-year"></div>
                                    <h3>2020</h3>
                                    <div id="current-year"></div>
                                    <h3>2021</h3>
                                </div>
                            </div>
                            <div className="chart-container">
                                <RevenueChart></RevenueChart>
                            </div>

                        </div>
                        <div className="canvas-customer">
                            <div className="header-chart">
                                <h2>Customer Map</h2>
                                {/*
                                */}
                                <div className="actions">
                                    <button type="button"
                                    >
                                        <div className="button-content">

                                            <h2>Daily</h2>
                                            <i className="bx bx-caret-down"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="chart-container">
                                <CustomerBarChart></CustomerBarChart>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard