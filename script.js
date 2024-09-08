// Select form elements
var form = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
var resumeContent = document.getElementById('resumeContent');
var generateResumeBtn = document.getElementById('generateResumeBtn');
// Function to generate resume from form data
function generateResume() {
    // Retrieve values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create resume content
    var resumeHTML = "\n        <div>\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        </div>\n\n        <div>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n        </div>\n\n        <div>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n        </div>\n\n        <div>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        </div>\n    ");
    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block';
}
// Add event listener to the generate resume button
generateResumeBtn.addEventListener('click', generateResume);


import { useRouter } from 'next/router';

export default function ResumePage() {
  const router = useRouter();
  const { username } = router.query;

  const resumeData = fetchResumeData(username);

  return (
    <div>
      <h1>{username}'s Resume</h1>
      <p>Name: {resumeData.name}</p>
      <p>Email: {resumeData.email}</p>
      <p>Phone: {resumeData.phone}</p>
      <p>Education: {resumeData.education}</p>
      <p>Experience: {resumeData.experience}</p>
      <p>Skills: {resumeData.skills}</p>
      {/* Button to download as PDF */}
      <button onClick={downloadResumeAsPDF}>Download as PDF</button>
    </div>
  );
}

import { jsPDF } from "jspdf";

function downloadResumeAsPDF() {
  const doc = new jsPDF();

  // Add resume content
  doc.text("Resume", 10, 10);
  doc.text(`Name: ${resumeData.name}`, 10, 20);
  doc.text(`Email: ${resumeData.email}`, 10, 30);
  doc.text(`Phone: ${resumeData.phone}`, 10, 40);
  doc.text(`Education: ${resumeData.education}`, 10, 50);
  doc.text(`Experience: ${resumeData.experience}`, 10, 60);
  doc.text(`Skills: ${resumeData.skills}`, 10, 70);

  // Save the PDF
  doc.save(`${resumeData.name}_resume.pdf`);
}

function shareResume() {
    if (navigator.share) {
      navigator.share({
        title: `${resumeData.name}'s Resume`,
        text: "Check out this resume",
        url: `${window.location.href}`,
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      alert("Sharing not supported on this browser");
    }
  }
  