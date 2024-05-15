import Main from "@/components/Main";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "@/components/ui/button";
import { clients} from "@/lib/constant";


export default function Home()  {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 mt-0 w-full">
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-0 p-0">
    <div className="max-w-[50rem] m-0 p-0">
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 leading-3  text-center font-sans font-bold">
      Craft Dynamic Forms Effortlessly With Formify360
      </h1>
      
      <p className="text-neutral-500 max-w-[38rem] mx-auto my-2 text-l text-center relative z-10">
      Unleash your creativity with Formify - Design stunning forms that captivate your audience and gather insights like never before. Say goodbye to dull surveys and hello to interactive, engaging experiences. With Formify's intuitive drag-and-drop interface, crafting visually appealing forms is a breeze. 
      </p>
      <div className="flex items-center justify-center flex-col mt-5">
             <Button size={'lg'}
                  className="p-8 mb-8 z-10 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#d9d7d7] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-800  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
          </div>
    </div>
    <BackgroundBeams />
    </div>
    <div className="mt-0 bg-[#0A0A0A]"><InfiniteMovingCards
      className="mt-0 w-full"
      items={clients}
      direction="right"
      speed="slow"
      /></div>
    <div className="h-[45rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-0 p-0">
    <BackgroundBeams />
     <Main/>
    </div>
   </main>
    );
}

