$(".menu > ul > li").click(function (e) {
    //remove active from  already active
    $(this).siblings().removeClass("active");
  $(this).toggleClass("active");
  //jika sub menu di buka
  $(this).find("ul").slideToggle();
  //close other sub menu
  $(this).siblings().find("ul").slideUp();
  //remove active class from sub menu
  $(this).siblings().find("ul").find("li").removeClass("active");
});
$(".menu-btn").click(function () {
$(".sidebar").toggleClass("active");
}) ;
 //popup
var modal = document.getElementById('about-modal');
var btn = document.getElementById('about-menu');
var span = document.getElementsByClassName('close')[0];


btn.onclick = function () {
  modal.classList.add('show'); 
};


span.onclick = function () {
  modal.classList.add('fade-out'); 
  setTimeout(function () {
    modal.classList.remove('show', 'fade-out'); 
  }, 500); 
};

// Menutup modal jika klik di luar modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add('fade-out');
    setTimeout(function () {
      modal.classList.remove('show', 'fade-out');
    }, 500); 
  }
};
// Tombol "Keterangan"
var keteranganBtn = document.getElementById('keterangan-menu');
var keteranganModal = document.getElementById('keterangan-modal');
var keteranganClose = keteranganModal.getElementsByClassName('close')[0];

keteranganBtn.onclick = function () {
  keteranganModal.classList.add('show'); // Menampilkan modal
};

keteranganClose.onclick = function () {
  keteranganModal.classList.add('fade-out');
  setTimeout(function () {
    keteranganModal.classList.remove('show', 'fade-out'); // Menyembunyikan modal
  }, 500);
};

// Menutup modal jika klik di luar modal
window.onclick = function (event) {
  if (event.target == keteranganModal) {
    keteranganModal.classList.add('fade-out');
    setTimeout(function () {
      keteranganModal.classList.remove('show', 'fade-out');
    }, 500);
  }
};

// Menangani klik pada tombol download PDF
document.getElementById('download-pdf').addEventListener('click', function(event) {
  event.preventDefault();  // Mencegah aksi default link

  // Tentukan URL file PDF yang akan diunduh (URL unduhan langsung dari Google Drive)
  const pdfUrl = 'https://drive.google.com/uc?export=download&id=1CqTa3dpeyCpKKsjo0ibeDO147KApz-yp';  

  // Membuat elemen <a> untuk memulai download
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'map.pdf';  // Nama file yang akan diunduh

  // Menambahkan elemen <a> ke body dan klik untuk memulai unduhan
  document.body.appendChild(link);
  link.click();

  // Menghapus elemen <a> setelah unduhan dimulai
  document.body.removeChild(link);
});




