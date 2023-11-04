import ImageCarousel from "@/components/Carrousel"
import ImageCarouselSkeleton from "@/components/ImageCarouselSkeleton";
import {Suspense} from "react"

const Skills = () => {
    return <div className="bg-gray-100 w-screen h-full lg:h-[calc(100vh-4rem)]">
          <Suspense fallback={<ImageCarouselSkeleton />} > 
            <ImageCarousel/>
          </Suspense>
        </div>
  };
  
  export default Skills;