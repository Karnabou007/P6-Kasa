import Banner from "../components/Banner";
import bannerImage from "../assets/banner-about.jpg";
import Collapse from "../components/Collapse";
import "../styles/_About.scss"

function About() {
    return (
      <main>
        <div className="about-banner">
          <Banner 
            imgSrc={bannerImage}
            imgAlt="Paysage de montagnes"
          />
        </div>
        <div className="accordions-wrapper-about">
          <Collapse 
            categoryName="Fiabilité"
            categoryDetails="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <Collapse 
            categoryName="Respect"
            categoryDetails="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse 
            categoryName="Service"
            categoryDetails="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Collapse 
            categoryName="Sécurité"
            categoryDetails="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </main>
    )
  }
  
  export default About;