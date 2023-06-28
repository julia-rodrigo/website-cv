import { paper_hill, clock_bell, desk, jump } from "@/public/assets/index"


const project_data = [
    {
        "id": 1,
        "title": "Amazon Clone with Firebase Database",
        "des": 
            <p>
                A one page Amazon shopping system on 
                <span className='text-textGreen'> React </span>
                with Firebase database and hosting. You can add goods to your basket.
            </p>,
        "image_path": paper_hill,
        "git_link": "https://github.com/julia-rodrigo/amazon-clone-with-firebase",
        "web_link": "https://again-d5564.web.app/",
        "tags": ["next.js", "typescript.js", "next-auth", "stripe"],
        "video_link": ""
    },
    {
        "id": 2,
        "title": "Godot Theme Park",
        "des": 
            <p>
                In this team project, I designed the backend system and UI. 
                All objects were made on blender from other teammates. 
                You can interact with characters by touching the screen and buy items off them.
            </p>,
        "image_path": jump,
        "git_link": "https://github.com/julia-rodrigo/godot-theme-park",
        "web_link": "",
        "tags": ["next.js", "typescript.js", "next-auth", "stripe"],
        "video_link": ""
    },
    {
        "id": 3,
        "title": "Godot Ruby RPG",
        "des": 
            <p>
                A <span className='text-textGreen'> pokemon-like rpg</span> game in Godot with some character sprites I made. 
                There is no variety in the monster sprites as I focused on the inner mechanics of the game. 
                You complete three quests and build a team to complete the game.
            </p>,
        "image_path": clock_bell,
        "git_link": "https://github.com/julia-rodrigo/ruby-v1",
        "web_link": "",
        "tags": ["next.js", "typescript.js", "next-auth", "stripe"],
        "video_link": ""
    },
    {
        "id": 4,
        "title": "Website CV",
        "des": 
            <p>
                This is the CV you are viewing now. 
                I plan to make a login system so that I would not need to keep updating the website 
                to add more projects throught the CRUD system and have user authentication
            </p>,
        "image_path": desk,
        "git_link": "https://github.com/julia-rodrigo/website-cv",
        "web_link": "",
        "tags": ["next.js", "typescript.js", "next-auth", "stripe"],
        "video_link": ""
    }
]

export default project_data;