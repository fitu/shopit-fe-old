import { Action } from 'redux';

interface BaseAction extends Action {
    type: string;
    payload?: any;
    error?: boolean;
}

export type { BaseAction };
