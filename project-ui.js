/*The MIT License (MIT)

Copyright (c) 2014 Brackets PHP SIG

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, regexp: true */
/*global define, brackets, $, Mustache */

define(function (require, exports, module) {
    "use strict";

    var Dialogs             = brackets.getModule("widgets/Dialogs"),
        projectDialog       = require("text!templates/php-project-dialog.html");

    var filters = {
        "filters": [
            { "filter": "test1", "filterName": "long form of test1"},
            { "filter": "test2", "filterName": "long form of test2"},
            { "filter": "test3", "filterName": "long form of test3"},
            { "filter": "test4", "filterName": "long form of test4"},
            { "filter": "test5", "filterName": "long form of test5"}
        ]
    };

    function showProjectDialog() {
        Dialogs.showModalDialogUsingTemplate(Mustache.render(projectDialog, filters));

    }

    exports.showProjectDialog = showProjectDialog;
});
