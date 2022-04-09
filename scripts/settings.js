export const criticalSoundsSettings = function ( ) {

	game.settings.register("critical-sounds", "critSuccessDirectory", {
		name: "Critical Success Directory",
		hint: "The path from inside Foundry's Data folder to the directory containing the sound-effects for critical successes.",
		scope: "world",
		config: true,
		type: String
	});

	game.settings.register("critical-sounds", "critFailureDirectory", {
		name: "Critical Failure Directory",
		hint: "The path from inside Foundry's Data folder to the directory containing the sound-effects for critical failures.",
		scope: "world",
		config: true,
		type: String
	});

	game.settings.register("critical-sounds", "isBroadcastActiveForUser", {
		name: "Broadcast on Critical Attacks",
		hint: "If this box is checked, it will be announced that a Critical Sounds sound clip should be played by other hosts and also which sound clip should be played. If you are the GM, you might wish to disable this if you will be making a large number of attack rolls.",
		scope: "user",
		config: true,
		default: true,
		type: Boolean
	});

	game.settings.register("critical-sounds", "isAudioActiveForUser", {
		name: "Play Audio on Critical Attacks",
		hint: "If this box is checked, a sound clip specified by a host that makes a critical attack roll will be played if they have their Critical Sounds \"Broadcast\" setting enabled.",
		scope: "user",
		config: true,
		default: true,
		type: Boolean
	});

}