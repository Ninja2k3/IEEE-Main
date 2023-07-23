import { Typography,Button } from "@material-tailwind/react";

export function Map(){
    return (
        <div>
        <br></br>
    <div  className="md:flex" >
        
        <div style={{width:"30%"}}></div>
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.75093956254!2d77.4987012!3d12.9237228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1690122146757!5m2!1sen!2sin" 
         width="480" height="480"style={{borderRadius:"10px",border:"1px groove black", maxWidth:"90%",marginLeft:"5%",marginTop:"0%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </div>
        <br></br>
        <div className="md:flex mt-5">
        <div style={{width:"40%"}}></div>
        <div>
        <Button color="green" className="max-h-10 mt-5 ml-[8rem]" >Open Maps</Button>
        <br></br>
        <Button color="green" className="mt-5 ml-[4.7rem]">Download List of Hotels</Button>
        </div>
        </div>
        </div>
    
    )
}