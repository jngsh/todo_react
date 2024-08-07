
function TabButton(props){

    console.log(props);
    // console.log(props.onParent);

    var event = props.onParent;
    var mesg = props.children;
    console.log("event: ", event);
    console.log("mesg: ", mesg);

    return(
        <div className="TabButton">
            <h2>TabButton</h2>
            <button onClick={()=>event(mesg)}>click</button>
        </div>
    );
}

export default TabButton;