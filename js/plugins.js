// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function ($) {
    $.fn.tmp = function (obj, prop) {
        if (prop && typeof prop === "string") {
            prop = prop.split();
        }

        function format (key, value) {
            var re = new RegExp('{{' + key + '}}','g');

            if (key === 'defPrice' || key === 'price') {
                value = $(value).money();
            }

            elem = elem.replace(re, value);
        }

        var elem = $(this).text();

        if (prop) {
            var len = prop.length;
            while (--len) {
                format(prop[len], obj[prop[len]]);
            }
            return elem;
        }

        for (var key in obj) {
            if(obj.hasOwnProperty(key)) {
               format(key, obj[key]);
            }
        }
        return elem;

    };

    $.fn.money = function (value) {
        return '<span class="pull-left">R$ </span><span class="pull-right">' + this.get(0) + ',00</span>';
    };

    if (!$('body').eq(0).data('check')) {
        $.fn.data = function () {
            var args = Array.prototype.slice.call(arguments),
                id = Array.prototype.slice.call(args, 0, 1);
            $.fn.attr.apply(this, 'data-'+id, args);
        };
    }

}(this.jQuery));
