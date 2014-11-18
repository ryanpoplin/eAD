Keen.ready(function() {

    (function() {

        var text = new Keen.Query("count", {

            eventCollection: "sentence_spoken",

            targetProperty: "text",

            groupBy: "text",

            timeframe: "this_hour",

            interval: "minutely"

        });

        var chart;

        var req = client.run(text, function() {

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("text"), {

                title: "Sentences by Hour",

                chartType: "linechart"

            });

        });

    }());

    (function() {

        var averageSentenceLengthMin = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsPerSentence",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        var chart;

        var req = client.run(averageSentenceLengthMin, function() {

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("average-sentence-length-min"), {

                title: "Average Sentence Length by Minute",

                chartType: "columnchart"

            });

        });

    }());

    (function() {

        var averageSentenceLengthHour = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsPerSentence",
            timeframe: "this_10_hours",
            interval: "hourly"
        });

        var chart;

        var req = client.run(averageSentenceLengthHour, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("average-sentence-length-hour"), {

                title: "Average Sentence Length by Hour",

                chartType: "linechart"

            });

        });

    }());

    (function() {

        var averageSentenceLengthDay = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsPerSentence",
            timeframe: "this_week",
            interval: "daily"
        });

        var chart;

        var req = client.run(averageSentenceLengthDay, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("average-sentence-length-day"), {

                title: "Average Sentence Length by Day",

                chartType: "areachart"

            });

        });

    }());

    (function() {

        var sentenceCountMin = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "sentences",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        var chart;

        var req = client.run(sentenceCountMin, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("sentence-count-min"), {

                title: "Sentence Count by Minute",

                chartType: "columnchart"

            });

        });

    }());

    (function() {

        var sentenceCountHour = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "sentences",
            timeframe: "this_10_hours",
            interval: "hourly"
        });

        var chart;

        var req = client.run(sentenceCountHour, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("sentence-count-hour"), {

                title: "Sentence Count by Hour",

                chartType: "linechart"

            });

        });

    }());

    (function() {

        var sentenceCountDay = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "sentences",
            timeframe: "this_week",
            interval: "daily"
        });

        var chart;

        var req = client.run(sentenceCountDay, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("sentence-count-day"), {

                title: "Sentence Count by Day",

                chartType: "areachart"

            });

        });

    }());

    (function() {

        var averageWordLengthMin = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "averageWordLength",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        var chart;

        var req = client.run(averageWordLengthMin, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("average-word-length-min"), {

                title: "Average Word Length by Minute",

                chartType: "columnchart"

            });

        });

    }());

    (function() {

        var averageWordLengthHour = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "averageWordLength",
            timeframe: "this_10_hours",
            interval: "hourly"
        });

        var chart;

        var req = client.run(averageWordLengthHour, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("average-word-length-hour"), {

                title: "Average Word Length by Hour",

                chartType: "linechart"

            });

        });

    }());

    (function() {

        var averageWordLengthDay = new Keen.Query("average", {
            eventCollection: "sentence_spoken",
            targetProperty: "averageWordLength",
            timeframe: "this_week",
            interval: "daily"
        });

        var chart;

        var req = client.run(averageWordLengthDay, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("average-word-length-day"), {

                title: "Average Word Length by Day",

                chartType: "areachart"

            });

        });

    }());

    (function() {

        var wordCountMin = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsCount",
            timeframe: "this_30_minutes",
            interval: "minutely"
        });

        var chart;

        var req = client.run(wordCountMin, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("word-count-min"), {

                title: "Total Vocabulary my Minute",

                chartType: "columnchart"

            });

        });

    }());

    (function() {

        var wordCountHour = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsCount",
            timeframe: "this_10_hours",
            interval: "hourly"
        });

        var chart;

        var req = client.run(wordCountHour, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("word-count-hour"), {

                title: "Total Vocabulary by Hour",

                chartType: "linechart"

            });

        });

    }());

    (function() {

        var wordCountDay = new Keen.Query("sum", {
            eventCollection: "sentence_spoken",
            targetProperty: "wordsCount",
            timeframe: "this_week",
            interval: "daily"
        });

        var chart;

        var req = client.run(wordCountDay, function(){

            if (chart) chart.remove();

            chart = new Keen.Visualization(this, document.getElementById("word-count-day"), {

                title: "Total Vocabulary by Day",

                chartType: "areachart"

            });

        });

    }());

});