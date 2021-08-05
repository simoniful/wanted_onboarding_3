import styled from 'styled-components';
import { FONT_SIZE_STYLES, SIZE_STYLES, COLOR_STYLES } from './styles';

export const InputWrapper = styled.div`
  display: inline-block;
  width: ${(props) => (props.double ? 'calc(50% - 3px)' : '100%')};
  text-align: start;
  margin-right: ${(props) => props.marginR && SIZE_STYLES.smaller};
  margin-bottom: ${SIZE_STYLES.medium};

  input {
    width: 100%;
    padding: ${SIZE_STYLES.medium} 0;
    padding-left: ${SIZE_STYLES.medium};
    border: ${SIZE_STYLES.micro} solid ${COLOR_STYLES.greyLighter};
    border-radius: ${SIZE_STYLES.smallest};
    font-size: ${FONT_SIZE_STYLES.small};
    color: ${COLOR_STYLES.greyDarker};
    outline: none;

    &:focus {
      border-color: ${COLOR_STYLES.primary};
    }
  }

  label {
    font-size: ${FONT_SIZE_STYLES.smaller};
    cursor: pointer;
    color: ${COLOR_STYLES.red};
  }
`;
