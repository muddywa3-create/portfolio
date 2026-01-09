emailjs.init("K6-mBgxngZJhMnCV0");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_qckjh36",
    "template_hmxu0rt",
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
