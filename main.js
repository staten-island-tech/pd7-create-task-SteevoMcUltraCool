let ar = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Α","Β","Γ","Δ","Ε"]
const DOM = {
    inputSection: document.getElementById("inputs"),
    numberInput: document.getElementById("number"),
    initialBaseInput: document.getElementById("initialBase"),
    finalBaseInput: document.getElementById("finalBase"),
    convertButton: document.getElementById("submit"),
    resultsSection: document.getElementById("results")
}
function str(num){
  return ar[num]
}
function toBase10(n,b){
    n = String(n)
    n = n.toUpperCase().split("")
    n = n.reverse()
    let p = 0
    let s = 0
    n.forEach(d => {
        let rd = ar.findIndex(c => c == d)
        if (rd > b-1){
          return false
        }
        rd = rd * (b**p)
        s =s + rd
        p++
    });
    return s
}
function  convert(x, b){
  let ret = "", rep = 1
  do{
    let d = x % b**rep
    x = x -d
    d = d/(b**(rep-1))
    ret = str(d) + ret
    rep = rep + 1
  }while (x>0)
  return ret
}
DOM.convertButton.addEventListener("click", function(){
  DOM.resultsSection.innerHTML = "<br>"
  let num = DOM.numberInput.value
  let iBase = Number(DOM.initialBaseInput.value)
  let fBase = Number(DOM.finalBaseInput.value)
  if (!num || num==""|| !iBase || iBase <2 || iBase>ar.length || !fBase || fBase<2 || fBase > ar.length){
    DOM.resultsSection.insertAdjacentHTML("beforeend", `Make sure you have a number and both bases are between 2 and ${ar.length} (inclusive)`)
    return "goop"
  }
  let b10Num = toBase10(num,iBase)
  if (!b10Num){
    DOM.resultsSection.insertAdjacentHTML("beforeend", `Makesure your number is valid in that base`)
    return false
  }
  let cbNum = convert(b10Num, fBase)
  DOM.resultsSection.insertAdjacentHTML("beforeend",`
      <p>Your input : ${num}</p>
      <p>Base 10 conversion: ${b10Num}</p>
      <h3>Base ${fBase} result: ${cbNum} </h3>
  `)
})
