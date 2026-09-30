# Termos da ZAIRON

Página pública: `/terms-of-use.html`. O link **Terms & Conditions** no rodapé abre essa página.

## Edição

- `terms-content.json`: conteúdo integral em português, inglês e espanhol.
- `generate_terms.py`: gera o HTML estático. Executar `python generate_terms.py` após mudar o conteúdo.
- `terms.css` e `terms.js`: apresentação e seleção de idioma. Os termos respeitam o idioma salvo pela página principal, o parâmetro `?lang=pt-br` e os links de seção.
- `terms-logo.png`: logo fornecida para a adaptação.
- Fontes locais Manrope e Fira Code, distribuídas pelo Fontsource 5.3.0; licenças em `terms-font-licenses.txt`.

## Alteração de 30/09/2026

Adaptação dos termos existentes para a ZAIRON, com substituição da marca e inclusão da cláusula 8.1 nos três idiomas. A cláusula prevê possível rollover em contas sem movimentação manual e com flutuação de saldo. Nenhuma base, multiplicador ou prazo foi definido. A redação revisada prevê determinação unilateral pela ZAIRON, independentemente de anuência ou aceitação específica do Usuário, e possível alcance retroativo sobre saldos, resultados e operações anteriores à comunicação ou à instituição do requisito, nos limites da legislação aplicável. Mantém análise individualizada, comunicação prévia das condições e preservação dos direitos legalmente assegurados.

A adaptação não equivale a um parecer jurídico nem valida a eficácia das cláusulas herdadas. A aplicação operacional de restrições deve passar pela assessoria jurídica responsável.

## Publicação

Este é um site estático. Publicar `terms-of-use.html`, `terms.css`, `terms.js`, `terms-logo.png`, `terms-manrope.woff2`, `terms-fira-code.woff2` e `terms-font-licenses.txt` na mesma pasta pública que o `index.html`.

Na Hostinger, preservar as alterações próprias do HTML publicado e atualizar o destino de `data-i18n="footer.linkTerms"` para `/terms-of-use.html`. O repositório e a hospedagem são atualizados separadamente; não há sincronização automática configurada neste projeto.
