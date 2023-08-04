import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Dgb } from "../../assets/svg/logos";
import { NavLink } from 'react-router-dom';
import {Hamburger} from './Hamburger'

import "./menu.css";
import { useEffect, useState } from "react";

export function Menu() {

  const [openMenu, setOpenMenu] = useState(false)

  const toogleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && openMenu) setOpenMenu(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[openMenu])

  return (
    <header className="menu">
      <div className="menu-left">
        <Dgb />
        <span>DGB Development</span>
      </div>
      <div className="menu-right">
        <nav>
          <ul className={openMenu ? 'menu-open' : ''}>
            <li>
              {/* Usamos NavLink en lugar de Link */}
              <NavLink to="/" className={({isActive}) => (isActive ? "active" : '')} onClick={()=>setOpenMenu(false)}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/portafolio" className={({isActive}) => (isActive ? "active" : '')} onClick={()=>setOpenMenu(false)}>
                Portafolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({isActive}) => (isActive ? "active" : '')} onClick={()=>setOpenMenu(false)}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={({isActive}) => (isActive ? "active" : '')} onClick={()=>setOpenMenu(false)}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        <ThemeSwitch />
        <Hamburger
          toogleMenuOpen={toogleMenuOpen}
          openMenu={openMenu}
        />
      </div>
    </header>
  );
}
