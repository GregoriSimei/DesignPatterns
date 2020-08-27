package DAO;

public class Cliente extends Pessoa {
	
	private Endereco endereco;
	
	public Endereco getEndereco() {
		return endereco;
	}
	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	
	private AbstractDAO<Cliente> getDAO(){
		return new ClienteDAO();
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
	
	private Cliente encontrar(int id) {
		Cliente cliente = null;
		cliente = this.getDAO().encontrarPorId(id);
		return cliente;
	}
	
	public boolean deletar(int id) {
		boolean deletou = true;
		deletou = this.getDAO().remover(id);
		return deletou;
	}
	
}
