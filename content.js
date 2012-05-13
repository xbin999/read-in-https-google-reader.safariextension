document.addEventListener("beforeload", handleBeforeLoadEvent, true);

function handleBeforeLoadEvent(event)
{
    var url = window.location.href;
    
    if ( /feed:/.test(url)) {
        window.location = 'https://www.google.com/reader/view/feed/' + encodeURI(url.replace('feed://', 'http://'));
    }
}
