import {
  Button,
  Heading,
  PinInputField,
  Radio,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AppCheckboxInput } from "../inputs/AppCheckboxInput";
import { AppEditableInput } from "../inputs/AppEditableInput";
import { AppInput } from "../inputs/AppInput";
import { AppNumberInput } from "../inputs/AppNumberInput";
import { AppPinInput } from "../inputs/AppPinInput";
import { AppRadioInput } from "../inputs/AppRadioInput";
import { AppRangeSliderInput } from "../inputs/AppRangeSliderInput";
import { AppSelectInput } from "../inputs/AppSelectInput";
import { AppSliderInput } from "../inputs/AppSliderInput";
import { AppSwitchInput } from "../inputs/AppSwitchInput";
import { AppTextareaInput } from "../inputs/AppTextareInput";

type FormType = {
  text: string;
  checkbox: boolean;
  editable: string;
  number: number;
  select: string;
  switch: boolean;
  textarea: string;
  radio: string;
  pinInput: string;
  slider: string;
};

export default function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormType>();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={5}>
        <Heading>Chakra-UI + React Hook Form</Heading>
        <AppInput<FormType>
          control={control}
          name="text"
          label="Text Input Label"
          helperText="Enter your text area"
          errors={errors}
        />
        <AppNumberInput<FormType>
          control={control}
          name="number"
          label="Quantity"
          helperText="Enter your quantity"
          errors={errors}
        />

        <AppCheckboxInput<FormType>
          control={control}
          name="checkbox"
          label="Quantity"
          errors={errors}
          question="Do you like this?"
        />
        <AppSwitchInput<FormType>
          control={control}
          name="switch"
          label="Quantity"
          errors={errors}
          question="Do you like this?"
        />
        <AppTextareaInput<FormType>
          control={control}
          name="textarea"
          label="Quantity"
          errors={errors}
        />
        <AppRangeSliderInput<FormType>
          control={control}
          name="editable"
          label="Quantity"
          errors={errors}
        />
        <AppEditableInput<FormType>
          control={control}
          name="editable"
          label="Editable"
          errors={errors}
          defaultValue="This is editable text"
        />
        <AppSelectInput<FormType>
          control={control}
          name="select"
          label="select input"
          errors={errors}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </AppSelectInput>

        <AppRadioInput<FormType>
          control={control}
          name="radio"
          label="s"
          errors={errors}
        >
          <Radio value="option 1">Option 1</Radio>
          <Radio value="option 2">Option 2</Radio>
          <Radio value="option 3">Option 3</Radio>
        </AppRadioInput>

        <AppSliderInput<FormType>
          control={control}
          name="slider"
          label="my slider"
          errors={errors}
        />

        <AppPinInput<FormType>
          control={control}
          name="pinInput"
          label="my pin"
          errors={errors}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </AppPinInput>

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
}
