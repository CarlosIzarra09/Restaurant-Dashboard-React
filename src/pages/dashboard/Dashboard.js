import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import './base-dashboard.scss'

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

            </div>

        </div>
    );
}

export default Dashboard