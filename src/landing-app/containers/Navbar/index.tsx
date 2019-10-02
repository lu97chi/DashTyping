import React from 'react'
import { useScroll } from '../Hooks/useScroll';
import { NavbarContainer, ImageSidebar, ImageContainer, MNav, LogoImage } from './styledComponents';
import { Icon, Drawer, Row, Col } from 'antd';
import { UserNavbar } from './Hooks/useNavbar';

// const MenuContainer = (
//     <Menu>
//     <Menu.Item>
//         1st menu item
//     </Menu.Item>
//     <Menu.Item>
//         2nd menu item
//     </Menu.Item>
//     <Menu.Item>
//         3rd menu item
//     </Menu.Item>
//   </Menu>
// )

     /* <Dropdown overlay={MenuContainer} placement="bottomCenter">
        <ItemMenu>
          Hover me <Icon type="down" />
        </ItemMenu>
        </Dropdown> */

const Navbar = () => {
    const { YPosition } = useScroll();
    const { drawerOpen, setDrawerOpen } = UserNavbar();
    return (<NavbarContainer YPosition={YPosition}>
            <MNav>
            <Icon type="menu" onClick={() => setDrawerOpen(true)} />                    
            <Drawer
            title={<ImageContainer>
                    <ImageSidebar alt="Spa" src='https://seeklogo.com/images/B/beauty-spa-logo-A978BDF059-seeklogo.com.png' />
                    </ImageContainer>}
            placement="left"
            closable={false}
            onClose={() => setDrawerOpen(false)}
            visible={drawerOpen}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    </Drawer>
            </MNav>
            {/* <ImageContainer>
                <LogoImage src='https://seeklogo.com/images/B/beauty-spa-logo-A978BDF059-seeklogo.com.png' alt="Spa" />
            </ImageContainer> */}
    </NavbarContainer>)
}

export default Navbar;