package DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

class Conexao {
	
	protected static Connection getConexao() {
		
		String driver = "com.mysql.cj.jdbc.Driver";
		String url = "jdbc:mysql://localhost:3306/loja";
		String usuarioBD = "root";
		String senhaBD = "GiSiMaSs21-*";
		
		Connection connection = null;
		
		try {
			
			Class.forName(driver);
			connection = DriverManager.getConnection(url, usuarioBD, senhaBD);
			
		} 
		catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
		
		return connection;
	}

}
