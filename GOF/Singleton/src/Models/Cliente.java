package Models;

public class Cliente {
	
	private static Cliente cliente;
	public String nome = "";
	public String cpf = "";
	private Conta conta = new Conta();
	
	private Cliente() {}
	
	public static Cliente criarCriente() {
		
		if(cliente == null) {
			cliente = new Cliente();
		}
		return cliente;
	}

	
	public void depositar(double valor) {
		
		this.conta.acrescentarSaldoCorrente(valor);
	}
	
	
	public void sacarSaldoCorrente(double valor) {
		
		try {
			this.conta.retirarSaldoCorrente(valor);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public double verSaldo() {
		return this.conta.verSaldoCorrente();
	}
}
