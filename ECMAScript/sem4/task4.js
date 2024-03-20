// этот же код на fetch

const usersList = document.querySelector('users-list');
const sortingUsersList = (users) => {
    usersList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <h2>${user.name}</h2>
                <p>${user.email}</p>
            </div>     
        `
        usersList.append(listItem);
    });
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(data => {
        sortingUsersList(data);
        const sortEl = document.querySelector('.sort');
        sortEl.addEventListener('click', function(e) {
            sortUsersByName(data);
        });
    })
    .catch((error) => {
        // console.error('произошла ошибка ');
    });

const sortUsersByName = (users) => {
    const sortedUsers = users.sort((a, b) => {
        const nameB = b.name.toLowerCase();
        const nameA = a.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;

        }
        return 0;

    });
    sortingUsersList(sortedUsers);
}