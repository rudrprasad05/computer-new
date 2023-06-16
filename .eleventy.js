const { DateTime } = require("luxon");  

module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/app.js");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addFilter("justYear", (dateString) => {
        dateObj = new Date(dateString);
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy');
    });


    return{
        dir: {
            input: "src", 
            output: "public"
        },
        
    };

    

}

