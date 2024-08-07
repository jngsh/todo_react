import './Box.css';

function Box(){

    function click(e){
        console.log(e.target);
        if(e.target.innerText === ""){
            e.target.innerText = "X";
        }else{
            e.target.innerText = "";
        }
    }

    return(
        <div className="Box">
            <button type="button" onClick={click}></button>
            <button type="button" onClick={click}></button>
            <button type="button" onClick={click}></button>
            <br></br>
            <button type="button" onClick={click}></button>
            <button type="button" onClick={click}></button>
            <button type="button" onClick={click}></button>
            <br></br>
            <button type="button" onClick={click}></button>
            <button type="button" onClick={click}></button>
            <button type="button" onClick={click}></button>
        </div>
    );
}

export default Box;