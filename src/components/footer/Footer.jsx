import logoFacebook from '../../assets/logoFacebook.png'
import logoTwitter from '../../assets/logoTwitter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'
import s from './footer.module.scss'

export default function Footer() {
    return (

        <footer>
            <section className={s.contatosFooter}>
                <p>3624-4480</p>

                <nav>
                    <a href=""><img src={logoFacebook} alt="logo da rede social Instagram " /></a>
                    <a href=""><img src={logoTwitter} alt="logo da rede social Twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="logo da plataforma Youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="logo da rede social Linkedin" /></a>
                    <a href=""><img src={logoInstagram} alt="logo da rede social Instagram" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
            </section>
        </footer>

    )
}