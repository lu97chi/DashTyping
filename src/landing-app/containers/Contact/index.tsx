import React from 'react';
import { Button, Row, Col, Icon, Input } from 'antd';
import { ContactContainer, JoinUsText, SocialMediaContainer } from './styledComponents';
import InlineIconText from '../../../BitsComponents/InlineIconText';

type Props = {
    configuration: {
        contactUs: {
            title: string,
            socialIcons: Array<{
                icon: any,
                link: string,
            }>,
            inlineIcons: Array<{
                icon: any,
                text: string
            }>
        },
        logo: any,
        inputLabel: string
    }
}

const Contact = ({configuration}:Props) => {
    const { contactUs, logo, inputLabel } = configuration;
    const { socialIcons } = contactUs;
    return (
        <ContactContainer>
    <Row>
        <Col xs={24} md={14}>
            <Row>
                <Col xs={24} lg={8}>
                    <img style={{width: '100%'}} src={logo} alt="Mediplus" />
                </Col>
            </Row>
           <Row type="flex" justify="end">
               <Col xs={24} lg={12}>
                <p>{inputLabel}</p>
                <Input suffix={<Icon type="arrow-right" />}  />
               </Col>
           </Row>
        </Col>  
        <Col xs={24} md={8} offset={2}>
            <JoinUsText>{contactUs.title}</JoinUsText>
            {contactUs.inlineIcons.map(({text, icon}) => <InlineIconText icon={icon} text={text} />)}
            <SocialMediaContainer>
                {socialIcons.map((icon) => <Icon style={{marginLeft: '16px'}} component={icon.icon} />)}
            </SocialMediaContainer>
        </Col>
    </Row>
    {/* <Button>
        <a href="//api.whatsapp.com/send?phone=526721096051&text=hello">whatsapp</a>
    </Button>
    <Button>
        <a href="fb://page/262823323833276">Facebook</a>
    </Button>
    <Button>
        <a href="https://www.facebook.com/pg/FFYMEX/about/?ref=page_internal" target="_blank" rel="noopener noreferrer">Facebook desktop</a>
    </Button>
    <Button>
        <a href="fb://profile/262823323833276">Facebook ios</a>
    </Button>
    <Button>
        <a href="instagram://user?username=lu97chi">Instagram</a>
    </Button>
    <Button> 
        <a href="https://www.instagram.com/lu97chi/" target="_blank" rel="noopener noreferrer">Instagram desktop</a>
    </Button>
    <Button>
        <a href="tel:6721096051">Cellphone</a>
    </Button>
    <Button>
        <a href="mailto:lu97is@gmail.com?subject=Im%20Interested%20in%20your%20product">Email</a>
    </Button> */}
    </ContactContainer>
    )
}

export default Contact;