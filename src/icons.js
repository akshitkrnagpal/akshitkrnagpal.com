import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF as facebook,
  faLinkedinIn as linkedin,
  faGithub as github,
  faTwitter as twitter,
} from '@fortawesome/free-brands-svg-icons';

// Override icon keys to change icon varients
facebook.iconName = 'facebook';
linkedin.iconName = 'linkedin';
github.iconName = 'github';
twitter.iconName = 'twitter';

library.add(facebook, linkedin, github, twitter);
