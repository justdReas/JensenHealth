// export default function StartPage() {
//   return <h1>Welcome!</h1>
// }


import imgA from './img/na1.jpg';






export default function StartPage() {
    const home = "Välkommen! ";
    const showHome = true;

    if(showHome){
        return(
            <div className="home">
                <h3  >StartSida</h3>
                <h1 >{home}</h1>
                <h2 > Svensk Hälsokost & speciella vitaminer för IT- studenter och utvecklare!</h2>

                <img style={{marginTop:"100px"}}src={imgA} width="500px" height="200px"></img>
            
            
            </div>
        );
    }else{
        return <p>empty</p>
    }
}





