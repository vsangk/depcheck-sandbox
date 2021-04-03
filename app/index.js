import { once } from 'lodash';

import { home } from './home';
import { onboardingStep } from './onboarding-step';
import { button } from '../design-system';

const homeOneTime = once(home);

const buttonComponent = button();
const homeComponent = homeOneTime();
const onboardingComponent = onboardingStep();

console.log(homeComponent, onboardingComponent, buttonComponent);
