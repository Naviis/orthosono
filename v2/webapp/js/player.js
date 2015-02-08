var Player = function(){
    
    // Sounds properties
    this.sounds_array = [ {"name":"animal Abeille","path":"a-abeille"},
                            {"name":"animal Canard","path":"a-canard"},
                            {"name":"animal Chat","path":"a-chat"},
                            {"name":"animal Chat 2","path":"a-chat-2"},
                            {"name":"animal Cheval","path":"a-cheval"},
                            {"name":"animal Chien","path":"a-chien"},
                            {"name":"animal Chien 2","path":"a-chien-2"},
                            {"name":"animal Chien 3","path":"a-chien-3"},
                            {"name":"animal Coq","path":"a-coq"},
                            {"name":"animal Coq 2","path":"a-coq-2"},
                            {"name":"animal Corbeaux","path":"a-corbeaux"},
                            {"name":"animal Hibou","path":"a-hibou"},
                            {"name":"animal Hibou 2","path":"a-hibou-2"},
                            {"name":"animal Loup","path":"a-loup"},
                            {"name":"animal Mouettes","path":"a-mouettes"},
                            {"name":"animal Oie","path":"a-oie"},
                            {"name":"animal Oie 2","path":"a-oie-2"},
                            {"name":"animal Oie 3","path":"a-oie-3"},
                            {"name":"animal Poules","path":"a-poules"},
                            {"name":"animal Tigre","path":"a-tigre"},
                            {"name":"animal Vache","path":"a-vache"},
                            {"name":"animal Vache 2","path":"a-vache-2"},
                            {"name":"Appareil photo","path":"appareil-photo"},
                            {"name":"Appareil photo 2","path":"appareil-photo-2"},
                            {"name":"Applaudissements","path":"applaudissements"},
                            {"name":"Applaudissements 2","path":"applaudissements-2"},
                            {"name":"Avion","path":"avion"},
                            {"name":"Ballon","path":"ballon"},
                            {"name":"Bébé pleure","path":"bebe-pleure"},
                            {"name":"Bébé","path":"bebe"},
                            {"name":"Bisou","path":"bisou"},
                            {"name":"Brossage de dents","path":"brossage-de-dents"},
                            {"name":"Ciseaux","path":"ciseaux"},
                            {"name":"Eternuement","path":"eternuement"},
                            {"name":"Feux d'artifice","path":"feux-d-artifice"},
                            {"name":"musique Batterie","path":"m-batterie"},
                            {"name":"musique Flute","path":"m-flute"},
                            {"name":"musique Guitare","path":"m-guitare"},
                            {"name":"musique Harpe","path":"m-harpe"},
                            {"name":"musique Piano","path":"m-piano"},
                            {"name":"musique Saxophone","path":"m-saxophone"},
                            {"name":"musique Trombone","path":"m-trombone"},
                            {"name":"musique Trompette","path":"m-trompette"},
                            {"name":"musique Violon","path":"m-violon"},
                            {"name":"musique Violoncelle","path":"m-violoncelle"},
                            {"name":"musique Violoncelle 2","path":"m-violoncelle-2"},
                            {"name":"musique Violoncelle 3","path":"m-violoncelle-3"},
                            {"name":"musique Moto","path":"moto"},
                            {"name":"Rires","path":"rires"},
                            {"name":"Sirène police","path":"sirene-police"},
                            {"name":"Téléphone","path":"telephone"},
                            {"name":"Toilettes","path":"toilettes"},
                            {"name":"Tonnerre","path":"tonnerre"},
                            {"name":"Vagues","path":"vagues"}];
    this.sounds_path = 'sounds/';
    this.extension = 'ogg';
    this.playlist = [];
    this.current = 0;
    
    // Selectors
    this.$e_library = $('.properties_library');
    this.$e_selectedSounds = $('.properties_selectedSounds');
    this.$e_order = $('.properties_order');
    this.$e_delay = $('.properties_delay');
    this.e_player = document.getElementById('player');
    this.$e_prevBtn = $('#player_prev');
    this.$e_nextBtn = $('#player_next');
    this.$e_countDown = $('.player_countDown');
    this.c_activeCountDown = 'active';
    this.$e_playlist = $('.player_playlist');
    this.c_playedElement = 'active';
        
    // Misc
    this.silence_delay = 0;
    this.silence_timeout = null;
    this.silence_interval = null;
    this.order = 'normal';
    
    return this.init();
};

Player.prototype = {
    
    init : function(){
        
        this.generateLibrary();
        this.generatePlaylist();
        this.addEvents();
        
        return this;
    },
        
    // Generate library elements  
    generateLibrary : function(){        
        for( var i = 0; i < this.sounds_array.length; i++ ){
            var current_sound = this.sounds_array[i];
            var li = $('<li></li>').attr('data-index',i).html(current_sound.name);
            this.$e_library.append(li);
        } 
    },
    
    // Generate selected sounds elements  
    generateSelectedSounds : function(){   
        this.$e_selectedSounds.html(''); 
        for( var i = 0; i < this.playlist.length; i++ ){
            var current_sound = this.playlist[i];
            var li = $('<li></li>').attr('data-index',i).html(current_sound.name);
            this.$e_selectedSounds.append(li);
        } 
    },
        
    // Generate playlist elements    
    generatePlaylist : function(){
        this.reset();
        this.$e_playlist.html('');        
        if( this.playlist.length ){
            
            var soundsList = this.order == 'random' ? this.shuffle(this.playlist) : this.playlist;            
            for( var i = 0; i < soundsList.length; i++ ){
                var current_sound = soundsList[i];
                var li = $('<li></li>').attr('data-index',i).html(current_sound.name);
                this.$e_playlist.append(li);
            } 
            this.changePlayedElementInPlaylist();
            this.changePlayerSoundUrl();
        }
        
    },
    
    // Add events on player's elements
    addEvents : function(){        
        
        var self = this;
        
        // Add sound to playlist
        this.$e_library.on('click','li',function(){
            self.reset();
            var index = $(this).attr('data-index');
            self.playlist.push(self.sounds_array[index]);            
            self.generateSelectedSounds();
            self.generatePlaylist();
        });
        
        // Remove sound from playlist
        this.$e_selectedSounds.on('click','li',function(){
            self.reset();
            var index = $(this).attr('data-index');console.log(index)
            self.playlist.splice(index,1);     
            self.generatePlaylist();
            self.generateSelectedSounds();
            
        });
        
        //Change order
        this.$e_order.click(function(){
            self.reset();
            self.order = $(this).val();
            self.generatePlaylist();
        });
        
        //Change delay
        this.$e_delay.keyup(function(){
            self.reset();
            var val = isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
            self.silence_delay = val;
        });
        
        //Prev Button
        this.$e_prevBtn.click(function(e){
            e.preventDefault();
            self.changeCurrentSound('previous');
        });
        
        // Next Button
        this.$e_nextBtn.click(function(e){
            e.preventDefault();
            self.changeCurrentSound('next');
        });
        
        // Change sound on click
        this.$e_playlist.on('click','li',function(){
            var index = $(this).attr('data-index');
            self.changeCurrentSound(index);
        });
        
        // Change automatically sound at end
        this.e_player.addEventListener('ended', function(){
            self.changeCurrentSound('next');            
        });
    },
    
    // Change current Sound    
    changeCurrentSound : function(value){
        
        var self = this;
        
        this.stop();
        
        if( value == 'previous' ){            
            var tmp_current = this.current-1;            
            if( tmp_current >= 0){
                this.current = tmp_current;
            }else{
                this.current = this.playlist.length-1;
            }
            
        }else if( value == 'next' ){
            var tmp_current = this.current+1;
            if( this.playlist.length-1 >= tmp_current  ){
                this.current = tmp_current;
            }else{
                this.current = 0;
                var stopPlay = true;
            }
        }else{
            this.current = value;
        }
        
        this.changePlayedElementInPlaylist();
        this.changePlayerSoundUrl();
        
        if( typeof(stopPlay) == 'undefined' ){            
            this.silence_timeout = window.setTimeout(function(){
                self.play();
            },this.silence_delay*1000);   
            
            if( this.silence_delay ){
                this.launchInterval();
            }
        }
    },
    
    // Change selected read element in playlist
    changePlayedElementInPlaylist : function(){
        var self = this;
        this.$e_playlist.find('li').each(function(){
            if($(this).hasClass(self.c_playedElement)){
                $(this).removeClass(self.c_playedElement);
            }
            if($(this).attr('data-index') == self.current){
                $(this).addClass(self.c_playedElement);
            }
        });
 
    },
        
    // Change the player sound url    
    changePlayerSoundUrl : function(){
        if( !this.playlist.length ){
            this.e_player.src = '';
        }else{            
            this.e_player.src = this.sounds_path+this.playlist[this.current].path+'.'+this.extension;
        }
    },
        
    // Stop player
    stop : function(){
        this.e_player.pause();
        this.e_player.currentTime = 0;
        clearTimeout(this.silence_timeout);
    },
        
    // Launch player
    play : function(){        
        this.e_player.play();
    },
    
    //Reset player
    reset : function(){
        this.stop();
        this.current = 0;
        this.changePlayerSoundUrl();
    },
    
    // Show countdown
    launchInterval : function(){
        var self = this;
        var time = this.silence_delay;
        this.$e_countDown.find('span').html(time);
        this.$e_countDown.addClass(this.c_activeCountDown);
        this.silence_interval = window.setInterval(function(){
            if( --time > 0 ){
                self.$e_countDown.find('span').html(time);
            }else{
                clearInterval(self.silence_interval);
                self.$e_countDown.removeClass(self.c_activeCountDown);
            }                
        },1000);
    },
    
    // Shuffle array
    shuffle : function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }

        return array;
    }
};

$(function(){
    var player = new Player();
});