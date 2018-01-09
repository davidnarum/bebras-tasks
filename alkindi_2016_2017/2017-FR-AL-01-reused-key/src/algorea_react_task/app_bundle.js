import React from 'react';
import {call, takeEvery} from 'redux-saga/effects';

import TaskBar from './ui/task_bar';
import Spinner from './ui/spinner';

export default function (bundle, deps) {

    bundle.use('Workspace');

    bundle.defineAction('appInit', 'appInit');
    bundle.addReducer('appInit', function (state, {payload: {platformAdapter, task, task_token, options}}) {
        return {...state, platformAdapter, task, task_token, options};
    });

    bundle.defineAction('platformValidate', 'Platform.Validate');

    bundle.addSaga(function* () {
        yield takeEvery(deps.appInit, appInitSaga);
        yield takeEvery(deps.platformValidate, platformValidateSaga);
    });

    function* appInitSaga ({payload: {platformAdapter, task}}) {
        /* TODO: error handling, wrap in try/catch block */
        yield call(platformAdapter.initWithTask, task);
    }

    function* platformValidateSaga ({payload: {mode}}) {
        const {validate} = yield select(state => state.platformAdapter);
        /* TODO: error handling, wrap in try/catch block */
        yield call(validate, mode);
    }

    function AppSelector (state) {
        const {task, workspace} = state;
        const {Workspace, platformValidate} = deps;
        return {task, workspace, Workspace, platformValidate};
    }
    bundle.defineView('App', AppSelector, App);

}

class App extends React.PureComponent {
    render () {
        const {task, workspace, Workspace} = this.props;
        if (!task || !workspace) {
            return (<Spinner/>);
        }
        return (
            <div>
                <Workspace/>
                <TaskBar onValidate={this._validate}/>
            </div>
        );
    }
    _validate = () => {
        this.props.dispatch({type: this.props.platformValidate, payload: {mode: 'done'}});
    };
}
