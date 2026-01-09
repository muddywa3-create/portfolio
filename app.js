document.addEventListener("DOMContentLoaded", function () {

  
  emailjs.init("JJtIKar5d6D6HWLOk");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      //"SERVICE_ID",
      "service_ytvhlh9",
     // "TEMPLATE_ID",
     "tempelate_hmxu0rt",
      this
    ).then(
      function () {
        alert("Ujumbe umetumwa kikamilifu!");
        form.reset();
      },
      function (error) {
        alert("Kuna shida kutuma ujumbe");
        console.log(error);
      }
    );
  });

});
