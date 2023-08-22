import AppUrl from "./AppUrl";

export const REGISTRATION = (data) => {
    return fetch(AppUrl.REGISTRATION, {
        method: 'POST',
        body: data,
        // headers: { "Authorization": `Token ${token}` }
    }).then(response => response.json())
        .then(response => response)
        .catch(e => console.log(e, 'error'));
};

export const OTP = (data, token) => {
    return fetch(AppUrl.OTP, {
        method: 'POST',
        body: JSON.stringify(data), // Convert data to JSON
        headers: {
            "Authorization": token,
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(responseData => {
        return responseData; 
    })
    .catch(e => {
        console.log('Error fetching OTP:', e);
        throw e; 
    });
};

export const LOGIN = (data, token) => {
    return fetch(AppUrl.LOGIN, {
        method: 'POST',
        body: JSON.stringify(data), // Convert data to JSON
        headers: {
            "Authorization": token,
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(responseData => {
        return responseData; 
    })
    .catch(e => {
        console.log('Error fetching LOGIN:', e);
        throw e; 
    });
};

export const FORGOT = (email) => {
    console.log('URL---->', `${AppUrl.FORGOT + email}`);
    return fetch(`${AppUrl.FORGOT + email}`, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(responseData => {
        return responseData;
    })
    .catch(e => {
        console.log('Error fetching EMAIL:', e);
        throw e;
    });
};
