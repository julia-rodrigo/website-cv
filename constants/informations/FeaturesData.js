
import { paper_hill, clock_bell, desk, jump } from "../../assets/index"
import { AiFillAppstore } from "react-icons/ai"
import { GiGamepad, GiGuitarBassHead } from "react-icons/gi"
import { BsDatabaseFillCheck } from "react-icons/bs"
import { SiAntdesign } from "react-icons/si"

const featureData = [
    {
        "id": 1,
        "title": "App and Web Development",
        "des": "I can build and deploy web applications using firebase and netflify. I've used the framework React.js for the last 2 years.",
        "image_path": paper_hill,
        "link": "feature",
        "icon": <AiFillAppstore />,
    },
    {
        "id": 2,
        "title": "Game Development",
        "des": "I have used godot for 1 year to make a fully functional game as part of my univeristy project. I plan to build a similar RPG pixel game in RealEngine.",
        "image_path": desk,
        "link": "feature",
        "icon": <GiGamepad />,
    },
    {
        "id": 3,
        "title": "API and Database backend",
        "des": "In my internship I have worked on API and manipulating databases through user auth and implementing CRUD system into the app.",
        "image_path": jump,
        "link": "feature",
        "icon": <BsDatabaseFillCheck />,
    },
    {
        "id": 4,
        "title": "Programming Languages",
        "des": "I have experimented and made working systems for various projects and assignments in university. I have basic Java, C# and Python skills",
        "image_path": clock_bell,
        "link": "feature",
        "icon": "",
    },
    {
        "id": 5,
        "title": "UI Designing",
        "des": "I've worked on front-end using HTML, CSS and TailwindCSS. In teams projects I've drawn ideas, wireframes and sketches of websites pages and character designs",
        "image_path": jump,
        "link": "feature",
        "icon": <SiAntdesign />,
    },
    {
        "id": 6,
        "title": "Musical Interest",
        "des": "I have a grade 8 certificate in piano and I can play the guitar. I look to improve these skills during my free time.",
        "image_path": jump,
        "link": "feature",
        "icon": <GiGuitarBassHead />,
    }
]

export default featureData;