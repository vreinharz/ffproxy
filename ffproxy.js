let proxySettings = {
  proxyType: "manual",
  socks: "localhost:8080",
  socksVersion: 5
};

let noProxySettings = {
  proxyType: "none"
};



let proxy = false;
browser.browserAction.onClicked.addListener(tab => {
  console.log(proxy);
  console.log('logggggin');
  if (!proxy) {
    proxy = !proxy;
    browser.browserAction.setIcon({path:'icons/ffproxy-red-96.png'});
    browser.proxy.settings.set({ value: proxySettings });
  }
  else {
    proxy = !proxy;
    browser.browserAction.setIcon({path:'icons/ffproxy-96.png'});
    browser.proxy.settings.set({ value: noProxySettings });
  }
});

