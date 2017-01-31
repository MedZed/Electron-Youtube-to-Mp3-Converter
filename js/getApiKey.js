function getapikey() {

    const request = require('request');
    const cheerio = require('cheerio');
    const express = require('express');
    var n, str, apikey, title, a, b,result;

    request('http://www.yt-mp3.com/watch?v=bGPfy2TFvZI', function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            $('script').each(function (i, element) {
                a = $(this);
                title = a.text();
                str = title.replace(/['"]+/g, '');
                n = str.search("apikey");
                if (n === -1 || n === 1 || n === 0 || n === false) {  }
                else {
                    b = str.substr(n + 7);
                    apikey = b.slice(0, b.indexOf("}"));
                    document.getElementById('key').value = apikey;
                    
                }
  
            });

        }



    });
    

}

