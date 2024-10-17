import React, { Component } from "react";
import Navbar from "./navbar";
import HomePage from "./Home";
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
  }
];

const aspiringList = ['DevOps', 'Entrepreneur'];
const contactInfoList= [{
    link: 'https://x.com/payomi_kun',
    icon: ''
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
        return <HomePage skillList={skillList} aspiringList={aspiringList} contactInfoList={contactInfoList} />;
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
      <>
        <img src='../public/Asset 1.png' alt="Logo" />
        <Navbar onNavClick={this.handleNavClick} />
        {this.renderPage()}
      </>
    );
  }
}
export default Portfolio;