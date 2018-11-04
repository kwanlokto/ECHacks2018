function addPageRules() {

    var rule1 = {
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostContains: 'thestar', schemes: ['https']}
            })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
    };

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([rule1]);
    });
}

chrome.runtime.onInstalled.addListener(function() {

    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    addPageRules();

});