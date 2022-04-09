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
		let rollsAsCriticalTypes = keptRolls.map(r => r.critType);
		let firstKeptRoll = rollsAsCriticalTypes[0];

        
        if( firstKeptRoll != null ){
        	let soundDirectory = game.settings.get("critical-sounds", firstKeptRoll === "success" ? "critSuccessDirectory" : "critFailureDirectory");
        	let fileList = (await FilePicker.browse("data", soundDirectory)).files;
        	let randomFile = fileList[Math.floor(Math.random()*fileList.length)];
        	
        	game.socket.emit("module.critical-sounds", {
				soundFile: randomFile
			});
			if( game.settings.get("critical-sounds", "isAudioActiveForUser") ){
				AudioHelper.play({src: randomFile});
	        }
        }
	});

	game.socket.on("module.critical-sounds", (data) => {
		if( game.settings.get("critical-sounds", "isAudioActiveForUser") ){
			AudioHelper.play({src: data.soundFile});
        }
	});

});