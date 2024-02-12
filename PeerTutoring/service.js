function showService(service) {
    var serviceDetails = document.getElementById("service-details");
    switch (service) {
      case "math":
        serviceDetails.innerHTML = "<h2>Math Tutoring</h2><p>We offer one-on-one tutoring for students struggling with math. Our tutors are experienced in various math subjects including algebra, geometry, and calculus.</p><p>Price: <span class='price'>$50/hour</span></p>";
        break;
      case "science":
        serviceDetails.innerHTML = "<h2>Science Tutoring</h2><p>We provide personalized science tutoring to help students excel in subjects such as biology, chemistry, and physics.</p><p>Price: <span class='price'>$60/hour</span>";
        break;
      case "writing":
        serviceDetails.innerHTML = "<h2>Writing Help</h2><p>Our tutors can help students improve their writing skills by providing feedback on essays, research papers, and other written assignments.</p><p>Price: <span class='price'>$40/hour</span></p>";
        break;
      case "testprep":
        serviceDetails.innerHTML = "<h2>Test Prep</h2><p>We offer personalized test prep services to help students prepare for exams such as the SAT, ACT, and GRE. Our tutors provide individualized study plans and practice materials to help students succeed.</p><p>Price: <span class='price'>$70/hour</span></p>";
break;
default:
serviceDetails.innerHTML = "<p>Please select a service from the navigation menu.</p>";
break;
}
}