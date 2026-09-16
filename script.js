/* =====================================
   START PAGE
===================================== */

function goToPin() {

    window.location.href = "pin.html";

}


/* =====================================
   PIN
===================================== */

function checkPin() {

    const pin = document
        .getElementById("pinInput")
        .value
        .trim();

    const error = document.getElementById("error");

    if (pin === "1818") {

        window.location.href = "name.html";

    } else {

        error.textContent = "❌ Incorrect PIN";

    }

}


/* =====================================
   NAME
===================================== */

function checkName() {

    const input =
        document.getElementById("username");

    const name =
        input.value.trim().toLowerCase();

    const message =
        document.getElementById("message");

    if (name === "sharmika") {

        window.location.href = "gift.html";

    } else if (name === "") {

        message.textContent =
            "Please enter your name.";

    } else {

        message.textContent =
            "Please enter the correct name.";

    }

}


/* =====================================
   GIFT
===================================== */

function openGift() {

    window.location.href = "birthday.html";

}


/* =====================================
   BIRTHDAY CONFETTI
===================================== */

function birthdayConfetti() {

    if (typeof confetti !== "function") {
        return;
    }


    // Main burst

    confetti({

        particleCount: 250,

        spread: 160,

        startVelocity: 45,

        origin: {
            x: 0.5,
            y: 0.6
        }

    });


    // Left burst

    setTimeout(function () {

        confetti({

            particleCount: 100,

            angle: 60,

            spread: 70,

            origin: {
                x: 0,
                y: 0.65
            }

        });

    }, 150);


    // Right burst

    setTimeout(function () {

        confetti({

            particleCount: 100,

            angle: 120,

            spread: 70,

            origin: {
                x: 1,
                y: 0.65
            }

        });

    }, 150);

}


/* =====================================
   BIRTHDAY PAGE
===================================== */

function startBirthdayPage() {

    birthdayConfetti();

}


/* =====================================
   MEMORIES
===================================== */

function goToMemories() {

    window.location.href = "memories.html";

}


/* =====================================
   PAGE DETECTION
===================================== */

window.addEventListener("load", function () {

    const birthdayPage =
        document.querySelector(".birthday-page");

    if (birthdayPage) {

        startBirthdayPage();

    }

});