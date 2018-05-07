window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Sair = window.blockly.js.blockly.Sair || {};

var item;

/**
 * Sair
 */
window.blockly.js.blockly.Sair.Executar = function() {
	this.cronapi.screen.logout();
}
