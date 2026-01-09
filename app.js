emailjs.init("PUBLIC_KEY_YAKO");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_qckjh36",   // <-- HII NDIO SAHIHI
    //"TEMPLATE_ID",
    "template_hmxu0rt",
    this
  ).then(
    function() {
      alert("Ujumbe umetumwa kikamilifu!");
    },
    function(error) {
      alert("Kuna shida kutuma ujumbe");
      console.log(error);
    }
  );
});
