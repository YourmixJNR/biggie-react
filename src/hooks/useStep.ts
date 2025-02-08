/**
 * custom hook to manage step-based navigation.
 *
 * @returns {Object} An object containing:
 *
 */

import { useState } from "react";
function useStep() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return {
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
  };
}

export default useStep;
