function opacityOne(param){
    param.style.opacity="1";
}
    let sac = document.getElementById('sac');
    // sac.addEventListener("click", function(){
    //     opacityOne(sac);
    // });
    let police = document.getElementById('police');
    // police.addEventListener("click", function(){
    //     opacityOne(police);
    // });
    let policiere = document.getElementById('policiere');
    // policiere.addEventListener("click", function(){
    //     opacityOne(policiere);
    // });
    let boite = document.getElementById('boite');
    // boite.addEventListener("click", function(){
    //     opacityOne(boite);
    // });
    let bagage = document.getElementById('bagage');
    // bagage.addEventListener("click", function(){
    //     opacityOne(bagage);
    // });
    let fleche = document.getElementById('fleche');
    // fleche.addEventListener("click", function(){
    //     opacityOne(fleche);
    // });
    let poteau = document.getElementById('poteau');
    // poteau.addEventListener("click", function(){
    //     opacityOne(poteau);
    // });

    
    // let sac = document.getElementById('sac');
    // let police = document.getElementById('police');
    // let policiere = document.getElementById('policiere');
    // let boite = document.getElementById('boite');
    // let bagage = document.getElementById('bagage');
    // let fleche = document.getElementById('fleche');
    // let poteau = document.getElementById('poteau');
    

    let listeErreurs = [sac, police, policiere, boite, bagage, fleche, poteau];
    for(let i  = 0; i < listeErreurs.length; i++){
        listeErreurs[i].addEventListener("click", function(){
            opacityOne(listeErreurs[i]);
         });
          
    }
    let compteur = 0
    while(compteur <= 7){
        
    }