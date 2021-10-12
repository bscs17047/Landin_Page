import React from 'react'
import './Footers.css'
import 'semantic-ui-css/semantic.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Footers() {
    useEffect(() => {
        AOS.init({duration:3000});
    }, [])
    return (
        <div data-aos="fade-up" id='footer' style={{textAlign:'center' , backgroundColor:'#000000' , color:'black' }}>
            <div class = "Footers_content" >
                <div class = 'left_content_Footers' >
                    <h3>Contact</h3>
                    <p>Office 000, 00th Floor, ABC Complex, ABC Road, F-8/1, Islamabad, Pakistan</p>
                    <p>+92 000 00 00 000</p>
                    <p>+92 51 000 0000</p>
                    <p>Link 123</p>
                </div>
                <div class = 'centre_content_Footers'>
                <h3>Menu</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Research</p>
                    <p>Contact Us</p>
                </div>
                <div class = 'centre2_content_Footers' >
                    <h3>Recent Researches</h3>
                    <p>Research 1</p>
                    <p>Research 2</p>
                    <p>Research 3</p>
                    <p>Research 4</p>

                </div>
                <div class = 'right_content_Footers'>
                    <h3>Social</h3>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                </div>
            </div>
        </div>
    )
}
