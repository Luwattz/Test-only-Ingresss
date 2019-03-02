// ==UserScript==
// @id pad-plugin-hawk
// @name IITC plugin: Hawk Eyes
// @category Misc
// @version 1.0.20150105.03
// @namespace https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL https://git.depad.fr/ingress-res/iitc-plugins/raw/master/pad-plugin-hawk_eyes.user.js
// @downloadURL https://git.depad.fr/ingress-res/iitc-plugins/raw/master/pad-plugin-hawk_eyes.user.js
// @description See all portals, neutrals included, regardless of the zoom used.
// @include https://*.ingress.com/intel*
// @include http://*.ingress.com/intel*
// @match https://*.ingress.com/intel*
// @match http://*.ingress.com/intel*
// @grant none
// ==/UserScript==

window.getDataZoomForMapZoom = function() {
return 17;
}