import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="md:container form-area1">
            
            <form className="form-bg1" action="https://formspree.io/f/xzbkobwo" method="POST">

                <div className="form-group1">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"/>
                </div>

                <div className="form-group1">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" />
                </div>

                <div className="form-group1">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>

                <div className="form-group1">
                    <label htmlFor="massage">Massage</label>
                    <textarea className='text-black' name="massage" id="massage" cols={30} rows={10}></textarea>
                </div>

                <button className='sub-btn' type="submit">Submit</button>
            </form>
        <div id="status"></div>
      </div>
    </div>
  )
}

export default Contact
