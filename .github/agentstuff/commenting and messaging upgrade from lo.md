commenting and messaging upgrade from logisgo

This upgrade includes improvements to the commenting and messaging features of the Logisgo platform that was actually an upgrade from the original incasa messaging and commenting system.
The js\app\x_interactions.js file has been copied over from logisgo and basically organizes the messaging and commenting functions into JSSHOP.msgs and JSSHOP.cmnts.
The legacy functions in js\app\x_all.js lines around 21488 have all been moved to the js\app\x_interactions.js and the js\app\x_all.js file needs to be refactored to reflet that.
Even if it means adding to the x_interactions.js file without breaking existing code; preferably added to the JSSHOP.msgs and JSSHOP.cmnts scope.
Things to take into consideration:
basically the major upgrades made in the logisgo code from the original incasa code were with the image file uploads and the map drawing image creation in comments.
The qmedia database table insert records must maintain thecurrent value flow from this incasa legacy code since m_pid can mean property, update _id, and m_catid can differ etc.
Included is the sql file, (dev\db.sql) to view table structure and insert flow as compared to the included logisgo one (C:\xampp\htdocs\logisgo\dev\logisgo.sql).
The language strings (stxt[..]), updated in the logisgo language strings file (C:\xampp\htdocs\logisgo\web\js\app\aa-en_us.js) must also be updated in the incasa (js\app\aa-en_us.js) language strings file.
Quite a few of the messaging/commenting function in the legacy incasa functions (js\app\x_all.js),were in the JSSHOP.ui scope and have been moved over to the JSSHOP.msgs and JSSHOP.cmnts scopes in x_interactions.js. This needs to be refactored also.
You can read the included messages.md (.github\agentstuff\messages.md), for a history of how the massaging system was implemented in incasa, updated in logisog to give you an ideia of how to upgrade back again to incasa.
So update the functions in (C:\xampp\htdocs\incasa\js\app\x_all.js) in accordance with the upgraded x_interactions.js, and fix the js\app\x_aa-show-messages.js functions to reflect the new functions in x_interactions.js(see C:\xampp\htdocs\logisgo\web\js\app\x_aa-show-messages.js as example).