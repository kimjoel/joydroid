/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=function(){function i(){window.addEventListener("scroll",function(e){n||(n=!0,setTimeout(s,200))},!1)}function s(){var e=o();e>=r?classie.add(t,"cbp-af-header-shrink"):classie.remove(t,"cbp-af-header-shrink"),n=!1}function o(){return window.pageYOffset||e.scrollTop}var e=document.documentElement,t=document.querySelector(".cbp-af-header"),n=!1,r=250;i()}();