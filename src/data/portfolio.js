
import ciscoImage from '../assets/projects/cisco-network.png';
import travelWebImage from '../assets/projects/tour-travel-web.png';
import tourAppImage from '../assets/projects/tour-guide-app.png';
import smartDustbinImage from '../assets/projects/smart-dustbin-iot.png';
import irrigationIotImage from '../assets/projects/smart-irrigation-iot.png';
import irrigationMlImage from '../assets/projects/smart-irrigation-ml.png';

/* ==========================================
   MD JUBAER - PORTFOLIO DATA
   Editable placeholder data
   Future Admin Dashboard + MongoDB integration
========================================== */


/* ==========================================
   01. PROFILE
========================================== */

export const profile = {
  name: 'MD JUBAER',
  title: 'Network Engineer & Software Developer',

  intro:
    'Computer Science & Engineering student focused on network infrastructure, routing and switching, and developing practical software solutions.',

  about: [
    'I am a Computer Science and Engineering student with a primary focus on Network Engineering. I am passionate about networking technologies, network infrastructure, routing and switching, and building reliable network solutions.',

    'Alongside networking, I have skills and project experience in Software Development, including web and Android application development. I also work with Internet of Things (IoT) and Machine Learning, developing projects that combine sensor-based systems with data analysis and prediction.',

    'I am also familiar with Microsoft Office applications such as Word, Excel, and PowerPoint for technical documentation, data organization, and professional presentations. I continuously work on improving my technical and professional skills.'
  ],

  photo: '',
  resumeUrl: '',

  github: 'https://github.com/zubaerrahmanapple-cyber',
  linkedin: '',

  email: 'zubaerrahmanapple@gmail.com',
  phone: '8801580678828',
  location: 'Bangladesh',
}


/* ==========================================
   02. NETWORKING TOPICS
========================================== */

export const networkTopics = [
  {
    id: 'rs',
    icon: 'Route',
    title: 'Routing & Switching',
    text: 'Packet forwarding, switching fundamentals, and the design of reliable LAN/WAN paths.'
  },
  {
    id: 'cisco',
    icon: 'Network',
    title: 'Cisco Networking',
    text: 'Configuring and troubleshooting Cisco devices in lab environments.'
  },
  {
    id: 'mikrotik',
    icon: 'Server',
    title: 'MikroTik',
    text: 'RouterOS configuration, firewall rules, queues and ISP-style deployments.'
  },
  {
    id: 'vlan',
    icon: 'Layers',
    title: 'VLAN & Inter-VLAN Routing',
    text: 'Segmenting networks with VLANs and routing between them.'
  },
  {
    id: 'routing',
    icon: 'GitBranch',
    title: 'Static Routing & OSPF',
    text: 'Static routes and dynamic link-state routing with OSPF.'
  },
  {
    id: 'isp',
    icon: 'Globe',
    title: 'ISP Networking',
    text: 'Customer onboarding, bandwidth control and upstream connectivity concepts.'
  },
  {
    id: 'fiber',
    icon: 'Cable',
    title: 'Fiber Optic Networking',
    text: 'Fiber links, splicing basics and optical network fundamentals.'
  },
  {
    id: 'security',
    icon: 'ShieldCheck',
    title: 'Network Security',
    text: 'Access control, firewalling and securing network infrastructure.'
  },
  {
    id: 'infra',
    icon: 'Building2',
    title: 'Network Infrastructure',
    text: 'Planning, cabling and administering day-to-day network operations.'
  },
]


/* ==========================================
   03. SKILLS
========================================== */

export const skills = [
  {
    category: 'Networking',
    items: [
      'Routing & Switching',
      'Cisco',
      'MikroTik',
      'VLAN',
      'OSPF',
      'Network Security',
      'Network Administration',
      'Fiber Optic Networking',
      'ISP Networking'
    ]
  },
  {
    category: 'Software Development',
    items: [
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Java'
    ]
  },
  {
    category: 'Android, IoT & Machine Learning',
    items: [
      'Android Development',
      'IoT Projects',
      'Machine Learning',
      'Linear Regression',
      'Data Prediction'
    ]
  },
  {
    category: 'Productivity & Documentation',
    items: [
      'MS Word',
      'MS Excel',
      'MS PowerPoint'
    ]
  }
]



/* ==========================================
   04. PROJECT CATEGORIES
========================================== */

export const projectCategories = [
  'All',
  'Networking',
  'Web Development',
  'Android',
  'IoT',
  'Machine Learning'
];


/* ==========================================
   05. PROJECTS
========================================== */

export const projects = [

  // PROJECT 01 - NETWORKING
  {
    id: 1,
    name: 'Cisco Packet Tracer Network Project',
    category: 'Networking',

    description:
      'A Cisco Packet Tracer networking project demonstrating network topology design, device configuration and connectivity testing.',

    tech: ['Cisco', 'Packet Tracer', 'Networking', 'Routing', 'Switching'],

    image: ciscoImage,

    overview: {
      objective: 'Design and implement a functional computer network using Cisco Packet Tracer.',
      problem: 'Network communication requires proper device configuration and network planning.',
      solution: 'Build a network topology and configure networking devices to establish communication.'
    },

    workingProcess: [
      'Design the network topology.',
      'Connect routers, switches and end devices.',
      'Configure IP addressing.',
      'Configure routing and switching.',
      'Apply required network configurations.',
      'Test connectivity using ping and other commands.'
    ],

    topology: {
      description: 'Cisco Packet Tracer network topology and device connections.',
      images: []
    },

    configurations: [],
    tests: [],
    gallery: [],

    resources: {
      github: '',
      report: '',
      video: '',
      demo: ''
    }
  },


  // PROJECT 02 - WEB DEVELOPMENT
  {
    id: 2,
    name: 'Tour and Travel Guide',
    category: 'Web Development',

    description:
      'A web-based tour and travel guide platform for exploring destinations, hotels, restaurants and travel information.',

    tech: ['HTML', 'CSS', 'JavaScript', 'JSON'],

    image: travelWebImage,

    overview: {
      objective: 'Develop a user-friendly platform for exploring travel destinations.',
      problem: 'Travelers need an organized platform to find destination and travel information.',
      solution: 'Provide destination information and travel-related services through a responsive website.'
    },

    features: [
      'Home Page',
      'Explore Destinations',
      'Hotels',
      'Restaurants',
      'Transport Information',
      'Login and Registration',
      'Contact Page'
    ],

    architecture: {
      description: 'Frontend website structure and data organization.',
      images: []
    },

    screenshots: [],
    gallery: [],

    resources: {
      github: '',
      report: '',
      video: '',
      demo: ''
    }
  },


  // PROJECT 03 - ANDROID
  {
    id: 3,
    name: 'Tour Guide App',
    category: 'Android',

    description:
      'An Android-based tour guide application designed to help users explore destinations and access travel information.',

    tech: ['Java', 'Android Studio', 'XML'],

    image: tourAppImage,

    overview: {
      objective: 'Develop an Android application for exploring travel destinations.',
      problem: 'Users need convenient access to travel information from mobile devices.',
      solution: 'Provide destination details and travel-related information through an Android application.'
    },

    features: [
      'Login and Registration',
      'Explore Destinations',
      'Destination Details',
      'Hotels',
      'Restaurants',
      'Transport',
      'Booking System'
    ],

    architecture: {
      description: 'Android application interface and activity structure.',
      images: []
    },

    screenshots: [],
    tests: [],
    gallery: [],

    resources: {
      github: '',
      report: '',
      video: '',
      demo: ''
    }
  },


  // PROJECT 04 - IOT SMART DUSTBIN
  {
    id: 4,
    name: 'Smart Dustbin',
    category: 'IoT',

    description:
      'An IoT-based smart dustbin project designed to improve waste management through automated monitoring and operation.',

    tech: ['IoT', 'Arduino', 'Sensors', 'Embedded Systems'],

    image: smartDustbinImage,

    overview: {
      objective: 'Develop a smart waste management solution.',
      problem: 'Traditional waste bins require manual monitoring and management.',
      solution: 'Use an IoT-based system to make dustbin operation and monitoring smarter.'
    },

    components: [],

    circuit: {
      description: 'Smart Dustbin circuit diagram and component connections.',
      images: []
    },

    workingProcess: [],

    surveyData: {
      description: 'Project testing observations and collected data.',
      readings: [],
      results: []
    },

    gallery: [],

    resources: {
      github: '',
      report: '',
      video: '',
      demo: ''
    }
  },


  // PROJECT 05 - IOT SMART IRRIGATION
  {
    id: 5,
    name: 'Smart Irrigation System',
    category: 'IoT',

    description:
      'An IoT-based smart irrigation project designed to monitor soil conditions and support automated watering.',

    tech: ['IoT', 'Arduino', 'Soil Moisture Sensor', 'Water Pump'],

    image: irrigationIotImage,

    overview: {
      objective: 'Develop an intelligent irrigation system using IoT technology.',
      problem: 'Manual irrigation can lead to inefficient water usage.',
      solution: 'Use sensor-based monitoring to support automatic irrigation.'
    },

    components: [
      'Arduino',
      'Soil Moisture Sensor',
      'Water Pump',
      'Relay Module',
      'Connecting Wires',
      'Power Supply'
    ],

    circuit: {
      description: 'Smart Irrigation System circuit diagram and component connections.',
      images: []
    },

    workingProcess: [
      'Read soil moisture using the sensor.',
      'Send sensor readings to the microcontroller.',
      'Process the moisture values.',
      'Compare readings with a threshold.',
      'Control the water pump based on soil conditions.'
    ],

    surveyData: {
      description: 'Soil moisture readings and actual project testing results.',
      readings: [],
      results: []
    },

    gallery: [],

    resources: {
      github: '',
      report: '',
      video: '',
      demo: ''
    }
  },


  // PROJECT 06 - MACHINE LEARNING SMART IRRIGATION
  {
    id: 6,
    name: 'Smart Irrigation System',
    category: 'Machine Learning',

    description:
      'A Machine Learning-based Smart Irrigation project focused on analyzing data and supporting irrigation-related predictions.',

    tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],

    image: irrigationMlImage,

    overview: {
      objective: 'Explore the use of Machine Learning in smart irrigation.',
      problem: 'Irrigation decisions can benefit from data analysis and prediction.',
      solution: 'Apply Machine Learning techniques to analyze irrigation-related data and generate predictions.'
    },

    dataset: {
      description: 'Dataset information used in the Smart Irrigation Machine Learning project.',
      source: '',
      size: '',
      attributes: []
    },

    preprocessing: [],

    model: {
      algorithm: '',
      trainingDescription: 'Add the actual model training methodology.',
      metrics: []
    },

    surveyData: {
      description: 'Actual dataset analysis, prediction results and model evaluation.',
      readings: [],
      results: []
    },

    visualizations: [],
    gallery: [],

    resources: {
      github: '',
      report: '',
      video: '',
      demo: ''
    }
  }

];

/* ==========================================
   06. EXPERIENCE
========================================== */

export const experience = []


/* ==========================================
   07. CERTIFICATIONS
========================================== */

export const certifications = []


/* ==========================================
   08. EDUCATION
========================================== */

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    school: '[Your university]',
    period: '[Years]',
    details: '[Edit from admin dashboard]'
  },
]
