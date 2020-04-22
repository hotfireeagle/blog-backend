"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStr = () => {
    const date = new Date();
    const year = date.getFullYear();
    const m = date.getMonth() + 1;
    const month = m < 10 ? '0' + m : m;
    const day = date.getDay();
    return '' + year + '-' + month + '-' + day;
};
//# sourceMappingURL=index.js.map