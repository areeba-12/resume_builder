// Select form elements
const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;
const generateResumeBtn = document.getElementById('generateResumeBtn') as HTMLButtonElement;

// Function to generate resume from form data
function generateResume() {
    // Retrieve values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create resume content
    const resumeHTML = `
        <div>
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        </div>

        <div>
            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
        </div>

        <div>
            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>
        </div>

        <div>
            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        </div>
    `;
    const downloadLink = document.createElement('a')
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
    donwnloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Your 2024 Resume';
     const usernameElement = document.getElementaryById(
         "username"
         ) as HTMLInputElement;
    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.appendChild(downloadLink)
    resumeOutput.style.display = 'block';
    
}
// check if all form elements are present
if (
    nameElement &&
    emailElement &&
    phoneElement &&
    educationElement &&
    experienceElement &&
    skillsElement &&
    usernameElement &&
) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const username = usernameElement.value;
    const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`
}
// Add event listener to the generate resume button
generateResumeBtn.addEventListener('click', generateResume);


