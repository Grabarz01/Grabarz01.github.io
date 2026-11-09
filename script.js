

function press(button){
    let sign = button.innerText
    let result = ""
    let input = document.getElementById("screen")
    switch(sign){
        case "C":
            input.value = ""
            input.placeholder = ""
            break
        case "=":
            if(!input.value)
                break;
            try{
                result = eval(input.value)
            }
            catch(e){
                input.value = ""
                input.placeholder =  "Wrong input"
                return;
            }
            if (result === undefined) {
                input.value = ""
                input.placeholder = "Wrong input"
                return
            }
            input.value = ""
            input.placeholder =  "=" + result
            break
        default:
            input.value += sign
            break

    }
}
//break