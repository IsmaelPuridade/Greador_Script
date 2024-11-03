function toggleFields() {
    const scriptType = document.getElementById('script-type').value;
    const teamField = document.getElementById('team-field');
    const resolutionField = document.getElementById('resolution-field');
    const frases_comuns = document.getElementsByClassName('checkbox-group');
    var radios = document.getElementsByClassName('checkbox-group');
    
    if (scriptType === 'encaminhamento') {
        teamField.style.display = 'block';
        /*resolutionField.style.display = 'none';*/

        
        for (var i = 0; i < radios.length; i++) {
        radios[i].style.display = 'none';
    }
        
    } 
    if (scriptType === 'encerramento'){
        teamField.style.display = 'none';

        resolutionField.style.display = 'block';
        for (var i = 0; i < radios.length; i++){ 
            radios[i].style.display = 'inline';
        }
    }    

        
}





function generateScript() {
    const clientName = document.getElementById("client-name").value;
    const solicitacaoId = document.getElementById("solicitacao").value;
    const assunto = document.getElementById("assunto").value;
    const telefone = document.getElementById("telefone").value;
    const contactDate = document.getElementById("contact-date").value;
    const contactTime = document.getElementById("contact-time").value;
    const aberturaTime = document.getElementById("data-abertura").value

    // Formatação do script
    const script = `Prezado(a) ${clientName},

Para que possamos dar continuidade ao atendimento da "${solicitacaoId}, referente a: ${assunto}" aberto no dia ${aberturaTime}, estamos necessitando contactá-lo.

Registro de tentativas:
Primeira tentativa: 
Dia ${contactDate.split('-').reverse().join('/')} às ${contactTime}
Telefones: ${telefone}
Dificuldade no contato: ( ) Não atende / ( ) Ausente / ( ) Outros _____________

Segunda tentativa:
Dia ___/___/___,  Hora ___:____
Telefones: ${telefone}
Dificuldade no contato: ( ) Não atende / ( ) Ausente / ( ) Outros _____________

Terceira tentativa:
Dia ___/___/___,  Hora ___:____
Telefones: ${telefone}
Dificuldade no contato: ( ) Não atende / ( ) Ausente / ( ) Outros _____________

Para atendê-lo com maior presteza, pedimos a gentileza de nos retornar ou informar dia e faixa de hora mais adequada para que a equipe possa entrar em contato.

Informamos que o procedimento formal do atendimento exige que após a terceira tentativa de contato, dentro do intervalo de cinco dias úteis, após este prazo esta solicitação será encerrada.

O número de call back da Central de Atendimento do CSC é o (71) 3204-5700.

Em caso de dúvidas, favor realizar contato com a Central de Atendimento através dos nossos canais de atendimento.

Atenciosamente,

Central de Relacionamento do CSC

Atendimento 24h, 7 dias por semana
WhatsApp: 0800 212 2999
Aplicativo:https://crm-digital-app.eletrobras.gov.br/
Chat:BLiP Chat`;

    document.getElementById("generated-script").innerText = script;
}

// Função para copiar o script gerado para a área de transferência
function copyToClipboard() {
    const scriptText = document.getElementById("generated-script").innerText;
    navigator.clipboard.writeText(scriptText).then(() => {
        alert("Script copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar o script:", err);
    });
}