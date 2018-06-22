function pageFunction(context) {
    // called on every page the crawler visits, use it to extract data from it
    var $ = context.jQuery;
    var result = [];
    function grabUrl(result) {
        var cleanUrl = result.match(/\bhttps?[^']+/);
        return String(cleanUrl);
    }
    $(".ds-listing").each(function() {
        bgImage = $(this).find(".ds-cover-image").attr("style");
        result.push({
            name: $(this).find(".ds-listing-event-title-text").text(),
            byline: $(this).find(".ds-byline").text(),
            date: $(this).find(".ds-event-time").text().trim(),
            venue: $(this).find(".ds-venue-name").text().trim(),
            image: grabUrl(bgImage),
            link: "http://do512.com" + $(this).find(".ds-listing-event-title").attr("href")
        });
    });
    return result;
}
