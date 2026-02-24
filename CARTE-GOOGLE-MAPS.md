# Afficher le bon lieu sur la carte

Pour que la carte affiche **directement** l’emplacement du cabinet (sans clic) :

1. Ouvrez ce lien dans **Chrome** :  
   https://maps.app.goo.gl/FgYT9c4QD13TqxpZ9

2. Cliquez sur **Partager** (ou **Share**).

3. Onglet **Intégrer une carte** (ou **Embed a map**).

4. Copiez **toute l’URL** qui est dans `src="..."` de l’iframe  
   (elle ressemble à : `https://www.google.com/maps/embed?pb=...`).

5. Dans le projet, ouvrez **`src/components/Map.jsx`**.

6. Remplacez la valeur de **`MAP_EMBED_SRC`** (ligne ~8) par cette URL, entre guillemets.  
   Exemple :  
   `const MAP_EMBED_SRC = 'https://www.google.com/maps/embed?pb=...'`

La carte sur le site affichera alors le bon lieu dès le chargement de la page.
