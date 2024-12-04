import logoHeader from '../../assets/Livro-header.png'
import lupa from '../../assets/lupa.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import s from './header.module.scss'

export default function Header() {
   return (
      <BrowserRouter>

         <header className= {s.header}>
            <section className={s.logoHeader}>
               <img src={logoHeader} alt="logo de um livro aberto" />
               <h1> Livros Vai na Web</h1>
            </section>

            <nav className={s.navHeader}>
               <ul>
                  <li><Link className={s.Link} to='/'>Inicio</Link></li>
                  <li><Link className={s.Link} to ='/livros-doados'>Livros Doados</Link></li>
                  <li><Link className={s.Link} to='/quero-doar'>Quero Doar</Link></li>
               </ul>
            </nav>

            <section className={s.barraDePesquisa}>
               <input type="search" name="" id="" placeholder='O que você procura?' />
               <button> <img src={lupa} alt="imagem de uma lupa branca" /> </button>
            </section>
         </header>

         <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/livros-doados' element={<LivrosDoados/>}/>
            <Route path='/quero-doar' element={<QueroDoar/>}/>

         </Routes>  

      </BrowserRouter> 

     

   )
}