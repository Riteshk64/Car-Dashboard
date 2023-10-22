import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaPhoneAlt, FaMusic, FaCar } from 'react-icons/fa';
import { FaLocationDot} from 'react-icons/fa6';
import { MdKeyboardVoice } from 'react-icons/md';
import { CgScreenMirror } from 'react-icons/cg';
import SideBar from './SideBar';

const Navs = () => {
  const LINKS = [
    { icon: FaHome, name: 'home', to: '/' },
    { icon: FaPhoneAlt, name: 'phone', to: '/phone' },
    { icon: FaLocationDot, name: 'map', to: '/map' },
    { icon: <MicrophoneIcon />, name: 'voice', to: '/voice' },
    { icon: FaMusic, name: 'music', to: '/music' },
    { icon: FaCar, name: 'car', to: '/car' },
    { icon: CgScreenMirror, name: 'mirror', to: '/mirror' },
  ];

  const [activeIcon, setActiveIcon] = useState('home');

  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div>
      <SideBar />

      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <LinkStyled to={item.to}>
              <IconComponent
                icon={item.icon}
                name={item.name}
                isActive={activeIcon === item.name}
                onClick={() => handleClick(item.name)}
              />
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

function MicrophoneIcon() {
  return (
    <MicrophoneWrapper>
      <MdKeyboardVoice style={{ color: 'white' }} />
    </MicrophoneWrapper>
  );
}

function IconComponent({ icon, name, isActive, onClick }) {
  const iconStyle = {
    color: isActive ? 'rgb(82, 113, 255)' : 'white',
    borderTop: isActive ? '5px solid rgb(82, 113, 255)' : 'none',
    padding: '5px',
    margin: isActive ? '-3px 0px' : '0',
  };

  return (
    <div className="icon" onClick={onClick}>
      {React.isValidElement(icon) ? icon : React.createElement(icon, { style: iconStyle })}
    </div>
  );
}

const MicrophoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(82, 113, 255);
  height: 65px;
  width: 65px;
  border-radius: 50%;
`;

export default Navs;

const NavList = styled.ul`
  position: absolute;
  bottom: 0px;
  background-color: rgb(35, 35, 35);
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0px;
  padding: 0px 0px;
  height: 75px;
  width: 100%;
`;

const LinkStyled = styled(NavLink)`
  flex: 1;
  display: block;
  padding: 3px 20px;
  text-decoration: none;
  font-size: 56px;
  color: white;
`;