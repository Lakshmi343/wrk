import React from 'react'

const Contact = () => {
  return (
    <>
    <div id="contact">
  <h1 class="me">Contact me</h1>
        <div class="container">
            <div class="row">
              
                
                </div>
                <div class="contact-right">
                    <form>
                    Name:  <input type="text" name="Name" placeholder="Your Name" required></input>
                    Email:    <input type="email" name="Email" placeholder="Your Email" required></input>
                    Message:    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit" class="btn btn3">submit</button>
                    </form>
              </div> </div>
        </div>
        </>
  )
}

export default Contact