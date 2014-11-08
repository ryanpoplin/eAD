function update_stats() {
    var str = $("#tts").val();
    if (str.replace(/\s*/g,'').length === 0) {
        return;
    }
    str = str.replace(/(\.\.\.|!|\?)/g, ".").replace(/\s*$/g, "");
    var sentences;
    try {
        // how many sentences are there?
        sentences = str.match(/\./g).length + (str.charAt(str.length - 1) === '.'?0:1);
    } catch (er) {
        sentences = 1;
    };
    try {
        sentences -= str.match(/\.\w\w?\./g).length;
    } catch (er) {};
    try {
        sentences -= str.match(/\s\w\w?\./g).length;
    } catch (er){};
    str = str.replace(/(\.\s*\w)/ig, function($0) { return $0.toLowerCase(); });
    var shorts;
    try {
        shorts = str.match(/(can|don|it|wouldn|aren|he|she|i|you|we|won|didn|ain|isn|doesn)['â€˜â€™](t|s|m|re|ll)/ig).length;
    } catch (er) {
        shorts = 0;
    }
    str = str.replace(/[,\.\\\/\(\)\:\"\';\[\]â€¦â€˜â€™â€žâ€œâ€Â«Â»â€”â€“-]/g, " ");
    str = str.replace(/\s\s+/g, " ").replace(/^\s+|\s+$/g, "");
    var words_array = str.split(' ');
    var words_count = words_array.length - shorts;
    var words_per_sentence = Math.round(words_count / sentences);
    var total_words_length = 0;
    for (var key in words_array)
        total_words_length += words_array[key].length;
    console.log("Sentences: " + sentences);
    console.log("Words: " + words_count);
    console.log("Average Sentence Length: " + words_per_sentence);
    console.log("Average Word Length: " + Math.round(total_words_length / words_count));
}
$(function() {
    $("#analyze").click(function() {
        update_stats();
    });
    $("#tts").focus();
});