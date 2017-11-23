const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.fn_TestJS_OnFirebaseCDN_Dynamic = functions.https.onRequest((req, res) => {
  const nowDate = new Date();
  const nowDateString = nowDate.toString();
  const iCacheControlMaxAge = 120;
  res.set("Cache-Control", `public, max-age={$iCacheControlMaxAge}`); //, s-maxage=60');
  res.status(200).send(`var g_TestJS_OnFirebaseCDN_Dynamic = "${nowDateString}";
`);
});
