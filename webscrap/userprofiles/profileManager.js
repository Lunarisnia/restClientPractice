
function getUser() {
    const FETCH_USER = fetch("https://jsonplaceholder.typicode.com/users")
        .then(userMeta => (userMeta.json()));

    return FETCH_USER;
}


async function displayData() {
    let data;
    try {
        data = await getUser();
    }
    catch (e) {
        alert(e.message);
    }
    finally {

        switch (window.location.pathname) {
            case "/userprofiles/Bret.html":
                displayProfileData(data, 1);
                break;

            case "/userprofiles/Antonette.html":
                displayProfileData(data, 2);
                break;

            case "/userprofiles/Samantha.html":
                displayProfileData(data, 3);
                break;

            case "/userprofiles/Karianne.html":
                displayProfileData(data, 4);
                break;

            case "/userprofiles/Kamren.html":
                displayProfileData(data, 5);
                break;

            case "/userprofiles/Leopoldo_Corkery.html":
                displayProfileData(data, 6);
                break;

            case "/userprofiles/Elwyn.Skiles.html":
                displayProfileData(data, 7);
                break;

            case "/userprofiles/Maxime_Nienow.html":
                displayProfileData(data, 8);
                break;

            case "/userprofiles/Delphine.html":
                displayProfileData(data, 9);
                break;

            case "/userprofiles/Moriah.Stanton.html":
                displayProfileData(data, 10);
                break;
        }

    }
}

function displayProfileData(data, id) {
    console.log(data);
    document.getElementById('profileBox').innerHTML = "";
    const PROFILE_BOX = document.getElementById("profileBox");

    const HEADER = document.createElement("h1");
    HEADER.innerHTML = data[id - 1].name;
    HEADER.id = "fullName";

    const EMAIL = document.createElement("p");
    const PHONE = document.createElement("p");
    const WEBSITE = document.createElement("p");
    EMAIL.id = 'profileBody'
    PHONE.id = 'profileBody'
    WEBSITE.id = 'profileBody'
    EMAIL.innerHTML = (`Email: ${data[id - 1].email}`);
    PHONE.innerHTML = (`Phone: ${data[id - 1].phone}`);
    WEBSITE.innerHTML = (`Website: ${data[id - 1].website}`);

    PROFILE_BOX.appendChild(HEADER);
    PROFILE_BOX.appendChild(EMAIL);
    PROFILE_BOX.appendChild(PHONE);
    PROFILE_BOX.appendChild(WEBSITE);

    const DISPLAY = document.getElementById('dataDisplay');
    DISPLAY.appendChild(PROFILE_BOX);
}

displayData()