import { criticalSoundsSettings } from "./settings.js";

Hooks.on("init", () => {

	criticalSoundsSettings();
	
	Hooks.on("rollItemBetterRolls", async (data) => {

		if( !game.settings.get("critical-sounds", "isBroadcastActiveForUser") ){
			return;
		}

		let attackRolls = data.entries.find(e => e.rollType === "attack");

		if(attackRolls === undefined){
			return;
		}

		let keptRolls = attackRolls.entries.filter(e => !e.ignored);
		
		//non-crits have a critType of null
		let rollsAsCriticalTypes = keptRolls.map(r => r.critType);
        
		if( rollsAsCriticalTypes[0] === null ){
			return;
		}

    	let soundDirectory = game.settings.get("critical-sounds", rollsAsCriticalTypes[0] === "success" ? "critSuccessDirectory" : "critFailureDirectory");

    	let files;
		try{
		    files = (await FilePicker.browse("data", soundDirectory)).files
		}
		catch(error){
		    ui.notifications.warn(error);
		    console.warn(error);
		    return;
		}

		let audioFiles = files.filter(f => AudioHelper.hasAudioExtension(f));

		if( audioFiles.length < 1 ){
			let warning = `Directory ${directoryPath} does not contain any audio files usable by Foundry.`;
			ui.notifications.warn(warning);
			console.warn(warning);
			return;
		}

    	let randomFile = audioFiles[Math.floor(Math.random()*audioFiles.length)];
    	
    	game.socket.emit("module.critical-sounds", {
			soundFile: randomFile
		});

		if( game.settings.get("critical-sounds", "isAudioActiveForUser") ){
			AudioHelper.play({src: randomFile});
        }
	});

	game.socket.on("module.critical-sounds", (data) => {
		if( game.settings.get("critical-sounds", "isAudioActiveForUser") ){
			AudioHelper.play({src: data.soundFile});
        }
	});

});