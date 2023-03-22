console.warn(
  "%cNote!",
  "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "If you want to add these games to your site, please reach out at my email: echo-the-coder@tuta.io\nPlease do not just add them without asking me first! Thank you!"
);

function script(text) {
  console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

// ====================================
// SCRIPT INJECTION
// ====================================
const gogascript27 = document.createElement("script");
gogascript27.setAttribute("async", "");
gogascript27.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-98DP5VKS42");
const inlinegogascript843 = document.createElement("script");
inlinegogascript843.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-98DP5VKS42');`;
document.head.append(gogascript27, inlinegogascript843);
script("Injected script 1/4 (Google Tag Manager)");

const arcbroker23 = document.createElement("script");
arcbroker23.setAttribute("async", "");
arcbroker23.setAttribute("src", "https://arc.io/widget.min.js#eRPHFgiC");
document.head.append(arcbroker23);
script("Injected script 2/4 (Arc widget stuff)");

const adblockhandle44 = document.createElement("script");
adblockhandle44.setAttribute("src", "https://fundingchoicesmessages.google.com/i/pub-5756835229788588?ers=1");
adblockhandle44.setAttribute("nonce", "yibq-w_TR5NOCRWsU-VL0Q");
adblockhandle44.setAttribute("async", "");
document.head.append(adblockhandle44);
script("Injected script 3/4 (Ad stuff)");

const adscipterz92 = document.createElement("script");
adscipterz92.setAttribute("async", "");
adscipterz92.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756835229788588");
adscipterz92.setAttribute("crossorigin", "anonymous");
document.head.append(adscipterz92);
script("Injected script 4/4 (Ad stuff)");
