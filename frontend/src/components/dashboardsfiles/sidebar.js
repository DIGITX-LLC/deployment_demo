import React, { useState, useEffect, useRef } from 'react';
import '../login/loginsignup.css';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaUniversity,
    FaTags,
    FaUserCircle // New account icon
} from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false); // State for account menu
    const sidebarRef = useRef(null); // Reference to the sidebar element

    useEffect(() => {
        // Attach event listener to detect clicks outside of the sidebar and account menu
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up the event listener when component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Function to handle clicks outside of the sidebar and account menu
    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsAccountMenuOpen(false);
        }
    };

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Function to toggle account menu
    const toggleAccountMenu = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen);
    };

    // Function to close account menu
    const closeAccountMenu = () => {
        setIsAccountMenuOpen(false);
    };

    // Get the current location
    const location = useLocation();
    
    // Check if the current location is one of the specified pages
    const isSidebarPage = [
        '/dashboards',
        '/invoices',
        '/expenses',
        '/statements',
        '/accounting',
        '/legal',
        '/banks',
        '/perks',
    ].includes(location.pathname);

    const menuItem = [
        {
            path: "/dashboards",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/invoices",
            name: "Invoices",
            icon: <FaUserAlt />
        },
        {
            path: "/expenses",
            name: "Expense",
            icon: <FaRegChartBar />
        },
        {
            path: "/statements",
            name: "Statement",
            icon: <FaCommentAlt />
        },
        {
            path: "/accounting",
            name: "Accountings",
            icon: <FaShoppingBag />
        },
        {
            path: "/legal",
            name: "Legal",
            icon: <FaThList />
        },
        {
            path: "/banks",
            name: "Banks",
            icon: <FaUniversity />
        },
        {
            path: "/perks",
            name: "Perks",
            icon: <FaTags />
        }
    ];

    // Render account menu items
    const renderAccountMenu = () => (
        <div className="account_menu">
            <NavLink to="/yourcompanies" className="account_menu_item" onClick={closeAccountMenu}>Your Companies</NavLink>
            <NavLink to="/register" className="account_menu_item" onClick={closeAccountMenu}>Register New Company</NavLink>
            <NavLink to="/profile" className="account_menu_item" onClick={closeAccountMenu}>Profile Settings</NavLink>
            <NavLink to="/billing" className="account_menu_item" onClick={closeAccountMenu}>Billing</NavLink>
            <NavLink to="/" className="account_menu_item" onClick={closeAccountMenu}>Logout</NavLink>
        </div>
    );

    return (
        <div ref={sidebarRef} className="containerside">
            {/* Conditionally render the sidebar based on whether it's one of the specified pages */}
            {isSidebarPage && (
                <div style={{ width: isOpen ? "170px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <img style={{ display: isOpen ? "block" : "none" }} src="https://digitxgroup.com/wp-content/uploads/2024/04/2.png" className="sidebar_logo" alt="" />
                        <div style={{ marginLeft: isOpen ? "20px" : "0px", padding: "10px 10px" }} className="bars">
                            <FaBars onClick={toggleSidebar} />
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeClassName="active" onClick={closeAccountMenu}>
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    {/* Account icon and label */}
                    <div className="link" onClick={toggleAccountMenu}>
                        <div className="icon"><FaUserCircle /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Account</div>
                    </div>
                    {/* Account menu */}
                    {isAccountMenuOpen && renderAccountMenu()}
                </div>
            )}
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
