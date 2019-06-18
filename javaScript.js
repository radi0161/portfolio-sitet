window.addEventListener("load", init);

function init() {
    document.querySelector(".toggle-btn").addEventListener("click", toggleSidebar)
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
}
