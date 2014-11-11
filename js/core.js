        var averageSentenceLength = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsPerSentence",
            timeframe: "this_week",
            interval: "daily"
        });


        var sentenceCount = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "sentences",
            timeframe: "this_week",
            interval: "daily"
        });

        var averageWordLength = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "averageWordLength",
            timeframe: "this_week",
            interval: "daily"
        });


        var wordCount = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsCount",
            timeframe: "this_week",
            interval: "daily"
        });

        client.draw(averageSentenceLength, document.getElementById("average-sentence-length"), {
            chartType: "barchart",
            title: "Average Sentence Length"
        });

        client.draw(sentenceCount, document.getElementById("sentence-count"), {
            chartType: "areachart",
            title: "Sentence Count"
        });

        client.draw(averageWordLength, document.getElementById("average-word-length"), {
            chartType: "barchart",
            title: "Average Word Length"
        });

        client.draw(wordCount, document.getElementById("word-count"), {
            chartType: "areachart",
            title: "Word Count"
        });