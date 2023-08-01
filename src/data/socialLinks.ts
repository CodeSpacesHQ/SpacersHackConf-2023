import {
  twitterIcon,
  instagramIcon,
  mediumIcon,
  linkedinIcon,
  facebookIcon,
} from "../assets/socials";

interface SocialLink {
  id: number;
  icon: string;
  social_link: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 0,
    icon: linkedinIcon,
    social_link: "https://www.linkedin.com/company/codespaceafrica",
  },
  {
    id: 1,
    icon: facebookIcon,
    social_link: "https://m.facebook.com/groups/946095563299608/?ref=share",
  },
  {
    id: 2,
    icon: instagramIcon,
    social_link: "https://www.instagram.com/codesspace",
  },
  {
    id: 3,
    icon: twitterIcon,
    social_link: "https://twitter.com/CodeSpaceHQ",
  },
  {
    id: 4,
    icon: mediumIcon,
    social_link: "https://codespaceafrica.medium.com/",
  },
];
