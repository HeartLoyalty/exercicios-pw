const visor = document.getElementById('visor');
const botoes = document.querySelectorAll('.calculadora button');

let expressao = '';

function atualizarVisor() {
    visor.value = expressao;
    
}
botoes.forEach(botao =>{
    botao.addEventListener('click', function() {
        const valor = botao.textContent;

        if (valor === 'c') {    
                expressao = '';
            
        } else if(valor === '=') {
            try{
                const expressaoParaEval = expressao.replace(/x/g, '*');
                const resultado = eval(expressaoParaEval);
                expressao = String(resultado);
            }catch (error){
                expressao = "operaçaõ invalida";
            }
            
            
        }else{
            expressao += valor;
        }
        atualizarVisor();
    });
});