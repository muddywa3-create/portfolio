


  document.addEventListener("DOMContentLoaded", function () {
    alert("DOM READY");
  
    const form = document.getElementById("contact-form");
    console.log(form);
  
    if (!form) {
      alert("FORM HAIPO");
      return;
    }
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("SUBMIT INAFANYA KAZI");
    });
  });
  
  