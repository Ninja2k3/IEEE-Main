import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
   
  export function Intro2() {
    return (
        <div className="md:flex">
            <div style={{width:"15%"}}>

            </div>
             <Card
        shadow={false}
        className="relative grid h-[40rem] w-[1080px] items-center justify-center overflow-hidden text-center"
        style={{maxWidth:"100%"}}

      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://res.cloudinary.com/dmxwnn7mm/image/upload/v1689738072/mainGate_jyx5r7.jpg')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">

          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5]"
          >
            WELCOME TO CSITSS 2023
          </Typography>
          <Typography variant="lead" className="mb-4 text-white">
          7th International Conference on Computational Systems and Information Technology for Sustainable Solutions
<br></br><br></br>
        </Typography>

        <Typography
            variant="paragraph"
            color="white"
            className="mb-6 leading-[1.5]"
          >
            Conference Record #60515
            <br></br>
            Organized by
            <br></br>
            RV College of Engineering®
          </Typography>

          
        <a href="https://csitss.ieee-rvce.org/" style={{marginLeft:"10%"}}>
        
          <Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white mr-16 mb-4"
            src="https://upload.wikimedia.org/wikipedia/en/d/d2/R.V._College_of_Engineering_logo.png"
          />

<Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white mr-16 mb-4 "
            src="https://media.licdn.com/dms/image/C560BAQEwb3Dgn5b4SA/company-logo_200_200/0/1633499079764?e=2147483647&v=beta&t=sYnygWViwSqepmXgjh1CUOYmtZQ3NWo5Tl31d2n4nmo"
          />

<Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white mr-8 mb-4 object-fill"
            src="https://ieeebangalore.org/wp-content/uploads/2019/12/final-logo-2.png"
          />

<Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white mr-8 ml-8 mb-4"
            src="https://media.licdn.com/dms/image/C4E0BAQGoRdJYxmIDhQ/company-logo_200_200/0/1519856132409?e=2147483647&v=beta&t=wLUc7NSTRky79zJ7aRdyvSgH0oRkZlAb2ybb1MZ9ewI"
          />

        </a>
        </CardBody>
      </Card>
        </div>
    );
  }