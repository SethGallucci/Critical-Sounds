# Critical Sounds


### Set-Up


**Step 1** - Sound-Clip Directories

Create or choose two directories located somewhere in your Foundry *Data* folder; one directory for critical successes and the other for critical failures. Enter the paths for these directories into their respective text fields in the module settings.


**Step 2** - Add Sound Clips

Gather your own critical-success and critical-failure sound clips and add them to their respective directories from step 1. Be sure that the sound clips are of a format that Foundry can use. Foundry supports commonly used files types and then some more. For a list of audio-file types supported by Foundry, the expression `CONST.AUDIO_FILE_EXTENSIONS` can be entered into the console of the Foundry application or a connected client.


### Desired Improvements
- Multiple critical rolls in quick succession tend to result in overlapping sound clips. Possible solutions include: queueing the clips to be played one-after-the-other, preventing additional clips from being played while one is active, or having a cooldown period after playing a sound clip.
- Many Foundry users use the module [Dice So Nice](https://gitlab.com/riccisi/foundryvtt-dice-so-nice). To have proper integration with this module would be cool.
