import React from 'react'
import ContactBanner from '../assets/contactbanner.jpg';
import JeepSafari from '../assets/jeep-safari.jpg';
import ContactForm from '../components/ContactForm';
function Contact() {
return (
<div className='contactus'>
   <div className='inner-banner'>
      <img className='w-100' src={ContactBanner} alt="Himalayan Vulture" />
   </div>
   <section>
      <div className='container'>
          
            <h1 className='h3 mb-5'>Contact Us</h1>
          
         <div className='row g-5'>
            <div className='col-lg-4 col-12'>
               <img className='w-100 rounded-xl' src={JeepSafari} alt="Jeep Safari" />
            </div>
            <div className='col-lg-4 col-12'>
               <div className='content-sec px-lg-4'>
                  <h2 className='h5 mb-3'>Thank you for browsing this web site.</h2>
                  <p>Some sample itineraries are outlined. Details of habitat, species, National Parks, etc., are also briefly mentioned.</p>
                  <p>Let us know your choice of species/destinations. We will offer you a bespoke tour. Itinerary will be scripted for you as per your options.</p>
                  <p>Advance is not forfeited and Itinerary can also be changed during tour. Each guest will receive a new tour plan for him/her.</p>
                  <p>Grateful thanks to the experts who provided their stunning photographs: Dr. G.S. Bhardwaj, Surendra Singh Chouhan, Dharmendra Khandal, Durga Lal Verma, Radheshyam Pemani Bishnoi, Naveen Kumar Singh, Roy and Mridul Vaibhav. Approved by Department of Tourism and Member, Indian Association of Tour Operators (IATO).</p>
                  <div className='content-sec mb-5'>
                     <h3 className='h6'>Manoj Vardhan</h3>
                     <p><a className='text-decoration-none primary-text' href='#'>Ourindiantours.com</a></p>
                  </div>
                </div>
            </div>
            <div className='col-lg-4 col-12'>
              <div className='contact-detail mb-5'>
                     <p className='mb-4'><i class="me-1 fa-solid fa-location-dot"></i> Address : C-158A, Dayanand Marg, Tilak Nagar, Jaipur 302 004, India</p>
                     <p className='mb-4'><i class="me-1 fa-solid fa-phone-volume"></i> Tel : (00.91.141) 356 1057 & Mob : (00.91) 98290 62445</p>
                     <p><i class="me-1 fa-solid fa-paper-plane"></i> Email : manojvardhan970@yahoo.in</p>
                  </div>
                <ContactForm />
            </div>
         </div>
      </div>
   </section>
</div>
)
}
export default Contact