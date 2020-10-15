package Models;

public class Conta {
	
	private double saldoCorrente = 0.0;
	
	public void acrescentarSaldoCorrente(double valor) {
		this.saldoCorrente += valor;
	}
	
	public void retirarSaldoCorrente(double valor) throws Exception {
		if(this.saldoCorrente < valor) {
			throw new Exception("Saldo insuficiente");
		}
		else {
			this.saldoCorrente -= valor;
		}
	}
	
	public double verSaldoCorrente() {
		return this.saldoCorrente;
	}
}
