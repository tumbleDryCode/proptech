// Utility to enable/disable all inline map property tabs (Preview, Markers, Settings)
function setInlineMapTabsEnabled(enabled) {
    var tabLinks = document.querySelectorAll('#dvInlinePTypeTabs .nav-link');
    for (var i = 0; i < tabLinks.length; i++) {
        if (enabled) {
            tabLinks[i].style.pointerEvents = '';
            tabLinks[i].style.opacity = '';
        } else {
            tabLinks[i].style.pointerEvents = 'none';
            tabLinks[i].style.opacity = '0.65';
        }
    }
}
