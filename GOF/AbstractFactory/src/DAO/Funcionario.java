package DAO;

public class Funcionario extends Pessoa{
	
	private AbstractDAO<Funcionario> getDAO(){
		return new FuncionarioDAO();
	}
	
	public boolean salvar() {
		boolean salvou;
		salvou = this.getDAO().adicionar(this);
		return salvou;
	}
	
	public boolean atualizar() {
		boolean atualizou;
		atualizou = this.getDAO().atualizar(this);
		return atualizou;
	}
	
	public boolean deletar(int id) {
		boolean deletar;
		deletar = this.getDAO().remover(id);
		return deletar;
	}
	
	private Funcionario encontrar(int id) {
		Funcionario funcionario= null;
		funcionario = this.getDAO().encontrarPorId(id);
		return funcionario;
	}
}
