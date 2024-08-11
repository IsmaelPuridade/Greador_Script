function transformLinkINT(url) {
    // Define o domínio padrão
    const defaultDomain = 'https://crm-digital.eletrobras.gov.br/';
  
    // Verifica se o URL contém o domínio 'int'
    const intDomain = 'https://crm-digital.int.eletrobras.gov.br/';


    let linkInterno:'';
    let linkExterno:'';
    
    // Substitui o domínio 'int' pelo padrão se necessário
    if (url.startsWith(defaultDomain)) {
      linkInterno = url.replace(defaultDomain, intDomain);}


    else if(url.startsWith(intDomain)){
        linkExterno = url.replace(intDomain, defaultDomain);

    }    
    
    return url;
  }
  



  function transformLinkEXT(url) {
    // Define o domínio padrão
    const defaultDomain = 'https://crm-digital.eletrobras.gov.br/';
  
    // Verifica se o URL contém o domínio 'int'
    const intDomain = 'https://crm-digital.int.eletrobras.gov.br/';
    
    // Substitui o domínio 'int' pelo padrão se necessário
    if (url.startsWith(intDomain)) {
      url = url.replace(intDomain, defaultDomain);
   
  
    return url;
  }
}

  // Teste da função
  const originalLink1 = 'https://crm-digital.eletrobras.gov.br/dwp/app/#/srm/profile/SRGAA5V0FGTNMAP27FRGBPKN7ODH55/srm';
  const originalLink2 = 'https://crm-digital.int.eletrobras.gov.br/dwp/app/#/srm/profile/SRGAA5V0FGTNMAP27FRGBPKN7ODH55/srm';
  console.log(linkExterno);
  
  /*console.log(transformLinkINT(originalLink1)); // https://crm-digital.eletrobras.gov.br/dwp/app/#/srm/profile/SRGAA5V0FGTNMAP27FRGBPKN7ODH55/srm
  console.log(transformLink(originalLink2)); // https://crm-digital.eletrobras.gov.br/dwp/app/#/srm/profile/SRGAA5V0FGTNMAP27FRGBPKN7ODH55/srm*/
  