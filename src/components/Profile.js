import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, fa500px } from '@fortawesome/free-brands-svg-icons'
import { StyledH1 } from '../core/Style';

const Profile = (props) => {
    return (
        <div>
            <StyledH1>Patrick Murphy</StyledH1>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={fa500px} />
        </div>
    )
}

export default Profile;