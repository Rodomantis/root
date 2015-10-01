function generar(numPer, numGrupos)
{	$personas=numPer;
	$grupos=numGrupos;
	$total=$personas*$grupos;	
	var g1=new Array($total);		
	for(var n=0;n<$total;n++)
	{
		if(n==0)
		{
			var v=getRandomInt(1,$total);
			g1[n]=v;
			document.write(g1[n]+" ");
		}
		else
		{
			var v=getRandomInt(1,$total);
			g1[n]=v;
			while(g1[n-1]==v)
			{
				var v=getRandomInt(1,$total);
			}
			g1[n]=v;
			document.write(g1[n]+" ");	
		}
	}
}
function getRandomInt(min, max) 
{
  	return Math.floor(Math.random() * (max - min)) + min;
}