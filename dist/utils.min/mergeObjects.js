define(function(){"use strict";var e=function(t,n){var r=Array.isArray(n),i=r&&[]||{};return n=n||{},r?i=n.concat():(t&&"object"==typeof t&&Object.keys(t).forEach(function(e){i[e]=t[e]}),Object.keys(n).forEach(function(r){i[r]="object"==typeof n[r]&&n[r]?t[r]?e(t[r],n[r]):n[r]:n[r]})),i};return e});