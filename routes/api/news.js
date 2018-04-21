const router = require("express").Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d3b4fc3b6d84481eb8d2a3085ad67e97');

router.route("/")
    .get((req, res) =>
      newsapi.v2.everything({
        q: 'agriculture',
        sources: 'the-times-of-india',
        language: 'en',
        sortBy: 'relevancy',
        page: 1,
        pageSize: 10
      }).then(response => {
        console.log("**** News fetch successful ****");
        res.json(response);
      })
      .catch(err => res.status(422).json(err))
    )

module.exports = router;