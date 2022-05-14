import imgA from './imgages/pic1.jpg';

import imgC from './imgages/pic3.jpg';
import imgD from './imgages/pic4.jpg';




export default function Home() {
    const home = "Välkommen! ";
    const showHome = true;

    if(showHome){
        return(
            <div className="home">
                <h3 >Home</h3>
                <h1 >{home}</h1>
                <h2> Svensk Hälsokost & speciella vitaminer för IT- studenter och utvecklare!</h2>

                <img src={imgA} width="200px" height="200px"></img>
            
                <img src={imgC} width="200px" height="200px"></img>
                <img src={imgD} width="200px" height="200px"></img>
            </div>
        );
    }else{
        return <p>empty</p>
    }
}