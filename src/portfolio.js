import React, { Component } from "react";
import Navbar from "./navbar";
import HomePage from "./Home";
import logo from './logo.png'
//import BlogPage from ".";
//import ProjectsPage from "./Projects";
//import ResumePage from "./Resume";
//import ContactPage from "./Contact";
//import NotFoundPage from "./NotFound";

const skillList = [
  {
    name: 'Frontend Developer',
    tools: 'React | Bootstrap | Javascript | HTML & CSS'
  },
  {
    name: 'FullStack Developer',
    tools: 'Next.js | Tailwind CSS | TypeScript | ECMAScript'
  },{
    name: 'Graphics Designer',
    tools: 'Illustrator | Photoshop'
  },{
    name: 'Web Designer',
    tools: 'Figma | Wordpress | AdobeXD'
  }
];

const aspiring = ['DevOps, Entrepreneur.'];
const contactInfoList= [{
    link: 'https://x.com/payomi_kun',
    icon: 'fa-brands fa-x-twitter',
    title: 'My Twitter'
},{
  link: 'https://www.instagram.com/ayo.mikun_/',
  icon: 'fa-brands fa-instagram',
  title: 'My Instagram'
},{

}]

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 'Home'
    };
  }

  renderPage() {
    const { page } = this.state;
    switch(page) {
      case 'Home':
        return <HomePage skillList={skillList} aspiring={aspiring} contactInfoList={contactInfoList} />;
//      case 'Blog':
//        return <BlogPage />;
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

  render() { 
    return ( 
      <div className="content-container">
        <img src={logo} alt="Logo" className="logo" />
        <Navbar onNavClick={this.handleNavClick} />
        {this.renderPage()}
      </div>
    );
  }
}
export default Portfolio;