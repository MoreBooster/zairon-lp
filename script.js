document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // INTERNATIONALIZATION (i18n) DICTIONARY & ENGINE
  // ==========================================
  const translations = {
    "en-US": {
      meta: {
        title: "ZAIRON — One Broker. Infinite Ways to Invest.",
        description: "Trade global markets through a secure, intuitive platform built for smarter decisions."
      },
      nav: {
        home: "Home",
        advantages: "Advantages",
        markets: "Markets",
        platform: "Platform",
        resources: "Features",
        payments: "Deposits",
        bonuses: "Bonuses",
        steps: "Process",
        faq: "FAQ",
        signin: "Sign in",
        openAccount: "Open an account"
      },
      hero: {
        badge: "A COMPLETE TRADING EXPERIENCE",
        headline: "One broker. Infinite ways to invest.",
        subheadline: "Trade global markets through a secure, intuitive platform built for smarter decisions.",
        ctaPrimary: "Trade on Demo Account",
        ctaSecondary: "Explore the platform",
        trustLicensed: "Licensed & Secure",
        trustMinDeposit: "Min. Deposit $10",
        trustFastWithdrawal: "Fast Withdrawals",
        terminalTitle: "ZAIRON Terminal",
        sslMeta: "SSL Secure Connection",
        chartTitle: "EUR / USD (Real Time)",
        demoBalanceLabel: "Demo Account Balance",
        rechargeable: "Rechargeable",
        maxReturnLabel: "Max Return",
        upTo95: "Up to 95%",
        perTrade: "Per trade"
      },
      benefits: {
        badge: "BUILT FOR BETTER TRADING",
        headline: "A smoother experience at every step",
        supportTitle: "Dedicated support",
        supportDesc: "Specialized team available to assist you whenever you need.",
        withdrawalsTitle: "Fast withdrawals",
        withdrawalsDesc: "Withdraw your funds quickly and securely to your preferred method.",
        trading247Title: "24/7 trading",
        trading247Desc: "Access the financial markets at any time, even on weekends.",
        assets300Title: "Over 300 assets",
        assets300Desc: "Forex, stocks, crypto and commodities in a single account."
      },
      assets: {
        badge: "LIVE MARKETS",
        headline: "Featured assets to explore",
        subheadline: "Track prices, trends and market movements in real time.",
        btnTrade: "Trade",
        live: "LIVE",
        last24h: "in the last 24h",
        gold: "Gold",
        subForex: "Forex Pair",
        subCommodity: "Commodity",
        subUs100: "US100 Index",
        subStock: "Stock",
        subSpx: "SPX Index"
      },
      platform: {
        badge: "TRADE WITHOUT LIMITS",
        headline: "Trade anytime, on any device",
        description: "Access the platform wherever you are and stay connected to the markets through our desktop, web and mobile apps.",
        downloadMac: "Download for Mac",
        openWeb: "Open on Web",
        downloadAppStoreLabel: "Download on",
        installGooglePlayLabel: "Get it on"
      },
      resources: {
        badge: "COMPLETE PLATFORM",
        headline: "Everything you need to trade",
        description: "Integrated tools to track, analyze and access different markets.",
        slide1Badge: "CONNECTED MARKETS",
        slide1Title: "Real-time quotes",
        slide1Desc: "Always in direct sync with the global financial market. Track top asset movements without delays.",
        slide1Footer: "Updated now",
        colAsset: "ASSET",
        colPrice: "PRICE",
        colChange: "CHANGE",
        colTrend: "TREND",
        colVolume: "VOLUME",
        slide2Badge: "TECHNICAL SUPPORT",
        slide2Title: "24/7 support",
        slide2Desc: "A dedicated team to offer support whenever you need it.",
        slide2Footer: "Team online — Average response time: < 1 min",
        slide2HeaderWrap: "Team available",
        slide2ResponseTime: "Avg. response time: < 1 min",
        slide2UserChat: "I need help verifying my account. How do I do it?",
        slide2AgentChat: "Hello! You can upload your ID document directly in the Profile tab. The process takes less than 5 minutes.",
        slide2HelpCenter: "Help Center:",
        slide2HelpLink1: "How to make a deposit?",
        slide2HelpLink2: "What are the withdrawal fees?",
        slide2SpeakBtn: "Contact support",
        slide2Disponibility: "Available via chat & email",
        slide3Badge: "GLOBAL COVERAGE",
        slide3Title: "Featured markets",
        slide3Desc: "Access stocks, currencies, commodities and Forex pairs on a single platform.",
        slide3Footer: "Multiple markets on a single platform",
        slide3TabForex: "Forex",
        slide3TabStocks: "Stocks",
        slide3TabCrypto: "Crypto",
        slide3TabCommodities: "Commodities",
        slide4Badge: "ADVANCED ANALYSIS",
        slide4Title: "Integrated indicators",
        slide4Desc: "Use advanced tools to analyze trends, movements and market opportunities.",
        slide4Footer: "100+ Indicators and drawing tools",
        legendVol: "Volume: 12.4K",
        legendBands: "Bands(20, 2): 68,120 / 67,840",
        slide5Badge: "MACROECONOMICS",
        slide5Title: "News and economic calendar",
        slide5Desc: "Track relevant events and information that can influence the market.",
        slide5Footer: "Constant updates",
        colCalendar: "Economic Calendar",
        colNews: "Recent News",
        evtIpc: "CPI (Monthly Inflation)",
        evtPrev: "Forecast:",
        evtPrior: "Prior:",
        evtEcb: "ECB Rate",
        evtBailey: "Bailey Speech",
        impactHigh: "High",
        impactMedium: "Medium",
        catMarkets: "Markets",
        time12m: "12m ago",
        newsHeadline1: "Fed signals interest rate stabilization for next quarter",
        relHigh: "High Relevance",
        catCommodities: "Commodities",
        time45m: "45m ago",
        newsHeadline2: "Brent crude price rises following cartel announcements",
        relMedium: "Medium Relevance",
        keepScrolling: "Keep scrolling"
      },
      bonuses: {
        badge: "EXCLUSIVE BENEFITS",
        headline: "Benefits designed to take you further",
        card1Title: "Risk-free trades",
        card1Desc: "Protect your initial transactions with security coupons.",
        card2Title: "Deposit bonus",
        card2Desc: "Get additional credits on your new deposits.",
        card3Title: "Active cashback",
        card3Desc: "Receive back a portion of your weekly traded capital.",
        card4Title: "Bonus up to 200%",
        card4Desc: "The larger your deposit, the greater the boost provided.",
        ctaTitle: "Start with exclusive benefits",
        ctaButton: "Open your account and claim",
        ctaNote: "Sign up now to secure exclusive bonuses on your first deposit."
      },
      steps: {
        badge: "GET STARTED IN A FEW STEPS",
        headline: "Get started in just 3 steps",
        description: "Create your account, set up your security and start exploring the platform.",
        step1Title: "Create your account",
        step1Desc: "Sign up for free in less than a minute.",
        step1Micro: "Quick and simple registration",
        step2Title: "Secure your account",
        step2Desc: "Set up your verification methods and add an extra layer of security.",
        step2Micro: "Secure verification",
        step3Title: "Fund your account and trade",
        step3Desc: "Make your first deposit and access the markets available on the platform.",
        step3Micro: "Multiple markets available"
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "What is the minimum deposit?",
        a1: "The minimum deposit on ZAIRON starts at $10, and the minimum trade size is just $1.",
        q2: "Can I test the platform without making a deposit?",
        a2: "Yes! Every user gets access to a free Demo Account with $10,000 in virtual funds to practice risk-free.",
        q3: "Do you charge commissions on deposits or withdrawals?",
        a3: "ZAIRON charges 0% commission on deposits and withdrawals. All transactions are fee-free.",
        q4: "How long do withdrawals take?",
        a4: "Withdrawal requests are processed rapidly, usually within 1 hour to 24 hours depending on the chosen payment method.",
        q5: "Do you have a mobile app?",
        a5: "Yes, you can download the mobile app for iOS and Android directly from the App Store and Google Play.",
        q6: "Do you offer support in local languages?",
        a6: "Yes, we offer 24/7 dedicated support in English, Portuguese, and multiple other languages."
      },
      form: {
        headline: "Ready to trade?",
        subheadline: "Join thousands of traders worldwide. Fill in your details to open your account.",
        trust1: "Free Demo Account Access",
        trust2: "SSL Secure Connection",
        trust3: "Regulated Funds Protection",
        formTitle: "Get started today",
        formSubtitle: "Sign up now — costs only $10 to get started",
        country: "Country of residence",
        countryPlaceholder: "Search Country",
        email: "Email address",
        emailPlaceholder: "name@example.com",
        password: "Password",
        passwordPlaceholder: "Minimum 8 characters",
        termsHtml: 'I agree to the <a href="#" target="_blank">Terms and Conditions</a> and <a href="#" target="_blank">Privacy Policy</a>',
        submitBtn: "Open my account",
        orDivider: "Or sign in with",
        googleBtn: "Continue with Google",
        valRequired: "Please choose a country",
        valEmailInvalid: "Enter a valid email address",
        valPassLength: "Minimum 8 characters",
        valTermsRequired: "You must accept the Terms and Conditions",
        submitting: "Creating your account...",
        success: "Your account has been created successfully!",
        errorGeneric: "Something went wrong. Please try again."
      },
      footer: {
        description: "Next-generation financial trading platform for global traders.",
        companyLegal: "Payment transactions are managed by: DIGITAL SMART CY LIMITED <br />Address: 6 Koutsoventi street, 4101 Agios Athanasios, Limassol, Cyprus<br />Company business number: HE 410889<br /><br />Digital Smart LLC.<br />Registration number: L22205<br />Address: Lighthouse Trust Nevis Ltd, Suite 1, A.L. Evelyn Ltd Building, Main Street, Charlestown, Nevis",
        linkAml: "AML Legal",
        linkFees: "General Fees",
        linkOrders: "Order Execution",
        linkPayments: "Payment Policies",
        linkPrivacy: "Privacy",
        linkTerms: "Terms & Conditions",
        linkCookies: "Cookies",
        linkDemo: "Demo Accounts",
        linkRisk: "Risk Disclosure",
        linkWithdrawal: "Withdrawal Policy",
        riskWarningText: "The financial products provided by the company carry a high level of risk and can result in the loss of all your funds. You should never invest money that you cannot afford to lose.",
        cookiesText: "We use cookies to understand how you use our site and to improve your experience. By continuing to use our site, you agree to their use.",
        moreInfo: "More Information",
        cookiesAccept: "Accept"
      },
      accessibility: {
        selectLanguage: "Select language",
        previous: "Previous",
        next: "Next",
        appStore: "Download on App Store",
        googlePlay: "Get it on Google Play"
      }
    },
    "pt-BR": {
      meta: {
        title: "ZAIRON — Uma corretora, infinitos caminhos para investir.",
        description: "Negocie nos mercados globais por meio de uma plataforma segura e intuitiva feita para decisões mais inteligentes."
      },
      nav: {
        home: "Home",
        advantages: "Vantagens",
        markets: "Ativos",
        platform: "Aplicativos",
        resources: "Recursos",
        payments: "Depósitos",
        bonuses: "Bônus",
        steps: "Etapas",
        faq: "FAQ",
        signin: "Entrar",
        openAccount: "Abra sua conta"
      },
      hero: {
        badge: "TECNOLOGIA FINANCEIRA AVANÇADA",
        headline: "Uma corretora, infinitos caminhos para investir",
        subheadline: "Negocie commodities, ETFs e ações na interface profissional mais confortável e rápida do mercado.",
        ctaPrimary: "Negocie na conta demo",
        ctaSecondary: "Negocie ao vivo",
        trustLicensed: "Licenciado e Seguro",
        trustMinDeposit: "Depósito Min. $10",
        trustFastWithdrawal: "Retiradas Rápidas",
        terminalTitle: "Terminal ZAIRON",
        sslMeta: "Conexão Segura SSL",
        chartTitle: "EUR / USD (Tempo Real)",
        demoBalanceLabel: "Saldo Conta Demo",
        rechargeable: "Recarregável",
        maxReturnLabel: "Retorno Máximo",
        upTo95: "Até 95%",
        perTrade: "Por negociação"
      },
      benefits: {
        badge: "VANTAGENS OPERACIONAIS",
        headline: "Desfrute de conforto em todas as negociações",
        supportTitle: "Apoio atencioso",
        supportDesc: "Nós estamos aqui para ajudar você 24 horas por dia, todos os dias.",
        withdrawalsTitle: "Retiradas rápidas",
        withdrawalsDesc: "Retirada para seu cartão ou carteira eletrônica em poucos minutos.",
        trading247Title: "Negociação 24/7",
        trading247Desc: "Os principais ativos estão disponíveis para negociação sem interrupções.",
        assets300Title: "Mais de 300 ativos",
        assets300Desc: "Uma plataforma diversificada para ampliar suas possibilidades."
      },
      assets: {
        badge: "MERCADOS EM TEMPO REAL",
        headline: "Ativos em destaque agora",
        subheadline: "Acompanhe preços, tendências e variações do mercado em tempo real.",
        btnTrade: "Negociar",
        live: "AO VIVO",
        last24h: "nas últimas 24h",
        gold: "Ouro",
        subForex: "Par Forex",
        subCommodity: "Commodity",
        subUs100: "Índice US100",
        subStock: "Ação",
        subSpx: "Índice SPX"
      },
      platform: {
        badge: "MOBILIDADE TOTAL",
        headline: "Negocie a qualquer hora, em qualquer dispositivo",
        description: "Instale nossos aplicativos dedicados ou acesse nossa versão web sem download.",
        downloadMac: "Baixar para Mac",
        openWeb: "Abrir na Web",
        downloadAppStoreLabel: "Download na",
        installGooglePlayLabel: "Instalar no"
      },
      resources: {
        badge: "PLATAFORMA COMPLETA",
        headline: "Tudo o que você precisa para operar",
        description: "Recursos integrados para acompanhar, analisar e acessar diferentes mercados.",
        slide1Badge: "MERCADO CONECTADO",
        slide1Title: "Cotações em tempo real",
        slide1Desc: "Sempre em sincronia direta com o mercado financeiro global. Acompanhe as movimentações dos principais ativos sem atrasos.",
        slide1Footer: "Atualizado agora",
        colAsset: "ATIVO",
        colPrice: "PREÇO",
        colChange: "VARIAÇÃO",
        colTrend: "TENDÊNCIA",
        colVolume: "VOLUME",
        slide2Badge: "SUPORTE TÉCNICO",
        slide2Title: "Suporte 24/7",
        slide2Desc: "Uma equipe dedicada para oferecer suporte sempre que você precisar.",
        slide2Footer: "Online agora — Tempo médio de resposta: < 1 min",
        slide2HeaderWrap: "Equipe disponível",
        slide2ResponseTime: "Tempo médio de resposta: < 1 min",
        slide2UserChat: "Preciso de ajuda para validar minha conta. Como faço?",
        slide2AgentChat: "Olá! Você pode enviar seu documento de identificação diretamente na aba de Perfil do painel. O processo leva menos de 5 minutos.",
        slide2HelpCenter: "Central de ajuda:",
        slide2HelpLink1: "Como fazer depósito?",
        slide2HelpLink2: "Quais são as taxas de saque?",
        slide2SpeakBtn: "Falar com suporte",
        slide2Disponibility: "Disponível por chat e e-mail",
        slide3Badge: "COBERTURA GLOBAL",
        slide3Title: "Mercados e ativos",
        slide3Desc: "Acesse ações, moedas, commodities e pares de Forex em uma única plataforma.",
        slide3Footer: "Diversos mercados em uma única plataforma",
        slide3TabForex: "Forex",
        slide3TabStocks: "Ações",
        slide3TabCrypto: "Cripto",
        slide3TabCommodities: "Commodities",
        slide4Badge: "ANÁLISE AVANÇADA",
        slide4Title: "Indicadores integrados",
        slide4Desc: "Utilize ferramentas avançadas para analisar tendências, movimentações e oportunidades de mercado.",
        slide4Footer: "100+ Indicadores e ferramentas de desenho",
        legendVol: "Volume: 12.4K",
        legendBands: "Bandas(20, 2): 68.120 / 67.840",
        slide5Badge: "MACROECONOMIA",
        slide5Title: "Notícias e calendário",
        slide5Desc: "Acompanhe eventos relevantes e informações que podem influenciar o mercado.",
        slide5Footer: "Atualizações constantes",
        colCalendar: "Calendário Econômico",
        colNews: "Notícias Recentes",
        evtIpc: "IPC (Inflação Mensal)",
        evtPrev: "Prev:",
        evtPrior: "Ant:",
        evtEcb: "Taxas BCE",
        evtBailey: "Bailey Discurso",
        impactHigh: "Alto",
        impactMedium: "Médio",
        catMarkets: "Mercados",
        time12m: "12 min atrás",
        newsHeadline1: "Fed sinaliza estabilização das taxas de juros para o próximo trimestre",
        relHigh: "Alta Relevância",
        catCommodities: "Commodities",
        time45m: "45 min atrás",
        newsHeadline2: "Preço do petróleo Brent registra alta após anúncios do cartel",
        relMedium: "Relevância Média",
        keepScrolling: "Continue rolando"
      },
      bonuses: {
        badge: "IMPULSO DE INVESTIMENTO",
        headline: "Oferecemos bônus para mantê-lo aquecido",
        card1Title: "Negociações sem risco",
        card1Desc: "Proteja suas transações iniciais com cupons de segurança.",
        card2Title: "Bônus por depósito",
        card2Desc: "Obtenha créditos adicionais em seus novos depósitos.",
        card3Title: "Reembolso ativo",
        card3Desc: "Receba de volta uma parte do capital negociado semanalmente.",
        card4Title: "Bônus de até 200%",
        card4Desc: "Quanto maior o depósito, maior o impulso concedido.",
        ctaTitle: "Comece com um impulso financeiro",
        ctaButton: "Abra sua conta e receba",
        ctaNote: "Inscreva-se agora para garantir bônus exclusivos no primeiro aporte."
      },
      steps: {
        badge: "COMECE EM POUCOS PASSOS",
        headline: "Entre com facilidade. São apenas 3 etapas.",
        description: "Crie sua conta, configure sua segurança e comece a explorar a plataforma.",
        step1Title: "Registre sua conta",
        step1Desc: "Faça seu cadastro gratuitamente em menos de um minuto.",
        step1Micro: "Cadastro simples e rápido",
        step2Title: "Proteja sua conta",
        step2Desc: "Configure seus métodos de verificação e adicione uma camada extra de segurança.",
        step2Micro: "Verificação segura",
        step3Title: "Deposite e negocie",
        step3Desc: "Faça seu primeiro depósito e acesse os mercados disponíveis na plataforma.",
        step3Micro: "Diversos ativos disponíveis"
      },
      faq: {
        title: "Perguntas Frequentes",
        q1: "Qual é o depósito mínimo?",
        a1: "O depósito mínimo na ZAIRON começa em $ 10, e o investimento mínimo por negociação é de apenas $ 1.",
        q2: "Posso testar a plataforma sem fazer um depósito?",
        a2: "Claro! Use uma conta de demonstração gratuita para se familiarizar com nossa plataforma. A conta de demonstração vem com 10.000 dólares virtuais para praticar sem riscos.",
        q3: "Vocês cobram comissões sobre depósitos ou retiradas?",
        a3: "A ZAIRON não cobra nenhuma taxa por depósitos. Quando se trata de retiradas, você ganha uma retirada gratuita por mês. Quaisquer retiradas adicionais incorrerão em uma taxa institucional.",
        q4: "Quanto tempo leva uma retirada?",
        a4: "Processamos retiradas em até 5 dias úteis. Após a aprovação, a velocidade da sua retirada depende do método de pagamento escolhido, variando de instantâneo a até 5 dias úteis.",
        q5: "Vocês têm um aplicativo para dispositivos móveis?",
        a5: "Sim, você pode baixar o aplicativo Android em nosso site ou na Google Play. Como alternativa, você pode usar o Aplicativo da Web Progressivo (PWA), que funciona nativamente em seu dispositivo móvel.",
        q6: "Vocês oferecem suporte em idiomas locais?",
        a6: "Sim, oferecemos suporte 24 horas por dia, 7 dias por semana, em português e em diversos outros idiomas locais. Você pode perguntar e receber respostas em sua língua materna."
      },
      form: {
        headline: "Pronto para negociar?",
        subheadline: "Cadastre-se hoje e tenha acesso instantâneo ao terminal de negociações mais rápido e seguro do mercado.",
        trust1: "Acesso Grátis à Conta Demo",
        trust2: "Conexão Segura SSL",
        trust3: "Proteção de Fundos Regulada",
        formTitle: "Sinta-se em casa",
        formSubtitle: "Cadastre-se agora — custa apenas $ 10 para começar",
        country: "País de residência",
        countryPlaceholder: "Pesquisar País",
        email: "Endereço de e-mail",
        emailPlaceholder: "nome@exemplo.com",
        password: "Senha",
        passwordPlaceholder: "Mínimo 6 caracteres",
        termsHtml: 'Eu concordo com os <a href="#" target="_blank">Termos e Condições</a> e com a <a href="#" target="_blank">Política de Privacidade</a>',
        submitBtn: "Criar uma conta",
        orDivider: "Ou entre com",
        googleBtn: "Continuar com o Google",
        valRequired: "Por favor escolha um país",
        valEmailInvalid: "Formato incorreto",
        valPassLength: "Mínimo 6 caracteres",
        valTermsRequired: "Você deve aceitar os termos",
        submitting: "Criando sua conta...",
        success: "Sua conta foi criada com sucesso!",
        errorGeneric: "Algo deu errado. Por favor, tente novamente."
      },
      footer: {
        description: "Plataforma de negociação financeira de última geração para traders globais.",
        companyLegal: "As transações de pagamento são gerenciadas por: DIGITAL SMART CY LIMITED <br />Endereço: 6 Koutsoventi street, 4101 Agios Athanasios, Limassol, Chipre<br />Número comercial da empresa: HE 410889<br /><br />Digital Smart LLC.<br />Número de registro: L22205<br />Endereço: Lighthouse Trust Nevis Ltd, Suite 1, A.L. Evelyn Ltd Building, Main Street, Charlestown, Nevis",
        linkAml: "AML Jurídico",
        linkFees: "Taxas Gerais",
        linkOrders: "Execução de Pedidos",
        linkPayments: "Políticas de pagamento",
        linkPrivacy: "Privacidade",
        linkTerms: "Termos e Condições",
        linkCookies: "Cookies",
        linkDemo: "Contas de demonstração",
        linkRisk: "Divulgação de Risco",
        linkWithdrawal: "Política de Retirada",
        riskWarningText: "Os produtos financeiros fornecidos pela empresa apresentam um alto nível de risco e podem resultar na perda de todos os seus fundos. Você nunca deve investir dinheiro que não pode perder.",
        cookiesText: "Usamos cookies para entender como você usa nosso site e para melhorar sua experiência. Ao continuar a usar nosso site, você concorda com seu uso.",
        moreInfo: "Mais Informações",
        cookiesAccept: "Aceitar"
      },
      accessibility: {
        selectLanguage: "Selecionar idioma",
        previous: "Anterior",
        next: "Próximo",
        appStore: "Download na App Store",
        googlePlay: "Instalar no Google Play"
      }
    }
  };

  function getNestedTranslation(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
  }

  function formatCurrency(val, locale) {
    const num = typeof val === 'number' ? val : parseFloat(val);
    if (isNaN(num)) return val;
    if (locale === 'pt-BR') {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD', minimumFractionDigits: num % 1 === 0 ? 0 : 2 }).format(num);
    } else {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: num % 1 === 0 ? 0 : 2 }).format(num);
    }
  }

  let currentLocale = 'en-US';

  function setLanguage(locale, updateUrl = true) {
    if (!translations[locale]) locale = 'en-US';
    currentLocale = locale;

    document.documentElement.lang = locale === 'pt-BR' ? 'pt-BR' : 'en';

    try {
      localStorage.setItem('zairon-locale', locale);
    } catch (e) {}

    const dict = translations[locale];
    if (dict.meta) {
      document.title = dict.meta.title;
      const metaDesc = document.getElementById('meta-desc');
      if (metaDesc) metaDesc.setAttribute('content', dict.meta.description);
      const ogTitle = document.getElementById('og-title');
      if (ogTitle) ogTitle.setAttribute('content', dict.meta.title);
      const ogDesc = document.getElementById('og-desc');
      if (ogDesc) ogDesc.setAttribute('content', dict.meta.description);
      const twTitle = document.getElementById('tw-title');
      if (twTitle) twTitle.setAttribute('content', dict.meta.title);
      const twDesc = document.getElementById('tw-desc');
      if (twDesc) twDesc.setAttribute('content', dict.meta.description);
    }

    const canonicalLink = document.getElementById('canonical-link');
    const targetPath = locale === 'pt-BR' ? '/pt-br' : '/';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://zaironbroker.com' + targetPath);
    }

    if (updateUrl && window.history && window.history.pushState) {
      const currentPath = window.location.pathname;
      if ((locale === 'pt-BR' && !currentPath.includes('/pt-br')) || (locale === 'en-US' && currentPath.includes('/pt-br'))) {
        window.history.pushState({ locale }, '', targetPath + window.location.search + window.location.hash);
      }
    }

        document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedTranslation(dict, key);
      if (value !== undefined) {
        el.textContent = value;
      }
    });
  }

  // Helper to animate preloader progress bar from 0% to 100%
  function animatePreloaderProgress(callback) {
    const bar = document.getElementById('preloader-bar');
    const pct = document.getElementById('preloader-percentage');
    if (!bar) {
      if (callback) callback();
      return;
    }

    let progress = 0;
    bar.style.width = '0%';
    if (pct) pct.textContent = '0%';

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 18) + 12;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        bar.style.width = '100%';
        if (pct) pct.textContent = '100%';
        setTimeout(() => {
          if (callback) callback();
        }, 120);
      } else {
        bar.style.width = `${progress}%`;
        if (pct) pct.textContent = `${progress}%`;
      }
    }, 35);
  }

  // ==========================================
  // FLUID PRELOADER LANGUAGE TRANSITION
  // ==========================================
  let isTransitioningLanguage = false;

  function switchLanguageWithPreloader(targetLocale) {
    if (isTransitioningLanguage || targetLocale === currentLocale) return;
    isTransitioningLanguage = true;

    const preloader = document.getElementById('preloader');
    const langDropdown = document.getElementById('lang-dropdown');
    const langBtn = document.getElementById('lang-switcher-btn');

    if (langDropdown) langDropdown.classList.remove('open');
    if (langBtn) langBtn.setAttribute('aria-expanded', 'false');

    if (preloader) {
      preloader.style.display = 'flex';
      preloader.classList.remove('fade-out');
      preloader.classList.add('transition-active');

      animatePreloaderProgress(() => {
        setLanguage(targetLocale, true);

        document.querySelectorAll('.lang-option').forEach(opt => {
          const isSelected = opt.getAttribute('data-lang') === targetLocale;
          opt.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        });

        const currentLabel = document.getElementById('lang-current-label');
        if (currentLabel) {
          currentLabel.textContent = targetLocale === 'pt-BR' ? 'PT-BR' : 'EN';
        }

        setTimeout(() => {
          preloader.classList.add('fade-out');
          preloader.classList.remove('transition-active');

          setTimeout(() => {
            preloader.style.display = 'none';
            isTransitioningLanguage = false;
          }, 300);
        }, 150);
      });
    } else {
      setLanguage(targetLocale, true);
      isTransitioningLanguage = false;
    }
  }

  // Setup Language Dropdown Toggle and Option Click Listeners
  const langSwitcherBtn = document.getElementById('lang-switcher-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const langOptions = document.querySelectorAll('.lang-option');

  if (langSwitcherBtn && langDropdown) {
    langSwitcherBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.contains('open');
      if (isOpen) {
        langDropdown.classList.remove('open');
        langSwitcherBtn.setAttribute('aria-expanded', 'false');
      } else {
        langDropdown.classList.add('open');
        langSwitcherBtn.setAttribute('aria-expanded', 'true');
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.wrap-lang-switch')) {
        langDropdown.classList.remove('open');
        langSwitcherBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langDropdown.classList.contains('open')) {
        langDropdown.classList.remove('open');
        langSwitcherBtn.setAttribute('aria-expanded', 'false');
        langSwitcherBtn.focus();
      }
    });
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      switchLanguageWithPreloader(lang);
    });
  });

  // Load initial saved language preference
  try {
    const savedLocale = localStorage.getItem('zairon-locale') || 'en-US';
    setLanguage(savedLocale, false);
    const currentLabel = document.getElementById('lang-current-label');
    if (currentLabel) {
      currentLabel.textContent = savedLocale === 'pt-BR' ? 'PT-BR' : 'EN';
    }
  } catch (e) {}

  // ==========================================
  // STICKY HORIZONTAL SCROLL ENGINE
  // ==========================================
  function initHorizontalScroll() {
    const section = document.querySelector('.horizontal-section');
    const sticky = document.querySelector('.horizontal-sticky');
    const viewport = document.querySelector('.horizontal-viewport');
    const track = document.querySelector('.horizontal-track');
    const cards = document.querySelectorAll('.feature-card');
    const fill = document.getElementById('progress-bar-fill');
    const num = document.getElementById('progress-number');
    const label = document.getElementById('progress-label');
    const btnPrev = document.getElementById('slide-prev-btn');
    const btnNext = document.getElementById('slide-next-btn');

    if (!section || !sticky || !viewport || !track || cards.length === 0) return;

    let isDesktop = window.innerWidth >= 768;
    let lastIndex = -1;

    const getHeaderHeight = () => {
      const header = document.querySelector('header');
      return header ? header.offsetHeight : 72;
    };

    const calculateBounds = () => {
      isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        const viewportWidth = viewport.clientWidth;
        const trackWidth = track.scrollWidth;
        const maxTranslate = Math.max(0, trackWidth - viewportWidth);
        
        // Pacing: ensure enough vertical scroll distance so the user smoothly scrolls through all 5 cards
        // Each card gets 0.90 of viewport height of vertical scroll space
        const scrollTravel = Math.max(cards.length * window.innerHeight * 0.90, maxTranslate * 1.15);
        const stickyHeight = sticky.offsetHeight;

        section.style.height = `${stickyHeight + scrollTravel}px`;
        section.dataset.maxTranslate = maxTranslate;
        section.dataset.scrollTravel = scrollTravel;
      } else {
        section.style.height = 'auto';
        track.style.transform = 'none';
      }
    };

    const updateScrollPosition = () => {
      if (!isDesktop) return;

      const headerHeight = getHeaderHeight();
      const sectionTop = section.offsetTop - headerHeight;
      const scrollY = window.scrollY;
      const scrollTravel = parseFloat(section.dataset.scrollTravel) || 1000;
      const maxTranslate = parseFloat(section.dataset.maxTranslate) || 1000;

      // Calculate progress from 0 (section starts pinning) to 1 (Card 5 completely in view)
      const rawProgress = (scrollY - sectionTop) / scrollTravel;
      const progress = Math.max(0, Math.min(1, rawProgress));

      // Translate track horizontally
      const translateX = -progress * maxTranslate;
      track.style.transform = `translate3d(${translateX}px, 0, 0)`;

      if (fill) fill.style.width = `${progress * 100}%`;

      const slideTitles = [
        'Real-time quotes',
        '24/7 support',
        'Featured markets',
        'Integrated indicators',
        'News and economic calendar'
      ];

      // Clean card index mapping across 5 cards (0 to 4)
      const currentIndex = Math.min(
        cards.length - 1,
        Math.round(progress * (cards.length - 1))
      );

      if (currentIndex !== lastIndex && cards[currentIndex]) {
        lastIndex = currentIndex;
        cards.forEach((card, idx) => card.classList.toggle('active', idx === currentIndex));

        if (num) num.textContent = `0${currentIndex + 1} / 05`;
        if (label) label.textContent = slideTitles[currentIndex] || '';
      }
    };

    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        const scrollTravel = parseFloat(section.dataset.scrollTravel) || 1000;
        const headerHeight = getHeaderHeight();
        const currentIdx = lastIndex < 0 ? 0 : lastIndex;
        const nextIdx = Math.min(cards.length - 1, currentIdx + 1);
        const targetProgress = nextIdx / (cards.length - 1);
        const targetScrollY = (section.offsetTop - headerHeight) + (targetProgress * scrollTravel);
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        const scrollTravel = parseFloat(section.dataset.scrollTravel) || 1000;
        const headerHeight = getHeaderHeight();
        const currentIdx = lastIndex < 0 ? 0 : lastIndex;
        const prevIdx = Math.max(0, currentIdx - 1);
        const targetProgress = prevIdx / (cards.length - 1);
        const targetScrollY = (section.offsetTop - headerHeight) + (targetProgress * scrollTravel);
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
      });
    }

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    window.addEventListener('resize', calculateBounds);
    if (document.fonts) {
      document.fonts.ready.then(calculateBounds);
    }
    calculateBounds();
    updateScrollPosition();
  }

  initHorizontalScroll();

  // ==========================================
  // MOBILE MENU PANEL & TOGGLE CONTROLS
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');

  function closeMobileMenu() {
    if (mobileNavPanel) mobileNavPanel.classList.remove('open');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  function openMobileMenu() {
    if (mobileNavPanel) mobileNavPanel.classList.add('open');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.add('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
  }

  if (mobileMenuBtn && mobileNavPanel) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileNavPanel.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileNavPanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-placement')) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNavPanel.classList.contains('open')) {
        closeMobileMenu();
        mobileMenuBtn.focus();
      }
    });
  }

  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguageWithPreloader(lang);
      closeMobileMenu();
    });
  });


// ==========================================
  // FEATURED ASSETS INFINITE LOOP CAROUSEL ENGINE
  // ==========================================
  function initAssetsCarousel() {
    const wrapper = document.querySelector('.assets-carousel-wrapper');
    const track = document.getElementById('assets-carousel-track');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');

    if (!wrapper || !track) return;

    // Clone slides once to create seamless infinite loop buffer
    if (!track.dataset.cloned) {
      const slides = Array.from(track.children);
      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
      });
      track.dataset.cloned = "true";
    }

    const getScrollStep = () => {
      const slide = track.querySelector('.asset-slide');
      if (!slide) return 300;
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.gap) || 24;
      return slide.offsetWidth + gap;
    };

    let isAdjusting = false;

    const handleInfiniteScroll = () => {
      if (isAdjusting) return;
      const step = getScrollStep();
      const halfCount = Math.floor(track.children.length / 2);
      const loopWidth = halfCount * step;

      if (wrapper.scrollLeft >= loopWidth) {
        isAdjusting = true;
        wrapper.style.scrollBehavior = 'auto';
        wrapper.scrollLeft -= loopWidth;
        wrapper.style.scrollBehavior = 'smooth';
        setTimeout(() => { isAdjusting = false; }, 50);
      } else if (wrapper.scrollLeft <= 5) {
        isAdjusting = true;
        wrapper.style.scrollBehavior = 'auto';
        wrapper.scrollLeft += loopWidth;
        wrapper.style.scrollBehavior = 'smooth';
        setTimeout(() => { isAdjusting = false; }, 50);
      }
    };

    wrapper.addEventListener('scroll', handleInfiniteScroll, { passive: true });

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const step = getScrollStep();
        wrapper.scrollBy({ left: step, behavior: 'smooth' });
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const step = getScrollStep();
        wrapper.scrollBy({ left: -step, behavior: 'smooth' });
      });
    }
  }

  initAssetsCarousel();

});
