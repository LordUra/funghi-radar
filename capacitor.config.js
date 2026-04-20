/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'it.funghi.radar',
  appName: 'Funghi Radar',
  webDir: 'www',
  android: {
    allowMixedContent: false,
    webContentsDebuggingEnabled: false
  }
};

module.exports = config;
