# news-feed
Code challenge to generate a simple SPA displaying filtered news articles using the newsapi.org public API

# The Challenge

Below was quoted from https://gist.github.com/cirpo/eea7e59400670a942c1f884364acae97

The exercise is intended to be completed at your leisure in around 1-2 hours. It is not timed, so if you finish early or late that's fine too. We aren't looking for perfection, just hoping to get an idea of the way you work.

If you haven't finished in that time, you can send us your progress - we don't want you to spend days on this. We understand that your time is valuable, and appreciate any time that you contribute towards building a strong team here.

If you cannot spare the time, you may want to take a look at Option 2.

## Option 1

Build a JavaScript application that shows the latest news from the United Kingdom, using the [newsapi.org](https://newsapi.org) service.

Running the app we should be able to see the latest **UK news** and give the ability to the user to filter them by keywords (see [everything endpoint api](https://newsapi.org/docs/endpoints/everything)). Optionally clicking on a news the user will navigate to an individual article page.

Given the fact that this is a Full Stack challenge, we are expecting a Frontend application and a Backend application that communicate with each other.

A Full Stack developer is someone with familiarity in each layer; you might be stronger on the frontend, or vice-versa. Feel free to focus more on what you know best, be creative and show us your skills!

### What we are looking for

* We anticipate that the website may have future requirements, so you should aim for maintainability with your solution
* The JavaScript ecosystem changes quickly, so we like to see knowledge of JavaScript fundamentals
* We want to discover how you write code day-to-day (from the folder structure, testing, naming point of view)
* We don't want you to spend hours tweaking every pixel. Keep it simple.
* Keep it simple (again :) )


# Planned Work

For the purposes of this exercise, I've harvested an existing project to provide a base 'seed' for the application. This seed project was stripped of all but the basic shell and converted to TypeScript. This setup was done as a precursor to the challenge task and should not be considered as part of the timed activity - this was so the focus would be on the actual completion of the task rather than setup configuration.

Original Server component was based on the [vmasto/express-babel](https://codeclimate.com/github/vmasto/express-babel) boiler-plate project.

Original client component was based on vue-cli webpack template with vuex and bootstrap-vue added.

Brief explanation for choosen tools/frameworks:

* TypeScript is easier to maintain and improves reability (IMO).
* VueJS is a data-binding framework which requires little overhead for creating projects (compared to AngularJS).
* Express is a simple server configuration which I have experience with.

## Tasks

- [X] Add NewsAPI client to server
- [X] Provide Server API to retrieve list of top headline news with text filtering, category filtering, and source filtering options
- [X] Provide Client page to show all top news headlines for UK in English
- [ ] Provide manual refresh button alongside interval poll to update current results
- [ ] Provide client filter option based on query string
- [ ] Provide client filter option based on category(s)
- [ ] Provide Server API to retrieve list of UK Sources per Category
- [ ] Provide client filter option based on source(s)
- [ ] Provide client filter option based on language(s)

## Future Improvement Suggestions

* WebSocket API interface to push updates to clients instead of polling
* Add clustering to server component to support vertical scaling
* Add user accounts to save preferences between sessions
* Add analytics to track common queries/filters and story activity/referals
* Provide date filtering
* Provide sort ordering
* Provide solution to list quantity (infinite scroll or pagination the likely options)

## Progress

After ~2.5hrs of work, the user can access the page and display the current top 20 UK news headlines provided by NewsAPI. These stories are rendered in a flex grid format with non-uniform size cards. News is updated every minute and is sorted most recent first. Unfortunately did not get to do unit tests for GUI components due to doing a spike to get the items rendered first and then running out of time. The server side is also lacking in sensible testing.

Current known issues:

* using the nodejs NewsAPI library is not properly submitting requests (ie. pageSize is currently set to 100 but only 20 returned) - would need investigating.
* stories with no image will display as columns instead of thumbnails.

## Usage

Create a new *.env* file in the root directory and add your News API key like so:

`NEWS_API_ORG_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXX`

To Install:
`npm install`

To run:
`npm start`

Site will then be available on port 8080 using default config.
