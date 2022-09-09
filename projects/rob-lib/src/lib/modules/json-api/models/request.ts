type QueryText = string;

interface Attributes {
  [key: string]: QueryText[] | QueryText;
}

export interface Request {
  filed: string;
  id?: number;
  attributes?: Attributes;
  limit?: number;
  offset?: number;
}

export class Request implements Request {
  static generate(req: Request): string {
    const params = [];

    if (req?.id) {
      return `${req.filed}/${req.id}`;
    }
    if (req?.attributes) {
      params.push(Request.#getAttributes(req.attributes));
    }
    if (req?.limit) {
      params.push(Request.#setValue('limit', req?.limit));
    }
    if (req?.offset) {
      params.push(Request.#setValue('offset', req?.offset));
    }

    return params.length ? `${req.filed}?${params.join('&')}` : req.filed;
  }

  static #getAttributes(attributes: Attributes) {
    return Object.entries(attributes).map(([key, value]) => Request.#setValue(key, Request.#getQueryText(value)));
  }

  static #getQueryText(value: string | string[]): string {
    const foo = (v: string) => v.replace(/ /g, '+');
    return Array.isArray(value) ? value.map(foo).join(',') : foo(value);
  }

  static #setValue(key: string, value: string | number): string {
    return `${key}=${value}`;
  }
}
