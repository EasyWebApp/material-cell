//
//  Generated by https://www.npmjs.com/package/amd-bundle
//
(function (factory) {

    if ((typeof define === 'function')  &&  define.amd)
        define('Icon', ["web-cell"], factory);
    else if (typeof module === 'object')
        return  module.exports = factory(require('web-cell'));
    else
        return  this['Icon'] = factory(this['web-cell']);

})(function (web_cell) {

function merge(base, path) {

    return (base + '/' + path).replace(/\/\//g, '/').replace(/[^/.]+\/\.\.\//g, '').replace(/\.\//g, function (match, index, input) {

        return input[index - 1] === '.' ? match : '';
    });
}

function outPackage(name) {
    return (/^[^./]/.test(name)
    );
}

    var require = _require_.bind(null, './');

    function _require_(base, path) {

        var module = _module_[
                outPackage( path )  ?  path  :  ('./' + merge(base, path))
            ],
            exports;

        if (! module.exports) {

            module.exports = { };

            var dependency = module.dependency;

            for (var i = 0;  dependency[i];  i++)
                module.dependency[i] = require( dependency[i] );

            exports = module.factory.apply(
                null,  module.dependency.concat(
                    _require_.bind(null, module.base),  module.exports,  module
                )
            );

            if (exports != null)  module.exports = exports;

            delete module.dependency;  delete module.factory;
        }

        return module.exports;
    }

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _module_ = {
    './index.html': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = "<template>\n    <style>i {\n  font-family: 'Material Icons';font-weight: normal;font-style: normal;font-size: 24px;/* Preferred icon size */display: inline-block;line-height: 1;text-transform: none;letter-spacing: normal;word-wrap: normal;white-space: nowrap;direction: ltr;/* Support for all WebKit browsers. */-webkit-font-smoothing: antialiased;/* Support for Safari and Chrome. */text-rendering: optimizeLegibility;/* Support for Firefox. */-moz-osx-font-smoothing: grayscale;/* Support for IE. */font-feature-settings: 'liga';\n}\n:host(:focus) {\n  outline: none;\n}\n</style>\n\n    <i>${view.name}</i>\n</template>\n";
        }
    },
    './index': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _webCell = require('web-cell');

            var _index = require('./index.html');

            var _index2 = _interopRequireDefault(_index);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            var CellIcon = function (_HTMLElement) {
                _inherits(CellIcon, _HTMLElement);

                function CellIcon() {
                    var _this;

                    _classCallCheck(this, CellIcon);

                    (_this = _possibleConstructorReturn(this, (CellIcon.__proto__ || Object.getPrototypeOf(CellIcon)).call(this)), _this).buildDOM(_index2.default);
                    return _this;
                }

                _createClass(CellIcon, [{
                    key: 'connectedCallback',
                    value: function connectedCallback() {
                        this.view.name = this.name;
                    }
                }, {
                    key: 'name',
                    get: function get() {
                        return this.getAttribute('name');
                    },
                    set: function set(value) {
                        this.setAttribute('name', value);
                    }
                }]);

                return CellIcon;
            }(HTMLElement);

            exports.default = CellIcon;
            (0, _webCell.component)(CellIcon);
        }
    },
    'web-cell': { exports: web_cell }
};

    return require('./index');
});