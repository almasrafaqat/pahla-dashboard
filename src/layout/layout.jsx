import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderPrimary from '../components/partials/header/header.component';
import SidebarNav from '../components/partials/sidebar/sidebar.component';
import Footer from '../components/partials/footer/footer.component';
import { useGlobalState } from '../context/GlobalStates';
import './layout.style.css';
import '../responsive.css';


const Layout = ({ children }) => {
  const { showSidebar, setShowSidebar } = useGlobalState();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);

  };


  return (
    <>
      <div className={`wrapper ${showSidebar ? 'toggled sidebar-open' : ''}`}>
        <SidebarNav showSidebar={showSidebar} />
        <HeaderPrimary />
        <div class="page-wrapper">
          <div class="page-content">
            {children}
          </div>
        </div>
        <div class="overlay toggle-icon" onClick={toggleSidebar}></div>
        <Footer />
      </div>
    </>

  )
}

export default Layout