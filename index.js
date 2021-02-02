/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time)
{
  time_array = time.split(":")
  hour = parseInt(time_array[0])
  if (hour < 12)
  {
    return "Good Morning"
  }
  else if (hour < 17)
  {
    return "Good Morning"
  }
  else
  {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
