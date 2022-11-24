import { ActionType } from "typesafe-actions";

import * as actions from "./actions";

export type filterState = any;

export type filterAction = ActionType<typeof actions>;
