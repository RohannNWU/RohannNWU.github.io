const dynamicContent = document.getElementById("dynamic-content");
const navLinks = document.querySelectorAll("nav a");

function loadAboutMe() {
    dynamicContent.innerHTML = `
        <img src="images/headshot.png" alt="Rohann Venter">
        <p></p>
        <h2>About Me</h2>
        <p>Hello World! My name is Rohann Venter, and I currently work as a Route Checker In-Charge Flight Attendant while pursuing my BSc in IT as a 3rd-year student.
        I’ve developed a diverse skill set over the years, including advanced proficiency in Microsoft Office, time management, project management, communication, and C# programming.
        I also have intermediate expertise in Java and am building my knowledge of SQL databases.</p>

        <p>Throughout my career, I’ve achieved significant milestones, including my promotion to In-Charge in February 2019 and securing the Route Checker position in February 2024.
        These experiences have honed my leadership and analytical skills, preparing me for my next goal—transitioning into the software development industry.</p>

        <p>I’m passionate about specializing in C#, ASP.NET, and SQL, or further advancing my skills in Java. Ultimately, I aim to become either a lead developer or a consulting developer,
        contributing to innovative projects that drive meaningful impact. I’m excited about the journey ahead and look forward to connecting with others who share similar goals and interests.</p>
    `;
    setActiveLink(document.getElementById("about-link"));
}

function loadExperience() {
    dynamicContent.innerHTML = `
        <h2>Experience</h2>
        <h3>In-Charge Route Check Flight Attendant</h3>
        <p>Safair Operations Pty (Ltd) t/a FlySafair&emsp;June 2017 - Present</p>
        <p></p>
        <p></p>
    `;
    setActiveLink(document.getElementById("experience-link"));
}

function loadSkills() {
    dynamicContent.innerHTML = `
        <h2>Skills</h2>
        <p></p>
    `;
    setActiveLink(document.getElementById("skills-link"));
}

function loadEducation() {
    dynamicContent.innerHTML = `
        <h2>Education</h2>
        <p></p>
    `;
    setActiveLink(document.getElementById("education-link"));
}

function loadContact() {
    dynamicContent.innerHTML = `
        <h2>Contact</h2>
        <p>
            <a href="https://www.linkedin.com/in/rohann-venter-67b39a136/" target="_blank">
                <img src="images/linkedin.png" style="max-width: 20px;">
                Rohann Venter
                </a>
        </p>

        <p>
            <a href="https://github.com/RohannNWU" target="_blank">
                <img src="images/github.png" style="max-width: 20px;">
                RohannNWU
            </a>
        </p>
    `;
    setActiveLink(document.getElementById("contact-link"));
}

function setActiveLink(activeLink) {
    navLinks.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}

window.addEventListener("DOMContentLoaded", loadAboutMe);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("about-link").addEventListener("click", (e) => {
        e.preventDefault();
        loadAboutMe();
    });

    document.getElementById("experience-link").addEventListener("click", (e) => {
        e.preventDefault();
        loadExperience();
    });

    document.getElementById("skills-link").addEventListener("click", (e) => {
        e.preventDefault();
        loadSkills();
    });

    document.getElementById("education-link").addEventListener("click", (e) => {
        e.preventDefault();
        loadEducation();
    });

    document.getElementById("contact-link").addEventListener("click", (e) => {
        e.preventDefault();
        loadContact();
    });
});

document.getElementById("darkIcon").addEventListener("click", function(e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");

    this.textContent = document.body.classList.contains("dark-mode") ? "Jedi" : "Sith";
});