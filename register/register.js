function createRegisterPage() {
  document.getElementById("register").innerHTML=`
  <div class="container contact-form">
            <div class="contact-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUlIQ7MJd09BL6OwcHO19YfgSHqW4ZfiZNg&usqp=CAU" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3 class="d-flex justify-content-center">Drop Us a Message</h3>
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
                        <div class="col-md-6">
                            <div class="form-group">
                                <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style="width: 43vw; height: 150px;"></textarea>
                            </div>
                        </div>
                        <br>
                        <div class="form-group d-flex justify-content-center">
                            <input onclick="sendEmail()" class="btn btn-dark text-white" type="submit" name="btnSubmit"  class="btnContact" value="Send Message" />
                        </div>
                    </div>
                </div>
            </form>
  `
}
createRegisterPage()


function sendEmail() {
  return `<a href="mailto:ebrhano@gmail.com"></a>`
}