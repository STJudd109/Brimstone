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
var EditableText = Package['babrahams:editable-text'].EditableText;
var sanitizeHtml = Package['babrahams:editable-text'].sanitizeHtml;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/babrahams_editable-text-wysiwyg/lib/bootstrap_wysiwyg.js                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/bootstrap-wysiwyg/lib/jquery.hotkeys.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/*                                                                                                                   // 1
 * jQuery Hotkeys Plugin                                                                                             // 2
 * Copyright 2010, John Resig                                                                                        // 3
 * Dual licensed under the MIT or GPL Version 2 licenses.                                                            // 4
 *                                                                                                                   // 5
 * Based upon the plugin by Tzury Bar Yochay:                                                                        // 6
 * http://github.com/tzuryby/hotkeys                                                                                 // 7
 *                                                                                                                   // 8
 * Original idea by:                                                                                                 // 9
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/                                               // 10
*/                                                                                                                   // 11
                                                                                                                     // 12
(function(jQuery){                                                                                                   // 13
                                                                                                                        // 14
    jQuery.hotkeys = {                                                                                                  // 15
        version: "0.8",                                                                                                    // 16
                                                                                                                     // 17
        specialKeys: {                                                                                                     // 18
            8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",                          // 19
            20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",                      // 20
            37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del",                                           // 21
            96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",                                       // 22
            104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/",                                            // 23
            112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",                           // 24
            120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"               // 25
        },                                                                                                                 // 26
                                                                                                                        // 27
        shiftNums: {                                                                                                       // 28
            "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",                                   // 29
            "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",                                 // 30
            ".": ">",  "/": "?",  "\\": "|"                                                                                   // 31
        }                                                                                                                  // 32
    };                                                                                                                  // 33
                                                                                                                     // 34
    function keyHandler( handleObj ) {                                                                                  // 35
        // Only care when a possible input has been specified                                                              // 36
        if ( typeof handleObj.data !== "string" ) {                                                                        // 37
            return;                                                                                                           // 38
        }                                                                                                                  // 39
                                                                                                                           // 40
        var origHandler = handleObj.handler,                                                                               // 41
            keys = handleObj.data.toLowerCase().split(" "),                                                                   // 42
            textAcceptingInputTypes = ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color"];
                                                                                                                        // 44
        handleObj.handler = function( event ) {                                                                            // 45
            // Don't fire in text-accepting inputs that we didn't directly bind to                                            // 46
            if ( this !== event.target && (/textarea|select/i.test( event.target.nodeName ) ||                                // 47
                jQuery.inArray(event.target.type, textAcceptingInputTypes) > -1 ) ) {                                            // 48
                return;                                                                                                          // 49
            }                                                                                                                 // 50
                                                                                                                              // 51
            // Keypress represents characters, not special keys                                                               // 52
            var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[ event.which ],                             // 53
                character = String.fromCharCode( event.which ).toLowerCase(),                                                    // 54
                key, modif = "", possible = {};                                                                                  // 55
                                                                                                                     // 56
            // check combinations (alt|ctrl|shift+anything)                                                                   // 57
            if ( event.altKey && special !== "alt" ) {                                                                        // 58
                modif += "alt+";                                                                                                 // 59
            }                                                                                                                 // 60
                                                                                                                     // 61
            if ( event.ctrlKey && special !== "ctrl" ) {                                                                      // 62
                modif += "ctrl+";                                                                                                // 63
            }                                                                                                                 // 64
                                                                                                                              // 65
            // TODO: Need to make sure this works consistently across platforms                                               // 66
            if ( event.metaKey && !event.ctrlKey && special !== "meta" ) {                                                    // 67
                modif += "meta+";                                                                                                // 68
            }                                                                                                                 // 69
                                                                                                                     // 70
            if ( event.shiftKey && special !== "shift" ) {                                                                    // 71
                modif += "shift+";                                                                                               // 72
            }                                                                                                                 // 73
                                                                                                                     // 74
            if ( special ) {                                                                                                  // 75
                possible[ modif + special ] = true;                                                                              // 76
                                                                                                                     // 77
            } else {                                                                                                          // 78
                possible[ modif + character ] = true;                                                                            // 79
                possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true;                                                // 80
                                                                                                                     // 81
                // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"                                                    // 82
                if ( modif === "shift+" ) {                                                                                      // 83
                    possible[ jQuery.hotkeys.shiftNums[ character ] ] = true;                                                       // 84
                }                                                                                                                // 85
            }                                                                                                                 // 86
                                                                                                                     // 87
            for ( var i = 0, l = keys.length; i < l; i++ ) {                                                                  // 88
                if ( possible[ keys[i] ] ) {                                                                                     // 89
                    return origHandler.apply( this, arguments );                                                                    // 90
                }                                                                                                                // 91
            }                                                                                                                 // 92
        };                                                                                                                 // 93
    }                                                                                                                   // 94
                                                                                                                     // 95
    jQuery.each([ "keydown", "keyup", "keypress" ], function() {                                                        // 96
        jQuery.event.special[ this ] = { add: keyHandler };                                                                // 97
    });                                                                                                                 // 98
                                                                                                                     // 99
})( jQuery );                                                                                                        // 100
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     // 108
                                                                                                                     // 109
                                                                                                                     // 110
                                                                                                                     // 111
                                                                                                                     // 112
                                                                                                                     // 113
                                                                                                                     // 114
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/bootstrap-wysiwyg/lib/bootstrap-wysiwyg.js                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* http://github.com/mindmup/bootstrap-wysiwyg */                                                                    // 1
/*global jQuery, $, FileReader*/                                                                                     // 2
/*jslint browser:true*/                                                                                              // 3
(function ($) {                                                                                                      // 4
    'use strict';                                                                                                       // 5
    var readFileInto = function (fileInfo,type) {                                                                     // 6
        var loader = $.Deferred(),                                                                                         // 7
            fReader = new FileReader();                                                                                       // 8
        fReader.onload = function (e) {                                                                                    // 9
            loader.resolve(e.target.result);                                                                                  // 10
        };                                                                                                                 // 11
        fReader.onerror = loader.reject;                                                                                   // 12
        fReader.onprogress = loader.notify;                                                                          // 133
        switch (type) {                                                                                              // 134
             case 'dataURL' :                                                                           // 13        // 135
                fReader.readAsDataURL(fileInfo);                                                                     // 136
                break;                                                                                               // 137
            case 'text' :                                                                                            // 138
                fReader.readAsText(fileInfo);                                                                        // 139
                break;                                                                                               // 140
        }                                                                                                            // 141
        return loader.promise();                                                                                           // 15
    };                                                                                                                  // 16
    $.fn.cleanHtml = function () {                                                                                      // 17
        var html = $(this).html();                                                                                         // 18
        return html && html.replace(/(<br>|\s|<div><br><\/div>|&nbsp;)*$/, '');                                            // 19
    };                                                                                                                  // 20
    $.fn.wysiwyg = function (userOptions) {                                                                            // 21
        var editor = this,                                                                                                 // 22
            selectedRange,                                                                                                    // 23
            options,                                                                                                          // 24
            updateToolbar = function () {                                                                                     // 25
                if (options.activeToolbarClass) {                                                                                // 26
                    $(options.toolbarSelector).find('.btn[data-' + options.commandRole + ']').each(function () {                    // 27
                        var command = $(this).data(options.commandRole);                                                               // 28
                        if (document.queryCommandEnabled(command) && document.queryCommandState(command)) {                                                                     // 29
                            $(this).addClass(options.activeToolbarClass);                                                                 // 30
                        } else {                                                                                                       // 31
                            $(this).removeClass(options.activeToolbarClass);                                                              // 32
                        }                                                                                                              // 33
                    });                                                                                                             // 34
                }                                                                                                                // 35
            },                                                                                                                // 36
            execCommand = function (commandWithArgs, valueArg) {                                                              // 37
                var commandArr = commandWithArgs.split(' '),                                                                     // 38
                    command = commandArr.shift(),                                                                                   // 39
                    args = commandArr.join(' ') + (valueArg || '');                                                                 // 40
                document.execCommand(command, 0, args);                                                                          // 41
                updateToolbar();                                                                                                 // 42
            },                                                                                                                // 43
            bindHotkeys = function (hotKeys) {                                                                                // 44
                $.each(hotKeys, function (hotkey, command) {                                                                     // 45
                    editor.keydown(hotkey, function (e) {                                                                           // 46
                        if (editor.attr('contenteditable') && editor.is(':visible')) {                                                 // 47
                            e.preventDefault();                                                                                           // 48
                            e.stopPropagation();                                                                                          // 49
                            execCommand(command);                                                                                         // 50
                        }                                                                                                              // 51
                    }).keyup(hotkey, function (e) {                                                                                 // 52
                        if (editor.attr('contenteditable') && editor.is(':visible')) {                                                 // 53
                            e.preventDefault();                                                                                           // 54
                            e.stopPropagation();                                                                                          // 55
                        }                                                                                                              // 56
                    });                                                                                                             // 57
                });                                                                                                              // 58
            },                                                                                                                // 59
            getCurrentRange = function () {                                                                                   // 60
                var sel = window.getSelection();                                                                                 // 61
                if (sel.getRangeAt && sel.rangeCount) {                                                                          // 62
                    return sel.getRangeAt(0);                                                                                       // 63
                }                                                                                                                // 64
            },                                                                                                                // 65
            saveSelection = function () {                                                                                     // 66
                selectedRange = getCurrentRange();                                                                               // 67
            },                                                                                                                // 68
            restoreSelection = function () {                                                                                  // 69
                var selection = window.getSelection();                                                                           // 70
                if (selectedRange) {                                                                                             // 71
                    try {                                                                                                           // 72
                        selection.removeAllRanges();                                                                                   // 73
                    } catch (ex) {                                                                                                  // 74
                        document.body.createTextRange().select();                                                                      // 75
                        document.selection.empty();                                                                                    // 76
                    }                                                                                                               // 77
                                                                                                                     // 78
                    selection.addRange(selectedRange);                                                                              // 79
                }                                                                                                                // 80
            },                                                                                                                // 81
            insertFiles = function (files) {                                                                                  // 82
                editor.focus();                                                                                                  // 83
                $.each(files, function (idx, fileInfo) {                                                             // 211
                    if (EditableText.maximumImageSize && /^image\//.test(fileInfo.type)) {                           // 212
                        if (fileInfo.size > EditableText.maximumImageSize) {                                         // 213
                          options.fileUploadError("File too large", "This file is: " + Math.floor(fileInfo.size/1000) + "k. The maximum file size allowed is 200k.");
                          return;                                                                                    // 215
                        }                                                                                            // 216
                        $.when(readFileInto(fileInfo,'dataURL')).done(function (dataUrl) {                                                // 86
                            execCommand('insertimage', dataUrl);                                                                          // 87
                        }).fail(function (e) {                                                                                         // 88
                            options.fileUploadError("file-reader", e);                                                                    // 89
                        });                                                                                          // 221
                        return;                                                                                      // 222
                    }                                                                                                // 223
                    var fileName = fileInfo && fileInfo.name;                                                        // 224
                    var parts = fileName && fileName.split('.');                                                     // 225
                    var extension = parts && parts.length && parts[parts.length - 1];                                // 226
                    if (extension) {                                                                                 // 227
                      switch (extension) {                                                                           // 228
                        case 'gdoc':                                                                                 // 229
                        case 'gsheet':                                                                               // 230
                        case 'gslides':                                                                              // 231
                          $.when(readFileInto(fileInfo,'text')).done(function (text) {                                                // 86
                            var fileContents = JSON.parse(text);                                                     // 233
                            if (fileContents && fileContents.url) {                                                  // 234
                              document.execCommand('insertHTML', false, '<br /><a href="' + fileContents.url + '" class="wysiwyg-' + extension + '" target="_blank"><i class="fa">&#xf15b;</i>&nbsp;' + fileInfo.name + '</a>');
                            }  // 87                                                                                 // 236
                          }).fail(function (e) {                                                                                         // 88
                              options.fileUploadError("file-reader", e);                                                                    // 89
                          });                                                                                        // 239
                          return;                                                                                    // 240
                      }                                                                                              // 241
                    }                                                                                                // 242
                    options.fileUploadError("Unsupported file type", "You tried to upload a file of type: " + fileInfo.type + ". Only Google docs and small images can be dragged into the editor.");                        
                });                                                                                                              // 94
            },                                                                                                                // 95
            markSelection = function (input, color) {                                                                         // 96
                restoreSelection();                                                                                              // 97
                document.execCommand('hiliteColor', 0, color || 'transparent');                                                  // 98
                saveSelection();                                                                                                 // 99
                input.data(options.selectionMarker, color);                                                                      // 100
            },                                                                                                                // 101
            bindToolbar = function (toolbar, options) {                                                                       // 102
                toolbar.find('a[data-' + options.commandRole + ']').click(function () {                                          // 103
                    restoreSelection();                                                                                             // 104
                    editor.focus();                                                                                                 // 105
                    execCommand($(this).data(options.commandRole));                                                                 // 106
                    saveSelection();                                                                                                // 107
                });                                                                                                              // 108
                toolbar.find('[data-toggle=dropdown]').click(restoreSelection);                                                  // 109
                                                                                                                     // 110
                toolbar.find('input[type=text][data-' + options.commandRole + ']').on('webkitspeechchange change', function () { // 111
                    var newValue = this.value; /* ugly but prevents fake double-calls due to selection restoration */               // 112
                    this.value = '';                                                                                                // 113
                    restoreSelection();                                                                                             // 114
                    if (newValue) {                                                                                                 // 115
                        editor.focus();                                                                                                // 116
                        execCommand($(this).data(options.commandRole), newValue);                                                      // 117
                    }                                                                                                               // 118
                    saveSelection();                                                                                                // 119
                }).on('focus', function () {                                                                                     // 120
                    var input = $(this);                                                                                            // 121
                    if (!input.data(options.selectionMarker)) {                                                                     // 122
                        markSelection(input, options.selectionColor);                                                                  // 123
                        input.focus();                                                                                                 // 124
                    }                                                                                                               // 125
                }).on('blur', function () {                                                                                      // 126
                    var input = $(this);                                                                                            // 127
                    if (input.data(options.selectionMarker)) {                                                                      // 128
                        markSelection(input, false);                                                                                   // 129
                    }                                                                                                               // 130
                });                                                                                                              // 131
                toolbar.find('input[type=file][data-' + options.commandRole + ']').change(function () {                          // 132
                    restoreSelection();                                                                                             // 133
                    if (this.type === 'file' && this.files && this.files.length > 0) {                                              // 134
                        insertFiles(this.files);                                                                                       // 135
                    }                                                                                                               // 136
                    saveSelection();                                                                                                // 137
                    this.value = '';                                                                                                // 138
                });                                                                                                              // 139
            },                                                                                                                // 140
            initFileDrops = function () {                                                                                     // 141
                editor.on('dragenter dragover', false)                                                                           // 142
                    .on('drop', function (e) {                                                                              // 143
                        var dataTransfer = e.originalEvent.dataTransfer;                                                               // 144
                        e.stopPropagation();                                                                                           // 145
                        e.preventDefault();                                                                                            // 146
                        if (dataTransfer && dataTransfer.files && dataTransfer.files.length > 0) {                                     // 147
                            insertFiles(dataTransfer.files);                                                                              // 148
                        }                                                                                                              // 149
                    });                                                                                                             // 150
            };                                                                                                                // 151
        options = $.extend({}, $.fn.wysiwyg.defaults, userOptions);                                                        // 152
        bindHotkeys(options.hotKeys);                                                                                      // 153
        initFileDrops();                                                                                                   // 154
        bindToolbar($(options.toolbarSelector), options);                                                                  // 155
        editor.attr('contenteditable', true)                                                                               // 156
            .on('mouseup keyup mouseout', function () {                                                                       // 157
                saveSelection();                                                                                                 // 158
                updateToolbar();                                                                                                 // 159
            });                                                                                                               // 160
        $(window).bind('touchend', function (e) {                                                                          // 161
            var isInside = (editor.is(e.target) || editor.has(e.target).length > 0),                                          // 162
                currentRange = getCurrentRange(),                                                                                // 163
                clear = currentRange && (currentRange.startContainer === currentRange.endContainer && currentRange.startOffset === currentRange.endOffset);
            if (!clear || isInside) {                                                                                         // 165
                saveSelection();                                                                                                 // 166
                updateToolbar();                                                                                                 // 167
            }                                                                                                                 // 168
        });                                                                                                                // 169
        return this;                                                                                                       // 170
    };                                                                                                                  // 171
    $.fn.wysiwyg.defaults = {                                                                                           // 172
        hotKeys: {                                                                                                         // 173
            'ctrl+b meta+b': 'bold',                                                                                          // 174
            'ctrl+i meta+i': 'italic',                                                                                        // 175
            'ctrl+u meta+u': 'underline',                                                                                     // 176
            'ctrl+z meta+z': 'undo',                                                                                          // 177
            'ctrl+y meta+y meta+shift+z': 'redo',                                                                    // 328
            'ctrl+l meta+l': 'justifyleft',                                                                          // 329
            'ctrl+r meta+r': 'justifyright',                                                                         // 330
            'ctrl+e meta+e': 'justifycenter',                                                                        // 331
            'ctrl+j meta+j': 'justifyfull',                                                                          // 332
            'shift+tab': 'outdent',                                                                                  // 333
            'tab': 'indent'                                                                                          // 334
        },                                                                                                           // 335
        toolbarSelector: '[data-role=editor-toolbar]',                                                               // 336
        commandRole: 'edit',                                                                                         // 337
        activeToolbarClass: 'btn-info',                                                                              // 338
        selectionMarker: 'edit-focus-marker',                                                                        // 339
        selectionColor: 'darkgrey',                                                                                  // 340
        fileUploadError: function (reason, detail) { alert("File upload error\n\n" + reason + "\n\n" + detail); }    // 341
    };                                                                                                               // 342
}(window.jQuery));                                                                                                   // 343
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/babrahams_editable-text-wysiwyg/lib/wysiwyg.js                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// Every wysiwyg implementation needs to include the following in a client-side js file:                             // 1
// EditableText.wysiwyg = true;                                                                                      // 2
// This means that the editableText widget will not fall back to a textarea                                          // 3
                                                                                                                     // 4
EditableText._blockFocusoutForWYSIWYG = false;                                                                       // 5
                                                                                                                     // 6
// Utility functions                                                                                                 // 7
                                                                                                                     // 8
$.fn.focusEnd = function() {                                                                                         // 9
    $(this).focus();                                                                                                 // 10
    var tmp = $('<span />').appendTo($(this)),                                                                       // 11
        node = tmp.get(0),                                                                                           // 12
        range = null,                                                                                                // 13
        sel = null;                                                                                                  // 14
                                                                                                                     // 15
    if (document.selection) {                                                                                        // 16
        range = document.body.createTextRange();                                                                     // 17
        range.moveToElementText(node);                                                                               // 18
        range.select();                                                                                              // 19
    } else if (window.getSelection) {                                                                                // 20
        range = document.createRange();                                                                              // 21
        range.selectNode(node);                                                                                      // 22
        sel = window.getSelection();                                                                                 // 23
        sel.removeAllRanges();                                                                                       // 24
        sel.addRange(range);                                                                                         // 25
    }                                                                                                                // 26
    tmp.remove();                                                                                                    // 27
    return this;                                                                                                     // 28
}                                                                                                                    // 29
                                                                                                                     // 30
EditableText._allowedHtmlPasteCleaner = function() {                                                                 // 31
  var allowed = EditableText._allowedHtml();                                                                         // 32
  return _.reduce(allowed.allowedTags,function(memo,tag) { memo[tag] = allowed.allowedAttributes[tag] || []; return memo;}, {});
}                                                                                                                    // 34
                                                                                                                     // 35
EditableText._cleanHTML = function(element, allow) {                                                                 // 36
                                                                                                                     // 37
  // fromList is a utility function used by EditableText._cleanHTML. This is really just `Array.prototype.slice()`   // 38
  // except that the ECMAScript standard doesn't guarantee we're allowed to call that on                             // 39
  // a host object like a DOM NodeList, boo.                                                                         // 40
  var fromList = function(list) {                                                                                    // 41
      var array= new Array(list.length);                                                                             // 42
      for (var i= 0, n= list.length; i<n; i++)                                                                       // 43
          array[i]= list[i];                                                                                         // 44
      return array;                                                                                                  // 45
  };                                                                                                                 // 46
                                                                                                                     // 47
  // Recurse into child elements                                                                                     // 48
  fromList(element.childNodes).forEach(function(child) {                                                             // 49
      if (child.nodeType===1) {                                                                                      // 50
        EditableText._cleanHTML(child, allow);                                                                       // 51
        var tag= child.tagName.toLowerCase();                                                                        // 52
        if (tag in allow) {                                                                                          // 53
          // Remove unwanted attributes                                                                              // 54
          //                                                                                                         // 55
          fromList(child.attributes).forEach(function(attr) {                                                        // 56
              if (allow[tag].indexOf(attr.name.toLowerCase())===-1) {                                                // 57
                 child.removeAttribute(attr);                                                                        // 58
              }                                                                                                      // 59
          });                                                                                                        // 60
        }                                                                                                            // 61
        else {                                                                                                       // 62
          // Replace unwanted elements with their contents                                                           // 63
          //                                                                                                         // 64
          while (child.firstChild)                                                                                   // 65
              element.insertBefore(child.firstChild, child);                                                         // 66
          element.removeChild(child);                                                                                // 67
        }                                                                                                            // 68
      }                                                                                                              // 69
      else if (child.nodeType===3) {                                                                                 // 70
        child.textContent = child.textContent.replace(/<!--[\s\S]*?-->/g," ");                                       // 71
      }                                                                                                              // 72
  });                                                                                                                // 73
}                                                                                                                    // 74
                                                                                                                     // 75
                                                                                                                     // 76
EditableText._sanitizeHTML = function(html) {                                                                        // 77
  // Find all instances of href=" and if the first four letters aren't "http", put in "http://"                      // 78
  var currentIndex = 0,newIndex;                                                                                     // 79
  do {                                                                                                               // 80
    newIndex = html.substr(currentIndex).indexOf('href="');                                                          // 81
    if (newIndex !== -1) {                                                                                           // 82
      // Check whether the next four characters are http                                                             // 83
      currentIndex += newIndex;                                                                                      // 84
      if (html.substr(currentIndex+6,4) !== 'http') {                                                                // 85
        currentIndex += 6;                                                                                           // 86
        html = [html.slice(0,currentIndex), 'http://', html.slice(currentIndex)].join('');                           // 87
      }                                                                                                              // 88
      else {                                                                                                         // 89
        currentIndex += 4;                                                                                           // 90
      }                                                                                                              // 91
    }                                                                                                                // 92
  }                                                                                                                  // 93
  while (newIndex !== -1);                                                                                           // 94
  return html;                                                                                                       // 95
}                                                                                                                    // 96
                                                                                                                     // 97
// Template events -- requires babrahams:editable-text                                                               // 98
                                                                                                                     // 99
Template.editable_text_widget.events({                                                                               // 100
  'mousedown .wysiwyg-content .editable-text a' : function(evt) {                                                    // 101
    if (confirm("Click 'OK' to follow this link.\n\nClick 'Cancel' to edit.")) {                                     // 102
      evt.stopPropagation();                                                                                         // 103
      window.open($(evt.target).attr('href'),'_blank');                                                              // 104
    }                                                                                                                // 105
  },                                                                                                                 // 106
  'mousedown .wysiwyg-container' : function(evt) {                                                                   // 107
    EditableText._blockFocusoutForWYSIWYG = true;                                                                    // 108
    // This is a filthy hack to allow time for checking the document blur event                                      // 109
    // to prevent save on focusout if the whole document is losing focus                                             // 110
    // Important if we want to be able to drag files in to the editor                                                // 111
    Meteor.setTimeout(function() {                                                                                   // 112
      EditableText._blockFocusoutForWYSIWYG = false;                                                                 // 113
    },100);                                                                                                          // 114
  },                                                                                                                 // 115
  'keydown .wysiwyg-container' : function(evt,tmpl) {                                                                // 116
    if (evt.which === 27) {                                                                                          // 117
      evt.stopImmediatePropagation();                                                                                // 118
      tmpl.selected.set(false);                                                                                      // 119
	  EditableText._callback.call(this,'onStopEditing',tmpl.data.context);                                              // 120
    }                                                                                                                // 121
  },                                                                                                                 // 122
  'paste .wysiwyg' : function(evt) {                                                                                 // 123
    // To remove all html on paste, use this:                                                                        // 124
    // document.execCommand('insertText', false, evt.clipboardData.getData('text/plain'));                           // 125
    // evt.preventDefault();                                                                                         // 126
    // To remove all but selected elements and attributes, use this:                                                 // 127
    Meteor.defer(function() {                                                                                        // 128
      var text = $(evt.target).closest('.wysiwyg').html();                                                           // 129
      if (EditableText.maximumImageSize && text && (text.length > EditableText.maximumImageSize)) {                  // 130
        document.execCommand('undo');                                                                                // 131
        alert('You\'ve tried to paste too much information into the editor. If you\'re pasting an image, try reducing it to less than ' + EditableText.maximumImageSize + 'k.');
        return;                                                                                                      // 133
      }                                                                                                              // 134
      EditableText._cleanHTML($(evt.target).closest('.wysiwyg')[0],EditableText._allowedHtmlPasteCleaner());         // 135
    });                                                                                                              // 136
    // To accept all, do nothing                                                                                     // 137
  },                                                                                                                 // 138
  'click .wysiwyg-container .wysiwyg-save-button, focusout .wysiwyg-container .wysiwyg' : function(evt,tmpl) {       // 139
    evt.stopPropagation();                                                                                           // 140
    evt.stopImmediatePropagation();                                                                                  // 141
    var self = this;                                                                                                 // 142
    Meteor.defer(function() {                                                                                        // 143
      // We need to defer to give time for the document to lose focus if the user has clicked away from the document
      if (!document.hasFocus() || (evt.type === 'focusout' && (EditableText._blockFocusoutForWYSIWYG || !(typeof self.saveOnFocusout !== 'undefined' && self.saveOnFocusout || EditableText.saveOnFocusout)))) {
        // Need to stop clicks on the toolbar from firing the autosave due to loss of focus                          // 146
        return;                                                                                                      // 147
      }                                                                                                              // 148
      var value = $.trim(tmpl.$('.wysiwyg').cleanHtml()).replace(/\n/g,"");                                          // 149
      var sanitizedValue = _.isFunction(EditableText._sanitizeHTML) && EditableText._sanitizeHTML(value) || value;   // 150
      EditableText.okCancelEvents.ok.call(self,sanitizedValue,evt,tmpl);                                             // 151
      if (evt.type === 'click') {                                                                                    // 152
        tmpl.selected.set(false);                                                                                    // 153
      }                                                                                                              // 154
    });                                                                                                              // 155
  }                                                                                                                  // 156
});                                                                                                                  // 157
                                                                                                                     // 158
Template.editable_text_widget.rendered = function() {                                                                // 159
  // When we start editing, get the wysiwyg and attach its toolbar                                                   // 160
  var self = this;                                                                                                   // 161
  this.autorun(function() {                                                                                          // 162
    if (self.selected.get() && self.data.wysiwyg) {                                                                  // 163
      Meteor.defer(function() {                                                                                      // 164
          var wysiwyg = self.$('.wysiwyg');                                                                          // 165
          if (wysiwyg.length) { // Might have disappeared from the DOM in some rare circumstances                    // 166
            wysiwyg.wysiwyg({toolbarSelector:".wysiwyg-toolbar"});                                                   // 167
            wysiwyg.focusEnd();                                                                                      // 168
          }                                                                                                          // 169
      });                                                                                                            // 170
    }                                                                                                                // 171
  });                                                                                                                // 172
}                                                                                                                    // 173
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['babrahams:editable-text-wysiwyg'] = {};

})();
