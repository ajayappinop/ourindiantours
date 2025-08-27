import React from 'react'

import AboutBanner from '../assets/aboutbanner.jpg';
import GreatIndianBustard from '../assets/ex-situ-born-female-great-indian-bustard-at-sam-enclosure.jpg';
function About() {
  return (
    <div className='aboutus'>
      <div className='inner-banner'>
        <img className='w-100' src={AboutBanner} alt="(right to left) Sheera Yashprey, Laurie Marker, Peter Kaestner, Kimberley Kaestner, and Harsh Vardhan; Peter holds world record (10,002 bird species),our long associate" />

      </div>
      <section>
        <div className='container'>
          <h1 className='h3 mb-3 text-center'>About Us</h1>
          <p className='text-center col-lg-8 col-12 mb-5 pb-5 m-auto'>We have been engaged in on-field wildlife conservation work in India and have been operating species-specific tours for about 25 years. We are proud to possess several Testimonials from guests who generously wrote about their experiences across India (see Testimonial section).</p>
          <div className='row g-5'>
            <div className='col-lg-4 col-12'>
              <div className='content-sec'>
                <h2 className='h5 mt-lg-5 mt-5'>Relaxed flow</h2>
                <p>From our long experience in the field we know where rare and endangered species are found.  We aim to create a friendly and relaxed atmosphere to help guests feel at home. Personalized service is our standard practice.</p>
                <h2 className='h5 mt-lg-5 mt-5'>Welcome to appraise</h2>
                <p>Guests are welcome to visit such programmes to know better in a country like India where non-government conservation continues to be a challenge. Or like to seek details from us.</p>
                <h2 className='h5 mt-lg-5 mt-5'>Deep ecology</h2>
                <p>Meeting members of the conservation community (the Bishnoi) and having a walk after sunset to spot nocturnal species are the types of extras that make our tours so special. Our guests enjoy learning how local people lead sustainable life. So they inhale deep-ecology.</p>
              </div>
            </div>


            <div className='col-lg-4 col-12'>
              <div className='content-sec'>
                
               <h2 className='h5 mt-lg-5 mt-5'>Face to face</h2>
                <p>We have guests repeating tours with us. Our tours give you particularly special wildlife opportunities: such as encountering the rarest of India’s birds, the Great Indian Bustard; endemic birds of the spectacular Rann of Kutchh and balmy Western Ghats; and tigers in particularly successful tiger reserves (55 Tiger Project Reserves in India, so let us be selective).</p>
                <h2 className='h5 mt-lg-5 mt-5'>Ex situ breeding</h2>
                <p>Ex situ breeding of Great Indian Bustard, critically endangered species started in 2019 (Jaisalmer, India), we were pleading for it since 1980 when 1st International Symposium on Bustards was staged by us at Jaipur. Our ex situ breeding programme of House Sparrows has received popular support among citizens.</p>
              </div>
            </div>
                

            <div className='col-lg-4 col-12'>
              <div className='content-sec'>
                
                <h2 className='h5 mt-lg-5 mt-5'>Diversity</h2>
                <p>More than 1,300 bird species in India; about 220 bird species are winter migrants in areas you will tour: waders — 70 species, aquatic – 50 species, raptors – 30 species, cranes – 3 species, others — 65 species (Flycatchers, Warblers, Buntings, Finches, Chats, Wheat-eaters, Minivets, Pipits, Larks, Swallows, Sandgrouse, etc.). A few hundred for you!</p>
                <h2 className='h5 mt-lg-5 mt-5'>Conservation projects</h2>
                <p>Believing nature conservation is most ideal for self-survival, we run some conservation projects through own resources and support from guests: Bird-benefit project at Jaipur’s landscape, annual Indian Birding Fair (no entry fee), we work to improve the habitat of White-naped Tit (Nahargarh); we helped restore Man Sagar lake, and regularly hold Environmental Education Workshops for school teachers-students.</p>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  )
}

export default About