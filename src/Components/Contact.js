import React from 'react'
import { Button} from 'react-bootstrap';
import './contact.css'
import emailjs from 'emailjs-com';

import {MdLocationOn} from "react-icons/md";
import {MdMail} from "react-icons/md";
import { Form } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const EmailURL = 'mailto:random@g5io.com'

const lat = '33.6844' 
const lng =  '73.0479'

const service_ID= 'service_d0x1m9w'
const template_ID = 'template_7s2nasa'
const user_ID = "user_BNNzulBQX39CSTzZ7wP0T"

const showInMapClicked = () => {
    window.open("https://maps.google.com?q="+lat+","+lng );
  };

export default function Contact() {
    useEffect(() => {
        AOS.init({duration:3000});
    }, [])
    return (
        <div data-aos="fade-up" id = 'contactus' style={{textAlign:'center' , backgroundColor:'#5d5e5e' , color:'white' , padding:'10px',paddingTop:'11vh'}}>
            <h1>Contact Us</h1>
           
                <div class ='content'>
                    <div class = 'content_right'>
                        <MdLocationOn class ='icon_clr' onClick={showInMapClicked}/>
                        <text style={{padding:'10px'}}>Islamabad </text>  
                        
                        <MdMail class ='icon_clr' onClick={()=>{window.location=EmailURL}}/> 
                        <text style={{padding:'10px'}}>random@g5io.com</text>
                    </div>

                    <div class = 'content_left'>
                        <Form onSubmit={sendEmail} id="contact-form" style={{marginTop:'10px'}} >
                            <Form.Control name='name' type="text" placeholder="Full Name" />
                            <br/>
                            <Form.Control name='email' type="email" placeholder="Enter Email" />
                            <br/>
                            <Form.Control name='subject' type="text" placeholder="Subject" />
                            <br/>
                            <Form.Control name='message' as="textarea" placeholder="Type your message here" />
                            <br/>
                            <Button type = 'submit' value='Send' style={{marginTop:'10px',backgroundColor:'#1d9088',border:"#1d9088"}} variant="primary" >Submit</Button>
                        </Form>
                    </div>
                </div>
        </div>
    )
}

function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(service_ID , template_ID,e.target , user_ID
        ).then(res=>{
            console.log("Response" + res)
        }).catch(err=> console.log("error" + err))
}