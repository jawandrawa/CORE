function sq(num)
{return(num * num)}

function fact(num){
	var aux = 1;
	if (num === 0 || num === 1)
		return(1);
	else{
		while(num > 1){
			aux  = aux * num;
			num--;
		}
		return(aux);	
	}
}

//function high_order
function add(n1,n2)
{return(n1+n2)}

function sub(n1,n2)
{return(n1-n2)}

function mul(n1,n2)
{return(n1*n2)}

function div(n1,n2)
{return(n1/n2)}
var num = document.getElementById("pantalla").value;
var  res = document.getElementById("cuadrado").addEventListener("click",() =>{
	document.getElementById("info").innerText = sq(num)
})
