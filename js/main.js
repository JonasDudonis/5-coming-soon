import { Clock } from from './components/Clock/Clock.js'

import { progressBarData } from './data/progressBarData.js';
import { renderProgressBar } from "./data/components/progress-bar/renderProgressBar.js";

import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/socials/renderSocials.js';

import { formValidation } from './data/components/form/formValidation.js';

const clock = new Clock();
console.log(clock);

renderProgressBar('.left', progressBarData);

renderSocials('footer > .row-long', socialsData);