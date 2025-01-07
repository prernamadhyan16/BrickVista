import React from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import { FaScreenpal, FaUpDown } from 'react-icons/fa6'
import { FaEnvelope, FaInbox, FaList, FaMap, FaMapMarkedAlt, FaUser } from 'react-icons/fa'

const About =()=>{
    return(
        <section className='max-padd-container'>
            <div className='flex items-center flex-col lg:flex-row gap-12'>
                {/* IMAGE -Left side */}
                <div className='flex-1'>
                    <div className='relative'>
                        <img src={about1} alt="AboutImg" className='rounded-3xl' />
                        <span className='absolute top-8 left-8 bg-white px-2 rounded-full medium-14 '>San Francisco</span>
                    </div>
                </div> 
                {/* INFO RIGHT SIDE */}
                <div className='flex-1'>
                    <h2 className='h2'>
                    Helping You Snag Your Dream Crib—No Stress, All Vibes!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod commodi repellat, et possimus libero sit nostrum similique eaque, consectetur veritatis rem, exercitationem fugit id officia voluptates dolorum quos? Ab.</p>
                    <div className='flex flex-col gap6 mt-5'>
                        <div className='flex gap-3'>
                            <FaScreenpal className='text-secondary'/>
                                <p>Virtual Property Tours and viewings</p>
                            
                            <FaUpDown className='text-secondary'/>
                                <p>Real-time market price updates</p>
                            <FaMap className='text-secondary'/>
                                <p>Interactive floor plans and maps</p>
                            
                            <FaMapMarkedAlt className='text-secondary'/>
                                <p>Access to off-market properties</p>
                            
                            <FaEnvelope
                            className='text-secondary'/>
                                <p>Direct messaging with agents and owners</p>
                            
                        </div>
                    </div>
                </div>
            </div>
{/* -----------SECOND CONTAINER---------------------- */}
            <div className='flex items-center flex-col lg:flex-row gap-12 mt-36'>
                 
                {/* INFO LEFT SIDE */}
                <div className='flex-1'>
                    <h2 className='h2'>
                    Making Your Real Estate Journey Smooth AF, One Step at a Time!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod commodi repellat, et possimus libero sit nostrum similique eaque, consectetur veritatis rem, exercitationem fugit id officia voluptates dolorum quos? Ab.</p>
                    <div className='flex flex-col gap-6 mt-5'>
                        <div className='flex gap-3'>
                            <FaList className='text-secondary'/>
                                <p>In-app scheduling for property viewings</p>
                            
                            <FaUpDown className='text-secondary'/>
                                <p>Real-time market price updates</p>
                            <FaInbox className='text-secondary'/>
                                <p>User-friendly interface for smooth navigation</p>
                            
                            <FaUser className='text-secondary'/>
                                <p>Detailed Agent and realtor profiles</p>
                            
                            <FaMapMarkedAlt
                            className='text-secondary'/>
                                <p>Access to off-market properties</p>
                            
                        </div>
                    </div>
                </div>
                {/* IMAGE -right side */}
                <div className='flex-1'>
                    <div className='relative flex justify-end'>
                        <img src={about2} alt="AboutImg" className='rounded-3xl' />
                        <span className='absolute top-8 right-8 bg-white px-2 rounded-full medium-14 '>Golden Coast</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About