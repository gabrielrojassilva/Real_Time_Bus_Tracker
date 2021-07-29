<html>
  <h1>Real Time Bus Tracker</h1>
    <p>This project tracks a bus from <a href="https://api-v3.mbta.com/">MBTA V3 API Portal<a>. The bus location information is updated every 10 seconds and tracks a predefined bus which follows a trajectory between Harvard, MIT and surroundings.</p>  
  <h1> Usage and Support </h1>
    <p>In order to use this code, you have two buttons, Start Tracking and Stop Tracking, these buttons allows the user to watch the marker moving along the bus actual position fetched from MBTA V3 API Portal.</p>
    <p> The program has two asynchronous functions </p>
      <ul>
        <li>getBusLocations() function: Request bus data from MBTA.</li>
        <li>run() function: Add the marker from the predefined bus to the map.</li>
      </ul>
    <p>For more detailed information, contact me at grojas.s@ucb.edu.bo</p>
  <h1> Future improvements </h1>
    <p> 
      <ul>
        <li>Change Marker style.</li>
        <li>Add bus ID to be tracked.</li>
        <li>Track multiple buses.</li>
      </ul>
    </p>
</html>
