import _ from 'lodash';

import { ADD_ERROR } from '../../actions/error/actions/addErrorActions';
import { REMOVE_ERROR } from '../../actions/error/actions/removeErrorActions';
import { ErrorActions } from '../../actions/error/errorActions';

type ErrorState = {
    error: string;
};

const initialState = {
    error: '',
};

const errorReducer = (state: ErrorState = initialState, action: ErrorActions): ErrorState => {
    switch (action.type) {
        case ADD_ERROR: {
            return {
                error: action.payload.error,
            };
        }
        case REMOVE_ERROR: {
            return {
                error: '',
            };
        }
        default: {
            return state;
        }
    }
};

export type { ErrorState };
export default errorReducer;
