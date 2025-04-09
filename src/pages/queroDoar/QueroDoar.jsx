import { useState } from "react";
import iconeLivro from "../../assets/iconeLivro.png";
import s from "./queroDoar.module.scss";
import axios from "axios";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [img, setImg] = useState("");

  async function doar(event) {
    event.preventDefault()
    
    await axios.post(import.meta.env.VITE_BACKEND_URL + "/doar", {
      titulo: titulo,
      categoria: categoria,
      autor: autor,
      imagem_url: img,
    });
  }
  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form>
        <div>
          <img src={iconeLivro} alt="imagem ilustrando um livro aberto" />
          <h2> Informações do Livro </h2>
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Titulo"
          onChange={(event) => {
            setTitulo(event.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Categoria"
          onChange={(event) => {
            setCategoria(event.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Autor"
          onChange={(event) => {
            setAutor(event.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Link da Imagem"
          onChange={(event) => {
            setImg(event.target.value);
          }}
        />
        <input type="submit" value="Doar" className={s.buttonDoar} onClick={doar} />
      </form>
    </section>
  );
}
