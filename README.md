# Canvas scale 
---
canvas scale by css transform  
We usually use resize to scale the canvas  
it needs to clear the canvas, calculate the scale,   
save the martrix, and recalculate the contents of the canvas  
it will consume extra performance  
It is recommended to use css transform to zoom the canvas,   
to ensure that the parent's element zoom will not affect other  
elements to zoom the parent label  