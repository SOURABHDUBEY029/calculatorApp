let Output = (props) =>{
    return(
        <div>
            <button onClick={()=>props.clear()}>c</button>
            <button>0</button>
            <button onClick={()=>props.output()}>=</button>
        </div>
    )
}

export default Output;