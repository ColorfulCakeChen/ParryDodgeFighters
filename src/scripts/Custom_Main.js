
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
  // Code to run on the loading screen.
  // Note layouts, objects etc. are not yet available.

  const libVerion = "c1c764a05643d7a273982428b15e77cbd46068e6";
  const libProject = "colorfulcakechen/query-submit-canvas";
  const libURLRoot = `https://cdn.jsdelivr.net/gh/${libProject}@${libVerion}`;
  const libURLRootCNN = `${libURLRoot}/CNN`;
  const libURLNeuralDEvolution = `${libURLRootCNN}/NeuralDEvolution`;
  const libURLNeuralWorker = `${libURLNeuralDEvolution}/NeuralWorker`;
  const libURLNeuralOrchestra = `${libURLNeuralDEvolution}/NeuralOrchestra`;

  globalThis.NeuralWorker = await import( libURLNeuralWorker );
  globalThis.NeuralOrchestra = await import( libURLNeuralOrchestra );
  globalThis.gNeuralOrchestra = NeuralOrchestra.Construct3.Pool.get_or_create_by();

  const downloader_spreadsheetId = "18YyEoy-OfSkODfw8wqBRApSrRnBTZpjRpRiwIKy8a0M";
  
  const bLogFetcherEventToConsole = false;

  const sender_clientId = Date.now();

  const explicit_input_height = 72;
  const explicit_input_width = 128;
  const explicit_input_channelCount = 4;
  const nNeuralWorker_ImplicitInputModeId = NeuralWorker.ImplicitInputMode.Singletoon
    .Ids.IMPLICIT_INPUT__FILL_ALIGNMENT_MARK__FILL_PREVIOUS_OUTPUT; // (5)

  const vocabularyChannelCount = 4;
  const vocabularyCountPerInputChannel = 256;
  const blockCountTotalRequested = 39;
  const output_channelCount = 64;

  const b_return_versus_load_asyncGenerator_instead_of_asyncPromise = false;

  await gNeuralOrchestra.init(
    downloader_spreadsheetId, null, bLogFetcherEventToConsole,
    sender_clientId,
	
    explicit_input_height, explicit_input_width, explicit_input_channelCount,
    nNeuralWorker_ImplicitInputModeId,
    vocabularyChannelCount, vocabularyCountPerInputChannel,
    blockCountTotalRequested,
    output_channelCount,

    b_return_versus_load_asyncGenerator_instead_of_asyncPromise
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
