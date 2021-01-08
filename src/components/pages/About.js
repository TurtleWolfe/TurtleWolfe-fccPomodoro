import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css';


export const About = () => {
  return (
    <Container>
      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        title="Learn React"
      >
        <i className="ispace fab fa-react"></i> Learn React <i className="ispace fab fa-react"></i>
      </Row>
      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://getbootstrap.com/docs/4.0/components/navs/#fill-and-justify"
        target="_blank"
        rel="noopener noreferrer"
        title="Learn React"
      >
        <i class="ispace fab fa-bootstrap"></i> bootstrap <i class="ispace fab fa-bootstrap"></i>
      </Row>
      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://react-bootstrap.netlify.app/getting-started/introduction/"
        target="_blank"
        rel="noopener noreferrer"
        title="Learn React"
      >
        <i className="ispace fab fa-react"></i><i class="ispace fab fa-bootstrap"></i> react-bootstrap <i className="ispace fab fa-react"></i><i class="ispace fab fa-bootstrap"></i>
      </Row>
      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://www.npmjs.com/package/react-router-dom"
        target="_blank"
        rel="noopener noreferrer"
        title="Learn React"
      >
        <i className="ispace fab fa-react"></i> react-router-dom <i className="ispace fab fa-react"></i>
      </Row>
      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://fontawesome.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Awesome Fonts"
      >
        <i className="ispace fab fa-font-awesome-alt"></i> Font Awesome <i className="ispace fab fa-font-awesome-alt"></i>
      </Row>
      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links"
        target="_blank"
        rel="noopener noreferrer"
        title="Markdown Cheatsheet"
      >
        <i className="ispace fab fa-markdown"></i> Markdown Cheatsheet <i className="ispace fab fa-markdown"></i>
      </Row>
      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://youtu.be/SKXkC4SqtRk?t=865"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub Pages, Deploy & Domain: Traversy Media"
      >
        <i className="ispace fab fa-github"></i> Deployment to GitHub Pages <i className="ispace fab fa-github"></i>
      </Row>
      <Row as="a"
        className="ispace App-link justify-content-center"
        href="https://css-tricks.com/essential-meta-tags-social-media/"
        target="_blank"
        rel="noopener noreferrer"
        title="The Essential Meta Tags for Social Media"
      >
        <i className="ispace far fa-file-code"></i> Essential Meta Tags<i className="ispace far fa-file-code"></i>
      </Row>
    </Container>
  );
};

export default About;