const ISO9075 = require('../index');
const assert = require('assert');

console.log("Running Test");
assert.equal("MyDocuments", ISO9075.decode("MyDocuments"));
assert.equal("My_Documents", ISO9075.decode("My_Documents"));
assert.equal("My Documents", ISO9075.decode("My_x0020_Documents"));
assert.equal("My_x0020Documents", ISO9075.decode("My_x0020Documents"));
assert.equal("My_x0020_Documents", ISO9075.decode("My_x005f_x0020_Documents"));
assert.equal("_x0020_Documents", ISO9075.decode("_x005f_x0020_Documents"));
assert.equal("@_x0020_Documents", ISO9075.decode("_x0040__x005f_x0020_Documents"));
assert.equal("Andy's Bits & Bobs \uabcd", ISO9075.decode("Andy_x0027_s_x0020_Bits_x0020__x0026__x0020_Bobs_x0020__xabcd_"));
assert.equal("Andy's Bits & Bobs \uabcd\\", ISO9075.decode("Andy_x0027_s_x0020_Bits_x0020__x0026__x0020_Bobs_x0020__xabcd__x005c_"));
assert.equal(" `\u00ac\u00a6!\"\u00a3$%^&*()-_=+\t\n\\\u0000[]{};'#:@~,./<>?\\|",ISO9075.decode("_x0020__x0060__x00ac__x00a6__x0021__x0022__x00a3__x0024__x0025__x005e__x0026__x002a__x0028__x0029_-__x003d__x002b__x0009__x000a__x005c__x0000__x005b__x005d__x007b__x007d__x003b__x0027__x0023__x003a__x0040__x007e__x002c_._x002f__x003c__x003e__x003f__x005c__x007c_"));
assert.equal("\u0123\u4567\u8900\uabcd\uefff_xT65A_", ISO9075.decode("\u0123_x4567_\u8900_xabcd__xefff__xT65A_"));
assert.equal("My_x0020_Documents", ISO9075.decode("My_x005F_x0020_Documents"));
assert.equal("_x0020_Documents", ISO9075.decode("_x005F_x0020_Documents"));
assert.equal("@_x0020_Documents", ISO9075.decode("_x0040__x005F_x0020_Documents"));
assert.equal("Andy's Bits & Bobs \uabcd\\", ISO9075.decode("Andy_x0027_s_x0020_Bits_x0020__x0026__x0020_Bobs_x0020__xabcd__x005C_"));
assert.equal(" `\u00ac\u00a6!\"\u00a3$%^&*()-_=+\t\n\\\u0000[]{};'#:@~,./<>?\\|",ISO9075.decode("_x0020__x0060__x00AC__x00A6__x0021__x0022__x00A3__x0024__x0025__x005E__x0026__x002A__x0028__x0029_-__x003D__x002B__x0009__x000A__x005C__x0000__x005B__x005D__x007B__x007D__x003B__x0027__x0023__x003A__x0040__x007E__x002C_._x002F__x003C__x003E__x003F__x005C__x007C_"));
assert.equal("\u0123\u4567\u8900\uabcd\uefff_xT65A_", ISO9075.decode("\u0123_x4567_\u8900_xABCD__xEFFF__xT65A_"));
console.log("All Tests Succeeded");