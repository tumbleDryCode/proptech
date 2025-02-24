var tmpRegionObj = {};
var tmpRegionArr = [];
var tmpCountryFid = "u_country";
var tmpRegionFid = "u_region";
var tmpLocltyFid = "u_location";

var tmpCountryField = document.getElementById(tmpCountryFid);
var tmpRegionField = document.getElementById(tmpRegionFid);
var tmpLocltyField = document.getElementById(tmpLocltyFid);
var tmpTCountryFid = "tmp_u_country";
var tmpTRegionFid = "tmp_u_region";
var tmpTLocltyFid = "tmp_u_location";
var tmpTCountryField = document.getElementById(tmpTCountryFid);
var tmpTRegionField = document.getElementById(tmpTRegionFid);
var tmpTLocltyField = document.getElementById(tmpTLocltyFid);




switch(pid) {
    case "aa-edit-prop":
        tmpCountryFid = "country";
        tmpRegionFid = "state";
        tmpLocltyFid = "city";
        tmpCountryField = document.getElementById(tmpCountryFid);
        tmpRegionField = document.getElementById(tmpRegionFid);
        tmpLocltyField = document.getElementById(tmpLocltyFid);
        tmpTCountryFid = "tmp_country";
        tmpTRegionFid = "tmp_state";
        tmpTLocltyFid = "tmp_city";
        tmpTCountryField = document.getElementById(tmpTCountryFid);
        tmpTRegionField = document.getElementById(tmpTRegionFid);
        tmpTLocltyField = document.getElementById(tmpTLocltyFid);
        var tmpLocLatFid = "ploclat";
        var tmpLocLngFid = "ploclng";
        var tmpTLocLatFid = "tmp_ploclat";
        var tmpTLocLngFid = "tmp_ploclng";
        var tmpLocLatField = document.getElementById(tmpLocLatFid);
        var tmpLocLngField = document.getElementById(tmpLocLngFid);
        var tmpTLocLatField = document.getElementById(tmpTLocLatFid);
        var tmpTLocLngField = document.getElementById(tmpTLocLngFid);
        
        break;
        default:
            tmpCountryField = document.getElementById(tmpCountryFid);
            tmpRegionField = document.getElementById(tmpRegionFid);
            tmpLocltyField = document.getElementById(tmpLocltyFid);
            var tmpLocLatFid = "u_loclat";
            var tmpLocLngFid = "u_loclng";
            var tmpTLocLatFid = "tmp_u_loclat";
            var tmpTLocLngFid = "tmp_u_loclng";
            var tmpLocLatField = document.getElementById(tmpLocLatFid);
            var tmpLocLngField = document.getElementById(tmpLocLngFid);
            var tmpTLocLatField = document.getElementById(tmpTLocLatFid);
            var tmpTLocLngField = document.getElementById(tmpTLocLngFid);
        break;
}


var tLocCountryObj = {
    "Afghanistan":{
       "latitude":"33.93911",
       "longitude":"67.709953"
    },
    "Albania":{
       "latitude":"41.153332",
       "longitude":"20.168331"
    },
    "Algeria":{
       "latitude":"28.033886",
       "longitude":"1.659626"
    },
    "Andorra":{
       "latitude":"42.546245",
       "longitude":"1.601554"
    },
    "Angola":{
       "latitude":"-11.202692",
       "longitude":"17.873887"
    },
    "Antigua and Barbuda":{
       "latitude":"17.060816",
       "longitude":"-61.796428"
    },
    "Argentina":{
       "latitude":"-38.416097",
       "longitude":"-63.616672"
    },
    "Armenia":{
       "latitude":"40.069099",
       "longitude":"45.038189"
    },
    "Australia":{
       "latitude":"-25.274398",
       "longitude":"133.775136"
    },
    "Austria":{
       "latitude":"47.516231",
       "longitude":"14.550072"
    },
    "Azerbaijan":{
       "latitude":"40.143105",
       "longitude":"47.576927"
    },
    "Bahamas":{
       "latitude":"25.03428",
       "longitude":"-77.39628"
    },
    "Bahrain":{
       "latitude":"25.930414",
       "longitude":"50.637772"
    },
    "Bangladesh":{
       "latitude":"23.684994",
       "longitude":"90.356331"
    },
    "Barbados":{
       "latitude":"13.193887",
       "longitude":"-59.543198"
    },
    "Belarus":{
       "latitude":"53.709807",
       "longitude":"27.953389"
    },
    "Belgium":{
       "latitude":"50.503887",
       "longitude":"4.469936"
    },
    "Belize":{
       "latitude":"17.189877",
       "longitude":"-88.49765"
    },
    "Benin":{
       "latitude":"9.30769",
       "longitude":"2.315834"
    },
    "Bhutan":{
       "latitude":"27.514162",
       "longitude":"90.433601"
    },
    "Bolivia":{
       "latitude":"-16.290154",
       "longitude":"-63.588653"
    },
    "Bosnia and Herzegovina":{
       "latitude":"43.915886",
       "longitude":"17.679076"
    },
    "Botswana":{
       "latitude":"-22.328474",
       "longitude":"24.684866"
    },
    "Brazil":{
       "latitude":"-14.235004",
       "longitude":"-51.92528"
    },
    "Brunei":{
       "latitude":"4.535277",
       "longitude":"114.727669"
    },
    "Bulgaria":{
       "latitude":"42.733883",
       "longitude":"25.48583"
    },
    "Burkina Faso":{
       "latitude":"12.238333",
       "longitude":"-1.561593"
    },
    "Burundi":{
       "latitude":"-3.373056",
       "longitude":"29.918886"
    },
    "Cambodia":{
       "latitude":"12.565679",
       "longitude":"104.990963"
    },
    "Cameroon":{
       "latitude":"7.369722",
       "longitude":"12.354722"
    },
    "Canada":{
       "latitude":"56.130366",
       "longitude":"-106.346771"
    },
    "Cape Verde":{
       "latitude":"16.002082",
       "longitude":"-24.013197"
    },
    "Central African Republic":{
       "latitude":"6.611111",
       "longitude":"20.939444"
    },
    "Chad":{
       "latitude":"15.454166",
       "longitude":"18.732207"
    },
    "Chile":{
       "latitude":"-35.675147",
       "longitude":"-71.542969"
    },
    "China":{
       "latitude":"35.86166",
       "longitude":"104.195397"
    },
    "Colombia":{
       "latitude":"4.570868",
       "longitude":"-74.297333"
    },
    "Comoros":{
       "latitude":"-11.875001",
       "longitude":"43.872219"
    },
    "Congo":{
       "latitude":"-0.228021",
       "longitude":"15.827659"
    },
    "Costa Rica":{
       "latitude":"9.748917",
       "longitude":"-83.753428"
    },
    "Cote d'Ivoire":{
       "latitude":"7.539989",
       "longitude":"-5.54708"
    },
    "Croatia":{
       "latitude":"45.1",
       "longitude":"15.2"
    },
    "Cuba":{
       "latitude":"21.521757",
       "longitude":"-77.781167"
    },
    "Cyprus":{
       "latitude":"35.126413",
       "longitude":"33.429859"
    },
    "Czech Republic":{
       "latitude":"49.817492",
       "longitude":"15.472962"
    },
    "Denmark":{
       "latitude":"56.26392",
       "longitude":"9.501785"
    },
    "Djibouti":{
       "latitude":"11.825138",
       "longitude":"42.590275"
    },
    "Dominica":{
       "latitude":"15.414999",
       "longitude":"-61.370976"
    },
    "Dominican Republic":{
       "latitude":"18.735693",
       "longitude":"-70.162651"
    },
    "East Timor":{
       "latitude":"-8.874217",
       "longitude":"125.727539"
    },
    "Ecuador":{
       "latitude":"-1.831239",
       "longitude":"-78.183406"
    },
    "Egypt":{
       "latitude":"26.820553",
       "longitude":"30.802498"
    },
    "El Salvador":{
       "latitude":"13.794185",
       "longitude":"-88.89653"
    },
    "Equatorial Guinea":{
       "latitude":"1.650801",
       "longitude":"10.267895"
    },
    "Eritrea":{
       "latitude":"15.179384",
       "longitude":"39.782334"
    },
    "Estonia":{
       "latitude":"58.595272",
       "longitude":"25.013607"
    },
    "Ethiopia":{
       "latitude":"9.145",
       "longitude":"40.489673"
    },
    "Fiji":{
       "latitude":"-16.578193",
       "longitude":"179.414413"
    },
    "Finland":{
       "latitude":"61.92411",
       "longitude":"25.748151"
    },
    "France":{
       "latitude":"46.603354",
       "longitude":"1.888334"
    },
    "Gabon":{
       "latitude":"-0.803689",
       "longitude":"11.609444"
    },
    "Gambia":{
       "latitude":"13.443182",
       "longitude":"-15.310139"
    },
    "Georgia":{
       "latitude":"42.315407",
       "longitude":"43.356892"
    },
    "Germany":{
       "latitude":"51.165691",
       "longitude":"10.451526"
    },
    "Ghana":{
       "latitude":"7.946527",
       "longitude":"-1.023194"
    },
    "Greece":{
       "latitude":"39.074208",
       "longitude":"21.824312"
    },
    "Grenada":{
       "latitude":"12.262776",
       "longitude":"-61.604171"
    },
    "Guatemala":{
       "latitude":"15.783471",
       "longitude":"-90.230759"
    },
    "Guinea":{
       "latitude":"9.945587",
       "longitude":"-9.696645"
    },
    "Guinea-Bissau":{
       "latitude":"11.803749",
       "longitude":"-15.180413"
    },
    "Guyana":{
       "latitude":"4.860416",
       "longitude":"-58.93018"
    },
    "Haiti":{
       "latitude":"18.971187",
       "longitude":"-72.285215"
    },
    "Honduras":{
       "latitude":"15.199999",
       "longitude":"-86.241905"
    },
    "Hungary":{
       "latitude":"47.162494",
       "longitude":"19.503304"
    },
    "Iceland":{
       "latitude":"64.963051",
       "longitude":"-19.020835"
    },
    "India":{
       "latitude":"20.593684",
       "longitude":"78.96288"
    },
    "Indonesia":{
       "latitude":"-0.789275",
       "longitude":"113.921327"
    },
    "Iran":{
       "latitude":"32.427908",
       "longitude":"53.688046"
    },
    "Iraq":{
       "latitude":"33.223191",
       "longitude":"43.679291"
    },
    "Ireland":{
       "latitude":"53.41291",
       "longitude":"-8.24389"
    },
    "Israel":{
       "latitude":"31.046051",
       "lomgitude":"34.851612"
    },
    "Italy":{
       "latitude":"41.87194",
       "longitude":"12.56738"
    },
    "Jamaica":{
       "latitude":"18.109581",
       "longitude":"-77.297508"
    },
    "Japan":{
       "latitude":"36.204824",
       "longitude":"138.252924"
    },
    "Jordan":{
       "latitude":"30.585164",
       "longitude":"36.238414"
    },
    "Kazakhstan":{
       "latitude":"48.019573",
       "longitude":"66.923684"
    },
    "Kenya":{
       "latitude":"-0.023559",
       "longitude":"37.906193"
    },
    "Kiribati":{
       "latitude":"-3.370417",
       "longitude":"-168.734039"
    },
    "Korea, North":{
       "latitude":"40.339852",
       "longitude":"127.510093"
    },
    "Korea, South":{
       "latitude":"35.907757",
       "longitude":"127.766922"
    },
    "Kosovo":{
       "latitude":"42.602636",
       "longitude":"20.902977"
    },
    "Kuwait":{
       "latitude":"29.31166",
       "longitude":"47.481766"
    },
    "Kyrgyzstan":{
       "latitude":"41.20438",
       "longitude":"74.766098"
    },
    "Laos":{
       "latitude":"19.85627",
       "longitude":"102.495496"
    },
    "Latvia":{
       "latitude":"56.879635",
       "longitude":"24.603189"
    },
    "Lebanon":{
       "latitude":"33.854721",
       "longitude":"35.862285"
    },
    "Lesotho":{
       "latitude":"-29.609988",
       "longitude":"28.233608"
    },
    "Liberia":{
       "latitude":"6.428055",
       "longitude":"-9.429499"
    },
    "Libya":{
       "latitude":"26.3351",
       "longitude":"17.228331"
    },
    "Liechtenstein":{
       "latitude":"47.166",
       "longitude":"9.555373"
    },
    "Lithuania":{
       "latitude":"55.169438",
       "longitude":"23.881275"
    },
    "Luxembourg":{
       "latitude":"49.815273",
       "longitude":"6.129583"
    },
    "Macedonia":{
       "latitude":"41.608635",
       "longitude":"21.745275"
    },
    "Madagascar":{
       "latitude":"-18.766947",
       "longitude":"46.869107"
    },
    "Malawi":{
       "latitude":"-13.254308",
       "longitude":"34.301525"
    },
    "Malaysia":{
       "latitude":"4.210484",
       "longitude":"101.975766"
    },
    "Maldives":{
       "latitude":"3.202778",
       "longitude":"73.22068"
    },
    "Mali":{
       "latitude":"17.570692",
       "longitude":"-3.996166"
    },
    "Malta":{
       "latitude":"35.937496",
       "longitude":"14.375416"
    },
    "Marshall Islands":{
       "latitude":"7.131474",
       "longitude":"171.184478"
    },
    "Mauritania":{
       "latitude":"21.00789",
       "longitude":"-10.940835"
    },
    "Mauritius":{
       "latitude":"-20.348404",
       "longitude":"57.552152"
    },
    "Mexico":{
       "latitude":"23.634501",
       "longitude":"-102.552784"
    },
    "Micronesia":{
       "latitude":"7.425554",
       "longitude":"150.550812"
    },
    "Moldova":{
       "latitude":"47.411631",
       "longitude":"28.369885"
    },
    "Monaco":{
       "latitude":"43.750298",
       "longitude":"7.412841"
    },
    "Mongolia":{
       "latitude":"46.862496",
       "longitude":"103.846656"
    },
    "Montenegro":{
       "latitude":"42.708678",
       "longitude":"19.37439"
    },
    "Morocco":{
       "latitude":"31.791702",
       "longitude":"-7.09262"
    },
    "Mozambique":{
       "latitude":"-18.665695",
       "longitude":"35.529562"
    },
    "Myanmar":{
       "latitude":"21.913965",
       "longitude":"95.956223"
    },
    "Namibia":{
       "latitude":"-22.95764",
       "longitude":"18.49041"
    },
    "Nauru":{
       "latitude":"-0.522778",
       "longitude":"166.931503"
    },
    "Nepal":{
       "latitude":"28.394857",
       "longitude":"84.124008"
    },
    "Netherlands":{
       "latitude":"52.132633",
       "longitude":"5.291266"
    },
    "New Zealand":{
       "latitude":"-40.900557",
       "longitude":"174.885971"
    },
    "Nicaragua":{
       "latitude":"12.865416",
       "longitude":"-85.207229"
    },
    "Niger":{
       "latitude":"17.607789",
       "longitude":"8.081666"
    },
    "Nigeria":{
       "latitude":"9.081999",
       "longitude":"8.675277"
    },
    "Norway":{
       "latitude":"60.472024",
       "longitude":"8.468946"
    },
    "Oman":{
       "latitude":"21.512583",
       "longitude":"55.923255"
    },
    "Pakistan":{
       "latitude":"30.375321",
       "longitude":"69.345116"
    },
    "Palau":{
       "latitude":"7.51498",
       "longitude":"134.58252"
    },
    "Panama":{
       "latitude":"8.537981",
       "longitude":"-80.782127"
    },
    "Papua New Guinea":{
       "latitude":"-6.314993",
       "longitude":"143.95555"
    },
    "Paraguay":{
       "latitude":"-23.442503",
       "longitude":"-58.443832"
    },
    "Peru":{
       "latitude":"-9.189967",
       "longitude":"-75.015152"
    },
    "Philippines":{
       "latitude":"12.879721",
       "longitude":"121.774017"
    },
    "Poland":{
       "latitude":"51.919438",
       "longitude":"19.145136"
    },
    "Portugal":{
       "latitude":"39.399872",
       "longitude":"-8.224454"
    },
    "Qatar":{
       "latitude":"25.354826",
       "longitude":"51.183884"
    },
    "Romania":{
       "latitude":"45.943161",
       "longitude":"24.96676"
    },
    "Russia":{
       "latitude":"61.52401",
       "longitude":"105.318756"
    },
    "Rwanda":{
       "latitude":"-1.940278",
       "longitude":"29.873888"
    },
    "Saint Kitts and Nevis":{
       "latitude":"17.357822",
       "longitude":"-62.782998"
    },
    "Saint Lucia":{
       "latitude":"13.909444",
       "longitude":"-60.978893"
    },
    "Saint Vincent and the Grenadines":{
       "latitude":"12.984305",
       "longitude":"-61.287228"
    },
    "Samoa":{
       "latitude":"-13.759029",
       "longitude":"-172.104629"
    },
    "San Marino":{
       "latitude":"43.94236",
       "longitude":"12.457777"
    },
    "Sao Tome and Principe":{
       "latitude":"0.18636",
       "longitude":"6.613081"
    },
    "Saudi Arabia":{
       "latitude":"23.885942",
       "longitude":"45.079162"
    },
    "Senegal":{
       "latitude":"14.497401",
       "longitude":"-14.452362"
    },
    "Serbia":{
       "latitude":"44.016521",
       "longitude":"21.005859"
    },
    "Seychelles":{
       "latitude":"-4.679574",
       "longitude":"55.491977"
    },
    "Sierra Leone":{
       "latitude":"8.460555",
       "longitude":"-11.779889"
    },
    "Singapore":{
       "latitude":"1.352083",
       "longitude":"103.819836"
    },
    "Slovakia":{
       "latitude":"48.669026",
       "longitude":"19.699024"
    },
    "Slovenia":{
       "latitude":"46.151241",
       "longitude":"14.995463"
    },
    "Solomon Islands":{
       "latitude":"-9.64571",
       "longitude":"160.156194"
    },
    "Somalia":{
       "latitude":"5.152149",
       "longitude":"46.199616"
    },
    "South Africa":{
       "latitude":"-30.559482",
       "longitude":"22.937506"
    },
    "South Sudan":{
       "latitude":"6.876991",
       "longitude":"31.306978"
    },
    "Spain":{
       "latitude":"40.463667",
       "longitude":"-3.74922"
    },
    "Sri Lanka":{
       "latitude":"7.873054",
       "longitude":"80.771797"
    },
    "Sudan":{
       "latitude":"12.862807",
       "longitude":"30.217636"
    },
    "Suriname":{
       "latitude":"3.919305",
       "longitude":"-56.027783"
    },
    "Swaziland":{
       "latitude":"-26.522503",
       "longitude":"31.465866"
    },
    "Sweden":{
       "latitude":"60.128161",
       "longitude":"18.643501"
    },
    "Switzerland":{
       "latitude":"46.818188",
       "longitude":"8.227512"
    },
    "Syria":{
       "latitude":"34.802075",
       "longitude":"38.996815"
    },
    "Taiwan":{
       "latitude":"23.69781",
       "longitude":"120.960515"
    },
    "Tajikistan":{
       "latitude":"38.861034",
       "longitude":"71.276093"
    },
    "Tanzania":{
       "latitude":"-6.369028",
       "longitude":"34.888822"
    },
    "Thailand":{
       "latitude":"15.870032",
       "longitude":"100.992541"
    },
    "Togo":{
       "latitude":"8.619543",
       "longitude":"0.824782"
    },
    "Tonga":{
       "latitude":"-21.178986",
       "longitude":"-175.198242"
    },
    "Trinidad and Tobago":{
       "latitude":"10.691803",
       "longitude":"-61.222503"
    },
    "Tunisia":{
       "latitude":"33.886917",
       "longitude":"9.537499"
    },
    "Turkey":{
       "latitude":"38.963745",
       "longitude":"35.243322"
    },
    "Turkmenistan":{
       "latitude":"38.969719",
       "longitude":"59.556278"
    },
    "Tuvalu":{
       "latitude":"-7.109535",
       "longitude":"177.64933"
    },
    "Uganda":{
       "latitude":"1.373333",
       "longitude":"32.290275"
    },
    "Ukraine":{
       "latitude":"48.379433",
       "longitude":"31.16558"
    },
    "United Arab Emirates":{
       "latitude":"23.424076",
       "longitude":"53.847818"
    },
    "United Kingdom":{
       "latitude":"55.378051",
       "longitude":"-3.435973"
    },
    "United States":{
       "latitude":"37.09024",
       "longitude":"-95.712891"
    },
    "Uruguay":{
       "latitude":"-32.522779",
       "longitude":"-55.765835"
    },
    "Uzbekistan":{
       "latitude":"41.377491",
       "longitude":"64.585262"
    },
    "Vanuatu":{
       "latitude":"-15.376706",
       "longitude":"166.959158"
    },
    "Vatican City":{
       "latitude":"41.902916",
       "longitude":"12.453389"
    },
    "Venezuela":{
       "latitude":"6.42375",
       "longitude":"-66.58973"
    },
    "Vietnam":{
       "latitude":"14.058324",
       "longitude":"108.277199"
    },
    "Yemen":{
       "latitude":"15.552727",
       "longitude":"48.516388"
    },
    "Zambia":{
       "latitude":"-13.133897",
       "longitude":"27.849332"
    },
    "Zimbabwe":{
       "latitude":"-19.015438",
       "longitude":"29.154857"
    }
 };

var tLocCccodeObj = {
    "Afghanistan": {
        "ccode": "AF"
    },
    "Albania": {
        "ccode": "AL"
    },
    "Algeria": {
        "ccode": "DZ"
    },
    "Andorra": {
        "ccode": "AD"
    },
    "Angola": {
        "ccode": "AO"
    },
    "Antigua and Barbuda": {
        "ccode": "AG"
    },
    "Argentina": {
        "ccode": "AR"
    },
    "Armenia": {
        "ccode": "AM"
    },
    "Australia": {
        "ccode": "AU"
    },
    "Austria": {
        "ccode": "AT"
    },
    "Azerbaijan": {
        "ccode": "AZ"
    },
    "Bahamas": {
        "ccode": "BS"
    },
    "Bahrain": {
        "ccode": "BH"
    },
    "Bangladesh": {
        "ccode": "BD"
    },
    "Barbados": {
        "ccode": "BB"
    },
    "Belarus": {
        "ccode": "BY"
    },
    "Belgium": {
        "ccode": "BE"
    },
    "Belize": {
        "ccode": "BZ"
    },
    "Benin": {
        "ccode": "BJ"
    },
    "Bhutan": {
        "ccode": "BT"
    },
    "Bolivia": {
        "ccode": "BO"
    },
    "Bosnia and Herzegovina": {
        "ccode": "BA"
    },
    "Botswana": {
        "ccode": "BW"
    },
    "Brazil": {
        "ccode": "BR"
    },
    "Brunei": {
        "ccode": "BN"
    },
    "Bulgaria": {
        "ccode": "BG"
    },
    "Burkina Faso": {
        "ccode": "BF"
    },
    "Burundi": {
        "ccode": "BI"
    },
    "Cabo Verde": {
        "ccode": "CV"
    },
    "Cambodia": {
        "ccode": "KH"
    },
    "Cameroon": {
        "ccode": "CM"
    },
    "Canada": {
        "ccode": "CA"
    },
    "Central African Republic": {
        "ccode": "CF"
    },
    "Chad": {
        "ccode": "TD"
    },
    "Chile": {
        "ccode": "CL"
    },
    "China": {
        "ccode": "CN"
    },
    "Colombia": {
        "ccode": "CO"
    },
    "Comoros": {
        "ccode": "KM"
    },
    "Congo (Congo-Brazzaville)": {
        "ccode": "CG"
    },
    "Costa Rica": {
        "ccode": "CR"
    },
    "Croatia": {
        "ccode": "HR"
    },
    "Cuba": {
        "ccode": "CU"
    },
    "Cyprus": {
        "ccode": "CY"
    },
    "Czechia": {
        "ccode": "CZ"
    },
    "Democratic Republic of the Congo": {
        "ccode": "CD"
    },
    "Denmark": {
        "ccode": "DK"
    },
    "Djibouti": {
        "ccode": "DJ"
    },
    "Dominica": {
        "ccode": "DM"
    },
    "Dominican Republic": {
        "ccode": "DO"
    },
    "Ecuador": {
        "ccode": "EC"
    },
    "Egypt": {
        "ccode": "EG"
    },
    "El Salvador": {
        "ccode": "SV"
    },
    "Equatorial Guinea": {
        "ccode": "GQ"
    },
    "Eritrea": {
        "ccode": "ER"
    },
    "Estonia": {
        "ccode": "EE"
    },
    "Eswatini": {
        "ccode": "SZ"
    },
    "Ethiopia": {
        "ccode": "ET"
    },
    "Fiji": {
        "ccode": "FJ"
    },
    "Finland": {
        "ccode": "FI"
    },
    "France": {
        "ccode": "FR"
    },
    "Gabon": {
        "ccode": "GA"
    },
    "Gambia": {
        "ccode": "GM"
    },
    "Georgia": {
        "ccode": "GE"
    },
    "Germany": {
        "ccode": "DE"
    },
    "Ghana": {
        "ccode": "GH"
    },
    "Greece": {
        "ccode": "GR"
    },
    "Grenada": {
        "ccode": "GD"
    },
    "Guatemala": {
        "ccode": "GT"
    },
    "Guinea": {
        "ccode": "GN"
    },
    "Guinea-Bissau": {
        "ccode": "GW"
    },
    "Guyana": {
        "ccode": "GY"
    },
    "Haiti": {
        "ccode": "HT"
    },
    "Holy See": {
        "ccode": "VA"
    },
    "Honduras": {
        "ccode": "HN"
    },
    "Hungary": {
        "ccode": "HU"
    },
    "Iceland": {
        "ccode": "IS"
    },
    "India": {
        "ccode": "IN"
    },
    "Indonesia": {
        "ccode": "ID"
    },
    "Iran": {
        "ccode": "IR"
    },
    "Iraq": {
        "ccode": "IQ"
    },
    "Ireland": {
        "ccode": "IE"
    },
    "Israel": {
        "ccode": "IL"
    },
    "Italy": {
        "ccode": "IT"
    },
    "Jamaica": {
        "ccode": "JM"
    },
    "Japan": {
        "ccode": "JP"
    },
    "Jordan": {
        "ccode": "JO"
    },
    "Kazakhstan": {
        "ccode": "KZ"
    },
    "Kenya": {
        "ccode": "KE"
    },
    "Kiribati": {
        "ccode": "KI"
    },
    "Kuwait": {
        "ccode": "KW"
    },
    "Kyrgyzstan": {
        "ccode": "KG"
    },
    "Laos": {
        "ccode": "LA"
    },
    "Latvia": {
        "ccode": "LV"
    },
    "Lebanon": {
        "ccode": "LB"
    },
    "Lesotho": {
        "ccode": "LS"
    },
    "Liberia": {
        "ccode": "LR"
    },
    "Libya": {
        "ccode": "LY"
    },
    "Liechtenstein": {
        "ccode": "LI"
    },
    "Lithuania": {
        "ccode": "LT"
    },
    "Luxembourg": {
        "ccode": "LU"
    },
    "Madagascar": {
        "ccode": "MG"
    },
    "Malawi": {
        "ccode": "MW"
    },
    "Malaysia": {
        "ccode": "MY"
    },
    "Maldives": {
        "ccode": "MV"
    },
    "Mali": {
        "ccode": "ML"
    },
    "Malta": {
        "ccode": "MT"
    },
    "Marshall Islands": {
        "ccode": "MH"
    },
    "Mauritania": {
        "ccode": "MR"
    },
    "Mauritius": {
        "ccode": "MU"
    },
    "Mexico": {
        "ccode": "MX"
    },
    "Micronesia": {
        "ccode": "FM"
    },
    "Moldova": {
        "ccode": "MD"
    },
    "Monaco": {
        "ccode": "MC"
    },
    "Mongolia": {
        "ccode": "MN"
    },
    "Montenegro": {
        "ccode": "ME"
    },
    "Morocco": {
        "ccode": "MA"
    },
    "Mozambique": {
        "ccode": "MZ"
    },
    "Myanmar": {
        "ccode": "MM"
    },
    "Namibia": {
        "ccode": "NA"
    },
    "Nauru": {
        "ccode": "NR"
    },
    "Nepal": {
        "ccode": "NP"
    },
    "Netherlands": {
        "ccode": "NL"
    },
    "New Zealand": {
        "ccode": "NZ"
    },
    "Nicaragua": {
        "ccode": "NI"
    },
    "Niger": {
        "ccode": "NE"
    },
    "Nigeria": {
        "ccode": "NG"
    },
    "North Korea": {
        "ccode": "KP"
    },
    "North Macedonia": {
        "ccode": "MK"
    },
    "Norway": {
        "ccode": "NO"
    },
    "Oman": {
        "ccode": "OM"
    },
    "Pakistan": {
        "ccode": "PK"
    },
    "Palau": {
        "ccode": "PW"
    },
    "Palestine": {
        "ccode": "PS"
    },
    "Panama": {
        "ccode": "PA"
    },
    "Papua New Guinea": {
        "ccode": "PG"
    },
    "Paraguay": {
        "ccode": "PY"
    },
    "Peru": {
        "ccode": "PE"
    },
    "Philippines": {
        "ccode": "PH"
    },
    "Poland": {
        "ccode": "PL"
    },
    "Portugal": {
        "ccode": "PT"
    },
    "Qatar": {
        "ccode": "QA"
    },
    "Romania": {
        "ccode": "RO"
    },
    "Russia": {
        "ccode": "RU"
    },
    "Rwanda": {
        "ccode": "RW"
    },
    "Saint Kitts and Nevis": {
        "ccode": "KN"
    },
    "Saint Lucia": {
        "ccode": "LC"
    },
    "Saint Vincent and the Grenadines": {
        "ccode": "VC"
    },
    "Samoa": {
        "ccode": "WS"
    },
    "San Marino": {
        "ccode": "SM"
    },
    "Sao Tome and Principe": {
        "ccode": "ST"
    },
    "Saudi Arabia": {
        "ccode": "SA"
    },
    "Senegal": {
        "ccode": "SN"
    },
    "Serbia": {
        "ccode": "RS"
    },
    "Seychelles": {
        "ccode": "SC"
    },
    "Sierra Leone": {
        "ccode": "SL"
    },
    "Singapore": {
        "ccode": "SG"
    },
    "Slovakia": {
        "ccode": "SK"
    },
    "Slovenia": {
        "ccode": "SI"
    },
    "Solomon Islands": {
        "ccode": "SB"
    },
    "Somalia": {
        "ccode": "SO"
    },
    "South Africa": {
        "ccode": "ZA"
    },
    "South Korea": {
        "ccode": "KR"
    },
    "South Sudan": {
        "ccode": "SS"
    },
    "Spain": {
        "ccode": "ES"
    },
    "Sri Lanka": {
        "ccode": "LK"
    },
    "Sudan": {
        "ccode": "SD"
    },
    "Suriname": {
        "ccode": "SR"
    },
    "Sweden": {
        "ccode": "SE"
    },
    "Switzerland": {
        "ccode": "CH"
    },
    "Syria": {
        "ccode": "SY"
    },
    "Taiwan": {
        "ccode": "TW"
    },
    "Tajikistan": {
        "ccode": "TJ"
    },
    "Tanzania": {
        "ccode": "TZ"
    },
    "Thailand": {
        "ccode": "TH"
    },
    "Timor-Leste": {
        "ccode": "TL"
    },
    "Togo": {
        "ccode": "TG"
    },
    "Tonga": {
        "ccode": "TO"
    },
    "Trinidad and Tobago": {
        "ccode": "TT"
    },
    "Tunisia": {
        "ccode": "TN"
    },
    "Turkey": {
        "ccode": "TR"
    },
    "Turkmenistan": {
        "ccode": "TM"
    },
    "Tuvalu": {
        "ccode": "TV"
    },
    "Uganda": {
        "ccode": "UG"
    },
    "Ukraine": {
        "ccode": "UA"
    },
    "United Arab Emirates": {
        "ccode": "AE"
    },
    "United Kingdom": {
        "ccode": "GB"
    },
    "United States": {
        "ccode": "US"
    },
    "Uruguay": {
        "ccode": "UY"
    },
    "Uzbekistan": {
        "ccode": "UZ"
    },
    "Vanuatu": {
        "ccode": "VU"
    },
    "Venezuela": {
        "ccode": "VE"
    },
    "Vietnam": {
        "ccode": "VN"
    },
    "Yemen": {
        "ccode": "YE"
    },
    "Zambia": {
        "ccode": "ZM"
    },
    "Zimbabwe": {
        "ccode": "ZW"
    }
};

function getTCtryKeyAsVal() {
    var tArr = [];
    tVCKObj = {};
    for (var key in tLocCccodeObj) {

      ytKeyName = key;
        ytKeyValue = tLocCccodeObj[key].ccode;
        tVCKObj[ytKeyName] = ytKeyName;
    
    }
    console.log("getTCtryKeyAsVal: " + JSON.stringify(tVCKObj));
    return tVCKObj;
}



/*
    * Function to get the country code
    */
function getCountryCode(pCountryName) {
    console.log("getCountryCode: " + pCountryName);
    return tLocCccodeObj[pCountryName].ccode;
}

/*
    * Function to get the country latitude
    */
function getCountryLatitude(pCountryName) {
    return tLocCountryObj[pCountryName].latitude;
}

/*
    * Function to get the country longitude
    */
function getCountryLongitude(pCountryName) {
    return tLocCountryObj[pCountryName].longitude;
}

/*
    * Function to get the country latitude and longitude
    */
function getCountryLatLong(pCountryName) {
    return tLocCountryObj[pCountryName].latitude + "," + tLocCountryObj[pCountryName].longitude;
}


/*

function doZonePckChg(tZPCel, tZPVal, tZPtxt) {
  console.log("doZonePckChg: " + tZPCel + " " + tZPVal + " " + tZPtxt);
  try {
    tZPValA = tZPVal.replace("d", "");
    tZPValB = "zip" + tZPValA;
    tZPValC = tmpLocZipObj[tZPValB];
    tZPValD = tZPValC["latlng"];
    tZPValSplt = tZPValD.split(",");
    u_loclat.value = tZPValSplt[0];
    u_loclng.value = tZPValSplt[1];
    // tmp_u_loclat.value = tZPValSplt[0];
    // tmp_u_loclng.value = tZPValSplt[1];
    u_region.value = tZPtxt;
  } catch(e) {
    alert("doZonePckChg: " + e);
  }
}

function getCountryDropStr() {
  var tStr = "";
  tDDXtraCntObj = {};
  tDDXtraCntObj["ddtype"] = "noQvalue";
  tDDXtraCntObj["fld"] = "u_region";
  tDDXtraCntObj["lbl"] =  stxt[211];
  tDDXtraCntObj["val"] = "Lisboa";
  tDDXtraCntObj["kvpObj"] = tmpLocDistObj;
  tDDXtraCntObj["cb"] = "doZonePckChg";
  tDDXtraCntObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
  tDDXtraCntObj["lblcls"] = "txtSmall";
  tDDXtraCntObj["valcls"] = "form-control-disabled txtSmall";
  tDDXtraCntObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
  tDDXtraCntObj["horvert"] = "vertical";
  tDDXtraCntObj["icn"] = "noQvalue";
  tStr = JSSHOP.ui.getNuBSdropDstr(tDDXtraCntObj);
  return tStr;
}


CREATE TABLE `countries` (
  `geonameid` int(11) NOT NULL,
  `asciiname` varchar(200) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `feature_class` char(1) DEFAULT NULL,
  `feature_code` varchar(10) DEFAULT NULL,
  `country_code` char(2) DEFAULT NULL,
  `cc2` varchar(200) DEFAULT NULL,
  `admin1_code` varchar(20) DEFAULT NULL,
  `admin2_code` varchar(80) DEFAULT NULL,
  `admin3_code` varchar(20) DEFAULT NULL,
  `admin4_code` varchar(20) DEFAULT NULL,
  `population` bigint(20) DEFAULT NULL,
  `dem` int(11) DEFAULT NULL,
  `modification_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;


*/

function doLocltyPckChg(tLccload, tZPCel, tZPVal, tZPtxt) {
    console.log("doLocltyPckChg: " + tLccload + " :: " + tZPCel + " " + tZPVal + " " + tZPtxt);
    try {
        document.getElementById(tmpTLocltyFid).value = tZPtxt;
        tZPValC = tLocltyObj[tZPtxt];
        tZPValD = tZPValC["latlng"];
        tZPValSplt = tZPValD.split(",");
        // u_loclat.value = tZPValSplt[0];
        // u_loclng.value = tZPValSplt[1];
        tmpTLocLatField.value = tZPValSplt[0];
        tmpTLocLngField.value = tZPValSplt[1];
    } catch(e) {
        alert("doLocltyPckChg: " + e);
    }
}
function setLocltyDD(tudsA, tudsB, tudsC) {
    tudsA = tmpLocltyField.id;
    console.log("setLocltyDD: " + tudsA + " :: " + tudsB + " :: " + tudsC);
    try {   } catch(e) {
        alert("setLocltyDD: " + e);
    }
        tStr = "";
        tDDlocObj = "";
        tURResArr = "";
        tDDlocObj = {};
        tURResArr = [];
        tmpLocArr = "";
        
        tmpLocArr = [];
        tLocltyObj = null;
        tLocltyObj = "";
        tLocltyObj = {};
        if(tudsB.indexOf("geonameid") != -1) {
            cleanTudsB = tudsB.replace(/[\n\r]/g, '');
            cleanTudsB = cleanTudsB.replace(/[\t]/g, '');
            cleanTudsB = cleanTudsB.replace(/[\']/g, ' ');
            cleanTudsB = cleanTudsB.replace(/[\\]/g, ' ');
            // cleanForJson = cleanTudsB.replace(/[\n\r]/g, '');
            console.log("setLocltyDD: " + cleanTudsB);
            tURResArr = JSON.parse(cleanTudsB);
            for(var iddur=0; iddur<tURResArr.length; iddur++) {
                if(tURResArr[iddur].asciiname == document.getElementById(tmpTRegionFid).value) {
                    tNotTheOne = "yes";
                } else {
                    tDDlocObj[tURResArr[iddur].asciiname] = tURResArr[iddur].asciiname;
                }
                tLocltyObj[tURResArr[iddur].asciiname] = {};
                tLocltyObj[tURResArr[iddur].asciiname]["latitude"] = tURResArr[iddur].latitude;
                tLocltyObj[tURResArr[iddur].asciiname]["longitude"] = tURResArr[iddur].longitude;
                tLocltyObj[tURResArr[iddur].asciiname]["latlng"] = tURResArr[iddur].latitude + "," + tURResArr[iddur].longitude;
                
                tResDDACstr = "<a class='acdropdown-item' href='#' onclick='doZonePckChg(this, \"" + tURResArr[iddur].geonameid + "\", \"" + tURResArr[iddur].asciiname + "\")'>" + tURResArr[iddur].asciiname + "</a>";
                tmpLocArr.push(tResDDACstr);
            }
            currACTblCnt = tmpLocArr.length;
            tDDXtraCntObj = {};
            tDDXtraCntObj["ddtype"] = "noQvalue";
            tDDXtraCntObj["fld"] = tmpLocltyField.id;
            tDDXtraCntObj["fldb"] = "tmp_" + tudsA;
            tDDXtraCntObj["lbl"] = "Locality";
            tDDXtraCntObj["val"] = "Lisboa";
            tDDXtraCntObj["kvpObj"] = tDDlocObj;
            tDDXtraCntObj["cb"] = "doLocltyPckChg";
            tDDXtraCntObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
            tDDXtraCntObj["lblcls"] = "txtSmall";
            tDDXtraCntObj["valcls"] = "form-control-disabled txtSmall";
            tDDXtraCntObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
            tDDXtraCntObj["horvert"] = "vertical";
            tDDXtraCntObj["icn"] = "noQvalue";
            tStr = JSSHOP.ui.getNuBSdropDstr(tDDXtraCntObj);
            dvLocltyDD.innerHTML = tStr;
            // JSSHOP.ui.doAutoComp("tmp_" + tudsA, tmpLocArr);
            setTimeout(function() {
                JSSHOP.ui.doNuAutoComp(document.getElementById("tmp_" + tudsA), tmpLocArr, "dvLocltyAC");
            }, 1000);
        } else {
            tStr = "No data";
        }
 


}

function getLocltyDropStr(tdCtryCode, tRDRegion, tRDDel,  tRddcb) {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["ws"] = "where country_code=? and admin1_code=?";
    tmpFobj["wa"] = [tdCtryCode, tRDRegion];
    tmpFobj["o"] = "asciiname asc";
    tmpFobj["l"] = 1000;
    // tStr = "select * from countries where country_code=? and  feature_code= 'PLA' or feature_code= 'PPLA' order by m_vala desc";
    oi = getNuDBFnvp("countries", 5, null, tmpFobj);
    doQComm(oi["rq"], tRDDel, tRddcb);
}

function doRegionPckChg(tCRload, tZPCel, tZPVal, tZPtxt) {
    console.log("doRegionPckChg: " + tCRload + " :: " + tZPCel + " " + tZPVal + " " + tZPtxt);
    document.getElementById(tmpTRegionFid).value = tZPtxt;
    tAdmin1 = tmpRegionObj[tZPtxt]["admin1"];
    tmpTLocLatField.value = tmpRegionObj[tZPtxt]["latitude"];
    tmpTLocLngField.value = tmpRegionObj[tZPtxt]["longitude"];
    tCountry = getCountryCode(tmpCountryField.value);
    getLocltyDropStr(tCountry, tAdmin1, tZPCel, "setLocltyDD");
}

function setUregionDD(tudsA, tudsB, tudsC) {
    try {
        tStr = "";

        tDDregObj = "";
        tURResArr = "";
        tDDregObj = {};
        tURResArr = [];
        if(tudsB.indexOf("geonameid") != -1) {
            cleanTudsB = tudsB.replace(/[\n\r]/g, '');
            cleanTudsB = cleanTudsB.replace(/[\t]/g, '');
            cleanTudsB = cleanTudsB.replace(/[\']/g, ' ');
            cleanTudsB = cleanTudsB.replace(/[\\]/g, ' ');
            // cleanForJson = cleanTudsB.replace(/[\n\r]/g, '');
            console.log("setUregionDD: " + cleanTudsB);
            tURResArr = JSON.parse(cleanTudsB);
            for(var iddur=0; iddur<tURResArr.length; iddur++) {
                tDDregObj[tURResArr[iddur].asciiname] = tURResArr[iddur].asciiname;
               
                tmpRegionObj[tURResArr[iddur].asciiname] = {};
                tmpRegionObj[tURResArr[iddur].asciiname]["admin1"] = tURResArr[iddur].admin1_code;

                tmpRegionObj[tURResArr[iddur].asciiname]["latitude"] = tURResArr[iddur].latitude;
                tmpRegionObj[tURResArr[iddur].asciiname]["longitude"] = tURResArr[iddur].longitude;
                tmpRegionObj[tURResArr[iddur].asciiname]["latlng"] = tURResArr[iddur].latitude + "," + tURResArr[iddur].longitude;
                // tResDDACstr = "<a class='dropdown-item' href='#' onclick='doRegionPckChg('noQvalue','" + tmpRegionFid + "','" +  tURResArr[iddur].asciiname + "\")'>" + tURResArr[iddur].asciiname + "</a>";
                tResDDACstr = "<a class=\"acdropdown-item\" href=\"javascript:doRegionPckChg('noQvalue','" + tmpRegionFid + "','" +  tURResArr[iddur].asciiname + "','"  +  tURResArr[iddur].asciiname + "')\">" + tURResArr[iddur].asciiname + "</a>";   
                tmpRegionArr.push(tResDDACstr);
                if(tURResArr[iddur].asciiname == document.getElementById(tmpRegionFid).value) {
                    getLocltyDropStr(getCountryCode(document.getElementById(tmpCountryFid).value), tURResArr[iddur].admin1_code, "dvLocltyDD", "setLocltyDD");  

                }
               
            }
            currACTblCnt = tmpRegionArr.length;
            tDDXtraCntObj = {};
            tDDXtraCntObj["ddtype"] = "noQvalue";
            tDDXtraCntObj["fld"] = tmpRegionFid;
            tDDXtraCntObj["fldb"] = tmpTRegionFid;
            tDDXtraCntObj["lbl"] = "Region";
            tDDXtraCntObj["val"] = "Lisboa";
            tDDXtraCntObj["kvpObj"] = tDDregObj;
            tDDXtraCntObj["cb"] = "doRegionPckChg";
            tDDXtraCntObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
            tDDXtraCntObj["lblcls"] = "txtSmall";
            tDDXtraCntObj["valcls"] = "form-control-disabled txtSmall";
            tDDXtraCntObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
            tDDXtraCntObj["horvert"] = "vertical";
            tDDXtraCntObj["icn"] = "noQvalue";
            tStr = JSSHOP.ui.getNuBSdropDstr(tDDXtraCntObj);
            dvRegionDD.innerHTML = tStr;
            // JSSHOP.ui.doAutoComp("tmp_" + tudsA, tmpRegionArr);
            setTimeout(function() {
                JSSHOP.ui.doNuAutoComp(document.getElementById(tmpTRegionFid), tmpRegionArr, "dvRegionAC");
            }, 1000);
 

        } else {
            tStr = "No data";
        }
           } catch(e) {
        alert("setUregionDD: " + e);
    }
}

function getRegionDropStr(tRDCountry, tRDDel,  tRddcb) {
    tmpFobj = null;
    tCCcode = getCountryCode(tRDCountry);
    tmpFobj = {};
    tmpFobj["ws"] = "where country_code=? and  (feature_code=? or feature_code=? or population >?)";
    tmpFobj["wa"] = [tCCcode, "PPL", "PPLA", 10000];
    tmpFobj["o"] = "asciiname asc";
    tmpFobj["l"] = 1000;
    // tStr = "select * from countries where country_code=? and  feature_code= 'PLA' or feature_code= 'PPLA' order by m_vala desc";
    oi = getNuDBFnvp("countries", 5, null, tmpFobj);
    doQComm(oi["rq"], tRDDel, tRddcb);
}


function doCountryPckChg(tZPCel, tZPVal, tZPtxt) {
    console.log("doCountryPckChg: " + tZPCel + " " + tZPVal + " " + tZPtxt);
    try {
      tmwpDOs = {};
        tmwpDOs["country"] = tZPtxt;
        tmwpDOs["latitude"] = getCountryLatitude(tZPtxt);
        tmwpDOs["longitude"] = getCountryLongitude(tZPtxt);
        tmwpDOs["ccode"] = getCountryCode(tZPtxt);
        tmwpDOs["latlng"] = getCountryLatLong(tZPtxt);
        tmwpDOs["region"] = "noQvalue";
        getRegionDropStr(tZPtxt, "dvRegionDD", "setUregionDD");
 

    } catch(e) {
      alert("doCountryPckChg: " + e);
    }
  }
function getCountryDropStr(tCDSfld, tCDScb)  {
    var tStr = "";
    tDDXtraCntObj = {};
    tDDXtraCntObj["ddtype"] = "noQvalue";
    tDDXtraCntObj["fld"] = tCDSfld;
    tDDXtraCntObj["lbl"] = "Country";
    tDDXtraCntObj["val"] = "United States";
    tDDXtraCntObj["kvpObj"] = getTCtryKeyAsVal();
    tDDXtraCntObj["cb"] = tCDScb;
    tDDXtraCntObj["fldcls"] = "nav-link dropdown-toggle txtSmall";
    tDDXtraCntObj["lblcls"] = "txtSmall";
    tDDXtraCntObj["valcls"] = "form-control-disabled txtSmall";
    tDDXtraCntObj["icncls"] = "nav-material-icons txtBold txtClrGrey";
    tDDXtraCntObj["horvert"] = "vertical";
    tDDXtraCntObj["icn"] = "noQvalue";
    tStr = JSSHOP.ui.getNuBSdropDstr(tDDXtraCntObj);
    return tStr;
}







/* to delete 
tLocCountryObj = {};
tLocCountryObj["Afghanistan"] = {};
tLocCountryObj["Afghanistan"]["latitude"] = "33.93911";
tLocCountryObj["Afghanistan"]["longitude"] = "67.709953";
tLocCountryObj["Albania"] = {};
tLocCountryObj["Albania"]["latitude"] = "41.153332";
tLocCountryObj["Albania"]["longitude"] = "20.168331";
tLocCountryObj["Algeria"] = {};
tLocCountryObj["Algeria"]["latitude"] = "28.033886";
tLocCountryObj["Algeria"]["longitude"] = "1.659626";
tLocCountryObj["Andorra"] = {};
tLocCountryObj["Andorra"]["latitude"] = "42.546245";
tLocCountryObj["Andorra"]["longitude"] = "1.601554";
tLocCountryObj["Angola"] = {};
tLocCountryObj["Angola"]["latitude"] = "-11.202692";
tLocCountryObj["Angola"]["longitude"] = "17.873887";
tLocCountryObj["Antigua and Barbuda"] = {};
tLocCountryObj["Antigua and Barbuda"]["latitude"] = "17.060816";
tLocCountryObj["Antigua and Barbuda"]["longitude"] = "-61.796428";
tLocCountryObj["Argentina"] = {};
tLocCountryObj["Argentina"]["latitude"] = "-38.416097";
tLocCountryObj["Argentina"]["longitude"] = "-63.616672";
tLocCountryObj["Armenia"] = {};
tLocCountryObj["Armenia"]["latitude"] = "40.069099";
tLocCountryObj["Armenia"]["longitude"] = "45.038189";
tLocCountryObj["Australia"] = {};
tLocCountryObj["Australia"]["latitude"] = "-25.274398";
tLocCountryObj["Australia"]["longitude"] = "133.775136";
tLocCountryObj["Austria"] = {};
tLocCountryObj["Austria"]["latitude"] = "47.516231";
tLocCountryObj["Austria"]["longitude"] = "14.550072";
tLocCountryObj["Azerbaijan"] = {};
tLocCountryObj["Azerbaijan"]["latitude"] = "40.143105";
tLocCountryObj["Azerbaijan"]["longitude"] = "47.576927";
tLocCountryObj["Bahamas"] = {};
tLocCountryObj["Bahamas"]["latitude"] = "25.03428";
tLocCountryObj["Bahamas"]["longitude"] = "-77.39628";
tLocCountryObj["Bahrain"] = {};
tLocCountryObj["Bahrain"]["latitude"] = "25.930414";
tLocCountryObj["Bahrain"]["longitude"] = "50.637772";
tLocCountryObj["Bangladesh"] = {};
tLocCountryObj["Bangladesh"]["latitude"] = "23.684994";
tLocCountryObj["Bangladesh"]["longitude"] = "90.356331";
tLocCountryObj["Barbados"] = {};
tLocCountryObj["Barbados"]["latitude"] = "13.193887";
tLocCountryObj["Barbados"]["longitude"] = "-59.543198";
tLocCountryObj["Belarus"] = {};
tLocCountryObj["Belarus"]["latitude"] = "53.709807";
tLocCountryObj["Belarus"]["longitude"] = "27.953389";
tLocCountryObj["Belgium"] = {};
tLocCountryObj["Belgium"]["latitude"] = "50.503887";
tLocCountryObj["Belgium"]["longitude"] = "4.469936";
tLocCountryObj["Belize"] = {};
tLocCountryObj["Belize"]["latitude"] = "17.189877";
tLocCountryObj["Belize"]["longitude"] = "-88.49765";
tLocCountryObj["Benin"] = {};
tLocCountryObj["Benin"]["latitude"] = "9.30769";
tLocCountryObj["Benin"]["longitude"] = "2.315834";
tLocCountryObj["Bhutan"] = {};
tLocCountryObj["Bhutan"]["latitude"] = "27.514162";
tLocCountryObj["Bhutan"]["longitude"] = "90.433601";
tLocCountryObj["Bolivia"] = {};
tLocCountryObj["Bolivia"]["latitude"] = "-16.290154";
tLocCountryObj["Bolivia"]["longitude"] = "-63.588653";
tLocCountryObj["Bosnia and Herzegovina"] = {};
tLocCountryObj["Bosnia and Herzegovina"]["latitude"] = "43.915886";
tLocCountryObj["Bosnia and Herzegovina"]["longitude"] = "17.679076";
tLocCountryObj["Botswana"] = {};
tLocCountryObj["Botswana"]["latitude"] = "-22.328474";
tLocCountryObj["Botswana"]["longitude"] = "24.684866";
tLocCountryObj["Brazil"] = {};
tLocCountryObj["Brazil"]["latitude"] = "-14.235004";
tLocCountryObj["Brazil"]["longitude"] = "-51.92528";
tLocCountryObj["Brunei"] = {};
tLocCountryObj["Brunei"]["latitude"] = "4.535277";
tLocCountryObj["Brunei"]["longitude"] = "114.727669";
tLocCountryObj["Bulgaria"] = {};
tLocCountryObj["Bulgaria"]["latitude"] = "42.733883";
tLocCountryObj["Bulgaria"]["longitude"] = "25.48583";
tLocCountryObj["Burkina Faso"] = {};
tLocCountryObj["Burkina Faso"]["latitude"] = "12.238333";
tLocCountryObj["Burkina Faso"]["longitude"] = "-1.561593";
tLocCountryObj["Burundi"] = {};
tLocCountryObj["Burundi"]["latitude"] = "-3.373056";
tLocCountryObj["Burundi"]["longitude"] = "29.918886";
tLocCountryObj["Cambodia"] = {};
tLocCountryObj["Cambodia"]["latitude"] = "12.565679";
tLocCountryObj["Cambodia"]["longitude"] = "104.990963";
tLocCountryObj["Cameroon"] = {};
tLocCountryObj["Cameroon"]["latitude"] = "7.369722";
tLocCountryObj["Cameroon"]["longitude"] = "12.354722";
tLocCountryObj["Canada"] = {};
tLocCountryObj["Canada"]["latitude"] = "56.130366";
tLocCountryObj["Canada"]["longitude"] = "-106.346771";
tLocCountryObj["Cape Verde"] = {};
tLocCountryObj["Cape Verde"]["latitude"] = "16.002082";
tLocCountryObj["Cape Verde"]["longitude"] = "-24.013197";
tLocCountryObj["Central African Republic"] = {};
tLocCountryObj["Central African Republic"]["latitude"] = "6.611111";
tLocCountryObj["Central African Republic"]["longitude"] = "20.939444";
tLocCountryObj["Chad"] = {};
tLocCountryObj["Chad"]["latitude"] = "15.454166";
tLocCountryObj["Chad"]["longitude"] = "18.732207";
tLocCountryObj["Chile"] = {};
tLocCountryObj["Chile"]["latitude"] = "-35.675147";
tLocCountryObj["Chile"]["longitude"] = "-71.542969";
tLocCountryObj["China"] = {};
tLocCountryObj["China"]["latitude"] = "35.86166";
tLocCountryObj["China"]["longitude"] = "104.195397";
tLocCountryObj["Colombia"] = {};
tLocCountryObj["Colombia"]["latitude"] = "4.570868";
tLocCountryObj["Colombia"]["longitude"] = "-74.297333";
tLocCountryObj["Comoros"] = {};
tLocCountryObj["Comoros"]["latitude"] = "-11.875001";
tLocCountryObj["Comoros"]["longitude"] = "43.872219";
tLocCountryObj["Congo"] = {};
tLocCountryObj["Congo"]["latitude"] = "-0.228021";
tLocCountryObj["Congo"]["longitude"] = "15.827659";
tLocCountryObj["Costa Rica"] = {};
tLocCountryObj["Costa Rica"]["latitude"] = "9.748917";
tLocCountryObj["Costa Rica"]["longitude"] = "-83.753428";
tLocCountryObj["Cote d'Ivoire"] = {};
tLocCountryObj["Cote d'Ivoire"]["latitude"] = "7.539989";
tLocCountryObj["Cote d'Ivoire"]["longitude"] = "-5.54708";
tLocCountryObj["Croatia"] = {};
tLocCountryObj["Croatia"]["latitude"] = "45.1";
tLocCountryObj["Croatia"]["longitude"] = "15.2";
tLocCountryObj["Cuba"] = {};
tLocCountryObj["Cuba"]["latitude"] = "21.521757";
tLocCountryObj["Cuba"]["longitude"] = "-77.781167";
tLocCountryObj["Cyprus"] = {};
tLocCountryObj["Cyprus"]["latitude"] = "35.126413";
tLocCountryObj["Cyprus"]["longitude"] = "33.429859";
tLocCountryObj["Czech Republic"] = {};
tLocCountryObj["Czech Republic"]["latitude"] = "49.817492";
tLocCountryObj["Czech Republic"]["longitude"] = "15.472962";
tLocCountryObj["Denmark"] = {};
tLocCountryObj["Denmark"]["latitude"] = "56.26392";
tLocCountryObj["Denmark"]["longitude"] = "9.501785";
tLocCountryObj["Djibouti"] = {};
tLocCountryObj["Djibouti"]["latitude"] = "11.825138";
tLocCountryObj["Djibouti"]["longitude"] = "42.590275";
tLocCountryObj["Dominica"] = {};
tLocCountryObj["Dominica"]["latitude"] = "15.414999";
tLocCountryObj["Dominica"]["longitude"] = "-61.370976";
tLocCountryObj["Dominican Republic"] = {};
tLocCountryObj["Dominican Republic"]["latitude"] = "18.735693";
tLocCountryObj["Dominican Republic"]["longitude"] = "-70.162651";
tLocCountryObj["East Timor"] = {};
tLocCountryObj["East Timor"]["latitude"] = "-8.874217";
tLocCountryObj["East Timor"]["longitude"] = "125.727539";
tLocCountryObj["Ecuador"] = {};
tLocCountryObj["Ecuador"]["latitude"] = "-1.831239";
tLocCountryObj["Ecuador"]["longitude"] = "-78.183406";
tLocCountryObj["Egypt"] = {};
tLocCountryObj["Egypt"]["latitude"] = "26.820553";
tLocCountryObj["Egypt"]["longitude"] = "30.802498";
tLocCountryObj["El Salvador"] = {};
tLocCountryObj["El Salvador"]["latitude"] = "13.794185";
tLocCountryObj["El Salvador"]["longitude"] = "-88.89653";
tLocCountryObj["Equatorial Guinea"] = {};
tLocCountryObj["Equatorial Guinea"]["latitude"] = "1.650801";
tLocCountryObj["Equatorial Guinea"]["longitude"] = "10.267895";
tLocCountryObj["Eritrea"] = {};
tLocCountryObj["Eritrea"]["latitude"] = "15.179384";
tLocCountryObj["Eritrea"]["longitude"] = "39.782334";
tLocCountryObj["Estonia"] = {};
tLocCountryObj["Estonia"]["latitude"] = "58.595272";
tLocCountryObj["Estonia"]["longitude"] = "25.013607";
tLocCountryObj["Ethiopia"] = {};
tLocCountryObj["Ethiopia"]["latitude"] = "9.145";
tLocCountryObj["Ethiopia"]["longitude"] = "40.489673";
tLocCountryObj["Fiji"] = {};
tLocCountryObj["Fiji"]["latitude"] = "-16.578193";
tLocCountryObj["Fiji"]["longitude"] = "179.414413";
tLocCountryObj["Finland"] = {};
tLocCountryObj["Finland"]["latitude"] = "61.92411";
tLocCountryObj["Finland"]["longitude"] = "25.748151";
tLocCountryObj["France"] = {};
tLocCountryObj["France"]["latitude"] = "46.603354";
tLocCountryObj["France"]["longitude"] = "1.888334";
tLocCountryObj["Gabon"] = {};
tLocCountryObj["Gabon"]["latitude"] = "-0.803689";
tLocCountryObj["Gabon"]["longitude"] = "11.609444";
tLocCountryObj["Gambia"] = {};
tLocCountryObj["Gambia"]["latitude"] = "13.443182";
tLocCountryObj["Gambia"]["longitude"] = "-15.310139";
tLocCountryObj["Georgia"] = {};
tLocCountryObj["Georgia"]["latitude"] = "42.315407";
tLocCountryObj["Georgia"]["longitude"] = "43.356892";
tLocCountryObj["Germany"] = {};
tLocCountryObj["Germany"]["latitude"] = "51.165691";
tLocCountryObj["Germany"]["longitude"] = "10.451526";
tLocCountryObj["Ghana"] = {};
tLocCountryObj["Ghana"]["latitude"] = "7.946527";
tLocCountryObj["Ghana"]["longitude"] = "-1.023194";
tLocCountryObj["Greece"] = {};
tLocCountryObj["Greece"]["latitude"] = "39.074208";
tLocCountryObj["Greece"]["longitude"] = "21.824312";
tLocCountryObj["Grenada"] = {};
tLocCountryObj["Grenada"]["latitude"] = "12.262776";
tLocCountryObj["Grenada"]["longitude"] = "-61.604171";
tLocCountryObj["Guatemala"] = {};
tLocCountryObj["Guatemala"]["latitude"] = "15.783471";
tLocCountryObj["Guatemala"]["longitude"] = "-90.230759";
tLocCountryObj["Guinea"] = {};
tLocCountryObj["Guinea"]["latitude"] = "9.945587";
tLocCountryObj["Guinea"]["longitude"] = "-9.696645";
tLocCountryObj["Guinea-Bissau"] = {};
tLocCountryObj["Guinea-Bissau"]["latitude"] = "11.803749";
tLocCountryObj["Guinea-Bissau"]["longitude"] = "-15.180413";
tLocCountryObj["Guyana"] = {};
tLocCountryObj["Guyana"]["latitude"] = "4.860416";
tLocCountryObj["Guyana"]["longitude"] = "-58.93018";
tLocCountryObj["Haiti"] = {};
tLocCountryObj["Haiti"]["latitude"] = "18.971187";
tLocCountryObj["Haiti"]["longitude"] = "-72.285215";
tLocCountryObj["Honduras"] = {};
tLocCountryObj["Honduras"]["latitude"] = "15.199999";
tLocCountryObj["Honduras"]["longitude"] = "-86.241905";
tLocCountryObj["Hungary"] = {};
tLocCountryObj["Hungary"]["latitude"] = "47.162494";
tLocCountryObj["Hungary"]["longitude"] = "19.503304";
tLocCountryObj["Iceland"] = {};
tLocCountryObj["Iceland"]["latitude"] = "64.963051";
tLocCountryObj["Iceland"]["longitude"] = "-19.020835";
tLocCountryObj["India"] = {};
tLocCountryObj["India"]["latitude"] = "20.593684";
tLocCountryObj["India"]["longitude"] = "78.96288";
tLocCountryObj["Indonesia"] = {};
tLocCountryObj["Indonesia"]["latitude"] = "-0.789275";
tLocCountryObj["Indonesia"]["longitude"] = "113.921327";
tLocCountryObj["Iran"] = {};
tLocCountryObj["Iran"]["latitude"] = "32.427908";
tLocCountryObj["Iran"]["longitude"] = "53.688046";
tLocCountryObj["Iraq"] = {};
tLocCountryObj["Iraq"]["latitude"] = "33.223191";
tLocCountryObj["Iraq"]["longitude"] = "43.679291";
tLocCountryObj["Ireland"] = {};
tLocCountryObj["Ireland"]["latitude"] = "53.41291";
tLocCountryObj["Ireland"]["longitude"] = "-8.24389";
tLocCountryObj["Israel"] = {};
tLocCountryObj["Israel"]["latitude"] = "31.046051";
tLocCountryObj["Israel"]["lomgitude"] = "34.851612";
tLocCountryObj["Italy"] = {};
tLocCountryObj["Italy"]["latitude"] = "41.87194";
tLocCountryObj["Italy"]["longitude"] = "12.56738";
tLocCountryObj["Jamaica"] = {};
tLocCountryObj["Jamaica"]["latitude"] = "18.109581";
tLocCountryObj["Jamaica"]["longitude"] = "-77.297508";
tLocCountryObj["Japan"] = {};
tLocCountryObj["Japan"]["latitude"] = "36.204824";
tLocCountryObj["Japan"]["longitude"] = "138.252924";
tLocCountryObj["Jordan"] = {};
tLocCountryObj["Jordan"]["latitude"] = "30.585164";
tLocCountryObj["Jordan"]["longitude"] = "36.238414";
tLocCountryObj["Kazakhstan"] = {};
tLocCountryObj["Kazakhstan"]["latitude"] = "48.019573";
tLocCountryObj["Kazakhstan"]["longitude"] = "66.923684";
tLocCountryObj["Kenya"] = {};
tLocCountryObj["Kenya"]["latitude"] = "-0.023559";
tLocCountryObj["Kenya"]["longitude"] = "37.906193";
tLocCountryObj["Kiribati"] = {};
tLocCountryObj["Kiribati"]["latitude"] = "-3.370417";
tLocCountryObj["Kiribati"]["longitude"] = "-168.734039";
tLocCountryObj["Korea, North"] = {};
tLocCountryObj["Korea, North"]["latitude"] = "40.339852";
tLocCountryObj["Korea, North"]["longitude"] = "127.510093";
tLocCountryObj["Korea, South"] = {};
tLocCountryObj["Korea, South"]["latitude"] = "35.907757";
tLocCountryObj["Korea, South"]["longitude"] = "127.766922";
tLocCountryObj["Kosovo"] = {};
tLocCountryObj["Kosovo"]["latitude"] = "42.602636";
tLocCountryObj["Kosovo"]["longitude"] = "20.902977";
tLocCountryObj["Kuwait"] = {};
tLocCountryObj["Kuwait"]["latitude"] = "29.31166";
tLocCountryObj["Kuwait"]["longitude"] = "47.481766";
tLocCountryObj["Kyrgyzstan"] = {};
tLocCountryObj["Kyrgyzstan"]["latitude"] = "41.20438";
tLocCountryObj["Kyrgyzstan"]["longitude"] = "74.766098";
tLocCountryObj["Laos"] = {};
tLocCountryObj["Laos"]["latitude"] = "19.85627";
tLocCountryObj["Laos"]["longitude"] = "102.495496";
tLocCountryObj["Latvia"] = {};
tLocCountryObj["Latvia"]["latitude"] = "56.879635";
tLocCountryObj["Latvia"]["longitude"] = "24.603189";
tLocCountryObj["Lebanon"] = {};
tLocCountryObj["Lebanon"]["latitude"] = "33.854721";
tLocCountryObj["Lebanon"]["longitude"] = "35.862285";
tLocCountryObj["Lesotho"] = {};
tLocCountryObj["Lesotho"]["latitude"] = "-29.609988";
tLocCountryObj["Lesotho"]["longitude"] = "28.233608";
tLocCountryObj["Liberia"] = {};
tLocCountryObj["Liberia"]["latitude"] = "6.428055";
tLocCountryObj["Liberia"]["longitude"] = "-9.429499";
tLocCountryObj["Libya"] = {};
tLocCountryObj["Libya"]["latitude"] = "26.3351";
tLocCountryObj["Libya"]["longitude"] = "17.228331";
tLocCountryObj["Liechtenstein"] = {};
tLocCountryObj["Liechtenstein"]["latitude"] = "47.166";
tLocCountryObj["Liechtenstein"]["longitude"] = "9.555373";
tLocCountryObj["Lithuania"] = {};
tLocCountryObj["Lithuania"]["latitude"] = "55.169438";
tLocCountryObj["Lithuania"]["longitude"] = "23.881275";
tLocCountryObj["Luxembourg"] = {};
tLocCountryObj["Luxembourg"]["latitude"] = "49.815273";
tLocCountryObj["Luxembourg"]["longitude"] = "6.129583";
tLocCountryObj["Macedonia"] = {};
tLocCountryObj["Macedonia"]["latitude"] = "41.608635";
tLocCountryObj["Macedonia"]["longitude"] = "21.745275";
tLocCountryObj["Madagascar"] = {};
tLocCountryObj["Madagascar"]["latitude"] = "-18.766947";
tLocCountryObj["Madagascar"]["longitude"] = "46.869107";
tLocCountryObj["Malawi"] = {};
tLocCountryObj["Malawi"]["latitude"] = "-13.254308";
tLocCountryObj["Malawi"]["longitude"] = "34.301525";
tLocCountryObj["Malaysia"] = {};
tLocCountryObj["Malaysia"]["latitude"] = "4.210484";
tLocCountryObj["Malaysia"]["longitude"] = "101.975766";
tLocCountryObj["Maldives"] = {};
tLocCountryObj["Maldives"]["latitude"] = "3.202778";
tLocCountryObj["Maldives"]["longitude"] = "73.22068";
tLocCountryObj["Mali"] = {};
tLocCountryObj["Mali"]["latitude"] = "17.570692";
tLocCountryObj["Mali"]["longitude"] = "-3.996166";
tLocCountryObj["Malta"] = {};
tLocCountryObj["Malta"]["latitude"] = "35.937496";
tLocCountryObj["Malta"]["longitude"] = "14.375416";
tLocCountryObj["Marshall Islands"] = {};
tLocCountryObj["Marshall Islands"]["latitude"] = "7.131474";
tLocCountryObj["Marshall Islands"]["longitude"] = "171.184478";
tLocCountryObj["Mauritania"] = {};
tLocCountryObj["Mauritania"]["latitude"] = "21.00789";
tLocCountryObj["Mauritania"]["longitude"] = "-10.940835";
tLocCountryObj["Mauritius"] = {};
tLocCountryObj["Mauritius"]["latitude"] = "-20.348404";
tLocCountryObj["Mauritius"]["longitude"] = "57.552152";
tLocCountryObj["Mexico"] = {};
tLocCountryObj["Mexico"]["latitude"] = "23.634501";
tLocCountryObj["Mexico"]["longitude"] = "-102.552784";
tLocCountryObj["Micronesia"] = {};
tLocCountryObj["Micronesia"]["latitude"] = "7.425554";
tLocCountryObj["Micronesia"]["longitude"] = "150.550812";
tLocCountryObj["Moldova"] = {};
tLocCountryObj["Moldova"]["latitude"] = "47.411631";
tLocCountryObj["Moldova"]["longitude"] = "28.369885";
tLocCountryObj["Monaco"] = {};
tLocCountryObj["Monaco"]["latitude"] = "43.750298";
tLocCountryObj["Monaco"]["longitude"] = "7.412841";
tLocCountryObj["Mongolia"] = {};
tLocCountryObj["Mongolia"]["latitude"] = "46.862496";
tLocCountryObj["Mongolia"]["longitude"] = "103.846656";
tLocCountryObj["Montenegro"] = {};
tLocCountryObj["Montenegro"]["latitude"] = "42.708678";
tLocCountryObj["Montenegro"]["longitude"] = "19.37439";
tLocCountryObj["Morocco"] = {};
tLocCountryObj["Morocco"]["latitude"] = "31.791702";
tLocCountryObj["Morocco"]["longitude"] = "-7.09262";
tLocCountryObj["Mozambique"] = {};
tLocCountryObj["Mozambique"]["latitude"] = "-18.665695";
tLocCountryObj["Mozambique"]["longitude"] = "35.529562";
tLocCountryObj["Myanmar"] = {};
tLocCountryObj["Myanmar"]["latitude"] = "21.913965";
tLocCountryObj["Myanmar"]["longitude"] = "95.956223";
tLocCountryObj["Namibia"] = {};
tLocCountryObj["Namibia"]["latitude"] = "-22.95764";
tLocCountryObj["Namibia"]["longitude"] = "18.49041";
tLocCountryObj["Nauru"] = {};
tLocCountryObj["Nauru"]["latitude"] = "-0.522778";
tLocCountryObj["Nauru"]["longitude"] = "166.931503";
tLocCountryObj["Nepal"] = {};
tLocCountryObj["Nepal"]["latitude"] = "28.394857";
tLocCountryObj["Nepal"]["longitude"] = "84.124008";
tLocCountryObj["Netherlands"] = {};
tLocCountryObj["Netherlands"]["latitude"] = "52.132633";
tLocCountryObj["Netherlands"]["longitude"] = "5.291266";
tLocCountryObj["New Zealand"] = {};
tLocCountryObj["New Zealand"]["latitude"] = "-40.900557";
tLocCountryObj["New Zealand"]["longitude"] = "174.885971";
tLocCountryObj["Nicaragua"] = {};
tLocCountryObj["Nicaragua"]["latitude"] = "12.865416";
tLocCountryObj["Nicaragua"]["longitude"] = "-85.207229";
tLocCountryObj["Niger"] = {};
tLocCountryObj["Niger"]["latitude"] = "17.607789";
tLocCountryObj["Niger"]["longitude"] = "8.081666";
tLocCountryObj["Nigeria"] = {};
tLocCountryObj["Nigeria"]["latitude"] = "9.081999";
tLocCountryObj["Nigeria"]["longitude"] = "8.675277";
tLocCountryObj["Norway"] = {};
tLocCountryObj["Norway"]["latitude"] = "60.472024";
tLocCountryObj["Norway"]["longitude"] = "8.468946";
tLocCountryObj["Oman"] = {};
tLocCountryObj["Oman"]["latitude"] = "21.512583";
tLocCountryObj["Oman"]["longitude"] = "55.923255";
tLocCountryObj["Pakistan"] = {};
tLocCountryObj["Pakistan"]["latitude"] = "30.375321";
tLocCountryObj["Pakistan"]["longitude"] = "69.345116";
tLocCountryObj["Palau"] = {};
tLocCountryObj["Palau"]["latitude"] = "7.51498";
tLocCountryObj["Palau"]["longitude"] = "134.58252";
tLocCountryObj["Panama"] = {};
tLocCountryObj["Panama"]["latitude"] = "8.537981";
tLocCountryObj["Panama"]["longitude"] = "-80.782127";
tLocCountryObj["Papua New Guinea"] = {};
tLocCountryObj["Papua New Guinea"]["latitude"] = "-6.314993";
tLocCountryObj["Papua New Guinea"]["longitude"] = "143.95555";
tLocCountryObj["Paraguay"] = {};
tLocCountryObj["Paraguay"]["latitude"] = "-23.442503";
tLocCountryObj["Paraguay"]["longitude"] = "-58.443832";
tLocCountryObj["Peru"] = {};
tLocCountryObj["Peru"]["latitude"] = "-9.189967";
tLocCountryObj["Peru"]["longitude"] = "-75.015152";
tLocCountryObj["Philippines"] = {};
tLocCountryObj["Philippines"]["latitude"] = "12.879721";
tLocCountryObj["Philippines"]["longitude"] = "121.774017";
tLocCountryObj["Poland"] = {};
tLocCountryObj["Poland"]["latitude"] = "51.919438";
tLocCountryObj["Poland"]["longitude"] = "19.145136";
tLocCountryObj["Portugal"] = {};
tLocCountryObj["Portugal"]["latitude"] = "39.399872";
tLocCountryObj["Portugal"]["longitude"] = "-8.224454";
tLocCountryObj["Qatar"] = {};
tLocCountryObj["Qatar"]["latitude"] = "25.354826";
tLocCountryObj["Qatar"]["longitude"] = "51.183884";
tLocCountryObj["Romania"] = {};
tLocCountryObj["Romania"]["latitude"] = "45.943161";
tLocCountryObj["Romania"]["longitude"] = "24.96676";
tLocCountryObj["Russia"] = {};
tLocCountryObj["Russia"]["latitude"] = "61.52401";
tLocCountryObj["Russia"]["longitude"] = "105.318756";
tLocCountryObj["Rwanda"] = {};
tLocCountryObj["Rwanda"]["latitude"] = "-1.940278";
tLocCountryObj["Rwanda"]["longitude"] = "29.873888";
tLocCountryObj["Saint Kitts and Nevis"] = {};
tLocCountryObj["Saint Kitts and Nevis"]["latitude"] = "17.357822";
tLocCountryObj["Saint Kitts and Nevis"]["longitude"] = "-62.782998";
tLocCountryObj["Saint Lucia"] = {};
tLocCountryObj["Saint Lucia"]["latitude"] = "13.909444";
tLocCountryObj["Saint Lucia"]["longitude"] = "-60.978893";
tLocCountryObj["Saint Vincent and the Grenadines"] = {};
tLocCountryObj["Saint Vincent and the Grenadines"]["latitude"] = "12.984305";
tLocCountryObj["Saint Vincent and the Grenadines"]["longitude"] = "-61.287228";
tLocCountryObj["Samoa"] = {};
tLocCountryObj["Samoa"]["latitude"] = "-13.759029";
tLocCountryObj["Samoa"]["longitude"] = "-172.104629";
tLocCountryObj["San Marino"] = {};
tLocCountryObj["San Marino"]["latitude"] = "43.94236";
tLocCountryObj["San Marino"]["longitude"] = "12.457777";
tLocCountryObj["Sao Tome and Principe"] = {};
tLocCountryObj["Sao Tome and Principe"]["latitude"] = "0.18636";
tLocCountryObj["Sao Tome and Principe"]["longitude"] = "6.613081";
tLocCountryObj["Saudi Arabia"] = {};
tLocCountryObj["Saudi Arabia"]["latitude"] = "23.885942";
tLocCountryObj["Saudi Arabia"]["longitude"] = "45.079162";
tLocCountryObj["Senegal"] = {};
tLocCountryObj["Senegal"]["latitude"] = "14.497401";
tLocCountryObj["Senegal"]["longitude"] = "-14.452362";
tLocCountryObj["Serbia"] = {};
tLocCountryObj["Serbia"]["latitude"] = "44.016521";
tLocCountryObj["Serbia"]["longitude"] = "21.005859";
tLocCountryObj["Seychelles"] = {};
tLocCountryObj["Seychelles"]["latitude"] = "-4.679574";
tLocCountryObj["Seychelles"]["longitude"] = "55.491977";
tLocCountryObj["Sierra Leone"] = {};
tLocCountryObj["Sierra Leone"]["latitude"] = "8.460555";
tLocCountryObj["Sierra Leone"]["longitude"] = "-11.779889";
tLocCountryObj["Singapore"] = {};
tLocCountryObj["Singapore"]["latitude"] = "1.352083";
tLocCountryObj["Singapore"]["longitude"] = "103.819836";
tLocCountryObj["Slovakia"] = {};
tLocCountryObj["Slovakia"]["latitude"] = "48.669026";
tLocCountryObj["Slovakia"]["longitude"] = "19.699024";
tLocCountryObj["Slovenia"] = {};
tLocCountryObj["Slovenia"]["latitude"] = "46.151241";
tLocCountryObj["Slovenia"]["longitude"] = "14.995463";
tLocCountryObj["Solomon Islands"] = {};
tLocCountryObj["Solomon Islands"]["latitude"] = "-9.64571";
tLocCountryObj["Solomon Islands"]["longitude"] = "160.156194";
tLocCountryObj["Somalia"] = {};
tLocCountryObj["Somalia"]["latitude"] = "5.152149";
tLocCountryObj["Somalia"]["longitude"] = "46.199616";
tLocCountryObj["South Africa"] = {};
tLocCountryObj["South Africa"]["latitude"] = "-30.559482";
tLocCountryObj["South Africa"]["longitude"] = "22.937506";
tLocCountryObj["South Sudan"] = {};
tLocCountryObj["South Sudan"]["latitude"] = "6.876991";
tLocCountryObj["South Sudan"]["longitude"] = "31.306978";
tLocCountryObj["Spain"] = {};
tLocCountryObj["Spain"]["latitude"] = "40.463667";
tLocCountryObj["Spain"]["longitude"] = "-3.74922";
tLocCountryObj["Sri Lanka"] = {};
tLocCountryObj["Sri Lanka"]["latitude"] = "7.873054";
tLocCountryObj["Sri Lanka"]["longitude"] = "80.771797";
tLocCountryObj["Sudan"] = {};
tLocCountryObj["Sudan"]["latitude"] = "12.862807";
tLocCountryObj["Sudan"]["longitude"] = "30.217636";
tLocCountryObj["Suriname"] = {};
tLocCountryObj["Suriname"]["latitude"] = "3.919305";
tLocCountryObj["Suriname"]["longitude"] = "-56.027783";
tLocCountryObj["Swaziland"] = {};
tLocCountryObj["Swaziland"]["latitude"] = "-26.522503";
tLocCountryObj["Swaziland"]["longitude"] = "31.465866";
tLocCountryObj["Sweden"] = {};
tLocCountryObj["Sweden"]["latitude"] = "60.128161";
tLocCountryObj["Sweden"]["longitude"] = "18.643501";
tLocCountryObj["Switzerland"] = {};
tLocCountryObj["Switzerland"]["latitude"] = "46.818188";
tLocCountryObj["Switzerland"]["longitude"] = "8.227512";
tLocCountryObj["Syria"] = {};
tLocCountryObj["Syria"]["latitude"] = "34.802075";
tLocCountryObj["Syria"]["longitude"] = "38.996815";
tLocCountryObj["Taiwan"] = {};
tLocCountryObj["Taiwan"]["latitude"] = "23.69781";
tLocCountryObj["Taiwan"]["longitude"] = "120.960515";
tLocCountryObj["Tajikistan"] = {};
tLocCountryObj["Tajikistan"]["latitude"] = "38.861034";
tLocCountryObj["Tajikistan"]["longitude"] = "71.276093";
tLocCountryObj["Tanzania"] = {};
tLocCountryObj["Tanzania"]["latitude"] = "-6.369028";
tLocCountryObj["Tanzania"]["longitude"] = "34.888822";
tLocCountryObj["Thailand"] = {};
tLocCountryObj["Thailand"]["latitude"] = "15.870032";
tLocCountryObj["Thailand"]["longitude"] = "100.992541";
tLocCountryObj["Togo"] = {};
tLocCountryObj["Togo"]["latitude"] = "8.619543";
tLocCountryObj["Togo"]["longitude"] = "0.824782";
tLocCountryObj["Tonga"] = {};
tLocCountryObj["Tonga"]["latitude"] = "-21.178986";
tLocCountryObj["Tonga"]["longitude"] = "-175.198242";
tLocCountryObj["Trinidad and Tobago"] = {};
tLocCountryObj["Trinidad and Tobago"]["latitude"] = "10.691803";
tLocCountryObj["Trinidad and Tobago"]["longitude"] = "-61.222503";
tLocCountryObj["Tunisia"] = {};
tLocCountryObj["Tunisia"]["latitude"] = "33.886917";
tLocCountryObj["Tunisia"]["longitude"] = "9.537499";
tLocCountryObj["Turkey"] = {};
tLocCountryObj["Turkey"]["latitude"] = "38.963745";
tLocCountryObj["Turkey"]["longitude"] = "35.243322";
tLocCountryObj["Turkmenistan"] = {};
tLocCountryObj["Turkmenistan"]["latitude"] = "38.969719";
tLocCountryObj["Turkmenistan"]["longitude"] = "59.556278";
tLocCountryObj["Tuvalu"] = {};
tLocCountryObj["Tuvalu"]["latitude"] = "-7.109535";
tLocCountryObj["Tuvalu"]["longitude"] = "177.64933";
tLocCountryObj["Uganda"] = {};
tLocCountryObj["Uganda"]["latitude"] = "1.373333";
tLocCountryObj["Uganda"]["longitude"] = "32.290275";
tLocCountryObj["Ukraine"] = {};
tLocCountryObj["Ukraine"]["latitude"] = "48.379433";
tLocCountryObj["Ukraine"]["longitude"] = "31.16558";
tLocCountryObj["United Arab Emirates"] = {};
tLocCountryObj["United Arab Emirates"]["latitude"] = "23.424076";
tLocCountryObj["United Arab Emirates"]["longitude"] = "53.847818";
tLocCountryObj["United Kingdom"] = {};
tLocCountryObj["United Kingdom"]["latitude"] = "55.378051";
tLocCountryObj["United Kingdom"]["longitude"] = "-3.435973";
tLocCountryObj["United States"] = {};
tLocCountryObj["United States"]["latitude"] = "37.09024";
tLocCountryObj["United States"]["longitude"] = "-95.712891";
tLocCountryObj["Uruguay"] = {};
tLocCountryObj["Uruguay"]["latitude"] = "-32.522779";
tLocCountryObj["Uruguay"]["longitude"] = "-55.765835";
tLocCountryObj["Uzbekistan"] = {};
tLocCountryObj["Uzbekistan"]["latitude"] = "41.377491";
tLocCountryObj["Uzbekistan"]["longitude"] = "64.585262";
tLocCountryObj["Vanuatu"] = {};
tLocCountryObj["Vanuatu"]["latitude"] = "-15.376706";
tLocCountryObj["Vanuatu"]["longitude"] = "166.959158";
tLocCountryObj["Vatican City"] = {};
tLocCountryObj["Vatican City"]["latitude"] = "41.902916";
tLocCountryObj["Vatican City"]["longitude"] = "12.453389";
tLocCountryObj["Venezuela"] = {};
tLocCountryObj["Venezuela"]["latitude"] = "6.42375";
tLocCountryObj["Venezuela"]["longitude"] = "-66.58973";
tLocCountryObj["Vietnam"] = {};
tLocCountryObj["Vietnam"]["latitude"] = "14.058324";
tLocCountryObj["Vietnam"]["longitude"] = "108.277199";
tLocCountryObj["Yemen"] = {};
tLocCountryObj["Yemen"]["latitude"] = "15.552727";
tLocCountryObj["Yemen"]["longitude"] = "48.516388";
tLocCountryObj["Zambia"] = {};
tLocCountryObj["Zambia"]["latitude"] = "-13.133897";
tLocCountryObj["Zambia"]["longitude"] = "27.849332";
tLocCountryObj["Zimbabwe"] = {};
tLocCountryObj["Zimbabwe"]["latitude"] = "-19.015438";
tLocCountryObj["Zimbabwe"]["longitude"] = "29.154857";
console.log("tLocCountryObj: " + JSON.stringify(tLocCountryObj));
*/