/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import PlacesSection from "./components/PlacesSection";
import Footer from "./components/Footer";

const placesInIndia = [
  {
    title: "Taj Mahal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg",
    description: "A beautiful symbol of love located in Agra, India.",
  },
  {
    title: "Hampi",
    image: "https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg",
    description: "Ancient village in the south Indian state of Karnataka.",
  },
  {
    title: "Gateway of India",
    image:
      "https://pohcdn.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/hero_banner/Gateway-to-India_0.jpg",
    description:
      "Iconic arch-monument built during the 20th century in Mumbai, India.",
  },
  {
    title: "Jaipur",
    image:
      "https://assets.vogue.in/photos/5ce41ea8b803113d138f5cd2/16:9/w_1920,h_1080,c_limit/Jaipur-Travel-Shopping-Restaurants.jpg",
    description:
      "The Pink City of India, known for its historic palaces and forts.",
  },
  {
    title: "Charminar",
    image:
      "https://media1.thrillophilia.com/filestore/ckr8g2uz216nolkns4qd9yecdym0_0bb5438e6acd6cfe46095d36d96ca99e.jpg",
    description: "A historic monument and mosque located in Hyderabad, India.",
  },
  {
    title: "Lotus Temple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKWPHZYlcvLMSbgZIL7Ano9sHuYC_6hHe_w&s",
    description: "A Bahá'í House of Worship located in Delhi, India.",
  },
  {
    title: "Qutub Minar",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2022/08/marvin-castelino-z4GzALvJ8xs-unsplash-2-scaled.jpg",
    description: "A UNESCO World Heritage Site located in Delhi, India.",
  },
  {
    title: "Mysore Palace",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg",
    description: "A historical palace in Mysore, Karnataka, India.",
  },
  {
    title: "Golden Temple",
    image:
      "https://img.staticmb.com/mbcontent/images/uploads/2022/9/golden-temple_1663763909577.jpg",
    description: "A sacred Sikh gurdwara located in Amritsar, Punjab, India.",
  },
  {
    title: "Varanasi Ghats",
    image:
      "https://www.savaari.com/blog/wp-content/uploads/2023/09/Varanasi_ghats1.webp",
    description:
      "A series of steps leading to the banks of the Ganges River in Varanasi, India.",
  },
];

const placesAbroad = [
  {
    title: "Eiffel Tower",
    image:
      "https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/1:1/w_3633,h_3633,c_limit/GettyImages-468366251.jpg",
    description: "A wrought-iron lattice tower in Paris, France.",
  },
  {
    title: "Colosseum",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
    description: "An ancient amphitheater in Rome, Italy.",
  },
  {
    title: "Statue of Liberty",
    image:
      "https://cdn.mos.cms.futurecdn.net/XsbvTN6PRi6PZtgEGvRsiE-1200-80.jpg",
    description:
      "A colossal sculpture on Liberty Island in New York City, USA.",
  },
  {
    title: "Tokyo Tower",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSela-RJrgUzt3_rmCKr-A4vQBcuaUEd2zWrA&s",
    description: "A communications and observation tower in Tokyo, Japan.",
  },
  {
    title: "Sydney Opera House",
    image:
      "https://cdn.britannica.com/96/100196-050-C92064E0/Sydney-Opera-House-Port-Jackson.jpg",
    description: "A multi-venue performing arts center in Sydney, Australia.",
  },
  {
    title: "Burj Khalifa",
    image:
      "https://www.allplan.com/fileadmin/_processed_/6/5/csm_iStock-183346577_NEU_b998568fdd.jpg",
    description: "The tallest building in the world located in Dubai, UAE.",
  },
  {
    title: "Machu Picchu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg",
    description: "An ancient Incan citadel in the Andes Mountains, Peru.",
  },
  {
    title: "Christ the Redeemer",
    image:
      "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20231122221124_45448c583eabca7ad6be347939c641312d4ce7570209ad29d3345175aea14fec.jpg",
    description: "An iconic statue of Jesus Christ in Rio de Janeiro, Brazil.",
  },
  {
    title: "Great Wall of China",
    image:
      "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892506/EducationHub/photos/the-great-wall-of-china.jpg",
    description:
      "A series of fortifications built along the northern borders of China.",
  },
  {
    title: "Leaning Tower of Pisa",
    image:
      "https://images.ctfassets.net/cnu0m8re1exe/1tI0J6fFR4TQAU7YApSjcE/3aedcf058c5f2cd9212b86731541ac3d/shutterstock_745306897.jpg",
    description:
      "A freestanding bell tower in Pisa, Italy, known for its unintended tilt.",
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <PlacesSection
          title="Places to Visit in India"
          places={placesInIndia}
        />
        <PlacesSection title="Places to Visit Abroad" places={placesAbroad} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
