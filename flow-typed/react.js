// @flow

// https://github.com/facebook/flow/issues/4657#issuecomment-323602289

/* eslint-disable flowtype/no-weak-types */
/* eslint-disable flowtype/no-mixed */
declare var React: $Exports<"react">;

declare type UseState<S> = [S, (((S) => S) | S) => void];
type CSS = {
  [string]: CSS | string,
};
type IStyleX = {
  (styles: Array<string | boolean | null> | string): string,
  create: (styles: {
    [string]: {
      ...CSS,
      ":first-child"?: CSS,
      ":last-child"?: CSS,
    },
  }) => { [string]: string },
};
declare module "@ladifire-opensource/stylex" {
  declare module.exports: IStyleX;
}

declare type CSSMargin = {
  marginBottom?: string,
  marginEnd?: string,
  marginLeft?: string,
  marginRight?: string,
};

declare type CSSAlign = {
  textAlign?: "left" | "right" | "center",
};

declare type CSSWidth = {
  width?: string,
};

declare type CSSHeight = {
  height?: string,
};

declare module "@testing-library/jest-dom" {
  declare type JestMatcherResult = {
    message?: string | (() => string),
    pass: boolean,
    ...
  };

  declare type Result = JestMatcherResult | Promise<JestMatcherResult>;

  declare module.exports: {|
    toBeDisabled(): Result,
    toBeEmpty(): Result,
    toBeEnabled(): Result,
    toBeInTheDocument(): Result,
    toBeInTheDOM(container?: HTMLElement): Result,
    toBeInvalid(): Result,
    toBeRequired(): Result,
    toBeValid(): Result,
    toBeVisible(): Result,
    toContainElement(element: HTMLElement | null): Result,
    toContainHTML(htmlText: string): Result,
    toHaveAttribute(attr: string, value?: any): Result,
    toHaveClass(...classNames: string[]): Result,
    toHaveFocus(): Result,
    toHaveFormValues(expectedValues: { [name: string]: any, ... }): Result,
    toHaveStyle(css: string): Result,
    toHaveTextContent(
      text: string | RegExp,
      options?: { normalizeWhitespace: boolean, ... },
    ): Result,
    toHaveValue(value?: string | string[] | number): Result,
  |};
}

declare module "@testing-library/jest-dom/extend-expect" {
  declare module.exports: any;
}

declare module "web-vitals" {
  declare module.exports: any;
}
