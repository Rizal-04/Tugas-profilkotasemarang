import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';

class Pariwisata extends Component{
       render(){
           return(
               <div>
             <Mui.Container fixed>    
              <Mui.Grid container spacing={0}>
                  <Mui.Grid item xs={12}><hr/>
                  <main align="center">
                  <Mui.ButtonGroup  size="large" color="primary" aria-label="large outlined primary button group">
                        <Mui.Button href="/">Home</Mui.Button>
                        <Mui.Button href="/pariwisata">Pariwisata</Mui.Button>
                        <Mui.Button href="/kuliner">Kuliner</Mui.Button>
                        <Mui.Button href="/sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/pemerintahan">Pemerintahan</Mui.Button>
                  </Mui.ButtonGroup><br/><br/>
                  <Carousel>
                       <img src="/ayana.jpg" width="90%" height="500"/>
                       <img src="/curug-lawe.jpg" width="90%" height="500"/>
                       <img src="/lawang-sewu.jpg" width="90%" height="500"/>
                       <img src="/cemoro-sewu.jpg" width="90%" height="500"/>
                   </Carousel>
                  </main>
                     <h1>Selamat datang di Halaman Pariwisata</h1>
                     <p>Di kota semarang banyak menyimpan pariwisata-pariwisata yang dijamin nggak bikin nyesel dibawah ini ada beberapa spot pariwisata di semarang</p>
                     <img src="/ayana.jpg" width="50%" /><br/>
                     <h1>1. Ayana gedong songo</h1>
                     <p> Semarang, atau seringkali juga disebut dengan kota lumpia, merupakan salah kota metropolis yang ada di Indonesia. Bahkan menjadi kota metropolis terbesar kelima setelah Jakarta, Bandung, Surabaya, dan Medan. Lahir pada tanggal 2 Mei 1547, kota ini juga menjadi kota terpadat keempat dengan sekitar 1,5 juta jiwa bertempat tinggal di wilayah yang luasnya mencapai 373 kilometer persegi.</p>
                     <p>Hadir sebagai kota metropolis tentu tidak lengkap rasanya jika Semarang tidak memiliki destinasi wisata yang diunggulkan dari kota yang dijuluki juga sebagai Venetië van Java. Mulai dari Lawang Sewu, Klenteng Sam Poo Kong, Pagoda Avalokitesvara, dan Ayana Gedong Songo. Nama wisata terakhir di Semarang inilah yang akan dibahas secara mendetil pada artikel kali ini.</p>
                     <p>Ayana Gedong Songo merupakan salah satu destinasi wisata kekinian yang dimiliki oleh Semarang. Baru mulai beroperasi pada 11 Juni 2018, dengan banyak spot di tempat ini yang instagramable membuat kepopuleran destinasi wisata kekinian Semarang ini meningkat dratis dan wisatawan baik dari dalam dan luar Semarang berbondong-bondong datang ke Ayana Gedong Songo.</p>
                     <h1>Lokasi Ayana gedong songo</h1>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2786338336614!2d110.33970231421462!3d-7.209020572775612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7087f13da7f053%3A0xc13f5453211dbff1!2sAyanaz%20Gedongsongo!5e0!3m2!1sid!2sid!4v1605666783399!5m2!1sid!2sid" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                      <h1>Harga Tiket </h1>
                      <p>Harga tiket masuk Ayana Gedong Songo Semarang sendiri adalah 20 ribu rupiah untuk satu orang dewasa dan 10 ribu untuk satu orang anak. Harga tersebut ditujukan untuk wisatawan lokal. Sedangkan, untuk wisatawan mancanegara, harga tiket masuk dibanderol sebesar 75 ribu rupiah.

                        Sebelum membayar tiket masuk Aya Gedong Songo, kamu harus membeli tiket masuk kawasan Candi Gedong Songo seharga 10 ribu rupiah karena tempat wisata tersebut masih berada pada satu kompleks yang sama. Harga yang ditawarkan terbilang worth it dengan fasilitas menarik yang bisa kamu manfaatkan selama berada di tempat wisata Semarang.

                        Jangan lupa juga untuk beberapa spot foto dibebani biaya tambahan untuk dapat berada di spot tersebut. Salah satunya adalah bubble tent. Untuk berada di spot bubble tent VIP, kamu harus merogoh kocek sebesar 20 ribu rupiah. Semakin banyak orang, kamu bisa mendapatkan harga yang lebih murah untuk bubble tent VIP ini. Untuk ukuran sedang dan kecil, harga yang harus kamu bayar adalah 5 ribu rupiah.

                        Selain bubble tent, kamu pun harus membayar biaya tambahan jika kamu ingin berfoto di balon udara. Biaya yang harus kamu keluarkan hanya sebesar 5 ribu rupiah untuk berfoto ria di spot yang termasuk spot favorit pengunjung ini.</p><br/>
                        <img src="/curug-lawe.jpg" width="50%" /><br/>
                        <h1>2. Curug lawe</h1>
                            <p>Disebut Curug Lawe karena air yang jatuh dari tebing curam itu terlihat bagai benang-benang putih. Benang dalam bahasa jawa disebut lawe. Versi lain menjelaskan dinamakan Lawe karena konon jumlah air terjun yang ada, baik dari yang besar hingga yang terkecil berjumlah 25 buah. Dalam bahasa jawa 25 disebut Selawe.</p>
                            <p>Dalam satu kawasan ini terdapat dua air terjun, yaitu air terjun lawe di sisi barat dan curug benowo di sisi timur. Kedua air terjun itu berjarak sekitar 500 m. Curug Lawe Benowo Kalisidi atau disingkat CLBK dikelola oleh Pemerintah Desa Kalisidi dan LMDH Bela Pesona. Pengelola ini menjadi mitra dari Perum Perhutani KPH Kedu Utara.</p>
                         <h1>Harga tiket</h1>
                            <p>Untuk menikmati keseruan Curug Lawe, pengunjung dikenakan tarif Rp 5.000. Apabila berkunjung menggunakan sepeda motor, tarif parkirnya sebesar Rp 3.000, sedangkan untuk mobil Rp 5.000. Biaya tersebut bisa berubah saat libur panjang atau akhir pekan.</p>
                        <h1>Lokasi Curug lawe</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63340.83280865346!2d110.32560827910156!3d-7.1488733000000035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7087df51a22715%3A0xb5610e29ab2d65de!2sAir%20Terjun%20Curug%20Lawe%20Benowo%20Kalisidi!5e0!3m2!1sid!2sid!4v1605668283374!5m2!1sid!2sid" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><br/>
                        <img src="lawang-sewu.jpg" width="50%" /><br/>
                      <h1>3.Lawang sewu</h1>  
                      <p>Sebagai ibukota Jawa Tengah, Semarang mempunyai daya tarik tersendiri untuk mendatangkan wisatawan dari luar. Selain dari Bandeng Presto-nya yang khas, salah satu yang menarik wisatawan untuk datang ke Semarang adalah Lawang Sewu.</p>
                      <p>Bangunan peninggalan Belanda ini mampu memberikan daya tarik tersendiri bagi wisatawan yang berkunjung. Kebanyakan orang mengetahui Lawang Sewu karena cerita-cerita mistis yang ada di sini, namun selain itu bangunan bersejarah ini juga menawarkan cerita tentang sejarah dari kereta api di Indonesia. Karena dulunya Lawang Sewu ini merupakan sebuah pusat kereta api Indonesia.</p>
                      <p>Gedung tua ini juga menjadi saksi pertempuran antara Angkatan Pemuda Kereta Api (AMKA) melawan penjajah Jepang. Pertempuran terjadi karena pemuda AMKA ingin mengambil alih kereta api. Setidaknya ada belasan pemuda gugur dalam pertempuran ini, dan dimakamkan tepat di halaman gedung. Namun kini jenazah para pemuda tersebut sudah dipindahkan ke Taman Makam Pahlawan. Meski sudah berusia ratusan tahun, kemegahan bangunan ini masih bisa Kamu nikmati. </p>
                      <p>Saat ini jika Kamu berkunjung ke Lawang Sewu Kamu akan menemukan banyak sekali sejarah perkembangan kereta di Indonesia. Dari kereta yang pertama kali ada di Indonesia sampai yang terakhir. </p>
                     <h1>Harga tiket</h1>
                     <ul>
                         <li>Orang dewasa dikenakan biaya Rp 10.000,-</li>
                         <li>Anak-anak di bawah 12 tahun dikenakan biaya Rp 5.000,-</li>
                         <li>Pelajar dikenakan biaya Rp 5.000,-</li>
                     </ul>
                    <h1>Lokasi Lawang sewu</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1072924554805!2d110.40978245791408!3d-6.983983836429212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4f19af0393%3A0x11304de4230ded0d!2sLawang%20Sewu!5e0!3m2!1sid!2sid!4v1605668806506!5m2!1sid!2sid" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><br/>
                    <img src="cemoro-sewu.jpg" width="50%" /><br/>
                   <h1>4.Cemoro sewu</h1>
                   <p>PARA pecinta alam, fotografer lansekap, tidak ada salahnya menengok tempat yang sangat memesona ini. Kamu dapat menyaksikan bentang alam nan eksotik Gunung Merbabu di antara lereng Gunung Ungaran Telomoyo dan Bukit Gajah, dari Bukit Cemoro Sewu.</p>
                   <p>Dari bukit itu pula, tataplah bagian sisi utara. Nikmatilah pemandangan mengagumkan Gunung Ungaran, yang terlihat samar menampakan diri karena terselimuti awan. Tengoklah, Danau Rawa Pening dan persawahan menghijau.</p>
                   <p>Banyaknya pohon cemara yang tumbuh lebat menjadikan kawasan itu disebut Bukit Cemoro Sewu. Selain sebagai jalur pendakian, tempat ini merupakan objek wisata yang sangat menarik. Apalagi, kalau berada di sana ketika fajar pagi hari.</p>
                   <p>Untuk mencapai Bukit Cemoro kita harus berjalan kaki yang tidak terlalu jauh 200 meter namun cukup melelahkan.dikarenakan perjalanan harus mendaki bukit terjal dengan tikat kemiringan 45 derajat. Perlu kesabaran ekstra saat mendaki bukit terjal, karena kita harus meniti 98 anak tangga menuju gardu pandang Bukit Cemoro Sewu.</p>
                   <p>Medannya sempat dan sangat menanjak. Catatan saja, tidak perlu takut tersesat karena kamu bisa menyewa jasa pemandu lokal untuk menjadi guide ke lokasi. Sambil menikmati jalanan, tengok kanan kiri, kamu dapat  menyaksikan dari sela sela pohon pemandangan Rawa Pening, Ambarawa, di sepanjang rute menuju Cemoro Sewu.</p>
                   <h1>Harga tiket</h1>
                   <p>Rp10.000 Jam Buka: 07.00 - 16.00</p>
                   <h1>Lokasi Cemoro sewu</h1>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2024993.2886029468!2d109.70052233055678!3d-7.567890942095945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7085ff4379c071%3A0xcc31115ca549b480!2sBukit%20Pandang%20Cemorosewu!5e0!3m2!1sid!2sid!4v1605669673787!5m2!1sid!2sid" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                   
                   
                   </Mui.Grid>
                  </Mui.Grid>
            </Mui.Container> 
               </div>
           )
       }
}

export default Pariwisata   ;