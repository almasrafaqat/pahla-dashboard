import React, { Fragment, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom'

const ItemsCard = (sidebarItem) => {
  const { id,  icon } = sidebarItem;
  const hasarrow = sidebarItem.subitems;


  const [open, setOpen] = useState(false);

  const onClickHandler = (event) => {
    setOpen(prevState => !prevState);
    // setOpen(!open);

  }


  const combinedClassName = `${hasarrow ? 'has-arrow' : ''} ${open && hasarrow ? 'has-arrow arrow-down' : ''}`;
  return (
    <Fragment key={id}>
      <li className="menu-label">{sidebarItem.label}</li>
      <li>
        <NavLink to={sidebarItem.url && sidebarItem.url} className={combinedClassName}
          onClick={(e) => onClickHandler(e)}
          aria-controls={`collapse-${id}`}
          aria-expanded={open}
          id={`li--${id}`}
        >
          <div className="parent-icon">
            {icon}
          </div>
          <div className="menu-title">{sidebarItem.title}</div>

        </NavLink>
        <Collapse in={open} className="navitem-collapse">
          <ul id={`collapse-${id}`}>
            {sidebarItem.subitems?.map((item, indx) => (

              <li> <NavLink to=""><span><LiaLongArrowAltRightSolid /></span>{item.title}</NavLink>
              </li>



            ))}
          </ul>
        </Collapse>
      </li>
    </Fragment>
  )


}

export default ItemsCard