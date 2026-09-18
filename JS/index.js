/*
============================================================
 KING JAY THUG LIFE
 RESPONSIVE HEADER JAVASCRIPT

 GENERATION 1
 CORE MENU ENGINE
============================================================
*/


/* ============================================================
   DOM REFERENCES
============================================================ */

const menuToggle =
    document.getElementById("menu-toggle");


const menuClose =
    document.getElementById("menu-close");


const mobileMenu =
    document.getElementById("mobile-menu");


const menuOverlay =
    document.getElementById("menu-overlay");


const menuStatus =
    document.getElementById("menu-status");


/* ============================================================
   MENU STATE
============================================================ */

let menuOpen = false;


/* ============================================================
   OPEN MOBILE MENU
============================================================ */

function openMobileMenu() {

    if (!mobileMenu || !menuOverlay) {
        return;
    }


    menuOpen = true;


    mobileMenu.classList.add("active");

    menuOverlay.classList.add("active");


    if (menuToggle) {

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    }


    mobileMenu.setAttribute(
        "aria-hidden",
        "false"
    );


    menuOverlay.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "menu-is-open"
    );


    if (menuStatus) {

        menuStatus.textContent =
            "Navigation menu opened.";

    }

}


/* ============================================================
   CLOSE MOBILE MENU
============================================================ */

function closeMobileMenu() {

    if (!mobileMenu || !menuOverlay) {
        return;
    }


    menuOpen = false;


    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");


    if (menuToggle) {

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }


    mobileMenu.setAttribute(
        "aria-hidden",
        "true"
    );


    menuOverlay.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "menu-is-open"
    );


    if (menuStatus) {

        menuStatus.textContent =
            "Navigation menu closed.";

    }

}


/* ============================================================
   TOGGLE MOBILE MENU
============================================================ */

function toggleMobileMenu() {

    if (menuOpen) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }

}


/* ============================================================
   INITIAL MENU STATE
============================================================ */

function initializeMobileMenu() {

    if (!mobileMenu || !menuOverlay) {
        return;
    }


    menuOpen = false;


    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");


    mobileMenu.setAttribute(
        "aria-hidden",
        "true"
    );


    menuOverlay.setAttribute(
        "aria-hidden",
        "true"
    );


    if (menuToggle) {

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }


    document.body.classList.remove(
        "menu-is-open"
    );

}



/* ============================================================
   START MENU ENGINE
============================================================ */

initializeMobileMenu();

/*
============================================================
 KING JAY THUG LIFE
 RESPONSIVE HEADER JAVASCRIPT

 GENERATION 2
 MENU INTERACTION ENGINE
============================================================
*/


/* ============================================================
   HAMBURGER BUTTON
============================================================ */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function () {

            toggleMobileMenu();

        }
    );

}


/* ============================================================
   CLOSE BUTTON
============================================================ */

if (menuClose) {

    menuClose.addEventListener(
        "click",
        function () {

            closeMobileMenu();

        }
    );

}


/* ============================================================
   OVERLAY CLICK
============================================================ */

if (menuOverlay) {

    menuOverlay.addEventListener(
        "click",
        function () {

            closeMobileMenu();

        }
    );

}


/* ============================================================
   ESCAPE KEY
============================================================ */

document.addEventListener(
    "keydown",
    function (event) {

        /*
        Close the mobile menu when the user
        presses the Escape key.
        */

        if (
            event.key === "Escape" &&
            menuOpen
        ) {

            closeMobileMenu();

        }

    }
);


/* ============================================================
   MOBILE NAVIGATION
============================================================ */

const mobileNavigation =
    document.querySelector(
        ".mobile-navigation"
    );


/* ============================================================
   MOBILE NAVIGATION CLICK HANDLING
============================================================ */

if (mobileNavigation) {

    mobileNavigation.addEventListener(
        "click",
        function (event) {

            /*
            Find the navigation button that
            was clicked.
            */

            const clickedButton =
                event.target.closest(".nav");


            /*
            Ignore clicks that did not occur
            on a navigation button.
            */

            if (!clickedButton) {
                return;
            }


            /*
            Close the menu immediately.

            The browser will still continue
            with the form submission/navigation.
            */

            closeMobileMenu();

        }
    );

}


/* ============================================================
   MOBILE MENU BRAND
============================================================ */

const mobileMenuBrand =
    document.querySelector(
        ".mobile-menu-brand"
    );


if (mobileMenuBrand) {

    mobileMenuBrand.addEventListener(
        "click",
        function () {

            closeMobileMenu();

        }
    );

}


/* ============================================================
   PREVENT MENU INTERACTION FROM REACHING
   THE OVERLAY
============================================================ */

if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );

}


/* ============================================================
   HEADER MENU INITIALIZATION
============================================================ */

function prepareMenuInteractions() {

    /*
    Make sure the menu always starts
    in a closed state.
    */

    if (!menuOpen) {

        closeMobileMenu();

    }

}


/* ============================================================
   RUN INTERACTION INITIALIZATION
============================================================ */

prepareMenuInteractions();

/*
============================================================
 KING JAY THUG LIFE
 RESPONSIVE HEADER JAVASCRIPT

 GENERATION 3
 RESPONSIVE STATE MANAGEMENT
============================================================
*/


/* ============================================================
   RESPONSIVE BREAKPOINT
============================================================ */

/*
   This matches the CSS breakpoint where the desktop
   navigation changes to the mobile hamburger.
*/

const mobileBreakpoint = 850;


/* ============================================================
   CHECK CURRENT DEVICE LAYOUT
============================================================ */

function isMobileLayout() {

    return window.innerWidth <= mobileBreakpoint;

}


/* ============================================================
   HANDLE RESPONSIVE MENU STATE
============================================================ */

function handleResponsiveMenu() {

    /*
    If the browser becomes desktop-sized while
    the mobile menu is open, close everything.
    */

    if (
        !isMobileLayout() &&
        menuOpen
    ) {

        closeMobileMenu();

    }


    /*
    Make sure desktop mode never leaves the
    mobile menu in an active visual state.
    */

    if (!isMobileLayout()) {

        if (mobileMenu) {

            mobileMenu.classList.remove(
                "active"
            );

        }


        if (menuOverlay) {

            menuOverlay.classList.remove(
                "active"
            );

        }


        if (menuToggle) {

            menuToggle.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }


        if (mobileMenu) {

            mobileMenu.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        if (menuOverlay) {

            menuOverlay.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        document.body.classList.remove(
            "menu-is-open"
        );


        menuOpen = false;

    }

}


/* ============================================================
   WINDOW RESIZE
============================================================ */

let resizeTimer;


/*
   Using a small timeout prevents the resize handler
   from running excessively while the user drags
   the browser window.
*/

window.addEventListener(
    "resize",
    function () {

        clearTimeout(resizeTimer);


        resizeTimer = setTimeout(
            function () {

                handleResponsiveMenu();

            },
            100
        );

    }
);


/* ============================================================
   ORIENTATION CHANGE
============================================================ */

window.addEventListener(
    "orientationchange",
    function () {

        /*
        Give the browser a moment to finish changing
        the viewport dimensions.
        */

        setTimeout(
            function () {

                handleResponsiveMenu();

            },
            150
        );

    }
);


/* ============================================================
   PAGE VISIBILITY
============================================================ */

document.addEventListener(
    "visibilitychange",
    function () {

        /*
        If the user leaves the page while the menu
        is open, make sure the state is still valid
        when they return.
        */

        if (
            !document.hidden
        ) {

            handleResponsiveMenu();

        }

    }
);


/* ============================================================
   BACK / FORWARD BROWSER NAVIGATION
============================================================ */

window.addEventListener(
    "pageshow",
    function () {

        /*
        Browsers can restore pages from the back-forward
        cache. Reset the menu state when that happens.
        */

        handleResponsiveMenu();

    }
);


/* ============================================================
   INITIAL RESPONSIVE CHECK
============================================================ */

handleResponsiveMenu();


/*
============================================================
 KING JAY THUG LIFE
 RESPONSIVE HEADER JAVASCRIPT

 GENERATION 4
 ACCESSIBILITY + FINAL MENU HARDENING
============================================================
*/


/* ============================================================
   FOCUS MANAGEMENT
============================================================ */

/*
   When the mobile menu opens, remember which element
   triggered it. When the menu closes, focus can then
   return to that element.
*/

let previouslyFocusedElement = null;


/* ============================================================
   GET FOCUSABLE ELEMENTS
============================================================ */

function getFocusableElements(container) {

    if (!container) {
        return [];
    }


    return container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

}


/* ============================================================
   IMPROVED OPEN MENU
============================================================ */

function openMobileMenuAccessible() {

    if (!mobileMenu || !menuOverlay) {
        return;
    }


    /*
    Remember the element that currently has focus.
    */

    previouslyFocusedElement =
        document.activeElement;


    /*
    Use the existing menu engine.
    */

    openMobileMenu();


    /*
    Move focus into the menu after the
    opening animation begins.
    */

    setTimeout(
        function () {

            const focusableElements =
                getFocusableElements(
                    mobileMenu
                );


            if (
                focusableElements.length > 0
            ) {

                focusableElements[0].focus();

            }

        },
        50
    );

}


/* ============================================================
   IMPROVED CLOSE MENU
============================================================ */

function closeMobileMenuAccessible() {

    /*
    Remember whether the menu was actually open.
    */

    const wasOpen = menuOpen;


    /*
    Use the existing menu engine.
    */

    closeMobileMenu();


    /*
    Restore focus to the element that opened
    the menu.
    */

    if (
        wasOpen &&
        previouslyFocusedElement &&
        typeof previouslyFocusedElement.focus === "function"
    ) {

        setTimeout(
            function () {

                previouslyFocusedElement.focus();

            },
            20
        );

    }


    previouslyFocusedElement = null;

}


/* ============================================================
   REPLACE MENU TOGGLE BEHAVIOR
============================================================ */

if (menuToggle) {

    /*
    Remove the previous click behavior by using
    a cloned button.

    This prevents multiple menu handlers from
    being triggered.
    */

    const newMenuToggle =
        menuToggle.cloneNode(true);


    menuToggle.parentNode.replaceChild(
        newMenuToggle,
        menuToggle
    );


    /*
    Update the reference.
    */

    window.menuToggle =
        document.getElementById(
            "menu-toggle"
        );


    /*
    Reattach the accessible behavior.
    */

    document
        .getElementById("menu-toggle")
        .addEventListener(
            "click",
            function () {

                if (menuOpen) {

                    closeMobileMenuAccessible();

                } else {

                    openMobileMenuAccessible();

                }

            }
        );

}


/* ============================================================
   KEYBOARD FOCUS TRAP
============================================================ */

if (mobileMenu) {

    mobileMenu.addEventListener(
        "keydown",
        function (event) {

            /*
            Only trap Tab while the menu
            is actually open.
            */

            if (
                event.key !== "Tab" ||
                !menuOpen
            ) {

                return;

            }


            const focusableElements =
                Array.from(
                    getFocusableElements(
                        mobileMenu
                    )
                );


            if (
                focusableElements.length === 0
            ) {

                event.preventDefault();

                return;

            }


            const firstElement =
                focusableElements[0];


            const lastElement =
                focusableElements[
                    focusableElements.length - 1
                ];


            /*
            Shift + Tab from the first element
            goes to the last element.
            */

            if (
                event.shiftKey &&
                document.activeElement === firstElement
            ) {

                event.preventDefault();

                lastElement.focus();

                return;

            }


            /*
            Tab from the last element
            goes back to the first.
            */

            if (
                !event.shiftKey &&
                document.activeElement === lastElement
            ) {

                event.preventDefault();

                firstElement.focus();

            }

        }
    );

}


/* ============================================================
   UPDATE CLOSE BUTTON
============================================================ */

const currentMenuClose =
    document.getElementById(
        "menu-close"
    );


if (currentMenuClose) {

    const newMenuClose =
        currentMenuClose.cloneNode(true);


    currentMenuClose.parentNode.replaceChild(
        newMenuClose,
        currentMenuClose
    );


    document
        .getElementById("menu-close")
        .addEventListener(
            "click",
            function () {

                closeMobileMenuAccessible();

            }
        );

}


/* ============================================================
   UPDATE OVERLAY
============================================================ */

if (menuOverlay) {

    const newOverlay =
        menuOverlay.cloneNode(true);


    menuOverlay.parentNode.replaceChild(
        newOverlay,
        menuOverlay
    );


    window.menuOverlay =
        document.getElementById(
            "menu-overlay"
        );


    document
        .getElementById("menu-overlay")
        .addEventListener(
            "click",
            function () {

                closeMobileMenuAccessible();

            }
        );

}


/* ============================================================
   ACCESSIBLE ESCAPE HANDLER
============================================================ */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            menuOpen
        ) {

            closeMobileMenuAccessible();

        }

    }
);


/* ============================================================
   MOBILE NAVIGATION
============================================================ */

const accessibleMobileNavigation =
    document.querySelector(
        ".mobile-navigation"
    );


if (accessibleMobileNavigation) {

    accessibleMobileNavigation.addEventListener(
        "click",
        function (event) {

            const clickedLink =
                event.target.closest(
                    ".nav"
                );


            if (!clickedLink) {
                return;
            }


            /*
            Close the menu before navigating.

            We do NOT prevent the default action,
            so the link continues normally.
            */

            closeMobileMenuAccessible();

        }
    );

}


/* ============================================================
   FINAL INITIALIZATION
============================================================ */

function finalizeMobileMenu() {

    /*
    Ensure the menu starts closed.
    */

    closeMobileMenu();


    /*
    Ensure the body is never accidentally locked
    after page initialization.
    */

    document.body.classList.remove(
        "menu-is-open"
    );


    /*
    Reset remembered focus.
    */

    previouslyFocusedElement = null;

}


/* ============================================================
   RUN FINAL INITIALIZATION
============================================================ */

finalizeMobileMenu();