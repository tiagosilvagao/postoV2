window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Logout = window.blockly.js.blockly.Logout || {};

var item;

/**
 * logout
 */
window.blockly.js.blockly.Logout.logout = function() {
	this.cronapi.screen.logout();
}
