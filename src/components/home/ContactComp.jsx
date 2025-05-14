const ContactComp = () =>{
    return(
        <>
        <section className="contact-section" id="contact-section">
            <div className="contact-container">
                <div className="contactInfo">
                    <div>
                        <h2>Kontak Kami</h2>
                        <ul className="info">
                            <li>
                                <span><img src="./assets/images/icon/location.png" alt="" /></span>
                                <span>Jl. Kemang, Pasir Putih, <br />
                                Kecamatan. Sawangan, Kota Depok, 
                                <br />Jawa Barat 16519
                                </span>
                            </li>
                            <li>
                                <span><img src="./assets/images/icon/mail.png" alt="" /></span>
                                <span>iysa.olympiad@gmail.com</span>
                            </li>
                            <li>
                                <span><img src="./assets/images/icon/call.png" alt="" /></span>
                                <span>+6283870026877</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="sci">
                        <li><a href="https://www.facebook.com/profile.php?id=100063979907207" target="_blank"><img src="./assets/images/icon/1.png" alt="" /></a></li>
                        <li><a href="https://www.instagram.com/nymo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><img src="./assets/images/icon/2.png" alt="" /></a></li>
                        <li><a href="https://www.youtube.com/@IYSAOfficial" target="_blank"><img src="./assets/images/icon/3.png" alt="" /></a></li>
                        <li><a href="https://www.tiktok.com/@iysa.official" target="_blank"><img src="./assets/images/icon/4.png" alt="" /></a></li>
                        <li><a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target="_blank"><img src="./assets/images/icon/5.png" alt="" /></a></li>

                        {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fab fa-tiktok"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li> */}
                    </ul>
                </div>

                <div className="contactForm">
                    <h2>Hubungi Kami</h2>
                    <form action="https://formspree.io/f/xpzvjoly" method="POST">
                    <div className="formBox">
                        
                        <div className="inputBox w50">
                            <input type="text" name="name" required/>
                            <span>Nama</span>
                        </div>
                        
                        <div className="inputBox w50">
                            <input type="email" name="email" required/>
                            <span>Email</span>
                        </div>
                       
                        <div className="inputBox w100">
                            <textarea name="message" required></textarea>
                            <span>Pesan</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value={"Kirim"}/>
                        </div>
                        
                    </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContactComp