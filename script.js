// Active Navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    }
    else {
        nav.classList.remove("scroll-on");
    }
}

//  Nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function (event) {
        if (event.target.classList.contains("dropdown-toggle")) {
            return; // Prevent hiding the menu for dropdown toggle clicks
        }
        navCollapse.classList.remove("show");
    })
})

// Counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 52, 7000);
    counter("count2", 0, 34, 7000);
    counter("count3", 0, 43, 7000);
});