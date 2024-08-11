

let linkInterno = '';
let linkExterno = '';

function transformLink(url) {
    // Define o domínio padrão
    const defaultDomain = 'https://crm-digital.eletrobras.gov.br/';
    
    // Define o domínio com 'int'
    const intDomain = 'https://crm-digital.int.eletrobras.gov.br/';

    linkInterno = url;
    linkExterno = url;
    
    if (url.startsWith(intDomain)) {
        // Remove o 'int' e substitui pelo domínio padrão
        linkExterno = url.replace(intDomain, defaultDomain);
    }if (url.startsWith(defaultDomain)) {
        // Adiciona 'int' ao domínio padrão
        linkInterno = url.replace(defaultDomain, intDomain);
    /*} else {
        // Se o link não começar com nenhum dos domínios, retornamos um erro
        throw new Error('O link fornecido não corresponde aos domínios esperados.');*/
    }
    
    return { linkInterno, linkExterno };
}

function generateScript() {
    try {
        // Obtém o valor do campo de entrada
        const linkCaptado = document.getElementById('link').value;

        /*// Valida o campo de entrada
        if (!linkCaptado) {
            alert('Por favor, insira um link.');
            return;
        }*/
        
        // Gera os links transformados
        const transformedLinks = transformLink(linkCaptado);
        
        // Gera o script com os links
        const script = `
Prezado(a) usuário(a), para atendimento à sua solicitação orientamos que seja aberta a requisição informada no link abaixo:

Link Interno: ${transformedLinks.linkInterno}

Link Externo: ${transformedLinks.linkExterno}

Atenciosamente,

Central de Relacionamento do CSC

Atendimento 24h, 7 dias por semana
WhatsApp: 0800 212 2999
Chat: https://eletrobras-chat.digitalk.com.br/
Aplicativo: https://crm-digital-app.eletrobras.gov.br/

Pedimos que reserve um tempo para responder à pesquisa de satisfação que será enviada ao seu e-mail. Sua opinião é muito importante para nos ajudar a construir um serviço sempre melhor.`;
                
        // Exibe o script gerado na página
        document.getElementById('script-gerado').innerText = script;

    } catch (error) {
        alert(error.message);
    }
}



function copiarTexto() {
    // Obtém o texto do script gerado
    const scriptText = document.getElementById('script-gerado').innerText;

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
    alert('Script copiado para a área de transferência!');}
