package DAO;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

class ProdutoDAO extends AbstractDAO<Produto>{

private Connection connection;
	
	public ProdutoDAO() {
		this.connection = Conexao.getConexao();
	}

	@Override
	public boolean adicionar(Produto objeto) {
		
		boolean transacaoConcluida = true;
		Statement preparedStatement = null;
		
		try {
			String query = "INSERT INTO produtos(descricao, preco) VALUES(";
			query += "'" + objeto.getDescricao() + "','" 
						 + objeto.getPreco() + "')";
			
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
	public Produto encontrarPorId(int id) {
		
		Produto produto  = new Produto();
		Statement preparedStatement = null;
		
		try {
			
			String query = "SELECT codigo, descricao, preco FROM produtos WHERE codigo = " + id;
			
			preparedStatement = this.connection.createStatement();
			ResultSet respostaBanco = preparedStatement.executeQuery(query);
			
			if(respostaBanco.next()) {
				produto.setCodigo(respostaBanco.getInt("codigo"));
				produto.setDescricao(respostaBanco.getString("descricao"));
				produto.setPreco(respostaBanco.getDouble("preco"));
			}
			
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		
		
		return produto;
	}

	@Override
	public boolean remover(int id) {
		
		boolean naoRemoveu = true;
		Statement preparedStatement = null;

		try {
			
			String query = "DELETE FROM produtos WHERE codigo = " + id;
			
			preparedStatement = this.connection.createStatement();
			naoRemoveu = preparedStatement.execute(query);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return naoRemoveu;
	}

	@Override
	public boolean atualizar(Produto objeto) {
		
		boolean atualizou = true;
		Statement preparedStatement = null;
		
		try {
			
			String query = "UPDATE produtos SET";
			query += " descricao = '" + objeto.getDescricao() + "',";
			query += " preco = '" + objeto.getPreco() + "'";
			query += " WHERE id = " + objeto.getCodigo();
			
			preparedStatement = this.connection.createStatement();
			preparedStatement.execute(query);
		} 
		catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			atualizou = false;
		}
	
		return atualizou;
	}

	@Override
	public ArrayList<Produto> pegarTodos() {
		// TODO Auto-generated method stub
		return null;
	}

}
