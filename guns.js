var co = new Object;
function recalc_onclick(ctl) {
	if (true) {


		co['CoatEqptName']=document.getElementById('CoatEqptName').value;co['CoatEqptNo']=document.getElementById('CoatEqptNo').value;co['BalanceID']=document.getElementById('BalanceID').value;co['SprayRate']=document.getElementById('SprayRate').value;co['Set1Gun1PreWt']=eeparseFloat(document.getElementById('Set1Gun1PreWt').value);co['Set1Gun2PreWt']=eeparseFloat(document.getElementById('Set1Gun2PreWt').value);co['Set1Gun3PreWt']=eeparseFloat(document.getElementById('Set1Gun3PreWt').value);co['Set1Gun4PreWt']=eeparseFloat(document.getElementById('Set1Gun4PreWt').value);co['Set1Gun5PreWt']=eeparseFloat(document.getElementById('Set1Gun5PreWt').value);co['Set1Gun6PreWt']=eeparseFloat(document.getElementById('Set1Gun6PreWt').value);co['Set1Gun7PreWt']=eeparseFloat(document.getElementById('Set1Gun7PreWt').value);co['Set1Frequency']=document.getElementById('Set1Frequency').value;co['Set1Gun1PostWt']=eeparseFloat(document.getElementById('Set1Gun1PostWt').value);co['Set1Gun2PostWt']=eeparseFloat(document.getElementById('Set1Gun2PostWt').value);co['Set1Gun3PostWt']=eeparseFloat(document.getElementById('Set1Gun3PostWt').value);co['Set1Gun4PostWt']=eeparseFloat(document.getElementById('Set1Gun4PostWt').value);co['Set1Gun5PostWt']=eeparseFloat(document.getElementById('Set1Gun5PostWt').value);co['Set1Gun6PostWt']=eeparseFloat(document.getElementById('Set1Gun6PostWt').value);co['Set1Gun7PostWt']=eeparseFloat(document.getElementById('Set1Gun7PostWt').value);co['Set1Stroke']=document.getElementById('Set1Stroke').value;
		co['Set1RPM']=document.getElementById('Set1RPM').value;co['Set1Time']=eeparseFloat(document.getElementById('Set1Time').value);co['Adjust1']=document.getElementById('Adjust1').value;co['Set2Gun1PreWt']=eeparseFloat(document.getElementById('Set2Gun1PreWt').value);co['Set2Gun2PreWt']=eeparseFloat(document.getElementById('Set2Gun2PreWt').value);co['Set2Gun3PreWt']=eeparseFloat(document.getElementById('Set2Gun3PreWt').value);co['Set2Gun4PreWt']=eeparseFloat(document.getElementById('Set2Gun4PreWt').value);co['Set2Gun5PreWt']=eeparseFloat(document.getElementById('Set2Gun5PreWt').value);co['Set2Gun6PreWt']=eeparseFloat(document.getElementById('Set2Gun6PreWt').value);co['Set2Gun7PreWt']=eeparseFloat(document.getElementById('Set2Gun7PreWt').value);co['Set2Frequency']=document.getElementById('Set2Frequency').value;co['Set2Gun1PostWt']=eeparseFloat(document.getElementById('Set2Gun1PostWt').value);co['Set2Gun2PostWt']=eeparseFloat(document.getElementById('Set2Gun2PostWt').value);co['Set2Gun3PostWt']=eeparseFloat(document.getElementById('Set2Gun3PostWt').value);co['Set2Gun4PostWt']=eeparseFloat(document.getElementById('Set2Gun4PostWt').value);co['Set2Gun5PostWt']=eeparseFloat(document.getElementById('Set2Gun5PostWt').value);co['Set2Gun6PostWt']=eeparseFloat(document.getElementById('Set2Gun6PostWt').value);co['Set2Gun7PostWt']=eeparseFloat(document.getElementById('Set2Gun7PostWt').value);co['Set2Stroke']=document.getElementById('Set2Stroke').value;co['Set2RPM']=document.getElementById('Set2RPM').value;
		co['Set2Time']=eeparseFloat(document.getElementById('Set2Time').value);co['Adjust2']=document.getElementById('Adjust2').value;co['Set3Gun1PreWt']=eeparseFloat(document.getElementById('Set3Gun1PreWt').value);co['Set3Gun2PreWt']=eeparseFloat(document.getElementById('Set3Gun2PreWt').value);co['Set3Gun3PreWt']=eeparseFloat(document.getElementById('Set3Gun3PreWt').value);co['Set3Gun4PreWt']=eeparseFloat(document.getElementById('Set3Gun4PreWt').value);co['Set3Gun5PreWt']=eeparseFloat(document.getElementById('Set3Gun5PreWt').value);co['Set3Gun6PreWt']=eeparseFloat(document.getElementById('Set3Gun6PreWt').value);co['Set3Gun7PreWt']=eeparseFloat(document.getElementById('Set3Gun7PreWt').value);co['Set3Frequency']=document.getElementById('Set3Frequency').value;co['Set3Gun1PostWt']=eeparseFloat(document.getElementById('Set3Gun1PostWt').value);co['Set3Gun2PostWt']=eeparseFloat(document.getElementById('Set3Gun2PostWt').value);co['Set3Gun3PostWt']=eeparseFloat(document.getElementById('Set3Gun3PostWt').value);co['Set3Gun4PostWt']=eeparseFloat(document.getElementById('Set3Gun4PostWt').value);co['Set3Gun5PostWt']=eeparseFloat(document.getElementById('Set3Gun5PostWt').value);co['Set3Gun6PostWt']=eeparseFloat(document.getElementById('Set3Gun6PostWt').value);co['Set3Gun7PostWt']=eeparseFloat(document.getElementById('Set3Gun7PostWt').value);co['Set3Stroke']=document.getElementById('Set3Stroke').value;co['Set3RPM']=document.getElementById('Set3RPM').value;co['Set3Time']=eeparseFloat(document.getElementById('Set3Time').value);
		co['Adjust3']=document.getElementById('Adjust3').value;co['SprayGunRemarks']=document.getElementById('SprayGunRemarks').value;calc(co);document.getElementById('Set1Gun1Diff').value=eedisplayFloatND(co['Set1Gun1Diff'],2);document.getElementById('Set1Gun2Diff').value=eedisplayFloatND(co['Set1Gun2Diff'],2);document.getElementById('Set1Gun3Diff').value=eedisplayFloatND(co['Set1Gun3Diff'],2);document.getElementById('Set1Gun4Diff').value=eedisplayFloatND(co['Set1Gun4Diff'],2);document.getElementById('Set1Gun5Diff').value=eedisplayFloatND(co['Set1Gun5Diff'],2);document.getElementById('Set1Gun6Diff').value=eedisplayFloatND(co['Set1Gun6Diff'],2);document.getElementById('Set1Gun7Diff').value=eedisplayFloatND(co['Set1Gun7Diff'],2);document.getElementById('Set1Gun1Rate').value=eedisplayFloatND(co['Set1Gun1Rate'],2);document.getElementById('Set1Gun2Rate').value=eedisplayFloatND(co['Set1Gun2Rate'],2);document.getElementById('Set1Gun3Rate').value=eedisplayFloatND(co['Set1Gun3Rate'],2);document.getElementById('Set1Gun4Rate').value=eedisplayFloatND(co['Set1Gun4Rate'],2);document.getElementById('Set1Gun5Rate').value=eedisplayFloatND(co['Set1Gun5Rate'],2);document.getElementById('Set1Gun6Rate').value=eedisplayFloatND(co['Set1Gun6Rate'],2);document.getElementById('Set1Gun7Rate').value=eedisplayFloatND(co['Set1Gun7Rate'],2);document.getElementById('Set2Gun1Diff').value=eedisplayFloatND(co['Set2Gun1Diff'],2);document.getElementById('Set2Gun2Diff').value=eedisplayFloatND(co['Set2Gun2Diff'],2);
		document.getElementById('Set2Gun3Diff').value=eedisplayFloatND(co['Set2Gun3Diff'],2);document.getElementById('Set2Gun4Diff').value=eedisplayFloatND(co['Set2Gun4Diff'],2);document.getElementById('Set2Gun5Diff').value=eedisplayFloatND(co['Set2Gun5Diff'],2);document.getElementById('Set2Gun6Diff').value=eedisplayFloatND(co['Set2Gun6Diff'],2);document.getElementById('Set2Gun7Diff').value=eedisplayFloatND(co['Set2Gun7Diff'],2);document.getElementById('Set2Gun1Rate').value=eedisplayFloatND(co['Set2Gun1Rate'],2);document.getElementById('Set2Gun2Rate').value=eedisplayFloatND(co['Set2Gun2Rate'],2);document.getElementById('Set2Gun3Rate').value=eedisplayFloatND(co['Set2Gun3Rate'],2);document.getElementById('Set2Gun4Rate').value=eedisplayFloatND(co['Set2Gun4Rate'],2);document.getElementById('Set2Gun5Rate').value=eedisplayFloatND(co['Set2Gun5Rate'],2);document.getElementById('Set2Gun6Rate').value=eedisplayFloatND(co['Set2Gun6Rate'],2);document.getElementById('Set2Gun7Rate').value=eedisplayFloatND(co['Set2Gun7Rate'],2);document.getElementById('Set3Gun1Diff').value=eedisplayFloatND(co['Set3Gun1Diff'],2);document.getElementById('Set3Gun2Diff').value=eedisplayFloatND(co['Set3Gun2Diff'],2);document.getElementById('Set3Gun3Diff').value=eedisplayFloatND(co['Set3Gun3Diff'],2);document.getElementById('Set3Gun4Diff').value=eedisplayFloatND(co['Set3Gun4Diff'],2);document.getElementById('Set3Gun5Diff').value=eedisplayFloatND(co['Set3Gun5Diff'],2);document.getElementById('Set3Gun6Diff').value=eedisplayFloatND(co['Set3Gun6Diff'],2);
		document.getElementById('Set3Gun7Diff').value=eedisplayFloatND(co['Set3Gun7Diff'],2);document.getElementById('Set3Gun1Rate').value=eedisplayFloatND(co['Set3Gun1Rate'],2);document.getElementById('Set3Gun2Rate').value=eedisplayFloatND(co['Set3Gun2Rate'],2);document.getElementById('Set3Gun3Rate').value=eedisplayFloatND(co['Set3Gun3Rate'],2);document.getElementById('Set3Gun4Rate').value=eedisplayFloatND(co['Set3Gun4Rate'],2);document.getElementById('Set3Gun5Rate').value=eedisplayFloatND(co['Set3Gun5Rate'],2);document.getElementById('Set3Gun6Rate').value=eedisplayFloatND(co['Set3Gun6Rate'],2);document.getElementById('Set3Gun7Rate').value=eedisplayFloatND(co['Set3Gun7Rate'],2);
	};};
function calc(data){var c1B27=data['SprayGunRemarks'];var c1A26=data['Adjust3'];var c1B24=data['Set3Time'];var c1B23=data['Set3RPM'];var c1B22=data['Set3Stroke'];var c1J21=data['Set3Gun7PostWt'];var c1I21=data['Set3Gun6PostWt'];var c1H21=data['Set3Gun5PostWt'];var c1G21=data['Set3Gun4PostWt'];var c1F21=data['Set3Gun3PostWt'];var c1E21=data['Set3Gun2PostWt'];var c1D21=data['Set3Gun1PostWt'];var c1B21=data['Set3Frequency'];var c1J20=data['Set3Gun7PreWt'];var c1I20=data['Set3Gun6PreWt'];var c1H20=data['Set3Gun5PreWt'];var c1G20=data['Set3Gun4PreWt'];var c1F20=data['Set3Gun3PreWt'];var c1E20=data['Set3Gun2PreWt'];var c1D20=data['Set3Gun1PreWt'];var c1A19=data['Adjust2'];var c1B17=data['Set2Time'];var c1B16=data['Set2RPM'];var c1B15=data['Set2Stroke'];var c1J14=data['Set2Gun7PostWt'];var c1I14=data['Set2Gun6PostWt'];var c1H14=data['Set2Gun5PostWt'];var c1G14=data['Set2Gun4PostWt'];var c1F14=data['Set2Gun3PostWt'];var c1E14=data['Set2Gun2PostWt'];var c1D14=data['Set2Gun1PostWt'];var c1B14=data['Set2Frequency'];var c1J13=data['Set2Gun7PreWt'];var c1I13=data['Set2Gun6PreWt'];var c1H13=data['Set2Gun5PreWt'];var c1G13=data['Set2Gun4PreWt'];var c1F13=data['Set2Gun3PreWt'];var c1E13=data['Set2Gun2PreWt'];var c1D13=data['Set2Gun1PreWt'];var c1A12=data['Adjust1'];var c1B10=data['Set1Time'];var c1B9=data['Set1RPM'];var c1B8=data['Set1Stroke'];var c1J7=data['Set1Gun7PostWt'];var c1I7=data['Set1Gun6PostWt'];
	var c1H7=data['Set1Gun5PostWt'];var c1G7=data['Set1Gun4PostWt'];var c1F7=data['Set1Gun3PostWt'];var c1E7=data['Set1Gun2PostWt'];var c1D7=data['Set1Gun1PostWt'];var c1B7=data['Set1Frequency'];var c1J6=data['Set1Gun7PreWt'];var c1I6=data['Set1Gun6PreWt'];var c1H6=data['Set1Gun5PreWt'];var c1G6=data['Set1Gun4PreWt'];var c1F6=data['Set1Gun3PreWt'];var c1E6=data['Set1Gun2PreWt'];var c1D6=data['Set1Gun1PreWt'];var c1C5=data['SprayRate'];var c1B4=data['BalanceID'];var c1H3=data['CoatEqptNo'];var c1C3=data['CoatEqptName'];var c1D11=(((c1D6)-(c1D7)));var c1E11=(((c1E6)-(c1E7)));var c1F11=(((c1F6)-(c1F7)));var c1G11=(((c1G6)-(c1G7)));var c1H11=(((c1H6)-(c1H7)));var c1I11=(((c1I6)-(c1I7)));var c1J11=(((c1J6)-(c1J7)));var c1D12=(((c1D11)/(((c1B10)/(60)))));var c1E12=(((c1E11)/(((c1B10)/(60)))));var c1F12=(((c1F11)/(((c1B10)/(60)))));var c1G12=(((c1G11)/(((c1B10)/(60)))));var c1H12=(((c1H11)/(((c1B10)/(60)))));var c1I12=(((c1I11)/(((c1B10)/(60)))));var c1J12=(((c1J11)/(((c1B10)/(60)))));var c1D18=(((c1D13)-(c1D14)));var c1E18=(((c1E13)-(c1E14)));var c1F18=(((c1F13)-(c1F14)));var c1G18=(((c1G13)-(c1G14)));var c1H18=(((c1H13)-(c1H14)));var c1I18=(((c1I13)-(c1I14)));var c1J18=(((c1J13)-(c1J14)));var c1D19=(((c1D18)/(((c1B17)/(60)))));var c1E19=(((c1E18)/(((c1B17)/(60)))));var c1F19=(((c1F18)/(((c1B17)/(60)))));
	var c1G19=(((c1G18)/(((c1B17)/(60)))));var c1H19=(((c1H18)/(((c1B17)/(60)))));var c1I19=(((c1I18)/(((c1B17)/(60)))));var c1J19=(((c1J18)/(((c1B17)/(60)))));var c1D25=(((c1D20)-(c1D21)));var c1E25=(((c1E20)-(c1E21)));var c1F25=(((c1F20)-(c1F21)));var c1G25=(((c1G20)-(c1G21)));var c1H25=(((c1H20)-(c1H21)));var c1I25=(((c1I20)-(c1I21)));var c1J25=(((c1J20)-(c1J21)));var c1D26=(((c1D25)/(((c1B24)/(60)))));var c1E26=(((c1E25)/(((c1B24)/(60)))));var c1F26=(((c1F25)/(((c1B24)/(60)))));var c1G26=(((c1G25)/(((c1B24)/(60)))));var c1H26=(((c1H25)/(((c1B24)/(60)))));var c1I26=(((c1I25)/(((c1B24)/(60)))));var c1J26=(((c1J25)/(((c1B24)/(60)))));data['Set3Gun7Rate']=c1J26;data['Set3Gun6Rate']=c1I26;data['Set3Gun5Rate']=c1H26;data['Set3Gun4Rate']=c1G26;data['Set3Gun3Rate']=c1F26;data['Set3Gun2Rate']=c1E26;data['Set3Gun1Rate']=c1D26;data['Set3Gun7Diff']=c1J25;data['Set3Gun6Diff']=c1I25;data['Set3Gun5Diff']=c1H25;data['Set3Gun4Diff']=c1G25;data['Set3Gun3Diff']=c1F25;data['Set3Gun2Diff']=c1E25;data['Set3Gun1Diff']=c1D25;data['Set2Gun7Rate']=c1J19;data['Set2Gun6Rate']=c1I19;data['Set2Gun5Rate']=c1H19;data['Set2Gun4Rate']=c1G19;data['Set2Gun3Rate']=c1F19;data['Set2Gun2Rate']=c1E19;data['Set2Gun1Rate']=c1D19;data['Set2Gun7Diff']=c1J18;data['Set2Gun6Diff']=c1I18;data['Set2Gun5Diff']=c1H18;
	data['Set2Gun4Diff']=c1G18;data['Set2Gun3Diff']=c1F18;data['Set2Gun2Diff']=c1E18;data['Set2Gun1Diff']=c1D18;data['Set1Gun7Rate']=c1J12;data['Set1Gun6Rate']=c1I12;data['Set1Gun5Rate']=c1H12;data['Set1Gun4Rate']=c1G12;data['Set1Gun3Rate']=c1F12;data['Set1Gun2Rate']=c1E12;data['Set1Gun1Rate']=c1D12;data['Set1Gun7Diff']=c1J11;data['Set1Gun6Diff']=c1I11;data['Set1Gun5Diff']=c1H11;data['Set1Gun4Diff']=c1G11;data['Set1Gun3Diff']=c1F11;data['Set1Gun2Diff']=c1E11;data['Set1Gun1Diff']=c1D11;};
function postcode() {
	document.getElementById('CoatEqptName').value="Automated coating Equipment : Neocota - 24A";
	document.getElementById('SprayRate').value="15 ±5 g/minute/gun";
};
function TriggerOnchange(hiddenId)
{
	var e = jQuery.Event('change');
	$('#'+hiddenId).trigger(e);
}
var eeisus=1;var eetrue="TRUE";var eefalse="FALSE";var eedec=".";var eeth=",";var eedecreg=new RegExp("\\.","g");var eethreg=new RegExp(",","g");var eecurrencyreg=new RegExp("[$]","g");var eepercentreg=new RegExp("%","g");
var jsonLocal='{"eeisus":1,"eetrue":"TRUE","eefalse":"FALSE","eedec":".","eeth":",","eedecreg":["\\\\.","g"],"eethreg":[",","g"],"eecurrencyreg":["[$]","g"],"eepercentreg":["%","g"]}';
function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};

function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};

function eeparseFloat(str){str=String(str).replace(eedecreg,".");var res=parseFloat(str);if(isNaN(res)){return 0;}else{return res;}};

var near0RegExp=new RegExp("[.](.*0000000|.*9999999)");function eedisplayFloat(x){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x);if(near0RegExp.test(str)){x=round(x,8);str=String(x);}return str.replace(/\./g,eedec);}};

function eedisplayFloatND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}}else{return res;}}};
function eequerystring(){
	var variable,key,value,ii,querystring,variables;querystring=document.location.search;
	if(querystring.length>0){
		variables=querystring.substring(1).split('&');
		for(ii=0;ii<variables.length;ii++){
			variable=variables[ii].split('=');
			key=unescape(variable[0])
			value=unescape(variable[1]);
			if(document.formc[key]!=null)
				document.formc[key].value=value;
		}
	}
}
function LoadFromQueryString(){
	eequerystring();
	recalc_onclick('');}
function navigate(evt)
{
	var key = evt.keyCode | evt.which;

	/* handle only Enter (13), arrow down key(40) and arrow up key (38) */
	if(key != 13 && key != 40 && key != 38) return;

	/* IE 8 does not have target so will resolve with srcElement */
	/* thought accessing target is faster than another jquery selector $(':focus'); */
	var cur_elem = $(evt.target || evt.srcElement);

	// implementing textarea logic
	if(cur_elem.is("textarea")) return;

	////discarding slider navigation using arrow key.
	//if((cur_elem.hasClass('ui-slider-handle')) && (key == 40 || key == 38)) {return;}

	/*{

	 if(key == 13) return;

	 var firstNewline = cur_elem.val().indexOf('\n');
	 var lastNewline = cur_elem.val().lastIndexOf('\n');
	 var cursorPos = cur_elem.prop("selectionStart");

	 if(firstNewline > -1)
	 {
	 // if we are not in first or last line, don't navigate.
	 if (cursorPos > firstNewline && cursorPos <= lastNewline) return;

	 // if we are in the first line, but up key was not pressed, don't navigate.
	 if(cursorPos <= firstNewline && key != 38) return;

	 // if we are in last line, but down key was not pressed, don't navigate.
	 if(cursorPos > lastNewline && key != 40) return;
	 }

	 }*/

	/* getting current field location.. */
	/* here 10 means we want to use decimal number system for parsing */
	var cur_sheet = parseInt(cur_elem.attr('data-sheet'), 10);
	var cur_row = parseInt(cur_elem.attr('data-row'), 10);
	var cur_col = parseInt(cur_elem.attr('data-col'), 10);

	var foundFocus = false;

	/* caching the sheet div selector */
	var sheetSelector = $('#sheet-' + cur_sheet + '');
	var inputSelector = 'input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea';
	var next_row = cur_row + 1;
	var prev_row = cur_row - 1;

	/* assuming next row is the last row */
	var max_row = next_row;
	var min_row = prev_row;

	while((key == 40 && next_row <= max_row) || (key == 38 && prev_row >= min_row))
	{
		/* looking for next higher data-row with same data-sheet and data-col.. */
		/* if found, it results in faster navigation */
		var next_focus_elem = sheetSelector.find(inputSelector).filter('[data-sheet='+ cur_sheet +'][data-row='+ (key == 38 ? prev_row  : next_row) + '][data-col='+ cur_col + ']');
		if(next_focus_elem.length > 0)
		{
			next_focus_elem[0].focus();
			foundFocus = true;
			break;
		}
		else
		{
			var arrRows;

			/* if not saved eariler into jquery data store of sheet div  */
			if(sheetSelector.data('col'+ cur_col) == undefined)
			{
				/* create array of data-row for given data-sheet and data-col */
				arrRows = sheetSelector.find(inputSelector).filter('[data-sheet=' + cur_sheet + '][data-col='+ cur_col + ']').map(
					function(){
						return parseInt($(this).attr('data-row'), 10);
					}).toArray();

				/* store into data-colx data store of sheet div where x is the cur_col */
				sheetSelector.data('col' + cur_col, arrRows);
			}
			else
			{
				/* fetch from jquery data store of sheet div */
				arrRows = sheetSelector.data('col' + cur_col);
			}

			/* assuming array is sorted.. */
			max_row = arrRows[arrRows.length - 1];
			min_row = arrRows[0];
			/* IE 8 does not have indexOf so using jquery method inArray as alternative */
			var rowIndex = ('indexOf' in Array.prototype) ? arrRows.indexOf(cur_row): $.inArray(cur_row, arrRows);

			if(key == 40 && cur_row < max_row)
			{
				next_row =  arrRows[rowIndex + 1];
			}
			else if(key == 38 && cur_row > min_row)
			{
				prev_row =  arrRows[rowIndex - 1];
			}
			else
			{
				break;
			}
		}
	}
	if(!foundFocus) /* navigate to next tab index if not found. */
	{
		var next_idx;
		if(key == 38) next_idx = parseInt(cur_elem.attr('tabindex'), 10) - 1;
		else next_idx = parseInt(cur_elem.attr('tabindex'), 10) + 1;

		/* look for next navigable field with higher tab index..*/
		var next_input = sheetSelector.find(inputSelector).filter('[data-sheet][data-row][data-col][tabindex=' + next_idx + ']');
		if(next_input.length > 0)
		{
			next_input.focus();
		}
		else
		{
			/* move to first tab index as last resort. */
			sheetSelector.find(inputSelector).filter('[data-sheet][data-row][data-col][tabindex]:first').focus();
		}
	}
	/* IE lack preventDefault so */
	evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
}


function inDate(butID) {
	var dateFLD = (butID+"Date")
	var now = new Date();
	var M = now.getMonth() + 1
	var D = now.getDate()
	var Y = now.getFullYear()
// Create an array with the correct month, day and year
	var date = (M +"/"+D+"/"+Y);

	document.getElementById(dateFLD).value = date
}

function inserttime(butID) {
	var timeFLD = (butID+"Time")
	var currentTime = new Date()
	var hours = currentTime.getHours()
	var minutes = currentTime.getMinutes()
	var seconds = currentTime.getSeconds()
	if (minutes < 10) {minutes = "0" + minutes}
	if (seconds < 10) {seconds = "0" + seconds}
	pTime= hours + ":" + minutes + ":" + seconds + " "
	document.getElementById(timeFLD).value = pTime
}