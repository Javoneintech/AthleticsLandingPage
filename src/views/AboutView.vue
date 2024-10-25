<template>
  <div class="container">
    <div class="page-title">
      <h1>About GRC HOOPS</h1>
    </div>
    <div class="content">
      <div class="player-history">
        <h3>🏀 College Offers</h3>
        <ul class="college-offers">
          <li>🎓 Sarah Smith - University of Kentucky</li>
          <li>🎓 Emily Johnson - Harvard University</li>
          <li>🎓 Jessica Williams - Stanford University</li>
          <li>🎓 Ashley Brown - University of California</li>
          <li>🎓 Megan Jones - University of Michigan</li>
          <li>🎓 Hannah Garcia - University of Florida</li>
          <li>🎓 Olivia Martinez - University of Texas at Austin</li>
          <li>🎓 Sophia Davis - Yale University</li>
          <li>🎓 Ava Rodriguez - University of Chicago</li>
          <li>🎓 Isabella Wilson - University of North Carolina</li>
          <li>🎓 Charlotte Anderson - University of Virginia</li>
          <li>🎓 Amelia Taylor - University of Washington</li>
          <li>🎓 Grace Thomas - University of Wisconsin-Madison</li>
          <li>🎓 Chloe White - University of Southern California</li>
          <li>🎓 Lily Harris - University of Pennsylvania</li>
          <li>🎓 Ella Martin - University of California</li>
          <li>🎓 Scarlett Thompson - University of Illinois at Urbana-Champaign</li>
          <li>🎓 Aria Lee - University of Miami</li>
          <li>🎓 Zoe Walker - University of California</li>
          <li>🎓 Nora Hall - University of Michigan</li>
          <li>🎓 Mia Allen - University of California</li>
          <li>🎓 Samantha Young - University of Minnesota</li>
          <li>🎓 Layla King - University of Massachusetts Amherst</li>
          <li>🎓 Riley Wright - University of Colorado Boulder</li>
          <li>🎓 Aubrey Scott - University of Pittsburgh</li>
          <li>🎓 Lillian Torres - University of Maryland</li>
          <li>🎓 Addison Nguyen - University of Connecticut</li>
          <li>🎓 Natalie Hill - University of Arizona</li>
          <li>🎓 Brooklyn Flores - University of Georgia</li>
          <li>🎓 Kinsley Rivera - University of Tennessee</li>
          <li>🎓 Peyton Cooper - University of South Carolina</li>
          <li>🎓 Savannah Reed - University of Oregon</li>
        </ul>
      </div>
      <div class="right-section">
        <div class="school-history">
          <h3>🏫 School History</h3>
          <p>George Rogers Clark High School, located in Winchester, Kentucky, has a rich history dating back to its establishment in 1956. Named after the American Revolutionary War hero, the school has been a cornerstone of the community, providing quality education and fostering student achievement. Over the years, it has developed a strong athletic program and a commitment to academic excellence, serving generations of students and contributing to the local culture.</p>
          <p>In recent years, the school has expanded its facilities to include state-of-the-art classrooms and athletic complexes, ensuring that students have access to the best resources for their education and sports. The school community is dedicated to promoting a culture of inclusivity and support, encouraging students to excel both academically and athletically.</p>
          <p>With a diverse student body, George Rogers Clark High School embraces a variety of cultural backgrounds, fostering an environment where every student feels valued and respected. The school offers a wide range of extracurricular activities, including clubs, sports teams, and community service opportunities, allowing students to explore their interests and develop leadership skills.</p>
          <p>The faculty at George Rogers Clark High School is committed to providing personalized attention to each student, ensuring that they receive the guidance and support needed to succeed. Teachers often go above and beyond, creating engaging lesson plans that cater to different learning styles and encourage critical thinking.</p>
          <p>In addition to its academic and athletic programs, the school places a strong emphasis on community involvement. Students are encouraged to participate in local events, volunteer for various causes, and engage with the community to develop a sense of responsibility and civic duty. This commitment to service not only enriches the students' educational experience but also strengthens the bond between the school and the community.</p>
          <p>As George Rogers Clark High School looks to the future, it remains dedicated to its mission of fostering a nurturing and challenging environment where students can thrive. The school continues to adapt to the changing educational landscape, incorporating new technologies and teaching methods to prepare students for success in a rapidly evolving world.</p>
        </div>
        <div class="accomplishments">
          <h3>🏆 Accomplishments</h3>
          <p>The girls' basketball program at George Rogers Clark High School has achieved numerous accolades, including:</p>
          <ul class="accomplishment-list">
            <li>🏅 Regional Championship Titles: 20</li>
            <li>🏅 District Championship Titles: 30</li>
            <li>🏅 Multiple players named to All-State teams</li>
            <li>🏅 Consistent appearances in the state tournament</li>
            <li>🏅 Recognition for academic excellence among athletes</li>
            <li>🏅 Development of several players who went on to play at the collegiate level</li>
          </ul>
        </div>
        <div class="recent-success">
          <h3>🏅 Recent Success</h3>
          <div class="image-placeholder">
            <img src="@/assets/cc-committed.jpg" alt="Player's Image" />
          </div>
          <div class="text-box">
            <p>Congratulations to<strong> Ciara Byars</strong> on committing to <strong>THE UNIVERSITY OF MICHIGAN</strong>. Way to go CC!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerImage: '' // Initialize with an empty string or a default image URL
    };
  }
};
</script>

<style>
.container {
  display: flex; /* Flex container for layout */
  flex-direction: column; /* Stack title and content vertically */
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.page-title {
  text-align: center; /* Center the title */
  margin-bottom: 20px; /* Space below the title */
}

.content {
  display: flex; /* Flex container for content layout */
}

.player-history {
  flex: 1; /* College offers section takes up available space */
  margin-right: 20px; /* Space between college offers and right section */
}

.right-section {
  flex: 2; /* Right section takes up more space */
  display: flex;
  flex-direction: column; /* Stack school history and accomplishments */
}

.school-history, .accomplishments {
  border: 1px solid #2980b9; /* Border color */
  border-radius: 5px; /* Rounded corners */
  padding: 15px; /* Padding inside the border */
  margin-bottom: 20px; /* Space between sections */
}

.accomplishments {
  margin-top: 20px; /* Additional space above accomplishments */
}

.recent-success {
  flex: 1; /* Allow Recent Success to take up remaining space */
  display: flex;
  flex-direction: column; /* Stack title, image, and text box vertically */
}

.image-placeholder {
  width: 100%; /* Full width for the placeholder */
  height: 650px; /* Set a fixed height for the placeholder (adjust as needed) */
  background-color: #ecf0f1; /* Light gray background */
  display: flex; /* Center content */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  border: 1px dashed #2980b9; /* Dashed border for the placeholder */
  border-radius: 5px; /* Rounded corners */
}

.image-placeholder img {
  max-width: 100%; /* Ensure the image fits within the placeholder */
  max-height: 100%; /* Ensure the image fits within the placeholder */
  border-radius: 5px; /* Rounded corners for the image */
}

.text-box {
  margin-top: 10px; /* Space above the text box */
  padding: 10px; /* Padding inside the text box */
  border: 1px solid #2980b9; /* Border color for the text box */
  border-radius: 5px; /* Rounded corners for the text box */
  background-color: #ffffff; /* White background for the text box */
}

h1 {
  color: #2c3e50;
  font-size: 2.5em;
}

h3 {
  color: #2980b9;
  border-bottom: 2px solid #2980b9;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.college-offers, .accomplishment-list {
  padding-left: 20px;
}

li {
  background-color: #ecf0f1;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

li:hover {
  background-color: #bdc3c7;
}

p {
  line-height: 1.6;
  color: #34495e;
}
</style>
