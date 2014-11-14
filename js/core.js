Keen.ready(function() {

        var averageSentenceLength = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsPerSentence",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        client.draw(averageSentenceLength, document.getElementById("average-sentence-length"), {
            chartType: "columnchart",
            title: "Average Sentence Length"
        });

        var sentenceCount = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "sentences",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        client.draw(sentenceCount, document.getElementById("sentence-count"), {
            chartType: "areachart",
            title: "Sentence Count"
        });

        var averageWordLength = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "averageWordLength",
            timeframe: "this_month",
            interval: "daily"
        });

        client.draw(averageWordLength, document.getElementById("average-word-length"), {
            chartType: "linechart",
            title: "Average Word Length"
        });

        var wordCount = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsCount",
            timeframe: "this_week",
            interval: "daily"
        });

        client.draw(wordCount, document.getElementById("word-count"), {
            chartType: "areachart",
            title: "Word Count"
        });

});