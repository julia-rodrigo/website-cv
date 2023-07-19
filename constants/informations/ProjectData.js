import { aireserve, theme_park, ruby_rpg3 } from "@/public/assets/index"

const project_data = [
    {
        "id": 1,
        "title": "AirBnb clone on Next.js: AiReserve",
        "des": 
            <p>
                An AirBnb clone made in Next.js using custom hooks and using 
                <span className='font-bold dark:font-thin dark:text-textGreen'> Prisma and Mongodb </span>
                . You can log in quickly using your google or git account. You can book reservations and register your home as a Bmb.
            </p>,
        "image_path": aireserve,
        "git_link": "https://github.com/julia-rodrigo/AiReserve",
        "web_link": "https://aireserve.vercel.app/",
        "tags": ["Next.js", "Typescript", "Next-auth", "Prisma", "Mongodb"],
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
        "image_path": theme_park,
        "git_link": "https://github.com/julia-rodrigo/godot-theme-park",
        "web_link": "",
        "tags": ["Godot", "Blender", "GDscript"],
        "video_link": "https://youtu.be/kf_XYYIhaTY"
    },
    {
        "id": 3,
        "title": "Godot Ruby RPG",
        "des": 
            <p>
                A <span className='font-bold dark:font-thin dark:text-textGreen'> pokemon-like rpg</span> game in Godot with some character sprites I made. 
                There is no variety in the monster sprites as I focused on the inner mechanics of the game. 
                You complete three quests and build a team to complete the game.
            </p>,
        "image_path": ruby_rpg3,
        "git_link": "https://github.com/julia-rodrigo/ruby-v1",
        "web_link": "",
        "tags": ["Godot", "Piskel", "GdScript"],
        "video_link": "https://youtu.be/WJKnpMxstjI"
    },
]

export default project_data;