import _ from 'lodash';
import { BaseAction } from '../../actions/BaseAction';

type ErrorState = {
    error: string;
};

const INITIAL_STATE = {
    error: '',
};

const errorReducer = (state: ErrorState = INITIAL_STATE, action: BaseAction): ErrorState => {
    Object.freeze(state);
    switch (action.type) {
        default: {
            return state;
        }
    }
};

export type { ErrorState };
export default errorReducer;
