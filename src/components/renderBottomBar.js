import {SocialIcon} from 'react-social-icons';
import * as styles from "./styles.js"

const bottomBar = "© 2023 Vengeful Beans Coffee\n\n"

export const renderBottomBar = () => {
    return (
        <div style={styles.bottomBarStyles}>
            {bottomBar}
            <SocialIcon style={styles.socialMediaIconStyles} url="https://www.instagram.com/accounts/emailsignup/" network="instagram"/>
            <SocialIcon style={styles.socialMediaIconStyles} url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" network="facebook"/>
            <SocialIcon style={styles.socialMediaIconStyles} url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=fdae361784b94a2f" network="spotify"/>  
        </div>

    );
}