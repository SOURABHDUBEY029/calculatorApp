let Input = (props) =>{
    let click = (e) =>{
        if(props.val1 === 0){
            props.inputTask1(e.target.textContent);
        }else{
            props.inputTask2(e.target.textContent);
        }
    }
    return(
        <div className = "keypad">
          <div>
            <button onClick={(e)=>{click(e)}}>1</button>
            <button onClick={(e)=>{click(e)}}>2</button>
            <button onClick={(e)=>{click(e)}}>3</button>
          </div>
          <div>
            <button onClick={(e)=>{click(e)}}>4</button>
            <button onClick={(e)=>{click(e)}}>5</button>
            <button onClick={(e)=>{click(e)}}>6</button>
          </div>
          <div>
            <button onClick={(e)=>{click(e)}}>7</button>
            <button onClick={(e)=>{click(e)}}>8</button>
            <button onClick={(e)=>{click(e)}}>9</button>
          </div>
        </div>
    )
}

export default Input;