// Profil menüsünü kontrol etmek için kullanılan fonksiyon
let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}

// Yan aktiviteyi kontrol etmek ve "Daha fazla/Daha az" bağlantısını güncellemek için kullanılan fonksiyon
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity() {
  sideActivity.classList.toggle("open-activity");

  // Yan aktivite açıksa bağlantı metnini "Daha az" olarak değiştir, aksi takdirde "Daha fazla" olarak değiştir
  if (sideActivity.classList.contains("open-activity")) {
    moreLink.innerHTML = "Daha az <b>-</b>";
  } else {
    moreLink.innerHTML = "Daha fazla <b>+</b>";
  }
}