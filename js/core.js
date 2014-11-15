Keen.ready(function() {

        /* Sentences by the minute */

        var text = new Keen.Query("count", {
            eventCollection: "sentence_spoken",
            targetProperty: "text",
            groupBy: "text",
            timeframe: "this_day",
            interval: "hourly"
        });

        client.draw(text, document.getElementById("text"), {
            chartType: "linechart",
            title: "Sentences by Hour"
        });

        /* AVERAGE SENTENCE LENGTH */

        var averageSentenceLengthMin = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsPerSentence",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        client.draw(averageSentenceLengthMin, document.getElementById("average-sentence-length-min"), {
            chartType: "columnchart",
            title: "Average Sentence Length by Minute"
        });

        var averageSentenceLengthHour = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsPerSentence",
            timeframe: "this_10_hours",
            interval: "hourly"
        });

        client.draw(averageSentenceLengthHour, document.getElementById("average-sentence-length-hour"), {
            chartType: "linechart",
            title: "Average Sentence Length by Hour"
        });

        var averageSentenceLengthDay = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsPerSentence",
            timeframe: "this_week",
            interval: "daily"
        });

        client.draw(averageSentenceLengthDay, document.getElementById("average-sentence-length-day"), {
            chartType: "areachart",
            title: "Average Sentence Length by Day"
        });

        /* SENTENCE COUNT */

        var sentenceCountMin = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "sentences",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        client.draw(sentenceCountMin, document.getElementById("sentence-count-min"), {
            chartType: "columnchart",
            title: "Sentence Count by Minute"
        });

        var sentenceCountHour = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "sentences",
            timeframe: "this_10_hours",
            interval: "hourly"
        });

        client.draw(sentenceCountHour, document.getElementById("sentence-count-hour"), {
            chartType: "linechart",
            title: "Sentence Count by Hour"
        });

        var sentenceCountDay = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "sentences",
            timeframe: "this_week",
            interval: "daily"
        });

        client.draw(sentenceCountDay, document.getElementById("sentence-count-day"), {
            chartType: "areachart",
            title: "Sentence Count by Day"
        });

        /* AVERAGE WORD LENGTH */

        var averageWordLengthMin = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "averageWordLength",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        client.draw(averageWordLengthMin, document.getElementById("average-word-length-min"), {
            chartType: "columnchart",
            title: "Average Word Length by Minute"
        });

        var averageWordLengthHour = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "averageWordLength",
            timeframe: "this_10_hours",
            interval: "hourly"
        });

        client.draw(averageWordLengthHour, document.getElementById("average-word-length-hour"), {
            chartType: "linechart",
            title: "Average Word Length by Hour"
        });

        var averageWordLengthDay = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "averageWordLength",
            timeframe: "this_week",
            interval: "daily"
        });

        client.draw(averageWordLengthDay, document.getElementById("average-word-length-day"), {
            chartType: "areachart",
            title: "Average Word Length by Day"
        });

        /* WORD COUNT */

        var wordCountMin = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsCount",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        client.draw(wordCountMin, document.getElementById("word-count-min"), {
            chartType: "columnchart",
            title: "Total Vocabulary by Minute"
        });

        var wordCountHour = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsCount",
            timeframe: "this_10_hours",
            interval: "hourly"
        });

        client.draw(wordCountHour, document.getElementById("word-count-hour"), {
            chartType: "linechart",
            title: "Total Vocabulary by Hour"
        });

        var wordCountDay = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsCount",
            timeframe: "this_week",
            interval: "daily"
        });

        client.draw(wordCountDay, document.getElementById("word-count-day"), {
            chartType: "areachart",
            title: "Total Vocabulary by Day"
        });

});