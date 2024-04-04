const Timer = (startDate) => {
  // Get the current date and time
  var currentDate = new Date();

  // Calculate the time difference in milliseconds
  var timeDifference = startDate.getTime() - currentDate.getTime();

  // Convert time difference to desired format
  var milliseconds = timeDifference % 1000;
  timeDifference = (timeDifference - milliseconds) / 1000;
  var seconds = timeDifference % 60;
  timeDifference = (timeDifference - seconds) / 60;
  var minutes = timeDifference % 60;
  timeDifference = (timeDifference - minutes) / 60;
  var hours = timeDifference % 24;
  var days = (timeDifference - hours) / 24;

  // Format the result
  var formattedResult = { days, hours, minutes, seconds };

  return formattedResult;
};

export default Timer;
