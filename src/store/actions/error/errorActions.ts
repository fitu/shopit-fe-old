import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../../state/storeState';

import { ADD_ERROR, AddError } from './actions/addErrorActions';
import { CLEAR_ERROR, ClearError } from './actions/clearErrorActions';

type AddErrorActions = AddError;
type ClearErrorActions = ClearError;
type ErrorActions = AddErrorActions | ClearErrorActions;

const addError: ActionCreator<ThunkAction<Promise<void>, StoreState, void, AddErrorActions>> =
    (error: string) => async (dispatch: ThunkDispatch<StoreState, void, AddErrorActions>) => {
        dispatch({ type: ADD_ERROR, payload: { error } });
    };

const clearError: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ClearErrorActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, ClearErrorActions>) => {
        dispatch({ type: CLEAR_ERROR });
    };

export type { ErrorActions };
export { addError, clearError };
