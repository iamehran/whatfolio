/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mehran's Portfolio",
  description:
    "A passionate individual  who is curious about working on different projects and ideas. Bringing forth a motivated attitude and a variety of powerful skills. Committed to utilizing my skills to further the mission of a company.",
  og: {
    title: "Mehran Firdous Portfolio",
    type: "website",
    url: "http://iamehran.com/",  // i dont have a domain as of now.
  },
};

//Home Page
const greeting = {
  title: "Mehran Firdous",
  logo_name: "MehranFirdous",
  nickname: "iamehran",
  subTitle:
    "A passionate individual  who is curious about working on different projects and ideas. Bringing forth a motivated attitude and a variety of powerful skills. Committed to utilizing my skills to further the mission of a company.",
  resumeLink:
    "https://drive.google.com/file/d/1QEer3sUk_7Hv6sJZflttZEWg2yZAyjxM/view?usp=share_link",
  portfolio_repository: "https://github.com/iamehran/whatfolio",
  githubProfile: "https://github.com/iamehran",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/iamehran",
  // linkedin: "https://www.linkedin.com/in/reachmehran/",
  // gmail: "firdousmehran@gmail.com",
  // gitlab: "https://gitlab.com/.",
  // facebook: "https://www.facebook.com//",
  // twitter: "https://twitter.com/mehran_firdous",clear
  // instagram: "https://www.instagram.com/iamehraan/"

  {
    name: "Github",
    link: "https://github.com/iamehran",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/reachmehran/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:firdousmehran@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/mehran_firdous",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/iamehraan/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Trying to learn and develope mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JAVA",
          fontAwesomeClassname: "mdi:language-java",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Mehran0/",
    },
  //   {
  //     siteName: "HackerRank",
  //     iconifyClassname: "simple-icons:hackerrank",
  //     style: {
  //       color: "#2EC866",
  //     },
  //     profileLink: "https://www.hackerrank.com/layman_brother",
  //   },
  //   {
  //     siteName: "Codechef",
  //     iconifyClassname: "simple-icons:codechef",
  //     style: {
  //       color: "#5B4638",
  //     },
  //     profileLink: "https://www.codechef.com/users/ashutosh_1919",
  //   },
  //   {
  //     siteName: "Codeforces",
  //     iconifyClassname: "simple-icons:codeforces",
  //     style: {
  //       color: "#1F8ACB",
  //     },
  //     profileLink: "http://codeforces.com/profile/layman_brother",
  //   },
  //   {
  //     siteName: "Hackerearth",
  //     iconifyClassname: "simple-icons:hackerearth",
  //     style: {
  //       color: "#323754",
  //     },
  //     profileLink: "https://www.hackerearth.com/@ashutosh391",
  //   },
  //   {
  //     siteName: "Kaggle",
  //     iconifyClassname: "simple-icons:kaggle",
  //     style: {
  //       color: "#20BEFF",
  //     },
  //     profileLink: "https://www.kaggle.com/laymanbrother",
  //   },
   ],
};

const degrees = {
  degrees: [
    {
      title: "Chitkara Institute of Engineering & Technology",
      subtitle: "BE Computer Science",
      logo_path: "chitkara1.png",
      alt_name: "CIET Punjab",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
        "⚡ I was active in various societies and clubs in the university ",
      ],
      website_link: "https://www.chitkara.edu.in/engineering/colleges-punjab-chandigarh",
    },
    {
      title: "Jamia Millia Islamia",
      subtitle: "Higher Secondary Education (Non-Medical)",
      logo_path: "jamia.png",
      alt_name: "JMI",
      duration: "2018 - 2020",
      descriptions: [
        // "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        // "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        // "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.jmicoe.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "JAVA Certification",
      subtitle: "- Coding Ninjas",
      logo_path: "cn-logo.png",
      certificate_link:
        "https://certificate.codingninjas.com/verify/b8c7484ba23b11a0",
      alt_name: "Chitkara University",
      color_code: "black",
    },
    {
      title: "Advance Web Developement",
      subtitle: "- Coding Ninjas",
      logo_path: "cn-logo.png",
      certificate_link:
        "https://certificate.codingninjas.com/verify/abdb2cc9a5e8d9d2",
      alt_name: "coding ninja",
      color_code: "orange",
    },
    {
      title: "AWS Academy Graduate",
      subtitle: "- Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/d5a1b0fb-2076-4f01-97d4-d52b1a239d44?source=linked_in_profile",
      alt_name: "Amazon",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "CISCO Cybersecurity",
      subtitle: "- Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.credly.com/badges/5e69c315-be13-4604-9aff-b22643103962/public_url",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "No job Experience filhal",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "ABC",
          company: "XYZ",
          company_url: "https://google.com/",
          logo_path: "chitkara.png",
          duration: "June 2020 - Aug 2024",
          location: "World",
          description:
            "Hello",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Virtual Assistant",
          company: "Virtualyyst.",
          company_url: "https://virtualyyst.com/home",
          logo_path: "chitkara.png",
          duration: "May 2022 - Aug 2022",
          location: "Remote",
          description:
            "Worked closely with different clients, developed websites and business profiles for them.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Head of Operations",
          company: "COSMIC-The Business Society",
          company_url: "https://www.cosmiccu.live/",
          logo_path: "cosmic.png",
          duration: "June 2020 - present",
          location: "Rajpura Punjab",
          description:
            "Aiming to encourage students to analyze business case studies, improve communication, and investigate simulations for various real-life management services, Cosmic is a business society for students at Chitkara University.",
          color: "#4285F4",
        },
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web dev and full stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "No Publications Yet",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mehranback.jpg",
    description:
      "I am available on almost every social media. You can message me.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Maybe I will write some in future.",
    link: "https://twitter.com/mehran_firdous/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Model Town, Sopore, 193201, Baramulla, Kashmir.",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
