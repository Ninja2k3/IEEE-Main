import { NavbarDefault } from "./components/Navbar";
import { StickyNavbar } from "./components/Navbar2";
import { Intro } from "./components/Intro";
import { Texts } from "./components/Text";
import { ActivitiesTimeline } from "./components/Timeline";
import { Typography } from "@material-tailwind/react";
import {Map} from "./components/Map"
import { CarouselDefault } from "./components/Caro";
import { Footer } from "./components/Footer";
import { Intro2 } from "./components/Intro2";
import { SimpleCard } from "./components/Text2";

function App() {
  return (
    <div>
    
    <NavbarDefault className="overflow-scroll"/>
    
    <br></br>
    <br></br>
    <Intro2 id="home"/>
    <br></br>
    <SimpleCard/>

    <br></br><br></br>
    <div style={{display:"flex"}}>
      <div className="w-1 md:w-2/5">

      </div>
      
    </div>
    <Typography variant="h1" className="text-center">
      News
    </Typography>
    <br></br><br></br>
    <div style={{display:"flex"}}>
      <div className="w-1 md:w-[35rem]">

      </div>
    <div>
      
    <ActivitiesTimeline title="test1" content="North"/>
    <ActivitiesTimeline title="test2" content="East"/>
    <ActivitiesTimeline title="test3" content="West"/>
    <ActivitiesTimeline title="test4" content="South"/>
    <ActivitiesTimeline title="test5" content="No direction"/>
    
    </div>
    </div>
    <br></br><br></br>
    
    <div style={{display:"flex"}}>
      <div className="w-1 md:w-2/5">

      </div>
      
    </div>
    <br></br>
    <Typography className="text-center" variant="h1">
      Venue
    </Typography>
    <br></br>
    <Map/>
    <br></br>

    <br></br>

    <div style={{display:"flex"}}>
      <div className="w-1 md:w-2/5">

      </div>
      
    </div>
    <br></br>
    <Typography className="text-center" variant="h1">
      Images
    </Typography>
    <br></br>
    <CarouselDefault/>
    <Footer/>    
    
    
    </div>
  );
}

export default App;
