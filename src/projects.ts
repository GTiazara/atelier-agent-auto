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
    year: number;
    domain: string;
    label: string;
    summary: string;
    description: string;
    categories: Category[];
    tags: string[];
    image: string;
    imageAlt: string;
    visual: string;
    source: string;
    repository?: string;
    demo?: string;
}

const source = "https://gtiazara.gitlab.io/portfolio/portfolio";

export const projects: Project[] = [
    {
        id: "gemini",
        title: "GEMINI",
        year: 2023,
        domain: "JUMEAU NUMÉRIQUE",
        label: "DONNÉES & TERRITOIRES",
        summary:
            "Connecter les données du bâtiment pour explorer le territoire autrement.",
        description:
            "Un prototype de jumeau numérique réalisé à l’ENSG, dans le cadre d’une réflexion portée par l’IGN, le CEREMA et l’INRIA. Le projet interconnecte plusieurs sources de données sur les bâtiments pour les visualiser dans un même outil. Une première base de réflexion pour un jumeau numérique à l’échelle de la France.",
        categories: ["Géomatique", "Développement web", "3D & visualisation"],
        tags: ["Jumeau numérique", "Données géographiques", "Web"],
        image: "gemini.png",
        imageAlt:
            "Interface cartographique du projet GEMINI et visualisation des bâtiments",
        visual: "visual-gemini",
        source: `${source}/gemini_ing3/_gemini_ing3/`,
        repository: "https://github.com/EnzoVenon/Gemini_numeriques/",
        demo: "https://enzovenon.github.io/Gemini_numeriques/",
    },
    {
        id: "minigis",
        title: "MiniGIS",
        year: 2022,
        domain: "LOGICIEL SIG",
        label: "CARTOGRAPHIE 2D / 3D",
        summary:
            "Un SIG de bureau pour afficher, manipuler et analyser les données spatiales.",
        description:
            "Développement collectif d’un SIG 2D/3D en C++, Qt et OpenGL, capable de manipuler des données vectorielles et raster issues de fichiers, de bases de données ou de flux web. Au sein de l’équipe back-end, j’ai travaillé avec GDAL/OGR pour le traitement des données géographiques, dans une organisation Scrum et DevOps.",
        categories: ["Géomatique", "3D & visualisation"],
        tags: ["C++", "Qt", "OpenGL", "GDAL / OGR"],
        image: "minigis.webp",
        imageAlt:
            "Vue du logiciel MiniGIS avec son interface et ses couches géographiques",
        visual: "visual-minigis",
        source: `${source}/minigis/_minigis/`,
        repository: "https://gitlab.com/Jackgeo/MiniGIS/",
    },
    {
        id: "meteo",
        title: "L’Œil de l’ouragan",
        year: 2023,
        domain: "STATION MÉTÉO CONNECTÉE",
        label: "DU CAPTEUR À L’ÉCRAN",
        summary:
            "Observer la météo grâce à une station connectée et son interface web.",
        description:
            "Projet réalisé en binôme : une station météo combinant une interface Vue.js, un serveur Express et un Raspberry Pi. Les sondes mesurent notamment la température, l’humidité, la pression atmosphérique, la pluie, la luminosité, le vent et la position GPS.",
        categories: ["IoT", "Développement web"],
        tags: ["Vue.js", "Express", "Raspberry Pi"],
        image: "meteo.jpg",
        imageAlt:
            "Sonde et capteurs de la station météo connectée réalisée en binôme",
        visual: "visual-meteo",
        source: `${source}/station_meteo_ing3/_station_meteo_ing3/`,
        repository: "https://gitlab.com/kingatsa/oeil-ouragan-project",
    },
    {
        id: "geodev",
        title: "GEODEV",
        year: 2022,
        domain: "GÉODÉSIE & PÉDAGOGIE",
        label: "COMPRENDRE LA TERRE",
        summary:
            "Une interface pour rendre les données géodésiques plus accessibles.",
        description:
            "Conception d’une interface graphique destinée à visualiser et comprendre les données géodésiques : le positionnement dans l’espace, les déformations de la Terre et sa structure interne. Inspiré du service de calcul ICGEM du GFZ, le projet poursuit un objectif à la fois scientifique et pédagogique.",
        categories: ["Géomatique", "Développement web", "3D & visualisation"],
        tags: ["Géodésie", "Visualisation", "Sciences de la Terre"],
        image: "geodev.jpg",
        imageAlt: "Visualisation scientifique des données géodésiques dans GEODEV",
        visual: "visual-geodev",
        source: `${source}/geodev/_geodev/`,
    },
    {
        id: "opengl",
        title: "Un terrain en trois dimensions",
        year: 2022,
        domain: "RENDU 3D & OPENGL",
        label: "RELIEF EN MOUVEMENT",
        summary:
            "Explorer un modèle numérique de terrain dans une scène 3D interactive.",
        description:
            "Création d’une scène OpenGL à partir d’un modèle numérique de terrain au format GeoTIFF. Le rendu associe textures, couleurs et éclairage diffus à l’aide de shaders GLSL. Une caméra permet de parcourir le relief, tourner et sauter, avec gestion des collisions et objets animés.",
        categories: ["Géomatique", "3D & visualisation"],
        tags: ["C++", "OpenGL", "GLSL", "GeoTIFF"],
        image: "opengl.webp",
        imageAlt: "Rendu du relief et de ses textures dans la scène OpenGL",
        visual: "visual-opengl",
        source: `${source}/opneglfirstproject/_openglfirstprojet/`,
        repository:
            "https://gitlab.com/GTiazara/opengltutorial/-/tree/main/DEM_TEST",
    },
    {
        id: "ticketing",
        title: "Une place pour chaque spectateur",
        year: 2022,
        domain: "APPLICATION WEB",
        label: "BILLETTERIE EN LIGNE",
        summary:
            "Réserver, choisir sa place et gérer les représentations d’une salle de spectacle.",
        description:
            "Analyse et développement d’un système de billetterie : achat et annulation de réservations, choix des sièges sur un plan, gestion des utilisateurs et de plusieurs représentations. Le système prend en compte les séances complètes et des configurations de salle adaptées, comme la vente d’une place sur deux.",
        categories: ["Développement web"],
        tags: ["Application web", "Réservation", "Modélisation"],
        image: "ticketing.webp",
        imageAlt:
            "Interface de réservation et plan des places du système de billetterie",
        visual: "visual-ticketing",
        source: `${source}/ticketing_system/_ticketing_system/`,
        repository: "https://gitlab.com/GTiazara/ticketingsystem",
    },
    {
        id: "geostat",
        title: "Lire entre les points",
        year: 2022,
        domain: "GÉOSTATISTIQUES",
        label: "INTERPOLATION SPATIALE",
        summary:
            "De relevés de température à une surface continue : explorer l’interpolation.",
        description:
            "Implémentation en Python de méthodes d’interpolation spatiale sur un jeu de données de températures. Le projet compare les surfaces obtenues et explore l’influence des paramètres sur les résultats pour mieux comprendre le comportement de chaque méthode.",
        categories: ["Géomatique", "3D & visualisation"],
        tags: ["Python", "Interpolation", "Analyse spatiale"],
        image: "geostat.png",
        imageAlt: "Surface de température calculée par interpolation spatiale",
        visual: "visual-geostat",
        source: `${source}/geostatistique/_geostat/`,
    },
];
