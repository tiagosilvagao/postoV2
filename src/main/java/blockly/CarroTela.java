package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;

@CronapiMetaData(type = "blockly")
@CronappSecurity
public class CarroTela {

	public static final int TIMEOUT = 300;

	/**
	 *
	 * @param Entidade
	 * @return Var
	 */
	// CarroTela
	public static Var Executar(Var Entidade) throws Exception {
		return new Callable<Var>() {

			private Var ConsultaAbastecimento = Var.VAR_NULL;
			private Var litros = Var.VAR_NULL;
			private Var qtdAbastecimentos = Var.VAR_NULL;

			public Var call() throws Exception {
				ConsultaAbastecimento = cronapi.database.Operations.query(Var.valueOf("app.entity.Abastecimento"),
						Var.valueOf(
								"select a.valor, a.precoLitro, a.km from Abastecimento a where a.carro.id = :carroId"),
						Var.valueOf("carroId", cronapi.object.Operations.getObjectField(Entidade, Var.valueOf("id"))));
				if (cronapi.database.Operations.hasElement(ConsultaAbastecimento).getObjectAsBoolean()) {
					while (cronapi.database.Operations.hasElement(ConsultaAbastecimento).getObjectAsBoolean()) {
						litros = cronapi.math.Operations.divisor(
								cronapi.database.Operations.getField(ConsultaAbastecimento, Var.valueOf("this[0]")),
								cronapi.database.Operations.getField(ConsultaAbastecimento, Var.valueOf("this[1]")));
						litros = cronapi.math.Operations.divisor(
								cronapi.database.Operations.getField(ConsultaAbastecimento, Var.valueOf("this[2]")),
								litros);
						qtdAbastecimentos = cronapi.math.Operations.sum(
								cronapi.database.Operations.getField(ConsultaAbastecimento, Var.valueOf("this[2]")),
								Var.VAR_ZERO);
						qtdAbastecimentos = Var.VAR_NULL;
						cronapi.database.Operations.next(litros);
					} // end while
				}
				return Var.VAR_NULL;
			}
		}.call();
	}

}
