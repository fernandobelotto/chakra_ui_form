import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Switch,
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
  question: string;
};

export const AppSwitchInput = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  question,
}: Props<T>) => {
  return (
    <FormControl isInvalid={!!errors?.[name]}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return <Switch {...field}>{question}</Switch>;
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
