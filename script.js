document.addEventListener("DOMContentLoaded", function () {
  // Navigation
  const navLinks = document.querySelectorAll(".navigation a");
  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
  });

  // Scroll to connect button
  const connectButton = document.getElementById("connect");
  connectButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.open(this.getAttribute("href"), "_blank");
  });

  // Add projects descriptions
  const projectsDescriptions = [
      "Stop Watch using HTML, CSS, and JavaScript",
      "Landing Page Development",
      "Anime Website Design",
      "Motivational Quotes Website",
      "Tindog - Tinder for Dogs",
      "Drum Kit Simulation"
  ];
  const projects = document.querySelectorAll(".card-description p");
  projects.forEach((project, index) => {
      project.textContent = projectsDescriptions[index];
  });
});


$('img.card-img-top').hover(
  function () {
    $(this).css('opacity', '0.7');
  },
  function () {
    $(this).css('opacity', '1');
  }
);