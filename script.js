document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let service = document.getElementById("service").value;

        // Generate XML Data
        let xmlData = `<?xml version="1.0" encoding="UTF-8"?>
        <contact>
            <name>${name}</name>
            <email>${email}</email>
            <phone>${phone}</phone>
            <service>${service}</service>
        </contact>`;

        // Log XML data (for testing or sending to a server)
        console.log(xmlData);

        // Show confirmation message
        let confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.style.display = "block";
        confirmationMessage.textContent = "Thank you! Your inquiry has been submitted.";

        // Reset form fields
        document.getElementById("contactForm").reset();
    });
});
