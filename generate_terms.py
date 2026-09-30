"""Generate the static ZAIRON legal page from the three-language snapshot.

Run: python generate_terms.py
"""
import html
import json
from pathlib import Path
import re
import unicodedata

ROOT = Path(__file__).resolve().parent
LOGO_URL = 'terms-logo.png'
SIGNUP_URL = 'https://trade.zaironbroker.com/account/signup'
LOGIN_URL = 'https://trade.zaironbroker.com/login'

INTRO_COPY = {'en': {'kicker': 'Official legal documentation',
        'title': 'Terms & Conditions',
        'summary': 'This page consolidates the official ZAIRON legal documentation governing platform '
                   'access, use, payments, compliance reviews, market conduct, risk disclosures, affiliate '
                   'communications, and administrative review procedures.',
        'toc_title': 'Contents',
        'page_title': 'ZAIRON — Terms & Conditions',
        'switcher_label': 'Language selector',
        'signup': 'SIGN UP',
        'login': 'LOG IN',
        'back_to_top': 'Back to top',
        'legal_notice_title': 'LEGAL NOTICE',
        'legal_notice_paragraphs': ['<strong>ZAIRON</strong> is not authorized by the Brazilian Securities '
                                    'and Exchange Commission ("CVM") to directly offer intermediation and/or '
                                    'distribution services for securities issued abroad to investors '
                                    'residing in the Federative Republic of Brazil. Therefore, no reference '
                                    'contained in this document should be interpreted as a direct offer of '
                                    'services to those investors by <strong>ZAIRON</strong>. Although '
                                    '<strong>ZAIRON</strong> carefully analyzes potential returns based on '
                                    'historical data and current market behavior, there is no guarantee that '
                                    'any allocation, whether actual or proposed, will achieve specific '
                                    'results or investment objectives.',
                                    'Past performance is not indicative of future results, and volatility '
                                    'may cause returns in certain periods to be significantly higher or '
                                    'lower than those of previous periods. In addition, some clients may '
                                    'obtain investment results substantially different from those presented '
                                    'by the investment tools provided by <strong>ZAIRON</strong>.',
                                    'Derivatives are complex, high-risk financial instruments and may result '
                                    'in substantial losses, including the total loss of invested capital.']},
 'pt-br': {'kicker': 'Documentação legal oficial',
           'title': 'Termos e Condições',
           'summary': 'Esta página consolida a documentação legal oficial da ZAIRON que rege o acesso à '
                      'plataforma, o uso, os pagamentos, as revisões de compliance, a conduta de mercado, as '
                      'divulgações de risco, a comunicação com afiliados e os procedimentos de revisão '
                      'administrativa.',
           'toc_title': 'Índice',
           'page_title': 'ZAIRON — Termos e Condições',
           'switcher_label': 'Seletor de idioma',
           'signup': 'CADASTRO',
           'login': 'ENTRAR',
           'back_to_top': 'Ir para o topo',
           'legal_notice_title': 'AVISO LEGAL',
           'legal_notice_paragraphs': ['A <strong>ZAIRON</strong> não possui autorização da Comissão de '
                                       'Valores Mobiliários ("CVM") para oferecer diretamente serviços de '
                                       'intermediação e/ou distribuição de valores mobiliários emitidos no '
                                       'exterior a investidores residentes na República Federativa do '
                                       'Brasil. Portanto, nenhuma referência contida neste documento deve '
                                       'ser interpretada como uma oferta direta de serviços a esses '
                                       'investidores por parte da <strong>ZAIRON</strong>. Embora a '
                                       '<strong>ZAIRON</strong> analise cuidadosamente os retornos '
                                       'potenciais com base em dados históricos e no comportamento atual do '
                                       'mercado, não há qualquer garantia de que qualquer alocação, seja '
                                       'real ou proposta, atingirá resultados específicos ou objetivos de '
                                       'investimento.',
                                       'O desempenho passado não é indicativo de resultados futuros, e a '
                                       'volatilidade pode fazer com que os retornos em determinados períodos '
                                       'sejam significativamente superiores ou inferiores aos de períodos '
                                       'anteriores. Além disso, alguns clientes podem obter resultados de '
                                       'investimento substancialmente diferentes daqueles apresentados pelas '
                                       'ferramentas de investimento fornecidas pela <strong>ZAIRON</strong>.',
                                       'Derivativos são instrumentos financeiros complexos e de alto risco, '
                                       'podendo ocasionar perdas substanciais, inclusive a perda total do '
                                       'capital investido.']},
 'es': {'kicker': 'Documentación legal oficial',
        'title': 'Términos y Condiciones',
        'summary': 'Esta página consolida la documentación legal oficial de ZAIRON que regula el acceso a la '
                   'plataforma, el uso, los pagos, las revisiones de compliance, la conducta de mercado, las '
                   'divulgaciones de riesgo, la comunicación con afiliados y los procedimientos de revisión '
                   'administrativa.',
        'toc_title': 'Índice',
        'page_title': 'ZAIRON — Términos y Condiciones',
        'switcher_label': 'Selector de idioma',
        'signup': 'REGISTRO',
        'login': 'INGRESAR',
        'back_to_top': 'Volver arriba',
        'legal_notice_title': 'AVISO LEGAL',
        'legal_notice_paragraphs': ['<strong>ZAIRON</strong> no está autorizada por la Comisión de Valores '
                                    'Mobiliarios de Brasil ("CVM") para ofrecer directamente servicios de '
                                    'intermediación y/o distribución de valores emitidos en el exterior a '
                                    'inversores residentes en la República Federativa de Brasil. Por lo '
                                    'tanto, ninguna referencia contenida en este documento debe '
                                    'interpretarse como una oferta directa de servicios a esos inversores '
                                    'por parte de <strong>ZAIRON</strong>. Aunque <strong>ZAIRON</strong> '
                                    'analiza cuidadosamente los retornos potenciales con base en datos '
                                    'históricos y en el comportamiento actual del mercado, no existe ninguna '
                                    'garantía de que cualquier asignación, real o propuesta, alcance '
                                    'resultados específicos u objetivos de inversión.',
                                    'El desempeño pasado no es indicativo de resultados futuros, y la '
                                    'volatilidad puede hacer que los retornos en determinados períodos sean '
                                    'significativamente superiores o inferiores a los de períodos '
                                    'anteriores. Además, algunos clientes pueden obtener resultados de '
                                    'inversión sustancialmente diferentes de los presentados por las '
                                    'herramientas de inversión proporcionadas por <strong>ZAIRON</strong>.',
                                    'Los derivados son instrumentos financieros complejos y de alto riesgo, '
                                    'y pueden ocasionar pérdidas sustanciales, incluida la pérdida total del '
                                    'capital invertido.']}}


def slugify(text):
    normalized = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', '-', normalized).strip('-')


def open_list(html_parts: list[str], list_type: str) -> None:
    if list_type == "ul":
        html_parts.append('<ul class="legal-legal-list">')
    else:
        html_parts.append('<ol class="legal-alpha-list">')


def close_list(html_parts: list[str], list_type: str | None) -> None:
    if list_type == "ul":
        html_parts.append("</ul>")
    elif list_type == "ol":
        html_parts.append("</ol>")


def render_document(nodes: list[dict[str, str]], lang: str) -> tuple[str, list[tuple[str, str]]]:
    html_parts: list[str] = []
    toc_items: list[tuple[str, str]] = []
    open_list_type: str | None = None

    for node in nodes:
        text = node[lang]
        escaped = html.escape(text)
        kind = node["kind"]

        if kind == "top_heading":
            close_list(html_parts, open_list_type)
            open_list_type = None
            anchor = f"{lang}-{slugify(text)}"
            toc_items.append((anchor, text))
            html_parts.append(f'<section class="legal-legal-block" id="{anchor}">')
            html_parts.append(f"<h2>{escaped}</h2>")
            continue

        if kind == "section_heading":
            close_list(html_parts, open_list_type)
            open_list_type = None
            section_id = f"{lang}-{slugify(text)}"
            html_parts.append(f'<h3 id="{section_id}">{escaped}</h3>')
            continue

        if kind == "bullet":
            if open_list_type != "ul":
                close_list(html_parts, open_list_type)
                open_list_type = "ul"
                open_list(html_parts, open_list_type)
            html_parts.append(f"<li>{escaped}</li>")
            continue

        if kind == "alpha":
            if open_list_type != "ol":
                close_list(html_parts, open_list_type)
                open_list_type = "ol"
                open_list(html_parts, open_list_type)
            html_parts.append(f"<li>{escaped}</li>")
            continue

        close_list(html_parts, open_list_type)
        open_list_type = None
        html_parts.append(f"<p>{escaped}</p>")

    close_list(html_parts, open_list_type)

    rendered_parts: list[str] = []
    open_sections = 0
    for part in html_parts:
        if part.startswith('<section class="legal-legal-block"'):
            if open_sections:
                rendered_parts.append("</section>")
            open_sections += 1
        rendered_parts.append(part)
    if open_sections:
        rendered_parts.append("</section>")

    return "\n".join(rendered_parts), toc_items


def render_toc(items: list[tuple[str, str]]) -> str:
    return "\n".join(
        f'<li><a href="#{anchor}">{html.escape(label)}</a></li>'
        for anchor, label in items
    )


def render_footer_legal(lang: str) -> str:
    copy = INTRO_COPY[lang]
    paragraphs = "\n".join(
        f"              <p>{paragraph}</p>"
        for paragraph in copy["legal_notice_paragraphs"]
    )
    return f"""
          <div data-legal-lang-block="{lang}"{" hidden" if lang != "en" else ""}>
            <div class="legal-footer__text">
              <p><strong>{html.escape(copy["legal_notice_title"])}</strong></p>
{paragraphs}
            </div>
          </div>
""".rstrip()


def page_template(
    en_content: str,
    en_toc: str,
    pt_content: str,
    pt_toc: str,
    es_content: str,
    es_toc: str,
) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="description" content="ZAIRON legal documentation: terms and conditions, withdrawals, rollover, AML/KYC, fair trading and risk disclosures." />
  <title>{html.escape(INTRO_COPY["en"]["page_title"])}</title>
  <link rel="icon" href="{LOGO_URL}" sizes="32x32" />
  <link rel="apple-touch-icon" href="{LOGO_URL}" />
  <link rel="stylesheet" href="terms.css?v=20260930" />
</head>
<body id="top">
  <a class="legal-skip" href="#legal-content">Skip to content / Ir para o conteúdo</a>
  <div class="legal-page">
    <header class="legal-header">
      <div class="legal-header__inner">
        <a class="legal-brand" href="/" aria-label="ZAIRON home">
          <img src="{LOGO_URL}" alt="ZAIRON" width="180" height="33" />
        </a>
        <div class="legal-header__spacer"></div>
        <div class="legal-lang-switch" data-legal-lang-switcher aria-label="{html.escape(INTRO_COPY["en"]["switcher_label"])}">
          <button class="legal-lang-option is-active" type="button" data-lang="en" aria-pressed="true">EN</button>
          <span class="legal-lang-separator">|</span>
          <button class="legal-lang-option" type="button" data-lang="pt-br" aria-pressed="false">PT-BR</button>
          <span class="legal-lang-separator">|</span>
          <button class="legal-lang-option" type="button" data-lang="es" aria-pressed="false">ES</button>
        </div>
        <div class="legal-header__actions">
          <a class="legal-cta legal-cta--ghost" href="{SIGNUP_URL}">
            <span data-legal-lang-inline="en">{html.escape(INTRO_COPY["en"]["signup"])}</span>
            <span data-legal-lang-inline="pt-br" hidden>{html.escape(INTRO_COPY["pt-br"]["signup"])}</span>
            <span data-legal-lang-inline="es" hidden>{html.escape(INTRO_COPY["es"]["signup"])}</span>
          </a>
          <a class="legal-cta legal-cta--primary" href="{LOGIN_URL}">
            <span data-legal-lang-inline="en">{html.escape(INTRO_COPY["en"]["login"])}</span>
            <span data-legal-lang-inline="pt-br" hidden>{html.escape(INTRO_COPY["pt-br"]["login"])}</span>
            <span data-legal-lang-inline="es" hidden>{html.escape(INTRO_COPY["es"]["login"])}</span>
          </a>
        </div>
      </div>
    </header>

    <main class="legal-main" id="legal-content" tabindex="-1">
      <div class="legal-main__inner">
        <section class="legal-intro-shell">
          <div class="legal-panel legal-intro">
            <div class="legal-kicker" data-legal-lang-block="en">{html.escape(INTRO_COPY["en"]["kicker"])}</div>
            <div class="legal-kicker" data-legal-lang-block="pt-br" hidden>{html.escape(INTRO_COPY["pt-br"]["kicker"])}</div>
            <div class="legal-kicker" data-legal-lang-block="es" hidden>{html.escape(INTRO_COPY["es"]["kicker"])}</div>
            <div data-legal-lang-block="en">
              <h1>{html.escape(INTRO_COPY["en"]["title"])}</h1>
              <p>{html.escape(INTRO_COPY["en"]["summary"])}</p>
            </div>
            <div data-legal-lang-block="pt-br" hidden>
              <h1>{html.escape(INTRO_COPY["pt-br"]["title"])}</h1>
              <p>{html.escape(INTRO_COPY["pt-br"]["summary"])}</p>
            </div>
            <div data-legal-lang-block="es" hidden>
              <h1>{html.escape(INTRO_COPY["es"]["title"])}</h1>
              <p>{html.escape(INTRO_COPY["es"]["summary"])}</p>
            </div>
          </div>
        </section>
      </div>

      <section class="legal-legal-surface">
        <div class="legal-legal-layout">
          <div class="legal-legal-body">
            <div class="legal-content-wrap" data-legal-lang-block="en">
{en_content}
            </div>
            <div class="legal-content-wrap" data-legal-lang-block="pt-br" hidden>
{pt_content}
            </div>
            <div class="legal-content-wrap" data-legal-lang-block="es" hidden>
{es_content}
            </div>
          </div>
          <aside class="legal-panel legal-overview">
            <div data-legal-lang-block="en">
              <h2>{html.escape(INTRO_COPY["en"]["toc_title"])}</h2>
              <ol class="legal-toc">
                {en_toc}
              </ol>
            </div>
            <div data-legal-lang-block="pt-br" hidden>
              <h2>{html.escape(INTRO_COPY["pt-br"]["toc_title"])}</h2>
              <ol class="legal-toc">
                {pt_toc}
              </ol>
            </div>
            <div data-legal-lang-block="es" hidden>
              <h2>{html.escape(INTRO_COPY["es"]["toc_title"])}</h2>
              <ol class="legal-toc">
                {es_toc}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>

    <footer class="legal-footer">
      <div class="legal-footer__inner">
        <div class="legal-footer__legal">
{render_footer_legal("en")}
{render_footer_legal("pt-br")}
{render_footer_legal("es")}
        </div>

        <div class="legal-footer__bottom">
          <a class="legal-back-link" href="mailto:support@zaironbroker.com">support@zaironbroker.com</a>
          <a class="legal-back-link" href="#top">
            <svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
            <span data-legal-lang-inline="en">{html.escape(INTRO_COPY["en"]["back_to_top"])}</span>
            <span data-legal-lang-inline="pt-br" hidden>{html.escape(INTRO_COPY["pt-br"]["back_to_top"])}</span>
            <span data-legal-lang-inline="es" hidden>{html.escape(INTRO_COPY["es"]["back_to_top"])}</span>
          </a>
        </div>
      </div>
    </footer>
  </div>

  <script src="terms.js?v=20260930" defer></script>
</body>
</html>
"""


def main():
    data = json.loads((ROOT / 'terms-content.json').read_text(encoding='utf-8'))
    nodes = data['nodes']
    assert len(nodes) == data['metadata']['node_count']
    assert all(node['kind'] in {'top_heading', 'section_heading', 'paragraph', 'bullet', 'alpha'} for node in nodes)
    assert all(isinstance(node.get(lang), str) and node[lang].strip() for node in nodes for lang in ('pt', 'en', 'es'))
    en, en_toc = render_document(nodes, 'en')
    pt, pt_toc = render_document(nodes, 'pt')
    es, es_toc = render_document(nodes, 'es')
    page = page_template(en, render_toc(en_toc), pt, render_toc(pt_toc), es, render_toc(es_toc))
    (ROOT / 'terms-of-use.html').write_text(page, encoding='utf-8', newline='\n')
    print(f'Generated terms-of-use.html: {len(nodes)} blocks per language.')


if __name__ == '__main__':
    main()
