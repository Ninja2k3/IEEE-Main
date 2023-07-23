import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function Texts() {
  return (
    <>
    <div className="md:flex">
    <div className="w-10 ml-10" > </div>
    <div className="mx-2 w-full rounded-md md:w-1/2 ">
        <Typography variant="h2" color="gray">
        About CSITSS
        </Typography>
      <Typography variant="lead" className="text-left font-bold">
      The 7th International Conference on "Computational Systems and Information Technology for Sustainable Solutions [CSITSS — 2023]" focuses on bringing together leading academicians, scientists, researchers, industry representatives, postdoctoral fellows and research scholars around the world to share their knowledge and research expertise in Renewable Energy, Robotics, Computing, Communication, E-mobility, Embedded Systems, (R2C2E2) from 2nd to 4th, November 2023.
The conference has been successfully organised for the past six years with participants from all over India and abroad. All peer-reviewed, selected and presented papers from the conference will be submitted for possible inclusion in IEEE digital library. The present version of the CSITSS-2023 aims to achieve higher standards by attracting original research works in the domain of R2C2E2. International speakers will deliver keynote talks on the latest technologies in these domains. The CSITSS-2023 ensures to provide a platform for researchers around the globe for knowledge exchange and networking.        </Typography>

 

    <br></br>
       <Button variant="gradient" className="rounded-full">
         Submit Paper
       </Button>
    <br></br>
    <Typography color="black">
    </Typography>
    <br></br>
     

    </div>
   
 
<br></br>
    <div className="mx-6 rounded text-left mt-1 md:mt-20 ">
      <h4 class=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent">In association with</h4>
      <img src="https://brand.fiu.edu/_assets/images/fiu-logo.png" style={{display:"block",marginLeft:"auto",marginRight:"auto"}} class="h-auto w-auto object-cover"/>
      <br></br>
      <br></br>

      <h4 class=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent">Technically co-sponsored by</h4>
      <a href="https://ieeebangalore.org/" target="_blank" rel="noreferrer"><img class="object-cover" style={{width:"464px",height:"84px",display:"block",marginLeft:"auto",marginRight:"auto"}} src="https://csitss.ieee-rvce.org/logo_IEEE_Banaglaore_Section.png" alt="ieee_bangalore_logo"/></a>
    </div>

      </div>
      
    </>
  );
}