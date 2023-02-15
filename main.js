let ar = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","α","β","γ","δ"]
const DOM = {
    inputSection: document.getElementById("inputs"),
    numberInput: document.getElementById("number"),
    initialBaseInput: document.getElementById("initialBase"),
    finalBaseInput: document.getElementById("finalBase"),
    convertButton: document.getElementById("submit")
}
function str(num){
  return ar[num]
}
function toBase10(n,b){
    let n = String(n)
    n = n.split("")
    n = n.reverse()
    let p = 0
    let s = 0
    n.forEach(d => {
        let rd = ar.findIndex(c => c == d)
        rd = rd * (10**p)
        s =s + rd
        p++
    });
    return s
}
function  convert(x, b){
  let ret = "", rep = 1
  if (b>ar.length){
    console.error("Base too large. Maximum base currently supported is: "+ ar.length)
    return false
  }
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
    
})
