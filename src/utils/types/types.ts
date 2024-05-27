import {Dispatch, SetStateAction} from "react";

type Dispatcher<S> = Dispatch<SetStateAction<S>>

export default Dispatcher