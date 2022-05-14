export default function Home() {
    const home = "Välkommen! ";
    const showHome = true;

    if(showHome){
        return(
            <div className="home">
                <h3 >Home</h3>
                <h1 >{home}</h1>
                <h2> Svensk Hälsokost & speciella vitaminer för IT- studenter och utvecklare!</h2>
            </div>
        );
    }else{
        return <p>empty</p>
    }
}