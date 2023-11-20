import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import ImgLogo from '../../assets/logo.png'
import Twitter from '../../assets/twiiter.png'
import { FooterContainer, FooterContent } from './style'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent className="container">
        <div>
          <div>
            <img src={ImgLogo} alt="Logo" />
          </div>
          <article>
            <img src={Instagram} alt="" />
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
          </article>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
          </p>
        </div>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
