document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("fanForm");
    const message = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const hero = document.getElementById("hero").value.trim();
            const universe = document.getElementById("universe").value;
            const team = document.getElementById("team").value;
            const comments = document.getElementById("comments").value.trim();

            if (!name || !email || !hero || !universe || !team) {
                alert("Please fill all required fields.");
                return;
            }

            const formData = {
                name: name,
                email: email,
                favoriteHero: hero,
                universe: universe,
                favoriteTeam: team,
                comments: comments
            };

            console.log("Submitted Form Data:", formData);

            const xhr = new XMLHttpRequest();

            xhr.open("GET", "submit.json", true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {

                    const response = JSON.parse(xhr.responseText);

                    message.style.display = "block";
                    message.innerText = response.message || "Form submitted successfully!";

                    form.reset();

                } else if (xhr.readyState === 4 && xhr.status !== 200) {
                    alert("Error submitting form. Please try again.");
                }
            };

            xhr.send();
        });
    }
});