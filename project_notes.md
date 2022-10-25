Review: https://github.com/StuartCowley/agnes-beviz-weather-app/pull/1

Good solid start here! Obviously work to be done (thank you for leaving the note explaining so!), but you have a solid foundation here. Code is clean, formatting is great and for the point in the track you got to its exactly what I would have expected to see. When you get it more complete and with some styling and a bit of your own flair feel free to resubmit and Ill go over it again, make sure its as good as it can be

README.md lines 83 & 84
Theres a fair number of multiple blank lines being used concurrently here, can easily remove a lot of these and not have any effect on the readme itself. Also all the boilerplate stuff about eject and build could at least be put in your own words, or even deleted as its all standard stuff

in App.js - 
// import axios from "axios";
// import PropTypes from "prop-types";
These could both be deleted as they are just adding noise here

data/forecast.json
Could this be removed now that we're fetching data from an API? If its now redundant it should be deleted

src/styles/ForecastDetails.css
'.forecast-details {'
Theres a lot of elements with other classes on that do not have any rules defined in here, presume this is due to setting it aside for a later date? If so all is good. If not feel free to remove the classnames from the markup


Is there a reason why all the components are not defined using functional syntax? (IE:

const ForecastDetails = () => {})
If eslint is complaining and you want to be able to do this, you can add this rule to your eslintrc.json:


src/components/ForecastDetails.js
line 5:'function ForecastDetails({ forecast }) {'
"react/function-component-definition": [
  2,
  { "namedComponents": "arrow-function" }
]

src/requests/getForecast.js
You will need some error handling here, I see you havent gotten to this step though :)

