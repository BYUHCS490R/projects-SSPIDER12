document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("fanForm");
    const message = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const character = document.getElementById("character").value.trim();
            const arc = document.getElementById("arc").value;
            const comments = document.getElementById("comments").value.trim();

           
            if (!name || !email || !character || !arc) {
                alert("Please fill all required fields.");
                return;
            }

        
            const formData = {
                Name: name,
                Email: email,
                FavoriteCharacter: character,
                FavoriteArc: arc,
                Comments: comments
            };

            console.log("Form Data:", formData);

            
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json", true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {

                    const response = JSON.parse(xhr.responseText);

                    
                    form.reset();

                    
                    message.style.display = "block";
                    message.innerText = response.message;

                } else if (xhr.readyState === 4) {
                    alert("Error submitting form.");
                }
            };

            xhr.send();
        });
    }
});