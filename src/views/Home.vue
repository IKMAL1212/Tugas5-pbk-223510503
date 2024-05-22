<template>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!-- Icon when menu is open. -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img class="h-8 w-auto" src="/src/foto/2.png" alt="Your Company">
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/keranjang">Keranjang</RouterLink>
                
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
  
            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="/src/foto/4.jpg" alt="">
                </button>
              </div>
              <!-- Dropdown menu, show/hide based on menu state. -->
              
            </div>
          </div>
        </div>
      </div>
      
      <div id="app">
        <header>
        </header>
  
        <div class="search-bar">
          <input type="text" placeholder="Cari">
        </div>
  
        <div class="text-center my-5">
    <h1>Selamat Datang Di Online Digital</h1>
    
  </div>


    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="/src/foto/11.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
            Destinasi Utama Untuk Semua Kebutuhan Anda!
            
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
            Kami bangga menjadi tempat favorit para pelanggan di mana pun mereka berada.
             Dengan berbagai pilihan produk berkualitas tinggi, pelayanan ramah, dan harga yang kompetitif,
              kami berkomitmen untuk memberikan pengalaman berbelanja yang tak terlupakan.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                
              </Button>
              <Button size="lg" color="white" variant="text">
                
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/src/foto/9.jpeg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
            Fitur Utama
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
            Prosesor Ditenagai oleh prosesor Intel Core i5 generasi terbaru yang memberikan kecepatan dan responsivitas optimal.
Memori: RAM 8GB yang memungkinkan multitasking tanpa hambatan, membuka banyak aplikasi sekaligus tanpa lag.
Penyimpanan: SSD 256GB untuk kecepatan baca/tulis data yang lebih cepat dan waktu booting yang lebih singkat.
Layar: Layar Full HD 14 inci dengan teknologi anti-glare, memberikan tampilan yang jernih dan nyaman di mata.
Grafis: Kartu grafis Intel UHD Graphics yang mampu menjalankan aplikasi grafis dan game ringan dengan lancar.
Baterai: Daya tahan baterai hingga 10 jam, sempurna untuk mobilitas tinggi dan produktivitas sepanjang hari.
Konektivitas: Dilengkapi dengan berbagai port, termasuk USB-C, HDMI, dan slot kartu SD, memudahkan Anda menghubungkan berbagai perangkat.
Desain: Desain elegan dan ramping dengan bobot ringan, mudah dibawa ke mana saja.


            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
              
              </Button>
              <Button size="lg" color="white" variant="text">
               
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/src/foto/10.jpeg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
            Inovatif
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
                 Pasar kami selalu menghadirkan produk-produk inovatif yang mengikuti tren terbaru
                Terpercaya Kami bangga menjadi pasar terpercaya dengan reputasi yang solid di kalangan konsumen
                Varian Lengkap Nikmati pilihan produk yang lengkap dan beragam hanya di pasar kami
                Harga Kompetitif Dapatkan produk berkualitas dengan harga yang kompetitif di pasar kami
                Pelayanan Pelanggan Terbaik Kami selalu siap memberikan pelayanan pelanggan terbaik untuk pengalaman berbelanja yang menyenangkan
                Kemudahan Bertransaksi Belanja mudah dan cepat dengan berbagai metode pembayaran yang kami sediakan
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                
              </Button>
              <Button size="lg" color="white" variant="text">
               
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>

        <footer class="text-center text-lg-start bg-body-tertiary text-muted">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span></span>
      </div>
      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </section>
    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Elektronika Dynamics
            </h6>
            <p>Menghadirkan Inovasi Elektronik yang Mengubah Gaya Hidup, Membuat Koneksi yang Lebih Kuat, dan Membuka Peluang Tanpa Batas untuk Masa Depan Digital.</p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            <p><a href="#!" class="text-reset">Angular</a></p>
            <p><a href="#!" class="text-reset">React</a></p>
            <p><a href="#!" class="text-reset">Vue</a></p>
            <p><a href="#!" class="text-reset">Laravel</a></p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p><a href="#!" class="text-reset">Pricing</a></p>
            <p><a href="#!" class="text-reset">Settings</a></p>
            <p><a href="#!" class="text-reset">Orders</a></p>
            <p><a href="#!" class="text-reset">Help</a></p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> Jl. Kaharuddin Nst No.15000, Simpang Tiga, Kec. Bukit Raya, Kota Pekanbaru, Riau 28284</p>
            <p><i class="fas fa-envelope me-3"></i> OnlineDigital.com</p>
            <p><i class="fas fa-phone me-3"></i> +62 820 2333 200</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © SINCE2024 : <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MR,KEMAL.com</a>
    </div>
  </footer>
      </div>
    </nav>
  </template>
  
  <script>
import { RouterLink } from 'vue-router';

  export default {
    name: 'Home',
    data() {
      return {
        categories: [
          {
            name: "Makanan Kering",
            image: "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2020/1/10/6471092/6471092_a0eaf254-31ee-4d65-84a1-19982b389a5f_400_400"
          },
          {
            name: "Figure",
            image: "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2020/1/10/6471092/6471092_8d0c7bfa-21b0-4e16-bc71-8f3e9d82f2cd_400_400"
          },
          {
            name: "Tas Selempang Pria",
            image: "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2020/1/10/6471092/6471092_b4e74bc8-26f1-4e7f-9c7b-5f2e1db4aef3_400_400"
          },
          {
            name: "Flat Shoes Wanita",
            image: "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2020/1/10/6471092/6471092_6314ef5b-405a-401a-ae62-71b0291a2a07_400_400"
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
  }
  
  .header {
    background-color: #00b14f;
    padding: 10px 0;
    color: white;
    text-align: center;
  }
  
  .header img {
    width: 150px;
  }
  
  .search-bar {
    text-align: center;
    padding: 10px 0;
  }
  
  .search-bar input[type="text"] {
    width: 60%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .banner {
    text-align: center;
    margin: 20px 0;
  }
  
  .banner img {
    width: 80%;
  }
  
  .categories {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background-color: white;
  }
  
  .category-item {
    text-align: center;
  }
  
  .category-item img {
    width: 100px;
    height: 100px;
  }
  
  .top-up {
    padding: 20px;
    background-color: white;
    margin-top: 20px;
  }
  
  .top-up input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px 0;
    width: 100%;
  }
  
  .top-up button {
    padding: 10px;
    border: none;
    background-color: #00b14f;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  