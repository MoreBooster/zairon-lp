# Termos da ZAIRON

Página pública: `/terms-of-use.html`. O link **Terms & Conditions** no rodapé abre essa página.

## Edição

- `terms-content.json`: conteúdo integral em português, inglês e espanhol.
- `generate_terms.py`: gera o HTML estático. Executar `python generate_terms.py` após mudar o conteúdo.
- `terms.css` e `terms.js`: apresentação e seleção de idioma. Os termos respeitam o idioma salvo pela página principal, o parâmetro `?lang=pt-br` e os links de seção.
- `terms-logo.png`: logo fornecida para a adaptação.
- `favicon.png`: imagem do símbolo Z fornecida em 30/09/2026, usada como favicon e ícone de atalho Apple na página principal e nos termos. A imagem original é preservada; a versão na URL evita reutilizar o favicon anterior em cache.
- Fontes locais Manrope e Fira Code, distribuídas pelo Fontsource 5.3.0; licenças em `terms-font-licenses.txt`.

## Alteração de 30/09/2026

Adaptação dos termos existentes para a ZAIRON, com substituição da marca e inclusão da cláusula 8.1 nos três idiomas. A cláusula prevê possível rollover em contas sem movimentação manual e com flutuação de saldo. Nenhuma base, multiplicador ou prazo foi definido. A redação revisada prevê determinação unilateral pela ZAIRON, independentemente de anuência ou aceitação específica do Usuário, e possível alcance retroativo sobre saldos, resultados e operações anteriores à comunicação ou à instituição do requisito, nos limites da legislação aplicável. Mantém análise individualizada, comunicação prévia das condições e preservação dos direitos legalmente assegurados.

A adaptação não equivale a um parecer jurídico nem valida a eficácia das cláusulas herdadas. A aplicação operacional de restrições deve passar pela assessoria jurídica responsável.

## Publicação

Este é um site estático. Publicar `terms-of-use.html`, `terms.css`, `terms.js`, `terms-logo.png`, `favicon.png`, `terms-manrope.woff2`, `terms-fira-code.woff2` e `terms-font-licenses.txt` na mesma pasta pública que o `index.html`.

Na Hostinger, preservar as alterações próprias do HTML publicado e atualizar o destino de `data-i18n="footer.linkTerms"` para `https://zaironlp.xyz/terms-of-use.html`. O repositório e a hospedagem são atualizados separadamente; não há sincronização automática configurada neste projeto.

## Correção de navegação de 30/09/2026

Uma aba antiga foi encontrada com `href="#"` no link de termos, reproduzindo o retorno ao topo. A página atual mantém o destino HTML direto, e `script.js` repara esse destino em HTML antigo, ao carregar, ao restaurar a página e antes do clique. O script ganhou uma nova versão de URL e as referências de termos nas traduções também apontam para a página publicada.

Publicar também `.htaccess` e `script.js`. A configuração preserva os cabeçalhos CORS existentes, faz HTML e scripts de navegação revalidarem seu cache e resolve `/pt-br` e `/pt-br/` para a página principal, mantendo os demais caminhos sem alteração. O idioma da rota portuguesa é reconhecido na inicialização. Após a publicação, limpar o cache da hospedagem. Abas já abertas com HTML e JavaScript antigos precisam ser recarregadas uma vez.

## Correção de 404 de 01/10/2026

Reproduzido no rodapé de `https://trade.zaironbroker.com/welcome`: o caminho relativo `/terms-of-use.html` era resolvido como `https://trade.zaironbroker.com/terms-of-use.html`, que retorna 404. A plataforma exibe a landing page no próprio domínio e carrega seu script de `zaironlp.xyz`.

O HTML, as traduções e o reparo de links agora usam o endereço absoluto `https://zaironlp.xyz/terms-of-use.html`. Manter esse endereço completo nas próximas edições para que cópias da landing page em outros domínios também funcionem. O script recebe a versão `20261001-terms-domain`.

A configuração `.htaccess` também redireciona `/terms-of-use`, `/terms-of-use/`, `/terms-of-use.html/` e suas variantes com prefixo `pt-br`, `pt`, `en`, `en-us` ou `es` para o arquivo publicado. Preserva parâmetros existentes; um prefixo de idioma é convertido em `?lang=` quando não há idioma explícito na consulta. Caminhos desconhecidos continuam retornando 404.

Publicar `index.html`, `script.js` e `.htaccess`, preservando as particularidades da cópia da Hostinger, e limpar o cache CDN. Validar o clique tanto em `zaironlp.xyz` quanto em `trade.zaironbroker.com/welcome`.
