import React from 'react';
import './style.css';
import ProjectImage from './styled/project_image_style.js';
import ProjectCardBox from './styled/project_card_box_style.js';

class ProjectCard extends React.Component {
    render() {
        return (
            // <ProjectCardBox image={this.props.image} description={this.props.description}>
            <ProjectCardBox image={this.props.image} >
                <ProjectImage image={this.props.image} ></ProjectImage>
                <div className="project_description">
                    {/* {this.props.description} */}
                    {/*<h4 className="project_title">Shop With Me</h4>*/}
                    {/* <p class="description_p">Hack the North web app created using TD Da Vinci API to help you find shopping buddies based on your transaction history.</p> */}
                </div>
            </ProjectCardBox>
        );
    }
}

const keys = [1,2];
const listItems = keys.map((key) =>
    
        <ProjectCard image={key}/> 
        // description={key}/>}
    
);

class ProjectContainer extends React.Component {
    // change this as more images are required
    state = { image1: 1, image2: 2 }

    render() {
        return (
            <ul class="sectioning">
                {listItems}
            </ul>
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
