import React from 'react'
import Particles from 'react-particles-js'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        AOS.init({duration:3000});
    }, [])
    return (
        <div data-aos="fade-up" id = 'about' className="wrapper">
            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}
        height="100vh"
    />
    <div class="text">
       <h1>About</h1>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.</p>
   </div>
        </div>
    )
}
