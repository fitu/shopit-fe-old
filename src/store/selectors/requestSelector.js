import { createSelector } from 'reselect';

const selectRequesting = (requestingState, actionTypes) =>
    actionTypes.some((actionType) => requestingState[actionType]);

const requestingSelector = createSelector(
    (state) => state.requesting,
    (_, actionTypes) => actionTypes,
    selectRequesting,
);

export { requestingSelector };
