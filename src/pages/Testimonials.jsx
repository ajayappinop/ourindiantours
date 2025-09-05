import React from 'react';
 
import TestimonialWebBanner from '../assets/testimonialsbanner.jpg';
import TestimonialMobBanner from '../assets/testimonials-mob.jpg';

import Roybirdingindia from '../assets/roy-birding-india.jpg';
import EdBirding from '../assets/ed-birding.jpg';
import BirdingLake from '../assets/birding-lake.jpg';
import HarryAndJackieFromScotland from '../assets/harry-and-jackie-from-scotland.jpg';
import SatyabhanAndManojVardhan from '../assets/satyabhan-singh-receiving-an-opticorn-bin-from-manoj-vardhan.jpg';
import GeorgeArchibald from '../assets/george-archibald.jpg';
import EdMcCreaAndGSbhardwaj from '../assets/ed-mcCrea-in-thar-desert-with-gs-bhardwaj-now-wii-director.jpg';
import DeepEcologyBishnois from '../assets/deep-ecology-bishnois.jpg';

const PDF_BASE = "/testimonials/";


function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='inner-banner'>
       <picture>
          <source media="(max-width: 768px)" srcSet={TestimonialMobBanner} />
          <img className='w-100' src={TestimonialWebBanner} alt="Banner" />
        </picture>
      </div>
      <section>
        <div className='container'>
          <h1 className='h3 mb-5'>Testimonials</h1>
          <div className='row'>
            <div className='col-lg-8 col-6'>
              <p>Grateful thanks to the Guests who kindly send in their Testimonials to Ourindiantours.com (previous name was VIGT/IGT). </p>
              <p>Each narrative is a detailed and illustrative essay on wild species, where observed, when, how many numbers, and, as they stated, at ease.</p>
              <p>All owing to our colleagues in the field.</p>
              <p>Only a few Testimonials are being presented here.</p>
              <div className='testimonial-item'>
                <div className='row row-reverse g-5'>
                   <div className='comment'>
                      <img className="w-100 rounded-xl float-right" src={Roybirdingindia} alt="Roy Birding India" />
                      <p>“In 1998 I decided to take a sabbatical from work, with my wife and 2 younger children , and consulted a friend, who I knew had spent many years Bird watching throughout India, for advice.</p>
                      <p>“He said immediately ‘Harsh Vardhan in Jaipur ‘…we got in touch by fax and ‘phone and Harsh organised a superb trip zigzagging across Northern India , including “the Golden Triangle ” , Bandavgargh and ending up in Varanasi . “We were provided cars, drivers, guides and excellent Hotels and places to stay including visits to tribal areas, bird and animal sanctuaries. As we enjoyed our trip so much, this company organised another long trip to Southern and Central India (looked after by Manoj Vardhan) which again was absolutely excellent ….since then we have recommended many friends to these Indian hosts and will continue to do so.”</p>
                      <div className='writer'>John Playfair <span> Moreton in Marsh, UK </span></div>
                    </div>
                </div>
              </div>
            
            <div className='testimonial-item'>
            
                  <div className='comment'>
                    <img className="w-100 rounded-xl float-right" src={EdBirding} alt="Ed J. McCrea having good time wth birders" />
                    <p>“As first-time visitors to India, we were captivated by the brilliant colors, artistic creativity, friendly people, and delicious food. The main purpose of our trip was to participate in the International Workshop on Environmental Education and the 7th Indian Birding Fair, which were both held in Jaipur.</p>
                    <p>These two events were meticulously planned and executed by our host, Harsh Vardhan, who scheduled trips for us to Keoladeo National Park and Ranthambhor National Park. We eagerly looked forward to seeing lots of migratory water birds and perhaps at least one of India’s national animal — the magnificent tiger. As biologists with the U. S. Fish and Wildlife Service, we were also looking forward to learning about the plants and wildlife of these protected areas and the management issues that affected the parks’ resources. Everyone we met in Jaipur assured us that the visits would be spectacular.</p>
                    <p>“Our visit to Keoladeo and Ranthambhor National Parks was comparable to some of the best wildlife viewing experiences we have had anywhere in the world. Through our positions with the U. S. Fish and Wildlife Service, and as hobbyist travelers, we have had numerous opportunities to visit protected areas across the Americas and in Asia.</p>
                    <p>These travel experiences have enhanced our knowledge about and changed our outlook on globally significant protected areas. Certainly both Keoladeo and Ranthambhor National Parks deserve the continued attention of the global community. After visiting India for the first time, we are anxious to return and learn more about its natural and cultural history. The parks and people of India have so much to offer, and we will encourage our friends and acquaintances to overcome their fears of political unrest to take a step into the unfamiliar.</p>
                    <p>We hope the marketing of India’s wildlife, through a variety of nongovernmental organizations and tourist companies, could help to boost tourism in the parks, increase revenue throughout India, and provide additional jobs to local villages outside of the parks.”</p>
                    <div className='writer'>Brad Andres and Heather Johnson <span> Lakewood, CO, USA</span></div>
                  </div>
               
            </div>
            <div className='testimonial-item'>
              
                  <div className='comment'>
                    <img className="w-100 rounded-xl float-right" src={BirdingLake} alt="Guests birding at a lake" />
                    <p>“We just booked our flight to New Delhi for our first trip to India! We had a wonderful greeting at the airport where we were met by Manoj with the full tour details for our trip exactly as we had requested. It was beautifully presented in a colourful folder and he had a huge bunch of flowers to welcome us.</p>
                    <p>“Everything ran efficiently – we were always accompanied by knowledgeable guides and well looked after. Ranthambhor – hotel had spacious gardens full of birds. Friendly staff, excellent food. On the first game drive saw our first tiger. The birds at Bharatpur were so numerous we lost count! Bachu Singh is an amazing guide who knows all the names of birds, flowers and trees. We were privileged to visit a local village and take tea with a family. “The Tiger Lodge at Kanha is a peaceful, wonderful place where the hospitality and food are unsurpassed. The game drives to see tigers were well ordered and relaxed. Many other animals and more birds seen. The Tiger Lodge at Bandhavgarh was busier and the game drives were more hectic. We saw tigers on every trip out and the highlight was on elephant back, when we followed a tigress down a ravine to her cave where she had two cubs.</p>
                    <p>“We had hoped to see tigers but saw 23 different tigers in the 3 reserves – wow ! The whole trip was spectacular – all the local people were wonderful, friendly and kind. We even managed visits to the Taj Mahal at dawn and dusk.”</p>
                    <div className='writer'>Tom and Joan Birch <span> Sorrel Close, Isham, Kettering, UK</span></div>
                 
               
              </div>
            </div>

            <div className='testimonial-item'>
              
                  <div className='comment'>
                    <img className="w-100 rounded-xl float-right" src={HarryAndJackieFromScotland} alt="Harry and Jackie from Scotland" />
                    <p>“We have travelled to India many times and apart from the first trip they have all been organised by this company led by Manoj Vardhan and Harsh. “Being closely associated with the conservation of Indian wild life these hosts were able to organise our visits to suite our needs perfectly, consequently we have had wonderful sightings of Tigers and numerous other animals and birds on our trips to India. This close association also enabled us the benefit of the best guides available in the field.”We couldn’t think of any future visits to the sub-continent without the help and advice of Harsh and Manoj, who are just as comfortable organising cultural as well as wild life tours.</p>
                    <div className='writer'>Derek & Karen Bryant <span> Tunbridge Wells, U.K.</span></div>
                  </div>
               
            </div>


            <div className='testimonial-item'>
             
                  <div className='comment'>
                    <img className="w-100 rounded-xl float-right" src={SatyabhanAndManojVardhan} alt="Satyabhan Singh receiving an opticorn bin from Manoj Vardhan" />
                    <p>“We have travelled to India many times and apart from the first trip they have all been organised by this company led by Manoj Vardhan and Harsh. “Being closely associated with the conservation of Indian wild life these hosts were able to organise our visits to suite our needs perfectly, consequently we have had wonderful sightings of Tigers and numerous other animals and birds on our trips to India. This close association also enabled us the benefit of the best guides available in the field.”We couldn’t think of any future visits to the sub-continent without the help and advice of Harsh and Manoj, who are just as comfortable organising cultural as well as wild life tours.</p>
                    <div className='writer'>Dr. Laurie Marker and Dr. Shira Yashphe </div>
                  </div>
               
            </div>

            <div className='testimonial-item'>
              
                  <div className='comment'>
                    <img className="w-100 rounded-xl float-right" src={GeorgeArchibald} alt="George Archibald" />
                    <p>It was a joy to bring members of the Board of Directors of ICF to India to experience the Demoiselle Cranes at Khichan and the great variety of birds at Keoladeo National Park.</p>
                    <p>Rajasthan is a hot spot for wildlife, especially the tigers at Ranthambhore National Park. VIGT can bring you there with comfort and safety.</p>
                    <div className='writer'>George Archibald </div>
                  </div>
                
            </div>

            <div className='testimonial-item'>
             
                  <div className='comment'>
                    <img className="w-100 rounded-xl float-right" src={EdMcCreaAndGSbhardwaj} alt="ed mcCrea in thar desert with gs bhardwaj now wii director" />
                    <p>The logistical challenges of travelling through India are not to be underestimated. I find that VIGT services are excellent in helping to put together a personal itinerary exactly to your requirements. With local knowledge and contacts VIGT are able to provide access that you simply couldn’t achieve on your own.</p>
                    <div className='writer'>Bill Coaster </div>
                  </div>
               
            </div>

            <div className='testimonial-item'>
              
                  <div className='comment'>
                    <img className="w-100 rounded-xl float-right" src={DeepEcologyBishnois} alt="Deep Ecology Bishnois" />
                    <p>I received wonderful support from Manoj for my two weeks in Rajasthan. This ranged from finding tickets for sold-out train journeys, to linking me with guides who show real love for the natural world. My main wish was to see the Great Indian Bustard. I thought these magnificent birds would be elusive, but in my first half hour in the desert I was shown a group of five.</p>
                    <div className='writer'>Martin Goodman </div>
                  </div>
                 
            </div>


          </div>
          <div className='col-lg-4 col-6'>
            <div className='testimonials-list'>
              <ul>
                <li><a target="_blank" href={`${PDF_BASE}Report-John-Wright.pdf`} title="Report John Wright">Report John Wright</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Report-Nickys-feedback-to-IGT-website.pdf`} title="Report Nickys feedback to IGT website">Report Nickys feedback to IGT website</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Report-Wader-Quest.pdf`} title="Report Wader Quest">Report Wader Quest</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Robs-India-Report-March_2013.pdf`} title="Robs India Report March 2013">Robs India Report March 2013</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Roy-Jane-Trip-Report.pdf`} title="Roy & Jane Trip Report">Roy & Jane Trip Report</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Sri-Lanka-Report-by-Stephen-Dean-2017.odt`} title="Sri Lanka Report by Stephen Dean 2017">Sri Lanka Report by Stephen Dean 2017</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Trip-report-Rajasthan-December-05.pdf`} title="Ian Barthorpe Trip Report">Ian Barthorpe Trip Report</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Mike-Box-Tour-Report-2015.doc`} title="Mike Box Tour Report 2015">Mike Box Tour Report 2015</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Dave-Anne-Tour-Report.pdf`} title="Dave Anne Tour Report">Dave Anne Tour Report</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Trip-report-Rajasthan-December-05.pdf`} title="Trip report Rajasthan December 05">Trip report Rajasthan December 05</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Bird-Trip-Report-by-Rob-Oates.pdf`} title="Bird Trip Report by Rob Oates">Bird Trip Report by Rob Oates</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Robin-Glenda-India-Tour-Report.pdf`} title="Robin Glenda India Tour Report">Robin Glenda India Tour Report</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Gujarat-report-by-Stephen-M-Dean-2015.doc`} title="Gujarat Report by Stephen M Dean 2015">Gujarat Report by Stephen M Dean 2015</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Boras-report.docx`} title="Bora’s report">Bora’s report</a></li>
                <li><a target="_blank" href={`${PDF_BASE}Susan-from-USA-India-Report-2014.docx`} title="Susan from USA, India Report 2014">Susan from USA, India Report 2014</a></li>
              </ul>
            </div>
          </div>
        </div>
 </div>
      </section>
    </div >
  )
}

export default Testimonials