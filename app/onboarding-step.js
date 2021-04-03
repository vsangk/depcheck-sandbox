import createNavigator from '../onboarding/createNavigator';

export const onboardingStep = () => {
  const navigator = createNavigator();
  return {
    name: 'onboarding-step',
    navigator,
  };
};
