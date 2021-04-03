import { home } from './home';
import { onboardingStep } from './onboarding-step';
import { button } from '../design-system';

const buttonComponent = button();
const homeComponent = home();
const onboardingComponent = onboardingStep();

console.log(homeComponent, onboardingComponent, buttonComponent);
