import 'github:twbs/bootstrap@3.3.5';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = true;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 1005;
      config.settings.enableEscClose = true;
    });

  aurelia.start().then(a => a.setRoot('src/app'));
}
