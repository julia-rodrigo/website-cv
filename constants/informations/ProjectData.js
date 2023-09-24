import { aireserve, theme_park, ruby_rpg3 } from "@/public/assets/index"

const project_data = [
    {
        "id": 1,
        "title": "AirBnb clone on Next.js: AiReserve",
        "des": 
            <p>
                An AirBnb clone made in Next.js using custom hooks and using 
                <span className='font-bold dark:font-thin dark:text-textGreen'> Prisma and Mongodb </span>
                . Users can log in quickly using their google or git account, book reservations and register homes in listings.
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
                A team project with the target of creating a theme-park shopping experience in an android smartphone. 
                Characters are interactable and items are purchasable.
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
                A <span className='font-bold dark:font-thin dark:text-textGreen'> monster-catching rpg</span> game in Godot with designed character sprites. 
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