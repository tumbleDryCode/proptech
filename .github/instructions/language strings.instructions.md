
description: All labels and inline text in the project defaults to English. 
But Portuguesem Spanish and French translations are available for some of the most common labels and text.
The translations are stored in the js/app/ directory, i.e. aa-en_us.js, aa-pt_pt.js, aa-spa_spa.js, and aa-fr_fr.js.
applyTo: When needed to add words, text or labels to html output.
 

How it works: 
the <ti> element is used.
See js/app/x_all.js for examples of how to use the <ti> element to reference the language strings in the language files.
Example js string:
btnStr = "<button id=\"mmuploadBtn\" class=\"cls_button cls_button-small\"><ti data-ison=\"" + stxt[70] + "\" data-desc=\"btn_save\">Add</ti></button>";
Example inline html:
<div class="cls_label"><ti data-ison="stxt[71]" data-desc="lbl_language">Language</ti></div>
When you need to add words, text or labels to html output, check the js/app/ directory for the appropriate language file (aa-en_us.js for English, aa-pt_pt.js for Portuguese, aa-spa_spa.js for Spanish, and aa-fr_fr.js for French). Add the new text if it does not exist in the corresponding language file to ensure it is available in all supported languages.
