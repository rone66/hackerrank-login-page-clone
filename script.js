let credential=[['rone66','1234'],['anwesa','1992']];
function insert(){
    let email=document.getElementById('entryEmail').value;
    let pass=document.getElementById('entryPass').value;
    let name=document.getElementById('entryName').value;
    if(email==''||pass=='' ||name==''){
        alert("fill the all data");
        return;
    }else{
        if(email==pass){
            let cred=[name,pass];
            credential.push(cred);
            alert("Password is matched and all details are successfully submitted");
        }
        else{
            alert("Sorry...Password not matched...please do this again")
        }
        
        
    }
  
}


function check(){
    console.log(credential);
    let c=0;
    let a=document.getElementById('email').value;
    let b=document.getElementById('pass').value;
    for(let i=0;i<credential.length;i++){
        if(credential[i][0]==a && credential[i][1]==b){
            c++;
        }
    }
    if(c==1){
        alert("congrats!! you entered a correct credential")
    }else{
        alert("please check username or password")
    }

}