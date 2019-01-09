import validator from 'validator';
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
  static popup(title = 'No title', msg) {
    document.getElementById('title').innerHTML = title;
    document.getElementById('msg').innerHTML = msg;
    document.getElementById('alert').style.display = 'block';
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
        this.popup('Error', 'invalid name');
        return false;
      }
      if (!validator.isEmail(data.email)) {
        this.popup('Error', 'invalid email');
        return false;
      }
      if (phone.test(data.phone) && data.phone.length < 9) {
        this.popup('Error', 'incorrect phone number');
        return false;
      }
      if (data.password.trim().length < 5) {
        this.popup('Error', 'password should not be less than 5 characters');
        return false;
      }
      if (data.password !== data.confirmPassword) {
        this.popup('Error', 'password does not match');
        return false;
      }
      break;

    case 2:
      if (!validator.isEmail(data.email)) {
        this.popup('Error', 'invalid email');
        return false;
      }
      if (data.password.trim().length < 1) {
        this.popup('Error', 'provide password for login');
        return false;
      }
      break;

    default:
      break;
    }
    return true;
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
  * @return {null} null - No response
  * @memberof Utilities
 */
  static loader(active) {
    document.getElementById("loader").style.display = active;
  }

  /**
 * Navigate tabs
 * @param {Event} event triggered event
 * @param {String} tab tab to open
  * @return {null} null - returns nothing
 */
  static openTab(event, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tab-contents');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tab).style.display = 'block';
    event.currentTarget.className += ' active';
  }
}

export default Utilities;
