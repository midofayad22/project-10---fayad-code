"use strict";

/* =========================================================
   FAYAD CODE — HOME PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       Elements
    ===================================================== */

    const siteHeader = document.getElementById("siteHeader");

    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");
    const mobileClose = document.getElementById("mobileClose");
    const mobileOverlay = document.getElementById("mobileOverlay");

    const mobileLinks = document.querySelectorAll(
        ".mobile-nav-link"
    );

    const navLinks = document.querySelectorAll(
        ".desktop-nav .nav-link"
    );

    const revealElements = document.querySelectorAll(
        ".reveal"
    );

    const currentYear = document.getElementById(
        "currentYear"
    );

    /* =====================================================
       Current Year
    ===================================================== */

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }

    /* =====================================================
       Header Scroll
    ===================================================== */

    const updateHeader = () => {

        if (!siteHeader) {
            return;
        }

        if (window.scrollY > 20) {
            siteHeader.classList.add("scrolled");
        } else {
            siteHeader.classList.remove("scrolled");
        }

    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

    /* =====================================================
       Mobile Menu
    ===================================================== */

    const openMenu = () => {

        if (!mobileNav) {
            return;
        }

        mobileNav.classList.add("open");

        mobileOverlay?.classList.add(
            "visible"
        );

        menuToggle?.classList.add(
            "active"
        );

        menuToggle?.setAttribute(
            "aria-expanded",
            "true"
        );

        mobileNav.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "menu-open"
        );

    };

    const closeMenu = () => {

        if (!mobileNav) {
            return;
        }

        mobileNav.classList.remove("open");

        mobileOverlay?.classList.remove(
            "visible"
        );

        menuToggle?.classList.remove(
            "active"
        );

        menuToggle?.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileNav.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "menu-open"
        );

    };

    menuToggle?.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNav?.classList.contains(
                    "open"
                );

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        }
    );

    mobileClose?.addEventListener(
        "click",
        closeMenu
    );

    mobileOverlay?.addEventListener(
        "click",
        closeMenu
    );

    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

                mobileLinks.forEach((item) => {
                    item.classList.remove(
                        "active"
                    );
                });

                link.classList.add(
                    "active"
                );

            }
        );

    });

    /* =====================================================
       Escape Key
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                mobileNav?.classList.contains("open")
            ) {
                closeMenu();
            }

        }
    );

    /* =====================================================
       Prevent Menu From Staying Open on Resize
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900 &&
                mobileNav?.classList.contains("open")
            ) {
                closeMenu();
            }

        }
    );

    /* =====================================================
       Scroll Reveal
    ===================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -50px 0px"
                }
            );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }

    /* =====================================================
       Active Navigation
    ===================================================== */

    const sections = [
        ...document.querySelectorAll(
            "main section[id]"
        )
    ];

    if (
        "IntersectionObserver" in window &&
        sections.length
    ) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        const sectionId =
                            entry.target.id;

                        navLinks.forEach((link) => {

                            const target =
                                link.getAttribute(
                                    "href"
                                );

                            link.classList.toggle(
                                "active",
                                target ===
                                    `#${sectionId}`
                            );

                        });

                        mobileLinks.forEach((link) => {

                            const target =
                                link.getAttribute(
                                    "href"
                                );

                            link.classList.toggle(
                                "active",
                                target ===
                                    `#${sectionId}`
                            );

                        });

                    });

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px",
                    threshold: 0
                }
            );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

    }

    /* =====================================================
       Smooth Anchor Navigation
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    anchorLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const href =
                    link.getAttribute("href");

                if (
                    !href ||
                    href === "#" ||
                    href.length < 2
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        href
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerHeight =
                    siteHeader?.offsetHeight || 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    18;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

                closeMenu();

            }
        );

    });

    /* =====================================================
       Course Progress Visual
    ===================================================== */

    const progressTrack =
        document.querySelector(
            ".progress-track span"
        );

    const savedProgress =
        Number(
            localStorage.getItem(
                "fayadCodeLearningProgressPercent"
            )
        );

    if (
        progressTrack &&
        Number.isFinite(savedProgress) &&
        savedProgress > 0
    ) {

        const safeProgress =
            Math.min(
                100,
                Math.max(0, savedProgress)
            );

        progressTrack.style.width =
            `${safeProgress}%`;

        const progressValue =
            document.querySelector(
                ".progress-header strong"
            );

        if (progressValue) {
            progressValue.textContent =
                `${safeProgress}%`;
        }

    }

    /* =====================================================
       Terminal Typing Effect
    ===================================================== */

    const typingLine =
        document.querySelector(
            ".typing-line"
        );

    if (typingLine) {

        const originalText =
            typingLine.textContent.trim();

        const prefersReducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (!prefersReducedMotion) {

            typingLine.textContent = "";

            let index = 0;

            const typeNextCharacter = () => {

                if (index >= originalText.length) {
                    return;
                }

                typingLine.textContent +=
                    originalText[index];

                index += 1;

                window.setTimeout(
                    typeNextCharacter,
                    55
                );

            };

            window.setTimeout(
                typeNextCharacter,
                900
            );

        }

    }

    /* =====================================================
       Feature Cards — subtle pointer effect
    ===================================================== */

    const featureCards =
        document.querySelectorAll(
            ".feature-card"
        );

    const canUsePointerEffect =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

    if (canUsePointerEffect) {

        featureCards.forEach((card) => {

            card.addEventListener(
                "pointermove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const rotateY =
                        ((x / rect.width) - 0.5) * 2;

                    const rotateX =
                        ((y / rect.height) - 0.5) * -2;

                    card.style.transform =
                        `translateY(-5px)
                         perspective(700px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

                }
            );

            card.addEventListener(
                "pointerleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

    }

    /* =====================================================
       Close Mobile Menu When Clicking Outside
    ===================================================== */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !mobileNav?.classList.contains("open")
            ) {
                return;
            }

            const target =
                event.target;

            if (
                target instanceof Node &&
                (
                    mobileNav.contains(target) ||
                    menuToggle?.contains(target)
                )
            ) {
                return;
            }

            closeMenu();

        }
    );

});
/* =========================================
   FAYAD CODE — PWA
========================================= */

let deferredInstallPrompt = null;

const installAppButton = document.getElementById(
    "installAppButton"
);


/*
 * Register Service Worker
 */
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./sw.js")
            .then((registration) => {
                console.log(
                    "Fayad Code Service Worker registered:",
                    registration.scope
                );
            })
            .catch((error) => {
                console.error(
                    "Service Worker registration failed:",
                    error
                );
            });
    });
}


/*
 * Detect install prompt
 */
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();

    deferredInstallPrompt = event;

    if (installAppButton) {
        installAppButton.hidden = false;
    }
});


/*
 * Install application
 */
installAppButton?.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
        return;
    }

    deferredInstallPrompt.prompt();

    const { outcome } = await deferredInstallPrompt.userChoice;

    console.log(
        `Fayad Code install result: ${outcome}`
    );

    deferredInstallPrompt = null;

    if (installAppButton) {
        installAppButton.hidden = true;
    }
});


/*
 * App installed
 */
window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;

    if (installAppButton) {
        installAppButton.hidden = true;
    }

    console.log("Fayad Code was installed.");
});