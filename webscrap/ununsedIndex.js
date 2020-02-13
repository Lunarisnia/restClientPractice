async function buttonOnClick() {
    let keyword = "users";
    processDatas(keyword);
}

function getUrl(keyword) {
    return `https://jsonplaceholder.typicode.com/${keyword}`;
}

function getData(keyword) {
    const URL = getUrl(keyword);

    const FETCH = fetch(URL)
        .then(response => response.json());

    return FETCH;
}

// to catch an error or the data when it succeed or fail
async function processDatas(keyword) {
    try {
        let data = await getData(keyword);
        let users = await getData("users");
        userDatas = users;   
        const METADATA = data;
        clearData();
        METADATA.forEach(meta => (displayData(meta, keyword)));
    } catch (e) {
        alert(e.message);
    }
}

function displayUserData(data) {
    document.getElementById('profileBox').innerHTML = "";
    const PROFILE_BOX = document.getElementById("profileBox");

    const HEADER = document.createElement("h1");
    HEADER.innerHTML = data.name;
    HEADER.id = "fullName";

    const EMAIL = document.createElement("p");
    const PHONE = document.createElement("p");
    const WEBSITE = document.createElement("p");
    EMAIL.id = 'profileBody'
    PHONE.id = 'profileBody'
    WEBSITE.id = 'profileBody'
    EMAIL.innerHTML = (`Email: ${data.email}`);
    PHONE.innerHTML = (`Phone: ${data.phone}`);
    WEBSITE.innerHTML = (`Website: ${data.website}`);

    PROFILE_BOX.appendChild(HEADER);
    PROFILE_BOX.appendChild(EMAIL);
    PROFILE_BOX.appendChild(PHONE);
    PROFILE_BOX.appendChild(WEBSITE);

    const DISPLAY = document.getElementById('dataDisplay');
    DISPLAY.appendChild(PROFILE_BOX)

}


function displayPost(data) {

    const POST_TITLE = document.createElement('h3');
    POST_TITLE.innerHTML = data.title;
    POST_TITLE.id = 'postHeader';
    const POST_BODY = document.createElement('p');
    POST_BODY.innerHTML = data.body;
    POST_BODY.id = 'postBody'

    const POST_HOLDER = document.getElementById('postHolder');
    POST_HOLDER.appendChild(POST_TITLE);
    POST_HOLDER.appendChild(POST_BODY);

}


function displayData(data, keyword) {
    switch (keyword) {
        case "users":
            const USER_NAME = document.createElement('button');
            USER_NAME.innerHTML = data.name;
            USER_NAME.id = "inspectUser";
            USER_NAME.value = data.name;
            USER_NAME.onclick = () => { displayUserData(data) };
            const BREAK = document.createElement('br');

            const USER_LIST = document.getElementById('lists');
            USER_LIST.appendChild(USER_NAME);
            USER_LIST.appendChild(BREAK);
            break;
        case "posts":
            // display the post title and its body later on
            displayPost(data);
            break;

    }
}

function clearData() {
    document.getElementById('postHolder').innerHTML = "";
    document.getElementById('lists').innerHTML = "";
    document.getElementById('profileBox').innerHTML = "";
}

buttonOnClick();