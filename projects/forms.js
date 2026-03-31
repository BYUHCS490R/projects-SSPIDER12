document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const Name = document.getElementById('name').value.trim();
    const Email = document.getElementById('email').value.trim();
    const Phone = document.getElementById('phone').value.trim(); 
    const Age = document.getElementById('age').value.trim();
    const Race = document.getElementById('race').value;
    const Password = document.getElementById('password').value.trim();
    const State = document.getElementById('state').value;
    const Gender = document.querySelector('input[name="gender"]:checked');


    if (!Name || !Email || !Password) {
        alert("You need a name, email, and password.");
        return;
    }

    if (!Phone) {
        alert("Please enter your phone number.");
        return;
    }

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(Phone)) {
        alert("Phone number must be in the format 123-456-7890.");
        return;
    }

    if (Password.length < 10) {
        alert("Password must be at least 10 characters long and contain special letters.");
        return;
    }

    if (!Age) {
        alert("Please enter your age.");
        return;
    }
    const ageNumber = parseInt(Age, 10);
    if (ageNumber < 1 || ageNumber > 120) {
        alert("Age must be between 1 and 120.");
        return;
    }

    if (!Race) {
        alert("Please select your race.");
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
        Phone: Phone, 
        Age: ageNumber,
        Race: Race,
        Password: Password,
        State: State,
        Gender: Gender.value
    };

    console.log("Form Data Submitted:", formData);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'submit.json', true); 

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);

            let mess = document.getElementById('mess');
            if (!mess) {
                mess = document.createElement('p');
                mess.id = 'mess';
                document.body.appendChild(mess);
            }
            mess.innerText = response.message;

            document.getElementById('myForm').reset();
            Array.from(document.getElementById('myForm').elements).forEach(el => el.disabled = true);

            alert("Form submitted successfully!");
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };

    xhr.send();
});