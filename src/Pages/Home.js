
import NaviBar from '../NavigatorBar/NaviBar'
import './Home.css'
import { useState } from 'react'
import ImgSlider from './ImgSlider'


function Home() {

  const[count,setCount]=useState(0)

  const decremnet =()=>{
  setCount(count-250)
  }

   const increment =()=> {
     setCount(count+250)
  }


  

return(
  <div className='mainBody'>
    <NaviBar></NaviBar><br></br>
      <div className='homeImg'>
        
        <ImgSlider/>
      </div>

    <div className='des'>
    <p>Coffee beans are the seeds of the coffee plant and the primary ingredient in coffee. 
    These small, green seeds are found inside the fruit (called cherries) of the coffee plant. 
    After harvesting, coffee beans undergo processes like roasting, which transforms them into the aromatic, 
    brown beans we recognize. The flavor of coffee beans can vary greatly depending on factors like their 
    origin, altitude, and how they’re processed. Popular varieties include Arabica, known for its smooth 
    nd nuanced taste, and Robusta, which has a stronger, more bitter profile.</p>
    </div><br/>

     <div className='carImage'>
      {/* < img src={Coffeebean} alt="" className=''/> */}

      <div className='cartTitle'>Coffee bean {count}g package<br/>
      <button onClick={increment}>Add</button><br/>
      
      <button onClick={decremnet}>Remove</button><br/>
        
      
        

      </div>
      </div> 
        
  </div>
)
}
export default Home
