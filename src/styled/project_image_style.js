import '../style.css';
import styled from 'styled-components';

// import dict of images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

// styling for the images on cards
const ProjectImage = styled.div`
    position: absolute;
    float: left;
    height: 378px;
    width: 540px;
    background-size: cover;
    border-radius: 10px;
    background-image: ${props => {
        if (props.image === 1) return 'url(' + images['da_vinci.jpg'] + ')'
        return 'url(' + images['education_game.png'] + ')'
    }};
`

export default ProjectImage;
