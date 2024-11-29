function generateResume() {
    // Fetch input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const languages = document.getElementById('languages').value;
    const objective = document.getElementById('objective').value;
    const projects = document.getElementById('projects').value;
    const experience = document.getElementById('experience').value;
    const certifications = document.getElementById('certifications').value;
    const skills = document.getElementById('skills').value;

    // Update resume content
    document.getElementById('resName').innerText = name;
    document.getElementById('resPhone').innerText = `Phone: ${phone}`;
    document.getElementById('resEmail').innerText = `Email: ${email}`;
    document.getElementById('resDob').innerText = `Date of Birth: ${dob}`;
    document.getElementById('resAddress').innerText = `Address: ${address}`;
    document.getElementById('resLanguages').innerText = languages;
    document.getElementById('resObjective').innerText = objective;
    document.getElementById('resProjects').innerText = projects;
    document.getElementById('resExperience').innerText = experience;
    document.getElementById('resCertifications').innerText = certifications;
    document.getElementById('resSkills').innerText = skills;

    document.getElementById('resEducation').innerText = education;

    // Handle photo input
    const photoInput = document.getElementById('photo');
    if (photoInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('profilePic').src = event.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }

    // Show the resume
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('resumeContainer').style.display = 'flex';
}

function printResume() {
    // Hide form and print button before printing
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('printButton').style.display = 'none';

    window.print();

    // Restore form and button after printing
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('printButton').style.display = 'block';
}
