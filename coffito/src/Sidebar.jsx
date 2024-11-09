import React, { useState } from 'react';
import { MdSpaceDashboard, MdAddBox, MdDelete, MdAccountCircle } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

import { SlGraph } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate here
import logo from "./assets/CoffitoLogo (40 x 40 px).png"; // Update the path based on your folder structure

function Sidebar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        console.log("Dropdown visible:", !isDropdownVisible);  // Log dropdown state
    };

    const handleDropdownClick = (route) => {
        navigate(route);
    };
    return (
        <div className="nav-con">
            <ul className="w-full ml-1 flex flex-col ">
                <li className="pl-5 mb-5 mt-3  ml-[-10px]">
                    <Link to="/" className="flex items-center">
                        <div  className="logo" >
                            <img src={logo} alt="Logo" />
                        </div>
                        <h5>CoFFito Cafe</h5>
                    </Link>
                </li>

                <li className="nav-li-hover">
                    <Link to="/dashboard" className="nav-a">
                        <span className="icon"><MdSpaceDashboard /></span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>

                <li className="nav-li-hover">
                    <Link to="/add-product" className="nav-a">
                        <span className="icon"><MdAddBox /></span>
                        <span className="title">Add Product</span>
                    </Link>
                </li>

                <li className="nav-li-hover">
                    <Link to="/update-product" className="nav-a">
                        <span className="icon"><RiEdit2Fill /></span>
                        <span className="title">Update Product</span>
                    </Link>
                </li>

                <li className="nav-li-hover">
                    <Link to="/delete-product" className="nav-a">
                        <span className="icon"><MdDelete /></span>
                        <span className="title">Delete Product</span>
                    </Link>
                </li>

                <li className='cursor-pointer pl-5'>
                    <div onClick={toggleDropdown} className="nav-a">
                        <span className="icon"><SlGraph /></span>
                        <span className="flex items-center gap-1">Sales Report <IoMdArrowDropdown /> </span>
                    </div>

                    {isDropdownVisible && (
                        <ul className="flex flex-col ml-12 mb-2">
                            <li onClick={() => handleDropdownClick("/sales-report/daily")} className="dropdown-item">Daily Sales</li>
                            <li onClick={() => handleDropdownClick("/sales-report/monthly")} className="dropdown-item">Monthly Sales</li>
                            <li onClick={() => handleDropdownClick("/sales-report/yearly")} className="dropdown-item">Yearly Sales</li>
                            <li onClick={() => handleDropdownClick("/transaction")} className="dropdown-item">Transaction</li>
                            <li onClick={() => handleDropdownClick("/item-sold")} className="dropdown-item">Item Sold</li>

                        </ul>
                    )}
                </li>

                <li className="nav-li-hover">
                    <Link to="/account" className="nav-a">
                        <span className="icon"><MdAccountCircle /></span>
                        <span className="title">Account</span>
                    </Link>
                </li>


                <li className="nav-li-hover">
                    <Link to="/account" className="nav-a">
                        <span className="icon"><MdAccountCircle /></span>
                        <span className="title">Log out</span>
                    </Link>
                </li>


            </ul>
        </div>
    );
}

export default Sidebar;
