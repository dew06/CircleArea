function perimeter(){
    let rad=parseInt(document.getElementById('Radius').value);


    document.getElementById('result').value=2*3.14*rad;
}

function area(){
    let rad=parseInt(document.getElementById('Radius').value);


    document.getElementById('result').value=3.14*rad**2;
}