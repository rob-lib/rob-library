declare global {
  interface Number {
    toPercent(): number;
  }
}

Number.prototype.toPercent = function (): number {
  return Number(this) / 100;
};

export {};
