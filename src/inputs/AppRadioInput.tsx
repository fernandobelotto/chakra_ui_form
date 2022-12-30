import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from "react-hook-form";

type Props<T extends Partial<FieldValues>> = PropsWithChildren<{
  control: Control<T>;
  name: Path<UnPackAsyncDefaultValues<T>>;
  label?: string;
  helperText?: string;
  errors: any;
  direction?: "column" | "row";
}>;

export const AppRadioInput = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  children,
  direction = "column",
}: Props<T>) => {
  return (
    <FormControl isInvalid={!!errors?.[name]}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <RadioGroup {...field}>
              <Stack direction={direction}>{children}</Stack>
            </RadioGroup>
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
