ok, we need to add a top navigation bar for wide screens.
One way of dong this would be to save all navigation menu items and/or sub items would be to store them in in a object, (the doCollsLoad function in js\app\x_menu.js does that but it calls doNuCollsLoad and the current links obects are irrelevant and it is broken). This object allows you to easily edite the menu without playing with design since the design string is created in the function. then the targeted top menu nav bar div inner html is set to that string.
Included is the x_menu.js from the logisgo which is an example and not to be edited, but it shows how you can create the top menu items with links and sub items using the doCollsLoad function called from the loadLmenu function in C:\xampp\htdocs\logisgo\web\js\app\x_booter.js. It is a bit more complex since it shows menu items based on user permissions, but it will give you an idea of how it sets the "mmn" div with a bootstrap-primer style menu from the html string it cooks up using the doCollsLoad.
So, using the links and stxt[..]]labels and icons  in the div with id navbarSupportedContent found in include\header.php, fix the doCollsLoad function found in  js\app\x_menu.js to be similar to the setup in the same function in C:\xampp\htdocs\logisgo\web\js\app\x_menu.js.
an example of how the Guest menu item is created and a sub menu item is added:
        // example from logisgo
		tmpMCollItem = null;
		tmpMCollItem = {};
		tmpMCollItem["lki"] = "g72"; // unique link id usually with the first letter of the tmpMCollItem["uty"] or first 2 letters. must be unique in all menu items created
		tmpMCollItem["uty"] = "guest"; // the menu item  group id
		tmpMCollItem["wt"] = 3; // link weight not used
		tmpMCollItem["u"] = "javascript:doMLinkM('aa-show-help','pid=aa-show-help');"; // the menu items link url. should be the same as the ones used in header.php
		tmpMCollItem["mi"] = "&#xe887;"; // the icon
		tmpMCollItem["ti"] = stxt[71]; // the label/text for menu item
		tmpMCollItem["c"] = "collection-item"; // the class
		tmpMCollItem["nm"] = "aa-show-help"; // the pid that is set in the label link, i.e. tmpMCollItem["u"]
		tmpMCollItem["pa"] = tmpMCollItem["nm"]; // parent id
		currMLinksObj[tmpMCollItem["lki"]] = tmpMCollItem;
		currMLinksObj[tmpMCollItem["uty"]]["lks"].push(tmpMCollItem["lki"]);
		currMCollItems[tmpMCollItem["nm"]] = tmpMCollItem;
        // in order to be a main menu item, i think  tmpMCollItem["pa"] should be equal to tmpMCollItem["lki"]
        // end of example from logisgo

        ** Ok, what needs to be done:
        Keeping in mind the design patterns and css (C:\xampp\htdocs\logisgo\web\css\x_dev.css) used in the logisgo project and updating the local x_dev.css (C:\xampp\htdocs\logisgo\web\css\x_dev.css) as needed, and taking all this into consideration, for now just populate the  doCollsLoad function in js\app\x_menu.js and advise as the next steps.
        The doCollsLoad should be populated with the following Meni Items and Sub Menu Items (if used), and refer to include\header.php for links and stxt[..] text/label language strings:
        // start of navigation menu bar items
        - menu item "Home"
            links to javascript:goHome();
        - menu item "Properties" (with 2 submenus)
            links to  javascript:eindex('aa-show-featured', 'pid=aa-show-featured');
            - submenu "Your Properties"
                links to javascript:eindex('aa-edit-uprops', 'pid=aa-edit-uprops');
            - submenu "Add Property"
                links to javascript:eindex('aa-add-prop','pid=aa-add-prop');
        - menu item "Updates" (with 2 submenus)
                links to the create update see header.php links and styles
            - submenu "Your Updates"
            - submneu "Add Update"
        - menu item "Blog"
        - menu item "Account" (with 3 submenus)
            -submenu "Your Profile"
                links to javascript:JSSHOP.shared.showUserProfile(0);
            - submenu "Edit Account"
                links to javascript:eindex('aa-edit-user', 'pid=aa-edit-user&tuid=57');
            - submenu Login or Logout depending if logged in or not
        // end of navigation menu bar items


        Please also remeber all files that i have set as content to this request and list them here:
        Files Used:

