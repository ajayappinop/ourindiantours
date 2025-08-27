import React from 'react';

import RecessBetweenSafari from '../assets/recess-between-safari.jpg';
import ToursBanner from '../assets/toursbanner.jpg';
import TourRannofKutchh from '../assets/tour-rannof-kutchh.jpg';
import TourWesternGhatsBird from '../assets/tour-western-ghats-bird.jpg';
import TourTiger from '../assets/tour-tiger.jpg';
import TourGreatIndianBustard from '../assets/tour-great-indian-bustard.jpg';
import { Link } from 'react-router-dom';
 

function Tours() {
  return (
    <div className="tours">
      <div className="inner-banner">
        <img className="w-100" src={ToursBanner} alt="Mrs. Gould's Sunbird" />
         <h1 className='h2 text-center'>Tours</h1>
       </div>
      <section>
        <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6 col-md-12">
               
                <p> India has remarkable biodiversity: nearly 1,350 species of birds (across 26 orders and 114 families), with 5% being endemic. It also hosts 425 species of mammals—391 terrestrial and 31 marine species—with 45 endemics.</p>
                <p> <strong>Where to observe:</strong> Our tours provide opportunities to witness some of India's iconic species. We offer bespoke and tailor-made itineraries for each guest, designed according to their preferences. Each itinerary is built around the desired species to be observed—when, where, how, and with the guidance of an expert.</p>
                <p> <strong>Naturalist:</strong> A knowledgeable naturalist is assigned to each tour. Their expertise is habitat-specific, and they can identify species at a glance. Night safaris are occasionally organized to spot nocturnal species.</p>
                <p> <strong>At an easy pace:</strong> Our tours provide unique wildlife experiences—like encountering the rare Great Indian Bustard, discovering endemic birds of the Rann of Kutch and Western Ghats, or observing tigers in renowned reserves. The schedule is relaxed, with a focus on quality sightings.</p>
              </div>
              <div className="col-lg-6 col-md-12 ps-lg-5 ps-0">
                <img className="w-100 rounded-xl" src={RecessBetweenSafari} alt="Mrs. Gould's Sunbird" />
              </div>
            </div>
            <div className='row'>
                <div className="col-md-3 col-sm-12">
                  <div className="tour-card">
                    <Link to='/tours/greatindianbustardtour'>
                      <img className="w-100  rounded-xl" src={TourGreatIndianBustard} alt="Great Indian Bustard Tour" />
                    </Link>
                    <h2 className='h6 text-center p-3'>Great Indian Bustard Tour</h2>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="tour-card">
                    <Link to='/tours/rannofkutchh'>
                      <img className="w-100  rounded-xl" src={TourRannofKutchh} alt="Tour Rann of Kutchh" />
                    </Link>
                    <h2 className='h6 text-center p-3'>Rann of Kutchh Tour</h2>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="tour-card">
                    <Link to='/tours/tigerstour'>
                      <img className="w-100  rounded-xl" src={TourTiger} alt="Tiger Tour" />
                    </Link>
                    <h2 className='h6 text-center p-3'>Tiger Tour</h2>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="tour-card">
                    <Link to='/tours/westernghatsbirdtours'>
                      <img className="w-100  rounded-xl" src={TourWesternGhatsBird} alt="Tour Western Ghats Bird" />
                    </Link>
                    <h2 className='h6 text-center p-3'>Western Ghats Bird Tour</h2>
                  </div>
                </div>
          
          </div>
         </div>
      </section>
    </div>
  );
}

export default Tours;
