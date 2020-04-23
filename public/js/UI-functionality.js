
    var individualBtn = document.getElementById("individual-form-btn"),
        organizationBtn = document.getElementById("organization-form-btn");
        openFormBtn = document.getElementById("open-form");

    openForm = document.getElementById("forms");
    introText = document.getElementById("introText");
    showIndvForm = document.getElementById("individual-form-div");
    showOrgForm = document.getElementById("organization-form-div");

    individualBtn.addEventListener("click", function () {
        organizationBtn.style.backgroundColor = 'rgb(188, 228, 255)'
        individualBtn.style.backgroundColor = 'rgb(14, 124, 187)'
        showIndvForm.style.visibility = 'visible';
        showOrgForm.style.visibility = 'hidden';
    }, false);

    organizationBtn.addEventListener("click", function () {
        individualBtn.style.backgroundColor = 'rgb(188, 228, 255)'
        organizationBtn.style.backgroundColor = 'rgb(14, 124, 187)'
        showIndvForm.style.visibility = 'hidden';
        showOrgForm.style.visibility = 'visible';
    }, false);

    openFormBtn.addEventListener("click", function () {
        openForm.style.display = 'block';
        introText.style.display = 'none';
    }, false);
