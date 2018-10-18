function initTask(subTask) {

    subTask.gridInfos = {
        hideSaveOrLoad: false,
        actionDelay: 200,
        buttonScaleDrawing: false,
        conceptViewer: true,
        hideValidate: true,

        includeBlocks: {
            groupByCategory: true,
            generatedBlocks: {
                p5: [
                    'playSignal',
                    'playRecord',
                    'playStop',
                    'sleep',
                    'echo'
                ]
            },
            standardBlocks: {
                includeAll: true
            }
        },
        maxInstructions: 100,
        checkEndEveryTurn: false,
        checkEndCondition: function(context, lastTurn) {
            context.success = false;
            //throw(strings.complete);
        }
    }

    subTask.data = {
        easy: [{}]
    }
    initBlocklySubTask(subTask)
}
initWrapper(initTask, null, null)
