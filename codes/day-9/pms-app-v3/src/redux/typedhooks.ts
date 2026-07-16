import { useDispatch, useSelector } from "react-redux";
import type { StoreDispatchType, StoreStateType } from "./appstore";

export const useTypedSelector = useSelector.withTypes<StoreStateType>()
export const useTypedDispatch = useDispatch.withTypes<StoreDispatchType>()