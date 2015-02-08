var App = function(){
    // SOunds properties
    this.sounds_array = [ {"name":"animal Abeille","path":"a-abeille.ogg"},
                            {"name":"animal Canard","path":"a-canard.ogg"},
                            {"name":"animal Chat","path":"a-chat.ogg"},
                            {"name":"animal Chat 2","path":"a-chat-2.ogg"},
                            {"name":"animal Cheval","path":"a-cheval.ogg"},
                            {"name":"animal Chien","path":"a-chien.ogg"},
                            {"name":"animal Chien 2","path":"a-chien-2.ogg"},
                            {"name":"animal Chien 3","path":"a-chien-3.ogg"},
                            {"name":"animal Coq","path":"a-coq.ogg"},
                            {"name":"animal Coq 2","path":"a-coq-2.ogg"},
                            {"name":"animal Corbeaux","path":"a-corbeaux.ogg"},
                            {"name":"animal Hibou","path":"a-hibou.ogg"},
                            {"name":"animal Hibou 2","path":"a-hibou-2.ogg"},
                            {"name":"animal Loup","path":"a-loup.ogg"},
                            {"name":"animal Mouettes","path":"a-mouettes.ogg"},
                            {"name":"animal Oie","path":"a-oie.ogg"},
                            {"name":"animal Oie 2","path":"a-oie-2.ogg"},
                            {"name":"animal Oie 3","path":"a-oie-3.ogg"},
                            {"name":"animal Poules","path":"a-poules.ogg"},
                            {"name":"animal Tigre","path":"a-tigre.ogg"},
                            {"name":"animal Vache","path":"a-vache.ogg"},
                            {"name":"animal Vache 2","path":"a-vache-2.ogg"},
                            {"name":"Appareil photo","path":"appareil-photo.ogg"},
                            {"name":"Appareil photo 2","path":"appareil-photo-2.ogg"},
                            {"name":"Applaudissements","path":"applaudissements.ogg"},
                            {"name":"Applaudissements 2","path":"applaudissements-2.ogg"},
                            {"name":"Avion","path":"avion.ogg"},
                            {"name":"Ballon","path":"ballon.ogg"},
                            {"name":"Bébé pleure","path":"bebe-pleure.ogg"},
                            {"name":"Bébé","path":"bebe.ogg"},
                            {"name":"Bisou","path":"bisou.ogg"},
                            {"name":"Brossage de dents","path":"brossage-de-dents.ogg"},
                            {"name":"Ciseaux","path":"ciseaux.ogg"},
                            {"name":"Eternuement","path":"eternuement.ogg"},
                            {"name":"Feux d'artifice","path":"feux-d-artifice.ogg"},
                            {"name":"musique Batterie","path":"m-batterie.ogg"},
                            {"name":"musique Flute","path":"m-flute.ogg"},
                            {"name":"musique Guitare","path":"m-guitare.ogg"},
                            {"name":"musique Harpe","path":"m-harpe.ogg"},
                            {"name":"musique Piano","path":"m-piano.ogg"},
                            {"name":"musique Saxophone","path":"m-saxophone.ogg"},
                            {"name":"musique Trombone","path":"m-trombone.ogg"},
                            {"name":"musique Trompette","path":"m-trompette.ogg"},
                            {"name":"musique Violon","path":"m-violon.ogg"},
                            {"name":"musique Violoncelle","path":"m-violoncelle.ogg"},
                            {"name":"musique Violoncelle 2","path":"m-violoncelle-2.ogg"},
                            {"name":"musique Violoncelle 3","path":"m-violoncelle-3.ogg"},
                            {"name":"musique Moto","path":"moto.ogg"},
                            {"name":"Rires","path":"rires.ogg"},
                            {"name":"Sirène police","path":"sirene-police.ogg"},
                            {"name":"Téléphone","path":"telephone.ogg"},
                            {"name":"Toilettes","path":"toilettes.ogg"},
                            {"name":"Tonnerre","path":"tonnerre.ogg"},
                            {"name":"Vagues","path":"vagues.ogg"}];
    this.player = null;
    
    return this.init();
};

App.prototype = {
    
    init : function(){
        this.player = new Player();
        return this;
    }
    
};

$(function(){
    new App();
})