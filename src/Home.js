import React from 'react'
import Particles from 'react-particles-js'
import {makeStyles} from "@material-ui/core"
import 'bootstrap/dist/css/bootstrap.min.css';



const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
    }
})

const Home = ()=>{

    const classes = useStyles()
    
    return(
        <div className='homestyle' id="section1">
           
                
            <>
            <Particles 
            canvasClassName={classes.particlesCanva}
            params={{
                particles: {
                    number:{
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 850
                        }
                        
                    },

                    shape: {
                        type: "circle",
                        stroke: {
                            width: 1
                        }
                    },

                    size:{
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10,
                            size_min: 0.1,
                            sync: true
                        }
                    }
                }
            }}/>

            </>
         </div>  
        
    );
};
export default Home;

      