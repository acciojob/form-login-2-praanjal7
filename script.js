function submitForm() {
            const form = document.getElementById('myForm');
            const firstName = form.elements['First Name'].value;
            const lastName = form.elements['Last Name'].value;
            const phoneNumber = form.elements['Phone Number'].value;
            const email = form.elements['Email ID'].value;
            
            const message = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${email}`;
            alert(message);
        }