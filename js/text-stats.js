function analyzeText(text) {
    var textString = text;
    if (textString.replace(/\s*/g,'').length == 0) {
        return;
    }
    textString = textString.replace(/(\.\.\.|!|\?)/g, ".").replace(/\s*$/g, 0);
    var sentences;
    try {
        sentences = textString.match(/\./g).length + (str.charAt(str.length - 1) === '.'?0:1);
    } catch (er) {
        sentences = 1;
    };
    try {
        sentences -= textString.match(/\.\w\w?\./g).length;
    } catch (er) {};
    try {
        sentences -= textString.match(/\s\w\w?\./g).length;
    } catch (er) {};
    textString = textString.replace(/(\.\s*\w)/ig, function($0) { return $0.toLowerCase(); });
    var shorts;
    try {
        shorts = textString.match(/(can|don|it|wouldn|aren|he|she|i|you|we|won|didn|ain|isn|doesn)['â€˜â€™](t|s|m|re|ll)/ig).length;
    } catch (er) {
        shorts = 0;
    }
    textString = textString.replace(/[,\.\\\/\(\)\:\"\';\[\]â€¦â€˜â€™â€žâ€œâ€Â«Â»â€”â€“-]/g, " ");
    textString = textString.replace(/\s\s+/g, " ").replace(/^\s+|\s+$/g, "");
    var wordsArray = textString.split(' ');
    var wordsCount = wordsArray.length - shorts;
    var wordsPerSentence = Math.round(wordsCount / sentences);
    var totalWordsLength = 0;
    for (var key in wordsArray)
        totalWordsLength += wordsArray[key].length;
    var avgWordLength = Math.round(totalWordsLength / wordsCount);
    var valArr = [sentences, wordsCount, wordsPerSentence, ];
    console.log("Sentences: " + sentences);
    console.log("Words: " + wordsCount);
    console.log("Average Sentence Length: " + wordsPerSentence);
    console.log("Average Word Length: " + avgWordLength);
    return valArr;
}
$(function() {
    $("#analyze").click(function() {
        analyzeText($("#tts").val());
    });
});