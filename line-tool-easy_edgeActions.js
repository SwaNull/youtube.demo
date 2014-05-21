/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10300, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10700, function(sym, e) {
         sym.stop();
         newGame01();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20100, function(sym, e) {
         sym.stop()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope({
           load: ["css/nimble-global.css"]
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'next-button'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_next_button_group}", "click", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('action-instructions');
         

      });
         //Edge binding end

   })("next-button");
   //Edge symbol end:'next-button'

   //=========================================================
   
   //Edge symbol: 'ok-button'
   (function(symbolName) {   
   
      

   })("ok-button");
   //Edge symbol end:'ok-button'

   //=========================================================
   
   //Edge symbol: 'draw-line-goal'
   (function(symbolName) {   
   
   })("draw-line-goal");
   //Edge symbol end:'draw-line-goal'

   //=========================================================
   
   //Edge symbol: 'goal-text'
   (function(symbolName) {   
   
   })("goal-text");
   //Edge symbol end:'goal-text'

   //=========================================================
   
   //Edge symbol: 'action-text'
   (function(symbolName) {   
   
   })("action-text");
   //Edge symbol end:'action-text'

   //=========================================================
   
   //Edge symbol: 'action-animation'
   (function(symbolName) {   
   
   })("action-animation");
   //Edge symbol end:'action-animation'

   //=========================================================
   
   //Edge symbol: 'instructions'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_next-button}", "click", function(sym, e) {
         sym.getParentSymbol().play('action-instructions');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10300, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ok-button}", "click", function(sym, e) {
         sym.getParentSymbol().play();

      });
      //Edge binding end

   })("instructions");
   //Edge symbol end:'instructions'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play('loop');

      });
      //Edge binding end

   })("success-animation");
   //Edge symbol end:'success-animation'

   //=========================================================
   
   //Edge symbol: 'success-state'
   (function(symbolName) {   
   
      

            Symbol.bindElementAction(compId, symbolName, "${_next-level-button}", "click", function(sym, e) {
         window.open("line-tool-medium.html", "_self");

      });
         //Edge binding end



   })("success-state");
   //Edge symbol end:'success-state'

   //=========================================================
   
   //Edge symbol: 'fail-state'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_skip-level-button}", "click", function(sym, e) {
         window.open("line-tool-medium.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_try-again-button}", "click", function(sym, e) {
         gameRemove01();
         sym.getParentSymbol().play('goal-instructions');

      });
      //Edge binding end

   })("fail-state");
   //Edge symbol end:'fail-state'

   //=========================================================
   
   //Edge symbol: 'start-screen'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_start-button-group}", "click", function(sym, e) {
         sym.getParentSymbol().play('goal-instructions');

      });
         //Edge binding end

   })("start-screen");
   //Edge symbol end:'start-screen'

})(jQuery, AdobeEdge, "EDGE-50899785");