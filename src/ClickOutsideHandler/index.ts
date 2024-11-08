/**
 * A class that listens for clicks outside of a given element and calls a callback function when a click occurs.
 */
class ClickOutsideHandler {
  /**
   * The element to listen for clicks outside of.
   */
  private element: HTMLElement;

  /**
   * The callback function to call when a click occurs outside of the element.
   */
  private callback: () => void;

  /**
   * Creates a new instance of ClickOutsideHandler.
   * @param element The element to listen for clicks outside of.
   * @param callback The callback function to call when a click occurs outside of the element.
   */
  constructor(element: HTMLElement, callback: () => void) {
    this.element = element;
    this.callback = callback;
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.attachEvent();
  }

  /**
   * Handles a click event outside of the element.
   * @param event The click event.
   */
  private handleClickOutside(event: MouseEvent): void {
    if (!this.element.contains(event.target as Node)) {
      this.callback();
    }
  }

  /**
   * Attaches the click event listener to the document.
   */
  private attachEvent(): void {
    document.addEventListener('click', this.handleClickOutside);
  }

  /**
   * Detaches the click event listener from the document.
   */
  private detachEvent(): void {
    document.removeEventListener('click', this.handleClickOutside);
  }

  /**
   * Destroys the ClickOutsideHandler instance, detaching the event listener.
   */
  public destroy(): void {
    this.detachEvent();
  }
}

export default ClickOutsideHandler;
