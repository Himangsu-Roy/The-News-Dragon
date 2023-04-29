import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"
import Qzone from '../QZone/Qzone';
import bg from "../../../assets/bg.png";

const RightNav = () => {
    return (
        <div>
            <h5>Right Nav</h5>
            <Button className='mb-2' variant='outline-primary'><FaGoogle/> Login with Google</Button>
            <Button variant='outline-secondary'><FaGithub/> Login with Github</Button>

            <div className=''>
                <h5>Find us on</h5>
                <ListGroup>
                <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone/>
            <div >
                <img className='w-100' src={bg} alt="" />
            </div>
        </div>
    );
}

export default RightNav;
