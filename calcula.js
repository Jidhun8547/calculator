const appendToDisplay=(data)=>{
    display.value+=data
}
const clearDisplay=()=>{
    display.value=""
}
const backspace=()=>{
    display.value=display.value.slice(0, -1)
}
const showResult=()=>{
    try{
        display.value=eval(display.value)
    }
    catch(err){
        console.log(err);
        display.value=""
        display.placeholder="invalid expression"
        

    }
    finally{
        console.log("finaly block");
        
    }
}