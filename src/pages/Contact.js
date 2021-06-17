import React from 'react';

function Contact() {
    return (
  <div class="container content my-5 py-3">
    <div class="row">
      <section>
        <p class="h2 text-center">Contact</p>
        <br /> 
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label textcolor">Name</label>
            <input type="name" class="form-control" id="inputName" />
          </div>
          <div class="mb-3">
            <label for="inputEmail" class="form-label textcolor">Email Address</label>
            <input type="email" class="form-control" id="inputEmail" />
          </div>
          <div class="mb-3">
            <label for="inputMessage" class="form-label textcolor">Message</label>
            <textarea class="form-control" id="inputMessage" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
  </div>
)}

export default Contact;