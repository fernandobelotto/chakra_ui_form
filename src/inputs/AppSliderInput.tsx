import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from "react-hook-form";

type Props<T extends Partial<FieldValues>> = {
  control: Control<T>;
  name: Path<UnPackAsyncDefaultValues<T>>;
  label?: string;
  helperText?: string;
  errors: any;
  direction?: "column" | "row";
};

export const AppSliderInput = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
}: Props<T>) => {
  return (
    <FormControl isInvalid={!!errors?.[name]}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Slider {...field}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          );
        }}
      />
      {!!errors?.[name] ? (
        <FormErrorMessage>{errors?.[name].message}</FormErrorMessage>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
