var Player = function(){
    
    // Sounds properties
    this.sounds_path = 'sounds/';
    this.playlist = [];
    this.current = 0;
    
    // Selectors
    this.e_player = document.getElementById('player');
    this.$e_prevBtn = $('#player_prev');
    this.$e_nextBtn = $('#player_next');
    this.$e_playlist = $('.player_playlist');
        
    // Misc
    this.silence_delay = 2;
    this.silence = null;
    
    return this.init();
};

Player.prototype = {
    
    init : function(){
        
        this.generatePlaylist();
        this.addEvents();
        
        return this;
    },
        
    // Generate playlist elements    
    generatePlaylist : function(){
        this.stop();
        this.$e_playlist.html('');        
        if( this.playlist.length ){
            for( var i = 0; i < this.playlist.length; i++ ){
                var current_sound = this.playlist[i];
                var li = $('<li></li>').attr('data-index',i).html(current_sound.name);
                this.$e_playlist.append(li);
            } 
            this.changePlayerSoundUrl();
        }
        
    },
    
    // Add events on player's elements
    addEvents : function(){        
        
        var self = this;
        
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
    },
    
    // Change current Sound    
    changeCurrentSound : function(value){
 
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
            }
        }else{
            this.current = value;
        }
        
        this.changePlayerSoundUrl();
        this.play();
    },
        
    // Change the player sound url    
    changePlayerSoundUrl : function(){
        this.e_player.src = this.sounds_path+this.playlist[this.current].path;
    },
        
    // Stop player
    stop : function(){
        this.e_player.pause();
        this.e_player.currentTime = 0;
    },
        
    // Launch player
    play : function(){        
        this.e_player.play();
    }
};

$(function(){
    var player = new Player();
});