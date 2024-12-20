import React, { Component } from "react";
import Navbar from "../Nav/navbar";
import HomePage from "../Home/Home";
// import logo from '../logo.png'
import AboutPage from "../about/About";
//import ProjectsPage from "./Projects";
//import ResumePage from "./Resume";
//import ContactPage from "./Contact";
//import NotFoundPage from "./NotFound";
import Welcome from "../welcome/Welcome";

const skillList = [
  {
    name: 'Frontend Developer',
    tools: 'React | Next.js | Framer | Javascript | Tailwind'
  },{
    name: 'Backend Developer',
    tools: 'Python | Nodejs | TypeScript | FastApi'
  },
  {
    name: 'Web Designer',
    tools: 'Figma | Wordpress | AdobeXD'
  }
];

const aspiring = ['DevOps Engineer, Entrepreneur.'];
const contactInfoList= [
  {
    link: "https://github.com/TR1432",
    icon: "fa-brands fa-github",
    title: "My GitHub"
},{
    link: 'https://x.com/payomi_kun',
    icon: 'fa-brands fa-x-twitter',
    title: 'My Twitter'
},{
  link: 'https://www.instagram.com/ayo.mikun_/',
  icon: 'fa-brands fa-instagram',
  title: 'My Instagram'
},{
  link: 'https://www.linkedin.com/in/oluwapelumi-fadahunsi-3a6174294/',
  icon: 'fa-brands fa-linkedin-in',
  title: 'My LinkedIn'
},{
  link: 'mailto:ppfaddy@gmail.com',
  icon: 'fa-regular fa-envelope',
  title: 'My Gmail'
}]

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 'Home',
      render: false
    };
    this.start = this.start.bind(this)
  }

  renderPage() {
    const { page } = this.state;
    switch(page) {
      case 'Home':
        return <HomePage skillList={skillList} aspiring={aspiring} contactInfoList={contactInfoList} />;
      case 'About':
        return <AboutPage />;
//      case 'Projects':
//        return <ProjectsPage />;
//      case 'Resume':
//        return <ResumePage />;
//      case 'Contact':
//        return <ContactPage />;
      default:
        return <div />;
    }
  }

  handleNavClick = (navId) => {
    this.setState({ page: navId });
  }

  start() {
    setTimeout(() => {
      this.setState({render: true})
    }, 3300);
  }

  componentDidMount(){
    this.start()
  }
  
  render() { 
    return ( 
      <div className="content-container">
        <Welcome/>
        {!this.state.render ? null : (
         <>
             <img src="public/logo.png" alt="Logo" className="logo" />
             <Navbar current_page={this.state.page} onNavClick={this.handleNavClick} />
             {this.renderPage()}
         </>
      )}
      </div>
    );
  }
}
export default Portfolio;