import { MeasureUnit } from "scandit-capacitor-datacapture-core";

export const DEFAULT_UNIT_NUMBER_VALUE = (): UnitNumber => ({
  value: 0,
  unit: MeasureUnit.DIP,
});

export const DEFAULT_UNIT_NUMBER_VALUE_FRACTION = (): UnitNumber => ({
  value: 0,
  unit: MeasureUnit.Fraction,
});

export const DEFAULT_UNIT_NUMBER_VALUE_FRACTION_HALF = (): UnitNumber => ({
  value: 0.5,
  unit: MeasureUnit.Fraction,
});

export interface UnitNumber {
  value: number;
  unit: MeasureUnit;
}
