import { Carousel, Typography } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <div className="md:flex">
        <div style={{width:"25%"}}>

        </div>
        
        <Carousel className="rounded-xl w-full h-full md:w-1/2">
      <img
        src="https://github.com/naveenbteli/gallery/blob/master/Album/P2570137.JPEG?raw=true"
        alt="image 1"

        />
      <img
        src="https://raw.githubusercontent.com/naveenbteli/gallery/master/Album/3J2A4489.JPG"
        alt="image 2"

        
      />
      <img
        src="https://raw.githubusercontent.com/naveenbteli/gallery/master/Album/3J2A4657.JPG"
        alt="image 3"

        
      />
    </Carousel>
    </div>
  );
}