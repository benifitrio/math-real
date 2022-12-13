document.addEventListener("DOMContentLoaded", () => {
    loadNav();
    let page = window.location.hash.substr(1);

    function loadNav() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status !== 200) return;
                document.getElementById("bottom-navigation").innerHTML = xhttp.responseText;

                document.querySelectorAll(".link-nav").forEach((elm) => {
                    elm.addEventListener("click", (e) => {
                        page = e.target.getAttribute("href").substr(1);
                        loadPage(page);
                    });
                });

                document.querySelectorAll('.link').forEach(el => {
                    el.addEventListener('click', function() {
                        let prev = document.getElementsByClassName("bg-link");

                        if (prev[0]) {
                            prev[0].className = "w-full  inline-block text-center pt-2 pb-1 link-nav link";
                        }
                        this.className += " bg-link";
                    })
                })
            }
        };

        xhttp.open("GET", "nav.html", true);
        xhttp.send();
    };

    // Load page content
    window.addEventListener('hashchange', loadPage)

    loadPage(page)

    function loadPage(page) {
        page = window.location.hash.substr(1);
        if (page === "") page = "home"
        if (page === 'home') Home()
        if (page === 'materi-real') renderPage()
        if (page === 'profil') profilPage()
        if (page === 'daftar-pustaka') daftarpustaka()
        if (page === 'petunjuk') petunjuk()
        if (page === 'barisan') barisanBilangan()
        if (page === 'divergen') divergen()
        if (page === 'limit-fungsi') limitFungsi()
        if (page === 'limit-takhingga') limitTakHingga()
        if (page === 'konvergen') konvergen()
        if (page === 'limit') limit()
    }
});