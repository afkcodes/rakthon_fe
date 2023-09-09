/* eslint-disable @typescript-eslint/no-explicit-any */
import { Radio, RadioGroup } from '@nextui-org/react';

const RadioSelect = ({ onSelect, disabled }: any) => {
  return (
    <RadioGroup
      label='Select Podcast Language'
      orientation='horizontal'
      isDisabled={disabled}
      onChange={(e) => {
        onSelect(e.target.value);
      }}>
      <Radio value='en'>English</Radio>
      <Radio value='jp'>Japanese</Radio>
    </RadioGroup>
  );
};
export default RadioSelect;
