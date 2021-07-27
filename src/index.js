const required = function(value)  {
    if( Array.isArray(value) && value.length === 0 )
        return false;
    else
        return ![ null, undefined, '' ].includes(value);
}

const string = function(value) {
    return typeof value === 'string';
}

const array = function(value) {
    return Array.isArray(value);
}

const integer = function(value) {
    return Number.isInteger(value);
}

const numeric = function(value) {
    return !Number.isNaN(parseFloat(value)) && isFinite(value);
}

const alpha = function(value) {
    return string(value) && new RegExp("^[A-Za-z]+$").test(value.toLowerCase());
}

const alpha_numeric = function(value) {
    return string(value) && new RegExp("^[a-zA-Z0-9\\s]+$").test(value.toLowerCase());
}

const alpha_dash = function(value) {
    return string(value) && new RegExp("^[a-zA-Z-_]+$").test(value.toLowerCase());
}

const starts_with = function(value, arg = null) {
    return string(value) && string(arg) && value.startsWith(arg);
}

const ends_with = function(value, arg = null) {
    return string(value) && string(arg) && value.endsWith(arg);
}

const boolean = function(value) {
    return [true, false].includes(value);
}

const is_in = function(value, arg = null) {
    if(!string(arg) && !array(arg))
        return false;

    arg = string(arg) ? arg.split(',') : arg;
    return arg.includes(value);
}

const not_in = function(value, arg = null) {
    if(!string(arg) && !array(arg))
        return false;

    return !is_in(value, arg);
}

const size = function(value, arg = null) {
    return (!string(value) && !array(value)) ? false : value.length === arg;
}

const min = function (value, arg = null) {
    if(!value && !array(value)) {
        return false;
    }

    value = ( string(value) || array(value) ) ? value.length : value;
    return parseFloat(value) >= arg;
}

const max = function(value, arg = null) {
    if(!value && !array(value)) {
        return false;
    }

    value = ( string(value) || array(value) ) ? value.length : value;
    return parseFloat(value) <= arg;
}

const same = function(value, arg = null) {
    return (typeof value === 'object') ? JSON.stringify(value) === JSON.stringify(arg) : value === arg;
}
const different = function(value, arg = null) {
    return !same(value, arg);
}

module.exports = {
    required,
    string,
    array,
    integer,
    numeric,
    alpha,
    alpha_numeric,
    alpha_dash,
    starts_with,
    ends_with,
    boolean,
    is_in,
    not_in,
    size,
    min,
    max,
    same,
    different
}