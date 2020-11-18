import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';


class Home extends Component{
       render(){
           return(
               <div align="center">
                  <Mui.Grid container spacing={2}>
                  <Mui.Grid item xs={12}><hr/>
                  <Mui.ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                        <Mui.Button href="/" >Home</Mui.Button>
                        <Mui.Button href="/pariwisata">Pariwisata</Mui.Button>
                        <Mui.Button href="/kuliner">Kuliner</Mui.Button>
                        <Mui.Button href="/sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/pemerintahan">Pemerintahan</Mui.Button>
                  </Mui.ButtonGroup>
                  <h1>Selamat datang di Profil kotasemarang</h1>
                  <Carousel>
                       <img src="/kota.jpg" width="90%" height="500"/>
                       <img src="/kota1.jpg" width="90%" height="500"/>
                       <img src="/kota3.jpeg" width="90%" height="500"/>
                   </Carousel>
                   </Mui.Grid>
                  </Mui.Grid>

               </div>
           )
       }
}

export default Home;