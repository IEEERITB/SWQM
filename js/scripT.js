window.onload = function(){

monthA= ["Jan","Feb", "Mar", "Apr","Jun","July","Aug","Sep","Oct","Nov","Dec"];
var dateObj = new Date();
var month = dateObj.getUTCMonth();
var year = dateObj.getUTCFullYear();
var month0 = monthA[month]+" "+year;
var month1 = monthA[month-1]+" "+year;
var month2 = monthA[month-2]+" "+year;

document.getElementById("month2").innerHTML=month2;
document.getElementById("month1").innerHTML=month1;
document.getElementById("month0").innerHTML=month0;
 var usage =0, total=0, amount=0;
setInterval(function(){
    usage = Math.floor(Math.random() * 6);
    total = total + usage;
    if(total <= 4000){amount = total*10;}
    else if(total >4000 && total<=6000){amount = 4000*10+(total-4000)*30;}
    else{amount = 4000*10+2000*30+(total-6000)*50;}
    document.getElementById("usageTotal").innerHTML = total;
    document.getElementById("usage").innerHTML = usage;
    document.getElementById("amount").innerHTML = amount;
},1000);

function myFunction(val) {
    var x = document.getElementById(val);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

setInterval(function() {
	var d = new Date();
	document.getElementById("date").innerHTML=d;
}, 1000);

var pH, turb, temp, diss, cond;
var name, data;


setInterval(function() {

	pH = Math.random().toFixed(5);
	turb = Math.random().toFixed(5);
	temp = Math.random().toFixed(5);
	diss = Math.random().toFixed(5);
	cond = Math.random().toFixed(5);
	document.getElementById("pH").innerHTML = pH;
	document.getElementById("turb").innerHTML = turb;
	document.getElementById("temp").innerHTML = temp;
	document.getElementById("diss").innerHTML = diss;
	document.getElementById("cond").innerHTML = cond;
    
      var today = new Date();
	  var h = today.getHours();
	  var m = today.getMinutes();
	  var s = today.getSeconds();
/*
var charts = [],
	  $containers = $('#trellis td'),

	  datasets = [{
        name: h + ":" + m + ":" + s,
        data: [pH, turb, temp, diss, cond]}];

        var i =1;
      charts.push(new Highcharts.Chart({

        chart: {
            renderTo: $containers[i],
            type: 'bar',
            marginLeft: i === 0 ? 100 : 10
        },

        title: {
            text: dataset.name,
            align: 'left',
            x: i === 0 ? 90 : 0
        },

        credits: {
            enabled: false
        },

        xAxis: {
            categories: ['pH', 'Turb', 'Temp', 'DO', 'Cond'],
            labels: {
                enabled: i === 0
            }
        },

        yAxis: {
            allowDecimals: false,
            title: {
                text: null
            },
            min: 0,
            max: 10
        },


        legend: {
            enabled: false
        },

        series: [dataset]

    }));  */
	
}, 5000);

}

/*	if(pH >0.9 && pH <0.3){
		document.getElementById("pHG").classList.remove('glyphicon-ok');
		document.getElementById("pHG").classList.add('glyphicon-remove');
	}
	if(turb >0.9 && turb <0.3){
		document.getElementById("turbG").classList.remove('glyphicon-ok');
		document.getElementById("turbG").classList.add('glyphicon-remove');
	}
	if(temp >0.9 && temp <0.3){
		document.getElementById("tempG").classList.remove('glyphicon-ok');
		document.getElementById("tempG").classList.add('glyphicon-remove');
	}
	if(diss >0.9 && diss <0.3){
		document.getElementById("dissG").classList.remove('glyphicon-ok');
		document.getElementById("dissG").classList.add('glyphicon-remove');
	}
	if(cond >0.9 && cond <0.3){
		document.getElementById("condG").classList.remove('glyphicon-ok');
		document.getElementById("condG").classList.add('glyphicon-remove');
	}
*/