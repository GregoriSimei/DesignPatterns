package DAO;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

class FuncionarioDAO extends AbstractDAO<Funcionario>{

	private Connection connection;
	
	public FuncionarioDAO() {
		this.connection = Conexao.getConexao();
	}

	@Override
	public boolean adicionar(Funcionario objeto) {
		
		boolean transacaoConcluida = true;
		Statement preparedStatement = null;
		
		try {
			String query = "INSERT INTO funcionarios(cpf, nome, email) VALUES(";
			query += "'" + objeto.getCpf() + "','" 
						 + objeto.getNome() + "','" 
						 + objeto.getEmail() + "')";
			
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
	public Funcionario encontrarPorId(int id) {
		
		Funcionario funcionario  = new Funcionario();
		Statement preparedStatement = null;
		
		try {
			
			String query = "SELECT id, cpf, nome , email FROM funcionarios WHERE matricula = " + id;
			
			preparedStatement = this.connection.createStatement();
			ResultSet respostaBanco = preparedStatement.executeQuery(query);
			
			if(respostaBanco.next()) {
				funcionario.setId(respostaBanco.getInt("matricula"));
				funcionario.setNome(respostaBanco.getString("nome"));
				funcionario.setCpf(respostaBanco.getString("cpf"));
				funcionario.setEmail(respostaBanco.getString("email"));
			}
			
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		
		return funcionario;
	}

	@Override
	public boolean remover(int id) {
		
		boolean naoRemoveu = true;
		Statement preparedStatement = null;

		try {
			
			String query = "DELETE FROM funcionarios WHERE id = " + id;
			
			preparedStatement = this.connection.createStatement();
			naoRemoveu = preparedStatement.execute(query);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return naoRemoveu;
	}

	@Override
	public boolean atualizar(Funcionario objeto) {
		
		boolean atualizou = true;
		Statement preparedStatement = null;
		
		try {
			
			String query = "UPDATE funcionarios SET";
			query += " nome = '" + objeto.getNome() + "',";
			query += " cpf = '" + objeto.getCpf() + "',";
			query += " email = '" + objeto.getEmail() + "'";
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
	public ArrayList<Funcionario> pegarTodos() {
		// TODO Auto-generated method stub
		return null;
	}

}
