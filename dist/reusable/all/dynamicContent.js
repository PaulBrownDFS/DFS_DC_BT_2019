!function(n){"use strict";if("object"==typeof module&&module&&"object"==typeof module.exports)module.exports=n();else{if("undefined"==typeof window&&"undefined"==typeof self)throw new Error("Environment was not anticipated.");var t="undefined"!=typeof window?window:self,e=t.amp;t.amp=n(),t.amp.noConflict=function(){return t.amp=e,this}}}(function(){"use strict";function n(n){var e=[],o={};return n&&(r(n["@graph"],function(n){o[n["@id"]]=n}),r(n.result,function(n){if(n["@id"]){var r=t({"@id":n["@id"]},o);r&&e.push(r)}})),e}function t(n,i){return r(o(n),function(t){var e=n[t];if("@id"===t){if(!i[e])return;r(o(i[e]),function(t){n[t]=i[e][t]})}}),r(o(n),function(o){var f=n[o];null!==f&&"object"==typeof f?n[o]=t(n[o],i):e(f)&&r(f,function(e,r){n[o][r]=t(n[o][r],i)})}),n}var e=Array.isArray||function(n){return"[object Array]"===Object.prototype.toString.call(n)},o=Object.keys||function(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);return t},r=function(n,t,o){if(e(n))if(n.forEach)n.forEach(t,o);else for(var r=0,i=n.length;i>r;r++)t.call(o,n[r],r,n)};return{inlineContent:n}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy1qYXZhc2NyaXB0LXNkay5qcyJdLCJuYW1lcyI6WyJkZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyIsInNlbGYiLCJFcnJvciIsImdsb2JhbCIsInByZXZpb3VzQW1wIiwiYW1wIiwibm9Db25mbGljdCIsInRoaXMiLCJpbmxpbmVDb250ZW50IiwiZGVsaXZlcnkiLCJpbmxpbmVkQ29udGVudCIsImNvbnRlbnRLZXlNYXAiLCJfZm9yRWFjaCIsImNvbnRlbnQiLCJyZXN1bHQiLCJpbmxpbmVDaGlsZENvbnRlbnQiLCJAaWQiLCJwdXNoIiwicGFyZW50Tm9kZSIsIl9rZXlzIiwia2V5IiwidmFsdWUiLCJjaGlsZEtleSIsIl9pc0FycmF5IiwiaXRlbSIsImkiLCJBcnJheSIsImlzQXJyYXkiLCJhcmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJrZXlzIiwib2JqIiwiayIsImhhc093blByb3BlcnR5IiwiYXJyIiwiaXRlcmF0b3IiLCJjb250ZXh0IiwiZm9yRWFjaCIsImxlbiIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkNBRUEsU0FBV0EsR0FDUCxZQUVBLElBQXNCLGdCQUFYQyxTQUF1QkEsUUFBb0MsZ0JBQW5CQSxRQUFPQyxRQUN0REQsT0FBT0MsUUFBVUYsUUFDZCxDQUFBLEdBQXNCLG1CQUFYRyxTQUEwQyxtQkFBVEMsTUFVL0MsS0FBTSxJQUFJQyxPQUFNLG1DQVRoQixJQUFJQyxHQUEyQixtQkFBWEgsUUFBeUJBLE9BQVNDLEtBRWxERyxFQUFjRCxFQUFPRSxHQUN6QkYsR0FBT0UsSUFBTVIsSUFDYk0sRUFBT0UsSUFBSUMsV0FBYSxXQUVwQixNQURBSCxHQUFPRSxJQUFNRCxFQUNORyxRQU1oQixXQUNDLFlBOEJBLFNBQVNDLEdBQWNDLEdBQ25CLEdBQUlDLE1BQ0FDLElBbUJKLE9BakJJRixLQUNBRyxFQUFTSCxFQUFTLFVBQVcsU0FBVUksR0FDbkNGLEVBQWNFLEVBQVEsUUFBVUEsSUFHcENELEVBQVNILEVBQVNLLE9BQVEsU0FBVUEsR0FDaEMsR0FBS0EsRUFBTyxPQUFaLENBSUEsR0FBSUQsR0FBVUUsR0FBb0JDLE1BQU9GLEVBQU8sUUFBU0gsRUFDckRFLElBQ0FILEVBQWVPLEtBQUtKLE9BS3pCSCxFQUdYLFFBQVNLLEdBQW1CRyxFQUFZUCxHQXdCcEMsTUF2QkFDLEdBQVNPLEVBQU1ELEdBQWEsU0FBVUUsR0FDbEMsR0FBSUMsR0FBUUgsRUFBV0UsRUFDdkIsSUFBWSxRQUFSQSxFQUFlLENBQ2YsSUFBS1QsRUFBY1UsR0FDZixNQUVKVCxHQUFTTyxFQUFNUixFQUFjVSxJQUFTLFNBQVVDLEdBQzVDSixFQUFXSSxHQUFZWCxFQUFjVSxHQUFPQyxRQUt4RFYsRUFBU08sRUFBTUQsR0FBYSxTQUFVRSxHQUNsQyxHQUFJQyxHQUFRSCxFQUFXRSxFQUNULFFBQVZDLEdBQW1DLGdCQUFWQSxHQUN6QkgsRUFBV0UsR0FBT0wsRUFBbUJHLEVBQVdFLEdBQU1ULEdBQy9DWSxFQUFTRixJQUNoQlQsRUFBU1MsRUFBTyxTQUFVRyxFQUFNQyxHQUM1QlAsRUFBV0UsR0FBS0ssR0FBS1YsRUFBbUJHLEVBQVdFLEdBQUtLLEdBQUlkLE9BS2pFTyxFQTVFWCxHQUFJSyxHQUFXRyxNQUFNQyxTQUFXLFNBQVVDLEdBQ3RDLE1BQStDLG1CQUF4Q0MsT0FBT0MsVUFBVUMsU0FBU0MsS0FBS0osSUFHdENULEVBQVFVLE9BQU9JLE1BQVEsU0FBVUMsR0FDakMsR0FBSUQsS0FDSixLQUFLLEdBQUlFLEtBQUtELEdBQ05BLEVBQUlFLGVBQWVELElBQ25CRixFQUFLaEIsS0FBS2tCLEVBR2xCLE9BQU9GLElBR1ByQixFQUFXLFNBQVV5QixFQUFLQyxFQUFVQyxHQUNwQyxHQUFLaEIsRUFBU2MsR0FJZCxHQUFJQSxFQUFJRyxRQUNKSCxFQUFJRyxRQUFRRixFQUFVQyxPQUV0QixLQUFLLEdBQUluQixHQUFNLEVBQUdxQixFQUFNSixFQUFJSyxPQUFjRCxFQUFOckIsRUFBV0EsSUFDM0NrQixFQUFTTixLQUFLTyxFQUFTRixFQUFJakIsR0FBTUEsRUFBS2lCLEdBd0RsRCxRQUNJN0IsY0FBZUEiLCJmaWxlIjoiY21zLWphdmFzY3JpcHQtc2RrLm1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFsIHdpbmRvdyBzZWxmKi9cclxuXHJcbihmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB2YXIgZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBzZWxmO1xyXG5cclxuICAgICAgICB2YXIgcHJldmlvdXNBbXAgPSBnbG9iYWwuYW1wO1xyXG4gICAgICAgIGdsb2JhbC5hbXAgPSBkZWZpbml0aW9uKCk7XHJcbiAgICAgICAgZ2xvYmFsLmFtcC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBnbG9iYWwuYW1wID0gcHJldmlvdXNBbXA7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRW52aXJvbm1lbnQgd2FzIG5vdCBhbnRpY2lwYXRlZC4nKTtcclxuICAgIH1cclxuXHJcbn0pKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfa2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaChrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5cztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9mb3JFYWNoID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNvbnRleHQpIHtcclxuICAgICAgICBpZiAoIV9pc0FycmF5KGFycikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFyci5mb3JFYWNoKSB7XHJcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGl0ZXJhdG9yLCBjb250ZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBrZXkgPCBsZW47IGtleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycltrZXldLCBrZXksIGFycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlubGluZUNvbnRlbnQoZGVsaXZlcnkpIHtcclxuICAgICAgICB2YXIgaW5saW5lZENvbnRlbnQgPSBbXTtcclxuICAgICAgICB2YXIgY29udGVudEtleU1hcCA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoZGVsaXZlcnkpIHtcclxuICAgICAgICAgICAgX2ZvckVhY2goZGVsaXZlcnlbJ0BncmFwaCddLCBmdW5jdGlvbiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudEtleU1hcFtjb250ZW50WydAaWQnXV0gPSBjb250ZW50O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIF9mb3JFYWNoKGRlbGl2ZXJ5LnJlc3VsdCwgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRbJ0BpZCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gaW5saW5lQ2hpbGRDb250ZW50KHsnQGlkJzogcmVzdWx0WydAaWQnXX0sIGNvbnRlbnRLZXlNYXApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVkQ29udGVudC5wdXNoKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbmxpbmVkQ29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbmxpbmVDaGlsZENvbnRlbnQocGFyZW50Tm9kZSwgY29udGVudEtleU1hcCkge1xyXG4gICAgICAgIF9mb3JFYWNoKF9rZXlzKHBhcmVudE5vZGUpLCBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcmVudE5vZGVba2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ0BpZCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29udGVudEtleU1hcFt2YWx1ZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfZm9yRWFjaChfa2V5cyhjb250ZW50S2V5TWFwW3ZhbHVlXSksIGZ1bmN0aW9uIChjaGlsZEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGVbY2hpbGRLZXldID0gY29udGVudEtleU1hcFt2YWx1ZV1bY2hpbGRLZXldO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfZm9yRWFjaChfa2V5cyhwYXJlbnROb2RlKSwgZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJlbnROb2RlW2tleV07XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlW2tleV0gPSBpbmxpbmVDaGlsZENvbnRlbnQocGFyZW50Tm9kZVtrZXldLCBjb250ZW50S2V5TWFwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChfaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIF9mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGVba2V5XVtpXSA9IGlubGluZUNoaWxkQ29udGVudChwYXJlbnROb2RlW2tleV1baV0sIGNvbnRlbnRLZXlNYXApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbmxpbmVDb250ZW50OiBpbmxpbmVDb250ZW50XHJcbiAgICB9O1xyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

/**!

 @license
 handlebars v4.7.6

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(1)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(3),h=e(g),i=c(36),j=f(i),k=c(5),l=f(k),m=c(4),n=e(m),o=c(37),p=e(o),q=c(43),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(2)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(4),g=c(5),h=e(g),i=c(9),j=c(29),k=c(31),l=e(k),m=c(32),n="4.7.6";b.VERSION=n;var o=8;b.COMPILER_REVISION=o;var p=7;b.LAST_COMPATIBLE_COMPILER_REVISION=p;var q={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};b.REVISION_CHANGES=q;var r="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===r){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===r)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===r){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]},resetLoggedPropertyAccesses:function(){m.resetLoggedProperties()}};var s=l["default"].log;b.log=s,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0,i=void 0,j=void 0;c&&(g=c.start.line,h=c.end.line,i=c.start.column,j=c.end.column,a+=" - "+g+":"+i);for(var k=Error.prototype.constructor.call(this,a),l=0;l<f.length;l++)this[f[l]]=k[f[l]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,this.endLineNumber=h,e?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:j,enumerable:!0})):(this.column=i,this.endColumn=j))}catch(m){}}var e=c(6)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(7),__esModule:!0}},function(a,b,c){var d=c(8);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){h["default"](a),j["default"](a),l["default"](a),n["default"](a),p["default"](a),r["default"](a),t["default"](a)}function e(a,b,c){a.helpers[b]&&(a.hooks[b]=a.helpers[b],c||delete a.helpers[b])}var f=c(2)["default"];b.__esModule=!0,b.registerDefaultHelpers=d,b.moveHelperToHooks=e;var g=c(10),h=f(g),i=c(11),j=f(i),k=c(24),l=f(k),m=c(25),n=f(m),o=c(26),p=f(o),q=c(27),r=f(q),s=c(28),t=f(s)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){(function(d){"use strict";var e=c(12)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(4),h=c(5),i=f(h);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,d){l&&(l.key=b,l.index=c,l.first=0===c,l.last=!!d,m&&(l.contextPath=m+b)),k+=f(a[b],{data:l,blockParams:g.blockParams([a[b],b],[m+b,null])})}if(!b)throw new i["default"]("Must pass iterator to #each");var f=b.fn,h=b.inverse,j=0,k="",l=void 0,m=void 0;if(b.data&&b.ids&&(m=g.appendContextPath(b.data.contextPath,b.ids[0])+"."),g.isFunction(a)&&(a=a.call(this)),b.data&&(l=g.createFrame(b.data)),a&&"object"==typeof a)if(g.isArray(a))for(var n=a.length;j<n;j++)j in a&&c(j,j,j===a.length-1);else if(d.Symbol&&a[d.Symbol.iterator]){for(var o=[],p=a[d.Symbol.iterator](),q=p.next();!q.done;q=p.next())o.push(q.value);a=o;for(var n=a.length;j<n;j++)c(j,j,j===a.length-1)}else!function(){var b=void 0;e(a).forEach(function(a){void 0!==b&&c(b,j-1),b=a,j++}),void 0!==b&&c(b,j-1,!0)}();return 0===j&&(k=h(this)),k})},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b,c){a.exports={"default":c(13),__esModule:!0}},function(a,b,c){c(14),a.exports=c(20).Object.keys},function(a,b,c){var d=c(15);c(17)("keys",function(a){return function(b){return a(d(b))}})},function(a,b,c){var d=c(16);a.exports=function(a){return Object(d(a))}},function(a,b){a.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}},function(a,b,c){var d=c(18),e=c(20),f=c(23);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(19),e=c(20),f=c(21),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,a.exports=h},function(a,b){var c=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c)},function(a,b){var c=a.exports={version:"1.2.6"};"number"==typeof __e&&(__e=c)},function(a,b,c){var d=c(22);a.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(5),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("if",function(a,b){if(2!=arguments.length)throw new g["default"]("#if requires exactly one argument");return e.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||e.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){if(2!=arguments.length)throw new g["default"]("#unless requires exactly one argument");return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b,c){return a?c.lookupProperty(a,b):a})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("with",function(a,b){if(2!=arguments.length)throw new g["default"]("#with requires exactly one argument");e.isFunction(a)&&(a=a.call(this));var c=b.fn;if(e.isEmpty(a))return b.inverse(this);var d=b.data;return b.data&&b.ids&&(d=e.createFrame(b.data),d.contextPath=e.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:d,blockParams:e.blockParams([a],[d&&d.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(30),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=i(null);b.constructor=!1,b.__defineGetter__=!1,b.__defineSetter__=!1,b.__lookupGetter__=!1;var c=i(null);return c.__proto__=!1,{properties:{whitelist:l.createNewLookupObject(c,a.allowedProtoProperties),defaultValue:a.allowProtoPropertiesByDefault},methods:{whitelist:l.createNewLookupObject(b,a.allowedProtoMethods),defaultValue:a.allowProtoMethodsByDefault}}}function e(a,b,c){return"function"==typeof a?f(b.methods,c):f(b.properties,c)}function f(a,b){return void 0!==a.whitelist[b]?a.whitelist[b]===!0:void 0!==a.defaultValue?a.defaultValue:(g(b),!1)}function g(a){o[a]!==!0&&(o[a]=!0,n.log("error",'Handlebars: Access has been denied to resolve the property "'+a+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}function h(){j(o).forEach(function(a){delete o[a]})}var i=c(33)["default"],j=c(12)["default"],k=c(1)["default"];b.__esModule=!0,b.createProtoAccessControl=d,b.resultIsAllowed=e,b.resetLoggedProperties=h;var l=c(35),m=c(31),n=k(m),o=i(null)},function(a,b,c){a.exports={"default":c(34),__esModule:!0}},function(a,b,c){var d=c(8);a.exports=function(a,b){return d.create(a,b)}},function(a,b,c){"use strict";function d(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return f.extend.apply(void 0,[e(null)].concat(b))}var e=c(33)["default"];b.__esModule=!0,b.createNewLookupObject=d;var f=c(4)},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=v.COMPILER_REVISION;if(!(b>=v.LAST_COMPATIBLE_COMPILER_REVISION&&b<=v.COMPILER_REVISION)){if(b<v.LAST_COMPATIBLE_COMPILER_REVISION){var d=v.REVISION_CHANGES[c],e=v.REVISION_CHANGES[b];throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=s.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=s.extend({},e,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),g=b.VM.invokePartial.call(this,c,d,f);if(null==g&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),g=e.partials[e.name](d,f)),null!=g){if(e.indent){for(var h=g.split("\n"),i=0,j=h.length;i<j&&(h[i]||i+1!==j);i++)h[i]=e.indent+h[i];g=h.join("\n")}return g}throw new u["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(g,b,g.helpers,g.partials,f,i,h)}var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],f=e.data;d._setup(e),!e.partial&&a.useData&&(f=j(b,f));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=e.depths?b!=e.depths[0]?[b].concat(e.depths):e.depths:[b]),(c=k(a.main,c,g,e.depths||[],f,i))(b,e)}if(!b)throw new u["default"]("No environment passed to template");if(!a||!a.main)throw new u["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e=a.compiler&&7===a.compiler[0],g={strict:function(a,b,c){if(!(a&&b in a))throw new u["default"]('"'+b+'" not defined in '+a,{loc:c});return a[b]},lookupProperty:function(a,b){var c=a[b];return null==c?c:Object.prototype.hasOwnProperty.call(a,b)?c:y.resultIsAllowed(c,g.protoAccessControl,b)?c:void 0},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++){var e=a[d]&&g.lookupProperty(a[d],b);if(null!=e)return a[d][b]}},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:s.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},mergeIfNeeded:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=s.extend({},b,a)),c},nullContext:n({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){if(c.partial)g.protoAccessControl=c.protoAccessControl,g.helpers=c.helpers,g.partials=c.partials,g.decorators=c.decorators,g.hooks=c.hooks;else{var d=s.extend({},b.helpers,c.helpers);l(d,g),g.helpers=d,a.usePartial&&(g.partials=g.mergeIfNeeded(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(g.decorators=s.extend({},b.decorators,c.decorators)),g.hooks={},g.protoAccessControl=y.createProtoAccessControl(c);var f=c.allowCallsToHelperMissing||e;w.moveHelperToHooks(g,"helperMissing",f),w.moveHelperToHooks(g,"blockHelperMissing",f)}},d._child=function(b,c,d,e){if(a.useBlockParams&&!d)throw new u["default"]("must pass block params");if(a.useDepths&&!e)throw new u["default"]("must pass parent depths");return f(g,b,a[b],c,0,d,e)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==i&&!function(){c.data=v.createFrame(c.data);var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.data=v.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=s.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new u["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?v.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),s.extend(b,g)}return b}function l(a,b){o(a).forEach(function(c){var d=a[c];a[c]=m(d,b)})}function m(a,b){var c=b.lookupProperty;return x.wrapHelper(a,function(a){return s.extend({lookupProperty:c},a)})}var n=c(38)["default"],o=c(12)["default"],p=c(1)["default"],q=c(2)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var r=c(4),s=p(r),t=c(5),u=q(t),v=c(3),w=c(9),x=c(42),y=c(32)},function(a,b,c){a.exports={"default":c(39),__esModule:!0}},function(a,b,c){c(40),a.exports=c(20).Object.seal},function(a,b,c){var d=c(41);c(17)("seal",function(a){return function(b){return a&&d(b)?a(b):b}})},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b){"use strict";function c(a,b){if("function"!=typeof a)return a;var c=function(){var c=arguments[arguments.length-1];return arguments[arguments.length-1]=b(c),a.apply(this,arguments)};return c}b.__esModule=!0,b.wrapHelper=c},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())}])});
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var renderTypes = typeof root.renderTypes !== 'undefined' ? root.renderTypes : undefined;
        var Hbars = typeof root.Handlebars !== 'undefined' ? root.Handlebars : undefined;
        factory()(Hbars || null, renderTypes || null);
    }
}(this, function () {
    return function (Hbars, renderTps) {
        if (renderTps && typeof renderTypes === 'undefined') {
            var renderTypes = renderTps;
        }
        if (Hbars && typeof Handlebars === 'undefined') {
            Handlebars = Hbars;
        }

        if (typeof Handlebars !== 'undefined') {

            Handlebars.registerHelper('compare_length', function (arr, operator, val, opts) {
                var result = false;
                switch (operator) {
                    case '==':
                        result = arr.length == val;
                        break;
                    case '<':
                        result = arr.length < val;
                        break;
                    case '>':
                        result = arr.length > val;
                        break;
                    default:
                        throw "Unknown operator " + operator;
                }

                if (result) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('escapeUrl', function (url) {
                if (!url || url.length < 1) {
                    return '';
                }
                return encodeURIComponent(url);
            });


            Handlebars.registerHelper('templateChooser', function (context, addTemplateClassname) {

                var context = context instanceof Array ? context[0] : context;

                var parsedName = context['_meta']['schema'].match(/(\/\w+)/g).splice(-1)[0].replace('/', '');
                var matchedTemplate;
                    for (var x in Handlebars.partials) {
                        if (parsedName.toLowerCase() === x.toLowerCase()) {
                            matchedTemplate = Handlebars.partials[x].length
                                ? Handlebars.partials[x]
                                : Handlebars.template(Handlebars.partials[x]);
                            break;
                        }
                    }


                if (!matchedTemplate) {
                    return "Template matching id: " + matchedTemplate + ' not found';
                }

                context.addTemplateClassname = typeof addTemplateClassname !== 'undefined' ? addTemplateClassname : '';
                return new Handlebars.SafeString(matchedTemplate(context));
            });

            Handlebars.registerHelper('dynamicTemplate', function (id, renderTypes, context, addTemplateClassname) {
                if (id === false) {
                    id = context['@type'];
                }

                if (renderTypes) {
                    context.renderTypes = renderTypes;
                }

                else {
                    renderTypes = context.renderTypes;
                }

                var parsedId = id.indexOf('/') === -1 ? id : id.substring(id.lastIndexOf('/') + 1, id.length);
                var matchedTemplate;
                for (var name in renderTypes) {
                    if (parsedId === renderTypes[name]) {
                        matchedTemplate = Handlebars.partials[name].length
                            ? Handlebars.partials[name]
                            : Handlebars.template(Handlebars.partials[name]);
                        break;
                    }
                }
                if (!matchedTemplate) {
                    return "Template matching id: " + id + ' not found';
                }

                context.addTemplateClassname = typeof addTemplateClassname !== 'undefined' ? addTemplateClassname : '';
                return new Handlebars.SafeString(matchedTemplate(context));
            });

            Handlebars.registerHelper('matchType', function (id, renderName, opts) {
                if (!renderTypes) {
                    return new Handlebars.SafeString('renderTypes are undefined');
                }

                var parsedId = id.indexOf('/') === -1 ? id : id.substring(id.lastIndexOf('/') + 1, id.length);
                if (renderTypes[renderName] === parsedId) {
                    return opts.fn(this);
                }
            });

            Handlebars.registerHelper("math", function (lvalue, operator, rvalue, options) {
                lvalue = parseFloat(lvalue);
                rvalue = parseFloat(rvalue);

                return {
                    "+": lvalue + rvalue,
                    "-": lvalue - rvalue,
                    "*": lvalue * rvalue,
                    "/": lvalue / rvalue,
                    "%": lvalue % rvalue
                }[operator];
            });

            Handlebars.registerHelper('bannerConfig', function (opts) {
                var style = '';
                hex = this.bannerColor || '#fff';
                alpha = this.bannerOpacity || 1;
                hex = hex.replace('#', '');

                if (hex.length === 3) {
                    var hexArr = hex.split('');
                    hex = hexArr[0] + hexArr[0];
                    hex += (hexArr[1] + hexArr[1]);
                    hex += (hexArr[2] + hexArr[2]);
                }

                var r = parseInt(hex.slice(0, 2), 16);
                var g = parseInt(hex.slice(2, 4), 16);
                var b = parseInt(hex.slice(4, 6), 16);

                if (alpha) {
                    style += 'background-color:rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + '); ';
                }
                else {
                    style += 'background-color:rgb(' + r + ', ' + g + ', ' + b + '); ';
                }

                if (this.textColour) {
                    style += 'color: #' + this.textColour;
                }

                return style;
            });

            Handlebars.registerHelper('roundelConfig', function (roundel) {
                if (roundel && roundel[0] && roundel[0].roundel && roundel[0].roundel.name) {

                    var roundelParams = [];
                    var imageRoundelIndex;
                    for (var x = 0; x < roundel.length; x++) {
                        var roundelParam = '';
                        switch (roundel[x].roundelPosition) {
                            case 'Bottom Right':
                                roundelParam = 'p1_img=';
                                imageRoundelIndex = 1;
                                break;
                            case 'Bottom Left':
                                roundelParam = 'p2_img=';
                                imageRoundelIndex = 2;
                                break;
                            case 'Top Left':
                                roundelParam = 'p3_img=';
                                imageRoundelIndex = 3;
                                break;
                            case 'Top Right':
                                roundelParam = 'p4_img=';
                                imageRoundelIndex = 4;
                                break;

                        }

                        var roundelRatio = roundel[x].roundelRatio;
                        roundelParam += roundel[x].roundel.name + (roundelRatio ? ('&roundelRatio' + imageRoundelIndex + '=' + roundelRatio) : '');
                        roundelParams.push(roundelParam);
                    }

                    return roundelParams.join('&')

                } else {
                    return '';
                }
            });

            Handlebars.registerHelper('splitBlock', function (index, split) {
                if (typeof split === 'undefined') {
                    return ''
                }
                var id = parseInt(index, 10);
                var splitter = split.split('/');
                if (id === 0) {
                    return 'amp-dc-size-' + splitter[0];
                }

                return 'amp-dc-size-' + splitter[1];
            });

            Handlebars.registerHelper('iff', function (a, operator, b, opts) {
                var bool = false;
                switch (operator) {
                    case '==':
                        bool = a == b;
                        break;
                    case '>':
                        bool = a > b;
                        break;
                    case '<':
                        bool = a < b;
                        break;
                    default:
                        throw "Unknown operator " + operator;
                }

                if (bool) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('roundelProperties', function (opts) {
                if (this.roundel && this.roundel[0] && this.roundel[0].roundel && this.roundel[0].roundelPosition && this.roundel[0].roundelRatio) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('showdown', function (text) {
                if (typeof showdown === 'undefined') {
                    return text || '';
                }
                var converter = new showdown.Converter({
                    noHeaderId: true,
                    simpleLineBreaks: true
                });

                var text = converter.makeHtml(text);

                if (typeof text === 'undefined') {
                    text = '';
                }

                return new Handlebars.SafeString(text);
            });

            Handlebars.registerHelper('ampCaVideo', function () {
                var s = ' data-is-firefox=';
                s += +!!(window.navigator.userAgent.indexOf('Firefox') >= 0);

                var dataElement = '<script type="text/plain" class="video-settings"' + s + ' ></script>';
                return new Handlebars.SafeString(dataElement);
            });

            Handlebars.registerHelper("csv", function(str, device) {
              var colors = str.split(',');
                  if(device === 'M') {
                    if(colors[1] !== undefined && colors[1] != false) {
                      return colors[1];
                    } else {
                      if(colors[0] !== undefined && colors[0] != false) {
                        return colors[0];
                      } else {
                        return '000000';
                      }

                    }
                  }

              if(device === 'D') {
                if(colors[0] !== undefined && colors[0] != false) {
                  return colors[0];
                } else {
                  return '000000';
                }
              }
              // No Matches Return Default Black
              return '000000';
            });

            Handlebars.registerHelper("finance", function(price, local) {
              var this_price = price.match(/([1-9])+/g);
              if(local === 'UK') {
                return '&pound;' + Math.floor(parseFloat((this_price[0]) / 48) * 100) / 100 + ' a month for 4 years';
              } else {
                return '&euro;' + Math.floor(parseFloat((this_price[0]) / 36) * 100) / 100 + ' a month for 3 years';
              }

            });


            Handlebars.registerHelper('times', function(n, block) {
            var accum = '';
            for(var i = 0; i < n; ++i) {
                block.data.index = i;
                block.data.first = i === 0;
                block.data.last = i === (n - 1);
                accum += block.fn(this);
            }
                return accum;
            });

            Handlebars.registerHelper("inc", function(value, options) {
                return parseInt(value) + 1;
            });

            Handlebars.registerHelper("getWidth", function(card_type, device) {

              if(card_type === 'Type_A') {

                switch (device) {
                  case "M":
                  return '255';

                  case "D4":
                  return '213';

                  case "D6":
                  return '291';
                }
              }

              if(card_type === 'Type_B') {

                switch (device) {
                  case "M":
                  return '255';

                  case "D4":
                  return '294';

                  case "D6":
                  return '401';
                }

              }

              if(card_type === 'Type_C' || card_type === 'Type_D') {

                switch (device) {
                  case "M":
                  return '540';

                  case "D4":
                  return '456';

                  case "D6":
                  return '622';
                }

              }

              if(card_type === 'Type_E') {
                switch (device) {
                  case "M":
                  return '151';

                  case "D4":
                  return '151';

                  case "D6":
                  return '151';
                }
              }

            });
        }

        else {
            console.warn('Handlebars is not defined, please make sure you included Handlebars library');
        }
    }
}));

!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){function n(e,t){var n=z,i=n.classNameActiveSlide;e.forEach(function(e,t){e.classList.contains(i)&&e.classList.remove(i)}),e[t].classList.add(i)}function i(e){var t=z,n=t.infinite,i=e.slice(0,n),o=e.slice(e.length-n,e.length);return i.forEach(function(e){var t=e.cloneNode(!0);B.appendChild(t)}),o.reverse().forEach(function(e){var t=e.cloneNode(!0);B.insertBefore(t,B.firstChild)}),B.addEventListener(O.transitionEnd,y),f.call(B.children)}function o(t,n,i){(0,l["default"])(e,t+".lory."+n,i)}function a(e,t,n){var i=B&&B.style;i&&(i[O.transition+"TimingFunction"]=n,i[O.transition+"Duration"]=t+"ms",O.hasTranslate3d?i[O.transform]="translate3d("+e+"px, 0, 0)":i[O.transform]="translate("+e+"px, 0)")}function d(e,t){var i=z,r=i.slideSpeed,s=i.slidesToScroll,d=i.infinite,l=i.rewind,c=i.rewindSpeed,u=i.ease,v=i.classNameActiveSlide,m=r,p=t?P+1:P-1,h=Math.round(M-S);o("before","slide",{index:P,nextSlide:p}),"number"!=typeof e&&(e=t?P+s:P-s),e=Math.min(Math.max(e,0),_.length-1),d&&void 0===t&&(e+=d);var E=Math.min(Math.max(_[e].offsetLeft*-1,h*-1),0);l&&Math.abs(N.x)===h&&t&&(E=0,e=0,m=c),a(E,m,u),N.x=E,_[e].offsetLeft<=h&&(P=e),!d||e!==_.length-d&&0!==e||(t&&(P=d),t||(P=_.length-2*d),N.x=_[P].offsetLeft*-1,A=function(){a(_[P].offsetLeft*-1,0,void 0)}),v&&n(f.call(_),P),o("after","slide",{currentSlide:P})}function c(){o("before","init"),O=(0,s["default"])(),z=r({},u["default"],t);var a=z,d=a.classNameFrame,l=a.classNameSlideContainer,c=a.classNamePrevCtrl,m=a.classNameNextCtrl,p=a.enableMouseEvents,b=a.classNameActiveSlide;j=e.getElementsByClassName(d)[0],B=j.getElementsByClassName(l)[0],k=e.getElementsByClassName(c)[0],T=e.getElementsByClassName(m)[0],N={x:B.offsetLeft,y:B.offsetTop},_=z.infinite?i(f.call(B.children)):f.call(B.children),v(),b&&n(_,P),k&&T&&(k.addEventListener("click",h),T.addEventListener("click",E)),j.addEventListener("touchstart",x),p&&(j.addEventListener("mousedown",x),j.addEventListener("click",g)),z.window.addEventListener("resize",C),o("after","init")}function v(){var e=z,t=e.infinite,i=e.ease,o=e.rewindSpeed,r=e.rewindOnResize,s=e.classNameActiveSlide;M=B.getBoundingClientRect().width||B.offsetWidth,S=j.getBoundingClientRect().width||j.offsetWidth,S===M&&(M=_.reduce(function(e,t){return e+t.getBoundingClientRect().width||t.offsetWidth},0)),r?P=0:(i=null,o=0),t?(a(_[P+t].offsetLeft*-1,0,null),P+=t,N.x=_[P].offsetLeft*-1):(a(_[P].offsetLeft*-1,o,i),N.x=_[P].offsetLeft*-1),s&&n(f.call(_),P)}function m(e){d(e)}function p(){return P-z.infinite||0}function h(){d(!1,!1)}function E(){d(!1,!0)}function b(){o("before","destroy"),j.removeEventListener(O.transitionEnd,y),j.removeEventListener("touchstart",x),j.removeEventListener("touchmove",L),j.removeEventListener("touchend",w),j.removeEventListener("mousemove",L),j.removeEventListener("mousedown",x),j.removeEventListener("mouseup",w),j.removeEventListener("mouseleave",w),j.removeEventListener("click",g),z.window.removeEventListener("resize",C),k&&k.removeEventListener("click",h),T&&T.removeEventListener("click",E),z.infinite&&Array.apply(null,Array(z.infinite)).forEach(function(){B.removeChild(B.firstChild),B.removeChild(B.lastChild)}),o("after","destroy")}function y(){A&&(A(),A=void 0)}function x(e){var t=z,n=t.enableMouseEvents,i=e.touches?e.touches[0]:e;n&&(j.addEventListener("mousemove",L),j.addEventListener("mouseup",w),j.addEventListener("mouseleave",w)),j.addEventListener("touchmove",L),j.addEventListener("touchend",w);var r=i.pageX,a=i.pageY;D={x:r,y:a,time:Date.now()},F=void 0,R={},o("on","touchstart",{event:e})}function L(e){var t=e.touches?e.touches[0]:e,n=t.pageX,i=t.pageY;R={x:n-D.x,y:i-D.y},"undefined"==typeof F&&(F=!!(F||Math.abs(R.x)<Math.abs(R.y))),!F&&D&&(e.preventDefault(),a(N.x+R.x,0,null)),o("on","touchmove",{event:e})}function w(e){var t=D?Date.now()-D.time:void 0,n=Number(t)<300&&Math.abs(R.x)>25||Math.abs(R.x)>S/3,i=!P&&R.x>0||P===_.length-1&&R.x<0,r=R.x<0;F||(n&&!i?d(!1,r):a(N.x,z.snapBackSpeed)),D=void 0,j.removeEventListener("touchmove",L),j.removeEventListener("touchend",w),j.removeEventListener("mousemove",L),j.removeEventListener("mouseup",w),j.removeEventListener("mouseleave",w),o("on","touchend",{event:e})}function g(e){R.x&&e.preventDefault()}function C(e){v(),o("on","resize",{event:e})}var N=void 0,M=void 0,S=void 0,_=void 0,j=void 0,B=void 0,k=void 0,T=void 0,O=void 0,A=void 0,P=0,z={};"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e[0]);var D=void 0,R=void 0,F=void 0;return c(),{setup:c,reset:v,slideTo:m,returnIndex:p,prev:h,next:E,destroy:b}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.lory=o;var a=n(2),s=i(a),d=n(3),l=i(d),c=n(5),u=i(c),f=Array.prototype.slice},function(e,t){(function(e){"use strict";function n(){var t=void 0,n=void 0,i=void 0,o=void 0;return function(){var r=document.createElement("_"),a=r.style,s=void 0;""===a[s="webkitTransition"]&&(i="webkitTransitionEnd",n=s),""===a[s="transition"]&&(i="transitionend",n=s),""===a[s="webkitTransform"]&&(t=s),""===a[s="msTransform"]&&(t=s),""===a[s="transform"]&&(t=s),document.body.insertBefore(r,null),a[t]="translate3d(0, 0, 0)",o=!!e.getComputedStyle(r).getPropertyValue(t),document.body.removeChild(r)}(),{transform:t,transition:n,transitionEnd:i,hasTranslate3d:o}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}).call(t,function(){return this}())},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){var i=new a["default"](t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(i)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(4),a=i(r)},function(e,t){(function(t){function n(){try{var e=new i("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}var i=t.CustomEvent;e.exports=n()?i:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,function(){return this}())},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={slidesToScroll:1,slideSpeed:300,rewindSpeed:600,snapBackSpeed:200,ease:"ease",rewind:!1,infinite:!1,classNameFrame:"js_frame",classNameSlideContainer:"js_slides",classNamePrevCtrl:"js_prev",classNameNextCtrl:"js_next",classNameActiveSlide:"active",enableMouseEvents:!1,window:window,rewindOnResize:!0}}])});
//# sourceMappingURL=lory.min.js.map
(function () {
    'use strict';

    var Utils = function () {
        this.retries = 0;
        this.timeout = 100;
    };

    Utils.prototype = {
        baseAjax: function (params) {
            //url, callback, formatData, errorCallback
            var self = this;
            var xhr = new XMLHttpRequest();
            var mime = params.mime ? params.mime : "application/json"
            xhr.overrideMimeType(mime);
            xhr.open('GET', params.url, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    var data = params.formatData ? params.formatData(xhr.responseText) : xhr.responseText;
                    if (data.length > 0) {
                        return params.callback(data);
                    } else {
                        console.error('Error retrieving data', xhr.responseText);
                        return params.callback(false);
                    }
                }

                else {
                    if (self.retries < 9) {
                        setTimeout(function () {
                            params.errorCallback(xhr.status);
                            self.timeout *= 2;
                            self.retries += 1;
                        }, self.timeout);
                    }
                    else {
                        console.error('Error retrieving data', xhr.responseText);
                    }
                }
            };
            xhr.onerror = function () {
                console.error('Error xhr request');
            };
            xhr.send(null);
        },
        getCaData: function (params) {
            var self = this;

            var url = params.url ? params.url
                : encodeURI(params.auth.baseUrl + '/cms/content/query?fullBodyObject=true&scope=tree&store=' +
                    params.auth.store + '&query={"sys.iri":"http://content.cms.amplience.com/' +
                    params.auth.id + '"}&v=' + Date.now());

            return this.baseAjax({
                url: url,

                callback: function (data) {
                    params.callback(data);
                },
                errorCallback: function () {
                    self.getCaData(params);
                },
                formatData: function (data) {
                    return (params.formatData ? params.formatData(data) : data);
                }
            });
        },
        getHtmlServiceData: function (params) {
            var self = this;

            var url = encodeURI(params.auth.baseUrl + '/v1/content/' +
                params.auth.store + '/content-item/' +
                params.auth.id + '?template=' +
                params.auth.templateName +
                '&v=' + Date.now());

            return this.baseAjax({
                url: url,
                callback: function (data) {
                    params.callback(data);
                },
                errorCallback: function () {
                    self.getHtmlServiceData(params);
                }
            });
        },
        postProcessing: {
            exec: function(renderName, params) {
                var self = this;
                self.dependencies[renderName].forEach(function (fixName) {
                    self.handlers[fixName](params);
                });
            },
            execHtmlService: function(renderName, params) {
                var self = this;
                self.htmlServiceDependencies[renderName].forEach(function (fixName) {
                    self.handlers[fixName](params);
                });
            },
            dependencies: {
                slider: ['fixVideoButton', 'fixAndroidSwipeOverTheVideo'],
                video: ['fixVideoButton'],
                splitBlock: ['fixVideoButton'],
                blog: ['fixVideoButton'],
                homepage: ['fixVideoButton','fixAndroidSwipeOverTheVideo', 'promoBanner'],
                promoBanner: ['promoBanner']
            },
            htmlServiceDependencies: {
                slider: ['fixVideoButton', 'fixAndroidSwipeOverTheVideo', 'bannerStyle'],
                video: ['fixVideoButton'],
                splitBlock: ['fixVideoButton', 'showdown', 'bannerStyle', 'split'],
                blog: ['fixVideoButton', 'bannerStyle', 'split', 'showdown'],
                homepage: ['fixVideoButton', 'fixAndroidSwipeOverTheVideo', 'promoBanner', 'bannerStyle', 'split', 'showdown'],
                promoBanner: ['promoBanner'],
                text: ['showdown'],
                banner: ['bannerStyle']
            },
            handlers: {
                split: function () {
                    var splitClass = function (index, split) {
                        if (typeof split === 'undefined') {
                            return ''
                        }
                        var id = parseInt(index, 10);
                        var splitter = split.split('/');
                        if (id === 0) {
                            return 'amp-dc-size-' + splitter[0];
                        }
                        return 'amp-dc-size-' + splitter[1];
                    }

                    var splitBlock = [].slice.call(document.querySelectorAll('.amp-dc-splitBlock'));
                    if (splitBlock.length < 1) {
                        return;
                    }

                    splitBlock.forEach(function (split) {
                        var needle = 'js_dc_split-';
                        var className = split.className;
                        var splitPosition = className.indexOf(needle);

                        if (splitPosition == -1) {
                            return;
                        }

                        var splitPercentage = className.substring(splitPosition + needle.length, className.length)

                        var splitParts = [].slice.call(split.querySelectorAll('.amp-dc-split-part'));

                        if (splitParts.length > 1) {
                            splitParts.forEach(function (splitPart, ind) {
                                var addClass = splitClass(ind, splitPercentage).trim();
                                splitPart.classList.add(addClass);
                            });
                        }
                    });
                },
                bannerStyle: function (opts) {
                    var bannerSections = [].slice.call(document.querySelectorAll('.amp-dc-banner-info'));

                    if (bannerSections.length < 1) {
                        return;
                    }

                    var setStyle = function (opts) {
                        var style = '';
                        var hex = opts.bannerColor || '#fff';
                        var alpha = opts.bannerOpacity || 1;
                        var hex = hex.replace('#', '');

                        if (hex.length === 3) {
                            var hexArr = hex.split('');
                            hex = hexArr[0] + hexArr[0];
                            hex += (hexArr[1] + hexArr[1]);
                            hex += (hexArr[2] + hexArr[2]);
                        }

                        var r = parseInt(hex.slice(0, 2), 16);
                        var g = parseInt(hex.slice(2, 4), 16);
                        var b = parseInt(hex.slice(4, 6), 16);

                        if (alpha) {
                            style += 'background-color:rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + '); ';
                        }
                        else {
                            style += 'background-color:rgb(' + r + ', ' + g + ', ' + b + '); ';
                        }

                        if (opts.textColour) {
                            style += 'color: #' + opts.textColour;
                        }

                        return style;
                    }

                    bannerSections.forEach(function (bannerSection) {
                        bannerSection.setAttribute('style', setStyle({
                                bannerColor: bannerSection.getAttribute('data-color'),
                                bannerOpacity: bannerSection.getAttribute('data-opacity'),
                                textColour: bannerSection.getAttribute('data-txtcolor')
                            })
                        );
                    });
                },
                showdown: function(){
                    var textNodes =  [].slice.call(document.querySelectorAll('.amp-dc-text'));

                    if(textNodes.length < 1) {
                        return;
                    }

                    if (typeof showdown === 'undefined') {
                        return html || '';
                    }

                    var converter = new showdown.Converter({
                        noHeaderId: true,
                        simpleLineBreaks: true
                    });

                    textNodes.forEach(function(textNode){
                        textNode.innerHTML = converter.makeHtml(textNode.innerHTML.trim());
                    });
                },
                promoBanner: function () {
                    var promoBanner = function ($node) {
                        var $children = [].slice.call($node.querySelectorAll('.amp-dc-promo-block'));
                        var currentItemNum = 2;
                        var winWidth = window.innerWidth;

                        if ($children.length < 2) {
                            $children[0].classList.add('dc-fade-in');
                            return;
                        }

                        $children.forEach(function ($child) {
                            $children[currentItemNum - 1].classList.remove('dc-fade-in');
                        });

                        $children[currentItemNum - 1].classList.add('dc-fade-in');

                        var getNextItem = function () {
                            if (currentItemNum === $children.length) {
                                currentItemNum = 1;

                            }
                            else {
                                currentItemNum += 1;
                            }

                            return currentItemNum - 1;
                        }

                        var interval = setInterval(function () {
                            winWidth = window.innerWidth;
                            var $fadedElems = [].slice.call($node.querySelectorAll('.dc-fade-in'));
                            if (winWidth > 768) {
                                return;
                            }

                            var itemToShow = getNextItem();
                            if ($fadedElems.length > 0) {
                                $fadedElems.forEach(function ($fadeElem) {
                                    $fadeElem.classList.remove('dc-fade-in');
                                });
                            }
                            $children[itemToShow].classList.add('dc-fade-in');
                        }, 5000);
                    }
                    var arr = [].slice.call(document.querySelectorAll('.amp-dc-promo-banner-wrap'));
                    arr.forEach(function ($node) {
                        promoBanner($node);
                    });
                },
                fixAndroidSwipeOverTheVideo: function () {
                    if (navigator.userAgent.match(/Android/i)) {
                        var videos = document.querySelectorAll('.amp-dc-slider .amp-dc-video');
                        videos = Array.prototype.slice.call(videos, 0);
                        videos.forEach(function (video, ix) {
                            var overlay = document.createElement('div');
                            overlay.style.width = video.clientWidth + 'px';
                            overlay.style.height = video.clientHeight - 30 + 'px';
                            overlay.style.marginBottom = -video.clientHeight + 30 + 'px';
                            overlay.className = 'inactive-video';
                            video.parentNode.parentNode.insertBefore(overlay, video.parentNode);
                            overlay.addEventListener('click', function () {
                                overlay.classList.add('no-overlay');
                                video.play();
                            });
                            video.addEventListener('pause', function(){
                                overlay.classList.remove('no-overlay');
                            });
                            window.addEventListener('resize', function () {
                                overlay.style.width = video.clientWidth + 'px';
                                overlay.style.height = video.clientHeight - 30 + 'px';
                                overlay.style.marginBottom = -video.clientHeight + 30 + 'px';
                            });
                        });

                    }
                },
                fixVideoButton: function(){
                    var videos = document.querySelectorAll('.amp-dc-video');
                    videos = Array.prototype.slice.call(videos,0);
                    var pauseButtons = document.querySelectorAll('.pause-button');
                    pauseButtons = Array.prototype.slice.call(pauseButtons,0);
                    var ev = 'click';
                    if(navigator.userAgent.match(/(iPad)|(iPhone)|(Android)/i)) {
                        ev = 'touchstart';
                    } else {
                        pauseButtons.forEach(function (item) {
                            item.classList.remove('inactive');
                        });
                    }
                    if (navigator.userAgent.match(/Android/i)) {
                        videos.forEach(function (video) {
                            video.addEventListener(ev, function(){
                                var self = this; self.paused ? setTimeout(function(){self.play();},1) : setTimeout(function(){self.pause();},1);
                            });
                        });
                    } else {
                        var lock = [];
                        var lockInit = function(ix){
                            lock[ix] = true;
                            setTimeout(function(){
                                lock[ix] = false;
                            },200);
                        };
                        videos.forEach(function (video, ix) {
                            lock[ix] = false;
                            video.addEventListener(ev, (function(){
                                return function () {
                                    if (!lock[ix]) {
                                        if (videos[ix].paused) {
                                            lockInit(ix);
                                            setTimeout(function(){
                                                videos[ix].paused ? videos[ix].play() : '';
                                            },200);
                                        } else {
                                            lockInit(ix);
                                            setTimeout(function(){
                                                videos[ix].pause();
                                            },200);
                                        }
                                    }
                                };
                            })(ix));
                            video.addEventListener('pause', function () {
                                pauseButtons[ix].classList.remove('inactive');
                            });
                            video.addEventListener('play', function () {
                                pauseButtons[ix].classList.add('inactive');

                            });
                            pauseButtons[ix].addEventListener(ev, function () {
                                if (!lock[ix]) {
                                    videos[ix].paused ? setTimeout(function(){videos[ix].play();},1) : setTimeout(function(){videos[ix].pause();},1);
                                    lockInit(ix);
                                }

                            });
                        });
                    }
                },
            }
        },
        constructor: Utils
    };

    window.AmpCa = window.AmpCa || {};
    window.AmpCa.Utils = Utils;
})();

/*===========================
 Utils AMD Export
 ===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.AmpCa.Utils;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.AmpCa.Utils;
    });
}
