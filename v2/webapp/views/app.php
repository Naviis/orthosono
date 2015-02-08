<!doctype html>
<!--[if lte IE 7]> <html class="no-js ie67 ie678" lang="fr"> <![endif]-->
<!--[if IE 8]> <html class="no-js ie8 ie678" lang="fr"> <![endif]-->
<!--[if IE 9]> <html class="no-js ie9" lang="fr"> <![endif]-->
<!--[if gt IE 9]> <!--><html class="no-js" lang="fr"> <!--<![endif]-->
<head>
		<meta charset="UTF-8">
		<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
		<title>Orthosono - Application Web</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link rel="stylesheet" href="css/main.css" media="all">
</head>
<body>
    
    <!-- Sounds list -->
    
    <div class="properties">
        
        <h2 class="g_secondTitle">Sélectionner les sons à jouer</h2>
        
        <ul class="properties_library"></ul>
        <ul class="properties_selectedSounds"></ul>
        
        <h2 class="g_secondTitle">Sélectionner l'ordre de lecture</h2>
        
        <input type="radio" name="order" value="normal" class="properties_order" id="properties_orderNormal" checked> <label for="properties_orderNormal">Normal</label>
        <input type="radio" name="order" value="random" class="properties_order" id="properties_orderRand"> <label for="properties_orderRand">Aléatoire</label>
        
        <h2 class="g_secondTitle">Choisir l'intervalle de temps entre chaque son</h2>
        
        <input type="text" id="properties_delay" class="properties_delay" value="0"><label for="properties_delay">sec</label>
        
    </div>
    
    <!-- Player -->
    
    <div class="player_wrapper">
       
        <h2 class="g_secondTitle">Lancer la lecture</h2>
        
        <div class="player_countDown">
            Lecture du prochain son dans
            <span>0</span>
            seconde(s)
        </div>
        
        <button id="player_prev">&lt;</button>
        <audio controls id="player">
            Votre navigateur ne permet pas de l'utilisation d'Orthosono. Veuillez le mettre à jour.
        </audio>
        <button id="player_next">&gt;</button>
        
        <ul class="player_playlist"></ul>
        
    </div><!-- /player_wrapper -->

    <script src="js/min/zepto.min.js" defer></script>
    <script src="js/min/player.min.js" defer></script>
	
</body>
</html>