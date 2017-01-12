/**
 * Created by stevenreed on 12/21/16.
 */

export function isEmptyObject (obj) {
  let name;
  for (name in obj) {
    return false;
  }
  return true;
}