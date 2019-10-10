import React, { useState } from 'react'
import { useScroll } from '../Hooks/useScroll';
import { NavbarContainer, ImageSidebar, ImageContainer, MNav, LogoImage, CTAButton, Menutext, MenuContainer } from './styledComponents';
import { Icon, Drawer, Col, message } from 'antd';
import { UserNavbar } from './Hooks/useNavbar';
import { component } from 'react-garden-kit';
import ModalCaller from '../../../BitsComponents/ModalCaller';
import { UseCTA } from './Hooks/useCta';
import { MakeUrlReservation } from './helpers';
import Axios from 'axios';


type Configuration = {
        menuConfiguration: {
                menu: Array<string>,
                menuPosition: number,
                cols: number
        },
        logoConfiguration: {
                logo: string | any,
                logoPosition: number,
                cols: number
        },
        actionsConfiguration: {
                actions: Array<{
                        label: string,
                        caller: Function,
                        id?: string | number
                }>,
                actionsPositions: number,
                cols: number
        }
}

type Props = {
        Configuration: Configuration
}

const sendEmail = async (values, setModalOpen, setLoading) => {
        if (values !== 'Error') {
                setLoading(true);
                await Axios.get(MakeUrlReservation(values));
                setLoading(false)
                message.success('Reservación enviada, espera a que nos pongamos en contacto contigo.');
                setModalOpen(false);
        }
        console.log('email sent', values)
}

// https://us-central1-mediplus-1838c.cloudfunctions.net/sendMail?dest=lozarnez@gmail.com &date=19/05/12&cellphone=6721096051&name=Luis Roberto Hernandez Robles&email=lu97is@gmail.com


const Navbar = ({ Configuration }: Props) => {
    const { actionsConfiguration, logoConfiguration, menuConfiguration } = Configuration;
    const { YPosition } = useScroll();
    const { drawerOpen, setDrawerOpen } = UserNavbar();
    const { loading, setLoading, modalOpen, setModalOpen} = UseCTA();
    return (<NavbarContainer YPosition={YPosition} type="flex" align="middle" >
            {/* Mobile navbar */}
            <Col xs={4} sm={4} md={0}>
            <MNav>
            <Icon type="menu" onClick={() => setDrawerOpen(true)} style={{color: '#000000'}} />                    
            <Drawer
            title={<ImageContainer>
                    <ImageSidebar alt="Spa" src={logoConfiguration.logo.small} />
                    </ImageContainer>}
            placement="left"
            closable={false}
            onClose={() => setDrawerOpen(false)}
            visible={drawerOpen}>
                {menuConfiguration.menu.map((menuItem) => <p>{menuItem}</p>)}
            </Drawer>
            </MNav>
            </Col>
            {/* navbar */}
        <Col md={12} xs={0} sm={0}>
                <MenuContainer>
                        {menuConfiguration.menu.map((menuItem) => <Menutext type={"left"} mode="random">{menuItem}</Menutext>)}
                </MenuContainer>
        </Col>
        <Col md={6} xs={12} sm={12}>
                <LogoImage src={logoConfiguration.logo.medium} />
        </Col>
        <Col md={6} xs={8} sm={8}>
                <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '14px'}}>
                        {/* {actionsConfiguration.actions.map((action) => <CTAButton onClick={() => action.caller(() => A(action.id))} >{action.label}</CTAButton>)}    */}
                        {/* {actionsConfiguration.actions.map((action) => <CTAButton onClick={() => action.caller({data: 1, data2: 3})} >{action.label}</CTAButton>)}    */}
                        {actionsConfiguration.actions.map((action) => <CTAButton onClick={() => setModalOpen(true)} >{action.label}</CTAButton>)}   

                </div> 
        </Col>
        <ModalCaller 
        loading={loading}
        modalOpen={modalOpen} 
        onCancel={() => setModalOpen(false)} 
        onOk={(values) => sendEmail(values, setModalOpen, setLoading)} />
    </NavbarContainer>)
}

export default component(Navbar);