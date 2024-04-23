interface IResponseData<TDATA = unknown> {
  data: TDATA | null;
  status: 'SUCCESS' | 'ERROR' | 'WARNING';
  message: string;
}

export default IResponseData;
