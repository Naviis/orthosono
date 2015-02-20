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
		<link href='http://fonts.googleapis.com/css?family=Roboto:100,300,400' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/main.css" media="all">
</head>
<body>
    
    <!-- Header -->
    
    <header>
        <h1><img src="images/logo_white_small.png" alt="Orthosono"></h1>
        
        <div class="menu_buttonWrapper">
            <button class="menu_button icon-layers"></button>
        </div>
    </header> 
    
    <div class="wpr">
       
        <!-- Menu -->
         
         <nav class="menu">
             
             <div class="menu_close icon-cross"></div>
             <ul>
                 <li class="menu_save icon-cloud-upload g_ripple">Enregistrer les paramètres...</li>
                 <li class="menu_load icon-cloud-download g_ripple">Charger les paramètres...</li>
                 <li class="menu_delete icon-trash g_ripple">Supprimer les paramètres...</li>
             </ul>
         </nav>
         
         <!-- presets -->
         
         <div class="presets_load">
            <div class="presets_loadClose icon-cross"></div>
            <div class="presets_boxContent">
                <h2 class="g_secondTitle icon-cloud-download">Charger les paramètres</h2>
                <p>Sélectionnez les paramètres à charger. S'ils n'ont pas été enregistrés au préalables, les paramètres courant seront supprimés.</p>
                <ul class="presets_loadList"></ul>
            </div>      
         </div>
         
         <div class="presets_save">
            <div class="presets_saveClose icon-cross"></div>
             <div class="presets_boxContent">
                 <h2 class="g_secondTitle icon-cloud-upload">Sauvegarder les paramètres</h2>
                 <p>Créez une nouvelle entrée ou écrasez des paramètres déjà existants.</p>
                 <button class="presets_new icon-file-add"></button>
                 <ul class="presets_saveList"></ul>
             </div>       
         </div>
           
         <div class="presets_delete">
            <div class="presets_deleteClose icon-cross"></div>
             <div class="presets_boxContent">
                 <h2 class="g_secondTitle icon-cloud-upload">Supprimer des paramètres</h2>
                 <p>Supprimez des paramètres déjà existants.</p>
                 <ul class="presets_deleteList"></ul>
             </div>       
         </div>
         
         <div class="presets_prompt">
             <div class="presets_promptClose icon-cross"></div>
             <div class="presets_promptContent">
                 <input type="text" class="preset_name" placeholder="Nom de vos paramètres" value="">
                 <button class="icon-arrow-right preset_name_button g_ripple"></button>
             </div>
         </div>
          
          <!-- Sounds list -->
          
          <p class="beta_message">
              Cette version d'Orthosono est encore en bêta. Si vous rencontrez des bugs ou des problèmes vous pouvez <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%63%6F%6E%74%61%63%74%40%6F%72%74%68%6F%73%6F%6E%6F%2E%66%72">me contacter</a>.
          </p>
          
          <div class="properties">
              
              <h2 class="g_secondTitle icon-square-check">Sélectionner les sons à jouer</h2>
              
              <div class="properties_listsWrapper">
                  <ul class="properties_library"></ul>
                  <ul class="properties_selectedSounds"></ul>
              </div>
              
              <h2 class="g_secondTitle icon-shuffle">Sélectionner l'ordre de lecture</h2>
              
              <div class="properties_orderWrapper">
                  <input type="radio" name="order" value="normal" class="properties_order" id="properties_orderNormal" checked> <label for="properties_orderNormal">Normal</label>
                  <input type="radio" name="order" value="random" class="properties_order" id="properties_orderRand"> <label for="properties_orderRand">Aléatoire</label>
              </div>
              
              <h2 class="g_secondTitle icon-clock">Choisir l'intervalle de temps entre chaque son</h2>
              
              <input type="text" id="properties_delay" class="properties_delay" value="0"><label for="properties_delay">sec</label>
              
          </div>
    
    </div><!-- /wpr -->
    
    <!-- Player -->
          
    <div class="player_wrapper">

        <div class="wpr">

            <h2 class="g_secondTitle icon-microphone">Lancer la lecture</h2>

            <div class="player_countDown">
            Lecture du prochain son dans
            <span>0</span>
            seconde(s)
            </div>

            <button id="player_prev" class="icon-rewind g_ripple"></button>
            <audio controls id="player">
            Votre navigateur ne permet pas de l'utilisation d'Orthosono. Veuillez le mettre à jour.
            </audio>
            <button id="player_next" class="icon-fast-forward g_ripple"></button>

            <ul class="player_playlist"></ul>
            
        </div>
        
    </div><!-- /player_wrapper -->
    
    <div class="g_overlay"></div>
    
    
    <div class="g_loader g_loader_leftPanel active">
        <div class="g_loader_soundWrapper">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="g_loader g_loader_rightPanel active">
        <div class="g_loader_soundWrapper">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    
    <script src="js/min/zepto.min.js" defer></script>
    <script src="js/min/player.min.js" defer></script>
    <script src="js/min/ui.min.js" defer></script>
    
    <script> 
        var $buoop = {c:2}; 
        function $buo_f(){ 
            var e = document.createElement("script"); 
            e.src = "//browser-update.org/update.js"; 
            document.body.appendChild(e);
        };
        try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
        catch(e){window.attachEvent("onload", $buo_f)}
    </script> 

	<footer>
	    <div class="footer_wpr">
	        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Orthosono</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.orthosono.fr" property="cc:attributionName" rel="cc:attributionURL">Geoffroy Riou</a> est mis à disposition selon les termes de la <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">licence Creative Commons Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International</a>.
	   </div>
	</footer>
	
	<div class="alert">
        <span class="alert_close">&times;</span>
	    Lydie de <a href="http://www.ortho-n-co.fr" target="_blank">Ortho-n-co</a> a eu la très bonne idée de mettre à disposition ses planches de loto, qu'elle utilise avec Orthosono. Vous pouvez les récupérer à <a href="http://www.ortho-n-co.fr/wp-content/uploads/2015/02/Loto-sonore-OrthoSono.pdf" target="_blank">cette adresse</a>.
	</div>
	
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-47296748-1', 'orthosono.fr');
	  ga('send', 'pageview');
	</script>
</body>
</html>