import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import styled from 'styled-components';

const SideBar = () => {
    return (
      <>
        <SosWrapper>
          <p>SOS</p>
        </SosWrapper>

        <LinkSideBar to={'/settings'}>
          <MenuWrapper>
            <HiMenu />
          </MenuWrapper>  
        </LinkSideBar>
      </>
    );
  };
  
  export default SideBar;
  
const LinkSideBar = styled(NavLink)`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 75px;
    background-color: rgb(18,18,25);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const MenuWrapper = styled.div`
    font-size: 25px;
    color: white;
    font-size: 56px;

    align-items: center;
    margin-right: 7px;

    &:active{
        color: rgb(82, 113, 255);
    }
`;

const SosWrapper = styled.div`
    background-color: red;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    position: fixed;
    right: 10px;
    top: 10px;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    z-index: 1001;
`;