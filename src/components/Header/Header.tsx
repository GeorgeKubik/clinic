import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.png";
import { ReactComponent as Icon } from "../../assets/img/Vector.svg";
import { ReactComponent as WhatsApp } from "../../assets/img/whatsapp.svg";

import MenuList from "../MenuList/index";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../Modal";

const Header = () => {
  const [click, setClick] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const onClickHamburger = () => {
    setOpenMenu(!openMenu);
  };

  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    const handleKeyDown = ({ key }: any) => {
      if (key === "Escape") {
        setClick(false);
        setOpenMenu(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const sidebarStyle = openMenu
    ? { left: "0", transition: "0.6s all" }
    : { left: "-110%", transition: "0.6s all" };
  openMenu || click
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const hamburger = (
    <div onClick={onClickHamburger} className={styles.hamburger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );

  const menu = (
    <div className={styles.menu}>
      <div className={styles.container}>
        <MenuList />
      </div>
    </div>
  );
  const address = (
    <div className={styles.address}>
      <Icon className={styles.icon} />
      <div className={styles.text}>
        Ростов-на-Дону <span>ул. Ленина, 2Б</span>
      </div>
    </div>
  );
  const button = (
    <button onClick={handleClick} className={styles.btn}>
      Записаться на прием
    </button>
  );

  const sidebar = (
    <div style={sidebarStyle} className={styles.wrapperSidebar}>
      <div className={styles.sidebarBlock}>
        <MenuList />
        {button}
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.modal}>
          <Modal stateModal={click} />
        </div>
        <div className={styles.wrapper}>
          {sidebar}
          <div className={styles.leftBlock}>
            <div className={styles.hamburgerWrapper}>{hamburger}</div>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="logo" />
            </Link>
            {address}
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.phone}>
              <WhatsApp className={styles.whatsApp} />
              <span>+7(863) 000 00 00</span>
              <div className={styles.addressPhone}>{address}</div>
            </div>
            {button}
          </div>
        </div>
      </div>
      {menu}
    </>
  );
};

export default Header;
