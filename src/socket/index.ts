import { useEffect, useState } from "react";
import * as io from "socket.io-client";

export const socket = io.connect(
  "http://87.248.167.60:4000/?channel=eld:realtime:gps*"
);

// export const useSocket = (props: any) => {]

//     const [message, setMessage] = useState('')
//     return
// }