package DAO;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

class ClienteDAO extends AbstractDAO<Cliente>{
	
	private Connection connection;
	
	public ClienteDAO() {
		this.connection = Conexao.getConexao();
	}

	@Override
	public boolean adicionar(Cliente objeto) {
		
		boolean transacaoConcluida = true;
		Statement preparedStatement = null;
		
		try {
			String query = "INSERT INTO clientes(cpf, nome, email, rua, numero, bairro) VALUES(";
			query += "'" + objeto.getCpf() + "','" 
						 + objeto.getNome() + "','" 
						 + objeto.getEmail() + "','"
						 + objeto.getEndereco().getRua() + "','"
						 + objeto.getEndereco().getNumero() + "','"
						 + objeto.getEndereco().getBairro() + "')";
			
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
	public Cliente encontrarPorId(int id) {
		
		Cliente cliente  = new Cliente();
		Statement preparedStatement = null;
		
		try {
			
			String query = "SELECT id, cpf, nome , email, rua, numero, bairro FROM clientes WHERE id = " + id;
			
			preparedStatement = this.connection.createStatement();
			ResultSet respostaBanco = preparedStatement.executeQuery(query);
			
			if(respostaBanco.next()) {
				
				cliente.setId(respostaBanco.getInt("id"));
				cliente.setNome(respostaBanco.getString("nome"));
				cliente.setCpf(respostaBanco.getString("cpf"));
				cliente.setEmail(respostaBanco.getString("email"));
				
				Endereco endereco = new Endereco();
				endereco.setRua(respostaBanco.getString("rua"));
				endereco.setNumero(respostaBanco.getString("numero"));
				endereco.setBairro(respostaBanco.getString("bairro"));
				
				cliente.setEndereco(endereco);
			}
			
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		
		
		return cliente;
	}

	@Override
	public boolean remover(int id) {
		
		boolean naoRemoveu = true;
		Statement preparedStatement = null;

		try {
			
			String query = "DELETE FROM clientes WHERE id = " + id;
			
			preparedStatement = this.connection.createStatement();
			naoRemoveu = preparedStatement.execute(query);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return naoRemoveu;
	}

	@Override
	public boolean atualizar(Cliente objeto) {
		
		boolean atualizou = true;
		Statement preparedStatement = null;
		
		try {
			
			String query = "UPDATE clientes SET";
			query += " nome = '" + objeto.getNome() + "',";
			query += " cpf = '" + objeto.getCpf() + "',";
			query += " email = '" + objeto.getEmail() + "',";
			query += " rua = '" + objeto.getEndereco().getRua() + "',";
			query += " numero = '" + objeto.getEndereco().getNumero() + "',";
			query += " bairro = '" + objeto.getEndereco().getBairro() + "'";
			query += " WHERE id = " + objeto.getId();
			
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
	public ArrayList<Cliente> pegarTodos() {
		return null;
	}

}
