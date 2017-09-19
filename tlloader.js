var mutobs = new MutationObserver(function(records) {
    records.forEach(record => {
        if(record.addedNodes.length > 0) {
			if(record.addedNodes.item(0) instanceof Element) {
                record.addedNodes.item(0).click();
            }
        }
    })
})

var mutobs_target = document.body.getElementsByClassName("stream-item js-new-items-bar-container").item(0)
mutobs.observe(mutobs_target, { childList: true });