document.addEventListener("DOMContentLoaded", () => {
    const dynamicContent = document.getElementById("dynamic-content");

    document.getElementById("about-link").addEventListener("click", (e) => {
        e.preventDefault(); // Prevent page reload

        dynamicContent.innerHTML = `
            <h2>About Me</h2>
            <p>Hello! I am Rohann Venter, a passionate developer and technology enthusiast. 
            My goal is to specialize in C#, ASP.NET, and SQL, or advance further in Java development.</p>
            <p>I am currently a 3rd-year BSc IT student and a Route Checker In-Charge Flight Attendant.</p>
        `;
    });

    document.getElementById("experience-link").addEventListener("click", (e) => {
        e.preventDefault(); // Prevent page reload

        dynamicContent.innerHTML = `
            <h2>Experience</h2>
            <p>ASP.NET, SQL, C#</p>
        `;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("keydown", (e) => {
        if (e.key === "d") { // Press 'd' to toggle dark mode
            document.body.classList.toggle("dark-mode");
        }
    });
});