export const categories = [
  "Tous les projets",
  "Géomatique",
  "Développement web",
  "3D & visualisation",
  "IoT",
] as const;

export type Category = (typeof categories)[number];

export interface Project {
  id: string;
  title: string;
  year?: number;
  domain: string;
  label: string;
  summary: string;
  description: string;
  content?: string;
  work?: string;
  categories: Category[];
  tags: string[];
  image: string;
  imageAlt: string;
  visual: string;
  source?: string;
  repository?: string;
  demo?: string;
  testimonial?: {
    name: string;
    role: string;
    text: string;
  };
}

const portfolioSource =
  "https://gtiazara.gitlab.io/portfolio/portfolio";

const sourceProjects: Project[] = [
  {
    id: "gemini",
    title: "GEMINI",
    year: 2023,
    domain: "Web Application",
    label: "WEB APPLICATION",
    summary: "Globe digital twin",
    description:
      "This tool is a prototype of a project supported by IGN, CEREMA and INRIA that wants to create a France Entière Digital Twin. The TSI student project \"Digital Gemini\" provides a basis for reflection for this project. The goal is to interconnect different data sources in a tool that will allow us to visualize them. The information we view is related to buildings.",
    content:
      'Here is the website to test the tool: [GEMINI demo](https://enzovenon.github.io/Gemini_numeriques/)',
    work: "3D web app based on the iTowns.js framework",
    categories: ["Géomatique", "Développement web", "3D & visualisation"],
    tags: ["JavaScript", "iTowns.js", "3D Web", "WebGL"],
    image: "gemini.png",
    imageAlt: "Interface du jumeau numérique GEMINI",
    visual: "visual-gemini",
    source: `${portfolioSource}/gemini_ing3/_gemini_ing3/`,
    demo: "https://github.com/EnzoVenon/Gemini_numeriques/",
  },
  {
    id: "geodev",
    title: "GEODEV",
    year: 2022,
    domain: "Web Application",
    label: "WEB APPLICATION",
    summary: "Geodetic data visualization tool",
    description:
      "In France there is recognised know-how in the field of geographical science. However, we do not have teaching tools for understanding the data used and how it helps us with positioning objects in space, tracking the Earth's deformations and understanding its internal structure.\n\nThe aim of the project is to develop a graphical interface to visualize and help understand the behaviour of geodetic data.\n\nLike the ICGEM calculation service developed by the German GFZ (http://icgem.gfz-potsdam.de), this tool has a clear and simple interface for scientific but above all pedagogical use.",
    content: "",
    work: "Geodetic web app development with Django",
    categories: ["Géomatique", "Développement web"],
    tags: ["Django", "Python", "JavaScript", "Geodetic Data"],
    image: "geodev.jpg",
    imageAlt: "Visualisation de données géodésiques dans GEODEV",
    visual: "visual-geodev",
    source: `${portfolioSource}/geodev/_geodev/`,
    demo: "http://gt200.pythonanywhere.com/",
  },
  {
    id: "geostat",
    title: "GEOSTATISTICS, SPATIAL INTERPOLATION",
    year: 2022,
    domain: "Web Application",
    label: "WEB APPLICATION",
    summary: "Spatial interpolation comparison tool",
    description:
      "The aim of the project is to represent interpolated surfaces generated from a temperature dataset using the interpolation methods that we implemented ourselves under Python. Moreover, we explored different parameters to fine-tune the outputs and compare them.",
    content: "",
    work: "Comparing different interpolation algorithms with Django",
    categories: ["Géomatique", "Développement web"],
    tags: ["Django", "Python", "Spatial Analysis", "Interpolation Algorithms"],
    image: "geostat.png",
    imageAlt: "Surface d’interpolation géostatistique des températures",
    visual: "visual-geostat",
    source: `${portfolioSource}/geostatistique/_geostat/`,
    demo: "http://gt200.pythonanywhere.com/",
  },
  {
    id: "minigis",
    title: "MINI-GIS APP",
    year: 2022,
    domain: "Desktop Application",
    label: "DESKTOP APPLICATION",
    summary: "Development of a desktop GIS app",
    description:
      "## MiniGIS\nThe master's students of the Information System Technologies program at France's National School of Geographical Sciences (ENSG) were invited to take part in a software development project. The project consists of developing a 2D/3D GIS using C++, Qt and OpenGL.\n\n## Project Description\nMiniGIS is a desktop GIS application capable of displaying, manipulating and analyzing various forms of spatial data. MiniGIS supports vector and raster data formats. The data represented in the application can come from web feeds, existing databases, or files from local or remote repositories.\n\n## My description\nDuring this project, we worked using the Scrum framework of the Agile project management method, with a front-end team and a back-end team. The front-end team's main library was OpenGL and the back-end team's main library was GDAL/OGR. I was part of the back-end team. I learned a lot about GDAL/OGR for handling GIS data. I also gained more experience working in a DevOps team.",
    content:
      '## Quick demo\n[Watch the project video on GitLab](https://gitlab.com/Jackgeo/MiniGIS/-/blob/dev/RuGIS%20video%20presentation.mp4)',
    work: "Agile/Scrum team · C++ · OpenGL",
    categories: ["Géomatique", "3D & visualisation"],
    tags: ["C++", "Qt", "OpenGL", "GDAL/OGR", "Agile/Scrum"],
    image: "minigis.gif",
    imageAlt: "Interface du logiciel SIG MiniGIS",
    visual: "visual-minigis",
    source: `${portfolioSource}/minigis/_minigis/`,
    demo: "https://gitlab.com/Jackgeo/MiniGIS/",
  },
  {
    id: "meteo",
    title: "Connected weather station",
    year: 2023,
    domain: "Web Application",
    label: "WEB APPLICATION",
    summary:
      "Weather station composed of a UI (Vue.js), a server (Express) and a microcontroller (Raspberry Pi).",
    description:
      "This is the development project of a weather station composed of a UI (Vue.js), a server (Express) and a microcontroller (Raspberry Pi). Each Raspberry Pi probe is connected to several sensors that provide information such as:",
    content:
      "- Temperature\n- Hygrometry\n- Atmospheric pressure\n- Rainfall\n- Brightness\n- Wind speed and direction\n- GPS position and time\n- ...\n\nHere is our project repository and detailed description (team of 2): https://gitlab.com/kingatsa/oeil-ouragan-project\n\nHere are the project instructions: https://ensg_dei.gitlab.io/web-az/js/exercices/projet-station-meteo/",
    work: "Weather station: UI, server and Raspberry Pi microcontroller",
    categories: ["Développement web", "IoT"],
    tags: ["Vue.js", "Express", "Node.js", "Raspberry Pi", "IoT"],
    image: "meteo.jpg",
    imageAlt: "Sonde centrale de la station météo connectée",
    visual: "visual-meteo",
    source: `${portfolioSource}/station_meteo_ing3/_station_meteo_ing3/`,
    demo: "https://gitlab.com/kingatsa/oeil-ouragan-project",
  },
  {
    id: "posidonia",
    title: "MULTIDISCIPLINARY INTERNSHIP IN GREECE",
    year: 2022,
    domain: "Research",
    label: "RESEARCH",
    summary: "Seagrass mapping using sonar data",
    description:
      "Seagrasses are a group of marine plants composed of four families. They play an important role in aquatic ecosystems, including water oxygenation, carbon storage, seafloor stabilization, reducing current velocity to protect beaches, and organic matter production. They also act as a food source and as spawning grounds and refuges for many organisms.\n\nSeagrass degradation has accelerated in recent years and is under constant pressure. Seagrass meadows are very sensitive because of their slow growth rate, vulnerability to anthropogenic impacts, and difficulty recovering once damaged.\n\nFor the targeted protection of these underwater habitats, low-cost, simple, reliable, accurate and fast mapping methodology is required. More importantly, publishing these data in international scientific databases, such as the European Marine Observation and Data Network (EMODnet), allows them to be granted protection from the government.\n\nTo map these underwater meadows, the host organization, Archipelagos, wants to apply several techniques that are simple, low-cost and reliable to evaluate seagrass distribution. These techniques include SONAR mapping, drone mapping (mostly as ground truth), SATELLITE mapping and CITIZEN mapping (study of local fishermen and marine tourists). The sonar data processing currently used by the organization is time-consuming and the result depends on the user's capabilities. Therefore, a processing chain that is rigorous, optimized and automatic was set up, allowing the mapping of Posidonia with sonar data to be faster, more accurate and reliable.\n\nThis processing chain was applied to the sonar data around Lipsi Island. The result was then uploaded to a recently built web mapping interface and also uploaded to EMODnet, the European Marine Observation and Data Network, a data center for marine data.",
    content:
      '## Link to the publication site\n[View the EMODnet publication](https://www.emodnet-ingestion.eu/submissions/submissions_details.php?menu=39&tpd=1122&step=001seagrass)',
    work: "Sonar data processing to map seagrass",
    categories: ["Géomatique"],
    tags: ["Python", "GIS", "Sonar Processing", "EMODnet", "Marine Mapping"],
    image: "posidonia.png",
    imageAlt: "Cartographie des herbiers de posidonie autour de Lipsi",
    visual: "visual-stage",
    source: `${portfolioSource}/stage_pluri/_stage_pluri/`,
    demo: "https://gitlab.com/GTiazara/seegrass-mapping-at-archipelagos",
    testimonial: {
      name: "TIM GrandJean",
      role: "GIS Supervisor",
      text: "Gaetan Tiazara completed his work placement at Archipelagos Institute at an excellent level, showing hard work, initiative and motivation to complete short-term goals, as well as to contribute to the wider picture of the conservation efforts of Archipelagos Institute. Gaetan was part of our team, reported regularly and delivered excellent work.",
    },
  },
  {
    id: "opengl",
    title: "OpenGL First Project",
    year: 2022,
    domain: "Desktop Application",
    label: "DESKTOP APPLICATION",
    summary: "This is my very first OpenGL project",
    description:
      "The aim of this project was to create a scene using a digital elevation model (DEM) in GeoTIFF format. A camera represents a player or user in the scene.\n\nThe scene:\n- is textured with one image combined with color using GLSL shaders\n- uses diffuse lighting for shading\n\nThe player or user:\n- can move around the 3D DEM scene\n- cannot go through the scene\n- can jump\n- can rotate\n\nSome 3D objects move in the scene without leaving the DEM.",
    content: "",
    work: "C++ · OpenGL 3D scene creation",
    categories: ["Géomatique", "3D & visualisation"],
    tags: ["C++", "OpenGL", "GLSL", "3D Graphics", "DEM"],
    image: "opengl.gif",
    imageAlt: "Scène 3D OpenGL construite à partir d’un modèle numérique de terrain",
    visual: "visual-opengl",
    source: `${portfolioSource}/opneglfirstproject/_openglfirstprojet/`,
    demo: "https://gitlab.com/GTiazara/opengltutorial/-/tree/main/DEM_TEST",
  },
  {
    id: "geomatique-python",
    title: "Geomatic project in Python",
    year: 2020,
    domain: "Desktop Application",
    label: "DESKTOP APPLICATION",
    summary: "Ridge search and talweg in a DTM/DEM raster",
    description:
      "The aim of this project was to detect ridges and talwegs in a digital terrain model (DTM) raster. The method simulates the flow of a drop of water from each raster pixel. The points where drops of water stagnate form the talweg.",
    content: "",
    work: "Traitement de données sonar",
    categories: ["Géomatique", "3D & visualisation"],
    tags: ["Python", "GIS", "Raster Processing", "DTM/DEM"],
    image: "geomatique-python.png",
    imageAlt: "Zone d’intérêt et talweg calculés à partir d’un raster de terrain",
    visual: "visual-python",
    source: `${portfolioSource}/projet_geomatique_python/_geomatique_python_ing1/`,
  },
  {
    id: "ticketing",
    title: "Ticketing system",
    year: 2022,
    domain: "Web Application",
    label: "WEB APPLICATION",
    summary: "Website for ticket reservation",
    description:
      "We had to analyze and develop a ticket system for a performance hall.\n\nDevelopment languages and tools were free.\n\nExpected user features (minimum):\n- Be able to buy one or more places;\n- Be able to cancel a reservation;\n- Be able to choose seats on a plan.\n\nThe developed platform must be capable of (at least):\n- Managing different shows on several dates;\n- Stopping sales if a date is full;\n- Managing users who buy or cancel seats;\n- Selling every other seat during Covid-19, for example.",
    content: "",
    work: "Web app · PHP CodeIgniter · Reservation system",
    categories: ["Développement web"],
    tags: ["PHP", "CodeIgniter", "JavaScript", "CSS", "HTML"],
    image: "ticketing.webp",
    imageAlt: "Interface du système de billetterie et plan des sièges",
    visual: "visual-ticketing",
    source: `${portfolioSource}/ticketing_system/_ticketing_system/`,
    demo: "https://gitlab.com/GTiazara/ticketingsystem",
  },
  {
    id: "recherche",
    title: "INITIATION À LA RECHERCHE",
    year: 2022,
    domain: "Research",
    label: "RESEARCH",
    summary: "Photogrammetry research project",
    description:
      "In order to bring a drone back to the exact location where a photo of an old postcard was taken and take a photo from the same point of view, we have to set up a toolchain that extracts the absolute position of the center of perspective of the postcard, its orientation and focal distance from the postcard photo using referenced geometry.",
    content: "",
    work: "Photogrammetry",
    categories: ["Géomatique", "3D & visualisation"],
    tags: ["Photogrammetry", "Computer Vision", "Geometric Analysis"],
    image: "recherche.png",
    imageAlt: "Illustration de l’étude de photogrammétrie sur carte postale ancienne",
    visual: "visual-research",
    source: `${portfolioSource}/initiation_recherche/_initiation_recherche/`,
    demo: "https://www.sampleorganization.org",
  },
  {
    id: "gnss",
    title: "Répartition de stations GNSS par recuit simulé",
    year: 2021,
    domain: "Web Application",
    label: "WEB APPLICATION",
    summary: "GNSS station optimization using simulated annealing",
    description:
      "This project involves optimizing GNSS station positioning using a simulated annealing algorithm to achieve optimal coverage and distribution.",
    content: "",
    work: "GNSS station positioning",
    categories: ["Géomatique", "Développement web"],
    tags: ["Python", "Optimization", "GNSS", "Simulated Annealing"],
    image: "gnss.png",
    imageAlt: "Carte de répartition des stations GNSS optimisée par recuit simulé",
    visual: "visual-gnss",
    source: `${portfolioSource}/recuisimule/_recuit_simule/`,
    demo: "http://gt200.pythonanywhere.com/",
  },
];

const gdaiProject: Project = {
  id: "gdai",
  title: "GDAI · Gestion du matériel",
  domain: "APPLICATION MÉTIER · DÉPLOIEMENT CLOUD",
  label: "APPLICATION CLOUD-READY",
  summary:
    "Application interne de suivi du matériel utilisé par les équipes de terrain.",
  description:
    "GDAI est une application interne de gestion du matériel utilisé par des équipes de terrain. Elle facilite le suivi des équipements, de leur attribution et de leur état.\n\nLe projet s’appuie sur une architecture web full-stack comprenant une interface Vue.js, une API Python/Flask, un service d’authentification et des bases de données relationnelles et NoSQL.\n\nCette réalisation m’a permis de travailler sur le développement full-stack, la conception et la sécurisation d’API, l’authentification, la modélisation de données, les échanges temps réel, ainsi que la conteneurisation et la préparation au déploiement cloud.",
  content:
    "## Compétences mobilisées\n- Frontend : Vue.js, Vite et interfaces de gestion.\n- Backend : Python, Flask et API REST.\n- Données : bases relationnelles et NoSQL.\n- Sécurité : authentification et gestion des accès.\n- Services : échanges temps réel et notifications.\n- Qualité : tests frontend et backend.\n- DevOps et cloud : Docker, intégration continue et orchestration de conteneurs.",
  work: "Application web full-stack · Vue.js · Flask · Kubernetes",
  categories: ["Développement web"],
  tags: [
    "Vue.js 3",
    "PWA",
    "Python / Flask",
    "API REST",
    "Authentification",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ],
  image: "gdai-architecture.png",
  imageAlt:
    "Schéma technique d’une application web de gestion de matériel",
  visual: "visual-gdai",
};

export const projects = [...sourceProjects, gdaiProject];