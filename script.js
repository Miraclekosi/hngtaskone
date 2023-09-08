let dataDay = document.getElementById('day')

let dataTime = document.getElementById('time')

// Day


// ... calling the element which holds the day
      const currentDayOfWeek = document.getElementById("day");

      //   calling the element which will hold the UTC Time
      const currentTime = document.getElementById("time");

      // ...Function to hold date and time so an interval would be set to update every seconds..
      const updateTime = () => {
        const dayOfWeek = new Date().toLocaleDateString((en = "us"), {
          weekday: "long",
        });

        //declaring a time var before converting to utc
        const time = new Date();
        const utcTime = time.toUTCString();

        // ...assigning day and time variables to the holder...
        currentDayOfWeek.textContent = "Day:" + " " + dayOfWeek;
        currentTime.textContent = "Time in UTC : " + " " + utcTime;
      };
      updateTime();
      setInterval(updateTime, 1000);
