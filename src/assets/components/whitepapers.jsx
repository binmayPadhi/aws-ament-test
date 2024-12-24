import React from 'react';
import { useState } from 'react';
import whitepaperimg from '../images/White-paper/atlassian-white-paper.png';
import '../CSS/Whitepaper.css';
import WhitepapersData from '../Data/AboutUs-Data/WhitepapersData';
import Whitepaperform from './WhitepaperForm';

const WhitePapers = () => {
    const [formData, setFormData] = useState({  
        firstName: '',  
        lastName: '',  
        email: '',  
        company: '',  
        jobTitle: '',  
    });  

    const handleChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({  
            ...formData,  
            [name]: value,  
        });  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        // Handle form submission logic here  
        console.log('Form submitted:', formData);  
    };  
    return (
        <>
            <div className="container-fluid bg-blue">
                <div className='w-88 mx-auto'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <img src={whitepaperimg} className='whitepaper-img-styles' />
                        </div>
                        <div className='col-lg-7 ptf-4'>
                            <h1 className='download-text f-fm'> FREE DOWNLOAD </h1>
                            <h2 className='evolution-text f-fm'> The evolution of project management and why now is the time to modernize </h2>
                            <h3 className='project-text'>Project management practices and tools have evolved. Now is the time to switch to modern
                                project management platforms that offer real-time collaboration, visibility, and data-driven insights.</h3>
                            <button className='download-button f-fm'>Download now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-84 mx-auto ptf-4'>
                <div className='row space-top-text'>
                    <div className='col-md-5 col-lg-5'>
                        <h1 className='executive-text f-fm'>Executive summary</h1>
                        <p className='realm-text f-fm'>In the realm of project management, reliance on outdated methods like spreadsheets and email can hinder productivity and collaboration. Despite advancements in technology, many organizations cling to these old practices, leading to disjointed workflows and wasted time. Modern project management platforms offer real-time collaboration, visibility, and automation, enabling organizations to streamline processes and make data-driven decisions. Atlassian's suite of products, including Jira, Confluence, Trello, and Atlas, provides a comprehensive solution for modernizing project management, empowering teams to work more efficiently and effectively.</p>
                    </div>
                    <div className='col-lg-1 col-md-1 col-12'></div>
                    <div className='col-md-5 col-lg-5'>
                        <h1 className='keys-text f-fm'>KEY TAKEAWAYS</h1>
                        {WhitepapersData.map((list, index) => {
                            return (
                                <>
                                    <div className='d-flex'>
                                       <div><img src={list.image} className='list-image'/></div> 
                                        <p className='realm-text f-fm'>{list.text}</p>
                                    </div>
                                </>
                            )

                        }
                        )
                        }

                    </div>

                </div>
            </div>
            <div className='bg-blue-bottom '>
                <div className='width-content'>
                <h1 className='access-text f-fm d-flex flex-row justify-content-center'>Access the full download</h1>
               <p className='learn-why-text f-fm d-flex flex-row justify-content-center'>Learn why now is the time to evolve your project management solution.</p>
             <p className='required-text f-fm d-flex flex-row justify-content-center'>*Required Fields</p>
             <div className="form-container">  
           <Whitepaperform />
           
        </div>  
            </div>
            </div>
        </>


    );
};

export default WhitePapers;