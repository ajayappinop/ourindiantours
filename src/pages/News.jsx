import React from 'react'

import News from '../assets/news-1.png';
 import NewsBanner from '../assets/news-banner.jpg';
 

function Blog() {
  return (
    <div className='contactus'>
      <div className='inner-banner'>
          <img className='w-100' src={NewsBanner} alt="" />
      </div>
      <section>
      <div className='container'>
         <h1 className='h3 mb-5'>News</h1>
          
        <div className=' card p-5 rounded-xl'>
        <div className='row g-5'>
          <div className='col-xl-7 col-md-12'>
            <div className='news'>
            <h3 className='h5 mb-3'>Launch of <strong>My Head For A Tree</strong></h3>
          <p>Ourindiantours received a most unique opportunity to support formal launch of <strong>“My Head For A Tree”</strong> a book by award winning writer, Martin Goodman on 1 February 2025 at Jaipur Literature Festival. Here are some photographs of the launch, one of Martin with Manoj Vardhan, at the launch. The book is an “extraordinary story of the Bishnois, the world’s first Eco-Warriors.” Its Foreword is done by Peter Wohlleben, who wrote:</p>
          <p>“When I first heard about this book, I was electrified. There is a community in India who protect trees with their lives?...These must be my brothers and sisters in spirit, whose environmental stance is similar to my own…What an enormous contribution Martin Goodman offers by bringing this culture and religion close to us. This book, thrilling to the last page, fills a gap in the environmental debate. It can offer inspiration to a many readers who wish to concentrate on the truly important things in life….This is not about saving the trees so much as it is about saving ourselves, since the natural environment is a reflection of who we are.”</p>
<p>Peter Wohlleben is the author of <i>The Hidden Life of Trees.</i></p>
<p>Martin states: “The story of the Bishnoi is one of those ‘greatest stories never told’. Or at least very little told in English, and not that well known even in India….</p>
<p>Martin Goodman is an award winning author of twelve works of fiction and non-fiction, including Client Earth, an account of eco-lawyers saving the planet, <i>In Search of the Divine Mother, and On Sacred Mountain,</i> a spiritual biography of India. He is emeritus professor of creative writing at the University of Hull.</p>
            </div>
</div>

<div className='col-xl-5 col-md-12'>
    <img className='w-100 rounded-xl' src={News} alt="" />
</div>
      </div>
      </div>
      </div>
     </section>
    </div>
     
  )
}

export default Blog