const baseUrl = "https://beatsource-app.herokuapp.com/";


export const showSong = () => {
    return fetch(`${baseUrl}/songs`)
    .then (resp => resp.json())
    .catch(e => e)
}

export const loginUser = (loginData) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({ auth: loginData }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${baseUrl}/user_token`, opts)
      .then(resp => resp.json())
      .catch(e => e)
  }
  
  export const registerUser = (registerData) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({ user: registerData }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    return fetch(`${baseUrl}/users`, opts)
      .then(resp => resp.json())
      .catch(e => e)
  }


// ---------------------- POST -------------------------

  export const addSong = (item) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    };
  
    return fetch(`${baseUrl}/songs/`, opts)
      .then(resp => resp.json())
      .catch(e => e)
  }



// ----------------- DESTROY -------------------


  export const destroySong = (id) => {
    const opts = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    }
  
    return fetch(`${baseUrl}/songs/${id}`, opts)
      .catch(e => e)
  }

  // ---------------- EDIT ---------------------------

  export const updateSong = (data) => {
    const opts = {
      method: 'PUT',
      body: JSON.stringify({song: data}),
      headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    }
    console.log(data)
    return fetch(`${baseUrl}/songs/${data.id}`, opts)
    .catch(e => e)
  }
    