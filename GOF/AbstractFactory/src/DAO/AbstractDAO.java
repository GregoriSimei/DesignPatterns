package DAO;

import java.util.ArrayList;

public abstract class AbstractDAO<Objeto> {
	
	public abstract boolean adicionar(Objeto objeto);
	public abstract Objeto encontrarPorId(int id);
	public abstract boolean remover(int id);
	public abstract boolean atualizar(Objeto objeto);
	public abstract ArrayList<Objeto> pegarTodos();
	
}
