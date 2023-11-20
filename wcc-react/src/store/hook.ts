import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//文件的作用： 使用泛型封装了useDispatch和useSelector，使得在组件中使用时，不需要再写类型，因为类型已经被封装在了这个文件中
