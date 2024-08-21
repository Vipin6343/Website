
    document.addEventListener("DOMContentLoaded", function() {
        // Function to prompt for email
        function requestEmail() {
            try {
                var email = prompt("Please enter your email address:");
                if (email) {
                    alert("Thank you! We will contact you at " + email);
                    // Additional logic to handle the email can go here
                } else {
                    alert("You did not enter an email address.");
                }
            } catch (error) {
                console.error("An error occurred while requesting the email: ", error);
            }
        }

        // Ensure that the button exists before attaching the event listener
        var btn = document.getElementById("btn");
        if (btn) {
            btn.addEventListener("click", requestEmail);
        } else {
            console.error("Button with ID 'btn' not found.");
        }

        // Ensure that the Typed.js library is loaded before initializing
        if (typeof Typed !== 'undefined') {
            var typeData = new Typed(".role", {
                strings: [
                    "Full Stack Developer",
                    "Web Developer",
                    "UI-UX Designer",
                    "Backend Developer",
                    "Coder",
                ],
                loop: true,
                typeSpeed: 100,
                backSpeed: 80,
                backDelay: 1000,
            });
        } else {
            console.error("Typed.js library is not loaded.");
        }
    });

