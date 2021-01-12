(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dantd = {}, global.React));
}(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var EmptyLine = function EmptyLine(_ref) {
    var _ref$height = _ref.height,
        height = _ref$height === void 0 ? 20 : _ref$height;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "empty-line",
      style: {
        height: height
      }
    });
  };

  exports.EmptyLine = EmptyLine;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
