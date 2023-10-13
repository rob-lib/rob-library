declare global {
  interface String {
    isLink(): boolean;
  }
}

String.prototype.isLink = function (): boolean {
  const pattern = new RegExp('^((http|https)://)?([a-z0-9]+([-.][a-z0-9]+)*.[a-z]{2,})(:[0-9]{1,5})?(/.*)?$');
  return pattern.test(String(this));
};

export {};
