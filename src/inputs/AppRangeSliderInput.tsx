import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
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
};

export const AppRangeSliderInput = <T extends FieldValues>({
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
          const { onChange, value } = field;
          return (
            <RangeSlider
              aria-label={["min", "max"]}
              value={value}
              onChange={(val) => onChange(val)}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
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
