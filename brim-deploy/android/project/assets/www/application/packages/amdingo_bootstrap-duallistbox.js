//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/amdingo_bootstrap-duallistbox/packages/amdingo_bootstrap //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/amdingo:bootstrap-duallistbox/package/jquery.bootstrap-duallistbox.js                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
;(function ($, window, document, undefined) {                                                                        // 1
    // Create the defaults once                                                                                      // 2
    var pluginName = 'bootstrapDualListbox',                                                                         // 3
        defaults = {                                                                                                 // 4
            bootstrap2Compatible: false,                                                                             // 5
            filterTextClear: 'show all',                                                                             // 6
            filterPlaceHolder: 'Filter',                                                                             // 7
            moveSelectedLabel: 'Move selected',                                                                      // 8
            moveAllLabel: 'Move all',                                                                                // 9
            removeSelectedLabel: 'Remove selected',                                                                  // 10
            removeAllLabel: 'Remove all',                                                                            // 11
            moveOnSelect: true,                                                                 // true/false (forced true on androids, see the comment later)
            preserveSelectionOnMove: false,                                                     // 'all' / 'moved' / false
            selectedListLabel: false,                                                           // 'string', false   // 14
            nonSelectedListLabel: false,                                                        // 'string', false   // 15
            helperSelectNamePostfix: '_helper',                                                 // 'string_of_postfix' / false
            selectorMinimalHeight: 100,                                                                              // 17
            showFilterInputs: true,                                                             // whether to show filter inputs
            nonSelectedFilter: '',                                                              // string, filter the non selected options
            selectedFilter: '',                                                                 // string, filter the selected options
            infoText: 'Showing all {0}',                                                        // text when all options are visible / false for no info text
            infoTextFiltered: '<span class="label label-warning">Filtered</span> {0} from {1}', // when not all of the options are visible due to the filter
            infoTextEmpty: 'Empty list',                                                        // when there are no options present in the list
            filterOnValues: false                                                               // filter by selector's values, boolean
        },                                                                                                           // 25
    // Selections are invisible on android if the containing select is styled with CSS                               // 26
    // http://code.google.com/p/android/issues/detail?id=16922                                                       // 27
        isBuggyAndroid = /android/i.test(navigator.userAgent.toLowerCase());                                         // 28
                                                                                                                     // 29
    // The actual plugin constructor                                                                                 // 30
    function BootstrapDualListbox(element, options) {                                                                // 31
        this.element = $(element);                                                                                   // 32
        // jQuery has an extend method which merges the contents of two or                                           // 33
        // more objects, storing the result in the first object. The first object                                    // 34
        // is generally empty as we don't want to alter the default options for                                      // 35
        // future instances of the plugin                                                                            // 36
        this.settings = $.extend({}, defaults, options);                                                             // 37
        this._defaults = defaults;                                                                                   // 38
        this._name = pluginName;                                                                                     // 39
        this.init();                                                                                                 // 40
    }                                                                                                                // 41
                                                                                                                     // 42
    function triggerChangeEvent(dualListbox) {                                                                       // 43
        dualListbox.element.trigger('change');                                                                       // 44
    }                                                                                                                // 45
                                                                                                                     // 46
    function updateSelectionStates(dualListbox) {                                                                    // 47
        dualListbox.element.find('option').each(function(index, item) {                                              // 48
            var $item = $(item);                                                                                     // 49
            if (typeof($item.data('original-index')) === 'undefined') {                                              // 50
                $item.data('original-index', dualListbox.elementCount++);                                            // 51
            }                                                                                                        // 52
            if (typeof($item.data('_selected')) === 'undefined') {                                                   // 53
                $item.data('_selected', false);                                                                      // 54
            }                                                                                                        // 55
        });                                                                                                          // 56
    }                                                                                                                // 57
                                                                                                                     // 58
    function changeSelectionState(dualListbox, original_index, selected) {                                           // 59
        dualListbox.element.find('option').each(function(index, item) {                                              // 60
            var $item = $(item);                                                                                     // 61
            if ($item.data('original-index') === original_index) {                                                   // 62
                $item.prop('selected', selected);                                                                    // 63
            }                                                                                                        // 64
        });                                                                                                          // 65
    }                                                                                                                // 66
                                                                                                                     // 67
    function formatString(s, args) {                                                                                 // 68
        return s.replace(/\{(\d+)\}/g, function(match, number) {                                                     // 69
            return typeof args[number] !== 'undefined' ? args[number] : match;                                       // 70
        });                                                                                                          // 71
    }                                                                                                                // 72
                                                                                                                     // 73
    function refreshInfo(dualListbox) {                                                                              // 74
        if (!dualListbox.settings.infoText) {                                                                        // 75
            return;                                                                                                  // 76
        }                                                                                                            // 77
                                                                                                                     // 78
        var visible1 = dualListbox.elements.select1.find('option').length,                                           // 79
            visible2 = dualListbox.elements.select2.find('option').length,                                           // 80
            all1 = dualListbox.element.find('option').length - dualListbox.selectedElements,                         // 81
            all2 = dualListbox.selectedElements,                                                                     // 82
            content = '';                                                                                            // 83
                                                                                                                     // 84
        if (all1 === 0) {                                                                                            // 85
            content = dualListbox.settings.infoTextEmpty;                                                            // 86
        } else if (visible1 === all1) {                                                                              // 87
            content = formatString(dualListbox.settings.infoText, [visible1, all1]);                                 // 88
        } else {                                                                                                     // 89
            content = formatString(dualListbox.settings.infoTextFiltered, [visible1, all1]);                         // 90
        }                                                                                                            // 91
                                                                                                                     // 92
        dualListbox.elements.info1.html(content);                                                                    // 93
        dualListbox.elements.box1.toggleClass('filtered', !(visible1 === all1 || all1 === 0));                       // 94
                                                                                                                     // 95
        if (all2 === 0) {                                                                                            // 96
            content = dualListbox.settings.infoTextEmpty;                                                            // 97
        } else if (visible2 === all2) {                                                                              // 98
            content = formatString(dualListbox.settings.infoText, [visible2, all2]);                                 // 99
        } else {                                                                                                     // 100
            content = formatString(dualListbox.settings.infoTextFiltered, [visible2, all2]);                         // 101
        }                                                                                                            // 102
                                                                                                                     // 103
        dualListbox.elements.info2.html(content);                                                                    // 104
        dualListbox.elements.box2.toggleClass('filtered', !(visible2 === all2 || all2 === 0));                       // 105
    }                                                                                                                // 106
                                                                                                                     // 107
    function refreshSelects(dualListbox) {                                                                           // 108
        dualListbox.selectedElements = 0;                                                                            // 109
                                                                                                                     // 110
        dualListbox.elements.select1.empty();                                                                        // 111
        dualListbox.elements.select2.empty();                                                                        // 112
                                                                                                                     // 113
        dualListbox.element.find('option').each(function(index, item) {                                              // 114
            var $item = $(item);                                                                                     // 115
            if ($item.prop('selected')) {                                                                            // 116
                dualListbox.selectedElements++;                                                                      // 117
                dualListbox.elements.select2.append($item.clone(true).prop('selected', $item.data('_selected')));    // 118
            } else {                                                                                                 // 119
                dualListbox.elements.select1.append($item.clone(true).prop('selected', $item.data('_selected')));    // 120
            }                                                                                                        // 121
        });                                                                                                          // 122
                                                                                                                     // 123
        if (dualListbox.settings.showFilterInputs) {                                                                 // 124
            filter(dualListbox, 1);                                                                                  // 125
            filter(dualListbox, 2);                                                                                  // 126
        }                                                                                                            // 127
        refreshInfo(dualListbox);                                                                                    // 128
    }                                                                                                                // 129
                                                                                                                     // 130
    function filter(dualListbox, selectIndex) {                                                                      // 131
        if (!dualListbox.settings.showFilterInputs) {                                                                // 132
            return;                                                                                                  // 133
        }                                                                                                            // 134
                                                                                                                     // 135
        saveSelections(dualListbox, selectIndex);                                                                    // 136
                                                                                                                     // 137
        dualListbox.elements['select'+selectIndex].empty().scrollTop(0);                                             // 138
        var regex = new RegExp($.trim(dualListbox.elements['filterInput'+selectIndex].val()), 'gi'),                 // 139
            options = dualListbox.element;                                                                           // 140
                                                                                                                     // 141
        if (selectIndex === 1) {                                                                                     // 142
            options = options.find('option').not(':selected');                                                       // 143
        } else  {                                                                                                    // 144
            options = options.find('option:selected');                                                               // 145
        }                                                                                                            // 146
                                                                                                                     // 147
        options.each(function(index, item) {                                                                         // 148
            var $item = $(item),                                                                                     // 149
                isFiltered = true;                                                                                   // 150
            if (item.text.match(regex) || (dualListbox.settings.filterOnValues && $item.attr('value').match(regex) ) ) {
                isFiltered = false;                                                                                  // 152
                dualListbox.elements['select'+selectIndex].append($item.clone(true).prop('selected', $item.data('_selected')));
            }                                                                                                        // 154
            dualListbox.element.find('option').eq($item.data('original-index')).data('filtered'+selectIndex, isFiltered);
        });                                                                                                          // 156
                                                                                                                     // 157
        refreshInfo(dualListbox);                                                                                    // 158
    }                                                                                                                // 159
                                                                                                                     // 160
    function saveSelections(dualListbox, selectIndex) {                                                              // 161
        dualListbox.elements['select'+selectIndex].find('option').each(function(index, item) {                       // 162
            var $item = $(item);                                                                                     // 163
            dualListbox.element.find('option').eq($item.data('original-index')).data('_selected', $item.prop('selected'));
        });                                                                                                          // 165
    }                                                                                                                // 166
                                                                                                                     // 167
    function sortOptions(select) {                                                                                   // 168
        select.find('option').sort(function(a, b) {                                                                  // 169
            return ($(a).data('original-index') > $(b).data('original-index')) ? 1 : -1;                             // 170
        }).appendTo(select);                                                                                         // 171
    }                                                                                                                // 172
                                                                                                                     // 173
    function clearSelections(dualListbox) {                                                                          // 174
        dualListbox.elements.select1.find('option').each(function() {                                                // 175
            dualListbox.element.find('option').data('_selected', false);                                             // 176
        });                                                                                                          // 177
    }                                                                                                                // 178
                                                                                                                     // 179
    function move(dualListbox) {                                                                                     // 180
        if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {          // 181
            saveSelections(dualListbox, 1);                                                                          // 182
            saveSelections(dualListbox, 2);                                                                          // 183
        } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) { // 184
            saveSelections(dualListbox, 1);                                                                          // 185
        }                                                                                                            // 186
                                                                                                                     // 187
        dualListbox.elements.select1.find('option:selected').each(function(index, item) {                            // 188
            var $item = $(item);                                                                                     // 189
            if (!$item.data('filtered1')) {                                                                          // 190
                changeSelectionState(dualListbox, $item.data('original-index'), true);                               // 191
            }                                                                                                        // 192
        });                                                                                                          // 193
                                                                                                                     // 194
        refreshSelects(dualListbox);                                                                                 // 195
        triggerChangeEvent(dualListbox);                                                                             // 196
        sortOptions(dualListbox.elements.select2);                                                                   // 197
    }                                                                                                                // 198
                                                                                                                     // 199
    function remove(dualListbox) {                                                                                   // 200
        if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {          // 201
            saveSelections(dualListbox, 1);                                                                          // 202
            saveSelections(dualListbox, 2);                                                                          // 203
        } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) { // 204
            saveSelections(dualListbox, 2);                                                                          // 205
        }                                                                                                            // 206
                                                                                                                     // 207
        dualListbox.elements.select2.find('option:selected').each(function(index, item) {                            // 208
            var $item = $(item);                                                                                     // 209
            if (!$item.data('filtered2')) {                                                                          // 210
                changeSelectionState(dualListbox, $item.data('original-index'), false);                              // 211
            }                                                                                                        // 212
        });                                                                                                          // 213
                                                                                                                     // 214
        refreshSelects(dualListbox);                                                                                 // 215
        triggerChangeEvent(dualListbox);                                                                             // 216
        sortOptions(dualListbox.elements.select1);                                                                   // 217
    }                                                                                                                // 218
                                                                                                                     // 219
    function moveAll(dualListbox) {                                                                                  // 220
        if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {          // 221
            saveSelections(dualListbox, 1);                                                                          // 222
            saveSelections(dualListbox, 2);                                                                          // 223
        } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) { // 224
            saveSelections(dualListbox, 1);                                                                          // 225
        }                                                                                                            // 226
                                                                                                                     // 227
        dualListbox.element.find('option').each(function(index, item) {                                              // 228
            var $item = $(item);                                                                                     // 229
            if (!$item.data('filtered1')) {                                                                          // 230
                $item.prop('selected', true);                                                                        // 231
            }                                                                                                        // 232
        });                                                                                                          // 233
                                                                                                                     // 234
        refreshSelects(dualListbox);                                                                                 // 235
        triggerChangeEvent(dualListbox);                                                                             // 236
    }                                                                                                                // 237
                                                                                                                     // 238
    function removeAll(dualListbox) {                                                                                // 239
        if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {          // 240
            saveSelections(dualListbox, 1);                                                                          // 241
            saveSelections(dualListbox, 2);                                                                          // 242
        } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) { // 243
            saveSelections(dualListbox, 2);                                                                          // 244
        }                                                                                                            // 245
                                                                                                                     // 246
        dualListbox.element.find('option').each(function(index, item) {                                              // 247
            var $item = $(item);                                                                                     // 248
            if (!$item.data('filtered2')) {                                                                          // 249
                $item.prop('selected', false);                                                                       // 250
            }                                                                                                        // 251
        });                                                                                                          // 252
                                                                                                                     // 253
        refreshSelects(dualListbox);                                                                                 // 254
        triggerChangeEvent(dualListbox);                                                                             // 255
    }                                                                                                                // 256
                                                                                                                     // 257
    function bindEvents(dualListbox) {                                                                               // 258
        dualListbox.elements.form.submit(function(e) {                                                               // 259
            if (dualListbox.elements.filterInput1.is(':focus')) {                                                    // 260
                e.preventDefault();                                                                                  // 261
                dualListbox.elements.filterInput1.focusout();                                                        // 262
            } else if (dualListbox.elements.filterInput2.is(':focus')) {                                             // 263
                e.preventDefault();                                                                                  // 264
                dualListbox.elements.filterInput2.focusout();                                                        // 265
            }                                                                                                        // 266
        });                                                                                                          // 267
                                                                                                                     // 268
        dualListbox.element.on('bootstrapDualListbox.refresh', function(e, mustClearSelections){                     // 269
            dualListbox.refresh(mustClearSelections);                                                                // 270
        });                                                                                                          // 271
                                                                                                                     // 272
        dualListbox.elements.filterClear1.on('click', function() {                                                   // 273
            dualListbox.setNonSelectedFilter('', true);                                                              // 274
        });                                                                                                          // 275
                                                                                                                     // 276
        dualListbox.elements.filterClear2.on('click', function() {                                                   // 277
            dualListbox.setSelectedFilter('', true);                                                                 // 278
        });                                                                                                          // 279
                                                                                                                     // 280
        dualListbox.elements.moveButton.on('click', function() {                                                     // 281
            move(dualListbox);                                                                                       // 282
        });                                                                                                          // 283
                                                                                                                     // 284
        dualListbox.elements.moveAllButton.on('click', function() {                                                  // 285
            moveAll(dualListbox);                                                                                    // 286
        });                                                                                                          // 287
                                                                                                                     // 288
        dualListbox.elements.removeButton.on('click', function() {                                                   // 289
            remove(dualListbox);                                                                                     // 290
        });                                                                                                          // 291
                                                                                                                     // 292
        dualListbox.elements.removeAllButton.on('click', function() {                                                // 293
            removeAll(dualListbox);                                                                                  // 294
        });                                                                                                          // 295
                                                                                                                     // 296
        dualListbox.elements.filterInput1.on('change keyup', function() {                                            // 297
            filter(dualListbox, 1);                                                                                  // 298
        });                                                                                                          // 299
                                                                                                                     // 300
        dualListbox.elements.filterInput2.on('change keyup', function() {                                            // 301
            filter(dualListbox, 2);                                                                                  // 302
        });                                                                                                          // 303
    }                                                                                                                // 304
                                                                                                                     // 305
    BootstrapDualListbox.prototype = {                                                                               // 306
        init: function () {                                                                                          // 307
            // Add the custom HTML template                                                                          // 308
            this.container = $('' +                                                                                  // 309
            '<div class="bootstrap-duallistbox-container">' +                                                        // 310
            ' <div class="box1">' +                                                                                  // 311
            '   <label></label>' +                                                                                   // 312
            '   <span class="info-container">' +                                                                     // 313
            '     <span class="info"></span>' +                                                                      // 314
            '     <button type="button" class="btn clear1 pull-right"></button>' +                                   // 315
            '   </span>' +                                                                                           // 316
            '   <input class="filter" type="text">' +                                                                // 317
            '   <div class="btn-group buttons">' +                                                                   // 318
            '     <button type="button" class="btn moveall">' +                                                      // 319
            '       <i></i>' +                                                                                       // 320
            '       <i></i>' +                                                                                       // 321
            '     </button>' +                                                                                       // 322
            '     <button type="button" class="btn move">' +                                                         // 323
            '       <i></i>' +                                                                                       // 324
            '     </button>' +                                                                                       // 325
            '   </div>' +                                                                                            // 326
            '   <select multiple="multiple"></select>' +                                                             // 327
            ' </div>' +                                                                                              // 328
            ' <div class="box2">' +                                                                                  // 329
            '   <label></label>' +                                                                                   // 330
            '   <span class="info-container">' +                                                                     // 331
            '     <span class="info"></span>' +                                                                      // 332
            '     <button type="button" class="btn clear2 pull-right"></button>' +                                   // 333
            '   </span>' +                                                                                           // 334
            '   <input class="filter" type="text">' +                                                                // 335
            '   <div class="btn-group buttons">' +                                                                   // 336
            '     <button type="button" class="btn remove">' +                                                       // 337
            '       <i></i>' +                                                                                       // 338
            '     </button>' +                                                                                       // 339
            '     <button type="button" class="btn removeall">' +                                                    // 340
            '       <i></i>' +                                                                                       // 341
            '       <i></i>' +                                                                                       // 342
            '     </button>' +                                                                                       // 343
            '   </div>' +                                                                                            // 344
            '   <select multiple="multiple"></select>' +                                                             // 345
            ' </div>' +                                                                                              // 346
            '</div>')                                                                                                // 347
                .insertBefore(this.element);                                                                         // 348
                                                                                                                     // 349
            // Cache the inner elements                                                                              // 350
            this.elements = {                                                                                        // 351
                originalSelect: this.element,                                                                        // 352
                box1: $('.box1', this.container),                                                                    // 353
                box2: $('.box2', this.container),                                                                    // 354
                filterInput1: $('.box1 .filter', this.container),                                                    // 355
                filterInput2: $('.box2 .filter', this.container),                                                    // 356
                filterClear1: $('.box1 .clear1', this.container),                                                    // 357
                filterClear2: $('.box2 .clear2', this.container),                                                    // 358
                label1: $('.box1 > label', this.container),                                                          // 359
                label2: $('.box2 > label', this.container),                                                          // 360
                info1: $('.box1 .info', this.container),                                                             // 361
                info2: $('.box2 .info', this.container),                                                             // 362
                select1: $('.box1 select', this.container),                                                          // 363
                select2: $('.box2 select', this.container),                                                          // 364
                moveButton: $('.box1 .move', this.container),                                                        // 365
                removeButton: $('.box2 .remove', this.container),                                                    // 366
                moveAllButton: $('.box1 .moveall', this.container),                                                  // 367
                removeAllButton: $('.box2 .removeall', this.container),                                              // 368
                form: $($('.box1 .filter', this.container)[0].form)                                                  // 369
            };                                                                                                       // 370
                                                                                                                     // 371
            // Set select IDs                                                                                        // 372
            this.originalSelectName = this.element.attr('name') || '';                                               // 373
            var select1Id = 'bootstrap-duallistbox-nonselected-list_' + this.originalSelectName,                     // 374
                select2Id = 'bootstrap-duallistbox-selected-list_' + this.originalSelectName;                        // 375
            this.elements.select1.attr('id', select1Id);                                                             // 376
            this.elements.select2.attr('id', select2Id);                                                             // 377
            this.elements.label1.attr('for', select1Id);                                                             // 378
            this.elements.label2.attr('for', select2Id);                                                             // 379
                                                                                                                     // 380
            // Apply all settings                                                                                    // 381
            this.selectedElements = 0;                                                                               // 382
            this.elementCount = 0;                                                                                   // 383
            this.setBootstrap2Compatible(this.settings.bootstrap2Compatible);                                        // 384
            this.setFilterTextClear(this.settings.filterTextClear);                                                  // 385
            this.setFilterPlaceHolder(this.settings.filterPlaceHolder);                                              // 386
            this.setMoveSelectedLabel(this.settings.moveSelectedLabel);                                              // 387
            this.setMoveAllLabel(this.settings.moveAllLabel);                                                        // 388
            this.setRemoveSelectedLabel(this.settings.removeSelectedLabel);                                          // 389
            this.setRemoveAllLabel(this.settings.removeAllLabel);                                                    // 390
            this.setMoveOnSelect(this.settings.moveOnSelect);                                                        // 391
            this.setPreserveSelectionOnMove(this.settings.preserveSelectionOnMove);                                  // 392
            this.setSelectedListLabel(this.settings.selectedListLabel);                                              // 393
            this.setNonSelectedListLabel(this.settings.nonSelectedListLabel);                                        // 394
            this.setHelperSelectNamePostfix(this.settings.helperSelectNamePostfix);                                  // 395
            this.setSelectOrMinimalHeight(this.settings.selectorMinimalHeight);                                      // 396
                                                                                                                     // 397
            updateSelectionStates(this);                                                                             // 398
                                                                                                                     // 399
            this.setShowFilterInputs(this.settings.showFilterInputs);                                                // 400
            this.setNonSelectedFilter(this.settings.nonSelectedFilter);                                              // 401
            this.setSelectedFilter(this.settings.selectedFilter);                                                    // 402
            this.setInfoText(this.settings.infoText);                                                                // 403
            this.setInfoTextFiltered(this.settings.infoTextFiltered);                                                // 404
            this.setInfoTextEmpty(this.settings.infoTextEmpty);                                                      // 405
            this.setFilterOnValues(this.settings.filterOnValues);                                                    // 406
                                                                                                                     // 407
            // Hide the original select                                                                              // 408
            this.element.hide();                                                                                     // 409
                                                                                                                     // 410
            bindEvents(this);                                                                                        // 411
            refreshSelects(this);                                                                                    // 412
                                                                                                                     // 413
            return this.element;                                                                                     // 414
        },                                                                                                           // 415
        setBootstrap2Compatible: function(value, refresh) {                                                          // 416
            this.settings.bootstrap2Compatible = value;                                                              // 417
            if (value) {                                                                                             // 418
                this.container.removeClass('row').addClass('row-fluid bs2compatible');                               // 419
                this.container.find('.box1, .box2').removeClass('col-md-6').addClass('span6');                       // 420
                this.container.find('.clear1, .clear2').removeClass('btn-default btn-xs').addClass('btn-mini');      // 421
                this.container.find('input, select').removeClass('form-control');                                    // 422
                this.container.find('.btn').removeClass('btn-default');                                              // 423
                this.container.find('.moveall > i, .move > i').removeClass('glyphicon glyphicon-arrow-right').addClass('icon-arrow-right');
                this.container.find('.removeall > i, .remove > i').removeClass('glyphicon glyphicon-arrow-left').addClass('icon-arrow-left');
            } else {                                                                                                 // 426
                this.container.removeClass('row-fluid bs2compatible').addClass('row');                               // 427
                this.container.find('.box1, .box2').removeClass('span6').addClass('col-md-6');                       // 428
                this.container.find('.clear1, .clear2').removeClass('btn-mini').addClass('btn-default btn-xs');      // 429
                this.container.find('input, select').addClass('form-control');                                       // 430
                this.container.find('.btn').addClass('btn-default');                                                 // 431
                this.container.find('.moveall > i, .move > i').removeClass('icon-arrow-right').addClass('glyphicon glyphicon-arrow-right');
                this.container.find('.removeall > i, .remove > i').removeClass('icon-arrow-left').addClass('glyphicon glyphicon-arrow-left');
            }                                                                                                        // 434
            if (refresh) {                                                                                           // 435
                refreshSelects(this);                                                                                // 436
            }                                                                                                        // 437
            return this.element;                                                                                     // 438
        },                                                                                                           // 439
        setFilterTextClear: function(value, refresh) {                                                               // 440
            this.settings.filterTextClear = value;                                                                   // 441
            this.elements.filterClear1.html(value);                                                                  // 442
            this.elements.filterClear2.html(value);                                                                  // 443
            if (refresh) {                                                                                           // 444
                refreshSelects(this);                                                                                // 445
            }                                                                                                        // 446
            return this.element;                                                                                     // 447
        },                                                                                                           // 448
        setFilterPlaceHolder: function(value, refresh) {                                                             // 449
            this.settings.filterPlaceHolder = value;                                                                 // 450
            this.elements.filterInput1.attr('placeholder', value);                                                   // 451
            this.elements.filterInput2.attr('placeholder', value);                                                   // 452
            if (refresh) {                                                                                           // 453
                refreshSelects(this);                                                                                // 454
            }                                                                                                        // 455
            return this.element;                                                                                     // 456
        },                                                                                                           // 457
        setMoveSelectedLabel: function(value, refresh) {                                                             // 458
            this.settings.moveSelectedLabel = value;                                                                 // 459
            this.elements.moveButton.attr('title', value);                                                           // 460
            if (refresh) {                                                                                           // 461
                refreshSelects(this);                                                                                // 462
            }                                                                                                        // 463
            return this.element;                                                                                     // 464
        },                                                                                                           // 465
        setMoveAllLabel: function(value, refresh) {                                                                  // 466
            this.settings.moveAllLabel = value;                                                                      // 467
            this.elements.moveAllButton.attr('title', value);                                                        // 468
            if (refresh) {                                                                                           // 469
                refreshSelects(this);                                                                                // 470
            }                                                                                                        // 471
            return this.element;                                                                                     // 472
        },                                                                                                           // 473
        setRemoveSelectedLabel: function(value, refresh) {                                                           // 474
            this.settings.removeSelectedLabel = value;                                                               // 475
            this.elements.removeButton.attr('title', value);                                                         // 476
            if (refresh) {                                                                                           // 477
                refreshSelects(this);                                                                                // 478
            }                                                                                                        // 479
            return this.element;                                                                                     // 480
        },                                                                                                           // 481
        setRemoveAllLabel: function(value, refresh) {                                                                // 482
            this.settings.removeAllLabel = value;                                                                    // 483
            this.elements.removeAllButton.attr('title', value);                                                      // 484
            if (refresh) {                                                                                           // 485
                refreshSelects(this);                                                                                // 486
            }                                                                                                        // 487
            return this.element;                                                                                     // 488
        },                                                                                                           // 489
        setMoveOnSelect: function(value, refresh) {                                                                  // 490
            if (isBuggyAndroid) {                                                                                    // 491
                value = true;                                                                                        // 492
            }                                                                                                        // 493
            this.settings.moveOnSelect = value;                                                                      // 494
            if (this.settings.moveOnSelect) {                                                                        // 495
                this.container.addClass('moveonselect');                                                             // 496
                var self = this;                                                                                     // 497
                this.elements.select1.on('change', function() {                                                      // 498
                    move(self);                                                                                      // 499
                });                                                                                                  // 500
                this.elements.select2.on('change', function() {                                                      // 501
                    remove(self);                                                                                    // 502
                });                                                                                                  // 503
            } else {                                                                                                 // 504
                this.container.removeClass('moveonselect');                                                          // 505
                this.elements.select1.off('change');                                                                 // 506
                this.elements.select2.off('change');                                                                 // 507
            }                                                                                                        // 508
            if (refresh) {                                                                                           // 509
                refreshSelects(this);                                                                                // 510
            }                                                                                                        // 511
            return this.element;                                                                                     // 512
        },                                                                                                           // 513
        setPreserveSelectionOnMove: function(value, refresh) {                                                       // 514
            // We are forcing to move on select and disabling preserveSelectionOnMove on Android                     // 515
            if (isBuggyAndroid) {                                                                                    // 516
                value = false;                                                                                       // 517
            }                                                                                                        // 518
            this.settings.preserveSelectionOnMove = value;                                                           // 519
            if (refresh) {                                                                                           // 520
                refreshSelects(this);                                                                                // 521
            }                                                                                                        // 522
            return this.element;                                                                                     // 523
        },                                                                                                           // 524
        setSelectedListLabel: function(value, refresh) {                                                             // 525
            this.settings.selectedListLabel = value;                                                                 // 526
            if (value) {                                                                                             // 527
                this.elements.label2.show().html(value);                                                             // 528
            } else {                                                                                                 // 529
                this.elements.label2.hide().html(value);                                                             // 530
            }                                                                                                        // 531
            if (refresh) {                                                                                           // 532
                refreshSelects(this);                                                                                // 533
            }                                                                                                        // 534
            return this.element;                                                                                     // 535
        },                                                                                                           // 536
        setNonSelectedListLabel: function(value, refresh) {                                                          // 537
            this.settings.nonSelectedListLabel = value;                                                              // 538
            if (value) {                                                                                             // 539
                this.elements.label1.show().html(value);                                                             // 540
            } else {                                                                                                 // 541
                this.elements.label1.hide().html(value);                                                             // 542
            }                                                                                                        // 543
            if (refresh) {                                                                                           // 544
                refreshSelects(this);                                                                                // 545
            }                                                                                                        // 546
            return this.element;                                                                                     // 547
        },                                                                                                           // 548
        setHelperSelectNamePostfix: function(value, refresh) {                                                       // 549
            this.settings.helperSelectNamePostfix = value;                                                           // 550
            if (value) {                                                                                             // 551
                this.elements.select1.attr('name', this.originalSelectName + value + '1');                           // 552
                this.elements.select2.attr('name', this.originalSelectName + value + '2');                           // 553
            } else {                                                                                                 // 554
                this.elements.select1.removeAttr('name');                                                            // 555
                this.elements.select2.removeAttr('name');                                                            // 556
            }                                                                                                        // 557
            if (refresh) {                                                                                           // 558
                refreshSelects(this);                                                                                // 559
            }                                                                                                        // 560
            return this.element;                                                                                     // 561
        },                                                                                                           // 562
        setSelectOrMinimalHeight: function(value, refresh) {                                                         // 563
            this.settings.selectorMinimalHeight = value;                                                             // 564
            var height = this.element.height();                                                                      // 565
            if (this.element.height() < value) {                                                                     // 566
                height = value;                                                                                      // 567
            }                                                                                                        // 568
            this.elements.select1.height(height);                                                                    // 569
            this.elements.select2.height(height);                                                                    // 570
            if (refresh) {                                                                                           // 571
                refreshSelects(this);                                                                                // 572
            }                                                                                                        // 573
            return this.element;                                                                                     // 574
        },                                                                                                           // 575
        setShowFilterInputs: function(value, refresh) {                                                              // 576
            if (!value) {                                                                                            // 577
                this.setNonSelectedFilter('');                                                                       // 578
                this.setSelectedFilter('');                                                                          // 579
                refreshSelects(this);                                                                                // 580
                this.elements.filterInput1.hide();                                                                   // 581
                this.elements.filterInput2.hide();                                                                   // 582
            } else {                                                                                                 // 583
                this.elements.filterInput1.show();                                                                   // 584
                this.elements.filterInput2.show();                                                                   // 585
            }                                                                                                        // 586
            this.settings.showFilterInputs = value;                                                                  // 587
            if (refresh) {                                                                                           // 588
                refreshSelects(this);                                                                                // 589
            }                                                                                                        // 590
            return this.element;                                                                                     // 591
        },                                                                                                           // 592
        setNonSelectedFilter: function(value, refresh) {                                                             // 593
            if (this.settings.showFilterInputs) {                                                                    // 594
                this.settings.nonSelectedFilter = value;                                                             // 595
                this.elements.filterInput1.val(value);                                                               // 596
                if (refresh) {                                                                                       // 597
                    refreshSelects(this);                                                                            // 598
                }                                                                                                    // 599
                return this.element;                                                                                 // 600
            }                                                                                                        // 601
        },                                                                                                           // 602
        setSelectedFilter: function(value, refresh) {                                                                // 603
            if (this.settings.showFilterInputs) {                                                                    // 604
                this.settings.selectedFilter = value;                                                                // 605
                this.elements.filterInput2.val(value);                                                               // 606
                if (refresh) {                                                                                       // 607
                    refreshSelects(this);                                                                            // 608
                }                                                                                                    // 609
                return this.element;                                                                                 // 610
            }                                                                                                        // 611
        },                                                                                                           // 612
        setInfoText: function(value, refresh) {                                                                      // 613
            this.settings.infoText = value;                                                                          // 614
            if (refresh) {                                                                                           // 615
                refreshSelects(this);                                                                                // 616
            }                                                                                                        // 617
            return this.element;                                                                                     // 618
        },                                                                                                           // 619
        setInfoTextFiltered: function(value, refresh) {                                                              // 620
            this.settings.infoTextFiltered = value;                                                                  // 621
            if (refresh) {                                                                                           // 622
                refreshSelects(this);                                                                                // 623
            }                                                                                                        // 624
            return this.element;                                                                                     // 625
        },                                                                                                           // 626
        setInfoTextEmpty: function(value, refresh) {                                                                 // 627
            this.settings.infoTextEmpty = value;                                                                     // 628
            if (refresh) {                                                                                           // 629
                refreshSelects(this);                                                                                // 630
            }                                                                                                        // 631
            return this.element;                                                                                     // 632
        },                                                                                                           // 633
        setFilterOnValues: function(value, refresh) {                                                                // 634
            this.settings.filterOnValues = value;                                                                    // 635
            if (refresh) {                                                                                           // 636
                refreshSelects(this);                                                                                // 637
            }                                                                                                        // 638
            return this.element;                                                                                     // 639
        },                                                                                                           // 640
        getContainer: function() {                                                                                   // 641
            return this.container;                                                                                   // 642
        },                                                                                                           // 643
        refresh: function(mustClearSelections) {                                                                     // 644
            updateSelectionStates(this);                                                                             // 645
                                                                                                                     // 646
            if (!mustClearSelections) {                                                                              // 647
                saveSelections(this, 1);                                                                             // 648
                saveSelections(this, 2);                                                                             // 649
            } else {                                                                                                 // 650
                clearSelections(this);                                                                               // 651
            }                                                                                                        // 652
                                                                                                                     // 653
            refreshSelects(this);                                                                                    // 654
        },                                                                                                           // 655
        destroy: function() {                                                                                        // 656
            this.container.remove();                                                                                 // 657
            this.element.show();                                                                                     // 658
            $.data(this, 'plugin_' + pluginName, null);                                                              // 659
            return this.element;                                                                                     // 660
        }                                                                                                            // 661
    };                                                                                                               // 662
                                                                                                                     // 663
    // A really lightweight plugin wrapper around the constructor,                                                   // 664
    // preventing against multiple instantiations                                                                    // 665
    $.fn[ pluginName ] = function (options) {                                                                        // 666
        var args = arguments;                                                                                        // 667
                                                                                                                     // 668
        // Is the first parameter an object (options), or was omitted, instantiate a new instance of the plugin.     // 669
        if (options === undefined || typeof options === 'object') {                                                  // 670
            return this.each(function () {                                                                           // 671
                // If this is not a select                                                                           // 672
                if (!$(this).is('select')) {                                                                         // 673
                    $(this).find('select').each(function(index, item) {                                              // 674
                        // For each nested select, instantiate the Dual List Box                                     // 675
                        $(item).bootstrapDualListbox(options);                                                       // 676
                    });                                                                                              // 677
                } else if (!$.data(this, 'plugin_' + pluginName)) {                                                  // 678
                    // Only allow the plugin to be instantiated once so we check that the element has no plugin instantiation yet
                                                                                                                     // 680
                    // if it has no instance, create a new one, pass options to our plugin constructor,              // 681
                    // and store the plugin instance in the elements jQuery data object.                             // 682
                    $.data(this, 'plugin_' + pluginName, new BootstrapDualListbox(this, options));                   // 683
                }                                                                                                    // 684
            });                                                                                                      // 685
            // If the first parameter is a string and it doesn't start with an underscore or "contains" the `init`-function,
            // treat this as a call to a public method.                                                              // 687
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {                        // 688
                                                                                                                     // 689
            // Cache the method call to make it possible to return a value                                           // 690
            var returns;                                                                                             // 691
                                                                                                                     // 692
            this.each(function () {                                                                                  // 693
                var instance = $.data(this, 'plugin_' + pluginName);                                                 // 694
                // Tests that there's already a plugin-instance and checks that the requested public method exists   // 695
                if (instance instanceof BootstrapDualListbox && typeof instance[options] === 'function') {           // 696
                    // Call the method of our plugin instance, and pass it the supplied arguments.                   // 697
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));                // 698
                }                                                                                                    // 699
            });                                                                                                      // 700
                                                                                                                     // 701
            // If the earlier cached method gives a value back return the value,                                     // 702
            // otherwise return this to preserve chainability.                                                       // 703
            return returns !== undefined ? returns : this;                                                           // 704
        }                                                                                                            // 705
                                                                                                                     // 706
    };                                                                                                               // 707
                                                                                                                     // 708
})(jQuery, window, document);                                                                                        // 709
                                                                                                                     // 710
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 720
}).call(this);                                                       // 721
                                                                     // 722
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['amdingo:bootstrap-duallistbox'] = {};

})();
