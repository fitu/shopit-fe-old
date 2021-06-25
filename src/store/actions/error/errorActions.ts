import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { StoreState } from '../../state/storeState';

import { ADD_ERROR, AddError } from './actions/addErrorActions';
import { REMOVE_ERROR, RemoveError } from './actions/removeErrorActions';

type AddErrorActions = AddError;
type RemoveErrorActions = RemoveError;
type ErrorActions = AddErrorActions | RemoveErrorActions;

const addError: ActionCreator<ThunkAction<Promise<void>, StoreState, void, AddErrorActions>> =
    (error: string) => async (dispatch: ThunkDispatch<StoreState, void, AddErrorActions>) => {
        dispatch({ type: ADD_ERROR, payload: { error } });
    };

const removeError: ActionCreator<ThunkAction<Promise<void>, StoreState, void, RemoveErrorActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, RemoveErrorActions>) => {
        dispatch({ type: REMOVE_ERROR });
    };

export type { ErrorActions };
export { addError, removeError };
