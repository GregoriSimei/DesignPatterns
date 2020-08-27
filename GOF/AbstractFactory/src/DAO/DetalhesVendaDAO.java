package DAO;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

class DetalhesVendaDAO extends AbstractDAO<DetalheVenda>{

	private Connection connection;
	
	public DetalhesVendaDAO() {
		this.connection = Conexao.getConexao();
	}

	@Override
	public boolean adicionar(DetalheVenda objeto) {
		
		boolean transacaoConcluida = true;
		Statement preparedStatement = null;
		
		try {
			String query = "INSERT INTO detalhesvendas(idvenda, idproduto, qtd, desconto, valor) VALUES(";
			query += "'" + objeto.getVenda().getNotaFiscal() + "','" 
						 + objeto.getProduto().getCodigo() + "','" 
						 + objeto.getQuantidade() + "','"
						 + objeto.getDesconto() + "','"
						 + objeto.getPrecoVenda() + "')";
			
			preparedStatement = this.connection.createStatement();
			preparedStatement.execute(query);
		} 
		catch (SQLException e) {
			e.printStackTrace();
			transacaoConcluida = false;
		}
		
		return transacaoConcluida;
	}

	@Override
	public DetalheVenda encontrarPorId(int notaFiscal) {
		return null;
	}

	@Override
	public boolean remover(int id) {
		return true;
	}

	@Override
	public boolean atualizar(DetalheVenda objeto) {
		return true;
	}

	@Override
	public ArrayList<DetalheVenda> pegarTodos() {
		return null;
	}

}
