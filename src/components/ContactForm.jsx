import React from 'react'

function ContactForm() {
  return (
    <div className='contact-form'>
        <h3 className='h4'>Welcome</h3>
        <form>
            <div className='form-group'>
                <input className='form-control' placeholder='Name*' type='text' />
            </div>
            <div className='form-group'>
                <input className='form-control' placeholder='Email*' type='email' />
            </div>
            <div className='form-group'>
                <input className='form-control' placeholder='Number' type='number' />
            </div>
            <div className='form-group'>
                <textarea rows='5' className='form-control' placeholder='Message*'></textarea>
            </div>
            <div className='form-group mb-0'>
                <button className='btn btn-primary' type='submit'>Send <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm