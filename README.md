# Canvas scale 
---
canvas scale by css transform  
&nbsp;
We usually use resize to scale the canvas  
&nbsp;
it needs to clear the canvas, calculate the scale,   
&nbsp;
save the martrix, and recalculate the contents of the canvas  
&nbsp;
it will consume extra performance  
&nbsp;
It is recommended to use css transform to zoom the canvas,   
&nbsp;
to ensure that the parent's element zoom will not affect other
&nbsp;
elements to zoom the parent label  