import React from 'react';
import './style.css';
import ProjectImage from './styled/project_image_style.js';
import ProjectCardBox from './styled/project_card_box_style.js';

const titleList = [
    "Shop With Me",
    "Azure"
]
const descriptionList = [
    "Hack the North web app created using TD Da Vinci API to help you find shopping buddies based on your transaction history.",
    "Cute animated sprites designed for a puzzle game that teaches students how to code. The hero teaches basic concepts such as functions and iteration. Used by over 1000 students during hour of code."
]

class ProjectCard extends React.Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        return (
            // <ProjectCardBox image={this.props.image} description={this.props.description}>
            <ProjectCardBox /*onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onMouseUp={this.toggleHover}*/ onMouseDown={this.toggleHover}>
                {this.state.isHovered ? 
                    <div>
                        <div class="project_title">{ titleList[ this.props.title - 1] }</div>
                        <p class="description_p">{ descriptionList[ this.props.description - 1] }</p> 
                    </div>
                    :
                    <ProjectImage image = { this.props.image }> </ProjectImage> 
                }
            </ProjectCardBox>
            //<p class="description_p">Hack the North web app created using TD Da Vinci API to help you find shopping buddies based on your transaction history.</p> 
        );
    }
}

const keys = [1, 2];
const listItems = keys.map((key) =>

    <ProjectCard 
        image = { key } 
        title = { key }
        description = { key }
    />

);

class ProjectContainer extends React.Component {

    render() {
        return ( <ul class = "sectioning"> { listItems } </ul>
            // <div class="sectioning">
            //     <ProjectCard 
            //         image = {this.state.image1}
            //     />
            //     <ProjectCard 
            //         image = {this.state.image2}
            //     />
            // </div>
        );
    }
}

export default ProjectContainer;