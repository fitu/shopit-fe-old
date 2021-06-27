import _ from 'lodash';

import { ADD_ERROR } from '../../actions/error/actions/addErrorActions';
import { CLEAR_ERROR } from '../../actions/error/actions/clearErrorActions';
import { ErrorActions } from '../../actions/error/errorActions';

type ErrorState = {
    error: string;
};

const INITIAL_STATE = {
    error: '',
};

const errorReducer = (state: ErrorState = INITIAL_STATE, action: ErrorActions): ErrorState => {
    switch (action.type) {
        case ADD_ERROR: {
            return {
                error: action.payload.error,
            };
        }
        case CLEAR_ERROR: {
            return INITIAL_STATE;
        }
        default: {
            return state;
        }
    }
};

export type { ErrorState };
export default errorReducer;
