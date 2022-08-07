function createRegisterPage() {
  document.getElementById("register").innerHTML=`
  <div class="container contact-form">
            <div class="contact-image d-flex justify-content-center">
                <img id="jordan" src="../imges/LOGO/UIB-logos.jpeg" alt="rocket_contact"/>
            </div>
            <div>
                <h3 class="d-flex justify-content-center">Drop Us a Message</h3>
                <br> 
                <span class="d-flex justify-content-center">
                <small>*If you want to subscribe let us know!</small>
                </span>
               <div class="row d-flex justify-content-center">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <br>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <br>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <br>
                        <div class="col-md-12">
                            <div class="form-group justify-content-center d-flex w-100 ">
                                <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style="width: 43vw; height: 150px;"></textarea>
                            </div>
                        </div>
                        <br>
                        <div class="form-group d-flex justify-content-center mb-5">
                        <a href="mailto:name@email.com">  <input class="btn btn-dark text-white" type="submit" name="btnSubmit"  class="btnContact" value="Send Message" /></a>
                        </div>
                    </div>
                </div>
            </div>
  `
}
createRegisterPage()

