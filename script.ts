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

    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block';
}

// Add event listener to the generate resume button
generateResumeBtn.addEventListener('click', generateResume);


