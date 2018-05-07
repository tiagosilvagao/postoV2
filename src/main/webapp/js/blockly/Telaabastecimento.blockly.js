window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Telaabastecimento = window.blockly.js.blockly.Telaabastecimento
		|| {};

var item, litros;

/**
 * Telaabastecimento
 */
window.blockly.js.blockly.Telaabastecimento.validar200litros = function() {
	litros = this.cronapi.screen.getValueOfField("Abastecimento.active.valor")
			/ this.cronapi.screen
					.getValueOfField("Abastecimento.active.precoLitro");
	if (litros > 200) {
		this.cronapi.screen
				.notify(
						'error',
						'Valor abastecido muito alto. Não cabe no tanque. corresponde a mais de 200 litros.');
		this.cronapi.screen.hideComponent("botao-salvar");
	} else {
		this.cronapi.screen.showComponent("botao-salvar");
	}
}
