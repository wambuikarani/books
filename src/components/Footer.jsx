import React from 'react';

function Footer() {
  return (
    <>
      <section className="row bg-info py-4">
        {/* About Us */}
        <div className="col-md-4 text-center text-light">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aut.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate nesciunt molestias
            similique odit magnam ratione reiciendis quas aspernatur atque laudantium eius, iste ipsa!
            Repudiandae laboriosam similique fuga quo voluptate.
          </p>
        </div>

        {/* Contact Us */}
        <div className="col-md-4 text-center text-light">
          <h3>Contact Us</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mb-2"
              required
            />
            <textarea
              placeholder="Leave a comment"
              className="form-control mb-2"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="btn btn-outline-light">
              Send Message
            </button>
          </form>
        </div>

        {/* Stay Connected */}
        <div className="col-md-4 text-center text-light">
          <h3>Stay Connected</h3>
          <div className="mb-3">
            <img src="assets/fb.png" alt="Facebook" width="32" className="mx-1" />
            <img src="assets/ig.jpeg" alt="Instagram" width="32" className="mx-1" />
            <img src="assets/twitter.png" alt="Twitter" width="32" className="mx-1" />
          </div>
          <p className="text-dark text-start px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, placeat earum quae quod
            consequuntur nemo eligendi explicabo. Eligendi excepturi et obcaecati temporibus nisi veniam.
            Suscipit amet aliquid modi sunt adipisci!
          </p>
        </div>
      </section>

      <section className="row">
        <div className="col-md-12 bg-dark text-center text-light">
          <p>Developed by Grace Karani. &copy; 2025. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
