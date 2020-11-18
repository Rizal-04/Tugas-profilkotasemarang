import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';


class Sejarah extends Component{
       render(){
           return(
               <div>
                   <Mui.Container fixed>
                      <Mui.Grid container spacing={2}>
                  <Mui.Grid item xs={12}><hr/>
                  <main align="center">
                  <Mui.ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                        <Mui.Button href="/" >Home</Mui.Button>
                        <Mui.Button href="/pariwisata">Pariwisata</Mui.Button>
                        <Mui.Button href="/kuliner">Kuliner</Mui.Button>
                        <Mui.Button href="/sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/pemerintahan">Pemerintahan</Mui.Button>
                  </Mui.ButtonGroup><br/><br/>
                  <img src="/semarang.png" />
                  </main>
                     <h1>Selamat datang di halaman Sejarah</h1>
                     <p>Kutha Semarang) adalah ibu kota Provinsi Jawa Tengah, Indonesia sekaligus kota metropolitan terbesar kelima di Indonesia sesudah Jakarta, Surabaya, Medan, dan Bandung.[5][6] Sebagai salah satu kota paling berkembang di Pulau Jawa, Kota Semarang mempunyai jumlah penduduk lebih dari 1,7 juta jiwa dan siang hari bisa mencapai 2 juta jiwa. Kawasan mega-urban Semarang yang tergabung dalam wilayah metropolitan Kedungsepur (Kendal, Demak, Ungaran, Kabupaten Semarang, Kota Salatiga, Kota Semarang dan Purwodadi, Kabupaten Grobogan) berpenduduk mencapai 7,3 juta jiwa, sekaligus sebagai wilayah metropolitan terpadat keempat, setelah Jabodetabek (Jakarta), Gerbangkertosusilo (Surabaya), dan Bandung Raya. Dalam beberapa tahun terakhir, perkembangan Semarang yang signifikan ditandai pula dengan munculnya beberapa gedung pencakar langit yang tersebar di penjuru kota. Perkembangan regional ini menunjukan peran strategis Kota Semarang terhadap roda perekonomian nasional.</p>
                     <p>Kota Semarang dipimpin oleh wali kota Hendrar Prihadi, S.E, M.M dan wakil wali kota Ir. Hj. Hevearita Gunaryanti Rahayu. Kota ini terletak sekitar 558 km sebelah timur Jakarta, atau 312 km sebelah barat Surabaya, atau 621 km sebalah barat daya Banjarmasin (via udara).[7] Semarang berbatasan dengan Laut Jawa di sebelah utara, Kabupaten Demak di sebelah timur, Kabupaten Semarang di sebelah selatan, dan Kabupaten Kendal disebelah barat. Kota Semarang memiliki luas wilayah administratif sebesar 373,70 km persegi, sekaligus merupakan administrasi kotamadya terluas di Pulau Jawa.</p>
                     <p>Secara etimologis, nama "Semarang" berasal dari kata "sem", yang berarti "asam/pohon asam", dan kata "arang", yang berarti "jarang", yang digabungkan menjadi "asam yang jarang - jarang". Penamaan "Semarang" ini bermula ketika Ki Ageng Pandanaran I datang ke sebuah pulau bernama Pulau Tirang (dekat pelabuhan Bergota) dan melihat pohon asam yang jarang - jarang tumbuh berdekatan. Penamaan Kota Semarang ini sempat berubah saat zaman kolonialisme Hindia Belanda menjadi "Samarang". Kota Semarang merupakan satu dari tiga pusat pelabuhan (Jakarta dan Surabaya) penting bagi Hindia Belanda sebagai pemasok hasil bumi dari wilayah pedalaman Jawa.</p>
                     <p>Seperti kota - kota besar lainya, seperti Jakarta dan Surabaya. Kota Semarang mengenal sistem pembagian wilayah kota yang terdiri atas: Semarang Tengah/Semarang Pusat, Semarang Timur, Semarang Selatan, Semarang Barat, dan Semarang Utara. Pembagian wilayah kota ini bermula dari pembagian wilayah sub-residen oleh Pemerintah Hindia Belanda yang setingkat dengan kecamatan. Namun saat ini, pembagian wilayah kota ini berbeda dengan pembagian administratif wilayah kecamatan. Meskipun pembagian kota ini jarang dipergunakan dalam lingkungan Pemerintahan Kota Semarang, namun pembagian kota ini digunakan untuk mempermudah dalam menerangkan suatu lokasi menurut letaknya terhadap pusat kota Semarang. Pembagian kota ini juga digunakan oleh beberapa instansi di lingkungan Kota Semarang untuk mempermudah jangkauan pelayanan, seperti PLN dan PDAM.</p>
                     <a href="https://id.wikipedia.org/wiki/Kota_Semarang#:~:text=Sejarah%20Semarang%20berawal%20kurang%20lebih,terdapat%20gugusan%20pulau%2Dpulau%20kecil.">Klik disini untuk menuju halaman yang lebih lengkap</a>   
                   </Mui.Grid>
                  </Mui.Grid>
                  </Mui.Container>
               </div>
           )
       }
}

export default Sejarah;