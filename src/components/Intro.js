import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
  } from "@material-tailwind/react";
  import "animate.css/animate.min.css";

  
  export function Intro() {
    return (
    <div>
    
<a href="https://csitss.ieee-rvce.org/">
<img src="https://csitss.ieee-rvce.org/RVCE%20NEW-HEADER.png" style={{backgroundColor:"rgba(0,0,0,0.75)",filter:"blur(0px)",zIndex:"1",position:"absolute",borderRadius:"10rem",marginLeft:"41rem",marginTop:"2rem"}} className="h-1 w-1 rounded-md md:h-24 md:w-72"></img>
<img src="https://csitss.ieee-rvce.org/logo_IEEE_Main.png" style={{backgroundColor:"rgba(0,0,0,0.75)",filter:"blur(0px)",zIndex:"1",position:"absolute",borderRadius:"10rem",marginLeft:"60rem",marginTop:"2rem"}} className="h-1 w-1 rounded-md md:h-24 md:w-72"></img>
<img src="https://csitss.ieee-rvce.org/logo_IEEE_Banaglaore_Section.png" style={{backgroundColor:"rgba(0,0,0,0.75)",filter:"blur(0px)",zIndex:"1",position:"absolute",borderRadius:"10rem",marginLeft:"60rem",marginTop:"10rem"}} className="h-1 w-1 rounded-md md:h-24 md:w-72"></img>
<img src="https://csitss.ieee-rvce.org/logo_rvce_ieee.png" style={{backgroundColor:"rgba(0,0,0,0.75)",filter:"blur(0px)",zIndex:"1",position:"absolute",borderRadius:"10rem",marginLeft:"41rem",marginTop:"10rem"}} className="h-1 w-1 rounded-md md:h-24 md:w-72"></img>
</a>
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-80% items-end justify-center overflow-hidden text-center mx-4"
        
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://res.cloudinary.com/dmxwnn7mm/image/upload/v1689738072/mainGate_jyx5r7.jpg')] bg-cover bg-center"
        
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full" />
        </CardHeader>

        
        
        <CardBody className="relative py-14 px-6 md:px-12">
        
        <div style={{backgroundColor:"#00000054",borderRadius:"10px",padding:"1rem" }}>

        <Typography variant="h3" className="font-bold text-center" color="deep-orange" >
          WELCOME TO CSITSS-2023
          </Typography>

          <Typography color="white" variant="lead" className="mt-2 text-center font-semibold">

          7th International Conference on Computational Systems and Information Technology for Sustainable Solutions

          </Typography>

          <Typography color="white" className="mt-2 font-semibold text-center">
            Conference Record
        </Typography>
            
            
        <Typography color="white" className="mt-2 font-semibold text-center">
        Organized by 
        <br></br>
        R.V College of Engineering®
        </Typography>
        
        <div>
        <Button className="ml-10 mr-20 mt-10">Submit Paper</Button>
        <Button className="ml-10 mr-20 mt-10">Timeline</Button>
        <Button className="ml-10 mr-20 mt-10">Download Brochure</Button>
        </div>
        
        </div>
        </CardBody>
        
      </Card>
     
    </div>
    );
  }