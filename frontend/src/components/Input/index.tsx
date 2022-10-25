import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';
import { FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi';
import { Container, Content, Error, Input, Label } from './styles';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  leftIcon: ReactNode;
  error?: FieldError;
  isPassword?: boolean;
  isShowingPassword?: boolean;
  showPassword?: () => void;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  CustomInputProps
> = (
  {
    label,
    leftIcon,
    error,
    isPassword = false,
    isShowingPassword = false,
    showPassword,
    ...rest
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = (event: any) => {
    setIsFocused(false);

    setIsFilled(!!event.target.value);
  };

  return (
    <Container>
      <Label>{label}</Label>

      <Content isFilled={isFilled} isFocused={isFocused} error={!!error}>
        {leftIcon}
        <Input
          {...rest}
          ref={ref}
          onFocus={handleInputFocus}
          onBlur={(event) => handleInputBlur(event)}
          placeholder={label}
        />

        {isPassword &&
          (!isShowingPassword ? (
            <FiEye onClick={showPassword} className="eye" />
          ) : (
            <FiEyeOff onClick={showPassword} className="eye" />
          ))}
      </Content>

      {error && (
        <Error>
          <FiAlertCircle />
          <p>{error.message}</p>
        </Error>
      )}
    </Container>
  );
};

export const CustomInput = forwardRef(InputBase);
