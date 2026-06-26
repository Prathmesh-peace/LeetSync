export interface CheckResponse {
  state: string;
  status_msg: string;
  status_code: number;
}

export interface CheckResult {
  accepted: boolean;
  finished: boolean;
}