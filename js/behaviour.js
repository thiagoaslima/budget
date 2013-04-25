$(function (w, doc, $, P, undefined){

    $('form.bdgt').on('click', '.activityType', function (evt) {
        var that = $(this),
            div = $(this).parent(),
            st = div.attr('data-status'),
            ns = (st === 'open') ? 'closed' : 'open';

        div.stop().animate({height: div.data(ns+"Height")}, 500, function(){
            div.attr('data-status', ns);
        });
    });

    $('form.bdgt').find('.activityType').each( function (evt) {
        var that = $(this),
            div = $(this).parent(),
            st;
        div.data('openHeight', div.height());
        div.data('closedHeight', that.height());
        div.attr('data-status', 'open');
    });

    $('form.bdgt').on("click", ".stage", function() {
        var stage = $(this),
            core = stage.next(".core"),
            coreStatus = core.attr('data-status'),
            extra = stage.next(".extra"),
            extraStatus = extra.attr('data-status');

        if (coreStatus === "open") {
            core.find('.activityType').trigger('click');
        }

        if (extraStatus === "open") {
            extra.find('.activityType').trigger('click');
        }

        if (extraStatus === "closed" && coreStatus === "closed") {
            core.find('.activityType').trigger('click');
            extra.find('.activityType').trigger('click');
        }
    })

}(this, this.document, this.jQuery, this.Project));