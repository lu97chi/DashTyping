import React from 'react'
import { component } from 'react-garden-kit';
import { HeroMainText, HeroContainer, HeroSecondaryText, CTAButton } from './styledComponents';
import ModalCaller from '../../../BitsComponents/ModalCaller';
import { UseCTA } from '../Navbar/Hooks/useCta';
import Axios from 'axios';
import { message } from 'antd';
import { MakeUrlReservation } from '../Navbar/helpers';

type Props = {
    configuration: {
        mainText: string,
        secondaryText: string
    },
}

const sendEmail = async (values, setModalOpen, setLoading) => {
    if (values !== 'Error') {
            setLoading(true);
            await Axios.get(MakeUrlReservation(values));
            setLoading(false)
            message.success('Reservación enviada, espera a que nos pongamos en contacto contigo.');
            setModalOpen(false);
    }
}

const Hero = ({configuration}:Props) => {
    const { loading, setLoading, modalOpen, setModalOpen} = UseCTA();
    return (
        <HeroContainer>
            <HeroMainText>{configuration.mainText}</HeroMainText>
            <HeroSecondaryText>{configuration.secondaryText}</HeroSecondaryText>
            <CTAButton onClick={() => setModalOpen(true)} >Citas</CTAButton>
            <ModalCaller
        loading={loading}
        modalOpen={modalOpen} 
        onCancel={() => setModalOpen(false)} 
        onOk={(values) => sendEmail(values, setModalOpen, setLoading)} />
    </HeroContainer>
    )
}
    

export default component(Hero);