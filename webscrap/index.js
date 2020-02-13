async function displayPost() {
    try {
        const FETCH_POST = await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(postMeta => (postMeta.json()));
        const FETCH_USER = await fetch("https://jsonplaceholder.typicode.com/users")
            .then(userMeta => (userMeta.json()));

        processPost(FETCH_POST, FETCH_USER);
    }
    catch (e) {
        alert(e.message);
    }
}

function processPost(postData, userData) {
    console.log(userData);
    for (i = 0; i < postData.length; i++) {
        const POSTER = document.createElement('button');
        POSTER.id = "inspectUser";
        POSTER.onclick = (username) => {
            window.location.href=`userprofiles/${username.toElement.value}.html`
        };

        for (j = 0; j < userData.length; j++) {
            if (postData[i].userId == userData[j].id) {
                POSTER.innerHTML = `By: ${userData[j].name}`;
                POSTER.value = userData[j].username;
                break;
            }
        }

        const POST_TITLE = document.createElement('h3');
        POST_TITLE.innerHTML = postData[i].title;
        POST_TITLE.id = 'postHeader';

        const POST_BODY = document.createElement('p');
        POST_BODY.innerHTML = postData[i].body;
        POST_BODY.id = 'postBody'
 
        const POST_HOLDER = document.getElementById('postHolder');
        POST_HOLDER.appendChild(POSTER);
        POST_HOLDER.appendChild(POST_TITLE)
        POST_HOLDER.appendChild(POST_BODY);
    }
}

displayPost();