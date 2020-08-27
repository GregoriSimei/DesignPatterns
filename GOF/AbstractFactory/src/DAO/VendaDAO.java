package DAO;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

class VendaDAO extends AbstractDAO<Venda>{

private Connection connection;
	
	public VendaDAO() {
		this.connection = Conexao.getConexao();
	}
	
	private Cliente buscarCliente(int id) {
		
		ClienteDAO clienteDAO = new ClienteDAO();
		
		return clienteDAO.encontrarPorId(id);
	}
	
	private Funcionario buscarVendedor(int id) {
		
		FuncionarioDAO funcionarioDAO = new FuncionarioDAO();
		
		return funcionarioDAO.encontrarPorId(id);
	}

	@Override
	public boolean adicionar(Venda objeto) {
		
		boolean transacaoConcluida = true;
		Statement preparedStatement = null;
		
		try {
			String query = "INSERT INTO vendas(datavenda, idcliente, idfuncionario) VALUES(";
			query += "'" + objeto.getDataVenda() + "','" 
						 + objeto.getCliente().getId() + "','" 
						 + objeto.getVendedor().getId() +  "')";
			
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
	public Venda encontrarPorId(int id) {
		
		Venda venda  = new Venda();
		Statement preparedStatement = null;
		
		try {
			
			String query = "SELECT notafiscal, datavenda, idcliente, idfuncionario FROM vendas WHERE notafiscal = " + id;
			
			preparedStatement = this.connection.createStatement();
			ResultSet respostaBanco = preparedStatement.executeQuery(query);
			
			if(respostaBanco.next()) {
				
				venda.setNotaFiscal(respostaBanco.getInt("id"));
				venda.setDataVenda(respostaBanco.getDate("datavenda").toString());
				venda.setCliente(this.buscarCliente(respostaBanco.getInt("idcliente")));
				venda.setVendedor(this.buscarVendedor(respostaBanco.getInt("idfuncionario")));
				
			}
			
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		
		
		return venda;
	}

	@Override
	public boolean remover(int id) {
		
		boolean naoRemoveu = true;
		Statement preparedStatement = null;

		try {
			
			String query = "DELETE FROM vendas WHERE notafiscal = " + id;
			
			preparedStatement = this.connection.createStatement();
			naoRemoveu = preparedStatement.execute(query);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return naoRemoveu;
	}

	@Override
	public boolean atualizar(Venda objeto) {
		
		boolean atualizou = true;
		Statement preparedStatement = null;
		
		try {
			
			String query = "UPDATE clientes SET";
			query += " datavenda = '" + objeto.getDataVenda() + "',";
			query += " idcliente = '" + objeto.getCliente().getId() + "',";
			query += " idfuncionario = '" + objeto.getVendedor().getId() + "'";
			query += " WHERE notafiscal = " + objeto.getNotaFiscal();
			
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
	public ArrayList<Venda> pegarTodos() {
		// TODO Auto-generated method stub
		return null;
	}

}
