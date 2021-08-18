var e=0;function t(t){return"__private_"+e+++"_"+t}function r(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var i=require("dayjs"),n=require("dayjs/plugin/isSameOrAfter"),s=require("dayjs/plugin/isSameOrBefore"),a=require("dayjs/plugin/isLeapYear"),o=require("dayjs/plugin/isToday"),u=require("dayjs/plugin/isTomorrow"),l=require("dayjs/plugin/isYesterday");function f(e){return"string"==typeof e}function h(e){return Array.isArray(e)}function d(e,t){return void 0===t&&(t=null),!(!f(t)&&!h(t))&&(t=f(t)?t.split(","):t).includes(e)}function c(e,t){return void 0===t&&(t=null),"object"==typeof e?JSON.stringify(e)===JSON.stringify(t):e===t}i.extend(n),i.extend(s),i.extend(a),i.extend(o),i.extend(u),i.extend(l);var m={__proto__:null,required:function(e){return!(Array.isArray(e)&&0===e.length||[null,void 0,""].includes(e))},string:f,array:h,integer:function(e){return Number.isInteger(e)},numeric:function(e){return!Number.isNaN(parseFloat(e))&&isFinite(e)},alpha:function(e){return f(e)&&new RegExp("^[A-Za-z]+$").test(e.toLowerCase())},alpha_numeric:function(e){return f(e)&&new RegExp("^[a-zA-Z0-9\\s]+$").test(e.toLowerCase())},alpha_dash:function(e){return f(e)&&new RegExp("^[a-zA-Z-_]+$").test(e.toLowerCase())},starts_with:function(e,t){return void 0===t&&(t=null),f(e)&&f(t)&&e.startsWith(t)},ends_with:function(e,t){return void 0===t&&(t=null),f(e)&&f(t)&&e.endsWith(t)},boolean:function(e){return[!0,!1].includes(e)},is_in:d,not_in:function(e,t){return void 0===t&&(t=null),!(!f(t)&&!h(t)||d(e,t))},size:function(e,t){return void 0===t&&(t=null),!(!f(e)&&!h(e))&&e.length===t},min:function(e,t){return void 0===t&&(t=null),!(!e&&!h(e))&&(e=f(e)||h(e)?e.length:e,parseFloat(e)>=t)},max:function(e,t){return void 0===t&&(t=null),!(!e&&!h(e))&&(e=f(e)||h(e)?e.length:e,parseFloat(e)<=t)},same:c,different:function(e,t){return void 0===t&&(t=null),!c(e,t)},url:function(e){return new RegExp("^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-.][a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$").test(String(e).toLowerCase())},email:function(e){return new RegExp("^\\S+@\\S+[.][0-9a-z]+$").test(String(e).toLowerCase())},uuid:function(e){return!!f(e)&&new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$").test(String(e).toLowerCase())},matches_regex:function(e,t){return void 0===t&&(t=null),!!f(e)&&new RegExp(t).test(String(e).toLowerCase())},json:function(e){if(!f(e))return!1;try{return"object"==typeof JSON.parse(e)}catch(e){return!1}},date:function(e){return i(e).isValid()},after:function(e,t){return void 0===t&&(t=null),i(e).isAfter(t)},before:function(e,t){return void 0===t&&(t=null),i(e).isBefore(t)},after_or_equal:function(e,t){return void 0===t&&(t=null),i(e).isSameOrAfter(t)},before_or_equal:function(e,t){return void 0===t&&(t=null),i(e).isSameOrBefore(t)},leap_year:function(e){return i(e).isLeapYear()},today:function(e){return i(e).isToday()},tomorrow:function(e){return i(e).isTomorrow()},yesterday:function(e){return i(e).isYesterday()}};function p(e){return!(!e||Array.isArray(e)||"object"!=typeof e||e.constructor!==Object)}function g(e){return p(e)&&0===Object.keys(e).length}var b={after:'This field must be a date after "{param}"',after_or_equal:'This field must be a date after or equal to "{param}"',alpha:"This field must only contain letters",alpha_dash:"This field must only contain letters, dashes and underscores",alpha_numeric:"This field must only contain letters and numbers",array:"This field must be an array",before:'This field must be a date before "{param}"',before_or_equal:'This field must be a date before or equal to "{param}"',boolean:"This field must be boolean",date:"This field must be a valid date",different:'This field must be different than "{param}"',email:"This field must be a valid email.",ens_with:'This field must end with "{param}"',integer:"This field must be a number.",is_in:'This field must be one of "{param}"',json:"This field must be a json object",leap_year:"This date must be a leap year",matches_regex:'This field must match the regex "{param}"',max:'This field must not be greater than "{param}"',min:'This field must not be less than "{param}"',not_in:'This field must not be one of "{param}"',numeric:"This field must be numeric",required:"This field is required",same:'This field must be the same as "{param}"',size:'The field length must be "{param}"',starts_with:'This field must start with "{param}"',string:"This field must be a string",today:"This date must be today",tomorrow:"This date must be tomorrow",url:"This field must be a valid url",uuid:"This field must be a valid uuid"},w=require("dot-prop"),y=t("data"),v=t("rules"),E=t("errorsBag"),T=t("validate"),j=t("toArray"),_=t("parse"),O=t("executeRule"),x=t("getErrorMessage"),q=t("addError"),R=function(){function e(){Object.defineProperty(this,q,{value:z}),Object.defineProperty(this,x,{value:C}),Object.defineProperty(this,O,{value:M}),Object.defineProperty(this,_,{value:A}),Object.defineProperty(this,j,{value:P}),Object.defineProperty(this,T,{value:S}),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,E,{writable:!0,value:void 0}),r(this,y)[y]={},r(this,v)[v]={},r(this,E)[E]=[],this.availableRules=m,this.defaultErrorMessages=b,this.customErrorMessages={}}var t=e.prototype;return t.setData=function(e){if(!p(e))throw new Error("setData() argument must be an object.");return r(this,y)[y]=e,this},t.setRules=function(e){if(!p(e))throw new Error("setRules() argument must be an object.");return r(this,v)[v]=e,this},t.setCustomErrorMessages=function(e){if(!p(e))throw new Error("setCustomErrorMessages() argument must be an object.");return this.customErrorMessages=e,this},t.getData=function(){return r(this,y)[y]},t.getRules=function(){return r(this,v)[v]},t.getCustomErrorMessages=function(){return this.customErrorMessages},t.passes=function(){return r(this,T)[T]()},t.fails=function(){return!this.passes()},t.hasErrors=function(e){return!!this.getErrors(e).length},t.getErrors=function(e){return r(this,E)[E].filter(function(t){return t.dataKey===e}).map(function(e){return e.message})},t.getFirstError=function(e){return this.hasErrors(e)?this.getErrors(e)[0]:null},t.extend=function(e,t){if(!e||!t)throw new Error("extend() requires two arguments: name string and callback function");if(this.availableRules.hasOwnProperty(e))throw new Error('The rule "'+e+'" exists.');if("function"!=typeof t||"[object Function]"!=={}.toString.call(t))throw new Error('The closure of the rule "'+e+'" should be a function.');if("boolean"!=typeof t())throw new Error("The closure of the custom rule "+e+" should return a boolean");return this.availableRules[e]=t,this},e}();function S(){var e=this;if(g(r(this,v)[v]))throw new Error("the rules object is missing. Use setRules() to set it");if(g(r(this,y)[y]))throw new Error("the data object is missing. Use setData() to set it");r(this,E)[E]=[];for(var t=function(){var t=n[i],s=t[0],a=t[1],o=w.has(r(e,y)[y],s)?w.get(r(e,y)[y],s):s,u=r(e,j)[j](a);if(u.includes("sometimes")&&!o)return"continue";u.forEach(function(t){"sometimes"!==t&&r(e,O)[O](o,t,s)})},i=0,n=Object.entries(r(this,v)[v]);i<n.length;i++)t();return!r(this,E)[E].length}function P(e){var t=e.split("|");return t.forEach(function(e,r){t[r]=e.trim()}),t}function A(e){var t=e,i=null;return"string"==typeof e&&e.split(":").length>1&&(t=e.split(":")[0].trim(),i=e.split(":")[1].trim(),w.has(r(this,y)[y],i)&&(i=w.get(r(this,y)[y],i))),{rule:t,arg:i}}function M(e,t,i){var n=r(this,_)[_](t),s=n.rule,a=n.arg;if(!this.availableRules.hasOwnProperty(s))throw new Error('the rule "'+s+'" does not exist.');if(!this.availableRules[s](e,a)){var o=r(this,x)[x](i,s,a);r(this,q)[q](i,s,o)}}function C(e,t,r){var i;void 0===r&&(r=null);var n=e+"."+t;if(this.customErrorMessages.hasOwnProperty(n))i=this.customErrorMessages[n];else{if(!this.defaultErrorMessages.hasOwnProperty(t))throw new Error("Set a customer error message for the rule "+t);i=this.defaultErrorMessages[t]}return i.replace("{param}",r)}function z(e,t,i){var n=e+"."+t;r(this,E)[E].push({key:n,dataKey:e,message:i})}export{R as default};
//# sourceMappingURL=clockwork.module.js.map
