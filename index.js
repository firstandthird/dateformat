let months = 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|');
let days = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|');

const datefmt = function(format, time) {
  if (!time instanceof Date) { return; }
  const date = format.replace(/%d|%D|%j|%l|%S|%w|%F|%m|%M|%n|%Y|%y|%a|%A|%g|%G|%h|%H|%i|%s|%u|%e/g, (match) => {
    // eslint-disable-next-line default-case
    switch (match) {
      case '%d':
        return (`0${time.getDate()}`).slice(-2);
      case '%D':
        return days[time.getDay()].substr(0, 3);
      case '%j':
        return time.getDate();
      case '%l':
        return days[time.getDay()];
      case '%S':
        if (time.getDate() === 1) {
          return 'st';
        } else if (time.getDate() === 2) {
          return 'nd';
        } else if (time.getDate() === 3) {
          return 'rd';
        }
        return 'th';
      case '%w':
        return time.getDay();
      case '%F':
        return months[time.getMonth()];
      case '%m':
        return (`0${time.getMonth() + 1}`).slice(-2);
      case '%M':
        return months[time.getMonth()].substr(0, 3);
      case '%n':
        return time.getMonth();
      case '%Y':
        return time.getFullYear();
      case '%y':
        return time.getFullYear().toString().slice(-2);
      case '%a':
        return time.getHours() > 11 ? 'pm' : 'am';
      case '%A':
        return time.getHours() > 11 ? 'PM' : 'AM';
      case '%g':
        // eslint-disable-next-line no-nested-ternary
        return time.getHours() > 12 ? time.getHours() - 12 : (time.getHours() ? time.getHours() : 12);
      case '%G':
        return time.getHours();
      case '%h':
        return (`0${time.getHours() > 12 ? time.getHours() - 12 : time.getHours()}`).slice(-2);
      case '%H':
        return (`0${time.getHours()}`).slice(-2);
      case '%i':
        return (`0${time.getMinutes()}`).slice(-2);
      case '%s':
        return (`0${time.getSeconds()}`).slice(-2);
      case '%u':
        return time.getMilliseconds();
      case '%e':
        return time.getTimezoneOffset();
    }
  });
  return date;
};

datefmt.translate = function(transMonths, transDays) {
  months = transMonths;
  days = transDays;
};

module.exports = datefmt;
