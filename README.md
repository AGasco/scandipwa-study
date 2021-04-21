# ScandiPWA Study

This repository is being used to study and practice with ScandiPWA.


## Implemented

<b>Dark Mode Theme: </b> I've followed this tutorial here: https://docs.scandipwa.com/tutorials/dark-mode-extension


## Problems I've encountered

These are the problems that I've found: 

#### Dark-Theme:

<ul>
  <li>Only <code>Header.component.plugin.js</code> gets connected to the rest of the app. When I try to do the same steps but for <code>App.component.plugin.js</code> (to override its method renderRouter) and <code>Image.component.plugin.js</code>(to override its method render), 'member-function' property doesn't override the selected method</li>
    <li>Dark Theme is applied to everything except the background. I followed every step and even compared my code to the gitlab repository provided by the tutorial teacher. It seems DarkModeProvider wraps App but doesn't apply the effect to the background</li>
</ul>

I will try to understand what the problems are and solve these issues.

## Next steps
Working on learning how to :

<ul>
  <li>Place a component wherever I desire (pixel-perfect)</li>
  <li>Override base styles</li>
  <li>Create and implement a new plugin by myself (no tutorial)</li>
</ul>


