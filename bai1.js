///tinh tong///
function calculatesum(){
    var soA = parseFloat(document.getElementById("A").value);
    var soB = parseFloat(document.getElementById("B").value);
    var sum = soA + soB;
    document.getElementById("result").innerText = sum;
}
///tinh hieu///
function calculatesubtract(){
    var soA = parseFloat(document.getElementById("A").value);
    var soB = parseFloat(document.getElementById("B").value);
    var subtract = soA - soB;
    document.getElementById("result").innerText = subtract;
}
///tinh tich///
function calculatemultiply(){
    var soA = parseFloat(document.getElementById("A").value);
    var soB = parseFloat(document.getElementById("B").value);
    var multiply = soA * soB;
    document.getElementById("result").innerText = multiply;
}
///tinh thuong///
function calculatedivide(){
    var soA = parseFloat(document.getElementById("A").value);
    var soB = parseFloat(document.getElementById("B").value);
    var devide = soA / soB;
    document.getElementById("result").innerText = devide;
}
///reset///
function resetinput(){
    document.getElementById("A").value = "";
    document.getElementById("B").value = "";
    document.getElementById("result").innerText = "";

}

/// check input ///
function checkinput() {
    var soA = parseFloat(document.getElementById("A").value);
    var soB = parseFloat(document.getElementById("B").value);
    
    if (isNaN(soA) || isNaN(soB)) {
        document.getElementById("result").innerText = "Sai định dạng";
        return;
    }
    
   
}


