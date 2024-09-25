import { HambergerMenu} from 'iconsax-react';
import './header.scss';
import { useState } from 'react';
import { Drawer } from 'antd';
import logo from 'src/assets/img/logoasosiy.png';
import { Link } from 'react-router-dom';

function LayoutHeader() {
  // const [drawerOpen, setDrawerOpen] = useState(false);
  // const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <div className="container header__container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              style={{ width: '130px', marginTop: '7px' }}
              src={logo}
              alt=""
            />
        
          {/* <a className="active">
            <h1 className="header__title">Ergashev.M</h1>
          </a> */}
        </div>

        <div className="drawer-block" onClick={showDrawer}>
          <HambergerMenu size="24" color={'#fff'} />
        </div>

        <Drawer onClose={onClose} open={open}>
          <ul className="header__list-group-drawer">
            <li className="header__item-list">
              <a href="#hero" className="header-menu" onClick={onClose}>
                Home
              </a>
            </li>

            <li className="header__item-list">
              <a href="#texnology" className="header-menu" onClick={onClose}>
                My Tech Stack
              </a>
            </li>

            <li className="header__item-list">
              <a href="#about" className="header-menu" onClick={onClose}>
                About me
              </a>
            </li>

            <li className="header__item-list">
              <a href="#projects" className="header-menu" onClick={onClose}>
                Portfolio
              </a>
            </li>

            <li className="header__item-list contact-li">
              <a href="#contact__section" className="contact" onClick={onClose}>
                Contact
              </a>
            </li>
          </ul>
        </Drawer>

        <ul className="header__list-group">
          <li className="header__item-list">
            <a href="#hero" className="header-menu">
              Home
            </a>
          </li>

          <li className="header__item-list">
            <a href="#texnology" className="header-menu">
              My Tech Stack
            </a>
          </li>

          <li className="header__item-list">
            <a href="#about" className="header-menu">
              About me
            </a>
          </li>

          <li className="header__item-list">
            <a href="#projects" className="header-menu">
              Portfolio
            </a>
          </li>

          <li className="header__item-list contact-li">
            <a href="#contact__section" className="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LayoutHeader;
