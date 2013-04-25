$(function (w, doc, $, P, undefined){

    $('form.bdgt').find('.activityType').each( function (evt) {
        var that = $(this),
            div = $(this).parent(),
            st;
        div.open = div.height();
        div.closed = that.height();
        div.data('status', 'open');

        return (function (evt) {
            that.on('click', function (evt) {
                console.log(div.data('status'));

                var st = div.data('status'),
                    ns = (st === 'open') ? 'closed' : 'open';

                div.stop().animate({height: div[st]}, 500)
                div.data('status', ns);
            }).click();
        }());
    });


    $('form.bdgt').on("click", ".stage", function() {

        console.log('click');
        var stage = $(this),
            core = stage.next(".core"),
            coreStatus = core.data('status'),
            extra = stage.next(".extra"),
            extraStatus = extra.data('status');

        console.log(stage.hasClass('stage'), core, coreStatus, extra, extraStatus);

        if (coreStatus == "open") {
            core.find('.activityType').trigger('click');
        }

        if (extraStatus == "open") {
            extra.find('.activityType').trigger('click');
        }

        if (extraStatus === coreStatus === "closed") {
            core.find('.activityType').trigger('click');
            extra.find('.activityType').trigger('click');
        }
    })

}(this, this.document, this.jQuery, this.Project));