package DAO;

public class Produto {
	
	private int codigo;
	private String descricao;
	private double preco;
	
	public int getCodigo() {
		return codigo;
	}
	
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public double getPreco() {
		return preco;
	}
	
	public void setPreco(double preco) {
		this.preco = preco;
	}
	
	private AbstractDAO<Produto> getDAO(){
		return new ProdutoDAO();
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
	
	private Produto encontrar(int id) {
		Produto produto = null;
		produto = this.getDAO().encontrarPorId(id);
		return produto;
	}
	
}
