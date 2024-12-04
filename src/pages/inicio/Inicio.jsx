import s from './Inicio.module.scss'
import imgcard1 from '../../assets/Community.png'
import imgcard2 from '../../assets/reading.png'
import imgcard3 from '../../assets/transform.png'
import imgcard4 from '../../assets/balance.png'


export default function Inicio() {
   return (

      <main>
         <section className={s.primeiraSessaoInicio}>
            <h2> VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
         </section>


         <section className={s.segundaSessaoInicio}>
            <h2> Por que devo doar?</h2>
            <section className={s.cardsMotivos}>
               <section>
                  <img src={imgcard1} alt="logo de ilustrando um circulo social" />
                  <p>  Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
               </section>

               <section>
                  <img src={imgcard2} alt="logo ilustrando uma pessoa lendo um livro" />
                  <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
               </section>

               <section>
                  <img src={imgcard3} alt="logo ilustrando 6 pessoas transformando o mundo" />
                  <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
               </section>

               <section>
                  <img src={imgcard4} alt="logo ilustrando a balança da justiça" />
                  <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
               </section>

            </section>
         </section>

      </main>
   )

}