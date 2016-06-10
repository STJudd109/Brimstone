var require = meteorInstall({"imports":{"ui":{"char-list.html":["./template.char-list.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/char-list.html                                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.char-list.js");                                                                // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.char-list.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/template.char-list.js                                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("main");                                                                                       // 2
Template["main"] = new Template("Template.main", (function() {                                                      // 3
  var view = this;                                                                                                  // 4
  return HTML.DIR({                                                                                                 // 5
    "class": "container-fluid"                                                                                      // 6
  }, HTML.Raw('\n  <header class="row">\n      <h1 class="text-center">Brimstone</h1>\n\n      <form class="form-inline">\n      <div class="form-group">\n        <input class="form-control" id="name" type="text" name="name" placeholder="Add a new character">\n        <select class="form-control" id="type" type="text" name="type"> \n         <option>Warrior</option>\n        <option>Mage</option>  \n        <option>Bowman</option>\n        <option>Theif</option>\n        <option>Darkness</option>\n        </select>\n        \n        <button class="save btn btn-default">&plus;</button>\n        </div>\n      </form>\n    </header>\n  \n      '), Blaze.Each(function() {
    return Spacebars.call(view.lookup("Characters"));                                                               // 8
  }, function() {                                                                                                   // 9
    return [ "\n        ", Spacebars.include(view.lookupTemplate("charlist")), "\n      " ];                        // 10
  }), "\n  \n");                                                                                                    // 11
}));                                                                                                                // 12
                                                                                                                    // 13
Template.__checkName("charlist");                                                                                   // 14
Template["charlist"] = new Template("Template.charlist", (function() {                                              // 15
  var view = this;                                                                                                  // 16
  return HTML.DIV({                                                                                                 // 17
    "class": "row"                                                                                                  // 18
  }, "\n  ", HTML.DL({                                                                                              // 19
    "class": "col-md-8"                                                                                             // 20
  }, "\n", HTML.DT(HTML.H4(Blaze.View("lookup:name", function() {                                                   // 21
    return Spacebars.mustache(view.lookup("name"));                                                                 // 22
  }), " lvl: ", Blaze.View("lookup:lvl", function() {                                                               // 23
    return Spacebars.mustache(view.lookup("lvl"));                                                                  // 24
  }))), "\n", HTML.DD({                                                                                             // 25
    "class": "text"                                                                                                 // 26
  }, Blaze.View("lookup:class", function() {                                                                        // 27
    return Spacebars.mustache(view.lookup("class"));                                                                // 28
  })), "\n  "), HTML.Raw('\n  <div class="col-md-4"> \n<button class="edit">Edit</button>\n<button class="delete">&times;</button>\n</div>\n  '));
}));                                                                                                                // 30
                                                                                                                    // 31
Template.__checkName("charinfo");                                                                                   // 32
Template["charinfo"] = new Template("Template.charinfo", (function() {                                              // 33
  var view = this;                                                                                                  // 34
  return [ Spacebars.With(function() {                                                                              // 35
    return Spacebars.call(view.lookup("activeCharacter"));                                                          // 36
  }, function() {                                                                                                   // 37
    return [ "\n", HTML.DIV({                                                                                       // 38
      calls: "container-fluid"                                                                                      // 39
    }, "\n", HTML.BUTTON({                                                                                          // 40
      "class": "back",                                                                                              // 41
      name: function() {                                                                                            // 42
        return Spacebars.mustache(view.lookup("name"));                                                             // 43
      }                                                                                                             // 44
    }, HTML.CharRef({                                                                                               // 45
      html: "&lt;",                                                                                                 // 46
      str: "<"                                                                                                      // 47
    })), "\n", HTML.DIV({                                                                                           // 48
      "class": "row"                                                                                                // 49
    }, "\n    ", HTML.DIV({                                                                                         // 50
      "class": "col-md-12"                                                                                          // 51
    }, "\n      ", HTML.H3({                                                                                        // 52
      "class": "text-center"                                                                                        // 53
    }, "\n        Hero Details\n      "), "\n    "), "\n  "), "\n  ", HTML.DIV({                                    // 54
      "class": "row"                                                                                                // 55
    }, "\n    ", HTML.DIV({                                                                                         // 56
      "class": "col-md-6"                                                                                           // 57
    }, "\n      ", HTML.H4({                                                                                        // 58
      "class": "text-center"                                                                                        // 59
    }, "\n        ", Blaze._TemplateWith(function() {                                                               // 60
      return {                                                                                                      // 61
        collection: Spacebars.call("characters"),                                                                   // 62
        field: Spacebars.call("name")                                                                               // 63
      };                                                                                                            // 64
    }, function() {                                                                                                 // 65
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 66
    }), "\n      "), "\n    "), "\n    ", HTML.DIV({                                                                // 67
      "class": "col-md-6"                                                                                           // 68
    }, "\n      ", HTML.H4({                                                                                        // 69
      "class": "text-center"                                                                                        // 70
    }, "\n        ", Blaze._TemplateWith(function() {                                                               // 71
      return {                                                                                                      // 72
        collection: Spacebars.call("characters"),                                                                   // 73
        field: Spacebars.call("class")                                                                              // 74
      };                                                                                                            // 75
    }, function() {                                                                                                 // 76
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 77
    }), "\n      "), "\n    "), "\n  "), "\n  ", HTML.DIV({                                                         // 78
      "class": "row"                                                                                                // 79
    }, "\n    ", HTML.DIV({                                                                                         // 80
      "class": "col-md-8"                                                                                           // 81
    }, "\n      ", HTML.H4({                                                                                        // 82
      "class": "text-center"                                                                                        // 83
    }, "\n        ", Blaze._TemplateWith(function() {                                                               // 84
      return {                                                                                                      // 85
        collection: Spacebars.call("characters"),                                                                   // 86
        field: Spacebars.call("keys")                                                                               // 87
      };                                                                                                            // 88
    }, function() {                                                                                                 // 89
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 90
    }), "\n      "), "\n    "), "\n    ", HTML.DIV({                                                                // 91
      "class": "col-md-4"                                                                                           // 92
    }, "\n      ", HTML.H4({                                                                                        // 93
      "class": "text-center"                                                                                        // 94
    }, "\n        ", Blaze._TemplateWith(function() {                                                               // 95
      return {                                                                                                      // 96
        collection: Spacebars.call("characters"),                                                                   // 97
        field: Spacebars.call("lvl")                                                                                // 98
      };                                                                                                            // 99
    }, function() {                                                                                                 // 100
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 101
    }), "\n      "), "\n    "), "\n  "), "\n  \n", HTML.DIV({                                                       // 102
      "class": "row"                                                                                                // 103
    }, "\n", HTML.DIV({                                                                                             // 104
      "class": "col-md-12"                                                                                          // 105
    }, "\n    ", HTML.TABLE({                                                                                       // 106
      "class": "table table-bordered table-condensed text-center"                                                   // 107
    }, "\n  ", HTML.THEAD("\n    ", HTML.TR("\n      ", HTML.TH({                                                   // 108
      "class": "text-center"                                                                                        // 109
    }, "Stats"), "\n    "), "\n  "), "\n  ", HTML.TBODY("\n  ", HTML.TR({                                           // 110
      "class": "active"                                                                                             // 111
    }, "\n      ", HTML.TD({                                                                                        // 112
      "class": "text-center"                                                                                        // 113
    }, "agility"), "\n      ", HTML.TD({                                                                            // 114
      "class": "text-center"                                                                                        // 115
    }, "cunning"), "\n      ", HTML.TD({                                                                            // 116
      "class": "text-center"                                                                                        // 117
    }, "spirit"), "\n      ", HTML.TD({                                                                             // 118
      "class": "text-center"                                                                                        // 119
    }, "maxGrit"), "\n  "), "\n    ", HTML.TR("\n      ", HTML.TD({                                                 // 120
      "class": "agility-cell"                                                                                       // 121
    }, Blaze._TemplateWith(function() {                                                                             // 122
      return {                                                                                                      // 123
        collection: Spacebars.call("characters"),                                                                   // 124
        field: Spacebars.call("agility")                                                                            // 125
      };                                                                                                            // 126
    }, function() {                                                                                                 // 127
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 128
    })), "\n      ", HTML.TD({                                                                                      // 129
      "class": "cunning-cell"                                                                                       // 130
    }, Blaze._TemplateWith(function() {                                                                             // 131
      return {                                                                                                      // 132
        collection: Spacebars.call("characters"),                                                                   // 133
        field: Spacebars.call("cunning")                                                                            // 134
      };                                                                                                            // 135
    }, function() {                                                                                                 // 136
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 137
    })), "\n      ", HTML.TD({                                                                                      // 138
      "class": "spirit-cell"                                                                                        // 139
    }, Blaze._TemplateWith(function() {                                                                             // 140
      return {                                                                                                      // 141
        collection: Spacebars.call("characters"),                                                                   // 142
        field: Spacebars.call("spirit")                                                                             // 143
      };                                                                                                            // 144
    }, function() {                                                                                                 // 145
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 146
    })), "\n      ", HTML.TD({                                                                                      // 147
      "class": "maxGrit-cell"                                                                                       // 148
    }, Blaze._TemplateWith(function() {                                                                             // 149
      return {                                                                                                      // 150
        collection: Spacebars.call("characters"),                                                                   // 151
        field: Spacebars.call("maxGrit")                                                                            // 152
      };                                                                                                            // 153
    }, function() {                                                                                                 // 154
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 155
    })), "\n    "), "\n    ", HTML.TR({                                                                             // 156
      "class": "active"                                                                                             // 157
    }, " \n      ", HTML.TD({                                                                                       // 158
      "class": "agility-cell"                                                                                       // 159
    }, "strength"), "\n      ", HTML.TD({                                                                           // 160
      "class": "cunning-cell"                                                                                       // 161
    }, "lore"), "\n      ", HTML.TD({                                                                               // 162
      "class": "spirit-cell"                                                                                        // 163
    }, "luck"), "\n      ", HTML.TD({                                                                               // 164
      "class": "maxGrit-cell"                                                                                       // 165
    }, "initiative"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                            // 166
      "class": "agility-cell"                                                                                       // 167
    }, Blaze._TemplateWith(function() {                                                                             // 168
      return {                                                                                                      // 169
        collection: Spacebars.call("characters"),                                                                   // 170
        field: Spacebars.call("strength")                                                                           // 171
      };                                                                                                            // 172
    }, function() {                                                                                                 // 173
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 174
    })), "\n      ", HTML.TD({                                                                                      // 175
      "class": "cunning-cell"                                                                                       // 176
    }, Blaze._TemplateWith(function() {                                                                             // 177
      return {                                                                                                      // 178
        collection: Spacebars.call("characters"),                                                                   // 179
        field: Spacebars.call("lore")                                                                               // 180
      };                                                                                                            // 181
    }, function() {                                                                                                 // 182
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 183
    })), "\n      ", HTML.TD({                                                                                      // 184
      "class": "spirit-cell"                                                                                        // 185
    }, Blaze._TemplateWith(function() {                                                                             // 186
      return {                                                                                                      // 187
        collection: Spacebars.call("characters"),                                                                   // 188
        field: Spacebars.call("luck")                                                                               // 189
      };                                                                                                            // 190
    }, function() {                                                                                                 // 191
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 192
    })), "\n      ", HTML.TD({                                                                                      // 193
      "class": "maxGrit-cell"                                                                                       // 194
    }, Blaze._TemplateWith(function() {                                                                             // 195
      return {                                                                                                      // 196
        collection: Spacebars.call("characters"),                                                                   // 197
        field: Spacebars.call("initiative")                                                                         // 198
      };                                                                                                            // 199
    }, function() {                                                                                                 // 200
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 201
    })), "\n    "), "\n    ", HTML.TR({                                                                             // 202
      "class": "active"                                                                                             // 203
    }, "\n      ", HTML.TD({                                                                                        // 204
      "class": "agility-cell"                                                                                       // 205
    }, "health"), "\n      ", HTML.TD({                                                                             // 206
      "class": "cunning-cell"                                                                                       // 207
    }, "sanity"), "\n      ", HTML.TD({                                                                             // 208
      "class": "spirit-cell"                                                                                        // 209
    }, "melee"), "\n      ", HTML.TD({                                                                              // 210
      "class": "maxGrit-cell"                                                                                       // 211
    }, "corruption"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                            // 212
      "class": "agility-cell"                                                                                       // 213
    }, Blaze._TemplateWith(function() {                                                                             // 214
      return {                                                                                                      // 215
        collection: Spacebars.call("characters"),                                                                   // 216
        field: Spacebars.call("health")                                                                             // 217
      };                                                                                                            // 218
    }, function() {                                                                                                 // 219
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 220
    })), "\n      ", HTML.TD({                                                                                      // 221
      "class": "cunning-cell"                                                                                       // 222
    }, Blaze._TemplateWith(function() {                                                                             // 223
      return {                                                                                                      // 224
        collection: Spacebars.call("characters"),                                                                   // 225
        field: Spacebars.call("sanity")                                                                             // 226
      };                                                                                                            // 227
    }, function() {                                                                                                 // 228
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 229
    })), "\n      ", HTML.TD({                                                                                      // 230
      "class": "spirit-cell"                                                                                        // 231
    }, Blaze._TemplateWith(function() {                                                                             // 232
      return {                                                                                                      // 233
        collection: Spacebars.call("characters"),                                                                   // 234
        field: Spacebars.call("melee")                                                                              // 235
      };                                                                                                            // 236
    }, function() {                                                                                                 // 237
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 238
    })), "\n      ", HTML.TD({                                                                                      // 239
      "class": "maxGrit-cell"                                                                                       // 240
    }, Blaze._TemplateWith(function() {                                                                             // 241
      return {                                                                                                      // 242
        collection: Spacebars.call("characters"),                                                                   // 243
        field: Spacebars.call("corruption")                                                                         // 244
      };                                                                                                            // 245
    }, function() {                                                                                                 // 246
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 247
    })), "\n    "), "\n    ", HTML.TR({                                                                             // 248
      "class": "active"                                                                                             // 249
    }, "\n      ", HTML.TD({                                                                                        // 250
      "class": "agility-cell"                                                                                       // 251
    }, "defense"), "\n      ", HTML.TD({                                                                            // 252
      "class": "cunning-cell"                                                                                       // 253
    }, "willpower"), "\n      ", HTML.TD({                                                                          // 254
      "class": "spirit-cell"                                                                                        // 255
    }, "combat"), "\n      ", HTML.TD({                                                                             // 256
      "class": "maxGrit-cell"                                                                                       // 257
    }, "darkStone"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                             // 258
      "class": "agility-cell"                                                                                       // 259
    }, Blaze._TemplateWith(function() {                                                                             // 260
      return {                                                                                                      // 261
        collection: Spacebars.call("characters"),                                                                   // 262
        field: Spacebars.call("defense")                                                                            // 263
      };                                                                                                            // 264
    }, function() {                                                                                                 // 265
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 266
    })), "\n      ", HTML.TD({                                                                                      // 267
      "class": "cunning-cell"                                                                                       // 268
    }, Blaze._TemplateWith(function() {                                                                             // 269
      return {                                                                                                      // 270
        collection: Spacebars.call("characters"),                                                                   // 271
        field: Spacebars.call("willpower")                                                                          // 272
      };                                                                                                            // 273
    }, function() {                                                                                                 // 274
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 275
    })), "\n      ", HTML.TD({                                                                                      // 276
      "class": "spirit-cell"                                                                                        // 277
    }, Blaze._TemplateWith(function() {                                                                             // 278
      return {                                                                                                      // 279
        collection: Spacebars.call("characters"),                                                                   // 280
        field: Spacebars.call("combat")                                                                             // 281
      };                                                                                                            // 282
    }, function() {                                                                                                 // 283
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 284
    })), "\n      ", HTML.TD({                                                                                      // 285
      "class": "maxGrit-cell"                                                                                       // 286
    }, Blaze._TemplateWith(function() {                                                                             // 287
      return {                                                                                                      // 288
        collection: Spacebars.call("characters"),                                                                   // 289
        field: Spacebars.call("darkStone")                                                                          // 290
      };                                                                                                            // 291
    }, function() {                                                                                                 // 292
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 293
    })), "\n    "), "\n    ", HTML.TR({                                                                             // 294
      "class": "active"                                                                                             // 295
    }, "\n      ", HTML.TD({                                                                                        // 296
      "class": "agility-cell"                                                                                       // 297
    }, "armor"), "\n      ", HTML.TD({                                                                              // 298
      "class": "cunning-cell"                                                                                       // 299
    }, "Sarmor"), "\n      ", HTML.TD({                                                                             // 300
      "class": "spirit-cell"                                                                                        // 301
    }, "range"), "\n      ", HTML.TD({                                                                              // 302
      "class": "maxGrit-cell"                                                                                       // 303
    }, "maxWeight"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                             // 304
      "class": "agility-cell"                                                                                       // 305
    }, Blaze._TemplateWith(function() {                                                                             // 306
      return {                                                                                                      // 307
        collection: Spacebars.call("characters"),                                                                   // 308
        field: Spacebars.call("armor")                                                                              // 309
      };                                                                                                            // 310
    }, function() {                                                                                                 // 311
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 312
    })), "\n      ", HTML.TD({                                                                                      // 313
      "class": "cunning-cell"                                                                                       // 314
    }, Blaze._TemplateWith(function() {                                                                             // 315
      return {                                                                                                      // 316
        collection: Spacebars.call("characters"),                                                                   // 317
        field: Spacebars.call("Sarmor")                                                                             // 318
      };                                                                                                            // 319
    }, function() {                                                                                                 // 320
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 321
    })), "\n      ", HTML.TD({                                                                                      // 322
      "class": "spirit-cell"                                                                                        // 323
    }, Blaze._TemplateWith(function() {                                                                             // 324
      return {                                                                                                      // 325
        collection: Spacebars.call("characters"),                                                                   // 326
        field: Spacebars.call("range")                                                                              // 327
      };                                                                                                            // 328
    }, function() {                                                                                                 // 329
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 330
    })), "\n      ", HTML.TD({                                                                                      // 331
      "class": "maxGrit-cell"                                                                                       // 332
    }, Blaze._TemplateWith(function() {                                                                             // 333
      return {                                                                                                      // 334
        collection: Spacebars.call("characters"),                                                                   // 335
        field: Spacebars.call("maxWeight")                                                                          // 336
      };                                                                                                            // 337
    }, function() {                                                                                                 // 338
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 339
    })), "\n    "), "\n  "), "\n"), "\n"), "\n"), "\n\n  ", HTML.DIV({                                              // 340
      "class": "hero-extras"                                                                                        // 341
    }, "\n    ", HTML.DIV({                                                                                         // 342
      "class": "sub-container"                                                                                      // 343
    }, "\n      ", HTML.DIV({                                                                                       // 344
      "class": "gold"                                                                                               // 345
    }, "\n        ", HTML.DIV({                                                                                     // 346
      "class": "label"                                                                                              // 347
    }, "gold:"), "\n        ", HTML.DIV({                                                                           // 348
      "class": "value"                                                                                              // 349
    }, Blaze._TemplateWith(function() {                                                                             // 350
      return {                                                                                                      // 351
        collection: Spacebars.call("characters"),                                                                   // 352
        field: Spacebars.call("gold")                                                                               // 353
      };                                                                                                            // 354
    }, function() {                                                                                                 // 355
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 356
    })), "\n      "), "\n      ", HTML.DIV({                                                                        // 357
      "class": "exp"                                                                                                // 358
    }, "\n        ", HTML.DIV({                                                                                     // 359
      "class": "label"                                                                                              // 360
    }, "exp:"), "\n        ", HTML.DIV({                                                                            // 361
      "class": "value"                                                                                              // 362
    }, Blaze._TemplateWith(function() {                                                                             // 363
      return {                                                                                                      // 364
        collection: Spacebars.call("characters"),                                                                   // 365
        field: Spacebars.call("exp")                                                                                // 366
      };                                                                                                            // 367
    }, function() {                                                                                                 // 368
      return Spacebars.include(view.lookupTemplate("editableText"));                                                // 369
    })), "\n      "), "\n    "), "\n    ", HTML.DIV({                                                               // 370
      "class": "sub-container"                                                                                      // 371
    }, "\n      ", HTML.DIV({                                                                                       // 372
      "class": "move"                                                                                               // 373
    }, "\n        ", HTML.DIV({                                                                                     // 374
      "class": "label"                                                                                              // 375
    }), "\n        ", HTML.DIV({                                                                                    // 376
      "class": "value"                                                                                              // 377
    }), "\n        ", HTML.BUTTON({                                                                                 // 378
      "class": "inc-button"                                                                                         // 379
    }, HTML.CharRef({                                                                                               // 380
      html: "&plus;",                                                                                               // 381
      str: "+"                                                                                                      // 382
    })), "\n      "), "\n    "), "\n  "), "\n"), "\n" ];                                                            // 383
  }), "\n", Spacebars.include(view.lookupTemplate("nav")) ];                                                        // 384
}));                                                                                                                // 385
                                                                                                                    // 386
Template.__checkName("inventoryitem");                                                                              // 387
Template["inventoryitem"] = new Template("Template.inventoryitem", (function() {                                    // 388
  var view = this;                                                                                                  // 389
  return HTML.LI({                                                                                                  // 390
    "class": "item"                                                                                                 // 391
  }, "\n", HTML.SPAN({                                                                                              // 392
    "class": "text"                                                                                                 // 393
  }, "Name: ", Blaze._TemplateWith(function() {                                                                     // 394
    return {                                                                                                        // 395
      collection: Spacebars.call("inventory"),                                                                      // 396
      field: Spacebars.call("name")                                                                                 // 397
    };                                                                                                              // 398
  }, function() {                                                                                                   // 399
    return Spacebars.include(view.lookupTemplate("editableText"));                                                  // 400
  })), "\n", HTML.P("\n\n", HTML.SPAN({                                                                             // 401
    "class": "text"                                                                                                 // 402
  }, "Key Words: ", Blaze._TemplateWith(function() {                                                                // 403
    return {                                                                                                        // 404
      collection: Spacebars.call("inventory"),                                                                      // 405
      field: Spacebars.call("keys")                                                                                 // 406
    };                                                                                                              // 407
  }, function() {                                                                                                   // 408
    return Spacebars.include(view.lookupTemplate("editableText"));                                                  // 409
  })), "\n", HTML.SPAN({                                                                                            // 410
    "class": "text"                                                                                                 // 411
  }, "Upgrade Slots: ", Blaze._TemplateWith(function() {                                                            // 412
    return {                                                                                                        // 413
      collection: Spacebars.call("inventory"),                                                                      // 414
      field: Spacebars.call("upgradeSlots")                                                                         // 415
    };                                                                                                              // 416
  }, function() {                                                                                                   // 417
    return Spacebars.include(view.lookupTemplate("editableText"));                                                  // 418
  })), "\n\n", HTML.SPAN({                                                                                          // 419
    "class": "text"                                                                                                 // 420
  }, "Weight: ", Blaze._TemplateWith(function() {                                                                   // 421
    return {                                                                                                        // 422
      collection: Spacebars.call("inventory"),                                                                      // 423
      field: Spacebars.call("weight")                                                                               // 424
    };                                                                                                              // 425
  }, function() {                                                                                                   // 426
    return Spacebars.include(view.lookupTemplate("editableText"));                                                  // 427
  })), "\n\n", HTML.SPAN({                                                                                          // 428
    "class": "text"                                                                                                 // 429
  }, "Value: ", Blaze._TemplateWith(function() {                                                                    // 430
    return {                                                                                                        // 431
      collection: Spacebars.call("inventory"),                                                                      // 432
      field: Spacebars.call("value")                                                                                // 433
    };                                                                                                              // 434
  }, function() {                                                                                                   // 435
    return Spacebars.include(view.lookupTemplate("editableText"));                                                  // 436
  })), "\n"), "\n", HTML.P({                                                                                        // 437
    "class": "text"                                                                                                 // 438
  }, "Description: ", Blaze._TemplateWith(function() {                                                              // 439
    return {                                                                                                        // 440
      collection: Spacebars.call("inventory"),                                                                      // 441
      field: Spacebars.call("desc")                                                                                 // 442
    };                                                                                                              // 443
  }, function() {                                                                                                   // 444
    return Spacebars.include(view.lookupTemplate("editableText"));                                                  // 445
  })), HTML.Raw('\n<button class="edit">EDIT</button>\n<button class="delete">&times;</button>\n'));                // 446
}));                                                                                                                // 447
                                                                                                                    // 448
Template.__checkName("nav");                                                                                        // 449
Template["nav"] = new Template("Template.nav", (function() {                                                        // 450
  var view = this;                                                                                                  // 451
  return HTML.Raw('<div class="row">\n  <div class="col-md-12">\n  <a href="/Details" class="btn btn-default" role="button">Details</a>\n  <a href="/Equipment" class="btn btn-default" role="button">Equip</a>\n  <a href="/Sidebag" class="btn btn-default" role="button">Sidebag</a>\n  <!-- <a href="/Extras" class="btn btn-default" role="button">extras</a>\n  <a href="/Effects" class="btn btn-default" role="button">effects</a>\n  <a href="/Abilities" class="btn btn-default" role="button">Abilities</a> -->\n  </div>\n</div>');
}));                                                                                                                // 453
                                                                                                                    // 454
Template.__checkName("Equipment");                                                                                  // 455
Template["Equipment"] = new Template("Template.Equipment", (function() {                                            // 456
  var view = this;                                                                                                  // 457
  return [ Spacebars.With(function() {                                                                              // 458
    return Spacebars.call(view.lookup("inventory"));                                                                // 459
  }, function() {                                                                                                   // 460
    return [ "\n", HTML.DIR({                                                                                       // 461
      "class": "inventoryView"                                                                                      // 462
    }, "\n    ", HTML.H3("Inventory ", HTML.BUTTON({                                                                // 463
      "class": " btn btn-default newitem"                                                                           // 464
    }, HTML.CharRef({                                                                                               // 465
      html: "&plus;",                                                                                               // 466
      str: "+"                                                                                                      // 467
    }), " New Item")), "\n\n      ", HTML.UL("\n          ", Blaze.Each(function() {                                // 468
      return Spacebars.call(view.lookup("inventory"));                                                              // 469
    }, function() {                                                                                                 // 470
      return [ "\n          ", Spacebars.include(view.lookupTemplate("inventoryitem")), "\n          " ];           // 471
    }), "\n      "), "\n    "), "\n    " ];                                                                         // 472
  }), "\n    ", Spacebars.With(function() {                                                                         // 473
    return Spacebars.call(view.lookup("itemWeight"));                                                               // 474
  }, function() {                                                                                                   // 475
    return [ "\n    ", HTML.P({                                                                                     // 476
      id: "weight"                                                                                                  // 477
    }, "Total Weight: ", Blaze.View("lookup:itemWeight", function() {                                               // 478
      return Spacebars.mustache(view.lookup("itemWeight"));                                                         // 479
    })), "\n    " ];                                                                                                // 480
  }), "\n  ", Spacebars.include(view.lookupTemplate("nav")) ];                                                      // 481
}));                                                                                                                // 482
                                                                                                                    // 483
Template.__checkName("sidebag");                                                                                    // 484
Template["sidebag"] = new Template("Template.sidebag", (function() {                                                // 485
  var view = this;                                                                                                  // 486
  return [ Spacebars.With(function() {                                                                              // 487
    return Spacebars.call(view.lookup("inventory"));                                                                // 488
  }, function() {                                                                                                   // 489
    return [ "\n", HTML.DIR({                                                                                       // 490
      "class": "container"                                                                                          // 491
    }, "\n    ", HTML.H3("Sidebag ", HTML.BUTTON({                                                                  // 492
      "class": "btn btn-default newitem"                                                                            // 493
    }, HTML.CharRef({                                                                                               // 494
      html: "&plus;",                                                                                               // 495
      str: "+"                                                                                                      // 496
    }), " New Item")), "\n\n      ", HTML.UL("\n          ", Blaze.Each(function() {                                // 497
      return Spacebars.call(view.lookup("inventory"));                                                              // 498
    }, function() {                                                                                                 // 499
      return [ "\n          ", Spacebars.include(view.lookupTemplate("sidebagItem")), "\n          " ];             // 500
    }), "\n      "), "\n    "), "\n    " ];                                                                         // 501
  }), "\n  ", Spacebars.include(view.lookupTemplate("nav")) ];                                                      // 502
}));                                                                                                                // 503
                                                                                                                    // 504
Template.__checkName("sidebagItem");                                                                                // 505
Template["sidebagItem"] = new Template("Template.sidebagItem", (function() {                                        // 506
  var view = this;                                                                                                  // 507
  return HTML.DIV({                                                                                                 // 508
    "class": "row"                                                                                                  // 509
  }, "\n", HTML.DIV({                                                                                               // 510
    "class": "col-md-6"                                                                                             // 511
  }, "\n", HTML.DL("\n", HTML.DT({                                                                                  // 512
    "class": "text"                                                                                                 // 513
  }, Blaze._TemplateWith(function() {                                                                               // 514
    return {                                                                                                        // 515
      collection: Spacebars.call("sidebag"),                                                                        // 516
      field: Spacebars.call("name")                                                                                 // 517
    };                                                                                                              // 518
  }, function() {                                                                                                   // 519
    return Spacebars.include(view.lookupTemplate("editableText"));                                                  // 520
  }), " ", HTML.SPAN(" ct: ", Blaze._TemplateWith(function() {                                                      // 521
    return {                                                                                                        // 522
      collection: Spacebars.call("sidebag"),                                                                        // 523
      field: Spacebars.call("count")                                                                                // 524
    };                                                                                                              // 525
  }, function() {                                                                                                   // 526
    return Spacebars.include(view.lookupTemplate("editableText"));                                                  // 527
  }))), "\n  ", HTML.DD(Blaze._TemplateWith(function() {                                                            // 528
    return {                                                                                                        // 529
      collection: Spacebars.call("sidebag"),                                                                        // 530
      field: Spacebars.call("desc")                                                                                 // 531
    };                                                                                                              // 532
  }, function() {                                                                                                   // 533
    return Spacebars.include(view.lookupTemplate("editableText"));                                                  // 534
  })), "\n"), "\n"), HTML.Raw('\n<div class="col-md-4">\n<button class=" btn delete">&times;</button>\n</div>\n'));
}));                                                                                                                // 536
                                                                                                                    // 537
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"char-list.js":["meteor/templating","../api/brimChar.js","./char-list.html",function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/ui/char-list.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _templating = require('meteor/templating');                                                                     // 1
                                                                                                                    //
var _brimChar = require('../api/brimChar.js');                                                                      // 2
                                                                                                                    //
require('./char-list.html');                                                                                        // 7
                                                                                                                    //
// # Destroy old editable if it exists                                                                              //
                                                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
//                                inventory Helpers and Events                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
                                                                                                                    //
_templating.Template.main.helpers({ //try clist                                                                     // 19
                                                                                                                    //
  Characters: function () {                                                                                         // 20
    function Characters() {                                                                                         //
      return _brimChar.Characters.find({}, { sort: { createdAt: +1 } });                                            // 21
    }                                                                                                               //
                                                                                                                    //
    return Characters;                                                                                              //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.main.events({                                                                                  // 25
  'click .clear': function () {                                                                                     // 27
    function clickClear() {}                                                                                        //
                                                                                                                    //
    return clickClear;                                                                                              //
  }(),                                                                                                              //
  'click .save': function () {                                                                                      // 31
    function clickSave(event) {                                                                                     //
      //prevent defaulting submit                                                                                   //
      event.preventDefault();                                                                                       // 33
                                                                                                                    //
      var name = document.getElementById('name').value;                                                             // 35
      var type = document.getElementById('type').value;                                                             // 36
      //const type = target.type.value;                                                                             //
      var tempCharacter = new person(name, type);                                                                   // 31
      // var tempInv = new invBuild();                                                                              //
                                                                                                                    //
      // inventorydb.insert({                                                                                       //
      //   owner: name,                                                                                             //
      //   createdAt: new Date(),                                                                                   //
      //   name: "item",                                                                                            //
                                                                                                                    //
      // });                                                                                                        //
      //Insert new char data to collection characters (in brimChar.js)                                              //
      _brimChar.Characters.insert(tempCharacter, {                                                                  // 31
        // name: tex                                                                                                //
        // createdAt: new Date(),                                                                                   //
      });                                                                                                           //
                                                                                                                    //
      alert("Your Character: " + name + " has been saved!");                                                        // 53
                                                                                                                    //
      //clear name from input                                                                                       //
      // target.name.value = '';                                                                                    //
      //target.class.value = '';                                                                                    //
                                                                                                                    //
      //alert(tempCharacter.getInfo());                                                                             //
      document.getElementById('name').value = "";                                                                   // 31
    }                                                                                                               //
                                                                                                                    //
    return clickSave;                                                                                               //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
//                                charlist Helpers and Events                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
                                                                                                                    //
_templating.Template.charlist.helpers({                                                                             // 70
  // tempchar() {                                                                                                   //
  //  	return Characters.findOne({name});                                                                           //
  //  },                                                                                                            //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.charlist.events({                                                                              // 76
  // 'click .toggle-checked'() {                                                                                    //
  //   // Set the checked property to the opposite of its current value                                             //
  //   Tasks.update(this._id, {                                                                                     //
  //     $set: { checked: ! this.checked },                                                                         //
  //   });                                                                                                          //
  // },                                                                                                             //
                                                                                                                    //
  'click .delete': function () {                                                                                    // 83
    function clickDelete() {                                                                                        //
                                                                                                                    //
      _brimChar.Characters.remove(this._id);                                                                        // 85
    }                                                                                                               //
                                                                                                                    //
    return clickDelete;                                                                                             //
  }(),                                                                                                              //
  'click .edit': function () {                                                                                      // 88
    function clickEdit() {                                                                                          //
                                                                                                                    //
      _brimChar.Characters.update(this._id, {                                                                       // 90
        $set: { activeChar: true }                                                                                  // 91
      });                                                                                                           //
                                                                                                                    //
      FlowRouter.go('/Details');                                                                                    // 94
    }                                                                                                               //
                                                                                                                    //
    return clickEdit;                                                                                               //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
//                                charinfo Helpers and Events                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
                                                                                                                    //
_templating.Template.charinfo.onCreated(function () {                                                               // 102
  var self = this;                                                                                                  // 103
  self.autorun(function () {                                                                                        // 104
    self.subscribe('Characters');                                                                                   // 105
  });                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.charinfo.helpers({                                                                             // 109
  activeCharacter: function () {                                                                                    // 111
    function activeCharacter() {                                                                                    //
      var output;                                                                                                   // 112
      var cursor = _brimChar.Characters.find();                                                                     // 113
      cursor.forEach(function (doc) {                                                                               // 114
        if (doc.activeChar == true) {                                                                               // 115
          output = doc;                                                                                             // 116
        }                                                                                                           //
      });                                                                                                           //
      return output;                                                                                                // 119
    }                                                                                                               //
                                                                                                                    //
    return activeCharacter;                                                                                         //
  }(),                                                                                                              //
                                                                                                                    //
                                                                                                                    //
  // inventory() {                                                                                                  //
  //  var char = activeCharacter();                                                                                 //
  //  var inv = inventorydb.find({owner: this._id});                                                                //
  //  return inv;                                                                                                   //
  // },                                                                                                             //
                                                                                                                    //
  // returns all keys and props of object                                                                           //
  stat: function () {                                                                                               // 129
    function stat() {                                                                                               //
      var atts = [];                                                                                                // 130
      var char = activeCharacter2();                                                                                // 131
      for (var key in meteorBabelHelpers.sanitizeForInObject(char)) {                                               // 132
        var obj = char[key];                                                                                        // 133
        for (var prop in meteorBabelHelpers.sanitizeForInObject(obj)) {                                             // 134
          atts.push({ key: prop, prop: obj[prop] });                                                                // 135
        };                                                                                                          //
      };                                                                                                            //
      return atts;                                                                                                  // 138
    }                                                                                                               //
                                                                                                                    //
    return stat;                                                                                                    //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.charinfo.events({                                                                              // 144
  'click .back': function () {                                                                                      // 146
    function clickBack() {                                                                                          //
      _brimChar.Characters.update(this._id, {                                                                       // 147
        $set: { activeChar: false }                                                                                 // 148
      });                                                                                                           //
      FlowRouter.go('home');                                                                                        // 150
    }                                                                                                               //
                                                                                                                    //
    return clickBack;                                                                                               //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
//                                Equipment Helpers and Events                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
                                                                                                                    //
// 'click td'(event) {                                                                                              //
//   var target = event.target;                                                                                     //
//   var self = target.innerHTML;                                                                                   //
//   var res = prompt('new val');                                                                                   //
                                                                                                                    //
//    Characters.update(this._id,{                                                                                  //
                                                                                                                    //
//    });                                                                                                           //
// },                                                                                                               //
                                                                                                                    //
_templating.Template.Equipment.helpers({                                                                            // 170
  inventory: function () {                                                                                          // 171
    function inventory() {                                                                                          //
                                                                                                                    //
      var char = activeCharacter();                                                                                 // 173
      var inv = _brimChar.inventorydb.find({ owner: this._id });                                                    // 174
      return inv;                                                                                                   // 175
    }                                                                                                               //
                                                                                                                    //
    return inventory;                                                                                               //
  }(),                                                                                                              //
  itemWeight: function () {                                                                                         // 178
    function itemWeight() {                                                                                         //
                                                                                                                    //
      var char = activeCharacter();                                                                                 // 180
      var count = 0;                                                                                                // 181
      var max = Number(char.maxWeight);                                                                             // 182
      var inv = _brimChar.inventorydb.find({ owner: this._id });                                                    // 183
      var obj = inv.fetch();                                                                                        // 184
      var curr;                                                                                                     // 185
                                                                                                                    //
      for (var items in meteorBabelHelpers.sanitizeForInObject(obj)) {                                              // 187
        curr = Number(obj[items].weight);                                                                           // 188
        count += curr;                                                                                              // 189
      }                                                                                                             //
      if (count >= max) {                                                                                           // 191
        return count + " / " + char.maxWeight + " Your Character is overweight !!!";                                // 192
      } else {                                                                                                      //
        return count + " / " + char.maxWeight;                                                                      // 194
      }                                                                                                             //
    }                                                                                                               //
                                                                                                                    //
    return itemWeight;                                                                                              //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.Equipment.events({                                                                             // 200
  'click .newitem': function () {                                                                                   // 201
    function clickNewitem() {                                                                                       //
                                                                                                                    //
      var itemName = prompt("item name?");                                                                          // 203
      var slots = prompt("how many upgrade slots?");                                                                // 204
      var weight = prompt("weight of " + itemName + "?");                                                           // 205
      var val = prompt("worth of " + itemName + "?");                                                               // 206
      var desc = prompt("Describe " + itemName + ":");                                                              // 207
      var itemres = basicInv(this._id, itemName, slots, weight, val, desc);                                         // 208
      _brimChar.inventorydb.insert(itemres, {});                                                                    // 209
    }                                                                                                               //
                                                                                                                    //
    return clickNewitem;                                                                                            //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
//                                inventory Helpers and Events                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
                                                                                                                    //
_templating.Template.inventoryitem.helpers({});                                                                     // 220
                                                                                                                    //
_templating.Template.inventoryitem.events({                                                                         // 224
  'click .delete': function () {                                                                                    // 226
    function clickDelete() {                                                                                        //
      _brimChar.inventorydb.remove(this._id);                                                                       // 227
    }                                                                                                               //
                                                                                                                    //
    return clickDelete;                                                                                             //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
//                                sidebag Helpers and Events                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
                                                                                                                    //
_templating.Template.sidebag.helpers({                                                                              // 237
  inventory: function () {                                                                                          // 238
    function inventory() {                                                                                          //
                                                                                                                    //
      var char = activeCharacter();                                                                                 // 240
      var inv = _brimChar.sidebagdb.find({ owner: this._id });                                                      // 241
      return inv;                                                                                                   // 242
    }                                                                                                               //
                                                                                                                    //
    return inventory;                                                                                               //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.sidebag.events({                                                                               // 248
  'click .newitem': function () {                                                                                   // 249
    function clickNewitem() {                                                                                       //
                                                                                                                    //
      var itemName = prompt("item name?");                                                                          // 251
      var count = prompt("How many of " + itemName + " are there ?");                                               // 252
      var desc = prompt("Describe " + itemName + ":");                                                              // 253
      var itemres = basicSideBag(this._id, itemName, "sidebag", count, desc);                                       // 254
      _brimChar.sidebagdb.insert(itemres, {});                                                                      // 255
    }                                                                                                               //
                                                                                                                    //
    return clickNewitem;                                                                                            //
  }(),                                                                                                              //
  'click .delete': function () {                                                                                    // 260
    function clickDelete() {                                                                                        //
      _brimChar.sidebagdb.remove(this._id);                                                                         // 261
    }                                                                                                               //
                                                                                                                    //
    return clickDelete;                                                                                             //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
//                                Classes and Functions                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////     //
                                                                                                                    //
function person(name, type) {                                                                                       // 270
  // var invBuild = invBuild();                                                                                     //
  var doc = {                                                                                                       // 272
    name: name,                                                                                                     // 273
    'class': type,                                                                                                  // 274
    lvl: 1,                                                                                                         // 275
    inventory: name,                                                                                                // 276
    agility: 1,                                                                                                     // 277
    strength: 1,                                                                                                    // 278
    health: 10,                                                                                                     // 279
    defense: 5,                                                                                                     // 280
    armor: 0,                                                                                                       // 281
    cunning: 0,                                                                                                     // 282
    lore: 0,                                                                                                        // 283
    sanity: 0,                                                                                                      // 284
    willpower: 0,                                                                                                   // 285
    Sarmor: 0,                                                                                                      // 286
    spirit: 0,                                                                                                      // 287
    luck: 0,                                                                                                        // 288
    melee: 0,                                                                                                       // 289
    combat: 0,                                                                                                      // 290
    range: 0,                                                                                                       // 291
    maxGrit: 0,                                                                                                     // 292
    initiative: 0,                                                                                                  // 293
    corruption: 1,                                                                                                  // 294
    darkStone: 0,                                                                                                   // 295
    maxWeight: 10,                                                                                                  // 296
    gold: 100,                                                                                                      // 297
    exp: 1000,                                                                                                      // 298
    move: 1                                                                                                         // 299
  };                                                                                                                //
  return doc;                                                                                                       // 301
}                                                                                                                   //
                                                                                                                    //
function basicInv(owner, name, slots, weight, val, desc) {                                                          // 304
  var item = {                                                                                                      // 305
    "owner": owner,                                                                                                 // 306
    "name": name,                                                                                                   // 307
    "type": "equipment",                                                                                            // 308
    "keys": "item",                                                                                                 // 309
    "upgradeSlots": slots,                                                                                          // 310
    "weight": weight,                                                                                               // 311
    "value": val,                                                                                                   // 312
    "desc": desc                                                                                                    // 313
  };                                                                                                                //
  return item;                                                                                                      // 315
};                                                                                                                  //
                                                                                                                    //
function basicSideBag(owner, name, type, count, desc) {                                                             // 318
                                                                                                                    //
  var item = {                                                                                                      // 320
    "owner": owner,                                                                                                 // 321
    "name": name,                                                                                                   // 322
    "type": type,                                                                                                   // 323
    "count": count,                                                                                                 // 324
    "desc": desc                                                                                                    // 325
  };                                                                                                                //
  return item;                                                                                                      // 327
};                                                                                                                  //
                                                                                                                    //
// function invBuild() {                                                                                            //
//   var item1 = new basicInv(this._id,"Mr. Sword");                                                                //
//   var item2 = new basicInv(this._id,"Shield");                                                                   //
//   var item3 = new basicInv(this._id,"Dagger");                                                                   //
//   var arr = [item1,item2,item3];                                                                                 //
//   return arr;                                                                                                    //
// };                                                                                                               //
                                                                                                                    //
function activeCharacter() {                                                                                        // 338
  var output;                                                                                                       // 339
  var cursor = _brimChar.Characters.find();                                                                         // 340
  cursor.forEach(function (doc) {                                                                                   // 341
    if (doc.activeChar == true) {                                                                                   // 342
      output = doc;                                                                                                 // 343
    }                                                                                                               //
  });                                                                                                               //
  return output;                                                                                                    // 346
};                                                                                                                  //
                                                                                                                    //
function activeCharacter2() {                                                                                       // 349
  var output;                                                                                                       // 350
  var cursor = _brimChar.Characters.find({ activeChar: true });                                                     // 351
  output = cursor.fetch();                                                                                          // 352
  return output;                                                                                                    // 353
};                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"api":{"brimChar.js":["meteor/mongo",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// imports/api/brimChar.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
exports.__esModule = true;                                                                                          //
exports.extrasdb = exports.sidebagdb = exports.inventorydb = exports.Characters = undefined;                        //
                                                                                                                    //
var _mongo = require('meteor/mongo');                                                                               // 1
                                                                                                                    //
var Characters = exports.Characters = new _mongo.Mongo.Collection('characters');                                    // 3
var inventorydb = exports.inventorydb = new _mongo.Mongo.Collection('inventory');                                   // 4
var sidebagdb = exports.sidebagdb = new _mongo.Mongo.Collection('sidebag');                                         // 5
var extrasdb = exports.extrasdb = new _mongo.Mongo.Collection('extras');                                            // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"lib":{"routes.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// lib/routes.js                                                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
FlowRouter.route('/', {                                                                                             // 1
	name: 'home',                                                                                                      // 2
	action: function () {                                                                                              // 3
		function action() {                                                                                               //
			BlazeLayout.render('main');                                                                                      // 4
		}                                                                                                                 //
                                                                                                                    //
		return action;                                                                                                    //
	}()                                                                                                                //
});                                                                                                                 //
                                                                                                                    //
FlowRouter.route('/Details', {                                                                                      // 9
	name: 'Details',                                                                                                   // 10
	action: function () {                                                                                              // 11
		function action() {                                                                                               //
			BlazeLayout.render('charinfo');                                                                                  // 12
		}                                                                                                                 //
                                                                                                                    //
		return action;                                                                                                    //
	}()                                                                                                                //
});                                                                                                                 //
                                                                                                                    //
FlowRouter.route('/Equipment', {                                                                                    // 17
	name: 'Equipment',                                                                                                 // 18
	action: function () {                                                                                              // 19
		function action() {                                                                                               //
			BlazeLayout.render('Equipment');                                                                                 // 20
		}                                                                                                                 //
                                                                                                                    //
		return action;                                                                                                    //
	}()                                                                                                                //
});                                                                                                                 //
                                                                                                                    //
FlowRouter.route('/Sidebag', {                                                                                      // 25
	name: 'Sidebag',                                                                                                   // 26
	action: function () {                                                                                              // 27
		function action() {                                                                                               //
			BlazeLayout.render('sidebag');                                                                                   // 28
		}                                                                                                                 //
                                                                                                                    //
		return action;                                                                                                    //
	}()                                                                                                                //
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"main.js":["../imports/ui/char-list.js",function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.js                                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
require('../imports/ui/char-list.js');                                                                              // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./lib/routes.js");
require("./client/main.js");