(()=>{"use strict";var t={244:(t,e,n)=>{t.exports=n.p+"./favicon.ico"}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){return t(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function a(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(n){if(t(1,arguments),!e(n)&&"number"!=typeof n)return!1;var r=a(n);return!isNaN(Number(r))}n(244);var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var s,u={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;a=t.values[u]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function l(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,s=i[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?h(u,(function(t){return t.test(s)})):m(u,(function(t){return t.test(s)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var c=e.slice(s.length);return{value:o,rest:c}}}function m(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function h(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const f={code:"en-US",formatDistance:function(t,e,n){var a,r=i[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:u,formatRelative:function(t,e,n,a){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(s={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(s.matchPattern);if(!n)return null;var a=n[0],r=t.match(s.parsePattern);if(!r)return null;var i=s.valueCallback?s.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(a.length);return{value:i,rest:o}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function w(e,n){t(2,arguments);var r=a(e).getTime(),i=g(n);return new Date(r+i)}function v(e,n){t(2,arguments);var a=g(n);return w(e,-a)}var y=864e5;function b(e){t(1,arguments);var n=1,r=a(e),i=r.getUTCDay(),o=(i<n?7:0)+i-n;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function p(e){t(1,arguments);var n=a(e),r=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=b(i),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var u=b(s);return n.getTime()>=o.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function k(e){t(1,arguments);var n=p(e),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=b(a);return r}var T=6048e5;function D(e,n){t(1,arguments);var r=n||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:g(o),u=null==r.weekStartsOn?s:g(r.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=a(e),c=d.getUTCDay(),l=(c<u?7:0)+c-u;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function C(e,n){t(1,arguments);var r=a(e),i=r.getUTCFullYear(),o=n||{},s=o.locale,u=s&&s.options&&s.options.firstWeekContainsDate,d=null==u?1:g(u),c=null==o.firstWeekContainsDate?d:g(o.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,c),l.setUTCHours(0,0,0,0);var m=D(l,n),h=new Date(0);h.setUTCFullYear(i,0,c),h.setUTCHours(0,0,0,0);var f=D(h,n);return r.getTime()>=m.getTime()?i+1:r.getTime()>=f.getTime()?i:i-1}function M(e,n){t(1,arguments);var a=n||{},r=a.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:g(i),s=null==a.firstWeekContainsDate?o:g(a.firstWeekContainsDate),u=C(e,n),d=new Date(0);d.setUTCFullYear(u,0,s),d.setUTCHours(0,0,0,0);var c=D(d,n);return c}var x=6048e5;function E(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const S=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return E("yy"===e?a%100:a,e.length)},P=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):E(n+1,2)},L=function(t,e){return E(t.getUTCDate(),e.length)},U=function(t,e){return E(t.getUTCHours()%12||12,e.length)},N=function(t,e){return E(t.getUTCHours(),e.length)},Y=function(t,e){return E(t.getUTCMinutes(),e.length)},W=function(t,e){return E(t.getUTCSeconds(),e.length)},B=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return E(Math.floor(a*Math.pow(10,n-3)),e.length)};function O(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+E(i,2)}function q(t,e){return t%60==0?(t>0?"-":"+")+E(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+E(Math.floor(r/60),2)+n+E(r%60,2)}const j={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return S(t,e)},Y:function(t,e,n,a){var r=C(t,a),i=r>0?r:1-r;return"YY"===e?E(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):E(i,e.length)},R:function(t,e){return E(p(t),e.length)},u:function(t,e){return E(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return E(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return E(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return P(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return E(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=function(e,n){t(1,arguments);var r=a(e),i=D(r,n).getTime()-M(r,n).getTime();return Math.round(i/x)+1}(e,i);return"wo"===n?r.ordinalNumber(o,{unit:"week"}):E(o,n.length)},I:function(e,n,r){var i=function(e){t(1,arguments);var n=a(e),r=b(n).getTime()-k(n).getTime();return Math.round(r/T)+1}(e);return"Io"===n?r.ordinalNumber(i,{unit:"week"}):E(i,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):L(t,e)},D:function(e,n,r){var i=function(e){t(1,arguments);var n=a(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=n.getTime(),o=r-i;return Math.floor(o/y)+1}(e);return"Do"===n?r.ordinalNumber(i,{unit:"dayOfYear"}):E(i,n.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return E(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return E(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return E(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return U(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):N(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):E(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):E(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Y(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):W(t,e)},S:function(t,e){return B(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return q(r);case"XXXX":case"XX":return I(r);default:return I(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return q(r);case"xxxx":case"xx":return I(r);default:return I(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+O(r,":");default:return"GMT"+I(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+O(r,":");default:return"GMT"+I(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return E(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return E((a._originalDate||t).getTime(),e.length)}};function H(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function z(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var F={p:z,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return H(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",H(r,e)).replace("{{time}}",z(i,e))}};const $=F;function A(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var Q=["D","DD"],G=["YY","YYYY"];function X(t){return-1!==Q.indexOf(t)}function R(t){return-1!==G.indexOf(t)}function J(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,Z=/''/g,tt=/[a-zA-Z]/;function et(e,n,i){t(2,arguments);var o=String(n),s=i||{},u=s.locale||f,d=u.options&&u.options.firstWeekContainsDate,c=null==d?1:g(d),l=null==s.firstWeekContainsDate?c:g(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=u.options&&u.options.weekStartsOn,h=null==m?0:g(m),w=null==s.weekStartsOn?h:g(s.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var y=a(e);if(!r(y))throw new RangeError("Invalid time value");var b=A(y),p=v(y,b),k={firstWeekContainsDate:l,weekStartsOn:w,locale:u,_originalDate:y},T=o.match(V).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,$[e])(t,u.formatLong,k):t})).join("").match(_).map((function(t){if("''"===t)return"'";var a=t[0];if("'"===a)return nt(t);var r=j[a];if(r)return!s.useAdditionalWeekYearTokens&&R(t)&&J(t,n,e),!s.useAdditionalDayOfYearTokens&&X(t)&&J(t,n,e),r(p,t,u.localize,k);if(a.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("");return T}function nt(t){return t.match(K)[1].replace(Z,"'")}const at=(()=>{const t=[];return{taskList:t,addNewTask:function(e,n,a,r,i){t.unshift(function(t,e,n,a,r){let i=t,o=e,s=n,u=a,d=new Date;return{get title(){return i},get details(){return o},get dueDate(){return s},get dueDateString(){if(""===s)return"None";let t=new Date(s),e=60*t.getTimezoneOffset()*1e3;return et(t.valueOf()+e,"P")},get dueDateYYYYMMDD(){if(""===s)return"";let t=new Date(s),e=60*t.getTimezoneOffset()*1e3;return et(t.valueOf()+e,"yyyy-MM-dd")},get modifiedDateString(){return et(d,"Pp")},get isStarred(){return u},set title(t){i=t},set details(t){o=t},set dueDate(t){s=t},set modifiedDate(t){d=t},set isStarred(t){u=t},toggleStarred(){u=!u}}}(e,n,a,r))},deleteTask:function(e){t.splice(e,1)}}})(),rt=(()=>{const t=document.getElementById("menu-btn"),e=document.getElementById("sidebar"),n=document.getElementById("close-menu-btn"),a=document.getElementById("shade");function r(){e.classList.toggle("-translate-x-full"),a.classList.toggle("hidden")}t.addEventListener("click",r),n.addEventListener("click",r),a.addEventListener("click",r),window.addEventListener("resize",(()=>{window.innerWidth>=768&&!a.classList.contains("hidden")&&r()}));let i=at.taskList;const o=document.getElementById("page-header"),s=document.getElementById("page-subheader");function u(t){return"nav-all"===t.id?(o.textContent="All Items",s.textContent="Nothing is impossible.",at.taskList):"nav-starred"===t.id?(o.textContent="Starred",s.textContent="Don't let your dreams be dreams.",at.taskList.filter((t=>t.isStarred))):"nav-today"===t.id?(o.textContent="Due Today",s.textContent='Yesterday, you said "tomorrow."',at.taskList.filter((t=>Date.parse(t.dueDateString)===Date.parse(format(new Date,"P"))))):"nav-upcoming"===t.id?(o.textContent="Next 7 Days",s.textContent="What are you waiting for?",at.taskList.filter((t=>{let e=Date.parse(t.dueDateString),n=Date.parse(format(new Date,"P"));return e>=n&&e<=n+5184e5}))):"nav-overdue"===t.id?(o.textContent="Overdue",s.textContent="JUST DO IT.",at.taskList.filter((t=>Date.parse(t.dueDateString)<Date.parse(format(new Date,"P"))))):void 0}return(()=>{let t=document.querySelectorAll(".nav-item");t.forEach((e=>{e.addEventListener("click",(()=>{t.forEach((t=>{t.classList.remove("bg-emerald-400","text-white"),t.dataset.state="inactive"})),e.classList.add("bg-emerald-400","text-white"),e.dataset.state="active",i=u(e),window.innerWidth<768&&r(),it.redrawTasks(i)}))}))})(),{tasksToDisplay:i,determineTasksToDisplay:u}})(),it=(()=>{const t=document.getElementById("task-window");function e(e){t.querySelectorAll(".task-item").forEach((t=>{t.remove()})),e.forEach(n)}function n(n,r){let i=`\n      <div id="task-item-${r}" class="task-item">\n        <div class="task-main">\n          <div class="flex-1">\n            <div id="task-title-${r}" class="task-title"></div>\n            <p id="task-details-${r}"></p>\n          </div>\n          <div class="task-btns">\n            <button id="star-task-btn-${r}">\n              <svg id="star-icon-${r}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="fill: none; stroke: currentColor;">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />\n              </svg>\n            </button>\n            <button id="edit-task-btn-${r}">\n              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />\n              </svg>\n            </button>\n            <button id="delete-task-btn-${r}">\n              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />\n              </svg>\n            </button>\n          </div>\n        </div>\n        <div id="task-sub" class="task-sub">\n          <p id="task-due-date-${r}" class="task-due-date"></p>\n          <p id="task-mod-date-${r}"></p>\n        </div>\n      </div>`;t.insertAdjacentHTML("beforeend",i);let o=document.createTextNode(n.details),s=document.createTextNode(n.title),u=document.createTextNode("Due Date: "+n.dueDateString),d=document.createTextNode("Last Modified: "+n.modifiedDateString);document.getElementById(`task-details-${r}`).appendChild(o),document.getElementById(`task-title-${r}`).appendChild(s),document.getElementById(`task-due-date-${r}`).appendChild(u),document.getElementById(`task-mod-date-${r}`).appendChild(d),n.isStarred&&a(document.getElementById(`star-icon-${r}`)),document.getElementById(`delete-task-btn-${r}`).addEventListener("click",(()=>{at.deleteTask(r),e(rt.tasksToDisplay)})),document.getElementById(`edit-task-btn-${r}`).addEventListener("click",(()=>{ot.activateEditMode(n)})),document.getElementById(`star-task-btn-${r}`).addEventListener("click",(()=>{n.toggleStarred(),a(document.getElementById(`star-icon-${r}`))}))}function a(t){"none"===t.style.fill?(t.style.fill="#34d399",t.style.stroke="#34d399"):(t.style.fill="none",t.style.stroke="currentColor")}return{redrawTasks:e}})(),ot=(()=>{const t=document.getElementById("new-task-btn"),e=document.getElementById("modal"),n=document.getElementById("close-modal-btn"),a=document.getElementById("submit-btn"),r=document.getElementById("modal-header");function i(){o.reset(),r.textContent="New Task",a.textContent="Submit",o.removeEventListener("submit",m.submitEdits),o.addEventListener("submit",l),e.classList.toggle("hidden")}t.addEventListener("click",i),e.addEventListener("click",(t=>{"modal"===t.target.id&&i()})),n.addEventListener("click",(()=>{i()})),window.addEventListener("keydown",(t=>{e.classList.contains("hidden")||"Escape"===t.key&&i()}));const o=document.getElementById("form"),s=document.getElementById("title"),u=document.getElementById("details"),d=document.getElementById("due-date"),c=document.getElementById("starred");function l(t){t.preventDefault();let e=s.value,n=u.value,a=""===d.value?d.value:new Date(d.value),r=c.checked;at.addNewTask(e,n,a,r),i(),rt.tasksToDisplay=rt.determineTasksToDisplay(document.querySelector('[data-state="active"]')),it.redrawTasks(rt.tasksToDisplay)}function m(t){function m(e){e.preventDefault(),t.title=s.value,t.details=u.value,t.dueDate=d.value,t.isStarred=c.checked,t.modifiedDate=new Date,i(),rt.tasksToDisplay=rt.determineTasksToDisplay(document.querySelector('[data-state="active"]')),it.redrawTasks(rt.tasksToDisplay)}i(),o.removeEventListener("submit",l),r.textContent="Edit Task",a.textContent="Save",s.value=t.title,u.value=t.details,d.value=t.dueDateYYYYMMDD,c.checked=t.isStarred,o.addEventListener("submit",m,{once:!0}),e.addEventListener("click",(t=>{"modal"===t.target.id&&o.removeEventListener("submit",m)})),n.addEventListener("click",(()=>{o.removeEventListener("submit",m)})),window.addEventListener("keydown",(t=>{"Escape"===t.key&&o.removeEventListener("submit",m)}))}return{activateEditMode:m}})();window.tasks=at,at.addNewTask("Sample Task","This is a sample task item description.","2022-02-14",!1),at.addNewTask("1","This is a sample task item description.","2022-02-15",!1),at.addNewTask("2","This is a sample task item description.","2022-02-16",!1),at.addNewTask("3","This is a sample task item description.","2022-02-17",!1),at.addNewTask("4","This is a sample task item description.","2022-02-18",!1),at.addNewTask("5","This is a sample task item description.","2022-02-19",!1),at.addNewTask("6","This is a sample task item description.","2022-02-20",!1),at.addNewTask("7","This is a sample task item description.","2022-02-21",!1),at.addNewTask("8","This is a sample task item description.","2022-02-22",!1),at.addNewTask("9","This is a sample task item description.","2022-02-23",!1),it.redrawTasks(rt.tasksToDisplay),window.format=et})()})();