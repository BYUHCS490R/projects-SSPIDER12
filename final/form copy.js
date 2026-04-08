 document.getElementById('myForm').addEventListener('submit',function(event) {
        event.preventDefault();
        //alert("Form Submitted");

        const Name = document.getElementById('name').value;
        const Email = document.getElementById('email').value; 
        const Password = document.getElementById('password').value;
        const State = document.getElementById('state').value;
        const Gender = document.querySelector('input[name="gender"]:checked');

        if (!Name || !Email || !Password) {
            alert("You need a name and email, and password.");
            return;       
    }
        if (Password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
    }
        if (!State) {
            alert("Please select a state.");
            return;
    }

        if (!Gender) {
            alert("Please select a gender.");
            return;
    }   

    const formData = {
        Name: Name,
        Email: Email,
        Password: Password,
        State: State,
        Gender: Gender.value,
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'submit.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //documented.getElementById('response').textContent = response.message;
            document.getElementById("myForm").reset();
            document.getElementById('mess').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send();
  });