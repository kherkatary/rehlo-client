import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { useAuth } from '../../Context/auth';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated,logout} = useAuth()
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img style={{height:"1.6rem"}} src="/favi.png" alt="icon" />
        <a href="/">RehLo</a>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
        <ul>
          <li><a href="/">Places</a></li>
          <li><a href="/user/my-bookings">My Bookings</a></li>
          <li><a href="/">Events</a></li>
          <li className={styles.dropdown} onClick={toggleDropdown}>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li><a href="/">Tutorials</a></li>
                <li><a href="/">Webinars</a></li>
                <li><a href="/">Workshops</a></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {
        isAuthenticated ? <div className={styles.actions}>
          <Link to='/user/profile'><CgProfile size={30} color='#FA6800'/></Link>
          <Link to='/sign-in'><IoIosLogOut size={30} color='#FA6800' onClick={()=>{logout()}}/></Link>
          
        </div> :
          <div className={styles.actions}>
            <a href="/sign-in" className={styles.signup}>Sign In</a>
          </div>

      }
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;
