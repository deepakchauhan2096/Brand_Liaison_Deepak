import "./App.css";
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
import Breadcrump from "./components/Breadcrump";
import Hero from "./components/Heros";
import Content from "./components/Content";
import Footer from "./components/Footer";
//headers image files
import ellipse from "./assets/icon/ellipse.svg";
import user from "./assets/icon/Group 3.svg";
import Desk from "./assets/icon/Group.svg";
import Chair from "./assets/icon/Group 4.svg";
import Mic from "./assets/icon/Group 5.svg";
//nav image files
import Vector1 from "./assets/icon/Vector1.svg";
import Vector from "./assets/icon/Vector.svg";
import customer from "./assets/icon/Group 487.svg";

function App() {
  const HeaderData = [ellipse, Mic, Chair, Desk, user];
  const navItems = [
    "Activities",
    "MyGov States",
    "Microsites",
    "Get to Know",
    "Help/Feedback",
  ];

  const navImages = [Vector, Vector1, customer];

  const contentItem = [
    {
      heading: "What is my MyGov",
      contents:
        "MyGov is an innovative platform to build a partnership between Citizens and Government with the help of technology for growth and development of India. Through this platform, the Government aims to encourage Citizen Participation towards Good Governance by seeking their ideas, suggestions and grass roots level contribution. Citizens can participate in this unique initiative of nation building. For the very first time in the history of this country, citizens from across India will come together to share their expert thoughts, ideas and suggestions with the Government in areas related to various policies, programs, schemes etc. MyGov aims to empower citizens to work hand in hand with the Government.",
    },
    {
      heading: "How can I join My Gov",
      contents:
        "MyGov is an innovative platform to build a partnership between Citizens and Government with the help of technology for growth and development of India. Through this platform, the Government aims to encourage Citizen Participation towards Good Governance by seeking their ideas, suggestions and grass roots level contribution. Citizens can participate in this unique initiative of nation building. For the very first time in the history of this country, citizens from across India will come together to share their expert thoughts, ideas and suggestions with the Government in areas related to various policies, programs, schemes etc. MyGov aims to empower citizens to work hand in hand with the Government.",
    },
    {
      heading: "For Government Employee",
      contents:
        "MyGov is an innovative platform to build a partnership between Citizens and Government with the help of technology for growth and development of India. Through this platform, the Government aims to encourage Citizen Participation towards Good Governance by seeking their ideas, suggestions and grass roots level contribution. Citizens can participate in this unique initiative of nation building. For the very first time in the history of this country, citizens from across India will come together to share their expert thoughts, ideas and suggestions with the Government in areas related to various policies, programs, schemes etc. MyGov aims to empower citizens to work hand in hand with the Government.",
    },
    {
      heading: "What are the modes of participation?",
      contents:
        "MyGov is an innovative platform to build a partnership between Citizens and Government with the help of technology for growth and development of India. Through this platform, the Government aims to encourage Citizen Participation towards Good Governance by seeking their ideas, suggestions and grass roots level contribution. Citizens can participate in this unique initiative of nation building. For the very first time in the history of this country, citizens from across India will come together to share their expert thoughts, ideas and suggestions with the Government in areas related to various policies, programs, schemes etc. MyGov aims to empower citizens to work hand in hand with the Government.",
    },
    {
      heading: "Groups: Collaborate with Government!",
      contents:
        "MyGov is an innovative platform to build a partnership between Citizens and Government with the help of technology for growth and development of India. Through this platform, the Government aims to encourage Citizen Participation towards Good Governance by seeking their ideas, suggestions and grass roots level contribution. Citizens can participate in this unique initiative of nation building. For the very first time in the history of this country, citizens from across India will come together to share their expert thoughts, ideas and suggestions with the Government in areas related to various policies, programs, schemes etc. MyGov aims to empower citizens to work hand in hand with the Government.",
    },
    {
      heading: "Discuss: Express Yourself",
      contents:
        "MyGov is an innovative platform to build a partnership between Citizens and Government with the help of technology for growth and development of India. Through this platform, the Government aims to encourage Citizen Participation towards Good Governance by seeking their ideas, suggestions and grass roots level contribution. Citizens can participate in this unique initiative of nation building. For the very first time in the history of this country, citizens from across India will come together to share their expert thoughts, ideas and suggestions with the Government in areas related to various policies, programs, schemes etc. MyGov aims to empower citizens to work hand in hand with the Government.",
    },
    {
      heading: "Do: Devote your time for nation building!",
      contents:
        "MyGov is an innovative platform to build a partnership between Citizens and Government with the help of technology for growth and development of India. Through this platform, the Government aims to encourage Citizen Participation towards Good Governance by seeking their ideas, suggestions and grass roots level contribution. Citizens can participate in this unique initiative of nation building. For the very first time in the history of this country, citizens from across India will come together to share their expert thoughts, ideas and suggestions with the Government in areas related to various policies, programs, schemes etc. MyGov aims to empower citizens to work hand in hand with the Government.",
    },
    {
      heading:
        "Blog: Stay updated and don’t miss out on important MyGov initiatives",
      contents:
        "MyGov is an innovative platform to build a partnership between Citizens and Government with the help of technology for growth and development of India. Through this platform, the Government aims to encourage Citizen Participation towards Good Governance by seeking their ideas, suggestions and grass roots level contribution. Citizens can participate in this unique initiative of nation building. For the very first time in the history of this country, citizens from across India will come together to share their expert thoughts, ideas and suggestions with the Government in areas related to various policies, programs, schemes etc. MyGov aims to empower citizens to work hand in hand with the Government.",
    },
  ];

  const footerItem = [
    {
      Activites: [
        "Groups",
        "Do",
        "Discuss",
        "Poll & Survey",
        "Blog",
        "Talk",
        "Compaigns",
        "Podcast",
        "Wall of Fame",
      ],
      GetToKnow: [
        "About MyGov",
        "Associate with MyGov",
        "MyGov Media",
        "Website Policies",
        "Link to us",
        "Work at MyGov",
        "Points & Badges",
        "FAQ",
        "MyGov Tenders",
      ],
      Help: [
        "Help",
        "Feedback",
        "Terms & Conditions",
        "Contact Us",
        "Weekly Newsletter",
        "Site Map",
        "Web Information Manager",
        "Public Grievance",
        "Usage of Aadhaar",
      ],
    },
  ];

  return (
    <>
      <Headers navItems={HeaderData} />
      <Navbar navItems={navItems} navItems1={navImages} />
      <Breadcrump />
      <Hero />
      <Content contentItem={contentItem} />
      <Footer footerItem={footerItem} />
    </>
  );
}

export default App;
