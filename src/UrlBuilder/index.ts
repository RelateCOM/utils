/**
 * A class for building URLs.
 */
class UrlBuilder {
  /**
   * The root path of the URL.
   * @type {string}
   */
  private readonly rootPath: string = '';

  /**
   * Constructor for the UrlBuilder class.
   * @param Path The root path of the URL.
   */
  constructor(Path: string) {
    if (!Path) throw new Error('Root path cannot be empty');
    this.rootPath = Path;
  }

  /**
   * Builds a query string from a query parameters object.
   * @param queryParams An object containing query parameters.
   * @returns The query string.
   */
  private buildQueryString(queryParams?: {
    [key: string]: string | number | boolean;
  }): string {
    if (!queryParams) return '';

    const queryString = Object.entries(queryParams)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join('&');

    return `?${queryString}`;
  }

  /**
   * Builds a URL from a path and query parameters.
   * @param path The path of the URL.
   * @param queryParams An object containing query parameters.
   * @returns The built URL.
   */
  public buildUrl(
    path: string,
    queryParams?: { [key: string]: string | number | boolean },
  ): string {
    if (!path) throw new Error('Path cannot be empty');
    return `${this.rootPath}${path}${this.buildQueryString(queryParams)}`;
  }
}

export default UrlBuilder;
