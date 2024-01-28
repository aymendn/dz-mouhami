import { useTranslation } from "react-i18next";

const CustomStepper = ({
  // this should be a list of objects with a label and description property
  steps,
  activeStep,
}) => {
  return (
    <ul className="relative flex flex-col md:flex-row gap-2">
      {steps.map((step, index) => (
        <li className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
          <div className="min-w-[28px] min-h-[28px] flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
            <span
              className={`w-7 h-7 flex justify-center items-center flex-shrink-0 ${stepBackgroundColor(
                activeStep,
                index
              )} ${textColor(activeStep, index)} font-medium  rounded-full`}
            >
              {index + 1}
            </span>
            <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden "></div>
          </div>
          <div className="grow md:grow-0 md:mt-3 pb-5">
            <span className="block text-sm font-medium text-gray-800">
              {step.label}
            </span>
            <p className="text-sm text-gray-500">{step.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const RegistrationFormStepper = ({ activeStep }) => {
  const { t } = useTranslation();
  return (
    <CustomStepper
      steps={[
        {
          label: "Step 1",
          description: "Personal Information",
        },
        {
          label: "Step 2",
          description: "Submit Essentials Documents",
        },
      ]}
      activeStep={activeStep}
    />
  );
};

export { RegistrationFormStepper , CustomStepper};

const textColor = (currentStep, stepNumber) => {
  if (currentStep > stepNumber) {
    return "text-white";
  } else if (currentStep === stepNumber) {
    return "text-white";
  }
};

const stepBackgroundColor = (currentStep, stepIndex) => {
  const activeIndex = currentStep - 1;
  if (activeIndex > stepIndex) {
    return "bg-green-500";
  } else if (activeIndex === stepIndex) {
    return "bg-blue-500";
  } else {
    return "bg-gray-500";
  }
};
