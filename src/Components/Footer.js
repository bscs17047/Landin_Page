import React from 'react'
import './footer.css'

import { FaFacebookF  , FaLinkedinIn   } from "react-icons/fa";

import {SiTwitter} from "react-icons/si";

const FacebookURL = 'https://www.facebook.com/search/pages/?q=g5io'
const TwitterURL = 'https://twitter.com/g5io_'
const LinkedInURL = 'https://www.linkedin.com/in/abdulrehmankhawaja/'



export default function Footer() {
    
    return (
        <div style={{textAlign:'center' , backgroundColor:'black' , color:'white' }} >
            <p>© 2021 All rights reserved</p>
        </div>
    )
}
