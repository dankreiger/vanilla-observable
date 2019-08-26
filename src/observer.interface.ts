export default interface Observer {
  next: Function;
  error?: Function;
  complete?: Function;
}
