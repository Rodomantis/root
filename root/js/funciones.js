function generar(numPer, numGrupos)
{	$personas=numPer;
	$grupos=numGrupos;
	$total=$personas*$grupos;	
	var g1=new Array($total);		
	for(var n=0;n<$total;n++)
	{
		var v=Math.random(1,$total);
		if(n==0)
		{
			g1[n]=v;
			document.write(g1[n]+" ");
		}
		else
		{
			while(g1(n-1)==v)
			{
				v=Math.random(1,$total);
			}
			g1[n]=v;
			document.write(g1[n]+" ");
		}
	}
	alert($total);
}