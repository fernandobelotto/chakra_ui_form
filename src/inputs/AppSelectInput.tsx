import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
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
}>;

export const AppSelectInput = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  children,
}: Props<T>) => {
  return (
    <FormControl isInvalid={!!errors?.[name]}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return <Select {...field}>{children}</Select>;
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
