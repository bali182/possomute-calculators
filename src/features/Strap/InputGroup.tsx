import type { ChangeEvent, FC } from "react";
import { useCallback } from "react";

import * as styles from "./InputGroup.css";

export type InputGroupProps = {
  id: string;
  label: string;
  value: number;
  step: number;
  unitLabel: string;
  onChange: (value: number) => void;
};

export const InputGroup: FC<InputGroupProps> = ({
  id,
  label,
  value,
  step,
  unitLabel,
  onChange
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = Number.parseFloat(event.target.value);
      onChange(Number.isNaN(nextValue) ? 0 : nextValue);
    },
    [onChange]
  );

  return (
    <div className={styles.group}>
      <div className={styles.labelRow}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <span className={styles.unit}>({unitLabel})</span>
      </div>
      <input
        className={styles.input}
        id={id}
        type="number"
        value={value}
        onChange={handleChange}
        step={step}
      />
    </div>
  );
};
