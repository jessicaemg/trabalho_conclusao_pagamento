export class servicoRealizarPagamento {
    pagamento
    constructor() {
      this.pagamento = [];
    }

    pagar(codigoBarra, empresa, valor) {

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