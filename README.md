# ScandiPWA Study

This repository is being used to study and practice with ScandiPWA.


## Implemented

<b>Dark Mode Theme:</b> I've followed this tutorial here: https://docs.scandipwa.com/tutorials/dark-mode-extension

<b>Breathing Plugin:</b> Implemented a plugin that makes all <code>Image</code> to animate in a Breathing pattern.


## Problems I've encountered

These are the problems that I've found: 

#### Dark-Theme:

<ul>
    <li><b>Dark Theme</b> is applied to everything except the background. I followed every step and even compared my code to the gitlab repository provided by the tutorial teacher. It seems DarkModeProvider wraps App but doesn't apply the effect to the background</li>
    <li><b>ColorInverter</b> acts as a wrapper for all Image components. When implementing it, ScandiPWA logo doesn't show anymore. <b>Breathing Plugin</b> has the same issue (wrapping all Images hides the HomePage logo)</li>
</ul>

I will try to understand why these problems occur and solve these issues.

## Next steps
Working on learning how to :

<ul>
    <li>Place a component wherever I desire (pixel-perfect)</li>
    <li>Override base styles</li>
    <li>Create and implement a new plugin by myself - <b>DONE</b></li>
    <li>Understand GraphQL implementation. Create new GraphQL requests to grab data customized to my needs</li>
</ul>


