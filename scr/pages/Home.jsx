import Banner from "../components/Banner";
import ApartementCard from "../components/ApartmentCard";
import bannerImage from "../assets/banner-kasa.jpg";
import "../styles/_Home.scss";

function Home() {
    return (
      <main>
        <div className="home-banner">
          <Banner 
            imgSrc={bannerImage}
            imgText="Chez vous, partout et ailleurs"
            imgAlt="Rochers au bord de la mer"
          />
        </div>
          <ApartementCard />
      </main>
    )
  }
  
  export default Home;