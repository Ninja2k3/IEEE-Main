import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="https://upload.wikimedia.org/wikipedia/en/d/d2/R.V._College_of_Engineering_logo.png" alt="logo-ct" className="w-10" />
        <ul className="items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              R.V College of Engineering
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              RV Vidyanikethan Post, Mysuru Road Bengaluru - 560059
            </Typography>
          </li>
          
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      
    </footer>
  );
}