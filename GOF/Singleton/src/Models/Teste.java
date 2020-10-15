package Models;

public class Teste {

	public static void main(String[] args) {

		Cliente tablet = Cliente.criarCriente();
		
		tablet.nome = "Gregori";
		tablet.cpf = "123456";
		tablet.depositar(100);
		
		Cliente celular = Cliente.criarCriente();
		System.out.println(celular.nome);
		System.out.println(celular.cpf);
		System.out.println(celular.verSaldo());

	}

}
