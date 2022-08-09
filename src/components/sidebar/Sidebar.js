import React, {useEffect} from 'react'
import './base-sidebar.scss'
import {useHandleSidebar} from "../../hooks/useHandleSidebar";

const Sidebar = () =>{
    const {isExpanded, toggle, autoCloseSidebar, autoOpenSidebar} = useHandleSidebar()

    useEffect(() => {
        localStorage.setItem("isExpanded",JSON.stringify(isExpanded));

        const handleResize = () => {
            if(window.innerWidth <= 1300){
                autoCloseSidebar()
            }
            else{
                autoOpenSidebar()
            }
        }
        window.addEventListener('resize', handleResize)

        // cleanup this component
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });





    return (
        <>
            <div id={isExpanded ? "sidebar" : "sidebar-mobile"}>
                <header id="header">
                    <div className="title">
                        <h1>Sedap
                            <span>.</span>
                        </h1>
                        <i className="bx bx-menu"
                           id="btn"
                           onClick={toggle}
                        >
                        </i>
                    </div>

                    <h3>Modern Admin Dashboard</h3>
                </header>
                <aside id="aside">
                    <ul id="nav-list">
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-home-alt"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Dashboard</h2>
                                </div>

                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-align-left icons"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Order List</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-note icons"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Order Detail</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-male-female icons"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Customer</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-bar-chart icons"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Analytics</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-pencil icons"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Reviews</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-coffee icons"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Foods</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-edit icons"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Food Detail</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-user icons"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Customer Detail</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className="bx bx-calendar-event icons"></i>
                                </div>
                                <div className="float-text">
                                    <h2>Calendar</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className='bx bx-message-square-dots icons'></i>
                                </div>
                                <div className="float-text">
                                    <h2>Chat</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <div className="icons">
                                    <i className='bx bx-wallet-alt icons'></i>
                                </div>
                                <div className="float-text">
                                    <h2>Wallet</h2>
                                </div>
                            </a>
                        </li>
                    </ul>
                </aside>

            </div>
        </>
    );
}

export default Sidebar