Package.describe({
  name: "jackyqiu:meteor-jquery-countdown",
  summary: "Thank kbwood. This plugin sets a div or span to show a countdown to a given time.",
  version: "2.0.4",
  git: "https://github.com/qunxyz/meteor-jquery-countdown.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use('jquery', 'client');

  api.use("mizzao:build-fetcher@0.2.0", 'client');

  api.add_files('jquery-countdown.fetch.json', 'client');
});
