type errType = "INT_ERROR" | "NOT_FOUND";

export type errServ = {
  status: errType;
  data: { message: string }
};

export type succServ<T> = {
  status: 'OK',
  data: T,
};

export type ServRes<T> = errServ | succServ<T>;