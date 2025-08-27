import React from 'react'
import HeroSec from '../components/HeroSec'
import FrontAbout from '../assets/frontabout.png';
import GreatIndianBustards from '../assets/great-indian-bustards.jpg';
import TigersGoldenJubileeTourInIndia from '../assets/tigers-golden-jubilee-tour-in-india.jpg';
import RannOfKutchBirdsAndMammals from '../assets/rann-of-kutch-birds-and-mammals.jpg';
import WesternGhatsBirdingTourInIndia from '../assets/western-ghats-birding-tour-in-india.jpg'; 
import ChangeableHawkEagle from '../assets/changeable-hawk-eagle.jpg';
import LogoLarge from '../assets/logo-lg.png';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <HeroSec/>
        <div className='container py-15'>
            <div className='row g-5 align-items-center justify-content-between'>
                <div className='col-lg-6 pe-md-5'>
                    <div className='img-sec'>
                        <img src={FrontAbout} alt='About Us' className='w-100 rounded-xl' />
                    </div>
                </div>
                <div className='col-lg-6 ps-lg-md-5'>
                    <div className='content-sec'>
                        <h2 className='h3'>About Us</h2>
                        <p className='my-5'>We have been deeply engaged in on-field wildlife conservation for nearly four decades and have led species-specific tours for about 25 years. Recognized by India’s Department of Tourism and proud members of IATO, we know exactly where rare and endangered species can be found — and how to protect them.</p>
                        <Link className='readmore' to='/About'><i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='brief-information'>
            <div className='container'>
                <div className='row g-4'>
                    <div className='col-lg-5 col-sm-12'>
                        <div className='information-block'>
                            <img src={GreatIndianBustards} alt='Great Indian Bustards and the Thar Desert' className='w-100 rounded-xl' />
                            <div className='detail'>
                                <h2 className='h4'>Great Indian Bustards and the Thar Desert</h2>
                                <p>The Thar Desert is home to the last surviving population of Great Indian Bustards. With fewer than 115 birds left in the wild.</p>
                               <Link className='readmore' to='/tours/greatindianbustardtour'><i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 col-sm-12'>
                        <div className='information-block'>
                            <img src={TigersGoldenJubileeTourInIndia} alt='Tigers’ Golden Jubilee Tour' className='w-100 rounded-xl' />
                            <div className='detail'>
                                <h2 className='h4'>Tigers’ Golden Jubilee Tour</h2>
                                <p>The Thar Desert is home to the last surviving population of Great Indian Bustards. With fewer than 115 birds left in the wild.</p>
                                 <Link className='readmore' to='/tours/tigerstour'><i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 col-sm-12'>
                        <div className='information-block'>
                            <img src={RannOfKutchBirdsAndMammals} alt='Rann of Kutch Birds and Mammals' className='w-100 rounded-xl' />
                            <div className='detail'>
                                <h2 className='h4'>Rann of Kutch Birds and Mammals</h2>
                                <p>The Thar Desert is home to the last surviving population of Great Indian Bustards. With fewer than 115 birds left in the wild.</p>
                                 <Link className='readmore' to='/tours/rannofkutchh'><i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-sm-12'>
                        <div className='information-block'>
                            <img src={WesternGhatsBirdingTourInIndia} alt='Western Ghats Birding Tour in India' className='w-100 rounded-xl' />
                            <div className='detail'>
                                <h2 className='h4'>Western Ghats Birding Tour in India</h2>
                                <p>The Thar Desert is home to the last surviving population of Great Indian Bustards. With fewer than 115 birds left in the wild.</p>
                                 <Link className='readmore' to='/tours/westernghatsbirdtours'><i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='homecontent'>
            <div className='container'>
                <div className='row align-items-center mb-5'>
                    <div className='col-lg-6 col-12'>
                        <div className='content-sec'>
                            <h3 className='h4 mb-5'>Wildlife tourism offers limitless ease, comfort and value-added experiences</h3>
                            <p className='mb-5'><strong>UNWTWO :</strong> United National World Tourism Organization (UNWTO) points out,  “wildlife tourism” enhances  the quality of human capital and enables it to become “sustainable tourism.” Wildlife is not only an essential element of the world heritage but also a major asset for many countries, particularly for those where tourism constitutes a priority and a major component of their GDP. Like India, Nepal, Sri Lanka and Bhutan.</p>
                            <p className='mb-5'><strong>7% wild species:</strong> Wildlife tourism refers to the observation and interaction with local animal and plant life in their natural habitats. About 7% of world tourism relates to wildlife tourism, a segment growing annually at about 3%.</p>
                            <p className='mb-5'><strong>91% jobs:</strong> A WWF report shows that 93% of all natural heritage sites support recreation and tourism and 91% of them provide jobs.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='img-sec ps-lg-5'>
                            <img src={ChangeableHawkEagle} alt='Changeable Hawk Eagle' className='w-100' />
                        </div>
                    </div>
                </div>
                <div className='row pt-5'>
                    <div className='col-lg-6 col-12'>
                        <div className='content-sec pe-5'>
                            <h3 className='h4 mb-4'>What We Offer</h3>
                            <p className='mb-5'>Ourindiantours.com is a continuing process over the years to bring visitors close to wild species and their stake-holder community throughout duration of tour it administers. This community bears maximum pressure from wild species and receives the least benefits from forests, forest department’s working, government policies, etc. We enrol such local persons, train them, offer binoculars and try best to ensure they receive a fair share from proceeds of tourism. We shall send you their details, let us know.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='content-sec ps-lg-5'>
                            <h3 className='h4 mb-4'>Fair-play</h3>
                            <p className='mb-5'>We have been organizing Indian Birding Fair since 1997 at Man Sagar lake, Jaipur. It is our social-responsibility to give back to society what we receive through tourism.  It is a volunteer-led event and at no entry fee. RSPB and OPTICRON gave us used binoculars which we passed over to Nature Guides, Forest Guards, etc. We can offer you names of recipients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='home-contact'>
            <div className='container'>
                <div className='row justify-content-between align-items-center'>
                    <div className='col-lg-6 col-12'>
                        <div className='content-sec mb-5 mb-lg-0'>
                            <h2 className='h3'>Manoj Vardhan</h2>
                            <p className='my-4'>Let us join hands together to enhance nature-equity and let us know how best to help you. Best wishes.</p>
                            <p className='mb-4'><i class="me-3 fa-solid fa-location-dot"></i> Address : C-158A, Dayanand Marg, Tilak Nagar, Jaipur 302 004, India</p>
                            <p className='mb-4'><i class="me-3 fa-solid fa-phone-volume"></i> Tel : (00.91.141) 3561057 & Mob. (00.91) 9829062445</p>
                            <p><i class="me-3 fa-solid fa-paper-plane"></i> Email : manojvardhan970@yahoo.in</p>
                            <img src={LogoLarge} className='mt-5 large-logo' alt="Our Indian Tours Logo" />
                        </div>
                    </div>
                    <div className='col-lg-5 col-12 ps-lg-5'>
                            <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home