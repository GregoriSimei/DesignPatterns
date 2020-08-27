package DAO;

public class Venda {
	
	private int notaFiscal;
	private String dataVenda;
	private Cliente cliente;
	private Funcionario vendedor;
	
	public int getNotaFiscal() {
		return notaFiscal;
	}
	
	public void setNotaFiscal(int id) {
		this.notaFiscal = id;
	}
	
	public String getDataVenda() {
		return dataVenda;
	}
	
	public void setDataVenda(String dataVenda) {
		this.dataVenda = dataVenda;
	}
	
	public Cliente getCliente() {
		return cliente;
	}
	
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	public Funcionario getVendedor() {
		return vendedor;
	}
	
	public void setVendedor(Funcionario vendedor) {
		this.vendedor = vendedor;
	}
	private AbstractDAO<Venda> getDAO(){
		return new VendaDAO();
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
	
	private Venda encontrar(int id) {
		Venda venda= null;
		venda = this.getDAO().encontrarPorId(id);
		return venda;
	}
	
	
}
