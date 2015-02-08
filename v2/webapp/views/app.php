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
    
    <!-- Player -->
    
    <div class="player_wrapper">
        
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