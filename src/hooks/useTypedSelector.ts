import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/root-Reducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector