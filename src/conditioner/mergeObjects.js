/**
 * Based on https://github.com/nrf110/deepmerge/blob/master/index.js
 *
 * @param target {object}
 * @param src {object}
 * @returns {object}
 */
var mergeObjects = function(target, src) {

    var array = Array.isArray(src);
    var dst = array && [] || {};

    src = src || {};

    if (array) {

        target = target || [];
        dst = dst.concat(target);

        src.forEach(function(e, i) {

            if (typeof e === 'object') {
                dst[i] = mergeObjects(target[i], e);
            }
            else {
                if (target.indexOf(e) === -1) {
                    dst.push(e);
                }
            }
        });
    }
    else {

        if (target && typeof target === 'object') {

            Object.keys(target).forEach(function (key) {
                dst[key] = target[key];
            });

        }

        Object.keys(src).forEach(function (key) {

            if (typeof src[key] !== 'object' || !src[key]) {
                dst[key] = src[key];
            }
            else {
                if (!target[key]) {
                    dst[key] = src[key];
                }
                else {
                    dst[key] = mergeObjects(target[key], src[key]);
                }
            }

        });
    }

    return dst;
};