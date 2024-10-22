<script setup>

</script>

<template>
  <h1>GRC Girls Basketball Schedule</h1>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Opponent</th>
        <th>Location</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>December 1, 2023</td>
        <td>Clark County High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>December 5, 2023</td>
        <td>Montgomery County High School</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr>
        <td>December 10, 2023</td>
        <td>Bourbon County High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>December 15, 2023</td>
        <td>Scott County High School</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr>
        <td>December 20, 2023</td>
        <td>Madison Central High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>January 5, 2024</td>
        <td>Woodford County High School</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr>
        <td>January 10, 2024</td>
        <td>Franklin County High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>January 15, 2024</td>
        <td>Anderson County High School</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr>
        <td>January 20, 2024</td>
        <td>Henry County High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>January 25, 2024</td>
        <td>Nicholas County High School</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <!-- Additional Games -->
      <tr class="away-game">
        <td>February 1, 2024</td>
        <td>Ballard High School</td>
        <td>Away</td>
        <td>7:00 PM</td>
      </tr>
      <tr>
        <td>February 5, 2024</td>
        <td>Male High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>February 10, 2024</td>
        <td>Eastern High School</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr>
        <td>February 15, 2024</td>
        <td>Manual High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>February 20, 2024</td>
        <td>South Oldham High School</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr>
        <td>February 25, 2024</td>
        <td>Jeffersontown High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>March 1, 2024</td>
        <td>North Oldham High School</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr>
        <td>March 5, 2024</td>
        <td>Trinity High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>March 10, 2024</td>
        <td>St. Xavier High School</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr class="away-game">
        <td>March 15, 2024</td>
        <td>New Albany High School</td>
        <td>Away</td>
        <td>7:00 PM</td>
      </tr>
      <tr >
        <td>March 20, 2024</td>
        <td>Jeffersonville High School</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>March 25, 2024</td>
        <td>East Central High School (IN)</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr>
        <td>March 30, 2024</td>
        <td>Southridge High School (IN)</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>April 5, 2024</td>
        <td>Connersville High School (IN)</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr>
        <td>April 10, 2024</td>
        <td>Wilmington High School (OH)</td>
        <td>Home</td>
        <td>6:00 PM</td>
      </tr>
      <tr class="away-game">
        <td>April 15, 2024</td>
        <td>Columbus North High School (IN)</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
      <tr class="away-game">
        <td>April 20, 2024</td>
        <td>Greenwood High School (KY)</td>
        <td>Away</td>
        <td>7:30 PM</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

.away-game {
    background-color: #f7f7f7;
}
</style>