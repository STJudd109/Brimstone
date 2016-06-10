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
    "class": "vertical-center"                                                                                  // 6
  }, "\n", HTML.DIV({                                                                                           // 7
    "class": "container"                                                                                        // 8
  }, "\n\n  ", HTML.Raw('<header class="row">\n      <h1 class="text-center">Brimstone</h1>\n\n      <!-- <form class="form-inline">\n      <div class="form-group">\n        <input  class="form-control" id="name" type="text" name="name" placeholder="Add a new character" />\n        <select  class="form-control" id="type" type="text" name="type"> \n         <option>Warrior</option>\n        <option>Mage</option>  \n        <option>Bowman</option>\n        <option>Theif</option>\n        <option>Darkness</option>\n        </select>\n        \n        <button class="save btn btn-default">&plus; Add new Hero</button>\n        </div>\n      </form> -->\n\n    </header>'), "\n  ", HTML.Raw('<div class="filler"></div>'), "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("Characters"));                                                           // 10
  }, function() {                                                                                               // 11
    return [ "\n        ", Spacebars.include(view.lookupTemplate("charlist")), "\n      " ];                    // 12
  }), "\n  \n"), HTML.Raw('\n<button class="save btn btn-default navbar-fixed-bottom">&plus; Add new Hero</button>\n\n'));
}));                                                                                                            // 14
                                                                                                                // 15
Template.__checkName("charlist");                                                                               // 16
Template["charlist"] = new Template("Template.charlist", (function() {                                          // 17
  var view = this;                                                                                              // 18
  return HTML.DIV({                                                                                             // 19
    "class": "row text-center char"                                                                             // 20
  }, "\n  ", HTML.DL({                                                                                          // 21
    "class": "col-xs-8"                                                                                         // 22
  }, "\n", HTML.DT(HTML.H4(Blaze.View("lookup:name", function() {                                               // 23
    return Spacebars.mustache(view.lookup("name"));                                                             // 24
  }))), "\n", HTML.DD({                                                                                         // 25
    "class": "text"                                                                                             // 26
  }, Blaze.View("lookup:class", function() {                                                                    // 27
    return Spacebars.mustache(view.lookup("class"));                                                            // 28
  }), "  lvl: ", Blaze.View("lookup:lvl", function() {                                                          // 29
    return Spacebars.mustache(view.lookup("lvl"));                                                              // 30
  })), "\n  "), HTML.Raw('\n  <div class="col-xs-4"> \n<!-- <button class="edit">Edit</button> -->\n<button class="delete">&times;</button>\n</div>\n  '));
}));                                                                                                            // 32
                                                                                                                // 33
Template.__checkName("charinfo");                                                                               // 34
Template["charinfo"] = new Template("Template.charinfo", (function() {                                          // 35
  var view = this;                                                                                              // 36
  return [ Spacebars.With(function() {                                                                          // 37
    return Spacebars.call(view.lookup("activeCharacter"));                                                      // 38
  }, function() {                                                                                               // 39
    return [ "\n", HTML.DIV({                                                                                   // 40
      "class": "vertical-center"                                                                                // 41
    }, "\n", HTML.NAV({                                                                                         // 42
      "class": "navbar-default navbar-fixed-top"                                                                // 43
    }, "\n", HTML.DIV({                                                                                         // 44
      "class": "container"                                                                                      // 45
    }, "\n", HTML.DIV({                                                                                         // 46
      "class": "row"                                                                                            // 47
    }, "\n", HTML.DIV({                                                                                         // 48
      "class": "col-xs-1"                                                                                       // 49
    }, "\n  ", HTML.BUTTON({                                                                                    // 50
      "class": "back pull-left"                                                                                 // 51
    }, HTML.CharRef({                                                                                           // 52
      html: "&times;",                                                                                          // 53
      str: "×"                                                                                                  // 54
    })), "\n"), "\n    ", HTML.DIV({                                                                            // 55
      "class": "col-xs-11"                                                                                      // 56
    }, "\n      ", HTML.H3({                                                                                    // 57
      "class": "text-center"                                                                                    // 58
    }, "Hero Details\n      "), "\n    "), "\n  "), "\n"), "\n"), "\n", HTML.Comment(' <div class="vertical-center"> '), "\n", HTML.DIV({
      "class": "container-fluid"                                                                                // 60
    }, "\n", HTML.DIV({                                                                                         // 61
      "class": "filler"                                                                                         // 62
    }), "\n  ", HTML.DIV({                                                                                      // 63
      "class": "row"                                                                                            // 64
    }, "\n    ", HTML.DIV({                                                                                     // 65
      "class": "col-xs-4 pull-left"                                                                             // 66
    }, "\n      ", HTML.H4({                                                                                    // 67
      "class": "text-center"                                                                                    // 68
    }, "\n        ", Blaze._TemplateWith(function() {                                                           // 69
      return {                                                                                                  // 70
        collection: Spacebars.call("characters"),                                                               // 71
        field: Spacebars.call("name")                                                                           // 72
      };                                                                                                        // 73
    }, function() {                                                                                             // 74
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 75
    }), "\n      "), "\n    "), "\n    ", HTML.DIV({                                                            // 76
      "class": "col-xs-4 pull-right"                                                                            // 77
    }, "\n      ", HTML.H4({                                                                                    // 78
      "class": "text-center"                                                                                    // 79
    }, "\n        Class: ", Blaze._TemplateWith(function() {                                                    // 80
      return {                                                                                                  // 81
        collection: Spacebars.call("characters"),                                                               // 82
        field: Spacebars.call("class")                                                                          // 83
      };                                                                                                        // 84
    }, function() {                                                                                             // 85
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 86
    }), "\n      "), "\n    "), "\n  "), "\n  ", HTML.DIV({                                                     // 87
      "class": "row"                                                                                            // 88
    }, "\n    ", HTML.DIV({                                                                                     // 89
      "class": "col-xs-4 pull-left"                                                                             // 90
    }, "\n      ", HTML.H4({                                                                                    // 91
      "class": "text-center"                                                                                    // 92
    }, "\n        ", Blaze._TemplateWith(function() {                                                           // 93
      return {                                                                                                  // 94
        collection: Spacebars.call("characters"),                                                               // 95
        field: Spacebars.call("keys")                                                                           // 96
      };                                                                                                        // 97
    }, function() {                                                                                             // 98
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 99
    }), "\n      "), "\n    "), "\n    ", HTML.DIV({                                                            // 100
      "class": "col-xs-4 pull-right"                                                                            // 101
    }, "\n      ", HTML.H4({                                                                                    // 102
      "class": "text-center"                                                                                    // 103
    }, "\n        Lvl: ", Blaze._TemplateWith(function() {                                                      // 104
      return {                                                                                                  // 105
        collection: Spacebars.call("characters"),                                                               // 106
        field: Spacebars.call("lvl")                                                                            // 107
      };                                                                                                        // 108
    }, function() {                                                                                             // 109
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 110
    }), "\n      "), "\n    "), "\n  "), "\n  \n", HTML.DIV({                                                   // 111
      "class": "row"                                                                                            // 112
    }, "\n", HTML.DIV({                                                                                         // 113
      "class": "table"                                                                                          // 114
    }, "\n    ", HTML.TABLE({                                                                                   // 115
      "class": "table table-bordered text-center"                                                               // 116
    }, "\n  ", HTML.THEAD("\n    ", HTML.TR({                                                                   // 117
      "class": "text-center"                                                                                    // 118
    }, "\n      ", HTML.TH("Stats"), "\n    "), "\n  "), "\n  ", HTML.TBODY("\n  ", HTML.TR({                   // 119
      "class": "active"                                                                                         // 120
    }, "\n      ", HTML.TD({                                                                                    // 121
      "class": "text-center"                                                                                    // 122
    }, "agility"), "\n      ", HTML.TD({                                                                        // 123
      "class": "text-center"                                                                                    // 124
    }, "cunning"), "\n      ", HTML.TD({                                                                        // 125
      "class": "text-center"                                                                                    // 126
    }, "spirit"), "\n      ", HTML.TD({                                                                         // 127
      "class": "text-center"                                                                                    // 128
    }, "maxGrit"), "\n  "), "\n    ", HTML.TR("\n      ", HTML.TD({                                             // 129
      "class": "agility-cell"                                                                                   // 130
    }, Blaze._TemplateWith(function() {                                                                         // 131
      return {                                                                                                  // 132
        collection: Spacebars.call("characters"),                                                               // 133
        field: Spacebars.call("agility")                                                                        // 134
      };                                                                                                        // 135
    }, function() {                                                                                             // 136
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 137
    })), "\n      ", HTML.TD({                                                                                  // 138
      "class": "cunning-cell"                                                                                   // 139
    }, Blaze._TemplateWith(function() {                                                                         // 140
      return {                                                                                                  // 141
        collection: Spacebars.call("characters"),                                                               // 142
        field: Spacebars.call("cunning")                                                                        // 143
      };                                                                                                        // 144
    }, function() {                                                                                             // 145
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 146
    })), "\n      ", HTML.TD({                                                                                  // 147
      "class": "spirit-cell"                                                                                    // 148
    }, Blaze._TemplateWith(function() {                                                                         // 149
      return {                                                                                                  // 150
        collection: Spacebars.call("characters"),                                                               // 151
        field: Spacebars.call("spirit")                                                                         // 152
      };                                                                                                        // 153
    }, function() {                                                                                             // 154
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 155
    })), "\n      ", HTML.TD({                                                                                  // 156
      "class": "maxGrit-cell"                                                                                   // 157
    }, Blaze._TemplateWith(function() {                                                                         // 158
      return {                                                                                                  // 159
        collection: Spacebars.call("characters"),                                                               // 160
        field: Spacebars.call("maxGrit")                                                                        // 161
      };                                                                                                        // 162
    }, function() {                                                                                             // 163
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 164
    })), "\n    "), "\n    ", HTML.TR({                                                                         // 165
      "class": "active"                                                                                         // 166
    }, " \n      ", HTML.TD({                                                                                   // 167
      "class": "agility-cell"                                                                                   // 168
    }, "strength"), "\n      ", HTML.TD({                                                                       // 169
      "class": "cunning-cell"                                                                                   // 170
    }, "lore"), "\n      ", HTML.TD({                                                                           // 171
      "class": "spirit-cell"                                                                                    // 172
    }, "luck"), "\n      ", HTML.TD({                                                                           // 173
      "class": "maxGrit-cell"                                                                                   // 174
    }, "initiative"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                        // 175
      "class": "agility-cell"                                                                                   // 176
    }, Blaze._TemplateWith(function() {                                                                         // 177
      return {                                                                                                  // 178
        collection: Spacebars.call("characters"),                                                               // 179
        field: Spacebars.call("strength")                                                                       // 180
      };                                                                                                        // 181
    }, function() {                                                                                             // 182
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 183
    })), "\n      ", HTML.TD({                                                                                  // 184
      "class": "cunning-cell"                                                                                   // 185
    }, Blaze._TemplateWith(function() {                                                                         // 186
      return {                                                                                                  // 187
        collection: Spacebars.call("characters"),                                                               // 188
        field: Spacebars.call("lore")                                                                           // 189
      };                                                                                                        // 190
    }, function() {                                                                                             // 191
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 192
    })), "\n      ", HTML.TD({                                                                                  // 193
      "class": "spirit-cell"                                                                                    // 194
    }, Blaze._TemplateWith(function() {                                                                         // 195
      return {                                                                                                  // 196
        collection: Spacebars.call("characters"),                                                               // 197
        field: Spacebars.call("luck")                                                                           // 198
      };                                                                                                        // 199
    }, function() {                                                                                             // 200
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 201
    })), "\n      ", HTML.TD({                                                                                  // 202
      "class": "maxGrit-cell"                                                                                   // 203
    }, Blaze._TemplateWith(function() {                                                                         // 204
      return {                                                                                                  // 205
        collection: Spacebars.call("characters"),                                                               // 206
        field: Spacebars.call("initiative")                                                                     // 207
      };                                                                                                        // 208
    }, function() {                                                                                             // 209
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 210
    })), "\n    "), "\n    ", HTML.TR({                                                                         // 211
      "class": "active"                                                                                         // 212
    }, "\n      ", HTML.TD({                                                                                    // 213
      "class": "agility-cell"                                                                                   // 214
    }, "health"), "\n      ", HTML.TD({                                                                         // 215
      "class": "cunning-cell"                                                                                   // 216
    }, "sanity"), "\n      ", HTML.TD({                                                                         // 217
      "class": "spirit-cell"                                                                                    // 218
    }, "melee"), "\n      ", HTML.TD({                                                                          // 219
      "class": "maxGrit-cell"                                                                                   // 220
    }, "corruption"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                        // 221
      "class": "agility-cell"                                                                                   // 222
    }, Blaze._TemplateWith(function() {                                                                         // 223
      return {                                                                                                  // 224
        collection: Spacebars.call("characters"),                                                               // 225
        field: Spacebars.call("health")                                                                         // 226
      };                                                                                                        // 227
    }, function() {                                                                                             // 228
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 229
    })), "\n      ", HTML.TD({                                                                                  // 230
      "class": "cunning-cell"                                                                                   // 231
    }, Blaze._TemplateWith(function() {                                                                         // 232
      return {                                                                                                  // 233
        collection: Spacebars.call("characters"),                                                               // 234
        field: Spacebars.call("sanity")                                                                         // 235
      };                                                                                                        // 236
    }, function() {                                                                                             // 237
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 238
    })), "\n      ", HTML.TD({                                                                                  // 239
      "class": "spirit-cell"                                                                                    // 240
    }, Blaze._TemplateWith(function() {                                                                         // 241
      return {                                                                                                  // 242
        collection: Spacebars.call("characters"),                                                               // 243
        field: Spacebars.call("melee")                                                                          // 244
      };                                                                                                        // 245
    }, function() {                                                                                             // 246
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 247
    })), "\n      ", HTML.TD({                                                                                  // 248
      "class": "maxGrit-cell"                                                                                   // 249
    }, Blaze._TemplateWith(function() {                                                                         // 250
      return {                                                                                                  // 251
        collection: Spacebars.call("characters"),                                                               // 252
        field: Spacebars.call("corruption")                                                                     // 253
      };                                                                                                        // 254
    }, function() {                                                                                             // 255
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 256
    })), "\n    "), "\n    ", HTML.TR({                                                                         // 257
      "class": "active"                                                                                         // 258
    }, "\n      ", HTML.TD({                                                                                    // 259
      "class": "agility-cell"                                                                                   // 260
    }, "defense"), "\n      ", HTML.TD({                                                                        // 261
      "class": "cunning-cell"                                                                                   // 262
    }, "willpower"), "\n      ", HTML.TD({                                                                      // 263
      "class": "spirit-cell"                                                                                    // 264
    }, "combat"), "\n      ", HTML.TD({                                                                         // 265
      "class": "maxGrit-cell"                                                                                   // 266
    }, "darkStone"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                         // 267
      "class": "agility-cell"                                                                                   // 268
    }, Blaze._TemplateWith(function() {                                                                         // 269
      return {                                                                                                  // 270
        collection: Spacebars.call("characters"),                                                               // 271
        field: Spacebars.call("defense")                                                                        // 272
      };                                                                                                        // 273
    }, function() {                                                                                             // 274
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 275
    })), "\n      ", HTML.TD({                                                                                  // 276
      "class": "cunning-cell"                                                                                   // 277
    }, Blaze._TemplateWith(function() {                                                                         // 278
      return {                                                                                                  // 279
        collection: Spacebars.call("characters"),                                                               // 280
        field: Spacebars.call("willpower")                                                                      // 281
      };                                                                                                        // 282
    }, function() {                                                                                             // 283
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 284
    })), "\n      ", HTML.TD({                                                                                  // 285
      "class": "spirit-cell"                                                                                    // 286
    }, Blaze._TemplateWith(function() {                                                                         // 287
      return {                                                                                                  // 288
        collection: Spacebars.call("characters"),                                                               // 289
        field: Spacebars.call("combat")                                                                         // 290
      };                                                                                                        // 291
    }, function() {                                                                                             // 292
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 293
    })), "\n      ", HTML.TD({                                                                                  // 294
      "class": "maxGrit-cell"                                                                                   // 295
    }, Blaze._TemplateWith(function() {                                                                         // 296
      return {                                                                                                  // 297
        collection: Spacebars.call("characters"),                                                               // 298
        field: Spacebars.call("darkStone")                                                                      // 299
      };                                                                                                        // 300
    }, function() {                                                                                             // 301
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 302
    })), "\n    "), "\n    ", HTML.TR({                                                                         // 303
      "class": "active"                                                                                         // 304
    }, "\n      ", HTML.TD({                                                                                    // 305
      "class": "agility-cell"                                                                                   // 306
    }, "armor"), "\n      ", HTML.TD({                                                                          // 307
      "class": "cunning-cell"                                                                                   // 308
    }, "Sarmor"), "\n      ", HTML.TD({                                                                         // 309
      "class": "spirit-cell"                                                                                    // 310
    }, "range"), "\n      ", HTML.TD({                                                                          // 311
      "class": "maxGrit-cell"                                                                                   // 312
    }, "maxWeight"), "\n    "), "\n    ", HTML.TR("\n      ", HTML.TD({                                         // 313
      "class": "agility-cell"                                                                                   // 314
    }, Blaze._TemplateWith(function() {                                                                         // 315
      return {                                                                                                  // 316
        collection: Spacebars.call("characters"),                                                               // 317
        field: Spacebars.call("armor")                                                                          // 318
      };                                                                                                        // 319
    }, function() {                                                                                             // 320
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 321
    })), "\n      ", HTML.TD({                                                                                  // 322
      "class": "cunning-cell"                                                                                   // 323
    }, Blaze._TemplateWith(function() {                                                                         // 324
      return {                                                                                                  // 325
        collection: Spacebars.call("characters"),                                                               // 326
        field: Spacebars.call("Sarmor")                                                                         // 327
      };                                                                                                        // 328
    }, function() {                                                                                             // 329
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 330
    })), "\n      ", HTML.TD({                                                                                  // 331
      "class": "spirit-cell"                                                                                    // 332
    }, Blaze._TemplateWith(function() {                                                                         // 333
      return {                                                                                                  // 334
        collection: Spacebars.call("characters"),                                                               // 335
        field: Spacebars.call("range")                                                                          // 336
      };                                                                                                        // 337
    }, function() {                                                                                             // 338
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 339
    })), "\n      ", HTML.TD({                                                                                  // 340
      "class": "maxGrit-cell"                                                                                   // 341
    }, Blaze._TemplateWith(function() {                                                                         // 342
      return {                                                                                                  // 343
        collection: Spacebars.call("characters"),                                                               // 344
        field: Spacebars.call("maxWeight")                                                                      // 345
      };                                                                                                        // 346
    }, function() {                                                                                             // 347
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 348
    })), "\n    "), "\n  "), "\n"), "\n"), "\n"), "\n\n  ", HTML.DIV({                                          // 349
      "class": "hero-extras"                                                                                    // 350
    }, "\n    ", HTML.DIV({                                                                                     // 351
      "class": "sub-container"                                                                                  // 352
    }, "\n      ", HTML.DIV({                                                                                   // 353
      "class": "gold"                                                                                           // 354
    }, "\n        ", HTML.DIV({                                                                                 // 355
      "class": "label"                                                                                          // 356
    }, "gold:"), "\n        ", HTML.DIV({                                                                       // 357
      "class": "value"                                                                                          // 358
    }, Blaze._TemplateWith(function() {                                                                         // 359
      return {                                                                                                  // 360
        collection: Spacebars.call("characters"),                                                               // 361
        field: Spacebars.call("gold")                                                                           // 362
      };                                                                                                        // 363
    }, function() {                                                                                             // 364
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 365
    })), "\n      "), "\n      ", HTML.DIV({                                                                    // 366
      "class": "exp"                                                                                            // 367
    }, "\n        ", HTML.DIV({                                                                                 // 368
      "class": "label"                                                                                          // 369
    }, "exp:"), "\n        ", HTML.DIV({                                                                        // 370
      "class": "value"                                                                                          // 371
    }, Blaze._TemplateWith(function() {                                                                         // 372
      return {                                                                                                  // 373
        collection: Spacebars.call("characters"),                                                               // 374
        field: Spacebars.call("exp")                                                                            // 375
      };                                                                                                        // 376
    }, function() {                                                                                             // 377
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 378
    })), "\n      "), "\n    "), "\n    ", HTML.DIV({                                                           // 379
      "class": "container"                                                                                      // 380
    }, "\n      ", HTML.DIV({                                                                                   // 381
      "class": "move"                                                                                           // 382
    }, "\n        ", HTML.DIV({                                                                                 // 383
      "class": "label"                                                                                          // 384
    }), "\n        ", HTML.DIV({                                                                                // 385
      "class": "value"                                                                                          // 386
    }), "\n        ", HTML.BUTTON({                                                                             // 387
      "class": "inc-button"                                                                                     // 388
    }, HTML.CharRef({                                                                                           // 389
      html: "&plus;",                                                                                           // 390
      str: "+"                                                                                                  // 391
    })), "\n      "), "\n    "), "\n  "), "\n"), "\n"), "\n" ];                                                 // 392
  }), "\n", Spacebars.include(view.lookupTemplate("nav")) ];                                                    // 393
}));                                                                                                            // 394
                                                                                                                // 395
Template.__checkName("inventoryitem");                                                                          // 396
Template["inventoryitem"] = new Template("Template.inventoryitem", (function() {                                // 397
  var view = this;                                                                                              // 398
  return HTML.DL({                                                                                              // 399
    "class": "item sideitem dl-horizontal"                                                                      // 400
  }, "\n", HTML.DT({                                                                                            // 401
    "class": "text "                                                                                            // 402
  }, HTML.H4(Blaze.View("lookup:name", function() {                                                             // 403
    return Spacebars.mustache(view.lookup("name"));                                                             // 404
  }))), "\n\n", HTML.DD(HTML.SPAN({                                                                             // 405
    "class": "text"                                                                                             // 406
  }, Blaze.View("lookup:keys", function() {                                                                     // 407
    return Spacebars.mustache(view.lookup("keys"));                                                             // 408
  }))), "\n\n", HTML.DD({                                                                                       // 409
    "class": "text"                                                                                             // 410
  }, "\n\n", HTML.SPAN({                                                                                        // 411
    "class": "text"                                                                                             // 412
  }, "Upgrade Slots: ", Blaze.View("lookup:upgradeSlots", function() {                                          // 413
    return Spacebars.mustache(view.lookup("upgradeSlots"));                                                     // 414
  })), "\n\n", HTML.SPAN({                                                                                      // 415
    "class": "text"                                                                                             // 416
  }, " Weight: ", Blaze.View("lookup:weight", function() {                                                      // 417
    return Spacebars.mustache(view.lookup("weight"));                                                           // 418
  })), "\n\n", HTML.SPAN({                                                                                      // 419
    "class": "text "                                                                                            // 420
  }, "Value: ", Blaze.View("lookup:value", function() {                                                         // 421
    return Spacebars.mustache(view.lookup("value"));                                                            // 422
  })), "\n", HTML.Raw('<button class="delete pull-right">&times;</button>'), "\n"), "\n\n", HTML.DD({           // 423
    "class": "text"                                                                                             // 424
  }, Blaze.View("lookup:desc", function() {                                                                     // 425
    return Spacebars.mustache(view.lookup("desc"));                                                             // 426
  })), "\n\n");                                                                                                 // 427
}));                                                                                                            // 428
                                                                                                                // 429
Template.__checkName("Equipment");                                                                              // 430
Template["Equipment"] = new Template("Template.Equipment", (function() {                                        // 431
  var view = this;                                                                                              // 432
  return [ HTML.Raw('<nav class="navbar-default navbar-fixed-top">\n<div class="container-fluid">\n<div class="row">\n    <div class="col-xs-12">\n      <h3 class="text-center">\n        Inventory\n      </h3>\n    </div>\n    <button class=" btn btn-default newitem">&plus; New Item</button>\n  </div>\n</div>\n</nav>\n'), Spacebars.With(function() {
    return Spacebars.call(view.lookup("inventory"));                                                            // 434
  }, function() {                                                                                               // 435
    return [ "\n", HTML.DIV({                                                                                   // 436
      "class": "vertical-center"                                                                                // 437
    }, "\n", HTML.DIV({                                                                                         // 438
      "class": "filler-inv"                                                                                     // 439
    }), "\n", HTML.DIV({                                                                                        // 440
      "class": "container-fluid"                                                                                // 441
    }, "\n      ", HTML.DIV({                                                                                   // 442
      "class": "text-center"                                                                                    // 443
    }, "\n          ", Blaze.Each(function() {                                                                  // 444
      return Spacebars.call(view.lookup("inventory"));                                                          // 445
    }, function() {                                                                                             // 446
      return [ "\n          ", Spacebars.include(view.lookupTemplate("inventoryitem")), "\n          " ];       // 447
    }), "\n      "), "\n    "), "\n    "), "\n    " ];                                                          // 448
  }), "\n    ", Spacebars.With(function() {                                                                     // 449
    return Spacebars.call(view.lookup("itemWeight"));                                                           // 450
  }, function() {                                                                                               // 451
    return [ "\n    ", HTML.P({                                                                                 // 452
      id: "weight"                                                                                              // 453
    }, "Total Weight: ", Blaze.View("lookup:itemWeight", function() {                                           // 454
      return Spacebars.mustache(view.lookup("itemWeight"));                                                     // 455
    })), "\n    " ];                                                                                            // 456
  }), "\n    \n  ", Spacebars.include(view.lookupTemplate("nav")) ];                                            // 457
}));                                                                                                            // 458
                                                                                                                // 459
Template.__checkName("sidebag");                                                                                // 460
Template["sidebag"] = new Template("Template.sidebag", (function() {                                            // 461
  var view = this;                                                                                              // 462
  return [ HTML.Raw('<nav class="navbar-default navbar-fixed-top">\n<div class="container-fluid">\n<div class="row">\n    <div class="col-xs-12">\n      <h3 class="text-center">\n        SideBag\n      </h3>\n    </div>\n    <button class=" btn btn-default newitem">&plus; New Item</button>\n  </div>\n</div>\n</nav>\n'), Spacebars.With(function() {
    return Spacebars.call(view.lookup("inventory"));                                                            // 464
  }, function() {                                                                                               // 465
    return [ "\n", HTML.DIV({                                                                                   // 466
      "class": "vertical-center"                                                                                // 467
    }, "\n", HTML.DIV({                                                                                         // 468
      "class": "filler-inv"                                                                                     // 469
    }), "\n      ", HTML.UL("\n          ", Blaze.Each(function() {                                             // 470
      return Spacebars.call(view.lookup("inventory"));                                                          // 471
    }, function() {                                                                                             // 472
      return [ "\n          ", Spacebars.include(view.lookupTemplate("sidebagItem")), "\n          " ];         // 473
    }), "\n      "), "\n    "), "\n" ];                                                                         // 474
  }), "\n  ", Spacebars.include(view.lookupTemplate("nav")) ];                                                  // 475
}));                                                                                                            // 476
                                                                                                                // 477
Template.__checkName("sidebagItem");                                                                            // 478
Template["sidebagItem"] = new Template("Template.sidebagItem", (function() {                                    // 479
  var view = this;                                                                                              // 480
  return HTML.DIV({                                                                                             // 481
    "class": "row "                                                                                             // 482
  }, "\n", HTML.DIV({                                                                                           // 483
    "class": "col-xs-6"                                                                                         // 484
  }, "\n", HTML.DL("\n", HTML.DT({                                                                              // 485
    "class": "text sideitem"                                                                                    // 486
  }, Blaze.View("lookup:name", function() {                                                                     // 487
    return Spacebars.mustache(view.lookup("name"));                                                             // 488
  }), " ", HTML.SPAN(" ct: ", Blaze.View("lookup:count", function() {                                           // 489
    return Spacebars.mustache(view.lookup("count"));                                                            // 490
  }))), "\n  ", HTML.Raw("<!-- <dd >{{desc}}</dd> -->"), "\n"), "\n"), HTML.Raw('\n<div class="col-xs-4">\n<button class=" btn delete">&times;</button>\n</div>\n'));
}));                                                                                                            // 492
                                                                                                                // 493
Template.__checkName("sidebagdesc");                                                                            // 494
Template["sidebagdesc"] = new Template("Template.sidebagdesc", (function() {                                    // 495
  var view = this;                                                                                              // 496
  return Spacebars.With(function() {                                                                            // 497
    return Spacebars.call(view.lookup("inventory2"));                                                           // 498
  }, function() {                                                                                               // 499
    return [ "\n", HTML.NAV({                                                                                   // 500
      "class": "navbar-default navbar-fixed-top"                                                                // 501
    }, "\n", HTML.DIV({                                                                                         // 502
      "class": "container-fluid"                                                                                // 503
    }, "\n", HTML.DIV({                                                                                         // 504
      "class": "row"                                                                                            // 505
    }, "\n    ", HTML.DIV({                                                                                     // 506
      "class": "col-xs-12"                                                                                      // 507
    }, "\n      ", HTML.H3({                                                                                    // 508
      "class": "text-center"                                                                                    // 509
    }, "\n        Item Details\n      "), "\n    "), "\n  "), "\n"), "\n"), "\n", HTML.DIV({                    // 510
      "class": "vertical-center "                                                                               // 511
    }, "\n", HTML.DIV({                                                                                         // 512
      "class": "container"                                                                                      // 513
    }, "\n", HTML.DIV({                                                                                         // 514
      "class": "filler"                                                                                         // 515
    }), "\n", HTML.DIV({                                                                                        // 516
      "class": "row text-center"                                                                                // 517
    }, "\n", HTML.DIV({                                                                                         // 518
      "class": "col-xs-12"                                                                                      // 519
    }, "\n", HTML.DL("\n", HTML.DT({                                                                            // 520
      "class": "text"                                                                                           // 521
    }, HTML.H3(Blaze._TemplateWith(function() {                                                                 // 522
      return {                                                                                                  // 523
        collection: Spacebars.call("sidebag"),                                                                  // 524
        field: Spacebars.call("name")                                                                           // 525
      };                                                                                                        // 526
    }, function() {                                                                                             // 527
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 528
    })), " ", HTML.SPAN(" ct: ", Blaze._TemplateWith(function() {                                               // 529
      return {                                                                                                  // 530
        collection: Spacebars.call("sidebag"),                                                                  // 531
        field: Spacebars.call("count")                                                                          // 532
      };                                                                                                        // 533
    }, function() {                                                                                             // 534
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 535
    })), "\n"), "\n  ", HTML.DD(" Description: ", Blaze._TemplateWith(function() {                              // 536
      return {                                                                                                  // 537
        collection: Spacebars.call("sidebag"),                                                                  // 538
        field: Spacebars.call("desc")                                                                           // 539
      };                                                                                                        // 540
    }, function() {                                                                                             // 541
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 542
    })), "\n"), "\n"), "\n"), "\n", HTML.BUTTON({                                                               // 543
      "class": " btn done"                                                                                      // 544
    }, "Done"), "\n"), "\n"), "\n" ];                                                                           // 545
  });                                                                                                           // 546
}));                                                                                                            // 547
                                                                                                                // 548
Template.__checkName("equipmentdesc");                                                                          // 549
Template["equipmentdesc"] = new Template("Template.equipmentdesc", (function() {                                // 550
  var view = this;                                                                                              // 551
  return Spacebars.With(function() {                                                                            // 552
    return Spacebars.call(view.lookup("inventory2"));                                                           // 553
  }, function() {                                                                                               // 554
    return [ "\n", HTML.NAV({                                                                                   // 555
      "class": "navbar-default navbar-fixed-top"                                                                // 556
    }, "\n", HTML.DIV({                                                                                         // 557
      "class": "container-fluid"                                                                                // 558
    }, "\n", HTML.DIV({                                                                                         // 559
      "class": "row"                                                                                            // 560
    }, "\n    ", HTML.DIV({                                                                                     // 561
      "class": "col-xs-12"                                                                                      // 562
    }, "\n      ", HTML.H3({                                                                                    // 563
      "class": "text-center"                                                                                    // 564
    }, "\n        Item Details\n      "), "\n    "), "\n  "), "\n"), "\n"), "\n", HTML.DIV({                    // 565
      "class": "vertical-center "                                                                               // 566
    }, "\n", HTML.DIV({                                                                                         // 567
      "class": "container"                                                                                      // 568
    }, "\n", HTML.DIV({                                                                                         // 569
      "class": "filler"                                                                                         // 570
    }), "\n", HTML.DIV({                                                                                        // 571
      "class": "row text-center"                                                                                // 572
    }, "\n", HTML.DIV({                                                                                         // 573
      "class": "col-xs-12"                                                                                      // 574
    }, "\n", HTML.DL("\n", HTML.DT({                                                                            // 575
      "class": "text"                                                                                           // 576
    }, HTML.H3(Blaze._TemplateWith(function() {                                                                 // 577
      return {                                                                                                  // 578
        collection: Spacebars.call("inventory"),                                                                // 579
        field: Spacebars.call("name")                                                                           // 580
      };                                                                                                        // 581
    }, function() {                                                                                             // 582
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 583
    })), " \n"), "\n  ", HTML.DD(" ", Blaze._TemplateWith(function() {                                          // 584
      return {                                                                                                  // 585
        collection: Spacebars.call("inventory"),                                                                // 586
        field: Spacebars.call("keys")                                                                           // 587
      };                                                                                                        // 588
    }, function() {                                                                                             // 589
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 590
    })), "\n  ", HTML.DD(" ", HTML.SPAN("Slots: ", Blaze._TemplateWith(function() {                             // 591
      return {                                                                                                  // 592
        collection: Spacebars.call("inventory"),                                                                // 593
        field: Spacebars.call("upgradeSlots")                                                                   // 594
      };                                                                                                        // 595
    }, function() {                                                                                             // 596
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 597
    }), " "), " ", HTML.SPAN("Weight: ", Blaze._TemplateWith(function() {                                       // 598
      return {                                                                                                  // 599
        collection: Spacebars.call("inventory"),                                                                // 600
        field: Spacebars.call("weight")                                                                         // 601
      };                                                                                                        // 602
    }, function() {                                                                                             // 603
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 604
    })), " ", HTML.SPAN(" Value: ", Blaze._TemplateWith(function() {                                            // 605
      return {                                                                                                  // 606
        collection: Spacebars.call("inventory"),                                                                // 607
        field: Spacebars.call("value")                                                                          // 608
      };                                                                                                        // 609
    }, function() {                                                                                             // 610
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 611
    })), " "), "\n  ", HTML.DD(" Description: ", Blaze._TemplateWith(function() {                               // 612
      return {                                                                                                  // 613
        collection: Spacebars.call("inventory"),                                                                // 614
        field: Spacebars.call("desc")                                                                           // 615
      };                                                                                                        // 616
    }, function() {                                                                                             // 617
      return Spacebars.include(view.lookupTemplate("editableText"));                                            // 618
    })), "\n"), "\n"), "\n"), "\n", HTML.BUTTON({                                                               // 619
      "class": " btn done"                                                                                      // 620
    }, "Done"), "\n"), "\n", HTML.DIV({                                                                         // 621
      "class": "container subitem"                                                                              // 622
    }, "\n  \n\n"), "\n"), "\n\n" ];                                                                            // 623
  });                                                                                                           // 624
}));                                                                                                            // 625
                                                                                                                // 626
Template.__checkName("nav");                                                                                    // 627
Template["nav"] = new Template("Template.nav", (function() {                                                    // 628
  var view = this;                                                                                              // 629
  return HTML.Raw('<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">\n  <div class="container-fluid">\n  <a href="/Details" class="btn btn-default" role="button">Details</a>\n  <a href="/Equipment" class="btn btn-default" role="button">Equip</a>\n  <a href="/Sidebag" class="btn btn-default" role="button">Sidebag</a>\n  <a href="/Extras" class="btn btn-default" role="button">extras</a>\n  <a href="/Effects" class="btn btn-default" role="button">effects</a>\n  <a href="/Abilities" class="btn btn-default" role="button">Abilities</a>\n  </div>\n</nav>');
}));                                                                                                            // 631
                                                                                                                // 632
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
      var name = prompt("name");                                                                                // 35
      var type = prompt("class");                                                                               // 36
      //const type = target.type.value;                                                                         //
      var tempCharacter = new person(name, type);                                                               // 31
                                                                                                                //
      //Insert new char data to collection characters (in brimChar.js)                                          //
      _brimChar.Characters.insert(tempCharacter, {});                                                           // 31
                                                                                                                //
      // alert("Your Character: " + name + " has been saved!");                                                 //
    }                                                                                                           //
                                                                                                                // 31
    return clickSave;                                                                                           //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                charlist Helpers and Events                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.charlist.helpers({                                                                         // 55
  // tempchar() {                                                                                               //
  //  	return Characters.findOne({name});                                                                       //
  //  },                                                                                                        //
});                                                                                                             //
                                                                                                                //
_templating.Template.charlist.events({                                                                          // 61
  // 'click .toggle-checked'() {                                                                                //
  //   // Set the checked property to the opposite of its current value                                         //
  //   Tasks.update(this._id, {                                                                                 //
  //     $set: { checked: ! this.checked },                                                                     //
  //   });                                                                                                      //
  // },                                                                                                         //
                                                                                                                //
  'click .delete': function () {                                                                                // 68
    function clickDelete() {                                                                                    //
                                                                                                                //
      _brimChar.Characters.remove(this._id);                                                                    // 70
    }                                                                                                           //
                                                                                                                //
    return clickDelete;                                                                                         //
  }(),                                                                                                          //
  'click .char': function () {                                                                                  // 73
    function clickChar() {                                                                                      //
                                                                                                                //
      _brimChar.Characters.update(this._id, {                                                                   // 75
        $set: { activeChar: true }                                                                              // 76
      });                                                                                                       //
                                                                                                                //
      FlowRouter.go('/Details');                                                                                // 79
    }                                                                                                           //
                                                                                                                //
    return clickChar;                                                                                           //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                charinfo Helpers and Events                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.charinfo.onCreated(function () {                                                           // 87
  var self = this;                                                                                              // 88
  self.autorun(function () {                                                                                    // 89
    self.subscribe('Characters');                                                                               // 90
  });                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.charinfo.helpers({                                                                         // 94
  activeCharacter: function () {                                                                                // 96
    function activeCharacter() {                                                                                //
      var output;                                                                                               // 97
      var cursor = _brimChar.Characters.find();                                                                 // 98
      cursor.forEach(function (doc) {                                                                           // 99
        if (doc.activeChar == true) {                                                                           // 100
          output = doc;                                                                                         // 101
        }                                                                                                       //
      });                                                                                                       //
      return output;                                                                                            // 104
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
  stat: function () {                                                                                           // 114
    function stat() {                                                                                           //
      var atts = [];                                                                                            // 115
      var char = activeCharacter2();                                                                            // 116
      for (var key in meteorBabelHelpers.sanitizeForInObject(char)) {                                           // 117
        var obj = char[key];                                                                                    // 118
        for (var prop in meteorBabelHelpers.sanitizeForInObject(obj)) {                                         // 119
          atts.push({ key: prop, prop: obj[prop] });                                                            // 120
        };                                                                                                      //
      };                                                                                                        //
      return atts;                                                                                              // 123
    }                                                                                                           //
                                                                                                                //
    return stat;                                                                                                //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.charinfo.events({                                                                          // 129
  'click .back': function () {                                                                                  // 131
    function clickBack() {                                                                                      //
      _brimChar.Characters.update(this._id, {                                                                   // 132
        $set: { activeChar: false }                                                                             // 133
      });                                                                                                       //
      FlowRouter.go('home');                                                                                    // 135
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
_templating.Template.Equipment.helpers({                                                                        // 156
  inventory: function () {                                                                                      // 157
    function inventory() {                                                                                      //
                                                                                                                //
      var char = activeCharacter();                                                                             // 159
      var inv = _brimChar.inventorydb.find({ owner: this._id });                                                // 160
      return inv;                                                                                               // 161
    }                                                                                                           //
                                                                                                                //
    return inventory;                                                                                           //
  }(),                                                                                                          //
  itemWeight: function () {                                                                                     // 164
    function itemWeight() {                                                                                     //
                                                                                                                //
      var char = activeCharacter();                                                                             // 166
      var count = 0;                                                                                            // 167
      var max = Number(char.maxWeight);                                                                         // 168
      var inv = _brimChar.inventorydb.find({ owner: this._id });                                                // 169
      var obj = inv.fetch();                                                                                    // 170
      var curr;                                                                                                 // 171
                                                                                                                //
      for (var items in meteorBabelHelpers.sanitizeForInObject(obj)) {                                          // 173
        curr = Number(obj[items].weight);                                                                       // 174
        count += curr;                                                                                          // 175
      }                                                                                                         //
      if (count >= max) {                                                                                       // 177
        return count + " / " + char.maxWeight + " Your Character is overweight !!!";                            // 178
      } else {                                                                                                  //
        return count + " / " + char.maxWeight;                                                                  // 180
      }                                                                                                         //
    }                                                                                                           //
                                                                                                                //
    return itemWeight;                                                                                          //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.Equipment.events({                                                                         // 186
  'click .newitem': function () {                                                                               // 187
    function clickNewitem() {                                                                                   //
                                                                                                                //
      var itemName = prompt("item name?");                                                                      // 189
      var slots = prompt("how many upgrade slots?");                                                            // 190
      var weight = prompt("weight of " + itemName + "?");                                                       // 191
      var val = prompt("worth of " + itemName + "?");                                                           // 192
      var desc = prompt("Describe " + itemName + ":");                                                          // 193
      var itemres = basicInv(this._id, itemName, slots, weight, val, desc);                                     // 194
      _brimChar.inventorydb.insert(itemres, {});                                                                // 195
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
_templating.Template.inventoryitem.helpers({});                                                                 // 209
                                                                                                                //
_templating.Template.inventoryitem.events({                                                                     // 213
  'click .delete': function () {                                                                                // 215
    function clickDelete() {                                                                                    //
      _brimChar.inventorydb.remove(this._id);                                                                   // 216
    }                                                                                                           //
                                                                                                                //
    return clickDelete;                                                                                         //
  }(),                                                                                                          //
  'click .sideitem': function () {                                                                              // 219
    function clickSideitem() {                                                                                  //
                                                                                                                //
      _brimChar.inventorydb.update(this._id, {                                                                  // 221
        $set: { activeequip: true }                                                                             // 222
      });                                                                                                       //
                                                                                                                //
      FlowRouter.go('/EquipmentItem');                                                                          // 225
    }                                                                                                           //
                                                                                                                //
    return clickSideitem;                                                                                       //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                sidebag Helpers and Events                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.sidebag.helpers({                                                                          // 236
  inventory: function () {                                                                                      // 237
    function inventory() {                                                                                      //
                                                                                                                //
      var char = activeCharacter();                                                                             // 239
      var inv = _brimChar.sidebagdb.find({ owner: this._id });                                                  // 240
      return inv;                                                                                               // 241
    }                                                                                                           //
                                                                                                                //
    return inventory;                                                                                           //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.sidebag.events({                                                                           // 247
  'click .newitem': function () {                                                                               // 248
    function clickNewitem() {                                                                                   //
                                                                                                                //
      var itemName = prompt("item name?");                                                                      // 250
      var count = prompt("How many of " + itemName + " are there ?");                                           // 251
      var desc = prompt("Describe " + itemName + ":");                                                          // 252
      if (count == "") {                                                                                        // 253
        count = 0;                                                                                              // 253
      };                                                                                                        //
      if (itemName == "") {                                                                                     // 254
        itemName = "invalid item";                                                                              // 254
      };                                                                                                        //
      if (desc == "") {                                                                                         // 255
        desc = "No Description given";                                                                          // 255
      };                                                                                                        //
      var itemres = basicSideBag(this._id, itemName, "sidebag", count, desc);                                   // 256
      _brimChar.sidebagdb.insert(itemres, {});                                                                  // 257
    }                                                                                                           //
                                                                                                                //
    return clickNewitem;                                                                                        //
  }(),                                                                                                          //
  'click .delete': function () {                                                                                // 262
    function clickDelete() {                                                                                    //
      _brimChar.sidebagdb.remove(this._id);                                                                     // 263
    }                                                                                                           //
                                                                                                                //
    return clickDelete;                                                                                         //
  }(),                                                                                                          //
  'click .sideitem': function () {                                                                              // 266
    function clickSideitem() {                                                                                  //
                                                                                                                //
      _brimChar.sidebagdb.update(this._id, {                                                                    // 268
        $set: { activeSideBag: true }                                                                           // 269
      });                                                                                                       //
                                                                                                                //
      FlowRouter.go('/SidebagItem');                                                                            // 272
    }                                                                                                           //
                                                                                                                //
    return clickSideitem;                                                                                       //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                sidebagdesc Helpers and Events                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.sidebagdesc.helpers({                                                                      // 283
  inventory2: function () {                                                                                     // 285
    function inventory2() {                                                                                     //
      var char = activeCharacter();                                                                             // 286
      var inv = _brimChar.sidebagdb.find({                                                                      // 287
        $and: [{ owner: this._id }, { activeSideBag: true }]                                                    // 288
      }).fetch();                                                                                               //
      return inv[0];                                                                                            // 293
    }                                                                                                           //
                                                                                                                //
    return inventory2;                                                                                          //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.sidebagdesc.events({                                                                       // 299
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
  'click .done': function () {                                                                                  // 310
    function clickDone() {                                                                                      //
                                                                                                                //
      _brimChar.sidebagdb.update(this._id, {                                                                    // 312
        $set: { activeSideBag: false }                                                                          // 313
      });                                                                                                       //
                                                                                                                //
      FlowRouter.go('/Sidebag');                                                                                // 316
    }                                                                                                           //
                                                                                                                //
    return clickDone;                                                                                           //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                sidebagdesc Helpers and Events                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
_templating.Template.equipmentdesc.helpers({                                                                    // 327
  inventory2: function () {                                                                                     // 329
    function inventory2() {                                                                                     //
      var char = activeCharacter();                                                                             // 330
      var inv = _brimChar.inventorydb.find({                                                                    // 331
        $and: [{ owner: this._id }, { activeequip: true }]                                                      // 332
      }).fetch();                                                                                               //
      return inv[0];                                                                                            // 337
    }                                                                                                           //
                                                                                                                //
    return inventory2;                                                                                          //
  }()                                                                                                           //
});                                                                                                             //
                                                                                                                //
_templating.Template.equipmentdesc.events({                                                                     // 343
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
  'click .done': function () {                                                                                  // 354
    function clickDone() {                                                                                      //
                                                                                                                //
      _brimChar.inventorydb.update(this._id, {                                                                  // 356
        $set: { activeequip: false }                                                                            // 357
      });                                                                                                       //
                                                                                                                //
      FlowRouter.go('/Equipment');                                                                              // 360
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
function person(name, type) {                                                                                   // 369
  // var invBuild = invBuild();                                                                                 //
  var doc = {                                                                                                   // 371
    name: name,                                                                                                 // 372
    'class': type,                                                                                              // 373
    lvl: 1,                                                                                                     // 374
    inventory: name,                                                                                            // 375
    agility: 1,                                                                                                 // 376
    strength: 1,                                                                                                // 377
    health: 10,                                                                                                 // 378
    defense: 5,                                                                                                 // 379
    armor: 0,                                                                                                   // 380
    cunning: 0,                                                                                                 // 381
    lore: 0,                                                                                                    // 382
    sanity: 0,                                                                                                  // 383
    willpower: 0,                                                                                               // 384
    Sarmor: 0,                                                                                                  // 385
    spirit: 0,                                                                                                  // 386
    luck: 0,                                                                                                    // 387
    melee: 0,                                                                                                   // 388
    combat: 0,                                                                                                  // 389
    range: 0,                                                                                                   // 390
    maxGrit: 0,                                                                                                 // 391
    initiative: 0,                                                                                              // 392
    corruption: 1,                                                                                              // 393
    darkStone: 0,                                                                                               // 394
    maxWeight: 10,                                                                                              // 395
    gold: 100,                                                                                                  // 396
    exp: 1000,                                                                                                  // 397
    move: 1                                                                                                     // 398
  };                                                                                                            //
  return doc;                                                                                                   // 400
}                                                                                                               //
                                                                                                                //
function basicInv(owner, name, slots, weight, val, desc) {                                                      // 403
  var item = {                                                                                                  // 404
    "owner": owner,                                                                                             // 405
    "name": name,                                                                                               // 406
    "type": "equipment",                                                                                        // 407
    "keys": "item",                                                                                             // 408
    "upgradeSlots": slots,                                                                                      // 409
    "weight": weight,                                                                                           // 410
    "value": val,                                                                                               // 411
    "desc": desc,                                                                                               // 412
    "activeequip": false                                                                                        // 413
  };                                                                                                            //
  return item;                                                                                                  // 415
};                                                                                                              //
                                                                                                                //
function basicSideBag(owner, name, type, count, desc) {                                                         // 418
                                                                                                                //
  var item = {                                                                                                  // 420
    "owner": owner,                                                                                             // 421
    "name": name,                                                                                               // 422
    "type": type,                                                                                               // 423
    "count": count,                                                                                             // 424
    "desc": desc,                                                                                               // 425
    "activeSideBag": false                                                                                      // 426
  };                                                                                                            //
  return item;                                                                                                  // 428
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
function activeCharacter() {                                                                                    // 439
  var output;                                                                                                   // 440
  var cursor = _brimChar.Characters.find();                                                                     // 441
  cursor.forEach(function (doc) {                                                                               // 442
    if (doc.activeChar == true) {                                                                               // 443
      output = doc;                                                                                             // 444
    }                                                                                                           //
  });                                                                                                           //
  return output;                                                                                                // 447
};                                                                                                              //
                                                                                                                //
function activeCharacter2() {                                                                                   // 450
  var output;                                                                                                   // 451
  var cursor = _brimChar.Characters.find({ activeChar: true });                                                 // 452
  output = cursor.fetch();                                                                                      // 453
  return output;                                                                                                // 454
};                                                                                                              //
                                                                                                                //
function activeSideBag() {                                                                                      // 457
  var output;                                                                                                   // 458
  var cursor = _brimChar.sidebagdb.find({ activeSideBag: true });                                               // 459
  output = cursor.fetch();                                                                                      // 460
  return output;                                                                                                // 461
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
                                                                                                                //
FlowRouter.route('/EquipmentItem', {                                                                            // 41
	name: 'EquipmentItem',                                                                                         // 42
	action: function () {                                                                                          // 43
		function action() {                                                                                           //
			BlazeLayout.render('equipmentdesc');                                                                         // 44
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