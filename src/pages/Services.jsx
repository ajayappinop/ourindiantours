import React from 'react'
import News from '../assets/news-1.png';
import ServicesBanner from '../assets/services-banner.jpg';

function Services() {
        return (
                <div className='contactus'>
                        <div className='inner-banner'>
                                <img className='w-100' src={ServicesBanner} alt="" />
                        </div>
                        <section>
                             <div className='container'>
                              <h1 className='h3 mb-3 text-center'>Services</h1>
                                <h2 className='h6 mb-5 m-auto text-center w-md-75'>We serve guests as they desire to attain best of tours, travels, excursions, wildlife safaris, among other programmes like:</h2>
                                   <div className='row g-3'>
                                        <div className='col-xl-3 col-md-6 col-12'>
                                          <h4 className='h6 h-100 p-5 m-0 text-center rounded-xl card border-0'>*Booking hotels-resorts as per guests' choice </h4>
                                        </div>
                                        <div className='col-xl-3 col-md-6 col-12'>
                                          <h4 className='h6 h-100 p-5 m-0 text-center rounded-xl card border-0'>*Meal plan as desired</h4>
                                        </div>
                                        <div className='col-xl-3 col-md-6 col-12'>
                                          <h4 className='h6 h-100 p-5 m-0 text-center rounded-xl card border-0'>*Recasting an Itinerary as per their suggestions to meet new wild species or monuments</h4>
                                        </div>
                                        <div className='col-xl-3 col-md-6 col-12'>
                                          <h4 className='h6 h-100 p-5 m-0 text-center rounded-xl card border-0'>*Advance, if remitted, is never forfeited, adjusted in ways guests like to do</h4>
                                        </div>
                                        <div className='col-xl-3 col-md-6 col-12'>
                                          <h4 className='h6 h-100 p-5 m-0 text-center rounded-xl card border-0'>*International airlines bookings on knowing from guests</h4>
                                        </div>
                                        <div className='col-xl-3 col-md-6 col-12'>
                                          <h4 className='h6 h-100 p-5 m-0 text-center rounded-xl card border-0'>*Processing Visa, Passport</h4>
                                        </div>
                                        <div className='col-xl-3 col-md-6 col-12'>
                                          <h4 className='h6 h-100 p-5 m-0 text-center rounded-xl card border-0'>*Packages for travelling out of India, anywhere in world</h4>
                                        </div>
                                        <div className='col-xl-3 col-md-6 col-12'>
                                          <h4 className='h6 h-100 p-5 m-0 text-center rounded-xl card border-0'>*Organizing meetings with species/monuments experts while on tour, among others</h4>
                                        </div>
                                   </div>
                           </div>
                        </section>
                </div>
        )
}

export default Services