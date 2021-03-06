
export enum SettingsFieldName {

  // barcode selection

  // barcode selection - selection type
  SELECTION_TYPE = 'SELECTION_TYPE',
  FREEZE_BEHAVIOUR = 'FREEZE_BEHAVIOUR',
  TAP_BEHAVIOUR = 'TAP_BEHAVIOUR',
  SELECTION_STRATEGY = 'SELECTION_STRATEGY',

  // barcode selection - code duplicate filter
  CODE_DUPLICATE_FILTER = 'CODE_DUPLICATE_FILTER',

  // barcode selection - single barcode auto detection
  SINGLE_BARCODE_AUTO_DETECTION = 'SINGLE_BARCODE_AUTO_DETECTION',

  // barcode selection - feedback
  FEEDBACK_SOUND = 'FEEDBACK_SOUND',
  FEEDBACK_VIBRATION = 'FEEDBACK_VIBRATION',

  // barcode selection - point of interest
  BS_POINT_OF_INTEREST_ENABLED = 'BS_POINT_OF_INTEREST_ENABLED',
  BS_POINT_OF_INTEREST_X = 'BS_POINT_OF_INTEREST_X',
  BS_POINT_OF_INTEREST_Y = 'BS_POINT_OF_INTEREST_Y',

  // camera
  CAMERA_POSITION = 'CAMERA_POSITION',
  DESIRED_TORCH_STATE = 'DESIRED_TORCH_STATE',
  PREFERRED_RESOLUTION = 'PREFERRED_RESOLUTION',
  ZOOM_FACTOR = 'ZOOM_FACTOR',
  FOCUS_RANGE = 'FOCUS_RANGE',

  // view

  SCAN_AREA_MARGIN_TOP = 'SCAN_AREA_MARGIN_TOP',
  SCAN_AREA_MARGIN_RIGHT = 'SCAN_AREA_MARGIN_RIGHT',
  SCAN_AREA_MARGIN_BOTTOM = 'SCAN_AREA_MARGIN_BOTTOM',
  SCAN_AREA_MARGIN_LEFT = 'SCAN_AREA_MARGIN_LEFT',
  SCAN_AREA_GUIDES = 'SCAN_AREA_GUIDES',

  POINT_OF_INTEREST_X = 'POINT_OF_INTEREST_X',
  POINT_OF_INTEREST_Y = 'POINT_OF_INTEREST_Y',

  OVERLAY_STYLE = 'OVERLAY_STYLE',
  TRACKED_BRUSH = 'TRACKED_BRUSH',
  AIMED_BRUSH = 'AIMED_BRUSH',
  SELECTING_BRUSH = 'SELECTING_BRUSH',
  SELECTED_BRUSH = 'SELECTED_BRUSH',
  SHOULD_SHOW_HINTS = 'SHOULD_SHOW_HINTS',

  FRAME_COLOR = 'FRAME_COLOR',
  DOT_COLOR = 'DOT_COLOR',
}
