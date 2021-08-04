import styled from 'styled-components';
import { fontSize, size, color } from './styles';

export const InputWrapper = styled.div`
  display: inline-block;
  width: ${(props) => (props.double ? 'calc(50% - 3px)' : '100%')};
  text-align: start;
  margin-right: ${(props) => props.marginR && size.smaller};
  margin-bottom: ${size.medium};

  input {
    width: 100%;
    padding: ${size.medium} 0;
    padding-left: ${size.medium};
    border: ${size.micro} solid ${color.greyLighter};
    border-radius: ${size.smallest};
    font-size: ${fontSize.small};
    color: ${color.greyDarker};
    outline: none;

    &:focus {
      border-color: ${color.primary};
    }
  }

  label {
    font-size: ${fontSize.smaller};
    cursor: pointer;
    color: ${color.red};
  }
`;
