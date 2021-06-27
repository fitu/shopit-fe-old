import { Action } from 'redux';

interface BaseAction extends Action {
    type: string;
    payload?: any;
    error?: { message: string };
    isError?: boolean;
    meta?: any;
}

export type { BaseAction };
