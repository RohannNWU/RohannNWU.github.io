const dynamicContent = document.getElementById("dynamic-content");
const navLinks = document.querySelectorAll("nav a");

function loadAboutMe() {
    dynamicContent.innerHTML = `
        <img src="images/headshot.png" alt="Rohann Venter" style="box-shadow: 0 0 10px rgba(0,0,0,0.3);">
        <p></p>
        <h2>About Me</h2>
        <p>Hello World! My name is Rohann Venter.</p>

        <p>I currently reside in the Northern Suburbs of Cape Town.</p>
        
        <p>I am a full-time In-Charge Route Check Flight Attendant at South Africa's biggest low-cost airline, FlySafair.
        I have achieved significant milestones throughout my 8 year career, including a promotion to In-Charge Flight Attendant in February 2019 and achieving the
        Route Checker position in February 2024. I have almost 6000 flight hours on the Boeing 737, and I have had the opportunity to be witness of quite a handful 
        of experiences over the years. These experiences have helped me hone my leadership, especially in critically pressured environments, and analytical skills, 
        preparing me for my next goal — transitioning into the software development industry.</p>

        <p>I am currently a 3rd year BSc IT student at the North-West University. I have developed a great love for programming over the years and I have realised 
        that I am at my happiest behind the laptop developing little programs.</p>
        </br>
        <p>
            <a href="files/RVenter_Curriculum_Vitae.pdf" target="_blank">
                <img src="images/pdf.png" style="max-width: 20px;">
                Download my Curriculum Vitae
            </a>
        </p>
    `;
    setActiveLink(document.getElementById("about-link"));
}

function loadExperience() {
    dynamicContent.innerHTML = `
        <h2>Experience</h2>
        <div class="job-entry">
            <h3>In-Charge Route Check Flight Attendant</h3>
            <h4>Safair Operations Pty (Ltd) t/a FlySafair&nbsp;&nbsp;|&nbsp;&nbsp;June 2017 - Present</h4>
            <p>
                <ul class="aircraft">
                    <li>Promoted to In-Charge Flight Attendant in February 2019. Achieved Route Checker rank in February 2024.</li>
                    <li>Overall responsibility for conduct and coordination of normal and emergency cabin procedures</li>
                    <li>Conduct in-flight proficiency checks on company employed flight attendants</li>
                </ul
            </p>
            <h3>IT Assistant</h3>
            <h4>Hottentots-Holland High School&nbsp;&nbsp;|&nbsp;&nbsp;February 2017 - June 2017</h4>
            <p>
                <ul class="computer">
                    <li>Assisted with day-to-day workstation issues</li>
                    <li>Escalated serious issues to the service provider</li>
                    <li>Built PCs and added workstations to the network</li>
                </ul>
            </p>
        </div>
    `;
    setActiveLink(document.getElementById("experience-link"));
}

function loadSkills() {
    dynamicContent.innerHTML = `
        <h2>Skills</h2>
        <div class="job-entry">
            <p>
                <h3>General Skills</h3>
                <ul class="general">
                    <li>Leadership</li>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Time Management</li>
                    <li>Project Management</li>
                </ul>
            </p>
            <p>
                <h3>Programming Skills</h3>
                <div style="justify-items: center;">
                    <table style="table-layout: fixed;">
                        <tr>
                            <td style="width: 250px; height: 100px;">
                                <img src="images/asp.png" style="max-width: 100px;">
                            </td>
                            <td style="width: 250px; height: 100px;">
                                <img src="images/csharp.png" style="max-width: 100px;">
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 250px; height: 100px;">
                                <img src="images/mssql.png" style="max-width: 100px;">
                            </td>
                            <td style="width: 250px; height: 100px;">
                                <img src="images/python.png" style="max-width: 100px;">
                            </td>
                        <tr>
                        <tr>
                            <td style="width: 250px; height: 100px;">
                                <img src="images/java.png" style="max-width: 100px;">
                            </td>
                            <td style="width: 250px; height: 100px;">
                                <img src="images/oracle.png" style="max-width: 100px;">
                                </br>Oracle SQL Developer
                            </td>
                        </tr>
                    </table>
                </div>
            </p>
        </div>
    `;
    setActiveLink(document.getElementById("skills-link"));
}

function loadEducation() {
    dynamicContent.innerHTML = `
        <h2>Education</h2>
        <div class="job-entry">
            <h3>North-West University</h3>
            <h4>Bachelor of Science in Information Technology</h4>
            <h4>Graduation estimated 2025</h4>
            </br>
            <a href="files/AcademicReport.pdf" target="_blank">
                <img src="images/pdf.png" style="max-width: 15px;">
                View my University Academic Record
            </a>

            <h3>Cranfield Aviation Training</h3>
            <h4>Train-the-Trainer Course</h4>
            <h4>Completed November 2023</h4>

            <h3>Damelin</h3>
            <h4>Short Course in Project Management</h4>
            <h4>Completed in 2020</h4>
            
            <h3>Future Flyers Training Academy</h3>
            <h4>SACAA Cabin Crew License</h4>
            <h4>Completed October 2016</h4>

            <h3>Richards Bay High School</h3>
            <h4>Matriculated 2013</h4>
            <table class="marks-table">
                <tr>
                    <td>Afrikaans Home Language</td>
                    <td>72%</td>
                </tr>
                <tr>
                    <td>English First Additional Language</td>
                    <td>76%</td>
                </tr>
                <tr>
                    <td>Mathematics</td>
                    <td>80%</td>
                </tr>
                <tr>
                    <td>Life Orientation</td>
                    <td>68%</td>
                </tr>
                <tr>
                    <td>Engineering Graphics and Design</td>
                    <td>82%</td>
                </tr>
                <tr>
                    <td>Hospitality Studies</td>
                    <td>90%</td>
                </tr>
                <tr>
                    <td>Physical Sciences</td>
                    <td>58%</td>
                </tr>
            </table>
        </div>
    `;
    setActiveLink(document.getElementById("education-link"));
}

function loadProject() {
    dynamicContent.innerHTML = `
        <h2>My Projects</h2>
        <div class="container">
            <div class="dropdown-header" onclick="toggleDropdown('project1', 'icon1')">
                CMPG213 and CMPG 223 Group Project
                <i id="icon1" class="fas fa-chevron-down"></i>
            </div>
            <div id="project1" class="dropdown-content">
                <p>DVD Rental System</p>
                <p>GitHub Repo: <a href="https://github.com/JacquesNWU/CMPG223_Group10_DVD_Rental" target="_blank">visit site</a></p>
            </div>

            <div class="dropdown-header" onclick="toggleDropdown('project2', 'icon2')">
                Medical Appointment System
                <i id="icon2" class="fas fa-chevron-down"></i>    
            </div>
            <div id="project2" class="dropdown-content">
                <p>C# Windows Form and ASP.net Web Application</p>
                <p>Demo Video: 
                    <a href="files/Medical_Appointment_Demo_Video.zip" target="_blank" style="text-decoration: underline" download>
                    download
                    </a>
                </p>    
                <div style="justify-items: center;">
                    <table>
                        <tr>
                            <td>
                                <img src="images/BrightonMedical/Dashboard.png" style="max-width: 400px;">
                            </td>
                            <td>
                                <img src="images/BrightonMedical/EditAppointment.png" style="max-width: 400px;">
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="dropdown-header" onclick="toggleDropdown('project3', 'icon3')">
                Flight Crew Logbook
                <i id="icon3" class="fas fa-chevron-down"></i>
            </div>
            
            <div id="project3" class="dropdown-content">
                <p>
                    Designed with C# and ASP.net</br>
                    Developed in Visual Studio 2022
                </p>
                <p>
                    <img src="images/FlightCrewLogbook/dashboard.png" style="max-width: 600px;">
                </p>
            </div>
        </div>
    `;
    setActiveLink(document.getElementById("project-link"));
}

function loadContact() {
    dynamicContent.innerHTML = `
        <h2>Contact Me</h2>
        <div>
            <p>
                <a href="https://www.linkedin.com/in/rohann-venter-67b39a136/" target="_blank">
                    <img src="images/linkedin.png" style="max-width: 40px;">
                    </br>LinkedIn Profile - Rohann Venter
                    </a>
            </p>

            <p>
                <a href="https://github.com/RohannNWU" target="_blank">
                    <img src="images/github.png" style="max-width: 40px;">
                    </br>GitHub Page - RohannNWU
                </a>
            </p>

            <p>
                <a href="tel:+27605405568">
                    <img src="images/telephone.png" style="max-width: 40px; border-radius: 15px;">
                    </br>+27 60 540 5568
                </a>
            </p>

            <p>
                <a href="mailto:rohven21@gmail.com">
                    <img src="images/email.png" style="max-width: 40px;">
                    </br>rohven21@gmail.com
                </a>
            </p>
        </div>
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

    document.getElementById("project-link").addEventListener("click", (e) => {
        e.preventDefault();
        loadProject();
    });

    document.getElementById("contact-link").addEventListener("click", (e) => {
        e.preventDefault();
        loadContact();
    });
});

document.getElementById("darkIcon").addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");

    this.textContent = document.body.classList.contains("dark-mode") ? "Jedi" : "Sith";
});

function toggleDropdown(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);
    const isVisible = content.style.display === "block";

    content.style.display = isVisible ? "none" : "block";
    icon.classList.toggle("rotate", !isVisible);
}