"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyObject = isEmptyObject;
/**
 * Created by stevenreed on 12/21/16.
 */

function isEmptyObject(obj) {
  var name = void 0;
  for (name in obj) {
    return false;
  }
  return true;
}