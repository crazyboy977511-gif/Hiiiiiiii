/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    }, 3000);

});


/* =========================
   BIRTHDAY WISHES
========================= */

const wishes = [

    {
        emoji: "🎂",

        title: "Happy Birthday! 🎉",

        text:
        "Today is your special day! I hope it is filled with happiness, laughter, beautiful surprises and unforgettable memories."
    },

    {
        emoji: "🌸",

        title: "Keep Smiling",

        text:
        "Your smile makes everything feel brighter. I hope you always have countless reasons to smile."
    },

    {
        emoji: "✨",

        title: "Follow Your Dreams",

        text:
        "May every dream you have slowly turn into reality. Keep believing in yourself and never stop dreaming."
    },

    {
        emoji: "💖",

        title: "You Are Special",

        text:
        "Never forget how amazing and special you are. Stay confident, stay happy and always be yourself."
    },

    {
        emoji: "🎉",

        title: "A New Adventure Begins",

        text:
        "Another beautiful year begins today. I hope this year brings you exciting adventures, success and countless happy moments."
    }

];


let currentWish = 0;


/* =========================
   START
========================= */

function startSurprise() {

    showPage("wishPage");

    updateWish();

    createConfetti();

}


/* =========================
   UPDATE WISH
========================= */

function updateWish() {

    const wish = wishes[currentWish];


    document
        .getElementById("wishEmoji")
        .textContent = wish.emoji;


    document
        .getElementById("wishTitle")
        .textContent = wish.title;


    typeWriter(
        wish.text,
        document.getElementById("wishText")
    );


    document
        .getElementById("current")
        .textContent = currentWish + 1;


    document
        .getElementById("total")
        .textContent = wishes.length;


    const progress =

        ((currentWish + 1) /
        wishes.length) * 100;


    document
        .getElementById("progressBar")
        .style.width = progress + "%";

}


/* =========================
   TYPEWRITER
========================= */

let typingTimer;


function typeWriter(text, element) {

    clearInterval(typingTimer);

    element.textContent = "";

    let i = 0;


    typingTimer = setInterval(function () {

        element.textContent += text.charAt(i);

        i++;


        if (i >= text.length) {

            clearInterval(typingTimer);

        }

    }, 25);

}


/* =========================
   NEXT WISH
========================= */

function nextWish() {

    if (currentWish < wishes.length - 1) {

        currentWish++;

        updateWish();

        createConfetti();

    }

    else {

        showPage("giftPage");

    }

}


/* =========================
   PREVIOUS WISH
========================= */

function previousWish() {

    if (currentWish > 0) {

        currentWish--;

        updateWish();

    }

}


/* =========================
   GIFT
========================= */

function openGift() {

    const gift =

        document.querySelector(".gift-box");


    gift.classList.add("open");


    setTimeout(function () {

        document
            .getElementById("giftMessage")
            .classList.add("show");


        createConfetti();

    }, 700);

}


/* =========================
   GALLERY
========================= */

function showGallery() {

    showPage("galleryPage");

}


/* =========================
   FINAL
========================= */

function showFinal() {

    showPage("finalPage");


    const kiss =
        document.getElementById("kissEffect");

    const reveal =
        document.getElementById("birthdayReveal");

    const cake =
        document.getElementById("bigCakeContainer");

    const message =
        document.getElementById("cakeMessage");


    /* Reset animation */

    kiss.classList.remove("show");

    reveal.classList.remove("show");

    cake.classList.remove("show");

    message.classList.remove("show");


    /* Start kiss animation */

    setTimeout(function () {

        kiss.classList.add("show");

    }, 500);


    /* Show birthday message */

    setTimeout(function () {

        reveal.classList.add("show");

    }, 2200);


    /* Cake appears */

    setTimeout(function () {

        cake.classList.add("show");

        createBigConfetti();

    }, 3000);


    /* Show final message */

    setTimeout(function () {

        message.classList.add("show");

        createBigConfetti();

    }, 4800);

}

/* =========================
   RESTART
========================= */

function restart() {

    currentWish = 0;

    showPage("home");

}


/* =========================
   PAGE CHANGE
========================= */

function showPage(pageId) {

    const pages =

        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    document
        .getElementById(pageId)
        .classList.add("active");

}



/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =

        document.createElement("div");


    heart.className = "heart";


    heart.innerHTML = "❤️";


    heart.style.left =

        Math.random() * 100 + "vw";


    heart.style.fontSize =

        Math.random() * 25 + 20 + "px";


    heart.style.animationDuration =

        Math.random() * 4 + 5 + "s";


    document.body.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 9000);

}


setInterval(createHeart, 500);



/* =========================
   PARTICLES
========================= */

function createParticle() {

    const particle =

        document.createElement("div");


    particle.className = "particle";


    particle.style.left =

        Math.random() * 100 + "vw";


    particle.style.animationDuration =

        Math.random() * 5 + 5 + "s";


    document.body.appendChild(particle);


    setTimeout(function () {

        particle.remove();

    }, 10000);

}


setInterval(createParticle, 300);



/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti =

            document.createElement("div");


        confetti.style.position = "fixed";


        confetti.style.width = "8px";


        confetti.style.height = "8px";


        confetti.style.background =

            `hsl(${Math.random() * 360},
            100%, 60%)`;


        confetti.style.left =

            Math.random() * 100 + "vw";


        confetti.style.top = "-20px";


        confetti.style.zIndex = "999";


        confetti.style.borderRadius =

            Math.random() > 0.5 ?
            "50%" : "0";


        document.body.appendChild(confetti);


        const duration =

            Math.random() * 3 + 2;


        confetti.animate(

            [

                {
                    transform:
                    "translateY(0) rotate(0deg)"
                },

                {
                    transform:

                    `translateY(110vh)
                    rotate(${Math.random() * 720}deg)`
                }

            ],

            {

                duration:
                duration * 1000,

                easing:
                "ease-out"

            }

        );


        setTimeout(function () {

            confetti.remove();

        }, duration * 1000);

    }

}



/* =========================
   BIG CONFETTI
========================= */

function createBigConfetti() {

    createConfetti();

    setTimeout(createConfetti, 500);

    setTimeout(createConfetti, 1000);

}