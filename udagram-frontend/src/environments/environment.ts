// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  // apiHost: 'http://localhost:8080/api/v0'
  apiHost: 'http://afbbf1fd328da4068930d21a83a3506f-886122867.us-east-1.elb.amazonaws.com:8080/api/v0'
  //apiHost: 'a242d166f038e44c49708013b05b06c5-1966912717.us-east-1.elb.amazonaws.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
