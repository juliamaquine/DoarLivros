import { useFetcher } from "react-router-dom";
import Livro1 from "../../assets/Livro1.png";
import Livro2 from "../../assets/Livro2.png";
import Livro3 from "../../assets/Livro3.png";

import s from "./LivrosDoados.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LivrosDoados() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/livros"
      );
      setData(response.data);

      console.log(response.data);
    })();
  }, []);
  return (
    <section className={s.LivrosDoadosSection}>
      <h2> Livros Doados</h2>
      <section className={s.CardsSection}>
        <section>
          <img src={Livro1} alt="capa do livro portagonista" />
          <h1>Diário de Anne Frank</h1>
          <p>Anne Frank</p>
          <p>Autobiografia</p>
        </section>
        {data.map((v) => {
          return (
            <section key={v.id}>
              <img src={v.imagem_url} alt="capa do livro O Meu Pé de Laranja Lima" />
              <h1>{v.titulo}</h1>
              <p>{v.autor}</p>
              <p>{v.categoria}</p>
            </section>
          );
        })}
        <section>
          <img src={Livro2} alt="capa do livro O Meu Pé de Laranja Lima" />
          <h1>O Meu Pé de Laranja Lima</h1>
          <p>José Mauro de Vasconcelos</p>
          <p>Ficção</p>
        </section>

        <section>
          <img src={Livro3} alt="capa do livro portagonista" />
          <h1>O protagonista</h1>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </section>
      </section>
    </section>
  );
}
