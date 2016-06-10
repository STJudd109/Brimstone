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
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/babrahams_editable-text-wysiwyg-bootstrap-3/lib/template.editable_text_wysiwyg_bootstrap_3.js      //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
                                                                                                               // 1
Template.__checkName("wysiwyg");                                                                               // 2
Template["wysiwyg"] = new Template("Template.wysiwyg", (function() {                                           // 3
  var view = this;                                                                                             // 4
  return HTML.DIV({                                                                                            // 5
    "class": "btn-toolbar wysiwyg-toolbar"                                                                     // 6
  }, HTML.Raw('\n    <div style="float:right;" class="btn-group">\n      <a class="btn btn-default wysiwyg-save-button" data-edit="save" title="Save"><i class="fa fa-save"></i></a>\n    </div>\n    '), HTML.DIV({
    "class": "btn-group",                                                                                      // 8
    style: "margin-left:0px;"                                                                                  // 9
  }, "\n      ", HTML.A({                                                                                      // 10
    "class": "btn btn-default wysiwyg-tools-button",                                                           // 11
    title: function() {                                                                                        // 12
      return Blaze.If(function() {                                                                             // 13
        return Spacebars.call(view.lookup("showToolbar"));                                                     // 14
      }, function() {                                                                                          // 15
        return "Hide tools";                                                                                   // 16
      }, function() {                                                                                          // 17
        return "Show tools";                                                                                   // 18
      });                                                                                                      // 19
    }                                                                                                          // 20
  }, HTML.I({                                                                                                  // 21
    "class": function() {                                                                                      // 22
      return [ "fa ", Blaze.If(function() {                                                                    // 23
        return Spacebars.call(view.lookup("showToolbar"));                                                     // 24
      }, function() {                                                                                          // 25
        return "fa-caret-down";                                                                                // 26
      }, function() {                                                                                          // 27
        return "fa-caret-right";                                                                               // 28
      }) ];                                                                                                    // 29
    }                                                                                                          // 30
  })), "\n    "), "\n    ", HTML.DIV({                                                                         // 31
    "class": "wysiwyg-tools",                                                                                  // 32
    style: function() {                                                                                        // 33
      return [ Blaze.Unless(function() {                                                                       // 34
        return Spacebars.call(view.lookup("showToolbar"));                                                     // 35
      }, function() {                                                                                          // 36
        return "display:none;";                                                                                // 37
      }), "clear:both;" ];                                                                                     // 38
    }                                                                                                          // 39
  }, "\n      ", HTML.Raw('<div class="btn-group">\n        <a class="btn btn-default dropdown-toggle" data-toggle="dropdown" title="Font"><i class="fa fa-font"></i><b class="caret"></b></a>\n        <ul class="dropdown-menu">\n          <li><a style="font-family:\'Serif\'" data-edit="fontName Serif">Serif</a></li>\n          <li><a style="font-family:\'Sans\'" data-edit="fontName Sans">Sans</a></li>\n          <li><a style="font-family:\'Arial\'" data-edit="fontName Arial">Arial</a></li>\n          <li><a style="font-family:\'Arial Black\'" data-edit="fontName Arial Black">Arial Black</a></li>\n          <li><a style="font-family:\'Courier\'" data-edit="fontName Courier">Courier</a></li>\n          <li><a style="font-family:\'Courier New\'" data-edit="fontName Courier New">Courier New</a></li>\n          <li><a style="font-family:\'Comic Sans MS\'" data-edit="fontName Comic Sans MS">Comic Sans MS</a></li>\n          <li><a style="font-family:\'Helvetica\'" data-edit="fontName Helvetica">Helvetica</a></li>\n          <li><a style="font-family:\'Impact\'" data-edit="fontName Impact">Impact</a></li>\n          <li><a style="font-family:\'Lucida Grande\'" data-edit="fontName Lucida Grande">Lucida Grande</a></li>\n          <li><a style="font-family:\'Lucida Sans\'" data-edit="fontName Lucida Sans">Lucida Sans</a></li>\n          <li><a style="font-family:\'Tahoma\'" data-edit="fontName Tahoma">Tahoma</a></li>\n          <li><a style="font-family:\'Times\'" data-edit="fontName Times">Times</a></li>\n          <li><a style="font-family:\'Times New Roman\'" data-edit="fontName Times New Roman">Times New Roman</a></li>\n          <li><a style="font-family:\'Verdana\'" data-edit="fontName Verdana">Verdana</a></li>\n        </ul>\n      </div>'), "\n      ", HTML.Raw('<div class="btn-group">\n        <a class="btn btn-default dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="fa fa-text-height"></i>&nbsp;<b class="caret"></b></a>\n        <ul class="dropdown-menu">\n          <li><a data-edit="fontSize 5"><span style="font-size:x-large;">Huge</span></a></li>\n          <li><a data-edit="fontSize 4"><span style="font-size:large;">Very Large</span></a></li>\n          <li><a data-edit="fontSize 3"><span style="font-size:normal;">Large</span></a></li>\n          <li><a data-edit="fontSize 2"><span style="font-size:small;">Normal</span></a></li>\n          <li><a data-edit="fontSize 1"><span style="font-size:x-small;">Small</span></a></li>\n        </ul>\n      </div>'), "\n      ", HTML.Raw('<div class="btn-group">\n        <a class="btn btn-default" data-edit="superscript" title="Superscript"><i class="fa fa-superscript"></i></a>\n        <a class="btn btn-default" data-edit="subscript" title="Subscript"><i class="fa fa-subscript"></i></a>\n      </div>'), "\n      ", HTML.Raw('<div class="btn-group">\n        <a class="btn btn-default" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="fa fa-bold"></i></a>\n        <a class="btn btn-default" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="fa fa-italic"></i></a>\n        <a class="btn btn-default" data-edit="strikethrough" title="Strikethrough"><i class="fa fa-strikethrough"></i></a>\n        <a class="btn btn-default" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="fa fa-underline"></i></a>\n      </div>'), "\n      ", HTML.Raw('<div class="btn-group">\n        <a class="btn btn-default" data-edit="insertunorderedlist" title="Bullet list"><i class="fa fa-list-ul"></i></a>\n        <a class="btn btn-default" data-edit="insertorderedlist" title="Number list"><i class="fa fa-list-ol"></i></a>\n        <a class="btn btn-default" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="fa fa-outdent"></i></a>\n        <a class="btn btn-default" data-edit="indent" title="Indent (Tab)"><i class="fa fa-indent"></i></a>\n      </div>'), "\n      ", HTML.Raw('<div class="btn-group">\n        <a class="btn btn-default" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="fa fa-align-left"></i></a>\n        <a class="btn btn-default" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="fa fa-align-center"></i></a>\n        <a class="btn btn-default" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="fa fa-align-right"></i></a>\n        <a class="btn btn-default" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="fa fa-align-justify"></i></a>\n      </div>'), "\n      ", HTML.Raw('<div class="btn-group">\n        <a class="btn btn-default dropdown-toggle add-url-trigger" data-toggle="dropdown" title="Hyperlink"><i class="fa fa-link"></i></a>\n        <div class="dropdown-menu input-append">\n          <input class="span2" placeholder="URL" type="text" data-edit="createLink">\n          <button class="btn btn-default" type="button">Add</button>\n        </div>\n        <a class="btn btn-default" data-edit="unlink" title="Remove Hyperlink"><i class="fa fa-unlink"></i></a>\n      </div>'), "\n      \n      ", HTML.Raw('<!--<div class="btn-group">\n        <a class="btn btn-default" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="fa fa-picture-o"></i></a>\n        <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" />\n      </div>\n      <div class="btn-group">\n        <a class="btn btn-default" title="Insert table" id="tableBtn"><i class="fa fa-table"></i></a>\n      </div>-->'), "\n      \n      ", HTML.Raw('<div class="btn-group">\n        <a class="btn btn-default" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="fa fa-undo"></i></a>\n        <a class="btn btn-default" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="fa fa-repeat"></i></a>\n      </div>'), "\n    "), "\n  ");
}));                                                                                                           // 41
                                                                                                               // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/babrahams_editable-text-wysiwyg-bootstrap-3/lib/editable_text_wysiwyg_bootstrap_3.js               //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
// Without this, the editableText widget will fall back to a textarea:                                         // 1
EditableText.wysiwyg = true;                                                                                   // 2
                                                                                                               // 3
// Events specific to this particular implementation of the bootstrap-wysiwyg editor                           // 4
                                                                                                               // 5
Template.wysiwyg.events({                                                                                      // 6
  /*'click #tableBtn' : function() {                                                                           // 7
    document.execCommand('insertHTML', false, '<table><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>')  
  }*/                                                                                                          // 9
  'mousedown .wysiwyg-tools-button' : function(evt,tmpl) {                                                     // 10
    // evt.preventDefault();                                                                                   // 11
    var elem = $(evt.currentTarget).closest('.wysiwyg-toolbar').find('.wysiwyg-tools');                        // 12
    elem.toggle(jQuery.ui && 'stretch' || 'blind'); // Hack for weird way that adding jQuery UI breaks 'blind'
    if ($(evt.currentTarget).attr('title') === 'Show tools') {                                                 // 14
      $(evt.currentTarget).attr('title','Hide tools').find('i').removeClass('fa-caret-right').addClass('fa-caret-down');
	  EditableText._callback.call(this,'onShowToolbar',tmpl.data.context);                                        // 16
    }                                                                                                          // 17
    else {                                                                                                     // 18
      $(evt.currentTarget).attr('title','Show tools').find('i').removeClass('fa-caret-down').addClass('fa-caret-right');
	  EditableText._callback.call(this,'onHideToolbar',tmpl.data.context);                                        // 20
    }                                                                                                          // 21
  },                                                                                                           // 22
  'click .wysiwyg-toolbar .span2' : function(evt,tmpl) {                                                       // 23
    evt.stopPropagation();                                                                                     // 24
  }                                                                                                            // 25
});                                                                                                            // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['babrahams:editable-text-wysiwyg-bootstrap-3'] = {};

})();
