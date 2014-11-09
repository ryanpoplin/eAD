function update_stats()
{

    var str = $("#tts").val(),
        total_chars = str.length,
        top_words = {};

    if (str.replace(/\s*/g,'').length == 0)
        return;

    $("#chars").html(total_chars);

    try
    {
        var letters_and_numbers = str.match(/[A-Za-z0-9]/g).length;
    }
    catch (er)
    {
        var letters_and_numbers = 0;
    };

    try
    {
        var spaces = str.match(/ /g).length;
    }
    catch (er)
    {
        var spaces = 0;
    };

    str = str.replace(/(\.\.\.|!|\?)/g, ".").replace(/\s*$/g, "");

    try
    {
        var sentences = str.match(/\./g).length + (str.charAt(str.length-1) === '.'?0:1);
    }
    catch (er)
    {
        var sentences = 1;
    };

    try
    {
        sentences -= str.match(/\.\w\w?\./g).length;
    }
    catch (er){};

    try
    {
        sentences -= str.match(/\s\w\w?\./g).length;
    }
    catch (er){};

    $("#spaces").html(spaces);

    try
    {
        var syllables = str.match(/[aeuoi]/g).length;
    }
    catch (er)
    {
        var syllables = 0;
    };

    $("#syllables").html(syllables);

    $("#sentences").html(sentences);

    var char_without_spaces = total_chars - spaces;
    $("#chars_wo_spaces").html(char_without_spaces);

    str = str.replace(/(\.\s*\w)/ig, function($0) { return $0.toLowerCase(); });

    try
    {
        var shorts = str.match(/(can|don|it|wouldn|aren|he|she|i|you|we|won|didn|ain|isn|doesn)['â€˜â€™](t|s|m|re|ll)/ig).length;
    }
    catch (er)
    {
        var shorts = 0;
    }

    str = str.replace(/[,\.\\\/\(\)\:\"\';\[\]â€¦â€˜â€™â€žâ€œâ€Â«Â»â€”â€“-]/g, " ");
    str = str.replace(/\s\s+/g, " ").replace(/^\s+|\s+$/g, "");
    words_array = str.split(' ');

    var words_count = words_array.length - shorts;
    $("#words").html(words_count);
    var words_per_sentence = Math.round(words_count / sentences);
    $("#words_per_sentence").html(words_per_sentence);


    var total_words_length = 0;

    for (var key in words_array)
        total_words_length += words_array[key].length;

    $("#awlength").html(Math.round(total_words_length / words_count));

    for (var key in words_array)
    {
        if (/[^\w]/g.test(words_array[key]))
            continue;

        if (words_array[key] in top_words)
            top_words[words_array[key]]++;
        else
            top_words[words_array[key]]=1;
    }


    var complex_words_count = 0;

    for (var key in words_array)
    {
        try
        {
            if (!/^[A-Z]/g.test(words_array[key]))
            {
                var word_syllables = words_array[key].match(/[aeuoi]/g).length - 1;

                if (/ing$/ig.test(words_array[key]) || /ed$/ig.test(words_array[key]) || /es$/ig.test(words_array[key]))
                    word_syllables--;

                if (word_syllables>= 3)
                    complex_words_count++;
            }
        }
        catch (er){}
    }

    console.log('Sentences: ' + sentences);
    console.log('Words: ' + words_count);
    console.log('Average Sentence Length: ' + words_per_sentence);
    console.log('Average Word Length: ' + Math.round(total_words_length / words_count));

}

$().ready(function() {
    $("#analyze").click(function(){update_stats()});
    $("#tts").focus();
});