var choix = true;
function change() {
    var conteneur = document.getElementById('Container');
    if(choix==true){
    conteneur.style.backgroundColor = 'green';

    var blc = document.getElementsByClassName('style-bloc');
    for(var i =0; i<blc.length;i++){
     blc[i].style.color='red';
     blc[i].style.backgroundColor='yellow';
    }
    choix=false;
    }
    else{
        conteneur.style.backgroundColor = 'purple';

        var blc = document.getElementsByClassName('style-bloc');
        for(var i =0; i<blc.length;i++){
         blc[i].style.color='black';
         blc[i].style.backgroundColor='white';
     
        }
        choix=true;
    }
   

    var btn = document.getElementById('button');
    btn.style.backgroundColor ='black';

 
}
//Partie Formulaire
let myForm = document.getElementById('bt');
myForm.addEventListener('click',function(e){
    
    let myname = document.getElementById('nom');
    let myprenom = document.getElementById('prenom');
    let mymail = document.getElementById('mail');


    if (myname.value == ""){
        myerror=document.getElementById('error');
        myerror.innerHTML="Veillez renseigner le champs Nom";
        myerror.style.color ="red";
        e.preventDefault();
    }
    if (myprenom.value == ""){
        myerror=document.getElementById('error');
        myerror.innerHTML="Veillez renseigner le champs prenom";
        myerror.style.color ="red";
        e.preventDefault();
    }
    if (mymail.value == ""){
        myerror=document.getElementById('error');
        myerror.innerHTML="Veillez renseigner le champs mail";
        myerror.style.color ="red";
        e.preventDefault();
    }


    var nom = document.getElementById("nom").value;
    console.log(nom);
    
    var prenom = document.getElementById("prenom").value;
    console.log(prenom);
     
    var mail = document.getElementById("mail").value;
    console.log(mail); 
    var textformulaire = document.getElementById("textformulaire").value;
    console.log(textformulaire);

    localStorage.setItem('nom', nom);
    var leNom = localStorage.getItem('nom');
    document.querySelector("#leNom").innerHTML = leNom ;

    localStorage.setItem('prenom', prenom);
    var lePrenom = localStorage.getItem('prenom');
    document.querySelector("#lePrenom").innerHTML = lePrenom ;

    
   
    localStorage.setItem('commentaire', textformulaire);
    var leTextformulaire = localStorage.getItem('commentaire');
    document.querySelector("#leTextformulaire").innerHTML = leTextformulaire ;

    e.preventDefault();

})

//Récupération des données

/* function recupere(){
    
} */

