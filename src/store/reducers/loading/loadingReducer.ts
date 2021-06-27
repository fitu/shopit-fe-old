import _ from 'lodash';
import { BaseAction } from '../../actions/BaseAction';

type LoadingState = {};

const INITIAL_STATE = {};

const loadingReducer = (state: LoadingState = INITIAL_STATE, action: BaseAction): LoadingState => {
    Object.freeze(state);

    // We only take actions that include 'REQUEST_' in the type.
    const isRequestType = action.type.includes('REQUEST_');

    if (isRequestType === false) {
        return state;
    }

    const isFinishedRequestType = action.type.includes('_FINISHED');

    // Remove the string '_FINISHED' from the action type so we can use the first part as the key on the state.
    const requestName = action.type.replace('_FINISHED', '');

    return {
        ...state,
        [requestName]: isFinishedRequestType === false,
    };
};

export type { LoadingState };
export default loadingReducer;
