'use strict'

(function(){
    
    function makeVirtualDom (divId) {
        
        var attachedDomElement = document.getElementById(divId)
        
    }
        
    function makeReactiveBoard(divId) {
        
        var virtualDom = makeVirtualDom(divId)
        
        var maps = {}
        
        return {
            loadMap: function (params) {
                // params = {name:String, map:Map}
                maps[params.name] = params.map
            }
        }
        
    }
    
    window.makeReactiveBoard = makeReactiveBoard
    
}())
