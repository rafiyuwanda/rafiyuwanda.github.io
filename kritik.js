var row = 1;
var entry=document.getElementById('entry');
entry.addEventListener('click', displayDetails);


function displayDetails() {
  var Nama=document.getElementById('Nama').value;
  var Email=document.getElementById('Email').value;
  var krit=document.getElementById('Kritik').value;

  if (!Nama || !Email || !krit) {
    alert("please fill all the boxes");
    return ;
  }var tanya = confirm("apakah data anda sudah benar?")
if (tanya== true){
  var display =document.getElementById('display');
  var newRow= display.insertRow(row);
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  var cell3=newRow.insertCell(2);
  cell1.innerHTML=Nama;
  cell2.innerHTML=Email;
  cell3.innerHTML=krit;
  row++;

  	alert("data telah di entry")
  	return;
  }
  // else {
  // 	document.forms('kritiksaran').reset();}
}
