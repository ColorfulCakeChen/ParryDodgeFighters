// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
  // Code to run on the loading screen.
  // Note layouts, objects etc. are not yet available.

  const libVerion = "d0a5730d95a858b086190c258d6a78899c183eb4";
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

  // Note: input_shape will be [ 72, 142, 4 ].
  const explicit_input_height = 72;
  const explicit_input_width = 128;
  const explicit_input_channelCount = 4;
  const nNeuralWorker_ImplicitInputModeId = NeuralWorker.ImplicitInputMode.Singleton
    .Ids.IMPLICIT_INPUT__FILL_ALIGNMENT_MARK__FILL_PREVIOUS_OUTPUT; // (5)

  const vocabularyChannelCount = 4;
  const vocabularyCountPerInputChannel = 256;
  const blockCountTotalRequested = 39;
  const output_channelCount = 128;

  globalThis.gNeuralOrchestra = NeuralOrchestra.Construct3.Pool.get_or_create_by();
  await gNeuralOrchestra.init_for_Construct3_runOnStartup_async(
    downloader_spreadsheetId, bLogFetcherEventToConsole,
    sender_clientId,
    explicit_input_height, explicit_input_width, explicit_input_channelCount,
    nNeuralWorker_ImplicitInputModeId,
    vocabularyChannelCount, vocabularyCountPerInputChannel,
    blockCountTotalRequested,
    output_channelCount
  );

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
