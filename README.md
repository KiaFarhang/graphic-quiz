# Express-News Graphic Quiz Generator #

This repository lets you create [guess-the-graphic quizzes for use in stories.](https://www.expressnews.com/news/local/article/Guess-the-graphic-Can-you-match-the-title-to-the-12543752.php) It's written in [TypeScript](https://www.typescriptlang.org/0) off [create-react-app](https://github.com/facebook/create-react-app).

## Getting Started ##

Clone the repository into a directory on your machine and install dependencies. I recommend [the Yarn package manager,](https://yarnpkg.com/en/) but NPM works too.

```bash
git clone https://github.com/sa-express-news/graphic-quiz.git
cd graphic-quiz
```

`yarn`

or

`npm install`

Run the project locally to make sure the quiz functionality works properly. (It'll look giant as it's built for the WCM; try using a mobile viewport to see better.)

`yarn start`

or

`npm start`

## Building a Quiz ##

If you take a look at [the example quiz](https://www.expressnews.com/news/local/article/Guess-the-graphic-Can-you-match-the-title-to-the-12543752.php), you'll see each quiz contains the following information:

- An image of a chart
- Four possible descriptions of what the chart is
- The index of the correct description (hidden from the user)
- A short sentence or two explaining the correct answer that displays when it's chosen.

That's all you need to create your own quiz, too. Start by creating the chart images (i.e. screenshotting something from DataWrapper) and writing your descriptions, both real and fake. We recommend uploading the chart images to the WCM.

Take a look at the JSON file at `src/questions.json`. It's an array of objects with properties matching what we described above:

```json
[
    {
        "img": "https://s.hdnux.com/photos/70/73/52/14924416/4/rawImage.jpg",
        "answers": [
            {
                "text": "San Antonio revenue generated from tourism, 2017"
            },
            {
                "text": "Parking tickets issued in Texas monthly, 2017"
            },
            {
                "text": "Fire reports in San Antonio by month, 2017"
            },
            {
                "text": "Border apprehensions from the Southwest Border Division monthly, 2017"
            }
        ],
        "correctAnswerIndex": 3,
        "description": "Correct! Border apprehensions increased each month between April and December last year."
    },
    // etc...
]
```

Simply replace the fields with the data you've generated. A couple things to keep in mind:

- The number of answers/possible descriptions for each graphic is hard coded at four right now. This is something we plan to update down the road - pull requests are also welcome.
- The `correctAnswerIndex` property should reflect the fact that JavaScript arrays are zero-indexed. So, in the above example, an index of 3 means the fourth choice is correct.

Re-run the project with `yarn start` or `npm start` and you should see your quiz in place of ours!

## Deploying the quiz ##

The following instructions show how to deploy your quiz inside a WCM story. Deploying elsewhere should be fairly easy to adapt; reach out to [Kia Farhang](https://github.com/KiaFarhang) at `mfarhang@express-news.net` should you have questions.

Run the repository's build command to bundle the project into a JS and CSS file.

`yarn build`

or

`npm run build`

This will generate some files and folders in the `build/` directory. You'll need to host the two files somewhere - we recommend not using WCM files as they take forever to update with changes. The EN team typically uses [Amazon S3.](https://aws.amazon.com/s3/)

We're going to create a WCM freeform with three things:

- A link to the CSS file we just generated
- A blank `<div>` tag with the ID `graphic-quiz-root`, which the JS code knows to attach the quiz to
- A link to the JS file we just generated

For simplicity's sake, you can just clone the freeform we used:

`site:premiummysa AND id:86485`

Or use this code as a template:

```html
<link rel="stylesheet" href="YOUR_CSS_FILE">

<div id="graphic-quiz-root"></div>

<script src="YOUR_JS_FILE"></script>
```

Preview the freeform and make sure it's working. If it is, congratulations - you're done! Drop this freeform into whatever story you like and you'll have a graphic quiz.

## Troubleshooting ##

Questions or concerns? Reach out to Kia at `mfarhang@express-news.net`.