import { CameraPosition, FocusRange, TorchState, VideoResolution } from 'scandit-capacitor-datacapture-core';
import { SettingsFieldName } from '../../config';
import { TypedFormGroup } from '../utils.model';

export interface CameraFormValue {
  [SettingsFieldName.CAMERA_POSITION]: CameraPosition; // CameraPosition;
  [SettingsFieldName.DESIRED_TORCH_STATE]: TorchState;
  [SettingsFieldName.PREFERRED_RESOLUTION]: VideoResolution; // VideoResolution;
  [SettingsFieldName.ZOOM_FACTOR]: number;
  [SettingsFieldName.FOCUS_RANGE]: FocusRange; // FocusRange;
}

export type CameraForm = TypedFormGroup<CameraFormValue>;
