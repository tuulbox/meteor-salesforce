Package.describe({
  name: 'tuul:salesforce',
  version: '1.4.4',
  summary: 'Salesforce for Meteor (via JSforce)',
  git: 'https://github.com/tuulbox/meteor-salesforce',
  documentation: 'README.md'
});

Npm.depends({'jsforce': '1.4.1'});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.addFiles('lib/jsforce.js',['client']);
  api.addFiles('server.js',['server']);

  api.export('Salesforce', ['client', 'server']);
});
