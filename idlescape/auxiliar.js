'use strict'

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const idlescape = {}
idlescape.vues = {}