import React, { Fragment } from 'react'
import { SidebarItems } from '../../../data';
import ItemsCard from '../../sidebar-item-card/item-card.components';
import { useGlobalState } from '../../../context/GlobalStates';
import './sidebar.style.css';



const SidebarNav = () => {

  

  return (
    <Fragment>
      <div className="sidebar-wrapper" data-simplebar="true">
        <div>
          <div className="sidebar-header">
            <div>
              <img src="./img/logo/pahla-store-logo.png" className="logo-icon" alt="logo icon" />
            </div>
            <div>
              <h4 className="logo-text ">Almas.</h4>
            </div>
           
          </div>
          <ul className="metismenu" id="menu">
           
          {
            SidebarItems?.map((sidebarItem, index) => <ItemsCard {...sidebarItem} key={index} />)
          }


          </ul>

          

        </div>
      </div>

    </Fragment>
  )
}

export default SidebarNav