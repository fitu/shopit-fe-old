import { BaseAction } from '../../BaseAction';

const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

interface LogoutSuccess extends BaseAction {
    type: typeof LOGOUT_SUCCESS;
}

export type { LogoutSuccess };
export { LOGOUT_SUCCESS };
