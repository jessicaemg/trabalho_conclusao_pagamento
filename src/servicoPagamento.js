export class servicoRealizarPagamento {
    pagamento
    constructor() {
      this.pagamento = [];
    }

    pagar(codigoBarra, empresa, valor) {
        if (valor < 50.00){
            throw new Error ('O valor do pagamento não pode ser menor que R$50.00');
        }

        this.pagamento.push ({
            codigoBarra: codigoBarra,
            empresa: empresa,
            valor: valor,
            categoria: valor > 100 ? 'cara' : 'padrao'
        });
    };

    consultar (){
      return this.pagamento[this.pagamento.length -1];
    };
}