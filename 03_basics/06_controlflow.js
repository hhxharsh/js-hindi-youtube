//accessing objectinsidearrray

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "rust",
        languageFileName: "r"
    },
    {
        languageName: "pandas",
        languageFileName: "python"
    },
]
myCoding.forEach((item) => {
    console.log(item.languageName);
   // console.log(item.languageFileName);
})