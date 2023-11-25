import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
// https://www.facebook.com/profile.php?id=61550255662761
// 01629167685
// https://www.linkedin.com/in/jannatul-ferdous-337019267/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR2kWiTISqm62vcQOOgLKAr4_B4C9JSYeyjxkmc-_dmOu1kpn0z5g8RB1no
const Contact = () => {
    return (
        <section className='content-container contact-section'>
            <div className='row row-cols-1 row-cols-xl-2 g-4'>
                <div className='col'>
                    <div className='contact-info'>
                        <div className='contact-info-text'>
                            <p className="unlock-text mb-2" style={{ display: 'inline-block' }}>CONTACT US</p>
                            <h2 className='fs-1 fw-medium my-4 line-height-medium'>Get In Touch With Marketer Emon</h2>
                            <p className='lead mb-5'>Connect with Marketer Mitu. Reach Out Today for Expert Guidance in Elevating Your Business. Contact Us to Unleash the Power of Strategic Marketing Strategies.</p>
                            <div className='social-contact row row-cols-1 row-cols-md-2 g-4'>
                                <div className='single-social-contact'>
                                    <a href="https://api.whatsapp.com/send?phone=01629167685" target='_blank' className='whatsapp-contact contact-icon'><FontAwesomeIcon icon={faWhatsapp} /></a>
                                    <div className='contact-link'>
                                        <h5>WhatsApp</h5>
                                        <a href="https://api.whatsapp.com/send?phone=01629167685" target='_blank'>01629167685</a>
                                    </div>
                                </div>
                                <div className='single-social-contact'>
                                    <a href="https://www.linkedin.com/in/jannatul-ferdous-337019267/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR2kWiTISqm62vcQOOgLKAr4_B4C9JSYeyjxkmc-_dmOu1kpn0z5g8RB1no" target='_blank' className='linkdin-contact contact-icon'><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <div className='contact-link'>
                                        <h5>Linkedin</h5>
                                        <a href="https://www.linkedin.com/in/jannatul-ferdous-337019267/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR2kWiTISqm62vcQOOgLKAr4_B4C9JSYeyjxkmc-_dmOu1kpn0z5g8RB1no" target='_blank'>linkedin.com/in/jannatul-ferdous</a>
                                    </div>
                                </div>
                                <div className='single-social-contact'>
                                    <a href="https://www.facebook.com/profile.php?id=61550255662761" target='_blank' className='facebook-contact contact-icon'><FontAwesomeIcon icon={faFacebook} /></a>
                                    <div className='contact-link'>
                                        <h5>Facebook</h5>
                                        <a href="https://www.facebook.com/profile.php?id=61550255662761" target='_blank'>facebook.com/jannatul-ferdous</a>
                                    </div>
                                </div>
                                <div className='single-social-contact'>
                                    <a href="mailto:jannatmitu@gmail.com" className='email-contact contact-icon'><FontAwesomeIcon icon={faEnvelope} /></a>
                                    <div className='contact-link'>
                                        <h5>Email</h5>
                                        <a href="mailto:jannatmitu@gmail.com">jannatmitu@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='contact-form'>
                        <form action="">
                            <input type="text" required placeholder='Your Name' />
                            <input type='email' required placeholder='Your Email' />
                            <textarea name="" id="" cols="30" rows="5" required placeholder='Your Message'></textarea>
                            <input type="submit" value={'Send Message'} className='contact-form-submit' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;