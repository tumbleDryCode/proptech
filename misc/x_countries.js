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
    case "aa-show-search":
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
        case "aa-edit-place":
            tmpCountryFid = "c_country";
            tmpRegionFid = "c_region";
            tmpLocltyFid = "c_location";
            tmpCountryField = document.getElementById(tmpCountryFid);
            tmpRegionField = document.getElementById(tmpRegionFid);
            tmpLocltyField = document.getElementById(tmpLocltyFid);
            tmpTCountryFid = "tmp_c_country";
            tmpTRegionFid = "tmp_c_region";
            tmpTLocltyFid = "tmp_c_location";
            tmpTCountryField = document.getElementById(tmpTCountryFid);
            tmpTRegionField = document.getElementById(tmpTRegionFid);
            tmpTLocltyField = document.getElementById(tmpTLocltyFid);
            var tmpLocLatFid = "c_loc_lat";
            var tmpLocLngFid = "c_loc_lng";
            var tmpTLocLatFid = "tmp_c_loc_lat";
            var tmpTLocLngFid = "tmp_c_loc_lng";
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
 /*
var tLocCCodeToCountryObj = {
    "AF": "Afghanistan",
    "AL": "Albania",
    */
   

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


var tLocCCTCtryObj = {};
for(var tccKey in tLocCccodeObj) {
    var tccVal = tLocCccodeObj[tccKey]["ccode"];
    tLocCCTCtryObj[tccVal] = tccKey;
}

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

function getTCtryKeyValArr() {
    var tArr = [];
    tVCKObj = {};
    for (var key in tLocCccodeObj) {

      ytKeyName = key;
        ytKeyValue = tLocCccodeObj[key].ccode;
        tVCKObj[ytKeyName] = ytKeyName;
        // tResDDACstr = "<a class='acdropdown-item' href='#' onclick='doZonePckChg(this, \"" + tURResArr[iddur].geonameid + "\", \"" + tURResArr[iddur].asciiname + "\")'>" + tURResArr[iddur].asciiname + "</a>";
       //  tmpLocArr.push(tResDDACstr);
       tResDDACstr = "<a class=\"acdropdown-item\" href=\"javascript:doCountryPckChg('dvCountryDD','noQvalue', '" + ytKeyName + "')\">" + ytKeyName + "</a><br>";
         tArr.push(tResDDACstr);
    }
    console.log("getTCtryKeyAsVal: " + JSON.stringify(tArr));
    return tArr;
}

function getTCtryPopStr() {
 // alert("getTCtryPopStr");
  try {
    tResPpstr = "<div style=\"max-height: 390px; overflow-y: auto;\">";

    for (var key in tLocCccodeObj) {

      ytKeyName = key;
      ytKeyValue = tLocCccodeObj[key].ccode;
      tVCKObj[ytKeyName] = ytKeyName;

      tResPpstr += "<a class=\"txtSmall txtBold txtClrHdr\" href=\"javascript:doZonePckChg(this, '" + ytKeyName + "', '" + ytKeyName + "')\">" + ytKeyName + "</a><br>";

    }
    tResPpstr += "</div>";
     return tResPpstr;
} catch(e) {
    JSSHOP.ui.popAndFillLbox("getTCtryPopStr: " + e);
    return "noQvalue:" + e;
}
}

/*
    * Function to get the country code
    */
function getCountryCode(pCountryName) {
    if(pCountryName == null || pCountryName == "Espana") {
        pCountryName = "Spain";
    }
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
        getWikiData(tZPtxt, readWikiData);
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
            
        } else {
            tDDlocObj = {};
            tDDlocObj[tmpLocltyField.value] = tmpLocltyField.value;

 
        }
        tDDXtraCntObj = {};
            tDDXtraCntObj["ddtype"] = "noQvalue";
            tDDXtraCntObj["fld"] = tmpLocltyField.id;
            tDDXtraCntObj["fldb"] = "tmp_" + tudsA;
            tDDXtraCntObj["lbl"] = stxt[203];
            tDDXtraCntObj["val"] = tmpLocltyField.value;
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
     dvRegionDD.innerHTML = "";
        tStr = "";
        tAdmin1code = "1";
        tDDregObj = "";
        tURResArr = "";
        tDDregObj = {};
        tURResArr = [];
        if(tudsB.indexOf("geonameid") != -1) {
            cleanTudsB = tudsB.replace(/[\n\r]/g, '');
            cleanTudsC = cleanTudsB.replace(/[\t]/g, '');
            cleanTudsD = cleanTudsC.replace(/[\']/g, ' ');
            cleanTudsE = cleanTudsD.replace(/[\\]/g, ' ');
            // cleanForJson = cleanTudsB.replace(/[\n\r]/g, '');
            console.log("setUregionDD: " + cleanTudsE);
            tURResArr = JSON.parse(cleanTudsE);
            for(var iddur=0; iddur<tURResArr.length; iddur++) {
                tDDregObj[tURResArr[iddur].asciiname] = tURResArr[iddur].asciiname;
               
                tmpRegionObj[tURResArr[iddur].asciiname] = {};
                tmpRegionObj[tURResArr[iddur].asciiname]["admin1"] = tURResArr[iddur].admin1_code;

                tmpRegionObj[tURResArr[iddur].asciiname]["latitude"] = tURResArr[iddur].latitude;
                tmpRegionObj[tURResArr[iddur].asciiname]["longitude"] = tURResArr[iddur].longitude;
                tmpRegionObj[tURResArr[iddur].asciiname]["latlng"] = tURResArr[iddur].latitude + "," + tURResArr[iddur].longitude;
                // tResDDACstr = "<a class='dropdown-item' href='#' onclick='doRegionPckChg('noQvalue','" + tmpRegionFid + "','" +  tURResArr[iddur].asciiname + "\")'>" + tURResArr[iddur].asciiname + "</a>";
                tResDDACstr = "<a class=\"acdropdown-item\" href=\"javascript:doRegionPckChg('noQvalue','" + tmpRegionFid + "','" +  tURResArr[iddur].asciiname + "','"  +  tURResArr[iddur].asciiname + "')\">" + tURResArr[iddur].asciiname + "</a><br>";   
                tmpRegionArr.push(tResDDACstr);
                if(tURResArr[iddur].asciiname == document.getElementById(tmpRegionFid).value) {
                  //   getLocltyDropStr(getCountryCode(document.getElementById(tmpCountryFid).value), tURResArr[iddur].admin1_code, "dvLocltyDD", "setLocltyDD");  
                  tAdmin1code = tURResArr[iddur].admin1_code;
                }
               
            }
            currACTblCnt = tmpRegionArr.length;
            tDDXtraCntObj = {};
            tDDXtraCntObj["ddtype"] = "noQvalue";
            tDDXtraCntObj["fld"] = tmpRegionFid;
            tDDXtraCntObj["fldb"] = tmpTRegionFid;
            tDDXtraCntObj["lbl"] = stxt[204];
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
 
            getLocltyDropStr(getCountryCode(document.getElementById(tmpCountryFid).value), tAdmin1code, "dvLocltyDD", "setLocltyDD");  

        } else {
            tStr = "No data";
        }
           } catch(e) {
        alert("setUregionDD: " + e);
    }
}

function getRegionDropStr(tRDCountry, tRDDel,  tRddcb) {
    tPopNumber = 10000;
    console.log("getRegionDropStr: " + tRDCountry + " :: " + tRDDel + " :: " + tRddcb);
    tRDCountry = tRDCountry.replace(/[\n\r]/g, '');
    tRDCountry = tRDCountry.replace(/[\t]/g, '');
    tRDCountry = tRDCountry.replace(/[\']/g, ' ');
    tRDCountry = tRDCountry.replace(/[\\]/g, ' ');
    console.log("getRegionDropStr: " + tRDCountry);
    tmpFobj = null;
    tCCcode = getCountryCode(tRDCountry);
    tmpFobj = {};
    switch(tRDCountry) {
        case "France":
            tPopNumber = 20000;
            break;
            case "Spain":
            tPopNumber = 15000;
            break;
            default:
            tPopNumber = 10000;
    }

    tmpFobj["ws"] = "where country_code=? and  (feature_code=? or feature_code=? or population >?)";
    tmpFobj["wa"] = [tCCcode, "PPL", "PPLA", tPopNumber];
    tmpFobj["o"] = "asciiname asc";
    tmpFobj["l"] = 1000;
    // tStr = "select * from countries where country_code=? and  feature_code= 'PLA' or feature_code= 'PPLA' order by m_vala desc";
    oi = getNuDBFnvp("countries", 5, null, tmpFobj);
    doQComm(oi["rq"], tRDDel, tRddcb);
}


function doCountryPckChg(tZPCel, tZPVal, tZPtxt) {
    console.log("doCountryPckChg: " + tZPCel + " " + tZPVal + " " + tZPtxt);

    try {
              if(tZPCel == "noQvalue") {
    document.getElementById(tmpRegionFid).value = "";
    document.getElementById(tmpLocltyFid).value = "";
    
     }
      tmwpDOs = {};
        tmwpDOs["country"] = tZPtxt;
        tmwpDOs["latitude"] = getCountryLatitude(tZPtxt);
        tmwpDOs["longitude"] = getCountryLongitude(tZPtxt);
        tmwpDOs["ccode"] = getCountryCode(tZPtxt);
        tmwpDOs["latlng"] = getCountryLatLong(tZPtxt);
        tmwpDOs["region"] = "noQvalue";
        document.getElementById(tmpTCountryFid).value = tZPtxt;
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
    tDDXtraCntObj["fldb"] = "tmp_" + tCDSfld;    
    tDDXtraCntObj["lbl"] = stxt[205];
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
    tCDDACarr = getTCtryKeyValArr();
    setTimeout(function() {
        JSSHOP.ui.doNuAutoComp(document.getElementById("tmp_" + tCDSfld), tCDDACarr, "dvCountryAC");
    }, 1000);
    return tStr;
}


// 3rd party functions
// get places


var qlDoPDetails = function(theDPResp) {
	try {
	 
	theDPAesp = removeDiacritics(theDPResp);
	// alert("getDPRespStr: " + theDPResp);
	tDPRObj = JSON.parse(theDPAesp);
	qloga_name.value = "-";
	
	console.log("getDPRespStr: " + JSON.stringify(tDPRObj));
	 
	
	 
	
	if(tDPRObj.address) {
	tAOBjVobj = tDPRObj.address;
	// qloga_name.value = tDPRObj.address;
	if(tAOBjVobj["amenity"]) {
	qloga_name.value = tAOBjVobj["amenity"];
	}
	
	if(tAOBjVobj["postcode"]) {
		qloga_zipcode.value = tAOBjVobj["postcode"];
	}
	if(tAOBjVobj["road"]) {
		qloga_street.value = tAOBjVobj["road"];
	}
	if(tAOBjVobj["city_district"]) {
		qloga_location.value = tAOBjVobj["city_district"];
	}
	if(tAOBjVobj["city"]) {
		qloga_location.value = tAOBjVobj["city"];
	}
	if(tAOBjVobj["county"]) {
		qloga_region.value = tAOBjVobj["county"];
	}
	if(tAOBjVobj["country"]) {
		qloga_country.value = tAOBjVobj["country"];
	}
	 
	if(tAOBjVobj["shop"]) {
		qloga_name.value = tAOBjVobj["shop"] + " " + qlogp_location.value;
	} else if(tAOBjVobj["namedetails"]){
		if(tAOBjVobj["namedetails"]["name"]) {
			qloga_name.value = ttAOBjVobj["namedetails"]["name"] + " " + qlogp_location.value;
	
		}  
	}  
	}
	if(tDPRObj.lat) {
		qloga_loc_lat.value = tDPRObj.lat;
	}
	if(tDPRObj.lon) {
		qloga_loc_lng.value = tDPRObj.lon;
	}
	if(tDPRObj.place_id) {
		qloga_placeid.value = tDPRObj.place_id;
	}
	 
	qloga_dadded.value = JSSHOP.getUnixTimeStamp();
	console.log("qlDoPDetails: " + JSON.stringify(tAOBjVobj));

	} catch(e) {
	alert("qlDoPDetails: " + e);
	}
	
	};


var qlRunPDetails = function(thePDa,thePDResp,thePDc) {
	console.log("runPlaceDetails: " + thePDResp)
	try {
		tDPRObj = JSON.parse(thePDResp);
		if((tDPRObj.lat)  && (tDPRObj.lon)) {
			// alert("qlRunPDetails.lat: " + tDPRObj.lat + " lon: " + tDPRObj.lon)
			// JSSHOP.ui.popLboxMap(tDPRObj.lat, tDPRObj.lon);
		} else {
			// JSSHOP.ui.popLboxMap(tDPRObj.lat, tDPRObj.lon);
		}
		qlDoPDetails(thePDResp);
	// JSSHOP.ui.popAndFillLbox(qlDoPDetails(thePDResp));
	} catch(e) {
	alert("runPlaceDetails: " + e);
	}
	};

var qlShowPDetails = function(tPlaceIDXstr) {

	qlRunPDetails(null, JSON.stringify(currSPRArr[tPlaceIDXstr]), null);
   };

var qlDoPlacesSearch = function() {
	qlDoNuPlSearch(tmp_qv.value);
};




var qlDoNuPlSearch = function(tInpNQLPS, tInpNQLDV, tInpNQLCB) {
	try {
		tSrchInp = document.getElementById(tInpNQLPS);
		tSrchIval = tSrchInp.value;
		// tBtnPS = document.getElementById("btnPSearch");
		// tBtnPS.disabled = true;
	// doSpinSet(tInpNQLDV, "small", null);
	 
	
	if((isJApp !== "no") && (isPhP == "no")) { 
	trstr = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=place_id,formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&inputtype=textquery&key=AIzaSyBpMAowLSBf-e_GAykNSdODo0Lap9WmLtE&input=" + encodeURIComponent(tSrchIval);
	tRespStr = app.getUrlRespString(trstr);
	document.getElementById("fldChallArray").value = tRespStr;
	ttRespStr = document.getElementById("fldChallArray").value;
	qlShowPlacesRes("nada", ttRespStr, "nada" );
	} else {}
	JSSHOP.ajax.doNuAjaxPipe(tInpNQLDV, "_p/osmgeo.php?qv=" + encodeURI(tSrchIval), tInpNQLCB);
	
	} catch(e) {
	alert("qlDoPlacesSearch: " + e);
	}
	};


var qlShowPlacesRes = function(thePSa,thePSResp,thePSc) {
	// alert("runPlacesSearch: " + thePSa + " " + thePSResp + " " + thePSc);
	// btnEUsave.disabled = false;
	mtImDSStr = "js/leaflet/images/tr6.gif";
	mredIcon = new LeafIcon({iconUrl: mtImDSStr});
   	var options = { icon: mredIcon };
	currMapMrkrArr = null;
	currMapMrkrArr = "";
	currMapMrkrArr = [];

	// tBtnPS = document.getElementById("btnPSearch");
	// tBtnPS.disabled = false;
	hasr = "n";
	fullstr = "";
	// alert("runPlacesSearch: " + thePSResp);
	farrToFill = JSON.parse(thePSResp);
	farrToFC = farrToFill;
	currSPRArr = null;
	currSPRArr = farrToFC;
	var len = farrToFC.length;
	console.log("farrToFC: " + JSON.stringify(farrToFC));
	var iint = 0;
	var pcid = 0;
	tstr = "";

	
	while(iint < len) {
	fcts = farrToFC[iint];



	tMrkr = null;
tMrkr = "";
tMrkr  = L.marker([fcts.lat, fcts.lon], options).bindPopup('<span class="txtBold txtClrRed"><a href="javascript:dropMrkr(o);">DROP</a></span>');
currMapMrkrArr.push(tMrkr);

	fullstr += "<tr>";
	fullstr += "<td><a href=\"javascript:qlShowPDetails('" + iint + "');currSPRIdx=" + iint + ";JSSHOP.ui.popAndFillLbox(getPPAddPOp());\"><span class=\"txtBold\">" + fcts.display_name +  "</span></a></td>";
	fullstr += "<td><a href=\"javascript:qlShowPDetails('" + iint + "');currSPRIdx=" + iint + ";JSSHOP.ui.popLboxMap('" + fcts.lat + "','" + fcts.lon + "','qlaTest');\"><span class=\"txtBold\">222</span></a></td>";
 
	fullstr += "</tr>";
	iint++;
	}

 
   tTHstr = "<tr><th></th><th></th><th></th></tr>";

 
    theRespDiv = document.getElementById(thePSa);
	// fullstr += thePSResp;
	theRespDiv.innerHTML = getTblSortStr(tTHstr, fullstr);

	};

    function readWikiData(tWDa, tWDaResp, tWDc) {
         console.log("readWikiData: " + tWDaResp);
        
    }

    function getWikiData(tWDS, tWDCB) {
        tWDS = "_p/wtest.php?qv=" + tWDS;
        JSSHOP.ajax.doNuAjaxPipe("noQvalue", tWDS, tWDCB);
    }