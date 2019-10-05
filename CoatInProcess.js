function resetClick(){
	document.formc.reset();
	postcode();

	recalc_onclick('');
	LoadFromQueryString();
}


var co = new Object;
function recalc_onclick(ctl) {
	if (true) {
		co['CoatEqptName']=document.getElementById('CoatEqptName').value;co['CoatEqptNo']=document.getElementById('CoatEqptNo').value;co['CoatEqptModel']=document.getElementById('CoatEqptModel').value;co['GunToTableDist']=document.getElementById('GunToTableDist').value;co['PanLoadWt']=document.getElementById('PanLoadWt').value;co['InletPressure']=document.getElementById('InletPressure').value;co['PanSpeed']=document.getElementById('PanSpeed').value;co['AtomPressure']=document.getElementById('AtomPressure').value;co['SprayProcedure']=document.getElementById('SprayProcedure').value;co['InletTemp']=document.getElementById('InletTemp').value;co['ActualSprayRate']=document.getElementById('ActualSprayRate').value;co['BedTemp']=document.getElementById('BedTemp').value;co['Frequency']=document.getElementById('Frequency').value;co['InDampPos']=document.getElementById('InDampPos').value;co['Stroke']=document.getElementById('Stroke').value;co['OutDampPos']=document.getElementById('OutDampPos').value;co['RPM']=document.getElementById('RPM').value;co['PctInToOut']=document.getElementById('PctInToOut').value;co['NoGuns']=document.getElementById('NoGuns').value;co['QtyOfCoating']=document.getElementById('QtyOfCoating').value;co['DistBtwnGuns']=document.getElementById('DistBtwnGuns').value;co['AvgCoreWt']=eeparseFloat(document.getElementById('AvgCoreWt').value);co['TargetPctWtAdd']=document.getElementById('TargetPctWtAdd').value;
		co['Duration1']=eeparsedate_keep_timeV(document.getElementById('Duration1').value);co['TotWtSamp1_01']=eeparseFloat(document.getElementById('TotWtSamp1_01').value);co['TotWtSamp2_01']=eeparseFloat(document.getElementById('TotWtSamp2_01').value);co['TotWtSamp3_01']=eeparseFloat(document.getElementById('TotWtSamp3_01').value);co['DoneBySamp01']=document.getElementById('DoneBySamp01').value;co['CkBySamp01']=document.getElementById('CkBySamp01').value;co['Duration2']=eeparsedate_keep_timeV(document.getElementById('Duration2').value);co['TotWtSamp1_02']=eeparseFloat(document.getElementById('TotWtSamp1_02').value);co['TotWtSamp2_02']=eeparseFloat(document.getElementById('TotWtSamp2_02').value);co['TotWtSamp3_02']=eeparseFloat(document.getElementById('TotWtSamp3_02').value);co['DoneBySamp02']=document.getElementById('DoneBySamp02').value;co['CkBySamp02']=document.getElementById('CkBySamp02').value;co['Duration3']=eeparsedate_keep_timeV(document.getElementById('Duration3').value);co['TotWtSamp1_03']=eeparseFloat(document.getElementById('TotWtSamp1_03').value);co['TotWtSamp2_03']=eeparseFloat(document.getElementById('TotWtSamp2_03').value);co['TotWtSamp3_03']=eeparseFloat(document.getElementById('TotWtSamp3_03').value);co['DoneBySamp03']=document.getElementById('DoneBySamp03').value;co['CkBySamp03']=document.getElementById('CkBySamp03').value;co['Duration4']=eeparsedate_keep_timeV(document.getElementById('Duration4').value);co['TotWtSamp1_04']=eeparseFloat(document.getElementById('TotWtSamp1_04').value);
		co['TotWtSamp2_04']=eeparseFloat(document.getElementById('TotWtSamp2_04').value);co['TotWtSamp3_04']=eeparseFloat(document.getElementById('TotWtSamp3_04').value);co['DoneBySamp04']=document.getElementById('DoneBySamp04').value;co['CkBySamp04']=document.getElementById('CkBySamp04').value;co['Duration5']=eeparsedate_keep_timeV(document.getElementById('Duration5').value);co['TotWtSamp1_05']=eeparseFloat(document.getElementById('TotWtSamp1_05').value);co['TotWtSamp2_05']=eeparseFloat(document.getElementById('TotWtSamp2_05').value);co['TotWtSamp3_05']=eeparseFloat(document.getElementById('TotWtSamp3_05').value);co['DoneBySamp05']=document.getElementById('DoneBySamp05').value;co['CkBySamp05']=document.getElementById('CkBySamp05').value;co['Duration6']=eeparsedate_keep_timeV(document.getElementById('Duration6').value);co['TotWtSamp1_06']=eeparseFloat(document.getElementById('TotWtSamp1_06').value);co['TotWtSamp2_06']=eeparseFloat(document.getElementById('TotWtSamp2_06').value);co['TotWtSamp3_06']=eeparseFloat(document.getElementById('TotWtSamp3_06').value);co['DoneBySamp06']=document.getElementById('DoneBySamp06').value;co['CkBySamp06']=document.getElementById('CkBySamp06').value;co['Duration7']=eeparsedate_keep_timeV(document.getElementById('Duration7').value);co['TotWtSamp1_07']=eeparseFloat(document.getElementById('TotWtSamp1_07').value);co['TotWtSamp2_07']=eeparseFloat(document.getElementById('TotWtSamp2_07').value);co['TotWtSamp3_07']=eeparseFloat(document.getElementById('TotWtSamp3_07').value);
		co['DoneBySamp07']=document.getElementById('DoneBySamp07').value;co['CkBySamp07']=document.getElementById('CkBySamp07').value;co['Duration8']=eeparsedate_keep_timeV(document.getElementById('Duration8').value);co['TotWtSamp1_08']=eeparseFloat(document.getElementById('TotWtSamp1_08').value);co['TotWtSamp2_08']=eeparseFloat(document.getElementById('TotWtSamp2_08').value);co['TotWtSamp3_08']=eeparseFloat(document.getElementById('TotWtSamp3_08').value);co['DoneBySamp08']=document.getElementById('DoneBySamp08').value;co['CkBySamp08']=document.getElementById('CkBySamp08').value;co['Duration9']=eeparsedate_keep_timeV(document.getElementById('Duration9').value);co['TotWtSamp1_09']=eeparseFloat(document.getElementById('TotWtSamp1_09').value);co['TotWtSamp2_09']=eeparseFloat(document.getElementById('TotWtSamp2_09').value);co['TotWtSamp3_09']=eeparseFloat(document.getElementById('TotWtSamp3_09').value);co['DoneBySamp09']=document.getElementById('DoneBySamp09').value;co['CkBySamp09']=document.getElementById('CkBySamp09').value;co['Duration10']=eeparsedate_keep_timeV(document.getElementById('Duration10').value);co['TotWtSamp1_10']=eeparseFloat(document.getElementById('TotWtSamp1_10').value);co['TotWtSamp2_10']=eeparseFloat(document.getElementById('TotWtSamp2_10').value);co['TotWtSamp3_10']=eeparseFloat(document.getElementById('TotWtSamp3_10').value);co['DoneBySamp10']=document.getElementById('DoneBySamp10').value;co['CkBySamp10']=document.getElementById('CkBySamp10').value;co['Duration11']=eeparsedate_keep_timeV(document.getElementById('Duration11').value);
		co['TotWtSamp1_11']=eeparseFloat(document.getElementById('TotWtSamp1_11').value);co['TotWtSamp2_11']=eeparseFloat(document.getElementById('TotWtSamp2_11').value);co['TotWtSamp3_11']=eeparseFloat(document.getElementById('TotWtSamp3_11').value);co['DoneBySamp11']=document.getElementById('DoneBySamp11').value;co['CkBySamp11']=document.getElementById('CkBySamp11').value;co['Duration12']=eeparsedate_keep_timeV(document.getElementById('Duration12').value);co['TotWtSamp1_12']=eeparseFloat(document.getElementById('TotWtSamp1_12').value);co['TotWtSamp2_12']=eeparseFloat(document.getElementById('TotWtSamp2_12').value);co['TotWtSamp3_12']=eeparseFloat(document.getElementById('TotWtSamp3_12').value);co['DoneBySamp12']=document.getElementById('DoneBySamp12').value;co['CkBySamp12']=document.getElementById('CkBySamp12').value;co['Duration13']=eeparsedate_keep_timeV(document.getElementById('Duration13').value);co['TotWtSamp1_13']=eeparseFloat(document.getElementById('TotWtSamp1_13').value);co['TotWtSamp2_13']=eeparseFloat(document.getElementById('TotWtSamp2_13').value);co['TotWtSamp3_13']=eeparseFloat(document.getElementById('TotWtSamp3_13').value);co['DoneBySamp13']=document.getElementById('DoneBySamp13').value;co['CkBySamp13']=document.getElementById('CkBySamp13').value;co['Remarks']=document.getElementById('Remarks').value;calc(co);document.getElementById('AvgWtSamp01').value=eedisplayFloatND(co['AvgWtSamp01'],1);document.getElementById('WtAddedSamp01').value=eedisplayFloatND(co['WtAddedSamp01'],1);
		document.getElementById('PctWtAddSamp01').value=eedisplayFloatND(co['PctWtAddSamp01'],2);document.getElementById('AvgWtSamp02').value=eedisplayFloatND(co['AvgWtSamp02'],1);document.getElementById('WtAddedSamp02').value=eedisplayFloatND(co['WtAddedSamp02'],1);document.getElementById('PctWtAddSamp02').value=eedisplayFloatND(co['PctWtAddSamp02'],2);document.getElementById('AvgWtSamp03').value=eedisplayFloatND(co['AvgWtSamp03'],1);document.getElementById('WtAddedSamp03').value=eedisplayFloatND(co['WtAddedSamp03'],1);document.getElementById('PctWtAddSamp03').value=eedisplayFloatND(co['PctWtAddSamp03'],2);document.getElementById('AvgWtSamp04').value=eedisplayFloatND(co['AvgWtSamp04'],1);document.getElementById('WtAddedSamp04').value=eedisplayFloatND(co['WtAddedSamp04'],1);document.getElementById('PctWtAddSamp04').value=eedisplayFloatND(co['PctWtAddSamp04'],2);document.getElementById('AvgWtSamp05').value=eedisplayFloatND(co['AvgWtSamp05'],1);document.getElementById('WtAddedSamp05').value=eedisplayFloatND(co['WtAddedSamp05'],1);document.getElementById('PctWtAddSamp05').value=eedisplayFloatND(co['PctWtAddSamp05'],2);document.getElementById('AvgWtSamp06').value=eedisplayFloatND(co['AvgWtSamp06'],1);document.getElementById('WtAddedSamp06').value=eedisplayFloatND(co['WtAddedSamp06'],1);document.getElementById('PctWtAddSamp06').value=eedisplayFloatND(co['PctWtAddSamp06'],2);document.getElementById('AvgWtSamp07').value=eedisplayFloatND(co['AvgWtSamp07'],1);document.getElementById('WtAddedSamp07').value=eedisplayFloatND(co['WtAddedSamp07'],1);
		document.getElementById('PctWtAddSamp07').value=eedisplayFloatND(co['PctWtAddSamp07'],2);document.getElementById('AvgWtSamp08').value=eedisplayFloatND(co['AvgWtSamp08'],1);document.getElementById('WtAddedSamp08').value=eedisplayFloatND(co['WtAddedSamp08'],1);document.getElementById('PctWtAddSamp08').value=eedisplayFloatND(co['PctWtAddSamp08'],2);document.getElementById('AvgWtSamp09').value=eedisplayFloatND(co['AvgWtSamp09'],1);document.getElementById('WtAddedSamp09').value=eedisplayFloatND(co['WtAddedSamp09'],1);document.getElementById('PctWtAddSamp09').value=eedisplayFloatND(co['PctWtAddSamp09'],2);document.getElementById('AvgWtSamp10').value=eedisplayFloatND(co['AvgWtSamp10'],1);document.getElementById('WtAddedSamp10').value=eedisplayFloatND(co['WtAddedSamp10'],1);document.getElementById('PctWtAddSamp10').value=eedisplayFloatND(co['PctWtAddSamp10'],2);document.getElementById('AvgWtSamp11').value=eedisplayFloatND(co['AvgWtSamp11'],1);document.getElementById('WtAddedSamp11').value=eedisplayFloatND(co['WtAddedSamp11'],1);document.getElementById('PctWtAddSamp11').value=eedisplayFloatND(co['PctWtAddSamp11'],2);document.getElementById('AvgWtSamp12').value=eedisplayFloatND(co['AvgWtSamp12'],1);document.getElementById('WtAddedSamp12').value=eedisplayFloatND(co['WtAddedSamp12'],1);document.getElementById('PctWtAddSamp12').value=eedisplayFloatND(co['PctWtAddSamp12'],2);document.getElementById('AvgWtSamp13').value=eedisplayFloatND(co['AvgWtSamp13'],1);document.getElementById('WtAddedSamp13').value=eedisplayFloatND(co['WtAddedSamp13'],1);
		document.getElementById('PctWtAddSamp13').value=eedisplayFloatND(co['PctWtAddSamp13'],2);document.getElementById('AvgCoatedWt').value=eedisplayFloatND(co['AvgCoatedWt'],1);
	};};
var arr1xG18G30=new Array(13);for(var ii=0;ii<13;ii++){arr1xG18G30[ii]=new Array(1);for(var jj=0;jj<1;jj++){arr1xG18G30[ii][jj]=0}};var eecm1=new Array(new Array(arr1xG18G30,0,0,12,0));function calc(data){var c1C32=data['Remarks'];var c1K30=data['CkBySamp13'];var c1J30=data['DoneBySamp13'];var c1F30=data['TotWtSamp3_13'];var c1E30=data['TotWtSamp2_13'];var c1D30=data['TotWtSamp1_13'];var c1C30=data['Duration13'];var c1K29=data['CkBySamp12'];var c1J29=data['DoneBySamp12'];var c1F29=data['TotWtSamp3_12'];var c1E29=data['TotWtSamp2_12'];var c1D29=data['TotWtSamp1_12'];var c1C29=data['Duration12'];var c1K28=data['CkBySamp11'];var c1J28=data['DoneBySamp11'];var c1F28=data['TotWtSamp3_11'];var c1E28=data['TotWtSamp2_11'];var c1D28=data['TotWtSamp1_11'];var c1C28=data['Duration11'];var c1K27=data['CkBySamp10'];var c1J27=data['DoneBySamp10'];var c1F27=data['TotWtSamp3_10'];var c1E27=data['TotWtSamp2_10'];var c1D27=data['TotWtSamp1_10'];var c1C27=data['Duration10'];var c1K26=data['CkBySamp09'];var c1J26=data['DoneBySamp09'];var c1F26=data['TotWtSamp3_09'];var c1E26=data['TotWtSamp2_09'];var c1D26=data['TotWtSamp1_09'];var c1C26=data['Duration9'];var c1K25=data['CkBySamp08'];var c1J25=data['DoneBySamp08'];var c1F25=data['TotWtSamp3_08'];var c1E25=data['TotWtSamp2_08'];var c1D25=data['TotWtSamp1_08'];var c1C25=data['Duration8'];var c1K24=data['CkBySamp07'];var c1J24=data['DoneBySamp07'];
	var c1F24=data['TotWtSamp3_07'];var c1E24=data['TotWtSamp2_07'];var c1D24=data['TotWtSamp1_07'];var c1C24=data['Duration7'];var c1K23=data['CkBySamp06'];var c1J23=data['DoneBySamp06'];var c1F23=data['TotWtSamp3_06'];var c1E23=data['TotWtSamp2_06'];var c1D23=data['TotWtSamp1_06'];var c1C23=data['Duration6'];var c1K22=data['CkBySamp05'];var c1J22=data['DoneBySamp05'];var c1F22=data['TotWtSamp3_05'];var c1E22=data['TotWtSamp2_05'];var c1D22=data['TotWtSamp1_05'];var c1C22=data['Duration5'];var c1K21=data['CkBySamp04'];var c1J21=data['DoneBySamp04'];var c1F21=data['TotWtSamp3_04'];var c1E21=data['TotWtSamp2_04'];var c1D21=data['TotWtSamp1_04'];var c1C21=data['Duration4'];var c1K20=data['CkBySamp03'];var c1J20=data['DoneBySamp03'];var c1F20=data['TotWtSamp3_03'];var c1E20=data['TotWtSamp2_03'];var c1D20=data['TotWtSamp1_03'];var c1C20=data['Duration3'];var c1K19=data['CkBySamp02'];var c1J19=data['DoneBySamp02'];var c1F19=data['TotWtSamp3_02'];var c1E19=data['TotWtSamp2_02'];var c1D19=data['TotWtSamp1_02'];var c1C19=data['Duration2'];var c1K18=data['CkBySamp01'];var c1J18=data['DoneBySamp01'];var c1F18=data['TotWtSamp3_01'];var c1E18=data['TotWtSamp2_01'];var c1D18=data['TotWtSamp1_01'];var c1C18=data['Duration1'];var c1J15=data['Date'];var c1H15=data['TargetPctWtAdd'];var c1J14=data['AvgCoreWt'];var c1D14=data['DistBtwnGuns'];var c1J13=data['QtyOfCoating'];var c1D13=data['NoGuns'];
	var c1J12=data['PctInToOut'];var c1D12=data['RPM'];var c1J11=data['OutDampPos'];var c1D11=data['Stroke'];var c1J10=data['InDampPos'];var c1D10=data['Frequency'];var c1J9=data['BedTemp'];var c1D9=data['ActualSprayRate'];var c1J8=data['InletTemp'];var c1D8=data['SprayProcedure'];var c1J7=data['AtomPressure'];var c1D7=data['PanSpeed'];var c1J6=data['InletPressure'];var c1D6=data['PanLoadWt'];var c1J5=data['GunToTableDist'];var c1D5=data['CoatEqptModel'];var c1J3=data['CoatEqptNo'];var c1D3=data['CoatEqptName'];arr1xG18G30[0][0]=(((((((((c1D18)+(c1E18)))+(c1F18)))*(1000)))/(150)));var c1H18=(((arr1xG18G30[0][0])-(c1J14)));var c1I18=(((((c1H18)/(c1J14)))*(100)));arr1xG18G30[1][0]=(((((((((c1D19)+(c1E19)))+(c1F19)))*(1000)))/(150)));var c1H19=(((arr1xG18G30[1][0])-(c1J14)));var c1I19=(((((c1H19)/(c1J14)))*(100)));arr1xG18G30[2][0]=(((((((((c1D20)+(c1E20)))+(c1F20)))*(1000)))/(150)));var c1H20=(((arr1xG18G30[2][0])-(c1J14)));var c1I20=(((((c1H20)/(c1J14)))*(100)));arr1xG18G30[3][0]=(((((((((c1D21)+(c1E21)))+(c1F21)))*(1000)))/(150)));var c1H21=(((arr1xG18G30[3][0])-(c1J14)));var c1I21=(((((c1H21)/(c1J14)))*(100)));arr1xG18G30[4][0]=(((((((((c1D22)+(c1E22)))+(c1F22)))*(1000)))/(150)));var c1H22=(((arr1xG18G30[4][0])-(c1J14)));var c1I22=(((((c1H22)/(c1J14)))*(100)));arr1xG18G30[5][0]=(((((((((c1D23)+(c1E23)))+(c1F23)))*(1000)))/(150)));
	var c1H23=(((arr1xG18G30[5][0])-(c1J14)));var c1I23=(((((c1H23)/(c1J14)))*(100)));arr1xG18G30[6][0]=(((((((((c1D24)+(c1E24)))+(c1F24)))*(1000)))/(150)));var c1H24=(((arr1xG18G30[6][0])-(c1J14)));var c1I24=(((((c1H24)/(c1J14)))*(100)));arr1xG18G30[7][0]=(((((((((c1D25)+(c1E25)))+(c1F25)))*(1000)))/(150)));var c1H25=(((arr1xG18G30[7][0])-(c1J14)));var c1I25=(((((c1H25)/(c1J14)))*(100)));arr1xG18G30[8][0]=(((((((((c1D26)+(c1E26)))+(c1F26)))*(1000)))/(150)));var c1H26=(((arr1xG18G30[8][0])-(c1J14)));var c1I26=(((((c1H26)/(c1J14)))*(100)));arr1xG18G30[9][0]=(((((((((c1D27)+(c1E27)))+(c1F27)))*(1000)))/(150)));var c1H27=(((arr1xG18G30[9][0])-(c1J14)));var c1I27=(((((c1H27)/(c1J14)))*(100)));arr1xG18G30[10][0]=(((((((((c1D28)+(c1E28)))+(c1F28)))*(1000)))/(150)));var c1H28=(((arr1xG18G30[10][0])-(c1J14)));var c1I28=(((((c1H28)/(c1J14)))*(100)));arr1xG18G30[11][0]=(((((((((c1D29)+(c1E29)))+(c1F29)))*(1000)))/(150)));var c1H29=(((arr1xG18G30[11][0])-(c1J14)));var c1I29=(((((c1H29)/(c1J14)))*(100)));arr1xG18G30[12][0]=(((((((((c1D30)+(c1E30)))+(c1F30)))*(1000)))/(150)));var c1H30=(((arr1xG18G30[12][0])-(c1J14)));var c1I30=(((((c1H30)/(c1J14)))*(100)));var c1G31=(average(13,0,0,eecm1));data['AvgCoatedWt']=c1G31;data['PctWtAddSamp13']=c1I30;data['WtAddedSamp13']=c1H30;data['AvgWtSamp13']=arr1xG18G30[12][0];
	data['PctWtAddSamp12']=c1I29;data['WtAddedSamp12']=c1H29;data['AvgWtSamp12']=arr1xG18G30[11][0];data['PctWtAddSamp11']=c1I28;data['WtAddedSamp11']=c1H28;data['AvgWtSamp11']=arr1xG18G30[10][0];data['PctWtAddSamp10']=c1I27;data['WtAddedSamp10']=c1H27;data['AvgWtSamp10']=arr1xG18G30[9][0];data['PctWtAddSamp09']=c1I26;data['WtAddedSamp09']=c1H26;data['AvgWtSamp09']=arr1xG18G30[8][0];data['PctWtAddSamp08']=c1I25;data['WtAddedSamp08']=c1H25;data['AvgWtSamp08']=arr1xG18G30[7][0];data['PctWtAddSamp07']=c1I24;data['WtAddedSamp07']=c1H24;data['AvgWtSamp07']=arr1xG18G30[6][0];data['PctWtAddSamp06']=c1I23;data['WtAddedSamp06']=c1H23;data['AvgWtSamp06']=arr1xG18G30[5][0];data['PctWtAddSamp05']=c1I22;data['WtAddedSamp05']=c1H22;data['AvgWtSamp05']=arr1xG18G30[4][0];data['PctWtAddSamp04']=c1I21;data['WtAddedSamp04']=c1H21;data['AvgWtSamp04']=arr1xG18G30[3][0];data['PctWtAddSamp03']=c1I20;data['WtAddedSamp03']=c1H20;data['AvgWtSamp03']=arr1xG18G30[2][0];data['PctWtAddSamp02']=c1I19;data['WtAddedSamp02']=c1H19;data['AvgWtSamp02']=arr1xG18G30[1][0];data['PctWtAddSamp01']=c1I18;data['WtAddedSamp01']=c1H18;data['AvgWtSamp01']=arr1xG18G30[0][0];};
function postcode() {
	document.getElementById('CoatEqptName').value="Automated coating Equipment: Neocota - 24A";
};
function TriggerOnchange(hiddenId)
{
	var e = jQuery.Event('change');
	$('#'+hiddenId).trigger(e);
}
var eeisus=1;var eetrue="TRUE";var eefalse="FALSE";var eedec=".";var eeth=",";var eedecreg=new RegExp("\\.","g");var eethreg=new RegExp(",","g");var eecurrencyreg=new RegExp("[$]","g");var eepercentreg=new RegExp("%","g"); var fmtdaynamesshort=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat"); var fmtdaynameslong=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"); var fmtmonthnamesshort=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"); var fmtmonthnameslong=new Array("January","February","March","April","May","June","July","August","September","October","November","December"); var fmtstrings=new Array(":","/"); var fmtdate1=[12,32,17]; var fmtdate2=[2,33,6,33,11];
var jsonLocal='{"eeisus":1,"eetrue":"TRUE","eefalse":"FALSE","eedec":".","eeth":",","eedecreg":["\\\\.","g"],"eethreg":[",","g"],"eecurrencyreg":["[$]","g"],"eepercentreg":["%","g"],"fmtdaynamesshort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"fmtdaynameslong":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"fmtmonthnamesshort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"fmtmonthnameslong":["January","February","March","April","May","June","July","August","September","October","November","December"],"fmtstrings":[":","/"]}';
function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};

function mod(n,d){return n-d*Math.floor(n/d);};

function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};

function sum2(arr,rt,rb){var sum=0;for(var ii=rt;ii<=rb;ii++){sum+=arr[ii]};return sum};function sum3(arr,rt,ct,rb,cb){var sum=0;for(var ii=rt;ii<=rb;ii++){for(var jj=ct;jj<=cb;jj++){sum+=arr[ii][jj]}};return sum};

function sumgeneral(cnt,vsum,vcnt,x){var sum=vsum;for(var ii=0;ii<x.length;ii++){sum+=sum3(x[ii][0],x[ii][1],x[ii][2],x[ii][3],x[ii][4]);};return sum;};

function average(cnt,vsum,vcnt,x){return sumgeneral(cnt,vsum,vcnt,x)/(cnt+vcnt);};

function n2s(x){return(x).toString();}

function b2s(b){return b?eetrue:eefalse;};

function v2s(v){switch(typeof v){case "number":if(myIsNaN(v)){return "NaN";};return n2s(v);case "string":return v;case "boolean":return b2s(v);case "object":if(v.constructor==Number){if(myIsNaN(v)){return v;};return n2s(v);};if(v.constructor==String){return v;};if(v.constructor==Boolean){return b2s(v);};return "NaN";default:return "NaN";}};

function eeparseFloat(str){str=String(str).replace(eedecreg,".");var res=parseFloat(str);if(isNaN(res)){return 0;}else{return res;}};

var near0RegExp=new RegExp("[.](.*0000000|.*9999999)");function eedisplayFloat(x){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x);if(near0RegExp.test(str)){x=round(x,8);str=String(x);}return str.replace(/\./g,eedec);}};

function eedisplayScientific(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x.toExponential(nd));return str.replace(/\./g,eedec);}};

function eedisplayFloatND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}}else{return res;}}};

function eedisplayPercent(x){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloat(x*100)+'%';}};

function eedisplayPercentND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloatND(x*100,nd)+'%';}}

function eedisplayFloatNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');var res2=eeinsertThousand(parts[0].toString());if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(res2+eedec+decimals);}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(res2+eedec+decimals);}}else{return(eeinsertThousand(res.toString()));}}};

function eedisplayPercentNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloatNDTh(x*100,nd)+'%';}}

function eeinsertThousand(whole){if(whole==""||whole.indexOf("e")>=0){return whole;}else{var minus_sign="";if(whole.charAt(0)=="-"){minus_sign="-";whole=whole.substring(1);};var res="";var str_length=whole.length-1;for(var ii=0;ii<=str_length;ii++){if(ii>0&&ii%3==0){res=eeth+res;};res=whole.charAt(str_length-ii)+res;};return minus_sign+res;}};

function eedatefmt(fmt,x){if(!isFinite(x))return Number.NaN;var padding=0;var tmp=0;var res="";var len=fmt.length;for(var ii=0;ii<len;ii++){if(fmt[ii]>31){res+=fmtstrings[fmt[ii]-32];}else{switch(fmt[ii]){case 2:res+=eemonth(x);break;case 3:tmp=eemonth(x);if(tmp<10){res+="0";};res+=tmp;break;case 4:res+=fmtmonthnamesshort[eemonth(x)-1];break;case 5:res+=fmtmonthnameslong[eemonth(x)-1];break;case 6:res+=eeday(x);break;case 7:tmp=eeday(x);if(tmp<10){res+="0";};res+=tmp;break;case 8:res+=fmtdaynamesshort[weekday(x,1)-1];break;case 9:res+=fmtdaynameslong[weekday(x,1)-1];break;case 10:tmp=year(x)%100;if(tmp<10){res+="0";};res+=tmp;break;case 11:res+=year(x);break;case 12:res+=hour(x);break;case 13:tmp=hour(x);if(tmp<10){res+="0";};res+=tmp;break;case 14:tmp=hour(x)%12;if(tmp==0){res+="12";}else{res+=tmp%12;};break;case 15:tmp=hour(x)%12;if(tmp==0){res+="12";}else{if(tmp<10){res+="0";};res+=tmp;};break;case 16:res+=minute(x);break;case 17:tmp=minute(x);if(tmp<10){res+="0";};res+=tmp;break;case 18:res+=second(x);break;case 19:tmp=second(x);
	if(tmp<10){res+="0";};res+=tmp;break;case 21:case 22:if(hour(x)<12){res+="AM";}else{res+="PM";};break;case 23:res+=eedisplayFloat(x);break;case 24:tmp=fmt[++ii];res+=eedisplayFloatND(x,tmp);break;case 25:tmp=fmt[++ii];res+=eedisplayFloatNDTh(x,tmp);break;case 26:res+=eedisplayPercent(x);break;case 27:tmp=fmt[++ii];res+=eedisplayPercentND(x,tmp);break;case 28:tmp=fmt[++ii];res+=eedisplayPercentNDTh(x,tmp);break;case 29:tmp=fmt[++ii];res+=eedisplayScientific(x,tmp);break;case 30:padding=fmt[++ii];tmp=hour(x)+Math.floor(x)*24;tmp=tmp.toString();if(tmp.length<padding){res+=('00000000000000').substring(0,padding-tmp.length);}res+=tmp;break;};};};return res;};

function eedatefmtv(fmt,x){if(x=="")return x;if(isFinite(x)){return eedatefmt(fmt,x)}else{return x}};

function leap_gregorian(year){return((year%4)==0)&&(!(((year%100)==0)&&((year%400)!=0)));}var GREGORIAN_EPOCH=1721425;function gregorian_to_jd(year,month,day){return(GREGORIAN_EPOCH-0)+(365*(year-1))+Math.floor((year-1)/4)+(-Math.floor((year-1)/100))+Math.floor((year-1)/400)+Math.floor((((367*month)-362)/12)+((month<=2)?0:(leap_gregorian(year)?-1:-2))+day);}function jd_to_gregorian(jd){var wjd,depoch,quadricent,dqc,cent,dcent,quad,dquad,yindex,year,yearday,leapadj;wjd=Math.floor(jd);depoch=wjd-GREGORIAN_EPOCH-1;quadricent=Math.floor(depoch/146097);dqc=mod(depoch,146097);cent=Math.floor(dqc/36524);dcent=mod(dqc,36524);quad=Math.floor(dcent/1461);dquad=mod(dcent,1461);yindex=Math.floor(dquad/365);year=(quadricent*400)+(cent*100)+(quad*4)+yindex;if(!((cent==4)||(yindex==4))){year++;}yearday=wjd-gregorian_to_jd(year,1,1);leapadj=((wjd<gregorian_to_jd(year,3,1))?0:(leap_gregorian(year)?1:2));var month=Math.floor((((yearday+leapadj)*12)+373)/367);var day=(wjd-gregorian_to_jd(year,month,1))+1;
	return new Array(year,month,day);}

var r99=new RegExp("[a-zA-Z]+|[0-9]+|:","g");function eeparsedate_keep_all(str){var res=eeparsedate(str,3);if(isNaN(res)){return 1;}else{return res;}};function eeparsedate_keep_allV(str){if(str=="")return str;var res=eeparsedate(str,3);if(isNaN(res)){return str;}else{return res;}};function eeparsedate_keep_time(str){var res=eeparsedate(str,2);if(isNaN(res)){return 0;}else{return res;}};function eeparsedate_keep_timeV(str){if(str=="")return str;var res=eeparsedate(str,2);if(isNaN(res)){return str;}else{return res;}};function eeparsedate(str,keep){var year=1900;var month=1;var day=1;var hour=0;var minutes=0;var seconds=0;var ptr=0;var current=0;var lookahead;var parts;parts=str.match(r99);var len=0;if(str.length>0&&parts!=null)len=parts.length;var time_parsed=false;if(len<1){return Number.NaN;}else{var cmd=1;if(len>1){lookahead=parts[1];if(lookahead==":"){cmd=2};};while(cmd>0&&ptr<len){if(cmd==1){current=parseFloat(parts[ptr]);if(isNaN(current))return Number.NaN;lookahead=parts[ptr+1];if(lookahead==":"){cmd=2;}else{if(current>1899){year=current;ptr++;current=parseFloat(parts[ptr++]);
	if(isNaN(current))return Number.NaN;month=current;current=parseFloat(parts[ptr++]);if(isNaN(current))return Number.NaN;day=current;cmd=3;}else if(current<32){if(eeisus){month=current;ptr++;current=parseFloat(parts[ptr++]);if(isNaN(current))return Number.NaN;if(current>1899){year=current;}else{day=current;current=parseFloat(parts[ptr++]);if(isNaN(current))return Number.NaN;year=current;if(year<30){year+=2000}};}else{day=current;ptr++;current=parseFloat(parts[ptr++]);if(isNaN(current))return Number.NaN;if(current>1899){year=current;month=day;day=1;}else{month=current;current=parseFloat(parts[ptr++]);if(isNaN(current))return Number.NaN;year=current;if(year<30){year+=2000}};}cmd=3;}else{return Number.NaN;};};}else if(cmd==2||cmd==3){if(cmd==3&&time_parsed){return Number.NaN;};time_parsed=true;current=parseFloat(parts[ptr++]);if(isNaN(current))return Number.NaN;hour=current;lookahead=parts[ptr++];if(lookahead==":"){if(ptr>=len){minutes=0;seconds=0;ptr=len;
}else{current=parseFloat(parts[ptr++]);if(isNaN(current))return Number.NaN;minutes=current;if(ptr+1>=len){seconds=0;ptr=len;}else{current=parts[ptr];if(current==":"){ptr++;current=parseFloat(parts[ptr++]);if(isNaN(current))return Number.NaN;seconds=current;}}}};cmd=1;}}};switch(keep){case 1:return date(year,month,day);case 2:return time(hour,minutes,seconds);case 3:return date(year,month,day)+time(hour,minutes,seconds);default:return Number.NaN;}};

function date(year,month,day){if(!isFinite(day)||!isFinite(month)||!isFinite(year))return Number.NaN;if(year<1900){year+=1900};if(year>9999)return Number.NaN;var adj_year=year;var adj_month=month;if(month>0){adj_year=year+Math.floor((month-1)/12);adj_month=((month-1)%12)+1;}else if(month<0){var tmp=Math.ceil((-month)/12);adj_year=year-tmp;adj_month=adj_month+tmp*12;}var res=Math.floor(gregorian_to_jd(adj_year,adj_month,day)-2415020);if(res>59)return res+1;return res;};

function eeday(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 0;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[2];};

function hour(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return Math.floor(res/3600);}

function minute(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return Math.floor(res/60)%60;};

function eemonth(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 1;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[1];};

function second(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return res%60;};

function time(hour,minute,second){if(!isFinite(second)||!isFinite(minute)||!isFinite(hour))return Number.NaN;return((second+minute*60+hour*3600)%86400)/86400;};

function weekday(serial_number,return_type){if(!isFinite(return_type)||!isFinite(serial_number))return Number.NaN;if(return_type<1||return_type>3)return Number.NaN;var res=Math.floor(serial_number+6)%7;switch(Math.floor(return_type)){case 1:return res+1;case 2:return(res+6)%7+1;case 3:return(res+6)%7;};return "hej";};

function year(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 1900;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[0];};
function submitClick()
{
	check_submit('nocaptcha');
}
var submitted=false;
function check_submit(objcaptcha)
{
	if (submitted)
	{
		alert('You have already submitted the form.  Please be patient.');
		submitted = false;
		return false
	}
	else
	{
		recalc_onclick('');
		submitted = true;
		document.formc.submit();
		return true
	}
}
function printClick(){
	recalc_onclick('');
	document.getElementById('printallcss').href='';
	window.print();
}
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
		var next_focus_elem = sheetSelector.find(inputSelector).filter('[data-sheet='+ cur_sheet +'][data-row='+ (key == 38 ? prev_row : next_row) + '][data-col='+ cur_col + ']');
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
	evt.preventDefault ? evt.preventDefault(): evt.returnValue = false;
}

function inDate(butID) {
	var dateFLD = (butID +"Date")
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
