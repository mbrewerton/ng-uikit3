/**
 * Builds a CSS class using the element's friendly name and the target css class.
 * @param friendlyName Friendly name of the element used for the class, eg. `button`.
 * @param cssClass The base css class to drive the full class, eg. `primary` or `secondary`.
 */
export function fBuildClass(friendlyName: string, cssClass: string) {
  return `uk-${friendlyName}-${cssClass}`;
}
