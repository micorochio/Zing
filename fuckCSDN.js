// ==UserScript==
// @name         Fuck CSDN
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       空鱼
// @match        *://*.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('div.article_content').style='';
    var readmore=document.getElementById("btn-readmore").parentNode;
    readmore.parentNode.removeChild(readmore);
    window.onload = function(){
        console.log('on load');
        window.setInterval(function(){
          let sb = window.document.getElementsByClassName("check-adblock-bg");
          for(let i = 0; i<sb.length;i++){
              let child = sb[i];
              child.parentNode.removeChild(child);
          }
          for(let i=0; i<100; i++){
              window.clearInterval(i);
          }
        },10);
    };
})();
