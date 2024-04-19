import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imagemLogo from "../images/a2-logo-curvas.png"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Slide = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // número de slides visíveis
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // velocidade do autoplay em milissegundos
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
        <div className={styles.slideItem}>
          <a href="https://www.embracon.com.br/" target="_blank" rel="noreferrer">
            <StaticImage
              alt="Embracon"
              src="../images/embracon-logo4.png"
            />
          </a>
        </div>
        <div className={styles.slideItem}>
          <a href="https://www.caixa.gov.br/voce/consorcios/Paginas/default.aspx" target="_blank" rel="noreferrer">
            <StaticImage
              alt="Caixa"
              src="../images/caixa-logo.png"
            />
          </a>
        </div>
        <div className={styles.slideItem}>
          <a href="https://www.consorcioaraucaria.com.br/" target="_blank" rel="noreferrer">
            <StaticImage
              alt="Araucária"
              src="../images/logo_araucaria.png"
            />
          </a>
        </div>
        <div className={styles.slideItem}>
          <a href="https://www.consorciocanopus.com.br/" target="_blank" rel="noreferrer">
            <StaticImage
              alt="Canopus"
              src="../images/canopus.png"
            />
          </a>
        </div>
        <div className={styles.slideItem}>
          <a href="https://www.consorcioservopa.com.br/" target="_blank" rel="noreferrer">
            <StaticImage
              alt="Consórcio Produto"
              src="../images/logo_consorcioservopa.jpg"
            />
          </a>
        </div>
      </Slider>
    </div>
  );
};

const ParceirosSection = () => (
  <main>
    <div className={styles.parceiro}>
      <h2>Parceiros</h2>
      <Slide />
    </div>
  </main>
)


const IndexPage = () => (
  <Layout>
    <div className={styles.principal}>
      <img
        alt="a2 consorcio logo"
        height={105}
        src={imagemLogo}
      />
      <h1>
        Sua solução completa em consórcios.
      </h1>
      <h2>
        Somos especializados em contemplação e venda estruturada, buscando soluções completas para nossos clientes.
      </h2>
      <p>
        Construa seu futuro com A2 Consórcios: Tudo o que você sonha, ao seu alcance.
      </p>

      <button className={styles.buttonPrincipal}>
        <Link to="https://api.whatsapp.com/send?phone=554522210322">
          Simule seu consórcio pelo WhatsApp
        </Link>
      </button>
    </div>
    <ParceirosSection/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Simule seu consórcio" />
export default IndexPage
