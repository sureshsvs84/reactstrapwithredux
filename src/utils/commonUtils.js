import {
    countryCode
} from '../constants/appConstants';
import {
    localeConstants_en
} from '../constants/en';
import _ from 'lodash';

export const getlocalizeData = () => {
    const selectedLanguage = 'EN';
    if (selectedLanguage === countryCode.ENGLISH) {
        return localeConstants_en;
    }
    return localeConstants_en;
};

//method returns default value of type specified
//in case type is not specified, array is considered as default
export const isEmptyReturnDefault = function (data, type) {
    type = type ? type : 'array';
    const result = isEmpty(data) || isUndefined(data);
    if (result && type === 'number') {
        return 0;
    }
    if (result && type === 'boolean') {
        return false;
    }
    if (result && type === 'array') {
        return [];
    }
    if (result && type === 'object') {
        return {};
    }

    return data;
};
//Defines the type of the value, extended typeof
const whatis = function (val) {

    if (val === undefined) {
        return 'undefined';
    }
    if (val === null) {
        return 'null';
    }

    let type = typeof val;

    if (type === 'object') {
        type = getClass(val)
            .toLowerCase();
    }

    if (type === 'number') {
        if (val.toString()
            .indexOf('.') > 0) {
            return 'float';
        } else {
            return 'integer';
        }
    }

    return type;
};
const getClass = function (val) {
    return Object.prototype.toString.call(val)
        .match(/^\[object\s(.*)\]$/)[1];
};
// Returns if a value is a function
export const isFunction = function (value) {
    return typeof value === 'function';
};

export const isString = function (value) {
    return typeof value === 'string';
};

export const isUndefined = function (value) {
    return typeof value === 'undefined';
};

export const isEmptyOrUndefine = function (obj) {
    if (obj === 'undefined' || obj === null || obj === "" || obj === " " || isEmpty(obj))
        return true;

    if (_.isArray(obj) || _.isString(obj))
        return obj.length === 0;

    for (const key in obj)
        if (_.has(obj, key)) return false;

    return true;
};
export const isEmpty = function (obj) {
    if (obj === null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (const key in obj)
        if (_.has(obj, key)) return false;
    return true;
};
export const mergeobjects = (dest, src) => {
    return _.merge({}, dest, src);
};

export const truncate = (text, length) => {
    return _.truncate(text, {
        length: length ? length : 50,
        separator: ' '
    });
};
export const compareObjects = function (a, b) {
    if (a === b) {
        return true;
    }
    for (const i in a) {
        if (b.hasOwnProperty(i)) {
            if (!equal(a[i], b[i])) return false;
        } else {
            return false;
        }
    }

    for (const i in b) {
        if (!a.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
};

const compareArrays = function (a, b) {
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!equal(a[i], b[i])) return false;
    }

    return true;
};

const _equal = {};
_equal.array = compareArrays;
_equal.object = compareObjects;
_equal.date = function (a, b) {
    return a.getTime() === b.getTime();
};
_equal.regexp = function (a, b) {
    return a.toString() === b.toString();
};

export const equal = function (a, b) {
    if (a !== b) {
        const atype = whatis(a),
            btype = whatis(b);

        if (atype === btype) {
            return _equal.hasOwnProperty(atype) ? _equal[atype](a, b) : a === b;
        }

        return false;
    }

    return true;
};
export const numberFormat = (number) => {
    if (number === "0") {
        return number;
    }
    else {
        const trimmed = number.replace(/^0+/, '');
        const formatedNumber = trimmed.replace(/[^\d.-]/g, '');
        return formatedNumber;
    }
};
//Remove Array Duplicates
export const RemoveDuplicateArray = (params,key) => {
    const isObj = _.unionBy(params,key);
    return isObj;
};
//Is Array 
export const isArray = (params) => {
    const isArr = _.isArray(params);
    return isArr;
};

//Find Object in Array
export const findObject = (array, key) => {
    const obj = _.find(array, key);
    return obj;
};

//Map Array Object 
export const mapArrayObject = (array, key) => {
    const mapValue = _.map(array, key);
    return mapValue;
};

//To convert Objects to Array of Objects
export const convertObjectToArray = (obj) => {
    const arr = _.values(obj);
    return arr;
};

//To add a new key-value pair to an array of objects
export const addElementToArray = (data) => {
    const arr = data.map(res => {
        return _.extend({}, res, { 'value': res.name, 'label': res.name });
    });
    return arr;
};
//To add a new key-value pair to an array of objects
export const addElementToArrayParam = (data,paramValue,paramName) => {
    const arr = data.map(res => {
        return _.extend({}, res, { 'value': res[paramValue], 'label': res[paramName] });
    });
    return arr;
};

//Convert Array to Object 
export const convertArrayToObject = (params, name) => {
    const arrayObj = _.keyBy(params, name);
    return arrayObj;
};

const inputChangeHandler = (e) => {
    if (e.target.type === "number") {
        if (e.target.value !== "0" && e.target.value !== "0.00") {
            e.target.value = numberFormat(e.target.value);
        }
    }
    const fieldValue = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    const fieldName = e.target.name;
    const result = {
        value: fieldValue,
        name: fieldName
    };
    return result;
};

export const formInputChangeHandler = (event) => {
    const result = inputChangeHandler(event);
    return result;
};

export const captalize = (word) => {
    if (word !== undefined) {
        word = word.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        return word;
    }
};

//RegExp validator
export const customRegExValidator = (pattern, modifiers, value) => {
    const regex = new RegExp(pattern, modifiers);
    return value && !(regex.test(value));
};
/** Parse query param */
export const parseQueryParam = (param) => {
    let parsedParam = param.substring(1);
    parsedParam = JSON.parse('{"' + decodeURI(parsedParam.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
    return parsedParam;
};
//DeepCopy from Array to Array
export function deepCopy(obj) {
    if(typeof obj !== 'object' || obj === null) {
        return obj;
    }
     
    if(obj instanceof Array) {
        return obj.reduce((arr, item, i) => {
            arr[i] = deepCopy(item);
            return arr;
        }, []);
    }

    if(obj instanceof Object) {
        return Object.keys(obj).reduce((newObj, key) => {
            newObj[key] = deepCopy(obj[key]);
            return newObj;
        }, {});
    };
}