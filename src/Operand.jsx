let Operand = (props) =>{
    let clickFun = (e) =>{
        props.operand(e.target.textContent);
    }
    return(
        <div className = "operand">
          <button onClick={(e)=>{clickFun(e)}}>+</button>
          <button onClick={(e)=>{clickFun(e)}}>-</button>
          <button onClick={(e)=>{clickFun(e)}}>*</button>
          <button onClick={(e)=>{clickFun(e)}}>/</button>
        </div>
    )
}

export default Operand;