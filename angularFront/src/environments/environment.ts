// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  //login: 'http://localhost:8000/api/v1/login',
  login: '/bitchest/v1/login',


  //MicrosoftSql
  opportunity: '/api/sql/opportunity',



  //Oracle

  affaire: '/api/oracle/affaire'
};
