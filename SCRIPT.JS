/* =========================================================
   PORTFOLIO WEBSITE
   COMPLETE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================================
       01. SELECT ELEMENTS
    ========================================================= */

    const header = document.querySelector(".header");
    const menuBtn = document.querySelector("#menuBtn");
    const nav = document.querySelector("#nav");
    const navLinks = document.querySelectorAll(".nav-link");

    const contactForm = document.querySelector("#contactForm");



    /* =========================================================
       02. HEADER SCROLL EFFECT
    ========================================================= */

    function handleHeaderScroll() {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleHeaderScroll);

    handleHeaderScroll();



    /* =========================================================
       03. MOBILE MENU
    ========================================================= */

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {

            nav.classList.toggle("active");
            menuBtn.classList.toggle("active");

        });

    }



    /* =========================================================
       04. CLOSE MOBILE MENU
       WHEN NAV LINK IS CLICKED
    ========================================================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("active");
            }

            if (menuBtn) {
                menuBtn.classList.remove("active");
            }

        });

    });



    /* =========================================================
       05. SMOOTH SCROLL
    ========================================================= */

    const allAnchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    allAnchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection =
                document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });



    /* =========================================================
       06. ACTIVE NAVIGATION LINK
    ========================================================= */

    const sections = document.querySelectorAll(
        "section[id]"
    );


    function updateActiveNav() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(function (section) {

            const sectionTop = section.offsetTop;

            const sectionHeight = section.offsetHeight;

            const sectionId = section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                currentSection = sectionId;

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const linkTarget =
                link.getAttribute("href");

            if (
                linkTarget === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();



    /* =========================================================
       07. SCROLL REVEAL ANIMATION
    ========================================================= */

    const revealElements = document.querySelectorAll(
        ".service-card, .project-card, .review-card, .contact-item, .skills-info, .skills-bars, .about-content, .about-image, .contact-info, .contact-form-box"
    );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("show");

        });

    }



    /* =========================================================
       08. SKILLS PROGRESS ANIMATION
    ========================================================= */

    const skillsSection =
        document.querySelector(".skills");

    const skillProgressBars =
        document.querySelectorAll(".skill-progress");


    if (
        skillsSection &&
        skillProgressBars.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const skillObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            skillProgressBars.forEach(
                                function (bar) {

                                    bar.classList.add(
                                        "animate"
                                    );

                                }
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.25
                }
            );


        skillObserver.observe(skillsSection);

    }



    /* =========================================================
       09. PROJECT IMAGE ERROR HANDLING
    ========================================================= */

    const projectImages =
        document.querySelectorAll(".project-image img");


    projectImages.forEach(function (image) {

        image.addEventListener("error", function () {

            this.style.display = "none";

            const projectImage =
                this.parentElement;

            projectImage.classList.add(
                "image-error"
            );

        });

    });



    /* =========================================================
       10. PROJECT BUTTONS
    ========================================================= */

    const projectButtons =
        document.querySelectorAll(".project-btn");


    projectButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const link =
                this.getAttribute("href");

            if (!link || link === "#") {

                event.preventDefault();

                alert(
                    "Project link will be added soon."
                );

            }

        });

    });



    /* =========================================================
       11. CONTACT FORM → WHATSAPP
    ========================================================= */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* =================================================
                   YOUR WHATSAPP NUMBER

                   Example:
                   03001234567

                   Becomes:
                   923001234567
                ================================================= */

                const whatsappNumber =
                    "923303243914";


                /* =================================================
                   GET FORM VALUES
                ================================================= */

                const nameInput =
                    document.querySelector("#clientName");

                const emailInput =
                    document.querySelector("#clientEmail");

                const phoneInput =
                    document.querySelector("#clientPhone");

                const serviceInput =
                    document.querySelector("#service");

                const budgetInput =
                    document.querySelector("#budget");

                const detailsInput =
                    document.querySelector("#projectDetails");


                /* =================================================
                   CHECK ELEMENTS
                ================================================= */

                if (
                    !nameInput ||
                    !emailInput ||
                    !phoneInput ||
                    !serviceInput ||
                    !budgetInput ||
                    !detailsInput
                ) {

                    alert(
                        "Contact form fields are missing."
                    );

                    return;

                }


                /* =================================================
                   GET VALUES
                ================================================= */

                const name =
                    nameInput.value.trim();

                const email =
                    emailInput.value.trim();

                const phone =
                    phoneInput.value.trim();

                const service =
                    serviceInput.value.trim();

                const budget =
                    budgetInput.value.trim();

                const details =
                    detailsInput.value.trim();


                /* =================================================
                   VALIDATION
                ================================================= */

                if (!name) {

                    alert(
                        "Please enter your name."
                    );

                    nameInput.focus();

                    return;

                }


                if (!email) {

                    alert(
                        "Please enter your email."
                    );

                    emailInput.focus();

                    return;

                }


                if (!phone) {

                    alert(
                        "Please enter your phone number."
                    );

                    phoneInput.focus();

                    return;

                }


                if (!service) {

                    alert(
                        "Please select a service."
                    );

                    serviceInput.focus();

                    return;

                }


                if (!budget) {

                    alert(
                        "Please select your project budget."
                    );

                    budgetInput.focus();

                    return;

                }


                if (!details) {

                    alert(
                        "Please enter your project details."
                    );

                    detailsInput.focus();

                    return;

                }



                /* =================================================
                   CREATE WHATSAPP MESSAGE
                ================================================= */

                const message =

`🚀 NEW PROJECT INQUIRY

━━━━━━━━━━━━━━━━━━

👤 CLIENT INFORMATION

Name:
${name}

Email:
${email}

Phone / WhatsApp:
${phone}


🛠 PROJECT INFORMATION

Required Service:
${service}

Project Budget:
${budget}


📝 PROJECT DETAILS

${details}

━━━━━━━━━━━━━━━━━━

🌐 Sent From:
Portfolio Website`;


                /* =================================================
                   CREATE WHATSAPP URL
                ================================================= */

                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(message);


                /* =================================================
                   OPEN WHATSAPP
                ================================================= */

                window.open(
                    whatsappURL,
                    "_blank"
                );


                /* =================================================
                   RESET FORM
                ================================================= */

                contactForm.reset();

            }
        );

    }



    /* =========================================================
       12. BUTTON CLICK EFFECT
    ========================================================= */

    const buttons =
        document.querySelectorAll(
            ".header-btn, .home-btn, .about-btn, .service-link, .contact-submit"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                this.classList.add("clicked");


                setTimeout(
                    function () {

                        button.classList.remove(
                            "clicked"
                        );

                    },
                    250
                );

            }
        );

    });



    /* =========================================================
       13. BACK TO TOP
       AUTOMATICALLY CREATE BUTTON
    ========================================================= */

    const backToTop =
        document.createElement("button");


    backToTop.className = "back-to-top";

    backToTop.innerHTML = "↑";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    document.body.appendChild(backToTop);


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );



    /* =========================================================
       14. ESCAPE KEY
       CLOSE MOBILE MENU
    ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (nav) {
                    nav.classList.remove(
                        "active"
                    );
                }

                if (menuBtn) {
                    menuBtn.classList.remove(
                        "active"
                    );
                }

            }

        }
    );



    /* =========================================================
       15. CONSOLE MESSAGE
    ========================================================= */

    console.log(
        "Portfolio website JavaScript loaded successfully."
    );

});

const footerYear = document.getElementById("footerYear");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}