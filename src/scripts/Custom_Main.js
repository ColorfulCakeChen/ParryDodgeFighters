// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
  // Code to run on the loading screen.
  // Note layouts, objects etc. are not yet available.

  const libVerion = "f8ccae68a2502e1a4c06a857f436abe3c9e1a307";
  const libProject = "colorfulcakechen/query-submit-canvas";
  const libURLRoot = `https://cdn.jsdelivr.net/gh/${libProject}@${libVerion}`;
  const libURLRootCNN = `${libURLRoot}/CNN`;
  const libURLNeuralDEvolution = `${libURLRootCNN}/NeuralDEvolution`;
  const libURLNeuralWorker = `${libURLNeuralDEvolution}/NeuralWorker.js`;
  const libURLNeuralOrchestra = `${libURLNeuralDEvolution}/NeuralOrchestra.js`;

  globalThis.NeuralWorker = await import( libURLNeuralWorker );
  globalThis.NeuralOrchestra = await import( libURLNeuralOrchestra );

  const downloader_spreadsheetId = "18YyEoy-OfSkODfw8wqBRApSrRnBTZpjRpRiwIKy8a0M";

  const bLogFetcherEventToConsole = false;

  const sender_clientId = Date.now();

  // Note: implicit_input_width will be 14. input_shape will be [ 72, 128, 4 ].
  const explicit_input_height = 72;
  const explicit_input_width = 114;
  const explicit_input_channelCount = 4;
  const nNeuralWorker_ImplicitInputModeId = NeuralWorker.ImplicitInputMode.Singleton
    .Ids.IMPLICIT_INPUT__FILL_ALIGNMENT_MARK__FILL_PREVIOUS_OUTPUT; // (5)

  const vocabularyChannelCount = 4;
  const vocabularyCountPerInputChannel = 256;
  const blockCountTotalRequested = 39;
  const output_channelCount = 128;

  globalThis.gNeuralOrchestra = NeuralOrchestra.Construct3.Pool.get_or_create_by();
  await gNeuralOrchestra.init_for_Construct3_runOnStartup_async(
    runtime,
    downloader_spreadsheetId, bLogFetcherEventToConsole,
    sender_clientId,
    explicit_input_height, explicit_input_width, explicit_input_channelCount,
    nNeuralWorker_ImplicitInputModeId,
    vocabularyChannelCount, vocabularyCountPerInputChannel,
    blockCountTotalRequested,
    output_channelCount
  );

  runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
  runtime.addEventListener("afterprojectstart", () => OnAfterProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
  // Code to run just before 'On start of layout' on
  // the first layout. Loading has finished and initial
  // instances are created and available to use here.
}

async function OnAfterProjectStart(runtime)
{
  // Note: ConfigJSON is initilized in "On start of layout".
  gNeuralOrchestra.ConfigJSON_set( runtime.objects.ConfigJSON.getFirstInstance() );

  runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
//!!! (2023/05/27 Temp Test)
//   runtime.objects.DrawingCanvas.getFirstInstance()
//     .getImagePixelData().then( imageData => {
//     imageData.height;
//     imageData.width;
//   });

  // Code to run every tick
  gNeuralOrchestra.tick( runtime );
}
