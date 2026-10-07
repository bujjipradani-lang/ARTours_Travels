// =================================
// EXPLORE VIZAG BUTTON
// =================================

function explorePlaces() {

    document
        .getElementById("places")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// =================================
// TOURIST PLACE BUTTON
// =================================

function showPlace(link) {

    alert(
        "You selected: " +
        link +
        "\n\nAR Tours and Travels - Explore Vizag!"
    );
}


// =================================
// PACKAGE BUTTON
// =================================

function selectPackage(packageName) {

    alert(
        "Selected Package: " +
        packageName +
        "\n\nPlease submit the enquiry form to plan your trip."
    );

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// =================================
// CONTACT FORM
// =================================

const travelForm =
    document.getElementById("travelForm");


travelForm.addEventListener(
    "submit",
    function(event) {

        // Stop page refresh
        event.preventDefault();


        // Get form values
        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const date =
            document.getElementById("date").value;

        const message =
            document.getElementById("message").value.trim();

        const formMessage =
            document.getElementById("formMessage");


        // Check empty fields
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            date === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.style.color = "red";

            return;
        }


        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color = "red";

            return;
        }


        // Phone validation
        const phonePattern =
            /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            formMessage.textContent =
                "Please enter a valid 10-digit phone number.";

            formMessage.style.color = "red";

            return;
        }


        // Success message
        formMessage.textContent =
            "Thank you! Your travel enquiry has been submitted successfully.";

        formMessage.style.color = "green";


        // Clear form
        travelForm.reset();

    }
);


// =================================
// SIMPLE SCROLL EFFECT
// =================================

window.addEventListener(
    "scroll",
    function() {

        const header =
            document.querySelector("header");

        if (window.scrollY > 50) {

            header.style.backgroundColor =
                "#042b3c";

        } else {

            header.style.backgroundColor =
                "#063b52";
        }

    }
);
/* =========================================
   EXPERIENCE CARD ANIMATION
========================================= */

const experiences = document.querySelectorAll(".experience");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


experiences.forEach((card) => {

    observer.observe(card);

});


/* =========================================
   EXPLORE BUTTON
========================================= */

const buttons = document.querySelectorAll(".explore-btn");

buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const card = this.closest(".experience");

        const title = card.querySelector("h3").textContent;

        alert(
            `Explore ${title} experiences with AR Tours & Travels!`
        );

    });

});

/* =========================================
   VIZAG LOCATION LINKS
========================================= */

const locations = {

    rkbeach:
        "https://en.wikipedia.org/wiki/RK_Beach",

    kailasagiri:
        "https://en.wikipedia.org/wiki/Kailasagiri",

    rushikonda:
        "https://en.wikipedia.org/wiki/Rushikonda_Beach",

    araku:
        "https://en.wikipedia.org/wiki/Araku_Valley"

};


/* =========================================
   EXPLORE BUTTONS
========================================= */

const exploreButtons =
    document.querySelectorAll(".explore-btn");


exploreButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const locationName =
            this.getAttribute("data-location");

        const locationURL =
            locations[locationName];


        if (locationURL) {

            // Open Google Maps in a new tab
            window.open(
                locationURL,
                "_blank",
                "noopener,noreferrer"
            );

        } else {

            console.error(
                "Location URL not found."
            );

        }

    });

});

