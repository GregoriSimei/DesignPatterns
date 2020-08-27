package DAO;

public class DetalheVenda {
	
	private int id;
	private Venda venda;
	private Produto produto;
	private int quantidade;
	private double desconto;
	private double precoVenda;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public Venda getVenda() {
		return venda;
	}
	
	public void setVenda(Venda venda) {
		this.venda = venda;
	}
	
	public Produto getProduto() {
		return produto;
	}
	
	public void setProduto(Produto produto) {
		this.produto = produto;
	}
	
	public int getQuantidade() {
		return quantidade;
	}
	
	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	
	public double getDesconto() {
		return desconto;
	}
	
	public void setDesconto(double desconto) {
		this.desconto = desconto;
	}
	
	public double getPrecoVenda() {
		return precoVenda;
	}
	
	public void setPrecoVenda(double precoVenda) {
		this.precoVenda = precoVenda;
	}
	
	private AbstractDAO<DetalheVenda> getDAO(){
		return new DetalhesVendaDAO();
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
	
	public boolean deletar() {
		boolean deletar;
		deletar = this.getDAO().atualizar(this);
		return deletar;
	}
	
	private DetalheVenda encontrar(int id) {
		DetalheVenda detalheVenda= null;
		detalheVenda = this.getDAO().encontrarPorId(id);
		return detalheVenda;
	}
}
