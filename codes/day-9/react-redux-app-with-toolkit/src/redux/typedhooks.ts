import { useDispatch, useSelector } from "react-redux";
import { type StoreDispatchType, type StoreStateType } from "./app-store";

export const useTypedSelector = useSelector.withTypes<StoreStateType>()
export const useTypedDispatch = useDispatch.withTypes<StoreDispatchType>()