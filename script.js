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
let bouton = document.getElementById('bt');
bouton.addEventListener('click',function(e){
    
    

//Recupération des données du formulaire
    var nom = document.getElementById("nom").value;
    console.log(nom);
    var prenom = document.getElementById("prenom").value;
    console.log(prenom);
    var mail = document.getElementById("mail").value;
    console.log(mail); 
    var textformulaire = document.getElementById("textformulaire").value;
    console.log(textformulaire);
//stocker les saisies dans le local storage
    localStorage.setItem('nom', nom);//enregistre le couple clé valeur
    localStorage.setItem('prenom', prenom);
    localStorage.setItem('commentaire', textformulaire);
 //Récupérer et affichage des données sur la page
    var monNom = localStorage.getItem('nom');//retourne la valeur associée aux clés
    document.querySelector("#leNom").innerHTML = monNom ;
    var monPrenom = localStorage.getItem('prenom');
    document.querySelector("#lePrenom").innerHTML = monPrenom ;
    var leText = localStorage.getItem('commentaire');
    document.querySelector("#leTextformulaire").innerHTML = leText ;

    e.preventDefault();
//controle de saisie

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

})


