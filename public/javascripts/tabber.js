function GetObj(objName){
	if(document.getElementById){
		return eval('document.getElementById("' + objName + '")');
	}else if(document.layers){
		return eval("document.layers['" + objName +"']");
	}else{
		return eval('document.all.' + objName);
	}
}
function PARMenu(index,flag){
	for(var i=0;i<20;i++){/* max-4 */
		if(GetObj("content"+i)&&GetObj("PARm"+i)){
			GetObj("content"+i).style.display = 'none';
			GetObj("PARm"+i).className = "out";
		}
	}
	if(GetObj("content"+index)&&GetObj("PARm"+index)){
		GetObj("content"+index).style.display = 'block';
		GetObj("PARm"+index).className = "on";
		if(index > 0){
		//	GetObj("PARm"+(index-1)).className = "on-1";
		}
	}
}