//!!!!!!                       ÖDEV 2                     !!!!!!!!!
//!!!!               JAVASCRIPT ILE TO DO LIST             !!!!!!!!!

//? AÇIKLAMA:
//* Günlük hayatta yapacağımız işleri aklımızda tutmak oldukça zor oluyor değil mi ? Parmağınıza ip bağlamak da bir çözüm getirmiyorsa bir yapılacaklar listesi hazırlamayı düşünmeniz gerekebilir.

//* İnanır mısınız Kodluyoruz tam da bu probleminiz için harika bir çözüm ve harika bir ödevle geldi, karşınızda JavaScript To Do List!

//* JavaScript ile bir yapılacaklar listesi yapmanızı istiyoruz.Sizlere yine bir temel verip bunun js dosyasını oluşturmanızı istiyoruz.

//! PÜF NOKTALARI
// Kuracağınız yapı tamamen size kalmış. Birkaç tane püf noktamız var.
// Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
// Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
// Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
// Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
// Yazdığınız js dosyasını projenize eklemeyi unutmayın.

const girdi = document.getElementById("girdi");
const btn = document.querySelector("#btn");
const list = document.querySelector("#ulList");
let todos = JSON.parse(localStorage.getItem("TODOS"));
const renderMethodTodos = () => {
  todos.forEach((x) => {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${x} <i class="fa-solid fa-trash"></i> `;
    list.append(liDOM);
  });
};

renderMethodTodos();

btn.addEventListener("click", function () {
  todos.push(girdi.value);
  localStorage.setItem("TODOS", JSON.stringify(todos));
  const liDOM = document.createElement("li");
  liDOM.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${girdi.value} <i class="fa-solid fa-trash"></i> `;
  list.append(liDOM);
  girdi.value = "";
});

girdi.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.querySelector("#btn").click();
  }
});
