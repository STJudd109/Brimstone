var require = meteorInstall({"imports":{"ui":{"char-list.html":["./template.char-list.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/char-list.html                                                                                    //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.exports = require("./template.char-list.js");                                                            // 1
                                                                                                                // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.char-list.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/template.char-list.js                                                                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("main");                                                                                   // 2
Template["main"] = new Template("Template.main", (function() {                                                  // 3
  var view = this;                                                                                              // 4
  return HTML.DIV({                                                                                             // 5
    "class": "container-fluid"                                                                                  // 6
  }, HTML.Raw('\n  <header class="row">\n      <h1 class="text-center">Brimstone</h1>\n\n      <form class="form-inline">\n      <div class="form-group">\n        <input class="form-control" id="name" type="text" name="name" placeholder="Add a new character">\n        <select class="form-control" id="type" type="text" name="type"> \n         <option>Warrior</option>\n        <option>Mage</option>  \n        <option>Bowman</option>\n        <option>Theif</option>\n        <option>Darkness</option>\n        </select>\n        \n        <button class="save btn btn-default">&plus;</button>\n        </div>\n      </form>\n    </header>\n  \n      '), Blaze.Each(function() {
    return Spacebars.call(view.lookup("Characters"));                                                           // 8
  }, function() {                                                                                               // 9
    return [ "\n        ", Spacebars.include(view.lookupTemplate("charlist")), "\n      " ];                    // 10
  }), "\n  \n");                                                                                                // 11
}));                                                                                                            // 12
                                                                                                                // 13
Template.__checkName("charlist");                                                                               // 14
Template["charlist"] = new Template("Template.charlist", (function() {                                          // 15
  var view = this;                                                                                              // 16
  return HTML.DIV({                                                                                             // 17
    "class": "row text-center"                                                                                  // 18
  }, "\n  ", HTML.DL({                                                                                          // 19
    "class": "col-md-8"                                                                                         // 20
  }, "\n", HTML.DT(HTML.H4(Blaze.View("lookup:name", function() {                                               // 21
    return Spacebars.mustache(view.lookup("name"));                                                             // 22
  }), " lvl: ", Blaze.View("lookup:lvl", function() {                                                           // 23
    return Spacebars.mustache(view.lookup("lvl"));                                                              // 24
  }))), "\n", HTML.DD({                                                                                         // 25
    "class": "text"                                                                                             // 26
  }, Blaze.View("lookup:class", function() {                                                                    // 27
    return Spacebars.mustache(view.lookup("class"));                                                            // 28
  })), "\n  "), HTML.Raw('\n  <div class="col-md-4"> \n<button class="edit">Edit</button>\n<button class="delete">&times;</button>\n</div>\n  '));
}));                                                                                                            // 30
                                                                                                                // 31
Template.__checkName("charinfo");                                                                               // 32
Template["charinfo"] = new Template("Template.charinfo", (function() {                                          // 33
  var view = this;                                                                                              // 34
  return [ Spacebars.With(function() {                                                                          // 35
    return Spacebars.call(view.lookup("activeCharacter"));                                                      // 36
  }, function() {                                                                                               // 37
    return [ "\n", HTML.DIV({                                                                                   // 38
      "class": "vertical-center"                                                                                // 39
    }, "\n", HTML.NAV({                                                                                         // 40
      "class": "navbar-default navbar-fixed-top"                                                                // 41
    }, "\n", HTML.DIV({                                                                                         // 42
      "class": "container-fluid"                                                                                // 43
    }, "\n", HTML.DIV({                                                                                         // 44
      "class": "row"                                                                                            // 45
    }, "\n    ", HTML.DIV({                                                                                     // 46
      "class": "col-md-12"                                                                                      // 47
    }, "\n      ", HTML.H3({                                                                                    // 48
      "class": "text-center"                                                                                    // 49
    }, "\n        Hero Details\n      "), "\n    "), "\n  "), "\n"), "\n"), "\n", HTML.Comment(' <div class="vertical-center"> '), "\n", HTML.DIV({
      "class": "container"                                                                                      // 51
    }, "\n  ", HTML.DIV({                                                                                       // 52
      "class": "row"                                                                                            // 53
    }, "\n    ", HTML.DIV({                                                                                     // 54
      "class": "col-md-4 pull-left"                                                                             // 55
    }, "\n      ", HTML.H4({                                                                                    // 56
      "class": "text-center"                                                                                    // 57
    }, "\n        ", Blaze._TemplateWith(function() {                                                           // 58
      return {                                                                                                  // 59
        collection: Spacebars.call("characters"),                                                               // 60
        field: Spacebars.call("name")                                                                           // 61
      };                                                                                                        // 62
    }, function() {                                                                                             // 63
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 64
    }), "\n      "), "\n    "), "\n    ", HTML.DIV({                                                            // 65
      "class": "col-md-4 pull-right"                                                                            // 66
    }, "\n      ", HTML.H4({                                                                                    // 67
      "class": "text-center"                                                                                    // 68
    }, "\n        Class: ", Blaze._TemplateWith(function() {                                                    // 69
      return {                                                                                                  // 70
        collection: Spacebars.call("characters"),                                                               // 71
        field: Spacebars.call("class")                                                                          // 72
      };                                                                                                        // 73
    }, function() {                                                                                             // 74
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 75
    }), "\n      "), "\n    "), "\n  "), "\n  ", HTML.DIV({                                                     // 76
      "class": "row"                                                                                            // 77
    }, "\n    ", HTML.DIV({                                                                                     // 78
      "class": "col-md-4 pull-left"                                                                             // 79
    }, "\n      ", HTML.H4({                                                                                    // 80
      "class": "text-center"                                                                                    // 81
    }, "\n        ", Blaze._TemplateWith(function() {                                                           // 82
      return {                                                                                                  // 83
        collection: Spacebars.call("characters"),                                                               // 84
        field: Spacebars.call("keys")                                                                           // 85
      };                                                                                                        // 86
    }, function() {                                                                                             // 87
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 88
    }), "\n      "), "\n    "), "\n    ", HTML.DIV({                                                            // 89
      "class": "col-md-4 pull-right"                                                                            // 90
    }, "\n      ", HTML.H4({                                                                                    // 91
      "class": "text-center"                                                                                    // 92
    }, "\n        Lvl: ", Blaze._TemplateWith(function() {                                                      // 93
      return {                                                                                                  // 94
        collection: Spacebars.call("characters"),                                                               // 95
        field: Spacebars.call("lvl")                                                                            // 96
      };                                                                                                        // 97
    }, function() {                                                                                             // 98
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 99
    }), "\n      "), "\n    "), "\n  "), "\n  \n", HTML.DIV({                                                   // 100
      "class": "row"                                                                                            // 101
    }, "\n", HTML.DIV({                                                                                         // 102
      "class": "table"                                                                                          // 103
    }, "\n    ", HTML.TABLE({                                                                                   // 104
      "class": "table table-bordered text-center"                                                               // 105
    }, "\n  ", HTML.THEAD("\n    ", HTML.TR({                                                                   // 106
      "class": "text-center"                                                                                    // 107
    }, "\n      ", HTML.TH("Stats"), "\n    "), "\n  "), "\n  ", HTML.TBODY("\n  ", HTML.TR({                   // 108
      "class": "active"                                                                                         // 109
    }, "\n      ", HTML.TD({                                                                                    // 110
      "class": "text-center"                                                                                    // 111
    }, "agility"), "\n      ", HTML.TD({                                                                        // 112
      "class": "text-center"                                                                                    // 113
    }, "cunning"), "\n      ", HTML.TD({                                                                        // 114
      "class": "text-center"                                                                                    // 115
    }, "spirit"), "\n      ", HTML.TD({                                                                         // 116
      "class": "text-center"                                                                                    // 117
    }, "maxGrit"), "\n  "), "\n    ", HTML.TR("\n      ", HTML.TD({                                             // 118
      "class": "agility-cell"                                                                                   // 119
    }, Blaze._TemplateWith(function() {                                                                         // 120
      return {                                                                                                  // 121
        collection: Spacebars.call("characters"),                                                               // 122
        field: Spacebars.call("agility")                                                                        // 123
      };                                                                                                        // 124
    }, function() {                                                                                             // 125
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 126
    })), "\n      ", HTML.TD({                                                                                  // 127
      "class": "cunning-cell"                                                                                   // 128
    }, Blaze._TemplateWith(function() {                                                                         // 129
      return {                                                                                                  // 130
        collection: Spacebars.call("characters"),                                                               // 131
        field: Spacebars.call("cunning")                                                                        // 132
      };                                                                                                        // 133
    }, function() {                                                                                             // 134
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 135
    })), "\n      ", HTML.TD({                                                                                  // 136
      "class": "spirit-cell"                                                                                    // 137
    }, Blaze._TemplateWith(function() {                                                                         // 138
      return {                                                                                                  // 139
        collection: Spacebars.call("characters"),                                                               // 140
        field: Spacebars.call("spirit")                                                                         // 141
      };                                                                                                        // 142
    }, function() {                                                                                             // 143
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 144
    })), "\n      ", HTML.TD({                                                                                  // 145
      "class": "maxGrit-cell"                                                                                   // 146
    }, Blaze._TemplateWith(function() {                                                                         // 147
      return {                                                                                                  // 148
        collection: Spacebars.call("characters"),                                                               // 149
        field: Spacebars.call("maxGrit")                                                                        // 150
      };                                                                                                        // 151
    }, function() {                                                                                             // 152
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 153
    })), "\n    "), "\n    ", HTML.TR({                                                                         // 154
      "class": "active"                                                                                         // 155
    }, " \n      ", HTML.TD({                                                                                   // 156
      "class": "agility-cell"                                                                                   // 157
    }, "strength"), "\n      ", HTML.TD({                                                                       // 158
      "class": "cunning-cell"                                                                                   // 159
    }, "lore"), "\n      ", HTML.TD({                                                                           // 160
      "class": "spirit-cell"                                                                                    // 161
    }, "luck"), "\n      ", HTML.TD({                                                                           // 162
      "class": "maxGrit-cell"                                                                                   // 163
    }, "initiative"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                        // 164
      "class": "agility-cell"                                                                                   // 165
    }, Blaze._TemplateWith(function() {                                                                         // 166
      return {                                                                                                  // 167
        collection: Spacebars.call("characters"),                                                               // 168
        field: Spacebars.call("strength")                                                                       // 169
      };                                                                                                        // 170
    }, function() {                                                                                             // 171
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 172
    })), "\n      ", HTML.TD({                                                                                  // 173
      "class": "cunning-cell"                                                                                   // 174
    }, Blaze._TemplateWith(function() {                                                                         // 175
      return {                                                                                                  // 176
        collection: Spacebars.call("characters"),                                                               // 177
        field: Spacebars.call("lore")                                                                           // 178
      };                                                                                                        // 179
    }, function() {                                                                                             // 180
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 181
    })), "\n      ", HTML.TD({                                                                                  // 182
      "class": "spirit-cell"                                                                                    // 183
    }, Blaze._TemplateWith(function() {                                                                         // 184
      return {                                                                                                  // 185
        collection: Spacebars.call("characters"),                                                               // 186
        field: Spacebars.call("luck")                                                                           // 187
      };                                                                                                        // 188
    }, function() {                                                                                             // 189
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 190
    })), "\n      ", HTML.TD({                                                                                  // 191
      "class": "maxGrit-cell"                                                                                   // 192
    }, Blaze._TemplateWith(function() {                                                                         // 193
      return {                                                                                                  // 194
        collection: Spacebars.call("characters"),                                                               // 195
        field: Spacebars.call("initiative")                                                                     // 196
      };                                                                                                        // 197
    }, function() {                                                                                             // 198
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 199
    })), "\n    "), "\n    ", HTML.TR({                                                                         // 200
      "class": "active"                                                                                         // 201
    }, "\n      ", HTML.TD({                                                                                    // 202
      "class": "agility-cell"                                                                                   // 203
    }, "health"), "\n      ", HTML.TD({                                                                         // 204
      "class": "cunning-cell"                                                                                   // 205
    }, "sanity"), "\n      ", HTML.TD({                                                                         // 206
      "class": "spirit-cell"                                                                                    // 207
    }, "melee"), "\n      ", HTML.TD({                                                                          // 208
      "class": "maxGrit-cell"                                                                                   // 209
    }, "corruption"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                        // 210
      "class": "agility-cell"                                                                                   // 211
    }, Blaze._TemplateWith(function() {                                                                         // 212
      return {                                                                                                  // 213
        collection: Spacebars.call("characters"),                                                               // 214
        field: Spacebars.call("health")                                                                         // 215
      };                                                                                                        // 216
    }, function() {                                                                                             // 217
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 218
    })), "\n      ", HTML.TD({                                                                                  // 219
      "class": "cunning-cell"                                                                                   // 220
    }, Blaze._TemplateWith(function() {                                                                         // 221
      return {                                                                                                  // 222
        collection: Spacebars.call("characters"),                                                               // 223
        field: Spacebars.call("sanity")                                                                         // 224
      };                                                                                                        // 225
    }, function() {                                                                                             // 226
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 227
    })), "\n      ", HTML.TD({                                                                                  // 228
      "class": "spirit-cell"                                                                                    // 229
    }, Blaze._TemplateWith(function() {                                                                         // 230
      return {                                                                                                  // 231
        collection: Spacebars.call("characters"),                                                               // 232
        field: Spacebars.call("melee")                                                                          // 233
      };                                                                                                        // 234
    }, function() {                                                                                             // 235
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 236
    })), "\n      ", HTML.TD({                                                                                  // 237
      "class": "maxGrit-cell"                                                                                   // 238
    }, Blaze._TemplateWith(function() {                                                                         // 239
      return {                                                                                                  // 240
        collection: Spacebars.call("characters"),                                                               // 241
        field: Spacebars.call("corruption")                                                                     // 242
      };                                                                                                        // 243
    }, function() {                                                                                             // 244
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 245
    })), "\n    "), "\n    ", HTML.TR({                                                                         // 246
      "class": "active"                                                                                         // 247
    }, "\n      ", HTML.TD({                                                                                    // 248
      "class": "agility-cell"                                                                                   // 249
    }, "defense"), "\n      ", HTML.TD({                                                                        // 250
      "class": "cunning-cell"                                                                                   // 251
    }, "willpower"), "\n      ", HTML.TD({                                                                      // 252
      "class": "spirit-cell"                                                                                    // 253
    }, "combat"), "\n      ", HTML.TD({                                                                         // 254
      "class": "maxGrit-cell"                                                                                   // 255
    }, "darkStone"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                         // 256
      "class": "agility-cell"                                                                                   // 257
    }, Blaze._TemplateWith(function() {                                                                         // 258
      return {                                                                                                  // 259
        collection: Spacebars.call("characters"),                                                               // 260
        field: Spacebars.call("defense")                                                                        // 261
      };                                                                                                        // 262
    }, function() {                                                                                             // 263
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 264
    })), "\n      ", HTML.TD({                                                                                  // 265
      "class": "cunning-cell"                                                                                   // 266
    }, Blaze._TemplateWith(function() {                                                                         // 267
      return {                                                                                                  // 268
        collection: Spacebars.call("characters"),                                                               // 269
        field: Spacebars.call("willpower")                                                                      // 270
      };                                                                                                        // 271
    }, function() {                                                                                             // 272
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 273
    })), "\n      ", HTML.TD({                                                                                  // 274
      "class": "spirit-cell"                                                                                    // 275
    }, Blaze._TemplateWith(function() {                                                                         // 276
      return {                                                                                                  // 277
        collection: Spacebars.call("characters"),                                                               // 278
        field: Spacebars.call("combat")                                                                         // 279
      };                                                                                                        // 280
    }, function() {                                                                                             // 281
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 282
    })), "\n      ", HTML.TD({                                                                                  // 283
      "class": "maxGrit-cell"                                                                                   // 284
    }, Blaze._TemplateWith(function() {                                                                         // 285
      return {                                                                                                  // 286
        collection: Spacebars.call("characters"),                                                               // 287
        field: Spacebars.call("darkStone")                                                                      // 288
      };                                                                                                        // 289
    }, function() {                                                                                             // 290
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 291
    })), "\n    "), "\n    ", HTML.TR({                                                                         // 292
      "class": "active"                                                                                         // 293
    }, "\n      ", HTML.TD({                                                                                    // 294
      "class": "agility-cell"                                                                                   // 295
    }, "armor"), "\n      ", HTML.TD({                                                                          // 296
      "class": "cunning-cell"                                                                                   // 297
    }, "Sarmor"), "\n      ", HTML.TD({                                                                         // 298
      "class": "spirit-cell"                                                                                    // 299
    }, "range"), "\n      ", HTML.TD({                                                                          // 300
      "class": "maxGrit-cell"                                                                                   // 301
    }, "maxWeight"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                         // 302
      "class": "agility-cell"                                                                                   // 303
    }, Blaze._TemplateWith(function() {                                                                         // 304
      return {                                                                                                  // 305
        collection: Spacebars.call("characters"),                                                               // 306
        field: Spacebars.call("armor")                                                                          // 307
      };                                                                                                        // 308
    }, function() {                                                                                             // 309
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 310
    })), "\n      ", HTML.TD({                                                                                  // 311
      "class": "cunning-cell"                                                                                   // 312
    }, Blaze._TemplateWith(function() {                                                                         // 313
      return {                                                                                                  // 314
        collection: Spacebars.call("characters"),                                                               // 315
        field: Spacebars.call("Sarmor")                                                                         // 316
      };                                                                                                        // 317
    }, function() {                                                                                             // 318
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 319
    })), "\n      ", HTML.TD({                                                                                  // 320
      "class": "spirit-cell"                                                                                    // 321
    }, Blaze._TemplateWith(function() {                                                                         // 322
      return {                                                                                                  // 323
        collection: Spacebars.call("characters"),                                                               // 324
        field: Spacebars.call("range")                                                                          // 325
      };                                                                                                        // 326
    }, function() {                                                                                             // 327
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 328
    })), "\n      ", HTML.TD({                                                                                  // 329
      "class": "maxGrit-cell"                                                                                   // 330
    }, Blaze._TemplateWith(function() {                                                                         // 331
      return {                                                                                                  // 332
        collection: Spacebars.call("characters"),                                                               // 333
        field: Spacebars.call("maxWeight")                                                                      // 334
      };                                                                                                        // 335
    }, function() {                                                                                             // 336
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 337
    })), "\n    "), "\n  "), "\n"), "\n"), "\n"), "\n\n  ", HTML.DIV({                                          // 338
      "class": "hero-extras"                                                                                    // 339
    }, "\n    ", HTML.DIV({                                                                                     // 340
      "class": "sub-container"                                                                                  // 341
    }, "\n      ", HTML.DIV({                                                                                   // 342
      "class": "gold"                                                                                           // 343
    }, "\n        ", HTML.DIV({                                                                                 // 344
      "class": "label"                                                                                          // 345
    }, "gold:"), "\n        ", HTML.DIV({                                                                       // 346
      "class": "value"                                                                                          // 347
    }, Blaze._TemplateWith(function() {                                                                         // 348
      return {                                                                                                  // 349
        collection: Spacebars.call("characters"),                                                               // 350
        field: Spacebars.call("gold")                                                                           // 351
      };                                                                                                        // 352
    }, function() {                                                                                             // 353
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 354
    })), "\n      "), "\n      ", HTML.DIV({                                                                    // 355
      "class": "exp"                                                                                            // 356
    }, "\n        ", HTML.DIV({                                                                                 // 357
      "class": "label"                                                                                          // 358
    }, "exp:"), "\n        ", HTML.DIV({                                                                        // 359
      "class": "value"                                                                                          // 360
    }, Blaze._TemplateWith(function() {                                                                         // 361
      return {                                                                                                  // 362
        collection: Spacebars.call("characters"),                                                               // 363
        field: Spacebars.call("exp")                                                                            // 364
      };                                                                                                        // 365
    }, function() {                                                                                             // 366
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 367
    })), "\n      "), "\n    "), "\n    ", HTML.DIV({                                                           // 368
      "class": "container"                                                                                      // 369
    }, "\n      ", HTML.DIV({                                                                                   // 370
      "class": "move"                                                                                           // 371
    }, "\n        ", HTML.DIV({                                                                                 // 372
      "class": "label"                                                                                          // 373
    }), "\n        ", HTML.DIV({                                                                                // 374
      "class": "value"                                                                                          // 375
    }), "\n        ", HTML.BUTTON({                                                                             // 376
      "class": "inc-button"                                                                                     // 377
    }, HTML.CharRef({                                                                                           // 378
      html: "&plus;",                                                                                           // 379
      str: "+"                                                                                                  // 380
    })), "\n      "), "\n    "), "\n  "), "\n"), "\n"), "\n" ];                                                 // 381
  }), "\n", Spacebars.include(view.lookupTemplate("nav")) ];                                                    // 382
}));                                                                                                            // 383
                                                                                                                // 384
Template.__checkName("inventoryitem");                                                                          // 385
Template["inventoryitem"] = new Template("Template.inventoryitem", (function() {                                // 386
  var view = this;                                                                                              // 387
  return HTML.LI({                                                                                              // 388
    "class": "item"                                                                                             // 389
  }, "\n", HTML.SPAN({                                                                                          // 390
    "class": "text"                                                                                             // 391
  }, "Name: ", Blaze._TemplateWith(function() {                                                                 // 392
    return {                                                                                                    // 393
      collection: Spacebars.call("inventory"),                                                                  // 394
      field: Spacebars.call("name")                                                                             // 395
    };                                                                                                          // 396
  }, function() {                                                                                               // 397
    return Spacebars.include(view.lookupTemplate("editableText"));                                              // 398
  })), "\n", HTML.P("\n\n", HTML.SPAN({                                                                         // 399
    "class": "text"                                                                                             // 400
  }, "Key Words: ", Blaze._TemplateWith(function() {                                                            // 401
    return {                                                                                                    // 402
      collection: Spacebars.call("inventory"),                                                                  // 403
      field: Spacebars.call("keys")                                                                             // 404
    };                                                                                                          // 405
  }, function() {                                                                                               // 406
    return Spacebars.include(view.lookupTemplate("editableText"));                                              // 407
  })), "\n", HTML.SPAN({                                                                                        // 408
    "class": "text"                                                                                             // 409
  }, "Upgrade Slots: ", Blaze._TemplateWith(function() {                                                        // 410
    return {                                                                                                    // 411
      collection: Spacebars.call("inventory"),                                                                  // 412
      field: Spacebars.call("upgradeSlots")                                                                     // 413
    };                                                                                                          // 414
  }, function() {                                                                                               // 415
    return Spacebars.include(view.lookupTemplate("editableText"));                                              // 416
  })), "\n\n", HTML.SPAN({                                                                                      // 417
    "class": "text"                                                                                             // 418
  }, "Weight: ", Blaze._TemplateWith(function() {                                                               // 419
    return {                                                                                                    // 420
      collection: Spacebars.call("inventory"),                                                                  // 421
      field: Spacebars.call("weight")                                                                           // 422
    };                                                                                                          // 423
  }, function() {                                                                                               // 424
    return Spacebars.include(view.lookupTemplate("editableText"));                                              // 425
  })), "\n\n", HTML.SPAN({                                                                                      // 426
    "class": "text"                                                                                             // 427
  }, "Value: ", Blaze._TemplateWith(function() {                                                                // 428
    return {                                                                                                    // 429
      collection: Spacebars.call("inventory"),                                                                  // 430
      field: Spacebars.call("value")                                                                            // 431
    };                                                                                                          // 432
  }, function() {                                                                                               // 433
    return Spacebars.include(view.lookupTemplate("editableText"));                                              // 434
  })), "\n"), "\n", HTML.P({                                                                                    // 435
    "class": "text"                                                                                             // 436
  }, "Description: ", Blaze._TemplateWith(function() {                                                          // 437
    return {                                                                                                    // 438
      collection: Spacebars.call("inventory"),                                                                  // 439
      field: Spacebars.call("desc")                                                                             // 440
    };                                                                                                          // 441
  }, function() {                                                                                               // 442
    return Spacebars.include(view.lookupTemplate("editableText"));                                              // 443
  })), HTML.Raw('\n<button class="edit">EDIT</button>\n<button class="delete">&times;</button>\n'));            // 444
}));                                                                                                            // 445
                                                                                                                // 446
Template.__checkName("nav");                                                                                    // 447
Template["nav"] = new Template("Template.nav", (function() {                                                    // 448
  var view = this;                                                                                              // 449
  return HTML.Raw('<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">\n  <div class="container-fluid">\n  <a href="/Details" class="btn btn-default" role="button">Details</a>\n  <a href="/Equipment" class="btn btn-default" role="button">Equip</a>\n  <a href="/Sidebag" class="btn btn-default" role="button">Sidebag</a>\n  <a href="/Extras" class="btn btn-default" role="button">extras</a>\n  <a href="/Effects" class="btn btn-default" role="button">effects</a>\n  <a href="/Abilities" class="btn btn-default" role="button">Abilities</a>\n  </div>\n</nav>');
}));                                                                                                            // 451
                                                                                                                // 452
Template.__checkName("Equipment");                                                                              // 453
Template["Equipment"] = new Template("Template.Equipment", (function() {                                        // 454
  var view = this;                                                                                              // 455
  return [ HTML.Raw('<nav class="navbar-default navbar-fixed-top">\n<div class="container-fluid">\n<div class="row">\n    <div class="col-md-12">\n      <h3 class="text-center">\n        Inventory\n      </h3>\n    </div>\n    <button class=" btn btn-default newitem">&plus; New Item</button>\n  </div>\n</div>\n</nav>\n'), Spacebars.With(function() {
    return Spacebars.call(view.lookup("inventory"));                                                            // 457
  }, function() {                                                                                               // 458
    return [ "\n", HTML.DIV({                                                                                   // 459
      "class": "vertical-center"                                                                                // 460
    }, "\n", HTML.DIV({                                                                                         // 461
      "class": "container-fluid"                                                                                // 462
    }, "\n    ", HTML.H3(), "\n\n      ", HTML.UL("\n          ", Blaze.Each(function() {                       // 463
      return Spacebars.call(view.lookup("inventory"));                                                          // 464
    }, function() {                                                                                             // 465
      return [ "\n          ", Spacebars.include(view.lookupTemplate("inventoryitem")), "\n          " ];       // 466
    }), "\n      "), "\n    "), "\n    "), "\n    " ];                                                          // 467
  }), "\n\n    ", Spacebars.With(function() {                                                                   // 468
    return Spacebars.call(view.lookup("itemWeight"));                                                           // 469
  }, function() {                                                                                               // 470
    return [ "\n    ", HTML.P({                                                                                 // 471
      id: "weight"                                                                                              // 472
    }, "Total Weight: ", Blaze.View("lookup:itemWeight", function() {                                           // 473
      return Spacebars.mustache(view.lookup("itemWeight"));                                                     // 474
    })), "\n    " ];                                                                                            // 475
  }), "\n    \n  ", Spacebars.include(view.lookupTemplate("nav")) ];                                            // 476
}));                                                                                                            // 477
                                                                                                                // 478
Template.__checkName("sidebag");                                                                                // 479
Template["sidebag"] = new Template("Template.sidebag", (function() {                                            // 480
  var view = this;                                                                                              // 481
  return [ Spacebars.With(function() {                                                                          // 482
    return Spacebars.call(view.lookup("inventory"));                                                            // 483
  }, function() {                                                                                               // 484
    return [ "\n", HTML.DIR({                                                                                   // 485
      "class": "container"                                                                                      // 486
    }, "\n    ", HTML.H3("Sidebag ", HTML.BUTTON({                                                              // 487
      "class": "btn btn-default newitem"                                                                        // 488
    }, HTML.CharRef({                                                                                           // 489
      html: "&plus;",                                                                                           // 490
      str: "+"                                                                                                  // 491
    }), " New Item")), "\n\n      ", HTML.UL("\n          ", Blaze.Each(function() {                            // 492
      return Spacebars.call(view.lookup("inventory"));                                                          // 493
    }, function() {                                                                                             // 494
      return [ "\n          ", Spacebars.include(view.lookupTemplate("sidebagItem")), "\n          " ];         // 495
    }), "\n      "), "\n    "), "\n    " ];                                                                     // 496
  }), "\n  ", Spacebars.include(view.lookupTemplate("nav")) ];                                                  // 497
}));                                                                                                            // 498
                                                                                                                // 499
Template.__checkName("sidebagItem");                                                                            // 500
Template["sidebagItem"] = new Template("Template.sidebagItem", (function() {                                    // 501
  var view = this;                                                                                              // 502
  return HTML.DIV({                                                                                             // 503
    "class": "row"                                                                                              // 504
  }, "\n", HTML.DIV({                                                                                           // 505
    "class": "col-md-6"                                                                                         // 506
  }, "\n", HTML.DL("\n", HTML.DT({                                                                              // 507
    "class": "text"                                                                                             // 508
  }, Blaze.View("lookup:name", function() {                                                                     // 509
    return Spacebars.mustache(view.lookup("name"));                                                             // 510
  }), " ", HTML.SPAN(" ct: ", Blaze.View("lookup:count", function() {                                           // 511
    return Spacebars.mustache(view.lookup("count"));                                                            // 512
  }))), "\n  ", HTML.Raw("<!-- <dd >{{desc}}</dd> -->"), "\n"), "\n"), HTML.Raw('\n<div class="col-md-4">\n<button class=" btn delete">&times;</button>\n</div>\n'));
}));                                                                                                            // 514
                                                                                                                // 515
Template.__checkName("sidebagdesc");                                                                            // 516
Template["sidebagdesc"] = new Template("Template.sidebagdesc", (function() {                                    // 517
  var view = this;                                                                                              // 518
  return Spacebars.With(function() {                                                                            // 519
    return Spacebars.call(view.lookup("inventory2"));                                                           // 520
  }, function() {                                                                                               // 521
    return [ "\n", HTML.DIV({                                                                                   // 522
      "class": "container"                                                                                      // 523
    }, "\n", HTML.DIV({                                                                                         // 524
      "class": "row"                                                                                            // 525
    }, "\n", HTML.DIV({                                                                                         // 526
      "class": "col-md-6"                                                                                       // 527
    }, "\n", HTML.H3(" Item Details"), "\n", HTML.DL("\n", HTML.DT({                                            // 528
      "class": "text"                                                                                           // 529
    }, Blaze._TemplateWith(function() {                                                                         // 530
      return {                                                                                                  // 531
        collection: Spacebars.call("sidebag"),                                                                  // 532
        field: Spacebars.call("name")                                                                           // 533
      };                                                                                                        // 534
    }, function() {                                                                                             // 535
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 536
    }), " ", HTML.SPAN(" ct: ", Blaze._TemplateWith(function() {                                                // 537
      return {                                                                                                  // 538
        collection: Spacebars.call("sidebag"),                                                                  // 539
        field: Spacebars.call("count")                                                                          // 540
      };                                                                                                        // 541
    }, function() {                                                                                             // 542
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 543
    })), "\n"), "\n  ", HTML.DD(" Description: ", Blaze._TemplateWith(function() {                              // 544
      return {                                                                                                  // 545
        collection: Spacebars.call("sidebag"),                                                                  // 546
        field: Spacebars.call("desc")                                                                           // 547
      };                                                                                                        // 548
    }, function() {                                                                                             // 549
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 550
    })), "\n"), "\n"), "\n", HTML.DIV({                                                                         // 551
      "class": "col-md-4"                                                                                       // 552
    }, "\n", HTML.BUTTON({                                                                                      // 553
      "class": " btn done"                                                                                      // 554
    }, "Done"), "\n"), "\n"), "\n"), "\n" ];                                                                    // 555
  });                                                                                                           // 556
}));                                                                                                            // 557
                                                                                                                // 558
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"char-list.js":["meteor/templating","../api/brimChar.js","./char-list.html",function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/ui/char-list.js                                                                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _templating = require('meteor/templating');                                                                 // 1
                                                                                                                //
var _brimChar = require('../api/brimChar.js');                                                                  // 2
                                                                                                                //
require('./char-list.html');                                                                                    // 7
                                                                                                                //
// # Destroy old editable if it exists                                                                          //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                inventory Helpers and Events                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.main.helpers({ //try clist                                                                 // 19
                                                                                                                //
  Characters: function () {                                                                                     // 20
    function Characters() {                                                                                     //
      return _brimChar.Characters.find({}, { sort: { createdAt: +1 } });                                        // 21
    }                                                                                                           //
                                                                                                                //
    return Characters;                                                                                          //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.main.events({                                                                              // 25
  'click .clear': function () {                                                                                 // 27
    function clickClear() {}                                                                                    //
                                                                                                                //
    return clickClear;                                                                                          //
  }(),                                                                                                          //
  'click .save': function () {                                                                                  // 31
    function clickSave(event) {                                                                                 //
      //prevent defaulting submit                                                                               //
      event.preventDefault();                                                                                   // 33
                                                                                                                //
      var name = document.getElementById('name').value;                                                         // 35
      var type = document.getElementById('type').value;                                                         // 36
      //const type = target.type.value;                                                                         //
      var tempCharacter = new person(name, type);                                                               // 31
                                                                                                                //
      //Insert new char data to collection characters (in brimChar.js)                                          //
      _brimChar.Characters.insert(tempCharacter, {});                                                           // 31
                                                                                                                //
      alert("Your Character: " + name + " has been saved!");                                                    // 45
      document.getElementById('name').value = "";                                                               // 46
    }                                                                                                           //
                                                                                                                //
    return clickSave;                                                                                           //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                charlist Helpers and Events                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.charlist.helpers({                                                                         // 56
  // tempchar() {                                                                                               //
  //  	return Characters.findOne({name});                                                                       //
  //  },                                                                                                        //
});                                                                                                             //
                                                                                                                //
_templating.Template.charlist.events({                                                                          // 62
  // 'click .toggle-checked'() {                                                                                //
  //   // Set the checked property to the opposite of its current value                                         //
  //   Tasks.update(this._id, {                                                                                 //
  //     $set: { checked: ! this.checked },                                                                     //
  //   });                                                                                                      //
  // },                                                                                                         //
                                                                                                                //
  'click .delete': function () {                                                                                // 69
    function clickDelete() {                                                                                    //
                                                                                                                //
      _brimChar.Characters.remove(this._id);                                                                    // 71
    }                                                                                                           //
                                                                                                                //
    return clickDelete;                                                                                         //
  }(),                                                                                                          //
  'click .edit': function () {                                                                                  // 74
    function clickEdit() {                                                                                      //
                                                                                                                //
      _brimChar.Characters.update(this._id, {                                                                   // 76
        $set: { activeChar: true }                                                                              // 77
      });                                                                                                       //
                                                                                                                //
      FlowRouter.go('/Details');                                                                                // 80
    }                                                                                                           //
                                                                                                                //
    return clickEdit;                                                                                           //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                charinfo Helpers and Events                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.charinfo.onCreated(function () {                                                           // 88
  var self = this;                                                                                              // 89
  self.autorun(function () {                                                                                    // 90
    self.subscribe('Characters');                                                                               // 91
  });                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.charinfo.helpers({                                                                         // 95
  activeCharacter: function () {                                                                                // 97
    function activeCharacter() {                                                                                //
      var output;                                                                                               // 98
      var cursor = _brimChar.Characters.find();                                                                 // 99
      cursor.forEach(function (doc) {                                                                           // 100
        if (doc.activeChar == true) {                                                                           // 101
          output = doc;                                                                                         // 102
        }                                                                                                       //
      });                                                                                                       //
      return output;                                                                                            // 105
    }                                                                                                           //
                                                                                                                //
    return activeCharacter;                                                                                     //
  }(),                                                                                                          //
                                                                                                                //
                                                                                                                //
  // inventory() {                                                                                              //
  //  var char = activeCharacter();                                                                             //
  //  var inv = inventorydb.find({owner: this._id});                                                            //
  //  return inv;                                                                                               //
  // },                                                                                                         //
                                                                                                                //
  // returns all keys and props of object                                                                       //
  stat: function () {                                                                                           // 115
    function stat() {                                                                                           //
      var atts = [];                                                                                            // 116
      var char = activeCharacter2();                                                                            // 117
      for (var key in meteorBabelHelpers.sanitizeForInObject(char)) {                                           // 118
        var obj = char[key];                                                                                    // 119
        for (var prop in meteorBabelHelpers.sanitizeForInObject(obj)) {                                         // 120
          atts.push({ key: prop, prop: obj[prop] });                                                            // 121
        };                                                                                                      //
      };                                                                                                        //
      return atts;                                                                                              // 124
    }                                                                                                           //
                                                                                                                //
    return stat;                                                                                                //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.charinfo.events({                                                                          // 130
  'click .back': function () {                                                                                  // 132
    function clickBack() {                                                                                      //
      _brimChar.Characters.update(this._id, {                                                                   // 133
        $set: { activeChar: false }                                                                             // 134
      });                                                                                                       //
      FlowRouter.go('home');                                                                                    // 136
    }                                                                                                           //
                                                                                                                //
    return clickBack;                                                                                           //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Equipment Helpers and Events                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// 'click td'(event) {                                                                                          //
//   var target = event.target;                                                                                 //
//   var self = target.innerHTML.value;                                                                         //
//   var res = prompt("old val: "+ self+ ", what is the new val?",self);                                        //
//   alert(this._id + " " + )                                                                                   //
                                                                                                                //
//    // Characters.update(this._id,{                                                                           //
                                                                                                                //
//    // });                                                                                                    //
// },                                                                                                           //
                                                                                                                //
_templating.Template.Equipment.helpers({                                                                        // 157
  inventory: function () {                                                                                      // 158
    function inventory() {                                                                                      //
                                                                                                                //
      var char = activeCharacter();                                                                             // 160
      var inv = _brimChar.inventorydb.find({ owner: this._id });                                                // 161
      return inv;                                                                                               // 162
    }                                                                                                           //
                                                                                                                //
    return inventory;                                                                                           //
  }(),                                                                                                          //
  itemWeight: function () {                                                                                     // 165
    function itemWeight() {                                                                                     //
                                                                                                                //
      var char = activeCharacter();                                                                             // 167
      var count = 0;                                                                                            // 168
      var max = Number(char.maxWeight);                                                                         // 169
      var inv = _brimChar.inventorydb.find({ owner: this._id });                                                // 170
      var obj = inv.fetch();                                                                                    // 171
      var curr;                                                                                                 // 172
                                                                                                                //
      for (var items in meteorBabelHelpers.sanitizeForInObject(obj)) {                                          // 174
        curr = Number(obj[items].weight);                                                                       // 175
        count += curr;                                                                                          // 176
      }                                                                                                         //
      if (count >= max) {                                                                                       // 178
        return count + " / " + char.maxWeight + " Your Character is overweight !!!";                            // 179
      } else {                                                                                                  //
        return count + " / " + char.maxWeight;                                                                  // 181
      }                                                                                                         //
    }                                                                                                           //
                                                                                                                //
    return itemWeight;                                                                                          //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.Equipment.events({                                                                         // 187
  'click .newitem': function () {                                                                               // 188
    function clickNewitem() {                                                                                   //
                                                                                                                //
      var itemName = prompt("item name?");                                                                      // 190
      var slots = prompt("how many upgrade slots?");                                                            // 191
      var weight = prompt("weight of " + itemName + "?");                                                       // 192
      var val = prompt("worth of " + itemName + "?");                                                           // 193
      var desc = prompt("Describe " + itemName + ":");                                                          // 194
      var itemres = basicInv(this._id, itemName, slots, weight, val, desc);                                     // 195
      _brimChar.inventorydb.insert(itemres, {});                                                                // 196
    }                                                                                                           //
                                                                                                                //
    return clickNewitem;                                                                                        //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                inventory Helpers and Events                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.inventoryitem.helpers({});                                                                 // 207
                                                                                                                //
_templating.Template.inventoryitem.events({                                                                     // 211
  'click .delete': function () {                                                                                // 213
    function clickDelete() {                                                                                    //
      _brimChar.inventorydb.remove(this._id);                                                                   // 214
    }                                                                                                           //
                                                                                                                //
    return clickDelete;                                                                                         //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                sidebag Helpers and Events                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.sidebag.helpers({                                                                          // 224
  inventory: function () {                                                                                      // 225
    function inventory() {                                                                                      //
                                                                                                                //
      var char = activeCharacter();                                                                             // 227
      var inv = _brimChar.sidebagdb.find({ owner: this._id });                                                  // 228
      return inv;                                                                                               // 229
    }                                                                                                           //
                                                                                                                //
    return inventory;                                                                                           //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.sidebag.events({                                                                           // 235
  'click .newitem': function () {                                                                               // 236
    function clickNewitem() {                                                                                   //
                                                                                                                //
      var itemName = prompt("item name?");                                                                      // 238
      var count = prompt("How many of " + itemName + " are there ?");                                           // 239
      var desc = prompt("Describe " + itemName + ":");                                                          // 240
      var itemres = basicSideBag(this._id, itemName, "sidebag", count, desc);                                   // 241
      _brimChar.sidebagdb.insert(itemres, {});                                                                  // 242
    }                                                                                                           //
                                                                                                                //
    return clickNewitem;                                                                                        //
  }(),                                                                                                          //
  'click .delete': function () {                                                                                // 247
    function clickDelete() {                                                                                    //
      _brimChar.sidebagdb.remove(this._id);                                                                     // 248
    }                                                                                                           //
                                                                                                                //
    return clickDelete;                                                                                         //
  }(),                                                                                                          //
  'click .row': function () {                                                                                   // 251
    function clickRow() {                                                                                       //
                                                                                                                //
      _brimChar.sidebagdb.update(this._id, {                                                                    // 254
        $set: { activeSideBag: true }                                                                           // 255
      });                                                                                                       //
                                                                                                                //
      FlowRouter.go('/SidebagItem');                                                                            // 258
    }                                                                                                           //
                                                                                                                //
    return clickRow;                                                                                            //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                sidebagdesc Helpers and Events                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.sidebagdesc.helpers({                                                                      // 269
  inventory2: function () {                                                                                     // 271
    function inventory2() {                                                                                     //
      var char = activeCharacter();                                                                             // 272
      var inv = _brimChar.sidebagdb.find({                                                                      // 273
        $and: [{ owner: this._id }, { activeSideBag: true }]                                                    // 274
      }).fetch();                                                                                               //
      return inv[0];                                                                                            // 279
    }                                                                                                           //
                                                                                                                //
    return inventory2;                                                                                          //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.sidebagdesc.events({                                                                       // 285
  // 'click .newitem'(){                                                                                        //
                                                                                                                //
  //     var itemName = prompt("item name?");                                                                   //
  //     var count = prompt("How many of " + itemName + " are there ?");                                        //
  //     var desc = prompt("Describe " + itemName + ":");                                                       //
  //     var itemres = basicSideBag(this._id,itemName,"sidebag",count,desc);                                    //
  //     sidebagdb.insert(itemres,{                                                                             //
  //     });                                                                                                    //
  //   },                                                                                                       //
                                                                                                                //
  'click .done': function () {                                                                                  // 296
    function clickDone() {                                                                                      //
                                                                                                                //
      alert(this.name);                                                                                         // 298
      _brimChar.sidebagdb.update(this._id, {                                                                    // 299
        $set: { activeSideBag: false }                                                                          // 300
      });                                                                                                       //
                                                                                                                //
      FlowRouter.go('/Sidebag');                                                                                // 303
    }                                                                                                           //
                                                                                                                //
    return clickDone;                                                                                           //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Classes and Functions                                                         //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
function person(name, type) {                                                                                   // 312
  // var invBuild = invBuild();                                                                                 //
  var doc = {                                                                                                   // 314
    name: name,                                                                                                 // 315
    'class': type,                                                                                              // 316
    lvl: 1,                                                                                                     // 317
    inventory: name,                                                                                            // 318
    agility: 1,                                                                                                 // 319
    strength: 1,                                                                                                // 320
    health: 10,                                                                                                 // 321
    defense: 5,                                                                                                 // 322
    armor: 0,                                                                                                   // 323
    cunning: 0,                                                                                                 // 324
    lore: 0,                                                                                                    // 325
    sanity: 0,                                                                                                  // 326
    willpower: 0,                                                                                               // 327
    Sarmor: 0,                                                                                                  // 328
    spirit: 0,                                                                                                  // 329
    luck: 0,                                                                                                    // 330
    melee: 0,                                                                                                   // 331
    combat: 0,                                                                                                  // 332
    range: 0,                                                                                                   // 333
    maxGrit: 0,                                                                                                 // 334
    initiative: 0,                                                                                              // 335
    corruption: 1,                                                                                              // 336
    darkStone: 0,                                                                                               // 337
    maxWeight: 10,                                                                                              // 338
    gold: 100,                                                                                                  // 339
    exp: 1000,                                                                                                  // 340
    move: 1                                                                                                     // 341
  };                                                                                                            //
  return doc;                                                                                                   // 343
}                                                                                                               //
                                                                                                                //
function basicInv(owner, name, slots, weight, val, desc) {                                                      // 346
  var item = {                                                                                                  // 347
    "owner": owner,                                                                                             // 348
    "name": name,                                                                                               // 349
    "type": "equipment",                                                                                        // 350
    "keys": "item",                                                                                             // 351
    "upgradeSlots": slots,                                                                                      // 352
    "weight": weight,                                                                                           // 353
    "value": val,                                                                                               // 354
    "desc": desc                                                                                                // 355
  };                                                                                                            //
  return item;                                                                                                  // 357
};                                                                                                              //
                                                                                                                //
function basicSideBag(owner, name, type, count, desc) {                                                         // 360
                                                                                                                //
  var item = {                                                                                                  // 362
    "owner": owner,                                                                                             // 363
    "name": name,                                                                                               // 364
    "type": type,                                                                                               // 365
    "count": count,                                                                                             // 366
    "desc": desc,                                                                                               // 367
    "activeSideBag": false                                                                                      // 368
  };                                                                                                            //
  return item;                                                                                                  // 370
};                                                                                                              //
                                                                                                                //
// function invBuild() {                                                                                        //
//   var item1 = new basicInv(this._id,"Mr. Sword");                                                            //
//   var item2 = new basicInv(this._id,"Shield");                                                               //
//   var item3 = new basicInv(this._id,"Dagger");                                                               //
//   var arr = [item1,item2,item3];                                                                             //
//   return arr;                                                                                                //
// };                                                                                                           //
                                                                                                                //
function activeCharacter() {                                                                                    // 381
  var output;                                                                                                   // 382
  var cursor = _brimChar.Characters.find();                                                                     // 383
  cursor.forEach(function (doc) {                                                                               // 384
    if (doc.activeChar == true) {                                                                               // 385
      output = doc;                                                                                             // 386
    }                                                                                                           //
  });                                                                                                           //
  return output;                                                                                                // 389
};                                                                                                              //
                                                                                                                //
function activeCharacter2() {                                                                                   // 392
  var output;                                                                                                   // 393
  var cursor = _brimChar.Characters.find({ activeChar: true });                                                 // 394
  output = cursor.fetch();                                                                                      // 395
  return output;                                                                                                // 396
};                                                                                                              //
                                                                                                                //
function activeSideBag() {                                                                                      // 399
  var output;                                                                                                   // 400
  var cursor = _brimChar.sidebagdb.find({ activeSideBag: true });                                               // 401
  output = cursor.fetch();                                                                                      // 402
  return output;                                                                                                // 403
};                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"api":{"brimChar.js":["meteor/mongo",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/brimChar.js                                                                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
exports.__esModule = true;                                                                                      //
exports.extrasdb = exports.sidebagdb = exports.inventorydb = exports.Characters = undefined;                    //
                                                                                                                //
var _mongo = require('meteor/mongo');                                                                           // 1
                                                                                                                //
var Characters = exports.Characters = new _mongo.Mongo.Collection('characters');                                // 3
var inventorydb = exports.inventorydb = new _mongo.Mongo.Collection('inventory');                               // 4
var sidebagdb = exports.sidebagdb = new _mongo.Mongo.Collection('sidebag');                                     // 5
var extrasdb = exports.extrasdb = new _mongo.Mongo.Collection('extras');                                        // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"lib":{"routes.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// lib/routes.js                                                                                                //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
FlowRouter.route('/', {                                                                                         // 1
	name: 'home',                                                                                                  // 2
	action: function () {                                                                                          // 3
		function action() {                                                                                           //
			BlazeLayout.render('main');                                                                                  // 4
		}                                                                                                             //
                                                                                                                //
		return action;                                                                                                //
	}()                                                                                                            //
});                                                                                                             //
                                                                                                                //
FlowRouter.route('/Details', {                                                                                  // 9
	name: 'Details',                                                                                               // 10
	action: function () {                                                                                          // 11
		function action() {                                                                                           //
			BlazeLayout.render('charinfo');                                                                              // 12
		}                                                                                                             //
                                                                                                                //
		return action;                                                                                                //
	}()                                                                                                            //
});                                                                                                             //
                                                                                                                //
FlowRouter.route('/Equipment', {                                                                                // 17
	name: 'Equipment',                                                                                             // 18
	action: function () {                                                                                          // 19
		function action() {                                                                                           //
			BlazeLayout.render('Equipment');                                                                             // 20
		}                                                                                                             //
                                                                                                                //
		return action;                                                                                                //
	}()                                                                                                            //
});                                                                                                             //
                                                                                                                //
FlowRouter.route('/Sidebag', {                                                                                  // 25
	name: 'Sidebag',                                                                                               // 26
	action: function () {                                                                                          // 27
		function action() {                                                                                           //
			BlazeLayout.render('sidebag');                                                                               // 28
		}                                                                                                             //
                                                                                                                //
		return action;                                                                                                //
	}()                                                                                                            //
});                                                                                                             //
                                                                                                                //
FlowRouter.route('/SidebagItem', {                                                                              // 33
	name: 'SidebagItem',                                                                                           // 34
	action: function () {                                                                                          // 35
		function action() {                                                                                           //
			BlazeLayout.render('sidebagdesc');                                                                           // 36
		}                                                                                                             //
                                                                                                                //
		return action;                                                                                                //
	}()                                                                                                            //
});                                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"main.js":["../imports/ui/char-list.js",function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// client/main.js                                                                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
require('../imports/ui/char-list.js');                                                                          // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./lib/routes.js");
require("./client/main.js");