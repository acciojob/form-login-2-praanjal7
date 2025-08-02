document.getElementById("submit").onclick = function () {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!fname || !lname || !contact || !email) {
    alert("Please fill all the fields.");
    return;
  }

  const message = "First Name: " + fname +
                  " Last Name: " + lname +
                  " Contact Number: " + contact +
                  " Email ID: " + email;

  alert(message);
};
