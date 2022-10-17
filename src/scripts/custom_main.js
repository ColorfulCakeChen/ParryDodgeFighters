
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
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
	let VersusInfo_instance = runtime.objects.VersusInfo.getFirstInstance();
// 	let VersusInfo_Alignment0_instance
// 	  = runtime.objects.VersusInfo_Alignment0.getFirstInstance();
// 	let VersusInfo_Alignment1_instance
// 	  = runtime.objects.VersusInfo_Alignment1.getFirstInstance();
	if ( ( VersusInfo_instance ) && ( !VersusInfo_instance.instVars.mode_detected ) )
		if ( VersusInfo_instance.instVars.mode == "start" ) {
			console.log( "VersusInfo: start...");
			VersusInfo_instance.instVars.mode_detected = true;
			//VersusInfo_instance.addEventListener( "destroy", )
		} else if ( VersusInfo_instance.instVars.mode == "finish" ) {
			console.log( "VersusInfo: finish.");
			VersusInfo_instance.instVars.mode_detected = true;
		} 
		
}
