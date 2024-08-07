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

function scriptsFeitos(){
    const scriptFeito = document.getElementsByClassName('checkbox-group').checked;
    console.log(scriptFeito)
    

    if (scriptFeito);


}




function generateScript() {
    // Obtém os valores dos campos
    const clientName = document.getElementById('client-name').value;
    const scriptType = document.getElementById('script-type').value;
    const resolution = document.getElementById('resolution').value;
    const team = document.getElementById('team').value;
    const desbloqueioSap = document.getElementById('desbloqueio-sap').checked; document.getElementById('desbloqueio-sap').che
    const resetSap = document.getElementById('reset-sap').checked;
    const desbloqueioRede = document.getElementById('desbloqueio-rede').checked;
    const resetRede = document.getElementById('reset-rede').checked;
    const solicitacao = document.getElementById('solicitacao').value;

    let resolutionText = '';
    if (desbloqueioSap) {
        resolutionText = 'Senha SAP desbloqueada';
        
    } else if (resetSap) {
        resolutionText = 'Senha SAP reinicializada';
    } else if (desbloqueioRede) {
        resolutionText = 'Usuário de Rede desbloqueado';
    } else if (resetRede) {
        resolutionText = 'Reset de senha de rede realizado';
    } else {
        resolutionText = resolution;
    }

    let script = '';

    if (scriptType === 'encerramento') {
        script = `
Olá ${clientName}, concluímos o atendimento relacionado à sua solicitação ${solicitacao}.

A tratativa adotada para a solução foi: ${resolutionText}. Pedimos que valide a solução adotada.

Agradecemos seu contato e colaboração durante este processo. Em breve você receberá a pesquisa de satisfação em seu e-mail ou no campo “notificações” na página de abertura do catálogo digital. Contamos com sua participação para melhorarmos nossos atendimentos e serviços.

Central de Relacionamento do CSC

Atendimento 24h, 7 dias por semana
Telefone: 0800 212 2999
Aplicativo: https://crm-digital.eletrobras.gov.br/
Chat: https://eletrobras.com/pt/SiteAssets/CSC/CSC_Chat_Eletrobras.pdf
        `;
    } else if (scriptType === 'encaminhamento') {
        script = `
Olá ${clientName}. Para atendimento à sua solicitação “${solicitacao}”, foram aplicadas as seguintes ações: ${resolutionText}, mas mesmo assim não conseguimos chegar à solução necessária e por isso será preciso encaminhar seu chamado para tratamento pelo grupo ${team}, responsável por este tipo de demanda.

Este chamado pode ser consultado no CRM para verificar o andamento ou, caso prefira, entre em contato através dos canais abaixo.

Agradecemos a atenção e desejamos um excelente dia.

Central de Relacionamento do CSC

Atendimento 24h, 7 dias por semana
Telefone: 0800 212 2999
Aplicativo: https://crm-digital.eletrobras.gov.br/
Chat: https://eletrobras.com/pt/SiteAssets/CSC/CSC_Chat_Eletrobras.pdf
        `;
    }

    // Exibe o script gerado na página
    document.getElementById('generated-script').innerText = script;
}

function copyToClipboard() {
    // Obtém o texto do script gerado
    const scriptText = document.getElementById('generated-script').innerText;

    // Cria um elemento de texto temporário
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = scriptText;
    document.body.appendChild(tempTextArea);

    // Seleciona o texto e copia para a área de transferência
    tempTextArea.select();
    document.execCommand('copy');

    // Remove o elemento temporário
    document.body.removeChild(tempTextArea);

    // Alerta ao usuário que o texto foi copiado
    alert('Script copiado para a área de transferência!');
}