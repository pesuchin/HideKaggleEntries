function hide_entries() {
    var score_elements = document.getElementsByClassName('competition-leaderboard__td-entries');
    while (score_elements.length != 0) {
        score_elements[0].parentNode.removeChild(score_elements[0]);
    }
    var column_elements = document.getElementsByClassName('competition-leaderboard__th-entries');
    column_elements[0].parentNode.removeChild(column_elements[0]);
    delete set_interval_id;
    console.log("hide");
}

var retry_counter = 0;
var observer = new MutationObserver(hide_entries);
observer.observe(document.getElementsByClassName('competition')[0], {
    childList: true,
    subtree: true
});
hide_entries();
