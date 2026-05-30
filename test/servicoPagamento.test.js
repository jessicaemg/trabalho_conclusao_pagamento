import { servicoRealizarPagamento } from '../src/servicoPagamento.js';
import assert from 'node:assert';

describe('Serviço de realizar pagamento de empresas', () => {
   it('Validar o pagamento maior que 100, deve retornar a categoria "cara"', () => {
    
    const realizandoPagamento = new servicoRealizarPagamento(); 
 
    realizandoPagamento.pagar('325855-895598-324544','Neide & Consultoria',350.89)

    const ultimoPagamentoRealizado = realizandoPagamento.consultar();

    assert.equal(ultimoPagamentoRealizado.categoria, 'cara')

   });

   it ('Validar o pagamento menor que 100, deve retornar a categoria "padrao"', () => {

     const realizandoPagamento = new servicoRealizarPagamento(); 
 
     realizandoPagamento.pagar('387458-985858-9865','Davi Ltda',98.99);

    const ultimoPagamentoRealizado = realizandoPagamento.consultar();

    assert.equal(ultimoPagamentoRealizado.categoria, 'padrao')
   });

   it ('Validando que está consultando o ultimo pagamento realizado', () => {
    
    const realizandoPagamento = new servicoRealizarPagamento(); 
 
    realizandoPagamento.pagar('784585-89589-652','Marcos Ltda',120.99);
    
    const ultimoPagamento = realizandoPagamento.consultar();

    console.log(ultimoPagamento);

    assert.equal(ultimoPagamento.empresa, 'Marcos Ltda');
    assert.equal(ultimoPagamento.valor, 120.99);
    
   });

   it ('Validar que não deve permitir pagamento menor que R$50.00', () => {

     const realizandoPagamento = new servicoRealizarPagamento(); 
 
     assert.throws(() => {
        realizandoPagamento.pagar('748545-895693-25874','Jessica Ltda',49.99);
     });
   });

});