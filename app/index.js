import { once } from 'lodash';
import axios from 'axios';

import { home } from './home';
import { onboardingStep } from './onboarding-step';
import { button } from '../design-system';

const homeOneTime = once(home);
const res = axios.get('https://foodish-api.herokuapp.com/api');

const buttonComponent = button();
const homeComponent = homeOneTime();
const onboardingComponent = onboardingStep();

console.log(homeComponent, onboardingComponent, buttonComponent, res);
