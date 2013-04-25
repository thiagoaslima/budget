$(function (w, doc, $, P, undefined){
    var el = $('<div />', {
        id: "temp"
    });

    if ( P && P.name ) {
        var header = $('#tmp-project-header').
                            contents().tmp({name: P.name});
        el.append(header);
    }

    if ( P && P.stages && P.stages.length ) {
        // create div all-stages
        var allStages = $('<div />', {
                class: 'all-stages'
            }),
            stages = P.stages;

        // loop from each stage and process that content
        for(var i = 0, lenStages = stages.length; i < lenStages; i++ ) {
            var stage = stages[i],
                stageHeader;

            // create stage header
            stageHeader = $.parseHTML (
                            $('#tmp-stage-header').
                                contents().tmp({
                                    number: stage.number,
                                    name: stage.name,
                                    defPrice: stage.defPrice
                                })
                            );

            //check if exists description in the header
            if (stage.desc) {
                // create description field
                stageDesc = $('<p/>',{
                                html: stage.desc
                            });

                // append stage description on stage header
                $(stageHeader).find('.title').append(stageDesc);
            }

            // append stage header to all-stages div
            allStages.append(stageHeader);

                // check if exist core steps
                if (stage. core && stage.core.length > 0) {
                    var allCore = stage.core,
                        stepTmpl = $('#tmp-core-step').contents(),
                        stepRow = [],
                        allSteps,
                        coreDiv,
                        coreLabel;

                    // create core div
                    coreDiv = $('<div />', {
                        class: 'core',
                        'data-status': 'open'
                    });

                    // create core label and append to core div
                    coreLabel = $('#tmp-core-label').html();
                    coreDiv.append(coreLabel);

                    // loop from each core step and process the content
                    for (var j = 0, lenCore = allCore.length; j < lenCore; j++) {
                        var core = allCore[j],
                            name = core.name,
                            row = $.parseHTML(stepTmpl.tmp({name: name}));

                        // check if exist description on this topic
                        if (core.desc) {
                            var desc = $('<p/>', {
                                class: 'desc',
                                html: core.desc
                            })

                            $(row).find('.title').append(desc);
                        }

                        // append step row to core div
                        coreDiv.append(row);
                    }

                    // append core div to all-stages div
                    allStages.append(coreDiv);
                }

                //  check if exists extra steps
                if (stage.extra && stage.extra.length > 0) {
                    var extraDiv;

                     // create core div
                    extraDiv = $('<div />', {
                        class: 'extra',
                        'data-status': 'open'
                    });
                }

        }
        // append all-stages div to temp div
        el.append(allStages);
    }

    // append temp div contents to DOM
    $('#teste').append(el.html());

}(this, this.document, this.jQuery, this.Project));