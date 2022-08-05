import React, {useState} from 'react'
import './sidebar.css'

const Sidebar = () =>{
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => {
      setIsOpen(!isOpen)
    }


    return (
        <>
            <div id={isOpen ? "sidebar" : "sidebar-mobile"}>
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
                                <i className="bx bx-home-alt icons"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className="bx bx-align-left icons"></i>
                                <span>Order List</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className="bx bx-note icons"></i>
                                <span>Order Detail</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className="bx bx-male-female icons"></i>
                                <span>Customer</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className="bx bx-bar-chart icons"></i>
                                <span>Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className="bx bx-pencil icons"></i>
                                <span>Reviews</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className="bx bx-coffee icons"></i>
                                <span>Foods</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className="bx bx-edit icons"></i>
                                <span>Food Detail</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className="bx bx-user icons"></i>
                                <span>Customer Detail</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className="bx bx-calendar-event icons"></i>
                                <span>Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className='bx bx-message-square-dots icons'></i>
                                <span>Chat</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://bing.com"
                               className="link-name"
                            >
                                <i className='bx bx-wallet-alt icons'></i>
                                <span>Wallet</span>
                            </a>
                        </li>
                    </ul>
                </aside>

            </div>
        </>
    );
}

export default Sidebar