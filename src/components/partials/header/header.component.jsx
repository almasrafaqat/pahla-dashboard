import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { LuUser } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { RiHomeGearLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useGlobalState } from '../../../context/GlobalStates';
import './header.style.css';
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const HeaderPrimary = () => {
  const { showSidebar, setShowSidebar } = useGlobalState();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);

  };


  const dropdownProfile = () => {
    setShowDropdown(prevState => !prevState);
    // setOpen(!open);

  }
  return (
    <header>
      <div className="topbar d-flex align-items-center">
        <nav className="navbar navbar-expand">

          <div style={{marginRight: "40px"}} className="toggle-icon ms-auto" onClick={toggleSidebar}>
            <FaArrowRightArrowLeft />
          </div>
          <div className="search-bar flex-grow-1">
            <div className="position-relative search-bar-box">
              <input type="text" className="form-control search-control" placeholder="Type to search..." /> <span className="position-absolute top-50 search-show translate-middle-y"><i className='bx bx-search'></i></span>
              <span className="position-absolute top-50 search-close translate-middle-y"><i className='bx bx-x'></i></span>
            </div>
          </div>
          <div className="top-menu ms-auto">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item mobile-search-icon">
                <NavLink className="nav-link" to="#">
                  <IoSearchOutline />
                </NavLink>
              </li>
            </ul>
          </div>


          <div class="user-box">
            <div className='d-flex align-items-center img-profile--container' onClick={dropdownProfile}>
              <img src='./img/fox.jpg' className='user-img' width={40} height={40} />

              <div className="user-info ps-3">
                <p class="user-name mb-0">Pauline Seitz</p>
                <p class="designattion mb-0">Web Designer</p>
              </div>
            </div>
            <div className={`dropdown--profile ${showDropdown ? 'show' : 'hide'}`}>
              <ul className='profile--dropdown'>
                <li className='dropdown-item'><NavLink><span><LuUser /></span>Profile</NavLink></li>
                <li className='dropdown-item'><NavLink><span><IoSettingsOutline /></span>Settings</NavLink></li>
                <li className='dropdown-item'><NavLink><span><RiHomeGearLine /></span>Dashboard</NavLink></li>
                <li className='dropdown-item'><NavLink><span><CiBadgeDollar /></span>Earnings</NavLink></li>
                <li className='dropdown-item'><NavLink><span><CiSaveDown2 /></span>Downloads</NavLink></li>
                <li className='dropdown-item'><NavLink><span><RiLogoutCircleLine /></span>Logout</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </header>
  )
}

export default HeaderPrimary