window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Hover = window.blockly.js.blockly.Hover || {};

/**
 * hover
 */
window.blockly.js.blockly.Hover.Executar = function() {
	this.cronapi.screen.changeValueOfField('vars.display\n', 'open');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Hover.ao_sair = function() {
	this.cronapi.screen.changeValueOfField('vars.display\n', '');
}
