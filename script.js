document.addEventListener("DOMContentLoaded", function() {
    const loginModule = document.getElementById("loginModule");
    const registerModule = document.getElementById("registerModule");
    const mainMenuModule = document.getElementById("mainMenuModule");
    const dashboardSection = document.getElementById("dashboardSection");
    const censusSection = document.getElementById("censusSection");
    const filesSection = document.getElementById("filesSection");
    const purokSection = document.getElementById("purokSection");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegisterForm = document.getElementById("showRegisterForm");
    const showLoginForm = document.getElementById("showLoginForm");
    const dashboardLink = document.getElementById("dashboardLink");
    const censusLink = document.getElementById("censusLink");
    const filesLink = document.getElementById("filesLink");
    const purokLink = document.getElementById("purokLink");
    const logoutLink = document.getElementById("logoutLink");
    const navbarToggle = document.getElementById("navbarToggle");
    const navbarMenu = document.getElementById("navbarMenu");
    const downloadAllBtn = document.getElementById("downloadAllBtn");


    // Hide login, register, and main menu modules initially
    loginModule.style.display = "none";
    registerModule.style.display = "none";
    mainMenuModule.style.display = "none";

    // Show login module as default
    loginModule.style.display = "block";

    // Hide other sections
    dashboardSection.style.display = "none";
    censusSection.style.display = "none";
    filesSection.style.display = "none";
    purokSection.style.display = "none";

    // Event listeners for showing/hiding login and register forms
    showRegisterForm.addEventListener("click", function(event) {
        event.preventDefault();
        loginModule.style.display = "none";
        registerModule.style.display = "block";
        mainMenuModule.style.display = "none";
        navbarMenu.classList.remove("show");
    });

    showLoginForm.addEventListener("click", function(event) {
        event.preventDefault();
        loginModule.style.display = "block";
        registerModule.style.display = "none";
        mainMenuModule.style.display = "none";
        navbarMenu.classList.remove("show");
    });

    // Login form submission event listener
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const position = document.getElementById("position").value;

        // Authenticate users
        if ((username === "admin" && password === "admin123" && position === "BrgyOfficial") ||
            (username === "secretary" && password === "secretary123" && position === "BrgySecretary")) {
            // Redirect to main menu
            mainMenuModule.style.display = "block";
            loginModule.style.display = "none";
            dashboardSection.style.display = "block"; // Display dashboard by default
            // Set user role for accessing system
            setUserRole("admin");
        } else if ((username === "treasurer" && password === "treasurer123" && position === "BrgyTreasurer") ||
                   (username === "councilor" && password === "councilor123" && position === "BrgyCouncilor")) {
            // Redirect to main menu
            mainMenuModule.style.display = "block";
            loginModule.style.display = "none";
            dashboardSection.style.display = "block"; // Display dashboard by default
            // Set user role for accessing system
            setUserRole("viewer");
        } else {
            console.log("Authentication failed");
            alert("Invalid username, password, or position.");
        }
    });

    // Register form submission event listener
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;
        const newPosition = document.getElementById("newPosition").value;

        // Clear registration form fields
        document.getElementById("newUsername").value = "";
        document.getElementById("newPassword").value = "";
        document.getElementById("newPosition").value = "";

        // Hide register module and show login module
        registerModule.style.display = "none";
        loginModule.style.display = "block";
    });

    // Event listeners for navigation links
    dashboardLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection("dashboardSection");
    });

    censusLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection("censusSection");
    });

    filesLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection("filesSection");
    });

    purokLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSection("purokSection");
    });

    logoutLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Perform logout
        // Redirect to login page
        window.location.href = "index.html";
    });

    // Function to show a particular section and hide others
    function showSection(sectionId) {
        const sections = mainMenuModule.querySelectorAll(".section");
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    // Function to toggle navbar menu
    navbarToggle.addEventListener("click", function() {
        navbarMenu.classList.toggle("show");
    });

    // Additional functionality for toggling current and previous content in the dashboard card
    const dashboardTitle = document.getElementById("dashboardTitle");
    const currentContent = document.getElementById("currentContent");
    const previousContent = document.getElementById("previousContent");
    const toggleContentButton = document.getElementById("toggleContentButton");

    // Hide previous content initially
    previousContent.style.display = "none";

    // Function to toggle between current and previous content
    toggleContentButton.addEventListener("click", function() {
        if (currentContent.style.display === "none") {
            // Show current content and hide previous content
            currentContent.style.display = "block";
            previousContent.style.display = "none";
            dashboardTitle.textContent = "Dashboard";
            toggleContentButton.textContent = "Show Previous";
        } else {
            // Show previous content and hide current content
            currentContent.style.display = "none";
            previousContent.style.display = "block";
            dashboardTitle.textContent = "Previous Dashboard";
            toggleContentButton.textContent = "Show Current";
        }
    });

    // Function to sort table alphabetically
    function sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("residentsTable");
        switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[0];
                y = rows[i + 1].getElementsByTagName("TD")[0];
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch= true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    // Function to open add resident modal
    function openAddResidentForm() {
        document.getElementById("addResidentModal").style.display = "block";
    }

    // Function to close add resident modal
    function closeAddResidentForm() {
        document.getElementById("addResidentModal").style.display = "none";
    }

    // Function to delete a resident
    function deleteResident() {
        // Implement delete functionality here
        console.log("Deleting resident...");
    }

    // Function to update a resident
    function updateResident() {
        // Implement update functionality here
        console.log("Updating resident...");
    }

    // Event listener for sorting the residents table
    document.getElementById("sortResidentsBtn").addEventListener("click", sortTable);

    // Event listener for opening the add resident modal
    document.getElementById("addResidentBtn").addEventListener("click", openAddResidentForm);

    // Event listener for closing the add resident modal
    document.getElementById("closeAddResidentModalBtn").addEventListener("click", closeAddResidentForm);

    // Event listener for deleting a resident
    document.querySelectorAll(".deleteResidentBtn").forEach(btn => {
        btn.addEventListener("click", deleteResident);
    });

    // Event listener for updating a resident
    document.querySelectorAll(".updateResidentBtn").forEach(btn => {
        btn.addEventListener("click", updateResident);
    });

    // Function to search for residents
    document.getElementById("searchInput").addEventListener("input", function() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("residentsTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0]; // Assuming the first column contains the resident's last name
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });

    // Functionality for downloading all files
    downloadAllBtn.addEventListener("click", function() {
        console.log("Downloading all files...");
        const docxFiles = [
            "FilesSectionsContent/RESIDENCY.docx",
            "FilesSectionsContent/INDIGENCY.docx",
            "FilesSectionsContent/CLEARANCE.docx",
            "FilesSectionsContent/BUSINESS_PERMIT.docx"
        ];

        function downloadFiles(files) {
            files.forEach(file => {
                const link = document.createElement('a');
                link.href = file;
                link.download = file.split('/').pop(); // Get filename from URL
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }

        downloadFiles(docxFiles);
    });

    // Function to set user role
    function setUserRole(role) {
        // Store the user role in sessionStorage or localStorage
        // Here, I'm using sessionStorage for simplicity
        sessionStorage.setItem("userRole", role);
    }
});
