import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ruby_images } from '@/public/assets/index'


const Ruby = () => {
  const date = new Date();

  const speech_bubbles = [
    "I am running!",
    "Anyone wants icecream?",
    "I can play guitar all day",
    "My dream has a grand piano in it.",
    "Hihihi~",
    "Blue roses buquet are best afterall!",
    "Pusheen is so cute",
    "I am based in Ireland :)",
    "I wanna join a band",
    "This teacup is so pretty",
    "And chocolate cake and hot coco",
    "Liella! and Kessoku songs :)))",
    "My library of books with nice covers~",
    "Cool! I like animations too",
    "Let me introduce you to my shadow",
    "Say 'hi'........ FIVE!!",
    "I hope the UI is easy to handle",
    "Dogs... I want to raise one",
    "Have you ever balanced on a switch?",
    "It's hard to breathe with your tongue out",
    "Over 20 degrees is already too hot!",
    "Wanna go Antarctica with me?",
    "I can only do 10 push ups",
    "You're doing great! I can't even cook.",
    "Don't cry. Hug!",
    "If I can backflip one day...one day",
    "You're right. One day is not enough!",
    "I really miss the headphone jacks",
    "Wooden boxes, small glass jars, pens",
    "My keychain collection started from one thoughtful gift",
    "There are so many people around me",
    "They're so good at drawing and singing",
    "I can make friends easily!",
    "I'm a really good person xD",
    "Have fat fate -> Believe in me!",
    "Believe me",
    "Me! Poof yo!",
    "Ka~ na~ ko~ lo~ve~",
    "Pajamas are really comfortable",
    "A friend gave me that pink snuggle-jumper",
    "Driving is like playing music",
    "I can see stars better because of my projector.",
    "I heard that time traveling forwards is actually real!",
    "Puppy, snow, star, spring, noir, monkey, nachan",
    "In the course I took up, I met a nice friend.",
    "I hope we can meet and talk",
    "Oh don't be! I don't like horror either.",
    "The color green is really beautiful.",
    "Trees are so beautiful.",
    "How many corners in the world?",
    "Pokemon and fire emblem!",
    "I wonder how far... wait step back aaand",
    "...jump!!!!!",
    "Dragons and witches... I want magic too",
    "My pirate ship figure was handmade in Italy",
    "Disneyland paris made me loose my voice",
    "I love my parents",
    "Coding realy passes time, its almost 2am",
    "I'm sure I've folded 1000 paper cranes",
    "My small team in f5 were really kind",
    "I've collected over thirthy 4-leaf clovers",
    "I'm never throwing away my animal figures",
    "I can't sleep well without tiger",
    "I broke my computer screen... ouch!",
    "I miss my huawei phone",
    "'Rymoquinn' was the name of my old car",
    "My current car is called Boogiepop btw",
    "The date is... " + date.getDate() + "." + (date.getMonth() + 1) + "." +  date.getFullYear() + ", time really flies!",
    "Join me!",
    "Light-mode took me a day! Do you like it?",
    "Pixel and Lottiefile animations are lively!",
  ]

  const [ speech, setSpeech ] = useState(speech_bubbles[0]);
  const [ ruby, setRuby ] = useState(ruby_images[0]);


  const handleClick = () => {
    setSpeech(speech_bubbles[Math.floor(Math.random() * speech_bubbles.length)])
    setRuby(ruby_images[Math.floor(Math.random() * ruby_images.length)])
  }

  useEffect(() => {
    handleClick()
  }, []);

  return (
      <div className='relative p-4'>
        <div className='h-[60px] relative flex flex-row '>
          <div className='group/ruby flex flex-row gap-6 items-center ' >
            <div className='flex items-center h-[40px] justify-center rounded-full dark:bg-transparent bg-[#e9e2a9] w-[40px]'>
              <Image
                src={ruby}
                alt="ruby_images"
                className='mx-10 sm:mx-0 cursor-pointer relative w-auto h-auto'
                onClick={handleClick}
              />
            </div>
            <span className='absolute dark:text-textGreen text-hoverDark font-medium text-sm upercase  bg-textWall/10 dark:bg-hoverColor px-4 py-[1px] ml-6 rounded-xl sm:translate-x-3 sm:group-hover/ruby:translate-x-8 translate-x-3 group-hover/ruby:translate-x-12 transition-all duration-300 opacity-0 group-hover/ruby:opacity-95 mr-5'>
              {speech}
            </span>
          </div>
        </div>
      </div>
  )
}

export default Ruby