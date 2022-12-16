class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let name = prompt("Enter a name?", "vanimar");
  try {
    let user = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Full Name: ${user.name}.`);
    return user;
  } catch (error) {
    alert("No such user, please reenter.");
    return demoGithubUser();
  }
}
demoGithubUser();
