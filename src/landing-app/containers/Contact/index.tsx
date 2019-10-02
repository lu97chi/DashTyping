import React from 'react';
import { Button } from 'antd';

const Contact = () => <div style={{marginTop: '100px'}}>
    <Button>
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
    </Button>
    </div>

export default Contact;