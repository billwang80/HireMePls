import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ProjectCard from './project_card';
import ProjectContainer from './project_card';
import NavbarElement from './navbar_scroll';
import FadeText from './fade_text';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavbarElement />, document.getElementById('navigation'));
ReactDOM.render(<ProjectContainer />, document.getElementById('projects'));
ReactDOM.render(<FadeText text="Hi I'm Bill!" class_name="header_title"/>, document.getElementById('page_title'));
ReactDOM.render(<FadeText text="Projects" class_name="section_title"/>, document.getElementById('project_title'));
ReactDOM.render(<FadeText text="About" class_name="section_title_about"/>, document.getElementById('about_title'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
