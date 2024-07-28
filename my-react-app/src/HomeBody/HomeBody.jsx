import style from "./HomeBody.module.css"
import { Parallax } from "react-parallax";
import background from "/background.jpg"

function HomeBody() {
    return (
        <>
            <Parallax strength={600} bgImage={background}>
                <div className={style.bg}>
                    
                        <div className={style.text}>
                            <h1>Thingy Development</h1>
                            <p>This is a demo portfolio of Thingy</p>
                        </div>
                        <div className={style.button}>
                            <button>About Me</button>
                            <button>Portfolio</button>
                        </div>
                    
                </div>
                
            </Parallax>
            
        </>
    )
}

export default HomeBody