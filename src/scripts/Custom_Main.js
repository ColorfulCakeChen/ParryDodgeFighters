
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
  // Code to run on the loading screen.
  // Note layouts, objects etc. are not yet available.
/*
  const libVerion = "1ff6eeec78221c31f5ab6d8bd13266b8787ff802";
  const libURL = `https://cdn.jsdelivr.net/gh/colorfulcakechen/query-submit-canvas@${libVerion}/CNN/NeuralDEvolution/NeuralOrchestra.js`;

  globalThis.NeuralOrchestra = await import( libURL );
  globalThis.gNeuralOrchestra = new NeuralOrchestra.Construct3();

  const spreadsheetId = "18YyEoy-OfSkODfw8wqBRApSrRnBTZpjRpRiwIKy8a0M";

  const measurement_id = "G-8VC62N7VGB";
  const api_secret = "sRcUgl6XSfOjX4qEES3Ttg";
  const client_id = Date.now();

  const input_height = 72;
  const input_width = 128;

  const vocabularyChannelCount = 8;
  const blockCountTotalRequested = 100;
  const output_channelCount = 12;

  await gNeuralOrchestra.init(
    spreadsheetId, null,
    measurement_id, api_secret, client_id,
    input_height, input_width,
    vocabularyChannelCount, blockCountTotalRequested, output_channelCount
  );
*/
  runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
  // Code to run just before 'On start of layout' on
  // the first layout. Loading has finished and initial
  // instances are created and available to use here.
  runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
  // Code to run every tick
/*
  gNeuralOrchestra.tick( runtime );
*/
}
