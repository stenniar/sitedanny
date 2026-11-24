/*
 * Danny Araújo · consentimento de cookies (LGPD) e medição
 *
 * CONFIGURE AQUI quando criar as contas:
 *  - ga4: ID do Google Analytics 4 (G-XXXXXXXXXX)
 *  - metaPixel: ID do Pixel da Meta (só números)
 * O aviso aparece na primeira visita. Medição e marketing só carregam depois do aceite.
 */
window.SITE_ANALYTICS = {
  ga4: '',
  metaPixel: '',
  versaoPolitica: '2026-11-24'
};

(function () {
  var CFG = window.SITE_ANALYTICS, CHAVE = 'danny-consentimento', VALIDADE_DIAS = 365;
  var estado = ler();

  function ler() {
    try {
      var s = JSON.parse(localStorage.getItem(CHAVE) || 'null');
      if (!s || s.versao !== CFG.versaoPolitica) return null;
      if (Date.now() - s.data > VALIDADE_DIAS * 864e5) return null;
      return s;
    } catch (e) { return null; }
  }
  function salvar(analytics, marketing) {
    estado = { analytics: !!analytics, marketing: !!marketing, data: Date.now(), versao: CFG.versaoPolitica };
    try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch (e) {}
    aplicar(); fecharBanner(); fecharPainel();
  }

  var gaCarregado = false, pixelCarregado = false;
  function aplicar() {
    if (!estado) return;
    if (estado.analytics && CFG.ga4 && !gaCarregado) {
      gaCarregado = true;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { dataLayer.push(arguments); };
      gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
      var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(CFG.ga4); document.head.appendChild(s);
      gtag('js', new Date()); gtag('config', CFG.ga4, { anonymize_ip: true });
    }
    if (estado.marketing && CFG.metaPixel && !pixelCarregado) {
      pixelCarregado = true;
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', CFG.metaPixel); fbq('track', 'PageView');
    }
  }

  var css = '.ck-banner{position:fixed;left:max(16px,env(safe-area-inset-left,0px));right:max(16px,env(safe-area-inset-right,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:160;max-width:640px;margin:0 auto;padding:20px 22px;border-radius:22px;background:rgba(12,31,39,.96);color:#EDF1F2;border:1px solid rgba(176,138,87,.45);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 24px 60px rgba(0,0,0,.35);font:400 15px/1.55 "Plus Jakarta Sans","Segoe UI",Arial,sans-serif}'
    + '.ck-banner b{display:block;font:500 19px "Playfair Display",Georgia,serif;margin-bottom:4px}.ck-banner p{margin:0;color:rgba(237,241,242,.84)}.ck-banner a{color:#CDAA78}'
    + '.ck-acoes{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.ck-acoes button{min-height:44px;padding:10px 18px;border-radius:999px;font:600 14.5px "Plus Jakarta Sans","Segoe UI",Arial,sans-serif;cursor:pointer;border:1px solid rgba(237,241,242,.3);background:transparent;color:#EDF1F2}'
    + '.ck-acoes .ck-sim{background:#B08A57;border-color:#B08A57;color:#0C1F27}.ck-acoes button:focus-visible,.ck-painel button:focus-visible{outline:2px solid #CDAA78;outline-offset:2px}'
    + '.ck-fundo{position:fixed;inset:0;z-index:161;background:rgba(12,31,39,.55);backdrop-filter:blur(4px)}'
    + '.ck-painel{position:fixed;z-index:162;left:50%;top:50%;transform:translate(-50%,-50%);width:min(560px,calc(100% - 32px));max-height:calc(100% - 32px);overflow:auto;padding:24px;border-radius:24px;background:#F4EFE6;color:#122B34;font:400 15px/1.55 "Plus Jakarta Sans","Segoe UI",Arial,sans-serif;box-shadow:0 30px 80px rgba(0,0,0,.35)}'
    + '.ck-painel h2{font:500 24px "Playfair Display",Georgia,serif;margin:0 0 6px}.ck-painel>p{margin:0 0 14px;color:rgba(18,43,52,.76)}'
    + '.ck-cat{display:grid;grid-template-columns:1fr auto;gap:4px 16px;align-items:center;padding:14px 16px;border-radius:16px;background:#fff;border:1px solid rgba(18,43,52,.14);margin-top:10px}'
    + '.ck-cat b{font-weight:700;font-size:15.5px}.ck-cat small{grid-column:1/-1;color:rgba(18,43,52,.7);font-size:13.5px}'
    + '.ck-sw{position:relative;width:48px;height:28px}.ck-sw input{position:absolute;opacity:0;inset:0;width:100%;height:100%;margin:0;cursor:pointer}.ck-sw span{position:absolute;inset:0;border-radius:999px;background:#C9CFCF;transition:background .2s}.ck-sw span::after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:transform .2s}.ck-sw input:checked+span{background:#122B34}.ck-sw input:checked+span::after{transform:translateX(20px)}.ck-sw input:disabled+span{opacity:.6}.ck-sw input:focus-visible+span{outline:2px solid #B08A57;outline-offset:2px}'
    + '.ck-painel .ck-acoes button{color:#122B34;border-color:rgba(18,43,52,.55)}.ck-painel .ck-acoes .ck-sim{color:#0C1F27}'
    + '@media (max-width:760px){.ck-banner{bottom:calc(84px + env(safe-area-inset-bottom,0px))}}'
    + '@media (prefers-reduced-motion:reduce){.ck-sw span,.ck-sw span::after{transition:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var banner, painel, fundo, quemAbriu;
  var LINK = (document.querySelector('meta[name="site-politica"]') || {}).content || 'politica-de-privacidade/';
  function montaBanner() {
    if (banner) return;
    banner = document.createElement('div'); banner.className = 'ck-banner'; banner.setAttribute('role', 'region'); banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML = '<b>Sua privacidade importa</b><p>Usamos cookies necessários para o site funcionar e, com a sua autorização, cookies de medição e de marketing para entender o uso do site e melhorar a comunicação. Veja a <a href="' + LINK + '#cookies">Política de Privacidade e Cookies</a>.</p>'
      + '<div class="ck-acoes"><button type="button" class="ck-sim" data-ck="todos">Aceitar todos</button><button type="button" data-ck="necessarios">Só os necessários</button><button type="button" data-ck="personalizar">Personalizar</button></div>';
    banner.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ck]'); if (!b) return;
      if (b.dataset.ck === 'todos') salvar(true, true);
      else if (b.dataset.ck === 'necessarios') salvar(false, false);
      else abrirPainel(b);
    });
    document.body.appendChild(banner);
  }
  function fecharBanner() { if (banner) { banner.remove(); banner = null; } }
  function abrirPainel(origem) {
    if (painel) return;
    quemAbriu = origem || document.activeElement;
    fundo = document.createElement('div'); fundo.className = 'ck-fundo';
    painel = document.createElement('div'); painel.className = 'ck-painel'; painel.setAttribute('role', 'dialog'); painel.setAttribute('aria-modal', 'true'); painel.setAttribute('aria-labelledby', 'ck-t');
    var a = estado ? estado.analytics : false, m = estado ? estado.marketing : false;
    painel.innerHTML = '<h2 id="ck-t">Preferências de cookies</h2><p>Escolha o que podemos usar. Você pode mudar a qualquer momento pelo link “Preferências de cookies” no rodapé.</p>'
      + '<div class="ck-cat"><b>Necessários</b><label class="ck-sw"><input type="checkbox" checked disabled aria-label="Cookies necessários, sempre ativos"><span></span></label><small>Guardam a sua escolha de cookies e a origem da visita durante a sessão. Sem eles o site não funciona corretamente.</small></div>'
      + '<div class="ck-cat"><b>Medição</b><label class="ck-sw"><input type="checkbox" id="ck-a"' + (a ? ' checked' : '') + ' aria-label="Cookies de medição (Google Analytics)"><span></span></label><small>Google Analytics: páginas visitadas, uso das ferramentas e cliques, de forma agregada.</small></div>'
      + '<div class="ck-cat"><b>Marketing</b><label class="ck-sw"><input type="checkbox" id="ck-m"' + (m ? ' checked' : '') + ' aria-label="Cookies de marketing (Meta Pixel)"><span></span></label><small>Pixel da Meta (Facebook e Instagram): mede o resultado de anúncios e permite mostrar conteúdo relevante.</small></div>'
      + '<div class="ck-acoes"><button type="button" class="ck-sim" data-ck="salvar">Salvar preferências</button><button type="button" data-ck="todos">Aceitar todos</button><button type="button" data-ck="nenhum">Recusar opcionais</button></div>';
    painel.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ck]'); if (!b) return;
      if (b.dataset.ck === 'salvar') salvar(painel.querySelector('#ck-a').checked, painel.querySelector('#ck-m').checked);
      else if (b.dataset.ck === 'todos') salvar(true, true);
      else salvar(false, false);
    });
    fundo.addEventListener('click', fecharPainel);
    document.body.appendChild(fundo); document.body.appendChild(painel);
    painel.querySelector('#ck-a').focus();
    document.addEventListener('keydown', teclas);
  }
  function teclas(e) {
    if (!painel) return;
    if (e.key === 'Escape') fecharPainel();
    if (e.key === 'Tab') {
      var f = painel.querySelectorAll('input:not([disabled]), button'), pri = f[0], ult = f[f.length - 1];
      if (e.shiftKey && document.activeElement === pri) { e.preventDefault(); ult.focus(); }
      else if (!e.shiftKey && document.activeElement === ult) { e.preventDefault(); pri.focus(); }
    }
  }
  function fecharPainel() {
    if (painel) { painel.remove(); fundo.remove(); painel = null; document.removeEventListener('keydown', teclas); if (quemAbriu && document.contains(quemAbriu)) quemAbriu.focus(); }
  }
  document.addEventListener('click', function (e) { var b = e.target.closest('[data-cookies]'); if (b) { e.preventDefault(); abrirPainel(b); } });
  window.siteCookies = { abrirPreferencias: function () { abrirPainel(); } };

  function iniciar() { aplicar(); if (!estado) montaBanner(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
