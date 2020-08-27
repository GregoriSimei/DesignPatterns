import DAO.AbstractDAO;
import DAO.Cliente;
import DAO.Endereco;
import DAO.Funcionario;
import DAO.Produto;
import DAO.Venda;

public class Testando {

	public static void main(String[] args) {
		
		/*
		 * Adicionar Cliente
		 */
		Cliente cliente = new Cliente();
		cliente.setNome("oila");
		cliente.setCpf("98765432151");
		cliente.setEmail("oi@oi.oi");
		
		Endereco endereco = new Endereco();
		endereco.setRua("oi, tudo bom ?");
		endereco.setNumero("1098");
		endereco.setBairro("cortesia");
		
		cliente.setEndereco(endereco);
		
		/*
		 * Adicionar Funcionario
		 */
		Funcionario funcionario = new Funcionario();
		funcionario.setNome("tudobom");
		funcionario.setCpf("7070707");
		funcionario.setEmail("tdb@tdb.tdb");
		
		/*
		 * Adicionar produto
		 */
		Produto produto = new Produto();
		produto.setDescricao("É Bolacha");
		produto.setPreco(1.20);

		
	}

}
