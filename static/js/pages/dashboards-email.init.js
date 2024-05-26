function rgbToHex(e){const t=e.match(/\d+/g);if(3===t.length)var[a,r,o]=t.map(Number);return a=Math.max(0,Math.min(255,a)),r=Math.max(0,Math.min(255,r)),o=Math.max(0,Math.min(255,o)),`#${a.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}`.toUpperCase()}function getChartColorsArray(e){const t=document.getElementById(e);if(t){const a=t.dataset.chartColors;if(a)return JSON.parse(a).map((e=>{const t=e.replace(/\s/g,"");if(t.includes("#"))return t;{const e=document.querySelector(t);if(e)return window.getComputedStyle(e).backgroundColor||t;{const e=document.createElement("div");e.className=t,document.body.appendChild(e);const a=window.getComputedStyle(e);return(a.backgroundColor.includes("#")?a.backgroundColor:rgbToHex(a.backgroundColor))||t}}}));console.warn(`chart-colors attribute not found on: ${e}`)}}var options={series:[{name:"Sent",data:[14,20,10,5,11,30,24,26,33,38,34,27,22]}],chart:{id:"area-datetime",type:"line",height:80,sparkline:{enabled:!0},zoom:{autoScaleYaxis:!0}},colors:getChartColorsArray("sentEmail"),stroke:{width:2,curve:"smooth"},dataLabels:{enabled:!1}};(chart=new ApexCharts(document.querySelector("#sentEmail"),options)).render(),options={series:[{name:"Open Rate",data:[38,34,27,22,14,20,10,5,11,30,24,26,33]}],chart:{id:"area-datetime",type:"line",height:80,sparkline:{enabled:!0},zoom:{autoScaleYaxis:!0}},colors:getChartColorsArray("openRate"),stroke:{width:2,curve:"smooth"},dataLabels:{enabled:!1}},(chart=new ApexCharts(document.querySelector("#openRate"),options)).render(),options={series:[{name:"Click Rate",data:[30,24,14,20,10,5,11,26,33,38,34,27,22]}],chart:{id:"area-datetime",type:"line",height:80,sparkline:{enabled:!0},zoom:{autoScaleYaxis:!0}},colors:getChartColorsArray("clickRate"),stroke:{width:2,curve:"smooth"},dataLabels:{enabled:!1}},(chart=new ApexCharts(document.querySelector("#clickRate"),options)).render(),options={series:[{name:"Click Through",data:[11,30,24,26,33,38,14,20,10,5,34,27,22]}],chart:{id:"area-datetime",type:"line",height:80,sparkline:{enabled:!0},zoom:{autoScaleYaxis:!0}},colors:getChartColorsArray("clickThrough"),stroke:{width:2,curve:"smooth"},dataLabels:{enabled:!1}},(chart=new ApexCharts(document.querySelector("#clickThrough"),options)).render(),options={series:[{name:"Delivered Rate",data:[11,30,24,26,33,38,14,20,10,9,34,27,22]}],chart:{id:"area-datetime",type:"bar",height:80,sparkline:{enabled:!0},zoom:{autoScaleYaxis:!0}},colors:getChartColorsArray("deliveredRate"),stroke:{width:1,curve:"smooth"},dataLabels:{enabled:!1}},(chart=new ApexCharts(document.querySelector("#deliveredRate"),options)).render(),options={series:[{name:"Hard Bounce Rate",data:[14,20,10,5,11,30,24,26,33,38,34,27,22]}],chart:{id:"area-datetime",type:"bar",height:80,sparkline:{enabled:!0},zoom:{autoScaleYaxis:!0}},colors:getChartColorsArray("hardBounceRate"),stroke:{width:2,curve:"smooth"},dataLabels:{enabled:!1}},(chart=new ApexCharts(document.querySelector("#hardBounceRate"),options)).render(),options={series:[{name:"Unsubscribed Rate",data:[38,34,27,22,14,20,10,5,11,30,24,26,33]}],chart:{id:"area-datetime",type:"bar",height:80,sparkline:{enabled:!0},zoom:{autoScaleYaxis:!0}},colors:getChartColorsArray("unsubscribedRate"),stroke:{width:2,curve:"smooth"},dataLabels:{enabled:!1}},(chart=new ApexCharts(document.querySelector("#unsubscribedRate"),options)).render(),options={series:[{name:"Spam Report Rate",data:[30,24,14,20,10,13,11,26,33,38,34,27,22]}],chart:{id:"area-datetime",type:"bar",height:80,sparkline:{enabled:!0},zoom:{autoScaleYaxis:!0}},colors:getChartColorsArray("spanReportRate"),stroke:{width:2,curve:"smooth"},dataLabels:{enabled:!1}},(chart=new ApexCharts(document.querySelector("#spanReportRate"),options)).render();var chart,dataLabelOptions={series:[{name:"Open Rate",data:[28,29,31,36,32,32,33,40,37]},{name:"Click Rate",data:[26,41,40,51,49,62,69,52,58]}],chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:getChartColorsArray("emailDataChart"),stroke:{curve:"smooth",width:3},legend:{show:!0},markers:{size:5,hover:{sizeOffset:1}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}};(chart=new ApexCharts(document.querySelector("#emailDataChart"),dataLabelOptions)).render(),options={series:[44,55,67],chart:{height:410,type:"radialBar"},legend:{show:!0,position:"bottom",horizontalAlign:"center"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return 249}}},track:{margin:14}}},colors:getChartColorsArray("emailMarketingChart"),labels:["Sent","Opened","Not Opened"]},(chart=new ApexCharts(document.querySelector("#emailMarketingChart"),options)).render();