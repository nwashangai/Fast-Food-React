import validator from "validator";
/**
 * Class representing Utilities
 * @class Utilities
 * @description handle utility actions
 */
class Utilities {
  /**
   * Create an Article
   * @param {String} title - Alart title
   * @param {String} msg - Alert message
   * @return {null} null - No response
   * @memberof Utilities
   */
  static popup(title = "No title", msg) {
    document.getElementById("title").innerHTML = title;
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("alert").style.display = "block";
  }

  /**
   * Validate form
   * @param {Object} data - User data
   * @param {Number} mode - mode of validation
   * @return {Boolean} boolean - true or false
   * @memberof Utilities
   */
  static formValid(data, mode) {
    const phone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g;
    switch (mode) {
    case 1:
      if (!validator.isAlpha(data.name)) {
        return { status: false, message: 'name should be alphabets only' };
      }
      if (!validator.isEmail(data.email)) {
        return { status: false, message: 'email should be a valid email' };
      }
      if (!phone.test(data.phone) || data.phone.length < 11) {
        return { status: false, message: 'phone number should be 11 digits' };
      }
      if (data.password.trim().length < 5) {
        return {
          status: false,
          message: 'password should not be less than 5 characters'
        };
      }
      if (data.password !== data.confirmPassword) {
        return { status: false, message: 'password does not match' };
      }
      break;

    case 2:
      if (!validator.isEmail(data.email)) {
        return { status: false, message: 'email should be a valid email' };
      }
      if (data.password.trim().length < 1) {
        return { status: false, message: 'provide password for login' };
      }
      break;

    case 3:
      if (data.trim() === "") {
        return { status: false, message: 'please provide your address' };
      }
      break;

    default:
      break;
    }
    return { status: true, message: 'success' };
  }

  /**
   * Alert message
   * @param {String} status - Alart title
   * @param {String} message - Alert message
   * @return {null} null - No response
   * @memberof Utilities
   */
  static alert(status, message) {
    this.popup(status, message);
  }

  /**
   * Loader box
   * @param {String} active - laoder state
   * @return {null} null - No return
   * @memberof Utilities
   */
  static loader(active) {
    document.getElementById("loader").style.display = active;
  }

  /**
   * close make order
   * @return {null} null - No return
   * @memberof Utilities
   */
  static closeOrder() {
    document.getElementById("order-food").style.display = "none";
  }

  /**
   * close view order
   * @return {null} null - No return
   * @memberof Utilities
   */
  static closeView() {
    document.getElementById('view-food').style.display = 'none';
  }

  /**
   * close make order
   * @return {null} null - No return
   * @memberof Utilities
   */
  static noEntry() {
    document.getElementById("no-item").innerHTML =
      '<div id="no-data">No entry to show</div>';
  }

  /**
   * Navigate tabs
   * @param {Event} event triggered event
   * @param {String} tab tab to open
   * @return {null} null - returns nothing
   */
  static openTab(event, tab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    event.currentTarget.className += " active";
  }

  // eslint-disable-next-line require-jsdoc
  static selectTab(tab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  }
}

export default Utilities;
