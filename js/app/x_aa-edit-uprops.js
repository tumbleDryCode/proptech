function doMPropsList(aaw,aww,cww) {
    console.log('doMPropsList - aww: ' + aww);
   /*
 <table class="items-list col-lg-12" style="border-collapse:inherit;">
                        <thead>
                             <tr  class="bg-primary">
                                <th class="text-white font-weight-bolder">ID</th>
                                <th class="text-white font-weight-bolder"><ti data-ison="stxt[963]" data-desc="btn_getintouch">Property</ti></th>
                                <!-- <th class="text-white font-weight-bolder">BHK</th> -->
                                <th class="text-white font-weight-bolder"><ti data-ison="stxt[949]" data-desc="btn_selltype">Type</ti></th>
                                <th class="text-white font-weight-bolder"><ti data-ison="stxt[74]" data-desc="btn_date">Date</ti></th>
								<th class="text-white font-weight-bolder"><ti data-ison="stxt[77]" data-desc="btn_getintouch">Status</ti></th>
                                <th class="text-white font-weight-bolder"><ti data-ison="stxt[31]" data-desc="btn_edit">Edit</ti></th>
								<th class="text-white font-weight-bolder"><ti data-ison="stxt[42]" data-desc="btn_delete">Delete</ti></th>
                             </tr>
                        </thead>
                        <tbody>
						
							 
                            <tr>
                                <td><a class="txtBold txtDecorNone" href="submitpropertyupdate.php?id=<?php echo $row['0'];?>"><?php echo $row['0'];?></a></td>
                                <td>

                                
									<img src="admin/property/<?php echo $row["pimage"];?>" alt="pimage" class="icnmedbtn rtable">
                                    <div class="property-info d-table">
                                        <h5 class="text-secondary text-capitalize"><a href="propertydetail.php?pid=<?php echo $row['0'];?>"><?php echo $row['1'];?></a></h5>
                                        <span class="font-14 text-capitalize"><i class="fas fa-map-marker-alt text-primary font-13"></i>&nbsp; <?php echo $row['14'];?></span>
                                        <div class="price mt-3">
											<span class="text-primary">$&nbsp;<?php echo $row['13'];?></span>
										</div>
                                    </div>
								</td>
                                <!-- <td class="text-primary"><?php echo $row['4'];?></td> -->
                                <td class="text-capitalize">For <?php echo $row['5'];?></td>
                                <td class="text-capitalize"><?php echo $row['29'];?></td>
								<td class="text-capitalize"><?php echo $row['24'];?></td>
                                <td class="text-capitalize"><a class="btn btn-primary" href="submitpropertyupdate.php?id=<?php echo $row['0'];?>"><ti data-ison="stxt[31]" data-desc="btn_edit">Edit</ti></a></td>
								<td class="text-capitalize"><a class="btn btn-primary" href="submitpropertydelete.php?id=<?php echo $row['0'];?>"><ti data-ison="stxt[42]" data-desc="btn_delete">Delete</ti></a></td>
                            </tr>
						 
							
                        </tbody>
                    </table>   
        */

istrt = 0;
iprplen = 0;
fullPrpLstA = JSON.parse(aww);
iprplen = fullPrpLstA.length;
retPLstSTr = "";
retPLstSTr += '<table class="items-list col-lg-12" style="border-collapse:inherit;">';
retPLstSTr += '<thead>';
retPLstSTr += '<tr  class="bg-primary text-white font-weight-bolder">';
retPLstSTr += '<th>ID</th>';
retPLstSTr += '<th>Property</th>';
retPLstSTr += '<th>Type</th>';
retPLstSTr += '<th>Date</th>';
retPLstSTr += '<th>Status</th>';
retPLstSTr += '<th>Edit</th>';
retPLstSTr += '<th>Delete</th>';
retPLstSTr += '</tr>';
retPLstSTr += '</thead>';
retPLstSTr += '<tbody>';

// alert('doMPropsList - iprplen: ' + iprplen);
while(istrt < iprplen){
aprpObj = fullPrpLstA[istrt];
apropID = aprpObj["_id"];
aprpTitle = aprpObj["title"];
aprpContent = aprpObj["pcontent"];
aprpType = aprpObj["type"];
aprpBhk = aprpObj["bhk"];
aprpStype = aprpObj["stype"];
aprpBedroom = aprpObj["bedroom"];
aprpBathroom = aprpObj["bathroom"];
aprpBalcony = aprpObj["balcony"];
aprpKitchen = aprpObj["kitchen"];
aprpHall = aprpObj["hall"];
aprpFloor = aprpObj["floor"];
aprpSize = aprpObj["size"];
aprpPrice = aprpObj["price"];
aprpLocation = aprpObj["location"];
aprpCity = aprpObj["city"];
aprpState = aprpObj["state"];
aprpFeature = aprpObj["feature"];
aprpPimage = aprpObj["pimage"];
aprpPimage1 = aprpObj["pimage1"];
aprpPimage2 = aprpObj["pimage2"];
aprpPimage3 = aprpObj["pimage3"];
aprpPimage4 = aprpObj["pimage4"];
aprpUid = aprpObj["uid"];
aprpStatus = aprpObj["status"];
aprpMapimage = aprpObj["mapimage"];
aprpTopmapimage = aprpObj["topmapimage"];
aprpGroundmapimage = aprpObj["groundmapimage"];
aprpTotalfloor = aprpObj["totalfloor"];
aprpDate = aprpObj["date"];
 

retPLstSTr += '<tr>';
retPLstSTr += '<td><a class="txtBold txtDecorNone" href="javascript:eindex(\'aa-edit-prop\',\'pid=aa-edit-prop&prpid=' + apropID + '\');">' + apropID + '</a></td>';
retPLstSTr += '<td>';
retPLstSTr += '<img src="admin/property/' + aprpPimage + '" alt="pimage" class="icnmedbtn rtable">';
retPLstSTr += '<div class="property-info d-table">';
retPLstSTr += '<h5 class="text-secondary text-capitalize"><a href="propertydetail.php?pid=' + aprpUid + '">' + aprpTitle + '</a></h5>';
retPLstSTr += '<span class="font-14 text-capitalize"><i class="fas fa-map-marker-alt text-primary font-13"></i>&nbsp; ' + aprpLocation + '</span>';
retPLstSTr += '<div class="price mt-3">';
retPLstSTr += '<span class="text-primary">$&nbsp;' + aprpPrice + '</span>';
retPLstSTr += '</div>';
retPLstSTr += '</div>';
retPLstSTr += '</td>';
retPLstSTr += '<td class="text-capitalize">For ' + aprpStype + '</td>';
retPLstSTr += '<td class="text-capitalize">' + aprpDate + '</td>';
retPLstSTr += '<td class="text-capitalize">' + aprpStatus + '</td>';
retPLstSTr += '<td class="text-capitalize"><a class="btn btn-primary" href="submitpropertyupdate.php?id=' + aprpUid + '"><ti data-ison="stxt[31]" data-desc="btn_edit">Edit</ti></a></td>';
retPLstSTr += '<td class="text-capitalize"><a class="btn btn-primary" href="submitpropertydelete.php?id=' + aprpUid + '"><ti data-ison="stxt[42]" data-desc="btn_delete">Delete</ti></a></td>';
retPLstSTr += '</tr>';
istrt++;


}
retPLstSTr += '</tbody>';
retPLstSTr += '</table>';

JSSHOP.ui.setTinnerHTML("dvUprosList",retPLstSTr);
// alert('doMPropsList - aaw: ' + aaw);


 };

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function() {
 //  alert('fnishCntLoad');
 tmpDOqs = null;
tmpDOqs = {};
tmpDOqs["ws"] = "where uid=?";
tmpDOqs["wa"] = [quid];
tmpDOqs["l"] = 45;
oia = getNuDBFnvp("property",5,null,tmpDOqs);
 doQComm(oia["rq"], null, "doMPropsList");
return dmyFnishCntLoad;
};