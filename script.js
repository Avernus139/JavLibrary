const filter = document.getElementById("actorFilter");
const movies = document.querySelectorAll(".movie");

filter.addEventListener("change", () => {
  const value = filter.value;

  movies.forEach(movie => {
    if (value === "all" || movie.dataset.actor === value) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
});

function openMenu() {
  document.getElementById("sideMenu").classList.add("open");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
  document.body.classList.remove("menu-open");
}

function showActress() {
  closeMenu();
  document.getElementById("actorFilter").value = "Mary tachibana";
  document.getElementById("actorFilter").dispatchEvent(new Event("change"));
}

function openSearch() {
  document.getElementById("searchBox").style.display = "block";
  document.getElementById("searchOverlay").style.display = "block";
  document.getElementById("searchInput").focus();
}

function closeSearch() {
  document.getElementById("searchBox").style.display = "none";
  document.getElementById("searchOverlay").style.display = "none";
  document.getElementById("searchInput").value = "";
  searchMovies(); // reset list
}

function searchMovies() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const movies = document.querySelectorAll(".movie");

  movies.forEach(movie => {
    const title = movie.querySelector("p").innerText.toLowerCase();
    movie.style.display = title.includes(query) ? "block" : "none";
  });
}