 

var tmpLocArr = [];
 tmpLocArr = [{"c_location":"A dos Cunhados","c_zp":"25","c_loc_lat":"39.1479313","c_loc_lng":"-9.3643533"},{"c_location":"AA","c_zp":"25","c_loc_lat":"39.420899","c_loc_lng":"-9.2443483"},{"c_location":"Abacao","c_zp":"0","c_loc_lat":"41.4100117","c_loc_lng":"-8.3600599"},{"c_location":"Abade de Neiva","c_zp":"47","c_loc_lat":"41.5528746","c_loc_lng":"-8.716339"},{"c_location":"Abrantes","c_zp":"22","c_loc_lat":"39.4683809","c_loc_lng":"-8.2904289"},{"c_location":"Abraveses","c_zp":"35","c_loc_lat":"40.6821084","c_loc_lng":"-8.0034543"},{"c_location":"Adaufe","c_zp":"47","c_loc_lat":"41.5742067","c_loc_lng":"-8.4858347"},{"c_location":"Agrela","c_zp":"0","c_loc_lat":"41.2604236","c_loc_lng":"-8.5654068"},{"c_location":"Aguada de Cima","c_zp":"37","c_loc_lat":"40.5333112","c_loc_lng":"-8.5302325"},{"c_location":"Agualva-Cacem","c_zp":"27","c_loc_lat":"38.7774268","c_loc_lng":"-9.3623961"},{"c_location":"Aguas Santas","c_zp":"44","c_loc_lat":"41.2048696","c_loc_lng":"-8.6754314"},{"c_location":"Agucadoura","c_zp":"44","c_loc_lat":"41.4288449","c_loc_lng":"-8.8550393"},{"c_location":"Agueda","c_zp":"37","c_loc_lat":"40.5440173","c_loc_lng":"-8.5287537"},{"c_location":"Aguiar da Beira","c_zp":"35","c_loc_lat":"40.8194076","c_loc_lng":"-7.6203551"},{"c_location":"Aguieiras","c_zp":"53","c_loc_lat":"41.6931926","c_loc_lng":"-7.2706754"},{"c_location":"Airaes","c_zp":"0","c_loc_lat":"41.3137989","c_loc_lng":"-8.299215"},{"c_location":"Albergaria dos Doze","c_zp":"31","c_loc_lat":"39.793785","c_loc_lng":"-8.6727727"},{"c_location":"Albufeira","c_zp":"82","c_loc_lat":"37.1254556","c_loc_lng":"-8.3162848"},{"c_location":"Alcacer do Sal","c_zp":"75","c_loc_lat":"38.3946027","c_loc_lng":"-8.5901607"},{"c_location":"Alcains","c_zp":"60","c_loc_lat":"39.9133687","c_loc_lng":"-7.5539988"},{"c_location":"Alcambar","c_zp":"23","c_loc_lat":"39.8132714","c_loc_lng":"-7.6024412"},{"c_location":"Alcanena","c_zp":"23","c_loc_lat":"39.4610445","c_loc_lng":"-8.7405257"},{"c_location":"Alcanhoes","c_zp":"20","c_loc_lat":"39.2998263","c_loc_lng":"-8.7431756"},{"c_location":"Alcantarilha","c_zp":"83","c_loc_lat":"37.1194976","c_loc_lng":"-8.4322748"},{"c_location":"Alcaria","c_zp":"62","c_loc_lat":"40.1948255","c_loc_lng":"-7.576789"},{"c_location":"Alcobaca","c_zp":"24","c_loc_lat":"39.5451494","c_loc_lng":"-9.0686526"},{"c_location":"Aldeia Paio Pires","c_zp":"28","c_loc_lat":"38.6032013","c_loc_lng":"-9.1444757"},{"c_location":"Aldeia Santo Antonio","c_zp":"63","c_loc_lat":"40.3474852","c_loc_lng":"-7.1782711"},{"c_location":"Alfeizerao","c_zp":"24","c_loc_lat":"39.499713","c_loc_lng":"-9.1838741"},{"c_location":"Alfena","c_zp":"44","c_loc_lat":"41.2288655","c_loc_lng":"-8.6105572"},{"c_location":"Alfragide","c_zp":"14","c_loc_lat":"38.7373627","c_loc_lng":"-9.2989144"},{"c_location":"Alges","c_zp":"14","c_loc_lat":"38.7053437","c_loc_lng":"-9.3110367"},{"c_location":"Alhandra","c_zp":"26","c_loc_lat":"38.9288123","c_loc_lng":"-9.094183"},{"c_location":"Alhos Vedros","c_zp":"28","c_loc_lat":"38.6578273","c_loc_lng":"-9.1186819"},{"c_location":"Alijo","c_zp":"50","c_loc_lat":"41.3115252","c_loc_lng":"-7.5461698"},{"c_location":"Almada","c_zp":"28","c_loc_lat":"38.6653443","c_loc_lng":"-9.2394451"},{"c_location":"Almancil","c_zp":"81","c_loc_lat":"37.0850344","c_loc_lng":"-8.1076133"},{"c_location":"Almeirim","c_zp":"20","c_loc_lat":"39.196994","c_loc_lng":"-8.7058344"},{"c_location":"Alpendurada e Matos","c_zp":"45","c_loc_lat":"41.0763115","c_loc_lng":"-8.3320298"},{"c_location":"Alportel","c_zp":"81","c_loc_lat":"37.1527156","c_loc_lng":"-7.9769454"},{"c_location":"Alto Do Vieiro","c_zp":"25","c_loc_lat":"39.7306824","c_loc_lng":"-8.9077447"},{"c_location":"Alvarelhos","c_zp":"47","c_loc_lat":"41.3001732","c_loc_lng":"-8.68693"},{"c_location":"Alvelos","c_zp":"47","c_loc_lat":"41.5158744","c_loc_lng":"-8.6992433"},{"c_location":"Alverca do Ribatejo","c_zp":"26","c_loc_lat":"38.9032464","c_loc_lng":"-9.1276603"},{"c_location":"Alverca Ribatejo","c_zp":"26","c_loc_lat":"38.9024539","c_loc_lng":"-9.1070062"},{"c_location":"Alvor","c_zp":"0","c_loc_lat":"37.1329879","c_loc_lng":"-8.6750096"},{"c_location":"Amadora","c_zp":"27","c_loc_lat":"38.7543687","c_loc_lng":"-9.2930302"},{"c_location":"Amarante","c_zp":"46","c_loc_lat":"41.2795501","c_loc_lng":"-8.1646158"},{"c_location":"Amiais Baixo","c_zp":"0","c_loc_lat":"39.4439401","c_loc_lng":"-8.8218113"},{"c_location":"Amor","c_zp":"24","c_loc_lat":"39.8037484","c_loc_lng":"-8.9421428"},{"c_location":"Amora","c_zp":"28","c_loc_lat":"38.6191916","c_loc_lng":"-9.2007255"},{"c_location":"Amora,","c_zp":"28","c_loc_lat":"38.6232916","c_loc_lng":"-9.202059"},{"c_location":"Amoreira da Gandara","c_zp":"37","c_loc_lat":"40.4798168","c_loc_lng":"-8.6241621"},{"c_location":"Amorim","c_zp":"44","c_loc_lat":"41.3976851","c_loc_lng":"-8.8202002"},{"c_location":"Anadia","c_zp":"44","c_loc_lat":"40.4160084","c_loc_lng":"-8.5314061"},{"c_location":"Ancas","c_zp":"37","c_loc_lat":"40.4655148","c_loc_lng":"-8.5878735"},{"c_location":"Andre","c_zp":"75","c_loc_lat":"38.0483364","c_loc_lng":"-8.8715628"},{"c_location":"Angra do Heroismo","c_zp":"97","c_loc_lat":"38.6538284","c_loc_lng":"-27.2947128"},{"c_location":"Angra Heroismo","c_zp":"97","c_loc_lat":"38.6559901","c_loc_lng":"-27.282417"},{"c_location":"Ansiaes","c_zp":"51","c_loc_lat":"41.2462387","c_loc_lng":"-7.3972536"},{"c_location":"Antanhol","c_zp":"30","c_loc_lat":"40.1676108","c_loc_lng":"-8.5462461"},{"c_location":"Antes","c_zp":"30","c_loc_lat":"40.3832246","c_loc_lng":"-8.5538913"},{"c_location":"Apelacao","c_zp":"26","c_loc_lat":"38.8096427","c_loc_lng":"-9.2207814"},{"c_location":"Apulia","c_zp":"47","c_loc_lat":"41.4866432","c_loc_lng":"-8.8445583"},{"c_location":"Arada","c_zp":"38","c_loc_lat":"40.8973952","c_loc_lng":"-8.6674613"},{"c_location":"Aradas","c_zp":"38","c_loc_lat":"40.6146898","c_loc_lng":"-8.7156078"},{"c_location":"Arca","c_zp":"0","c_loc_lat":"41.7644533","c_loc_lng":"-8.6605235"},{"c_location":"Arcos de Valdevez","c_zp":"49","c_loc_lat":"41.8457929","c_loc_lng":"-8.5024514"},{"c_location":"Arcozelo","c_zp":"44","c_loc_lat":"41.0669722","c_loc_lng":"-8.7097177"},{"c_location":"Ardim De Baixo","c_zp":"0","c_loc_lat":"39.2547393","c_loc_lng":"-8.7643326"},{"c_location":"Areias","c_zp":"47","c_loc_lat":"41.3611723","c_loc_lng":"-8.5687857"},{"c_location":"Argivai","c_zp":"44","c_loc_lat":"41.3719893","c_loc_lng":"-8.8268188"},{"c_location":"Argoncilhe","c_zp":"45","c_loc_lat":"41.0066073","c_loc_lng":"-8.6316701"},{"c_location":"Ariz","c_zp":"0","c_loc_lat":"41.1217635","c_loc_lng":"-8.2997439"},{"c_location":"Armacao de Pera","c_zp":"83","c_loc_lat":"37.1305876","c_loc_lng":"-8.4364467"},{"c_location":"Arnoso (Santa Eulalia)","c_zp":"0","c_loc_lat":"41.4722555","c_loc_lng":"-8.6064863"},{"c_location":"Arnoso (Santa Maria)","c_zp":"47","c_loc_lat":"41.4690217","c_loc_lng":"-8.5837891"},{"c_location":"Aroeira","c_zp":"28","c_loc_lat":"38.5807209","c_loc_lng":"-9.2575134"},{"c_location":"Aroes (Santa Cristina)","c_zp":"48","c_loc_lat":"41.4465453","c_loc_lng":"-8.2870447"},{"c_location":"Arrentela","c_zp":"28","c_loc_lat":"38.6069896","c_loc_lng":"-9.1770658"},{"c_location":"Arrifana","c_zp":"37","c_loc_lat":"40.9209888","c_loc_lng":"-8.5845861"},{"c_location":"Arrifes","c_zp":"95","c_loc_lat":"37.757685","c_loc_lng":"-25.7711739"},{"c_location":"Arvore","c_zp":"44","c_loc_lat":"41.3317551","c_loc_lng":"-8.8021046"},{"c_location":"Arvore Vila do Conde","c_zp":"44","c_loc_lat":"41.3324868","c_loc_lng":"-8.8024294"},{"c_location":"Ataes","c_zp":"0","c_loc_lat":"41.4518711","c_loc_lng":"-8.3208413"},{"c_location":"Atalaia","c_zp":"22","c_loc_lat":"39.4806099","c_loc_lng":"-8.5332433"},{"c_location":"Atouguia","c_zp":"24","c_loc_lat":"39.6674989","c_loc_lng":"-8.7144038"},{"c_location":"Atouguia da Baleia","c_zp":"25","c_loc_lat":"39.3456078","c_loc_lng":"-9.4226304"},{"c_location":"Aveiro","c_zp":"38","c_loc_lat":"40.9940367","c_loc_lng":"-8.7216318"},{"c_location":"Avelas de Caminho","c_zp":"37","c_loc_lat":"40.4783455","c_loc_lng":"-8.5322648"},{"c_location":"Aveleda","c_zp":"44","c_loc_lat":"41.2571415","c_loc_lng":"-8.7744693"},{"c_location":"Aver-o-Mar","c_zp":"44","c_loc_lat":"41.4054566","c_loc_lng":"-8.849589"},{"c_location":"Avintes","c_zp":"44","c_loc_lat":"41.1178674","c_loc_lng":"-8.6341578"},{"c_location":"Azemeis","c_zp":"37","c_loc_lat":"40.8361374","c_loc_lng":"-8.5625416"},{"c_location":"Azurara","c_zp":"44","c_loc_lat":"41.3414736","c_loc_lng":"-8.8175703"},{"c_location":"Baguim do Monte","c_zp":"44","c_loc_lat":"41.1970407","c_loc_lng":"-8.6185179"},{"c_location":"Bagunte","c_zp":"44","c_loc_lat":"41.3617186","c_loc_lng":"-8.7528335"},{"c_location":"Bairro Couto","c_zp":"53","c_loc_lat":"41.7734429","c_loc_lng":"-6.8703203"},{"c_location":"Bairro do Machado","c_zp":"17","c_loc_lat":"41.4604119","c_loc_lng":"-8.3961563"},{"c_location":"Bairro Santo Estevao","c_zp":"0","c_loc_lat":"40.6814537","c_loc_lng":"-8.0047449"},{"c_location":"Baixa da Banheira","c_zp":"28","c_loc_lat":"38.6575134","c_loc_lng":"-9.1206149"},{"c_location":"Baltar","c_zp":"45","c_loc_lat":"41.1764252","c_loc_lng":"-8.4668273"},{"c_location":"Barcarena","c_zp":"27","c_loc_lat":"38.7322202","c_loc_lng":"-9.3641538"},{"c_location":"Barcelos","c_zp":"47","c_loc_lat":"41.5613983","c_loc_lng":"-8.6845581"},{"c_location":"Barco","c_zp":"48","c_loc_lat":"41.5087486","c_loc_lng":"-8.4140877"},{"c_location":"Barosa","c_zp":"24","c_loc_lat":"39.7486435","c_loc_lng":"-8.9480558"},{"c_location":"Barreiro","c_zp":"28","c_loc_lat":"38.6392794","c_loc_lng":"-9.1380702"},{"c_location":"Barreiros Canico Ilha Da","c_zp":"28","c_loc_lat":"32.6469351","c_loc_lng":"-16.9223405"},{"c_location":"Barro","c_zp":"37","c_loc_lat":"40.5391978","c_loc_lng":"-8.551665"},{"c_location":"Barroca","c_zp":"94","c_loc_lat":"33.0639739","c_loc_lng":"-16.4183479"},{"c_location":"Beco das Velhas","c_zp":"63","c_loc_lat":"40.5421498","c_loc_lng":"-7.3237348"},{"c_location":"Beiriz","c_zp":"44","c_loc_lat":"41.3874905","c_loc_lng":"-8.8116841"},{"c_location":"Beja","c_zp":"78","c_loc_lat":"38.018751","c_loc_lng":"-7.9442758"},{"c_location":"Bela","c_zp":"44","c_loc_lat":"41.0694313","c_loc_lng":"-8.7090275"},{"c_location":"Belas","c_zp":"26","c_loc_lat":"38.7836361","c_loc_lng":"-9.3678809"},{"c_location":"Belmonte","c_zp":"62","c_loc_lat":"40.3696455","c_loc_lng":"-7.4293063"},{"c_location":"Belmonte De Baixo","c_zp":"85","c_loc_lat":"37.0482082","c_loc_lng":"-7.9467843"},{"c_location":"Benavente","c_zp":"21","c_loc_lat":"38.9797219","c_loc_lng":"-8.8938897"},{"c_location":"Besteiros","c_zp":"45","c_loc_lat":"41.2285527","c_loc_lng":"-8.4315047"},{"c_location":"Bitaraes","c_zp":"45","c_loc_lat":"41.2348013","c_loc_lng":"-8.399803"},{"c_location":"Boa Vista","c_zp":"24","c_loc_lat":"39.7872088","c_loc_lng":"-8.8313908"},{"c_location":"Bobadela","c_zp":"26","c_loc_lat":"38.801504","c_loc_lng":"-9.1854449"},{"c_location":"Bodiosa","c_zp":"0","c_loc_lat":"40.7124474","c_loc_lng":"-8.0408891"},{"c_location":"Boidobra","c_zp":"0","c_loc_lat":"40.2511895","c_loc_lng":"-7.5717739"},{"c_location":"Boliqueime","c_zp":"81","c_loc_lat":"37.1282682","c_loc_lng":"-8.2415211"},{"c_location":"Borralha","c_zp":"37","c_loc_lat":"40.5424522","c_loc_lng":"-8.5286729"},{"c_location":"Bougado","c_zp":"47","c_loc_lat":"41.3247386","c_loc_lng":"-8.6616368"},{"c_location":"Braga","c_zp":"47","c_loc_lat":"41.5350764","c_loc_lng":"-8.5253821"},{"c_location":"Braganca","c_zp":"53","c_loc_lat":"41.7861386","c_loc_lng":"-6.8582618"},{"c_location":"Branco","c_zp":"60","c_loc_lat":"39.8013197","c_loc_lng":"-7.6206244"},{"c_location":"Brandoa","c_zp":"26","c_loc_lat":"38.7701985","c_loc_lng":"-9.3017367"},{"c_location":"Brenha","c_zp":"30","c_loc_lat":"40.1885455","c_loc_lng":"-8.9148809"},{"c_location":"Brufe","c_zp":"47","c_loc_lat":"41.4207293","c_loc_lng":"-8.6132181"},{"c_location":"Buarcos","c_zp":"30","c_loc_lat":"40.1719597","c_loc_lng":"-8.9725482"},{"c_location":"Buraca","c_zp":"26","c_loc_lat":"38.7448939","c_loc_lng":"-9.2902884"},{"c_location":"Cabanas","c_zp":"88","c_loc_lat":"37.1335013","c_loc_lng":"-7.6909279"},{"c_location":"Cabanoes","c_zp":"35","c_loc_lat":"40.6283522","c_loc_lng":"-7.996449"},{"c_location":"Cabecas Azoia","c_zp":"24","c_loc_lat":"39.6984642","c_loc_lng":"-8.920873"},{"c_location":"Cacia","c_zp":"38","c_loc_lat":"40.6743555","c_loc_lng":"-8.6851762"},{"c_location":"Cadafais","c_zp":"0","c_loc_lat":"39.0045081","c_loc_lng":"-9.0861707"},{"c_location":"Cais das Pedras ","c_zp":"0","c_loc_lat":"41.1456958","c_loc_lng":"-8.7126157"},{"c_location":"Caldas da Rainha","c_zp":"25","c_loc_lat":"39.4330829","c_loc_lng":"-9.2130979"},{"c_location":"Caldas de Sao Jorge","c_zp":"45","c_loc_lat":"40.9713215","c_loc_lng":"-8.5874117"},{"c_location":"Caldas de Vizela","c_zp":"48","c_loc_lat":"41.3735031","c_loc_lng":"-8.4041123"},{"c_location":"Caldelas","c_zp":"48","c_loc_lat":"41.4874126","c_loc_lng":"-8.4326257"},{"c_location":"Calendario","c_zp":"47","c_loc_lat":"41.4039039","c_loc_lng":"-8.6152438"},{"c_location":"Camacha","c_zp":"91","c_loc_lat":"32.6921513","c_loc_lng":"-16.948269"},{"c_location":"Camara de Lobos","c_zp":"93","c_loc_lat":"32.6547173","c_loc_lng":"-17.0533958"},{"c_location":"Camarate","c_zp":"26","c_loc_lat":"38.8094527","c_loc_lng":"-9.2206274"},{"c_location":"Cambra","c_zp":"37","c_loc_lat":"40.8639235","c_loc_lng":"-8.4778962"},{"c_location":"Campanario","c_zp":"93","c_loc_lat":"32.6721459","c_loc_lng":"-17.1132577"},{"c_location":"Campanha","c_zp":"43","c_loc_lat":"41.1584592","c_loc_lng":"-8.6664398"},{"c_location":"Campia","c_zp":"0","c_loc_lat":"40.6342788","c_loc_lng":"-8.3141055"},{"c_location":"Campo","c_zp":"44","c_loc_lat":"41.1641004","c_loc_lng":"-8.5479062"},{"c_location":"Campo de Besteiros","c_zp":"34","c_loc_lat":"40.5535538","c_loc_lng":"-8.2153424"},{"c_location":"Cancela","c_zp":"90","c_loc_lat":"32.6464214","c_loc_lng":"-16.9438749"},{"c_location":"Candoso (Santiago)","c_zp":"48","c_loc_lat":"41.4195411","c_loc_lng":"-8.4042723"},{"c_location":"Canecas","c_zp":"16","c_loc_lat":"38.8105446","c_loc_lng":"-9.2985948"},{"c_location":"Canedo","c_zp":"15","c_loc_lat":"41.0106542","c_loc_lng":"-8.5430371"},{"c_location":"Canelas","c_zp":"44","c_loc_lat":"41.0667067","c_loc_lng":"-8.6916433"},{"c_location":"Canhoso","c_zp":"62","c_loc_lat":"40.2936519","c_loc_lng":"-7.5669898"},{"c_location":"Canical","c_zp":"92","c_loc_lat":"32.736517","c_loc_lng":"-16.8277596"},{"c_location":"Canico","c_zp":"92","c_loc_lat":"32.6469351","c_loc_lng":"-16.9223405"},{"c_location":"Canidelo","c_zp":"44","c_loc_lat":"41.1343426","c_loc_lng":"-8.7264324"},{"c_location":"Cantanhede","c_zp":"30","c_loc_lat":"40.3541977","c_loc_lng":"-8.6877606"},{"c_location":"Cantanhede,","c_zp":"30","c_loc_lat":"40.3445668","c_loc_lng":"-8.6646081"},{"c_location":"Caparica","c_zp":"0","c_loc_lat":"38.6495197","c_loc_lng":"-9.2837328"},{"c_location":"Capelas","c_zp":"95","c_loc_lat":"37.8317956","c_loc_lng":"-25.762782"},{"c_location":"Caramos","c_zp":"46","c_loc_lat":"41.3466817","c_loc_lng":"-8.2466108"},{"c_location":"Caranguejeira","c_zp":"24","c_loc_lat":"39.7470915","c_loc_lng":"-8.7769927"},{"c_location":"Cardielos","c_zp":"49","c_loc_lat":"41.7142194","c_loc_lng":"-8.8204854"},{"c_location":"Caria","c_zp":"62","c_loc_lat":"40.3143823","c_loc_lng":"-7.4458133"},{"c_location":"Carnaxide","c_zp":"27","c_loc_lat":"38.7213036","c_loc_lng":"-9.3042593"},{"c_location":"Carnide","c_zp":"0","c_loc_lat":"39.8973671","c_loc_lng":"-8.8431937"},{"c_location":"Carrazeda de Ansiaes","c_zp":"51","c_loc_lat":"41.2397678","c_loc_lng":"-7.3892534"},{"c_location":"Carregal do Sal","c_zp":"34","c_loc_lat":"40.425991","c_loc_lng":"-8.0966208"},{"c_location":"Carregosa","c_zp":"37","c_loc_lat":"40.8739347","c_loc_lng":"-8.4982573"},{"c_location":"Carreira","c_zp":"0","c_loc_lat":"41.2970808","c_loc_lng":"-8.5537337"},{"c_location":"Carrezedo de Montenegro","c_zp":"0","c_loc_lat":"41.5720863","c_loc_lng":"-7.5108276"},{"c_location":"Cartaxo","c_zp":"20","c_loc_lat":"39.1618026","c_loc_lng":"-8.8711895"},{"c_location":"Carvalhal","c_zp":"31","c_loc_lat":"39.827933","c_loc_lng":"-8.6975945"},{"c_location":"Carvalhos","c_zp":"44","c_loc_lat":"41.0427179","c_loc_lng":"-8.6476102"},{"c_location":"Carvalhosa","c_zp":"45","c_loc_lat":"41.2933546","c_loc_lng":"-8.4452509"},{"c_location":"Carvide","c_zp":"24","c_loc_lat":"39.8446595","c_loc_lng":"-8.9783592"},{"c_location":"Carvoeira","c_zp":"0","c_loc_lat":"39.0887013","c_loc_lng":"-9.2349997"},{"c_location":"Carvoeiro","c_zp":"84","c_loc_lat":"37.1109948","c_loc_lng":"-8.5548253"},{"c_location":"Casais","c_zp":"45","c_loc_lat":"41.2408599","c_loc_lng":"-8.4699779"},{"c_location":"Casal Comba","c_zp":"30","c_loc_lat":"40.3553894","c_loc_lng":"-8.5418169"},{"c_location":"Casal da Carrasquinha","c_zp":"25","c_loc_lat":"39.1363836","c_loc_lng":"-9.3961869"},{"c_location":"Casal da Popa","c_zp":"25","c_loc_lat":"39.1555713","c_loc_lng":"-9.4014424"},{"c_location":"Casal de Cambra","c_zp":"26","c_loc_lat":"38.8075538","c_loc_lng":"-9.3203292"},{"c_location":"Casal de Sao Bras","c_zp":"27","c_loc_lat":"38.7691268","c_loc_lng":"-9.313093"},{"c_location":"Casal Do Marco","c_zp":"0","c_loc_lat":"38.6044653","c_loc_lng":"-9.1733026"},{"c_location":"Castanheira do Ribatejo","c_zp":"26","c_loc_lat":"38.9978616","c_loc_lng":"-9.0538358"},{"c_location":"Castanheira Ribatejo","c_zp":"26","c_loc_lat":"38.9986893","c_loc_lng":"-9.0519217"},{"c_location":"Castelo Branco","c_zp":"60","c_loc_lat":"39.8331355","c_loc_lng":"-7.5636792"},{"c_location":"Castelo da Maia","c_zp":"44","c_loc_lat":"41.2577205","c_loc_lng":"-8.6954382"},{"c_location":"Castelo Maia","c_zp":"44","c_loc_lat":"41.2688279","c_loc_lng":"-8.6934883"},{"c_location":"Casteloes","c_zp":"0","c_loc_lat":"40.8316869","c_loc_lng":"-8.4818157"},{"c_location":"Castro Avelas","c_zp":"13","c_loc_lat":"41.8103261","c_loc_lng":"-6.8756823"},{"c_location":"Celeiros","c_zp":"47","c_loc_lat":"41.5115838","c_loc_lng":"-8.5348507"},{"c_location":"CELEIROS BRAGA","c_zp":"47","c_loc_lat":"41.5143916","c_loc_lng":"-8.5390578"},{"c_location":"Celorico da Beira","c_zp":"63","c_loc_lat":"40.640849","c_loc_lng":"-7.4712469"},{"c_location":"Cepoes","c_zp":"0","c_loc_lat":"41.0471148","c_loc_lng":"-7.89396"},{"c_location":"Cercal","c_zp":"0","c_loc_lat":"39.7107224","c_loc_lng":"-8.7576475"},{"c_location":"Cete","c_zp":"45","c_loc_lat":"41.1776716","c_loc_lng":"-8.4358073"},{"c_location":"Chainca","c_zp":"24","c_loc_lat":"39.6604594","c_loc_lng":"-8.784712"},{"c_location":"Charate","c_zp":"29","c_loc_lat":"38.5444516","c_loc_lng":"-8.962792"},{"c_location":"Charneca Caparica","c_zp":"28","c_loc_lat":"38.6273996","c_loc_lng":"-9.2655388"},{"c_location":"Charneca de Caparica","c_zp":"28","c_loc_lat":"38.6375405","c_loc_lng":"-9.2864129"},{"c_location":"Chaves","c_zp":"54","c_loc_lat":"41.6571925","c_loc_lng":"-7.5540283"},{"c_location":"Chelote","c_zp":"80","c_loc_lat":"37.0501531","c_loc_lng":"-8.0102149"},{"c_location":"Codal","c_zp":"37","c_loc_lat":"40.8721413","c_loc_lng":"-8.494134"},{"c_location":"Coimbra","c_zp":"30","c_loc_lat":"40.2423784","c_loc_lng":"-8.5226322"},{"c_location":"Coina","c_zp":"0","c_loc_lat":"38.5963063","c_loc_lng":"-9.1335126"},{"c_location":"Coladas","c_zp":"37","c_loc_lat":"40.4917084","c_loc_lng":"-8.661848"},{"c_location":"Colmeias","c_zp":"24","c_loc_lat":"39.8264843","c_loc_lng":"-8.7615385"},{"c_location":"Conceicao","c_zp":"99","c_loc_lat":"38.5504038","c_loc_lng":"-28.7097344"},{"c_location":"Coronado","c_zp":"47","c_loc_lat":"41.2859679","c_loc_lng":"-8.669278"},{"c_location":"Corroios","c_zp":"28","c_loc_lat":"38.6252477","c_loc_lng":"-9.2335385"},{"c_location":"Cortegaca","c_zp":"38","c_loc_lat":"40.9402572","c_loc_lng":"-8.7058842"},{"c_location":"Costa Caparica","c_zp":"28","c_loc_lat":"38.6264141","c_loc_lng":"-9.2637739"},{"c_location":"Costa da Caparica","c_zp":"28","c_loc_lat":"38.6409541","c_loc_lng":"-9.3124489"},{"c_location":"Cova","c_zp":"93","c_loc_lat":"32.7060815","c_loc_lng":"-17.1957071"},{"c_location":"Cova Da Piedade","c_zp":"0","c_loc_lat":"38.667369","c_loc_lng":"-9.244435"},{"c_location":"Covelas","c_zp":"47","c_loc_lat":"41.2936536","c_loc_lng":"-8.6386258"},{"c_location":"Covilha","c_zp":"62","c_loc_lat":"40.2923629","c_loc_lng":"-7.5642882"},{"c_location":"Creixomil","c_zp":"48","c_loc_lat":"41.4297864","c_loc_lng":"-8.3842457"},{"c_location":"Crestuma","c_zp":"44","c_loc_lat":"41.061021","c_loc_lng":"-8.5819051"},{"c_location":"Cristelo","c_zp":"47","c_loc_lat":"41.4859776","c_loc_lng":"-8.7809679"},{"c_location":"Custoias","c_zp":"44","c_loc_lat":"41.2001025","c_loc_lng":"-8.720528"},{"c_location":"Darque","c_zp":"49","c_loc_lat":"41.6807738","c_loc_lng":"-8.8577126"},{"c_location":"de Cambra","c_zp":"37","c_loc_lat":"40.8427618","c_loc_lng":"-8.4900158"},{"c_location":"de Leiria","c_zp":"24","c_loc_lat":"39.8680696","c_loc_lng":"-9.0272762"},{"c_location":"de Varzim","c_zp":"44","c_loc_lat":"41.3893126","c_loc_lng":"-8.8490668"},{"c_location":"do Anjo","c_zp":"29","c_loc_lat":"38.5776348","c_loc_lng":"-9.0811271"},{"c_location":"Dona Belida","c_zp":"20","c_loc_lat":"39.3284453","c_loc_lng":"-8.7930888"},{"c_location":"Duas Igrejas","c_zp":"45","c_loc_lat":"41.2361473","c_loc_lng":"-8.4501013"},{"c_location":"Dume","c_zp":"0","c_loc_lat":"41.582505","c_loc_lng":"-8.512152"},{"c_location":"Eiriz","c_zp":"45","c_loc_lat":"41.3016838","c_loc_lng":"-8.4680058"},{"c_location":"Elvas","c_zp":"73","c_loc_lat":"38.891271","c_loc_lng":"-7.2245368"},{"c_location":"Elvas,","c_zp":"73","c_loc_lat":"38.8933874","c_loc_lng":"-7.227863"},{"c_location":"Encarnacao","c_zp":"26","c_loc_lat":"39.054422","c_loc_lng":"-9.4521079"},{"c_location":"Entroncamento","c_zp":"23","c_loc_lat":"39.4804187","c_loc_lng":"-8.5686648"},{"c_location":"Ermesinde","c_zp":"44","c_loc_lat":"41.2135843","c_loc_lng":"-8.6275962"},{"c_location":"Esmeriz","c_zp":"47","c_loc_lat":"41.3800184","c_loc_lng":"-8.5876891"},{"c_location":"Esmoriz","c_zp":"38","c_loc_lat":"40.9529298","c_loc_lng":"-8.7071711"},{"c_location":"Espargo","c_zp":"45","c_loc_lat":"40.9188983","c_loc_lng":"-8.6545898"},{"c_location":"Espinho","c_zp":"45","c_loc_lat":"41.0127849","c_loc_lng":"-8.690941"},{"c_location":"Esporoes","c_zp":"47","c_loc_lat":"41.5139553","c_loc_lng":"-8.5038172"},{"c_location":"Esposende","c_zp":"47","c_loc_lat":"41.5286712","c_loc_lng":"-8.8470648"},{"c_location":"Estarreja","c_zp":"38","c_loc_lat":"40.7633329","c_loc_lng":"-8.6528184"},{"c_location":"Estela","c_zp":"45","c_loc_lat":"41.4485885","c_loc_lng":"-8.8364157"},{"c_location":"Estoi","c_zp":"80","c_loc_lat":"37.0934724","c_loc_lng":"-7.9750805"},{"c_location":"Estombar","c_zp":"84","c_loc_lat":"37.1429098","c_loc_lng":"-8.5657891"},{"c_location":"Estreito Camara Lobos","c_zp":"93","c_loc_lat":"32.6734186","c_loc_lng":"-17.0471945"},{"c_location":"Estreito De","c_zp":"93","c_loc_lat":"32.6653926","c_loc_lng":"-17.0466377"},{"c_location":"Estreito de Camara Lobos","c_zp":"93","c_loc_lat":"32.6714307","c_loc_lng":"-17.0515815"},{"c_location":"Estremoz","c_zp":"71","c_loc_lat":"38.8414396","c_loc_lng":"-7.6618817"},{"c_location":"Evora","c_zp":"70","c_loc_lat":"38.5901789","c_loc_lng":"-7.984546"},{"c_location":"Fafe","c_zp":"48","c_loc_lat":"41.4546119","c_loc_lng":"-8.2612921"},{"c_location":"Faioes","c_zp":"54","c_loc_lat":"41.7534366","c_loc_lng":"-7.4979801"},{"c_location":"Faja De Baixo","c_zp":"0","c_loc_lat":"37.7522989","c_loc_lng":"-25.7380141"},{"c_location":"Fajozes","c_zp":"44","c_loc_lat":"41.3167224","c_loc_lng":"-8.7913231"},{"c_location":"Famoes","c_zp":"16","c_loc_lat":"38.7927421","c_loc_lng":"-9.2862575"},{"c_location":"Fanhoes","c_zp":"26","c_loc_lat":"38.8814162","c_loc_lng":"-9.2535272"},{"c_location":"Fanzeres","c_zp":"45","c_loc_lat":"41.1574991","c_loc_lng":"-8.6247294"},{"c_location":"Faro","c_zp":"80","c_loc_lat":"37.017957","c_loc_lng":"-8.0177077"},{"c_location":"Fatima","c_zp":"24","c_loc_lat":"39.6065663","c_loc_lng":"-8.7430895"},{"c_location":"Fazendas Almeirim","c_zp":"0","c_loc_lat":"39.1908185","c_loc_lng":"-8.6981534"},{"c_location":"Febres","c_zp":"30","c_loc_lat":"40.3993361","c_loc_lng":"-8.717227"},{"c_location":"Feijo","c_zp":"28","c_loc_lat":"38.6538942","c_loc_lng":"-9.2500415"},{"c_location":"Feitos","c_zp":"0","c_loc_lat":"41.5702149","c_loc_lng":"-8.769703"},{"c_location":"Felgueiras","c_zp":"46","c_loc_lat":"41.3534593","c_loc_lng":"-8.2592174"},{"c_location":"Felix da M.nha","c_zp":"44","c_loc_lat":"41.0259992","c_loc_lng":"-8.7041279"},{"c_location":"Fermentoes","c_zp":"18","c_loc_lat":"41.461475","c_loc_lng":"-8.3978463"},{"c_location":"Fernao Ferro","c_zp":"28","c_loc_lat":"38.5816162","c_loc_lng":"-9.1793415"},{"c_location":"Ferreira","c_zp":"45","c_loc_lat":"41.2653954","c_loc_lng":"-8.4198936"},{"c_location":"Ferreira Alentejo","c_zp":"45","c_loc_lat":"38.0557078","c_loc_lng":"-8.1951421"},{"c_location":"Feteira","c_zp":"99","c_loc_lat":"38.52459","c_loc_lng":"-28.7613441"},{"c_location":"Fiaes","c_zp":"45","c_loc_lat":"40.9726358","c_loc_lng":"-8.6046386"},{"c_location":"Fiaes VFR","c_zp":"45","c_loc_lat":"40.9963326","c_loc_lng":"-8.6023346"},{"c_location":"Figueira da Foz","c_zp":"30","c_loc_lat":"40.166295","c_loc_lng":"-8.9425259"},{"c_location":"Figueira Foz","c_zp":"30","c_loc_lat":"40.2069302","c_loc_lng":"-8.909677"},{"c_location":"Figueiro","c_zp":"45","c_loc_lat":"41.3036566","c_loc_lng":"-8.4222262"},{"c_location":"Flandes","c_zp":"31","c_loc_lat":"39.903777","c_loc_lng":"-8.7161045"},{"c_location":"Folgosa","c_zp":"44","c_loc_lat":"41.2557478","c_loc_lng":"-8.6439334"},{"c_location":"Fontainhas","c_zp":"99","c_loc_lat":"37.122319","c_loc_lng":"-8.2953051"},{"c_location":"Fonte Coberta","c_zp":"47","c_loc_lat":"41.4973385","c_loc_lng":"-8.6300659"},{"c_location":"Fornos de Algodres","c_zp":"0","c_loc_lat":"40.6203803","c_loc_lng":"-7.6197068"},{"c_location":"Foros De Amora","c_zp":"0","c_loc_lat":"38.6093631","c_loc_lng":"-9.205981"},{"c_location":"Forte da Casa","c_zp":"26","c_loc_lat":"38.8724102","c_loc_lng":"-9.1422822"},{"c_location":"Fradelos","c_zp":"47","c_loc_lat":"41.3807164","c_loc_lng":"-8.673234"},{"c_location":"Frazao","c_zp":"45","c_loc_lat":"41.2669623","c_loc_lng":"-8.498582"},{"c_location":"Freamunde","c_zp":"45","c_loc_lat":"41.2783184","c_loc_lng":"-8.4159287"},{"c_location":"Freches","c_zp":"0","c_loc_lat":"40.7259775","c_loc_lng":"-7.4266574"},{"c_location":"Freiria","c_zp":"0","c_loc_lat":"39.0336426","c_loc_lng":"-9.4041275"},{"c_location":"Freixo","c_zp":"50","c_loc_lat":"41.3798207","c_loc_lng":"-7.5961981"},{"c_location":"Freixo de Cima","c_zp":"46","c_loc_lat":"41.312589","c_loc_lng":"-8.2304152"},{"c_location":"Frielas","c_zp":"26","c_loc_lat":"38.8256648","c_loc_lng":"-9.2273274"},{"c_location":"Funchal","c_zp":"90","c_loc_lat":"32.6514746","c_loc_lng":"-16.994094"},{"c_location":"Fundao","c_zp":"62","c_loc_lat":"40.172547","c_loc_lng":"-7.5679148"},{"c_location":"Gaeiras","c_zp":"25","c_loc_lat":"39.3681021","c_loc_lng":"-9.1877506"},{"c_location":"Gafanha D aquem","c_zp":"0","c_loc_lat":"40.6148457","c_loc_lng":"-8.7667607"},{"c_location":"Gafanha da Encarnacao","c_zp":"38","c_loc_lat":"40.6054849","c_loc_lng":"-8.7994718"},{"c_location":"Gafanha da Nazare","c_zp":"38","c_loc_lat":"40.6326952","c_loc_lng":"-8.7919564"},{"c_location":"Gafanha Encarnacao","c_zp":"38","c_loc_lat":"40.6253047","c_loc_lng":"-8.8100137"},{"c_location":"Gafanha Nazare","c_zp":"38","c_loc_lat":"40.6388748","c_loc_lng":"-8.7931962"},{"c_location":"Galegos (Santa Maria)","c_zp":"47","c_loc_lat":"41.5554541","c_loc_lng":"-8.6625442"},{"c_location":"Galegos (Sao Martinho)","c_zp":"0","c_loc_lat":"41.5561785","c_loc_lng":"-8.6469567"},{"c_location":"Gamil","c_zp":"47","c_loc_lat":"41.5220533","c_loc_lng":"-8.6710079"},{"c_location":"Gandra","c_zp":"45","c_loc_lat":"41.1811166","c_loc_lng":"-8.5195022"},{"c_location":"Gaula","c_zp":"0","c_loc_lat":"32.6786463","c_loc_lng":"-16.8967162"},{"c_location":"Geme","c_zp":"47","c_loc_lat":"41.6704319","c_loc_lng":"-8.5092266"},{"c_location":"Gemeos","c_zp":"0","c_loc_lat":"41.3968074","c_loc_lng":"-8.3379708"},{"c_location":"Gemunde","c_zp":"44","c_loc_lat":"41.2619778","c_loc_lng":"-8.71774"},{"c_location":"Gilmonde","c_zp":"47","c_loc_lat":"41.5132999","c_loc_lng":"-8.733825"},{"c_location":"Godim","c_zp":"50","c_loc_lat":"41.1676837","c_loc_lng":"-7.8790817"},{"c_location":"Goios","c_zp":"47","c_loc_lat":"41.47506","c_loc_lng":"-8.7142815"},{"c_location":"Golega","c_zp":"21","c_loc_lat":"39.4047799","c_loc_lng":"-8.5704778"},{"c_location":"Gondar","c_zp":"48","c_loc_lat":"41.4285178","c_loc_lng":"-8.4526653"},{"c_location":"Gondemaria","c_zp":"24","c_loc_lat":"39.6893895","c_loc_lng":"-8.7070561"},{"c_location":"Gondomar","c_zp":"44","c_loc_lat":"41.1299981","c_loc_lng":"-8.6450061"},{"c_location":"Gordo","c_zp":"89","c_loc_lat":"37.1892062","c_loc_lng":"-7.5251376"},{"c_location":"Gouveia","c_zp":"62","c_loc_lat":"40.5099671","c_loc_lng":"-7.7061513"},{"c_location":"Grande","c_zp":"24","c_loc_lat":"39.7490883","c_loc_lng":"-8.9813239"},{"c_location":"Grandola","c_zp":"75","c_loc_lat":"38.1699039","c_loc_lng":"-8.6376575"},{"c_location":"Grijo","c_zp":"44","c_loc_lat":"41.0267109","c_loc_lng":"-8.6551449"},{"c_location":"Guarda","c_zp":"63","c_loc_lat":"40.5335421","c_loc_lng":"-7.3593907"},{"c_location":"Guetim","c_zp":"45","c_loc_lat":"41.0188736","c_loc_lng":"-8.6848178"},{"c_location":"Guia","c_zp":"82","c_loc_lat":"37.117792","c_loc_lng":"-8.3699037"},{"c_location":"Guidoes","c_zp":"47","c_loc_lat":"41.3270268","c_loc_lng":"-8.7070691"},{"c_location":"Guifoes","c_zp":"44","c_loc_lat":"41.1930582","c_loc_lng":"-8.7490577"},{"c_location":"Guilhabreu","c_zp":"44","c_loc_lat":"41.2927699","c_loc_lng":"-8.7316201"},{"c_location":"Guimaraes","c_zp":"48","c_loc_lat":"41.4393742","c_loc_lng":"-8.4017616"},{"c_location":"Herdade Do Vilarinho","c_zp":"0","c_loc_lat":"38.0522942","c_loc_lng":"-8.056181"},{"c_location":"Horta","c_zp":"99","c_loc_lat":"38.5297887","c_loc_lng":"-28.7727516"},{"c_location":"Horta das Figueiras","c_zp":"70","c_loc_lat":"38.5448548","c_loc_lng":"-7.9911324"},{"c_location":"Ilha Da Madeira","c_zp":"93","c_loc_lat":"32.6641928","c_loc_lng":"-17.0629219"},{"c_location":"Infesta","c_zp":"44","c_loc_lat":"41.190756","c_loc_lng":"-8.697051"},{"c_location":"Irivo","c_zp":"0","c_loc_lat":"41.1723723","c_loc_lng":"-8.4116249"},{"c_location":"Jesufrei","c_zp":"47","c_loc_lat":"41.4575168","c_loc_lng":"-8.585608"},{"c_location":"Joane","c_zp":"47","c_loc_lat":"41.4282733","c_loc_lng":"-8.4928229"},{"c_location":"Jovim","c_zp":"45","c_loc_lat":"41.1086606","c_loc_lng":"-8.5929353"},{"c_location":"Junqueira","c_zp":"44","c_loc_lat":"41.3862764","c_loc_lng":"-8.7688847"},{"c_location":"Labruge","c_zp":"44","c_loc_lat":"41.2783469","c_loc_lng":"-8.7995208"},{"c_location":"Lagares","c_zp":"46","c_loc_lat":"41.3745775","c_loc_lng":"-8.3197397"},{"c_location":"Lagoa","c_zp":"74","c_loc_lat":"37.1367113","c_loc_lng":"-8.5338529"},{"c_location":"Lagos","c_zp":"86","c_loc_lat":"37.0932062","c_loc_lng":"-8.7596178"},{"c_location":"Lajeosa Do Mondego","c_zp":"48","c_loc_lat":"40.6259056","c_loc_lng":"-7.4056025"},{"c_location":"Lajes","c_zp":"97","c_loc_lat":"38.7595251","c_loc_lng":"-27.177164"},{"c_location":"Lamas do Vouga","c_zp":"37","c_loc_lat":"40.6231907","c_loc_lng":"-8.5439869"},{"c_location":"Lamego","c_zp":"51","c_loc_lat":"41.0919746","c_loc_lng":"-7.8872456"},{"c_location":"Lamoso","c_zp":"45","c_loc_lat":"41.3243836","c_loc_lng":"-8.4350669"},{"c_location":"Landim","c_zp":"53","c_loc_lat":"41.3959342","c_loc_lng":"-8.5349849"},{"c_location":"Laranjeiras","c_zp":"28","c_loc_lat":"38.58459","c_loc_lng":"-9.1711228"},{"c_location":"Laranjeiro","c_zp":"28","c_loc_lat":"38.656258","c_loc_lng":"-9.2358529"},{"c_location":"Lavra","c_zp":"44","c_loc_lat":"41.2666788","c_loc_lng":"-8.7961791"},{"c_location":"Lavradio","c_zp":"28","c_loc_lat":"38.6663821","c_loc_lng":"-9.1368562"},{"c_location":"Leca da Palmeira","c_zp":"44","c_loc_lat":"41.1907155","c_loc_lng":"-8.7810559"},{"c_location":"Leca do Balio","c_zp":"44","c_loc_lat":"41.2142632","c_loc_lng":"-8.7159652"},{"c_location":"Leca Palmeira","c_zp":"44","c_loc_lat":"41.1920089","c_loc_lng":"-8.7756748"},{"c_location":"Leiria","c_zp":"24","c_loc_lat":"39.7369771","c_loc_lng":"-8.8804105"},{"c_location":"Lijo","c_zp":"0","c_loc_lat":"41.5601872","c_loc_lng":"-8.6874146"},{"c_location":"Lisboa","c_zp":"19","c_loc_lat":"38.7387273","c_loc_lng":"-9.2136318"},{"c_location":"Lixa","c_zp":"46","c_loc_lat":"41.3051611","c_loc_lng":"-8.2617705"},{"c_location":"Lobao","c_zp":"45","c_loc_lat":"40.9952436","c_loc_lng":"-8.5924686"},{"c_location":"Lobateira","c_zp":"28","c_loc_lat":"38.5843319","c_loc_lng":"-9.186169"},{"c_location":"Loivos","c_zp":"0","c_loc_lat":"41.6394509","c_loc_lng":"-7.5906304"},{"c_location":"Lomba","c_zp":"46","c_loc_lat":"41.2540752","c_loc_lng":"-8.1557421"},{"c_location":"Lordelo","c_zp":"45","c_loc_lat":"41.2415888","c_loc_lng":"-8.4927001"},{"c_location":"Lordelo PRD","c_zp":"45","c_loc_lat":"41.2480977","c_loc_lng":"-8.4889556"},{"c_location":"lote 8 qt 24Amadora","c_zp":"26","c_loc_lat":"38.7804945","c_loc_lng":"-9.3216802"},{"c_location":"Loule","c_zp":"81","c_loc_lat":"37.1499425","c_loc_lng":"-8.1056634"},{"c_location":"Loule,","c_zp":"81","c_loc_lat":"37.1422042","c_loc_lng":"-8.1058896"},{"c_location":"Loures","c_zp":"26","c_loc_lat":"38.822473","c_loc_lng":"-9.2419134"},{"c_location":"Louro","c_zp":"47","c_loc_lat":"41.4318082","c_loc_lng":"-8.6195304"},{"c_location":"Lourosa","c_zp":"45","c_loc_lat":"40.974544","c_loc_lng":"-8.6191098"},{"c_location":"Lousada","c_zp":"46","c_loc_lat":"41.2751139","c_loc_lng":"-8.3633109"},{"c_location":"Lousado","c_zp":"47","c_loc_lat":"41.3574927","c_loc_lng":"-8.6220302"},{"c_location":"Lufrei","c_zp":"0","c_loc_lat":"41.2603274","c_loc_lng":"-8.1438393"},{"c_location":"Luso","c_zp":"30","c_loc_lat":"40.376516","c_loc_lng":"-8.467825"},{"c_location":"Lustosa","c_zp":"46","c_loc_lat":"41.3223234","c_loc_lng":"-8.3960994"},{"c_location":"Luz","c_zp":"88","c_loc_lat":"37.0927683","c_loc_lng":"-7.7933803"},{"c_location":"Macainhas de Baixo","c_zp":"63","c_loc_lat":"40.5235361","c_loc_lng":"-7.3985588"},{"c_location":"Macedo Cavaleiros","c_zp":"53","c_loc_lat":"41.5388463","c_loc_lng":"-7.0466482"},{"c_location":"Macedo de Cavaleiros","c_zp":"53","c_loc_lat":"41.5330392","c_loc_lng":"-7.0596361"},{"c_location":"Machico","c_zp":"92","c_loc_lat":"32.7198467","c_loc_lng":"-16.8519607"},{"c_location":"Macieira da Maia","c_zp":"44","c_loc_lat":"41.3380758","c_loc_lng":"-8.7704345"},{"c_location":"Macieira de Rates","c_zp":"47","c_loc_lat":"41.426796","c_loc_lng":"-8.7197753"},{"c_location":"Macieiras","c_zp":"44","c_loc_lat":"41.2024513","c_loc_lng":"-8.6267605"},{"c_location":"Madalena","c_zp":"0","c_loc_lat":"39.589209","c_loc_lng":"-8.5255946"},{"c_location":"Maia","c_zp":"44","c_loc_lat":"41.2538311","c_loc_lng":"-8.7374444"},{"c_location":"Maior","c_zp":"20","c_loc_lat":"39.3113637","c_loc_lng":"-8.9951174"},{"c_location":"Maiorga","c_zp":"24","c_loc_lat":"39.5626016","c_loc_lng":"-9.0655638"},{"c_location":"Malta","c_zp":"44","c_loc_lat":"41.2974943","c_loc_lng":"-8.743899"},{"c_location":"Mangualde","c_zp":"35","c_loc_lat":"40.6028997","c_loc_lng":"-7.8150379"},{"c_location":"Manhente","c_zp":"47","c_loc_lat":"41.5484266","c_loc_lng":"-8.6637427"},{"c_location":"Marco Canaveses","c_zp":"46","c_loc_lat":"41.1742268","c_loc_lng":"-8.2354601"},{"c_location":"Marco de Canaveses","c_zp":"46","c_loc_lat":"41.1752219","c_loc_lng":"-8.2384166"},{"c_location":"Margaride (Santa Eulalia)","c_zp":"46","c_loc_lat":"41.3630032","c_loc_lng":"-8.2887743"},{"c_location":"Marinha Grande","c_zp":"24","c_loc_lat":"39.8826063","c_loc_lng":"-9.013945"},{"c_location":"Marinhas","c_zp":"47","c_loc_lat":"41.5640453","c_loc_lng":"-8.8687791"},{"c_location":"Marrazes","c_zp":"24","c_loc_lat":"39.7813754","c_loc_lng":"-8.8708824"},{"c_location":"Martinho Sande","c_zp":"48","c_loc_lat":"41.4910702","c_loc_lng":"-8.4422697"},{"c_location":"Matacaes","c_zp":"0","c_loc_lat":"39.1009856","c_loc_lng":"-9.3096058"},{"c_location":"Mataducos","c_zp":"38","c_loc_lat":"40.6602325","c_loc_lng":"-8.7101966"},{"c_location":"Matosinhos","c_zp":"44","c_loc_lat":"41.181262","c_loc_lng":"-8.7690323"},{"c_location":"Meadela","c_zp":"49","c_loc_lat":"41.7053176","c_loc_lng":"-8.8929688"},{"c_location":"Mealhada","c_zp":"30","c_loc_lat":"40.3802768","c_loc_lng":"-8.5327422"},{"c_location":"Meda","c_zp":"64","c_loc_lat":"40.9631121","c_loc_lng":"-7.3564262"},{"c_location":"Medelo","c_zp":"48","c_loc_lat":"41.4662493","c_loc_lng":"-8.2447433"},{"c_location":"Meirinhas","c_zp":"31","c_loc_lat":"39.8351406","c_loc_lng":"-8.7976692"},{"c_location":"Meixomil","c_zp":"45","c_loc_lat":"41.2782833","c_loc_lng":"-8.4738631"},{"c_location":"Melides","c_zp":"75","c_loc_lat":"38.1400581","c_loc_lng":"-8.8218974"},{"c_location":"Melres","c_zp":"45","c_loc_lat":"41.0677327","c_loc_lng":"-8.483418"},{"c_location":"Mesao Frio","c_zp":"48","c_loc_lat":"41.4541855","c_loc_lng":"-8.3516422"},{"c_location":"Midoes","c_zp":"47","c_loc_lat":"41.5024803","c_loc_lng":"-8.6671748"},{"c_location":"Milheiros","c_zp":"44","c_loc_lat":"41.2207036","c_loc_lng":"-8.6734048"},{"c_location":"Minde","c_zp":"23","c_loc_lat":"39.5122108","c_loc_lng":"-8.7752052"},{"c_location":"Mindelo","c_zp":"44","c_loc_lat":"41.3204397","c_loc_lng":"-8.7955462"},{"c_location":"Miranda do Douro","c_zp":"52","c_loc_lat":"41.5337725","c_loc_lng":"-6.3494771"},{"c_location":"Mirandela","c_zp":"53","c_loc_lat":"41.5088535","c_loc_lng":"-7.2576008"},{"c_location":"Mogadouro","c_zp":"52","c_loc_lat":"41.3427219","c_loc_lng":"-6.7928532"},{"c_location":"Mogofores","c_zp":"37","c_loc_lat":"40.4550525","c_loc_lng":"-8.5517685"},{"c_location":"Moimento","c_zp":"0","c_loc_lat":"39.6253317","c_loc_lng":"-8.759802"},{"c_location":"Moita","c_zp":"28","c_loc_lat":"38.647563","c_loc_lng":"-9.0700496"},{"c_location":"Moita do Norte","c_zp":"22","c_loc_lat":"39.4634058","c_loc_lng":"-8.5321947"},{"c_location":"Monchique","c_zp":"85","c_loc_lat":"37.3146999","c_loc_lng":"-8.6379779"},{"c_location":"Montalegre","c_zp":"0","c_loc_lat":"41.8351947","c_loc_lng":"-7.8521175"},{"c_location":"Montemor-o-Novo","c_zp":"70","c_loc_lat":"38.6555524","c_loc_lng":"-8.2597716"},{"c_location":"Montemor_o_novo","c_zp":"70","c_loc_lat":"38.6353173","c_loc_lng":"-8.3028662"},{"c_location":"Montijo","c_zp":"28","c_loc_lat":"38.668309","c_loc_lng":"-9.0116958"},{"c_location":"Moreira","c_zp":"44","c_loc_lat":"41.2541141","c_loc_lng":"-8.7227663"},{"c_location":"Mouquim","c_zp":"47","c_loc_lat":"41.4327098","c_loc_lng":"-8.6110994"},{"c_location":"Moura","c_zp":"78","c_loc_lat":"38.142689","c_loc_lng":"-7.5357253"},{"c_location":"Mouraz","c_zp":"34","c_loc_lat":"40.4877191","c_loc_lng":"-8.1713603"},{"c_location":"Mouriz","c_zp":"45","c_loc_lat":"41.2107571","c_loc_lng":"-8.4261933"},{"c_location":"Mozelos","c_zp":"45","c_loc_lat":"41.0006072","c_loc_lng":"-8.6363652"},{"c_location":"Muro","c_zp":"47","c_loc_lat":"41.2839886","c_loc_lng":"-8.6785938"},{"c_location":"n?410","c_zp":"48","c_loc_lat":"41.4788847","c_loc_lng":"-8.2446451"},{"c_location":"Navais","c_zp":"44","c_loc_lat":"41.4247011","c_loc_lng":"-8.8462776"},{"c_location":"Neiva","c_zp":"0","c_loc_lat":"41.6460542","c_loc_lng":"-8.8570652"},{"c_location":"Nelas","c_zp":"35","c_loc_lat":"40.5340758","c_loc_lng":"-7.9362841"},{"c_location":"Nespereira","c_zp":"48","c_loc_lat":"41.4021718","c_loc_lng":"-8.4052344"},{"c_location":"Nogueira","c_zp":"0","c_loc_lat":"41.5306988","c_loc_lng":"-8.5019092"},{"c_location":"Nogueira da Regedoura","c_zp":"45","c_loc_lat":"41.0081403","c_loc_lng":"-8.6553433"},{"c_location":"Nogueira Regedoura","c_zp":"45","c_loc_lat":"40.9992616","c_loc_lng":"-8.680264"},{"c_location":"Nova","c_zp":"60","c_loc_lat":"39.9465459","c_loc_lng":"-7.3265265"},{"c_location":"Nova de Veiga","c_zp":"0","c_loc_lat":"41.708293","c_loc_lng":"-7.5879635"},{"c_location":"Obidos","c_zp":"25","c_loc_lat":"39.3854426","c_loc_lng":"-9.2678284"},{"c_location":"Odiaxere","c_zp":"99","c_loc_lat":"37.1373697","c_loc_lng":"-8.7441444"},{"c_location":"Odivelas","c_zp":"26","c_loc_lat":"38.8042941","c_loc_lng":"-9.2417582"},{"c_location":"Oia","c_zp":"37","c_loc_lat":"40.5442059","c_loc_lng":"-8.6065069"},{"c_location":"Olhao","c_zp":"87","c_loc_lat":"37.0468236","c_loc_lng":"-7.8789978"},{"c_location":"Olhos Agua","c_zp":"82","c_loc_lat":"37.1041956","c_loc_lng":"-8.2756529"},{"c_location":"Olhos de Agua","c_zp":"82","c_loc_lat":"37.1066426","c_loc_lng":"-8.2669315"},{"c_location":"Olival","c_zp":"44","c_loc_lat":"41.081201","c_loc_lng":"-8.6073132"},{"c_location":"Olival Basto","c_zp":"26","c_loc_lat":"38.7968089","c_loc_lng":"-9.2392349"},{"c_location":"Oliveira de Azemeis","c_zp":"37","c_loc_lat":"40.835568","c_loc_lng":"-8.5604425"},{"c_location":"Oliveira do Bairro","c_zp":"37","c_loc_lat":"40.508647","c_loc_lng":"-8.6220229"},{"c_location":"Oliveira do Douro","c_zp":"25","c_loc_lat":"41.1111738","c_loc_lng":"-8.668519"},{"c_location":"Oliveira do Hospital","c_zp":"34","c_loc_lat":"40.345921","c_loc_lng":"-7.9294999"},{"c_location":"Oliveira Douro","c_zp":"44","c_loc_lat":"41.1121512","c_loc_lng":"-8.6645093"},{"c_location":"Oliveira Frades","c_zp":"36","c_loc_lat":"40.7116751","c_loc_lng":"-8.267963"},{"c_location":"Oliveira Santa Maria","c_zp":"0","c_loc_lat":"41.4115135","c_loc_lng":"-8.4851555"},{"c_location":"Oliveira Sao Mateus","c_zp":"47","c_loc_lat":"41.3914254","c_loc_lng":"-8.4931229"},{"c_location":"Ordem","c_zp":"46","c_loc_lat":"41.2808541","c_loc_lng":"-8.389433"},{"c_location":"Orgens","c_zp":"35","c_loc_lat":"40.6688399","c_loc_lng":"-8.0154885"},{"c_location":"Ourem","c_zp":"24","c_loc_lat":"39.6560662","c_loc_lng":"-8.6635579"},{"c_location":"Outeiro Seco","c_zp":"0","c_loc_lat":"41.7681533","c_loc_lng":"-7.5495593"},{"c_location":"Ovar","c_zp":"38","c_loc_lat":"40.8647675","c_loc_lng":"-8.6944187"},{"c_location":"Paco","c_zp":"0","c_loc_lat":"41.8294824","c_loc_lng":"-8.4988009"},{"c_location":"Paco de Arcos","c_zp":"27","c_loc_lat":"38.7635287","c_loc_lng":"-9.3885031"},{"c_location":"Pacos de Ferreira","c_zp":"45","c_loc_lat":"41.2847496","c_loc_lng":"-8.4578428"},{"c_location":"Pacos Ferreira","c_zp":"45","c_loc_lat":"41.2820047","c_loc_lng":"-8.4425127"},{"c_location":"Paiao","c_zp":"30","c_loc_lat":"40.0696849","c_loc_lng":"-8.8916628"},{"c_location":"Paio Pires","c_zp":"28","c_loc_lat":"38.6037936","c_loc_lng":"-9.17763"},{"c_location":"PAIXANITO","c_zp":"81","c_loc_lat":"37.1553286","c_loc_lng":"-8.0893523"},{"c_location":"Palhais","c_zp":"28","c_loc_lat":"38.6297445","c_loc_lng":"-9.2793148"},{"c_location":"Palmeira","c_zp":"47","c_loc_lat":"41.5877848","c_loc_lng":"-8.5015035"},{"c_location":"Palmeira de Faro","c_zp":"47","c_loc_lat":"41.5340524","c_loc_lng":"-8.8342692"},{"c_location":"Palmela","c_zp":"29","c_loc_lat":"38.5677085","c_loc_lng":"-8.9157249"},{"c_location":"Parada de Gonta","c_zp":"34","c_loc_lat":"40.5797608","c_loc_lng":"-8.085141"},{"c_location":"Parada de Tibaes","c_zp":"47","c_loc_lat":"41.5665797","c_loc_lng":"-8.5498663"},{"c_location":"Paramos","c_zp":"45","c_loc_lat":"40.9807468","c_loc_lng":"-8.71426"},{"c_location":"Paranhos da Beira","c_zp":"62","c_loc_lat":"40.4882234","c_loc_lng":"-7.8857566"},{"c_location":"Parceiros da Igreja","c_zp":"23","c_loc_lat":"39.4508531","c_loc_lng":"-8.7039867"},{"c_location":"Parceiros Igreja","c_zp":"23","c_loc_lat":"39.4404358","c_loc_lng":"-8.6873288"},{"c_location":"Parchal","c_zp":"84","c_loc_lat":"37.1350521","c_loc_lng":"-8.5942613"},{"c_location":"ParchalPortimao","c_zp":"84","c_loc_lat":"37.1412179","c_loc_lng":"-8.5872942"},{"c_location":"Paredes","c_zp":"45","c_loc_lat":"41.2026429","c_loc_lng":"-8.4098715"},{"c_location":"Patacao","c_zp":"80","c_loc_lat":"37.0606365","c_loc_lng":"-8.043572"},{"c_location":"Pataias","c_zp":"24","c_loc_lat":"39.6738761","c_loc_lng":"-9.06838"},{"c_location":"Patio Moniz","c_zp":"0","c_loc_lat":"38.667212","c_loc_lng":"-27.3425451"},{"c_location":"Pedernais","c_zp":"0","c_loc_lat":"38.804016","c_loc_lng":"-9.2894974"},{"c_location":"Pedroso","c_zp":"44","c_loc_lat":"41.0409709","c_loc_lng":"-8.6450781"},{"c_location":"Pedroucos","c_zp":"44","c_loc_lat":"41.1809086","c_loc_lng":"-8.667612"},{"c_location":"Pego","c_zp":"22","c_loc_lat":"39.4668976","c_loc_lng":"-8.233044"},{"c_location":"Pelariga","c_zp":"31","c_loc_lat":"39.9730656","c_loc_lng":"-8.7094833"},{"c_location":"Penafiel","c_zp":"45","c_loc_lat":"41.1260266","c_loc_lng":"-8.4503708"},{"c_location":"Penamaior","c_zp":"45","c_loc_lat":"41.2833041","c_loc_lng":"-8.483589"},{"c_location":"Penedono","c_zp":"0","c_loc_lat":"40.986644","c_loc_lng":"-7.4807133"},{"c_location":"Peniche","c_zp":"25","c_loc_lat":"39.367177","c_loc_lng":"-9.4066854"},{"c_location":"Pera","c_zp":"83","c_loc_lat":"37.1255209","c_loc_lng":"-8.415534"},{"c_location":"Pera do Moco","c_zp":"63","c_loc_lat":"40.6029244","c_loc_lng":"-7.2885612"},{"c_location":"Perafita","c_zp":"44","c_loc_lat":"41.2174965","c_loc_lng":"-8.7756394"},{"c_location":"Perre","c_zp":"49","c_loc_lat":"41.725916","c_loc_lng":"-8.8750511"},{"c_location":"Peso da Regua","c_zp":"50","c_loc_lat":"41.1616724","c_loc_lng":"-7.867965"},{"c_location":"Peso Regua","c_zp":"50","c_loc_lat":"41.1649327","c_loc_lng":"-7.8765518"},{"c_location":"Pias","c_zp":"78","c_loc_lat":"38.0244517","c_loc_lng":"-7.5625712"},{"c_location":"Pindelo","c_zp":"37","c_loc_lat":"40.8798366","c_loc_lng":"-8.5189758"},{"c_location":"Pinhel","c_zp":"64","c_loc_lat":"40.7730289","c_loc_lng":"-7.1625573"},{"c_location":"Pires","c_zp":"28","c_loc_lat":"38.6199292","c_loc_lng":"-9.1629437"},{"c_location":"Pombal","c_zp":"31","c_loc_lat":"39.9744318","c_loc_lng":"-8.7131389"},{"c_location":"Pombeiro de Ribavizela","c_zp":"46","c_loc_lat":"41.3724231","c_loc_lng":"-8.2979222"},{"c_location":"Ponta Delgada","c_zp":"96","c_loc_lat":"37.8256796","c_loc_lng":"-25.4463191"},{"c_location":"Ponta Sol","c_zp":"93","c_loc_lat":"32.6955698","c_loc_lng":"-17.1850387"},{"c_location":"Ponte","c_zp":"26","c_loc_lat":"41.4743496","c_loc_lng":"-8.4153529"},{"c_location":"Ponte de Sor","c_zp":"74","c_loc_lat":"39.2588024","c_loc_lng":"-8.0981728"},{"c_location":"Ponte Sor","c_zp":"74","c_loc_lat":"39.2576814","c_loc_lng":"-8.0986294"},{"c_location":"Pontinha","c_zp":"16","c_loc_lat":"38.7763504","c_loc_lng":"-9.2725812"},{"c_location":"Porches","c_zp":"0","c_loc_lat":"37.1518486","c_loc_lng":"-8.4705735"},{"c_location":"Portalegre","c_zp":"73","c_loc_lat":"39.2692624","c_loc_lng":"-7.5129832"},{"c_location":"Portela","c_zp":"45","c_loc_lat":"41.1075496","c_loc_lng":"-8.378489"},{"c_location":"Portimao","c_zp":"85","c_loc_lat":"37.1509825","c_loc_lng":"-8.6326993"},{"c_location":"Porto","c_zp":"43","c_loc_lat":"41.1582609","c_loc_lng":"-8.6760487"},{"c_location":"Portugal","c_zp":"70","c_loc_lat":"38.5612491","c_loc_lng":"-8.0088004"},{"c_location":"Portunhos","c_zp":"30","c_loc_lat":"40.3108053","c_loc_lng":"-8.6359409"},{"c_location":"Pousos","c_zp":"25","c_loc_lat":"39.7433622","c_loc_lng":"-8.8613311"},{"c_location":"Povoa de Rio Moinhos","c_zp":"60","c_loc_lat":"39.9319059","c_loc_lng":"-7.5754281"},{"c_location":"Povoa de Santa Iria","c_zp":"26","c_loc_lat":"38.8529623","c_loc_lng":"-9.1559155"},{"c_location":"Povoa de Santo Adriao","c_zp":"26","c_loc_lat":"38.7955569","c_loc_lng":"-9.2505696"},{"c_location":"Povoa de Varzim","c_zp":"44","c_loc_lat":"41.3994435","c_loc_lng":"-8.8500646"},{"c_location":"Povoa Santa Iria","c_zp":"26","c_loc_lat":"38.8604397","c_loc_lng":"-9.1681282"},{"c_location":"Povoa Santo Adriao","c_zp":"26","c_loc_lat":"38.8033895","c_loc_lng":"-9.2439634"},{"c_location":"Povoa Varzim","c_zp":"44","c_loc_lat":"41.3855092","c_loc_lng":"-8.8309895"},{"c_location":"Praia da Vitoria","c_zp":"97","c_loc_lat":"38.7402403","c_loc_lng":"-27.1563851"},{"c_location":"Prior Velho","c_zp":"26","c_loc_lat":"38.7843993","c_loc_lng":"-9.2064938"},{"c_location":"Pte. do Rol","c_zp":"25","c_loc_lat":"39.0910207","c_loc_lng":"-9.384877"},{"c_location":"Pte. Rol","c_zp":"25","c_loc_lat":"39.1147267","c_loc_lng":"-9.3957323"},{"c_location":"Q.ta do Anjo","c_zp":"29","c_loc_lat":"38.5580301","c_loc_lng":"-9.0521089"},{"c_location":"Quarteira","c_zp":"81","c_loc_lat":"37.0925522","c_loc_lng":"-8.1971717"},{"c_location":"Quelfes","c_zp":"87","c_loc_lat":"37.0314245","c_loc_lng":"-7.9127869"},{"c_location":"Queluz","c_zp":"27","c_loc_lat":"38.7546112","c_loc_lng":"-9.3392391"},{"c_location":"QueluzMonte Abraao","c_zp":"27","c_loc_lat":"38.7569596","c_loc_lng":"-9.3488523"},{"c_location":"Quinchaes","c_zp":"48","c_loc_lat":"41.4466358","c_loc_lng":"-8.2460979"},{"c_location":"Quinta Das Flores Lt. C","c_zp":"85","c_loc_lat":"37.0307802","c_loc_lng":"-8.0065096"},{"c_location":"Quinta Do Conde","c_zp":"0","c_loc_lat":"38.5699609","c_loc_lng":"-9.1221065"},{"c_location":"Quinta Do Seixal","c_zp":"0","c_loc_lat":"39.7472183","c_loc_lng":"-8.9002274"},{"c_location":"Quinta Grande","c_zp":"0","c_loc_lat":"32.6623418","c_loc_lng":"-17.0925714"},{"c_location":"Rabo de Peixe","c_zp":"96","c_loc_lat":"37.7901095","c_loc_lng":"-25.6828934"},{"c_location":"Raimonda","c_zp":"45","c_loc_lat":"41.3087874","c_loc_lng":"-8.4059337"},{"c_location":"Ramada","c_zp":"26","c_loc_lat":"38.8085836","c_loc_lng":"-9.2778936"},{"c_location":"Ramalhal","c_zp":"25","c_loc_lat":"39.1454397","c_loc_lng":"-9.3149991"},{"c_location":"Rande","c_zp":"46","c_loc_lat":"41.3282315","c_loc_lng":"-8.3050237"},{"c_location":"Ranhados","c_zp":"35","c_loc_lat":"40.6442811","c_loc_lng":"-7.9862493"},{"c_location":"Rates","c_zp":"45","c_loc_lat":"41.4413727","c_loc_lng":"-8.7866242"},{"c_location":"Real","c_zp":"47","c_loc_lat":"41.5531651","c_loc_lng":"-8.5189767"},{"c_location":"Rebolide","c_zp":"0","c_loc_lat":"41.2293206","c_loc_lng":"-8.4062345"},{"c_location":"Rebordosa","c_zp":"45","c_loc_lat":"41.2081419","c_loc_lng":"-8.5070582"},{"c_location":"Recardaes","c_zp":"37","c_loc_lat":"40.5436885","c_loc_lng":"-8.5370967"},{"c_location":"Recarei","c_zp":"45","c_loc_lat":"41.1537234","c_loc_lng":"-8.5281572"},{"c_location":"Recezinhos","c_zp":"45","c_loc_lat":"41.2453528","c_loc_lng":"-8.2982333"},{"c_location":"Recta Cacador","c_zp":"0","c_loc_lat":"40.6439575","c_loc_lng":"-7.9462005"},{"c_location":"Regadas","c_zp":"48","c_loc_lat":"41.3830299","c_loc_lng":"-8.2428824"},{"c_location":"Regateira","c_zp":"0","c_loc_lat":"38.6385594","c_loc_lng":"-9.2844728"},{"c_location":"Regueira Pontes","c_zp":"24","c_loc_lat":"39.7874872","c_loc_lng":"-8.9110796"},{"c_location":"Reguengos de Monsaraz","c_zp":"72","c_loc_lat":"38.4213682","c_loc_lng":"-7.6269778"},{"c_location":"Reguengos Monsaraz","c_zp":"72","c_loc_lat":"38.4254518","c_loc_lng":"-7.6227203"},{"c_location":"Relva","c_zp":"95","c_loc_lat":"37.7561382","c_loc_lng":"-25.7883677"},{"c_location":"Rendufas","c_zp":"23","c_loc_lat":"39.5502343","c_loc_lng":"-8.6025764"},{"c_location":"Repeses","c_zp":"0","c_loc_lat":"40.6389544","c_loc_lng":"-8.0095891"},{"c_location":"Requiao","c_zp":"47","c_loc_lat":"41.4131322","c_loc_lng":"-8.5791424"},{"c_location":"Retorta","c_zp":"44","c_loc_lat":"41.3582894","c_loc_lng":"-8.801168"},{"c_location":"Riachos","c_zp":"23","c_loc_lat":"39.4361952","c_loc_lng":"-8.5913586"},{"c_location":"Riba d Ave","c_zp":"47","c_loc_lat":"41.3943003","c_loc_lng":"-8.4655344"},{"c_location":"Ribeira Brava","c_zp":"93","c_loc_lat":"32.6736093","c_loc_lng":"-17.1261402"},{"c_location":"Ribeira De Nisa","c_zp":"74","c_loc_lat":"39.3284775","c_loc_lng":"-7.5110739"},{"c_location":"Ribeira Dos Pretetes-Canico","c_zp":"0","c_loc_lat":"32.6669158","c_loc_lng":"-17.0065226"},{"c_location":"Ribeira Grande","c_zp":"96","c_loc_lat":"37.8291034","c_loc_lng":"-25.6004585"},{"c_location":"Ribeirao","c_zp":"47","c_loc_lat":"41.3483163","c_loc_lng":"-8.6557674"},{"c_location":"Ribeirinha","c_zp":"0","c_loc_lat":"37.8253383","c_loc_lng":"-25.5816733"},{"c_location":"Rio Covo","c_zp":"47","c_loc_lat":"41.5227596","c_loc_lng":"-8.6814318"},{"c_location":"Rio Covo (Santa Eugenia)","c_zp":"47","c_loc_lat":"41.5217646","c_loc_lng":"-8.6862149"},{"c_location":"Rio de Couros","c_zp":"0","c_loc_lat":"39.7202128","c_loc_lng":"-8.5574044"},{"c_location":"Rio de Mouro","c_zp":"26","c_loc_lat":"38.786409","c_loc_lng":"-9.4018858"},{"c_location":"Rio Maior","c_zp":"20","c_loc_lat":"39.3261733","c_loc_lng":"-9.0093181"},{"c_location":"Rio Mau","c_zp":"44","c_loc_lat":"41.3993235","c_loc_lng":"-8.7658004"},{"c_location":"Rio Meao","c_zp":"45","c_loc_lat":"40.9621655","c_loc_lng":"-8.6825363"},{"c_location":"Rio Seco","c_zp":"45","c_loc_lat":"37.0279435","c_loc_lng":"-7.9965725"},{"c_location":"Rio Tinto","c_zp":"44","c_loc_lat":"41.1674279","c_loc_lng":"-8.6354812"},{"c_location":"Roge","c_zp":"45","c_loc_lat":"40.835647","c_loc_lng":"-8.4419394"},{"c_location":"Roriz","c_zp":"35","c_loc_lat":"40.6700395","c_loc_lng":"-7.8234934"},{"c_location":"Rossio Ao Sul Tejo","c_zp":"0","c_loc_lat":"39.4448722","c_loc_lng":"-8.2714481"},{"c_location":"S. Cosme","c_zp":"44","c_loc_lat":"41.1348831","c_loc_lng":"-8.6171999"},{"c_location":"S. Jorge de Selho","c_zp":"48","c_loc_lat":"41.4215176","c_loc_lng":"-8.4398953"},{"c_location":"S. Pedro-Celorico Da Beira","c_zp":"48","c_loc_lat":"40.6298524","c_loc_lng":"-7.4808068"},{"c_location":"S. Sebastiao","c_zp":"0","c_loc_lat":"37.1582278","c_loc_lng":"-8.1816535"},{"c_location":"S.Goncalo","c_zp":"0","c_loc_lat":"41.1566613","c_loc_lng":"-8.7063328"},{"c_location":"Sabugal","c_zp":"63","c_loc_lat":"40.3528751","c_loc_lng":"-7.1571853"},{"c_location":"Sacavem","c_zp":"26","c_loc_lat":"38.799598","c_loc_lng":"-9.2009928"},{"c_location":"Sal","c_zp":"75","c_loc_lat":"38.3949257","c_loc_lng":"-8.594672"},{"c_location":"Salir de Matos","c_zp":"25","c_loc_lat":"39.4304664","c_loc_lng":"-9.1773412"},{"c_location":"Salreu","c_zp":"38","c_loc_lat":"40.7450595","c_loc_lng":"-8.6493672"},{"c_location":"Samil","c_zp":"53","c_loc_lat":"41.7861386","c_loc_lng":"-6.8582618"},{"c_location":"Sande (Vila Nova)","c_zp":"48","c_loc_lat":"41.4660011","c_loc_lng":"-8.4330777"},{"c_location":"Sandim","c_zp":"44","c_loc_lat":"41.0129854","c_loc_lng":"-8.5882117"},{"c_location":"Sanfins","c_zp":"45","c_loc_lat":"40.9305022","c_loc_lng":"-8.6087568"},{"c_location":"Sangalhos","c_zp":"37","c_loc_lat":"40.4948329","c_loc_lng":"-8.5309402"},{"c_location":"Sanguedo","c_zp":"45","c_loc_lat":"41.0079399","c_loc_lng":"-8.5960075"},{"c_location":"Santa Barbara de Nexe","c_zp":"0","c_loc_lat":"37.096361","c_loc_lng":"-8.0333053"},{"c_location":"Santa Catarina da Serra","c_zp":"0","c_loc_lat":"39.6855135","c_loc_lng":"-8.7735086"},{"c_location":"Santa Clara","c_zp":"0","c_loc_lat":"40.1854149","c_loc_lng":"-8.5075734"},{"c_location":"Santa Comba Dao","c_zp":"34","c_loc_lat":"40.3964537","c_loc_lng":"-8.2120946"},{"c_location":"Santa Cristina","c_zp":"0","c_loc_lat":"41.3013417","c_loc_lng":"-8.2681281"},{"c_location":"Santa Cruz","c_zp":"91","c_loc_lat":"32.6906453","c_loc_lng":"-16.87625"},{"c_location":"Santa Cruz da Graciosa","c_zp":"0","c_loc_lat":"39.0677044","c_loc_lng":"-28.1012845"},{"c_location":"Santa Cruz das Flores","c_zp":"99","c_loc_lat":"39.4803942","c_loc_lng":"-31.2353824"},{"c_location":"Santa Cruz do Bpo.","c_zp":"44","c_loc_lat":"41.2098923","c_loc_lng":"-8.7608689"},{"c_location":"Santa Eufemia","c_zp":"24","c_loc_lat":"39.7619382","c_loc_lng":"-8.8402006"},{"c_location":"Santa Iria de Azoia","c_zp":"26","c_loc_lat":"38.8460738","c_loc_lng":"-9.1602883"},{"c_location":"Santa M.nha","c_zp":"62","c_loc_lat":"40.4602955","c_loc_lng":"-7.758144"},{"c_location":"Santa Maria Avioso","c_zp":"44","c_loc_lat":"41.2692188","c_loc_lng":"-8.6932866"},{"c_location":"Santa Maria da Feira","c_zp":"45","c_loc_lat":"40.9243715","c_loc_lng":"-8.6454334"},{"c_location":"Santa Maria de Avioso","c_zp":"44","c_loc_lat":"41.2746924","c_loc_lng":"-8.6874308"},{"c_location":"Santa Maria Feira","c_zp":"45","c_loc_lat":"40.9279154","c_loc_lng":"-8.639648"},{"c_location":"Santa Marta de Portuzelo","c_zp":"49","c_loc_lat":"41.7101423","c_loc_lng":"-8.8529351"},{"c_location":"Santa Marta Portuzelo","c_zp":"49","c_loc_lat":"41.7010939","c_loc_lng":"-8.8505768"},{"c_location":"Santa Ovaia","c_zp":"34","c_loc_lat":"40.3174272","c_loc_lng":"-7.9705271"},{"c_location":"Santana","c_zp":"0","c_loc_lat":"32.8015402","c_loc_lng":"-16.9612788"},{"c_location":"Santao","c_zp":"46","c_loc_lat":"41.3069349","c_loc_lng":"-8.2583317"},{"c_location":"Santarem","c_zp":"20","c_loc_lat":"39.2554502","c_loc_lng":"-8.7734515"},{"c_location":"Santiago Cacem","c_zp":"75","c_loc_lat":"38.0162017","c_loc_lng":"-8.778079"},{"c_location":"Santiago da Riba-Ul","c_zp":"37","c_loc_lat":"40.8545241","c_loc_lng":"-8.5678837"},{"c_location":"Santiago De Dantas","c_zp":"47","c_loc_lat":"41.4005145","c_loc_lng":"-8.5967646"},{"c_location":"Santiago do Cacem","c_zp":"75","c_loc_lat":"38.0114913","c_loc_lng":"-8.7924995"},{"c_location":"Santiago Subarrifana","c_zp":"45","c_loc_lat":"41.2140376","c_loc_lng":"-8.3836018"},{"c_location":"Santo Antao do Tojal","c_zp":"26","c_loc_lat":"38.8544999","c_loc_lng":"-9.235917"},{"c_location":"Santo Antao Tojal","c_zp":"26","c_loc_lat":"38.8616031","c_loc_lng":"-9.2332389"},{"c_location":"Santo Antonio","c_zp":"90","c_loc_lat":"32.6728056","c_loc_lng":"-17.0184685"},{"c_location":"Santo Antonio Charneca","c_zp":"28","c_loc_lat":"38.6298358","c_loc_lng":"-9.1204391"},{"c_location":"Santo Antonio da Charneca","c_zp":"28","c_loc_lat":"38.6359701","c_loc_lng":"-9.1175816"},{"c_location":"Santo Antonio dos Cavaleiros","c_zp":"26","c_loc_lat":"38.8198002","c_loc_lng":"-9.2484326"},{"c_location":"Santo Tirso","c_zp":"47","c_loc_lat":"41.3473007","c_loc_lng":"-8.5505502"},{"c_location":"Sao Bernardo","c_zp":"38","c_loc_lat":"40.6138643","c_loc_lng":"-8.7030299"},{"c_location":"Sao Bras de Alportel","c_zp":"81","c_loc_lat":"37.1591305","c_loc_lng":"-7.9766963"},{"c_location":"Sao Felix da M.nha","c_zp":"44","c_loc_lat":"41.0264434","c_loc_lng":"-8.6982032"},{"c_location":"Sao Gens","c_zp":"48","c_loc_lat":"41.4553564","c_loc_lng":"-8.2228099"},{"c_location":"Sao Goncalo","c_zp":"90","c_loc_lat":"32.6546876","c_loc_lng":"-16.960025"},{"c_location":"Sao Joao","c_zp":"38","c_loc_lat":"40.8585988","c_loc_lng":"-8.6887353"},{"c_location":"Sao Joao da Madeira","c_zp":"37","c_loc_lat":"40.888143","c_loc_lng":"-8.5742875"},{"c_location":"Sao Joao da Talha","c_zp":"26","c_loc_lat":"38.8328076","c_loc_lng":"-9.1854529"},{"c_location":"Sao Joao de Areias","c_zp":"0","c_loc_lat":"40.3963836","c_loc_lng":"-8.1705394"},{"c_location":"Sao Joao de Lourosa","c_zp":"35","c_loc_lat":"40.6273898","c_loc_lng":"-7.9987456"},{"c_location":"Sao Joao dos Montes","c_zp":"26","c_loc_lat":"38.9314287","c_loc_lng":"-9.1008338"},{"c_location":"Sao Joao Lourosa","c_zp":"35","c_loc_lat":"40.6292947","c_loc_lng":"-7.9644199"},{"c_location":"Sao Joao Madeira","c_zp":"37","c_loc_lat":"40.8898175","c_loc_lng":"-8.5647854"},{"c_location":"Sao Juliao do Tojal","c_zp":"0","c_loc_lat":"38.8477419","c_loc_lng":"-9.2157849"},{"c_location":"Sao Lourenco do Selho","c_zp":"48","c_loc_lat":"41.4670912","c_loc_lng":"-8.3603972"},{"c_location":"Sao Lourenco-Almancil","c_zp":"99","c_loc_lat":"37.0835941","c_loc_lng":"-8.0993824"},{"c_location":"Sao Mamede de Infesta","c_zp":"44","c_loc_lat":"41.1876223","c_loc_lng":"-8.6950886"},{"c_location":"Sao Mamede Infesta","c_zp":"44","c_loc_lat":"41.1920503","c_loc_lng":"-8.7019084"},{"c_location":"Sao Martinho do Bpo.","c_zp":"30","c_loc_lat":"40.2137658","c_loc_lng":"-8.5390362"},{"c_location":"Sao Miguel do Outeiro","c_zp":"34","c_loc_lat":"40.5915991","c_loc_lng":"-8.1076205"},{"c_location":"Sao Miguel do Rio Torto","c_zp":"22","c_loc_lat":"39.4253644","c_loc_lng":"-8.2941511"},{"c_location":"Sao Paio de Gramacos","c_zp":"0","c_loc_lat":"40.345223","c_loc_lng":"-7.9240478"},{"c_location":"Sao Paio Oleiros","c_zp":"45","c_loc_lat":"40.982674","c_loc_lng":"-8.6859951"},{"c_location":"Sao Paio Vizela","c_zp":"0","c_loc_lat":"41.3897412","c_loc_lng":"-8.3455482"},{"c_location":"Sao Pedro Cova","c_zp":"45","c_loc_lat":"41.1524222","c_loc_lng":"-8.5815639"},{"c_location":"Sao Pedro da Cova","c_zp":"45","c_loc_lat":"41.1456919","c_loc_lng":"-8.5930175"},{"c_location":"Sao Pedro de Merelim","c_zp":"47","c_loc_lat":"41.5719701","c_loc_lng":"-8.539392"},{"c_location":"Sao Roque","c_zp":"95","c_loc_lat":"37.7735171","c_loc_lng":"-25.7037578"},{"c_location":"Sao Tome","c_zp":"47","c_loc_lat":"41.3567876","c_loc_lng":"-8.4849232"},{"c_location":"Sao Torcato","c_zp":"48","c_loc_lat":"41.4706384","c_loc_lng":"-8.3554634"},{"c_location":"Sao Verissimo","c_zp":"47","c_loc_lat":"41.5528512","c_loc_lng":"-8.6689214"},{"c_location":"Sao Vicente Do Paul","c_zp":"0","c_loc_lat":"39.3525934","c_loc_lng":"-8.7045172"},{"c_location":"Sao Vicente Ferreira","c_zp":"0","c_loc_lat":"37.8230988","c_loc_lng":"-25.7440925"},{"c_location":"Sapeiros","c_zp":"10","c_loc_lat":"39.4280124","c_loc_lng":"-9.2158683"},{"c_location":"Sardoal","c_zp":"22","c_loc_lat":"39.5234187","c_loc_lng":"-8.236991"},{"c_location":"Se","c_zp":"80","c_loc_lat":"37.0279339","c_loc_lng":"-7.9965758"},{"c_location":"Sede","c_zp":"37","c_loc_lat":"40.8188863","c_loc_lng":"-8.5666144"},{"c_location":"Seia","c_zp":"62","c_loc_lat":"40.4288446","c_loc_lng":"-7.7979896"},{"c_location":"Seica","c_zp":"24","c_loc_lat":"39.6871799","c_loc_lng":"-8.6345864"},{"c_location":"Seixal","c_zp":"28","c_loc_lat":"38.6072391","c_loc_lng":"-9.177236"},{"c_location":"Seixezelo","c_zp":"44","c_loc_lat":"41.0372098","c_loc_lng":"-8.632462"},{"c_location":"Sendim","c_zp":"46","c_loc_lat":"41.3867197","c_loc_lng":"-8.2626504"},{"c_location":"Senhora Hora","c_zp":"44","c_loc_lat":"41.1811149","c_loc_lng":"-8.7171677"},{"c_location":"Sernande","c_zp":"46","c_loc_lat":"41.3369992","c_loc_lng":"-8.3072656"},{"c_location":"Seroa","c_zp":"45","c_loc_lat":"41.2605342","c_loc_lng":"-8.5179624"},{"c_location":"Serpa","c_zp":"78","c_loc_lat":"37.9531037","c_loc_lng":"-7.6862815"},{"c_location":"Setubal","c_zp":"29","c_loc_lat":"38.5399144","c_loc_lng":"-8.968322"},{"c_location":"Silva","c_zp":"47","c_loc_lat":"41.5640632","c_loc_lng":"-8.7099872"},{"c_location":"Silvares","c_zp":"48","c_loc_lat":"41.4467936","c_loc_lng":"-8.4241942"},{"c_location":"Silveira","c_zp":"25","c_loc_lat":"39.1222622","c_loc_lng":"-9.4555015"},{"c_location":"Silveiros","c_zp":"47","c_loc_lat":"41.4704983","c_loc_lng":"-8.66627"},{"c_location":"Silves","c_zp":"83","c_loc_lat":"37.2342016","c_loc_lng":"-8.5927804"},{"c_location":"Sines","c_zp":"75","c_loc_lat":"37.9547496","c_loc_lng":"-8.9297469"},{"c_location":"Sintra","c_zp":"27","c_loc_lat":"38.8256143","c_loc_lng":"-9.4329434"},{"c_location":"Sitio Besouro","c_zp":"99","c_loc_lat":"37.0510876","c_loc_lng":"-8.0352832"},{"c_location":"Sitio Das Fontes","c_zp":"0","c_loc_lat":"39.3299772","c_loc_lng":"-9.3592987"},{"c_location":"Sitio Palmatoria","c_zp":"0","c_loc_lat":"40.2759304","c_loc_lng":"-7.5884806"},{"c_location":"Sobrado","c_zp":"44","c_loc_lat":"41.208618","c_loc_lng":"-8.5554562"},{"c_location":"Sobralinho","c_zp":"26","c_loc_lat":"38.9101168","c_loc_lng":"-9.1175755"},{"c_location":"Sobreda","c_zp":"28","c_loc_lat":"38.649895","c_loc_lng":"-9.2653029"},{"c_location":"Sobreira","c_zp":"28","c_loc_lat":"41.1601766","c_loc_lng":"-8.4712911"},{"c_location":"Sobrosa","c_zp":"45","c_loc_lat":"41.2548003","c_loc_lng":"-8.4464875"},{"c_location":"Soito","c_zp":"63","c_loc_lat":"40.3627549","c_loc_lng":"-7.0563932"},{"c_location":"Souro Pires","c_zp":"48","c_loc_lat":"40.732734","c_loc_lng":"-7.2046729"},{"c_location":"Souselas","c_zp":"0","c_loc_lat":"40.283406","c_loc_lng":"-8.525946"},{"c_location":"Sra. da Hora","c_zp":"44","c_loc_lat":"41.1892649","c_loc_lng":"-8.7264484"},{"c_location":"Sra. Hora","c_zp":"44","c_loc_lat":"41.1806094","c_loc_lng":"-8.7168039"},{"c_location":"Sto. Antao do Tojal","c_zp":"26","c_loc_lat":"38.8474663","c_loc_lng":"-9.254492"},{"c_location":"Sul","c_zp":"27","c_loc_lat":"38.7507821","c_loc_lng":"-9.3577304"},{"c_location":"Tabuadelo","c_zp":"0","c_loc_lat":"41.3985837","c_loc_lng":"-8.3746497"},{"c_location":"Tamel","c_zp":"47","c_loc_lat":"41.5537963","c_loc_lng":"-8.6680978"},{"c_location":"Tamel (Santa Leocadia)","c_zp":"47","c_loc_lat":"41.5631638","c_loc_lng":"-8.7413378"},{"c_location":"Tamel (Sao Pedro Fins)","c_zp":"47","c_loc_lat":"41.6019432","c_loc_lng":"-8.7126819"},{"c_location":"Tamel (Sao Verissimo)","c_zp":"47","c_loc_lat":"41.5547682","c_loc_lng":"-8.672804"},{"c_location":"Tamengos","c_zp":"37","c_loc_lat":"40.424349","c_loc_lng":"-8.5366647"},{"c_location":"Tarouca","c_zp":"36","c_loc_lat":"41.0309919","c_loc_lng":"-7.8536626"},{"c_location":"Tavarede","c_zp":"30","c_loc_lat":"40.1731576","c_loc_lng":"-8.914085"},{"c_location":"Tavira","c_zp":"88","c_loc_lat":"37.118559","c_loc_lng":"-7.7447212"},{"c_location":"Teivas","c_zp":"0","c_loc_lat":"40.613731","c_loc_lng":"-8.0042844"},{"c_location":"Teixoso","c_zp":"62","c_loc_lat":"40.3046085","c_loc_lng":"-7.542025"},{"c_location":"Teloes","c_zp":"46","c_loc_lat":"41.2874106","c_loc_lng":"-8.1708698"},{"c_location":"Timpeira","c_zp":"50","c_loc_lat":"41.3088324","c_loc_lng":"-7.8164702"},{"c_location":"Tomar","c_zp":"23","c_loc_lat":"39.5984319","c_loc_lng":"-8.4932026"},{"c_location":"Tondela","c_zp":"34","c_loc_lat":"40.5239676","c_loc_lng":"-8.1315031"},{"c_location":"Tornada","c_zp":"25","c_loc_lat":"39.455884","c_loc_lng":"-9.2064089"},{"c_location":"Torre de Moncorvo","c_zp":"51","c_loc_lat":"41.1737157","c_loc_lng":"-7.1279914"},{"c_location":"Torre de Vilela","c_zp":"0","c_loc_lat":"40.2641729","c_loc_lng":"-8.522513"},{"c_location":"Torres Novas","c_zp":"23","c_loc_lat":"39.466436","c_loc_lng":"-8.6297163"},{"c_location":"Torres Vedras","c_zp":"25","c_loc_lat":"39.1126879","c_loc_lng":"-9.3342384"},{"c_location":"Tortosendo","c_zp":"62","c_loc_lat":"40.2358754","c_loc_lng":"-7.6020141"},{"c_location":"Touguinha","c_zp":"44","c_loc_lat":"41.3703933","c_loc_lng":"-8.7991407"},{"c_location":"Touguinho","c_zp":"44","c_loc_lat":"41.3914356","c_loc_lng":"-8.7808255"},{"c_location":"Tourigo","c_zp":"34","c_loc_lat":"40.5028535","c_loc_lng":"-8.2880118"},{"c_location":"Trancoso","c_zp":"64","c_loc_lat":"40.767437","c_loc_lng":"-7.440401"},{"c_location":"Travanca","c_zp":"45","c_loc_lat":"40.9066135","c_loc_lng":"-8.6504726"},{"c_location":"Trofa","c_zp":"47","c_loc_lat":"41.3111278","c_loc_lng":"-8.6629338"},{"c_location":"Troviscal","c_zp":"37","c_loc_lat":"40.5051377","c_loc_lng":"-8.6638942"},{"c_location":"Tuias","c_zp":"0","c_loc_lat":"41.1761611","c_loc_lng":"-8.2425491"},{"c_location":"Tunes","c_zp":"83","c_loc_lat":"37.1617556","c_loc_lng":"-8.3432925"},{"c_location":"Turquel","c_zp":"0","c_loc_lat":"39.4653906","c_loc_lng":"-9.0615516"},{"c_location":"Unhos","c_zp":"26","c_loc_lat":"38.8172601","c_loc_lng":"-9.2026444"},{"c_location":"Urgezes","c_zp":"48","c_loc_lat":"41.4275818","c_loc_lng":"-8.3828877"},{"c_location":"Urqueira","c_zp":"24","c_loc_lat":"39.7230121","c_loc_lng":"-8.6618656"},{"c_location":"Urro","c_zp":"45","c_loc_lat":"41.1899604","c_loc_lng":"-8.4231732"},{"c_location":"Valbom","c_zp":"44","c_loc_lat":"41.1309374","c_loc_lng":"-8.6455063"},{"c_location":"Vale (Sao Martinho)","c_zp":"47","c_loc_lat":"41.4206992","c_loc_lng":"-8.5752743"},{"c_location":"Vale Cambra","c_zp":"37","c_loc_lat":"40.8489723","c_loc_lng":"-8.4863913"},{"c_location":"Vale de Cambra","c_zp":"37","c_loc_lat":"40.8298838","c_loc_lng":"-8.4821099"},{"c_location":"Vale de Figueira","c_zp":"0","c_loc_lat":"39.3134971","c_loc_lng":"-8.7044282"},{"c_location":"Vale de Santarem","c_zp":"20","c_loc_lat":"39.1898403","c_loc_lng":"-8.8284328"},{"c_location":"Vale de Sao Cosme","c_zp":"47","c_loc_lat":"41.4567624","c_loc_lng":"-8.5591064"},{"c_location":"Vale Verde","c_zp":"99","c_loc_lat":"37.0778748","c_loc_lng":"-8.1205186"},{"c_location":"Valongo","c_zp":"44","c_loc_lat":"41.1919912","c_loc_lng":"-8.5937215"},{"c_location":"Valongo do Vouga","c_zp":"37","c_loc_lat":"40.6192842","c_loc_lng":"-8.5381076"},{"c_location":"VALONGO VOUGA","c_zp":"37","c_loc_lat":"40.6007084","c_loc_lng":"-8.5275012"},{"c_location":"Valpacos","c_zp":"54","c_loc_lat":"41.6699042","c_loc_lng":"-7.4203919"},{"c_location":"Vandoma","c_zp":"45","c_loc_lat":"41.2103651","c_loc_lng":"-8.4630171"},{"c_location":"Varzea","c_zp":"46","c_loc_lat":"41.350061","c_loc_lng":"-8.2726387"},{"c_location":"Varzea de Meruge","c_zp":"62","c_loc_lat":"40.3991483","c_loc_lng":"-7.8558574"},{"c_location":"Varzea Meruge","c_zp":"48","c_loc_lat":"40.3952467","c_loc_lng":"-7.8657391"},{"c_location":"Veiga de Lila","c_zp":"54","c_loc_lat":"41.515623","c_loc_lng":"-7.4077005"},{"c_location":"Venda Nova","c_zp":"27","c_loc_lat":"38.7539357","c_loc_lng":"-9.2980292"},{"c_location":"Vendas","c_zp":"36","c_loc_lat":"40.7709617","c_loc_lng":"-8.2346179"},{"c_location":"Vendas de Azeittao","c_zp":"29","c_loc_lat":"38.5373828","c_loc_lng":"-9.0731343"},{"c_location":"Vendas Novas","c_zp":"70","c_loc_lat":"38.5991865","c_loc_lng":"-8.5427247"},{"c_location":"Ventosa do Bairro","c_zp":"30","c_loc_lat":"40.4047093","c_loc_lng":"-8.5611389"},{"c_location":"Vermil","c_zp":"48","c_loc_lat":"41.4413921","c_loc_lng":"-8.4724029"},{"c_location":"Vermoim","c_zp":"47","c_loc_lat":"41.4224788","c_loc_lng":"-8.5219492"},{"c_location":"Vialonga","c_zp":"26","c_loc_lat":"38.8751314","c_loc_lng":"-9.1590998"},{"c_location":"Viana do Castelo","c_zp":"49","c_loc_lat":"41.7004581","c_loc_lng":"-8.9066932"},{"c_location":"Viatodos","c_zp":"47","c_loc_lat":"41.4540501","c_loc_lng":"-8.6283641"},{"c_location":"Vidago","c_zp":"0","c_loc_lat":"41.6486673","c_loc_lng":"-7.6579102"},{"c_location":"Vidigueira","c_zp":"79","c_loc_lat":"38.2068794","c_loc_lng":"-7.8868831"},{"c_location":"Vieira de Leiria","c_zp":"24","c_loc_lat":"39.7899339","c_loc_lng":"-9.0075553"},{"c_location":"Vila Baleira","c_zp":"94","c_loc_lat":"33.0706674","c_loc_lng":"-16.4255636"},{"c_location":"Vila Boa","c_zp":"0","c_loc_lat":"41.5598323","c_loc_lng":"-8.6913873"},{"c_location":"Vila Boa do Bpo.","c_zp":"46","c_loc_lat":"41.1263528","c_loc_lng":"-8.2974912"},{"c_location":"Vila Cha","c_zp":"0","c_loc_lat":"41.3192859","c_loc_lng":"-7.5448136"},{"c_location":"Vila Cha de Ourique","c_zp":"20","c_loc_lat":"39.1749587","c_loc_lng":"-8.8523975"},{"c_location":"Vila Cova da Lixa","c_zp":"46","c_loc_lat":"41.313605","c_loc_lng":"-8.2383219"},{"c_location":"Vila Cova de Carros","c_zp":"45","c_loc_lat":"41.2197587","c_loc_lng":"-8.447153"},{"c_location":"Vila Cova Lixa","c_zp":"46","c_loc_lat":"41.3146203","c_loc_lng":"-8.2429418"},{"c_location":"Vila das Aves","c_zp":"47","c_loc_lat":"41.3593492","c_loc_lng":"-8.4839709"},{"c_location":"Vila de Gaia","c_zp":"44","c_loc_lat":"41.0861885","c_loc_lng":"-8.7031193"},{"c_location":"Vila do Conde","c_zp":"44","c_loc_lat":"41.3505347","c_loc_lng":"-8.8323763"},{"c_location":"Vila Flor","c_zp":"53","c_loc_lat":"41.3106897","c_loc_lng":"-7.2511347"},{"c_location":"Vila Franca de Xira","c_zp":"26","c_loc_lat":"38.9575092","c_loc_lng":"-9.0685686"},{"c_location":"Vila Franca Xira","c_zp":"26","c_loc_lat":"38.9556491","c_loc_lng":"-9.0823416"},{"c_location":"Vila Frescainha (Sao Pedro)","c_zp":"47","c_loc_lat":"41.5308457","c_loc_lng":"-8.7254375"},{"c_location":"Vila Nova","c_zp":"0","c_loc_lat":"41.5273501","c_loc_lng":"-8.503684"},{"c_location":"Vila Nova da Telha","c_zp":"44","c_loc_lat":"41.2419907","c_loc_lng":"-8.773336"},{"c_location":"Vila Nova Das Patas","c_zp":"53","c_loc_lat":"41.5090575","c_loc_lng":"-7.2569352"},{"c_location":"Vila Nova De ANHAViana Do Castelo","c_zp":"49","c_loc_lat":"41.6673186","c_loc_lng":"-8.8918398"},{"c_location":"Vila Nova de Famalicao","c_zp":"47","c_loc_lat":"41.4086301","c_loc_lng":"-8.6013355"},{"c_location":"Vila Nova de Foz Coa","c_zp":"51","c_loc_lat":"41.0704519","c_loc_lng":"-7.2241587"},{"c_location":"Vila Nova de Gaia","c_zp":"44","c_loc_lat":"41.1198998","c_loc_lng":"-8.6568118"},{"c_location":"Vila Nova de Milfontes","c_zp":"76","c_loc_lat":"37.7321268","c_loc_lng":"-8.855211"},{"c_location":"Vila Nova De Santo Andre","c_zp":"0","c_loc_lat":"38.0543456","c_loc_lng":"-8.8713816"},{"c_location":"Vila Nova Famalicao","c_zp":"47","c_loc_lat":"41.4014727","c_loc_lng":"-8.4695918"},{"c_location":"Vila Nova Gaia","c_zp":"44","c_loc_lat":"41.1350024","c_loc_lng":"-8.6893321"},{"c_location":"Vila Nova Gaia,","c_zp":"44","c_loc_lat":"41.0924306","c_loc_lng":"-8.7234878"},{"c_location":"Vila Nove de Famalicao","c_zp":"47","c_loc_lat":"41.4000684","c_loc_lng":"-8.608315"},{"c_location":"Vila Real","c_zp":"50","c_loc_lat":"41.2755838","c_loc_lng":"-7.7967364"},{"c_location":"Vila Real de Antonio","c_zp":"89","c_loc_lat":"37.185154","c_loc_lng":"-7.4957922"},{"c_location":"Vila Real de Santo Antonio","c_zp":"89","c_loc_lat":"37.1927064","c_loc_lng":"-7.5095093"},{"c_location":"Vila Seca","c_zp":"0","c_loc_lat":"41.5000996","c_loc_lng":"-8.7614298"},{"c_location":"Vila Verde","c_zp":"37","c_loc_lat":"40.5110981","c_loc_lng":"-8.6096139"},{"c_location":"Vila Verde da Raia","c_zp":"54","c_loc_lat":"41.8015224","c_loc_lng":"-7.5013208"},{"c_location":"Vilar","c_zp":"44","c_loc_lat":"41.2890643","c_loc_lng":"-8.7591292"},{"c_location":"Vilar Besteiros","c_zp":"34","c_loc_lat":"40.5902444","c_loc_lng":"-8.1717535"},{"c_location":"Vilar de Nantes","c_zp":"54","c_loc_lat":"41.7239973","c_loc_lng":"-7.5414393"},{"c_location":"Vilar do Pinheiro","c_zp":"44","c_loc_lat":"41.2715011","c_loc_lng":"-8.7539681"},{"c_location":"Vilar Do Torno E Alentem","c_zp":"0","c_loc_lat":"41.2843962","c_loc_lng":"-8.2891227"},{"c_location":"Vilar Formoso","c_zp":"0","c_loc_lat":"40.6236247","c_loc_lng":"-6.9300436"},{"c_location":"Vilar Nantes","c_zp":"54","c_loc_lat":"41.714021","c_loc_lng":"-7.5455972"},{"c_location":"Vilarinho Cambas","c_zp":"47","c_loc_lat":"41.3779536","c_loc_lng":"-8.6274248"},{"c_location":"Vilela","c_zp":"45","c_loc_lat":"41.243535","c_loc_lng":"-8.4761968"},{"c_location":"Vilela do Tamega","c_zp":"0","c_loc_lat":"41.6857539","c_loc_lng":"-7.6252002"},{"c_location":"Vimieiro","c_zp":"0","c_loc_lat":"40.3748343","c_loc_lng":"-8.2024883"},{"c_location":"Viseu","c_zp":"35","c_loc_lat":"40.6111128","c_loc_lng":"-8.0433867"},{"c_location":"Vizela","c_zp":"48","c_loc_lat":"41.3743607","c_loc_lng":"-8.3580185"},{"c_location":"Zibreira","c_zp":"0","c_loc_lat":"39.4798443","c_loc_lng":"-8.7157471"},{"c_location":"Zona Industrial de Castelo Branco","c_zp":"60","c_loc_lat":"39.8112978","c_loc_lng":"-7.6008953"},{"c_location":"Zona industrial de Estremoz","c_zp":"71","c_loc_lat":"38.8487589","c_loc_lng":"-7.6629196"}];



 var tmpLocCCtObj = {};
 tmpLocCCtObj["Aveiro"] = "Aveiro";
  tmpLocCCtObj["Beja"] = "Beja";
  tmpLocCCtObj["Braga"] = "Braga";
  tmpLocCCtObj["Braganca"] = "Braganca";
  tmpLocCCtObj["Castelo Branco"] = "Castelo Branco";
  tmpLocCCtObj["Coimbra"] = "Coimbra";
  tmpLocCCtObj["Evora"] = "Evora";
  tmpLocCCtObj["Faro"] = "Faro";
  tmpLocCCtObj["Guarda"] = "Guarda";
  tmpLocCCtObj["Leiria"] = "Leiria";
  tmpLocCCtObj["Lisboa"] = "Lisboa";
  tmpLocCCtObj["Portalegre"] = "Portalegre";
  tmpLocCCtObj["Porto"] = "Porto";
  tmpLocCCtObj["Santarem"] = "Santarem";
  tmpLocCCtObj["Setubal"] = "Setubal";
  tmpLocCCtObj["Viana do Castelo"] = "Viana do Castelo";
  tmpLocCCtObj["Vila Real"] = "Vila Real";
  tmpLocCCtObj["Viseu"] = "Viseu";
  tmpLocCCtObj["Ilha da Madeira"] = "Ilha da Madeira";
  tmpLocCCtObj["Acores"] = "Acores";




var tmpLocDistObj = {};
/*
tmpLocDistObj["Aveiro"] = "38";
tmpLocDistObj["Beja"] = "78";
tmpLocDistObj["Braga"] = "47";
tmpLocDistObj["Braganca"] = "53";
tmpLocDistObj["Castelo Branco"] = "60";
tmpLocDistObj["Coimbra"] = "30";
tmpLocDistObj["Evora"] = "70";
tmpLocDistObj["Faro"] = "80";
tmpLocDistObj["Guarda"] = "63";
tmpLocDistObj["Leiria"] = "24";
tmpLocDistObj["Lisboa"] = "10";
tmpLocDistObj["Portalegre"] = "73";
tmpLocDistObj["Porto"] = "40";
tmpLocDistObj["Santarem"] = "20";
tmpLocDistObj["Setubal"] = "29";
tmpLocDistObj["Viana do Castelo"] = "49";
tmpLocDistObj["Vila Real"] = "50";
tmpLocDistObj["Viseu"] = "35";
tmpLocDistObj["Madeira"] = "90";
tmpLocDistObj["Acores"] = "95";
 */
tmpLocDistObj["d38"] = "Aveiro";
tmpLocDistObj["d78"] = "Beja";
tmpLocDistObj["d47"] = "Braga";
tmpLocDistObj["d53"] = "Braganca";
tmpLocDistObj["d60"] = "Castelo Branco";
tmpLocDistObj["d30"] = "Coimbra";
tmpLocDistObj["d70"] = "Evora";
tmpLocDistObj["d80"] = "Faro";
tmpLocDistObj["d63"] = "Guarda";
tmpLocDistObj["d24"] = "Leiria";
tmpLocDistObj["d10"] = "Lisboa";
tmpLocDistObj["d73"] = "Portalegre";
tmpLocDistObj["d40"] = "Porto";
tmpLocDistObj["d20"] = "Santarem";
tmpLocDistObj["d29"] = "Setubal";
tmpLocDistObj["d49"] = "Viana do Castelo";
tmpLocDistObj["d50"] = "Vila Real";
tmpLocDistObj["d35"] = "Viseu";
tmpLocDistObj["d90"] = "Ilha da Madeira";
tmpLocDistObj["d95"] = "Acores";



tmpLocZipObj = {};
tmpLocZipObj["zip38"] = {};
tmpLocZipObj["zip38"]["city"] = "Aveiro";
tmpLocZipObj["zip38"]["latlng"] = "40.64427,-8.64554";
tmpLocZipObj["zip78"] = {};
tmpLocZipObj["zip78"]["city"] = "Beja";
tmpLocZipObj["zip78"]["latlng"] = "38.01506,-7.86323";
tmpLocZipObj["zip47"] = {};
tmpLocZipObj["zip47"]["city"] = "Braga";
tmpLocZipObj["zip47"]["latlng"] = "41.55032,-8.42005";
tmpLocZipObj["zip53"] = {};
tmpLocZipObj["zip53"]["city"] = "Braganca";
tmpLocZipObj["zip53"]["latlng"] = "41.8057,-6.7577";
tmpLocZipObj["zip60"] = {};
tmpLocZipObj["zip60"]["city"] = "Castelo Branco";
tmpLocZipObj["zip60"]["latlng"] = "39.82219,-7.49087";
tmpLocZipObj["zip30"] = {};
tmpLocZipObj["zip30"]["city"] = "Coimbra";
tmpLocZipObj["zip30"]["latlng"] = "40.20564,-8.41955";
tmpLocZipObj["zip70"] = {};
tmpLocZipObj["zip70"]["city"] = "Evora";
tmpLocZipObj["zip70"]["latlng"] = "38.56667,-7.9";
tmpLocZipObj["zip80"] = {};
tmpLocZipObj["zip80"]["city"] = "Faro";
tmpLocZipObj["zip80"]["latlng"] = "37.01937,-7.93223";
tmpLocZipObj["zip63"] = {};
tmpLocZipObj["zip63"]["city"] = "Guarda";
tmpLocZipObj["zip63"]["latlng"] = "40.53733,-7.26733";
tmpLocZipObj["zip24"] = {};
tmpLocZipObj["zip24"]["city"] = "Leiria";
tmpLocZipObj["zip24"]["latlng"] = "39.74362,-8.80705";
tmpLocZipObj["zip10"] = {};
tmpLocZipObj["zip10"]["city"] = "Lisboa";
tmpLocZipObj["zip10"]["latlng"] = "38.71667,-9.13333";
tmpLocZipObj["zip73"] = {};
tmpLocZipObj["zip73"]["city"] = "Portalegre";
tmpLocZipObj["zip73"]["latlng"] = "39.29761,-7.43045";
tmpLocZipObj["zip40"] = {};
tmpLocZipObj["zip40"]["city"] = "Porto";
tmpLocZipObj["zip40"]["latlng"] = "41.14961,-8.61099";
tmpLocZipObj["zip20"] = {};
tmpLocZipObj["zip20"]["city"] = "Santarem";
tmpLocZipObj["zip20"]["latlng"] = "39.23698,-8.68587";
tmpLocZipObj["zip29"] = {};
tmpLocZipObj["zip29"]["city"] = "Setubal";
tmpLocZipObj["zip29"]["latlng"] = "38.5244,-8.8882";
tmpLocZipObj["zip49"] = {};
tmpLocZipObj["zip49"]["city"] = "Viana do Castelo";
tmpLocZipObj["zip49"]["latlng"] = "41.6932,-8.83287";
tmpLocZipObj["zip50"] = {};
tmpLocZipObj["zip50"]["city"] = "Vila Real";
tmpLocZipObj["zip50"]["latlng"] = "41.29774,-7.7371";
tmpLocZipObj["zip35"] = {};
tmpLocZipObj["zip35"]["city"] = "Viseu";
tmpLocZipObj["zip35"]["latlng"] = "40.66101,-7.90971";
tmpLocZipObj["zip90"] = {};
tmpLocZipObj["zip90"]["city"] = "Ilha da Madeira";
tmpLocZipObj["zip90"]["latlng"] = "32.66667,-16.9";
tmpLocZipObj["zip95"] = {};
tmpLocZipObj["zip95"]["city"] = "Acores";
tmpLocZipObj["zip95"]["latlng"] = "37.7412,-25.6756";
 
/*
// create the tmpLocZipObj object for the 17 autonomous communities in Spain
tmpLocZipObj["zip01"] = {};
tmpLocZipObj["zip01"]["city"] = "Alava";
tmpLocZipObj["zip01"]["latlng"] = "42.85,-2.67";
tmpLocZipObj["zip02"] = {};
tmpLocZipObj["zip02"]["city"] = "Albacete";
tmpLocZipObj["zip02"]["latlng"] = "39,-1.87";
tmpLocZipObj["zip03"] = {};
tmpLocZipObj["zip03"]["city"] = "Alicante";
tmpLocZipObj["zip03"]["latlng"] = "38.35,-0.48";
tmpLocZipObj["zip04"] = {};
tmpLocZipObj["zip04"]["city"] = "Almeria";
tmpLocZipObj["zip04"]["latlng"] = "36.84,-2.46";
tmpLocZipObj["zip33"] = {};
tmpLocZipObj["zip33"]["city"] = "Asturias";
tmpLocZipObj["zip33"]["latlng"] = "43.36,-5.84";
tmpLocZipObj["zip05"] = {};
tmpLocZipObj["zip05"]["city"] = "Avila";
tmpLocZipObj["zip05"]["latlng"] = "40.65,-4.7";
tmpLocZipObj["zip06"] = {};
tmpLocZipObj["zip06"]["city"] = "Badajoz";
tmpLocZipObj["zip06"]["latlng"] = "38.88,-6.97";
tmpLocZipObj["zip07"] = {};
tmpLocZipObj["zip07"]["city"] = "Balears";
tmpLocZipObj["zip07"]["latlng"] = "39.57,2.65";
tmpLocZipObj["zip08"] = {};
tmpLocZipObj["zip08"]["city"] = "Barcelona";
tmpLocZipObj["zip08"]["latlng"] = "41.38,2.18";
tmpLocZipObj["zip09"] = {};
tmpLocZipObj["zip09"]["city"] = "Burgos";
tmpLocZipObj["zip09"]["latlng"] = "42.34,-3.7";
tmpLocZipObj["zip10"] = {};
tmpLocZipObj["zip10"]["city"] = "Caceres";
tmpLocZipObj["zip10"]["latlng"] = "39.47,-6.37";
tmpLocZipObj["zip11"] = {};
tmpLocZipObj["zip11"]["city"] = "Cadiz";
tmpLocZipObj["zip11"]["latlng"] = "36.53,-6.29";
tmpLocZipObj["zip39"] = {};
tmpLocZipObj["zip39"]["city"] = "Cantabria";
tmpLocZipObj["zip39"]["latlng"] = "43.38,-4.12";
tmpLocZipObj["zip12"] = {};
tmpLocZipObj["zip12"]["city"] = "Castellon";
tmpLocZipObj["zip12"]["latlng"] = "39.98,-0.05";
tmpLocZipObj["zip51"] = {};
tmpLocZipObj["zip51"]["city"] = "Ceuta";
tmpLocZipObj["zip51"]["latlng"] = "35.89,-5.31";
tmpLocZipObj["zip13"] = {};
tmpLocZipObj["zip13"]["city"] = "Ciudad Real";
tmpLocZipObj["zip13"]["latlng"] = "38.98,-3.93";
tmpLocZipObj["zip14"] = {};
tmpLocZipObj["zip14"]["city"] = "Cordoba";
tmpLocZipObj["zip14"]["latlng"] = "37.88,-4.77";
tmpLocZipObj["zip15"] = {};
tmpLocZipObj["zip15"]["city"] = "Cuenca";
tmpLocZipObj["zip15"]["latlng"] = "40.07,-2.13";
tmpLocZipObj["zip16"] = {};
tmpLocZipObj["zip16"]["city"] = "Girona";
tmpLocZipObj["zip16"]["latlng"] = "41.98,2.82";
tmpLocZipObj["zip17"] = {};
tmpLocZipObj["zip17"]["city"] = "Granada";
tmpLocZipObj["zip17"]["latlng"] = "37.18,-3.6";
tmpLocZipObj["zip18"] = {};
tmpLocZipObj["zip18"]["city"] = "Guadalajara";
tmpLocZipObj["zip18"]["latlng"] = "40.63,-3.16";
tmpLocZipObj["zip19"] = {};
tmpLocZipObj["zip19"]["city"] = "Guipuzcoa";
tmpLocZipObj["zip19"]["latlng"] = "43.32,-1.98";
tmpLocZipObj["zip20"] = {};
tmpLocZipObj["zip20"]["city"] = "Huelva";
tmpLocZipObj["zip20"]["latlng"] = "37.26,-6.94";
tmpLocZipObj["zip21"] = {};
tmpLocZipObj["zip21"]["city"] = "Huesca";
tmpLocZipObj["zip21"]["latlng"] = "42.14,-0.41";
tmpLocZipObj["zip22"] = {};
tmpLocZipObj["zip22"]["city"] = "Jaen";
tmpLocZipObj["zip22"]["latlng"] = "37.77,-3.79";
tmpLocZipObj["zip23"] = {};
tmpLocZipObj["zip23"]["city"] = "La Rioja";
tmpLocZipObj["zip23"]["latlng"] = "42.46,-2.45";
tmpLocZipObj["zip24"] = {};
tmpLocZipObj["zip24"]["city"] = "Las Palmas";
tmpLocZipObj["zip24"]["latlng"] = "28.1,-15.41";
tmpLocZipObj["zip25"] = {};
tmpLocZipObj["zip25"]["city"] = "Leon";
tmpLocZipObj["zip25"]["latlng"] = "42.6,-5.57";
tmpLocZipObj["zip26"] = {};
tmpLocZipObj["zip26"]["city"] = "Lleida";
tmpLocZipObj["zip26"]["latlng"] = "41.62,0.63";
tmpLocZipObj["zip27"] = {};
tmpLocZipObj["zip27"]["city"] = "Lugo";
tmpLocZipObj["zip27"]["latlng"] = "43,-7.57";
tmpLocZipObj["zip28"] = {};
tmpLocZipObj["zip28"]["city"] = "Madrid";
tmpLocZipObj["zip28"]["latlng"] = "40.42,-3.7";
tmpLocZipObj["zip29"] = {};
tmpLocZipObj["zip29"]["city"] = "Malaga";
tmpLocZipObj["zip29"]["latlng"] = "36.72,-4.42";
tmpLocZipObj["zip52"] = {};
tmpLocZipObj["zip52"]["city"] = "Melilla";
tmpLocZipObj["zip52"]["latlng"] = "35.29,-2.94";
tmpLocZipObj["zip30"] = {};
tmpLocZipObj["zip30"]["city"] = "Murcia";
tmpLocZipObj["zip30"]["latlng"] = "37.98,-1.13";
tmpLocZipObj["zip31"] = {};
tmpLocZipObj["zip31"]["city"] = "Navarra";
tmpLocZipObj["zip31"]["latlng"] = "42.82,-1.64";
tmpLocZipObj["zip32"] = {};
tmpLocZipObj["zip32"]["city"] = "Ourense";
tmpLocZipObj["zip32"]["latlng"] = "42.34,-7.86";
tmpLocZipObj["zip34"] = {};
tmpLocZipObj["zip34"]["city"] = "Palencia";
tmpLocZipObj["zip34"]["latlng"] = "42.42,-4.5";
tmpLocZipObj["zip35"] = {};
tmpLocZipObj["zip35"]["city"] = "Pontevedra";
tmpLocZipObj["zip35"]["latlng"] = "42.43,-8.65";
tmpLocZipObj["zip36"] = {};
tmpLocZipObj["zip36"]["city"] = "Salamanca";
tmpLocZipObj["zip36"]["latlng"] = "40.97,-5.67";
tmpLocZipObj["zip37"] = {};
tmpLocZipObj["zip37"]["city"] = "Santa Cruz de Tenerife";
tmpLocZipObj["zip37"]["latlng"] = "28.46,-16.25";
tmpLocZipObj["zip38"] = {};
tmpLocZipObj["zip38"]["city"] = "Segovia";
tmpLocZipObj["zip38"]["latlng"] = "40.95,-4.12";
tmpLocZipObj["zip40"] = {};
tmpLocZipObj["zip40"]["city"] = "Sevilla";
tmpLocZipObj["zip40"]["latlng"] = "37.38,-5.98";
tmpLocZipObj["zip41"] = {};
tmpLocZipObj["zip41"]["city"] = "Soria";
tmpLocZipObj["zip41"]["latlng"] = "41.76,-2.47";
tmpLocZipObj["zip42"] = {};
tmpLocZipObj["zip42"]["city"] = "Tarragona";
tmpLocZipObj["zip42"]["latlng"] = "41.12,1.25";
tmpLocZipObj["zip43"] = {};
tmpLocZipObj["zip43"]["city"] = "Teruel";
tmpLocZipObj["zip43"]["latlng"] = "40.34,-1.11";
tmpLocZipObj["zip44"] = {};
tmpLocZipObj["zip44"]["city"] = "Toledo";
tmpLocZipObj["zip44"]["latlng"] = "39.86,-4.02";
tmpLocZipObj["zip45"] = {};
tmpLocZipObj["zip45"]["city"] = "Valencia";
tmpLocZipObj["zip45"]["latlng"] = "39.47,-0.38";
tmpLocZipObj["zip46"] = {};
tmpLocZipObj["zip46"]["city"] = "Valladolid";
tmpLocZipObj["zip46"]["latlng"] = "41.65,-4.72";
tmpLocZipObj["zip47"] = {};
tmpLocZipObj["zip47"]["city"] = "Zamora";
tmpLocZipObj["zip47"]["latlng"] = "41.5,-5.75";
tmpLocZipObj["zip48"] = {};
tmpLocZipObj["zip48"]["city"] = "Zaragoza";
tmpLocZipObj["zip48"]["latlng"] = "41.65,-0.88";
tmpLocZipObj["zip49"] = {};
tmpLocZipObj["zip49"]["city"] = "Ceuta";
tmpLocZipObj["zip49"]["latlng"] = "35.89,-5.31";
tmpLocZipObj["zip50"] = {};
tmpLocZipObj["zip50"]["city"] = "Melilla";
tmpLocZipObj["zip50"]["latlng"] = "35.29,-2.94";


*/
 
// create the tLocCountryObj object for all countries
// order of the countries in alphabetical order
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





var tttdddata = {
   "freguesias": [
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Aguada de Cima",
         "dicofre": "010103",
         "brasao": "https://dados.gov.pt/s/brasoes/010103.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Fermentelos",
         "dicofre": "010109",
         "brasao": "https://dados.gov.pt/s/brasoes/010109.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Macinhata do Vouga",
         "dicofre": "010112",
         "brasao": "https://dados.gov.pt/s/brasoes/010112.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Valongo do Vouga",
         "dicofre": "010119",
         "brasao": "https://dados.gov.pt/s/brasoes/010119.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Uniao das freguesias de agueda e Borralha",
         "dicofre": "010121",
         "brasao": "https://dados.gov.pt/s/brasoes/010121.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Uniao das freguesias de Barro e Aguada de Baixo",
         "dicofre": "010122",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Uniao das freguesias de Belazaima do Chao, Castanheira do Vouga e Agadao",
         "dicofre": "010123",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Uniao das freguesias de Recardaes e Espinhel",
         "dicofre": "010124",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Uniao das freguesias de Travasso e Ois da Ribeira",
         "dicofre": "010125",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Uniao das freguesias de Trofa, Segadaes e Lamas do Vouga",
         "dicofre": "010126",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "agueda",
         "freguesia": "Uniao das freguesias do Prestimo e Macieira de Alcoba",
         "dicofre": "010127",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Albergaria-a-Velha",
         "freguesia": "Alquerubim",
         "dicofre": "010202",
         "brasao": "https://dados.gov.pt/s/brasoes/010202.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Albergaria-a-Velha",
         "freguesia": "Angeja",
         "dicofre": "010203",
         "brasao": "https://dados.gov.pt/s/brasoes/010203.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Albergaria-a-Velha",
         "freguesia": "Branca",
         "dicofre": "010204",
         "brasao": "https://dados.gov.pt/s/brasoes/010204.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Albergaria-a-Velha",
         "freguesia": "Ribeira de Fraguas",
         "dicofre": "010206",
         "brasao": "https://dados.gov.pt/s/brasoes/010206.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Albergaria-a-Velha",
         "freguesia": "Albergaria-a-Velha e Valmaior",
         "dicofre": "010209",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Albergaria-a-Velha",
         "freguesia": "Sao Joao de Loure e Frossos",
         "dicofre": "010210",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Avelas de Caminho",
         "dicofre": "010304",
         "brasao": "https://dados.gov.pt/s/brasoes/010304.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Avelas de Cima",
         "dicofre": "010305",
         "brasao": "https://dados.gov.pt/s/brasoes/010305.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Moita",
         "dicofre": "010307",
         "brasao": "https://dados.gov.pt/s/brasoes/010307.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Sangalhos",
         "dicofre": "010309",
         "brasao": "https://dados.gov.pt/s/brasoes/010309.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Sao Lourenco do Bairro",
         "dicofre": "010310",
         "brasao": "https://dados.gov.pt/s/brasoes/010310.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Vila Nova de Monsarros",
         "dicofre": "010312",
         "brasao": "https://dados.gov.pt/s/brasoes/010312.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Vilarinho do Bairro",
         "dicofre": "010313",
         "brasao": "https://dados.gov.pt/s/brasoes/010313.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Uniao das freguesias de Amoreira da Gandara, Paredes do Bairro e Ancas",
         "dicofre": "010316",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Uniao das freguesias de Arcos e Mogofores",
         "dicofre": "010317",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Anadia",
         "freguesia": "Uniao das freguesias de Tamengos, Aguim e Ois do Bairro",
         "dicofre": "010318",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Alvarenga",
         "dicofre": "010402",
         "brasao": "https://dados.gov.pt/s/brasoes/010402.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Chave",
         "dicofre": "010407",
         "brasao": "https://dados.gov.pt/s/brasoes/010407.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Escariz",
         "dicofre": "010409",
         "brasao": "https://dados.gov.pt/s/brasoes/010409.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Fermedo",
         "dicofre": "010411",
         "brasao": "https://dados.gov.pt/s/brasoes/010411.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Mansores",
         "dicofre": "010413",
         "brasao": "https://dados.gov.pt/s/brasoes/010413.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Moldes",
         "dicofre": "010414",
         "brasao": "https://dados.gov.pt/s/brasoes/010414.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Rossas",
         "dicofre": "010415",
         "brasao": "https://dados.gov.pt/s/brasoes/010415.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Santa Eulalia",
         "dicofre": "010416",
         "brasao": "https://dados.gov.pt/s/brasoes/010416.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Sao Miguel do Mato",
         "dicofre": "010417",
         "brasao": "https://dados.gov.pt/s/brasoes/010417.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Tropeco",
         "dicofre": "010418",
         "brasao": "https://dados.gov.pt/s/brasoes/010418.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Urro",
         "dicofre": "010419",
         "brasao": "https://dados.gov.pt/s/brasoes/010419.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Varzea",
         "dicofre": "010420",
         "brasao": "https://dados.gov.pt/s/brasoes/010420.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Uniao das freguesias de Arouca e Burgo",
         "dicofre": "010421",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Uniao das freguesias de Cabreiros e Albergaria da Serra",
         "dicofre": "010422",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Uniao das freguesias de Canelas e Espiunca",
         "dicofre": "010423",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Arouca",
         "freguesia": "Uniao das freguesias de Covelo de Paivo e Janarde",
         "dicofre": "010424",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Aradas",
         "dicofre": "010501",
         "brasao": "https://dados.gov.pt/s/brasoes/010501.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Cacia",
         "dicofre": "010502",
         "brasao": "https://dados.gov.pt/s/brasoes/010502.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Esgueira",
         "dicofre": "010505",
         "brasao": "https://dados.gov.pt/s/brasoes/010505.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Oliveirinha",
         "dicofre": "010508",
         "brasao": "https://dados.gov.pt/s/brasoes/010508.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Sao Bernardo",
         "dicofre": "010510",
         "brasao": "https://dados.gov.pt/s/brasoes/010510.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Sao Jacinto",
         "dicofre": "010511",
         "brasao": "https://dados.gov.pt/s/brasoes/010511.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Santa Joana",
         "dicofre": "010513",
         "brasao": "https://dados.gov.pt/s/brasoes/010513.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Eixo e Eirol",
         "dicofre": "010515",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Requeixo, Nossa Senhora de Fatima e Nariz",
         "dicofre": "010516",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Aveiro",
         "freguesia": "Uniao das freguesias de Gloria e Vera Cruz",
         "dicofre": "010517",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Castelo de Paiva",
         "freguesia": "Fornos",
         "dicofre": "010602",
         "brasao": "https://dados.gov.pt/s/brasoes/010602.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Castelo de Paiva",
         "freguesia": "Real",
         "dicofre": "010606",
         "brasao": "https://dados.gov.pt/s/brasoes/010606.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Castelo de Paiva",
         "freguesia": "Santa Maria de Sardoura",
         "dicofre": "010607",
         "brasao": "https://dados.gov.pt/s/brasoes/010607.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Castelo de Paiva",
         "freguesia": "Sao Martinho de Sardoura",
         "dicofre": "010608",
         "brasao": "https://dados.gov.pt/s/brasoes/010608.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Castelo de Paiva",
         "freguesia": "Uniao das freguesias de Raiva, Pedorido e Paraiso",
         "dicofre": "010610",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Castelo de Paiva",
         "freguesia": "Uniao das freguesias de Sobrado e Bairros",
         "dicofre": "010611",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Espinho",
         "freguesia": "Espinho",
         "dicofre": "010702",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Espinho",
         "freguesia": "Paramos",
         "dicofre": "010704",
         "brasao": "https://dados.gov.pt/s/brasoes/010704.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Espinho",
         "freguesia": "Silvalde",
         "dicofre": "010705",
         "brasao": "https://dados.gov.pt/s/brasoes/010705.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Espinho",
         "freguesia": "Uniao das freguesias de Anta e Guetim",
         "dicofre": "010706",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Estarreja",
         "freguesia": "Avanca",
         "dicofre": "010801",
         "brasao": "https://dados.gov.pt/s/brasoes/010801.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Estarreja",
         "freguesia": "Pardilho",
         "dicofre": "010805",
         "brasao": "https://dados.gov.pt/s/brasoes/010805.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Estarreja",
         "freguesia": "Salreu",
         "dicofre": "010806",
         "brasao": "https://dados.gov.pt/s/brasoes/010806.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Estarreja",
         "freguesia": "Uniao das freguesias de Beduido e Veiros",
         "dicofre": "010808",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Estarreja",
         "freguesia": "Uniao das freguesias de Canelas e Fermela",
         "dicofre": "010809",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Argoncilhe",
         "dicofre": "010901",
         "brasao": "https://dados.gov.pt/s/brasoes/010901.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Arrifana",
         "dicofre": "010902",
         "brasao": "https://dados.gov.pt/s/brasoes/010902.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Escapaes",
         "dicofre": "010904",
         "brasao": "https://dados.gov.pt/s/brasoes/010904.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Fiaes",
         "dicofre": "010907",
         "brasao": "https://dados.gov.pt/s/brasoes/010907.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Fornos",
         "dicofre": "010908",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Lourosa",
         "dicofre": "010913",
         "brasao": "https://dados.gov.pt/s/brasoes/010913.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Milheiros de Poiares",
         "dicofre": "010914",
         "brasao": "https://dados.gov.pt/s/brasoes/010914.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Mozelos",
         "dicofre": "010916",
         "brasao": "https://dados.gov.pt/s/brasoes/010916.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Nogueira da Regedoura",
         "dicofre": "010917",
         "brasao": "https://dados.gov.pt/s/brasoes/010917.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Sao Paio de Oleiros",
         "dicofre": "010918",
         "brasao": "https://dados.gov.pt/s/brasoes/010918.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Pacos de Brandao",
         "dicofre": "010919",
         "brasao": "https://dados.gov.pt/s/brasoes/010919.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Rio Meao",
         "dicofre": "010921",
         "brasao": "https://dados.gov.pt/s/brasoes/010921.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Romariz",
         "dicofre": "010922",
         "brasao": "https://dados.gov.pt/s/brasoes/010922.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Sanguedo",
         "dicofre": "010924",
         "brasao": "https://dados.gov.pt/s/brasoes/010924.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Santa Maria de Lamas",
         "dicofre": "010925",
         "brasao": "https://dados.gov.pt/s/brasoes/010925.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Sao Joao de Ver",
         "dicofre": "010926",
         "brasao": "https://dados.gov.pt/s/brasoes/010926.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Uniao das freguesias de Caldas de Sao Jorge e Pigeiros",
         "dicofre": "010932",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Uniao das freguesias de Canedo, Vale e Vila Maior",
         "dicofre": "010933",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Uniao das freguesias de Lobao, Giao, Louredo e Guisande",
         "dicofre": "010934",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Uniao das freguesias de Santa Maria da Feira, Travanca, Sanfins e Espargo",
         "dicofre": "010935",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Santa Maria da Feira",
         "freguesia": "Uniao das freguesias de Sao Miguel do Souto e Mosteiro",
         "dicofre": "010936",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Ilhavo",
         "freguesia": "Gafanha da Encarnacao",
         "dicofre": "011005",
         "brasao": "https://dados.gov.pt/s/brasoes/011005.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Ilhavo",
         "freguesia": "Gafanha da Nazare",
         "dicofre": "011006",
         "brasao": "https://dados.gov.pt/s/brasoes/011006.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Ilhavo",
         "freguesia": "Gafanha do Carmo",
         "dicofre": "011007",
         "brasao": "https://dados.gov.pt/s/brasoes/011007.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Ilhavo",
         "freguesia": "Ilhavo (Sao Salvador)",
         "dicofre": "011008",
         "brasao": "https://dados.gov.pt/s/brasoes/011008.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Mealhada",
         "freguesia": "Barcouco",
         "dicofre": "011102",
         "brasao": "https://dados.gov.pt/s/brasoes/011102.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Mealhada",
         "freguesia": "Casal Comba",
         "dicofre": "011103",
         "brasao": "https://dados.gov.pt/s/brasoes/011103.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Mealhada",
         "freguesia": "Luso",
         "dicofre": "011104",
         "brasao": "https://dados.gov.pt/s/brasoes/011104.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Mealhada",
         "freguesia": "Pampilhosa",
         "dicofre": "011106",
         "brasao": "https://dados.gov.pt/s/brasoes/011106.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Mealhada",
         "freguesia": "Vacarica",
         "dicofre": "011107",
         "brasao": "https://dados.gov.pt/s/brasoes/011107.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Mealhada",
         "freguesia": "Uniao das freguesias da Mealhada, Ventosa do Bairro e Antes",
         "dicofre": "011109",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Murtosa",
         "freguesia": "Bunheiro",
         "dicofre": "011201",
         "brasao": "https://dados.gov.pt/s/brasoes/011201.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Murtosa",
         "freguesia": "Monte",
         "dicofre": "011202",
         "brasao": "https://dados.gov.pt/s/brasoes/011202.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Murtosa",
         "freguesia": "Murtosa",
         "dicofre": "011203",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Murtosa",
         "freguesia": "Torreira",
         "dicofre": "011204",
         "brasao": "https://dados.gov.pt/s/brasoes/011204.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Carregosa",
         "dicofre": "011301",
         "brasao": "https://dados.gov.pt/s/brasoes/011301.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Cesar",
         "dicofre": "011302",
         "brasao": "https://dados.gov.pt/s/brasoes/011302.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Fajoes",
         "dicofre": "011303",
         "brasao": "https://dados.gov.pt/s/brasoes/011303.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Loureiro",
         "dicofre": "011304",
         "brasao": "https://dados.gov.pt/s/brasoes/011304.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Macieira de Sarnes",
         "dicofre": "011305",
         "brasao": "https://dados.gov.pt/s/brasoes/011305.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Ossela",
         "dicofre": "011310",
         "brasao": "https://dados.gov.pt/s/brasoes/011310.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Sao Martinho da Gandara",
         "dicofre": "011315",
         "brasao": "https://dados.gov.pt/s/brasoes/011315.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Sao Roque",
         "dicofre": "011318",
         "brasao": "https://dados.gov.pt/s/brasoes/011318.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Vila de Cucujaes",
         "dicofre": "011319",
         "brasao": "https://dados.gov.pt/s/brasoes/011319.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Uniao das freguesias de Nogueira do Cravo e Pindelo",
         "dicofre": "011320",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Uniao das freguesias de Oliveira de Azemeis, Santiago de Riba-Ul, Ul, Macinhata da Seixa e Madail",
         "dicofre": "011321",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira de Azemeis",
         "freguesia": "Uniao das freguesias de Pinheiro da Bemposta, Travanca e Palmaz",
         "dicofre": "011322",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira do Bairro",
         "freguesia": "Oia",
         "dicofre": "011403",
         "brasao": "https://dados.gov.pt/s/brasoes/011403.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira do Bairro",
         "freguesia": "Oliveira do Bairro",
         "dicofre": "011404",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira do Bairro",
         "freguesia": "Palhaca",
         "dicofre": "011405",
         "brasao": "https://dados.gov.pt/s/brasoes/011405.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Oliveira do Bairro",
         "freguesia": "Uniao das freguesias de Bustos, Troviscal e Mamarrosa",
         "dicofre": "011407",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Ovar",
         "freguesia": "Cortegaca",
         "dicofre": "011502",
         "brasao": "https://dados.gov.pt/s/brasoes/011502.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Ovar",
         "freguesia": "Esmoriz",
         "dicofre": "011503",
         "brasao": "https://dados.gov.pt/s/brasoes/011503.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Ovar",
         "freguesia": "Maceda",
         "dicofre": "011504",
         "brasao": "https://dados.gov.pt/s/brasoes/011504.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Ovar",
         "freguesia": "Valega",
         "dicofre": "011507",
         "brasao": "https://dados.gov.pt/s/brasoes/011507.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Ovar",
         "freguesia": "Uniao das freguesias de Ovar, Sao Joao, Arada e Sao Vicente de Pereira Jusa",
         "dicofre": "011509",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Sao Joao da Madeira",
         "freguesia": "Sao Joao da Madeira",
         "dicofre": "011601",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Sever do Vouga",
         "freguesia": "Couto de Esteves",
         "dicofre": "011702",
         "brasao": "https://dados.gov.pt/s/brasoes/011702.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Sever do Vouga",
         "freguesia": "Pessegueiro do Vouga",
         "dicofre": "011704",
         "brasao": "https://dados.gov.pt/s/brasoes/011704.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Sever do Vouga",
         "freguesia": "Rocas do Vouga",
         "dicofre": "011705",
         "brasao": "https://dados.gov.pt/s/brasoes/011705.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Sever do Vouga",
         "freguesia": "Sever do Vouga",
         "dicofre": "011706",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Sever do Vouga",
         "freguesia": "Talhadas",
         "dicofre": "011708",
         "brasao": "https://dados.gov.pt/s/brasoes/011708.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Sever do Vouga",
         "freguesia": "Uniao das freguesias de Cedrim e Paradela",
         "dicofre": "011710",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Sever do Vouga",
         "freguesia": "Uniao das freguesias de Silva Escura e Dornelas",
         "dicofre": "011711",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vagos",
         "freguesia": "Calvao",
         "dicofre": "011801",
         "brasao": "https://dados.gov.pt/s/brasoes/011801.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vagos",
         "freguesia": "Gafanha da Boa Hora",
         "dicofre": "011804",
         "brasao": "https://dados.gov.pt/s/brasoes/011804.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vagos",
         "freguesia": "Ouca",
         "dicofre": "011805",
         "brasao": "https://dados.gov.pt/s/brasoes/011805.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vagos",
         "freguesia": "Sosa",
         "dicofre": "011807",
         "brasao": "https://dados.gov.pt/s/brasoes/011807.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vagos",
         "freguesia": "Santo Andre de Vagos",
         "dicofre": "011810",
         "brasao": "https://dados.gov.pt/s/brasoes/011810.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vagos",
         "freguesia": "Uniao das freguesias de Fonte de Angeao e Covao do Lobo",
         "dicofre": "011812",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vagos",
         "freguesia": "Uniao das freguesias de Ponte de Vagos e Santa Catarina",
         "dicofre": "011813",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vagos",
         "freguesia": "Uniao das freguesias de Vagos e Santo Antonio",
         "dicofre": "011814",
         "brasao": ""
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vale de Cambra",
         "freguesia": "Aroes",
         "dicofre": "011901",
         "brasao": "https://dados.gov.pt/s/brasoes/011901.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vale de Cambra",
         "freguesia": "Sao Pedro de Casteloes",
         "dicofre": "011902",
         "brasao": "https://dados.gov.pt/s/brasoes/011902.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vale de Cambra",
         "freguesia": "Cepelos",
         "dicofre": "011903",
         "brasao": "https://dados.gov.pt/s/brasoes/011903.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vale de Cambra",
         "freguesia": "Junqueira",
         "dicofre": "011905",
         "brasao": "https://dados.gov.pt/s/brasoes/011905.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vale de Cambra",
         "freguesia": "Macieira de Cambra",
         "dicofre": "011906",
         "brasao": "https://dados.gov.pt/s/brasoes/011906.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vale de Cambra",
         "freguesia": "Roge",
         "dicofre": "011907",
         "brasao": "https://dados.gov.pt/s/brasoes/011907.png"
      },
      {
         "distrito": "Aveiro",
         "concelho": "Vale de Cambra",
         "freguesia": "Uniao das freguesias de Vila Cha, Codal e Vila Cova de Perrinho",
         "dicofre": "011910",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Aljustrel",
         "freguesia": "Ervidel",
         "dicofre": "020102",
         "brasao": "https://dados.gov.pt/s/brasoes/020102.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Aljustrel",
         "freguesia": "Messejana",
         "dicofre": "020103",
         "brasao": "https://dados.gov.pt/s/brasoes/020103.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Aljustrel",
         "freguesia": "Sao Joao de Negrilhos",
         "dicofre": "020104",
         "brasao": "https://dados.gov.pt/s/brasoes/020104.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Aljustrel",
         "freguesia": "Uniao das freguesias de Aljustrel e Rio de Moinhos",
         "dicofre": "020106",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Almodovar",
         "freguesia": "Rosario",
         "dicofre": "020203",
         "brasao": "https://dados.gov.pt/s/brasoes/020203.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Almodovar",
         "freguesia": "Santa Cruz",
         "dicofre": "020205",
         "brasao": "https://dados.gov.pt/s/brasoes/020205.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Almodovar",
         "freguesia": "Sao Barnabe",
         "dicofre": "020206",
         "brasao": "https://dados.gov.pt/s/brasoes/020206.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Almodovar",
         "freguesia": "Aldeia dos Fernandes",
         "dicofre": "020208",
         "brasao": "https://dados.gov.pt/s/brasoes/020208.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Almodovar",
         "freguesia": "Uniao das freguesias de Almodovar e Graca dos Padroes",
         "dicofre": "020209",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Almodovar",
         "freguesia": "Uniao das freguesias de Santa Clara-a-Nova e Gomes Aires",
         "dicofre": "020210",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Alvito",
         "freguesia": "Alvito",
         "dicofre": "020301",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Alvito",
         "freguesia": "Vila Nova da Baronia",
         "dicofre": "020302",
         "brasao": "https://dados.gov.pt/s/brasoes/020302.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Barrancos",
         "freguesia": "Barrancos",
         "dicofre": "020401",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Baleizao",
         "dicofre": "020502",
         "brasao": "https://dados.gov.pt/s/brasoes/020502.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Beringel",
         "dicofre": "020503",
         "brasao": "https://dados.gov.pt/s/brasoes/020503.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Cabeca Gorda",
         "dicofre": "020504",
         "brasao": "https://dados.gov.pt/s/brasoes/020504.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Nossa Senhora das Neves",
         "dicofre": "020506",
         "brasao": "https://dados.gov.pt/s/brasoes/020506.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Santa Clara de Louredo",
         "dicofre": "020510",
         "brasao": "https://dados.gov.pt/s/brasoes/020510.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Sao Matias",
         "dicofre": "020516",
         "brasao": "https://dados.gov.pt/s/brasoes/020516.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Uniao das freguesias de Albernoa e Trindade",
         "dicofre": "020519",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Uniao das freguesias de Beja (Salvador e Santa Maria da Feira)",
         "dicofre": "020520",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Uniao das freguesias de Beja (Santiago Maior e Sao Joao Baptista)",
         "dicofre": "020521",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Uniao das freguesias de Salvada e Quintos",
         "dicofre": "020522",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Uniao das freguesias de Santa Vitoria e Mombeja",
         "dicofre": "020523",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Beja",
         "freguesia": "Uniao das freguesias de Trigaches e Sao Brissos",
         "dicofre": "020524",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Castro Verde",
         "freguesia": "Entradas",
         "dicofre": "020603",
         "brasao": "https://dados.gov.pt/s/brasoes/020603.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Castro Verde",
         "freguesia": "Santa Barbara de Padroes",
         "dicofre": "020604",
         "brasao": "https://dados.gov.pt/s/brasoes/020604.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Castro Verde",
         "freguesia": "Sao Marcos da Ataboeira",
         "dicofre": "020605",
         "brasao": "https://dados.gov.pt/s/brasoes/020605.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Castro Verde",
         "freguesia": "Uniao das freguesias de Castro Verde e Casevel",
         "dicofre": "020606",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Cuba",
         "freguesia": "Cuba",
         "dicofre": "020701",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Cuba",
         "freguesia": "Faro do Alentejo",
         "dicofre": "020702",
         "brasao": "https://dados.gov.pt/s/brasoes/020702.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Cuba",
         "freguesia": "Vila Alva",
         "dicofre": "020703",
         "brasao": "https://dados.gov.pt/s/brasoes/020703.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Cuba",
         "freguesia": "Vila Ruiva",
         "dicofre": "020704",
         "brasao": "https://dados.gov.pt/s/brasoes/020704.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Ferreira do Alentejo",
         "freguesia": "Figueira dos Cavaleiros",
         "dicofre": "020803",
         "brasao": "https://dados.gov.pt/s/brasoes/020803.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Ferreira do Alentejo",
         "freguesia": "Odivelas",
         "dicofre": "020804",
         "brasao": "https://dados.gov.pt/s/brasoes/020804.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Ferreira do Alentejo",
         "freguesia": "Uniao das freguesias de Alfundao e Peroguarda",
         "dicofre": "020807",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Ferreira do Alentejo",
         "freguesia": "Uniao das freguesias de Ferreira do Alentejo e Canhestros",
         "dicofre": "020808",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Mertola",
         "freguesia": "Alcaria Ruiva",
         "dicofre": "020901",
         "brasao": "https://dados.gov.pt/s/brasoes/020901.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Mertola",
         "freguesia": "Corte do Pinto",
         "dicofre": "020902",
         "brasao": "https://dados.gov.pt/s/brasoes/020902.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Mertola",
         "freguesia": "Espirito Santo",
         "dicofre": "020903",
         "brasao": "https://dados.gov.pt/s/brasoes/020903.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Mertola",
         "freguesia": "Mertola",
         "dicofre": "020904",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Mertola",
         "freguesia": "Santana de Cambas",
         "dicofre": "020905",
         "brasao": "https://dados.gov.pt/s/brasoes/020905.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Mertola",
         "freguesia": "Sao Joao dos Caldeireiros",
         "dicofre": "020906",
         "brasao": "https://dados.gov.pt/s/brasoes/020906.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Mertola",
         "freguesia": "Uniao das freguesias de Sao Miguel do Pinheiro, Sao Pedro de Solis e Sao Sebastiao dos Carros",
         "dicofre": "020910",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Moura",
         "freguesia": "Amareleja",
         "dicofre": "021001",
         "brasao": "https://dados.gov.pt/s/brasoes/021001.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Moura",
         "freguesia": "Povoa de Sao Miguel",
         "dicofre": "021002",
         "brasao": "https://dados.gov.pt/s/brasoes/021002.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Moura",
         "freguesia": "Sobral da Adica",
         "dicofre": "021008",
         "brasao": "https://dados.gov.pt/s/brasoes/021008.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Moura",
         "freguesia": "Uniao das freguesias de Moura (Santo Agostinho e Sao Joao Baptista) e Santo Amador",
         "dicofre": "021009",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Moura",
         "freguesia": "Uniao das freguesias de Safara e Santo Aleixo da Restauracao",
         "dicofre": "021010",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Reliquias",
         "dicofre": "021102",
         "brasao": "https://dados.gov.pt/s/brasoes/021102.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Saboia",
         "dicofre": "021103",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Sao Luis",
         "dicofre": "021106",
         "brasao": "https://dados.gov.pt/s/brasoes/021106.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Sao Martinho das Amoreiras",
         "dicofre": "021107",
         "brasao": "https://dados.gov.pt/s/brasoes/021107.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Vila Nova de Milfontes",
         "dicofre": "021111",
         "brasao": "https://dados.gov.pt/s/brasoes/021111.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Luzianes-Gare",
         "dicofre": "021115",
         "brasao": "https://dados.gov.pt/s/brasoes/021115.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Boavista dos Pinheiros",
         "dicofre": "021116",
         "brasao": "https://dados.gov.pt/s/brasoes/021116.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Longueira/Almograve",
         "dicofre": "021117",
         "brasao": "https://dados.gov.pt/s/brasoes/021117.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Colos",
         "dicofre": "021118",
         "brasao": "https://dados.gov.pt/s/brasoes/021118.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Santa Clara-a-Velha",
         "dicofre": "021119",
         "brasao": "https://dados.gov.pt/s/brasoes/021119.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Sao Salvador e Santa Maria",
         "dicofre": "021120",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Sao Teotonio",
         "dicofre": "021121",
         "brasao": "https://dados.gov.pt/s/brasoes/021121.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Odemira",
         "freguesia": "Vale de Santiago",
         "dicofre": "021122",
         "brasao": "https://dados.gov.pt/s/brasoes/021122.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Ourique",
         "freguesia": "Ourique",
         "dicofre": "021203",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Ourique",
         "freguesia": "Santana da Serra",
         "dicofre": "021206",
         "brasao": "https://dados.gov.pt/s/brasoes/021206.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Ourique",
         "freguesia": "Uniao das freguesias de Garvao e Santa Luzia",
         "dicofre": "021207",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Ourique",
         "freguesia": "Uniao das freguesias de Panoias e Conceicao",
         "dicofre": "021208",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Serpa",
         "freguesia": "Brinches",
         "dicofre": "021302",
         "brasao": "https://dados.gov.pt/s/brasoes/021302.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Serpa",
         "freguesia": "Pias",
         "dicofre": "021303",
         "brasao": "https://dados.gov.pt/s/brasoes/021303.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Serpa",
         "freguesia": "Vila Verde de Ficalho",
         "dicofre": "021307",
         "brasao": "https://dados.gov.pt/s/brasoes/021307.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Serpa",
         "freguesia": "Uniao das freguesias de Serpa (Salvador e Santa Maria)",
         "dicofre": "021308",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Serpa",
         "freguesia": "Uniao das freguesias de Vila Nova de Sao Bento e Vale de Vargo",
         "dicofre": "021309",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Vidigueira",
         "freguesia": "Pedrogao",
         "dicofre": "021401",
         "brasao": "https://dados.gov.pt/s/brasoes/021401.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Vidigueira",
         "freguesia": "Selmes",
         "dicofre": "021402",
         "brasao": "https://dados.gov.pt/s/brasoes/021402.png"
      },
      {
         "distrito": "Beja",
         "concelho": "Vidigueira",
         "freguesia": "Vidigueira",
         "dicofre": "021403",
         "brasao": ""
      },
      {
         "distrito": "Beja",
         "concelho": "Vidigueira",
         "freguesia": "Vila de Frades",
         "dicofre": "021404",
         "brasao": "https://dados.gov.pt/s/brasoes/021404.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Barreiros",
         "dicofre": "030102",
         "brasao": "https://dados.gov.pt/s/brasoes/030102.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Bico",
         "dicofre": "030104",
         "brasao": "https://dados.gov.pt/s/brasoes/030104.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Caires",
         "dicofre": "030105",
         "brasao": "https://dados.gov.pt/s/brasoes/030105.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Carrazedo",
         "dicofre": "030107",
         "brasao": "https://dados.gov.pt/s/brasoes/030107.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Dornelas",
         "dicofre": "030108",
         "brasao": "https://dados.gov.pt/s/brasoes/030108.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Fiscal",
         "dicofre": "030111",
         "brasao": "https://dados.gov.pt/s/brasoes/030111.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Goaes",
         "dicofre": "030112",
         "brasao": "https://dados.gov.pt/s/brasoes/030112.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Lago",
         "dicofre": "030113",
         "brasao": "https://dados.gov.pt/s/brasoes/030113.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Rendufe",
         "dicofre": "030118",
         "brasao": "https://dados.gov.pt/s/brasoes/030118.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Bouro (Santa Maria)",
         "dicofre": "030119",
         "brasao": "https://dados.gov.pt/s/brasoes/030119.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Bouro (Santa Marta)",
         "dicofre": "030120",
         "brasao": "https://dados.gov.pt/s/brasoes/030120.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Uniao das freguesias de Amares e Figueiredo",
         "dicofre": "030125",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Uniao das freguesias de Caldelas, Sequeiros e Paranhos",
         "dicofre": "030126",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Uniao das freguesias de Ferreiros, Prozelo e Besteiros",
         "dicofre": "030127",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Uniao das freguesias de Torre e Portela",
         "dicofre": "030128",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Amares",
         "freguesia": "Uniao das freguesias de Vilela, Seramil e Paredes Secas",
         "dicofre": "030129",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Abade de Neiva",
         "dicofre": "030201",
         "brasao": "https://dados.gov.pt/s/brasoes/030201.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Aborim",
         "dicofre": "030202",
         "brasao": "https://dados.gov.pt/s/brasoes/030202.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Adaes",
         "dicofre": "030203",
         "brasao": "https://dados.gov.pt/s/brasoes/030203.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Airo",
         "dicofre": "030205",
         "brasao": "https://dados.gov.pt/s/brasoes/030205.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Aldreu",
         "dicofre": "030206",
         "brasao": "https://dados.gov.pt/s/brasoes/030206.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Alvelos",
         "dicofre": "030208",
         "brasao": "https://dados.gov.pt/s/brasoes/030208.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Arcozelo",
         "dicofre": "030209",
         "brasao": "https://dados.gov.pt/s/brasoes/030209.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Areias",
         "dicofre": "030210",
         "brasao": "https://dados.gov.pt/s/brasoes/030210.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Balugaes",
         "dicofre": "030212",
         "brasao": "https://dados.gov.pt/s/brasoes/030212.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Barcelinhos",
         "dicofre": "030213",
         "brasao": "https://dados.gov.pt/s/brasoes/030213.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Barqueiros",
         "dicofre": "030215",
         "brasao": "https://dados.gov.pt/s/brasoes/030215.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Cambeses",
         "dicofre": "030216",
         "brasao": "https://dados.gov.pt/s/brasoes/030216.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Carapecos",
         "dicofre": "030218",
         "brasao": "https://dados.gov.pt/s/brasoes/030218.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Carvalhal",
         "dicofre": "030220",
         "brasao": "https://dados.gov.pt/s/brasoes/030220.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Carvalhas",
         "dicofre": "030221",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Cossourado",
         "dicofre": "030224",
         "brasao": "https://dados.gov.pt/s/brasoes/030224.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Cristelo",
         "dicofre": "030228",
         "brasao": "https://dados.gov.pt/s/brasoes/030228.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Fornelos",
         "dicofre": "030234",
         "brasao": "https://dados.gov.pt/s/brasoes/030234.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Fragoso",
         "dicofre": "030235",
         "brasao": "https://dados.gov.pt/s/brasoes/030235.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Gilmonde",
         "dicofre": "030237",
         "brasao": "https://dados.gov.pt/s/brasoes/030237.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Lama",
         "dicofre": "030242",
         "brasao": "https://dados.gov.pt/s/brasoes/030242.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Lijo",
         "dicofre": "030243",
         "brasao": "https://dados.gov.pt/s/brasoes/030243.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Macieira de Rates",
         "dicofre": "030244",
         "brasao": "https://dados.gov.pt/s/brasoes/030244.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Manhente",
         "dicofre": "030245",
         "brasao": "https://dados.gov.pt/s/brasoes/030245.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Martim",
         "dicofre": "030247",
         "brasao": "https://dados.gov.pt/s/brasoes/030247.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Moure",
         "dicofre": "030252",
         "brasao": "https://dados.gov.pt/s/brasoes/030252.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Oliveira",
         "dicofre": "030254",
         "brasao": "https://dados.gov.pt/s/brasoes/030254.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Palme",
         "dicofre": "030255",
         "brasao": "https://dados.gov.pt/s/brasoes/030255.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Panque",
         "dicofre": "030256",
         "brasao": "https://dados.gov.pt/s/brasoes/030256.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Paradela",
         "dicofre": "030257",
         "brasao": "https://dados.gov.pt/s/brasoes/030257.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Pereira",
         "dicofre": "030259",
         "brasao": "https://dados.gov.pt/s/brasoes/030259.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Perelhal",
         "dicofre": "030260",
         "brasao": "https://dados.gov.pt/s/brasoes/030260.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Pousa",
         "dicofre": "030261",
         "brasao": "https://dados.gov.pt/s/brasoes/030261.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Remelhe",
         "dicofre": "030263",
         "brasao": "https://dados.gov.pt/s/brasoes/030263.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Roriz",
         "dicofre": "030264",
         "brasao": "https://dados.gov.pt/s/brasoes/030264.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Rio Covo (Santa Eugenia)",
         "dicofre": "030265",
         "brasao": "https://dados.gov.pt/s/brasoes/030265.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Galegos (Santa Maria)",
         "dicofre": "030268",
         "brasao": "https://dados.gov.pt/s/brasoes/030268.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Galegos (Sao Martinho)",
         "dicofre": "030272",
         "brasao": "https://dados.gov.pt/s/brasoes/030272.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Tamel (Sao Verissimo)",
         "dicofre": "030277",
         "brasao": "https://dados.gov.pt/s/brasoes/030277.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Silva",
         "dicofre": "030279",
         "brasao": "https://dados.gov.pt/s/brasoes/030279.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Ucha",
         "dicofre": "030282",
         "brasao": "https://dados.gov.pt/s/brasoes/030282.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Varzea",
         "dicofre": "030283",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Vila Seca",
         "dicofre": "030287",
         "brasao": "https://dados.gov.pt/s/brasoes/030287.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Alheira e Igreja Nova",
         "dicofre": "030290",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Alvito (Sao Pedro e Sao Martinho) e Couto",
         "dicofre": "030291",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Areias de Vilar e Encourados",
         "dicofre": "030292",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Barcelos, Vila Boa e Vila Frescainha (Sao Martinho e Sao Pedro)",
         "dicofre": "030293",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Campo e Tamel (Sao Pedro Fins)",
         "dicofre": "030294",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Carreira e Fonte Coberta",
         "dicofre": "030295",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Chorente, Goios, Courel, Pedra Furada e Gueral",
         "dicofre": "030296",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Creixomil e Mariz",
         "dicofre": "030297",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Durraes e Tregosa",
         "dicofre": "030298",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Gamil e Midoes",
         "dicofre": "030299",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Milhazes, Vilar de Figos e Faria",
         "dicofre": "0302FA",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Negreiros e Chavao",
         "dicofre": "0302FB",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Quintiaes e Aguiar",
         "dicofre": "0302FC",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Sequeade e Bastuco (Sao Joao e Santo Estevao)",
         "dicofre": "0302FD",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Silveiros e Rio Covo (Santa Eulalia)",
         "dicofre": "0302FE",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Tamel (Santa Leocadia) e Vilar do Monte",
         "dicofre": "0302FF",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Viatodos, Grimancelos, Minhotaes e Monte de Fralaes",
         "dicofre": "0302FG",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Barcelos",
         "freguesia": "Uniao das freguesias de Vila Cova e Feitos",
         "dicofre": "0302FH",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Adaufe",
         "dicofre": "030301",
         "brasao": "https://dados.gov.pt/s/brasoes/030301.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Espinho",
         "dicofre": "030312",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Esporoes",
         "dicofre": "030313",
         "brasao": "https://dados.gov.pt/s/brasoes/030313.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Figueiredo",
         "dicofre": "030315",
         "brasao": "https://dados.gov.pt/s/brasoes/030315.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Gualtar",
         "dicofre": "030319",
         "brasao": "https://dados.gov.pt/s/brasoes/030319.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Lamas",
         "dicofre": "030322",
         "brasao": "https://dados.gov.pt/s/brasoes/030322.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Mire de Tibaes",
         "dicofre": "030325",
         "brasao": "https://dados.gov.pt/s/brasoes/030325.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Padim da Graca",
         "dicofre": "030330",
         "brasao": "https://dados.gov.pt/s/brasoes/030330.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Palmeira",
         "dicofre": "030331",
         "brasao": "https://dados.gov.pt/s/brasoes/030331.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Pedralva",
         "dicofre": "030334",
         "brasao": "https://dados.gov.pt/s/brasoes/030334.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Priscos",
         "dicofre": "030336",
         "brasao": "https://dados.gov.pt/s/brasoes/030336.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Ruilhe",
         "dicofre": "030338",
         "brasao": "https://dados.gov.pt/s/brasoes/030338.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Braga (Sao Vicente)",
         "dicofre": "030349",
         "brasao": "https://dados.gov.pt/s/brasoes/030349.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Braga (Sao Vitor)",
         "dicofre": "030351",
         "brasao": "https://dados.gov.pt/s/brasoes/030351.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Sequeira",
         "dicofre": "030354",
         "brasao": "https://dados.gov.pt/s/brasoes/030354.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Sobreposta",
         "dicofre": "030355",
         "brasao": "https://dados.gov.pt/s/brasoes/030355.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Tadim",
         "dicofre": "030356",
         "brasao": "https://dados.gov.pt/s/brasoes/030356.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Tebosa",
         "dicofre": "030357",
         "brasao": "https://dados.gov.pt/s/brasoes/030357.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Arentim e Cunha",
         "dicofre": "030363",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Braga (Maximinos, Se e Cividade)",
         "dicofre": "030364",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Braga (Sao Jose de Sao Lazaro e Sao Joao do Souto)",
         "dicofre": "030365",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Cabreiros e Passos (Sao Juliao)",
         "dicofre": "030366",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Celeiros, Aveleda e Vimieiro",
         "dicofre": "030367",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Crespos e Pousada",
         "dicofre": "030368",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Escudeiros e Penso (Santo Estevao e Sao Vicente)",
         "dicofre": "030369",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Este (Sao Pedro e Sao Mamede)",
         "dicofre": "030370",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Ferreiros e Gondizalves",
         "dicofre": "030371",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Guisande e Oliveira (Sao Pedro)",
         "dicofre": "030372",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Lomar e Arcos",
         "dicofre": "030373",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Merelim (Sao Paio), Panoias e Parada de Tibaes",
         "dicofre": "030374",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Merelim (Sao Pedro) e Frossos",
         "dicofre": "030375",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Morreira e Trandeiras",
         "dicofre": "030376",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Nogueira, Fraiao e Lamacaes",
         "dicofre": "030377",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Nogueiro e Tenoes",
         "dicofre": "030378",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Real, Dume e Semelhe",
         "dicofre": "030379",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Santa Lucrecia de Algeriz e Navarra",
         "dicofre": "030380",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Braga",
         "freguesia": "Uniao das freguesias de Vilaca e Fradelos",
         "dicofre": "030381",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Abadim",
         "dicofre": "030401",
         "brasao": "https://dados.gov.pt/s/brasoes/030401.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Basto",
         "dicofre": "030404",
         "brasao": "https://dados.gov.pt/s/brasoes/030404.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Bucos",
         "dicofre": "030405",
         "brasao": "https://dados.gov.pt/s/brasoes/030405.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Cabeceiras de Basto",
         "dicofre": "030406",
         "brasao": "https://dados.gov.pt/s/brasoes/030406.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Cavez",
         "dicofre": "030407",
         "brasao": "https://dados.gov.pt/s/brasoes/030407.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Faia",
         "dicofre": "030408",
         "brasao": "https://dados.gov.pt/s/brasoes/030408.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Pedraca",
         "dicofre": "030413",
         "brasao": "https://dados.gov.pt/s/brasoes/030413.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Rio Douro",
         "dicofre": "030415",
         "brasao": "https://dados.gov.pt/s/brasoes/030415.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Uniao das freguesias de Alvite e Passos",
         "dicofre": "030418",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Uniao das freguesias de Arco de Baulhe e Vila Nune",
         "dicofre": "030419",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Uniao das freguesias de Gondiaes e Vilar de Cunhas",
         "dicofre": "030420",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Cabeceiras de Basto",
         "freguesia": "Uniao das freguesias de Refojos de Basto, Outeiro e Painzela",
         "dicofre": "030421",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Agilde",
         "dicofre": "030501",
         "brasao": "https://dados.gov.pt/s/brasoes/030501.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Arnoia",
         "dicofre": "030502",
         "brasao": "https://dados.gov.pt/s/brasoes/030502.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Borba de Montanha",
         "dicofre": "030503",
         "brasao": "https://dados.gov.pt/s/brasoes/030503.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Codecoso",
         "dicofre": "030508",
         "brasao": "https://dados.gov.pt/s/brasoes/030508.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Fervenca",
         "dicofre": "030510",
         "brasao": "https://dados.gov.pt/s/brasoes/030510.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Moreira do Castelo",
         "dicofre": "030515",
         "brasao": "https://dados.gov.pt/s/brasoes/030515.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Rego",
         "dicofre": "030517",
         "brasao": "https://dados.gov.pt/s/brasoes/030517.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Ribas",
         "dicofre": "030518",
         "brasao": "https://dados.gov.pt/s/brasoes/030518.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Basto (Sao Clemente)",
         "dicofre": "030520",
         "brasao": "https://dados.gov.pt/s/brasoes/030520.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Vale de Bouro",
         "dicofre": "030521",
         "brasao": "https://dados.gov.pt/s/brasoes/030521.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Uniao das freguesias de Britelo, Gemeos e Ourilhe",
         "dicofre": "030523",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Uniao das freguesias de Cacarilhe e Infesta",
         "dicofre": "030524",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Uniao das freguesias de Canedo de Basto e Corgo",
         "dicofre": "030525",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Uniao das freguesias de Carvalho e Basto (Santa Tecla)",
         "dicofre": "030526",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Celorico de Basto",
         "freguesia": "Uniao das freguesias de Veade, Gagos e Molares",
         "dicofre": "030527",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Esposende",
         "freguesia": "Antas",
         "dicofre": "030601",
         "brasao": "https://dados.gov.pt/s/brasoes/030601.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Esposende",
         "freguesia": "Forjaes",
         "dicofre": "030608",
         "brasao": "https://dados.gov.pt/s/brasoes/030608.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Esposende",
         "freguesia": "Gemeses",
         "dicofre": "030610",
         "brasao": "https://dados.gov.pt/s/brasoes/030610.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Esposende",
         "freguesia": "Vila Cha",
         "dicofre": "030615",
         "brasao": "https://dados.gov.pt/s/brasoes/030615.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Esposende",
         "freguesia": "Uniao das freguesias de Apulia e Fao",
         "dicofre": "030616",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Esposende",
         "freguesia": "Uniao das freguesias de Belinho e Mar",
         "dicofre": "030617",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Esposende",
         "freguesia": "Uniao das freguesias de Esposende, Marinhas e Gandra",
         "dicofre": "030618",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Esposende",
         "freguesia": "Uniao das freguesias de Fonte Boa e Rio Tinto",
         "dicofre": "030619",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Esposende",
         "freguesia": "Uniao das freguesias de Palmeira de Faro e Curvos",
         "dicofre": "030620",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Armil",
         "dicofre": "030705",
         "brasao": "https://dados.gov.pt/s/brasoes/030705.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Estoraos",
         "dicofre": "030708",
         "brasao": "https://dados.gov.pt/s/brasoes/030708.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Fafe",
         "dicofre": "030709",
         "brasao": "https://dados.gov.pt/s/brasoes/030709.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Fornelos",
         "dicofre": "030712",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Golaes",
         "dicofre": "030714",
         "brasao": "https://dados.gov.pt/s/brasoes/030714.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Medelo",
         "dicofre": "030716",
         "brasao": "https://dados.gov.pt/s/brasoes/030716.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Passos",
         "dicofre": "030719",
         "brasao": "https://dados.gov.pt/s/brasoes/030719.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Quinchaes",
         "dicofre": "030722",
         "brasao": "https://dados.gov.pt/s/brasoes/030722.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Regadas",
         "dicofre": "030723",
         "brasao": "https://dados.gov.pt/s/brasoes/030723.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Revelhe",
         "dicofre": "030724",
         "brasao": "https://dados.gov.pt/s/brasoes/030724.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Ribeiros",
         "dicofre": "030725",
         "brasao": "https://dados.gov.pt/s/brasoes/030725.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Aroes (Santa Cristina)",
         "dicofre": "030726",
         "brasao": "https://dados.gov.pt/s/brasoes/030726.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Sao Gens",
         "dicofre": "030728",
         "brasao": "https://dados.gov.pt/s/brasoes/030728.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Silvares (Sao Martinho)",
         "dicofre": "030729",
         "brasao": "https://dados.gov.pt/s/brasoes/030729.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Aroes (Sao Romao)",
         "dicofre": "030730",
         "brasao": "https://dados.gov.pt/s/brasoes/030730.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Travassos",
         "dicofre": "030733",
         "brasao": "https://dados.gov.pt/s/brasoes/030733.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Vinhos",
         "dicofre": "030736",
         "brasao": "https://dados.gov.pt/s/brasoes/030736.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Uniao de freguesias de Aboim, Felgueiras, Gontim e Pedraido",
         "dicofre": "030737",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Uniao de freguesias de Agrela e Serafao",
         "dicofre": "030738",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Uniao de freguesias de Antime e Silvares (Sao Clemente)",
         "dicofre": "030739",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Uniao de freguesias de Ardegao, Arnozela e Seidoes",
         "dicofre": "030740",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Uniao de freguesias de Cepaes e Fareja",
         "dicofre": "030741",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Uniao de freguesias de Freitas e Vila Cova",
         "dicofre": "030742",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Uniao de freguesias de Monte e Queimadela",
         "dicofre": "030743",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Fafe",
         "freguesia": "Uniao de freguesias de Moreira do Rei e Varzea Cova",
         "dicofre": "030744",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Aldao",
         "dicofre": "030801",
         "brasao": "https://dados.gov.pt/s/brasoes/030801.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Azurem",
         "dicofre": "030804",
         "brasao": "https://dados.gov.pt/s/brasoes/030804.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Barco",
         "dicofre": "030806",
         "brasao": "https://dados.gov.pt/s/brasoes/030806.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Brito",
         "dicofre": "030807",
         "brasao": "https://dados.gov.pt/s/brasoes/030807.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Caldelas",
         "dicofre": "030808",
         "brasao": "https://dados.gov.pt/s/brasoes/030808.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Costa",
         "dicofre": "030812",
         "brasao": "https://dados.gov.pt/s/brasoes/030812.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Creixomil",
         "dicofre": "030813",
         "brasao": "https://dados.gov.pt/s/brasoes/030813.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Fermentoes",
         "dicofre": "030815",
         "brasao": "https://dados.gov.pt/s/brasoes/030815.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Gonca",
         "dicofre": "030820",
         "brasao": "https://dados.gov.pt/s/brasoes/030820.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Gondar",
         "dicofre": "030821",
         "brasao": "https://dados.gov.pt/s/brasoes/030821.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Guardizela",
         "dicofre": "030823",
         "brasao": "https://dados.gov.pt/s/brasoes/030823.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Infantas",
         "dicofre": "030824",
         "brasao": "https://dados.gov.pt/s/brasoes/030824.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Longos",
         "dicofre": "030827",
         "brasao": "https://dados.gov.pt/s/brasoes/030827.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Lordelo",
         "dicofre": "030828",
         "brasao": "https://dados.gov.pt/s/brasoes/030828.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Mesao Frio",
         "dicofre": "030830",
         "brasao": "https://dados.gov.pt/s/brasoes/030830.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Moreira de Conegos",
         "dicofre": "030831",
         "brasao": "https://dados.gov.pt/s/brasoes/030831.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Nespereira",
         "dicofre": "030832",
         "brasao": "https://dados.gov.pt/s/brasoes/030832.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Pencelo",
         "dicofre": "030835",
         "brasao": "https://dados.gov.pt/s/brasoes/030835.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Pinheiro",
         "dicofre": "030836",
         "brasao": "https://dados.gov.pt/s/brasoes/030836.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Polvoreira",
         "dicofre": "030837",
         "brasao": "https://dados.gov.pt/s/brasoes/030837.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Ponte",
         "dicofre": "030838",
         "brasao": "https://dados.gov.pt/s/brasoes/030838.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Ronfe",
         "dicofre": "030840",
         "brasao": "https://dados.gov.pt/s/brasoes/030840.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Prazins (Santa Eufemia)",
         "dicofre": "030842",
         "brasao": "https://dados.gov.pt/s/brasoes/030842.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Selho (Sao Cristovao)",
         "dicofre": "030850",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Selho (Sao Jorge)",
         "dicofre": "030854",
         "brasao": "https://dados.gov.pt/s/brasoes/030854.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Candoso (Sao Martinho)",
         "dicofre": "030857",
         "brasao": "https://dados.gov.pt/s/brasoes/030857.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Sande (Sao Martinho)",
         "dicofre": "030858",
         "brasao": "https://dados.gov.pt/s/brasoes/030858.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Sao Torcato",
         "dicofre": "030865",
         "brasao": "https://dados.gov.pt/s/brasoes/030865.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Serzedelo",
         "dicofre": "030866",
         "brasao": "https://dados.gov.pt/s/brasoes/030866.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Silvares",
         "dicofre": "030868",
         "brasao": "https://dados.gov.pt/s/brasoes/030868.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Urgezes",
         "dicofre": "030871",
         "brasao": "https://dados.gov.pt/s/brasoes/030871.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Abacao e Gemeos",
         "dicofre": "030875",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Airao Santa Maria, Airao Sao Joao e Vermil",
         "dicofre": "030876",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Arosa e Casteloes",
         "dicofre": "030877",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Ataes e Rendufe",
         "dicofre": "030878",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Briteiros Santo Estevao e Donim",
         "dicofre": "030879",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Briteiros Sao Salvador e Briteiros Santa Leocadia",
         "dicofre": "030880",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Candoso Sao Tiago e Mascotelos",
         "dicofre": "030881",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Conde e Gandarela",
         "dicofre": "030882",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Leitoes, Oleiros e Figueiredo",
         "dicofre": "030883",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Oliveira, Sao Paio e Sao Sebastiao",
         "dicofre": "030884",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Prazins Santo Tirso e Corvite",
         "dicofre": "030885",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Sande Sao Lourenco e Balazar",
         "dicofre": "030886",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Sande Vila Nova e Sande Sao Clemente",
         "dicofre": "030887",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Selho Sao Lourenco e Gominhaes",
         "dicofre": "030888",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Serzedo e Calvos",
         "dicofre": "030889",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Souto Santa Maria, Souto Sao Salvador e Gondomar",
         "dicofre": "030890",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Guimaraes",
         "freguesia": "Uniao das freguesias de Tabuadelo e Sao Faustino",
         "dicofre": "030891",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Covelas",
         "dicofre": "030906",
         "brasao": "https://dados.gov.pt/s/brasoes/030906.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Ferreiros",
         "dicofre": "030908",
         "brasao": "https://dados.gov.pt/s/brasoes/030908.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Galegos",
         "dicofre": "030912",
         "brasao": "https://dados.gov.pt/s/brasoes/030912.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Garfe",
         "dicofre": "030913",
         "brasao": "https://dados.gov.pt/s/brasoes/030913.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Geraz do Minho",
         "dicofre": "030914",
         "brasao": "https://dados.gov.pt/s/brasoes/030914.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Lanhoso",
         "dicofre": "030915",
         "brasao": "https://dados.gov.pt/s/brasoes/030915.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Monsul",
         "dicofre": "030917",
         "brasao": "https://dados.gov.pt/s/brasoes/030917.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Povoa de Lanhoso (Nossa Senhora do Amparo)",
         "dicofre": "030919",
         "brasao": "https://dados.gov.pt/s/brasoes/030919.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Rendufinho",
         "dicofre": "030921",
         "brasao": "https://dados.gov.pt/s/brasoes/030921.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Santo Emiliao",
         "dicofre": "030922",
         "brasao": "https://dados.gov.pt/s/brasoes/030922.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Sao Joao de Rei",
         "dicofre": "030923",
         "brasao": "https://dados.gov.pt/s/brasoes/030923.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Serzedelo",
         "dicofre": "030924",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Sobradelo da Goma",
         "dicofre": "030925",
         "brasao": "https://dados.gov.pt/s/brasoes/030925.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Taide",
         "dicofre": "030926",
         "brasao": "https://dados.gov.pt/s/brasoes/030926.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Travassos",
         "dicofre": "030927",
         "brasao": "https://dados.gov.pt/s/brasoes/030927.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Vilela",
         "dicofre": "030929",
         "brasao": "https://dados.gov.pt/s/brasoes/030929.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Uniao das freguesias de aguas Santas e Moure",
         "dicofre": "030930",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Uniao das freguesias de Calvos e Frades",
         "dicofre": "030931",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Uniao das freguesias de Campos e Louredo",
         "dicofre": "030932",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Uniao das freguesias de Esperanca e Brunhais",
         "dicofre": "030933",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Uniao das freguesias de Fonte Arcada e Oliveira",
         "dicofre": "030934",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Povoa de Lanhoso",
         "freguesia": "Uniao das freguesias de Verim, Friande e Ajude",
         "dicofre": "030935",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Balanca",
         "dicofre": "031001",
         "brasao": "https://dados.gov.pt/s/brasoes/031001.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Campo do Geres",
         "dicofre": "031003",
         "brasao": "https://dados.gov.pt/s/brasoes/031003.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Carvalheira",
         "dicofre": "031004",
         "brasao": "https://dados.gov.pt/s/brasoes/031004.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Covide",
         "dicofre": "031008",
         "brasao": "https://dados.gov.pt/s/brasoes/031008.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Gondoriz",
         "dicofre": "031009",
         "brasao": "https://dados.gov.pt/s/brasoes/031009.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Moimenta",
         "dicofre": "031010",
         "brasao": "https://dados.gov.pt/s/brasoes/031010.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Ribeira",
         "dicofre": "031012",
         "brasao": "https://dados.gov.pt/s/brasoes/031012.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Rio Caldo",
         "dicofre": "031013",
         "brasao": "https://dados.gov.pt/s/brasoes/031013.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Souto",
         "dicofre": "031014",
         "brasao": "https://dados.gov.pt/s/brasoes/031014.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Valdosende",
         "dicofre": "031015",
         "brasao": "https://dados.gov.pt/s/brasoes/031015.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Vilar da Veiga",
         "dicofre": "031017",
         "brasao": "https://dados.gov.pt/s/brasoes/031017.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Uniao das freguesias de Chamoim e Vilar",
         "dicofre": "031018",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Uniao das freguesias de Chorense e Monte",
         "dicofre": "031019",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Terras de Bouro",
         "freguesia": "Uniao das freguesias de Ciboes e Brufe",
         "dicofre": "031020",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Cantelaes",
         "dicofre": "031105",
         "brasao": "https://dados.gov.pt/s/brasoes/031105.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Eira Vedra",
         "dicofre": "031107",
         "brasao": "https://dados.gov.pt/s/brasoes/031107.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Guilhofrei",
         "dicofre": "031108",
         "brasao": "https://dados.gov.pt/s/brasoes/031108.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Louredo",
         "dicofre": "031109",
         "brasao": "https://dados.gov.pt/s/brasoes/031109.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Mosteiro",
         "dicofre": "031110",
         "brasao": "https://dados.gov.pt/s/brasoes/031110.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Parada de Bouro",
         "dicofre": "031111",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Pinheiro",
         "dicofre": "031112",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Rossas",
         "dicofre": "031113",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Salamonde",
         "dicofre": "031115",
         "brasao": "https://dados.gov.pt/s/brasoes/031115.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Tabuacas",
         "dicofre": "031118",
         "brasao": "https://dados.gov.pt/s/brasoes/031118.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Vieira do Minho",
         "dicofre": "031120",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Uniao das freguesias de Anisso e Soutelo",
         "dicofre": "031122",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Uniao das freguesias de Anjos e Vilar do Chao",
         "dicofre": "031123",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Uniao das freguesias de Canicada e Soengas",
         "dicofre": "031124",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Uniao das freguesias de Ruivaes e Campos",
         "dicofre": "031125",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vieira do Minho",
         "freguesia": "Uniao das freguesias de Ventosa e Cova",
         "dicofre": "031126",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Bairro",
         "dicofre": "031204",
         "brasao": "https://dados.gov.pt/s/brasoes/031204.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Brufe",
         "dicofre": "031206",
         "brasao": "https://dados.gov.pt/s/brasoes/031206.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Casteloes",
         "dicofre": "031210",
         "brasao": "https://dados.gov.pt/s/brasoes/031210.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Cruz",
         "dicofre": "031212",
         "brasao": "https://dados.gov.pt/s/brasoes/031212.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Delaes",
         "dicofre": "031213",
         "brasao": "https://dados.gov.pt/s/brasoes/031213.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Fradelos",
         "dicofre": "031215",
         "brasao": "https://dados.gov.pt/s/brasoes/031215.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Gaviao",
         "dicofre": "031216",
         "brasao": "https://dados.gov.pt/s/brasoes/031216.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Joane",
         "dicofre": "031219",
         "brasao": "https://dados.gov.pt/s/brasoes/031219.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Landim",
         "dicofre": "031221",
         "brasao": "https://dados.gov.pt/s/brasoes/031221.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Louro",
         "dicofre": "031223",
         "brasao": "https://dados.gov.pt/s/brasoes/031223.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Lousado",
         "dicofre": "031224",
         "brasao": "https://dados.gov.pt/s/brasoes/031224.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Mogege",
         "dicofre": "031225",
         "brasao": "https://dados.gov.pt/s/brasoes/031225.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Nine",
         "dicofre": "031227",
         "brasao": "https://dados.gov.pt/s/brasoes/031227.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Pedome",
         "dicofre": "031230",
         "brasao": "https://dados.gov.pt/s/brasoes/031230.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Pousada de Saramagos",
         "dicofre": "031232",
         "brasao": "https://dados.gov.pt/s/brasoes/031232.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Requiao",
         "dicofre": "031233",
         "brasao": "https://dados.gov.pt/s/brasoes/031233.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Riba de Ave",
         "dicofre": "031234",
         "brasao": "https://dados.gov.pt/s/brasoes/031234.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Ribeirao",
         "dicofre": "031235",
         "brasao": "https://dados.gov.pt/s/brasoes/031235.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Oliveira (Santa Maria)",
         "dicofre": "031239",
         "brasao": "https://dados.gov.pt/s/brasoes/031239.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Vale (Sao Martinho)",
         "dicofre": "031241",
         "brasao": "https://dados.gov.pt/s/brasoes/031241.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Oliveira (Sao Mateus)",
         "dicofre": "031242",
         "brasao": "https://dados.gov.pt/s/brasoes/031242.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Vermoim",
         "dicofre": "031247",
         "brasao": "https://dados.gov.pt/s/brasoes/031247.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Vilarinho das Cambas",
         "dicofre": "031249",
         "brasao": "https://dados.gov.pt/s/brasoes/031249.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Antas e Abade de Vermoim",
         "dicofre": "031250",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Arnoso (Santa Maria e Santa Eulalia) e Sezures",
         "dicofre": "031251",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Avidos e Lagoa",
         "dicofre": "031252",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Carreira e Bente",
         "dicofre": "031253",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Esmeriz e Cabecudos",
         "dicofre": "031254",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Gondifelos, Cavaloes e Outiz",
         "dicofre": "031255",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Lemenhe, Mouquim e Jesufrei",
         "dicofre": "031256",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Ruivaes e Novais",
         "dicofre": "031257",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Seide",
         "dicofre": "031258",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Vale (Sao Cosme), Telhado e Portela",
         "dicofre": "031259",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Nova de Famalicao",
         "freguesia": "Uniao das freguesias de Vila Nova de Famalicao e Calendario",
         "dicofre": "031260",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Atiaes",
         "dicofre": "031304",
         "brasao": "https://dados.gov.pt/s/brasoes/031304.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Cabanelas",
         "dicofre": "031308",
         "brasao": "https://dados.gov.pt/s/brasoes/031308.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Cervaes",
         "dicofre": "031309",
         "brasao": "https://dados.gov.pt/s/brasoes/031309.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Coucieiro",
         "dicofre": "031311",
         "brasao": "https://dados.gov.pt/s/brasoes/031311.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Dossaos",
         "dicofre": "031313",
         "brasao": "https://dados.gov.pt/s/brasoes/031313.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Freiriz",
         "dicofre": "031316",
         "brasao": "https://dados.gov.pt/s/brasoes/031316.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Geme",
         "dicofre": "031317",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Lage",
         "dicofre": "031323",
         "brasao": "https://dados.gov.pt/s/brasoes/031323.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Lanhas",
         "dicofre": "031324",
         "brasao": "https://dados.gov.pt/s/brasoes/031324.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Loureira",
         "dicofre": "031325",
         "brasao": "https://dados.gov.pt/s/brasoes/031325.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Moure",
         "dicofre": "031328",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Oleiros",
         "dicofre": "031330",
         "brasao": "https://dados.gov.pt/s/brasoes/031330.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Parada de Gatim",
         "dicofre": "031331",
         "brasao": "https://dados.gov.pt/s/brasoes/031331.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Pico",
         "dicofre": "031335",
         "brasao": "https://dados.gov.pt/s/brasoes/031335.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Ponte",
         "dicofre": "031337",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Sabariz",
         "dicofre": "031340",
         "brasao": "https://dados.gov.pt/s/brasoes/031340.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Vila de Prado",
         "dicofre": "031342",
         "brasao": "https://dados.gov.pt/s/brasoes/031342.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Prado (Sao Miguel)",
         "dicofre": "031350",
         "brasao": "https://dados.gov.pt/s/brasoes/031350.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Soutelo",
         "dicofre": "031352",
         "brasao": "https://dados.gov.pt/s/brasoes/031352.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Turiz",
         "dicofre": "031354",
         "brasao": "https://dados.gov.pt/s/brasoes/031354.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Valdreu",
         "dicofre": "031355",
         "brasao": "https://dados.gov.pt/s/brasoes/031355.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Aboim da Nobrega e Gondomar",
         "dicofre": "031359",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias da Ribeira do Neiva",
         "dicofre": "031360",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias de Carreiras (Sao Miguel) e Carreiras (Santiago)",
         "dicofre": "031361",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias de Escariz (Sao Mamede) e Escariz (Sao Martinho)",
         "dicofre": "031362",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias de Esqueiros, Nevogilde e Travassos",
         "dicofre": "031363",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias de Marrancos e Arcozelo",
         "dicofre": "031364",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias de Oriz (Santa Marinha) e Oriz (Sao Miguel)",
         "dicofre": "031365",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias de Pico de Regalados, Gondiaes e Mos",
         "dicofre": "031366",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias de Sande, Vilarinho, Barros e Gomide",
         "dicofre": "031367",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias de Valbom (Sao Pedro), Passo e Valbom (Sao Martinho)",
         "dicofre": "031368",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Uniao das freguesias do Vade",
         "dicofre": "031369",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vila Verde",
         "freguesia": "Vila Verde e Barbudo",
         "dicofre": "031370",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vizela",
         "freguesia": "Santa Eulalia",
         "dicofre": "031401",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vizela",
         "freguesia": "Infias",
         "dicofre": "031404",
         "brasao": "https://dados.gov.pt/s/brasoes/031404.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vizela",
         "freguesia": "Vizela (Santo Adriao)",
         "dicofre": "031406",
         "brasao": "https://dados.gov.pt/s/brasoes/031406.png"
      },
      {
         "distrito": "Braga",
         "concelho": "Vizela",
         "freguesia": "Uniao das freguesias de Caldas de Vizela (Sao Miguel e Sao Joao)",
         "dicofre": "031408",
         "brasao": ""
      },
      {
         "distrito": "Braga",
         "concelho": "Vizela",
         "freguesia": "Uniao das freguesias de Tagilde e Vizela (Sao Paio)",
         "dicofre": "031409",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Alfandega da Fe",
         "dicofre": "040102",
         "brasao": "https://dados.gov.pt/s/brasoes/040102.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Cerejais",
         "dicofre": "040103",
         "brasao": "https://dados.gov.pt/s/brasoes/040103.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Sambade",
         "dicofre": "040111",
         "brasao": "https://dados.gov.pt/s/brasoes/040111.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Vilar Chao",
         "dicofre": "040118",
         "brasao": "https://dados.gov.pt/s/brasoes/040118.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Vilarelhos",
         "dicofre": "040119",
         "brasao": "https://dados.gov.pt/s/brasoes/040119.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Vilares de Vilarica",
         "dicofre": "040120",
         "brasao": "https://dados.gov.pt/s/brasoes/040120.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Uniao das freguesias de Agrobom, Saldonha e Vale Pereiro",
         "dicofre": "040121",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Uniao das freguesias de Eucisia, Gouveia e Valverde",
         "dicofre": "040122",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Uniao das freguesias de Ferradosa e Sendim da Serra",
         "dicofre": "040123",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Uniao das freguesias de Gebelim e Soeima",
         "dicofre": "040124",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Uniao das freguesias de Parada e Sendim da Ribeira",
         "dicofre": "040125",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Alfandega da Fe",
         "freguesia": "Uniao das freguesias de Pombal e Vales",
         "dicofre": "040126",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Alfaiao",
         "dicofre": "040201",
         "brasao": "https://dados.gov.pt/s/brasoes/040201.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Babe",
         "dicofre": "040203",
         "brasao": "https://dados.gov.pt/s/brasoes/040203.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Bacal",
         "dicofre": "040204",
         "brasao": "https://dados.gov.pt/s/brasoes/040204.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Carragosa",
         "dicofre": "040206",
         "brasao": "https://dados.gov.pt/s/brasoes/040206.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Castro de Avelas",
         "dicofre": "040209",
         "brasao": "https://dados.gov.pt/s/brasoes/040209.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Coelhoso",
         "dicofre": "040210",
         "brasao": "https://dados.gov.pt/s/brasoes/040210.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Donai",
         "dicofre": "040212",
         "brasao": "https://dados.gov.pt/s/brasoes/040212.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Espinhosela",
         "dicofre": "040213",
         "brasao": "https://dados.gov.pt/s/brasoes/040213.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Franca",
         "dicofre": "040215",
         "brasao": "https://dados.gov.pt/s/brasoes/040215.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Gimonde",
         "dicofre": "040216",
         "brasao": "https://dados.gov.pt/s/brasoes/040216.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Gondesende",
         "dicofre": "040217",
         "brasao": "https://dados.gov.pt/s/brasoes/040217.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Gostei",
         "dicofre": "040218",
         "brasao": "https://dados.gov.pt/s/brasoes/040218.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Grijo de Parada",
         "dicofre": "040219",
         "brasao": "https://dados.gov.pt/s/brasoes/040219.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Macedo do Mato",
         "dicofre": "040221",
         "brasao": "https://dados.gov.pt/s/brasoes/040221.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Mos",
         "dicofre": "040224",
         "brasao": "https://dados.gov.pt/s/brasoes/040224.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Nogueira",
         "dicofre": "040225",
         "brasao": "https://dados.gov.pt/s/brasoes/040225.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Outeiro",
         "dicofre": "040226",
         "brasao": "https://dados.gov.pt/s/brasoes/040226.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Paramio",
         "dicofre": "040229",
         "brasao": "https://dados.gov.pt/s/brasoes/040229.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Pinela",
         "dicofre": "040230",
         "brasao": "https://dados.gov.pt/s/brasoes/040230.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Quintanilha",
         "dicofre": "040232",
         "brasao": "https://dados.gov.pt/s/brasoes/040232.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Quintela de Lampacas",
         "dicofre": "040233",
         "brasao": "https://dados.gov.pt/s/brasoes/040233.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Rabal",
         "dicofre": "040234",
         "brasao": "https://dados.gov.pt/s/brasoes/040234.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Rebordaos",
         "dicofre": "040236",
         "brasao": "https://dados.gov.pt/s/brasoes/040236.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Salsas",
         "dicofre": "040239",
         "brasao": "https://dados.gov.pt/s/brasoes/040239.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Samil",
         "dicofre": "040240",
         "brasao": "https://dados.gov.pt/s/brasoes/040240.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Santa Comba de Rossas",
         "dicofre": "040241",
         "brasao": "https://dados.gov.pt/s/brasoes/040241.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Sao Pedro de Sarracenos",
         "dicofre": "040244",
         "brasao": "https://dados.gov.pt/s/brasoes/040244.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Sendas",
         "dicofre": "040246",
         "brasao": "https://dados.gov.pt/s/brasoes/040246.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Serapicos",
         "dicofre": "040247",
         "brasao": "https://dados.gov.pt/s/brasoes/040247.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Sortes",
         "dicofre": "040248",
         "brasao": "https://dados.gov.pt/s/brasoes/040248.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Zoio",
         "dicofre": "040249",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Uniao das freguesias de Aveleda e Rio de Onor",
         "dicofre": "040250",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Uniao das freguesias de Castrelos e Carrazedo",
         "dicofre": "040251",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Uniao das freguesias de Izeda, Calvelhe e Paradinha Nova",
         "dicofre": "040252",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Uniao das freguesias de Parada e Failde",
         "dicofre": "040253",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Uniao das freguesias de Rebordainhos e Pombares",
         "dicofre": "040254",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Uniao das freguesias de Rio Frio e Milhao",
         "dicofre": "040255",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Uniao das freguesias de Sao Juliao de Palacios e Deilao",
         "dicofre": "040256",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Braganca",
         "freguesia": "Uniao das freguesias de Se, Santa Maria e Meixedo",
         "dicofre": "040257",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Carrazeda de Ansiaes",
         "dicofre": "040304",
         "brasao": "https://dados.gov.pt/s/brasoes/040304.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Fonte Longa",
         "dicofre": "040306",
         "brasao": "https://dados.gov.pt/s/brasoes/040306.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Linhares",
         "dicofre": "040308",
         "brasao": "https://dados.gov.pt/s/brasoes/040308.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Marzagao",
         "dicofre": "040309",
         "brasao": "https://dados.gov.pt/s/brasoes/040309.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Parambos",
         "dicofre": "040311",
         "brasao": "https://dados.gov.pt/s/brasoes/040311.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Pereiros",
         "dicofre": "040312",
         "brasao": "https://dados.gov.pt/s/brasoes/040312.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Pinhal do Norte",
         "dicofre": "040313",
         "brasao": "https://dados.gov.pt/s/brasoes/040313.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Pombal",
         "dicofre": "040314",
         "brasao": "https://dados.gov.pt/s/brasoes/040314.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Seixo de Ansiaes",
         "dicofre": "040316",
         "brasao": "https://dados.gov.pt/s/brasoes/040316.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Vilarinho da Castanheira",
         "dicofre": "040318",
         "brasao": "https://dados.gov.pt/s/brasoes/040318.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Uniao das freguesias de Amedo e Zedes",
         "dicofre": "040320",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Uniao das freguesias de Belver e Mogo de Malta",
         "dicofre": "040321",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Uniao das freguesias de Castanheiro do Norte e Ribalonga",
         "dicofre": "040322",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Carrazeda de Ansiaes",
         "freguesia": "Uniao das freguesias de Lavandeira, Beira Grande e Selores",
         "dicofre": "040323",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Freixo de Espada à Cinta",
         "freguesia": "Ligares",
         "dicofre": "040404",
         "brasao": "https://dados.gov.pt/s/brasoes/040404.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Freixo de Espada à Cinta",
         "freguesia": "Poiares",
         "dicofre": "040406",
         "brasao": "https://dados.gov.pt/s/brasoes/040406.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Freixo de Espada à Cinta",
         "freguesia": "Uniao das freguesias de Freixo de Espada à Cinta e Mazouco",
         "dicofre": "040407",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Freixo de Espada à Cinta",
         "freguesia": "Uniao das freguesias de Lagoaca e Fornos",
         "dicofre": "040408",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Amendoeira",
         "dicofre": "040502",
         "brasao": "https://dados.gov.pt/s/brasoes/040502.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Arcas",
         "dicofre": "040503",
         "brasao": "https://dados.gov.pt/s/brasoes/040503.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Carrapatas",
         "dicofre": "040507",
         "brasao": "https://dados.gov.pt/s/brasoes/040507.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Chacim",
         "dicofre": "040509",
         "brasao": "https://dados.gov.pt/s/brasoes/040509.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Corticos",
         "dicofre": "040510",
         "brasao": "https://dados.gov.pt/s/brasoes/040510.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Corujas",
         "dicofre": "040511",
         "brasao": "https://dados.gov.pt/s/brasoes/040511.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Ferreira",
         "dicofre": "040514",
         "brasao": "https://dados.gov.pt/s/brasoes/040514.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Grijo",
         "dicofre": "040515",
         "brasao": "https://dados.gov.pt/s/brasoes/040515.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Lagoa",
         "dicofre": "040516",
         "brasao": "https://dados.gov.pt/s/brasoes/040516.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Lamalonga",
         "dicofre": "040517",
         "brasao": "https://dados.gov.pt/s/brasoes/040517.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Lamas",
         "dicofre": "040518",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Lombo",
         "dicofre": "040519",
         "brasao": "https://dados.gov.pt/s/brasoes/040519.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Macedo de Cavaleiros",
         "dicofre": "040520",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Morais",
         "dicofre": "040521",
         "brasao": "https://dados.gov.pt/s/brasoes/040521.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Olmos",
         "dicofre": "040523",
         "brasao": "https://dados.gov.pt/s/brasoes/040523.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Peredo",
         "dicofre": "040524",
         "brasao": "https://dados.gov.pt/s/brasoes/040524.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Salselas",
         "dicofre": "040526",
         "brasao": "https://dados.gov.pt/s/brasoes/040526.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Sezulfe",
         "dicofre": "040528",
         "brasao": "https://dados.gov.pt/s/brasoes/040528.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Talhas",
         "dicofre": "040530",
         "brasao": "https://dados.gov.pt/s/brasoes/040530.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Vale Benfeito",
         "dicofre": "040532",
         "brasao": "https://dados.gov.pt/s/brasoes/040532.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Vale da Porca",
         "dicofre": "040533",
         "brasao": "https://dados.gov.pt/s/brasoes/040533.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Vale de Prados",
         "dicofre": "040534",
         "brasao": "https://dados.gov.pt/s/brasoes/040534.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Vilarinho de Agrochao",
         "dicofre": "040536",
         "brasao": "https://dados.gov.pt/s/brasoes/040536.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Vinhas",
         "dicofre": "040538",
         "brasao": "https://dados.gov.pt/s/brasoes/040538.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Uniao das freguesias de Ala e Vilarinho do Monte",
         "dicofre": "040539",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Uniao das freguesias de Bornes e Burga",
         "dicofre": "040540",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Uniao das freguesias de Castelaos e Vilar do Monte",
         "dicofre": "040541",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Uniao das freguesias de Espadanedo, Edroso, Murcos e Soutelo Mourisco",
         "dicofre": "040542",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Uniao das freguesias de Podence e Santa Combinha",
         "dicofre": "040543",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Macedo de Cavaleiros",
         "freguesia": "Uniao das freguesias de Talhinhas e Bagueixe",
         "dicofre": "040544",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Duas Igrejas",
         "dicofre": "040604",
         "brasao": "https://dados.gov.pt/s/brasoes/040604.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Genisio",
         "dicofre": "040605",
         "brasao": "https://dados.gov.pt/s/brasoes/040605.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Malhadas",
         "dicofre": "040607",
         "brasao": "https://dados.gov.pt/s/brasoes/040607.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Miranda do Douro",
         "dicofre": "040608",
         "brasao": "https://dados.gov.pt/s/brasoes/040608.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Palacoulo",
         "dicofre": "040609",
         "brasao": "https://dados.gov.pt/s/brasoes/040609.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Picote",
         "dicofre": "040611",
         "brasao": "https://dados.gov.pt/s/brasoes/040611.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Povoa",
         "dicofre": "040612",
         "brasao": "https://dados.gov.pt/s/brasoes/040612.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Sao Martinho de Angueira",
         "dicofre": "040613",
         "brasao": "https://dados.gov.pt/s/brasoes/040613.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Vila Cha de Braciosa",
         "dicofre": "040616",
         "brasao": "https://dados.gov.pt/s/brasoes/040616.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Uniao das freguesias de Constantim e Cicouro",
         "dicofre": "040618",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Uniao das freguesias de Ifanes e Paradela",
         "dicofre": "040619",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Uniao das freguesias de Sendim e Atenor",
         "dicofre": "040620",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Miranda do Douro",
         "freguesia": "Uniao das freguesias de Silva e aguas Vivas",
         "dicofre": "040621",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Abambres",
         "dicofre": "040701",
         "brasao": "https://dados.gov.pt/s/brasoes/040701.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Abreiro",
         "dicofre": "040702",
         "brasao": "https://dados.gov.pt/s/brasoes/040702.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Aguieiras",
         "dicofre": "040703",
         "brasao": "https://dados.gov.pt/s/brasoes/040703.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Alvites",
         "dicofre": "040704",
         "brasao": "https://dados.gov.pt/s/brasoes/040704.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Bouca",
         "dicofre": "040708",
         "brasao": "https://dados.gov.pt/s/brasoes/040708.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Cabanelas",
         "dicofre": "040709",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Caravelas",
         "dicofre": "040710",
         "brasao": "https://dados.gov.pt/s/brasoes/040710.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Carvalhais",
         "dicofre": "040711",
         "brasao": "https://dados.gov.pt/s/brasoes/040711.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Cedaes",
         "dicofre": "040712",
         "brasao": "https://dados.gov.pt/s/brasoes/040712.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Cobro",
         "dicofre": "040713",
         "brasao": "https://dados.gov.pt/s/brasoes/040713.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Fradizela",
         "dicofre": "040714",
         "brasao": "https://dados.gov.pt/s/brasoes/040714.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Frechas",
         "dicofre": "040716",
         "brasao": "https://dados.gov.pt/s/brasoes/040716.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Lamas de Orelhao",
         "dicofre": "040718",
         "brasao": "https://dados.gov.pt/s/brasoes/040718.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Mascarenhas",
         "dicofre": "040720",
         "brasao": "https://dados.gov.pt/s/brasoes/040720.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Mirandela",
         "dicofre": "040721",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Murias",
         "dicofre": "040722",
         "brasao": "https://dados.gov.pt/s/brasoes/040722.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Passos",
         "dicofre": "040724",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Sao Pedro Velho",
         "dicofre": "040727",
         "brasao": "https://dados.gov.pt/s/brasoes/040727.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Sao Salvador",
         "dicofre": "040728",
         "brasao": "https://dados.gov.pt/s/brasoes/040728.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Sucaes",
         "dicofre": "040729",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Torre de Dona Chama",
         "dicofre": "040730",
         "brasao": "https://dados.gov.pt/s/brasoes/040730.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Vale de Asnes",
         "dicofre": "040731",
         "brasao": "https://dados.gov.pt/s/brasoes/040731.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Vale de Gouvinhas",
         "dicofre": "040732",
         "brasao": "https://dados.gov.pt/s/brasoes/040732.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Vale de Salgueiro",
         "dicofre": "040733",
         "brasao": "https://dados.gov.pt/s/brasoes/040733.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Vale de Telhas",
         "dicofre": "040734",
         "brasao": "https://dados.gov.pt/s/brasoes/040734.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Uniao das freguesias de Avantos e Romeu",
         "dicofre": "040738",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Uniao das freguesias de Avidagos, Navalho e Pereira",
         "dicofre": "040739",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Uniao das freguesias de Barcel, Marmelos e Valverde da Gestosa",
         "dicofre": "040740",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Uniao das freguesias de Franco e Vila Boa",
         "dicofre": "040741",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mirandela",
         "freguesia": "Uniao das freguesias de Freixeda e Vila Verde",
         "dicofre": "040742",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Azinhoso",
         "dicofre": "040801",
         "brasao": "https://dados.gov.pt/s/brasoes/040801.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Bemposta",
         "dicofre": "040802",
         "brasao": "https://dados.gov.pt/s/brasoes/040802.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Bruco",
         "dicofre": "040803",
         "brasao": "https://dados.gov.pt/s/brasoes/040803.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Brunhoso",
         "dicofre": "040804",
         "brasao": "https://dados.gov.pt/s/brasoes/040804.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Castelo Branco",
         "dicofre": "040807",
         "brasao": "https://dados.gov.pt/s/brasoes/040807.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Castro Vicente",
         "dicofre": "040808",
         "brasao": "https://dados.gov.pt/s/brasoes/040808.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Meirinhos",
         "dicofre": "040809",
         "brasao": "https://dados.gov.pt/s/brasoes/040809.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Paradela",
         "dicofre": "040811",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Penas Roias",
         "dicofre": "040812",
         "brasao": "https://dados.gov.pt/s/brasoes/040812.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Peredo da Bemposta",
         "dicofre": "040813",
         "brasao": "https://dados.gov.pt/s/brasoes/040813.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Saldanha",
         "dicofre": "040815",
         "brasao": "https://dados.gov.pt/s/brasoes/040815.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Sao Martinho do Peso",
         "dicofre": "040817",
         "brasao": "https://dados.gov.pt/s/brasoes/040817.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "To",
         "dicofre": "040819",
         "brasao": "https://dados.gov.pt/s/brasoes/040819.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Travanca",
         "dicofre": "040820",
         "brasao": "https://dados.gov.pt/s/brasoes/040820.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Urros",
         "dicofre": "040821",
         "brasao": "https://dados.gov.pt/s/brasoes/040821.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Vale da Madre",
         "dicofre": "040822",
         "brasao": "https://dados.gov.pt/s/brasoes/040822.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Vila de Ala",
         "dicofre": "040826",
         "brasao": "https://dados.gov.pt/s/brasoes/040826.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Uniao das freguesias de Brunhozinho, Castanheira e Sanhoane",
         "dicofre": "040829",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Uniao das freguesias de Mogadouro, Valverde, Vale de Porco e Vilar de Rei",
         "dicofre": "040830",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Uniao das freguesias de Remondes e Soutelo",
         "dicofre": "040831",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Mogadouro",
         "freguesia": "Uniao das freguesias de Vilarinho dos Galegos e Ventozelo",
         "dicofre": "040832",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Acoreira",
         "dicofre": "040901",
         "brasao": "https://dados.gov.pt/s/brasoes/040901.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Cabeca Boa",
         "dicofre": "040903",
         "brasao": "https://dados.gov.pt/s/brasoes/040903.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Carvicais",
         "dicofre": "040905",
         "brasao": "https://dados.gov.pt/s/brasoes/040905.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Castedo",
         "dicofre": "040906",
         "brasao": "https://dados.gov.pt/s/brasoes/040906.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Horta da Vilarica",
         "dicofre": "040909",
         "brasao": "https://dados.gov.pt/s/brasoes/040909.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Larinho",
         "dicofre": "040910",
         "brasao": "https://dados.gov.pt/s/brasoes/040910.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Lousa",
         "dicofre": "040911",
         "brasao": "https://dados.gov.pt/s/brasoes/040911.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Mos",
         "dicofre": "040913",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Torre de Moncorvo",
         "dicofre": "040916",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Uniao das freguesias de Adeganha e Cardanha",
         "dicofre": "040918",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Uniao das freguesias de Felgar e Souto da Velha",
         "dicofre": "040919",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Uniao das freguesias de Felgueiras e Macores",
         "dicofre": "040920",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Torre de Moncorvo",
         "freguesia": "Uniao das freguesias de Urros e Peredo dos Castelhanos",
         "dicofre": "040921",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Benlhevai",
         "dicofre": "041002",
         "brasao": "https://dados.gov.pt/s/brasoes/041002.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Freixiel",
         "dicofre": "041005",
         "brasao": "https://dados.gov.pt/s/brasoes/041005.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Roios",
         "dicofre": "041009",
         "brasao": "https://dados.gov.pt/s/brasoes/041009.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Samoes",
         "dicofre": "041010",
         "brasao": "https://dados.gov.pt/s/brasoes/041010.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Sampaio",
         "dicofre": "041011",
         "brasao": "https://dados.gov.pt/s/brasoes/041011.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Santa Comba de Vilarica",
         "dicofre": "041012",
         "brasao": "https://dados.gov.pt/s/brasoes/041012.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Seixo de Manhoses",
         "dicofre": "041013",
         "brasao": "https://dados.gov.pt/s/brasoes/041013.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Trindade",
         "dicofre": "041014",
         "brasao": "https://dados.gov.pt/s/brasoes/041014.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Vale Frechoso",
         "dicofre": "041015",
         "brasao": "https://dados.gov.pt/s/brasoes/041015.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Uniao das freguesias de Assares e Lodoes",
         "dicofre": "041020",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Uniao das freguesias de Candoso e Carvalho de Egas",
         "dicofre": "041021",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Uniao das freguesias de Valtorno e Mourao",
         "dicofre": "041022",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Uniao das freguesias de Vila Flor e Nabo",
         "dicofre": "041023",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vila Flor",
         "freguesia": "Uniao das freguesias de Vilas Boas e Vilarinho das Azenhas",
         "dicofre": "041024",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Argozelo",
         "dicofre": "041103",
         "brasao": "https://dados.gov.pt/s/brasoes/041103.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Carcao",
         "dicofre": "041107",
         "brasao": "https://dados.gov.pt/s/brasoes/041107.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Matela",
         "dicofre": "041108",
         "brasao": "https://dados.gov.pt/s/brasoes/041108.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Pinelo",
         "dicofre": "041109",
         "brasao": "https://dados.gov.pt/s/brasoes/041109.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Santulhao",
         "dicofre": "041110",
         "brasao": "https://dados.gov.pt/s/brasoes/041110.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Vilar Seco",
         "dicofre": "041113",
         "brasao": "https://dados.gov.pt/s/brasoes/041113.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Vimioso",
         "dicofre": "041114",
         "brasao": "https://dados.gov.pt/s/brasoes/041114.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Uniao das freguesias de Algoso, Campo de Viboras e Uva",
         "dicofre": "041115",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Uniao das freguesias de Cacarelhos e Angueira",
         "dicofre": "041116",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vimioso",
         "freguesia": "Uniao das freguesias de Vale de Frades e Avelanoso",
         "dicofre": "041117",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Agrochao",
         "dicofre": "041201",
         "brasao": "https://dados.gov.pt/s/brasoes/041201.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Candedo",
         "dicofre": "041203",
         "brasao": "https://dados.gov.pt/s/brasoes/041203.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Celas",
         "dicofre": "041204",
         "brasao": "https://dados.gov.pt/s/brasoes/041204.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Edral",
         "dicofre": "041206",
         "brasao": "https://dados.gov.pt/s/brasoes/041206.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Edrosa",
         "dicofre": "041207",
         "brasao": "https://dados.gov.pt/s/brasoes/041207.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Ervedosa",
         "dicofre": "041208",
         "brasao": "https://dados.gov.pt/s/brasoes/041208.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Paco",
         "dicofre": "041215",
         "brasao": "https://dados.gov.pt/s/brasoes/041215.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Penhas Juntas",
         "dicofre": "041216",
         "brasao": "https://dados.gov.pt/s/brasoes/041216.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Rebordelo",
         "dicofre": "041219",
         "brasao": "https://dados.gov.pt/s/brasoes/041219.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Santalha",
         "dicofre": "041221",
         "brasao": "https://dados.gov.pt/s/brasoes/041221.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Tuizelo",
         "dicofre": "041226",
         "brasao": "https://dados.gov.pt/s/brasoes/041226.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Vale das Fontes",
         "dicofre": "041227",
         "brasao": "https://dados.gov.pt/s/brasoes/041227.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Vila Boa de Ousilhao",
         "dicofre": "041229",
         "brasao": "https://dados.gov.pt/s/brasoes/041229.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Vila Verde",
         "dicofre": "041230",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Vilar de Ossos",
         "dicofre": "041232",
         "brasao": "https://dados.gov.pt/s/brasoes/041232.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Vilar de Peregrinos",
         "dicofre": "041233",
         "brasao": "https://dados.gov.pt/s/brasoes/041233.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Vilar Seco de Lomba",
         "dicofre": "041234",
         "brasao": "https://dados.gov.pt/s/brasoes/041234.png"
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Vinhais",
         "dicofre": "041235",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Uniao das freguesias de Curopos e Vale de Janeiro",
         "dicofre": "041236",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Uniao das freguesias de Moimenta e Montouto",
         "dicofre": "041237",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Uniao das freguesias de Nunes e Ousilhao",
         "dicofre": "041238",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Uniao das freguesias de Quiras e Pinheiro Novo",
         "dicofre": "041239",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Uniao das freguesias de Sobreiro de Baixo e Alvaredos",
         "dicofre": "041240",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Uniao das freguesias de Soeira, Fresulfe e Mofreita",
         "dicofre": "041241",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Uniao das freguesias de Travanca e Santa Cruz",
         "dicofre": "041242",
         "brasao": ""
      },
      {
         "distrito": "Braganca",
         "concelho": "Vinhais",
         "freguesia": "Uniao das freguesias de Vilar de Lomba e Sao Jomil",
         "dicofre": "041243",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Belmonte",
         "freguesia": "Caria",
         "dicofre": "050102",
         "brasao": "https://dados.gov.pt/s/brasoes/050102.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Belmonte",
         "freguesia": "Inguias",
         "dicofre": "050104",
         "brasao": "https://dados.gov.pt/s/brasoes/050104.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Belmonte",
         "freguesia": "Macainhas",
         "dicofre": "050105",
         "brasao": "https://dados.gov.pt/s/brasoes/050105.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Belmonte",
         "freguesia": "Uniao das freguesias de Belmonte e Colmeal da Torre",
         "dicofre": "050106",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Alcains",
         "dicofre": "050201",
         "brasao": "https://dados.gov.pt/s/brasoes/050201.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Almaceda",
         "dicofre": "050202",
         "brasao": "https://dados.gov.pt/s/brasoes/050202.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Benquerencas",
         "dicofre": "050203",
         "brasao": "https://dados.gov.pt/s/brasoes/050203.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Castelo Branco",
         "dicofre": "050205",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Lardosa",
         "dicofre": "050211",
         "brasao": "https://dados.gov.pt/s/brasoes/050211.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Lourical do Campo",
         "dicofre": "050212",
         "brasao": "https://dados.gov.pt/s/brasoes/050212.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Malpica do Tejo",
         "dicofre": "050214",
         "brasao": "https://dados.gov.pt/s/brasoes/050214.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Monforte da Beira",
         "dicofre": "050216",
         "brasao": "https://dados.gov.pt/s/brasoes/050216.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Salgueiro do Campo",
         "dicofre": "050220",
         "brasao": "https://dados.gov.pt/s/brasoes/050220.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Santo Andre das Tojeiras",
         "dicofre": "050221",
         "brasao": "https://dados.gov.pt/s/brasoes/050221.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Sao Vicente da Beira",
         "dicofre": "050222",
         "brasao": "https://dados.gov.pt/s/brasoes/050222.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Sarzedas",
         "dicofre": "050223",
         "brasao": "https://dados.gov.pt/s/brasoes/050223.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Tinalhas",
         "dicofre": "050225",
         "brasao": "https://dados.gov.pt/s/brasoes/050225.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Uniao das freguesias de Cebolais de Cima e Retaxo",
         "dicofre": "050226",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Uniao das freguesias de Escalos de Baixo e Mata",
         "dicofre": "050227",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Uniao das freguesias de Escalos de Cima e Lousa",
         "dicofre": "050228",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Uniao das freguesias de Freixial e Juncal do Campo",
         "dicofre": "050229",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Uniao das freguesias de Ninho do Acor e Sobral do Campo",
         "dicofre": "050230",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Castelo Branco",
         "freguesia": "Uniao das freguesias de Povoa de Rio de Moinhos e Cafede",
         "dicofre": "050231",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Aldeia de Sao Francisco de Assis",
         "dicofre": "050302",
         "brasao": "https://dados.gov.pt/s/brasoes/050302.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Boidobra",
         "dicofre": "050305",
         "brasao": "https://dados.gov.pt/s/brasoes/050305.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Cortes do Meio",
         "dicofre": "050308",
         "brasao": "https://dados.gov.pt/s/brasoes/050308.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Dominguizo",
         "dicofre": "050309",
         "brasao": "https://dados.gov.pt/s/brasoes/050309.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Erada",
         "dicofre": "050310",
         "brasao": "https://dados.gov.pt/s/brasoes/050310.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Ferro",
         "dicofre": "050311",
         "brasao": "https://dados.gov.pt/s/brasoes/050311.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Orjais",
         "dicofre": "050312",
         "brasao": "https://dados.gov.pt/s/brasoes/050312.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Paul",
         "dicofre": "050314",
         "brasao": "https://dados.gov.pt/s/brasoes/050314.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Peraboa",
         "dicofre": "050315",
         "brasao": "https://dados.gov.pt/s/brasoes/050315.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Sao Jorge da Beira",
         "dicofre": "050318",
         "brasao": "https://dados.gov.pt/s/brasoes/050318.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Sobral de Sao Miguel",
         "dicofre": "050322",
         "brasao": "https://dados.gov.pt/s/brasoes/050322.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Tortosendo",
         "dicofre": "050324",
         "brasao": "https://dados.gov.pt/s/brasoes/050324.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Unhais da Serra",
         "dicofre": "050325",
         "brasao": "https://dados.gov.pt/s/brasoes/050325.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Verdelhos",
         "dicofre": "050327",
         "brasao": "https://dados.gov.pt/s/brasoes/050327.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Uniao das freguesias de Barco e Coutada",
         "dicofre": "050332",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Uniao das freguesias de Cantar-Galo e Vila do Carvalho",
         "dicofre": "050333",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Uniao das freguesias de Casegas e Ourondo",
         "dicofre": "050334",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Uniao das freguesias de Covilha e Canhoso",
         "dicofre": "050335",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Uniao das freguesias de Peso e Vales do Rio",
         "dicofre": "050336",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Uniao das freguesias de Teixoso e Sarzedo",
         "dicofre": "050337",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Covilha",
         "freguesia": "Uniao das freguesias de Vale Formoso e Aldeia do Souto",
         "dicofre": "050338",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Alcaide",
         "dicofre": "050401",
         "brasao": "https://dados.gov.pt/s/brasoes/050401.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Alcaria",
         "dicofre": "050402",
         "brasao": "https://dados.gov.pt/s/brasoes/050402.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Alcongosta",
         "dicofre": "050403",
         "brasao": "https://dados.gov.pt/s/brasoes/050403.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Alpedrinha",
         "dicofre": "050406",
         "brasao": "https://dados.gov.pt/s/brasoes/050406.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Barroca",
         "dicofre": "050408",
         "brasao": "https://dados.gov.pt/s/brasoes/050408.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Bogas de Cima",
         "dicofre": "050410",
         "brasao": "https://dados.gov.pt/s/brasoes/050410.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Capinha",
         "dicofre": "050411",
         "brasao": "https://dados.gov.pt/s/brasoes/050411.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Castelejo",
         "dicofre": "050412",
         "brasao": "https://dados.gov.pt/s/brasoes/050412.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Castelo Novo",
         "dicofre": "050413",
         "brasao": "https://dados.gov.pt/s/brasoes/050413.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Fatela",
         "dicofre": "050416",
         "brasao": "https://dados.gov.pt/s/brasoes/050416.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Lavacolhos",
         "dicofre": "050419",
         "brasao": "https://dados.gov.pt/s/brasoes/050419.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Orca",
         "dicofre": "050420",
         "brasao": "https://dados.gov.pt/s/brasoes/050420.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Pero Viseu",
         "dicofre": "050421",
         "brasao": "https://dados.gov.pt/s/brasoes/050421.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Silvares",
         "dicofre": "050424",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Soalheira",
         "dicofre": "050425",
         "brasao": "https://dados.gov.pt/s/brasoes/050425.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Souto da Casa",
         "dicofre": "050426",
         "brasao": "https://dados.gov.pt/s/brasoes/050426.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Telhado",
         "dicofre": "050427",
         "brasao": "https://dados.gov.pt/s/brasoes/050427.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Enxames",
         "dicofre": "050431",
         "brasao": "https://dados.gov.pt/s/brasoes/050431.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Tres Povos",
         "dicofre": "050432",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Uniao das freguesias de Janeiro de Cima e Bogas de Baixo",
         "dicofre": "050433",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Uniao das freguesias de Fundao, Valverde, Donas, Aldeia de Joanes e Aldeia Nova do Cabo",
         "dicofre": "050434",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Uniao das freguesias de Povoa de Atalaia e Atalaia do Campo",
         "dicofre": "050435",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Fundao",
         "freguesia": "Uniao das freguesias de Vale de Prazeres e Mata da Rainha",
         "dicofre": "050436",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Aldeia de Santa Margarida",
         "dicofre": "050502",
         "brasao": "https://dados.gov.pt/s/brasoes/050502.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Ladoeiro",
         "dicofre": "050505",
         "brasao": "https://dados.gov.pt/s/brasoes/050505.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Medelim",
         "dicofre": "050506",
         "brasao": "https://dados.gov.pt/s/brasoes/050506.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Oledo",
         "dicofre": "050509",
         "brasao": "https://dados.gov.pt/s/brasoes/050509.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Penha Garcia",
         "dicofre": "050510",
         "brasao": "https://dados.gov.pt/s/brasoes/050510.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Proenca-a-Velha",
         "dicofre": "050511",
         "brasao": "https://dados.gov.pt/s/brasoes/050511.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Rosmaninhal",
         "dicofre": "050512",
         "brasao": "https://dados.gov.pt/s/brasoes/050512.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Sao Miguel de Acha",
         "dicofre": "050514",
         "brasao": "https://dados.gov.pt/s/brasoes/050514.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Touloes",
         "dicofre": "050516",
         "brasao": "https://dados.gov.pt/s/brasoes/050516.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Uniao das freguesias de Idanha-a-Nova e Alcafozes",
         "dicofre": "050518",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Uniao das freguesias de Monfortinho e Salvaterra do Extremo",
         "dicofre": "050519",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Uniao das freguesias de Monsanto e Idanha-a-Velha",
         "dicofre": "050520",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Idanha-a-Nova",
         "freguesia": "Uniao das freguesias de Zebreira e Segura",
         "dicofre": "050521",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "alvaro",
         "dicofre": "050601",
         "brasao": "https://dados.gov.pt/s/brasoes/050601.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "Cambas",
         "dicofre": "050603",
         "brasao": "https://dados.gov.pt/s/brasoes/050603.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "Isna",
         "dicofre": "050605",
         "brasao": "https://dados.gov.pt/s/brasoes/050605.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "Madeira",
         "dicofre": "050606",
         "brasao": "https://dados.gov.pt/s/brasoes/050606.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "Mosteiro",
         "dicofre": "050607",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "Orvalho",
         "dicofre": "050609",
         "brasao": "https://dados.gov.pt/s/brasoes/050609.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "Sarnadas de Sao Simao",
         "dicofre": "050610",
         "brasao": "https://dados.gov.pt/s/brasoes/050610.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "Sobral",
         "dicofre": "050611",
         "brasao": "https://dados.gov.pt/s/brasoes/050611.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "Estreito-Vilar Barroco",
         "dicofre": "050613",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Oleiros",
         "freguesia": "Oleiros-Amieira",
         "dicofre": "050614",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Penamacor",
         "freguesia": "Aranhas",
         "dicofre": "050704",
         "brasao": "https://dados.gov.pt/s/brasoes/050704.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Penamacor",
         "freguesia": "Benquerenca",
         "dicofre": "050706",
         "brasao": "https://dados.gov.pt/s/brasoes/050706.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Penamacor",
         "freguesia": "Meimao",
         "dicofre": "050707",
         "brasao": "https://dados.gov.pt/s/brasoes/050707.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Penamacor",
         "freguesia": "Meimoa",
         "dicofre": "050708",
         "brasao": "https://dados.gov.pt/s/brasoes/050708.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Penamacor",
         "freguesia": "Penamacor",
         "dicofre": "050710",
         "brasao": "https://dados.gov.pt/s/brasoes/050710.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Penamacor",
         "freguesia": "Salvador",
         "dicofre": "050711",
         "brasao": "https://dados.gov.pt/s/brasoes/050711.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Penamacor",
         "freguesia": "Vale da Senhora da Povoa",
         "dicofre": "050712",
         "brasao": "https://dados.gov.pt/s/brasoes/050712.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Penamacor",
         "freguesia": "Uniao das freguesias de Aldeia do Bispo, aguas e Aldeia de Joao Pires",
         "dicofre": "050713",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Penamacor",
         "freguesia": "Uniao das freguesias de Pedrogao de Sao Pedro e Bemposta",
         "dicofre": "050714",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Proenca-a-Nova",
         "freguesia": "Montes da Senhora",
         "dicofre": "050802",
         "brasao": "https://dados.gov.pt/s/brasoes/050802.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Proenca-a-Nova",
         "freguesia": "Sao Pedro do Esteval",
         "dicofre": "050805",
         "brasao": "https://dados.gov.pt/s/brasoes/050805.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Proenca-a-Nova",
         "freguesia": "Uniao das freguesias de Proenca-a-Nova e Peral",
         "dicofre": "050807",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Proenca-a-Nova",
         "freguesia": "Uniao das freguesias de Sobreira Formosa e Alvito da Beira",
         "dicofre": "050808",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Cabecudo",
         "dicofre": "050901",
         "brasao": "https://dados.gov.pt/s/brasoes/050901.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Carvalhal",
         "dicofre": "050902",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Castelo",
         "dicofre": "050903",
         "brasao": "https://dados.gov.pt/s/brasoes/050903.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Pedrogao Pequeno",
         "dicofre": "050911",
         "brasao": "https://dados.gov.pt/s/brasoes/050911.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Serta",
         "dicofre": "050912",
         "brasao": "https://dados.gov.pt/s/brasoes/050912.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Troviscal",
         "dicofre": "050913",
         "brasao": "https://dados.gov.pt/s/brasoes/050913.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Varzea dos Cavaleiros",
         "dicofre": "050914",
         "brasao": "https://dados.gov.pt/s/brasoes/050914.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Uniao das freguesias de Cernache do Bonjardim, Nesperal e Palhais",
         "dicofre": "050915",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Uniao das freguesias de Cumeada e Marmeleiro",
         "dicofre": "050916",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Serta",
         "freguesia": "Uniao das freguesias de Ermida e Figueiredo",
         "dicofre": "050917",
         "brasao": ""
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Vila de Rei",
         "freguesia": "Fundada",
         "dicofre": "051001",
         "brasao": "https://dados.gov.pt/s/brasoes/051001.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Vila de Rei",
         "freguesia": "Sao Joao do Peso",
         "dicofre": "051002",
         "brasao": "https://dados.gov.pt/s/brasoes/051002.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Vila de Rei",
         "freguesia": "Vila de Rei",
         "dicofre": "051003",
         "brasao": "https://dados.gov.pt/s/brasoes/051003.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Vila Velha de Rodao",
         "freguesia": "Fratel",
         "dicofre": "051101",
         "brasao": "https://dados.gov.pt/s/brasoes/051101.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Vila Velha de Rodao",
         "freguesia": "Perais",
         "dicofre": "051102",
         "brasao": "https://dados.gov.pt/s/brasoes/051102.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Vila Velha de Rodao",
         "freguesia": "Sarnadas de Rodao",
         "dicofre": "051103",
         "brasao": "https://dados.gov.pt/s/brasoes/051103.png"
      },
      {
         "distrito": "Castelo Branco",
         "concelho": "Vila Velha de Rodao",
         "freguesia": "Vila Velha de Rodao",
         "dicofre": "051104",
         "brasao": "https://dados.gov.pt/s/brasoes/051104.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Arganil",
         "dicofre": "060102",
         "brasao": "https://dados.gov.pt/s/brasoes/060102.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Benfeita",
         "dicofre": "060104",
         "brasao": "https://dados.gov.pt/s/brasoes/060104.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Celavisa",
         "dicofre": "060105",
         "brasao": "https://dados.gov.pt/s/brasoes/060105.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Folques",
         "dicofre": "060109",
         "brasao": "https://dados.gov.pt/s/brasoes/060109.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Piodao",
         "dicofre": "060111",
         "brasao": "https://dados.gov.pt/s/brasoes/060111.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Pomares",
         "dicofre": "060112",
         "brasao": "https://dados.gov.pt/s/brasoes/060112.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Pombeiro da Beira",
         "dicofre": "060113",
         "brasao": "https://dados.gov.pt/s/brasoes/060113.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Sao Martinho da Cortica",
         "dicofre": "060114",
         "brasao": "https://dados.gov.pt/s/brasoes/060114.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Sarzedo",
         "dicofre": "060115",
         "brasao": "https://dados.gov.pt/s/brasoes/060115.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Secarias",
         "dicofre": "060116",
         "brasao": "https://dados.gov.pt/s/brasoes/060116.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Uniao das freguesias de Cepos e Teixeira",
         "dicofre": "060119",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Uniao das freguesias de Cerdeira e Moura da Serra",
         "dicofre": "060120",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Uniao das freguesias de Coja e Barril de Alva",
         "dicofre": "060121",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Arganil",
         "freguesia": "Uniao das freguesias de Vila Cova de Alva e Anseriz",
         "dicofre": "060122",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Anca",
         "dicofre": "060201",
         "brasao": "https://dados.gov.pt/s/brasoes/060201.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Cadima",
         "dicofre": "060203",
         "brasao": "https://dados.gov.pt/s/brasoes/060203.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Cordinha",
         "dicofre": "060205",
         "brasao": "https://dados.gov.pt/s/brasoes/060205.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Febres",
         "dicofre": "060207",
         "brasao": "https://dados.gov.pt/s/brasoes/060207.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Murtede",
         "dicofre": "060208",
         "brasao": "https://dados.gov.pt/s/brasoes/060208.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Ourenta",
         "dicofre": "060209",
         "brasao": "https://dados.gov.pt/s/brasoes/060209.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Tocha",
         "dicofre": "060214",
         "brasao": "https://dados.gov.pt/s/brasoes/060214.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Sao Caetano",
         "dicofre": "060215",
         "brasao": "https://dados.gov.pt/s/brasoes/060215.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Sanguinheira",
         "dicofre": "060218",
         "brasao": "https://dados.gov.pt/s/brasoes/060218.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Uniao das freguesias de Cantanhede e Pocarica",
         "dicofre": "060220",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Uniao das freguesias de Covoes e Camarneira",
         "dicofre": "060221",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Uniao das freguesias de Portunhos e Outil",
         "dicofre": "060222",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Uniao das freguesias de Sepins e Bolho",
         "dicofre": "060223",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Cantanhede",
         "freguesia": "Uniao das freguesias de Vilamar e Corticeiro de Cima",
         "dicofre": "060224",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Almalagues",
         "dicofre": "060301",
         "brasao": "https://dados.gov.pt/s/brasoes/060301.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Brasfemes",
         "dicofre": "060309",
         "brasao": "https://dados.gov.pt/s/brasoes/060309.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Ceira",
         "dicofre": "060311",
         "brasao": "https://dados.gov.pt/s/brasoes/060311.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Cernache",
         "dicofre": "060312",
         "brasao": "https://dados.gov.pt/s/brasoes/060312.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Santo Antonio dos Olivais",
         "dicofre": "060318",
         "brasao": "https://dados.gov.pt/s/brasoes/060318.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Sao Joao do Campo",
         "dicofre": "060320",
         "brasao": "https://dados.gov.pt/s/brasoes/060320.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Sao Silvestre",
         "dicofre": "060324",
         "brasao": "https://dados.gov.pt/s/brasoes/060324.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Torres do Mondego",
         "dicofre": "060329",
         "brasao": "https://dados.gov.pt/s/brasoes/060329.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Antuzede e Vil de Matos",
         "dicofre": "060332",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Assafarge e Antanhol",
         "dicofre": "060333",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Coimbra (Se Nova, Santa Cruz, Almedina e Sao Bartolomeu)",
         "dicofre": "060334",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Eiras e Sao Paulo de Frades",
         "dicofre": "060335",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Santa Clara e Castelo Viegas",
         "dicofre": "060336",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Sao Martinho de arvore e Lamarosa",
         "dicofre": "060337",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Sao Martinho do Bispo e Ribeira de Frades",
         "dicofre": "060338",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Souselas e Botao",
         "dicofre": "060339",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Taveiro, Ameal e Arzila",
         "dicofre": "060340",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Coimbra",
         "freguesia": "Uniao das freguesias de Trouxemil e Torre de Vilela",
         "dicofre": "060341",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Condeixa-a-Nova",
         "freguesia": "Anobra",
         "dicofre": "060401",
         "brasao": "https://dados.gov.pt/s/brasoes/060401.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Condeixa-a-Nova",
         "freguesia": "Ega",
         "dicofre": "060406",
         "brasao": "https://dados.gov.pt/s/brasoes/060406.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Condeixa-a-Nova",
         "freguesia": "Furadouro",
         "dicofre": "060407",
         "brasao": "https://dados.gov.pt/s/brasoes/060407.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Condeixa-a-Nova",
         "freguesia": "Zambujal",
         "dicofre": "060410",
         "brasao": "https://dados.gov.pt/s/brasoes/060410.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Condeixa-a-Nova",
         "freguesia": "Uniao das freguesias de Condeixa-a-Velha e Condeixa-a-Nova",
         "dicofre": "060411",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Condeixa-a-Nova",
         "freguesia": "Uniao das freguesias de Sebal e Belide",
         "dicofre": "060412",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Condeixa-a-Nova",
         "freguesia": "Uniao das freguesias de Vila Seca e Bem da Fe",
         "dicofre": "060413",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Alqueidao",
         "dicofre": "060502",
         "brasao": "https://dados.gov.pt/s/brasoes/060502.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Maiorca",
         "dicofre": "060507",
         "brasao": "https://dados.gov.pt/s/brasoes/060507.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Marinha das Ondas",
         "dicofre": "060508",
         "brasao": "https://dados.gov.pt/s/brasoes/060508.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Tavarede",
         "dicofre": "060512",
         "brasao": "https://dados.gov.pt/s/brasoes/060512.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Vila Verde",
         "dicofre": "060513",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Sao Pedro",
         "dicofre": "060514",
         "brasao": "https://dados.gov.pt/s/brasoes/060514.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Bom Sucesso",
         "dicofre": "060515",
         "brasao": "https://dados.gov.pt/s/brasoes/060515.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Moinhos da Gandara",
         "dicofre": "060518",
         "brasao": "https://dados.gov.pt/s/brasoes/060518.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Alhadas",
         "dicofre": "060519",
         "brasao": "https://dados.gov.pt/s/brasoes/060519.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Buarcos e Sao Juliao",
         "dicofre": "060520",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Ferreira-a-Nova",
         "dicofre": "060521",
         "brasao": "https://dados.gov.pt/s/brasoes/060521.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Lavos",
         "dicofre": "060522",
         "brasao": "https://dados.gov.pt/s/brasoes/060522.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Paiao",
         "dicofre": "060523",
         "brasao": "https://dados.gov.pt/s/brasoes/060523.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Figueira da Foz",
         "freguesia": "Quiaios",
         "dicofre": "060524",
         "brasao": "https://dados.gov.pt/s/brasoes/060524.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Gois",
         "freguesia": "Alvares",
         "dicofre": "060601",
         "brasao": "https://dados.gov.pt/s/brasoes/060601.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Gois",
         "freguesia": "Gois",
         "dicofre": "060604",
         "brasao": "https://dados.gov.pt/s/brasoes/060604.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Gois",
         "freguesia": "Vila Nova do Ceira",
         "dicofre": "060605",
         "brasao": "https://dados.gov.pt/s/brasoes/060605.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Gois",
         "freguesia": "Uniao das freguesias de Cadafaz e Colmeal",
         "dicofre": "060606",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Lousa",
         "freguesia": "Serpins",
         "dicofre": "060704",
         "brasao": "https://dados.gov.pt/s/brasoes/060704.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Lousa",
         "freguesia": "Gandaras",
         "dicofre": "060706",
         "brasao": "https://dados.gov.pt/s/brasoes/060706.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Lousa",
         "freguesia": "Uniao das freguesias de Foz de Arouce e Casal de Ermio",
         "dicofre": "060707",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Lousa",
         "freguesia": "Uniao das freguesias de Lousa e Vilarinho",
         "dicofre": "060708",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Mira",
         "freguesia": "Mira",
         "dicofre": "060801",
         "brasao": "https://dados.gov.pt/s/brasoes/060801.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Mira",
         "freguesia": "Seixo",
         "dicofre": "060802",
         "brasao": "https://dados.gov.pt/s/brasoes/060802.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Mira",
         "freguesia": "Carapelhos",
         "dicofre": "060803",
         "brasao": "https://dados.gov.pt/s/brasoes/060803.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Mira",
         "freguesia": "Praia de Mira",
         "dicofre": "060804",
         "brasao": "https://dados.gov.pt/s/brasoes/060804.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Miranda do Corvo",
         "freguesia": "Lamas",
         "dicofre": "060901",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Miranda do Corvo",
         "freguesia": "Miranda do Corvo",
         "dicofre": "060902",
         "brasao": "https://dados.gov.pt/s/brasoes/060902.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Miranda do Corvo",
         "freguesia": "Vila Nova",
         "dicofre": "060905",
         "brasao": "https://dados.gov.pt/s/brasoes/060905.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Miranda do Corvo",
         "freguesia": "Uniao das freguesias de Semide e Rio Vide",
         "dicofre": "060906",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Arazede",
         "dicofre": "061002",
         "brasao": "https://dados.gov.pt/s/brasoes/061002.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Carapinheira",
         "dicofre": "061003",
         "brasao": "https://dados.gov.pt/s/brasoes/061003.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Liceia",
         "dicofre": "061005",
         "brasao": "https://dados.gov.pt/s/brasoes/061005.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Meas do Campo",
         "dicofre": "061006",
         "brasao": "https://dados.gov.pt/s/brasoes/061006.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Pereira",
         "dicofre": "061008",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Santo Varao",
         "dicofre": "061009",
         "brasao": "https://dados.gov.pt/s/brasoes/061009.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Seixo de Gatoes",
         "dicofre": "061010",
         "brasao": "https://dados.gov.pt/s/brasoes/061010.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Tentugal",
         "dicofre": "061011",
         "brasao": "https://dados.gov.pt/s/brasoes/061011.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Ereira",
         "dicofre": "061014",
         "brasao": "https://dados.gov.pt/s/brasoes/061014.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Uniao das freguesias de Abrunheira, Verride e Vila Nova da Barca",
         "dicofre": "061015",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Montemor-o-Velho",
         "freguesia": "Uniao das freguesias de Montemor-o-Velho e Gatoes",
         "dicofre": "061016",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Aldeia das Dez",
         "dicofre": "061101",
         "brasao": "https://dados.gov.pt/s/brasoes/061101.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Alvoco das Varzeas",
         "dicofre": "061102",
         "brasao": "https://dados.gov.pt/s/brasoes/061102.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Avo",
         "dicofre": "061103",
         "brasao": "https://dados.gov.pt/s/brasoes/061103.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Bobadela",
         "dicofre": "061104",
         "brasao": "https://dados.gov.pt/s/brasoes/061104.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Lagares",
         "dicofre": "061106",
         "brasao": "https://dados.gov.pt/s/brasoes/061106.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Lourosa",
         "dicofre": "061109",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Meruge",
         "dicofre": "061110",
         "brasao": "https://dados.gov.pt/s/brasoes/061110.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Nogueira do Cravo",
         "dicofre": "061111",
         "brasao": "https://dados.gov.pt/s/brasoes/061111.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Sao Giao",
         "dicofre": "061115",
         "brasao": "https://dados.gov.pt/s/brasoes/061115.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Seixo da Beira",
         "dicofre": "061118",
         "brasao": "https://dados.gov.pt/s/brasoes/061118.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Travanca de Lagos",
         "dicofre": "061119",
         "brasao": "https://dados.gov.pt/s/brasoes/061119.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Uniao das freguesias de Ervedal e Vila Franca da Beira",
         "dicofre": "061122",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Uniao das freguesias de Lagos da Beira e Lajeosa",
         "dicofre": "061123",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Uniao das freguesias de Oliveira do Hospital e Sao Paio de Gramacos",
         "dicofre": "061124",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Uniao das freguesias de Penalva de Alva e Sao Sebastiao da Feira",
         "dicofre": "061125",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Oliveira do Hospital",
         "freguesia": "Uniao das freguesias de Santa Ovaia e Vila Pouca da Beira",
         "dicofre": "061126",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Pampilhosa da Serra",
         "freguesia": "Cabril",
         "dicofre": "061201",
         "brasao": "https://dados.gov.pt/s/brasoes/061201.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Pampilhosa da Serra",
         "freguesia": "Dornelas do Zezere",
         "dicofre": "061202",
         "brasao": "https://dados.gov.pt/s/brasoes/061202.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Pampilhosa da Serra",
         "freguesia": "Janeiro de Baixo",
         "dicofre": "061204",
         "brasao": "https://dados.gov.pt/s/brasoes/061204.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Pampilhosa da Serra",
         "freguesia": "Pampilhosa da Serra",
         "dicofre": "061206",
         "brasao": "https://dados.gov.pt/s/brasoes/061206.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Pampilhosa da Serra",
         "freguesia": "Pessegueiro",
         "dicofre": "061207",
         "brasao": "https://dados.gov.pt/s/brasoes/061207.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Pampilhosa da Serra",
         "freguesia": "Unhais-o-Velho",
         "dicofre": "061209",
         "brasao": "https://dados.gov.pt/s/brasoes/061209.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Pampilhosa da Serra",
         "freguesia": "Fajao-Vidual",
         "dicofre": "061211",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Pampilhosa da Serra",
         "freguesia": "Portela do Fojo-Machio",
         "dicofre": "061212",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penacova",
         "freguesia": "Carvalho",
         "dicofre": "061301",
         "brasao": "https://dados.gov.pt/s/brasoes/061301.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penacova",
         "freguesia": "Figueira de Lorvao",
         "dicofre": "061302",
         "brasao": "https://dados.gov.pt/s/brasoes/061302.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penacova",
         "freguesia": "Lorvao",
         "dicofre": "061304",
         "brasao": "https://dados.gov.pt/s/brasoes/061304.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penacova",
         "freguesia": "Penacova",
         "dicofre": "061307",
         "brasao": "https://dados.gov.pt/s/brasoes/061307.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penacova",
         "freguesia": "Sazes do Lorvao",
         "dicofre": "061310",
         "brasao": "https://dados.gov.pt/s/brasoes/061310.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penacova",
         "freguesia": "Uniao das freguesias de Friumes e Paradela",
         "dicofre": "061312",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penacova",
         "freguesia": "Uniao das freguesias de Oliveira do Mondego e Travanca do Mondego",
         "dicofre": "061313",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penacova",
         "freguesia": "Uniao das freguesias de Sao Pedro de Alva e Sao Paio de Mondego",
         "dicofre": "061314",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penela",
         "freguesia": "Cumeeira",
         "dicofre": "061401",
         "brasao": "https://dados.gov.pt/s/brasoes/061401.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penela",
         "freguesia": "Espinhal",
         "dicofre": "061402",
         "brasao": "https://dados.gov.pt/s/brasoes/061402.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penela",
         "freguesia": "Podentes",
         "dicofre": "061403",
         "brasao": "https://dados.gov.pt/s/brasoes/061403.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Penela",
         "freguesia": "Uniao das freguesias de Sao Miguel, Santa Eufemia e Rabacal",
         "dicofre": "061407",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Alfarelos",
         "dicofre": "061501",
         "brasao": "https://dados.gov.pt/s/brasoes/061501.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Figueiro do Campo",
         "dicofre": "061504",
         "brasao": "https://dados.gov.pt/s/brasoes/061504.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Granja do Ulmeiro",
         "dicofre": "061506",
         "brasao": "https://dados.gov.pt/s/brasoes/061506.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Samuel",
         "dicofre": "061508",
         "brasao": "https://dados.gov.pt/s/brasoes/061508.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Soure",
         "dicofre": "061509",
         "brasao": "https://dados.gov.pt/s/brasoes/061509.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Tapeus",
         "dicofre": "061510",
         "brasao": "https://dados.gov.pt/s/brasoes/061510.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Vila Nova de Ancos",
         "dicofre": "061511",
         "brasao": "https://dados.gov.pt/s/brasoes/061511.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Vinha da Rainha",
         "dicofre": "061512",
         "brasao": "https://dados.gov.pt/s/brasoes/061512.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Uniao das freguesias de Degracias e Pombalinho",
         "dicofre": "061513",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Soure",
         "freguesia": "Uniao das freguesias de Gesteira e Brunhos",
         "dicofre": "061514",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Candosa",
         "dicofre": "061602",
         "brasao": "https://dados.gov.pt/s/brasoes/061602.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Carapinha",
         "dicofre": "061603",
         "brasao": "https://dados.gov.pt/s/brasoes/061603.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Midoes",
         "dicofre": "061608",
         "brasao": "https://dados.gov.pt/s/brasoes/061608.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Mouronho",
         "dicofre": "061609",
         "brasao": "https://dados.gov.pt/s/brasoes/061609.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Povoa de Midoes",
         "dicofre": "061611",
         "brasao": "https://dados.gov.pt/s/brasoes/061611.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Sao Joao da Boa Vista",
         "dicofre": "061612",
         "brasao": "https://dados.gov.pt/s/brasoes/061612.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Tabua",
         "dicofre": "061614",
         "brasao": "https://dados.gov.pt/s/brasoes/061614.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Uniao das freguesias de azere e Covelo",
         "dicofre": "061616",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Uniao das freguesias de Covas e Vila Nova de Oliveirinha",
         "dicofre": "061617",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Uniao das freguesias de Espariz e Sinde",
         "dicofre": "061618",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Tabua",
         "freguesia": "Uniao das freguesias de Pinheiro de Coja e Meda de Mouros",
         "dicofre": "061619",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Vila Nova de Poiares",
         "freguesia": "Arrifana",
         "dicofre": "061701",
         "brasao": ""
      },
      {
         "distrito": "Coimbra",
         "concelho": "Vila Nova de Poiares",
         "freguesia": "Lavegadas",
         "dicofre": "061702",
         "brasao": "https://dados.gov.pt/s/brasoes/061702.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Vila Nova de Poiares",
         "freguesia": "Poiares (Santo Andre)",
         "dicofre": "061703",
         "brasao": "https://dados.gov.pt/s/brasoes/061703.png"
      },
      {
         "distrito": "Coimbra",
         "concelho": "Vila Nova de Poiares",
         "freguesia": "Sao Miguel de Poiares",
         "dicofre": "061704",
         "brasao": "https://dados.gov.pt/s/brasoes/061704.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Alandroal",
         "freguesia": "Santiago Maior",
         "dicofre": "070103",
         "brasao": "https://dados.gov.pt/s/brasoes/070103.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Alandroal",
         "freguesia": "Capelins (Santo Antonio)",
         "dicofre": "070104",
         "brasao": "https://dados.gov.pt/s/brasoes/070104.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Alandroal",
         "freguesia": "Terena (Sao Pedro)",
         "dicofre": "070105",
         "brasao": "https://dados.gov.pt/s/brasoes/070105.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Alandroal",
         "freguesia": "Uniao das freguesias de Alandroal (Nossa Senhora da Conceicao), Sao Bras dos Matos (Mina do Bugalho) e Juromenha (Nossa Senhora do Loreto)",
         "dicofre": "070107",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Arraiolos",
         "freguesia": "Arraiolos",
         "dicofre": "070201",
         "brasao": "https://dados.gov.pt/s/brasoes/070201.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Arraiolos",
         "freguesia": "Igrejinha",
         "dicofre": "070202",
         "brasao": "https://dados.gov.pt/s/brasoes/070202.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Arraiolos",
         "freguesia": "Vimieiro",
         "dicofre": "070206",
         "brasao": "https://dados.gov.pt/s/brasoes/070206.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Arraiolos",
         "freguesia": "Uniao das freguesias de Gafanhoeira (Sao Pedro) e Sabugueiro",
         "dicofre": "070208",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Arraiolos",
         "freguesia": "Uniao das freguesias de Sao Gregorio e Santa Justa",
         "dicofre": "070209",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Borba",
         "freguesia": "Borba (Matriz)",
         "dicofre": "070301",
         "brasao": "https://dados.gov.pt/s/brasoes/070301.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Borba",
         "freguesia": "Orada",
         "dicofre": "070302",
         "brasao": "https://dados.gov.pt/s/brasoes/070302.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Borba",
         "freguesia": "Rio de Moinhos",
         "dicofre": "070303",
         "brasao": "https://dados.gov.pt/s/brasoes/070303.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Borba",
         "freguesia": "Borba (Sao Bartolomeu)",
         "dicofre": "070304",
         "brasao": "https://dados.gov.pt/s/brasoes/070304.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Estremoz",
         "freguesia": "Arcos",
         "dicofre": "070401",
         "brasao": "https://dados.gov.pt/s/brasoes/070401.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Estremoz",
         "freguesia": "Gloria",
         "dicofre": "070402",
         "brasao": "https://dados.gov.pt/s/brasoes/070402.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Estremoz",
         "freguesia": "Evora Monte (Santa Maria)",
         "dicofre": "070404",
         "brasao": "https://dados.gov.pt/s/brasoes/070404.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Estremoz",
         "freguesia": "Sao Domingos de Ana Loura",
         "dicofre": "070411",
         "brasao": "https://dados.gov.pt/s/brasoes/070411.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Estremoz",
         "freguesia": "Veiros",
         "dicofre": "070413",
         "brasao": "https://dados.gov.pt/s/brasoes/070413.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Estremoz",
         "freguesia": "Uniao das freguesias de Estremoz (Santa Maria e Santo Andre)",
         "dicofre": "070414",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Estremoz",
         "freguesia": "Uniao das freguesias de Sao Bento do Cortico e Santo Estevao",
         "dicofre": "070415",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Estremoz",
         "freguesia": "Uniao das freguesias de Sao Lourenco de Mamporcao e Sao Bento de Ana Loura",
         "dicofre": "070416",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Estremoz",
         "freguesia": "Uniao das freguesias do Ameixial (Santa Vitoria e Sao Bento)",
         "dicofre": "070417",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Nossa Senhora da Graca do Divor",
         "dicofre": "070502",
         "brasao": "https://dados.gov.pt/s/brasoes/070502.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Nossa Senhora de Machede",
         "dicofre": "070503",
         "brasao": "https://dados.gov.pt/s/brasoes/070503.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Sao Bento do Mato",
         "dicofre": "070506",
         "brasao": "https://dados.gov.pt/s/brasoes/070506.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Sao Miguel de Machede",
         "dicofre": "070509",
         "brasao": "https://dados.gov.pt/s/brasoes/070509.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Torre de Coelheiros",
         "dicofre": "070513",
         "brasao": "https://dados.gov.pt/s/brasoes/070513.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Canaviais",
         "dicofre": "070515",
         "brasao": "https://dados.gov.pt/s/brasoes/070515.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Uniao das freguesias de Bacelo e Senhora da Saude",
         "dicofre": "070522",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Uniao das freguesias de Evora (Sao Mamede, Se, Sao Pedro e Santo Antao)",
         "dicofre": "070523",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Uniao das freguesias de Malagueira e Horta das Figueiras",
         "dicofre": "070524",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Uniao das freguesias de Nossa Senhora da Tourega e Nossa Senhora de Guadalupe",
         "dicofre": "070525",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Uniao das freguesias de Sao Mancos e Sao Vicente do Pigeiro",
         "dicofre": "070526",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Evora",
         "freguesia": "Uniao das freguesias de Sao Sebastiao da Giesteira e Nossa Senhora da Boa Fe",
         "dicofre": "070527",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Montemor-o-Novo",
         "freguesia": "Cabrela",
         "dicofre": "070601",
         "brasao": "https://dados.gov.pt/s/brasoes/070601.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Montemor-o-Novo",
         "freguesia": "Santiago do Escoural",
         "dicofre": "070605",
         "brasao": "https://dados.gov.pt/s/brasoes/070605.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Montemor-o-Novo",
         "freguesia": "Sao Cristovao",
         "dicofre": "070606",
         "brasao": "https://dados.gov.pt/s/brasoes/070606.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Montemor-o-Novo",
         "freguesia": "Ciborro",
         "dicofre": "070607",
         "brasao": "https://dados.gov.pt/s/brasoes/070607.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Montemor-o-Novo",
         "freguesia": "Foros de Vale de Figueira",
         "dicofre": "070610",
         "brasao": "https://dados.gov.pt/s/brasoes/070610.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Montemor-o-Novo",
         "freguesia": "Uniao das freguesias de Corticadas de Lavre e Lavre",
         "dicofre": "070611",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Montemor-o-Novo",
         "freguesia": "Uniao das freguesias de Nossa Senhora da Vila, Nossa Senhora do Bispo e Silveiras",
         "dicofre": "070612",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Mora",
         "freguesia": "Brotas",
         "dicofre": "070701",
         "brasao": "https://dados.gov.pt/s/brasoes/070701.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Mora",
         "freguesia": "Cabecao",
         "dicofre": "070702",
         "brasao": "https://dados.gov.pt/s/brasoes/070702.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Mora",
         "freguesia": "Mora",
         "dicofre": "070703",
         "brasao": "https://dados.gov.pt/s/brasoes/070703.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Mora",
         "freguesia": "Pavia",
         "dicofre": "070704",
         "brasao": "https://dados.gov.pt/s/brasoes/070704.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Mourao",
         "freguesia": "Granja",
         "dicofre": "070801",
         "brasao": "https://dados.gov.pt/s/brasoes/070801.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Mourao",
         "freguesia": "Luz",
         "dicofre": "070802",
         "brasao": "https://dados.gov.pt/s/brasoes/070802.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Mourao",
         "freguesia": "Mourao",
         "dicofre": "070803",
         "brasao": "https://dados.gov.pt/s/brasoes/070803.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Portel",
         "freguesia": "Monte do Trigo",
         "dicofre": "070903",
         "brasao": "https://dados.gov.pt/s/brasoes/070903.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Portel",
         "freguesia": "Portel",
         "dicofre": "070905",
         "brasao": "https://dados.gov.pt/s/brasoes/070905.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Portel",
         "freguesia": "Santana",
         "dicofre": "070906",
         "brasao": "https://dados.gov.pt/s/brasoes/070906.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Portel",
         "freguesia": "Vera Cruz",
         "dicofre": "070908",
         "brasao": "https://dados.gov.pt/s/brasoes/070908.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Portel",
         "freguesia": "Uniao das freguesias de Amieira e Alqueva",
         "dicofre": "070909",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Portel",
         "freguesia": "Uniao das freguesias de Sao Bartolomeu do Outeiro e Oriola",
         "dicofre": "070910",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Redondo",
         "freguesia": "Montoito",
         "dicofre": "071001",
         "brasao": "https://dados.gov.pt/s/brasoes/071001.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Redondo",
         "freguesia": "Redondo",
         "dicofre": "071002",
         "brasao": "https://dados.gov.pt/s/brasoes/071002.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Reguengos de Monsaraz",
         "freguesia": "Corval",
         "dicofre": "071102",
         "brasao": "https://dados.gov.pt/s/brasoes/071102.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Reguengos de Monsaraz",
         "freguesia": "Monsaraz",
         "dicofre": "071103",
         "brasao": "https://dados.gov.pt/s/brasoes/071103.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Reguengos de Monsaraz",
         "freguesia": "Reguengos de Monsaraz",
         "dicofre": "071104",
         "brasao": "https://dados.gov.pt/s/brasoes/071104.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Reguengos de Monsaraz",
         "freguesia": "Uniao das freguesias de Campo e Campinho",
         "dicofre": "071106",
         "brasao": ""
      },
      {
         "distrito": "Evora",
         "concelho": "Vendas Novas",
         "freguesia": "Vendas Novas",
         "dicofre": "071201",
         "brasao": "https://dados.gov.pt/s/brasoes/071201.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Vendas Novas",
         "freguesia": "Landeira",
         "dicofre": "071202",
         "brasao": "https://dados.gov.pt/s/brasoes/071202.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Viana do Alentejo",
         "freguesia": "Alcacovas",
         "dicofre": "071301",
         "brasao": "https://dados.gov.pt/s/brasoes/071301.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Viana do Alentejo",
         "freguesia": "Viana do Alentejo",
         "dicofre": "071302",
         "brasao": "https://dados.gov.pt/s/brasoes/071302.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Viana do Alentejo",
         "freguesia": "Aguiar",
         "dicofre": "071303",
         "brasao": "https://dados.gov.pt/s/brasoes/071303.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Vila Vicosa",
         "freguesia": "Bencatel",
         "dicofre": "071401",
         "brasao": "https://dados.gov.pt/s/brasoes/071401.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Vila Vicosa",
         "freguesia": "Ciladas",
         "dicofre": "071402",
         "brasao": "https://dados.gov.pt/s/brasoes/071402.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Vila Vicosa",
         "freguesia": "Pardais",
         "dicofre": "071404",
         "brasao": "https://dados.gov.pt/s/brasoes/071404.png"
      },
      {
         "distrito": "Evora",
         "concelho": "Vila Vicosa",
         "freguesia": "Nossa Senhora da Conceicao e Sao Bartolomeu",
         "dicofre": "071406",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Albufeira",
         "freguesia": "Guia",
         "dicofre": "080102",
         "brasao": "https://dados.gov.pt/s/brasoes/080102.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Albufeira",
         "freguesia": "Paderne",
         "dicofre": "080103",
         "brasao": "https://dados.gov.pt/s/brasoes/080103.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Albufeira",
         "freguesia": "Ferreiras",
         "dicofre": "080104",
         "brasao": "https://dados.gov.pt/s/brasoes/080104.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Albufeira",
         "freguesia": "Albufeira e Olhos de agua",
         "dicofre": "080106",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Alcoutim",
         "freguesia": "Gioes",
         "dicofre": "080202",
         "brasao": "https://dados.gov.pt/s/brasoes/080202.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Alcoutim",
         "freguesia": "Martim Longo",
         "dicofre": "080203",
         "brasao": "https://dados.gov.pt/s/brasoes/080203.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Alcoutim",
         "freguesia": "Vaqueiros",
         "dicofre": "080205",
         "brasao": "https://dados.gov.pt/s/brasoes/080205.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Alcoutim",
         "freguesia": "Uniao das freguesias de Alcoutim e Pereiro",
         "dicofre": "080206",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Aljezur",
         "freguesia": "Aljezur",
         "dicofre": "080301",
         "brasao": "https://dados.gov.pt/s/brasoes/080301.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Aljezur",
         "freguesia": "Bordeira",
         "dicofre": "080302",
         "brasao": "https://dados.gov.pt/s/brasoes/080302.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Aljezur",
         "freguesia": "Odeceixe",
         "dicofre": "080303",
         "brasao": "https://dados.gov.pt/s/brasoes/080303.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Aljezur",
         "freguesia": "Rogil",
         "dicofre": "080304",
         "brasao": "https://dados.gov.pt/s/brasoes/080304.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Castro Marim",
         "freguesia": "Azinhal",
         "dicofre": "080401",
         "brasao": "https://dados.gov.pt/s/brasoes/080401.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Castro Marim",
         "freguesia": "Castro Marim",
         "dicofre": "080402",
         "brasao": "https://dados.gov.pt/s/brasoes/080402.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Castro Marim",
         "freguesia": "Odeleite",
         "dicofre": "080403",
         "brasao": "https://dados.gov.pt/s/brasoes/080403.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Castro Marim",
         "freguesia": "Altura",
         "dicofre": "080404",
         "brasao": "https://dados.gov.pt/s/brasoes/080404.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Faro",
         "freguesia": "Santa Barbara de Nexe",
         "dicofre": "080503",
         "brasao": "https://dados.gov.pt/s/brasoes/080503.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Faro",
         "freguesia": "Montenegro",
         "dicofre": "080506",
         "brasao": "https://dados.gov.pt/s/brasoes/080506.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Faro",
         "freguesia": "Uniao das freguesias de Conceicao e Estoi",
         "dicofre": "080507",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Faro",
         "freguesia": "Uniao das freguesias de Faro (Se e Sao Pedro)",
         "dicofre": "080508",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Lagoa",
         "freguesia": "Ferragudo",
         "dicofre": "080602",
         "brasao": "https://dados.gov.pt/s/brasoes/080602.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Lagoa",
         "freguesia": "Porches",
         "dicofre": "080604",
         "brasao": "https://dados.gov.pt/s/brasoes/080604.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Lagoa",
         "freguesia": "Uniao das freguesias de Estombar e Parchal",
         "dicofre": "080607",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Lagoa",
         "freguesia": "Uniao das freguesias de Lagoa e Carvoeiro",
         "dicofre": "080608",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Lagos",
         "freguesia": "Luz",
         "dicofre": "080703",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Lagos",
         "freguesia": "Odiaxere",
         "dicofre": "080704",
         "brasao": "https://dados.gov.pt/s/brasoes/080704.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Lagos",
         "freguesia": "Uniao das freguesias de Bensafrim e Barao de Sao Joao",
         "dicofre": "080707",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Lagos",
         "freguesia": "Sao Goncalo de Lagos",
         "dicofre": "080708",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Loule",
         "freguesia": "Almancil",
         "dicofre": "080801",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Loule",
         "freguesia": "Alte",
         "dicofre": "080802",
         "brasao": "https://dados.gov.pt/s/brasoes/080802.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Loule",
         "freguesia": "Ameixial",
         "dicofre": "080803",
         "brasao": "https://dados.gov.pt/s/brasoes/080803.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Loule",
         "freguesia": "Boliqueime",
         "dicofre": "080804",
         "brasao": "https://dados.gov.pt/s/brasoes/080804.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Loule",
         "freguesia": "Quarteira",
         "dicofre": "080805",
         "brasao": "https://dados.gov.pt/s/brasoes/080805.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Loule",
         "freguesia": "Salir",
         "dicofre": "080807",
         "brasao": "https://dados.gov.pt/s/brasoes/080807.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Loule",
         "freguesia": "Loule (Sao Clemente)",
         "dicofre": "080808",
         "brasao": "https://dados.gov.pt/s/brasoes/080808.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Loule",
         "freguesia": "Loule (Sao Sebastiao)",
         "dicofre": "080809",
         "brasao": "https://dados.gov.pt/s/brasoes/080809.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Loule",
         "freguesia": "Uniao de freguesias de Querenca, Tor e Benafim",
         "dicofre": "080812",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Monchique",
         "freguesia": "Alferce",
         "dicofre": "080901",
         "brasao": "https://dados.gov.pt/s/brasoes/080901.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Monchique",
         "freguesia": "Marmelete",
         "dicofre": "080902",
         "brasao": "https://dados.gov.pt/s/brasoes/080902.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Monchique",
         "freguesia": "Monchique",
         "dicofre": "080903",
         "brasao": "https://dados.gov.pt/s/brasoes/080903.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Olhao",
         "freguesia": "Olhao",
         "dicofre": "081003",
         "brasao": "https://dados.gov.pt/s/brasoes/081003.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Olhao",
         "freguesia": "Pechao",
         "dicofre": "081004",
         "brasao": "https://dados.gov.pt/s/brasoes/081004.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Olhao",
         "freguesia": "Quelfes",
         "dicofre": "081005",
         "brasao": "https://dados.gov.pt/s/brasoes/081005.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Olhao",
         "freguesia": "Uniao das freguesias de Moncarapacho e Fuseta",
         "dicofre": "081006",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Portimao",
         "freguesia": "Alvor",
         "dicofre": "081101",
         "brasao": "https://dados.gov.pt/s/brasoes/081101.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Portimao",
         "freguesia": "Mexilhoeira Grande",
         "dicofre": "081102",
         "brasao": "https://dados.gov.pt/s/brasoes/081102.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Portimao",
         "freguesia": "Portimao",
         "dicofre": "081103",
         "brasao": "https://dados.gov.pt/s/brasoes/081103.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Sao Bras de Alportel",
         "freguesia": "Sao Bras de Alportel",
         "dicofre": "081201",
         "brasao": "https://dados.gov.pt/s/brasoes/081201.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Silves",
         "freguesia": "Armacao de Pera",
         "dicofre": "081303",
         "brasao": "https://dados.gov.pt/s/brasoes/081303.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Silves",
         "freguesia": "Sao Bartolomeu de Messines",
         "dicofre": "081305",
         "brasao": "https://dados.gov.pt/s/brasoes/081305.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Silves",
         "freguesia": "Sao Marcos da Serra",
         "dicofre": "081306",
         "brasao": "https://dados.gov.pt/s/brasoes/081306.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Silves",
         "freguesia": "Silves",
         "dicofre": "081307",
         "brasao": "https://dados.gov.pt/s/brasoes/081307.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Silves",
         "freguesia": "Uniao das freguesias de Alcantarilha e Pera",
         "dicofre": "081309",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Silves",
         "freguesia": "Uniao das freguesias de Algoz e Tunes",
         "dicofre": "081310",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Tavira",
         "freguesia": "Cachopo",
         "dicofre": "081401",
         "brasao": "https://dados.gov.pt/s/brasoes/081401.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Tavira",
         "freguesia": "Santa Catarina da Fonte do Bispo",
         "dicofre": "081404",
         "brasao": "https://dados.gov.pt/s/brasoes/081404.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Tavira",
         "freguesia": "Santa Luzia",
         "dicofre": "081408",
         "brasao": "https://dados.gov.pt/s/brasoes/081408.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Tavira",
         "freguesia": "Uniao das freguesias de Conceicao e Cabanas de Tavira",
         "dicofre": "081410",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Tavira",
         "freguesia": "Uniao das freguesias de Luz de Tavira e Santo Estevao",
         "dicofre": "081411",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Tavira",
         "freguesia": "Uniao das freguesias de Tavira (Santa Maria e Santiago)",
         "dicofre": "081412",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Vila do Bispo",
         "freguesia": "Barao de Sao Miguel",
         "dicofre": "081501",
         "brasao": "https://dados.gov.pt/s/brasoes/081501.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Vila do Bispo",
         "freguesia": "Budens",
         "dicofre": "081502",
         "brasao": "https://dados.gov.pt/s/brasoes/081502.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Vila do Bispo",
         "freguesia": "Sagres",
         "dicofre": "081504",
         "brasao": "https://dados.gov.pt/s/brasoes/081504.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Vila do Bispo",
         "freguesia": "Vila do Bispo e Raposeira",
         "dicofre": "081506",
         "brasao": ""
      },
      {
         "distrito": "Faro",
         "concelho": "Vila Real de Santo Antonio",
         "freguesia": "Vila Nova de Cacela",
         "dicofre": "081601",
         "brasao": "https://dados.gov.pt/s/brasoes/081601.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Vila Real de Santo Antonio",
         "freguesia": "Vila Real de Santo Antonio",
         "dicofre": "081602",
         "brasao": "https://dados.gov.pt/s/brasoes/081602.png"
      },
      {
         "distrito": "Faro",
         "concelho": "Vila Real de Santo Antonio",
         "freguesia": "Monte Gordo",
         "dicofre": "081603",
         "brasao": "https://dados.gov.pt/s/brasoes/081603.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Carapito",
         "dicofre": "090102",
         "brasao": "https://dados.gov.pt/s/brasoes/090102.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Corticada",
         "dicofre": "090103",
         "brasao": "https://dados.gov.pt/s/brasoes/090103.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Dornelas",
         "dicofre": "090105",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Eirado",
         "dicofre": "090106",
         "brasao": "https://dados.gov.pt/s/brasoes/090106.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Forninhos",
         "dicofre": "090107",
         "brasao": "https://dados.gov.pt/s/brasoes/090107.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Pena Verde",
         "dicofre": "090109",
         "brasao": "https://dados.gov.pt/s/brasoes/090109.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Pinheiro",
         "dicofre": "090110",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Uniao das freguesias de Aguiar da Beira e Coruche",
         "dicofre": "090114",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Uniao das freguesias de Sequeiros e Gradiz",
         "dicofre": "090115",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Aguiar da Beira",
         "freguesia": "Uniao das freguesias de Souto de Aguiar da Beira e Valverde",
         "dicofre": "090116",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Almeida",
         "dicofre": "090203",
         "brasao": "https://dados.gov.pt/s/brasoes/090203.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Castelo Bom",
         "dicofre": "090207",
         "brasao": "https://dados.gov.pt/s/brasoes/090207.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Freineda",
         "dicofre": "090209",
         "brasao": "https://dados.gov.pt/s/brasoes/090209.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Freixo",
         "dicofre": "090210",
         "brasao": "https://dados.gov.pt/s/brasoes/090210.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Malhada Sorda",
         "dicofre": "090213",
         "brasao": "https://dados.gov.pt/s/brasoes/090213.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Nave de Haver",
         "dicofre": "090219",
         "brasao": "https://dados.gov.pt/s/brasoes/090219.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Sao Pedro de Rio Seco",
         "dicofre": "090224",
         "brasao": "https://dados.gov.pt/s/brasoes/090224.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Vale da Mula",
         "dicofre": "090227",
         "brasao": "https://dados.gov.pt/s/brasoes/090227.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Vilar Formoso",
         "dicofre": "090229",
         "brasao": "https://dados.gov.pt/s/brasoes/090229.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Uniao das freguesias de Amoreira, Parada e Cabreira",
         "dicofre": "090230",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Uniao das freguesias de Azinhal, Peva e Valverde",
         "dicofre": "090231",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Uniao das freguesias de Castelo Mendo, Ade, Monteperobolso e Mesquitela",
         "dicofre": "090232",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Uniao das freguesias de Junca e Naves",
         "dicofre": "090233",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Uniao das freguesias de Leomil, Mido, Senouras e Aldeia Nova",
         "dicofre": "090234",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Uniao das freguesias de Malpartida e Vale de Coelha",
         "dicofre": "090235",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Almeida",
         "freguesia": "Uniao das freguesias de Miuzela e Porto de Ovelha",
         "dicofre": "090236",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Baracal",
         "dicofre": "090302",
         "brasao": "https://dados.gov.pt/s/brasoes/090302.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Carrapichana",
         "dicofre": "090304",
         "brasao": "https://dados.gov.pt/s/brasoes/090304.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Forno Telheiro",
         "dicofre": "090306",
         "brasao": "https://dados.gov.pt/s/brasoes/090306.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Lajeosa do Mondego",
         "dicofre": "090307",
         "brasao": "https://dados.gov.pt/s/brasoes/090307.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Linhares",
         "dicofre": "090308",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Macal do Chao",
         "dicofre": "090309",
         "brasao": "https://dados.gov.pt/s/brasoes/090309.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Mesquitela",
         "dicofre": "090310",
         "brasao": "https://dados.gov.pt/s/brasoes/090310.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Minhocal",
         "dicofre": "090311",
         "brasao": "https://dados.gov.pt/s/brasoes/090311.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Prados",
         "dicofre": "090312",
         "brasao": "https://dados.gov.pt/s/brasoes/090312.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Ratoeira",
         "dicofre": "090314",
         "brasao": "https://dados.gov.pt/s/brasoes/090314.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Vale de Azares",
         "dicofre": "090318",
         "brasao": "https://dados.gov.pt/s/brasoes/090318.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Casas do Soeiro",
         "dicofre": "090322",
         "brasao": "https://dados.gov.pt/s/brasoes/090322.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Uniao das freguesias de Acores e Velosa",
         "dicofre": "090323",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Uniao das freguesias de Celorico (Sao Pedro e Santa Maria) e Vila Boa do Mondego",
         "dicofre": "090324",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Uniao das freguesias de Cortico da Serra, Vide entre Vinhas e Salgueirais",
         "dicofre": "090325",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Celorico da Beira",
         "freguesia": "Uniao das freguesias de Rapa e Cadafaz",
         "dicofre": "090326",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Castelo Rodrigo",
         "dicofre": "090403",
         "brasao": "https://dados.gov.pt/s/brasoes/090403.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Escalhao",
         "dicofre": "090406",
         "brasao": "https://dados.gov.pt/s/brasoes/090406.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Figueira de Castelo Rodrigo",
         "dicofre": "090408",
         "brasao": "https://dados.gov.pt/s/brasoes/090408.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Mata de Lobos",
         "dicofre": "090410",
         "brasao": "https://dados.gov.pt/s/brasoes/090410.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Vermiosa",
         "dicofre": "090415",
         "brasao": "https://dados.gov.pt/s/brasoes/090415.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Uniao das freguesias de Algodres, Vale de Afonsinho e Vilar de Amargo",
         "dicofre": "090418",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Uniao das freguesias de Almofala e Escarigo",
         "dicofre": "090419",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Uniao das freguesias de Cinco Vilas e Reigada",
         "dicofre": "090420",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Uniao das freguesias de Freixeda do Torrao, Quinta de Pero Martins e Penha de aguia",
         "dicofre": "090421",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Figueira de Castelo Rodrigo",
         "freguesia": "Uniao das freguesias do Colmeal e Vilar Torpim",
         "dicofre": "090422",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Algodres",
         "dicofre": "090501",
         "brasao": "https://dados.gov.pt/s/brasoes/090501.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Casal Vasco",
         "dicofre": "090502",
         "brasao": "https://dados.gov.pt/s/brasoes/090502.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Figueiro da Granja",
         "dicofre": "090504",
         "brasao": "https://dados.gov.pt/s/brasoes/090504.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Fornos de Algodres",
         "dicofre": "090505",
         "brasao": "https://dados.gov.pt/s/brasoes/090505.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Infias",
         "dicofre": "090507",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Maceira",
         "dicofre": "090509",
         "brasao": "https://dados.gov.pt/s/brasoes/090509.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Matanca",
         "dicofre": "090510",
         "brasao": "https://dados.gov.pt/s/brasoes/090510.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Muxagata",
         "dicofre": "090511",
         "brasao": "https://dados.gov.pt/s/brasoes/090511.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Queiriz",
         "dicofre": "090512",
         "brasao": "https://dados.gov.pt/s/brasoes/090512.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Uniao das freguesias de Cortico e Vila Cha",
         "dicofre": "090517",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Uniao das freguesias de Juncais, Vila Ruiva e Vila Soeiro do Chao",
         "dicofre": "090518",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Fornos de Algodres",
         "freguesia": "Uniao das freguesias de Sobral Pichorro e Fuinhas",
         "dicofre": "090519",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Arcozelo",
         "dicofre": "090602",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Cativelos",
         "dicofre": "090603",
         "brasao": "https://dados.gov.pt/s/brasoes/090603.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Folgosinho",
         "dicofre": "090605",
         "brasao": "https://dados.gov.pt/s/brasoes/090605.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Nespereira",
         "dicofre": "090612",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Pacos da Serra",
         "dicofre": "090613",
         "brasao": "https://dados.gov.pt/s/brasoes/090613.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Ribamondego",
         "dicofre": "090614",
         "brasao": "https://dados.gov.pt/s/brasoes/090614.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Sao Paio",
         "dicofre": "090617",
         "brasao": "https://dados.gov.pt/s/brasoes/090617.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Vila Cortes da Serra",
         "dicofre": "090619",
         "brasao": "https://dados.gov.pt/s/brasoes/090619.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Vila Franca da Serra",
         "dicofre": "090620",
         "brasao": "https://dados.gov.pt/s/brasoes/090620.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Vila Nova de Tazem",
         "dicofre": "090621",
         "brasao": "https://dados.gov.pt/s/brasoes/090621.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Uniao das freguesias de Aldeias e Mangualde da Serra",
         "dicofre": "090623",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Uniao das freguesias de Figueiro da Serra e Freixo da Serra",
         "dicofre": "090624",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Gouveia",
         "dicofre": "090625",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Uniao das freguesias de Melo e Nabais",
         "dicofre": "090626",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Uniao das freguesias de Moimenta da Serra e Vinho",
         "dicofre": "090627",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Gouveia",
         "freguesia": "Uniao das freguesias de Rio Torto e Lagarinhos",
         "dicofre": "090628",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Aldeia do Bispo",
         "dicofre": "090703",
         "brasao": "https://dados.gov.pt/s/brasoes/090703.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Aldeia Vicosa",
         "dicofre": "090704",
         "brasao": "https://dados.gov.pt/s/brasoes/090704.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Alvendre",
         "dicofre": "090705",
         "brasao": "https://dados.gov.pt/s/brasoes/090705.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Arrifana",
         "dicofre": "090706",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Avelas da Ribeira",
         "dicofre": "090708",
         "brasao": "https://dados.gov.pt/s/brasoes/090708.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Benespera",
         "dicofre": "090709",
         "brasao": "https://dados.gov.pt/s/brasoes/090709.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Casal de Cinza",
         "dicofre": "090711",
         "brasao": "https://dados.gov.pt/s/brasoes/090711.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Castanheira",
         "dicofre": "090712",
         "brasao": "https://dados.gov.pt/s/brasoes/090712.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Cavadoude",
         "dicofre": "090713",
         "brasao": "https://dados.gov.pt/s/brasoes/090713.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Codesseiro",
         "dicofre": "090714",
         "brasao": "https://dados.gov.pt/s/brasoes/090714.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Faia",
         "dicofre": "090716",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Famalicao",
         "dicofre": "090717",
         "brasao": "https://dados.gov.pt/s/brasoes/090717.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Fernao Joanes",
         "dicofre": "090718",
         "brasao": "https://dados.gov.pt/s/brasoes/090718.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Goncalo Bocas",
         "dicofre": "090721",
         "brasao": "https://dados.gov.pt/s/brasoes/090721.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Joao Antao",
         "dicofre": "090722",
         "brasao": "https://dados.gov.pt/s/brasoes/090722.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Macainhas",
         "dicofre": "090723",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Marmeleiro",
         "dicofre": "090724",
         "brasao": "https://dados.gov.pt/s/brasoes/090724.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Meios",
         "dicofre": "090725",
         "brasao": "https://dados.gov.pt/s/brasoes/090725.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Panoias de Cima",
         "dicofre": "090728",
         "brasao": "https://dados.gov.pt/s/brasoes/090728.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Pega",
         "dicofre": "090729",
         "brasao": "https://dados.gov.pt/s/brasoes/090729.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Pera do Moco",
         "dicofre": "090730",
         "brasao": "https://dados.gov.pt/s/brasoes/090730.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Porto da Carne",
         "dicofre": "090732",
         "brasao": "https://dados.gov.pt/s/brasoes/090732.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Ramela",
         "dicofre": "090734",
         "brasao": "https://dados.gov.pt/s/brasoes/090734.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Santana da Azinha",
         "dicofre": "090738",
         "brasao": "https://dados.gov.pt/s/brasoes/090738.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Sobral da Serra",
         "dicofre": "090744",
         "brasao": "https://dados.gov.pt/s/brasoes/090744.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Vale de Estrela",
         "dicofre": "090746",
         "brasao": "https://dados.gov.pt/s/brasoes/090746.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Valhelhas",
         "dicofre": "090747",
         "brasao": "https://dados.gov.pt/s/brasoes/090747.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Vela",
         "dicofre": "090748",
         "brasao": "https://dados.gov.pt/s/brasoes/090748.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Videmonte",
         "dicofre": "090749",
         "brasao": "https://dados.gov.pt/s/brasoes/090749.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Vila Cortes do Mondego",
         "dicofre": "090750",
         "brasao": "https://dados.gov.pt/s/brasoes/090750.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Vila Fernando",
         "dicofre": "090751",
         "brasao": "https://dados.gov.pt/s/brasoes/090751.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Vila Franca do Deao",
         "dicofre": "090752",
         "brasao": "https://dados.gov.pt/s/brasoes/090752.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Vila Garcia",
         "dicofre": "090753",
         "brasao": "https://dados.gov.pt/s/brasoes/090753.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Goncalo",
         "dicofre": "090757",
         "brasao": "https://dados.gov.pt/s/brasoes/090757.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Guarda",
         "dicofre": "090758",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Jarmelo Sao Miguel",
         "dicofre": "090759",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Jarmelo Sao Pedro",
         "dicofre": "090760",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Uniao de freguesias de Avelas de Ambom e Rocamondo",
         "dicofre": "090761",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Uniao de freguesias de Corujeira e Trinta",
         "dicofre": "090762",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Uniao de freguesias de Mizarela, Pero Soares e Vila Soeiro",
         "dicofre": "090763",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Uniao de freguesias de Pousade e Albardo",
         "dicofre": "090764",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Uniao de freguesias de Rochoso e Monte Margarida",
         "dicofre": "090765",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Guarda",
         "freguesia": "Adao",
         "dicofre": "090766",
         "brasao": "https://dados.gov.pt/s/brasoes/090766.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Manteigas",
         "freguesia": "Sameiro",
         "dicofre": "090801",
         "brasao": "https://dados.gov.pt/s/brasoes/090801.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Manteigas",
         "freguesia": "Manteigas (Santa Maria)",
         "dicofre": "090802",
         "brasao": "https://dados.gov.pt/s/brasoes/090802.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Manteigas",
         "freguesia": "Manteigas (Sao Pedro)",
         "dicofre": "090803",
         "brasao": "https://dados.gov.pt/s/brasoes/090803.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Manteigas",
         "freguesia": "Vale de Amoreira",
         "dicofre": "090804",
         "brasao": "https://dados.gov.pt/s/brasoes/090804.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Aveloso",
         "dicofre": "090901",
         "brasao": "https://dados.gov.pt/s/brasoes/090901.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Barreira",
         "dicofre": "090902",
         "brasao": "https://dados.gov.pt/s/brasoes/090902.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Coriscada",
         "dicofre": "090905",
         "brasao": "https://dados.gov.pt/s/brasoes/090905.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Longroiva",
         "dicofre": "090907",
         "brasao": "https://dados.gov.pt/s/brasoes/090907.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Marialva",
         "dicofre": "090908",
         "brasao": "https://dados.gov.pt/s/brasoes/090908.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Poco do Canto",
         "dicofre": "090912",
         "brasao": "https://dados.gov.pt/s/brasoes/090912.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Rabacal",
         "dicofre": "090914",
         "brasao": "https://dados.gov.pt/s/brasoes/090914.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Ranhados",
         "dicofre": "090915",
         "brasao": "https://dados.gov.pt/s/brasoes/090915.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Meda, Outeiro de Gatos e Fonte Longa",
         "dicofre": "090917",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Prova e Casteicao",
         "dicofre": "090918",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Meda",
         "freguesia": "Uniao das freguesias de Vale Flor, Carvalhal e Pai Penela",
         "dicofre": "090919",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Ervedosa",
         "dicofre": "091009",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Freixedas",
         "dicofre": "091010",
         "brasao": "https://dados.gov.pt/s/brasoes/091010.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Lamegal",
         "dicofre": "091012",
         "brasao": "https://dados.gov.pt/s/brasoes/091012.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Lameiras",
         "dicofre": "091013",
         "brasao": "https://dados.gov.pt/s/brasoes/091013.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Manigoto",
         "dicofre": "091014",
         "brasao": "https://dados.gov.pt/s/brasoes/091014.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Pala",
         "dicofre": "091015",
         "brasao": "https://dados.gov.pt/s/brasoes/091015.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Pinhel",
         "dicofre": "091017",
         "brasao": "https://dados.gov.pt/s/brasoes/091017.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Pinzio",
         "dicofre": "091018",
         "brasao": "https://dados.gov.pt/s/brasoes/091018.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Souro Pires",
         "dicofre": "091024",
         "brasao": "https://dados.gov.pt/s/brasoes/091024.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Vascoveiro",
         "dicofre": "091027",
         "brasao": "https://dados.gov.pt/s/brasoes/091027.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Agregacao das freguesias Sul de Pinhel",
         "dicofre": "091028",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Alto do Palurdo",
         "dicofre": "091032",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Alverca da Beira/Bouca Cova",
         "dicofre": "091029",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Terras de Massueime",
         "dicofre": "091030",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Uniao das freguesias de Atalaia e Safurdao",
         "dicofre": "091035",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Valbom/Bogalhal",
         "dicofre": "091031",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Vale do Coa",
         "dicofre": "091033",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Pinhel",
         "freguesia": "Vale do Massueime",
         "dicofre": "091034",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "aguas Belas",
         "dicofre": "091101",
         "brasao": "https://dados.gov.pt/s/brasoes/091101.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Aldeia do Bispo",
         "dicofre": "091102",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Aldeia da Ponte",
         "dicofre": "091103",
         "brasao": "https://dados.gov.pt/s/brasoes/091103.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Aldeia Velha",
         "dicofre": "091106",
         "brasao": "https://dados.gov.pt/s/brasoes/091106.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Alfaiates",
         "dicofre": "091107",
         "brasao": "https://dados.gov.pt/s/brasoes/091107.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Baracal",
         "dicofre": "091109",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Bendada",
         "dicofre": "091110",
         "brasao": "https://dados.gov.pt/s/brasoes/091110.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Bismula",
         "dicofre": "091111",
         "brasao": "https://dados.gov.pt/s/brasoes/091111.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Casteleiro",
         "dicofre": "091112",
         "brasao": "https://dados.gov.pt/s/brasoes/091112.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Cerdeira",
         "dicofre": "091113",
         "brasao": "https://dados.gov.pt/s/brasoes/091113.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Foios",
         "dicofre": "091114",
         "brasao": "https://dados.gov.pt/s/brasoes/091114.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Malcata",
         "dicofre": "091118",
         "brasao": "https://dados.gov.pt/s/brasoes/091118.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Nave",
         "dicofre": "091120",
         "brasao": "https://dados.gov.pt/s/brasoes/091120.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Quadrazais",
         "dicofre": "091123",
         "brasao": "https://dados.gov.pt/s/brasoes/091123.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Quintas de Sao Bartolomeu",
         "dicofre": "091124",
         "brasao": "https://dados.gov.pt/s/brasoes/091124.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Rapoula do Coa",
         "dicofre": "091125",
         "brasao": "https://dados.gov.pt/s/brasoes/091125.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Rebolosa",
         "dicofre": "091126",
         "brasao": "https://dados.gov.pt/s/brasoes/091126.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Rendo",
         "dicofre": "091127",
         "brasao": "https://dados.gov.pt/s/brasoes/091127.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Sortelha",
         "dicofre": "091133",
         "brasao": "https://dados.gov.pt/s/brasoes/091133.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Souto",
         "dicofre": "091134",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Vale de Espinho",
         "dicofre": "091136",
         "brasao": "https://dados.gov.pt/s/brasoes/091136.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Vila Boa",
         "dicofre": "091138",
         "brasao": "https://dados.gov.pt/s/brasoes/091138.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Vila do Touro",
         "dicofre": "091139",
         "brasao": "https://dados.gov.pt/s/brasoes/091139.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Uniao das freguesias de Aldeia da Ribeira, Vilar Maior e Badamalos",
         "dicofre": "091141",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Uniao das freguesias de Lajeosa e Forcalhos",
         "dicofre": "091142",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Uniao das freguesias de Pousafoles do Bispo, Pena Lobo e Lomba",
         "dicofre": "091143",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Uniao das freguesias de Ruvina, Ruivos e Vale das Eguas",
         "dicofre": "091144",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Uniao das freguesias do Sabugal e Aldeia de Santo Antonio",
         "dicofre": "091145",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Uniao das freguesias de Santo Estevao e Moita",
         "dicofre": "091146",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Sabugal",
         "freguesia": "Uniao das freguesias de Seixo do Coa e Vale Longo",
         "dicofre": "091147",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Alvoco da Serra",
         "dicofre": "091201",
         "brasao": "https://dados.gov.pt/s/brasoes/091201.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Girabolhos",
         "dicofre": "091205",
         "brasao": "https://dados.gov.pt/s/brasoes/091205.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Loriga",
         "dicofre": "091207",
         "brasao": "https://dados.gov.pt/s/brasoes/091207.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Paranhos",
         "dicofre": "091208",
         "brasao": "https://dados.gov.pt/s/brasoes/091208.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Pinhancos",
         "dicofre": "091209",
         "brasao": "https://dados.gov.pt/s/brasoes/091209.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Sabugueiro",
         "dicofre": "091210",
         "brasao": "https://dados.gov.pt/s/brasoes/091210.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Sandomil",
         "dicofre": "091212",
         "brasao": "https://dados.gov.pt/s/brasoes/091212.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Santa Comba",
         "dicofre": "091213",
         "brasao": "https://dados.gov.pt/s/brasoes/091213.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Santiago",
         "dicofre": "091216",
         "brasao": "https://dados.gov.pt/s/brasoes/091216.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Sazes da Beira",
         "dicofre": "091219",
         "brasao": "https://dados.gov.pt/s/brasoes/091219.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Teixeira",
         "dicofre": "091221",
         "brasao": "https://dados.gov.pt/s/brasoes/091221.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Travancinha",
         "dicofre": "091224",
         "brasao": "https://dados.gov.pt/s/brasoes/091224.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Valezim",
         "dicofre": "091225",
         "brasao": "https://dados.gov.pt/s/brasoes/091225.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Vila Cova à Coelheira",
         "dicofre": "091228",
         "brasao": "https://dados.gov.pt/s/brasoes/091228.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Uniao das freguesias de Carragozela e Varzea de Meruge",
         "dicofre": "091230",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Uniao das freguesias de Sameice e Santa Eulalia",
         "dicofre": "091231",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Uniao das freguesias de Santa Marinha e Sao Martinho",
         "dicofre": "091232",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Uniao das freguesias de Seia, Sao Romao e Lapa dos Dinheiros",
         "dicofre": "091233",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Uniao das freguesias de Torrozelo e Folhadosa",
         "dicofre": "091234",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Uniao das freguesias de Tourais e Lajes",
         "dicofre": "091235",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Seia",
         "freguesia": "Uniao das freguesias de Vide e Cabeca",
         "dicofre": "091236",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Aldeia Nova",
         "dicofre": "091301",
         "brasao": "https://dados.gov.pt/s/brasoes/091301.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Castanheira",
         "dicofre": "091303",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Cogula",
         "dicofre": "091304",
         "brasao": "https://dados.gov.pt/s/brasoes/091304.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Cotimos",
         "dicofre": "091305",
         "brasao": "https://dados.gov.pt/s/brasoes/091305.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Fiaes",
         "dicofre": "091307",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Granja",
         "dicofre": "091309",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Guilheiro",
         "dicofre": "091310",
         "brasao": "https://dados.gov.pt/s/brasoes/091310.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Moimentinha",
         "dicofre": "091311",
         "brasao": "https://dados.gov.pt/s/brasoes/091311.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Moreira de Rei",
         "dicofre": "091312",
         "brasao": "https://dados.gov.pt/s/brasoes/091312.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Palhais",
         "dicofre": "091313",
         "brasao": "https://dados.gov.pt/s/brasoes/091313.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Povoa do Concelho",
         "dicofre": "091314",
         "brasao": "https://dados.gov.pt/s/brasoes/091314.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Reboleiro",
         "dicofre": "091315",
         "brasao": "https://dados.gov.pt/s/brasoes/091315.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Rio de Mel",
         "dicofre": "091316",
         "brasao": "https://dados.gov.pt/s/brasoes/091316.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Tamanhos",
         "dicofre": "091321",
         "brasao": "https://dados.gov.pt/s/brasoes/091321.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Valdujo",
         "dicofre": "091325",
         "brasao": "https://dados.gov.pt/s/brasoes/091325.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Uniao das freguesias de Freches e Torres",
         "dicofre": "091330",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Uniao das freguesias de Torre do Terrenho, Sebadelhe da Serra e Terrenho",
         "dicofre": "091331",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Uniao das freguesias de Trancoso (Sao Pedro e Santa Maria) e Souto Maior",
         "dicofre": "091332",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Uniao das freguesias de Vale do Seixo e Vila Garcia",
         "dicofre": "091333",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Uniao das freguesias de Vila Franca das Naves e Feital",
         "dicofre": "091334",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Trancoso",
         "freguesia": "Uniao das freguesias de Vilares e Carnicaes",
         "dicofre": "091335",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Almendra",
         "dicofre": "091401",
         "brasao": "https://dados.gov.pt/s/brasoes/091401.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Castelo Melhor",
         "dicofre": "091402",
         "brasao": "https://dados.gov.pt/s/brasoes/091402.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Cedovim",
         "dicofre": "091403",
         "brasao": "https://dados.gov.pt/s/brasoes/091403.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Chas",
         "dicofre": "091404",
         "brasao": "https://dados.gov.pt/s/brasoes/091404.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Custoias",
         "dicofre": "091405",
         "brasao": "https://dados.gov.pt/s/brasoes/091405.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Horta",
         "dicofre": "091407",
         "brasao": "https://dados.gov.pt/s/brasoes/091407.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Muxagata",
         "dicofre": "091410",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Numao",
         "dicofre": "091411",
         "brasao": "https://dados.gov.pt/s/brasoes/091411.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Santa Comba",
         "dicofre": "091412",
         "brasao": ""
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Sebadelhe",
         "dicofre": "091414",
         "brasao": "https://dados.gov.pt/s/brasoes/091414.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Seixas",
         "dicofre": "091415",
         "brasao": "https://dados.gov.pt/s/brasoes/091415.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Touca",
         "dicofre": "091416",
         "brasao": "https://dados.gov.pt/s/brasoes/091416.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Freixo de Numao",
         "dicofre": "091418",
         "brasao": "https://dados.gov.pt/s/brasoes/091418.png"
      },
      {
         "distrito": "Guarda",
         "concelho": "Vila Nova de Foz Coa",
         "freguesia": "Vila Nova de Foz Coa",
         "dicofre": "091419",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Alfeizerao",
         "dicofre": "100102",
         "brasao": "https://dados.gov.pt/s/brasoes/100102.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Barrio",
         "dicofre": "100104",
         "brasao": "https://dados.gov.pt/s/brasoes/100104.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Benedita",
         "dicofre": "100105",
         "brasao": "https://dados.gov.pt/s/brasoes/100105.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Cela",
         "dicofre": "100106",
         "brasao": "https://dados.gov.pt/s/brasoes/100106.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Evora de Alcobaca",
         "dicofre": "100108",
         "brasao": "https://dados.gov.pt/s/brasoes/100108.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Maiorga",
         "dicofre": "100109",
         "brasao": "https://dados.gov.pt/s/brasoes/100109.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Sao Martinho do Porto",
         "dicofre": "100112",
         "brasao": "https://dados.gov.pt/s/brasoes/100112.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Turquel",
         "dicofre": "100114",
         "brasao": "https://dados.gov.pt/s/brasoes/100114.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Vimeiro",
         "dicofre": "100116",
         "brasao": "https://dados.gov.pt/s/brasoes/100116.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Aljubarrota",
         "dicofre": "100120",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Uniao das freguesias de Alcobaca e Vestiaria",
         "dicofre": "100121",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Uniao das freguesias de Coz, Alpedriz e Montes",
         "dicofre": "100122",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Alcobaca",
         "freguesia": "Uniao das freguesias de Pataias e Martinganca",
         "dicofre": "100123",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Alvaiazere",
         "freguesia": "Almoster",
         "dicofre": "100201",
         "brasao": "https://dados.gov.pt/s/brasoes/100201.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alvaiazere",
         "freguesia": "Macas de Dona Maria",
         "dicofre": "100204",
         "brasao": "https://dados.gov.pt/s/brasoes/100204.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alvaiazere",
         "freguesia": "Pelma",
         "dicofre": "100205",
         "brasao": "https://dados.gov.pt/s/brasoes/100205.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alvaiazere",
         "freguesia": "Alvaiazere",
         "dicofre": "100208",
         "brasao": "https://dados.gov.pt/s/brasoes/100208.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Alvaiazere",
         "freguesia": "Pussos Sao Pedro",
         "dicofre": "100209",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Ansiao",
         "freguesia": "Alvorge",
         "dicofre": "100301",
         "brasao": "https://dados.gov.pt/s/brasoes/100301.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Ansiao",
         "freguesia": "Avelar",
         "dicofre": "100303",
         "brasao": "https://dados.gov.pt/s/brasoes/100303.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Ansiao",
         "freguesia": "Chao de Couce",
         "dicofre": "100304",
         "brasao": "https://dados.gov.pt/s/brasoes/100304.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Ansiao",
         "freguesia": "Pousaflores",
         "dicofre": "100306",
         "brasao": "https://dados.gov.pt/s/brasoes/100306.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Ansiao",
         "freguesia": "Santiago da Guarda",
         "dicofre": "100307",
         "brasao": "https://dados.gov.pt/s/brasoes/100307.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Ansiao",
         "freguesia": "Ansiao",
         "dicofre": "100309",
         "brasao": "https://dados.gov.pt/s/brasoes/100309.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Batalha",
         "freguesia": "Batalha",
         "dicofre": "100401",
         "brasao": "https://dados.gov.pt/s/brasoes/100401.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Batalha",
         "freguesia": "Reguengo do Fetal",
         "dicofre": "100402",
         "brasao": "https://dados.gov.pt/s/brasoes/100402.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Batalha",
         "freguesia": "Sao Mamede",
         "dicofre": "100403",
         "brasao": "https://dados.gov.pt/s/brasoes/100403.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Batalha",
         "freguesia": "Golpilheira",
         "dicofre": "100404",
         "brasao": "https://dados.gov.pt/s/brasoes/100404.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Bombarral",
         "freguesia": "Carvalhal",
         "dicofre": "100502",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Bombarral",
         "freguesia": "Rolica",
         "dicofre": "100503",
         "brasao": "https://dados.gov.pt/s/brasoes/100503.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Bombarral",
         "freguesia": "Po",
         "dicofre": "100505",
         "brasao": "https://dados.gov.pt/s/brasoes/100505.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Bombarral",
         "freguesia": "Uniao das freguesias do Bombarral e Vale Covo",
         "dicofre": "100506",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "A dos Francos",
         "dicofre": "100601",
         "brasao": "https://dados.gov.pt/s/brasoes/100601.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Alvorninha",
         "dicofre": "100602",
         "brasao": "https://dados.gov.pt/s/brasoes/100602.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Carvalhal Benfeito",
         "dicofre": "100604",
         "brasao": "https://dados.gov.pt/s/brasoes/100604.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Foz do Arelho",
         "dicofre": "100606",
         "brasao": "https://dados.gov.pt/s/brasoes/100606.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Landal",
         "dicofre": "100607",
         "brasao": "https://dados.gov.pt/s/brasoes/100607.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Nadadouro",
         "dicofre": "100608",
         "brasao": "https://dados.gov.pt/s/brasoes/100608.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Salir de Matos",
         "dicofre": "100609",
         "brasao": "https://dados.gov.pt/s/brasoes/100609.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Santa Catarina",
         "dicofre": "100611",
         "brasao": "https://dados.gov.pt/s/brasoes/100611.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Vidais",
         "dicofre": "100615",
         "brasao": "https://dados.gov.pt/s/brasoes/100615.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Uniao das freguesias de Caldas da Rainha - Nossa Senhora do Populo, Coto e Sao Gregorio",
         "dicofre": "100617",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Uniao das freguesias de Caldas da Rainha - Santo Onofre e Serra do Bouro",
         "dicofre": "100618",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Caldas da Rainha",
         "freguesia": "Uniao das freguesias de Tornada e Salir do Porto",
         "dicofre": "100619",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Castanheira de Pera",
         "freguesia": "Uniao das freguesias de Castanheira de Pera e Coentral",
         "dicofre": "100703",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Figueiro dos Vinhos",
         "freguesia": "Aguda",
         "dicofre": "100801",
         "brasao": "https://dados.gov.pt/s/brasoes/100801.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Figueiro dos Vinhos",
         "freguesia": "Arega",
         "dicofre": "100802",
         "brasao": "https://dados.gov.pt/s/brasoes/100802.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Figueiro dos Vinhos",
         "freguesia": "Campelo",
         "dicofre": "100803",
         "brasao": "https://dados.gov.pt/s/brasoes/100803.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Figueiro dos Vinhos",
         "freguesia": "Uniao das freguesias de Figueiro dos Vinhos e Bairradas",
         "dicofre": "100806",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Amor",
         "dicofre": "100901",
         "brasao": "https://dados.gov.pt/s/brasoes/100901.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Arrabal",
         "dicofre": "100902",
         "brasao": "https://dados.gov.pt/s/brasoes/100902.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Caranguejeira",
         "dicofre": "100907",
         "brasao": "https://dados.gov.pt/s/brasoes/100907.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Coimbrao",
         "dicofre": "100909",
         "brasao": "https://dados.gov.pt/s/brasoes/100909.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Maceira",
         "dicofre": "100913",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Milagres",
         "dicofre": "100915",
         "brasao": "https://dados.gov.pt/s/brasoes/100915.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Regueira de Pontes",
         "dicofre": "100921",
         "brasao": "https://dados.gov.pt/s/brasoes/100921.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Bajouca",
         "dicofre": "100925",
         "brasao": "https://dados.gov.pt/s/brasoes/100925.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Bidoeira de Cima",
         "dicofre": "100926",
         "brasao": "https://dados.gov.pt/s/brasoes/100926.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Uniao das freguesias de Colmeias e Memoria",
         "dicofre": "100932",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Uniao das freguesias de Leiria, Pousos, Barreira e Cortes",
         "dicofre": "100933",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Uniao das freguesias de Marrazes e Barosa",
         "dicofre": "100934",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Uniao das freguesias de Monte Real e Carvide",
         "dicofre": "100935",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Uniao das freguesias de Monte Redondo e Carreira",
         "dicofre": "100936",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Uniao das freguesias de Parceiros e Azoia",
         "dicofre": "100937",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Uniao das freguesias de Santa Catarina da Serra e Chainca",
         "dicofre": "100938",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Uniao das freguesias de Santa Eufemia e Boa Vista",
         "dicofre": "100939",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Leiria",
         "freguesia": "Uniao das freguesias de Souto da Carpalhosa e Ortigosa",
         "dicofre": "100940",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Marinha Grande",
         "freguesia": "Marinha Grande",
         "dicofre": "101001",
         "brasao": "https://dados.gov.pt/s/brasoes/101001.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Marinha Grande",
         "freguesia": "Vieira de Leiria",
         "dicofre": "101002",
         "brasao": "https://dados.gov.pt/s/brasoes/101002.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Marinha Grande",
         "freguesia": "Moita",
         "dicofre": "101003",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Nazare",
         "freguesia": "Famalicao",
         "dicofre": "101101",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Nazare",
         "freguesia": "Nazare",
         "dicofre": "101102",
         "brasao": "https://dados.gov.pt/s/brasoes/101102.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Nazare",
         "freguesia": "Valado dos Frades",
         "dicofre": "101103",
         "brasao": "https://dados.gov.pt/s/brasoes/101103.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Obidos",
         "freguesia": "A dos Negros",
         "dicofre": "101201",
         "brasao": "https://dados.gov.pt/s/brasoes/101201.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Obidos",
         "freguesia": "Amoreira",
         "dicofre": "101202",
         "brasao": "https://dados.gov.pt/s/brasoes/101202.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Obidos",
         "freguesia": "Olho Marinho",
         "dicofre": "101203",
         "brasao": "https://dados.gov.pt/s/brasoes/101203.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Obidos",
         "freguesia": "Vau",
         "dicofre": "101207",
         "brasao": "https://dados.gov.pt/s/brasoes/101207.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Obidos",
         "freguesia": "Gaeiras",
         "dicofre": "101208",
         "brasao": "https://dados.gov.pt/s/brasoes/101208.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Obidos",
         "freguesia": "Usseira",
         "dicofre": "101209",
         "brasao": "https://dados.gov.pt/s/brasoes/101209.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Obidos",
         "freguesia": "Santa Maria, Sao Pedro e Sobral da Lagoa",
         "dicofre": "101210",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Pedrogao Grande",
         "freguesia": "Graca",
         "dicofre": "101301",
         "brasao": "https://dados.gov.pt/s/brasoes/101301.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pedrogao Grande",
         "freguesia": "Pedrogao Grande",
         "dicofre": "101302",
         "brasao": "https://dados.gov.pt/s/brasoes/101302.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pedrogao Grande",
         "freguesia": "Vila Facaia",
         "dicofre": "101303",
         "brasao": "https://dados.gov.pt/s/brasoes/101303.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Peniche",
         "freguesia": "Atouguia da Baleia",
         "dicofre": "101402",
         "brasao": "https://dados.gov.pt/s/brasoes/101402.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Peniche",
         "freguesia": "Serra d'El-Rei",
         "dicofre": "101405",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Peniche",
         "freguesia": "Ferrel",
         "dicofre": "101406",
         "brasao": "https://dados.gov.pt/s/brasoes/101406.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Peniche",
         "freguesia": "Peniche",
         "dicofre": "101407",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Abiul",
         "dicofre": "101501",
         "brasao": "https://dados.gov.pt/s/brasoes/101501.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Almagreira",
         "dicofre": "101503",
         "brasao": "https://dados.gov.pt/s/brasoes/101503.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Carnide",
         "dicofre": "101504",
         "brasao": "https://dados.gov.pt/s/brasoes/101504.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Carrico",
         "dicofre": "101505",
         "brasao": "https://dados.gov.pt/s/brasoes/101505.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Lourical",
         "dicofre": "101506",
         "brasao": "https://dados.gov.pt/s/brasoes/101506.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Pelariga",
         "dicofre": "101508",
         "brasao": "https://dados.gov.pt/s/brasoes/101508.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Pombal",
         "dicofre": "101509",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Redinha",
         "dicofre": "101510",
         "brasao": "https://dados.gov.pt/s/brasoes/101510.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Vermoil",
         "dicofre": "101513",
         "brasao": "https://dados.gov.pt/s/brasoes/101513.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Vila Ca",
         "dicofre": "101514",
         "brasao": "https://dados.gov.pt/s/brasoes/101514.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Meirinhas",
         "dicofre": "101515",
         "brasao": "https://dados.gov.pt/s/brasoes/101515.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Uniao das freguesias de Guia, Ilha e Mata Mourisca",
         "dicofre": "101518",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Pombal",
         "freguesia": "Uniao das freguesias de Santiago e Sao Simao de Litem e Albergaria dos Doze",
         "dicofre": "101519",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Alqueidao da Serra",
         "dicofre": "101602",
         "brasao": "https://dados.gov.pt/s/brasoes/101602.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Calvaria de Cima",
         "dicofre": "101605",
         "brasao": "https://dados.gov.pt/s/brasoes/101605.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Juncal",
         "dicofre": "101606",
         "brasao": "https://dados.gov.pt/s/brasoes/101606.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Mira de Aire",
         "dicofre": "101608",
         "brasao": "https://dados.gov.pt/s/brasoes/101608.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Pedreiras",
         "dicofre": "101609",
         "brasao": "https://dados.gov.pt/s/brasoes/101609.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Sao Bento",
         "dicofre": "101610",
         "brasao": "https://dados.gov.pt/s/brasoes/101610.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Serro Ventoso",
         "dicofre": "101613",
         "brasao": "https://dados.gov.pt/s/brasoes/101613.png"
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Porto de Mos - Sao Joao Baptista e Sao Pedro",
         "dicofre": "101614",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Uniao das freguesias de Alvados e Alcaria",
         "dicofre": "101615",
         "brasao": ""
      },
      {
         "distrito": "Leiria",
         "concelho": "Porto de Mos",
         "freguesia": "Uniao das freguesias de Arrimal e Mendiga",
         "dicofre": "101616",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Carnota",
         "dicofre": "110106",
         "brasao": "https://dados.gov.pt/s/brasoes/110106.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Meca",
         "dicofre": "110107",
         "brasao": "https://dados.gov.pt/s/brasoes/110107.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Olhalvo",
         "dicofre": "110108",
         "brasao": "https://dados.gov.pt/s/brasoes/110108.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Ota",
         "dicofre": "110109",
         "brasao": "https://dados.gov.pt/s/brasoes/110109.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Ventosa",
         "dicofre": "110113",
         "brasao": "https://dados.gov.pt/s/brasoes/110113.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Vila Verde dos Francos",
         "dicofre": "110114",
         "brasao": "https://dados.gov.pt/s/brasoes/110114.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Uniao das freguesias de Abrigada e Cabanas de Torres",
         "dicofre": "110117",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Uniao das freguesias de Aldeia Galega da Merceana e Aldeia Gavinha",
         "dicofre": "110118",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Uniao das freguesias de Alenquer (Santo Estevao e Triana)",
         "dicofre": "110119",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Uniao das freguesias de Carregado e Cadafais",
         "dicofre": "110120",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Alenquer",
         "freguesia": "Uniao das freguesias de Ribafria e Pereiro de Palhacana",
         "dicofre": "110121",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Arruda dos Vinhos",
         "freguesia": "Arranho",
         "dicofre": "110201",
         "brasao": "https://dados.gov.pt/s/brasoes/110201.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Arruda dos Vinhos",
         "freguesia": "Arruda dos Vinhos",
         "dicofre": "110202",
         "brasao": "https://dados.gov.pt/s/brasoes/110202.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Arruda dos Vinhos",
         "freguesia": "Cardosas",
         "dicofre": "110203",
         "brasao": "https://dados.gov.pt/s/brasoes/110203.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Arruda dos Vinhos",
         "freguesia": "Sao Tiago dos Velhos",
         "dicofre": "110204",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Azambuja",
         "freguesia": "Alcoentre",
         "dicofre": "110301",
         "brasao": "https://dados.gov.pt/s/brasoes/110301.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Azambuja",
         "freguesia": "Aveiras de Baixo",
         "dicofre": "110302",
         "brasao": "https://dados.gov.pt/s/brasoes/110302.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Azambuja",
         "freguesia": "Aveiras de Cima",
         "dicofre": "110303",
         "brasao": "https://dados.gov.pt/s/brasoes/110303.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Azambuja",
         "freguesia": "Azambuja",
         "dicofre": "110304",
         "brasao": "https://dados.gov.pt/s/brasoes/110304.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Azambuja",
         "freguesia": "Vale do Paraiso",
         "dicofre": "110306",
         "brasao": "https://dados.gov.pt/s/brasoes/110306.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Azambuja",
         "freguesia": "Vila Nova da Rainha",
         "dicofre": "110307",
         "brasao": "https://dados.gov.pt/s/brasoes/110307.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Azambuja",
         "freguesia": "Uniao das freguesias de Manique do Intendente, Vila Nova de Sao Pedro e Macussa",
         "dicofre": "110310",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cadaval",
         "freguesia": "Alguber",
         "dicofre": "110401",
         "brasao": "https://dados.gov.pt/s/brasoes/110401.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cadaval",
         "freguesia": "Peral",
         "dicofre": "110407",
         "brasao": "https://dados.gov.pt/s/brasoes/110407.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cadaval",
         "freguesia": "Vermelha",
         "dicofre": "110409",
         "brasao": "https://dados.gov.pt/s/brasoes/110409.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cadaval",
         "freguesia": "Vilar",
         "dicofre": "110410",
         "brasao": "https://dados.gov.pt/s/brasoes/110410.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cadaval",
         "freguesia": "Uniao das freguesias do Cadaval e Pero Moniz",
         "dicofre": "110411",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cadaval",
         "freguesia": "Uniao das freguesias de Lamas e Cercal",
         "dicofre": "110412",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cadaval",
         "freguesia": "Uniao das freguesias de Painho e Figueiros",
         "dicofre": "110413",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cascais",
         "freguesia": "Alcabideche",
         "dicofre": "110501",
         "brasao": "https://dados.gov.pt/s/brasoes/110501.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cascais",
         "freguesia": "Sao Domingos de Rana",
         "dicofre": "110506",
         "brasao": "https://dados.gov.pt/s/brasoes/110506.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cascais",
         "freguesia": "Uniao das freguesias de Carcavelos e Parede",
         "dicofre": "110507",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Cascais",
         "freguesia": "Uniao das freguesias de Cascais e Estoril",
         "dicofre": "110508",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Ajuda",
         "dicofre": "110601",
         "brasao": "https://dados.gov.pt/s/brasoes/110601.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Alcantara",
         "dicofre": "110602",
         "brasao": "https://dados.gov.pt/s/brasoes/110602.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Beato",
         "dicofre": "110607",
         "brasao": "https://dados.gov.pt/s/brasoes/110607.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Benfica",
         "dicofre": "110608",
         "brasao": "https://dados.gov.pt/s/brasoes/110608.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Campolide",
         "dicofre": "110610",
         "brasao": "https://dados.gov.pt/s/brasoes/110610.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Carnide",
         "dicofre": "110611",
         "brasao": "https://dados.gov.pt/s/brasoes/110611.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Lumiar",
         "dicofre": "110618",
         "brasao": "https://dados.gov.pt/s/brasoes/110618.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Marvila",
         "dicofre": "110621",
         "brasao": "https://dados.gov.pt/s/brasoes/110621.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Olivais",
         "dicofre": "110633",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Sao Domingos de Benfica",
         "dicofre": "110639",
         "brasao": "https://dados.gov.pt/s/brasoes/110639.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Alvalade",
         "dicofre": "110654",
         "brasao": "https://dados.gov.pt/s/brasoes/110654.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Areeiro",
         "dicofre": "110655",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Arroios",
         "dicofre": "110656",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Avenidas Novas",
         "dicofre": "110657",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Belem",
         "dicofre": "110658",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Campo de Ourique",
         "dicofre": "110659",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Estrela",
         "dicofre": "110660",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Misericordia",
         "dicofre": "110661",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Parque das Nacoes",
         "dicofre": "110662",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Penha de Franca",
         "dicofre": "110663",
         "brasao": "https://dados.gov.pt/s/brasoes/110663.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Santa Clara",
         "dicofre": "110664",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Santa Maria Maior",
         "dicofre": "110665",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Santo Antonio",
         "dicofre": "110666",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lisboa",
         "freguesia": "Sao Vicente",
         "dicofre": "110667",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Bucelas",
         "dicofre": "110702",
         "brasao": "https://dados.gov.pt/s/brasoes/110702.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Fanhoes",
         "dicofre": "110705",
         "brasao": "https://dados.gov.pt/s/brasoes/110705.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Loures",
         "dicofre": "110707",
         "brasao": "https://dados.gov.pt/s/brasoes/110707.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Lousa",
         "dicofre": "110708",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Uniao das freguesias de Moscavide e Portela",
         "dicofre": "110726",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Uniao das freguesias de Sacavem e Prior Velho",
         "dicofre": "110727",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Uniao das freguesias de Santa Iria de Azoia, Sao Joao da Talha e Bobadela",
         "dicofre": "110728",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Uniao das freguesias de Santo Antao e Sao Juliao do Tojal",
         "dicofre": "110729",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Uniao das freguesias de Santo Antonio dos Cavaleiros e Frielas",
         "dicofre": "110730",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Loures",
         "freguesia": "Uniao das freguesias de Camarate, Unhos e Apelacao",
         "dicofre": "110731",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lourinha",
         "freguesia": "Moita dos Ferreiros",
         "dicofre": "110803",
         "brasao": "https://dados.gov.pt/s/brasoes/110803.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lourinha",
         "freguesia": "Reguengo Grande",
         "dicofre": "110805",
         "brasao": "https://dados.gov.pt/s/brasoes/110805.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lourinha",
         "freguesia": "Santa Barbara",
         "dicofre": "110806",
         "brasao": "https://dados.gov.pt/s/brasoes/110806.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lourinha",
         "freguesia": "Vimeiro",
         "dicofre": "110808",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lourinha",
         "freguesia": "Ribamar",
         "dicofre": "110810",
         "brasao": "https://dados.gov.pt/s/brasoes/110810.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lourinha",
         "freguesia": "Uniao das freguesias de Lourinha e Atalaia",
         "dicofre": "110812",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lourinha",
         "freguesia": "Uniao das freguesias de Miragaia e Marteleira",
         "dicofre": "110813",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Lourinha",
         "freguesia": "Uniao das freguesias de Sao Bartolomeu dos Galegos e Moledo",
         "dicofre": "110814",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Carvoeira",
         "dicofre": "110902",
         "brasao": "https://dados.gov.pt/s/brasoes/110902.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Encarnacao",
         "dicofre": "110904",
         "brasao": "https://dados.gov.pt/s/brasoes/110904.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Ericeira",
         "dicofre": "110906",
         "brasao": "https://dados.gov.pt/s/brasoes/110906.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Mafra",
         "dicofre": "110909",
         "brasao": "https://dados.gov.pt/s/brasoes/110909.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Milharado",
         "dicofre": "110911",
         "brasao": "https://dados.gov.pt/s/brasoes/110911.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Santo Isidoro",
         "dicofre": "110913",
         "brasao": "https://dados.gov.pt/s/brasoes/110913.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Uniao das freguesias de Azueira e Sobral da Abelheira",
         "dicofre": "110918",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Uniao das freguesias de Enxara do Bispo, Gradil e Vila Franca do Rosario",
         "dicofre": "110919",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Uniao das freguesias de Igreja Nova e Cheleiros",
         "dicofre": "110920",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Uniao das freguesias de Malveira e Sao Miguel de Alcainca",
         "dicofre": "110921",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Mafra",
         "freguesia": "Uniao das freguesias de Venda do Pinheiro e Santo Estevao das Gales",
         "dicofre": "110922",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Oeiras",
         "freguesia": "Barcarena",
         "dicofre": "111002",
         "brasao": "https://dados.gov.pt/s/brasoes/111002.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Oeiras",
         "freguesia": "Porto Salvo",
         "dicofre": "111009",
         "brasao": "https://dados.gov.pt/s/brasoes/111009.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Oeiras",
         "freguesia": "Uniao das freguesias de Alges, Linda-a-Velha e Cruz Quebrada-Dafundo",
         "dicofre": "111012",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Oeiras",
         "freguesia": "Uniao das freguesias de Carnaxide e Queijas",
         "dicofre": "111013",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Oeiras",
         "freguesia": "Uniao das freguesias de Oeiras e Sao Juliao da Barra, Paco de Arcos e Caxias",
         "dicofre": "111014",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Algueirao-Mem Martins",
         "dicofre": "111102",
         "brasao": "https://dados.gov.pt/s/brasoes/111102.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Colares",
         "dicofre": "111105",
         "brasao": "https://dados.gov.pt/s/brasoes/111105.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Rio de Mouro",
         "dicofre": "111108",
         "brasao": "https://dados.gov.pt/s/brasoes/111108.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Casal de Cambra",
         "dicofre": "111115",
         "brasao": "https://dados.gov.pt/s/brasoes/111115.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Uniao das freguesias de Agualva e Mira-Sintra",
         "dicofre": "111122",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Uniao das freguesias de Almargem do Bispo, Pero Pinheiro e Montelavar",
         "dicofre": "111123",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Uniao das freguesias do Cacem e Sao Marcos",
         "dicofre": "111124",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Uniao das freguesias de Massama e Monte Abraao",
         "dicofre": "111125",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Uniao das freguesias de Queluz e Belas",
         "dicofre": "111126",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Uniao das freguesias de Sao Joao das Lampas e Terrugem",
         "dicofre": "111127",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sintra",
         "freguesia": "Uniao das freguesias de Sintra (Santa Maria e Sao Miguel, Sao Martinho e Sao Pedro de Penaferrim)",
         "dicofre": "111128",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sobral de Monte Agraco",
         "freguesia": "Santo Quintino",
         "dicofre": "111201",
         "brasao": "https://dados.gov.pt/s/brasoes/111201.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sobral de Monte Agraco",
         "freguesia": "Sapataria",
         "dicofre": "111202",
         "brasao": "https://dados.gov.pt/s/brasoes/111202.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Sobral de Monte Agraco",
         "freguesia": "Sobral de Monte Agraco",
         "dicofre": "111203",
         "brasao": "https://dados.gov.pt/s/brasoes/111203.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Freiria",
         "dicofre": "111306",
         "brasao": "https://dados.gov.pt/s/brasoes/111306.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Ponte do Rol",
         "dicofre": "111310",
         "brasao": "https://dados.gov.pt/s/brasoes/111310.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Ramalhal",
         "dicofre": "111311",
         "brasao": "https://dados.gov.pt/s/brasoes/111311.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Sao Pedro da Cadeira",
         "dicofre": "111314",
         "brasao": "https://dados.gov.pt/s/brasoes/111314.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Silveira",
         "dicofre": "111316",
         "brasao": "https://dados.gov.pt/s/brasoes/111316.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Turcifal",
         "dicofre": "111317",
         "brasao": "https://dados.gov.pt/s/brasoes/111317.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Ventosa",
         "dicofre": "111318",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Uniao das freguesias de A dos Cunhados e Maceira",
         "dicofre": "111321",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Uniao das freguesias de Campelos e Outeiro da Cabeca",
         "dicofre": "111322",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Uniao das freguesias de Carvoeira e Carmoes",
         "dicofre": "111323",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Uniao das freguesias de Dois Portos e Runa",
         "dicofre": "111324",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Uniao das freguesias de Maxial e Monte Redondo",
         "dicofre": "111325",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Torres Vedras",
         "freguesia": "Santa Maria, Sao Pedro e Matacaes",
         "dicofre": "111326",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Vila Franca de Xira",
         "freguesia": "Vialonga",
         "dicofre": "111408",
         "brasao": "https://dados.gov.pt/s/brasoes/111408.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Vila Franca de Xira",
         "freguesia": "Vila Franca de Xira",
         "dicofre": "111409",
         "brasao": "https://dados.gov.pt/s/brasoes/111409.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Vila Franca de Xira",
         "freguesia": "Uniao das freguesias de Alhandra, Sao Joao dos Montes e Calhandriz",
         "dicofre": "111412",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Vila Franca de Xira",
         "freguesia": "Uniao das freguesias de Alverca do Ribatejo e Sobralinho",
         "dicofre": "111413",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Vila Franca de Xira",
         "freguesia": "Uniao das freguesias de Castanheira do Ribatejo e Cachoeiras",
         "dicofre": "111414",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Vila Franca de Xira",
         "freguesia": "Uniao das freguesias de Povoa de Santa Iria e Forte da Casa",
         "dicofre": "111415",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Amadora",
         "freguesia": "Alfragide",
         "dicofre": "111512",
         "brasao": "https://dados.gov.pt/s/brasoes/111512.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Amadora",
         "freguesia": "aguas Livres",
         "dicofre": "111513",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Amadora",
         "freguesia": "Encosta do Sol",
         "dicofre": "111514",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Amadora",
         "freguesia": "Falagueira-Venda Nova",
         "dicofre": "111515",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Amadora",
         "freguesia": "Mina de agua",
         "dicofre": "111516",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Amadora",
         "freguesia": "Venteira",
         "dicofre": "111517",
         "brasao": "https://dados.gov.pt/s/brasoes/111517.png"
      },
      {
         "distrito": "Lisboa",
         "concelho": "Odivelas",
         "freguesia": "Odivelas",
         "dicofre": "111603",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Odivelas",
         "freguesia": "Uniao das freguesias de Pontinha e Famoes",
         "dicofre": "111608",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Odivelas",
         "freguesia": "Uniao das freguesias de Povoa de Santo Adriao e Olival Basto",
         "dicofre": "111609",
         "brasao": ""
      },
      {
         "distrito": "Lisboa",
         "concelho": "Odivelas",
         "freguesia": "Uniao das freguesias de Ramada e Canecas",
         "dicofre": "111610",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Alter do Chao",
         "freguesia": "Alter do Chao",
         "dicofre": "120101",
         "brasao": "https://dados.gov.pt/s/brasoes/120101.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Alter do Chao",
         "freguesia": "Chancelaria",
         "dicofre": "120102",
         "brasao": "https://dados.gov.pt/s/brasoes/120102.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Alter do Chao",
         "freguesia": "Seda",
         "dicofre": "120103",
         "brasao": "https://dados.gov.pt/s/brasoes/120103.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Alter do Chao",
         "freguesia": "Cunheira",
         "dicofre": "120104",
         "brasao": "https://dados.gov.pt/s/brasoes/120104.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Arronches",
         "freguesia": "Assuncao",
         "dicofre": "120201",
         "brasao": "https://dados.gov.pt/s/brasoes/120201.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Arronches",
         "freguesia": "Esperanca",
         "dicofre": "120202",
         "brasao": "https://dados.gov.pt/s/brasoes/120202.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Arronches",
         "freguesia": "Mosteiros",
         "dicofre": "120203",
         "brasao": "https://dados.gov.pt/s/brasoes/120203.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Avis",
         "freguesia": "Aldeia Velha",
         "dicofre": "120302",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Avis",
         "freguesia": "Avis",
         "dicofre": "120303",
         "brasao": "https://dados.gov.pt/s/brasoes/120303.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Avis",
         "freguesia": "Ervedal",
         "dicofre": "120305",
         "brasao": "https://dados.gov.pt/s/brasoes/120305.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Avis",
         "freguesia": "Figueira e Barros",
         "dicofre": "120306",
         "brasao": "https://dados.gov.pt/s/brasoes/120306.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Avis",
         "freguesia": "Uniao das freguesias de Alcorrego e Maranhao",
         "dicofre": "120309",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Avis",
         "freguesia": "Uniao das freguesias de Benavila e Valongo",
         "dicofre": "120310",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Campo Maior",
         "freguesia": "Nossa Senhora da Expectacao",
         "dicofre": "120401",
         "brasao": "https://dados.gov.pt/s/brasoes/120401.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Campo Maior",
         "freguesia": "Nossa Senhora da Graca dos Degolados",
         "dicofre": "120402",
         "brasao": "https://dados.gov.pt/s/brasoes/120402.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Campo Maior",
         "freguesia": "Sao Joao Baptista",
         "dicofre": "120403",
         "brasao": "https://dados.gov.pt/s/brasoes/120403.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Castelo de Vide",
         "freguesia": "Nossa Senhora da Graca de Povoa e Meadas",
         "dicofre": "120501",
         "brasao": "https://dados.gov.pt/s/brasoes/120501.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Castelo de Vide",
         "freguesia": "Santa Maria da Devesa",
         "dicofre": "120502",
         "brasao": "https://dados.gov.pt/s/brasoes/120502.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Castelo de Vide",
         "freguesia": "Santiago Maior",
         "dicofre": "120503",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Castelo de Vide",
         "freguesia": "Sao Joao Baptista",
         "dicofre": "120504",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Crato",
         "freguesia": "Aldeia da Mata",
         "dicofre": "120601",
         "brasao": "https://dados.gov.pt/s/brasoes/120601.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Crato",
         "freguesia": "Gafete",
         "dicofre": "120604",
         "brasao": "https://dados.gov.pt/s/brasoes/120604.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Crato",
         "freguesia": "Monte da Pedra",
         "dicofre": "120605",
         "brasao": "https://dados.gov.pt/s/brasoes/120605.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Crato",
         "freguesia": "Uniao das freguesias de Crato e Martires, Flor da Rosa e Vale do Peso",
         "dicofre": "120607",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Elvas",
         "freguesia": "Santa Eulalia",
         "dicofre": "120706",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Elvas",
         "freguesia": "Sao Bras e Sao Lourenco",
         "dicofre": "120707",
         "brasao": "https://dados.gov.pt/s/brasoes/120707.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Elvas",
         "freguesia": "Sao Vicente e Ventosa",
         "dicofre": "120708",
         "brasao": "https://dados.gov.pt/s/brasoes/120708.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Elvas",
         "freguesia": "Assuncao, Ajuda, Salvador e Santo Ildefonso",
         "dicofre": "120712",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Elvas",
         "freguesia": "Caia, Sao Pedro e Alcacova",
         "dicofre": "120713",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Elvas",
         "freguesia": "Uniao das freguesias de Barbacena e Vila Fernando",
         "dicofre": "120714",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Elvas",
         "freguesia": "Uniao das freguesias de Terrugem e Vila Boim",
         "dicofre": "120715",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Fronteira",
         "freguesia": "Cabeco de Vide",
         "dicofre": "120801",
         "brasao": "https://dados.gov.pt/s/brasoes/120801.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Fronteira",
         "freguesia": "Fronteira",
         "dicofre": "120802",
         "brasao": "https://dados.gov.pt/s/brasoes/120802.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Fronteira",
         "freguesia": "Sao Saturnino",
         "dicofre": "120803",
         "brasao": "https://dados.gov.pt/s/brasoes/120803.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Gaviao",
         "freguesia": "Belver",
         "dicofre": "120902",
         "brasao": "https://dados.gov.pt/s/brasoes/120902.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Gaviao",
         "freguesia": "Comenda",
         "dicofre": "120903",
         "brasao": "https://dados.gov.pt/s/brasoes/120903.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Gaviao",
         "freguesia": "Margem",
         "dicofre": "120905",
         "brasao": "https://dados.gov.pt/s/brasoes/120905.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Gaviao",
         "freguesia": "Uniao das freguesias de Gaviao e Atalaia",
         "dicofre": "120906",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Marvao",
         "freguesia": "Beira",
         "dicofre": "121001",
         "brasao": "https://dados.gov.pt/s/brasoes/121001.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Marvao",
         "freguesia": "Santa Maria de Marvao",
         "dicofre": "121002",
         "brasao": "https://dados.gov.pt/s/brasoes/121002.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Marvao",
         "freguesia": "Santo Antonio das Areias",
         "dicofre": "121003",
         "brasao": "https://dados.gov.pt/s/brasoes/121003.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Marvao",
         "freguesia": "Sao Salvador da Aramenha",
         "dicofre": "121004",
         "brasao": "https://dados.gov.pt/s/brasoes/121004.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Monforte",
         "freguesia": "Assumar",
         "dicofre": "121101",
         "brasao": "https://dados.gov.pt/s/brasoes/121101.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Monforte",
         "freguesia": "Monforte",
         "dicofre": "121102",
         "brasao": "https://dados.gov.pt/s/brasoes/121102.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Monforte",
         "freguesia": "Santo Aleixo",
         "dicofre": "121103",
         "brasao": "https://dados.gov.pt/s/brasoes/121103.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Monforte",
         "freguesia": "Vaiamonte",
         "dicofre": "121104",
         "brasao": "https://dados.gov.pt/s/brasoes/121104.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Nisa",
         "freguesia": "Alpalhao",
         "dicofre": "121201",
         "brasao": "https://dados.gov.pt/s/brasoes/121201.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Nisa",
         "freguesia": "Montalvao",
         "dicofre": "121205",
         "brasao": "https://dados.gov.pt/s/brasoes/121205.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Nisa",
         "freguesia": "Santana",
         "dicofre": "121207",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Nisa",
         "freguesia": "Sao Matias",
         "dicofre": "121208",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Nisa",
         "freguesia": "Tolosa",
         "dicofre": "121210",
         "brasao": "https://dados.gov.pt/s/brasoes/121210.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Nisa",
         "freguesia": "Uniao das freguesias de Arez e Amieira do Tejo",
         "dicofre": "121211",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Nisa",
         "freguesia": "Uniao das freguesias de Espirito Santo, Nossa Senhora da Graca e Sao Simao",
         "dicofre": "121212",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Ponte de Sor",
         "freguesia": "Galveias",
         "dicofre": "121301",
         "brasao": "https://dados.gov.pt/s/brasoes/121301.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Ponte de Sor",
         "freguesia": "Montargil",
         "dicofre": "121302",
         "brasao": "https://dados.gov.pt/s/brasoes/121302.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Ponte de Sor",
         "freguesia": "Foros de Arrao",
         "dicofre": "121304",
         "brasao": "https://dados.gov.pt/s/brasoes/121304.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Ponte de Sor",
         "freguesia": "Longomel",
         "dicofre": "121305",
         "brasao": "https://dados.gov.pt/s/brasoes/121305.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Ponte de Sor",
         "freguesia": "Uniao das freguesias de Ponte de Sor, Tramaga e Vale de Acor",
         "dicofre": "121308",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Portalegre",
         "freguesia": "Alagoa",
         "dicofre": "121401",
         "brasao": "https://dados.gov.pt/s/brasoes/121401.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Portalegre",
         "freguesia": "Alegrete",
         "dicofre": "121402",
         "brasao": "https://dados.gov.pt/s/brasoes/121402.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Portalegre",
         "freguesia": "Fortios",
         "dicofre": "121404",
         "brasao": "https://dados.gov.pt/s/brasoes/121404.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Portalegre",
         "freguesia": "Urra",
         "dicofre": "121410",
         "brasao": "https://dados.gov.pt/s/brasoes/121410.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Portalegre",
         "freguesia": "Uniao das freguesias da Se e Sao Lourenco",
         "dicofre": "121411",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Portalegre",
         "freguesia": "Uniao das freguesias de Reguengo e Sao Juliao",
         "dicofre": "121412",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Portalegre",
         "freguesia": "Uniao das freguesias de Ribeira de Nisa e Carreiras",
         "dicofre": "121413",
         "brasao": ""
      },
      {
         "distrito": "Portalegre",
         "concelho": "Sousel",
         "freguesia": "Cano",
         "dicofre": "121501",
         "brasao": "https://dados.gov.pt/s/brasoes/121501.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Sousel",
         "freguesia": "Casa Branca",
         "dicofre": "121502",
         "brasao": "https://dados.gov.pt/s/brasoes/121502.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Sousel",
         "freguesia": "Santo Amaro",
         "dicofre": "121503",
         "brasao": "https://dados.gov.pt/s/brasoes/121503.png"
      },
      {
         "distrito": "Portalegre",
         "concelho": "Sousel",
         "freguesia": "Sousel",
         "dicofre": "121504",
         "brasao": "https://dados.gov.pt/s/brasoes/121504.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Ansiaes",
         "dicofre": "130103",
         "brasao": "https://dados.gov.pt/s/brasoes/130103.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Candemil",
         "dicofre": "130107",
         "brasao": "https://dados.gov.pt/s/brasoes/130107.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Fregim",
         "dicofre": "130112",
         "brasao": "https://dados.gov.pt/s/brasoes/130112.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Fridao",
         "dicofre": "130115",
         "brasao": "https://dados.gov.pt/s/brasoes/130115.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Gondar",
         "dicofre": "130117",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Jazente",
         "dicofre": "130118",
         "brasao": "https://dados.gov.pt/s/brasoes/130118.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Lomba",
         "dicofre": "130119",
         "brasao": "https://dados.gov.pt/s/brasoes/130119.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Louredo",
         "dicofre": "130120",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Lufrei",
         "dicofre": "130121",
         "brasao": "https://dados.gov.pt/s/brasoes/130121.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Mancelos",
         "dicofre": "130123",
         "brasao": "https://dados.gov.pt/s/brasoes/130123.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Padronelo",
         "dicofre": "130126",
         "brasao": "https://dados.gov.pt/s/brasoes/130126.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Rebordelo",
         "dicofre": "130128",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Salvador do Monte",
         "dicofre": "130129",
         "brasao": "https://dados.gov.pt/s/brasoes/130129.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Gouveia (Sao Simao)",
         "dicofre": "130134",
         "brasao": "https://dados.gov.pt/s/brasoes/130134.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Teloes",
         "dicofre": "130135",
         "brasao": "https://dados.gov.pt/s/brasoes/130135.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Travanca",
         "dicofre": "130136",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Vila Caiz",
         "dicofre": "130138",
         "brasao": "https://dados.gov.pt/s/brasoes/130138.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Vila Cha do Marao",
         "dicofre": "130139",
         "brasao": "https://dados.gov.pt/s/brasoes/130139.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Uniao das freguesias de Aboadela, Sanche e Varzea",
         "dicofre": "130141",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Uniao das freguesias de Amarante (Sao Goncalo), Madalena, Cepelos e Gatao",
         "dicofre": "130142",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Uniao das freguesias de Bustelo, Carneiro e Carvalho de Rei",
         "dicofre": "130143",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Uniao das freguesias de Figueiro (Santiago e Santa Cristina)",
         "dicofre": "130144",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Uniao das freguesias de Freixo de Cima e de Baixo",
         "dicofre": "130145",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Uniao das freguesias de Olo e Canadelo",
         "dicofre": "130146",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Vila Mea",
         "dicofre": "130147",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Amarante",
         "freguesia": "Uniao das freguesias de Vila Garcia, Aboim e Chapa",
         "dicofre": "130148",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Frende",
         "dicofre": "130204",
         "brasao": "https://dados.gov.pt/s/brasoes/130204.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Gestaco",
         "dicofre": "130205",
         "brasao": "https://dados.gov.pt/s/brasoes/130205.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Gove",
         "dicofre": "130206",
         "brasao": "https://dados.gov.pt/s/brasoes/130206.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Grilo",
         "dicofre": "130207",
         "brasao": "https://dados.gov.pt/s/brasoes/130207.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Loivos do Monte",
         "dicofre": "130208",
         "brasao": "https://dados.gov.pt/s/brasoes/130208.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Santa Marinha do Zezere",
         "dicofre": "130215",
         "brasao": "https://dados.gov.pt/s/brasoes/130215.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Valadares",
         "dicofre": "130219",
         "brasao": "https://dados.gov.pt/s/brasoes/130219.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Viariz",
         "dicofre": "130220",
         "brasao": "https://dados.gov.pt/s/brasoes/130220.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Uniao das freguesias de Ancede e Ribadouro",
         "dicofre": "130221",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Uniao das freguesias de Baiao (Santa Leocadia) e Mesquinhata",
         "dicofre": "130222",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Uniao das freguesias de Campelo e Ovil",
         "dicofre": "130223",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Uniao das freguesias de Loivos da Ribeira e Tresouras",
         "dicofre": "130224",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Uniao das freguesias de Santa Cruz do Douro e Sao Tome de Covelas",
         "dicofre": "130225",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Baiao",
         "freguesia": "Uniao das freguesias de Teixeira e Teixeiro",
         "dicofre": "130226",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Aiao",
         "dicofre": "130301",
         "brasao": "https://dados.gov.pt/s/brasoes/130301.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Airaes",
         "dicofre": "130302",
         "brasao": "https://dados.gov.pt/s/brasoes/130302.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Friande",
         "dicofre": "130305",
         "brasao": "https://dados.gov.pt/s/brasoes/130305.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Idaes",
         "dicofre": "130306",
         "brasao": "https://dados.gov.pt/s/brasoes/130306.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Jugueiros",
         "dicofre": "130307",
         "brasao": "https://dados.gov.pt/s/brasoes/130307.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Penacova",
         "dicofre": "130313",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Pinheiro",
         "dicofre": "130314",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Pombeiro de Ribavizela",
         "dicofre": "130315",
         "brasao": "https://dados.gov.pt/s/brasoes/130315.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Refontoura",
         "dicofre": "130317",
         "brasao": "https://dados.gov.pt/s/brasoes/130317.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Regilde",
         "dicofre": "130318",
         "brasao": "https://dados.gov.pt/s/brasoes/130318.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Revinhade",
         "dicofre": "130319",
         "brasao": "https://dados.gov.pt/s/brasoes/130319.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Sendim",
         "dicofre": "130324",
         "brasao": "https://dados.gov.pt/s/brasoes/130324.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Uniao das freguesias de Macieira da Lixa e Caramos",
         "dicofre": "130334",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Uniao das freguesias de Margaride (Santa Eulalia), Varzea, Lagares, Varziela e Moure",
         "dicofre": "130335",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Uniao das freguesias de Pedreira, Rande e Sernande",
         "dicofre": "130336",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Uniao das freguesias de Torrados e Sousa",
         "dicofre": "130337",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Uniao das freguesias de Unhao e Lordelo",
         "dicofre": "130338",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Uniao das freguesias de Vila Cova da Lixa e Borba de Godim",
         "dicofre": "130339",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Uniao das freguesias de Vila Fria e Vizela (Sao Jorge)",
         "dicofre": "130340",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Felgueiras",
         "freguesia": "Uniao das freguesias de Vila Verde e Santao",
         "dicofre": "130341",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Gondomar",
         "freguesia": "Lomba",
         "dicofre": "130405",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Gondomar",
         "freguesia": "Rio Tinto",
         "dicofre": "130408",
         "brasao": "https://dados.gov.pt/s/brasoes/130408.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Gondomar",
         "freguesia": "Baguim do Monte (Rio Tinto)",
         "dicofre": "130412",
         "brasao": "https://dados.gov.pt/s/brasoes/130412.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Gondomar",
         "freguesia": "Uniao das freguesias de Fanzeres e Sao Pedro da Cova",
         "dicofre": "130413",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Gondomar",
         "freguesia": "Uniao das freguesias de Foz do Sousa e Covelo",
         "dicofre": "130414",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Gondomar",
         "freguesia": "Uniao das freguesias de Gondomar (Sao Cosme), Valbom e Jovim",
         "dicofre": "130415",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Gondomar",
         "freguesia": "Uniao das freguesias de Melres e Medas",
         "dicofre": "130416",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Aveleda",
         "dicofre": "130502",
         "brasao": "https://dados.gov.pt/s/brasoes/130502.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Caide de Rei",
         "dicofre": "130504",
         "brasao": "https://dados.gov.pt/s/brasoes/130504.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Lodares",
         "dicofre": "130510",
         "brasao": "https://dados.gov.pt/s/brasoes/130510.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Macieira",
         "dicofre": "130512",
         "brasao": "https://dados.gov.pt/s/brasoes/130512.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Meinedo",
         "dicofre": "130513",
         "brasao": "https://dados.gov.pt/s/brasoes/130513.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Nevogilde",
         "dicofre": "130515",
         "brasao": "https://dados.gov.pt/s/brasoes/130515.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Sousela",
         "dicofre": "130524",
         "brasao": "https://dados.gov.pt/s/brasoes/130524.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Torno",
         "dicofre": "130525",
         "brasao": "https://dados.gov.pt/s/brasoes/130525.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Vilar do Torno e Alentem",
         "dicofre": "130526",
         "brasao": "https://dados.gov.pt/s/brasoes/130526.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Uniao das freguesias de Cernadelo e Lousada (Sao Miguel e Santa Margarida)",
         "dicofre": "130527",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Uniao das freguesias de Cristelos, Boim e Ordem",
         "dicofre": "130528",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Uniao das freguesias de Figueiras e Covas",
         "dicofre": "130529",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Uniao das freguesias de Lustosa e Barrosas (Santo Estevao)",
         "dicofre": "130530",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Uniao das freguesias de Nespereira e Casais",
         "dicofre": "130531",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Lousada",
         "freguesia": "Uniao das freguesias de Silvares, Pias, Nogueira e Alvarenga",
         "dicofre": "130532",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "aguas Santas",
         "dicofre": "130601",
         "brasao": "https://dados.gov.pt/s/brasoes/130601.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "Folgosa",
         "dicofre": "130603",
         "brasao": "https://dados.gov.pt/s/brasoes/130603.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "Milheiros",
         "dicofre": "130608",
         "brasao": "https://dados.gov.pt/s/brasoes/130608.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "Moreira",
         "dicofre": "130609",
         "brasao": "https://dados.gov.pt/s/brasoes/130609.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "Sao Pedro Fins",
         "dicofre": "130613",
         "brasao": "https://dados.gov.pt/s/brasoes/130613.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "Vila Nova da Telha",
         "dicofre": "130616",
         "brasao": "https://dados.gov.pt/s/brasoes/130616.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "Pedroucos",
         "dicofre": "130617",
         "brasao": "https://dados.gov.pt/s/brasoes/130617.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "Castelo da Maia",
         "dicofre": "130618",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "Cidade da Maia",
         "dicofre": "130619",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Maia",
         "freguesia": "Nogueira e Silva Escura",
         "dicofre": "130620",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Banho e Carvalhosa",
         "dicofre": "130704",
         "brasao": "https://dados.gov.pt/s/brasoes/130704.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Constance",
         "dicofre": "130705",
         "brasao": "https://dados.gov.pt/s/brasoes/130705.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Soalhaes",
         "dicofre": "130722",
         "brasao": "https://dados.gov.pt/s/brasoes/130722.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Sobretamega",
         "dicofre": "130723",
         "brasao": "https://dados.gov.pt/s/brasoes/130723.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Tabuado",
         "dicofre": "130724",
         "brasao": "https://dados.gov.pt/s/brasoes/130724.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Vila Boa do Bispo",
         "dicofre": "130730",
         "brasao": "https://dados.gov.pt/s/brasoes/130730.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Alpendorada, Varzea e Torrao",
         "dicofre": "130732",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Avessadas e Rosem",
         "dicofre": "130733",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Bem Viver",
         "dicofre": "130734",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Santo Isidoro e Livracao",
         "dicofre": "130735",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Marco",
         "dicofre": "130736",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Paredes de Viadores e Manhuncelos",
         "dicofre": "130737",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Penha Longa e Pacos de Gaiolo",
         "dicofre": "130738",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Sande e Sao Lourenco do Douro",
         "dicofre": "130739",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Varzea, Aliviada e Folhada",
         "dicofre": "130740",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Marco de Canaveses",
         "freguesia": "Vila Boa de Quires e Maureles",
         "dicofre": "130741",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Matosinhos",
         "freguesia": "Uniao das freguesias de Custoias, Leca do Balio e Guifoes",
         "dicofre": "130811",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Matosinhos",
         "freguesia": "Uniao das freguesias de Matosinhos e Leca da Palmeira",
         "dicofre": "130812",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Matosinhos",
         "freguesia": "Uniao das freguesias de Perafita, Lavra e Santa Cruz do Bispo",
         "dicofre": "130813",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Matosinhos",
         "freguesia": "Uniao das freguesias de Sao Mamede de Infesta e Senhora da Hora",
         "dicofre": "130814",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Carvalhosa",
         "dicofre": "130902",
         "brasao": "https://dados.gov.pt/s/brasoes/130902.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Eiriz",
         "dicofre": "130904",
         "brasao": "https://dados.gov.pt/s/brasoes/130904.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Ferreira",
         "dicofre": "130905",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Figueiro",
         "dicofre": "130906",
         "brasao": "https://dados.gov.pt/s/brasoes/130906.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Freamunde",
         "dicofre": "130908",
         "brasao": "https://dados.gov.pt/s/brasoes/130908.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Meixomil",
         "dicofre": "130910",
         "brasao": "https://dados.gov.pt/s/brasoes/130910.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Penamaior",
         "dicofre": "130913",
         "brasao": "https://dados.gov.pt/s/brasoes/130913.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Raimonda",
         "dicofre": "130914",
         "brasao": "https://dados.gov.pt/s/brasoes/130914.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Seroa",
         "dicofre": "130916",
         "brasao": "https://dados.gov.pt/s/brasoes/130916.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Frazao Arreigada",
         "dicofre": "130917",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Pacos de Ferreira",
         "dicofre": "130918",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Pacos de Ferreira",
         "freguesia": "Sanfins Lamoso Codessos",
         "dicofre": "130919",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Aguiar de Sousa",
         "dicofre": "131001",
         "brasao": "https://dados.gov.pt/s/brasoes/131001.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Astromil",
         "dicofre": "131002",
         "brasao": "https://dados.gov.pt/s/brasoes/131002.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Baltar",
         "dicofre": "131003",
         "brasao": "https://dados.gov.pt/s/brasoes/131003.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Beire",
         "dicofre": "131004",
         "brasao": "https://dados.gov.pt/s/brasoes/131004.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Cete",
         "dicofre": "131008",
         "brasao": "https://dados.gov.pt/s/brasoes/131008.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Cristelo",
         "dicofre": "131009",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Duas Igrejas",
         "dicofre": "131010",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Gandra",
         "dicofre": "131011",
         "brasao": "https://dados.gov.pt/s/brasoes/131011.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Lordelo",
         "dicofre": "131013",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Louredo",
         "dicofre": "131014",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Parada de Todeia",
         "dicofre": "131017",
         "brasao": "https://dados.gov.pt/s/brasoes/131017.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Rebordosa",
         "dicofre": "131018",
         "brasao": "https://dados.gov.pt/s/brasoes/131018.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Recarei",
         "dicofre": "131019",
         "brasao": "https://dados.gov.pt/s/brasoes/131019.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Sobreira",
         "dicofre": "131020",
         "brasao": "https://dados.gov.pt/s/brasoes/131020.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Sobrosa",
         "dicofre": "131021",
         "brasao": "https://dados.gov.pt/s/brasoes/131021.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Vandoma",
         "dicofre": "131022",
         "brasao": "https://dados.gov.pt/s/brasoes/131022.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Vilela",
         "dicofre": "131024",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Paredes",
         "freguesia": "Paredes",
         "dicofre": "131025",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Abragao",
         "dicofre": "131101",
         "brasao": "https://dados.gov.pt/s/brasoes/131101.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Boelhe",
         "dicofre": "131102",
         "brasao": "https://dados.gov.pt/s/brasoes/131102.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Bustelo",
         "dicofre": "131103",
         "brasao": "https://dados.gov.pt/s/brasoes/131103.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Cabeca Santa",
         "dicofre": "131104",
         "brasao": "https://dados.gov.pt/s/brasoes/131104.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Canelas",
         "dicofre": "131105",
         "brasao": "https://dados.gov.pt/s/brasoes/131105.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Capela",
         "dicofre": "131106",
         "brasao": "https://dados.gov.pt/s/brasoes/131106.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Casteloes",
         "dicofre": "131107",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Croca",
         "dicofre": "131108",
         "brasao": "https://dados.gov.pt/s/brasoes/131108.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Duas Igrejas",
         "dicofre": "131109",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Eja",
         "dicofre": "131110",
         "brasao": "https://dados.gov.pt/s/brasoes/131110.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Fonte Arcada",
         "dicofre": "131112",
         "brasao": "https://dados.gov.pt/s/brasoes/131112.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Galegos",
         "dicofre": "131113",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Irivo",
         "dicofre": "131115",
         "brasao": "https://dados.gov.pt/s/brasoes/131115.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Oldroes",
         "dicofre": "131121",
         "brasao": "https://dados.gov.pt/s/brasoes/131121.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Paco de Sousa",
         "dicofre": "131122",
         "brasao": "https://dados.gov.pt/s/brasoes/131122.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Perozelo",
         "dicofre": "131125",
         "brasao": "https://dados.gov.pt/s/brasoes/131125.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Rans",
         "dicofre": "131128",
         "brasao": "https://dados.gov.pt/s/brasoes/131128.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Rio de Moinhos",
         "dicofre": "131129",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Recezinhos (Sao Mamede)",
         "dicofre": "131132",
         "brasao": "https://dados.gov.pt/s/brasoes/131132.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Recezinhos (Sao Martinho)",
         "dicofre": "131133",
         "brasao": "https://dados.gov.pt/s/brasoes/131133.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Sebolido",
         "dicofre": "131134",
         "brasao": "https://dados.gov.pt/s/brasoes/131134.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Valpedre",
         "dicofre": "131136",
         "brasao": "https://dados.gov.pt/s/brasoes/131136.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Rio Mau",
         "dicofre": "131138",
         "brasao": "https://dados.gov.pt/s/brasoes/131138.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Penafiel",
         "dicofre": "131139",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Luzim e Vila Cova",
         "dicofre": "131140",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Guilhufe e Urro",
         "dicofre": "131141",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Lagares e Figueira",
         "dicofre": "131142",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Penafiel",
         "freguesia": "Termas de Sao Vicente",
         "dicofre": "131143",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Porto",
         "freguesia": "Bonfim",
         "dicofre": "131202",
         "brasao": "https://dados.gov.pt/s/brasoes/131202.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Porto",
         "freguesia": "Campanha",
         "dicofre": "131203",
         "brasao": "https://dados.gov.pt/s/brasoes/131203.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Porto",
         "freguesia": "Paranhos",
         "dicofre": "131210",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Porto",
         "freguesia": "Ramalde",
         "dicofre": "131211",
         "brasao": "https://dados.gov.pt/s/brasoes/131211.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Porto",
         "freguesia": "Uniao das freguesias de Aldoar, Foz do Douro e Nevogilde",
         "dicofre": "131216",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Porto",
         "freguesia": "Uniao das freguesias de Cedofeita, Santo Ildefonso, Se, Miragaia, Sao Nicolau e Vitoria",
         "dicofre": "131217",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Porto",
         "freguesia": "Uniao das freguesias de Lordelo do Ouro e Massarelos",
         "dicofre": "131218",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Povoa de Varzim",
         "freguesia": "Balazar",
         "dicofre": "131305",
         "brasao": "https://dados.gov.pt/s/brasoes/131305.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Povoa de Varzim",
         "freguesia": "Estela",
         "dicofre": "131307",
         "brasao": "https://dados.gov.pt/s/brasoes/131307.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Povoa de Varzim",
         "freguesia": "Laundos",
         "dicofre": "131308",
         "brasao": "https://dados.gov.pt/s/brasoes/131308.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Povoa de Varzim",
         "freguesia": "Rates",
         "dicofre": "131311",
         "brasao": "https://dados.gov.pt/s/brasoes/131311.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Povoa de Varzim",
         "freguesia": "Uniao das freguesias de Aver-o-Mar, Amorim e Terroso",
         "dicofre": "131313",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Povoa de Varzim",
         "freguesia": "Uniao das freguesias de Agucadoura e Navais",
         "dicofre": "131314",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Povoa de Varzim",
         "freguesia": "Uniao das freguesias da Povoa de Varzim, Beiriz e Argivai",
         "dicofre": "131315",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Agrela",
         "dicofre": "131401",
         "brasao": "https://dados.gov.pt/s/brasoes/131401.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "agua Longa",
         "dicofre": "131402",
         "brasao": "https://dados.gov.pt/s/brasoes/131402.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Aves",
         "dicofre": "131405",
         "brasao": "https://dados.gov.pt/s/brasoes/131405.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Monte Cordova",
         "dicofre": "131413",
         "brasao": "https://dados.gov.pt/s/brasoes/131413.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Rebordoes",
         "dicofre": "131416",
         "brasao": "https://dados.gov.pt/s/brasoes/131416.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Reguenga",
         "dicofre": "131418",
         "brasao": "https://dados.gov.pt/s/brasoes/131418.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Roriz",
         "dicofre": "131419",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Negrelos (Sao Tome)",
         "dicofre": "131430",
         "brasao": "https://dados.gov.pt/s/brasoes/131430.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Vilarinho",
         "dicofre": "131432",
         "brasao": "https://dados.gov.pt/s/brasoes/131432.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Uniao das freguesias de Areias, Sequeiro, Lama e Palmeira",
         "dicofre": "131433",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Vila Nova do Campo",
         "dicofre": "131434",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Uniao das freguesias de Carreira e Refojos de Riba de Ave",
         "dicofre": "131435",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Uniao das freguesias de Lamelas e Guimarei",
         "dicofre": "131436",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Santo Tirso",
         "freguesia": "Uniao das freguesias de Santo Tirso, Couto (Santa Cristina e Sao Miguel) e Burgaes",
         "dicofre": "131437",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Valongo",
         "freguesia": "Alfena",
         "dicofre": "131501",
         "brasao": "https://dados.gov.pt/s/brasoes/131501.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Valongo",
         "freguesia": "Ermesinde",
         "dicofre": "131503",
         "brasao": "https://dados.gov.pt/s/brasoes/131503.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Valongo",
         "freguesia": "Valongo",
         "dicofre": "131505",
         "brasao": "https://dados.gov.pt/s/brasoes/131505.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Valongo",
         "freguesia": "Uniao das freguesias de Campo e Sobrado",
         "dicofre": "131506",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "arvore",
         "dicofre": "131602",
         "brasao": "https://dados.gov.pt/s/brasoes/131602.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Aveleda",
         "dicofre": "131603",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Azurara",
         "dicofre": "131604",
         "brasao": "https://dados.gov.pt/s/brasoes/131604.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Fajozes",
         "dicofre": "131607",
         "brasao": "https://dados.gov.pt/s/brasoes/131607.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Giao",
         "dicofre": "131610",
         "brasao": "https://dados.gov.pt/s/brasoes/131610.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Guilhabreu",
         "dicofre": "131611",
         "brasao": "https://dados.gov.pt/s/brasoes/131611.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Junqueira",
         "dicofre": "131612",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Labruge",
         "dicofre": "131613",
         "brasao": "https://dados.gov.pt/s/brasoes/131613.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Macieira da Maia",
         "dicofre": "131614",
         "brasao": "https://dados.gov.pt/s/brasoes/131614.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Mindelo",
         "dicofre": "131616",
         "brasao": "https://dados.gov.pt/s/brasoes/131616.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Modivas",
         "dicofre": "131617",
         "brasao": "https://dados.gov.pt/s/brasoes/131617.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Vila Cha",
         "dicofre": "131627",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Vila do Conde",
         "dicofre": "131628",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Vilar de Pinheiro",
         "dicofre": "131630",
         "brasao": "https://dados.gov.pt/s/brasoes/131630.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Uniao das freguesias de Bagunte, Ferreiro, Outeiro Maior e Parada",
         "dicofre": "131631",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Uniao das freguesias de Fornelo e Vairao",
         "dicofre": "131632",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Uniao das freguesias de Malta e Canidelo",
         "dicofre": "131633",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Uniao das freguesias de Retorta e Tougues",
         "dicofre": "131634",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Uniao das freguesias de Rio Mau e Arcos",
         "dicofre": "131635",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Uniao das freguesias de Touguinha e Touguinho",
         "dicofre": "131636",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila do Conde",
         "freguesia": "Uniao das freguesias de Vilar e Mosteiro",
         "dicofre": "131637",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Arcozelo",
         "dicofre": "131701",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Avintes",
         "dicofre": "131702",
         "brasao": "https://dados.gov.pt/s/brasoes/131702.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Canelas",
         "dicofre": "131703",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Canidelo",
         "dicofre": "131704",
         "brasao": "https://dados.gov.pt/s/brasoes/131704.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Madalena",
         "dicofre": "131709",
         "brasao": "https://dados.gov.pt/s/brasoes/131709.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Oliveira do Douro",
         "dicofre": "131712",
         "brasao": "https://dados.gov.pt/s/brasoes/131712.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Sao Felix da Marinha",
         "dicofre": "131717",
         "brasao": "https://dados.gov.pt/s/brasoes/131717.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Vilar de Andorinho",
         "dicofre": "131723",
         "brasao": "https://dados.gov.pt/s/brasoes/131723.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Uniao das freguesias de Grijo e Sermonde",
         "dicofre": "131725",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Uniao das freguesias de Gulpilhares e Valadares",
         "dicofre": "131726",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Uniao das freguesias de Mafamude e Vilar do Paraiso",
         "dicofre": "131727",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Uniao das freguesias de Pedroso e Seixezelo",
         "dicofre": "131728",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Uniao das freguesias de Sandim, Olival, Lever e Crestuma",
         "dicofre": "131729",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Uniao das freguesias de Santa Marinha e Sao Pedro da Afurada",
         "dicofre": "131730",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Vila Nova de Gaia",
         "freguesia": "Uniao das freguesias de Serzedo e Perosinho",
         "dicofre": "131731",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Trofa",
         "freguesia": "Covelas",
         "dicofre": "131806",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Trofa",
         "freguesia": "Muro",
         "dicofre": "131808",
         "brasao": "https://dados.gov.pt/s/brasoes/131808.png"
      },
      {
         "distrito": "Porto",
         "concelho": "Trofa",
         "freguesia": "Uniao das freguesias de Alvarelhos e Guidoes",
         "dicofre": "131809",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Trofa",
         "freguesia": "Uniao das freguesias de Bougado (Sao Martinho e Santiago)",
         "dicofre": "131810",
         "brasao": ""
      },
      {
         "distrito": "Porto",
         "concelho": "Trofa",
         "freguesia": "Uniao das freguesias de Coronado (Sao Romao e Sao Mamede)",
         "dicofre": "131811",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Bemposta",
         "dicofre": "140104",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Martinchel",
         "dicofre": "140105",
         "brasao": "https://dados.gov.pt/s/brasoes/140105.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Mouriscas",
         "dicofre": "140106",
         "brasao": "https://dados.gov.pt/s/brasoes/140106.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Pego",
         "dicofre": "140107",
         "brasao": "https://dados.gov.pt/s/brasoes/140107.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Rio de Moinhos",
         "dicofre": "140108",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Tramagal",
         "dicofre": "140115",
         "brasao": "https://dados.gov.pt/s/brasoes/140115.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Fontes",
         "dicofre": "140118",
         "brasao": "https://dados.gov.pt/s/brasoes/140118.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Carvalhal",
         "dicofre": "140119",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Uniao das freguesias de Abrantes (Sao Vicente e Sao Joao) e Alferrarede",
         "dicofre": "140120",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Uniao das freguesias de Aldeia do Mato e Souto",
         "dicofre": "140121",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Uniao das freguesias de Alvega e Concavada",
         "dicofre": "140122",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Uniao das freguesias de Sao Facundo e Vale das Mos",
         "dicofre": "140123",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Abrantes",
         "freguesia": "Uniao das freguesias de Sao Miguel do Rio Torto e Rossio ao Sul do Tejo",
         "dicofre": "140124",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Alcanena",
         "freguesia": "Bugalhos",
         "dicofre": "140202",
         "brasao": "https://dados.gov.pt/s/brasoes/140202.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Alcanena",
         "freguesia": "Minde",
         "dicofre": "140206",
         "brasao": "https://dados.gov.pt/s/brasoes/140206.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Alcanena",
         "freguesia": "Moitas Venda",
         "dicofre": "140207",
         "brasao": "https://dados.gov.pt/s/brasoes/140207.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Alcanena",
         "freguesia": "Monsanto",
         "dicofre": "140208",
         "brasao": "https://dados.gov.pt/s/brasoes/140208.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Alcanena",
         "freguesia": "Serra de Santo Antonio",
         "dicofre": "140209",
         "brasao": "https://dados.gov.pt/s/brasoes/140209.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Alcanena",
         "freguesia": "Uniao das freguesias de Alcanena e Vila Moreira",
         "dicofre": "140211",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Alcanena",
         "freguesia": "Uniao das freguesias de Malhou, Louriceira e Espinheiro",
         "dicofre": "140212",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Almeirim",
         "freguesia": "Almeirim",
         "dicofre": "140301",
         "brasao": "https://dados.gov.pt/s/brasoes/140301.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Almeirim",
         "freguesia": "Benfica do Ribatejo",
         "dicofre": "140302",
         "brasao": "https://dados.gov.pt/s/brasoes/140302.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Almeirim",
         "freguesia": "Fazendas de Almeirim",
         "dicofre": "140303",
         "brasao": "https://dados.gov.pt/s/brasoes/140303.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Almeirim",
         "freguesia": "Raposa",
         "dicofre": "140304",
         "brasao": "https://dados.gov.pt/s/brasoes/140304.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Alpiarca",
         "freguesia": "Alpiarca",
         "dicofre": "140401",
         "brasao": "https://dados.gov.pt/s/brasoes/140401.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Benavente",
         "freguesia": "Benavente",
         "dicofre": "140501",
         "brasao": "https://dados.gov.pt/s/brasoes/140501.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Benavente",
         "freguesia": "Samora Correia",
         "dicofre": "140502",
         "brasao": "https://dados.gov.pt/s/brasoes/140502.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Benavente",
         "freguesia": "Santo Estevao",
         "dicofre": "140503",
         "brasao": "https://dados.gov.pt/s/brasoes/140503.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Benavente",
         "freguesia": "Barrosa",
         "dicofre": "140504",
         "brasao": "https://dados.gov.pt/s/brasoes/140504.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Cartaxo",
         "freguesia": "Pontevel",
         "dicofre": "140604",
         "brasao": "https://dados.gov.pt/s/brasoes/140604.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Cartaxo",
         "freguesia": "Valada",
         "dicofre": "140605",
         "brasao": "https://dados.gov.pt/s/brasoes/140605.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Cartaxo",
         "freguesia": "Vila Cha de Ourique",
         "dicofre": "140607",
         "brasao": "https://dados.gov.pt/s/brasoes/140607.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Cartaxo",
         "freguesia": "Vale da Pedra",
         "dicofre": "140608",
         "brasao": "https://dados.gov.pt/s/brasoes/140608.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Cartaxo",
         "freguesia": "Uniao das freguesias do Cartaxo e Vale da Pinta",
         "dicofre": "140609",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Cartaxo",
         "freguesia": "Uniao das freguesias de Ereira e Lapa",
         "dicofre": "140610",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Chamusca",
         "freguesia": "Ulme",
         "dicofre": "140704",
         "brasao": "https://dados.gov.pt/s/brasoes/140704.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Chamusca",
         "freguesia": "Vale de Cavalos",
         "dicofre": "140705",
         "brasao": "https://dados.gov.pt/s/brasoes/140705.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Chamusca",
         "freguesia": "Carregueira",
         "dicofre": "140707",
         "brasao": "https://dados.gov.pt/s/brasoes/140707.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Chamusca",
         "freguesia": "Uniao das freguesias da Chamusca e Pinheiro Grande",
         "dicofre": "140708",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Chamusca",
         "freguesia": "Uniao das freguesias de Parreira e Chouto",
         "dicofre": "140709",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Constancia",
         "freguesia": "Constancia",
         "dicofre": "140801",
         "brasao": "https://dados.gov.pt/s/brasoes/140801.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Constancia",
         "freguesia": "Montalvo",
         "dicofre": "140802",
         "brasao": "https://dados.gov.pt/s/brasoes/140802.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Constancia",
         "freguesia": "Santa Margarida da Coutada",
         "dicofre": "140803",
         "brasao": "https://dados.gov.pt/s/brasoes/140803.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Coruche",
         "freguesia": "Couco",
         "dicofre": "140902",
         "brasao": "https://dados.gov.pt/s/brasoes/140902.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Coruche",
         "freguesia": "Sao Jose da Lamarosa",
         "dicofre": "140903",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Coruche",
         "freguesia": "Branca",
         "dicofre": "140905",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Coruche",
         "freguesia": "Biscainho",
         "dicofre": "140907",
         "brasao": "https://dados.gov.pt/s/brasoes/140907.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Coruche",
         "freguesia": "Santana do Mato",
         "dicofre": "140908",
         "brasao": "https://dados.gov.pt/s/brasoes/140908.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Coruche",
         "freguesia": "Uniao das freguesias de Coruche, Fajarda e Erra",
         "dicofre": "140909",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Entroncamento",
         "freguesia": "Sao Joao Baptista",
         "dicofre": "141001",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Entroncamento",
         "freguesia": "Nossa Senhora de Fatima",
         "dicofre": "141002",
         "brasao": "https://dados.gov.pt/s/brasoes/141002.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ferreira do Zezere",
         "freguesia": "aguas Belas",
         "dicofre": "141101",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Ferreira do Zezere",
         "freguesia": "Beco",
         "dicofre": "141103",
         "brasao": "https://dados.gov.pt/s/brasoes/141103.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ferreira do Zezere",
         "freguesia": "Chaos",
         "dicofre": "141104",
         "brasao": "https://dados.gov.pt/s/brasoes/141104.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ferreira do Zezere",
         "freguesia": "Ferreira do Zezere",
         "dicofre": "141106",
         "brasao": "https://dados.gov.pt/s/brasoes/141106.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ferreira do Zezere",
         "freguesia": "Igreja Nova do Sobral",
         "dicofre": "141107",
         "brasao": "https://dados.gov.pt/s/brasoes/141107.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ferreira do Zezere",
         "freguesia": "Nossa Senhora do Pranto",
         "dicofre": "141110",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Ferreira do Zezere",
         "freguesia": "Uniao das freguesias de Areias e Pias",
         "dicofre": "141111",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Golega",
         "freguesia": "Azinhaga",
         "dicofre": "141201",
         "brasao": "https://dados.gov.pt/s/brasoes/141201.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Golega",
         "freguesia": "Golega",
         "dicofre": "141202",
         "brasao": "https://dados.gov.pt/s/brasoes/141202.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Golega",
         "freguesia": "Pombalinho",
         "dicofre": "141203",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Macao",
         "freguesia": "Amendoa",
         "dicofre": "141302",
         "brasao": "https://dados.gov.pt/s/brasoes/141302.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Macao",
         "freguesia": "Cardigos",
         "dicofre": "141303",
         "brasao": "https://dados.gov.pt/s/brasoes/141303.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Macao",
         "freguesia": "Carvoeiro",
         "dicofre": "141304",
         "brasao": "https://dados.gov.pt/s/brasoes/141304.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Macao",
         "freguesia": "Envendos",
         "dicofre": "141305",
         "brasao": "https://dados.gov.pt/s/brasoes/141305.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Macao",
         "freguesia": "Ortiga",
         "dicofre": "141307",
         "brasao": "https://dados.gov.pt/s/brasoes/141307.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Macao",
         "freguesia": "Uniao das freguesias de Macao, Penhascoso e Aboboreira",
         "dicofre": "141309",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Alcobertas",
         "dicofre": "141401",
         "brasao": "https://dados.gov.pt/s/brasoes/141401.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Arrouquelas",
         "dicofre": "141402",
         "brasao": "https://dados.gov.pt/s/brasoes/141402.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Fraguas",
         "dicofre": "141405",
         "brasao": "https://dados.gov.pt/s/brasoes/141405.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Rio Maior",
         "dicofre": "141408",
         "brasao": "https://dados.gov.pt/s/brasoes/141408.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Asseiceira",
         "dicofre": "141410",
         "brasao": "https://dados.gov.pt/s/brasoes/141410.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Sao Sebastiao",
         "dicofre": "141411",
         "brasao": "https://dados.gov.pt/s/brasoes/141411.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Uniao das freguesias de Azambujeira e Malaqueijo",
         "dicofre": "141415",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Uniao das freguesias de Marmeleira e Assentiz",
         "dicofre": "141416",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Uniao das freguesias de Outeiro da Corticada e Arruda dos Pisoes",
         "dicofre": "141417",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Rio Maior",
         "freguesia": "Uniao das freguesias de Sao Joao da Ribeira e Ribeira de Sao Joao",
         "dicofre": "141418",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Salvaterra de Magos",
         "freguesia": "Marinhais",
         "dicofre": "141502",
         "brasao": "https://dados.gov.pt/s/brasoes/141502.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Salvaterra de Magos",
         "freguesia": "Muge",
         "dicofre": "141503",
         "brasao": "https://dados.gov.pt/s/brasoes/141503.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Salvaterra de Magos",
         "freguesia": "Uniao das freguesias de Gloria do Ribatejo e Granho",
         "dicofre": "141507",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Salvaterra de Magos",
         "freguesia": "Uniao das freguesias de Salvaterra de Magos e Foros de Salvaterra",
         "dicofre": "141508",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Abitureiras",
         "dicofre": "141601",
         "brasao": "https://dados.gov.pt/s/brasoes/141601.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Abra",
         "dicofre": "141602",
         "brasao": "https://dados.gov.pt/s/brasoes/141602.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Alcanede",
         "dicofre": "141604",
         "brasao": "https://dados.gov.pt/s/brasoes/141604.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Alcanhoes",
         "dicofre": "141605",
         "brasao": "https://dados.gov.pt/s/brasoes/141605.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Almoster",
         "dicofre": "141606",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Amiais de Baixo",
         "dicofre": "141607",
         "brasao": "https://dados.gov.pt/s/brasoes/141607.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Arneiro das Milharicas",
         "dicofre": "141608",
         "brasao": "https://dados.gov.pt/s/brasoes/141608.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Mocarria",
         "dicofre": "141613",
         "brasao": "https://dados.gov.pt/s/brasoes/141613.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Pernes",
         "dicofre": "141614",
         "brasao": "https://dados.gov.pt/s/brasoes/141614.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Povoa da Isenta",
         "dicofre": "141616",
         "brasao": "https://dados.gov.pt/s/brasoes/141616.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Vale de Santarem",
         "dicofre": "141625",
         "brasao": "https://dados.gov.pt/s/brasoes/141625.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Gancaria",
         "dicofre": "141628",
         "brasao": "https://dados.gov.pt/s/brasoes/141628.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Uniao das freguesias de Achete, Azoia de Baixo e Povoa de Santarem",
         "dicofre": "141629",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Uniao das freguesias de Azoia de Cima e Tremes",
         "dicofre": "141630",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Uniao das freguesias de Casevel e Vaqueiros",
         "dicofre": "141631",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Uniao das freguesias de Romeira e Varzea",
         "dicofre": "141632",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Uniao de freguesias da cidade de Santarem",
         "dicofre": "141633",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Santarem",
         "freguesia": "Uniao das freguesias de Sao Vicente do Paul e Vale de Figueira",
         "dicofre": "141634",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Sardoal",
         "freguesia": "Alcaravela",
         "dicofre": "141701",
         "brasao": "https://dados.gov.pt/s/brasoes/141701.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Sardoal",
         "freguesia": "Santiago de Montalegre",
         "dicofre": "141702",
         "brasao": "https://dados.gov.pt/s/brasoes/141702.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Sardoal",
         "freguesia": "Sardoal",
         "dicofre": "141703",
         "brasao": "https://dados.gov.pt/s/brasoes/141703.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Sardoal",
         "freguesia": "Valhascos",
         "dicofre": "141704",
         "brasao": "https://dados.gov.pt/s/brasoes/141704.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Asseiceira",
         "dicofre": "141802",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Carregueiros",
         "dicofre": "141804",
         "brasao": "https://dados.gov.pt/s/brasoes/141804.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Olalhas",
         "dicofre": "141808",
         "brasao": "https://dados.gov.pt/s/brasoes/141808.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Paialvo",
         "dicofre": "141809",
         "brasao": "https://dados.gov.pt/s/brasoes/141809.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Sao Pedro de Tomar",
         "dicofre": "141813",
         "brasao": "https://dados.gov.pt/s/brasoes/141813.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Sabacheira",
         "dicofre": "141814",
         "brasao": "https://dados.gov.pt/s/brasoes/141814.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Uniao das freguesias de Alem da Ribeira e Pedreira",
         "dicofre": "141817",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Uniao das freguesias de Casais e Alviobeira",
         "dicofre": "141818",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Uniao das freguesias de Madalena e Beselga",
         "dicofre": "141819",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Uniao das freguesias de Serra e Junceira",
         "dicofre": "141820",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Tomar",
         "freguesia": "Uniao das freguesias de Tomar (Sao Joao Baptista) e Santa Maria dos Olivais",
         "dicofre": "141821",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Assentiz",
         "dicofre": "141902",
         "brasao": "https://dados.gov.pt/s/brasoes/141902.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Chancelaria",
         "dicofre": "141904",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Pedrogao",
         "dicofre": "141909",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Riachos",
         "dicofre": "141910",
         "brasao": "https://dados.gov.pt/s/brasoes/141910.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Zibreira",
         "dicofre": "141916",
         "brasao": "https://dados.gov.pt/s/brasoes/141916.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Meia Via",
         "dicofre": "141917",
         "brasao": "https://dados.gov.pt/s/brasoes/141917.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Uniao das freguesias de Brogueira, Parceiros de Igreja e Alcorochel",
         "dicofre": "141918",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Uniao das freguesias de Olaia e Paco",
         "dicofre": "141919",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Uniao das freguesias de Torres Novas (Santa Maria, Salvador e Santiago)",
         "dicofre": "141920",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Torres Novas",
         "freguesia": "Uniao das freguesias de Torres Novas (Sao Pedro), Lapas e Ribeira Branca",
         "dicofre": "141921",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Vila Nova da Barquinha",
         "freguesia": "Atalaia",
         "dicofre": "142001",
         "brasao": "https://dados.gov.pt/s/brasoes/142001.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Vila Nova da Barquinha",
         "freguesia": "Praia do Ribatejo",
         "dicofre": "142002",
         "brasao": "https://dados.gov.pt/s/brasoes/142002.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Vila Nova da Barquinha",
         "freguesia": "Tancos",
         "dicofre": "142003",
         "brasao": "https://dados.gov.pt/s/brasoes/142003.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Vila Nova da Barquinha",
         "freguesia": "Vila Nova da Barquinha",
         "dicofre": "142006",
         "brasao": "https://dados.gov.pt/s/brasoes/142006.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Alburitel",
         "dicofre": "142101",
         "brasao": "https://dados.gov.pt/s/brasoes/142101.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Atouguia",
         "dicofre": "142102",
         "brasao": "https://dados.gov.pt/s/brasoes/142102.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Caxarias",
         "dicofre": "142104",
         "brasao": "https://dados.gov.pt/s/brasoes/142104.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Espite",
         "dicofre": "142105",
         "brasao": "https://dados.gov.pt/s/brasoes/142105.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Fatima",
         "dicofre": "142106",
         "brasao": "https://dados.gov.pt/s/brasoes/142106.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Nossa Senhora das Misericordias",
         "dicofre": "142111",
         "brasao": "https://dados.gov.pt/s/brasoes/142111.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Seica",
         "dicofre": "142113",
         "brasao": "https://dados.gov.pt/s/brasoes/142113.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Urqueira",
         "dicofre": "142114",
         "brasao": "https://dados.gov.pt/s/brasoes/142114.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Nossa Senhora da Piedade",
         "dicofre": "142115",
         "brasao": "https://dados.gov.pt/s/brasoes/142115.png"
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Uniao das freguesias de Freixianda, Ribeira do Farrio e Formigais",
         "dicofre": "142119",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Uniao das freguesias de Gondemaria e Olival",
         "dicofre": "142120",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Uniao das freguesias de Matas e Cercal",
         "dicofre": "142121",
         "brasao": ""
      },
      {
         "distrito": "Santarem",
         "concelho": "Ourem",
         "freguesia": "Uniao das freguesias de Rio de Couros e Casal dos Bernardos",
         "dicofre": "142122",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Alcacer do Sal",
         "freguesia": "Torrao",
         "dicofre": "150104",
         "brasao": "https://dados.gov.pt/s/brasoes/150104.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Alcacer do Sal",
         "freguesia": "Sao Martinho",
         "dicofre": "150105",
         "brasao": "https://dados.gov.pt/s/brasoes/150105.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Alcacer do Sal",
         "freguesia": "Comporta",
         "dicofre": "150106",
         "brasao": "https://dados.gov.pt/s/brasoes/150106.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Alcacer do Sal",
         "freguesia": "Uniao das freguesias de Alcacer do Sal (Santa Maria do Castelo e Santiago) e Santa Susana",
         "dicofre": "150107",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Alcochete",
         "freguesia": "Alcochete",
         "dicofre": "150201",
         "brasao": "https://dados.gov.pt/s/brasoes/150201.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Alcochete",
         "freguesia": "Samouco",
         "dicofre": "150202",
         "brasao": "https://dados.gov.pt/s/brasoes/150202.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Alcochete",
         "freguesia": "Sao Francisco",
         "dicofre": "150203",
         "brasao": "https://dados.gov.pt/s/brasoes/150203.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Almada",
         "freguesia": "Costa da Caparica",
         "dicofre": "150303",
         "brasao": "https://dados.gov.pt/s/brasoes/150303.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Almada",
         "freguesia": "Uniao das freguesias de Almada, Cova da Piedade, Pragal e Cacilhas",
         "dicofre": "150312",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Almada",
         "freguesia": "Uniao das freguesias de Caparica e Trafaria",
         "dicofre": "150313",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Almada",
         "freguesia": "Uniao das freguesias de Charneca de Caparica e Sobreda",
         "dicofre": "150314",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Almada",
         "freguesia": "Uniao das freguesias de Laranjeiro e Feijo",
         "dicofre": "150315",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Barreiro",
         "freguesia": "Santo Antonio da Charneca",
         "dicofre": "150407",
         "brasao": "https://dados.gov.pt/s/brasoes/150407.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Barreiro",
         "freguesia": "Uniao das freguesias de Alto do Seixalinho, Santo Andre e Verderena",
         "dicofre": "150409",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Barreiro",
         "freguesia": "Uniao das freguesias de Barreiro e Lavradio",
         "dicofre": "150410",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Barreiro",
         "freguesia": "Uniao das freguesias de Palhais e Coina",
         "dicofre": "150411",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Grandola",
         "freguesia": "Azinheira dos Barros e Sao Mamede do Sadao",
         "dicofre": "150501",
         "brasao": "https://dados.gov.pt/s/brasoes/150501.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Grandola",
         "freguesia": "Melides",
         "dicofre": "150503",
         "brasao": "https://dados.gov.pt/s/brasoes/150503.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Grandola",
         "freguesia": "Carvalhal",
         "dicofre": "150505",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Grandola",
         "freguesia": "Uniao das freguesias de Grandola e Santa Margarida da Serra",
         "dicofre": "150506",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Moita",
         "freguesia": "Alhos Vedros",
         "dicofre": "150601",
         "brasao": "https://dados.gov.pt/s/brasoes/150601.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Moita",
         "freguesia": "Moita",
         "dicofre": "150603",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Moita",
         "freguesia": "Uniao das freguesias de Baixa da Banheira e Vale da Amoreira",
         "dicofre": "150607",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Moita",
         "freguesia": "Uniao das freguesias de Gaio-Rosario e Sarilhos Pequenos",
         "dicofre": "150608",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Montijo",
         "freguesia": "Canha",
         "dicofre": "150701",
         "brasao": "https://dados.gov.pt/s/brasoes/150701.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Montijo",
         "freguesia": "Sarilhos Grandes",
         "dicofre": "150704",
         "brasao": "https://dados.gov.pt/s/brasoes/150704.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Montijo",
         "freguesia": "Uniao das freguesias de Atalaia e Alto Estanqueiro-Jardia",
         "dicofre": "150709",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Montijo",
         "freguesia": "Uniao das freguesias de Montijo e Afonsoeiro",
         "dicofre": "150710",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Montijo",
         "freguesia": "Uniao das freguesias de Pegoes",
         "dicofre": "150711",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Palmela",
         "freguesia": "Palmela",
         "dicofre": "150802",
         "brasao": "https://dados.gov.pt/s/brasoes/150802.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Palmela",
         "freguesia": "Pinhal Novo",
         "dicofre": "150803",
         "brasao": "https://dados.gov.pt/s/brasoes/150803.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Palmela",
         "freguesia": "Quinta do Anjo",
         "dicofre": "150804",
         "brasao": "https://dados.gov.pt/s/brasoes/150804.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Palmela",
         "freguesia": "Uniao das freguesias de Poceirao e Marateca",
         "dicofre": "150806",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Santiago do Cacem",
         "freguesia": "Abela",
         "dicofre": "150901",
         "brasao": "https://dados.gov.pt/s/brasoes/150901.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Santiago do Cacem",
         "freguesia": "Alvalade",
         "dicofre": "150902",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Santiago do Cacem",
         "freguesia": "Cercal",
         "dicofre": "150903",
         "brasao": "https://dados.gov.pt/s/brasoes/150903.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Santiago do Cacem",
         "freguesia": "Ermidas-Sado",
         "dicofre": "150904",
         "brasao": "https://dados.gov.pt/s/brasoes/150904.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Santiago do Cacem",
         "freguesia": "Santo Andre",
         "dicofre": "150907",
         "brasao": "https://dados.gov.pt/s/brasoes/150907.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Santiago do Cacem",
         "freguesia": "Sao Francisco da Serra",
         "dicofre": "150910",
         "brasao": "https://dados.gov.pt/s/brasoes/150910.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Santiago do Cacem",
         "freguesia": "Uniao das freguesias de Santiago do Cacem, Santa Cruz e Sao Bartolomeu da Serra",
         "dicofre": "150912",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Santiago do Cacem",
         "freguesia": "Uniao das freguesias de Sao Domingos e Vale de agua",
         "dicofre": "150913",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Seixal",
         "freguesia": "Amora",
         "dicofre": "151002",
         "brasao": "https://dados.gov.pt/s/brasoes/151002.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Seixal",
         "freguesia": "Corroios",
         "dicofre": "151005",
         "brasao": "https://dados.gov.pt/s/brasoes/151005.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Seixal",
         "freguesia": "Fernao Ferro",
         "dicofre": "151006",
         "brasao": "https://dados.gov.pt/s/brasoes/151006.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Seixal",
         "freguesia": "Uniao das freguesias do Seixal, Arrentela e Aldeia de Paio Pires",
         "dicofre": "151007",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Sesimbra",
         "freguesia": "Sesimbra (Castelo)",
         "dicofre": "151101",
         "brasao": "https://dados.gov.pt/s/brasoes/151101.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Sesimbra",
         "freguesia": "Sesimbra (Santiago)",
         "dicofre": "151102",
         "brasao": "https://dados.gov.pt/s/brasoes/151102.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Sesimbra",
         "freguesia": "Quinta do Conde",
         "dicofre": "151103",
         "brasao": "https://dados.gov.pt/s/brasoes/151103.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Setubal",
         "freguesia": "Setubal (Sao Sebastiao)",
         "dicofre": "151205",
         "brasao": "https://dados.gov.pt/s/brasoes/151205.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Setubal",
         "freguesia": "Gambia-Pontes-Alto da Guerra",
         "dicofre": "151207",
         "brasao": "https://dados.gov.pt/s/brasoes/151207.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Setubal",
         "freguesia": "Sado",
         "dicofre": "151208",
         "brasao": "https://dados.gov.pt/s/brasoes/151208.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Setubal",
         "freguesia": "Uniao das freguesias de Azeitao (Sao Lourenco e Sao Simao)",
         "dicofre": "151209",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Setubal",
         "freguesia": "Uniao das freguesias de Setubal (Sao Juliao, Nossa Senhora da Anunciada e Santa Maria da Graca)",
         "dicofre": "151210",
         "brasao": ""
      },
      {
         "distrito": "Setubal",
         "concelho": "Sines",
         "freguesia": "Sines",
         "dicofre": "151301",
         "brasao": "https://dados.gov.pt/s/brasoes/151301.png"
      },
      {
         "distrito": "Setubal",
         "concelho": "Sines",
         "freguesia": "Porto Covo",
         "dicofre": "151302",
         "brasao": "https://dados.gov.pt/s/brasoes/151302.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Aboim das Chocas",
         "dicofre": "160101",
         "brasao": "https://dados.gov.pt/s/brasoes/160101.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Aguia",
         "dicofre": "160102",
         "brasao": "https://dados.gov.pt/s/brasoes/160102.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "azere",
         "dicofre": "160104",
         "brasao": "https://dados.gov.pt/s/brasoes/160104.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Cabana Maior",
         "dicofre": "160105",
         "brasao": "https://dados.gov.pt/s/brasoes/160105.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Cabreiro",
         "dicofre": "160106",
         "brasao": "https://dados.gov.pt/s/brasoes/160106.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Cendufe",
         "dicofre": "160108",
         "brasao": "https://dados.gov.pt/s/brasoes/160108.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Couto",
         "dicofre": "160109",
         "brasao": "https://dados.gov.pt/s/brasoes/160109.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Gavieira",
         "dicofre": "160113",
         "brasao": "https://dados.gov.pt/s/brasoes/160113.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Gondoriz",
         "dicofre": "160115",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Miranda",
         "dicofre": "160121",
         "brasao": "https://dados.gov.pt/s/brasoes/160121.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Monte Redondo",
         "dicofre": "160122",
         "brasao": "https://dados.gov.pt/s/brasoes/160122.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Oliveira",
         "dicofre": "160123",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Paco",
         "dicofre": "160124",
         "brasao": "https://dados.gov.pt/s/brasoes/160124.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Padroso",
         "dicofre": "160125",
         "brasao": "https://dados.gov.pt/s/brasoes/160125.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Prozelo",
         "dicofre": "160128",
         "brasao": "https://dados.gov.pt/s/brasoes/160128.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Rio Frio",
         "dicofre": "160130",
         "brasao": "https://dados.gov.pt/s/brasoes/160130.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Rio de Moinhos",
         "dicofre": "160131",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Sabadim",
         "dicofre": "160133",
         "brasao": "https://dados.gov.pt/s/brasoes/160133.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Jolda (Sao Paio)",
         "dicofre": "160142",
         "brasao": "https://dados.gov.pt/s/brasoes/160142.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Senharei",
         "dicofre": "160144",
         "brasao": "https://dados.gov.pt/s/brasoes/160144.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Sistelo",
         "dicofre": "160145",
         "brasao": "https://dados.gov.pt/s/brasoes/160145.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Soajo",
         "dicofre": "160146",
         "brasao": "https://dados.gov.pt/s/brasoes/160146.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Vale",
         "dicofre": "160149",
         "brasao": "https://dados.gov.pt/s/brasoes/160149.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Alvora e Loureda",
         "dicofre": "160152",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Arcos de Valdevez (Sao Paio) e Giela",
         "dicofre": "160153",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Arcos de Valdevez (Salvador), Vila Fonche e Parada",
         "dicofre": "160154",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Eiras e Mei",
         "dicofre": "160155",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Grade e Carralcova",
         "dicofre": "160156",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Guilhadeses e Santar",
         "dicofre": "160157",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Jolda (Madalena) e Rio Cabrao",
         "dicofre": "160158",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Padreiro (Salvador e Santa Cristina)",
         "dicofre": "160159",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Portela e Extremo",
         "dicofre": "160160",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Sao Jorge e Ermelo",
         "dicofre": "160161",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Souto e Tabaco",
         "dicofre": "160162",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Tavora (Santa Maria e Sao Vicente)",
         "dicofre": "160163",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Arcos de Valdevez",
         "freguesia": "Uniao das freguesias de Vilela, Sao Cosme e Sao Damiao e Sa",
         "dicofre": "160164",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Ancora",
         "dicofre": "160201",
         "brasao": "https://dados.gov.pt/s/brasoes/160201.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Argela",
         "dicofre": "160205",
         "brasao": "https://dados.gov.pt/s/brasoes/160205.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Dem",
         "dicofre": "160209",
         "brasao": "https://dados.gov.pt/s/brasoes/160209.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Lanhelas",
         "dicofre": "160211",
         "brasao": "https://dados.gov.pt/s/brasoes/160211.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Riba de Ancora",
         "dicofre": "160214",
         "brasao": "https://dados.gov.pt/s/brasoes/160214.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Seixas",
         "dicofre": "160215",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Vila Praia de Ancora",
         "dicofre": "160217",
         "brasao": "https://dados.gov.pt/s/brasoes/160217.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Vilar de Mouros",
         "dicofre": "160218",
         "brasao": "https://dados.gov.pt/s/brasoes/160218.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Vile",
         "dicofre": "160220",
         "brasao": "https://dados.gov.pt/s/brasoes/160220.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Uniao das freguesias de Arga (Baixo, Cima e Sao Joao)",
         "dicofre": "160221",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Uniao das freguesias de Caminha (Matriz) e Vilarelho",
         "dicofre": "160222",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Uniao das freguesias de Gondar e Orbacem",
         "dicofre": "160223",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Uniao das freguesias de Moledo e Cristelo",
         "dicofre": "160224",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Caminha",
         "freguesia": "Uniao das freguesias de Venade e Azevedo",
         "dicofre": "160225",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Alvaredo",
         "dicofre": "160301",
         "brasao": "https://dados.gov.pt/s/brasoes/160301.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Cousso",
         "dicofre": "160304",
         "brasao": "https://dados.gov.pt/s/brasoes/160304.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Cristoval",
         "dicofre": "160305",
         "brasao": "https://dados.gov.pt/s/brasoes/160305.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Fiaes",
         "dicofre": "160307",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Gave",
         "dicofre": "160308",
         "brasao": "https://dados.gov.pt/s/brasoes/160308.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Paderne",
         "dicofre": "160311",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Penso",
         "dicofre": "160313",
         "brasao": "https://dados.gov.pt/s/brasoes/160313.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Sao Paio",
         "dicofre": "160317",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Uniao das freguesias de Castro Laboreiro e Lamas de Mouro",
         "dicofre": "160319",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Uniao das freguesias de Chaviaes e Pacos",
         "dicofre": "160320",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Uniao das freguesias de Parada do Monte e Cubalhao",
         "dicofre": "160321",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Uniao das freguesias de Prado e Remoaes",
         "dicofre": "160322",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Melgaco",
         "freguesia": "Uniao das freguesias de Vila e Roussas",
         "dicofre": "160323",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Abedim",
         "dicofre": "160401",
         "brasao": "https://dados.gov.pt/s/brasoes/160401.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Barbeita",
         "dicofre": "160404",
         "brasao": "https://dados.gov.pt/s/brasoes/160404.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Barrocas e Taias",
         "dicofre": "160405",
         "brasao": "https://dados.gov.pt/s/brasoes/160405.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Bela",
         "dicofre": "160406",
         "brasao": "https://dados.gov.pt/s/brasoes/160406.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Cambeses",
         "dicofre": "160407",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Lara",
         "dicofre": "160410",
         "brasao": "https://dados.gov.pt/s/brasoes/160410.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Longos Vales",
         "dicofre": "160411",
         "brasao": "https://dados.gov.pt/s/brasoes/160411.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Merufe",
         "dicofre": "160415",
         "brasao": "https://dados.gov.pt/s/brasoes/160415.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Moreira",
         "dicofre": "160418",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Pias",
         "dicofre": "160420",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Pinheiros",
         "dicofre": "160421",
         "brasao": "https://dados.gov.pt/s/brasoes/160421.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Podame",
         "dicofre": "160422",
         "brasao": "https://dados.gov.pt/s/brasoes/160422.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Portela",
         "dicofre": "160423",
         "brasao": "https://dados.gov.pt/s/brasoes/160423.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Riba de Mouro",
         "dicofre": "160424",
         "brasao": "https://dados.gov.pt/s/brasoes/160424.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Segude",
         "dicofre": "160427",
         "brasao": "https://dados.gov.pt/s/brasoes/160427.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Tangil",
         "dicofre": "160428",
         "brasao": "https://dados.gov.pt/s/brasoes/160428.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Trute",
         "dicofre": "160431",
         "brasao": "https://dados.gov.pt/s/brasoes/160431.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Uniao das freguesias de Anhoes e Luzio",
         "dicofre": "160434",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Uniao das freguesias de Ceivaes e Badim",
         "dicofre": "160435",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Uniao das freguesias de Mazedo e Cortes",
         "dicofre": "160436",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Uniao das freguesias de Messegaes, Valadares e Sa",
         "dicofre": "160437",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Uniao das freguesias de Moncao e Troviscoso",
         "dicofre": "160438",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Uniao das freguesias de Sago, Lordelo e Parada",
         "dicofre": "160439",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Moncao",
         "freguesia": "Uniao das freguesias de Troporiz e Lapela",
         "dicofre": "160440",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Agualonga",
         "dicofre": "160501",
         "brasao": "https://dados.gov.pt/s/brasoes/160501.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Castanheira",
         "dicofre": "160503",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Coura",
         "dicofre": "160505",
         "brasao": "https://dados.gov.pt/s/brasoes/160505.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Cunha",
         "dicofre": "160507",
         "brasao": "https://dados.gov.pt/s/brasoes/160507.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Infesta",
         "dicofre": "160510",
         "brasao": "https://dados.gov.pt/s/brasoes/160510.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Mozelos",
         "dicofre": "160513",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Padornelo",
         "dicofre": "160514",
         "brasao": "https://dados.gov.pt/s/brasoes/160514.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Parada",
         "dicofre": "160515",
         "brasao": "https://dados.gov.pt/s/brasoes/160515.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Romarigaes",
         "dicofre": "160519",
         "brasao": "https://dados.gov.pt/s/brasoes/160519.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Rubiaes",
         "dicofre": "160520",
         "brasao": "https://dados.gov.pt/s/brasoes/160520.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Vascoes",
         "dicofre": "160521",
         "brasao": "https://dados.gov.pt/s/brasoes/160521.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Uniao das freguesias de Bico e Cristelo",
         "dicofre": "160522",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Uniao das freguesias de Cossourado e Linhares",
         "dicofre": "160523",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Uniao das freguesias de Formariz e Ferreira",
         "dicofre": "160524",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Uniao das freguesias de Insalde e Porreiras",
         "dicofre": "160525",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Paredes de Coura",
         "freguesia": "Uniao das freguesias de Paredes de Coura e Resende",
         "dicofre": "160526",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Azias",
         "dicofre": "160601",
         "brasao": "https://dados.gov.pt/s/brasoes/160601.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Boivaes",
         "dicofre": "160602",
         "brasao": "https://dados.gov.pt/s/brasoes/160602.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Bravaes",
         "dicofre": "160603",
         "brasao": "https://dados.gov.pt/s/brasoes/160603.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Britelo",
         "dicofre": "160604",
         "brasao": "https://dados.gov.pt/s/brasoes/160604.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Cuide de Vila Verde",
         "dicofre": "160606",
         "brasao": "https://dados.gov.pt/s/brasoes/160606.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Lavradas",
         "dicofre": "160611",
         "brasao": "https://dados.gov.pt/s/brasoes/160611.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Lindoso",
         "dicofre": "160612",
         "brasao": "https://dados.gov.pt/s/brasoes/160612.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Nogueira",
         "dicofre": "160613",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Oleiros",
         "dicofre": "160614",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Sampriz",
         "dicofre": "160619",
         "brasao": "https://dados.gov.pt/s/brasoes/160619.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Vade (Sao Pedro)",
         "dicofre": "160623",
         "brasao": "https://dados.gov.pt/s/brasoes/160623.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Vade (Sao Tome)",
         "dicofre": "160624",
         "brasao": "https://dados.gov.pt/s/brasoes/160624.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Uniao das freguesias de Crasto, Ruivos e Grovelas",
         "dicofre": "160626",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Uniao das freguesias de Entre Ambos-os-Rios, Ermida e Germil",
         "dicofre": "160627",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Uniao das freguesias de Ponte da Barca, Vila Nova de Muia e Paco Vedro de Magalhaes",
         "dicofre": "160628",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Uniao das freguesias de Touvedo (Sao Lourenco e Salvador)",
         "dicofre": "160629",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte da Barca",
         "freguesia": "Uniao das freguesias de Vila Cha (Sao Joao Baptista e Santiago)",
         "dicofre": "160630",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Anais",
         "dicofre": "160701",
         "brasao": "https://dados.gov.pt/s/brasoes/160701.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Sao Pedro d'Arcos",
         "dicofre": "160703",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Arcozelo",
         "dicofre": "160704",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Beiral do Lima",
         "dicofre": "160707",
         "brasao": "https://dados.gov.pt/s/brasoes/160707.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Bertiandos",
         "dicofre": "160708",
         "brasao": "https://dados.gov.pt/s/brasoes/160708.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Boalhosa",
         "dicofre": "160709",
         "brasao": "https://dados.gov.pt/s/brasoes/160709.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Brandara",
         "dicofre": "160710",
         "brasao": "https://dados.gov.pt/s/brasoes/160710.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Calheiros",
         "dicofre": "160713",
         "brasao": "https://dados.gov.pt/s/brasoes/160713.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Calvelo",
         "dicofre": "160714",
         "brasao": "https://dados.gov.pt/s/brasoes/160714.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Correlha",
         "dicofre": "160716",
         "brasao": "https://dados.gov.pt/s/brasoes/160716.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Estoraos",
         "dicofre": "160717",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Facha",
         "dicofre": "160718",
         "brasao": "https://dados.gov.pt/s/brasoes/160718.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Feitosa",
         "dicofre": "160719",
         "brasao": "https://dados.gov.pt/s/brasoes/160719.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Fontao",
         "dicofre": "160721",
         "brasao": "https://dados.gov.pt/s/brasoes/160721.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Friastelas",
         "dicofre": "160724",
         "brasao": "https://dados.gov.pt/s/brasoes/160724.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Gandra",
         "dicofre": "160726",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Gemieira",
         "dicofre": "160727",
         "brasao": "https://dados.gov.pt/s/brasoes/160727.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Gondufe",
         "dicofre": "160728",
         "brasao": "https://dados.gov.pt/s/brasoes/160728.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Labruja",
         "dicofre": "160729",
         "brasao": "https://dados.gov.pt/s/brasoes/160729.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Poiares",
         "dicofre": "160734",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Refoios do Lima",
         "dicofre": "160737",
         "brasao": "https://dados.gov.pt/s/brasoes/160737.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Ribeira",
         "dicofre": "160739",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Sa",
         "dicofre": "160740",
         "brasao": "https://dados.gov.pt/s/brasoes/160740.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Santa Comba",
         "dicofre": "160742",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Santa Cruz do Lima",
         "dicofre": "160743",
         "brasao": "https://dados.gov.pt/s/brasoes/160743.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Rebordoes (Santa Maria)",
         "dicofre": "160744",
         "brasao": "https://dados.gov.pt/s/brasoes/160744.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Seara",
         "dicofre": "160745",
         "brasao": "https://dados.gov.pt/s/brasoes/160745.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Serdedelo",
         "dicofre": "160746",
         "brasao": "https://dados.gov.pt/s/brasoes/160746.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Rebordoes (Souto)",
         "dicofre": "160747",
         "brasao": "https://dados.gov.pt/s/brasoes/160747.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Vitorino das Donas",
         "dicofre": "160750",
         "brasao": "https://dados.gov.pt/s/brasoes/160750.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Arca e Ponte de Lima",
         "dicofre": "160752",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Ardegao, Freixo e Mato",
         "dicofre": "160753",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Associacao de freguesias do Vale do Neiva",
         "dicofre": "160754",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Barrio e Cepoes",
         "dicofre": "160755",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Cabacos e Fojo Lobal",
         "dicofre": "160756",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Cabracao e Moreira do Lima",
         "dicofre": "160757",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Fornelos e Queijada",
         "dicofre": "160758",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Labrujo, Rendufe e Vilar do Monte",
         "dicofre": "160759",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Ponte de Lima",
         "freguesia": "Navio e Vitorino dos Piaes",
         "dicofre": "160760",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Boivao",
         "dicofre": "160802",
         "brasao": "https://dados.gov.pt/s/brasoes/160802.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Cerdal",
         "dicofre": "160803",
         "brasao": "https://dados.gov.pt/s/brasoes/160803.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Fontoura",
         "dicofre": "160805",
         "brasao": "https://dados.gov.pt/s/brasoes/160805.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Friestas",
         "dicofre": "160806",
         "brasao": "https://dados.gov.pt/s/brasoes/160806.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Ganfei",
         "dicofre": "160808",
         "brasao": "https://dados.gov.pt/s/brasoes/160808.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Sao Pedro da Torre",
         "dicofre": "160812",
         "brasao": "https://dados.gov.pt/s/brasoes/160812.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Verdoejo",
         "dicofre": "160816",
         "brasao": "https://dados.gov.pt/s/brasoes/160816.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Uniao das freguesias de Gandra e Taiao",
         "dicofre": "160817",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Uniao das freguesias de Gondomil e Sanfins",
         "dicofre": "160818",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Uniao das freguesias de Sao Juliao e Silva",
         "dicofre": "160819",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Valenca",
         "freguesia": "Uniao das freguesias de Valenca, Cristelo Covo e Arao",
         "dicofre": "160820",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Afife",
         "dicofre": "160901",
         "brasao": "https://dados.gov.pt/s/brasoes/160901.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Alvaraes",
         "dicofre": "160902",
         "brasao": "https://dados.gov.pt/s/brasoes/160902.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Amonde",
         "dicofre": "160903",
         "brasao": "https://dados.gov.pt/s/brasoes/160903.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Anha",
         "dicofre": "160904",
         "brasao": "https://dados.gov.pt/s/brasoes/160904.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Areosa",
         "dicofre": "160905",
         "brasao": "https://dados.gov.pt/s/brasoes/160905.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Carreco",
         "dicofre": "160908",
         "brasao": "https://dados.gov.pt/s/brasoes/160908.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Castelo do Neiva",
         "dicofre": "160910",
         "brasao": "https://dados.gov.pt/s/brasoes/160910.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Darque",
         "dicofre": "160911",
         "brasao": "https://dados.gov.pt/s/brasoes/160911.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Freixieiro de Soutelo",
         "dicofre": "160914",
         "brasao": "https://dados.gov.pt/s/brasoes/160914.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Lanheses",
         "dicofre": "160915",
         "brasao": "https://dados.gov.pt/s/brasoes/160915.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Montaria",
         "dicofre": "160920",
         "brasao": "https://dados.gov.pt/s/brasoes/160920.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Mujaes",
         "dicofre": "160922",
         "brasao": "https://dados.gov.pt/s/brasoes/160922.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Sao Romao de Neiva",
         "dicofre": "160923",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Outeiro",
         "dicofre": "160925",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Perre",
         "dicofre": "160926",
         "brasao": "https://dados.gov.pt/s/brasoes/160926.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Santa Marta de Portuzelo",
         "dicofre": "160928",
         "brasao": "https://dados.gov.pt/s/brasoes/160928.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Vila Franca",
         "dicofre": "160935",
         "brasao": "https://dados.gov.pt/s/brasoes/160935.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Vila de Punhe",
         "dicofre": "160938",
         "brasao": "https://dados.gov.pt/s/brasoes/160938.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Chafe",
         "dicofre": "160940",
         "brasao": "https://dados.gov.pt/s/brasoes/160940.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Uniao das freguesias de Barroselas e Carvoeiro",
         "dicofre": "160941",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Uniao das freguesias de Cardielos e Serreleis",
         "dicofre": "160942",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Uniao das freguesias de Geraz do Lima (Santa Maria, Santa Leocadia e Moreira) e Deao",
         "dicofre": "160943",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Uniao das freguesias de Mazarefes e Vila Fria",
         "dicofre": "160944",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Uniao das freguesias de Nogueira, Meixedo e Vilar de Murteda",
         "dicofre": "160945",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Uniao das freguesias de Subportela, Deocriste e Portela Susa",
         "dicofre": "160946",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Uniao das freguesias de Torre e Vila Mou",
         "dicofre": "160947",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Viana do Castelo",
         "freguesia": "Uniao das freguesias de Viana do Castelo (Santa Maria Maior e Monserrate) e Meadela",
         "dicofre": "160948",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Cornes",
         "dicofre": "161003",
         "brasao": "https://dados.gov.pt/s/brasoes/161003.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Covas",
         "dicofre": "161004",
         "brasao": "https://dados.gov.pt/s/brasoes/161004.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Gondarem",
         "dicofre": "161006",
         "brasao": "https://dados.gov.pt/s/brasoes/161006.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Loivo",
         "dicofre": "161007",
         "brasao": "https://dados.gov.pt/s/brasoes/161007.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Mentrestido",
         "dicofre": "161009",
         "brasao": "https://dados.gov.pt/s/brasoes/161009.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Sapardos",
         "dicofre": "161012",
         "brasao": "https://dados.gov.pt/s/brasoes/161012.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Sopo",
         "dicofre": "161013",
         "brasao": "https://dados.gov.pt/s/brasoes/161013.png"
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Uniao das freguesias de Campos e Vila Mea",
         "dicofre": "161016",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Uniao das freguesias de Candemil e Gondar",
         "dicofre": "161017",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Uniao das freguesias de Reboreda e Nogueira",
         "dicofre": "161018",
         "brasao": ""
      },
      {
         "distrito": "Viana do Castelo",
         "concelho": "Vila Nova de Cerveira",
         "freguesia": "Uniao das freguesias de Vila Nova de Cerveira e Lovelhe",
         "dicofre": "161019",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Alijo",
         "dicofre": "170101",
         "brasao": "https://dados.gov.pt/s/brasoes/170101.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Favaios",
         "dicofre": "170107",
         "brasao": "https://dados.gov.pt/s/brasoes/170107.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Pegarinhos",
         "dicofre": "170108",
         "brasao": "https://dados.gov.pt/s/brasoes/170108.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Pinhao",
         "dicofre": "170109",
         "brasao": "https://dados.gov.pt/s/brasoes/170109.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Sanfins do Douro",
         "dicofre": "170112",
         "brasao": "https://dados.gov.pt/s/brasoes/170112.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Santa Eugenia",
         "dicofre": "170113",
         "brasao": "https://dados.gov.pt/s/brasoes/170113.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Sao Mamede de Ribatua",
         "dicofre": "170114",
         "brasao": "https://dados.gov.pt/s/brasoes/170114.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Vila Cha",
         "dicofre": "170116",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Vila Verde",
         "dicofre": "170117",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Vilar de Macada",
         "dicofre": "170118",
         "brasao": "https://dados.gov.pt/s/brasoes/170118.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Uniao das freguesias de Carlao e Amieiro",
         "dicofre": "170120",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Uniao das freguesias de Castedo e Cotas",
         "dicofre": "170121",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Uniao das freguesias de Populo e Ribalonga",
         "dicofre": "170122",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Alijo",
         "freguesia": "Uniao das freguesias de Vale de Mendiz, Casal de Loivos e Vilarinho de Cotas",
         "dicofre": "170123",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Beca",
         "dicofre": "170203",
         "brasao": "https://dados.gov.pt/s/brasoes/170203.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Covas do Barroso",
         "dicofre": "170208",
         "brasao": "https://dados.gov.pt/s/brasoes/170208.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Dornelas",
         "dicofre": "170210",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Pinho",
         "dicofre": "170213",
         "brasao": "https://dados.gov.pt/s/brasoes/170213.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Sapiaos",
         "dicofre": "170215",
         "brasao": "https://dados.gov.pt/s/brasoes/170215.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Alturas do Barroso e Cerdedo",
         "dicofre": "170217",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Ardaos e Bobadela",
         "dicofre": "170218",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Boticas e Granja",
         "dicofre": "170219",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Codessoso, Curros e Fiaes do Tamega",
         "dicofre": "170220",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Boticas",
         "freguesia": "Vilar e Viveiro",
         "dicofre": "170221",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "aguas Frias",
         "dicofre": "170301",
         "brasao": "https://dados.gov.pt/s/brasoes/170301.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Anelhe",
         "dicofre": "170302",
         "brasao": "https://dados.gov.pt/s/brasoes/170302.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Bustelo",
         "dicofre": "170305",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Cimo de Vila da Castanheira",
         "dicofre": "170309",
         "brasao": "https://dados.gov.pt/s/brasoes/170309.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Curalha",
         "dicofre": "170310",
         "brasao": "https://dados.gov.pt/s/brasoes/170310.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Ervededo",
         "dicofre": "170312",
         "brasao": "https://dados.gov.pt/s/brasoes/170312.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Faioes",
         "dicofre": "170313",
         "brasao": "https://dados.gov.pt/s/brasoes/170313.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Lama de Arcos",
         "dicofre": "170314",
         "brasao": "https://dados.gov.pt/s/brasoes/170314.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Mairos",
         "dicofre": "170316",
         "brasao": "https://dados.gov.pt/s/brasoes/170316.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Moreiras",
         "dicofre": "170317",
         "brasao": "https://dados.gov.pt/s/brasoes/170317.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Nogueira da Montanha",
         "dicofre": "170318",
         "brasao": "https://dados.gov.pt/s/brasoes/170318.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Oura",
         "dicofre": "170320",
         "brasao": "https://dados.gov.pt/s/brasoes/170320.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Outeiro Seco",
         "dicofre": "170321",
         "brasao": "https://dados.gov.pt/s/brasoes/170321.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Paradela",
         "dicofre": "170322",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Redondelo",
         "dicofre": "170324",
         "brasao": "https://dados.gov.pt/s/brasoes/170324.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Sanfins",
         "dicofre": "170327",
         "brasao": "https://dados.gov.pt/s/brasoes/170327.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Santa Leocadia",
         "dicofre": "170329",
         "brasao": "https://dados.gov.pt/s/brasoes/170329.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Santo Antonio de Monforte",
         "dicofre": "170330",
         "brasao": "https://dados.gov.pt/s/brasoes/170330.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Santo Estevao",
         "dicofre": "170331",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Sao Pedro de Agostem",
         "dicofre": "170333",
         "brasao": "https://dados.gov.pt/s/brasoes/170333.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Sao Vicente",
         "dicofre": "170334",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Tronco",
         "dicofre": "170340",
         "brasao": "https://dados.gov.pt/s/brasoes/170340.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Vale de Anta",
         "dicofre": "170341",
         "brasao": "https://dados.gov.pt/s/brasoes/170341.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Vila Verde da Raia",
         "dicofre": "170343",
         "brasao": "https://dados.gov.pt/s/brasoes/170343.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Vilar de Nantes",
         "dicofre": "170344",
         "brasao": "https://dados.gov.pt/s/brasoes/170344.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Vilarelho da Raia",
         "dicofre": "170345",
         "brasao": "https://dados.gov.pt/s/brasoes/170345.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Vilas Boas",
         "dicofre": "170347",
         "brasao": "https://dados.gov.pt/s/brasoes/170347.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Vilela Seca",
         "dicofre": "170348",
         "brasao": "https://dados.gov.pt/s/brasoes/170348.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Vilela do Tamega",
         "dicofre": "170349",
         "brasao": "https://dados.gov.pt/s/brasoes/170349.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Santa Maria Maior",
         "dicofre": "170350",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Planalto de Monforte (Uniao das freguesias de Oucidres e Bobadela)",
         "dicofre": "170353",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Uniao das freguesias da Madalena e Samaioes",
         "dicofre": "170354",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Uniao das freguesias das Eiras, Sao Juliao de Montenegro e Cela",
         "dicofre": "170355",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Uniao das freguesias de Calvao e Soutelinho da Raia",
         "dicofre": "170356",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Uniao das freguesias de Loivos e Povoa de Agracoes",
         "dicofre": "170357",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Uniao das freguesias de Santa Cruz/Trindade e Sanjurge",
         "dicofre": "170358",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Uniao das freguesias de Soutelo e Seara Velha",
         "dicofre": "170359",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Uniao das freguesias de Travancas e Roriz",
         "dicofre": "170360",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Chaves",
         "freguesia": "Vidago (Uniao das freguesias de Vidago, Arcosso, Selhariz e Vilarinho das Paranheiras)",
         "dicofre": "170361",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mesao Frio",
         "freguesia": "Barqueiros",
         "dicofre": "170401",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mesao Frio",
         "freguesia": "Cidadelhe",
         "dicofre": "170402",
         "brasao": "https://dados.gov.pt/s/brasoes/170402.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mesao Frio",
         "freguesia": "Oliveira",
         "dicofre": "170403",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mesao Frio",
         "freguesia": "Vila Marim",
         "dicofre": "170407",
         "brasao": "https://dados.gov.pt/s/brasoes/170407.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mesao Frio",
         "freguesia": "Mesao Frio (Santo Andre)",
         "dicofre": "170408",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mondim de Basto",
         "freguesia": "Atei",
         "dicofre": "170501",
         "brasao": "https://dados.gov.pt/s/brasoes/170501.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mondim de Basto",
         "freguesia": "Bilho",
         "dicofre": "170502",
         "brasao": "https://dados.gov.pt/s/brasoes/170502.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mondim de Basto",
         "freguesia": "Sao Cristovao de Mondim de Basto",
         "dicofre": "170505",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mondim de Basto",
         "freguesia": "Vilar de Ferreiros",
         "dicofre": "170508",
         "brasao": "https://dados.gov.pt/s/brasoes/170508.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mondim de Basto",
         "freguesia": "Uniao das freguesias de Campanho e Paradanca",
         "dicofre": "170509",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Mondim de Basto",
         "freguesia": "Uniao das freguesias de Ermelo e Pardelhas",
         "dicofre": "170510",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Cabril",
         "dicofre": "170601",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Cervos",
         "dicofre": "170603",
         "brasao": "https://dados.gov.pt/s/brasoes/170603.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Cha",
         "dicofre": "170604",
         "brasao": "https://dados.gov.pt/s/brasoes/170604.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Covelo do Geres",
         "dicofre": "170607",
         "brasao": "https://dados.gov.pt/s/brasoes/170607.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Ferral",
         "dicofre": "170609",
         "brasao": "https://dados.gov.pt/s/brasoes/170609.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Gralhas",
         "dicofre": "170612",
         "brasao": "https://dados.gov.pt/s/brasoes/170612.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Morgade",
         "dicofre": "170616",
         "brasao": "https://dados.gov.pt/s/brasoes/170616.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Negroes",
         "dicofre": "170618",
         "brasao": "https://dados.gov.pt/s/brasoes/170618.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Outeiro",
         "dicofre": "170619",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Pitoes das Junias",
         "dicofre": "170623",
         "brasao": "https://dados.gov.pt/s/brasoes/170623.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Reigoso",
         "dicofre": "170625",
         "brasao": "https://dados.gov.pt/s/brasoes/170625.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Salto",
         "dicofre": "170626",
         "brasao": "https://dados.gov.pt/s/brasoes/170626.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Santo Andre",
         "dicofre": "170627",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Sarraquinhos",
         "dicofre": "170629",
         "brasao": "https://dados.gov.pt/s/brasoes/170629.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Solveira",
         "dicofre": "170631",
         "brasao": "https://dados.gov.pt/s/brasoes/170631.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Tourem",
         "dicofre": "170632",
         "brasao": "https://dados.gov.pt/s/brasoes/170632.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Vila da Ponte",
         "dicofre": "170635",
         "brasao": "https://dados.gov.pt/s/brasoes/170635.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Uniao das freguesias de Cambeses do Rio, Donoes e Mourilhe",
         "dicofre": "170636",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Uniao das freguesias de Meixedo e Padornelos",
         "dicofre": "170637",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Uniao das freguesias de Montalegre e Padroso",
         "dicofre": "170638",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Uniao das freguesias de Paradela, Contim e Fiaes",
         "dicofre": "170639",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Uniao das freguesias de Sezelhe e Covelaes",
         "dicofre": "170640",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Uniao das freguesias de Venda Nova e Pondras",
         "dicofre": "170641",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Uniao das freguesias de Viade de Baixo e Fervidelas",
         "dicofre": "170642",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Montalegre",
         "freguesia": "Uniao das freguesias de Vilar de Perdizes e Meixide",
         "dicofre": "170643",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Murca",
         "freguesia": "Candedo",
         "dicofre": "170701",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Murca",
         "freguesia": "Fiolhoso",
         "dicofre": "170703",
         "brasao": "https://dados.gov.pt/s/brasoes/170703.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Murca",
         "freguesia": "Jou",
         "dicofre": "170704",
         "brasao": "https://dados.gov.pt/s/brasoes/170704.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Murca",
         "freguesia": "Murca",
         "dicofre": "170705",
         "brasao": "https://dados.gov.pt/s/brasoes/170705.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Murca",
         "freguesia": "Valongo de Milhais",
         "dicofre": "170708",
         "brasao": "https://dados.gov.pt/s/brasoes/170708.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Murca",
         "freguesia": "Uniao das freguesias de Carva e Vilares",
         "dicofre": "170710",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Murca",
         "freguesia": "Uniao das freguesias de Noura e Palheiros",
         "dicofre": "170711",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Peso da Regua",
         "freguesia": "Fontelas",
         "dicofre": "170802",
         "brasao": "https://dados.gov.pt/s/brasoes/170802.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Peso da Regua",
         "freguesia": "Loureiro",
         "dicofre": "170805",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Peso da Regua",
         "freguesia": "Sedielos",
         "dicofre": "170809",
         "brasao": "https://dados.gov.pt/s/brasoes/170809.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Peso da Regua",
         "freguesia": "Vilarinho dos Freires",
         "dicofre": "170810",
         "brasao": "https://dados.gov.pt/s/brasoes/170810.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Peso da Regua",
         "freguesia": "Uniao das freguesias de Galafura e Covelinhas",
         "dicofre": "170813",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Peso da Regua",
         "freguesia": "Uniao das freguesias de Moura Morta e Vinhos",
         "dicofre": "170814",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Peso da Regua",
         "freguesia": "Uniao das freguesias de Peso da Regua e Godim",
         "dicofre": "170815",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Peso da Regua",
         "freguesia": "Uniao das freguesias de Poiares e Canelas",
         "dicofre": "170816",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Ribeira de Pena",
         "freguesia": "Alvadia",
         "dicofre": "170901",
         "brasao": "https://dados.gov.pt/s/brasoes/170901.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Ribeira de Pena",
         "freguesia": "Canedo",
         "dicofre": "170902",
         "brasao": "https://dados.gov.pt/s/brasoes/170902.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Ribeira de Pena",
         "freguesia": "Santa Marinha",
         "dicofre": "170906",
         "brasao": "https://dados.gov.pt/s/brasoes/170906.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Ribeira de Pena",
         "freguesia": "Uniao das freguesias de Cerva e Limoes",
         "dicofre": "170908",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Ribeira de Pena",
         "freguesia": "Uniao das freguesias de Ribeira de Pena (Salvador) e Santo Aleixo de Alem-Tamega",
         "dicofre": "170909",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Celeiros",
         "dicofre": "171001",
         "brasao": "https://dados.gov.pt/s/brasoes/171001.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Covas do Douro",
         "dicofre": "171002",
         "brasao": "https://dados.gov.pt/s/brasoes/171002.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Gouvinhas",
         "dicofre": "171004",
         "brasao": "https://dados.gov.pt/s/brasoes/171004.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Parada de Pinhao",
         "dicofre": "171005",
         "brasao": "https://dados.gov.pt/s/brasoes/171005.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Pacos",
         "dicofre": "171007",
         "brasao": "https://dados.gov.pt/s/brasoes/171007.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Sabrosa",
         "dicofre": "171009",
         "brasao": "https://dados.gov.pt/s/brasoes/171009.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Sao Lourenco de Ribapinhao",
         "dicofre": "171011",
         "brasao": "https://dados.gov.pt/s/brasoes/171011.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Souto Maior",
         "dicofre": "171013",
         "brasao": "https://dados.gov.pt/s/brasoes/171013.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Torre do Pinhao",
         "dicofre": "171014",
         "brasao": "https://dados.gov.pt/s/brasoes/171014.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Vilarinho de Sao Romao",
         "dicofre": "171015",
         "brasao": "https://dados.gov.pt/s/brasoes/171015.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Uniao das freguesias de Provesende, Gouvaes do Douro e Sao Cristovao do Douro",
         "dicofre": "171016",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Sabrosa",
         "freguesia": "Uniao das freguesias de Sao Martinho de Antas e Paradela de Guiaes",
         "dicofre": "171017",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Santa Marta de Penaguiao",
         "freguesia": "Alvacoes do Corgo",
         "dicofre": "171101",
         "brasao": "https://dados.gov.pt/s/brasoes/171101.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Santa Marta de Penaguiao",
         "freguesia": "Cumieira",
         "dicofre": "171102",
         "brasao": "https://dados.gov.pt/s/brasoes/171102.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Santa Marta de Penaguiao",
         "freguesia": "Fontes",
         "dicofre": "171103",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Santa Marta de Penaguiao",
         "freguesia": "Medroes",
         "dicofre": "171106",
         "brasao": "https://dados.gov.pt/s/brasoes/171106.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Santa Marta de Penaguiao",
         "freguesia": "Sever",
         "dicofre": "171110",
         "brasao": "https://dados.gov.pt/s/brasoes/171110.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Santa Marta de Penaguiao",
         "freguesia": "Uniao das freguesias de Lobrigos (Sao Miguel e Sao Joao Baptista) e Sanhoane",
         "dicofre": "171111",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Santa Marta de Penaguiao",
         "freguesia": "Uniao das freguesias de Louredo e Fornelos",
         "dicofre": "171112",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "agua Reves e Crasto",
         "dicofre": "171201",
         "brasao": "https://dados.gov.pt/s/brasoes/171201.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Algeriz",
         "dicofre": "171203",
         "brasao": "https://dados.gov.pt/s/brasoes/171203.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Boucoaes",
         "dicofre": "171205",
         "brasao": "https://dados.gov.pt/s/brasoes/171205.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Canaveses",
         "dicofre": "171206",
         "brasao": "https://dados.gov.pt/s/brasoes/171206.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Ervoes",
         "dicofre": "171209",
         "brasao": "https://dados.gov.pt/s/brasoes/171209.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Fornos do Pinhal",
         "dicofre": "171211",
         "brasao": "https://dados.gov.pt/s/brasoes/171211.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Frioes",
         "dicofre": "171212",
         "brasao": "https://dados.gov.pt/s/brasoes/171212.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Padrela e Tazem",
         "dicofre": "171215",
         "brasao": "https://dados.gov.pt/s/brasoes/171215.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Possacos",
         "dicofre": "171216",
         "brasao": "https://dados.gov.pt/s/brasoes/171216.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Rio Torto",
         "dicofre": "171217",
         "brasao": "https://dados.gov.pt/s/brasoes/171217.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Santa Maria de Emeres",
         "dicofre": "171219",
         "brasao": "https://dados.gov.pt/s/brasoes/171219.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Santa Valha",
         "dicofre": "171220",
         "brasao": "https://dados.gov.pt/s/brasoes/171220.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Santiago da Ribeira de Alhariz",
         "dicofre": "171221",
         "brasao": "https://dados.gov.pt/s/brasoes/171221.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Sao Joao da Corveira",
         "dicofre": "171222",
         "brasao": "https://dados.gov.pt/s/brasoes/171222.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Sao Pedro de Veiga de Lila",
         "dicofre": "171223",
         "brasao": "https://dados.gov.pt/s/brasoes/171223.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Serapicos",
         "dicofre": "171224",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Vales",
         "dicofre": "171227",
         "brasao": "https://dados.gov.pt/s/brasoes/171227.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Vassal",
         "dicofre": "171229",
         "brasao": "https://dados.gov.pt/s/brasoes/171229.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Veiga de Lila",
         "dicofre": "171230",
         "brasao": "https://dados.gov.pt/s/brasoes/171230.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Vilarandelo",
         "dicofre": "171231",
         "brasao": "https://dados.gov.pt/s/brasoes/171231.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Carrazedo de Montenegro e Curros",
         "dicofre": "171232",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Lebucao, Fiaes e Nozelos",
         "dicofre": "171233",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Sonim e Barreiros",
         "dicofre": "171234",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Tinhela e Alvarelhos",
         "dicofre": "171235",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Valpacos",
         "freguesia": "Valpacos e Sanfins",
         "dicofre": "171236",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Alfarela de Jales",
         "dicofre": "171302",
         "brasao": "https://dados.gov.pt/s/brasoes/171302.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Bornes de Aguiar",
         "dicofre": "171303",
         "brasao": "https://dados.gov.pt/s/brasoes/171303.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Bragado",
         "dicofre": "171304",
         "brasao": "https://dados.gov.pt/s/brasoes/171304.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Capeludos",
         "dicofre": "171305",
         "brasao": "https://dados.gov.pt/s/brasoes/171305.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Soutelo de Aguiar",
         "dicofre": "171310",
         "brasao": "https://dados.gov.pt/s/brasoes/171310.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Teloes",
         "dicofre": "171311",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Tresminas",
         "dicofre": "171312",
         "brasao": "https://dados.gov.pt/s/brasoes/171312.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Valoura",
         "dicofre": "171313",
         "brasao": "https://dados.gov.pt/s/brasoes/171313.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Vila Pouca de Aguiar",
         "dicofre": "171314",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Vreia de Bornes",
         "dicofre": "171315",
         "brasao": "https://dados.gov.pt/s/brasoes/171315.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Vreia de Jales",
         "dicofre": "171316",
         "brasao": "https://dados.gov.pt/s/brasoes/171316.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Sabroso de Aguiar",
         "dicofre": "171317",
         "brasao": "https://dados.gov.pt/s/brasoes/171317.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Alvao",
         "dicofre": "171319",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Pouca de Aguiar",
         "freguesia": "Uniao das freguesias de Pensalvos e Parada de Monteiros",
         "dicofre": "171320",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Abacas",
         "dicofre": "171401",
         "brasao": "https://dados.gov.pt/s/brasoes/171401.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Andraes",
         "dicofre": "171403",
         "brasao": "https://dados.gov.pt/s/brasoes/171403.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Arroios",
         "dicofre": "171404",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Campea",
         "dicofre": "171406",
         "brasao": "https://dados.gov.pt/s/brasoes/171406.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Folhadela",
         "dicofre": "171409",
         "brasao": "https://dados.gov.pt/s/brasoes/171409.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Guiaes",
         "dicofre": "171410",
         "brasao": "https://dados.gov.pt/s/brasoes/171410.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Lordelo",
         "dicofre": "171414",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Mateus",
         "dicofre": "171415",
         "brasao": "https://dados.gov.pt/s/brasoes/171415.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Mondroes",
         "dicofre": "171416",
         "brasao": "https://dados.gov.pt/s/brasoes/171416.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Parada de Cunhos",
         "dicofre": "171420",
         "brasao": "https://dados.gov.pt/s/brasoes/171420.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Torgueda",
         "dicofre": "171426",
         "brasao": "https://dados.gov.pt/s/brasoes/171426.png"
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Vila Marim",
         "dicofre": "171429",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Uniao das freguesias de Adoufe e Vilarinho de Samarda",
         "dicofre": "171431",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Uniao das freguesias de Borbela e Lamas de Olo",
         "dicofre": "171432",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Uniao das freguesias de Constantim e Vale de Nogueiras",
         "dicofre": "171433",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Uniao das freguesias de Moucos e Lamares",
         "dicofre": "171434",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Uniao das freguesias de Nogueira e Ermida",
         "dicofre": "171435",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Uniao das freguesias de Pena, Quinta e Vila Cova",
         "dicofre": "171436",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Uniao das freguesias de Sao Tome do Castelo e Justes",
         "dicofre": "171437",
         "brasao": ""
      },
      {
         "distrito": "Vila Real",
         "concelho": "Vila Real",
         "freguesia": "Vila Real",
         "dicofre": "171438",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Aldeias",
         "dicofre": "180101",
         "brasao": "https://dados.gov.pt/s/brasoes/180101.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Cimbres",
         "dicofre": "180104",
         "brasao": "https://dados.gov.pt/s/brasoes/180104.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Folgosa",
         "dicofre": "180106",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Fontelo",
         "dicofre": "180107",
         "brasao": "https://dados.gov.pt/s/brasoes/180107.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Queimada",
         "dicofre": "180109",
         "brasao": "https://dados.gov.pt/s/brasoes/180109.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Queimadela",
         "dicofre": "180110",
         "brasao": "https://dados.gov.pt/s/brasoes/180110.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Santa Cruz",
         "dicofre": "180111",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Sao Cosmado",
         "dicofre": "180114",
         "brasao": "https://dados.gov.pt/s/brasoes/180114.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Sao Martinho das Chas",
         "dicofre": "180115",
         "brasao": "https://dados.gov.pt/s/brasoes/180115.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Vacalar",
         "dicofre": "180118",
         "brasao": "https://dados.gov.pt/s/brasoes/180118.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Armamar",
         "dicofre": "180120",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Uniao das freguesias de Aricera e Goujoim",
         "dicofre": "180121",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Uniao das freguesias de Sao Romao e Santiago",
         "dicofre": "180122",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Armamar",
         "freguesia": "Uniao das freguesias de Vila Seca e Santo Adriao",
         "dicofre": "180123",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Carregal do Sal",
         "freguesia": "Beijos",
         "dicofre": "180201",
         "brasao": "https://dados.gov.pt/s/brasoes/180201.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Carregal do Sal",
         "freguesia": "Cabanas de Viriato",
         "dicofre": "180202",
         "brasao": "https://dados.gov.pt/s/brasoes/180202.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Carregal do Sal",
         "freguesia": "Oliveira do Conde",
         "dicofre": "180204",
         "brasao": "https://dados.gov.pt/s/brasoes/180204.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Carregal do Sal",
         "freguesia": "Parada",
         "dicofre": "180206",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Carregal do Sal",
         "freguesia": "Carregal do Sal",
         "dicofre": "180208",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Almofala",
         "dicofre": "180301",
         "brasao": "https://dados.gov.pt/s/brasoes/180301.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Cabril",
         "dicofre": "180303",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Castro Daire",
         "dicofre": "180304",
         "brasao": "https://dados.gov.pt/s/brasoes/180304.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Cujo",
         "dicofre": "180305",
         "brasao": "https://dados.gov.pt/s/brasoes/180305.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Gosende",
         "dicofre": "180309",
         "brasao": "https://dados.gov.pt/s/brasoes/180309.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Moes",
         "dicofre": "180312",
         "brasao": "https://dados.gov.pt/s/brasoes/180312.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Moledo",
         "dicofre": "180313",
         "brasao": "https://dados.gov.pt/s/brasoes/180313.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Monteiras",
         "dicofre": "180314",
         "brasao": "https://dados.gov.pt/s/brasoes/180314.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Pepim",
         "dicofre": "180317",
         "brasao": "https://dados.gov.pt/s/brasoes/180317.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Pinheiro",
         "dicofre": "180319",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Sao Joaninho",
         "dicofre": "180322",
         "brasao": "https://dados.gov.pt/s/brasoes/180322.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Uniao das freguesias de Mamouros, Alva e Ribolhos",
         "dicofre": "180323",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Uniao das freguesias de Mezio e Moura Morta",
         "dicofre": "180324",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Uniao das freguesias de Parada de Ester e Ester",
         "dicofre": "180325",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Uniao das freguesias de Picao e Ermida",
         "dicofre": "180326",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Castro Daire",
         "freguesia": "Uniao das freguesias de Reriz e Gafanhao",
         "dicofre": "180327",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Cinfaes",
         "dicofre": "180403",
         "brasao": "https://dados.gov.pt/s/brasoes/180403.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Espadanedo",
         "dicofre": "180404",
         "brasao": "https://dados.gov.pt/s/brasoes/180404.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Ferreiros de Tendais",
         "dicofre": "180405",
         "brasao": "https://dados.gov.pt/s/brasoes/180405.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Fornelos",
         "dicofre": "180406",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Moimenta",
         "dicofre": "180408",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Nespereira",
         "dicofre": "180409",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Oliveira do Douro",
         "dicofre": "180410",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Santiago de Piaes",
         "dicofre": "180412",
         "brasao": "https://dados.gov.pt/s/brasoes/180412.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Sao Cristovao de Nogueira",
         "dicofre": "180413",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Souselo",
         "dicofre": "180414",
         "brasao": "https://dados.gov.pt/s/brasoes/180414.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Tarouquela",
         "dicofre": "180415",
         "brasao": "https://dados.gov.pt/s/brasoes/180415.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Tendais",
         "dicofre": "180416",
         "brasao": "https://dados.gov.pt/s/brasoes/180416.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Travanca",
         "dicofre": "180417",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Cinfaes",
         "freguesia": "Uniao das freguesias de Alhoes, Bustelo, Gralheira e Ramires",
         "dicofre": "180418",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Avoes",
         "dicofre": "180502",
         "brasao": "https://dados.gov.pt/s/brasoes/180502.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Britiande",
         "dicofre": "180504",
         "brasao": "https://dados.gov.pt/s/brasoes/180504.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Cambres",
         "dicofre": "180505",
         "brasao": "https://dados.gov.pt/s/brasoes/180505.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Ferreirim",
         "dicofre": "180507",
         "brasao": "https://dados.gov.pt/s/brasoes/180507.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Ferreiros de Avoes",
         "dicofre": "180508",
         "brasao": "https://dados.gov.pt/s/brasoes/180508.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Figueira",
         "dicofre": "180509",
         "brasao": "https://dados.gov.pt/s/brasoes/180509.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Lalim",
         "dicofre": "180510",
         "brasao": "https://dados.gov.pt/s/brasoes/180510.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Lazarim",
         "dicofre": "180511",
         "brasao": "https://dados.gov.pt/s/brasoes/180511.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Penajoia",
         "dicofre": "180516",
         "brasao": "https://dados.gov.pt/s/brasoes/180516.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Penude",
         "dicofre": "180517",
         "brasao": "https://dados.gov.pt/s/brasoes/180517.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Samodaes",
         "dicofre": "180519",
         "brasao": "https://dados.gov.pt/s/brasoes/180519.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Sande",
         "dicofre": "180520",
         "brasao": "https://dados.gov.pt/s/brasoes/180520.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Varzea de Abrunhais",
         "dicofre": "180523",
         "brasao": "https://dados.gov.pt/s/brasoes/180523.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Vila Nova de Souto d'El-Rei",
         "dicofre": "180524",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Lamego (Almacave e Se)",
         "dicofre": "180525",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Uniao das freguesias de Bigorne, Magueija e Pretarouca",
         "dicofre": "180526",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Uniao das freguesias de Cepoes, Meijinhos e Melcoes",
         "dicofre": "180527",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Lamego",
         "freguesia": "Uniao das freguesias de Parada do Bispo e Valdigem",
         "dicofre": "180528",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Abrunhosa-a-Velha",
         "dicofre": "180601",
         "brasao": "https://dados.gov.pt/s/brasoes/180601.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Alcafache",
         "dicofre": "180602",
         "brasao": "https://dados.gov.pt/s/brasoes/180602.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Cunha Baixa",
         "dicofre": "180605",
         "brasao": "https://dados.gov.pt/s/brasoes/180605.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Espinho",
         "dicofre": "180606",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Fornos de Maceira Dao",
         "dicofre": "180607",
         "brasao": "https://dados.gov.pt/s/brasoes/180607.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Freixiosa",
         "dicofre": "180608",
         "brasao": "https://dados.gov.pt/s/brasoes/180608.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Quintela de Azurara",
         "dicofre": "180614",
         "brasao": "https://dados.gov.pt/s/brasoes/180614.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Sao Joao da Fresta",
         "dicofre": "180616",
         "brasao": "https://dados.gov.pt/s/brasoes/180616.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Uniao das freguesias de Mangualde, Mesquitela e Cunha Alta",
         "dicofre": "180619",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Uniao das freguesias de Moimenta de Maceira Dao e Lobelhe do Mato",
         "dicofre": "180620",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Uniao das freguesias de Santiago de Cassurraes e Povoa de Cervaes",
         "dicofre": "180621",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Mangualde",
         "freguesia": "Uniao das freguesias de Tavares (Chas, Varzea e Travanca)",
         "dicofre": "180622",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Alvite",
         "dicofre": "180702",
         "brasao": "https://dados.gov.pt/s/brasoes/180702.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Arcozelos",
         "dicofre": "180703",
         "brasao": "https://dados.gov.pt/s/brasoes/180703.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Baldos",
         "dicofre": "180705",
         "brasao": "https://dados.gov.pt/s/brasoes/180705.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Cabacos",
         "dicofre": "180706",
         "brasao": "https://dados.gov.pt/s/brasoes/180706.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Caria",
         "dicofre": "180707",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Castelo",
         "dicofre": "180708",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Leomil",
         "dicofre": "180709",
         "brasao": "https://dados.gov.pt/s/brasoes/180709.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Moimenta da Beira",
         "dicofre": "180710",
         "brasao": "https://dados.gov.pt/s/brasoes/180710.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Passo",
         "dicofre": "180713",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Vila da Rua",
         "dicofre": "180716",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Sarzedo",
         "dicofre": "180717",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Sever",
         "dicofre": "180719",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Vilar",
         "dicofre": "180720",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Uniao das freguesias de Paradinha e Nagosa",
         "dicofre": "180721",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Uniao das freguesias de Pera Velha, Aldeia de Nacomba e Ariz",
         "dicofre": "180722",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Moimenta da Beira",
         "freguesia": "Uniao das freguesias de Peva e Segoes",
         "dicofre": "180723",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Mortagua",
         "freguesia": "Cercosa",
         "dicofre": "180802",
         "brasao": "https://dados.gov.pt/s/brasoes/180802.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mortagua",
         "freguesia": "Espinho",
         "dicofre": "180804",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Mortagua",
         "freguesia": "Marmeleira",
         "dicofre": "180805",
         "brasao": "https://dados.gov.pt/s/brasoes/180805.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mortagua",
         "freguesia": "Pala",
         "dicofre": "180807",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Mortagua",
         "freguesia": "Sobral",
         "dicofre": "180808",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Mortagua",
         "freguesia": "Trezoi",
         "dicofre": "180809",
         "brasao": "https://dados.gov.pt/s/brasoes/180809.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Mortagua",
         "freguesia": "Uniao das freguesias de Mortagua, Vale de Remigio, Cortegaca e Almaca",
         "dicofre": "180811",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Nelas",
         "freguesia": "Canas de Senhorim",
         "dicofre": "180901",
         "brasao": "https://dados.gov.pt/s/brasoes/180901.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Nelas",
         "freguesia": "Nelas",
         "dicofre": "180903",
         "brasao": "https://dados.gov.pt/s/brasoes/180903.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Nelas",
         "freguesia": "Senhorim",
         "dicofre": "180905",
         "brasao": "https://dados.gov.pt/s/brasoes/180905.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Nelas",
         "freguesia": "Vilar Seco",
         "dicofre": "180906",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Nelas",
         "freguesia": "Lapa do Lobo",
         "dicofre": "180908",
         "brasao": "https://dados.gov.pt/s/brasoes/180908.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Nelas",
         "freguesia": "Uniao das freguesias de Carvalhal Redondo e Aguieira",
         "dicofre": "180910",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Nelas",
         "freguesia": "Uniao das freguesias de Santar e Moreira",
         "dicofre": "180911",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Oliveira de Frades",
         "freguesia": "Arcozelo das Maias",
         "dicofre": "181002",
         "brasao": "https://dados.gov.pt/s/brasoes/181002.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Oliveira de Frades",
         "freguesia": "Pinheiro",
         "dicofre": "181005",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Oliveira de Frades",
         "freguesia": "Ribeiradio",
         "dicofre": "181007",
         "brasao": "https://dados.gov.pt/s/brasoes/181007.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Oliveira de Frades",
         "freguesia": "Sao Joao da Serra",
         "dicofre": "181008",
         "brasao": "https://dados.gov.pt/s/brasoes/181008.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Oliveira de Frades",
         "freguesia": "Sao Vicente de Lafoes",
         "dicofre": "181009",
         "brasao": "https://dados.gov.pt/s/brasoes/181009.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Oliveira de Frades",
         "freguesia": "Uniao das freguesias de Arca e Varzielas",
         "dicofre": "181013",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Oliveira de Frades",
         "freguesia": "Uniao das freguesias de Destriz e Reigoso",
         "dicofre": "181014",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Oliveira de Frades",
         "freguesia": "Uniao das freguesias de Oliveira de Frades, Souto de Lafoes e Sejaes",
         "dicofre": "181015",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Castelo de Penalva",
         "dicofre": "181102",
         "brasao": "https://dados.gov.pt/s/brasoes/181102.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Esmolfe",
         "dicofre": "181103",
         "brasao": "https://dados.gov.pt/s/brasoes/181103.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Germil",
         "dicofre": "181104",
         "brasao": "https://dados.gov.pt/s/brasoes/181104.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Insua",
         "dicofre": "181105",
         "brasao": "https://dados.gov.pt/s/brasoes/181105.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Lusinde",
         "dicofre": "181106",
         "brasao": "https://dados.gov.pt/s/brasoes/181106.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Pindo",
         "dicofre": "181109",
         "brasao": "https://dados.gov.pt/s/brasoes/181109.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Real",
         "dicofre": "181110",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Sezures",
         "dicofre": "181111",
         "brasao": "https://dados.gov.pt/s/brasoes/181111.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Trancozelos",
         "dicofre": "181112",
         "brasao": "https://dados.gov.pt/s/brasoes/181112.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Uniao das freguesias de Antas e Matela",
         "dicofre": "181114",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Penalva do Castelo",
         "freguesia": "Uniao das freguesias de Vila Cova do Covelo/Mareco",
         "dicofre": "181115",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Penedono",
         "freguesia": "Beselga",
         "dicofre": "181202",
         "brasao": "https://dados.gov.pt/s/brasoes/181202.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penedono",
         "freguesia": "Castainco",
         "dicofre": "181203",
         "brasao": "https://dados.gov.pt/s/brasoes/181203.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penedono",
         "freguesia": "Penela da Beira",
         "dicofre": "181207",
         "brasao": "https://dados.gov.pt/s/brasoes/181207.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penedono",
         "freguesia": "Povoa de Penela",
         "dicofre": "181208",
         "brasao": "https://dados.gov.pt/s/brasoes/181208.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Penedono",
         "freguesia": "Souto",
         "dicofre": "181209",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Penedono",
         "freguesia": "Uniao das freguesias de Antas e Ourozinho",
         "dicofre": "181210",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Penedono",
         "freguesia": "Uniao das freguesias de Penedono e Granja",
         "dicofre": "181211",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Barro",
         "dicofre": "181302",
         "brasao": "https://dados.gov.pt/s/brasoes/181302.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Carquere",
         "dicofre": "181303",
         "brasao": "https://dados.gov.pt/s/brasoes/181303.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Paus",
         "dicofre": "181310",
         "brasao": "https://dados.gov.pt/s/brasoes/181310.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Resende",
         "dicofre": "181311",
         "brasao": "https://dados.gov.pt/s/brasoes/181311.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Sao Cipriano",
         "dicofre": "181312",
         "brasao": "https://dados.gov.pt/s/brasoes/181312.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Sao Joao de Fontoura",
         "dicofre": "181313",
         "brasao": "https://dados.gov.pt/s/brasoes/181313.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Sao Martinho de Mouros",
         "dicofre": "181314",
         "brasao": "https://dados.gov.pt/s/brasoes/181314.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Uniao das freguesias de Anreade e Sao Romao de Aregos",
         "dicofre": "181316",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Uniao das freguesias de Felgueiras e Feirao",
         "dicofre": "181317",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Uniao das freguesias de Freigil e Miomaes",
         "dicofre": "181318",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Resende",
         "freguesia": "Uniao das freguesias de Ovadas e Panchorra",
         "dicofre": "181319",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Santa Comba Dao",
         "freguesia": "Pinheiro de azere",
         "dicofre": "181403",
         "brasao": "https://dados.gov.pt/s/brasoes/181403.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Santa Comba Dao",
         "freguesia": "Sao Joaninho",
         "dicofre": "181405",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Santa Comba Dao",
         "freguesia": "Sao Joao de Areias",
         "dicofre": "181406",
         "brasao": "https://dados.gov.pt/s/brasoes/181406.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Santa Comba Dao",
         "freguesia": "Uniao das freguesias de Ovoa e Vimieiro",
         "dicofre": "181410",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Santa Comba Dao",
         "freguesia": "Uniao das freguesias de Santa Comba Dao e Couto do Mosteiro",
         "dicofre": "181411",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Santa Comba Dao",
         "freguesia": "Uniao das freguesias de Treixedo e Nagozela",
         "dicofre": "181412",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Castanheiro do Sul",
         "dicofre": "181501",
         "brasao": "https://dados.gov.pt/s/brasoes/181501.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Ervedosa do Douro",
         "dicofre": "181502",
         "brasao": "https://dados.gov.pt/s/brasoes/181502.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Nagozelo do Douro",
         "dicofre": "181504",
         "brasao": "https://dados.gov.pt/s/brasoes/181504.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Paredes da Beira",
         "dicofre": "181505",
         "brasao": "https://dados.gov.pt/s/brasoes/181505.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Riodades",
         "dicofre": "181507",
         "brasao": "https://dados.gov.pt/s/brasoes/181507.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Soutelo do Douro",
         "dicofre": "181509",
         "brasao": "https://dados.gov.pt/s/brasoes/181509.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Vale de Figueira",
         "dicofre": "181511",
         "brasao": "https://dados.gov.pt/s/brasoes/181511.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Valongo dos Azeites",
         "dicofre": "181512",
         "brasao": "https://dados.gov.pt/s/brasoes/181512.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Uniao das freguesias de Sao Joao da Pesqueira e Varzea de Trevoes",
         "dicofre": "181515",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Uniao das freguesias de Trevoes e Espinhosa",
         "dicofre": "181516",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Joao da Pesqueira",
         "freguesia": "Uniao das freguesias de Vilarouco e Pereiros",
         "dicofre": "181517",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Bordonhos",
         "dicofre": "181602",
         "brasao": "https://dados.gov.pt/s/brasoes/181602.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Figueiredo de Alva",
         "dicofre": "181606",
         "brasao": "https://dados.gov.pt/s/brasoes/181606.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Manhouce",
         "dicofre": "181607",
         "brasao": "https://dados.gov.pt/s/brasoes/181607.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Pindelo dos Milagres",
         "dicofre": "181608",
         "brasao": "https://dados.gov.pt/s/brasoes/181608.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Pinho",
         "dicofre": "181609",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Sao Felix",
         "dicofre": "181612",
         "brasao": "https://dados.gov.pt/s/brasoes/181612.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Serrazes",
         "dicofre": "181615",
         "brasao": "https://dados.gov.pt/s/brasoes/181615.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Sul",
         "dicofre": "181616",
         "brasao": "https://dados.gov.pt/s/brasoes/181616.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Valadares",
         "dicofre": "181617",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Vila Maior",
         "dicofre": "181619",
         "brasao": "https://dados.gov.pt/s/brasoes/181619.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Uniao das freguesias de Carvalhais e Candal",
         "dicofre": "181620",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Uniao das freguesias de Santa Cruz da Trapa e Sao Cristovao de Lafoes",
         "dicofre": "181621",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Uniao das freguesias de Sao Martinho das Moitas e Covas do Rio",
         "dicofre": "181622",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sao Pedro do Sul",
         "freguesia": "Uniao das freguesias de Sao Pedro do Sul, Varzea e Baioes",
         "dicofre": "181623",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Satao",
         "freguesia": "Avelal",
         "dicofre": "181702",
         "brasao": "https://dados.gov.pt/s/brasoes/181702.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Satao",
         "freguesia": "Ferreira de Aves",
         "dicofre": "181704",
         "brasao": "https://dados.gov.pt/s/brasoes/181704.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Satao",
         "freguesia": "Mioma",
         "dicofre": "181706",
         "brasao": "https://dados.gov.pt/s/brasoes/181706.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Satao",
         "freguesia": "Rio de Moinhos",
         "dicofre": "181707",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Satao",
         "freguesia": "Sao Miguel de Vila Boa",
         "dicofre": "181709",
         "brasao": "https://dados.gov.pt/s/brasoes/181709.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Satao",
         "freguesia": "Satao",
         "dicofre": "181710",
         "brasao": "https://dados.gov.pt/s/brasoes/181710.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Satao",
         "freguesia": "Silva de Cima",
         "dicofre": "181711",
         "brasao": "https://dados.gov.pt/s/brasoes/181711.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Satao",
         "freguesia": "Uniao das freguesias de aguas Boas e Forles",
         "dicofre": "181713",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Satao",
         "freguesia": "Uniao das freguesias de Romas, Decermilo e Vila Longa",
         "dicofre": "181714",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Arnas",
         "dicofre": "181801",
         "brasao": "https://dados.gov.pt/s/brasoes/181801.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Carregal",
         "dicofre": "181802",
         "brasao": "https://dados.gov.pt/s/brasoes/181802.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Chosendo",
         "dicofre": "181803",
         "brasao": "https://dados.gov.pt/s/brasoes/181803.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Cunha",
         "dicofre": "181804",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Faia",
         "dicofre": "181806",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Granjal",
         "dicofre": "181810",
         "brasao": "https://dados.gov.pt/s/brasoes/181810.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Lamosa",
         "dicofre": "181811",
         "brasao": "https://dados.gov.pt/s/brasoes/181811.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Quintela",
         "dicofre": "181814",
         "brasao": "https://dados.gov.pt/s/brasoes/181814.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Vila da Ponte",
         "dicofre": "181817",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Uniao das freguesias de Ferreirim e Macieira",
         "dicofre": "181818",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Uniao das freguesias de Fonte Arcada e Escurquela",
         "dicofre": "181819",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Uniao das freguesias de Penso e Freixinho",
         "dicofre": "181820",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Sernancelhe",
         "freguesia": "Uniao das freguesias de Sernancelhe e Sarzeda",
         "dicofre": "181821",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Adorigo",
         "dicofre": "181901",
         "brasao": "https://dados.gov.pt/s/brasoes/181901.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Arcos",
         "dicofre": "181902",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Chavaes",
         "dicofre": "181904",
         "brasao": "https://dados.gov.pt/s/brasoes/181904.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Desejosa",
         "dicofre": "181905",
         "brasao": "https://dados.gov.pt/s/brasoes/181905.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Granja do Tedo",
         "dicofre": "181906",
         "brasao": "https://dados.gov.pt/s/brasoes/181906.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Longa",
         "dicofre": "181908",
         "brasao": "https://dados.gov.pt/s/brasoes/181908.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Sendim",
         "dicofre": "181913",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Tabuaco",
         "dicofre": "181914",
         "brasao": "https://dados.gov.pt/s/brasoes/181914.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Valenca do Douro",
         "dicofre": "181917",
         "brasao": "https://dados.gov.pt/s/brasoes/181917.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Uniao das freguesias de Barcos e Santa Leocadia",
         "dicofre": "181918",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Uniao das freguesias de Paradela e Granjinha",
         "dicofre": "181919",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Uniao das freguesias de Pinheiros e Vale de Figueira",
         "dicofre": "181920",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tabuaco",
         "freguesia": "Uniao das freguesias de Tavora e Pereiro",
         "dicofre": "181921",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tarouca",
         "freguesia": "Mondim da Beira",
         "dicofre": "182004",
         "brasao": "https://dados.gov.pt/s/brasoes/182004.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tarouca",
         "freguesia": "Salzedas",
         "dicofre": "182005",
         "brasao": "https://dados.gov.pt/s/brasoes/182005.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tarouca",
         "freguesia": "Sao Joao de Tarouca",
         "dicofre": "182006",
         "brasao": "https://dados.gov.pt/s/brasoes/182006.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tarouca",
         "freguesia": "Varzea da Serra",
         "dicofre": "182009",
         "brasao": "https://dados.gov.pt/s/brasoes/182009.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tarouca",
         "freguesia": "Uniao das freguesias de Gouviaes e Ucanha",
         "dicofre": "182011",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tarouca",
         "freguesia": "Uniao das freguesias de Granja Nova e Vila Cha da Beira",
         "dicofre": "182012",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tarouca",
         "freguesia": "Uniao das freguesias de Tarouca e Dalvares",
         "dicofre": "182013",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Campo de Besteiros",
         "dicofre": "182102",
         "brasao": "https://dados.gov.pt/s/brasoes/182102.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Canas de Santa Maria",
         "dicofre": "182103",
         "brasao": "https://dados.gov.pt/s/brasoes/182103.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Casteloes",
         "dicofre": "182105",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Dardavaz",
         "dicofre": "182106",
         "brasao": "https://dados.gov.pt/s/brasoes/182106.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Ferreiros do Dao",
         "dicofre": "182107",
         "brasao": "https://dados.gov.pt/s/brasoes/182107.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Guardao",
         "dicofre": "182108",
         "brasao": "https://dados.gov.pt/s/brasoes/182108.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Lajeosa do Dao",
         "dicofre": "182109",
         "brasao": "https://dados.gov.pt/s/brasoes/182109.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Lobao da Beira",
         "dicofre": "182110",
         "brasao": "https://dados.gov.pt/s/brasoes/182110.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Molelos",
         "dicofre": "182111",
         "brasao": "https://dados.gov.pt/s/brasoes/182111.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Parada de Gonta",
         "dicofre": "182116",
         "brasao": "https://dados.gov.pt/s/brasoes/182116.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Santiago de Besteiros",
         "dicofre": "182118",
         "brasao": "https://dados.gov.pt/s/brasoes/182118.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Tonda",
         "dicofre": "182122",
         "brasao": "https://dados.gov.pt/s/brasoes/182122.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Uniao das freguesias de Barreiro de Besteiros e Tourigo",
         "dicofre": "182127",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Uniao das freguesias de Caparrosa e Silvares",
         "dicofre": "182128",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Uniao das freguesias de Mouraz e Vila Nova da Rainha",
         "dicofre": "182129",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Uniao das freguesias de Sao Joao do Monte e Mosteirinho",
         "dicofre": "182130",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Uniao das freguesias de Sao Miguel do Outeiro e Sabugosa",
         "dicofre": "182131",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Uniao das freguesias de Tondela e Nandufe",
         "dicofre": "182132",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Tondela",
         "freguesia": "Uniao das freguesias de Vilar de Besteiros e Mosteiro de Fraguas",
         "dicofre": "182133",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Vila Nova de Paiva",
         "freguesia": "Pendilhe",
         "dicofre": "182203",
         "brasao": "https://dados.gov.pt/s/brasoes/182203.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Vila Nova de Paiva",
         "freguesia": "Queiriga",
         "dicofre": "182204",
         "brasao": "https://dados.gov.pt/s/brasoes/182204.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Vila Nova de Paiva",
         "freguesia": "Touro",
         "dicofre": "182205",
         "brasao": "https://dados.gov.pt/s/brasoes/182205.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Vila Nova de Paiva",
         "freguesia": "Vila Cova à Coelheira",
         "dicofre": "182206",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Vila Nova de Paiva",
         "freguesia": "Uniao das freguesias de Vila Nova de Paiva, Alhais e Fraguas",
         "dicofre": "182208",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Abraveses",
         "dicofre": "182301",
         "brasao": "https://dados.gov.pt/s/brasoes/182301.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Bodiosa",
         "dicofre": "182304",
         "brasao": "https://dados.gov.pt/s/brasoes/182304.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Calde",
         "dicofre": "182305",
         "brasao": "https://dados.gov.pt/s/brasoes/182305.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Campo",
         "dicofre": "182306",
         "brasao": "https://dados.gov.pt/s/brasoes/182306.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Cavernaes",
         "dicofre": "182307",
         "brasao": "https://dados.gov.pt/s/brasoes/182307.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Cota",
         "dicofre": "182310",
         "brasao": "https://dados.gov.pt/s/brasoes/182310.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Fragosela",
         "dicofre": "182315",
         "brasao": "https://dados.gov.pt/s/brasoes/182315.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Lordosa",
         "dicofre": "182316",
         "brasao": "https://dados.gov.pt/s/brasoes/182316.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Silgueiros",
         "dicofre": "182317",
         "brasao": "https://dados.gov.pt/s/brasoes/182317.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Mundao",
         "dicofre": "182318",
         "brasao": "https://dados.gov.pt/s/brasoes/182318.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Orgens",
         "dicofre": "182319",
         "brasao": "https://dados.gov.pt/s/brasoes/182319.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Povolide",
         "dicofre": "182320",
         "brasao": "https://dados.gov.pt/s/brasoes/182320.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Ranhados",
         "dicofre": "182321",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Ribafeita",
         "dicofre": "182322",
         "brasao": "https://dados.gov.pt/s/brasoes/182322.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Rio de Loba",
         "dicofre": "182323",
         "brasao": "https://dados.gov.pt/s/brasoes/182323.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Santos Evos",
         "dicofre": "182325",
         "brasao": "https://dados.gov.pt/s/brasoes/182325.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Sao Joao de Lourosa",
         "dicofre": "182327",
         "brasao": "https://dados.gov.pt/s/brasoes/182327.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Sao Pedro de France",
         "dicofre": "182329",
         "brasao": "https://dados.gov.pt/s/brasoes/182329.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Uniao das freguesias de Barreiros e Cepoes",
         "dicofre": "182335",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Uniao das freguesias de Boa Aldeia, Farminhao e Torredeita",
         "dicofre": "182336",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Coutos de Viseu",
         "dicofre": "182337",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Uniao das freguesias de Fail e Vila Cha de Sa",
         "dicofre": "182338",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Repeses e Sao Salvador",
         "dicofre": "182339",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Sao Cipriano e Vil de Souto",
         "dicofre": "182340",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Viseu",
         "freguesia": "Viseu",
         "dicofre": "182341",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Vouzela",
         "freguesia": "Alcofra",
         "dicofre": "182401",
         "brasao": "https://dados.gov.pt/s/brasoes/182401.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Vouzela",
         "freguesia": "Campia",
         "dicofre": "182403",
         "brasao": "https://dados.gov.pt/s/brasoes/182403.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Vouzela",
         "freguesia": "Fornelo do Monte",
         "dicofre": "182407",
         "brasao": "https://dados.gov.pt/s/brasoes/182407.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Vouzela",
         "freguesia": "Queira",
         "dicofre": "182409",
         "brasao": "https://dados.gov.pt/s/brasoes/182409.png"
      },
      {
         "distrito": "Viseu",
         "concelho": "Vouzela",
         "freguesia": "Sao Miguel do Mato",
         "dicofre": "182410",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Vouzela",
         "freguesia": "Ventosa",
         "dicofre": "182411",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Vouzela",
         "freguesia": "Uniao das freguesias de Cambra e Carvalhal de Vermilhas",
         "dicofre": "182413",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Vouzela",
         "freguesia": "Uniao das freguesias de Fatauncos e Figueiredo das Donas",
         "dicofre": "182414",
         "brasao": ""
      },
      {
         "distrito": "Viseu",
         "concelho": "Vouzela",
         "freguesia": "Uniao das freguesias de Vouzela e Pacos de Vilharigues",
         "dicofre": "182415",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Calheta",
         "freguesia": "Arco da Calheta",
         "dicofre": "310101",
         "brasao": "https://dados.gov.pt/s/brasoes/310101.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Calheta",
         "freguesia": "Calheta",
         "dicofre": "310102",
         "brasao": "https://dados.gov.pt/s/brasoes/310102.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Calheta",
         "freguesia": "Estreito da Calheta",
         "dicofre": "310103",
         "brasao": "https://dados.gov.pt/s/brasoes/310103.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Calheta",
         "freguesia": "Faja da Ovelha",
         "dicofre": "310104",
         "brasao": "https://dados.gov.pt/s/brasoes/310104.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Calheta",
         "freguesia": "Jardim do Mar",
         "dicofre": "310105",
         "brasao": "https://dados.gov.pt/s/brasoes/310105.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Calheta",
         "freguesia": "Paul do Mar",
         "dicofre": "310106",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Calheta",
         "freguesia": "Ponta do Pargo",
         "dicofre": "310107",
         "brasao": "https://dados.gov.pt/s/brasoes/310107.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Calheta",
         "freguesia": "Prazeres",
         "dicofre": "310108",
         "brasao": "https://dados.gov.pt/s/brasoes/310108.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Camara de Lobos",
         "freguesia": "Camara de Lobos",
         "dicofre": "310201",
         "brasao": "https://dados.gov.pt/s/brasoes/310201.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Camara de Lobos",
         "freguesia": "Curral das Freiras",
         "dicofre": "310202",
         "brasao": "https://dados.gov.pt/s/brasoes/310202.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Camara de Lobos",
         "freguesia": "Estreito de Camara de Lobos",
         "dicofre": "310203",
         "brasao": "https://dados.gov.pt/s/brasoes/310203.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Camara de Lobos",
         "freguesia": "Quinta Grande",
         "dicofre": "310204",
         "brasao": "https://dados.gov.pt/s/brasoes/310204.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Camara de Lobos",
         "freguesia": "Jardim da Serra",
         "dicofre": "310205",
         "brasao": "https://dados.gov.pt/s/brasoes/310205.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Imaculado Coracao de Maria",
         "dicofre": "310301",
         "brasao": "https://dados.gov.pt/s/brasoes/310301.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Monte",
         "dicofre": "310302",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Funchal (Santa Luzia)",
         "dicofre": "310303",
         "brasao": "https://dados.gov.pt/s/brasoes/310303.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Funchal (Santa Maria Maior)",
         "dicofre": "310304",
         "brasao": "https://dados.gov.pt/s/brasoes/310304.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Santo Antonio",
         "dicofre": "310305",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Sao Goncalo",
         "dicofre": "310306",
         "brasao": "https://dados.gov.pt/s/brasoes/310306.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Sao Martinho",
         "dicofre": "310307",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Funchal (Sao Pedro)",
         "dicofre": "310308",
         "brasao": "https://dados.gov.pt/s/brasoes/310308.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Sao Roque",
         "dicofre": "310309",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Funchal",
         "freguesia": "Funchal (Se)",
         "dicofre": "310310",
         "brasao": "https://dados.gov.pt/s/brasoes/310310.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Machico",
         "freguesia": "agua de Pena",
         "dicofre": "310401",
         "brasao": "https://dados.gov.pt/s/brasoes/310401.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Machico",
         "freguesia": "Canical",
         "dicofre": "310402",
         "brasao": "https://dados.gov.pt/s/brasoes/310402.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Machico",
         "freguesia": "Machico",
         "dicofre": "310403",
         "brasao": "https://dados.gov.pt/s/brasoes/310403.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Machico",
         "freguesia": "Porto da Cruz",
         "dicofre": "310404",
         "brasao": "https://dados.gov.pt/s/brasoes/310404.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Machico",
         "freguesia": "Santo Antonio da Serra",
         "dicofre": "310405",
         "brasao": "https://dados.gov.pt/s/brasoes/310405.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Ponta do Sol",
         "freguesia": "Canhas",
         "dicofre": "310501",
         "brasao": "https://dados.gov.pt/s/brasoes/310501.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Ponta do Sol",
         "freguesia": "Madalena do Mar",
         "dicofre": "310502",
         "brasao": "https://dados.gov.pt/s/brasoes/310502.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Ponta do Sol",
         "freguesia": "Ponta do Sol",
         "dicofre": "310503",
         "brasao": "https://dados.gov.pt/s/brasoes/310503.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Porto Moniz",
         "freguesia": "Achadas da Cruz",
         "dicofre": "310601",
         "brasao": "https://dados.gov.pt/s/brasoes/310601.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Porto Moniz",
         "freguesia": "Porto Moniz",
         "dicofre": "310602",
         "brasao": "https://dados.gov.pt/s/brasoes/310602.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Porto Moniz",
         "freguesia": "Ribeira da Janela",
         "dicofre": "310603",
         "brasao": "https://dados.gov.pt/s/brasoes/310603.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Porto Moniz",
         "freguesia": "Seixal",
         "dicofre": "310604",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Ribeira Brava",
         "freguesia": "Campanario",
         "dicofre": "310701",
         "brasao": "https://dados.gov.pt/s/brasoes/310701.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Ribeira Brava",
         "freguesia": "Ribeira Brava",
         "dicofre": "310702",
         "brasao": "https://dados.gov.pt/s/brasoes/310702.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Ribeira Brava",
         "freguesia": "Serra de agua",
         "dicofre": "310703",
         "brasao": "https://dados.gov.pt/s/brasoes/310703.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Ribeira Brava",
         "freguesia": "Tabua",
         "dicofre": "310704",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santa Cruz",
         "freguesia": "Camacha",
         "dicofre": "310802",
         "brasao": "https://dados.gov.pt/s/brasoes/310802.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santa Cruz",
         "freguesia": "Canico",
         "dicofre": "310803",
         "brasao": "https://dados.gov.pt/s/brasoes/310803.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santa Cruz",
         "freguesia": "Gaula",
         "dicofre": "310804",
         "brasao": "https://dados.gov.pt/s/brasoes/310804.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santa Cruz",
         "freguesia": "Santa Cruz",
         "dicofre": "310805",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santa Cruz",
         "freguesia": "Santo Antonio da Serra",
         "dicofre": "310806",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santana",
         "freguesia": "Arco de Sao Jorge",
         "dicofre": "310901",
         "brasao": "https://dados.gov.pt/s/brasoes/310901.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santana",
         "freguesia": "Faial",
         "dicofre": "310902",
         "brasao": "https://dados.gov.pt/s/brasoes/310902.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santana",
         "freguesia": "Santana",
         "dicofre": "310903",
         "brasao": ""
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santana",
         "freguesia": "Sao Jorge",
         "dicofre": "310904",
         "brasao": "https://dados.gov.pt/s/brasoes/310904.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santana",
         "freguesia": "Sao Roque do Faial",
         "dicofre": "310905",
         "brasao": "https://dados.gov.pt/s/brasoes/310905.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Santana",
         "freguesia": "Ilha",
         "dicofre": "310906",
         "brasao": "https://dados.gov.pt/s/brasoes/310906.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Sao Vicente",
         "freguesia": "Boa Ventura",
         "dicofre": "311001",
         "brasao": "https://dados.gov.pt/s/brasoes/311001.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Sao Vicente",
         "freguesia": "Ponta Delgada",
         "dicofre": "311002",
         "brasao": "https://dados.gov.pt/s/brasoes/311002.png"
      },
      {
         "distrito": "Ilha da Madeira",
         "concelho": "Sao Vicente",
         "freguesia": "Sao Vicente",
         "dicofre": "311003",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Porto Santo",
         "concelho": "Porto Santo",
         "freguesia": "Porto Santo",
         "dicofre": "320101",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Santa Maria",
         "concelho": "Vila do Porto",
         "freguesia": "Almagreira",
         "dicofre": "410101",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Santa Maria",
         "concelho": "Vila do Porto",
         "freguesia": "Santa Barbara",
         "dicofre": "410102",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Santa Maria",
         "concelho": "Vila do Porto",
         "freguesia": "Santo Espirito",
         "dicofre": "410103",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Santa Maria",
         "concelho": "Vila do Porto",
         "freguesia": "Sao Pedro",
         "dicofre": "410104",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Santa Maria",
         "concelho": "Vila do Porto",
         "freguesia": "Vila do Porto",
         "dicofre": "410105",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Lagoa",
         "freguesia": "agua de Pau",
         "dicofre": "420101",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Lagoa",
         "freguesia": "Cabouco",
         "dicofre": "420102",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Lagoa",
         "freguesia": "Lagoa (Nossa Senhora do Rosario)",
         "dicofre": "420103",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Lagoa",
         "freguesia": "Lagoa (Santa Cruz)",
         "dicofre": "420104",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Lagoa",
         "freguesia": "Ribeira Cha",
         "dicofre": "420105",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Nordeste",
         "freguesia": "Achada",
         "dicofre": "420201",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Nordeste",
         "freguesia": "Achadinha",
         "dicofre": "420202",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Nordeste",
         "freguesia": "Lomba da Fazenda",
         "dicofre": "420203",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Nordeste",
         "freguesia": "Nordeste",
         "dicofre": "420204",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Nordeste",
         "freguesia": "Salga",
         "dicofre": "420206",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Nordeste",
         "freguesia": "Santana",
         "dicofre": "420207",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Nordeste",
         "freguesia": "Algarvia",
         "dicofre": "420208",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Nordeste",
         "freguesia": "Santo Antonio de Nordestinho",
         "dicofre": "420209",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Nordeste",
         "freguesia": "Sao Pedro de Nordestinho",
         "dicofre": "420210",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Arrifes",
         "dicofre": "420301",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Candelaria",
         "dicofre": "420303",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Capelas",
         "dicofre": "420304",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Covoada",
         "dicofre": "420305",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Faja de Baixo",
         "dicofre": "420306",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Faja de Cima",
         "dicofre": "420307",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Fenais da Luz",
         "dicofre": "420308",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Feteiras",
         "dicofre": "420309",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Ginetes",
         "dicofre": "420310",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Mosteiros",
         "dicofre": "420311",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Ponta Delgada (Sao Sebastiao)",
         "dicofre": "420312",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Ponta Delgada (Sao Jose)",
         "dicofre": "420313",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Ponta Delgada (Sao Pedro)",
         "dicofre": "420314",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Relva",
         "dicofre": "420315",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Remedios",
         "dicofre": "420316",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Rosto do Cao (Livramento)",
         "dicofre": "420317",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Rosto do Cao (Sao Roque)",
         "dicofre": "420318",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Santa Barbara",
         "dicofre": "420319",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Santo Antonio",
         "dicofre": "420320",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Sao Vicente Ferreira",
         "dicofre": "420321",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Sete Cidades",
         "dicofre": "420322",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Ajuda da Bretanha",
         "dicofre": "420323",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Pilar da Bretanha",
         "dicofre": "420324",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ponta Delgada",
         "freguesia": "Santa Clara",
         "dicofre": "420325",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Povoacao",
         "freguesia": "agua Retorta",
         "dicofre": "420401",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Povoacao",
         "freguesia": "Faial da Terra",
         "dicofre": "420402",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Povoacao",
         "freguesia": "Furnas",
         "dicofre": "420403",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Povoacao",
         "freguesia": "Nossa Senhora dos Remedios",
         "dicofre": "420404",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Povoacao",
         "freguesia": "Povoacao",
         "dicofre": "420405",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Povoacao",
         "freguesia": "Ribeira Quente",
         "dicofre": "420406",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Calhetas",
         "dicofre": "420501",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Fenais da Ajuda",
         "dicofre": "420502",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Lomba da Maia",
         "dicofre": "420503",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Lomba de Sao Pedro",
         "dicofre": "420504",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Maia",
         "dicofre": "420505",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Pico da Pedra",
         "dicofre": "420506",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Porto Formoso",
         "dicofre": "420507",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Rabo de Peixe",
         "dicofre": "420508",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Ribeira Grande (Conceicao)",
         "dicofre": "420509",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Ribeira Grande (Matriz)",
         "dicofre": "420510",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Ribeira Seca",
         "dicofre": "420511",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Ribeirinha",
         "dicofre": "420512",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Santa Barbara",
         "dicofre": "420513",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Ribeira Grande",
         "freguesia": "Sao Bras",
         "dicofre": "420514",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Vila Franca do Campo",
         "freguesia": "agua de Alto",
         "dicofre": "420601",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Vila Franca do Campo",
         "freguesia": "Ponta Garca",
         "dicofre": "420602",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Vila Franca do Campo",
         "freguesia": "Ribeira das Tainhas",
         "dicofre": "420603",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Vila Franca do Campo",
         "freguesia": "Vila Franca do Campo (Sao Miguel)",
         "dicofre": "420604",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Vila Franca do Campo",
         "freguesia": "Vila Franca do Campo (Sao Pedro)",
         "dicofre": "420605",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Miguel",
         "concelho": "Vila Franca do Campo",
         "freguesia": "Ribeira Seca",
         "dicofre": "420606",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Altares",
         "dicofre": "430101",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Angra (Nossa Senhora da Conceicao)",
         "dicofre": "430102",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Angra (Santa Luzia)",
         "dicofre": "430103",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Angra (Sao Pedro)",
         "dicofre": "430104",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Angra (Se)",
         "dicofre": "430105",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Cinco Ribeiras",
         "dicofre": "430106",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Doze Ribeiras",
         "dicofre": "430107",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Feteira",
         "dicofre": "430108",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Porto Judeu",
         "dicofre": "430109",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Posto Santo",
         "dicofre": "430110",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Raminho",
         "dicofre": "430111",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Ribeirinha",
         "dicofre": "430112",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Santa Barbara",
         "dicofre": "430113",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Sao Bartolomeu de Regatos",
         "dicofre": "430114",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Sao Bento",
         "dicofre": "430115",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Sao Mateus da Calheta",
         "dicofre": "430116",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Serreta",
         "dicofre": "430117",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Terra Cha",
         "dicofre": "430118",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Angra do Heroismo",
         "freguesia": "Vila de Sao Sebastiao",
         "dicofre": "430119",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Agualva",
         "dicofre": "430201",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Biscoitos",
         "dicofre": "430202",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Cabo da Praia",
         "dicofre": "430203",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Fonte do Bastardo",
         "dicofre": "430204",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Fontinhas",
         "dicofre": "430205",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Lajes",
         "dicofre": "430206",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Praia da Vitoria (Santa Cruz)",
         "dicofre": "430207",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Quatro Ribeiras",
         "dicofre": "430208",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Sao Bras",
         "dicofre": "430209",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Vila Nova",
         "dicofre": "430210",
         "brasao": ""
      },
      {
         "distrito": "Ilha Terceira",
         "concelho": "Vila da Praia da Vitoria",
         "freguesia": "Porto Martins",
         "dicofre": "430211",
         "brasao": ""
      },
      {
         "distrito": "Ilha Graciosa",
         "concelho": "Santa Cruz da Graciosa",
         "freguesia": "Guadalupe",
         "dicofre": "440101",
         "brasao": ""
      },
      {
         "distrito": "Ilha Graciosa",
         "concelho": "Santa Cruz da Graciosa",
         "freguesia": "Luz",
         "dicofre": "440102",
         "brasao": ""
      },
      {
         "distrito": "Ilha Graciosa",
         "concelho": "Santa Cruz da Graciosa",
         "freguesia": "Sao Mateus",
         "dicofre": "440103",
         "brasao": ""
      },
      {
         "distrito": "Ilha Graciosa",
         "concelho": "Santa Cruz da Graciosa",
         "freguesia": "Santa Cruz da Graciosa",
         "dicofre": "440104",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Calheta",
         "freguesia": "Calheta",
         "dicofre": "450101",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Calheta",
         "freguesia": "Norte Pequeno",
         "dicofre": "450102",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Calheta",
         "freguesia": "Ribeira Seca",
         "dicofre": "450103",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Calheta",
         "freguesia": "Santo Antao",
         "dicofre": "450104",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Calheta",
         "freguesia": "Topo (Nossa Senhora do Rosario)",
         "dicofre": "450105",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Velas",
         "freguesia": "Manadas (Santa Barbara)",
         "dicofre": "450201",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Velas",
         "freguesia": "Norte Grande (Neves)",
         "dicofre": "450202",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Velas",
         "freguesia": "Rosais",
         "dicofre": "450203",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Velas",
         "freguesia": "Santo Amaro",
         "dicofre": "450204",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Velas",
         "freguesia": "Urzelina (Sao Mateus)",
         "dicofre": "450205",
         "brasao": ""
      },
      {
         "distrito": "Ilha de Sao Jorge",
         "concelho": "Velas",
         "freguesia": "Velas (Sao Jorge)",
         "dicofre": "450206",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Lajes do Pico",
         "freguesia": "Calheta de Nesquim",
         "dicofre": "460101",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Lajes do Pico",
         "freguesia": "Lajes do Pico",
         "dicofre": "460102",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Lajes do Pico",
         "freguesia": "Piedade",
         "dicofre": "460103",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Lajes do Pico",
         "freguesia": "Ribeiras",
         "dicofre": "460104",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Lajes do Pico",
         "freguesia": "Ribeirinha",
         "dicofre": "460105",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Lajes do Pico",
         "freguesia": "Sao Joao",
         "dicofre": "460106",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Madalena",
         "freguesia": "Bandeiras",
         "dicofre": "460201",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Madalena",
         "freguesia": "Candelaria",
         "dicofre": "460202",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Madalena",
         "freguesia": "Criacao Velha",
         "dicofre": "460203",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Madalena",
         "freguesia": "Madalena",
         "dicofre": "460204",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Madalena",
         "freguesia": "Sao Caetano",
         "dicofre": "460205",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Madalena",
         "freguesia": "Sao Mateus",
         "dicofre": "460206",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Sao Roque do Pico",
         "freguesia": "Prainha",
         "dicofre": "460301",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Sao Roque do Pico",
         "freguesia": "Santa Luzia",
         "dicofre": "460302",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Sao Roque do Pico",
         "freguesia": "Santo Amaro",
         "dicofre": "460303",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Sao Roque do Pico",
         "freguesia": "Santo Antonio",
         "dicofre": "460304",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Pico",
         "concelho": "Sao Roque do Pico",
         "freguesia": "Sao Roque do Pico",
         "dicofre": "460305",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Capelo",
         "dicofre": "470101",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Castelo Branco",
         "dicofre": "470102",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Cedros",
         "dicofre": "470103",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Feteira",
         "dicofre": "470104",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Flamengos",
         "dicofre": "470105",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Horta (Angustias)",
         "dicofre": "470106",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Horta (Conceicao)",
         "dicofre": "470107",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Horta (Matriz)",
         "dicofre": "470108",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Pedro Miguel",
         "dicofre": "470109",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Praia do Almoxarife",
         "dicofre": "470110",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Praia do Norte",
         "dicofre": "470111",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Ribeirinha",
         "dicofre": "470112",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Faial",
         "concelho": "Horta",
         "freguesia": "Salao",
         "dicofre": "470113",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Lajes das Flores",
         "freguesia": "Faja Grande",
         "dicofre": "480101",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Lajes das Flores",
         "freguesia": "Fajazinha",
         "dicofre": "480102",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Lajes das Flores",
         "freguesia": "Fazenda",
         "dicofre": "480103",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Lajes das Flores",
         "freguesia": "Lajedo",
         "dicofre": "480104",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Lajes das Flores",
         "freguesia": "Lajes das Flores",
         "dicofre": "480105",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Lajes das Flores",
         "freguesia": "Lomba",
         "dicofre": "480106",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Lajes das Flores",
         "freguesia": "Mosteiro",
         "dicofre": "480107",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Santa Cruz das Flores",
         "freguesia": "Caveira",
         "dicofre": "480201",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Santa Cruz das Flores",
         "freguesia": "Cedros",
         "dicofre": "480202",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Santa Cruz das Flores",
         "freguesia": "Ponta Delgada",
         "dicofre": "480203",
         "brasao": ""
      },
      {
         "distrito": "Ilha das Flores",
         "concelho": "Santa Cruz das Flores",
         "freguesia": "Santa Cruz das Flores",
         "dicofre": "480204",
         "brasao": ""
      },
      {
         "distrito": "Ilha do Corvo",
         "concelho": "Corvo",
         "freguesia": "Corvo",
         "dicofre": "490101",
         "brasao": ""
      }
   ]
}

tFullCobj = {};

// loop through the objects in tttdddata.fregeusias and create a new object with the distrito as the key
for (let i = 0; i < tttdddata.freguesias.length; i++) {
    const freguesia = tttdddata.freguesias[i];
    const di = freguesia.distrito;
    const co = freguesia.concelho;
    const freguesiaName = freguesia.freguesia;
    const ic = freguesia.dicofre;
    const br = freguesia.brasao;
    if (tFullCobj[di] === undefined) {
        tFullCobj[di] = {};
    }
    if (tFullCobj[di][co] === undefined) {
        tFullCobj[di][co] = [];
    }
    tFullCobj[di][co].push({
        freguesia: freguesiaName,
        ic: ic,
        br: br
    });
}

console.log("tFullCobj: " + JSON.stringify(tFullCobj, null, 0));

 
 
function removeAccents(asstr) {
 // replace accent characters with non-accent characters in upper or lower case
    asstrA = asstr.replace(/[ÀaAÃÄÅ]/g, "A");
    asstrB = asstrA.replace(/[àaaaäå]/g, "a");
    asstrC = asstrB.replace(/[ÈEÊË]/g, "E");
    asstrD = asstrC.replace(/[èeeë]/g, "e");
    asstrE = asstrD.replace(/[ÌIÎÏ]/g, "I");
    asstrF = asstrE.replace(/[ìiîï]/g, "i");
    asstrG = asstrF.replace(/[ÒOÔÕÖ]/g, "O");
    asstrH = asstrG.replace(/[òoooö]/g, "o");
    asstrI = asstrH.replace(/[ÙÚÛÜ]/g, "U");
    asstrJ = asstrI.replace(/[ùuûü]/g, "u");
    asstrK = asstrJ.replace(/[Ç]/g, "C");
    asstrL = asstrK.replace(/[c]/g, "c");
    asstrM = asstrL.replace(/[Ñ]/g, "N");
    asstrN = asstrM.replace(/[ñ]/g, "n");
    asstrO = asstrN.replace(/[Ý]/g, "Y");
    asstrP = asstrO.replace(/[ý]/g, "y");
 


    return asstrP;


     
}
 


    
districts = [];
data = tttdddata;

tFullOObj = {};
// loop through the objects in tttdddata.fregeusias and create a new object with the distrito as the key

data.freguesias.forEach(freguesia => {
    const di = freguesia.distrito;
    const co = freguesia.concelho;
    const freguesiaName = freguesia.freguesia;
    const ic = freguesia.dicofre;
    br = freguesia.brasao;
    if(br.indexOf("http") === -1) {
        br = "ok";

    } else {
        br = "ko";
    }
    if (tFullOObj[di] === undefined) {
        tFullOObj[di] = {};
    }
    if (tFullOObj[di][co] === undefined) {
        tFullOObj[di][co] = {};
    }

    lt = 0.0;
    lg = 0.0;
    ll = "fr";
    // loop through the objects in tmpLocArr and check if the freguesiaName matches the c_location
    for (let j = 0; j < tmpLocArr.length; j++) {
        tLoctoLower = tmpLocArr[j].c_location.toLowerCase();
        freguesiaNameToLower = freguesiaName.toLowerCase();
        distrToLower = di.toLowerCase();
        consToLower = co.toLowerCase();
        if (tLoctoLower === freguesiaNameToLower) {
            lt = tmpLocArr[j].c_loc_lat;
            lg = tmpLocArr[j].c_loc_lng;
            ll = "fr";
            break;

        }  else if(tLoctoLower === consToLower) {
            lt = tmpLocArr[j].c_loc_lat;
            lg = tmpLocArr[j].c_loc_lng;
            ll = "co";
            break;

        } else if(tLoctoLower === distrToLower) {
            lt = tmpLocArr[j].c_loc_lat;
            lg = tmpLocArr[j].c_loc_lng;
            ll = "di";
            break;

        } else {
            lt = 0.0;
            lg = 0.0;
        }
    }

    tFullOObj[di][co][freguesiaName] = {
        ic: ic,
        br: br,
        lt: lt,
        lg: lg,
        ll: ll
    };
});

console.log("tFullOObj: " + JSON.stringify(tFullOObj, null, 3));


 
for (let i = 0; i < data.freguesias.length; i++) {
    //
    const freguesia = data.freguesias[i];
    const di = freguesia.distrito;
    const co = freguesia.concelho;
    const freguesiaName = freguesia.freguesia;
    const ic = freguesia.dicofre;
     br = freguesia.brasao;
    if(br.indexOf("http") === -1) {
        br = "ok";

    } else {
        br = "ko";
    }

    lt = 0.0;
    lg = 0.0;
    ll = "fr";
    // loop through the objects in tmpLocArr and check if the freguesiaName matches the c_location
    for (let j = 0; j < tmpLocArr.length; j++) {
        tLoctoLower = tmpLocArr[j].c_location.toLowerCase();
        freguesiaNameToLower = freguesiaName.toLowerCase();
        distrToLower = di.toLowerCase();
        consToLower = co.toLowerCase();
        if (tLoctoLower === freguesiaNameToLower) {
            lt = tmpLocArr[j].c_loc_lat;
            lg = tmpLocArr[j].c_loc_lng;
            ll = "fr";
            break;

        }  else if(tLoctoLower === consToLower) {
            lt = tmpLocArr[j].c_loc_lat;
            lg = tmpLocArr[j].c_loc_lng;
            ll = "co";
            break;

        } else if(tLoctoLower === distrToLower) {
            lt = tmpLocArr[j].c_loc_lat;
            lg = tmpLocArr[j].c_loc_lng;
            ll = "di";
            break;

        } else {
            lt = 0.0;
            lg = 0.0;
        }
    }

   
const distritoIndex =  districts.findIndex(d => d.distrito === di);
if (distritoIndex === -1) {
    districts.push({
        di: di,
        cs: [
            {
                co: co,
                fs: [
                    {
                        fr: freguesiaName,
                        ic: ic,
                        br: br,
                        lt: lt,
                        lg: lg,
                        ll: ll
                    }
                ]
            }
        ]
    });
} else {
    const concelhoIndex = districts[distritoIndex].concelhos.findIndex(c => c.concelho === co);
    if (concelhoIndex === -1) {
        districts[distritoIndex].concelhos.push({
   
            co: co,
            fs: [
                {
                    fr: freguesiaName,
                    ic: ic,
                    br: br,
                    lt: lt,
                    lg: lg,
                    ll: ll
                }
            ]
        });
    } else {
        districts[distritoIndex].concelhos[concelhoIndex].freguesias. 

        push({
            fr: freguesiaName,
            ic: ic,
            br: br,
            lt: lt,
            lg: lg,
            ll: ll
        });
    }

}


}


// get all distinct di from districts

const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
}
const distritos = data.freguesias.map(f => f.distrito).filter(distinct);
console.log("distritos: " + distritos);

tStrnif = JSON.stringify(districts, null, 0);
console.log("tStrnif: " + tStrnif);
 


