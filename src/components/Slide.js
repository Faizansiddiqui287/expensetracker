import React,{useState,useEffect} from 'react';
import newyork from './images/ny.jpg';
import paris from './images/la.jpg';
import chicago from './images/chicago.jpg';  
import "./style.css";

const Slide = () => {
    const [image,setImage] = useState(0)
    const [allImage, setALlImage] =useState([newyork,paris,chicago])
    useEffect(()=>{
        setInterval(()=>{
                setImage(image => image > 2 ? 0 : image+1)
        },5000)
    },[])
   
  return (
    <>    
    <div className='header' style={{textDecoration:'none'}}>
        <a href="#Home" style={{textDecoration:"none", color:"white", fontWeight:'bolder', fontSize:'20px'}}>Home</a>
        <nav className="navbar" style={{textDecoration:'none'}}>
            <ul className='navlist'>
                <li><a href="#Band">Band</a></li>
                <li><a href="#Band">Tour</a></li>
                <li><a href="#Band">Contact</a></li>
                <li><a href="#Band">More</a>
                
                </li>
            </ul>

        </nav>
        <input type="checkbox" id='hamburger' />
        <label htmlFor="hamburger" className='ham'>Menu</label>
    </div>
    <div>
      <img src={allImage[image]} style={{width:"100%"}} alt="img" />
     
    </div>
    </>

  );
}

export default Slide;
