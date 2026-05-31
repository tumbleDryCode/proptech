the messaging system on logisgo has to be updated with the messaging system from incasa (x_all.js lines 6831 - 8433).
The first thing we need to do is to compare the stxt[..] language strings in the messaging functions from the incasa (incasa\js\app\aa-en_us.js) aa-en-us.js with the logisgo aa-en-us.js (web\js\app\aa-en_us.js) and update the logisgo as neccessary. do not overwrite stxt[..] strings with new values. create the new stxt[..] strings in the web\js\app\aa-en_us.js language file.
This is so that the message box and all related texts, labels, etc are correctly displayed.  

I?ll do this in two steps: first diff stxt[...] keys used by Incasa messaging vs Logisgo language file, then add only missing keys into Logisgo aa-en_us.js without changing any existing values.

I?m now extracting exactly which stxt[...] IDs the Incasa messaging block uses, then I?ll cross-check those IDs in Logisgo and patch only missing entries.

Searched for regex patterns and reviewed 4 files
I verified only stxt[700] exists in Logisgo?s messaging range, so I?m adding the missing Incasa messaging labels (stxt[702] to stxt[733]) as new entries without touching existing keys.

Updated aa-en_us.js+32-0
Completed the first step.

I compared the messaging string range and updated Logisgo by adding the missing Incasa messaging keys as new entries, without overwriting existing stxt[...] values.

Updated file:

aa-en_us.js
What was added:

stxt[702] through stxt[733] were added under the messaging section.
Existing keys (including stxt[700] and all other current Logisgo strings) were left unchanged.
Diagnostics are clean for aa-en_us.js.
Natural next step:

Port the Incasa messaging block from x_all.js lines equivalent to the target section and remap any conflicting stxt[...] references if needed.

User: ok, the comments are not showing up in the x_aa-show-prop.js for instance. even after you finish posting it. here is the output after loading the x_aa-show-prop page and submitting a comment:
x_booter.js?version=2:2904 doFrMBoolStr: yes
x_all.js?version=2:2319 doNurAjaxPipe: fillDynFrmArr : batch[{"f":"fnishCoForm","v":"select * from qco where _id='24088' order by _id Desc limit 100","e":"qco"}]
x_booter.js?version=2:2315 fillMFormArr: {"qco":{"f":"fnishCoForm","v":[{"_id":"24088","c_rtype":"5","c_coid":"5","c_category":"Item title here","c_uid":"46","c_internal":"5","c_name":"Shop Title","c_header":"...","c_desc":"Descriptionddd ffffff dfdg","c_tel":"Tel","c_contact":"Contact","c_web":"http....","c_email":"proptech@propsgo.com","c_logoimg":"24088_1735769930.jpg","c_zipcode":"","c_zp":"1","c_door":"","c_street":"","c_location":"Olival Basto","c_region":"Lisbon","c_country":"Portugal","c_ccode":"1","c_placeid":"1","c_loc_lat":"38.7908","c_loc_lng":"-9.16621","c_google_url":"1","c_rating":"1","c_revs":"1","c_msg":"","c_privacy":"5","c_whours":"N4Igtg9gdgjCBcIAMAOeBmJIA05oCYFk1Mc8p0jUMtdIoAWKk28gViIFoz6A2LsgBcArgFM4iTp3hShYwpOmzcI0ZUUzuKsUw3KQqjpLmj x3AHdRAEwnEaZK9YXJ08JE0s3190l u6vqxORiBaIE5mYUIAFsJ21H4GcS6JrIJxPmmxwoHZKnGh4RnCUeEAZgBOAJYJLGRV1an1uI1ZMO6UrTV5LSCNRQ01ZWQAzgCGgnUOuBOCzTMgc1l9c72Lc4OzkyOzwrDMG-sLSaP7K0eMh6f7W0v7uxHWMdNJFs8nwc8Xb8-rvzE7u8Yo8rC9rsFRDFPo4oT9ITF-gigVCRgBfIA","c_vala":"","c_valb":"","c_dadded":"1734480846"}],"e":"qco"}}
x_booter.js?version=2:2367 fillMFormArr.error: TypeError: Cannot read properties of undefined (reading 'v') :: qco
x_booter.js?version=2:2262 doMainContent.pid: aa-show-prop
x_allinit.js:387 doNuAjaxPipe.apUrl: tplates/aa-show-prop.html
x_allinit.js:395 doNuAjaxPipe.admin-replace: tplates/aa-show-prop.html
x_all.js?version=2:13451 JSSHOP.ads.doGenericPlug: prop single-property dvPartLinks
x_all.js?version=2:13623 JSSHOP.ads.doGenericPlug: <div class="txtSmall">Ver esta Listagem Magnifica</div>
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = 'pt_pt' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = 'pt_pt' WHERE p._id = 134 AND p.prtype = '5' ORDER BY RAND() LIMIT 20
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = 'pt_pt' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = 'pt_pt' WHERE p._id = 134 AND p.prtype = '5' ORDER BY RAND() LIMIT 20
x_aa-show-prop.js:1208 doMPropsList - aww: [{"_id":"134","prtype":"5","pcoid":"5","ptitle":"Titulo.. Moradia... ","pcontent":"","ptype":"duplex","bhk":"on","stype":"sell","bedroom":"5","bathroom":"2","balcony":"1","kitchen":"1","hall":"1","pfloors":"2","size":"155","price":"199.000","pdoornum":"1","pstreet":"EN 361","location":"1","city":"Santarem","state":"Santarem","country":"Portugal","pzipcode":"2025-999","ploclat":"39.4141911","ploclng":"-8.8223740","feature":"5","pimage":"updt_anon_1773566873.png","pprf_showslr":"5","pprf_showftd":"5","pprf_showloc":"5","pprf_prvcy":"public","uid":"46","pstatus":"active","mapimage":"5","topmapimage":"5","groundmapimage":"5","totalfloor":"5","pdadded":"1775414549","u_icon":"22_1726999049.jpg","u_fullname":"Pedro Matias","pd_prptitle":"IIJwpghgBAtgTFAJgVwA4BswA8pkQSwBc8oAjATygGd8YB7AOzCA","pd_prpdesc":"DwBwfAkgtghg5gUwHYAIEoMoBcZYK4DOKAJniADYIAeAdCtPMsAPThA"}]
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe0b7; :: msg
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=select * from propdescs where pd_prpid='134' and pd_rtype='5' order by _id Desc limit 100
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=select * from propdescs where pd_prpid='134' and pd_rtype='5' order by _id Desc limit 100
x_aa-show-prop.js:1506 setPropTandD - aapa: null [{"_id":"106","pd_rtype":"5","pd_uid":"61","pd_coid":"61","pd_prpid":"134","pd_prptlng":"spa_spa","pd_prptype":"5","pd_prptitle":"IIJwpghgBAtgTFAJgVwA4BswA8pkQSwBc8oAjATygGd8YB7AOzCA","pd_prpdesc":"DwBwfAkgtghg5gUwHYAIEoMoBcZYK4DOKAJniADYIAeAdCtPMsAPThA","pd_dadded":"5"},{"_id":"104","pd_rtype":"5","pd_uid":"56","pd_coid":"56","pd_prpid":"134","pd_prptlng":"en_us","pd_prptype":"5","pd_prptitle":"IIJwpghgBAtgTFAJgVwA4BswA8pkQSwBc8oAjATygGd8YB7AOzCA","pd_prpdesc":"DwBwfAkgtghg5gUwHYAIEoMoBcZYK4DOKAJniADYIAeAdCtPMsAPThA","pd_dadded":"5"},{"_id":"103","pd_rtype":"5","pd_uid":"57","pd_coid":"57","pd_prpid":"134","pd_prptlng":"fr_fr","pd_prptype":"5","pd_prptitle":"IIJwpghgBAtgTFAJgVwA4BswA8pkQSwBc8oAjATygGd8YB7AOzClElgRQ21wOMTMo16TIA","pd_prpdesc":"DwBwfAkgtghg5gUwHYAIEoMoBcZYK4DOKAJniADYIAeAdCtPMsAPThA","pd_dadded":"5"},{"_id":"95","pd_rtype":"5","pd_uid":"57","pd_coid":"57","pd_prpid":"134","pd_prptlng":"pt_pt","pd_prptype":"5","pd_prptitle":"IIJwpghgBAtgTFAJgVwA4BswA8pkQSwBc8oAjATygGd8YB7AOzCA","pd_prpdesc":"DwBwfAkgtghg5gUwHYAIEoMoBcZYK4DOKAJniADYIAeAdCtPMsAPThA","pd_dadded":"5"}] [object Object]
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=select * from qmedia where m_pid='134' and m_rtype='5' order by m_vala desc limit 100
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=select * from qmedia where m_pid='134' and m_rtype='5' order by m_vala desc limit 100
x_aa-show-prop.js:974 setPropImgs: null [{"_id":"838","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"20","m_category":"","m_pid":"134","m_file":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQAnffEANyPwHcB SIgC98AXgBMAFgAMADwCMADikAyXJjJIQRTADsRAZgCcqOQDYxCgOyX9lw0qk2ANAFoFqO3MMBWWxNOm hJilqbKwIQAJkQ66AamqBZ2ho6mUvpyXpbK4EQgZMAiLmLGphK EvaWUjXeYmJhgtgIInKJ lLBhpbS0ooB soA1vgAniIAggCSgkgAyqMTRABCAEoKywCiAAoAVmIAmgDC OAA0uC4JACKZ2fVhkxyACpTEgoAaphAA","m_file_thumb":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQAnffEANyPwHcB SIgC98AXgCMABgkAPABwSAZLkxkkIIpgB2IgMwBOVGIBsAJlkB2czvN75EqwBoAtLNQ2xegKzWALEaM6PibmRgrAhAAmRJroukaoZjZ69kYSOmIe5grgRCBkwCJOJgZGPt4 tuZSEp4mJqGC2AjiCToSQXrmPu0SYrL OgoA1vgAniIAggCSgkgAyqMTRABCAEqyywCiAAoAViYAmgDC OAA0uC4JACKZ2dVekxiACpTPrIAaphAA","m_data":"5","m_title":"Panorama View","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1776021455"},{"_id":"842","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"5","m_category":"","m_pid":"134","m_file":"134_1ebe31f3699a215a.jpg","m_file_thumb":"s_thumb134_1ebe31f3699a215a.jpg","m_data":"5","m_title":"5","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1763938233"},{"_id":"843","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"5","m_category":"","m_pid":"134","m_file":"134_907831dd10f258f8.jpg","m_file_thumb":"s_thumb134_907831dd10f258f8.jpg","m_data":"5","m_title":"5","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1763938233"},{"_id":"844","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"5","m_category":"","m_pid":"134","m_file":"134_c3cdd2fbf71990aa.jpg","m_file_thumb":"s_thumb134_c3cdd2fbf71990aa.jpg","m_data":"5","m_title":"5","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1763938233"},{"_id":"845","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"5","m_category":"","m_pid":"134","m_file":"134_e662007783b2f6c7.jpg","m_file_thumb":"s_thumb134_e662007783b2f6c7.jpg","m_data":"5","m_title":"5","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1763938233"},{"_id":"846","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"5","m_category":"","m_pid":"134","m_file":"134_be9bd07c70f753a3.jpg","m_file_thumb":"s_thumb134_be9bd07c70f753a3.jpg","m_data":"front","m_title":"Frente","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1763938234"},{"_id":"877","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"5","m_category":"","m_pid":"134","m_file":"updt_anon_1774092295.png","m_file_thumb":"s_thumbupdt_anon_1774092295.png","m_data":"5","m_title":"test video","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1774098518"},{"_id":"878","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"5","m_category":"","m_pid":"134","m_file":"updt_anon_1773566873.png","m_file_thumb":"s_thumbupdt_anon_1773566873.png","m_data":"5","m_title":"Areal View","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1774102941"},{"_id":"840","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"30","m_category":"","m_pid":"134","m_file":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB SIgL3wF4ATABYADAA8AjAA5RAMjL4AdiHwAnfgGYAnKmGTJANkODZwwQHZhFgKwAaALTTU0wZumbBNyTdGbJgpJyANb4AJ78AIIAkjxIAMphkUQAQgBK0ikAogAKAFaCAJoAwvjgANLguCQAiuXlFqLaapIAKtHC0gBqmHLAhAAmREro-M4y3gbCwsbTwtpBLLgg-JIWqG7aHpaihr6ygnJERANjYnJIy0QgAK4DAtKSLvqGmrua1o-CcjzYCKuGOTsEBhcACSDMfC4aqqORqJAjARvVDaUSiGwfR4iMQBaRAA","m_file_thumb":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB SIgL3wF4ATABYADAA8AjAA5RAMjL4AdiHwAnfgGYAnKmGTJANkODZwwQHZhFgKwAaALTTU0wZumbBNyTdGbJgpJyANb4AJ78AIIAkjxIAMphkUQAQgBK0ikAogAKAFaCAJoAwvjgANLguCQAiuXlFqLaapIAKtHC0gBqmHLAhAAmREro-M4y3gbCwsbTwtpBLLgg-JIWqG7aHpaihr6ygnJERANjYnJIy0QgAK4DAtKSLvqGmrua1o-CcjzYCKuGOTsEBhcACSDMfC4aqqORqJAjARvVDaUSiGwfR4iMQBaRAA","m_data":"5","m_title":"3D Animations","m_vala":"46_989264","m_valb":"5","m_valc":"5","m_dadded":"1776103589"},{"_id":"841","m_rtype":"5","m_uid":"46","m_coid":"134","m_catid":"25","m_category":"","m_pid":"134","m_file":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB Aa3wE8BeAIIBJAF5IAyr0FEAQgCUAHLICiABQBWAJgCaAYXzgA0uFwkAikaMB2AAwBOAE4BGACrCALIoBqmAGSQRKL4-ADMAGy2AB4etrZ ZPgAdiD4jmH2qB7OHvZaoQCs4fahobbOOQA0ALSKqIpaWs6KoVr2ijmhHo1 otgI-Frx7CC84CGQzPi4Zql 4MzA-BS4mI7Q0XFxAGbbAD4A7vhE6KDQBXuhmdkFtl2tWuEexc41dQ1Nj3dDV 3hl9ccu0PAV7OVwjktG96o1bBDwqDbPlwlpFACss5bjdrAU2ooHNCGs57C9Gh1Hjl0TcHE9FA07iVwoTYY1rOFinl7M4tFTMXdFM87MTucymoVsvZrNZMaE0VcMQVnOFWmD2cSPKLHrkPK1rGUGrzFZFmvk6bKNbUYUMWop7NkngU2YbMbdyiUmhb3k1VYpwi1iqDQoaHLY2d1uooCgVmeqytYOly2h5eV46dYtKDla0YyTI6DnGzGSmStZuloy mc0MtNY7Tl2XLAbk7bEcZLJTG6fjOXDcsHQrX8orfa9LUS8kUdS1Hu1gx5015Cor7DmrrYCl4pVKtEA","m_file_thumb":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB Aa3wE8BeAIIBJAF5IAyr0FEAQgCUAHLICiABQBWAJgCaAYXzgA0uFwkAikaMB2AAwBOAE4BGACrCALIoBqmAGSQRKL4-ADMAGy2AB4etrZ ZPgAdiD4jmH2qB7OHvZaoQCs4fahobbOOQA0ALSKqIpaWs6KoVr2ijmhHo1 otgI-Frx7CC84CGQzPi4Zql 4MzA-BS4mI7Q0XFxAGbbAD4A7vhE6KDQBXuhmdkFtl2tWuEexc41dQ1Nj3dDV 3hl9ccu0PAV7OVwjktG96o1bBDwqDbPlwlpFACss5bjdrAU2ooHNCGs57C9Gh1Hjl0TcHE9FA07iVwoTYY1rOFinl7M4tFTMXdFM87MTucymoVsvZrNZMaE0VcMQVnOFWmD2cSPKLHrkPK1rGUGrzFZFmvk6bKNbUYUMWop7NkngU2YbMbdyiUmhb3k1VYpwi1iqDQoaHLY2d1uooCgVmeqytYOly2h5eV46dYtKDla0YyTI6DnGzGSmStZuloy mc0MtNY7Tl2XLAbk7bEcZLJTG6fjOXDcsHQrX8orfa9LUS8kUdS1Hu1gx5015Cor7DmrrYCl4pVKtEA","m_data":"5","m_title":"Arial View Image","m_vala":"46_458587","m_valb":"5","m_valc":"5","m_dadded":"1776164246"}] [object Object]
x_aa-show-prop.js:1037 show3DImages: BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB SIgL3wF4ATABYADAA8AjAA5RAMjL4AdiHwAnfgGYAnKmGTJANkODZwwQHZhFgKwAaALTTU0wZumbBNyTdGbJgpJyANb4AJ78AIIAkjxIAMphkUQAQgBK0ikAogAKAFaCAJoAwvjgANLguCQAiuXlFqLaapIAKtHC0gBqmHLAhAAmREro-M4y3gbCwsbTwtpBLLgg-JIWqG7aHpaihr6ygnJERANjYnJIy0QgAK4DAtKSLvqGmrua1o-CcjzYCKuGOTsEBhcACSDMfC4aqqORqJAjARvVDaUSiGwfR4iMQBaRAA undefined undefined
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 134 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=134 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 134 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=134 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
x_all.js?version=2:13247 loadNuSwiperObj: {"slidesPerView":3,"loop":true,"pagination":{"el":".swpPrpPg","clickable":true},"navigation":{"nextEl":".swprBtnPrev","prevEl":".swprBtnNext"},"cls":".swiperPrp"}
x_interactions.js?version=2:1634 cmnt.save.request {uid: 60, isGuest: false, hasText: true, hasMap: false, hasUploads: 0, ?}
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=insert into qcmnts(cmts_rtype,cmts_threadid,cmts_prodid,cmts_prodtype,cmts_userid,cmts_viewed,cmts_from,cmts_from_icon,cmts_fromsg_email,cmts_fromsg_tel,cmts_fromsg_ip,cmts_subject,cmts_matter,cmts_media,cmts_privacy,cmts_status,cmts_dadded,cmts_dmodified,cmts_modifiedby) values ('5','tqo37hg148','134','prod','60','-','Sofia%20Lopeza','60_6f66d1a7c903e7f6.jpg','','','','','new%2520comment','','pub','open','1780065776','1780065776','')
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=insert into qcmnts(cmts_rtype,cmts_threadid,cmts_prodid,cmts_prodtype,cmts_userid,cmts_viewed,cmts_from,cmts_from_icon,cmts_fromsg_email,cmts_fromsg_tel,cmts_fromsg_ip,cmts_subject,cmts_matter,cmts_media,cmts_privacy,cmts_status,cmts_dadded,cmts_dmodified,cmts_modifiedby) values ('5','tqo37hg148','134','prod','60','-','Sofia%20Lopeza','60_6f66d1a7c903e7f6.jpg','','','','','new%2520comment','','pub','open','1780065776','1780065776','')
x_interactions.js?version=2:1642 cmnt.save.resp {"status":"insert ","data":30}
x_interactions.js?version=2:1670 cmnt.save.attach.done {kind: 'comment', ownerId: '', rowId: 30}
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 134 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=134 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 134 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=134 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50


GitHub Copilot: I?m going to trace the comment load/save flow in the property page and in `x_interactions.js` to find why inserted rows are not rendered, then patch the minimal spot and validate with a JS syntax check.

I?m now reading the exact comment rendering and save callbacks in the shared interactions file to pinpoint whether the mismatch is in SQL fields, JSON parse, or DOM target IDs.

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1300-1300), lines 1300 to 1760

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1208-1208), lines 1208 to 1248

I found a likely silent failure point: the comment renderer assumes the SQL response is always a raw array. I?ll quickly verify the template IDs and then harden the parser to accept wrapped responses too.

Searched for regex `dvComments|dvCmtList|doCommentSave|getCommentsDiv` (`**/tplates/aa-show-prop.html`), 1 result

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1-1), lines 1 to 120

Read [](file:///c%3A/xampp/htdocs/incasa/.github/instructions/Commenting%20System%20Instructions.instructions.md)

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1810-1810), lines 1810 to 1860

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1758-1758), lines 1758 to 1818

I?m applying a targeted fix now: normalize DB callback payloads (array or object-wrapped array) before rendering comments/replies/likes, which should prevent the blank list state after successful inserts.

Generating patch (74 lines) in [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js)


```

```


Ran terminal command: node --check js/app/x_interactions.js

Checked [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js), no problems found

I?ve patched the comment pipeline to accept both raw-array and object-wrapped DB responses, which is the most likely reason comments were silently not rendering after insert. I also checked editor diagnostics for x_interactions.js and there are no file errors; the required node syntax check could not run because Node.js is not available in this environment.

Searched for regex `parseDbRowsFromResp|var setCmtsDiv = function|var setCmtReplies = function|var setCmtLikeCount = function|var showLikedListCB = function` (`**/js/app/x_interactions.js`), 9 results

Applied a targeted fix for the comment rendering issue on property pages.

What I changed
1. Added a response normalizer that safely handles multiple DB response shapes (raw array or wrapped object with data/v/rows/result):
x_interactions.js

2. Updated comment list rendering to use that normalizer instead of assuming JSON.parse returns an array:
x_interactions.js
x_interactions.js

3. Updated replies rendering the same way:
x_interactions.js
x_interactions.js

4. Updated like count and liked-list callbacks to use the same normalized parsing:
x_interactions.js
x_interactions.js

Why this should fix your case
Your logs show mixed callback payload patterns in this app. Before, comments/replies expected a direct array and could silently render nothing if the backend returned an object-wrapped result. The new parser makes rendering resilient to both formats, so newly inserted comments should appear after refresh callback.

Validation
1. Editor diagnostics show no errors in x_interactions.js.
2. I could not run the required node syntax check because Node is not installed in this environment (node command not found).

Next step
1. Reload the aa-show-prop page and post a comment again.
2. If it still does not render, send the exact response payload for the comment SELECT callback (the value passed as theResp to setCmtsDiv), and I will patch for that exact format immediately.

Made changes.

User: it still does not show anything and i have tried it on multiple property files. is x_aa-show-prop.js calling the comments div with the correct variables. here is the output:
x_booter.js?version=2:2904 doFrMBoolStr: yes
x_all.js?version=2:2319 doNurAjaxPipe: fillDynFrmArr : batch[{"f":"fnishCoForm","v":"select * from qco where _id='24088' order by _id Desc limit 100","e":"qco"}]
x_booter.js?version=2:2315 fillMFormArr: {"qco":{"f":"fnishCoForm","v":[{"_id":"24088","c_rtype":"5","c_coid":"5","c_category":"Item title here","c_uid":"46","c_internal":"5","c_name":"Shop Title","c_header":"...","c_desc":"Descriptionddd ffffff dfdg","c_tel":"Tel","c_contact":"Contact","c_web":"http....","c_email":"proptech@propsgo.com","c_logoimg":"24088_1735769930.jpg","c_zipcode":"","c_zp":"1","c_door":"","c_street":"","c_location":"Olival Basto","c_region":"Lisbon","c_country":"Portugal","c_ccode":"1","c_placeid":"1","c_loc_lat":"38.7908","c_loc_lng":"-9.16621","c_google_url":"1","c_rating":"1","c_revs":"1","c_msg":"","c_privacy":"5","c_whours":"N4Igtg9gdgjCBcIAMAOeBmJIA05oCYFk1Mc8p0jUMtdIoAWKk28gViIFoz6A2LsgBcArgFM4iTp3hShYwpOmzcI0ZUUzuKsUw3KQqjpLmj x3AHdRAEwnEaZK9YXJ08JE0s3190l u6vqxORiBaIE5mYUIAFsJ21H4GcS6JrIJxPmmxwoHZKnGh4RnCUeEAZgBOAJYJLGRV1an1uI1ZMO6UrTV5LSCNRQ01ZWQAzgCGgnUOuBOCzTMgc1l9c72Lc4OzkyOzwrDMG-sLSaP7K0eMh6f7W0v7uxHWMdNJFs8nwc8Xb8-rvzE7u8Yo8rC9rsFRDFPo4oT9ITF-gigVCRgBfIA","c_vala":"","c_valb":"","c_dadded":"1734480846"}],"e":"qco"}}
x_booter.js?version=2:2367 fillMFormArr.error: TypeError: Cannot read properties of undefined (reading 'v') :: qco
x_booter.js?version=2:2262 doMainContent.pid: aa-show-prop
x_allinit.js:387 doNuAjaxPipe.apUrl: tplates/aa-show-prop.html
x_allinit.js:395 doNuAjaxPipe.admin-replace: tplates/aa-show-prop.html
x_all.js?version=2:13451 JSSHOP.ads.doGenericPlug: prop single-property dvPartLinks
x_all.js?version=2:13623 JSSHOP.ads.doGenericPlug: <div class="txtSmall">Ver esta Listagem Magnifica</div>
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = 'pt_pt' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = 'pt_pt' WHERE p._id = 133 AND p.prtype = '5' ORDER BY RAND() LIMIT 20
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = 'pt_pt' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = 'pt_pt' WHERE p._id = 133 AND p.prtype = '5' ORDER BY RAND() LIMIT 20
VM8640 x_aa-show-prop.js:1208 doMPropsList - aww: [{"_id":"133","prtype":"5","pcoid":"5","ptitle":"Titulo.. Moradia... ","pcontent":"","ptype":"apartment","bhk":"on","stype":"auction","bedroom":"5","bathroom":"2","balcony":"1","kitchen":"1","hall":"1","pfloors":"2","size":"250","price":"199.000","pdoornum":"45","pstreet":"Travessa Fonte das Manguelas","location":"1","city":"Oliveira de Azemeis","state":"Aveiro","country":"Portugal","pzipcode":"3720-767","ploclat":"40.8748418","ploclng":"-8.5050735","feature":"5","pimage":"133_56b0f6ea7a04c434.jpg","pprf_showslr":"5","pprf_showftd":"5","pprf_showloc":"5","pprf_prvcy":"5","uid":"46","pstatus":"pending","mapimage":"5","topmapimage":"5","groundmapimage":"5","totalfloor":"5","pdadded":"1774814878","u_icon":"22_1726999049.jpg","u_fullname":"Pedro Matias","pd_prptitle":"IIJwpghgBAtgTFCAHCIAuMwDs1A","pd_prpdesc":"JIWwhg5gpgdgBFOBlALmFBXAznMAHMAJxRFhQDo5RJYg"}]
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe0b7; :: msg
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=select * from propdescs where pd_prpid='133' and pd_rtype='5' order by _id Desc limit 100
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=select * from propdescs where pd_prpid='133' and pd_rtype='5' order by _id Desc limit 100
VM8640 x_aa-show-prop.js:1506 setPropTandD - aapa: null [{"_id":"105","pd_rtype":"5","pd_uid":"56","pd_coid":"56","pd_prpid":"133","pd_prptlng":"en_us","pd_prptype":"5","pd_prptitle":"IIJwpghgBAtgTFCAHCIAuMwDs1A","pd_prpdesc":"DwBwfAkgtghg5gUwHYAIEoMoBcZYK4DOKMIMATllMlgHQrTzLAD04QA","pd_dadded":"5"},{"_id":"100","pd_rtype":"5","pd_uid":"66","pd_coid":"66","pd_prpid":"133","pd_prptlng":"spa_spa","pd_prptype":"5","pd_prptitle":"IIJwpghgBAtgTFCAHCIAuMwDs1A","pd_prpdesc":"JIWwhg5gpgdgBFOBlALmFBXAznMAHMAJxRFhQDo5RJYg","pd_dadded":"5"},{"_id":"94","pd_rtype":"5","pd_uid":"46","pd_coid":"24088","pd_prpid":"133","pd_prptlng":"pt_pt","pd_prptype":"5","pd_prptitle":"IIJwpghgBAtgTFCAHCIAuMwDs1A","pd_prpdesc":"JIWwhg5gpgdgBFOBlALmFBXAznMAHMAJxRFhQDo5RJYg","pd_dadded":"1761422098"}] [object Object]
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=select * from qmedia where m_pid='133' and m_rtype='5' order by m_vala desc limit 100
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=select * from qmedia where m_pid='133' and m_rtype='5' order by m_vala desc limit 100
VM8640 x_aa-show-prop.js:974 setPropImgs: null [{"_id":"862","m_rtype":"5","m_uid":"56","m_coid":"133","m_catid":"30","m_category":"","m_pid":"133","m_file":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB SIgL3wF4ATABYADAA8AjAA5RAMjL4AdiHwAnfmNTSA7KMGSAnCNF7RugDQBaaagCsogGyPJ5wwGYT74YLkBrfABPfgBBAEkeJABlQJCiACEAJWl4gFEABQArQQBNAGF8cABpcFwSAEUior1DNUkAFTDhaQA1TDlgQgATIiV0fkkdYVRBIcNpOx1pGTFHORZcEH5HUW1DYWFDIelpFd1DOSIiLv5d3yRFohAAVy6BQU9UV2lhO0MnaUFdZzkebAQBnN2CBAuABJBmPhcGVVHI1Eg gJHLZHFsdC5PO4tj4gA","m_file_thumb":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB SIgL3wF4ATABYADAA8AjAA5RAMjL4AdiHwAnfmNTSA7KMGSAnCNF7RugDQBaaagCsogGyPJ5wwGYT74YLkBrfABPfgBBAEkeJABlQJCiACEAJWl4gFEABQArQQBNAGF8cABpcFwSAEUior1DNUkAFTDhaQA1TDlgQgATIiV0fkkdYVRBIcNpOx1pGTFHORZcEH5HUW1DYWFDIelpFd1DOSIiLv5d3yRFohAAVy6BQU9UV2lhO0MnaUFdZzkebAQBnN2CBAuABJBmPhcGVVHI1Eg gJHLZHFsdC5PO4tj4gA","m_data":"5","m_title":"3D Animations","m_vala":"56_943836","m_valb":"5","m_valc":"5","m_dadded":"1765153044"},{"_id":"847","m_rtype":"5","m_uid":"66","m_coid":"133","m_catid":"5","m_category":"","m_pid":"133","m_file":"133_53a8c1c44fbd8606.jpg","m_file_thumb":"s_thumb133_53a8c1c44fbd8606.jpg","m_data":"front","m_title":"5","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1763942884"},{"_id":"848","m_rtype":"5","m_uid":"66","m_coid":"133","m_catid":"5","m_category":"","m_pid":"133","m_file":"133_3b8db0a9bb69129c.jpg","m_file_thumb":"s_thumb133_3b8db0a9bb69129c.jpg","m_data":"front","m_title":"5","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1763942884"},{"_id":"849","m_rtype":"5","m_uid":"66","m_coid":"133","m_catid":"5","m_category":"","m_pid":"133","m_file":"133_56b0f6ea7a04c434.jpg","m_file_thumb":"s_thumb133_56b0f6ea7a04c434.jpg","m_data":"front","m_title":"nice house!!!","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1763942884"},{"_id":"850","m_rtype":"5","m_uid":"66","m_coid":"133","m_catid":"5","m_category":"","m_pid":"133","m_file":"133_f07e452e95d6c747.jpg","m_file_thumb":"s_thumb133_f07e452e95d6c747.jpg","m_data":"front","m_title":"5","m_vala":"5","m_valb":"5","m_valc":"5","m_dadded":"1763942884"},{"_id":"835","m_rtype":"5","m_uid":"46","m_coid":"133","m_catid":"25","m_category":"","m_pid":"133","m_file":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB+Aa3wE8BeAIIBJAF5IAyr0FEAQgCUAHLICiABQBWAJgCaAYXzgA0uFwkAikaMB2AAwBOAE4BGACrCALIoBqmAGSQRKL4-FrWAKwAHgDMtrZ+ZPgAdiD4jvwetqiK1tH2+QWF9uEANAC0iqjhtgBs9nVFhX6i2Aih8ewgvOAhkMz4uGapfuDMwPwUuJiO0LaRcXEAZosAPgDu+ETooNDhK5nZ1plazvYeNXHRzlrlldV1WjXRWtG59o-R+1k5eYq20TVFIpwrEarcqrVFB57EDbNZFC88l9DpkvFdTjlnEdwfdrO8Ts8geFnIpkTlMsDFM88VpwtYcZDATVwjUtB5wh4PJ8DuTbCczhd-tcGQ8ni83h8gA","m_file_thumb":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB+Aa3wE8BeAIIBJAF5IAyr0FEAQgCUAHLICiABQBWAJgCaAYXzgA0uFwkAikaMB2AAwBOAE4BGACrCALIoBqmAGSQRKL4-FrWAKwAHgDMtrZ+ZPgAdiD4jvwetqiK1tH2+QWF9uEANAC0iqjhtgBs9nVFhX6i2Aih8ewgvOAhkMz4uGapfuDMwPwUuJiO0LaRcXEAZosAPgDu+ETooNDhK5nZ1plazvYeNXHRzlrlldV1WjXRWtG59o-R+1k5eYq20TVFIpwrEarcqrVFB57EDbNZFC88l9DpkvFdTjlnEdwfdrO8Ts8geFnIpkTlMsDFM88VpwtYcZDATVwjUtB5wh4PJ8DuTbCczhd-tcGQ8ni83h8gA","m_data":"5","m_title":"Titulo de Imagem","m_vala":"46_908455","m_valb":"5","m_valc":"5","m_dadded":"1761422610"},{"_id":"837","m_rtype":"5","m_uid":"46","m_coid":"133","m_catid":"20","m_category":"","m_pid":"133","m_file":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQAnffEANyPwHcB+SIgC98AXgBMAFgAMADwCMADikAyXJjJIQRTADsR01AoDs0hQE4AbFICsZsWItyANAFoFqa1ItHjYo3J8AZgUFa2VgQgATIh10cXNUMTMFYLEQlIt7C2VwIhAyYBE5QMTihQszCSqJMSkpCTllQWwEItQ5SRT-OTkzYqMTQOUAa3wATxEAQQBJQSQAZTHJogAhACUFFYBRAAUAKzEATQBhfHAAaXBcEgBFc-OjKTMmOQAVaYkFADVMIA","m_file_thumb":"BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQAnffEANyPwHcB+SIgC98AXgCMABgkAPABwSAZLkxkkIIpgB2IgCwTUsgOx7ZATgBsEgKymATLfNiANAFpZqKxPOGjtw2J8AZllZKwVgQgATIk10EVszVFtTWWCEkMDze3MFcCIQMmBxQKSxYPNTHSqdWykdMQVBbARxVDFbHVT-MTFTMsNjQIUAa3wATxEAQQBJQSQAZTHJogAhACVZFYBRAAUAK1sATQBhfHAAaXBcEgBFc-PDCVMmMQAVac6ANUwgA","m_data":"5","m_title":"Panorama View","m_vala":"46_288838","m_valb":"5","m_valc":"5","m_dadded":"1761422664"}] [object Object]
VM8640 x_aa-show-prop.js:1037 show3DImages: BYFxAcGcC4HpYLYEMoDoDmB7T6A2BTFAS0lQGNMFEVJZjZIQkQizlwB SIgL3wF4ATABYADAA8AjAA5RAMjL4AdiHwAnfmNTSA7KMGSAnCNF7RugDQBaaagCsogGyPJ5wwGYT74YLkBrfABPfgBBAEkeJABlQJCiACEAJWl4gFEABQArQQBNAGF8cABpcFwSAEUior1DNUkAFTDhaQA1TDlgQgATIiV0fkkdYVRBIcNpOx1pGTFHORZcEH5HUW1DYWFDIelpFd1DOSIiLv5d3yRFohAAVy6BQU9UV2lhO0MnaUFdZzkebAQBnN2CBAuABJBmPhcGVVHI1Eg gJHLZHFsdC5PO4tj4gA undefined undefined
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 133 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=133 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 133 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=133 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
x_all.js?version=2:13247 loadNuSwiperObj: {"slidesPerView":3,"loop":true,"pagination":{"el":".swpPrpPg","clickable":true},"navigation":{"nextEl":".swprBtnPrev","prevEl":".swprBtnNext"},"cls":".swiperPrp"}
x_interactions.js?version=2:1662 cmnt.save.request {uid: 60, isGuest: false, hasText: true, hasMap: false, hasUploads: 0, ?}
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=insert into qcmnts(cmts_rtype,cmts_threadid,cmts_prodid,cmts_prodtype,cmts_userid,cmts_viewed,cmts_from,cmts_from_icon,cmts_fromsg_email,cmts_fromsg_tel,cmts_fromsg_ip,cmts_subject,cmts_matter,cmts_media,cmts_privacy,cmts_status,cmts_dadded,cmts_dmodified,cmts_modifiedby) values ('5','oc9pz2qc3cq','133','prod','60','-','Sofia%20Lopeza','60_6f66d1a7c903e7f6.jpg','','','','','new%2520comment','','pub','open','1780066121','1780066121','')
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=insert into qcmnts(cmts_rtype,cmts_threadid,cmts_prodid,cmts_prodtype,cmts_userid,cmts_viewed,cmts_from,cmts_from_icon,cmts_fromsg_email,cmts_fromsg_tel,cmts_fromsg_ip,cmts_subject,cmts_matter,cmts_media,cmts_privacy,cmts_status,cmts_dadded,cmts_dmodified,cmts_modifiedby) values ('5','oc9pz2qc3cq','133','prod','60','-','Sofia%20Lopeza','60_6f66d1a7c903e7f6.jpg','','','','','new%2520comment','','pub','open','1780066121','1780066121','')
x_interactions.js?version=2:1670 cmnt.save.resp {"status":"insert ","data":31}
x_interactions.js?version=2:1698 cmnt.save.attach.done {kind: 'comment', ownerId: '', rowId: 31}
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 133 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=133 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 133 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=133 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
x_booter.js?version=2:2904 doFrMBoolStr: yes
x_all.js?version=2:2319 doNurAjaxPipe: fillDynFrmArr : batch[{"f":"fnishCoForm","v":"select * from qco where _id='24088' order by _id Desc limit 100","e":"qco"}]
x_booter.js?version=2:2315 fillMFormArr: {"qco":{"f":"fnishCoForm","v":[{"_id":"24088","c_rtype":"5","c_coid":"5","c_category":"Item title here","c_uid":"46","c_internal":"5","c_name":"Shop Title","c_header":"...","c_desc":"Descriptionddd ffffff dfdg","c_tel":"Tel","c_contact":"Contact","c_web":"http....","c_email":"proptech@propsgo.com","c_logoimg":"24088_1735769930.jpg","c_zipcode":"","c_zp":"1","c_door":"","c_street":"","c_location":"Olival Basto","c_region":"Lisbon","c_country":"Portugal","c_ccode":"1","c_placeid":"1","c_loc_lat":"38.7908","c_loc_lng":"-9.16621","c_google_url":"1","c_rating":"1","c_revs":"1","c_msg":"","c_privacy":"5","c_whours":"N4Igtg9gdgjCBcIAMAOeBmJIA05oCYFk1Mc8p0jUMtdIoAWKk28gViIFoz6A2LsgBcArgFM4iTp3hShYwpOmzcI0ZUUzuKsUw3KQqjpLmj x3AHdRAEwnEaZK9YXJ08JE0s3190l u6vqxORiBaIE5mYUIAFsJ21H4GcS6JrIJxPmmxwoHZKnGh4RnCUeEAZgBOAJYJLGRV1an1uI1ZMO6UrTV5LSCNRQ01ZWQAzgCGgnUOuBOCzTMgc1l9c72Lc4OzkyOzwrDMG-sLSaP7K0eMh6f7W0v7uxHWMdNJFs8nwc8Xb8-rvzE7u8Yo8rC9rsFRDFPo4oT9ITF-gigVCRgBfIA","c_vala":"","c_valb":"","c_dadded":"1734480846"}],"e":"qco"}}
x_booter.js?version=2:2367 fillMFormArr.error: TypeError: Cannot read properties of undefined (reading 'v') :: qco
x_booter.js?version=2:2262 doMainContent.pid: index_main
x_allinit.js:387 doNuAjaxPipe.apUrl: tplates/index_main.html
x_allinit.js:395 doNuAjaxPipe.admin-replace: tplates/index_main.html
x_all.js?version=2:13451 JSSHOP.ads.doGenericPlug: main index_main dvPartLinks
x_all.js?version=2:13623 JSSHOP.ads.doGenericPlug: <div class="txtSmall">...proptech - sua tecnologia imobiliaria</div>
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = 'pt_pt' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = 'pt_pt' WHERE p._id > 0 AND p.prtype = '5' ORDER BY _id desc LIMIT 20
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = 'pt_pt' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = 'pt_pt' WHERE p._id > 0 AND p.prtype = '5' ORDER BY _id desc LIMIT 20
x_index_main.js:467 doMPropsList - aww: [{"_id":"135","prtype":"5","pcoid":"5","ptitle":"Titulo.. Moradia... ","pcontent":"","ptype":"house","bhk":"on","stype":"sell","bedroom":"5","bathroom":"2","balcony":"1","kitchen":"1","hall":"1","pfloors":"2","size":"5","price":"199.000","pdoornum":"1","pstreet":"Paseo de Juan Antonio Vallejo-Najera Botas","location":"1","city":"Madrid","state":"Comunidad de Madrid","country":"Spain","pzipcode":"28005","ploclat":"40.4017076","ploclng":"-3.7070862","feature":"5","pimage":"default.jpg","pprf_showslr":"5","pprf_showftd":"5","pprf_showloc":"5","pprf_prvcy":"5","uid":"68","pstatus":"active","mapimage":"5","topmapimage":"5","groundmapimage":"5","totalfloor":"5","pdadded":"1776200645","u_icon":"68_f1f269e018e72f5a.png","u_fullname":"","pd_prptitle":"","pd_prpdesc":""},{"_id":"134","prtype":"5","pcoid":"5","ptitle":"Titulo.. Moradia... ","pcontent":"","ptype":"duplex","bhk":"on","stype":"sell","bedroom":"5","bathroom":"2","balcony":"1","kitchen":"1","hall":"1","pfloors":"2","size":"155","price":"199.000","pdoornum":"1","pstreet":"EN 361","location":"1","city":"Santarem","state":"Santarem","country":"Portugal","pzipcode":"2025-999","ploclat":"39.4141911","ploclng":"-8.8223740","feature":"5","pimage":"updt_anon_1773566873.png","pprf_showslr":"5","pprf_showftd":"5","pprf_showloc":"5","pprf_prvcy":"public","uid":"46","pstatus":"active","mapimage":"5","topmapimage":"5","groundmapimage":"5","totalfloor":"5","pdadded":"1775414549","u_icon":"22_1726999049.jpg","u_fullname":"Pedro Matias","pd_prptitle":"IIJwpghgBAtgTFAJgVwA4BswA8pkQSwBc8oAjATygGd8YB7AOzCA","pd_prpdesc":"DwBwfAkgtghg5gUwHYAIEoMoBcZYK4DOKAJniADYIAeAdCtPMsAPThA"},{"_id":"133","prtype":"5","pcoid":"5","ptitle":"Titulo.. Moradia... ","pcontent":"","ptype":"apartment","bhk":"on","stype":"auction","bedroom":"5","bathroom":"2","balcony":"1","kitchen":"1","hall":"1","pfloors":"2","size":"250","price":"199.000","pdoornum":"45","pstreet":"Travessa Fonte das Manguelas","location":"1","city":"Oliveira de Azemeis","state":"Aveiro","country":"Portugal","pzipcode":"3720-767","ploclat":"40.8748418","ploclng":"-8.5050735","feature":"5","pimage":"133_56b0f6ea7a04c434.jpg","pprf_showslr":"5","pprf_showftd":"5","pprf_showloc":"5","pprf_prvcy":"5","uid":"46","pstatus":"pending","mapimage":"5","topmapimage":"5","groundmapimage":"5","totalfloor":"5","pdadded":"1774814878","u_icon":"22_1726999049.jpg","u_fullname":"Pedro Matias","pd_prptitle":"IIJwpghgBAtgTFCAHCIAuMwDs1A","pd_prpdesc":"JIWwhg5gpgdgBFOBlALmFBXAznMAHMAJxRFhQDo5RJYg"},{"_id":"132","prtype":"5","pcoid":"5","ptitle":"Titulo.. Moradia... ","pcontent":"","ptype":"apartment","bhk":"on","stype":"lease","bedroom":"5","bathroom":"2","balcony":"1","kitchen":"1","hall":"1","pfloors":"2","size":"5","price":"199.000","pdoornum":"1","pstreet":"Rua 1 de Dezembro","location":"Sanatrem","city":"Monsanto","state":"Santarem","country":"Portugal","pzipcode":"2380-575","ploclat":"39.4653176","ploclng":"-8.7115432","feature":"5","pimage":"default.jpg","pprf_showslr":"5","pprf_showftd":"5","pprf_showloc":"5","pprf_prvcy":"members","uid":"46","pstatus":"pending","mapimage":"5","topmapimage":"5","groundmapimage":"5","totalfloor":"5","pdadded":"1762548558","u_icon":"22_1726999049.jpg","u_fullname":"Pedro Matias","pd_prptitle":"C4S2FcBsHsAIBM4AcBO17mNIA","pd_prpdesc":"CYUwzgxgTglgZBCJgwDYG4CGB7ABMPABym2AFcAXbIA"},{"_id":"131","prtype":"5","pcoid":"66","ptitle":"Apartamento em Leiria","pcontent":"Apartamento acolhedor perto do centro.","ptype":"ranch","bhk":"on","stype":"sell","bedroom":"2","bathroom":"1","balcony":"1","kitchen":"1","hall":"1","pfloors":"1","size":"80","price":"240.000","pdoornum":"9","pstreet":"Avenida Combatentes da Grande Guerra","location":"Centro","city":"Leiria","state":"Leiria","country":"Portugal","pzipcode":"2410-128","ploclat":"39.7432133","ploclng":"-8.8076868","feature":"5","pimage":"131_c306754abfd93ab5.jpg","pprf_showslr":"66","pprf_showftd":"public","pprf_showloc":"public","pprf_prvcy":"private","uid":"66","pstatus":"active","mapimage":"5","topmapimage":"5","groundmapimage":"5","totalfloor":"5","pdadded":"1766604505","u_icon":"66_7a50d3c34937ac3c.jpg","u_fullname":"Valentina Santos","pd_prptitle":"IoVwlgdgLghgBAA7gNwKYQCb1QWzgYQHsAvOAWjgEEAbAB1QwCcxSKBZQ6VAZ3LiA","pd_prpdesc":"CIUwzgNgrgtgRgJwIYDsAuIAEAHBB7XASxABMkSsBHKLPAMxARAGNbMRrCIAyQpZqBgDciQnhyMGhNOJDommaAA9ZmFEjRQmALyQAaNbExJ4xdFjTIUnCOOZ4YmAG6EwaJGEwwkAcxS9+QRAhOkJmD0wwPEQ2cJhsPAA6TABhB0xYJExuJEDhJiyZdwhMCkwAFj0AZgA2TAALFncmTzKMBCYUPANwdxx8IlJyWgYmVn7CJ35CMjKscGwkbmZWEi4hbokEKT7F5ExqEEdcPAF9wqsbGeHSrCMTODMMTAQtJBL7R3sUOjwEGS8eAoCC6iQAgoDkGsskQUMxCIsStwQHlgphxC0oBB3CRxGQXiwoNhGEsVqR1jk0FwKBtbhlvMZ0IQfFlwmALuQwmJ1CUsGVMpgfFY5koMCgwJTqcE8VgkAhOBhNPsYEDGOoDIdMN9Rkdsr5kE40WysgKPGBCOolVluFBUUIUGEkIk0o4ItFkJ5vsxoAEBMIyJ5dQAmAAMQYAjAZWR5CrryrUYEG6Tk7QUGkhHu54XgeQYLd6oBbcZgqpFCxgwAYBZ9FHKQIR9rRBPsa0mTNhbJ5DW5CCm-cEEGJK5gk9Q5TJhwBWLUx1pYOCoeqbIyEeItc051DPervEpzeTkLJ3BntiDW3L9oRpqLw95ahwJNwwv737QWnfGGCMR3qTBFd5fuY7CcIsZAGOyZ50gAVlucrge8WRzE+CD3o4
x_index_main.js:455 getCountryFlagIcon - countryCode: ES
x_all.js?version=2:143 tFlagEmoji: ????
x_index_main.js:462 getCountryFlagIcon - flagIcon: ????
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe0b7; :: msg
x_index_main.js:455 getCountryFlagIcon - countryCode: PT
x_all.js?version=2:143 tFlagEmoji: ????
x_index_main.js:462 getCountryFlagIcon - flagIcon: ????
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe0b7; :: msg
x_index_main.js:455 getCountryFlagIcon - countryCode: PT
x_all.js?version=2:143 tFlagEmoji: ????
x_index_main.js:462 getCountryFlagIcon - flagIcon: ????
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe0b7; :: msg
x_index_main.js:455 getCountryFlagIcon - countryCode: PT
x_all.js?version=2:143 tFlagEmoji: ????
x_index_main.js:462 getCountryFlagIcon - flagIcon: ????
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe0b7; :: msg
x_index_main.js:455 getCountryFlagIcon - countryCode: PT
x_all.js?version=2:143 tFlagEmoji: ????
x_index_main.js:462 getCountryFlagIcon - flagIcon: ????
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
x_all.js?version=2:7255 tBBSSObj.kvIcnsObj[key]: &#xe0b7; :: msg
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=135 AND cmts_prodtype='prod' AND cmts_rtype=5
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=135 AND cmts_prodtype='prod' AND cmts_rtype=5
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=135 AND ql_isreply=3 AND ql_rtype=5
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=135 AND ql_isreply=3 AND ql_rtype=5
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=135 AND ql_isreply=3 LIMIT 1
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=135 AND ql_isreply=3 LIMIT 1
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=134 AND cmts_prodtype='prod' AND cmts_rtype=5
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=134 AND cmts_prodtype='prod' AND cmts_rtype=5
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=134 AND ql_isreply=3 AND ql_rtype=5
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=134 AND ql_isreply=3 AND ql_rtype=5
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=134 AND ql_isreply=3 LIMIT 1
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=134 AND ql_isreply=3 LIMIT 1
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=133 AND cmts_prodtype='prod' AND cmts_rtype=5
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=133 AND cmts_prodtype='prod' AND cmts_rtype=5
x_allinit.js:387 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=133 AND ql_isreply=3 AND ql_rtype=5
x_allinit.js:395 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=133 AND ql_isreply=3 AND ql_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=133 AND ql_isreply=3 LIMIT 1
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=133 AND ql_isreply=3 LIMIT 1
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=132 AND cmts_prodtype='prod' AND cmts_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=132 AND cmts_prodtype='prod' AND cmts_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=132 AND ql_isreply=3 AND ql_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=132 AND ql_isreply=3 AND ql_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=132 AND ql_isreply=3 LIMIT 1
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=132 AND ql_isreply=3 LIMIT 1
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=131 AND cmts_prodtype='prod' AND cmts_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=131 AND cmts_prodtype='prod' AND cmts_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=131 AND ql_isreply=3 AND ql_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=131 AND ql_isreply=3 AND ql_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=131 AND ql_isreply=3 LIMIT 1
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=131 AND ql_isreply=3 LIMIT 1
 JSSHOP.ads.doGenericPlug: mpmenu 3 dvPartLinks
 JSSHOP.ads.doGenericPlug: <div class="txtSmall">...proptech - comprar, vender, alugar...</div>
 doNurUpdatesFeed.tQstr: select psts.*, u.u_icon, u.u_fullname from qposts psts, quser u where psts._id > 0 and psts.p_rtype = '5' and psts.p_uid = u._id and ((psts.p_lang = 'pt_pt' or psts.p_lang = 'pt_pt') or (psts.p_lang != 'pt_pt' and psts.p_lang != 'pt_pt')) and ((psts.p_privacy = 'public' or psts.p_privacy = 'members') or (psts.p_privacy = 'private' and psts.p_uid = 60)) and psts.p_rtype = '5' order by case when psts.p_lang = 'pt_pt' then 1 when psts.p_lang = 'pt_pt' then 2 else 3 end, psts._id desc  limit 5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=select psts.*, u.u_icon, u.u_fullname from qposts psts, quser u where psts._id > 0 and psts.p_rtype = '5' and psts.p_uid = u._id and ((psts.p_lang = 'pt_pt' or psts.p_lang = 'pt_pt') or (psts.p_lang != 'pt_pt' and psts.p_lang != 'pt_pt')) and ((psts.p_privacy = 'public' or psts.p_privacy = 'members') or (psts.p_privacy = 'private' and psts.p_uid = 60)) and psts.p_rtype = '5' order by case when psts.p_lang = 'pt_pt' then 1 when psts.p_lang = 'pt_pt' then 2 else 3 end, psts._id desc  limit 5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=select psts.*, u.u_icon, u.u_fullname from qposts psts, quser u where psts._id > 0 and psts.p_rtype = '5' and psts.p_uid = u._id and ((psts.p_lang = 'pt_pt' or psts.p_lang = 'pt_pt') or (psts.p_lang != 'pt_pt' and psts.p_lang != 'pt_pt')) and ((psts.p_privacy = 'public' or psts.p_privacy = 'members') or (psts.p_privacy = 'private' and psts.p_uid = 60)) and psts.p_rtype = '5' order by case when psts.p_lang = 'pt_pt' then 1 when psts.p_lang = 'pt_pt' then 2 else 3 end, psts._id desc  limit 5
 
 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
 tBBSSObj.kvIcnsObj[key]: &#xe87d; :: fav
 jshp_ads_showUpdtsFeed.tUdtLnkStr: <div class="bkdgClrWhite brdrClrHdr txtSmall txtBold" style="padding:4px;margin:2px;overflow:hidden;"><div style="display:flex;align-items:center;flex-wrap:wrap;gap:8px;"><span tid="dvCoFavBtn" class="crsrPointer" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-update&tupid=436','newwwr u','images/ucontent/m_thumbanon_1775994438.png','436','btnFavs436');"><i id="btnFavs436" class="menu-material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">&#xe87d;</i> Favorites</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.prepMsgBox(46,'Pedro Matias','22_1726999049.jpg','noQvalue','showMsgSave');"><i class="menu-material-icons txtClrTtl" alt="chat" title="messages" value="messages">&#xe0b7;</i> Contactar</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.showShareBox('update',0);"><i class="menu-material-icons txtClrTtl" alt="share" title="share" value="share">&#xe80d;</i> Partilhar</span><span class="crsrPointer" style="margin-right:12px;"><a href="images/ucontent/46_1775994439.webm" download class="txtClrHdr"><i class="menu-material-icons txtClrTtl" alt="download" title="download" value="download">&#xe2c4;</i> Descarregar</a></span><div style="display:flex;align-items:center;gap:4px;"><span class="crsrPointer" onclick="eindex('aa-show-update','pid=aa-show-update&tupid=436')"><i class="menu-material-icons txtClrTtl" alt="comment" title="Comentários">&#xe0bf;</i> <span id="dvCmntCount_4_436" class="txtSmall"></span> Comentários</span>&nbsp;&nbsp;<span id="dvLikePrd_4_436" class="crsrPointer" onclick="doProdLike('436',4);"><i class="menu-material-icons txtClrTtl" alt="like" title="Curtir">&#xe87d;</i> <span id="dvLikeCountPrd_4_436" class="txtSmall"></span> Curtir</span></div></div></div>
 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
 tBBSSObj.kvIcnsObj[key]: &#xe87d; :: fav
 jshp_ads_showUpdtsFeed.tUdtLnkStr: <div class="bkdgClrWhite brdrClrHdr txtSmall txtBold" style="padding:4px;margin:2px;overflow:hidden;"><div style="display:flex;align-items:center;flex-wrap:wrap;gap:8px;"><span tid="dvCoFavBtn" class="crsrPointer" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-update&tupid=433','Moradia%20independente%2C%20Arrendamento%20de%20Apar%2C%20Piso%20em%20venda%20na%20Pra%2C%20Apartamento%20t3%20a%20ven','images/ucontent/m_thumbanon_1774092410.png','433','btnFavs433');"><i id="btnFavs433" class="menu-material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">&#xe87d;</i> Favorites</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.prepMsgBox(46,'Pedro Matias','22_1726999049.jpg','noQvalue','showMsgSave');"><i class="menu-material-icons txtClrTtl" alt="chat" title="messages" value="messages">&#xe0b7;</i> Contactar</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.showShareBox('update',1);"><i class="menu-material-icons txtClrTtl" alt="share" title="share" value="share">&#xe80d;</i> Partilhar</span><span class="crsrPointer" style="margin-right:12px;"><a href="images/ucontent/46_1774092416.webm" download class="txtClrHdr"><i class="menu-material-icons txtClrTtl" alt="download" title="download" value="download">&#xe2c4;</i> Descarregar</a></span><div style="display:flex;align-items:center;gap:4px;"><span class="crsrPointer" onclick="eindex('aa-show-update','pid=aa-show-update&tupid=433')"><i class="menu-material-icons txtClrTtl" alt="comment" title="Comentários">&#xe0bf;</i> <span id="dvCmntCount_4_433" class="txtSmall"></span> Comentários</span>&nbsp;&nbsp;<span id="dvLikePrd_4_433" class="crsrPointer" onclick="doProdLike('433',4);"><i class="menu-material-icons txtClrTtl" alt="like" title="Curtir">&#xe87d;</i> <span id="dvLikeCountPrd_4_433" class="txtSmall"></span> Curtir</span></div></div></div>
 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
 tBBSSObj.kvIcnsObj[key]: &#xe87d; :: fav
 jshp_ads_showUpdtsFeed.tUdtLnkStr: <div class="bkdgClrWhite brdrClrHdr txtSmall txtBold" style="padding:4px;margin:2px;overflow:hidden;"><div style="display:flex;align-items:center;flex-wrap:wrap;gap:8px;"><span tid="dvCoFavBtn" class="crsrPointer" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-update&tupid=399','Moradia%20em%20banda%20a%20v','images/ucontent/m_thumbanon_1772756162.png','399','btnFavs399');"><i id="btnFavs399" class="menu-material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">&#xe87d;</i> Favorites</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.prepMsgBox(46,'Pedro Matias','22_1726999049.jpg','noQvalue','showMsgSave');"><i class="menu-material-icons txtClrTtl" alt="chat" title="messages" value="messages">&#xe0b7;</i> Contactar</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.showShareBox('update',2);"><i class="menu-material-icons txtClrTtl" alt="share" title="share" value="share">&#xe80d;</i> Partilhar</span><span class="crsrPointer" style="margin-right:12px;"><a href="images/ucontent/46_1772756180.webm" download class="txtClrHdr"><i class="menu-material-icons txtClrTtl" alt="download" title="download" value="download">&#xe2c4;</i> Descarregar</a></span><div style="display:flex;align-items:center;gap:4px;"><span class="crsrPointer" onclick="eindex('aa-show-update','pid=aa-show-update&tupid=399')"><i class="menu-material-icons txtClrTtl" alt="comment" title="Comentários">&#xe0bf;</i> <span id="dvCmntCount_4_399" class="txtSmall"></span> Comentários</span>&nbsp;&nbsp;<span id="dvLikePrd_4_399" class="crsrPointer" onclick="doProdLike('399',4);"><i class="menu-material-icons txtClrTtl" alt="like" title="Curtir">&#xe87d;</i> <span id="dvLikeCountPrd_4_399" class="txtSmall"></span> Curtir</span></div></div></div>
 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
 tBBSSObj.kvIcnsObj[key]: &#xe87d; :: fav
 jshp_ads_showUpdtsFeed.tUdtLnkStr: <div class="bkdgClrWhite brdrClrHdr txtSmall txtBold" style="padding:4px;margin:2px;overflow:hidden;"><div style="display:flex;align-items:center;flex-wrap:wrap;gap:8px;"><span tid="dvCoFavBtn" class="crsrPointer" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-update&tupid=297','Moradia independente a venda em Alpiarca','images/ucontent/m_thumbanon_1778420761.png','297','btnFavs297');"><i id="btnFavs297" class="menu-material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">&#xe87d;</i> Favorites</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.prepMsgBox(63,'LuÃ­s Ferreira','63_2be1040ce4e63840.jpg','noQvalue','showMsgSave');"><i class="menu-material-icons txtClrTtl" alt="chat" title="messages" value="messages">&#xe0b7;</i> Contactar</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.showShareBox('update',3);"><i class="menu-material-icons txtClrTtl" alt="share" title="share" value="share">&#xe80d;</i> Partilhar</span><div style="display:flex;align-items:center;gap:4px;"><span class="crsrPointer" onclick="eindex('aa-show-update','pid=aa-show-update&tupid=297')"><i class="menu-material-icons txtClrTtl" alt="comment" title="Comentários">&#xe0bf;</i> <span id="dvCmntCount_4_297" class="txtSmall"></span> Comentários</span>&nbsp;&nbsp;<span id="dvLikePrd_4_297" class="crsrPointer" onclick="doProdLike('297',4);"><i class="menu-material-icons txtClrTtl" alt="like" title="Curtir">&#xe87d;</i> <span id="dvLikeCountPrd_4_297" class="txtSmall"></span> Curtir</span></div></div></div>
 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
 tBBSSObj.kvIcnsObj[key]: &#xe87d; :: fav
 jshp_ads_showUpdtsFeed.tUdtLnkStr: <div class="bkdgClrWhite brdrClrHdr txtSmall txtBold" style="padding:4px;margin:2px;overflow:hidden;"><div style="display:flex;align-items:center;flex-wrap:wrap;gap:8px;"><span tid="dvCoFavBtn" class="crsrPointer" onclick="javascript:doRecentFavorite('index.html?pid=aa-show-update&tupid=296','New%20Blog%20Post','images/ucontent/m_thumbanon_1770064898.png','296','btnFavs296');"><i id="btnFavs296" class="menu-material-icons txtClrTtl" alt="favorite" title="favorite" value="favorite">&#xe87d;</i> Favorites</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.prepMsgBox(49,'Maria Lopez','49_557c2494627b993e.jpg','noQvalue','showMsgSave');"><i class="menu-material-icons txtClrTtl" alt="chat" title="messages" value="messages">&#xe0b7;</i> Contactar</span><span class="crsrPointer" style="margin-right:12px;" onclick="JSSHOP.ui.showShareBox('update',4);"><i class="menu-material-icons txtClrTtl" alt="share" title="share" value="share">&#xe80d;</i> Partilhar</span><div style="display:flex;align-items:center;gap:4px;"><span class="crsrPointer" onclick="eindex('aa-show-update','pid=aa-show-update&tupid=296')"><i class="menu-material-icons txtClrTtl" alt="comment" title="Comentários">&#xe0bf;</i> <span id="dvCmntCount_4_296" class="txtSmall"></span> Comentários</span>&nbsp;&nbsp;<span id="dvLikePrd_4_296" class="crsrPointer" onclick="doProdLike('296',4);"><i class="menu-material-icons txtClrTtl" alt="like" title="Curtir">&#xe87d;</i> <span id="dvLikeCountPrd_4_296" class="txtSmall"></span> Curtir</span></div></div></div>
 tUpPvrs.pmap: {"cnfg":{},"data":{"ob78":{"_id":"78","ptitle":"CoTwDglgxghgNgAgMwFoDKAXA9gJxAgCSwFcBnAUwQHcIMALBYcnHGKSgJgA4A6ABgGAagiA","pdesc":"CoTwDglgxghgNgAgMwFoDKAXA9gJxAgCSwFcBnAUwQHcIMALBYcnHGKcgKACYAOAOgAMQgGTliOLAG4OAWRjCo7ACYQ4kmBAB2dGKQA0CAOLEYOJTAP1KAN1VwYAc0oRSCAI7EI5DAZr0EAEbkMMQYEABmxIi25FSuWOEIUCSaGHikEEqUMJpKCAC2KRgamqTCmgGkYNIAjDwFWqHkruES+QgAavB05HA6ZRVV0gBsDZpNLW0IAEK9hanZuQg1o-mNGM0IrVjtxqbmCADCtCDlldUcZ0MAkhgILggwCA5YWHla1s0Y+eSpW7gIehYCjUOhYBC-ABWWHwcAgtk0Dnumke7k83gQtjg9icBgB4QBT2sbBgYSwKLBPwQAOwBRgAGtsggwBJwrQrtUgA","ptype":"house","stype":"sell","pimage":"78_9270b123cc274ddf.jpg","price":"199","ploclat":"39.2587279","ploclng":"-8.5838777","location":"1","city":"Alpiarca","state":"Santarem"},"ob120":{"_id":"120","ptitle":"AoUwdgLgFg9grgZxAAgAfIG7gCYENlgzIAyuATgOZHZEDCUAlrjUA","pdesc":"GoUwdgFghgBAxge0iOIBO8EFsawBIBCMAMgK4AepaAnjAEohQA2MAogM4AuUnIMIXPgDMoAI1JME7BDACCAByhpuWcJxkAVAEwwwMgMIQAllAAmCADQwAVqTDrcM4koDmM8zH1KsMkFcQ4pFiwwWhQAG5GTBBSsMBGXLB0Rr4wimEwBlCCkjCmfADKAGQ8UfkA3DIAUghoLiAAdHLpKmoyAApqMaTsfCA4AKxFtaZY5bhgpkp5fPJoRYxwpLzlpikwBawAsvxMIOFmtU0KSq32mjoB8lIO12gAXDAAtBvMsPn8iRgBMPGJaUokutZoDcPAjFMPh9iAlRAgoOMXvoEAAvIyQWDqbhMVT2PoAR1IRkUU0RMAA6vpMFh5HsHHAAPQwURQZBGDJ8OBidF8KGkOAQEBknQARVIpyk1JgaAQpHkIHZCDJGn6uHRUxgQTSIEJ4F87DgaCMnGGUCWKyNMh+f249BSTVYhOJUFx6nYjxe8VMMvYeTlknYZKqrJATGymQNUQQLN4eN9fFATAoZPatVtH2Ytt6LiorKKcFQayY5QRzzk3yQazgKTAhzJrDpMvMWAWZuWQq4RkQvoIAHkCvo8E1iAguUwjCioPnC1FyiVOGUhakAFpIWCsMDhBBMcJqECPDi8T6KacgIuVaS4FoutowbT+bAwACMAAYXy32HKtOUrAITVA2xWGBJDHCdDl0K1ainAsz1nedF0qPIsjQHwrCCd5wxRNdfWCBJ+CwUQ9hbADzSFBcuV9aFYXhJpkUCYIYEif5FD0eYzXZOByiwLtYBAchODCEZ0RKQChSNWBpFENA+FgatIT8TJpXWFVrEsRSvBydxCngpgKmqWp6isAwkF3c4kM8bxUlgYpFnbcYqPYOEoF-QQYCMFt4VI8pdxYOYEDuas101Bi+PlI0FmrNBOLAatYCKcUvLAHiZkYoxdwwWt4CgeRjWYJoADlILCU9zx0vSUphRz4SsMKHA+dQPAXa4UoCVsvKilIrF6NBIhK2cpCsLDMs4KgihMLzOy5fhcHQfy0wQAq-1gIbeJipABNgcIRPalJfWkxJczjKUBFpVkzHDXUH03CEXTBLVmB8PrixkXC9tDKByEOKwoBegQfBgXgaRkXUYF6NIEAzOYUBMDBNpu4DqJAW0QbuXAnXBKKJExCHJUlNZsmHUdmDAjwwHQvJw1UaJagEGAVsogxjC+sFzDwxR2GkBmSFcdxkP+hTYGuflJVUAS8clWQUKgFE2rssAucMExzBco9stOG8zLC7ij3J00vIXBjCWJ+SUsiDVY0anHFKarTqXQQKuvQXqYPPSU+A2+W7l4HCiVudB1CaApo2k3Q9bs905BgQgSAoKhaAYZg2ESI8-22uy0n2vcIJgVQovA9zoyiIw04tdYIBLoVcCYHN5YmAaAfAcwnjBk7oeJydSZkbNXRkIpdMJJV2iNVQijQUwB-GTL0tjI88G5bgnrnUpdKXaa-NMZY8b4ABJTc-3c29VVTZRSBcPLI70DneKdRQUr8oQEnYGsoDwhAhHQFA+HJs+GLWdKn4flyDUHxurOxnM9SifAjbjhNj9X0cBxx7nYFYM+YR7DqhkA1GQMgzTYBYtAHuugJKhhAIvMqq8NR+TmEYM8ZgFJXDCFYUyGpZS4DQNJSYGt1DfQ5gIaQ4kbCjXGnZKsvEAZGnEP+US5QBF8AIKyKaG80FHiwYpPyqAOYLRgPlLUG0WTUxSn+aSuVMD+XQNBcBS8Fwr0QvkXom5txm0gjgSUl9OafENMaMOpdJTZGkLFcw8YcCqJenYDwnJHywDcdfIkt8PiIHlhIdQ+0VYuklFDex3sIK+hAi-X01DIh7BcErLeJBqLOQsgaPJVhDy1CiFYAo6INo1KNKgdkFTkT-A8LIPYeJVLTR6ag3cTRQAYkwMgVAGBeQCCTARaSzdGhAA","ptype":"apartment","stype":"sell","pimage":"default.jpg","price":"350.000","ploclat":"38.7217300","ploclng":"-9.1387796","location":"Baixa","city":"Lisboa","state":"Lisboa"}},"uptype":"props"}
 tUpPvrsObj.uptype: props
 getUpdtMapMrkrs: props {"ob78":{"_id":"78","ptitle":"CoTwDglgxghgNgAgMwFoDKAXA9gJxAgCSwFcBnAUwQHcIMALBYcnHGKSgJgA4A6ABgGAagiA","pdesc":"CoTwDglgxghgNgAgMwFoDKAXA9gJxAgCSwFcBnAUwQHcIMALBYcnHGKcgKACYAOAOgAMQgGTliOLAG4OAWRjCo7ACYQ4kmBAB2dGKQA0CAOLEYOJTAP1KAN1VwYAc0oRSCAI7EI5DAZr0EAEbkMMQYEABmxIi25FSuWOEIUCSaGHikEEqUMJpKCAC2KRgamqTCmgGkYNIAjDwFWqHkruES+QgAavB05HA6ZRVV0gBsDZpNLW0IAEK9hanZuQg1o-mNGM0IrVjtxqbmCADCtCDlldUcZ0MAkhgILggwCA5YWHla1s0Y+eSpW7gIehYCjUOhYBC-ABWWHwcAgtk0Dnumke7k83gQtjg9icBgB4QBT2sbBgYSwKLBPwQAOwBRgAGtsggwBJwrQrtUgA","ptype":"house","stype":"sell","pimage":"78_9270b123cc274ddf.jpg","price":"199","ploclat":"39.2587279","ploclng":"-8.5838777","location":"1","city":"Alpiarca","state":"Santarem"},"ob120":{"_id":"120","ptitle":"AoUwdgLgFg9grgZxAAgAfIG7gCYENlgzIAyuATgOZHZEDCUAlrjUA","pdesc":"GoUwdgFghgBAxge0iOIBO8EFsawBIBCMAMgK4AepaAnjAEohQA2MAogM4AuUnIMIXPgDMoAI1JME7BDACCAByhpuWcJxkAVAEwwwMgMIQAllAAmCADQwAVqTDrcM4koDmM8zH1KsMkFcQ4pFiwwWhQAG5GTBBSsMBGXLB0Rr4wimEwBlCCkjCmfADKAGQ8UfkA3DIAUghoLiAAdHLpKmoyAApqMaTsfCA4AKxFtaZY5bhgpkp5fPJoRYxwpLzlpikwBawAsvxMIOFmtU0KSq32mjoB8lIO12gAXDAAtBvMsPn8iRgBMPGJaUokutZoDcPAjFMPh9iAlRAgoOMXvoEAAvIyQWDqbhMVT2PoAR1IRkUU0RMAA6vpMFh5HsHHAAPQwURQZBGDJ8OBidF8KGkOAQEBknQARVIpyk1JgaAQpHkIHZCDJGn6uHRUxgQTSIEJ4F87DgaCMnGGUCWKyNMh+f249BSTVYhOJUFx6nYjxe8VMMvYeTlknYZKqrJATGymQNUQQLN4eN9fFATAoZPatVtH2Ytt6LiorKKcFQayY5QRzzk3yQazgKTAhzJrDpMvMWAWZuWQq4RkQvoIAHkCvo8E1iAguUwjCioPnC1FyiVOGUhakAFpIWCsMDhBBMcJqECPDi8T6KacgIuVaS4FoutowbT+bAwACMAAYXy32HKtOUrAITVA2xWGBJDHCdDl0K1ainAsz1nedF0qPIsjQHwrCCd5wxRNdfWCBJ+CwUQ9hbADzSFBcuV9aFYXhJpkUCYIYEif5FD0eYzXZOByiwLtYBAchODCEZ0RKQChSNWBpFENA+FgatIT8TJpXWFVrEsRSvBydxCngpgKmqWp6isAwkF3c4kM8bxUlgYpFnbcYqPYOEoF-QQYCMFt4VI8pdxYOYEDuas101Bi+PlI0FmrNBOLAatYCKcUvLAHiZkYoxdwwWt4CgeRjWYJoADlILCU9zx0vSUphRz4SsMKHA+dQPAXa4UoCVsvKilIrF6NBIhK2cpCsLDMs4KgihMLzOy5fhcHQfy0wQAq-1gIbeJipABNgcIRPalJfWkxJczjKUBFpVkzHDXUH03CEXTBLVmB8PrixkXC9tDKByEOKwoBegQfBgXgaRkXUYF6NIEAzOYUBMDBNpu4DqJAW0QbuXAnXBKKJExCHJUlNZsmHUdmDAjwwHQvJw1UaJagEGAVsogxjC+sFzDwxR2GkBmSFcdxkP+hTYGuflJVUAS8clWQUKgFE2rssAucMExzBco9stOG8zLC7ij3J00vIXBjCWJ+SUsiDVY0anHFKarTqXQQKuvQXqYPPSU+A2+W7l4HCiVudB1CaApo2k3Q9bs905BgQgSAoKhaAYZg2ESI8-22uy0n2vcIJgVQovA9zoyiIw04tdYIBLoVcCYHN5YmAaAfAcwnjBk7oeJydSZkbNXRkIpdMJJV2iNVQijQUwB-GTL0tjI88G5bgnrnUpdKXaa-NMZY8b4ABJTc-3c29VVTZRSBcPLI70DneKdRQUr8oQEnYGsoDwhAhHQFA+HJs+GLWdKn4flyDUHxurOxnM9SifAjbjhNj9X0cBxx7nYFYM+YR7DqhkA1GQMgzTYBYtAHuugJKhhAIvMqq8NR+TmEYM8ZgFJXDCFYUyGpZS4DQNJSYGt1DfQ5gIaQ4kbCjXGnZKsvEAZGnEP+US5QBF8AIKyKaG80FHiwYpPyqAOYLRgPlLUG0WTUxSn+aSuVMD+XQNBcBS8Fwr0QvkXom5txm0gjgSUl9OafENMaMOpdJTZGkLFcw8YcCqJenYDwnJHywDcdfIkt8PiIHlhIdQ+0VYuklFDex3sIK+hAi-X01DIh7BcErLeJBqLOQsgaPJVhDy1CiFYAo6INo1KNKgdkFTkT-A8LIPYeJVLTR6ag3cTRQAYkwMgVAGBeQCCTARaSzdGhAA","ptype":"apartment","stype":"sell","pimage":"default.jpg","price":"350.000","ploclat":"38.7217300","ploclng":"-9.1387796","location":"Baixa","city":"Lisboa","state":"Lisboa"}}
 getUpdtMapMrkrs: ob78 CoTwDglgxghgNgAgMwFoDKAXA9gJxAgCSwFcBnAUwQHcIMALBYcnHGKSgJgA4A6ABgGAagiA 39.2587279 -8.5838777
 getUpdtMapMrkrs: Typical 3-Story House with Terrace 28.000? 39.2587279 -8.5838777
 getUpdtMapMrkrs: ob120 AoUwdgLgFg9grgZxAAgAfIG7gCYENlgzIAyuATgOZHZEDCUAlrjUA 38.7217300 -9.1387796
 getUpdtMapMrkrs: Penthouse à venda no Largo do Chiado 38.7217300 -9.1387796
 jshp_ads_showUpdtsFeed.tALeavesObj: {"mrkrs":[{"icn":"images/property/s_thumb78_9270b123cc274ddf.jpg","title":"Typical 3-Story House with Terrace 28.000?","lat":"39.2587279","lng":"-8.5838777","price":"199","prpid":"78","pdesc":"Typical 3-Story House with Terrace\n28.000&euro;\nMa&ccedil;ainhas, Guarda, the village is quiet, with beautiful views of countryside and mountains&nbsp;\n18 minutes from Valhelhas&nbsp;\n6 minutes from Belmonte and 16 minutes from Guarda City&nbsp;\n&nbsp;It is a good investment for those who enjoy living in a quiet village, or for a vacation home or to make a profit&nbsp;","sellerName":"","sellerIcon":"","markerLabelText":"","markerLabelTextColor":"","markerLabelBgColor":"","markerLabelBorderColor":"","markerLabelContainerStyle":"","markerLabelBgOpacity":"","markerLabelFontSize":"","markerLabelFontFamily":"","markerLabelBold":"","markerLabelItalic":""},{"icn":"images/property/s_thumbdefault.jpg","title":"Penthouse à venda no Largo do Chiado","lat":"38.7217300","lng":"-9.1387796","price":"350.000","prpid":"120","pdesc":"Venha conhecer com a HB Luxury Real Estate este fabuloso Apartamento T2 no Chiado, junto ao Largo do Carmo e, com uma maravilhosa Vista Rio e para o Castelo de S&atilde;o Jorge. Apartamento Penthouse em 5&ordm; andar de pr&eacute;dio SEM elevador. Apartamento T2 composto por: - Sala de estar com Vista para Rio e para a cidade de Lisboa; - Cozinha totalmente equipada; - WC completo c/ banheira e cabine de duche; - 2 Quartos com roupeiro; - Tem ainda um pequeno escrit&oacute;rio com Vista Rio. Equipamentos: - Vidros duplos; - Janelas oscilobatentes e Velux; - Porta de alta seguran&ccedil;a; - Ar condicionado; - Eletrodom&eacute;sticos BOSCH. Localiza&ccedil;&atilde;o e Zona Envolvente: Este espa&ccedil;oso apartamento T2, com 100m&sup2;, est&aacute; localizado no cora&ccedil;&atilde;o do Carmo, uma das zonas mais emblem&aacute;ticas de Lisboa. Com uma vista panor&acirc;mica extraordin&aacute;ria sobre a cidade, o rio Tejo, o Castelo de S&atilde;o Jorge, o Convento do Carmo e a S&eacute; de Lisboa, este im&oacute;vel proporciona uma experi&ecirc;ncia &uacute;nica de viver na capital. No cora&ccedil;&atilde;o de Lisboa, perto de todo tipo de com&eacute;rcio, servi&ccedil;os, zona tur&iacute;stica e aeroporto. Nesta zona encontra v&aacute;rios restaurantes com esplanadas que, convidam a um almo&ccedil;o mais relaxado, ao mesmo tempo que se pode apreciar a vida lisboeta que por aqui circula todos os dias. Localizado numa das melhores zonas do Chiado, a dois passos do Largo do Carmo e, a poucos metros dos Armaz&eacute;ns do Chiado, este apartamento permite uma &oacute;tima qualidade de vida tendo todo o tipo de comercio, servi&ccedil;os e transportes muito perto. Sobre n&oacute;s: A HB Luxury Real Estate est&aacute; presente no mercado imobili&aacute;rio h&aacute; alguns anos, tendo-se especializado no segmento &ldquo;Prime&rdquo; na vertente Habita&ccedil;&atilde;o e produtos de Investimento em Portugal. A nossa equipa de profissionais oferece uma gama diversificada de servi&ccedil;os de qualidade aos clientes, garantindo todo o acompanhamento na sele&ccedil;&atilde;o da propriedade, compra, venda ou arrendamento, assessoria jur&iacute;dica e tribut&aacute;ria e Banca durante todo o processo. Num trabalho de estreita coopera&ccedil;&atilde;o desenvolvido com os nossos escrit&oacute;rios associados em todo o mundo e com a nossa equipa de consultores, estamos presentes nos locais privilegiados de Lisboa, Cascais, Estoril, Sintra, Ericeira, Costa do Alentejo e Algarve. Venha conhecer e deslumbre-se.","sellerName":"","sellerIcon":"","markerLabelText":"","markerLabelTextColor":"","markerLabelBgColor":"","markerLabelBorderColor":"","markerLabelContainerStyle":"","markerLabelBgOpacity":"","markerLabelFontSize":"","markerLabelFontFamily":"","markerLabelBold":"","markerLabelItalic":""}],"mapType":"random","mapEffect":"fitbounds","mapFlySpeed":"normal","showSellerBadge":"no","autoPlay":"off","sellerName":"Maria Lopez","sellerIcon":"49_557c2494627b993e.jpg","sellerUid":"49","mdvid":"dvUpMapiooln"}
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=436 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=436 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=436 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=436 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=436 AND ql_isreply=4 LIMIT 1
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=436 AND ql_isreply=4 LIMIT 1
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=433 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=433 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=433 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=433 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=433 AND ql_isreply=4 LIMIT 1
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=433 AND ql_isreply=4 LIMIT 1
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=399 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=399 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=399 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=399 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=399 AND ql_isreply=4 LIMIT 1
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=399 AND ql_isreply=4 LIMIT 1
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=297 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=297 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=297 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=297 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=297 AND ql_isreply=4 LIMIT 1
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=297 AND ql_isreply=4 LIMIT 1
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=296 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qcmnts WHERE cmts_prodid=296 AND cmts_prodtype='post' AND cmts_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=296 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT COUNT(*) AS cnt FROM qlikes WHERE ql_cmntId=296 AND ql_isreply=4 AND ql_rtype=5
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=296 AND ql_isreply=4 LIMIT 1
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT _id, ql_rtype FROM qlikes WHERE ql_userid=60 AND ql_cmntId=296 AND ql_isreply=4 LIMIT 1
 
anon_1772756162.png:1  GET https://titan/incasa/images/ucontent/anon_1772756162.png 404 (Not Found)
 doNurGenMap.tNMOPDVID: dvUpMapiooln
 doNurGenMap.tDGMSmrkrArr: [{"icn":"images/property/s_thumb78_9270b123cc274ddf.jpg","title":"Typical 3-Story House with Terrace 28.000?","lat":"39.2587279","lng":"-8.5838777","price":"199","prpid":"78","pdesc":"Typical 3-Story House with Terrace\n28.000&euro;\nMa&ccedil;ainhas, Guarda, the village is quiet, with beautiful views of countryside and mountains&nbsp;\n18 minutes from Valhelhas&nbsp;\n6 minutes from Belmonte and 16 minutes from Guarda City&nbsp;\n&nbsp;It is a good investment for those who enjoy living in a quiet village, or for a vacation home or to make a profit&nbsp;","sellerName":"","sellerIcon":"","markerLabelText":"","markerLabelTextColor":"","markerLabelBgColor":"","markerLabelBorderColor":"","markerLabelContainerStyle":"","markerLabelBgOpacity":"","markerLabelFontSize":"","markerLabelFontFamily":"","markerLabelBold":"","markerLabelItalic":""},{"icn":"images/property/s_thumbdefault.jpg","title":"Penthouse à venda no Largo do Chiado","lat":"38.7217300","lng":"-9.1387796","price":"350.000","prpid":"120","pdesc":"Venha conhecer com a HB Luxury Real Estate este fabuloso Apartamento T2 no Chiado, junto ao Largo do Carmo e, com uma maravilhosa Vista Rio e para o Castelo de S&atilde;o Jorge. Apartamento Penthouse em 5&ordm; andar de pr&eacute;dio SEM elevador. Apartamento T2 composto por: - Sala de estar com Vista para Rio e para a cidade de Lisboa; - Cozinha totalmente equipada; - WC completo c/ banheira e cabine de duche; - 2 Quartos com roupeiro; - Tem ainda um pequeno escrit&oacute;rio com Vista Rio. Equipamentos: - Vidros duplos; - Janelas oscilobatentes e Velux; - Porta de alta seguran&ccedil;a; - Ar condicionado; - Eletrodom&eacute;sticos BOSCH. Localiza&ccedil;&atilde;o e Zona Envolvente: Este espa&ccedil;oso apartamento T2, com 100m&sup2;, est&aacute; localizado no cora&ccedil;&atilde;o do Carmo, uma das zonas mais emblem&aacute;ticas de Lisboa. Com uma vista panor&acirc;mica extraordin&aacute;ria sobre a cidade, o rio Tejo, o Castelo de S&atilde;o Jorge, o Convento do Carmo e a S&eacute; de Lisboa, este im&oacute;vel proporciona uma experi&ecirc;ncia &uacute;nica de viver na capital. No cora&ccedil;&atilde;o de Lisboa, perto de todo tipo de com&eacute;rcio, servi&ccedil;os, zona tur&iacute;stica e aeroporto. Nesta zona encontra v&aacute;rios restaurantes com esplanadas que, convidam a um almo&ccedil;o mais relaxado, ao mesmo tempo que se pode apreciar a vida lisboeta que por aqui circula todos os dias. Localizado numa das melhores zonas do Chiado, a dois passos do Largo do Carmo e, a poucos metros dos Armaz&eacute;ns do Chiado, este apartamento permite uma &oacute;tima qualidade de vida tendo todo o tipo de comercio, servi&ccedil;os e transportes muito perto. Sobre n&oacute;s: A HB Luxury Real Estate est&aacute; presente no mercado imobili&aacute;rio h&aacute; alguns anos, tendo-se especializado no segmento &ldquo;Prime&rdquo; na vertente Habita&ccedil;&atilde;o e produtos de Investimento em Portugal. A nossa equipa de profissionais oferece uma gama diversificada de servi&ccedil;os de qualidade aos clientes, garantindo todo o acompanhamento na sele&ccedil;&atilde;o da propriedade, compra, venda ou arrendamento, assessoria jur&iacute;dica e tribut&aacute;ria e Banca durante todo o processo. Num trabalho de estreita coopera&ccedil;&atilde;o desenvolvido com os nossos escrit&oacute;rios associados em todo o mundo e com a nossa equipa de consultores, estamos presentes nos locais privilegiados de Lisboa, Cascais, Estoril, Sintra, Ericeira, Costa do Alentejo e Algarve. Venha conhecer e deslumbre-se.","sellerName":"","sellerIcon":"","markerLabelText":"","markerLabelTextColor":"","markerLabelBgColor":"","markerLabelBorderColor":"","markerLabelContainerStyle":"","markerLabelBgOpacity":"","markerLabelFontSize":"","markerLabelFontFamily":"","markerLabelBold":"","markerLabelItalic":""}]
 addNuMapTileLayer.mapType: street
 addNuMapTileLayer.renderer: tileLayer.canvas
 doNurGenMap.ts: {"icn":"images/property/s_thumb78_9270b123cc274ddf.jpg","title":"Typical 3-Story House with Terrace 28.000?","lat":"39.2587279","lng":"-8.5838777","price":"199","prpid":"78","pdesc":"Typical 3-Story House with Terrace\n28.000&euro;\nMa&ccedil;ainhas, Guarda, the village is quiet, with beautiful views of countryside and mountains&nbsp;\n18 minutes from Valhelhas&nbsp;\n6 minutes from Belmonte and 16 minutes from Guarda City&nbsp;\n&nbsp;It is a good investment for those who enjoy living in a quiet village, or for a vacation home or to make a profit&nbsp;","sellerName":"","sellerIcon":"","markerLabelText":"","markerLabelTextColor":"","markerLabelBgColor":"","markerLabelBorderColor":"","markerLabelContainerStyle":"","markerLabelBgOpacity":"","markerLabelFontSize":"","markerLabelFontFamily":"","markerLabelBold":"","markerLabelItalic":""}
 [MAP_LABEL_DEBUG][decodeNuMapLzText] passthrough {in: 'Typical 3-Story House with Terrace 28.000?', out: 'Typical 3-Story House with Terrace 28.000?'}
 [MAP_LABEL_DEBUG][tooltip] {prpid: '78', containerMode: 'default', markerLabelTextRaw: '', markerLabelTextDecoded: '', defaultTitleHtml: 'Typical 3-Story House with Terrace 28.00...<br><b>199</b>'}
 [MAP_LABEL_DEBUG][doNurGenMap.marker] {idx: 0, prpid: '78', rawTitle: 'Typical 3-Story House with Terrace 28.000?', decodedTitle: 'Typical 3-Story House with Terrace 28.000?', markerLabelText: '', ?}
 doNurGenMap.ts: {"icn":"images/property/s_thumbdefault.jpg","title":"Penthouse à venda no Largo do Chiado","lat":"38.7217300","lng":"-9.1387796","price":"350.000","prpid":"120","pdesc":"Venha conhecer com a HB Luxury Real Estate este fabuloso Apartamento T2 no Chiado, junto ao Largo do Carmo e, com uma maravilhosa Vista Rio e para o Castelo de S&atilde;o Jorge. Apartamento Penthouse em 5&ordm; andar de pr&eacute;dio SEM elevador. Apartamento T2 composto por: - Sala de estar com Vista para Rio e para a cidade de Lisboa; - Cozinha totalmente equipada; - WC completo c/ banheira e cabine de duche; - 2 Quartos com roupeiro; - Tem ainda um pequeno escrit&oacute;rio com Vista Rio. Equipamentos: - Vidros duplos; - Janelas oscilobatentes e Velux; - Porta de alta seguran&ccedil;a; - Ar condicionado; - Eletrodom&eacute;sticos BOSCH. Localiza&ccedil;&atilde;o e Zona Envolvente: Este espa&ccedil;oso apartamento T2, com 100m&sup2;, est&aacute; localizado no cora&ccedil;&atilde;o do Carmo, uma das zonas mais emblem&aacute;ticas de Lisboa. Com uma vista panor&acirc;mica extraordin&aacute;ria sobre a cidade, o rio Tejo, o Castelo de S&atilde;o Jorge, o Convento do Carmo e a S&eacute; de Lisboa, este im&oacute;vel proporciona uma experi&ecirc;ncia &uacute;nica de viver na capital. No cora&ccedil;&atilde;o de Lisboa, perto de todo tipo de com&eacute;rcio, servi&ccedil;os, zona tur&iacute;stica e aeroporto. Nesta zona encontra v&aacute;rios restaurantes com esplanadas que, convidam a um almo&ccedil;o mais relaxado, ao mesmo tempo que se pode apreciar a vida lisboeta que por aqui circula todos os dias. Localizado numa das melhores zonas do Chiado, a dois passos do Largo do Carmo e, a poucos metros dos Armaz&eacute;ns do Chiado, este apartamento permite uma &oacute;tima qualidade de vida tendo todo o tipo de comercio, servi&ccedil;os e transportes muito perto. Sobre n&oacute;s: A HB Luxury Real Estate est&aacute; presente no mercado imobili&aacute;rio h&aacute; alguns anos, tendo-se especializado no segmento &ldquo;Prime&rdquo; na vertente Habita&ccedil;&atilde;o e produtos de Investimento em Portugal. A nossa equipa de profissionais oferece uma gama diversificada de servi&ccedil;os de qualidade aos clientes, garantindo todo o acompanhamento na sele&ccedil;&atilde;o da propriedade, compra, venda ou arrendamento, assessoria jur&iacute;dica e tribut&aacute;ria e Banca durante todo o processo. Num trabalho de estreita coopera&ccedil;&atilde;o desenvolvido com os nossos escrit&oacute;rios associados em todo o mundo e com a nossa equipa de consultores, estamos presentes nos locais privilegiados de Lisboa, Cascais, Estoril, Sintra, Ericeira, Costa do Alentejo e Algarve. Venha conhecer e deslumbre-se.","sellerName":"","sellerIcon":"","markerLabelText":"","markerLabelTextColor":"","markerLabelBgColor":"","markerLabelBorderColor":"","markerLabelContainerStyle":"","markerLabelBgOpacity":"","markerLabelFontSize":"","markerLabelFontFamily":"","markerLabelBold":"","markerLabelItalic":""}
 [MAP_LABEL_DEBUG][decodeNuMapLzText] passthrough {in: 'Penthouse à venda no Largo do Chiado', out: 'Penthouse à venda no Largo do Chiado'}
 [MAP_LABEL_DEBUG][tooltip] {prpid: '120', containerMode: 'default', markerLabelTextRaw: '', markerLabelTextDecoded: '', defaultTitleHtml: 'Penthouse à venda no Largo do Chiado...<br><b>350.000</b>'}
 [MAP_LABEL_DEBUG][doNurGenMap.marker] {idx: 1, prpid: '120', rawTitle: 'Penthouse à venda no Largo do Chiado', decodedTitle: 'Penthouse à venda no Largo do Chiado', markerLabelText: '', ?}
 doFrMBoolStr: yes
 doNurAjaxPipe: fillDynFrmArr : batch[{"f":"fnishCoForm","v":"select * from qco where _id='24088' order by _id Desc limit 100","e":"qco"}]
 fillMFormArr: {"qco":{"f":"fnishCoForm","v":[{"_id":"24088","c_rtype":"5","c_coid":"5","c_category":"Item title here","c_uid":"46","c_internal":"5","c_name":"Shop Title","c_header":"...","c_desc":"Descriptionddd ffffff dfdg","c_tel":"Tel","c_contact":"Contact","c_web":"http....","c_email":"proptech@propsgo.com","c_logoimg":"24088_1735769930.jpg","c_zipcode":"","c_zp":"1","c_door":"","c_street":"","c_location":"Olival Basto","c_region":"Lisbon","c_country":"Portugal","c_ccode":"1","c_placeid":"1","c_loc_lat":"38.7908","c_loc_lng":"-9.16621","c_google_url":"1","c_rating":"1","c_revs":"1","c_msg":"","c_privacy":"5","c_whours":"N4Igtg9gdgjCBcIAMAOeBmJIA05oCYFk1Mc8p0jUMtdIoAWKk28gViIFoz6A2LsgBcArgFM4iTp3hShYwpOmzcI0ZUUzuKsUw3KQqjpLmj x3AHdRAEwnEaZK9YXJ08JE0s3190l u6vqxORiBaIE5mYUIAFsJ21H4GcS6JrIJxPmmxwoHZKnGh4RnCUeEAZgBOAJYJLGRV1an1uI1ZMO6UrTV5LSCNRQ01ZWQAzgCGgnUOuBOCzTMgc1l9c72Lc4OzkyOzwrDMG-sLSaP7K0eMh6f7W0v7uxHWMdNJFs8nwc8Xb8-rvzE7u8Yo8rC9rsFRDFPo4oT9ITF-gigVCRgBfIA","c_vala":"","c_valb":"","c_dadded":"1734480846"}],"e":"qco"}}
 fillMFormArr.error: TypeError: Cannot read properties of undefined (reading 'v') :: qco
 doMainContent.pid: aa-show-prop
 doNuAjaxPipe.apUrl: tplates/aa-show-prop.html
 doNuAjaxPipe.admin-replace: tplates/aa-show-prop.html
 JSSHOP.ads.doGenericPlug: prop single-property dvPartLinks
 JSSHOP.ads.doGenericPlug: <div class="txtSmall">Ver esta Listagem Magnifica</div>
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = 'pt_pt' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = 'pt_pt' WHERE p._id = 132 AND p.prtype = '5' ORDER BY RAND() LIMIT 20
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT p.*, u.u_icon, u.u_fullname, COALESCE(pd_user.pd_prptitle, pd_def.pd_prptitle) AS pd_prptitle, COALESCE(pd_user.pd_prpdesc,  pd_def.pd_prpdesc)  AS pd_prpdesc FROM property p JOIN quser u ON p.uid = u._id LEFT JOIN propdescs pd_user ON pd_user.pd_prpid = p._id AND pd_user.pd_prptlng = 'pt_pt' LEFT JOIN propdescs pd_def ON pd_def.pd_prpid = p._id AND pd_def.pd_prptlng = 'pt_pt' WHERE p._id = 132 AND p.prtype = '5' ORDER BY RAND() LIMIT 20
 doMPropsList - aww: [{"_id":"132","prtype":"5","pcoid":"5","ptitle":"Titulo.. Moradia... ","pcontent":"","ptype":"apartment","bhk":"on","stype":"lease","bedroom":"5","bathroom":"2","balcony":"1","kitchen":"1","hall":"1","pfloors":"2","size":"5","price":"199.000","pdoornum":"1","pstreet":"Rua 1 de Dezembro","location":"Sanatrem","city":"Monsanto","state":"Santarem","country":"Portugal","pzipcode":"2380-575","ploclat":"39.4653176","ploclng":"-8.7115432","feature":"5","pimage":"default.jpg","pprf_showslr":"5","pprf_showftd":"5","pprf_showloc":"5","pprf_prvcy":"members","uid":"46","pstatus":"pending","mapimage":"5","topmapimage":"5","groundmapimage":"5","totalfloor":"5","pdadded":"1762548558","u_icon":"22_1726999049.jpg","u_fullname":"Pedro Matias","pd_prptitle":"C4S2FcBsHsAIBM4AcBO17mNIA","pd_prpdesc":"CYUwzgxgTglgZBCJgwDYG4CGB7ABMPABym2AFcAXbIA"}]
 tBBSSObj.kvIcnsObj[key]: &#xe3c9; :: edit
 tBBSSObj.kvIcnsObj[key]: &#xe8f4; :: view
 tBBSSObj.kvIcnsObj[key]: &#xe80d; :: share
 tBBSSObj.kvIcnsObj[key]: &#xe0b7; :: msg
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=select * from propdescs where pd_prpid='132' and pd_rtype='5' order by _id Desc limit 100
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=select * from propdescs where pd_prpid='132' and pd_rtype='5' order by _id Desc limit 100
 setPropTandD - aapa: null [{"_id":"96","pd_rtype":"5","pd_uid":"46","pd_coid":"46","pd_prpid":"132","pd_prptlng":"pt_pt","pd_prptype":"5","pd_prptitle":"C4S2FcBsHsAIBM4AcBO17mNIA","pd_prpdesc":"CYUwzgxgTglgZBCJgwDYG4CGB7ABMPABym2AFcAXbIA","pd_dadded":"5"},{"_id":"93","pd_rtype":"5","pd_uid":"5","pd_coid":"24088","pd_prpid":"132","pd_prptlng":"en_us","pd_prptype":"5","pd_prptitle":"IIJwpghgBAtgTFCAHCIAuMwDs1A","pd_prpdesc":"JIWwhg5gpgdgBFOBlALmFBXAznMAHMAJxRFhQDo5RJYg","pd_dadded":"1761421919"}] [object Object]
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=select * from qmedia where m_pid='132' and m_rtype='5' order by m_vala desc limit 100
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=select * from qmedia where m_pid='132' and m_rtype='5' order by m_vala desc limit 100
 setPropImgs: null [] [object Object]
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 132 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=132 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 132 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=132 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
 cmnt.save.request {uid: 60, isGuest: false, hasText: true, hasMap: false, hasUploads: 0, ?}
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=insert into qcmnts(cmts_rtype,cmts_threadid,cmts_prodid,cmts_prodtype,cmts_userid,cmts_viewed,cmts_from,cmts_from_icon,cmts_fromsg_email,cmts_fromsg_tel,cmts_fromsg_ip,cmts_subject,cmts_matter,cmts_media,cmts_privacy,cmts_status,cmts_dadded,cmts_dmodified,cmts_modifiedby) values ('5','d73ued4tsbr','132','prod','60','-','Sofia%20Lopeza','60_6f66d1a7c903e7f6.jpg','','','','','new%2520prop','','pub','open','1780066165','1780066165','')
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=insert into qcmnts(cmts_rtype,cmts_threadid,cmts_prodid,cmts_prodtype,cmts_userid,cmts_viewed,cmts_from,cmts_from_icon,cmts_fromsg_email,cmts_fromsg_tel,cmts_fromsg_ip,cmts_subject,cmts_matter,cmts_media,cmts_privacy,cmts_status,cmts_dadded,cmts_dmodified,cmts_modifiedby) values ('5','d73ued4tsbr','132','prod','60','-','Sofia%20Lopeza','60_6f66d1a7c903e7f6.jpg','','','','','new%2520prop','','pub','open','1780066165','1780066165','')
 cmnt.save.resp {"status":"insert ","data":32}
 cmnt.save.attach.done {kind: 'comment', ownerId: '', rowId: 32}
 doNuAjaxPipe.apUrl: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 132 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=132 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50
 doNuAjaxPipe.admin-replace: _p/do.php?t=123&f=n&q=SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 132 AND m.m_category = 'cmnts' AND m.m_rtype = 5 WHERE c.cmts_prodid=132 AND c.cmts_prodtype='prod' AND c.cmts_rtype=5 AND c.cmts_privacy='pub' ORDER BY c.cmts_dadded DESC LIMIT 50


GitHub Copilot: You?re right to question the call path; next I?m tightening two likely weak points: response-shape parsing (including nested wrapper objects) and explicit render diagnostics in the comments callback so we can confirm rows are actually being received/rendered.

Generating patch (73 lines) in [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js)


```

```


Checked [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js), no problems found

I?m also hardening the property-page call itself so comments always use a resolved product id/owner id fallback chain, not only `currUrlArr.prpid`, which can be stale in some navigation paths.

Generating patch (9 lines) in [](file:///c%3A/xampp/htdocs/incasa/js/app/x_aa-show-prop.js)


```

```


Checked [](file:///c%3A/xampp/htdocs/incasa/js/app/x_aa-show-prop.js), [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js), no problems found

Yes, the property page is calling comments with the right intent, and your logs confirm it.

From your own output:
- The comment SELECT is being called with the expected property ids (132, 133, etc.) and prod type prod.
- The insert succeeds (data: 31, 32), then the refresh SELECT is triggered immediately.

That means the main issue is not ?no call,? but ?response-to-render parsing and/or render path.?

I made two concrete fixes:

1. Stronger response parsing for comment/reply/like callbacks  
It now supports nested legacy shapes too (including keyed wrappers that contain v/data/rows/result arrays), plus a safe loose array fallback.  
Changed in x_interactions.js near x_interactions.js.

2. Added render diagnostics in the comment renderer  
You now get a clear log with row count at render time:
- cmnt.render.rows { prodId, prodType, count, rawType }  
Added in x_interactions.js.

3. Hardened comment-call variables in property page  
I changed the call to resolve product id via fallback chain:
currUrlArr.prpid -> prpid -> aprpObj._id  
Changed in x_aa-show-prop.js near x_aa-show-prop.js.

What this answers directly
- Is aa-show-prop calling comments with correct variables?  
Mostly yes, and your logs prove it in those runs. I still hardened the call for edge navigation cases.

What to check now
1. Reload aa-show-prop and post a comment.
2. In console, find cmnt.render.rows.
3. Share that one log line.

If count is > 0 and still no UI rows, I?ll patch the renderer output path next.
If count is 0, I?ll patch/inspect the exact backend payload for that SELECT immediately.

Made changes.

User: ok, i added logging to the setCmtsDiv function and found the culprit. it it parsing the quser table with the logisgo table structure which is similar to the incasa quser table but not exactly the same. for instance quser in logisgo uses u_fname and u_lname (first and last name of user) whereas incasa quser table uses u_fullname.
We need to create global variables (settings at top of x_interactions.js) whith the names of the tables and replace them in the comments queries to the quser table work flow. in the case of the users actual name, it would have the variable currUFNameFlds = "u_fullname";
or currUFNameFlds = "u_fname,u_lname" (and join both);
other variables to take into consideration are currUIconFld and any other fields that are not part of the messaging,comments,likes tables.

GitHub Copilot: Let me read the current file state to understand all the affected queries before making changes.  

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1-1), lines 1 to 130

Searched for regex `u\.u_fname|u\.u_lname|u\.u_fullname|u\.u_icon|u\.u_name|u_fname AS|u_lname AS|u_fullname AS|u_icon AS|u_name AS` (`**/js/app/x_interactions.js`), 12 results

Now I have all three affected query lines. I'll read a few lines of context around each before editing.   

User: here was the sql error:
setCmtsDiv.resp: {"status":"error","data":"SELECT c.*, u.u_icon AS u_icon, u.u_fname AS u_fname, u.u_lname AS u_lname, u.u_name AS u_name, m.m_file AS cmts_map_file, m.m_data AS cmts_map_data FROM qcmnts c LEFT JOIN quser u ON u._id = c.cmts_userid LEFT JOIN qmedia m ON m.m_pid = c._id AND m.m_catid = 133 AND m.m_category = \'cmnts\' AND m.m_rtype = 5 WHERE c.cmts_prodid=133 AND c.cmts_prodtype=\'prod\' AND c.cmts_rtype=5 AND c.cmts_privacy=\'pub\' ORDER BY c.cmts_dadded DESC LIMIT 50mysqli_sql_exception: Unknown column \'u.u_fname\' in \'field list\' in C:\\\\xampp\\\\htdocs\\\\incasa\\\\_p\\\\DumDatabase.php:49Stack trace:#0 C:\\\\xampp\\\\htdocs\\\\incasa\\\\_p\\\\DumDatabase.php(49): mysqli_query(Object(mysqli), \'SELECT c.*, u.u...\')#1 C:\\\\xampp\\\\htdocs\\\\incasa\\\\_p\\\\do.php(360): DumDatabase->fetch_custom(\'SELECT c.*, u.u...\')#2 {main}"}
x_interactions.js?version=2:1397 cmnt.render.rows {prodId: '133', prodType: 'prod', count: 0, rawType: 'string'}
x_all.js?version=2:13247 loadNuSwiperObj: {"slidesPerView":3,"loop":true,"pagination":{"el":".swpPrpPg","clickable":true},"navigation":{"nextEl":".swprBtnPrev","prevEl":".swprBtnNext"},"cls":".swiperPrp"}

GitHub Copilot: Now I have the exact error and all 3 query sites. I'll add config variables at the top, a helper to build the canonical SELECT fragment, and update all 3 queries plus the `showLikedListCB` renderer that reads those fields.   

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1490-1490), lines 1490 to 1502

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1635-1635), lines 1635 to 1650

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1915-1915), lines 1915 to 1960

Now I have all three sites. I'll make all the changes in one batch: 

Replacing 9 lines with 39 lines in [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js)

Compacted conversation
```

```
Let me check what succeeded:  

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1-1), lines 1 to 60

Searched for text `currQUserTable|getCmntUserSelectFrag` (`**/js/app/x_interactions.js`), 6 results

All 3 queries updated. The only failure was adding the config vars/helper function - the header text didn't match due to encoding. Let me add them directly after the existing setup vars: 

Replacing 3 lines with 33 lines in [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js)


```

```
Now verify no syntax errors: 

Checked [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js), no problems found

All clean. Here's a summary of what was added/changed:

**New config block** (top of x_interactions.js, after the existing setup vars):
| Variable | Incasa value | Logisgo value |
|---|---|---|
| `currQUserTable` | `"quser"` | `"quser"` |
| `currQUserIdFld` | `"_id"` | `"_id"` |
| `currQUserIconFld` | `"u_icon"` | `"u_icon"` |
| `currQUserFullNameFld` | `"u_fullname"` | `""` |
| `currQUserFNameFld` | `""` | `"u_fname"` |
| `currQUserLNameFld` | `""` | `"u_lname"` |
| `currQUserUNameFld` | `"u_name"` | `"u_name"` |

**`getCmntUserSelectFrag(alias)`** ? builds the aliased SELECT fragment dynamically. Always produces canonical aliases `u_icon`, `u_fname`, `u_lname`, `u_name`, so all rendering code (`getCmntFullName`, `getCmntIconVal`) works unchanged.

**3 queries updated**: comments SELECT (line ~1642), replies SELECT (line ~1497), likes list SELECT (line ~1921) ? all now call `getCmntUserSelectFrag("u")` and use `currQUserTable`/`currQUserIdFld` for the JOIN.

To switch to Logisgo, just change the 3 name fields at the top: `currQUserFullNameFld = ""`, `currQUserFNameFld = "u_fname"`, `currQUserLNameFld = "u_lname"`.

Made changes.

User: ok, can you confirm that this issue does not also arise in the messaging flow and if so, update it with the config variables.

GitHub Copilot: Searched for regex `quser|u_fname|u_lname|u_fullname|u_icon|u_name` (`**/js/app/x_interactions.js`), 20 results

The default limit cut off ? let me search specifically for messaging queries that join user tables: 

Searched for regex `LEFT JOIN quser|JOIN quser|FROM quser|u\.u_fname|u\.u_lname|u\.u_fullname|u\.u_icon|u\.u_name` (`**/js/app/x_interactions.js`), no results

Searched for regex `quser|u_fname|u_lname` (`**/js/app/x_interactions.js`), 49 results

The grep shows all remaining `u_fname`/`u_lname` references are reading from `currQUsrObj` (the already-loaded current user object) ? not from SQL JOINs. Let me confirm the messaging SQL queries don't do any `quser` join: 

Searched for regex `SELECT.*FROM qmsg|SELECT.*FROM qmsgs|SELECT.*msgs.*JOIN|JOIN.*qmsg` (`**/js/app/x_interactions.js`), no results

Searched for regex `SELECT .* FROM q[a-z]` (`**/js/app/x_interactions.js`), 13 results

Confirmed ? the messaging flow has **no `quser` JOIN queries at all**. Every message query is against `qmedia`, `qlikes`, or `qcmnts` with no user table JOIN. The `u_fname`/`u_lname` references in the messaging code (lines 2253, 3500) only read from `currQUsrObj` ? the already-loaded session user object ? so no schema mismatch can happen there.

**The issue was isolated to the 3 comment/likes queries already fixed.** The messaging flow is clean.

User: the comments feed, when showing an image, should keep max style with of that image to 200px; and should link the image to the main image as the messaging feed does.

GitHub Copilot: Let me find both the comment image rendering and the messaging image rendering to compare:  

Searched for regex `cmts_map_file|cmts_file|cmt.*img|img.*cmt|comment.*image|setCmtsDiv.*img` (`**/js/app/x_interactions.js`), 20 results

Searched for regex `getMsgUserThumbSrc|msg.*img|img.*msg|m_file.*img|getThumbSrc|getMsgImgSrc` (`**/js/app/x_interactions.js`), 16 results

Now let me find the exact comment image rendering in `setCmtsDiv` and `setCmtReplies`: 

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1430-1430), lines 1430 to 1620

Now let me check `getMapMediaSrc` to understand how to get the full-size image URL: 

Searched for text `getMapMediaSrc` (`**/js/app/x_interactions.js`), 5 results

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#682-682), lines 682 to 715

Clear picture. The thumbnail URL is `images/ucontent/m_thumb<file>` (already used for display). The full-size is just `images/ucontent/<file>` (no prefix). Currently non-route images render with `width:100%;max-width:100%` and no link. I need to:
1. Cap them to `max-width:200px;max-height:200px`
2. Wrap in an `<a>` linking to the full-size image in a new tab

Two sites to change ? comments in `setCmtsDiv` and replies in `setCmtReplies`: 

Replacing 22 lines with 24 lines in [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js)


```

```


Checked [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js), no problems found

Done. Changes applied to both `setCmtsDiv` (comments) and `setCmtReplies` (replies):

- **Non-route images**: now capped at `max-width:200px;max-height:200px` and wrapped in `<a href="images/ucontent/<filename>" target="_blank">` ? opens the original full-size file in a new tab
- **Route-replay images**: same `200px` cap, link unchanged (still triggers the route replay popup)
- The `tCmtFullUrl` / `tRepFullUrl` calculation handles absolute URLs (http/https/leading slash) by passing them through as-is, stripping the `m_thumb` prefix for local files

Made changes.

User: add width:100% to the end of the style attribute of these comment/reply images on the feed so they size nicely.

GitHub Copilot: Searched for text `max-width:200px;max-height:200px;height:auto;border:1px solid #ddd;border-radius:6px` (`**/js/app/x_interactions.js`), 4 results

Ran terminal command: (Get-Content "c:\xampp\htdocs\incasa\js\app\x_interactions.js" -Raw).Replace('max-width:200px;max-height:200px;height:auto;border:1px solid #ddd;border-radius:6px;', 'max-width:200px;max-height:200px;width:100%;height:auto;border:1px solid #ddd;border-radius:6px;') | Set-Content "c:\xampp\htdocs\incasa\js\app\x_interactions.js" -NoNewline

Done ? `width:100%` added to all 4 image instances (comment route, comment plain, reply route, reply plain). The `max-width:200px` will still cap them so they won't exceed 200px even with `width:100%`.

User: when i say comment/reply images, i am reffering to the images uploaded theough the upload button and nothing else

GitHub Copilot: Let me check the current state of those 4 lines to distinguish route images from plain uploaded images:  

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1475-1475), lines 1475 to 1492

Read [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js#1581-1581), lines 1581 to 1596

The `if(tCmtRouteHref)` branch is route/map images, the `else` branch is plain uploaded images. I need to remove `width:100%` from the two route branches only: 

Multi-Replace String in Files

Generating patch (10 lines) in [](file:///c%3A/xampp/htdocs/incasa/js/app/x_interactions.js)


```

```
Done. Now `width:100%` is only on the plain uploaded image branches (`else` / `target="_blank"`), and the route replay image branches are back to their original sizing.

Made changes.
