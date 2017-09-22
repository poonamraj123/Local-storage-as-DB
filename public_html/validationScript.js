/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
   var myarr = ['bbbcd', 'aaaaak', 'cdbjdd','hchgbbb'];
   function maxOccur(myarr) {
 
 var inputArray =myarr;
    console.log(inputArray);
    
    var testArray = [];
    for (var a = 0; a < inputArray.length; a++) {
        var arr = inputArray[a];
         var max = 0;
        for (var i = 0; i < arr.length; i++) {
           var count = 0; 
            for (var j = 0; j <= arr.length; j++) {
                if (arr[j] == arr[i]) {
                    count++;
                    if (max < count)
                    {
                        max = count;
                    }
                }
            }
            
        }
        testArray+=max;
    }
    console.log(testArray);
    var max = testArray[0];
    var maxIndex = 0;

    for (var a = 1; a < testArray.length; a++) {
        console.log(a);
        if (testArray[a] > max) {
             maxIndex = a;
            max = testArray[a];
        }
    }
    console.log(inputArray[maxIndex]);
    return inputArray[maxIndex];
}

maxOccur(myarr);

window.onload = function(){
    displayTable();
    
};

function Validate() {
    
    // initialize myarray from localstorage
    if(localStorage.getItem("userList")){
    var myArray =JSON.parse(localStorage.getItem('userList'));
    
   }
   else{
      var  myArray = new Array();
   }
   
     var tags = document.getElementsByTagName("input");
    var flag = true;
    var store = document.querySelectorAll('input');
    for (var val of store) {
        var chk = document.getElementById("perr" + val.getAttribute('id'));
        if (val.value == "") {
            flag = false;
            if (!chk) {
                val.insertAdjacentHTML('afterend', '<p style="font-size: 16px;padding: 10px;background-color: #f44336; color: white;margin-bottom: 15px;margin-top: 5px; " data-valid id="perr' + val.getAttribute('id') + '">Please enter' + val.getAttribute('id') + ' field</p>');
            }
        } else {
            if (chk) {
                chk.remove();
            }
        }
    }
     var x = "";
    if (document.getElementById('male').checked) {
        document.getElementById('genderErr').innerHTML = ""; 
        x = "male";
    } else if (document.getElementById('female').checked) {
        document.getElementById('genderErr').innerHTML = ""; 
        x = "female";
    } else {
           document.getElementById('genderErr').innerHTML = "gender *"; 
        x = "";
        flag = false;
    }
   

 
    // if every field is filled
    if (flag == true)
    {
       var user = {};
        // Create an object and then push into local storage 
        user['Firstname'] = document.getElementById('firstName').value;
        user['lastname'] = document.getElementById('lastName').value;
        user['userName'] = document.getElementById('userName').value;
        user['password'] = document.getElementById('password').value;
        user['email'] = document.getElementById('email').value;
        user['gender'] = x;
        console.log(user);
        myArray.push(user);
        localStorage.setItem("userList", JSON.stringify(myArray));
        displayTable();
        document.getElementById("myForm").reset();        
    }
}
function displayTable(){ 
     var retrievedObject = localStorage.getItem("userList");
     var parsedObject1 = JSON.parse(retrievedObject)
     var html = "<table id='dataTable' border='1|1'>";
    html+="<tr>";
    for (var key in parsedObject1[0]){
        html+="<th>"+key+"</th>";
    }
    html+="</tr>";
      for (var i in parsedObject1 ) {
      
        html+="<tr id='parsedObject1[i]'>";
        html+="<td>"+parsedObject1[i].Firstname+"</td>";
        html+="<td>"+parsedObject1[i].lastname+"</td>";
        html+="<td>"+parsedObject1[i].userName+"</td>";
        html+="<td>"+parsedObject1[i].password+"</td>";
        html+="<td>"+parsedObject1[i].email+"</td>";
        html+="<td>"+parsedObject1[i].gender+"</td>";
        html+="</tr>";
    }
    html+="</table>";
if(localStorage.userList!==null){
    document.getElementById('display').innerHTML = html;
}
else{
    document.getElementById('display').innerHTML += html;
    }
}


