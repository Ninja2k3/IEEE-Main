import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader
  } from "@material-tailwind/react";
   
  export function SimpleCard() {
    return (
      <div className="md:flex">
        <div style={{width:"1px",marginLeft:"12%"}}>
        </div>
        <Card style={{width:"648px"}} color="emerald" className="mt-6 max-w-full">
        <CardBody>

          <Typography variant="h3" color="blue-gray" className="text-center mb-2">
            About CSITSS
          </Typography>
          <br></br>
          <Typography className="text-justify font-semibold">
          The 7th International Conference on "Computational Systems and Information Technology for Sustainable Solutions [CSITSS — 2023]" focuses on bringing together leading academicians, scientists, researchers, industry representatives, postdoctoral fellows and research scholars around the world to share their knowledge and research expertise in Renewable Energy, Robotics, Computing, Communication, E-mobility, Embedded Systems, (R2C2E2) from 2nd to 4th, November 2023.
          <br></br>
          <br></br>
The conference has been successfully organised for the past six years with participants from all over India and abroad. All peer-reviewed, selected and presented papers from the conference will be submitted for possible inclusion in IEEE digital library. The present version of the CSITSS-2023 aims to achieve higher standards by attracting original research works in the domain of R2C2E2. International speakers will deliver keynote talks on the latest technologies in these domains. The CSITSS-2023 ensures to provide a platform for researchers around the globe for knowledge exchange and networking.

          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          
        </CardFooter>
      </Card>
    <Card className="mt-12 md:ml-20 w-96">
        
    <Typography variant="h3" color="blue-gray" className="text-center mb-2">
            IN ASSOCIATION WITH
          </Typography>

      <CardHeader color="white" className="relative h-24 mt-4">
        <img
          src="https://brand.fiu.edu/_assets/images/fiu-logo.png"
          alt="card-image"
          className="object-fill mt-4"
        />
      </CardHeader>
        <br></br>
      <Typography variant="h3" color="blue-gray" className="text-center mt-12">
            TECHNICALLY CO-SPONSORED BY
          </Typography>

      <CardHeader color="white" className="relative mt-8 h-25">
        <img
          src="https://csitss.ieee-rvce.org/logo_IEEE_Banaglaore_Section.png"
          alt="card-image"
        />
      </CardHeader>
     
    </Card>
  

      </div>
    );
  }