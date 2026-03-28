 document.getElementById('myForm').addEventListener('submit',function(event) {
        event.preventDefault();
        //alert("Form Submitted");

        const Name = document.getElementById('name').value;
        const Email = document.getElementById('email').value; 
        const Password = document.getElementById('password').value;
        const State = document.getElementById('state').value;

        if (!Name || !Email) {
            alert("You need a name and email.");
            return;;
    }
    const formData = {
        Name: Name,
        Email: Email,
        Password: Password,
    

    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'submit.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //documented.getElementById('response').textContent = response.message;
            document.getElementBYID("myform").innerHTML = '';
            document.getElementById('mess').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));
  });