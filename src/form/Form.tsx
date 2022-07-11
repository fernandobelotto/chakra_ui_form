import {
  Button,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={10}>
        <Heading>Chakra Form Example</Heading>

        <FormControl
          isInvalid={!!errors.name}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel htmlFor="name">Same</FormLabel>
          <Input
            id="name"
            placeholder="name"
            {...register("name", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormHelperText>Here you write your email</FormHelperText>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!errors.checkbox}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel htmlFor="checkbox">Checkbox</FormLabel>
          <Checkbox
            id="checkbox"
            {...register("checkbox", {
              required: "This is required",
            })}
          >
            Checkbox
          </Checkbox>
          <FormHelperText>Here click on the checkbox</FormHelperText>
          <FormErrorMessage>
            {errors.checkbox && errors.checkbox.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!errors.editable}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel>Editable</FormLabel>
          <Editable defaultValue="Click here to edit this text">
            <EditablePreview fontSize="2xl" />
            <EditableInput
              fontSize="2xl"
              {...register("editable", {
                required: "This is required",
              })}
            />
          </Editable>
          <FormHelperText>Here you can edit the big text</FormHelperText>
          <FormErrorMessage>
            {errors.editable && errors.editable.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!errors.radio}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel as="legend">Radios Buttons</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <VStack spacing={5} alignItems="flex-start">
              <Radio value="option 1">Option 1</Radio>
              <Radio value="option 2">Option 2</Radio>
              <Radio value="option 3">Option 3</Radio>
            </VStack>
          </RadioGroup>
          <FormHelperText>Select one option</FormHelperText>
        </FormControl>

        <FormControl
          isInvalid={!!errors.number}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel>NumberInput</FormLabel>
          <NumberInput>
            <NumberInputField
              {...register("number", {
                required: "This is required",
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>Input some number</FormHelperText>
        </FormControl>

        <FormControl
          isInvalid={!!errors.pininput}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel>PinInput</FormLabel>
          <HStack>
            <PinInput>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <FormHelperText>
            Put the code you receive in your email
          </FormHelperText>
        </FormControl>

        <FormControl
          isInvalid={!!errors.select}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel>Select</FormLabel>
          <Select
            placeholder="Select option"
            {...register("select", {
              required: "This is required",
            })}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <FormHelperText>Select one option</FormHelperText>
        </FormControl>

        <FormControl
          isInvalid={!!errors.slider}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel>Slider</FormLabel>
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <FormHelperText>Select a value with the slider</FormHelperText>
        </FormControl>

        <FormControl
          isInvalid={!!errors.switch}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel htmlFor="switch">Switch</FormLabel>
          <Switch
            id="switch"
            {...register("switch", {
              required: "This is required",
            })}
          />
          <FormHelperText>Click on the switch</FormHelperText>
        </FormControl>

        <FormControl
          isInvalid={!!errors.textarea}
          rounded="md"
          border="1px solid"
          borderColor="gray.500"
          p={5}
        >
          <FormLabel>Text Area</FormLabel>
          <Textarea
            {...register("textarea", {
              required: "This is required",
            })}
            placeholder="Here is a sample placeholder"
          />
          <FormHelperText>Write as much you want</FormHelperText>
        </FormControl>

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
